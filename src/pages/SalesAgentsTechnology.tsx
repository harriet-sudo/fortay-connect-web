"use client";

import Link from "next/link";
import SocialProofSection from "@/components/home/SocialProofSection";
import TrustedBySection from "@/components/TrustedBySection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Zap,
  Globe,
  Brain,
  LineChart,
  Monitor,
  ClipboardCheck,
  MessageSquare,
  Search,
  FileText,
  BarChart3,
  Mic,
  TrendingUp,
  Target,
  AlertTriangle,
  Eye,
  Scale,
  Megaphone,
  Package,
  Trophy,
} from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Hero context ─── */
const revenueDecisions = [
  "Discovery calls",
  "Demos",
  "Negotiations",
  "Renewals",
];

/* ─── The problem: signals missed ─── */
const missedSignals = [
  { icon: TrendingUp, label: "Pricing resistance" },
  { icon: Users, label: "Competitor mentions" },
  { icon: Target, label: "Buying intent shifts" },
  { icon: AlertTriangle, label: "Risk language" },
  { icon: Eye, label: "Stakeholder engagement gaps" },
];

const legacyMethods = [
  "Inconsistent CRM updates",
  "Selective call reviews",
  "Manual coaching notes",
  "Lagging pipeline indicators",
];

/* ─── What CI actually does ─── */
const ciCapabilities = [
  "Record and transcribe sales calls automatically",
  "Identify keywords, themes and sentiment",
  "Track competitor mentions",
  "Detect objection patterns",
  "Surface deal risk signals",
  "Extract next steps and commitments",
  "Sync insight directly into CRM",
];

/* ─── Real-time visibility ─── */
const visibilityInsights = [
  "Which deals show risk language",
  "Where pricing objections are increasing",
  "Which reps skip discovery questions",
  "Which messaging drives positive sentiment",
  "Where competitors are gaining traction",
];

/* ─── AI coaching ─── */
const coachingFeatures = [
  {
    icon: BarChart3,
    num: "01",
    title: "AI-Powered Sales Coaching",
    description:
      "Automatic scoring against sales frameworks, tracking talk-to-listen ratios, identifying missed qualification questions and highlighting upsell opportunities.",
    highlight: "Managers focus on improvement, not call searching. Reps improve faster.",
  },
  {
    icon: Globe,
    num: "02",
    title: "Competitive & Market Intelligence",
    description:
      "Capture competitor frequency trends, objection categories, feature comparison patterns and customer sentiment by segment from live conversations.",
    highlight: "Strategy becomes grounded in actual customer language.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Risk & Compliance Visibility",
    description:
      "AI flags non-compliant statements, risk-trigger phrases, inconsistent messaging and escalation signals, critical in regulated industries.",
    highlight: "Risk becomes visible before it becomes exposure.",
  },
  {
    icon: Monitor,
    num: "04",
    title: "CRM Integration Is Essential",
    description:
      "Call summaries, action points and insights sync automatically into Salesforce, HubSpot, Microsoft Dynamics, UC platforms and contact centre environments.",
    highlight: "No manual CRM entry. No missed updates. No reporting blind spots.",
  },
];

/* ─── Beyond sales: org-wide ─── */
const orgImpacts = [
  {
    icon: Megaphone,
    title: "Marketing",
    points: [
      "Real-world objection language",
      "Campaign validation",
      "Content gap identification",
    ],
  },
  {
    icon: Package,
    title: "Product",
    points: [
      "Feature demand patterns",
      "Customer friction themes",
      "Competitive feedback",
    ],
  },
  {
    icon: LineChart,
    title: "Leadership",
    points: [
      "Forecast validation",
      "Market sentiment visibility",
      "Revenue risk signals",
    ],
  },
];

/* ─── Revenue impact metrics ─── */
const businessImpacts = [
  { metric: "5–15%", label: "Lift in win rates" },
  { metric: "10–20%", label: "Improvement in forecast accuracy" },
  { metric: "30–50%", label: "Reduction in admin time per rep" },
  { metric: "↓", label: "New hire ramp time" },
  { metric: "↑", label: "Messaging consistency across teams" },
  { metric: "↑", label: "Early deal slippage detection" },
];

/* ─── Comparison ─── */
const traditionalItems = [
  "Manual note-taking",
  "Selective call reviews",
  "Lagging pipeline reporting",
  "Subjective coaching",
  "Incomplete CRM data",
];

const aiNativeItems = [
  "Automatic transcription and tagging",
  "Real-time deal risk detection",
  "Structured coaching analytics",
  "CRM-synced insights",
  "Organisation-wide intelligence visibility",
];

/* ─── Why Fortay ─── */
const whyFortayPoints = [
  "Platform-neutral technology advisory",
  "AI readiness assessment",
  "Secure integration into CRM and UC platforms",
  "Sales framework alignment",
  "Governance and compliance configuration",
  "Ongoing optimisation and reporting",
];

/* ─── CTA ─── */
const ctaExploring = [
  "Sales call analytics",
  "AI sales coaching tools",
  "Revenue intelligence platforms",
  "Automated call transcription",
  "CRM-integrated conversation insights",
  "Competitive conversation tracking",
];

/* ─── Transcript mockup ─── */
const salesTranscript = [
  { from: "rep", text: "You mentioned last quarter there were concerns about renewal pricing. Has anything changed?" },
  { from: "ai", text: "⚠️ Risk signal detected: Pricing objection pattern. 3rd mention across stakeholder group." },
  { from: "prospect", text: "We're evaluating two other platforms. The flexibility on contract terms will be decisive." },
  { from: "ai", text: "🏁 Competitor mention logged. Action: Surface win/loss analysis for similar deals." },
];

const SalesAgentsTechnologyPage = () => (
  <div className="min-h-screen bg-background">
    <main>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
        <div className="container relative z-10">
          <Link
            href="/technology"
            className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All Technology
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                <Trophy className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Conversational Intelligence
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              Turn Every Sales Conversation Into{" "}
              <span className="text-primary">Revenue Insight</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              Revenue is decided in conversations.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {revenueDecisions.map((p) => (
                <span key={p} className="rounded-full border border-background/10 bg-background/5 px-5 py-2 text-sm text-background/70 backdrop-blur-sm">
                  {p}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-background/60">
                The real intelligence, what was actually said, is rarely captured or analysed at scale. Conversational Intelligence changes that.
              </p>
              <p className="mt-3 font-display text-lg font-bold">
                This is not call recording. <span className="text-primary">It is revenue intelligence infrastructure.</span>
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="teal" asChild>
                <Link href="/assessment">
                  <ClipboardCheck className="mr-2 h-4 w-4" />
                  AI & CX Readiness Assessment
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustedBySection />

      {/* ═══════════ THE PROBLEM ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="purple" className="-top-28 -right-20 opacity-15" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10">
          <motion.div
            className="mb-12 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              The Problem
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Revenue Managed by Memory
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Legacy methods */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/40">Sales organisations rely on</p>
              <ul className="space-y-3">
                {legacyMethods.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/60" />
                    <span className="text-sm text-background/70">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-background/50">
                Without structured conversation analysis, forecasting becomes optimistic rather than informed.
              </p>
            </motion.div>
            {/* Critical signals missed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-destructive/70">Critical signals missed</p>
              <div className="space-y-3">
                {missedSignals.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 rounded-lg border border-background/10 bg-background/5 px-4 py-3">
                    <s.icon className="h-5 w-5 shrink-0 text-destructive" />
                    <span className="text-sm text-background/70">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT CI DOES + TRANSCRIPT MOCKUP ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -left-14 opacity-20" size="h-48 w-48" />
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Copy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                How it works
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                What Conversational Intelligence Actually Does
              </motion.h2>
              <motion.ul variants={fadeUp} className="mt-6 space-y-3">
                {ciCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp} className="mt-6 font-display text-lg font-bold text-foreground">
                Every conversation becomes <span className="text-primary">structured data.</span> Not just a recording.
              </motion.p>
            </motion.div>

            {/* Transcript mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl border border-border bg-foreground p-6">
                <div className="mb-4 flex items-center gap-2 border-b border-background/10 pb-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-background">Revenue Intelligence</span>
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-background/40">Live analysis</span>
                </div>
                <div className="space-y-3">
                  {salesTranscript.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "prospect" || msg.from === "rep" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs ${
                          msg.from === "ai"
                            ? "rounded-tl-md bg-background/10 text-background/80"
                            : msg.from === "rep"
                            ? "rounded-tr-md bg-primary/20 text-background/80"
                            : "rounded-tr-md bg-background/5 text-background/70"
                        }`}
                      >
                        {msg.from !== "ai" && (
                          <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-primary/60">
                            {msg.from === "rep" ? "Sales Rep" : "Prospect"}
                          </span>
                        )}
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Zap className="h-3 w-3" />
                    Real-time analysis · Risk detection · CRM sync
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ REAL-TIME VISIBILITY ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-12 -right-12 opacity-15" size="h-44 w-44" />
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Eye className="h-7 w-7 text-primary" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Real-Time Revenue Visibility
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              Instead of asking, "How did that call go?", you can see:
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {visibilityInsights.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 text-left">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 font-display text-xl font-bold text-foreground">
              Pipeline health becomes <span className="text-primary">evidence-based.</span>
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-sm text-muted-foreground">
              Leadership no longer relies solely on rep confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SocialProofSection />

      {/* ═══════════ COACHING + COMPLIANCE + CRM ═══════════ */}
      <section className="relative overflow-hidden py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -right-16 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Capabilities
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              From Coaching to Compliance
            </motion.h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {coachingFeatures.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <step.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-foreground">{step.title}</p>
                  <p className="mt-0.5 text-xs text-primary/80">{step.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BEYOND SALES ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" className="-top-24 -left-20 opacity-15" />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Organisation-wide
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Beyond Sales: Organisation-Wide Impact
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-background/50">
              Conversations become the organisation's most accurate feedback loop.
            </motion.p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-3">
            {orgImpacts.map((team, i) => (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-background/10 bg-background/5 p-7 backdrop-blur-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                    <team.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{team.title}</h3>
                </div>
                <ul className="space-y-2">
                  {team.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-background/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ REVENUE IMPACT ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-16 -left-12 opacity-15" size="h-44 w-44" />
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              By the numbers
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Revenue Intelligence by the Numbers
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              Revenue is shaped in conversation long before it appears in pipeline.
            </motion.p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessImpacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="font-display text-4xl font-extrabold text-primary">{item.metric}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mx-auto mt-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground">
              When conversation intelligence becomes embedded: coaching becomes objective, forecasting becomes evidence-based, CRM becomes accurate, pipeline becomes visible.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 font-display text-xl font-bold text-foreground">
              Revenue stops relying on confidence. <span className="text-primary">It starts relying on clarity.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-16 -right-16 opacity-15" size="h-48 w-48" />
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Traditional Sales Oversight vs AI-Native Revenue Intelligence
            </h2>
            <p className="mt-3 text-muted-foreground">
              One reports on revenue. <span className="font-semibold text-primary">The other understands it.</span>
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-destructive">Traditional Model</h3>
              <ul className="space-y-3">
                {traditionalItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/60" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-primary">AI-Native Model</h3>
              <ul className="space-y-3">
                {aiNativeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY FORTAY ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              Why us
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Fortay Connect?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
              We do not deploy isolated analytics tools. We architect revenue intelligence ecosystems.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-muted-foreground">
              We align conversational intelligence to commercial outcome. Not vanity metrics.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {whyFortayPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden bg-primary py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -right-16 opacity-30" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Turn Conversations Into Competitive Advantage?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-foreground/70">If you are exploring:</motion.p>
            <motion.ul variants={fadeUp} className="mx-auto mt-4 inline-flex flex-col items-start gap-2">
              {ctaExploring.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="mt-6 font-display text-xl font-bold text-foreground">
              Let's design it properly.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Conversational Intelligence Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="teal" size="lg">
                <Link href="/assessment" className="inline-flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4" />
                  AI & CX Readiness Assessment
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </div>
);

export default SalesAgentsTechnologyPage