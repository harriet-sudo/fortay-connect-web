"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Quote,
  TrendingDown,
  Users,
  Clock,
  Target,
  CheckCircle2,
  Building2,
  Briefcase,
  Scale,
  Stethoscope,
  PoundSterling,
  Sparkles,
} from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import DecorativeCircle from "@/components/DecorativeCircle";

// --- Display enhancement layer -----------------------------------------------
// Each slug gets extra fields used only by the listing cards.
// Keeps /data/caseStudies.ts focused on detail-page content.

type CardDisplay = {
  sector: string;
  sectorColor: "teal" | "purple";
  outcomePill: string;
  stats: { label: string; value: string; icon: typeof Target }[];
  challenge: string;
  outcomeLine: string;
  quote: string;
  quoteAuthor: string;
  href: string;
  featured?: boolean;
};

const display: Record<string, CardDisplay> = {
  "ca-auto-finance": {
    sector: "Financial Services",
    sectorColor: "teal",
    outcomePill: "40% cost reduction",
    stats: [
      { label: "cost reduction", value: "40%", icon: TrendingDown },
      { label: "platforms consolidated", value: "3 to 1", icon: Target },
      { label: "audit to live", value: "6 weeks", icon: Clock },
    ],
    challenge:
      "Three disconnected communications platforms, rising licence costs, and a customer experience team operating without a single source of truth. Leadership needed consolidation without disruption to live lending operations.",
    outcomeLine:
      "A single, governed platform with measurable ROI from the first quarter.",
    quote:
      "Fortay Connect brought the discipline our transformation needed. Clear objectives, honest trade-offs, and a plan we could defend to the board.",
    quoteAuthor: "Head of Technology, CA Auto Finance",
    href: "/#testimonials",
    featured: true,
  },
  "your-world-recruitment-avaya": {
    sector: "Healthcare Staffing",
    sectorColor: "purple",
    outcomePill: "Global cloud migration",
    stats: [
      { label: "international markets", value: "Multi", icon: Users },
      { label: "platform unified", value: "1 CCaaS", icon: Target },
      { label: "IT overhead cut", value: "Major", icon: TrendingDown },
    ],
    challenge:
      "A dispersed international workforce running on fragmented on-premise telephony, with poor call-data visibility and limited cross-border collaboration.",
    outcomeLine:
      "Global teams collaborating on a single platform, with real-time dashboards and resilience for international growth.",
    quote:
      "We now have the operational resilience to grow internationally without adding complexity to our IT estate.",
    quoteAuthor: "IT Leadership, Your World Recruitment",
    href: "/case-studies/your-world-recruitment-avaya",
  },
  "garden-court-chambers-avaya": {
    sector: "Legal",
    sectorColor: "teal",
    outcomePill: "Resilient chambers comms",
    stats: [
      { label: "barristers supported", value: "200+", icon: Users },
      { label: "call routing", value: "Intelligent", icon: Target },
      { label: "downtime risk", value: "Near zero", icon: TrendingDown },
    ],
    challenge:
      "An outdated on-premise system without resilience or remote-working capability, struggling to meet the demands of London's largest barristers' chambers.",
    outcomeLine:
      "Flexible, professional communications that support clerks and barristers from any device, at any hour.",
    quote:
      "Our clerking team now has full control of communications, and our barristers can pick up client calls wherever they are working.",
    quoteAuthor: "Operations, Garden Court Chambers",
    href: "/case-studies/garden-court-chambers-avaya",
  },
  "esi-technologies-gotoconnect": {
    sector: "Engineering and Life Sciences",
    sectorColor: "purple",
    outcomePill: "Cloud UC transformation",
    stats: [
      { label: "countries unified", value: "UK and IE", icon: Users },
      { label: "international call cost", value: "Reduced", icon: TrendingDown },
      { label: "PBX retired", value: "Legacy off", icon: Target },
    ],
    challenge:
      "Ageing on-premise PBX infrastructure with rising maintenance costs, no integration with digital tools, and limits on cross-border collaboration.",
    outcomeLine:
      "One cloud platform for voice, video and messaging across Ireland and the UK, with reduced IT overhead.",
    quote:
      "The transition was seamless, and the commercial case stood up from day one of operation.",
    quoteAuthor: "IT Leadership, ESI Technologies",
    href: "/case-studies/esi-technologies-gotoconnect",
  },
  "paragon-law-gotoconnect": {
    sector: "Legal and Immigration",
    sectorColor: "teal",
    outcomePill: "Rapid remote enablement",
    stats: [
      { label: "order to live", value: "Weeks", icon: Clock },
      { label: "per-user model", value: "Monthly", icon: PoundSterling },
      { label: "video secure by default", value: "Yes", icon: CheckCircle2 },
    ],
    challenge:
      "A traditional office phone system forced into emergency mobile diversion during Covid-19, with no secure videoconferencing and no capability for document sharing.",
    outcomeLine:
      "A single monthly per-user model delivering voice, video and collaboration securely, from any device.",
    quote:
      "We had a detailed look at all the phone and video-calling systems available and GoTo was the best by a country mile.",
    quoteAuthor: "Thal Vasishta, Group CEO, Paragon Law",
    href: "/case-studies/paragon-law-gotoconnect",
  },
};

// --- Heroic CA Auto Finance record (not in /data/caseStudies.ts) -------------
// Listing-only; clicking navigates to the homepage testimonial band.

const heroCase = {
  slug: "ca-auto-finance",
  client: "CA Auto Finance",
  headline: "40% Cost Reduction, Three Platforms to One, Six Weeks to Live.",
  tagline:
    "A UK-based lender in the Cr\u00e9dit Agricole group consolidated a fragmented communications estate into a single, governed platform, with measurable ROI from the first quarter.",
  partner: "Platform-neutral advisory",
};

// --- Stat bar ----------------------------------------------------------------

const topStats = [
  { value: "200+", label: "UK organisations advised" },
  { value: "7", label: "core platforms we lead on" },
  { value: "\u00a3M+", label: "in supplier savings delivered" },
  { value: "98%", label: "client retention" },
];

// --- Sector filters ----------------------------------------------------------

const sectors = [
  { id: "all", label: "All", icon: Sparkles },
  { id: "financial", label: "Financial Services", icon: PoundSterling },
  { id: "legal", label: "Legal", icon: Scale },
  { id: "healthcare", label: "Healthcare and Staffing", icon: Stethoscope },
  { id: "engineering", label: "Engineering", icon: Briefcase },
];

const sectorMatch = (sector: string, filter: string) => {
  if (filter === "all") return true;
  const s = sector.toLowerCase();
  if (filter === "financial") return s.includes("financial");
  if (filter === "legal") return s.includes("legal");
  if (filter === "healthcare") return s.includes("healthcare") || s.includes("staffing");
  if (filter === "engineering") return s.includes("engineering");
  return true;
};

// --- Animation ---------------------------------------------------------------

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

// --- Card component ----------------------------------------------------------

const StandardCard = ({
  client,
  headline,
  d,
  idx,
}: {
  client: string;
  headline: string;
  d: CardDisplay;
  idx: number;
}) => {
  const isTeal = d.sectorColor === "teal";
  const accentText = isTeal ? "text-teal" : "text-purple";
  const accentBg = isTeal ? "bg-teal/10" : "bg-purple/10";
  const accentBorder = isTeal ? "border-teal/20" : "border-purple/20";

  return (
    <motion.article
      custom={idx}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/40 bg-card shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Dark header */}
      <div className="relative overflow-hidden bg-foreground px-6 pb-6 pt-7 text-white">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-teal/10 blur-2xl" aria-hidden="true" />
        <div className="absolute -left-10 -bottom-8 h-24 w-24 rounded-full bg-purple/15 blur-2xl" aria-hidden="true" />
        <div className="relative z-10 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              {client}
            </p>
            <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white md:text-xl">
              {headline}
            </h3>
          </div>
        </div>
        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          <span className={`rounded-full border ${accentBorder} ${accentBg} px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${accentText}`}>
            {d.sector}
          </span>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            {d.outcomePill}
          </span>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-0 border-b border-border/40 bg-muted/40">
        {d.stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center px-3 py-4 text-center">
            <s.icon className={`mb-1.5 h-4 w-4 ${accentText}`} strokeWidth={1.8} />
            <span className={`font-display text-base font-black leading-none ${accentText}`}>{s.value}</span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 px-6 py-6">
        <div>
          <p className={`mb-1.5 text-[10px] font-black uppercase tracking-widest ${accentText}`}>
            Challenge
          </p>
          <p className="text-sm leading-relaxed text-foreground/75">{d.challenge}</p>
        </div>

        <div className={`rounded-xl border ${accentBorder} ${accentBg} px-4 py-3`}>
          <p className={`mb-1 text-[10px] font-black uppercase tracking-widest ${accentText}`}>
            Outcome
          </p>
          <p className="text-sm font-semibold leading-snug text-foreground">{d.outcomeLine}</p>
        </div>

        <blockquote className="relative border-l-2 border-border pl-4">
          <Quote className="absolute -left-[11px] top-0 h-4 w-4 bg-card text-muted-foreground/60" strokeWidth={2} />
          <p className="text-sm italic leading-relaxed text-foreground/70">&ldquo;{d.quote}&rdquo;</p>
          <cite className="mt-2 block text-xs not-italic text-muted-foreground">
            {d.quoteAuthor}
          </cite>
        </blockquote>
      </div>

      {/* Footer CTA */}
      <Link
        href={d.href}
        className={`flex items-center justify-between border-t border-border/40 px-6 py-4 text-sm font-semibold transition-colors ${accentText} hover:bg-muted/50`}
      >
        Read the story
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
};

// --- Page --------------------------------------------------------------------

const CaseStudies = () => {
  const [filter, setFilter] = useState<string>("all");

  const standardCases = caseStudies.filter((cs) => sectorMatch(display[cs.slug]?.sector ?? "", filter));
  const showHero = filter === "all" || filter === "financial";

  return (
    <main>
      <PageHero
        category="Case Studies"
        icon={BookOpen}
        title="Real Transformations. Measurable Results."
        subtitle="UK organisations that redefined their communications, customer experience and AI with Fortay Connect."
      />

      {/* Top stat bar */}
      <section className="relative overflow-hidden bg-background">
        <div className="container -mt-10 mb-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {topStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border/50 bg-card px-5 py-5 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-black leading-none text-primary md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter row */}
      <section className="bg-background">
        <div className="container mb-10 flex flex-wrap items-center justify-center gap-2">
          {sectors.map((s) => {
            const active = filter === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setFilter(s.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors md:text-sm ${
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-sm"
                    : "border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                <s.icon className="h-3.5 w-3.5" strokeWidth={2} />
                {s.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Hero card (CA Auto Finance) */}
      {showHero && (
        <section className="relative overflow-hidden bg-background pb-12">
          <DecorativeCircle color="teal" variant="ring" className="-top-16 -right-10 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-teal/30 bg-foreground shadow-xl"
            >
              <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
                {/* Left, dark copy panel */}
                <div className="relative overflow-hidden px-8 py-10 md:px-12 md:py-14">
                  <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-teal/15 blur-3xl" aria-hidden="true" />
                  <div className="absolute -bottom-16 -right-10 h-40 w-40 rounded-full bg-purple/15 blur-3xl" aria-hidden="true" />
                  <div className="relative z-10">
                    <span className="inline-block rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-teal">
                      Featured story
                    </span>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-white/50">
                      {heroCase.client}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white md:text-4xl">
                      {heroCase.headline}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                      {heroCase.tagline}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-3">
                      {display["ca-auto-finance"].stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                        >
                          <s.icon className="mx-auto mb-1.5 h-4 w-4 text-teal" strokeWidth={1.8} />
                          <p className="font-display text-lg font-black leading-none text-teal md:text-xl">
                            {s.value}
                          </p>
                          <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/50">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={display["ca-auto-finance"].href}
                      className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-6 py-3 text-sm font-bold text-white shadow-lg shadow-teal/30 transition-all hover:brightness-110"
                    >
                      Read the full story
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                {/* Right, quote panel */}
                <div className="relative flex flex-col justify-center bg-gradient-to-br from-purple/30 via-foreground to-foreground px-8 py-10 md:px-12 md:py-14">
                  <Quote className="mb-4 h-8 w-8 text-teal/70" strokeWidth={1.5} />
                  <blockquote className="text-lg font-medium leading-relaxed text-white/90 md:text-xl">
                    &ldquo;{display["ca-auto-finance"].quote}&rdquo;
                  </blockquote>
                  <cite className="mt-6 block text-sm not-italic font-semibold text-teal">
                    {display["ca-auto-finance"].quoteAuthor}
                  </cite>

                  <div className="mt-8 flex flex-wrap gap-2">
                    <span className="rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-teal">
                      Financial Services
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
                      Platform consolidation
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Standard card grid */}
      <section className="relative overflow-hidden bg-background pb-20 pt-4">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -left-12 opacity-10" size="h-56 w-56" />

        <div className="container relative z-10">
          {standardCases.length === 0 ? (
            <div className="mx-auto max-w-md rounded-2xl border border-border/50 bg-card p-10 text-center">
              <p className="text-sm text-muted-foreground">
                No case studies in this sector yet. Try selecting &ldquo;All&rdquo;.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {standardCases.map((cs, i) => {
                const d = display[cs.slug];
                if (!d) return null;
                return (
                  <StandardCard
                    key={cs.slug}
                    client={cs.client}
                    headline={cs.headline}
                    d={d}
                    idx={i}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Teal CTA band */}
      <section className="relative overflow-hidden bg-teal py-14 text-white">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -right-10 opacity-20" size="h-56 w-56" />
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -left-14 opacity-30" size="h-64 w-64" />

        <div className="container relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-black leading-tight md:text-3xl">
              Facing a similar challenge?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
              Book a free audit. We listen, assess and tell you straight whether we can add value, before any commitment.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal shadow-lg transition-all hover:brightness-95"
            >
              Book your free audit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
            >
              Take the assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
