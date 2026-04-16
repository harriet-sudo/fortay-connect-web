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
  Phone,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Zap,
  Globe,
  Brain,
  LineChart,
  Monitor,
  ClipboardCheck,
  Video,
  MessageSquare,
  Search,
  FileText,
  Users,
  BarChart3,
  Mic,
  TrendingUp,
  Clock,
  Briefcase,
  Scale,
  Headphones,
} from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Hero insight pillars ─── */
const insightPillars = [
  "Commercial insight",
  "Customer friction",
  "Risk signals",
  "Product intelligence",
  "Revenue opportunity",
];

/* ─── Foundation features ─── */
const foundationFeatures = [
  { icon: Globe, label: "Global calling across countries and devices" },
  { icon: Video, label: "HD voice and video conferencing" },
  { icon: MessageSquare, label: "Instant team messaging" },
  { icon: Users, label: "Presence and availability visibility" },
  { icon: Monitor, label: "Mobile and desktop continuity" },
  { icon: ShieldCheck, label: "Secure cloud-based reliability" },
];

/* ─── Global connectivity ─── */
const globalCapabilities = [
  "International numbering and routing",
  "Local presence in multiple markets",
  "Centralised global management",
  "Seamless cross-border collaboration",
  "Consistent experience across time zones",
];

/* ─── AI features ─── */
const aiFeatures = [
  {
    icon: Mic,
    num: "01",
    title: "Automatic Call Recording & Transcription",
    description:
      "Every voice interaction can be automatically recorded, transcribed in real time, time-stamped and securely stored. Instantly searchable.",
    highlight: "No manual note-taking. No lost context. No memory dependency.",
  },
  {
    icon: FileText,
    num: "02",
    title: "AI Meeting Summaries & Action Capture",
    description:
      "AI generates instant meeting summaries, extracted action points, key theme highlights and follow-up prompts.",
    highlight: "Meetings end with clarity. Time spent writing notes disappears.",
  },
  {
    icon: Search,
    num: "03",
    title: "Intelligent Query & Organisational Search",
    description:
      "Query your communication layer: surface conversations mentioning pricing objections, compliance risk, renewal concerns or recurring product issues.",
    highlight: "Communication becomes structured data. Insight becomes accessible organisation-wide.",
  },
  {
    icon: Brain,
    num: "04",
    title: "Conversation Analytics & Insight",
    description:
      "AI surfaces sentiment trends, objection patterns, risk signals, performance insights and escalation indicators.",
    highlight: "Leadership sees what is actually happening, not just what is reported.",
  },
];

/* ─── Integration partners ─── */
const integrations = [
  "Microsoft Teams",
  "Salesforce",
  "HubSpot",
  "Slack",
  "Contact centre platforms",
  "ERP and core systems",
  "Calendar and productivity tools",
];

/* ─── Team impact areas ─── */
const teamImpacts = [
  {
    icon: TrendingUp,
    title: "Sales",
    points: [
      "Automatic call logging",
      "AI-generated summaries",
      "Objection trend visibility",
      "Faster follow-up execution",
    ],
    tagline: "More selling. Less admin.",
  },
  {
    icon: Headphones,
    title: "Customer Experience",
    points: [
      "Immediate conversation history",
      "Reduced repeat questioning",
      "Faster case resolution",
    ],
    tagline: "Better service. Lower handle time.",
  },
  {
    icon: Briefcase,
    title: "Operations",
    points: [
      "Pattern detection across conversations",
      "Reduced internal misalignment",
      "Faster decision cycles",
    ],
    tagline: "Less rework. More clarity.",
  },
  {
    icon: BarChart3,
    title: "Leadership",
    points: [
      "Searchable intelligence across all communications",
      "Early identification of risk and opportunity",
      "Faster strategic decision-making",
    ],
    tagline: "No waiting for reports.",
  },
  {
    icon: Scale,
    title: "Compliance & Risk",
    points: [
      "Secure recording and storage",
      "Audit-ready documentation",
      "Keyword monitoring",
      "Escalation alerts",
    ],
    tagline: "Risk becomes visible, and manageable.",
  },
];

/* ─── Comparison table ─── */
const traditionalItems = [
  "Separate voice, video and messaging tools",
  "Manual note-taking",
  "CRM updated inconsistently",
  "Insight trapped in inboxes",
  "Knowledge fragmented",
];

const aiNativeItems = [
  "One secure global platform",
  "Voice, video and messaging unified",
  "Automatic transcription and summarisation",
  "CRM-integrated communication",
  "Searchable organisational intelligence",
];

/* ─── Business impact ─── */
const businessImpacts = [
  { metric: "20–30 min", label: "Reclaimed per employee per day" },
  { metric: "↑", label: "CRM accuracy" },
  { metric: "↓", label: "Follow-up cycle time" },
  { metric: "↑", label: "Compliance oversight" },
  { metric: "↑", label: "Cross-team collaboration" },
  { metric: "↑", label: "Measurable productivity gains" },
];

/* ─── Why Fortay ─── */
const whyFortayPoints = [
  "Platform-neutral UCaaS advisory",
  "Global deployment strategy",
  "AI readiness assessment",
  "Secure configuration and governance",
  "Deep integration into CRM and collaboration tools",
  "Ongoing optimisation and reporting",
];

/* ─── CTA exploring ─── */
const ctaExploring = [
  "Cloud-based Unified Communications",
  "Global calling solutions",
  "Microsoft Teams telephony integration",
  "AI call recording and transcription",
  "Intelligent meeting summarisation",
  "CRM-integrated communication platforms",
];

/* ─── Meeting mockup ─── */
const meetingTranscript = [
  { from: "participant", text: "We need to revisit the renewal pricing, three clients have raised concerns this quarter" },
  { from: "ai", text: "📝 Action captured: Review renewal pricing strategy. Flagged: 3 client escalations this quarter." },
  { from: "participant", text: "Can we pull up the calls where pricing was mentioned?" },
  { from: "ai", text: "🔍 Found 14 conversations mentioning pricing objections in the last 30 days. Summary report generated." },
];

/* ─── Search query examples ─── */
const searchQueries = [
  "Show conversations mentioning pricing objections.",
  "Surface meetings discussing compliance risk.",
  "Find calls referencing renewal concerns.",
  "Highlight recurring product issues.",
];

const UnifiedCommunicationsTechnologyPage = () => (
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
                <Phone className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Unified Communications
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              Intelligent Connectivity That Turns Every Conversation Into{" "}
              <span className="text-primary">Insight</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              Voice. Video. Messaging. Secure. Global. Enterprise-grade.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="text-sm text-background/60">
                Most organisations treat communication as transient. Calls happen. Meetings end. Messages disappear. And the intelligence inside them vanishes with them.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-background/40">But inside those conversations sits:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {insightPillars.map((p) => (
                  <span key={p} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-bold">
                This is not telephony. <span className="text-primary">It is the intelligence layer of your organisation.</span>
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a UC Strategy Session
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

      {/* ═══════════ THE FOUNDATION ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -left-14 opacity-20" size="h-52 w-52" />
        <DecorativeCircle color="teal" variant="disc" className="-bottom-12 -right-10 opacity-10" size="h-40 w-40" />
        <div className="container">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              The Foundation
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              One Platform. Everywhere.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              No tool sprawl. No switching between platforms. No disconnected communication streams.
            </motion.p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {foundationFeatures.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-teal/15 bg-card p-6 transition-all hover:border-teal/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{f.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mx-auto mt-10 max-w-xl text-center font-display text-xl font-bold text-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            One environment. <span className="text-primary">Fully connected.</span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════ GLOBAL CONNECTIVITY ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" className="-top-24 -left-20 opacity-15" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Globe className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
                Global Connectivity Without Complexity
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-background/50">
                For organisations operating internationally, Unified Communications enables:
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-6 space-y-3">
                {globalCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-6 space-y-1">
                <p className="text-sm text-background/60">Your workforce becomes location-agnostic.</p>
                <p className="mt-2 text-sm font-bold text-primary">Operations remain controlled.</p>
              </motion.div>
            </motion.div>

            {/* Search query mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-background/10 pb-3">
                  <Search className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">Intelligent Search</span>
                </div>
                <div className="space-y-3">
                  {searchQueries.map((q, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl bg-background/5 px-4 py-3">
                      <Search className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" />
                      <span className="text-xs text-background/70 italic">{q}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Zap className="h-3 w-3" />
                    Structured data · Organisation-wide · Instant results
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ THE SHIFT ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-12 -left-12 opacity-15" size="h-44 w-44" />
        <div className="container">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              The Shift
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              From Connectivity to Intelligence
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              Connectivity is expected. Intelligence is the advantage.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-muted bg-muted/30 p-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Traditional UC</p>
                <p className="mt-2 text-sm text-foreground/80">Connects people.</p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">AI-Native UC</p>
                <p className="mt-2 text-sm text-foreground/80">Captures and activates what they say.</p>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 font-display text-xl font-bold text-foreground">
              Every call. Every meeting. Every message.{" "}
              <span className="text-primary">Recorded. Transcribed. Searchable. Actionable.</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      <SocialProofSection />

      {/* ═══════════ AI FEATURES ═══════════ */}
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
              AI-Embedded
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              AI Embedded Into Everyday Communication
            </motion.h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {aiFeatures.map((step, i) => (
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

      {/* ═══════════ MEETING MOCKUP & INTEGRATION ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="purple" className="-top-28 -right-20 opacity-15" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Meeting transcript mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-background/10 pb-3">
                  <Brain className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">AI Meeting Intelligence</span>
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-background/40">Live</span>
                </div>
                <div className="space-y-3">
                  {meetingTranscript.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === "participant" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs text-background/80 ${
                          msg.from === "participant"
                            ? "rounded-tr-md bg-primary/20"
                            : "rounded-tl-md bg-background/10"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Mic className="h-3 w-3" />
                    Real-time transcription · Action capture · Searchable intelligence
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Integration copy */}
            <motion.div className="order-1 md:order-2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Monitor className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
                Integration Is Non-Negotiable
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-background/50">
                We ensure seamless integration with:
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
                {integrations.map((item) => (
                  <span key={item} className="rounded-full border border-background/10 bg-background/5 px-4 py-2 text-xs font-medium text-background/70">
                    {item}
                  </span>
                ))}
              </motion.div>
              <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
                <p className="text-sm text-background/60">
                  Calls, transcripts and summaries sync automatically. No duplication. No toggle tax. No manual CRM updates.
                </p>
                <p className="mt-3 text-sm font-bold text-primary">
                  Communication becomes operationally embedded, not administratively burdensome.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ TIME RECLAIMED ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-16 -right-12 opacity-15" size="h-44 w-44" />
        <div className="container">
          <motion.div
            className="mx-auto mb-14 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Impact across teams
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Time Reclaimed Across the Organisation
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              AI-native Unified Communications impacts every team, not just CX or sales.
            </motion.p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamImpacts.map((team, i) => (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <team.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{team.title}</h3>
                </div>
                <ul className="space-y-2">
                  {team.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold text-primary">{team.tagline}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-20 -right-16 opacity-20" size="h-52 w-52" />
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Traditional Telephony vs AI-Native Unified Communications
            </h2>
            <p className="mt-3 text-muted-foreground">
              One connects conversations. <span className="font-semibold text-primary">The other activates them.</span>
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
              <h3 className="mb-6 font-display text-xl font-bold text-primary">AI-Native UC</h3>
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

      {/* ═══════════ BUSINESS IMPACT ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-24 -left-16 opacity-15" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Results
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              The Commercial Impact
            </h2>
            <p className="mt-3 text-background/50">
              When every employee reclaims even 20–30 minutes per day, the cumulative impact across the organisation is substantial.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessImpacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="rounded-2xl border border-background/10 bg-background/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="font-display text-4xl font-extrabold text-primary">{item.metric}</p>
                <p className="mt-2 text-sm text-background/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mx-auto mt-10 max-w-lg text-center font-display text-xl font-bold text-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Unified Communications becomes a <span className="text-primary">productivity multiplier.</span>
          </motion.p>
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
              We do not deploy phone systems. We architect intelligent communication ecosystems.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-muted-foreground">
              We align communications to commercial outcomes. Not just connectivity.
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
              Ready to Modernise How Your Organisation Communicates?
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
                  Book a Unified Communications Strategy Session
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

export default UnifiedCommunicationsTechnologyPage;