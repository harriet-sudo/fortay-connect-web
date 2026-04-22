/**
 * One-off migration from the hard-coded src/data/*.ts files into Sanity.
 *
 * Usage:
 *   1. Create .env.local with your Sanity project details (see .env.local.example).
 *   2. Create a write token at https://www.sanity.io/manage
 *      Project > API > Tokens > "Add API token" > Editor role.
 *      Paste it into .env.local as SANITY_WRITE_TOKEN.
 *   3. From the repo root, run:  npm run sanity:migrate
 *
 * Re-runs are safe: documents are created with deterministic _id values
 * derived from slug, so running again will replace existing docs rather
 * than duplicating.
 */

// Env is loaded via `node --env-file=.env.local` (see package.json script).
import { createClient } from "@sanity/client";
import { caseStudies } from "../src/data/caseStudies";
import { articles } from "../src/data/articles";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN in .env.local.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// Convert "21st Jan 2026" or "7 June 2023" style dates to ISO.
function toIsoDate(input: string): string {
  const cleaned = input.replace(/(\d+)(st|nd|rd|th)/g, "$1");
  const parsed = new Date(cleaned);
  if (isNaN(parsed.getTime())) {
    console.warn(`Could not parse date: "${input}". Using today.`);
    return new Date().toISOString().slice(0, 10);
  }
  return parsed.toISOString().slice(0, 10);
}

// Convert a markdown string into a simple Portable Text array.
// This is a rough converter: paragraphs become blocks, ## headings
// become h2, ### become h3, and list items become bullet blocks.
// For anything richer, edit the imported article in Studio afterwards.
function markdownToPortableText(md: string): any[] {
  const blocks: any[] = [];
  const lines = md.split(/\r?\n/);
  let paragraph: string[] = [];

  function flushParagraph() {
    if (paragraph.length === 0) return;
    const text = paragraph.join(" ").trim();
    if (text) {
      blocks.push({
        _type: "block",
        _key: `block-${blocks.length}`,
        style: "normal",
        markDefs: [],
        children: [
          { _type: "span", _key: `span-${blocks.length}`, text, marks: [] },
        ],
      });
    }
    paragraph = [];
  }

  for (const line of lines) {
    if (line.startsWith("## ")) {
      flushParagraph();
      blocks.push({
        _type: "block",
        _key: `block-${blocks.length}`,
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: `span-${blocks.length}`,
            text: line.replace(/^##\s+/, ""),
            marks: [],
          },
        ],
      });
    } else if (line.startsWith("### ")) {
      flushParagraph();
      blocks.push({
        _type: "block",
        _key: `block-${blocks.length}`,
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: `span-${blocks.length}`,
            text: line.replace(/^###\s+/, ""),
            marks: [],
          },
        ],
      });
    } else if (line.match(/^[-*]\s+/)) {
      flushParagraph();
      blocks.push({
        _type: "block",
        _key: `block-${blocks.length}`,
        style: "normal",
        listItem: "bullet",
        level: 1,
        markDefs: [],
        children: [
          {
            _type: "span",
            _key: `span-${blocks.length}`,
            text: line.replace(/^[-*]\s+/, ""),
            marks: [],
          },
        ],
      });
    } else if (line.trim() === "") {
      flushParagraph();
    } else {
      paragraph.push(line);
    }
  }
  flushParagraph();
  return blocks;
}

async function migrateCaseStudies() {
  console.log(`Migrating ${caseStudies.length} case studies...`);
  const transaction = client.transaction();
  for (const cs of caseStudies) {
    const doc = {
      _id: `caseStudy-${cs.slug}`,
      _type: "caseStudy",
      client: cs.client,
      slug: { _type: "slug", current: cs.slug },
      industry: cs.industry,
      partner: cs.partner,
      date: toIsoDate(cs.date),
      headline: cs.headline,
      summary: cs.summary,
      about: cs.about,
      challenge: cs.challenge,
      solution: cs.solution,
      results: cs.results,
      tags: cs.tags,
      testimonial:
        cs.testimonial && cs.testimonialAuthor
          ? {
              quote: cs.testimonial,
              author: cs.testimonialAuthor.split(",")[0]?.trim(),
              authorTitle:
                cs.testimonialAuthor.split(",")[1]?.trim() ?? undefined,
              authorCompany:
                cs.testimonialAuthor.split(",")[2]?.trim() ?? undefined,
            }
          : undefined,
      isPublished: true,
    };
    transaction.createOrReplace(doc);
  }
  await transaction.commit();
  console.log(`Migrated ${caseStudies.length} case studies.`);
}

async function migrateArticles() {
  console.log(`Migrating ${articles.length} articles...`);
  // Commit in batches of 20 to avoid hitting transaction size limits.
  const batchSize = 20;
  for (let i = 0; i < articles.length; i += batchSize) {
    const batch = articles.slice(i, i + batchSize);
    const transaction = client.transaction();
    for (const a of batch) {
      const doc = {
        _id: `article-${a.slug}`,
        _type: "article",
        title: a.title,
        slug: { _type: "slug", current: a.slug },
        date: toIsoDate(a.date),
        category: "Blog",
        tags: a.tags,
        excerpt: a.excerpt,
        body: markdownToPortableText(a.body),
        isPublished: true,
      };
      transaction.createOrReplace(doc);
    }
    await transaction.commit();
    console.log(
      `  Batch ${Math.floor(i / batchSize) + 1}: ${batch.length} articles.`,
    );
  }
  console.log(`Migrated ${articles.length} articles.`);
}

async function main() {
  console.log(
    `Connecting to Sanity project "${projectId}" dataset "${dataset}"...`,
  );
  await migrateCaseStudies();
  await migrateArticles();
  console.log("Done. Check your Studio at /studio to verify.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
