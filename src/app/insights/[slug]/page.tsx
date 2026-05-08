import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleDetail, {
  type ArticleNavLink,
} from "@/pages/ArticleDetail";
import {
  getAllArticles,
  getAllArticleSlugs,
  getArticleBySlug,
  getRelatedArticles,
} from "@/sanity/data";

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    const fallbackTitle = params.slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      title: `${fallbackTitle} | Insights | Fortay Connect`,
    };
  }
  return {
    title: `${article.title} | Insights | Fortay Connect`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  // Build prev / next navigation from the full ordered list.
  const all = await getAllArticles();
  const idx = all.findIndex((a) => a.slug === params.slug);
  const prev: ArticleNavLink | undefined =
    idx > 0
      ? { slug: all[idx - 1].slug, title: all[idx - 1].title }
      : undefined;
  const next: ArticleNavLink | undefined =
    idx >= 0 && idx < all.length - 1
      ? { slug: all[idx + 1].slug, title: all[idx + 1].title }
      : undefined;

  // Related articles by tag overlap / shared category.
  const related = await getRelatedArticles(
    params.slug,
    (article as any).category,
    article.tags,
  );

  return (
    <ArticleDetail
      article={article}
      prevArticle={prev}
      nextArticle={next}
      related={related}
    />
  );
}
