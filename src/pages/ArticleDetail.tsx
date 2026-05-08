"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Home,
  Linkedin,
  Facebook,
  Twitter,
  Link2,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ArticleData } from "@/data/articles";
import type { ArticleView, RelatedArticle } from "@/sanity/data";
import { urlFor } from "@/sanity/image";
import PortableTextBody from "@/components/PortableTextBody";
import NewsletterSignup from "@/components/NewsletterSignup";
import RelatedArticles from "@/components/RelatedArticles";
import { readingTimeFromBody } from "@/lib/readingTime";
import NotFound from "./NotFound";

// Local fallback cover image map. Used when an article was authored in
// the legacy src/data/articles.ts file and has no Sanity coverImage.
const imageMap: Record<string, string> = {
  "unified-communications-in-2026": "/assets/blog/uc-2026.jpg",
  "ai-in-legal-use-cases": "/assets/blog/legal-ai.jpg",
  "zoom-customer-experience-support-certification-fortay-connect-leads-the-uk":
    "/assets/blog/zoom-cx-cert.jpg",
  "can-ai-make-cx-more-human": "/assets/blog/ai-cx-emotion.jpg",
  "how-to-close-sales-deals-faster": "/assets/blog/close-sales.jpg",
  "sentiment-analysis-improve-customer-experience":
    "/assets/blog/sentiment-analysis.jpg",
  "chatbot-vs-virtual-agent": "/assets/blog/chatbot-vs-agent.jpg",
  "the-ai-meeting-assistant-landscape":
    "/assets/blog/ai-meeting-assistant.jpg",
  "zoom-ai-companion-productivity": "/assets/blog/zoom-ai-companion-new.jpg",
  "how-to-improve-omnichannel-customer-experience":
    "/assets/blog/omnichannel-cx.jpg",
  "ai-sales-analytics-decision-making": "/assets/blog/ai-sales-analytics.jpg",
  "how-to-boost-business-productivity-with-cx-tools":
    "/assets/blog/cx-productivity.jpg",
  "fortay-connect-zoom-platinum-partner": "/assets/blog/zoom-platinum.jpg",
  "key-factors-to-consider-when-choosing-a-uc-provider":
    "/assets/blog/uc-provider.jpg",
  "what-does-ai-companion-do-on-zoom": "/assets/blog/ai-companion-zoom.jpg",
  "end-of-contract-coming-soon-which-uc-provider-should-i-use":
    "/assets/blog/uc-contract.jpg",
  "the-rise-of-intelligent-customer-experience-hubs":
    "/assets/blog/cx-hubs.jpg",
  "navigating-telephony-in-microsoft-teams":
    "/assets/blog/teams-telephony.jpg",
  "your-world-recruitment-avaya-cloud-office":
    "/assets/blog/recruitment-cloud.jpg",
  "fortay-connect-ringcentral-gold-partner":
    "/assets/blog/ringcentral-gold.jpg",
  "fortay-connect-zoom-phone-competency": "/assets/blog/zoom-phone.jpg",
  "cloud-contact-centre": "/assets/blog/cloud-cc.jpg",
  "virtual-lunch-learn-avaya-ip-office-to-avaya-cloud-office":
    "/assets/blog/avaya-lunch.jpg",
  "mitel-and-ringcentral-virtual-lunch-and-learn":
    "/assets/blog/mitel-rc.jpg",
  "michelin-masterclass-with-ringcentral": "/assets/blog/michelin.jpg",
  "dtx-ucx-manchester": "/assets/blog/conference.jpg",
  "elevate-your-microsoft-investment-with-ringcentral":
    "/assets/logos/ringcentral.png",
  "first-class-trip-to-cloud": "/assets/blog/cloud-journey.jpg",
  "jonathan-palmer-race-day": "/assets/blog/race-day.jpg",
};

/** Markdown to JSX renderer used as a fallback for legacy articles. */
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const headers = line
        .split("|")
        .filter(Boolean)
        .map((h) => h.trim());
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(
          lines[i]
            .split("|")
            .filter(Boolean)
            .map((c) => c.trim()),
        );
        i++;
      }
      elements.push(
        <div key={`tbl-${i}`} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headers.map((h, j) => (
                  <th
                    key={j}
                    className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground"
                  >
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-border px-4 py-2 text-muted-foreground"
                    >
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={i}
          className="mt-8 mb-3 font-display text-xl font-bold text-foreground"
        >
          {renderInline(line.slice(4))}
        </h3>,
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="mt-10 mb-4 font-display text-2xl font-bold text-foreground"
        >
          {renderInline(line.slice(3))}
        </h2>,
      );
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul
          key={i}
          className="my-4 ml-6 list-disc space-y-2 text-muted-foreground"
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol
          key={i}
          className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground"
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item)}</li>
          ))}
        </ol>,
      );
      continue;
    }
    elements.push(
      <p
        key={i}
        className="my-4 leading-relaxed text-muted-foreground"
      >
        {renderInline(line)}
      </p>,
    );
    i++;
  }
  return elements;
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function formatDateLong(input: string): string {
  // Accepts ISO (YYYY-MM-DD) or human-readable strings. Falls back to
  // the raw value if parsing fails so existing markdown dates still
  // display.
  const d = new Date(input);
  if (isNaN(d.getTime())) return input;
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const Breadcrumb = ({ title }: { title: string }) => (
  <nav
    aria-label="Breadcrumb"
    className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
  >
    <Link
      href="/"
      aria-label="Home"
      className="inline-flex items-center hover:text-primary"
    >
      <Home className="h-4 w-4" />
    </Link>
    <ChevronRight className="h-4 w-4 text-primary/70" />
    <Link href="/insights" className="hover:text-primary">
      Insights
    </Link>
    <ChevronRight className="h-4 w-4 text-primary/70" />
    <span className="line-clamp-1 max-w-[60ch] text-foreground">{title}</span>
  </nav>
);

type ShareButtonsProps = {
  title: string;
  slug: string;
};

const ShareButtons = ({ title, slug }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);
  const url = useMemo(() => {
    if (typeof window === "undefined") {
      return `https://fortayconnect.com/insights/${slug}`;
    }
    return `${window.location.origin}/insights/${slug}`;
  }, [slug]);

  const enc = encodeURIComponent;
  const x = `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`;
  const fb = `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`;
  const li = `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be blocked; silently ignore.
    }
  }

  const iconCls =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground";

  return (
    <div className="flex items-center gap-2" aria-label="Share">
      <a
        href={x}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={iconCls}
      >
        <Twitter className="h-4 w-4" />
      </a>
      <a
        href={fb}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={iconCls}
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href={li}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={iconCls}
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        title={copied ? "Copied" : "Copy link"}
        className={iconCls}
      >
        <Link2 className="h-4 w-4" />
      </button>
    </div>
  );
};

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="rounded-md bg-primary px-2.5 py-0.5 text-xs font-bold uppercase text-primary-foreground">
    {tag}
  </span>
);

export type ArticleNavLink = {
  slug: string;
  title: string;
};

export type ArticleDetailProps = {
  article: ArticleData | ArticleView;
  prevArticle?: ArticleNavLink;
  nextArticle?: ArticleNavLink;
  related?: RelatedArticle[];
};

const ArticleDetail = ({
  article,
  prevArticle,
  nextArticle,
  related = [],
}: ArticleDetailProps) => {
  if (!article) return <NotFound />;

  const view = article as ArticleView;
  const isPortable = Boolean(view.isPortableText);
  const sanityCoverUrl = view.coverImage
    ? urlFor(view.coverImage).width(1600).fit("max").auto("format").url()
    : undefined;
  const fallbackImage = imageMap[article.slug];
  const heroImage = sanityCoverUrl ?? fallbackImage;
  const heroAlt = view.coverImage?.alt ?? article.title;
  const minutes = readingTimeFromBody(article.body, isPortable);
  const authorName = view.author?.name ?? "Fortay Connect";
  const authorLinkedIn = view.author?.linkedinUrl;

  return (
    <main className="pb-24">
      {/* Header band — slightly tinted to match the reference layout */}
      <header className="border-b border-border bg-muted/30">
        <div className="container max-w-6xl py-10 md:py-14">
          <Breadcrumb title={article.title} />

          {article.tags && article.tags.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <TagBadge key={t} tag={t} />
              ))}
            </div>
          )}

          <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          {/* Byline + share row */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              {view.author?.headshot && (
                <img
                  src={urlFor(view.author.headshot)
                    .width(80)
                    .height(80)
                    .fit("crop")
                    .auto("format")
                    .url()}
                  alt={authorName}
                  className="h-10 w-10 rounded-full object-cover"
                />
              )}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-foreground">
                    {authorName}
                  </span>
                  {authorLinkedIn && (
                    <a
                      href={authorLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${authorName} on LinkedIn`}
                      className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-[#0A66C2] text-white"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {formatDateLong(article.date)} ({minutes} min read)
                </span>
              </div>
            </div>

            <ShareButtons title={article.title} slug={article.slug} />
          </div>
        </div>
      </header>

      <article className="container max-w-6xl pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Hero image — capped at a 16:9 banner so it does not dominate */}
          {heroImage && (
            <div className="mx-auto mb-10 max-w-4xl overflow-hidden rounded-2xl border border-border">
              <div className="aspect-[16/9] w-full bg-muted">
                <img
                  src={heroImage}
                  alt={heroAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Body — kept narrower for readability (long lines hurt comprehension) */}
          <div className="mx-auto max-w-3xl">
            {isPortable ? (
              <PortableTextBody value={article.body} />
            ) : (
              renderMarkdown(article.body)
            )}

            {/* Audit CTA — placed immediately after the body while reader is engaged */}
            <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground">
                Find Out What Your CX Stack Is Costing You.
              </h2>
              <p className="mt-2 text-muted-foreground">
                We&apos;ll provide a free audit on your current setup and show
                you exactly where you&apos;re losing revenue.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Your Free CX Audit
              </Link>
            </div>
          </div>

          {/* Related articles — sit between the audit CTA and the newsletter so each ask has its own moment */}
          {related.length > 0 && (
            <RelatedArticles items={related} fallbackCovers={imageMap} />
          )}

          {/* Newsletter signup — final, lower-intent ask at the very end */}
          <div className="mx-auto max-w-3xl">
            <NewsletterSignup source={`article:${article.slug}`} />
          </div>

          {/* Prev / Next */}
          {(prevArticle || nextArticle) && (
            <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
              {prevArticle ? (
                <Link
                  href={`/insights/${prevArticle.slug}`}
                  className="group text-sm text-muted-foreground hover:text-primary"
                >
                  ← {prevArticle.title.slice(0, 50)}
                  {prevArticle.title.length > 50 ? "…" : ""}
                </Link>
              ) : (
                <div />
              )}
              {nextArticle ? (
                <Link
                  href={`/insights/${nextArticle.slug}`}
                  className="group text-right text-sm text-muted-foreground hover:text-primary"
                >
                  {nextArticle.title.slice(0, 50)}
                  {nextArticle.title.length > 50 ? "…" : ""} →
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </motion.div>
      </article>
    </main>
  );
};

export default ArticleDetail;
   {nextArticle.title.slice(0, 50)}
                  {nextArticle.title.length > 50 ? "…" : ""} →
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </motion.div>
      </article>
    </main>
  );
};

export default ArticleDetail;
