/**
 * Import the parsed Google Drive blog content into Sanity.
 *
 * Source: scripts/drive-blog-content.json (built by reading every .docx
 * in the marketing/Blogs/All blogs - Docs Drive folder).
 *
 * Each item becomes a Sanity `article` document with _id of
 * `article-{slug}`. Case studies are skipped (their schema is
 * structured differently — they need a separate import).
 *
 * Run: npm run sanity:import-drive
 */

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

type DriveItem = {
  fileId: string;
  fileName: string;
  type: string | null;
  slug: string | null;
  title: string | null;
  status: string | null;
  created: string | null;
  modified: string | null;
  metaDescription: string | null;
  url: string | null;
  body: string | null;
};

type Source = {
  generatedAt: string;
  count: number;
  items: DriveItem[];
};

const sourcePath = join(process.cwd(), "scripts", "drive-blog-content.json");
const source: Source = JSON.parse(readFileSync(sourcePath, "utf8"));

let nextKey = 0;
const k = () => `k${(nextKey++).toString(36)}${Math.random().toString(36).slice(2, 7)}`;

/**
 * Convert the natural-language body text exported from a HubSpot blog
 * .docx into Sanity Portable Text. The exported text has these
 * patterns:
 *   - Paragraphs separated by blank lines.
 *   - Headings appear as their own short, title-cased lines with no
 *     trailing punctuation, followed by a blank line.
 *   - Numbered list items render as `1\.  Heading` or `1. Heading`
 *     (the .docx export sometimes escapes the period). They typically
 *     act as section subheadings, not as a list.
 *   - Inline Markdown-style links: [text](url).
 *   - Bold: **text**.
 *   - HubSpot CTA shortcodes like `{{cta('...')}}` are stripped.
 */
function markdownishToPortableText(input: string): any[] {
  // Strip HubSpot shortcodes and trim trailing whitespace.
  const cleaned = input
    .replace(/\{\{cta\([^)]*\)\}\}/g, "")
    .replace(/\s+$/g, "");

  const paragraphs = cleaned.split(/\n[\t ]*\n/);
  const blocks: any[] = [];

  let i = 0;
  while (i < paragraphs.length) {
    const para = paragraphs[i].trim();
    if (!para) {
      i++;
      continue;
    }

    // Numbered subheading like "1\. Document Review and Analysis" or
    // "1. Document Review and Analysis". Common pattern in long-form
    // articles. Render as h3.
    const numberedMatch = para.match(/^(\d{1,2})\\?\.\s+([\s\S]+)$/);
    if (numberedMatch && !para.includes("\n") && para.length < 120) {
      blocks.push(headingBlock("h3", numberedMatch[2].trim()));
      i++;
      continue;
    }

    // Bare heading: short, no internal newlines, no trailing
    // sentence punctuation. We look at the first 70 chars and at
    // whether the next paragraph starts with a longer body line.
    if (
      !para.includes("\n") &&
      para.length <= 90 &&
      !/[.?!,;:]$/.test(para) &&
      paragraphs[i + 1] &&
      paragraphs[i + 1].trim().length > para.length
    ) {
      blocks.push(headingBlock("h2", para));
      i++;
      continue;
    }

    // Bullet list (markdown-style): consecutive `- ` lines.
    if (/^- /.test(para)) {
      const items = para.split("\n").filter((l) => /^- /.test(l));
      for (const item of items) {
        blocks.push(listItemBlock(item.replace(/^- /, ""), "bullet"));
      }
      i++;
      continue;
    }

    // Otherwise, treat as a normal paragraph (which may contain
    // multiple lines we collapse with spaces).
    const text = para.replace(/\n/g, " ");
    blocks.push(paragraphBlock(text));
    i++;
  }

  return blocks;
}

function headingBlock(style: "h2" | "h3" | "h4", text: string) {
  return {
    _type: "block",
    _key: k(),
    style,
    markDefs: [],
    children: [{ _type: "span", _key: k(), text, marks: [] }],
  };
}

function paragraphBlock(text: string) {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: k(),
    style: "normal",
    markDefs,
    children,
  };
}

function listItemBlock(text: string, listItem: "bullet" | "number") {
  const { children, markDefs } = parseInline(text);
  return {
    _type: "block",
    _key: k(),
    style: "normal",
    listItem,
    level: 1,
    markDefs,
    children,
  };
}

/**
 * Parse inline Markdown links and bold within a single line of text
 * into a Portable Text spans + markDefs structure.
 */
function parseInline(text: string): {
  children: any[];
  markDefs: any[];
} {
  const children: any[] = [];
  const markDefs: any[] = [];
  // Process links first by splitting on the link pattern so spans
  // pre-, link-, and post- can carry the right marks.
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > lastIndex) {
      pushTextWithBold(children, markDefs, text.slice(lastIndex, m.index));
    }
    const linkKey = k();
    markDefs.push({ _key: linkKey, _type: "link", href: m[2] });
    pushTextWithBold(children, markDefs, m[1], [linkKey]);
    lastIndex = linkRe.lastIndex;
  }
  if (lastIndex < text.length) {
    pushTextWithBold(children, markDefs, text.slice(lastIndex));
  }

  if (children.length === 0) {
    children.push({ _type: "span", _key: k(), text: "", marks: [] });
  }
  return { children, markDefs };
}

function pushTextWithBold(
  children: any[],
  _markDefs: any[],
  text: string,
  extraMarks: string[] = [],
) {
  // Split on bold pattern
  const boldRe = /\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  while ((m = boldRe.exec(text)) !== null) {
    if (m.index > lastIndex) {
      children.push({
        _type: "span",
        _key: k(),
        text: text.slice(lastIndex, m.index),
        marks: [...extraMarks],
      });
    }
    children.push({
      _type: "span",
      _key: k(),
      text: m[1],
      marks: ["strong", ...extraMarks],
    });
    lastIndex = boldRe.lastIndex;
  }
  if (lastIndex < text.length) {
    children.push({
      _type: "span",
      _key: k(),
      text: text.slice(lastIndex),
      marks: [...extraMarks],
    });
  }
}

function toIsoDate(input: string | null | undefined): string {
  if (!input) return new Date().toISOString().slice(0, 10);
  // Accept "16 January 2026", "16th January 2026", "2026-01-16", etc.
  const cleaned = input.replace(/(\d+)(st|nd|rd|th)/g, "$1");
  const d = new Date(cleaned);
  if (isNaN(d.getTime())) return new Date().toISOString().slice(0, 10);
  return d.toISOString().slice(0, 10);
}

function deriveExcerpt(item: DriveItem): string {
  if (item.metaDescription && item.metaDescription.length > 0) {
    return item.metaDescription.slice(0, 300);
  }
  // Fallback: first paragraph of the body.
  const firstPara = (item.body ?? "").split(/\n\s*\n/)[0]?.trim() ?? "";
  // Strip markdown link syntax for clean excerpt
  return firstPara.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").slice(0, 300);
}

async function main() {
  console.log(
    `Connecting to Sanity project "${projectId}" dataset "${dataset}"...`,
  );

  const items = source.items.filter((it) => it.body && it.slug);
  const articles = items.filter((it) => it.type !== "caseStudy");
  const caseStudies = items.filter((it) => it.type === "caseStudy");

  console.log(
    `\n${items.length} items with body. Importing ${articles.length} articles. Skipping ${caseStudies.length} case studies (need structured import).`,
  );

  let success = 0;
  let failed = 0;
  const failures: Array<{ slug: string; error: string }> = [];

  // Process in batches of 10 to be polite to the API and to commit
  // progress along the way.
  const batchSize = 10;
  for (let i = 0; i < articles.length; i += batchSize) {
    const batch = articles.slice(i, i + batchSize);
    const tx = client.transaction();
    for (const item of batch) {
      try {
        const body = markdownishToPortableText(item.body!);
        const doc = {
          _id: `article-${item.slug}`,
          _type: "article",
          title: item.title ?? "Untitled",
          slug: { _type: "slug", current: item.slug },
          date: toIsoDate(item.created),
          category: "Blog",
          tags: [] as string[],
          excerpt: deriveExcerpt(item),
          body,
          isPublished: item.status === "PUBLISHED",
        };
        tx.createOrReplace(doc);
      } catch (err: any) {
        failed += 1;
        failures.push({ slug: item.slug ?? "?", error: err?.message ?? String(err) });
      }
    }
    try {
      await tx.commit();
      success += batch.length - failures.filter((f) => batch.find((b) => b.slug === f.slug)).length;
      console.log(
        `Batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(articles.length / batchSize)} committed (${batch.length} docs).`,
      );
    } catch (err: any) {
      console.error(`Batch ${Math.floor(i / batchSize) + 1} failed:`, err?.message ?? err);
      for (const item of batch) {
        failures.push({ slug: item.slug ?? "?", error: err?.message ?? String(err) });
      }
      failed += batch.length;
    }
  }

  console.log(`\nDone. ${success} succeeded, ${failed} failed.`);
  if (failures.length > 0) {
    console.log("\nFailures:");
    for (const f of failures.slice(0, 20)) console.log(`  - ${f.slug}: ${f.error}`);
  }

  if (caseStudies.length > 0) {
    console.log(
      `\nNote: ${caseStudies.length} case studies skipped. Their structured fields (client, industry, partner, headline, summary, about, challenge, solution, results, testimonial) need to be filled in manually inside Studio at /studio. Slugs:`,
    );
    for (const cs of caseStudies) console.log(`  - ${cs.slug}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
