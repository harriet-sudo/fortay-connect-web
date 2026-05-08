"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "@/sanity/image";
import type { RelatedArticle } from "@/sanity/data";

export type RelatedArticlesProps = {
  items: RelatedArticle[];
  /**
   * Optional fallback cover map keyed by slug, used when the Sanity
   * coverImage isn't set yet.
   */
  fallbackCovers?: Record<string, string>;
};

export default function RelatedArticles({
  items,
  fallbackCovers,
}: RelatedArticlesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="mt-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
          More news and insights
        </h2>
        <Link
          href="/insights"
          className="hidden text-sm font-semibold text-primary hover:underline sm:inline-flex"
        >
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((a) => {
          const sanityCover = a.coverImage
            ? urlFor(a.coverImage).width(800).height(450).fit("crop").auto("format").url()
            : undefined;
          const cover = sanityCover ?? fallbackCovers?.[a.slug];
          return (
            <Link
              key={a.slug}
              href={`/insights/${a.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                {cover ? (
                  <img
                    src={cover}
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-end bg-gradient-to-br from-navy via-purple-dark to-purple p-5 text-white">
                    <span className="font-display text-base font-semibold leading-snug line-clamp-3">
                      {a.title}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                {a.category && (
                  <span className="mb-2 inline-flex w-fit rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary">
                    {a.category}
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                  {a.title}
                </h3>
                {a.excerpt && (
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                    {a.excerpt}
                  </p>
                )}
                <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-semibold text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/insights"
          className="text-sm font-semibold text-primary hover:underline"
        >
          View all insights →
        </Link>
      </div>
    </section>
  );
}
