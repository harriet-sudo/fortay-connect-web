# Sanity CMS setup — handover

Sanity infrastructure has been scaffolded into this repo. This document walks you through the remaining steps you (or a developer) need to do locally to bring the CMS online.

Nothing is live yet. The site still builds against the hard-coded `src/data/*.ts` files because the data layer falls back automatically when Sanity isn't configured.

---

## What's been added

New files:

- `sanity.config.ts`, `sanity.cli.ts` at the repo root
- `src/sanity/env.ts` — env variable loading with safe defaults
- `src/sanity/client.ts` — Sanity fetch client
- `src/sanity/image.ts` — image URL builder
- `src/sanity/queries.ts` — all GROQ queries
- `src/sanity/structure.ts` — Studio sidebar layout
- `src/sanity/data.ts` — Sanity-first data access with local fallback
- `src/sanity/schemas/` — ten content schemas:
  - `caseStudy`, `article`, `industryPage`, `technologyPage`, `partnerPage`
  - `faq`, `testimonial`, `trustedByLogo`, `teamMember`, `siteSettings`, `seo`
- `src/app/studio/[[...tool]]/page.tsx` — embedded Studio at `/studio`
- `src/app/studio/layout.tsx` — Studio-specific layout
- `src/app/api/revalidate/route.ts` — on-demand revalidation webhook
- `scripts/migrate-to-sanity.ts` — one-off content migration script
- `.env.local.example` — template for env vars

Modified files:

- `package.json` — Sanity dependencies added, two new scripts (`sanity:migrate`, `typegen`)
- `next.config.mjs` — `cdn.sanity.io` added to image `remotePatterns`

---

## Step-by-step: bring Sanity online

### 1. Create your Sanity account

Go to https://www.sanity.io/login and sign up with your Fortay Connect email. The free plan is plenty for launch.

Once in, Sanity will ask you to create an organisation. Call it "Fortay Connect".

### 2. Install dependencies locally

From a Windows terminal (not OneDrive-mounted Linux), in the repo root:

```powershell
npm install
```

This resolves `sanity`, `@sanity/vision`, `@sanity/image-url`, `next-sanity`, `styled-components`, `@portabletext/react`, and `tsx` that were added to `package.json`.

> If `npm install` fails with `ERESOLVE` errors, add `--legacy-peer-deps`. The Sanity v3 stack is pinned to React 18 but some transitive deps complain.

### 3. Initialise the Sanity project

Still from your Windows terminal:

```powershell
npx sanity@3 init --env
```

Answer the prompts:

- **Login** — use the same email you signed up with
- **Create new project** — yes
- **Project name** — `Fortay Connect`
- **Dataset** — `production`, public reads
- **Output path** — press enter (keep current directory)
- **Template** — `Clean project with no predefined schemas`
- **TypeScript** — yes

When it finishes, Sanity will have written your project ID into `.env.local`. Open it and make it match the shape in `.env.local.example`:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=
SANITY_REVALIDATE_SECRET=
SANITY_WRITE_TOKEN=
```

### 4. Create a write token (for migration)

In Sanity: **Project > API > Tokens > Add API token**.

- Name: `migration-script`
- Permissions: **Editor**

Copy the token and paste it into `.env.local` as `SANITY_WRITE_TOKEN=...`.

Also generate a random string for `SANITY_REVALIDATE_SECRET` (any 32+ character random value — you can use `openssl rand -hex 32` or your password manager).

### 5. Launch Studio and verify the schemas loaded

```powershell
npm run dev
```

Open http://localhost:3000/studio. You should see the Fortay Connect Studio with sidebar sections for Case studies, Articles, Industry pages, etc. If it loads without errors, the schemas are wired.

### 6. Run the migration

With Studio working, migrate the existing hard-coded content:

```powershell
npm run sanity:migrate
```

This reads `src/data/caseStudies.ts` and `src/data/articles.ts` and writes the content into Sanity. The script uses deterministic IDs based on slug, so re-runs are safe.

Verify in Studio that all four case studies and all articles appeared under the correct sections.

> The article body markdown is converted to Portable Text as a rough pass. Check a couple of articles in Studio — nested lists, images, and callouts might need a manual tidy-up.

### 7. Wire the pages to the data layer

This is the part I stopped short of — because it requires refactoring the client components in `src/pages/` (CaseStudies.tsx, CaseStudyDetail.tsx, Insights.tsx, ArticleDetail.tsx) which are tightly coupled to the local data files.

The pattern to follow for each page:

**Before** — `src/app/case-studies/page.tsx`:

```tsx
import CaseStudies from "@/pages/CaseStudies";

export default function CaseStudiesPage() {
  return <CaseStudies />;
}
```

**After**:

```tsx
import CaseStudies from "@/pages/CaseStudies";
import { getAllCaseStudies } from "@/sanity/data";

export const revalidate = 60; // ISR: revalidate at most every 60s

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();
  return <CaseStudies caseStudies={caseStudies} />;
}
```

Then `src/pages/CaseStudies.tsx` needs to accept `caseStudies` as a prop instead of importing it directly:

```tsx
// Change this line:
import { caseStudies } from "@/data/caseStudies";
// To:
import { caseStudies as localCaseStudies, type CaseStudy } from "@/data/caseStudies";

// And update the component signature:
const CaseStudies = ({ caseStudies = localCaseStudies }: { caseStudies?: CaseStudy[] }) => {
  // ... rest of the component works unchanged
};
```

Do the same for:

- `src/app/case-studies/[slug]/page.tsx` + `src/pages/CaseStudyDetail.tsx` — use `getCaseStudyBySlug(slug)` and `getAllCaseStudySlugs()` for `generateStaticParams`
- `src/app/insights/page.tsx` + `src/pages/Insights.tsx` — use `getAllArticles()`
- `src/app/insights/[slug]/page.tsx` + `src/pages/ArticleDetail.tsx` — use `getArticleBySlug(slug)` and `getAllArticleSlugs()`

The data layer in `src/sanity/data.ts` returns the same shapes as the local data files, so the client components need minimal changes.

### 8. Set up the revalidation webhook

Once the pages are wired to Sanity, set up the webhook so publishing triggers a rebuild:

In Sanity: **Project > API > Webhooks > Create**.

- **URL**: `https://fortayconnect.com/api/revalidate` (or your Vercel preview URL for testing)
- **Trigger on**: Create, Update, Delete
- **Filter**: `_type in ["caseStudy", "article", "industryPage", "technologyPage", "partnerPage", "faq", "testimonial", "trustedByLogo", "teamMember", "siteSettings"]`
- **Projection**: `{"_type": _type, "slug": slug.current}`
- **Secret**: paste the same value as `SANITY_REVALIDATE_SECRET` from `.env.local`

Also add `SANITY_REVALIDATE_SECRET`, `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `NEXT_PUBLIC_SANITY_API_VERSION` to your Vercel project's environment variables so production can read them.

### 9. Invite marketing

Once you're happy with the Studio, invite teammates:

In Sanity: **Project > Members > Invite**.

Use the **Editor** role for marketing — they can edit and publish, but can't change schemas.

Send them:

- Studio URL: `https://fortayconnect.com/studio`
- Login link: whichever they prefer (Google, GitHub, or email/password)

### 10. Delete the local data fallbacks (optional, once confident)

After the pages are pulling from Sanity and content is verified:

- Delete `src/data/caseStudies.ts`
- Delete `src/data/articles.ts`
- Remove the fallback imports from `src/sanity/data.ts` and tidy up

Keep them around for a few weeks post-launch as a safety net.

---

## Known issues to clean up

### Pre-existing broken file: `src/app/insights/page.tsx`

When I ran `tsc` for verification, the only TypeScript error was:

```
src/app/insights/page.tsx(11,31): error TS1005: '(' expected.
```

The file is truncated mid-word on line 11:

```tsx
export default function Insigh
```

This was already broken before the Sanity setup — I didn't modify it. It needs to be completed to something like:

```tsx
export default function InsightsPage() {
  return <Insights />;
}
```

Fix this before your next production deploy.

### Package name cleanup

`package.json` still has `"name": "vite_react_shadcn_ts"` from the Lovable origin. Safe to rename to `fortay-connect` — it's cosmetic.

### Node.js version

The migration script uses Node's `--env-file` flag, which requires Node 20.6+. Check your local and Vercel Node versions:

```powershell
node --version
```

If below 20.6, either upgrade Node or add `dotenv` to the migration script.

---

## Where to go for help

- **Sanity docs**: https://www.sanity.io/docs
- **GROQ query reference**: https://www.sanity.io/docs/groq
- **next-sanity**: https://github.com/sanity-io/next-sanity
- **Portable Text rendering in React**: https://github.com/portabletext/react-portabletext

---

## Quick command reference

```powershell
# Start local dev (site + Studio at /studio)
npm run dev

# Run migration from local data to Sanity
npm run sanity:migrate

# Regenerate TypeScript types from schemas (optional)
npm run typegen

# Deploy the site to Vercel (uses your existing link)
npx vercel --prod
```
