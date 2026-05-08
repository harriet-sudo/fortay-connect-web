/**
 * Sanity-backed data access layer with graceful fallback to the
 * hard-coded src/data/*.ts files.
 *
 * When Sanity is configured (see isSanityConfigured), these helpers
 * fetch from Sanity. When it's not, or when a query errors, they
 * fall back to the local data files so the site keeps building.
 *
 * Once migration is complete and you're happy, you can delete the
 * src/data/*.ts files and the fallbacks below.
 */

import { client } from "./client";
import { isSanityConfigured } from "./env";
import {
  CASE_STUDIES_LIST_QUERY,
  CASE_STUDY_QUERY,
  CASE_STUDY_SLUGS_QUERY,
  ARTICLES_LIST_QUERY,
  ARTICLE_QUERY,
  ARTICLE_SLUGS_QUERY,
  RELATED_ARTICLES_QUERY,
} from "./queries";
import {
  caseStudies as localCaseStudies,
  type CaseStudy,
} from "../data/caseStudies";
import { articles as localArticles, type ArticleData } from "../data/articles";

// Normalise a Sanity caseStudy document to match the local CaseStudy shape,
// so the existing React components don't need to change.
function normaliseCaseStudy(doc: any): CaseStudy {
  return {
    slug: doc.slug ?? doc["slug"]?.current ?? "",
    client: doc.client ?? "",
    industry: doc.industry ?? "",
    partner: doc.partner ?? "",
    date: doc.date ?? "",
    headline: doc.headline ?? "",
    summary: doc.summary ?? "",
    tags: doc.tags ?? [],
    about: doc.about ?? "",
    challenge: doc.challenge ?? "",
    solution: doc.solution ?? "",
    results: doc.results ?? "",
    testimonial: doc.testimonial?.quote,
    testimonialAuthor: doc.testimonial
      ? [
          doc.testimonial.author,
          doc.testimonial.authorTitle,
          doc.testimonial.authorCompany,
        ]
          .filter(Boolean)
          .join(", ")
      : undefined,
  };
}

// Normalise a Sanity article document. Note: the local ArticleData.body
// is a markdown string, but Sanity stores portable text. We return the
// raw portable text as a JSON string here for the simplest integration.
// Downstream rendering uses @portabletext/react via PortableTextBody.
export type ArticleView = ArticleData & {
  isPortableText?: boolean;
  coverImage?: any;
  category?: string;
  author?: {
    name?: string;
    role?: string;
    headshot?: any;
    linkedinUrl?: string;
  };
};

export type RelatedArticle = {
  slug: string;
  title: string;
  date: string;
  category?: string;
  tags?: string[];
  excerpt?: string;
  coverImage?: any;
};

function normaliseArticle(doc: any): ArticleView {
  const isPortableText = Array.isArray(doc.body);
  return {
    slug: doc.slug ?? "",
    title: doc.title ?? "",
    date: doc.date ?? "",
    tags: doc.tags ?? [],
    excerpt: doc.excerpt ?? "",
    body: isPortableText ? JSON.stringify(doc.body) : (doc.body ?? ""),
    isPortableText,
    coverImage: doc.coverImage,
    category: doc.category,
    author: doc.author,
  };
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!isSanityConfigured) return localCaseStudies;
  try {
    const docs = await client.fetch(CASE_STUDIES_LIST_QUERY);
    if (!docs || docs.length === 0) return localCaseStudies;
    return docs.map(normaliseCaseStudy);
  } catch (err) {
    console.warn("[sanity] getAllCaseStudies failed, falling back:", err);
    return localCaseStudies;
  }
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  if (!isSanityConfigured) {
    return localCaseStudies.find((c) => c.slug === slug) ?? null;
  }
  try {
    const doc = await client.fetch(CASE_STUDY_QUERY, { slug });
    if (!doc) {
      return localCaseStudies.find((c) => c.slug === slug) ?? null;
    }
    return normaliseCaseStudy(doc);
  } catch (err) {
    console.warn("[sanity] getCaseStudyBySlug failed, falling back:", err);
    return localCaseStudies.find((c) => c.slug === slug) ?? null;
  }
}

export async function getAllCaseStudySlugs(): Promise<string[]> {
  if (!isSanityConfigured) return localCaseStudies.map((c) => c.slug);
  try {
    const rows = await client.fetch(CASE_STUDY_SLUGS_QUERY);
    if (!rows || rows.length === 0) return localCaseStudies.map((c) => c.slug);
    return rows.map((r: any) => r.slug).filter(Boolean);
  } catch {
    return localCaseStudies.map((c) => c.slug);
  }
}

export async function getAllArticles(): Promise<ArticleView[]> {
  if (!isSanityConfigured) return localArticles;
  try {
    const docs = await client.fetch(ARTICLES_LIST_QUERY);
    if (!docs || docs.length === 0) return localArticles;
    return docs.map(normaliseArticle);
  } catch (err) {
    console.warn("[sanity] getAllArticles failed, falling back:", err);
    return localArticles;
  }
}

export async function getArticleBySlug(
  slug: string,
): Promise<ArticleView | null> {
  if (!isSanityConfigured) {
    return localArticles.find((a) => a.slug === slug) ?? null;
  }
  try {
    const doc = await client.fetch(ARTICLE_QUERY, { slug });
    if (!doc) {
      return localArticles.find((a) => a.slug === slug) ?? null;
    }
    return normaliseArticle(doc);
  } catch (err) {
    console.warn("[sanity] getArticleBySlug failed, falling back:", err);
    return localArticles.find((a) => a.slug === slug) ?? null;
  }
}

export async function getRelatedArticles(
  slug: string,
  category: string | undefined,
  tags: string[] | undefined,
): Promise<RelatedArticle[]> {
  if (!isSanityConfigured) {
    // Local fallback: pick the next 3 articles after the current one by
    // tag overlap, then date.
    const t = new Set(tags ?? []);
    const scored = localArticles
      .filter((a) => a.slug !== slug)
      .map((a) => ({
        a,
        score: (a.tags ?? []).filter((tag) => t.has(tag)).length,
      }))
      .sort((x, y) => y.score - x.score)
      .slice(0, 3)
      .map(({ a }) => ({
        slug: a.slug,
        title: a.title,
        date: a.date,
        tags: a.tags,
        excerpt: a.excerpt,
      }));
    return scored;
  }
  try {
    const docs = await client.fetch(RELATED_ARTICLES_QUERY, {
      slug,
      category: category ?? "",
      tags: tags ?? [],
    });
    return (docs ?? []) as RelatedArticle[];
  } catch (err) {
    console.warn("[sanity] getRelatedArticles failed:", err);
    return [];
  }
}

export async function getAllArticleSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return localArticles.map((a) => a.slug);
  try {
    const rows = await client.fetch(ARTICLE_SLUGS_QUERY);
    if (!rows || rows.length === 0) return localArticles.map((a) => a.slug);
    return rows.map((r: any) => r.slug).filter(Boolean);
  } catch {
    return localArticles.map((a) => a.slug);
  }
}
