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
  CheckCircle2,
  XCircle,
  Zap,
  Globe,
  Brain,
  LineChart,
  Monitor,
  ClipboardCheck,
  MessageSquare,
  FileText,
  BarChart3,
  Calendar,
  Mail,
  Phone,
  ArrowUpRight,
  Workflow,
  ShieldCheck,
  Lock,
  Users,
  Target,
  Layers,
  Settings,
  GitBranch,
  Cog,
} from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Hero workflow icons ─── */
const workflowSteps = [
  { icon: Phone, label: "Call" },
  { icon: FileText, label: "Transcript" },
  { icon: Monitor, label: "CRM" },
  { icon: Mail, label: "Email" },
  { icon: Calendar, label: "Calendar" },
  { icon: MessageSquare, label: "Slack" },
];

/* ─── Hidden cost items ─── */
const hiddenCosts = [
  "Reps spend 20–30% of their time on admin",
  "CRM fields remain incomplete",
  "Follow-ups depend on memory",
  "Meeting scheduling triggers email chains",
  "Insights sit in dashboards without action",
];

/* ─── Manual vs Intelligent comparison ─── */
const manualItems = [
  "Call ends",
  "Notes written",
  "CRM updated later",
  "Follow-up drafted manually",
  "Meeting scheduled via back-and-forth",
  "Insight trapped in transcript",
];

const intelligentItems = [
  "Call ends",
  "Summary auto-generated",
  "CRM updated instantly",
  "Follow-up drafted in your tone",
  "Calendar analysed and meeting booked",
  "Objection tagged for marketing",
];

/* ─── What it actually means ─── */
const automationCapabilities = [
  "Trigger actions automatically",
  "Update systems without manual input",
  "Route information to the right team",
  "Draft communication in your tone",
  "Book meetings intelligently",
  "Surface marketing insight from live conversations",
  "Activate multi-step workflows across systems",
];

/* ─── Real-world workflows ─── */
const realWorldWorkflows = [
  {
    icon: BarChart3,
    num: "01",
    title: "Sales Call → CRM → Follow-Up → Marketing Insight",
    description:
      "AI transcribes and summarises. Decision-makers and next steps extracted. CRM updates automatically. Follow-up email drafted in rep's tone. Meeting scheduled from calendar availability. Pricing objections tagged for marketing.",
    highlight: "Revenue workflow becomes autonomous.",
  },
  {
    icon: Calendar,
    num: "02",
    title: "AI-Suggested Meeting Scheduling",
    description:
      "AI analyses calendar availability, proposes optimal meeting slots, sends calendar invites, adjusts across time zones and confirms automatically.",
    highlight: "No back-and-forth.",
  },
  {
    icon: Target,
    num: "03",
    title: "Conversation → Marketing Intelligence",
    description:
      "AI analyses sales transcripts and extracts objection language, identifies content gaps, suggests FAQ updates and flags recurring product friction.",
    highlight: "Marketing becomes aligned to reality.",
  },
  {
    icon: Monitor,
    num: "04",
    title: "Agentic CRM Automation",
    description:
      "AI detects deal stage shifts, risk phrases, renewal signals and churn indicators, then automatically updates opportunity fields, creates internal tasks, sends Slack alerts and assigns next actions.",
    highlight: "Pipeline accuracy improves without rep dependency.",
  },
];

/* ─── Maturity levels ─── */
const maturityLevels = [
  {
    level: 1,
    title: "Experimentation",
    description: "Ad hoc prompts. Isolated tools. No integration.",
    active: false,
  },
  {
    level: 2,
    title: "Insight",
    description: "Transcriptions. Summaries. Dashboards. Manual follow-up.",
    active: false,
  },
  {
    level: 3,
    title: "Structured Automation",
    description: "Workflow triggers. CRM updates. Intelligent scheduling.",
    active: false,
  },
  {
    level: 4,
    title: "Agentic Execution",
    description: "Multi-step AI workflows operating across systems with governance.",
    active: true,
  },
];

/* ─── Governance ─── */
const governanceItems = [
  { icon: GitBranch, label: "Escalation frameworks" },
  { icon: Users, label: "Human-in-the-loop controls" },
  { icon: Lock, label: "Data security architecture" },
  { icon: FileText, label: "Audit logging" },
  { icon: ShieldCheck, label: "Role-based permissions" },
];

/* ─── Traditional vs Intelligent ─── */
const traditionalItems = [
  "Manual CRM updates",
  "Repetitive scheduling",
  "Human-dependent triggers",
  "Insight trapped in dashboards",
];

const aiNativeItems = [
  "Automated system updates",
  "AI-drafted communication",
  "Multi-step workflow execution",
  "Insight-triggered action",
];

/* ─── Commercial impact ─── */
const commercialImpacts = [
  { metric: "↓", label: "Administrative workload" },
  { metric: "↑", label: "CRM accuracy" },
  { metric: "↑", label: "Response cycle speed" },
  { metric: "↑", label: "Cross-team alignment" },
  { metric: "↓", label: "Operational friction" },
  { metric: "↑", label: "Forecasting reliability" },
];

/* ─── Why Fortay ─── */
const whyFortayPoints = [
  "Platform-neutral automation advisory",
  "AI maturity assessment",
  "Integration architecture across CRM, UC and contact centre",
  "Governance and compliance framework design",
  "Ongoing optimisation and reporting",
];

/* ─── Workflow animation ─── */
const workflowNodes = [
  { icon: MessageSquare, label: "Conversation" },
  { icon: Brain, label: "AI Engine" },
  { icon: Monitor, label: "CRM" },
  { icon: Calendar, label: "Calendar" },
  { icon: Mail, label: "Email" },
  { icon: MessageSquare, label: "Slack" },
  { icon: BarChart3, label: "Reporting" },
];

const AIAutomationTechnologyPage = () => (
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
                <Workflow className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                AI & Automation
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              Intelligent Workflows That{" "}
              <span className="text-primary">Execute</span> Not Just Analyse
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              AI without orchestration creates noise. AI with structured automation creates leverage.
            </motion.p>

            {/* Animated workflow line */}
            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-0 overflow-x-auto rounded-xl border border-background/10 bg-background/5 p-4 backdrop-blur-sm">
              {workflowSteps.map((step, i) => (
                <div key={step.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                      <step.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-[10px] text-background/50">{step.label}</span>
                  </motion.div>
                  {i < workflowSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                      className="mx-1 h-px w-6 origin-left bg-primary/40 sm:w-10"
                    />
                  )}
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-bold">
                This is not surface-level AI. <span className="text-primary">It is execution infrastructure.</span>
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

      {/* ═══════════ HIDDEN COST ═══════════ */}
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
              The Hidden Cost
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              The Hidden Cost of Manual Workflows
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/40">Across revenue, operations & CX teams</p>
              <ul className="space-y-3">
                {hiddenCosts.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/60" />
                    <span className="text-sm text-background/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* ROI stat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
            >
              <Cog className="mb-4 h-10 w-10 text-primary/60" />
              <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-4">Capacity reclaimed</p>
              <motion.p
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl font-extrabold text-primary"
              >
                6,000+
              </motion.p>
              <p className="mt-2 text-lg font-semibold text-background/80">hours per year</p>
              <p className="mt-3 text-sm text-background/50">
                If 75 employees reclaim just 30 minutes per day
              </p>
              <div className="mt-6 rounded-xl border border-background/10 bg-background/5 px-5 py-3">
                <p className="text-sm font-medium text-background/70">
                  Automation is not about efficiency.{" "}
                  <span className="text-primary">It is about reclaiming capacity at scale.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ MANUAL VS INTELLIGENT ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -left-14 opacity-20" size="h-48 w-48" />
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Manual Workflow vs Intelligent Automation
            </h2>
            <p className="mt-4 text-muted-foreground">
              One produces tasks. The other completes them.
            </p>
          </motion.div>
          <div className="grid gap-0 md:grid-cols-2">
            {/* Manual side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-l-2xl border border-border bg-muted/30 p-8"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Manual</p>
              <ul className="space-y-3">
                {manualItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/50" />
                    <span className="text-sm text-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* Intelligent side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-r-2xl border border-primary/20 bg-primary/5 p-8"
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Intelligent</p>
              <ul className="space-y-3">
                {intelligentItems.map((item) => (
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

      {/* ═══════════ WHAT IT MEANS ═══════════ */}
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
              <Zap className="h-7 w-7 text-primary" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What Intelligent Automation Actually Means
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              Not just analyse. <strong className="text-foreground">Execute.</strong>
            </motion.p>
          </motion.div>
          <motion.div
            className="mx-auto mt-10 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {automationCapabilities.map((cap) => (
              <motion.div key={cap} variants={fadeUp} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground/80">{cap}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ REAL-WORLD WORKFLOWS ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-16 -right-14 opacity-15" size="h-44 w-44" />
        <div className="container">
          <motion.div
            className="mb-12 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              In Practice
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Real-World Intelligent Workflow Examples
            </h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {realWorldWorkflows.map((wf, i) => (
              <motion.div
                key={wf.num}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-start gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/30"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <wf.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold text-foreground">{wf.title}</p>
                  <p className="mt-0.5 text-xs text-primary/80">{wf.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SocialProofSection />

      {/* ═══════════ WORKFLOW MAP ═══════════ */}
      <section className="border-y border-border bg-foreground py-16 text-background">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-8 text-center font-display text-xl font-bold text-background/70"
          >
            Automation Architecture Flow
          </motion.h3>
          <div className="flex items-center justify-center gap-0 overflow-x-auto py-4">
            {workflowNodes.map((node, i) => (
              <div key={node.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-background/10 bg-background/5">
                    <node.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-medium text-background/50">{node.label}</span>
                </motion.div>
                {i < workflowNodes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.3 }}
                    className="mx-1 flex items-center"
                  >
                    <div className="h-px w-6 bg-primary/30 sm:w-10" />
                    <ArrowRight className="h-3 w-3 text-primary/40" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MATURITY LADDER ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-16 -left-16 opacity-15" size="h-52 w-52" />
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              AI Maturity: Where Do You Sit?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Most organisations sit between Level 1 and Level 2. Market leaders are building toward Level 4.
            </p>
          </motion.div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-4">
              {maturityLevels.map((level) => (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: level.level * 0.1, duration: 0.4 }}
                  className={`rounded-2xl border p-6 text-center transition-shadow ${
                    level.active
                      ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                      : "border-border bg-card"
                  }`}
                >
                  <span className={`text-3xl font-extrabold ${level.active ? "text-primary" : "text-muted-foreground/30"}`}>
                    {level.level}
                  </span>
                  <h3 className={`mt-2 font-display text-sm font-bold ${level.active ? "text-primary" : "text-foreground"}`}>
                    {level.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{level.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Progress bar */}
            <div className="mt-6 h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-muted-foreground/20 via-primary/50 to-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ARCHITECTURE ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-20 -right-16 opacity-20" size="h-52 w-52" />
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Architecture
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Tools Provide Capability. <span className="text-primary">Architecture Creates Leverage.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
                Microsoft Copilot drafts emails. Zoom AI Companion summarises meetings. But without orchestration, systems remain disconnected, admin persists, data remains fragmented.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 font-display text-lg font-bold text-foreground">
                Fortay Connect designs the automation architecture that connects AI tools into <span className="text-primary">structured execution.</span>
              </motion.p>
              <motion.p variants={fadeUp} className="mt-2 text-muted-foreground">
                We do not deploy features. We design systems that act.
              </motion.p>
            </motion.div>
            {/* Blueprint grid visual */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-border bg-foreground p-8"
            >
              <div className="relative grid grid-cols-3 gap-4">
                {[
                  { icon: MessageSquare, label: "Conversations" },
                  { icon: Brain, label: "AI Engine" },
                  { icon: Monitor, label: "CRM" },
                  { icon: Calendar, label: "Calendar" },
                  { icon: Settings, label: "Automation\nArchitecture" },
                  { icon: Mail, label: "Email" },
                  { icon: BarChart3, label: "Analytics" },
                  { icon: Layers, label: "Workflows" },
                  { icon: Globe, label: "Integrations" },
                ].map((n, i) => (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center ${
                      i === 4 ? "border-primary bg-primary/10" : "border-background/10 bg-background/5"
                    }`}
                  >
                    <n.icon className={`h-6 w-6 ${i === 4 ? "text-primary" : "text-primary/60"}`} />
                    <span className={`text-[10px] font-medium whitespace-pre-line ${i === 4 ? "text-primary" : "text-background/50"}`}>{n.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ GOVERNANCE ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-16 -left-12 opacity-10" size="h-44 w-44" />
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Governance
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Governance Built In
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
                Automation without governance introduces risk. With structure, it creates competitive advantage.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
              {governanceItems.map((item) => (
                <motion.div key={item.label} variants={fadeUp} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <item.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="border-y border-border bg-foreground py-20 text-background">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-2xl text-center font-display text-3xl font-bold md:text-4xl"
          >
            Traditional Workflow vs <span className="text-primary">Intelligent Execution</span>
          </motion.h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-background/10">
            <div className="grid grid-cols-2">
              <div className="border-r border-background/10 bg-background/5 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/40">Traditional</p>
                {traditionalItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-background/5 py-3 last:border-0">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/50" />
                    <span className="text-sm text-background/60">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-primary/5 p-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Intelligent</p>
                {aiNativeItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-background/5 py-3 last:border-0">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-background/10 bg-background/5 px-6 py-3 text-center">
              <p className="text-sm text-background/60">
                One produces insight. <strong className="text-primary">The other executes it.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMMERCIAL IMPACT ═══════════ */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -right-14 opacity-20" size="h-44 w-44" />
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              The Commercial Impact
            </h2>
            <p className="mt-4 text-muted-foreground">
              AI becomes operational leverage. Not novelty.
            </p>
          </motion.div>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 md:grid-cols-3">
            {commercialImpacts.map((impact, i) => (
              <motion.div
                key={impact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <span className="text-3xl font-extrabold text-primary">{impact.metric}</span>
                <p className="mt-2 text-sm text-muted-foreground">{impact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHY FORTAY ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-16 -left-14 opacity-15" size="h-48 w-48" />
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Why Fortay Connect
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground leading-relaxed">
                We do not deploy isolated AI features. We architect intelligent execution ecosystems aligned to commercial outcomes.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-3">
              {whyFortayPoints.map((point) => (
                <motion.div key={point} variants={fadeUp} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/80">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <DecorativeCircle color="teal" className="-bottom-20 -right-20 opacity-20" />
        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="mx-auto max-w-2xl"
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
              Ready to Move From Experimentation to{" "}
              <span className="text-primary">Execution?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-background/60">
              If you are serious about building intelligent workflows that act across your organisation, securely and strategically, let's design the architecture.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book an AI & Automation Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </div>
);

export default AIAutomationTechnologyPage;