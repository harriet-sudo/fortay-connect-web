"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/articles";
import NotFound from "./NotFound";

// Import all blog images to map by slug
const imgUc2026 = "/assets/blog/uc-2026.jpg";
const imgLegalAi = "/assets/blog/legal-ai.jpg";
const imgZoomCxCert = "/assets/blog/zoom-cx-cert.jpg";
const imgAiCxEmotion = "/assets/blog/ai-cx-emotion.jpg";
const imgCloseSales = "/assets/blog/close-sales.jpg";
const imgSentiment = "/assets/blog/sentiment-analysis.jpg";
const imgChatbotAgent = "/assets/blog/chatbot-vs-agent.jpg";
const imgAiMeeting = "/assets/blog/ai-meeting-assistant.jpg";
const imgZoomAiCompanion = "/assets/blog/zoom-ai-companion-new.jpg";
const imgOmnichannel = "/assets/blog/omnichannel-cx.jpg";
const imgAiSales = "/assets/blog/ai-sales-analytics.jpg";
const imgCxProd = "/assets/blog/cx-productivity.jpg";
const imgZoomPlat = "/assets/blog/zoom-platinum.jpg";
const imgUcProvider = "/assets/blog/uc-provider.jpg";
const imgAiCompanion = "/assets/blog/ai-companion-zoom.jpg";
const imgUcContract = "/assets/blog/uc-contract.jpg";
const imgCxHubs = "/assets/blog/cx-hubs.jpg";
const imgTeams = "/assets/blog/teams-telephony.jpg";
const imgRecruitment = "/assets/blog/recruitment-cloud.jpg";
const imgRcGold = "/assets/blog/ringcentral-gold.jpg";
const imgZoomPhone = "/assets/blog/zoom-phone.jpg";
const imgCloudCc = "/assets/blog/cloud-cc.jpg";
const imgAvayaLunch = "/assets/blog/avaya-lunch.jpg";
const imgMitelRc = "/assets/blog/mitel-rc.jpg";
const imgConference = "/assets/blog/conference.jpg";
const imgMsRc = "/assets/logos/ringcentral.png";
const imgCloudJourney = "/assets/blog/cloud-journey.jpg";
const imgRaceDay = "/assets/blog/race-day.jpg";
const imgMichelin = "/assets/blog/michelin.jpg";

const imageMap: Record<string, string> = {
  "unified-communications-in-2026": imgUc2026,
  "ai-in-legal-use-cases": imgLegalAi,
  "zoom-customer-experience-support-certification-fortay-connect-leads-the-uk": imgZoomCxCert,
  "can-ai-make-cx-more-human": imgAiCxEmotion,
  "how-to-close-sales-deals-faster": imgCloseSales,
  "sentiment-analysis-improve-customer-experience": imgSentiment,
  "chatbot-vs-virtual-agent": imgChatbotAgent,
  "the-ai-meeting-assistant-landscape": imgAiMeeting,
  "zoom-ai-companion-productivity": imgZoomAiCompanion,
  "how-to-improve-omnichannel-customer-experience": imgOmnichannel,
  "ai-sales-analytics-decision-making": imgAiSales,
  "how-to-boost-business-productivity-with-cx-tools": imgCxProd,
  "fortay-connect-zoom-platinum-partner": imgZoomPlat,
  "key-factors-to-consider-when-choosing-a-uc-provider": imgUcProvider,
  "what-does-ai-companion-do-on-zoom": imgAiCompanion,
  "end-of-contract-coming-soon-which-uc-provider-should-i-use": imgUcContract,
  "the-rise-of-intelligent-customer-experience-hubs": imgCxHubs,
  "navigating-telephony-in-microsoft-teams": imgTeams,
  "your-world-recruitment-avaya-cloud-office": imgRecruitment,
  "fortay-connect-ringcentral-gold-partner": imgRcGold,
  "fortay-connect-zoom-phone-competency": imgZoomPhone,
  "cloud-contact-centre": imgCloudCc,
  "virtual-lunch-learn-avaya-ip-office-to-avaya-cloud-office": imgAvayaLunch,
  "mitel-and-ringcentral-virtual-lunch-and-learn": imgMitelRc,
  "michelin-masterclass-with-ringcentral": imgMichelin,
  "dtx-ucx-manchester": imgConference,
  "elevate-your-microsoft-investment-with-ringcentral": imgMsRc,
  "first-class-trip-to-cloud": imgCloudJourney,
  "jonathan-palmer-race-day": imgRaceDay,
};

/** Very lightweight markdown-to-JSX renderer (handles ##, ###, **, -, |, numbered lists) */
function renderMarkdown(md: string) {
  const lines = md.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // blank line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // table
    if (line.includes("|") && lines[i + 1]?.includes("---")) {
      const headers = line.split("|").filter(Boolean).map((h) => h.trim());
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").filter(Boolean).map((c) => c.trim()));
        i++;
      }
      elements.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headers.map((h, j) => (
                  <th key={j} className="border border-border bg-muted px-4 py-2 text-left font-semibold text-foreground">
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-4 py-2 text-muted-foreground">
                      {renderInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // headings
    if (line.startsWith("### ")) {
      elements.push(<h3 key={i} className="mt-8 mb-3 font-display text-xl font-bold text-foreground">{renderInline(line.slice(4))}</h3>);
      i++; continue;
    }
    if (line.startsWith("## ")) {
      elements.push(<h2 key={i} className="mt-10 mb-4 font-display text-2xl font-bold text-foreground">{renderInline(line.slice(3))}</h2>);
      i++; continue;
    }

    // unordered list
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 ml-6 list-disc space-y-2 text-muted-foreground">
          {items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    // numbered list
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={i} className="my-4 ml-6 list-decimal space-y-2 text-muted-foreground">
          {items.map((item, j) => <li key={j}>{renderInline(item)}</li>)}
        </ol>
      );
      continue;
    }

    // paragraph
    elements.push(<p key={i} className="my-4 leading-relaxed text-muted-foreground">{renderInline(line)}</p>);
    i++;
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Bold
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="rounded-md bg-primary px-2.5 py-0.5 text-xs font-bold uppercase text-primary-foreground">
    {tag}
  </span>
);

const ArticleDetail = ({ slug }: { slug: string }) => {
  // slug received via props
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const image = slug ? imageMap[slug] : undefined;
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : undefined;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : undefined;

  return (
    <>
      <main className="py-24">
        <article className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Back link */}
            <Link href="/insights" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Insights
            </Link>

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {article.tags.map((t) => <TagBadge key={t} tag={t} />)}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            {/* Meta */}
            <p className="mt-4 text-sm text-muted-foreground">
              by <span className="font-semibold text-foreground">Fortay Connect</span> | {article.date}
            </p>

            {/* Hero image */}
            {image && (
              <div className="mt-8 overflow-hidden rounded-2xl">
                <img src={image} alt={article.title} className="h-auto w-full object-cover" />
              </div>
            )}

            {/* Body */}
            <div className="mt-10">
              {renderMarkdown(article.body)}
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground">Find Out What Your CX Stack Is Costing You.</h2>
              <p className="mt-2 text-muted-foreground">We'll provide a free audit on your current setup and show you exactly where you're losing revenue.</p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book Your Free CX Audit
              </Link>
            </div>

            {/* Prev/Next */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-between">
              {prevArticle ? (
                <Link href={`/insights/${prevArticle.slug}`} className="group text-sm text-muted-foreground hover:text-primary">
                  ← {prevArticle.title.slice(0, 50)}{prevArticle.title.length > 50 ? "…" : ""}
                </Link>
              ) : <div />}
              {nextArticle ? (
                <Link href={`/insights/${nextArticle.slug}`} className="group text-right text-sm text-muted-foreground hover:text-primary">
                  {nextArticle.title.slice(0, 50)}{nextArticle.title.length > 50 ? "…" : ""} →
                </Link>
              ) : <div />}
            </div>
          </motion.div>
        </article>
      </main>
    </>
  );
};

export default ArticleDetail;
