"use client";

import Link from "next/link";
import PageFAQSection from "@/components/PageFAQSection";
const alcumusLogo = "/assets/logos/alcumus.webp";
const ashtonsLogo = "/assets/logos/ashtons-legal.webp";
const astonVillaLogo = "/assets/logos/aston-villa.webp";
const caAutoFinanceLogo = "/assets/logos/ca-auto-finance.webp";
const dextLogo = "/assets/logos/dext.webp";
const ineosLogo = "/assets/logos/ineos.webp";
const nottinghamForestLogo = "/assets/logos/nottingham-forest.png";
const pkfLogo = "/assets/logos/pkf.png";
const gardenCourtLogo = "/assets/logos/garden-court-chambers.svg";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  Zap,
  Clock,
  TrendingDown,
  Users,
  BarChart3,
  HeartPulse,
  Target } from
"lucide-react";

const clients = [
{ name: "Alcumus", src: alcumusLogo },
{ name: "Ashtons Legal", src: ashtonsLogo },
{ name: "Aston Villa FC", src: astonVillaLogo },
{ name: "CA Auto Finance", src: caAutoFinanceLogo },
{ name: "Dext", src: dextLogo },
{ name: "INEOS", src: ineosLogo },
{ name: "Nottingham Forest", src: nottinghamForestLogo },
{ name: "PKF", src: pkfLogo },
{ name: "Garden Court Chambers", src: gardenCourtLogo }];


const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

/* ─── Data ─── */

const problemRisks = [
"Workflow fragmentation",
"Escalation failure",
"Inconsistent tone",
"Compliance exposure"];


const whatMakesDifferent = [
"Defined automation KPIs",
"Escalation governance frameworks",
"Secure integration into CX & communications systems",
"Performance reporting aligned to commercial outcomes"];


const readinessCriteria = [
"You manage high volumes of repetitive inbound demand",
"Cost per interaction is rising",
"You operate across multiple channels (voice, chat, messaging)",
"You require 24/7 or multilingual coverage",
"You have defined escalation pathways for complex interactions"];


const leverageAreas = [
{ icon: Bot, title: "Routine Demand Absorption", stat: "30–60%", desc: "reduction in repetitive inbound volume" },
{ icon: Target, title: "Intelligent Triage", stat: "Faster", desc: "resolution. Fewer transfers. Better first-contact outcomes." },
{ icon: Clock, title: "24/7 Elastic Coverage", stat: "Always on", desc: "No linear staffing growth." },
{ icon: Users, title: "Agent Augmentation", stat: "Lower load", desc: "Automated verification, instant summaries, reduced cognitive load." }];


const governancePoints = [
"Structured escalation frameworks",
"Secure data architecture",
"Audit trails",
"Role-based access controls",
"Continuous optimisation"];


const commercialImpacts = [
{ icon: TrendingDown, metric: "30–60%", label: "Reduction in repetitive inbound volume" },
{ icon: Zap, metric: "< 3s", label: "Response time" },
{ icon: BarChart3, metric: "Lower", label: "Cost per interaction" },
{ icon: HeartPulse, metric: "Improved", label: "CSAT" },
{ icon: Users, metric: "Reduced", label: "Agent burnout" },
{ icon: Target, metric: "Greater", label: "Operational predictability" }];


const ctaExploring = [
"AI voice agents",
"Conversational AI chatbots",
"AI receptionist solutions",
"Multilingual service automation",
"Intelligent call triage",
"24/7 service scalability"];


const faqs = [
{ q: "What is an AI virtual agent?", a: "An AI virtual agent is an automated voice or chat system designed to handle routine customer interactions, triage requests and escalate complex enquiries to human agents within structured CX and communications environments." },
{ q: "Are AI virtual agents suitable for regulated industries?", a: "Yes. When deployed with governance frameworks, audit trails and secure data architecture, AI virtual agents can operate effectively within financial services, legal and other regulated environments." },
{ q: "How do AI voice agents differ from AI chatbots?", a: "AI voice agents operate within telephony and contact centre platforms, managing inbound calls and real-time verification. AI chat agents operate across digital messaging channels such as web chat, WhatsApp and in-app messaging. Both must be architected within unified CX workflows." },
{ q: "How is ROI measured for AI virtual agents?", a: "ROI is typically measured through reduction in repetitive inbound volume, lower cost per interaction, improved first-contact resolution, reduced agent handling time and increased customer satisfaction (CSAT)." },
{ q: "Do AI virtual agents replace human agents?", a: "No. AI virtual agents absorb routine demand and augment human agents by automating verification, summarisation and routing. Human expertise remains critical for complex and high-value interactions." }];


const AIVirtualAgentsTechnologyPage = () =>
<div className="min-h-screen bg-background">
    <main>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
        <div className="container relative z-10">
          <Link href="/technology" className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> All Technology
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                <Bot className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                AI Virtual Agents
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Architected for{" "}
              <span className="text-primary">Commercial Control</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/60">
              AI automation should reduce cost, protect margin and improve customer experience — without introducing operational risk.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 font-display text-xl font-bold">
              This is structured automation.{" "}
              <span className="text-primary">Designed. Governed. Measured.</span>
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book an AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="teal" asChild>
                <Link href="/assessment">
                  <ClipboardCheck className="mr-2 h-4 w-4" /> AI & CX Readiness Assessment
                </Link>
              </Button>
            </motion.div>

            {/* Trusted by — inline in hero */}
            <motion.div variants={fadeUp} className="mt-12 border-t border-background/10 pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/30">Trusted by</p>
              <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-foreground to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-foreground to-transparent" />
                <div className="flex w-max animate-logo-scroll items-center gap-14">
                  {[...clients, ...clients].map((c, i) =>
                <img key={`${c.name}-${i}`} src={c.src} alt={c.name} className="h-7 w-auto shrink-0 object-contain brightness-0 invert opacity-40 hover:opacity-80 transition-opacity duration-300 md:h-9" />
                )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ═══════════ THE PROBLEM ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-20 -right-16 opacity-15" size="h-52 w-52" />
        <div className="container relative z-10 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-3 inline-block rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-destructive">
              The Problem
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Hiring your way out of service demand no longer scales.
            </motion.h2>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {["Inbound volume rises", "Expectations increase", "Margins tighten"].map((p) =>
            <span key={p} className="rounded-full border border-destructive/20 bg-destructive/5 px-5 py-2 text-sm font-medium text-foreground/80">
                  {p}
                </span>
            )}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 text-muted-foreground">
              AI deployed without structure introduces new risk:
            </motion.p>
            <motion.div variants={fadeUp} className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {problemRisks.map((r) =>
            <div key={r} className="rounded-xl border border-destructive/15 bg-destructive/5 px-4 py-3 text-center text-sm font-medium text-foreground/80">
                  {r}
                </div>
            )}
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 font-display text-xl font-bold text-foreground">
              Automation must be <span className="text-primary">architected</span> — not bolted on.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ WHAT MAKES FORTAY DIFFERENT ═══════════ */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" className="-top-24 -left-20 opacity-15" />
        <div className="container relative z-10 max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left — copy */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                What Makes Fortay Different
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
                We do not deploy chat widgets.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-lg text-background/60">
                We design AI virtual agents as operational infrastructure. Every engagement includes:
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6 space-y-3">
                {whatMakesDifferent.map((item) =>
              <div key={item} className="flex items-center gap-3 rounded-xl border border-background/10 bg-background/5 px-5 py-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm font-medium text-background/80">{item}</span>
                  </div>
              )}
              </motion.div>
              <motion.p variants={fadeUp} className="mt-8 font-display text-lg font-bold">
                AI becomes <span className="text-primary">controlled capacity</span> — not experimentation.
              </motion.p>
            </motion.div>

            {/* Right — chat mockup */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            
              <div className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-background/10 pb-3">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">AI Virtual Agent</span>
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-background/40">Online 24/7</span>
                </div>
                <div className="space-y-3">
                  {[
                { from: "customer", text: "Hi, I need to reschedule my appointment for next week" },
                { from: "agent", text: "I've found your booking for Thursday 14:00. I can see availability on Monday, Wednesday and Friday. Which works best?" },
                { from: "customer", text: "Wednesday please, same time if possible" },
                { from: "agent", text: "✓ Rescheduled to Wednesday 14:00. Confirmation sent to your email. Is there anything else I can help with?" }].
                map((msg, i) =>
                <div key={i} className={`flex ${msg.from === "customer" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs text-background/80 ${msg.from === "customer" ? "rounded-tr-md bg-primary/20" : "rounded-tl-md bg-background/10"}`}>
                        {msg.text}
                      </div>
                    </div>
                )}
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Zap className="h-3 w-3" />
                    Instant response · Calendar integration · Zero queue time
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ IS AI RIGHT FOR YOU ═══════════ */}
      <section className="relative overflow-hidden bg-purple-pale py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -right-16 opacity-20" size="h-64 w-64" />
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -left-20 opacity-10" size="h-52 w-52" />
        <div className="container relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid gap-10 lg:grid-cols-2 lg:items-center"
          >
            {/* Left: heading + CTA */}
            <div className="space-y-6">
              <motion.span variants={fadeUp} className="inline-block rounded-full border border-purple/40 bg-purple px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                Is AI Right for Your Organisation?
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
                Three or more of these?{" "}
                <span className="text-purple">AI is your lever.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base text-muted-foreground">
                If these challenges sound familiar, structured AI deployment could deliver measurable operational leverage — fast.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-purple px-7 py-3 text-sm font-bold text-white shadow-lg shadow-purple/30 transition-all hover:brightness-110"
                >
                  Book an AI Strategy Session <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            {/* Right: criteria list */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-purple/20 bg-white/60 p-6 backdrop-blur-sm space-y-3 shadow-sm">
              {readinessCriteria.map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-purple/10 bg-purple/5 px-4 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple/15 text-xs font-bold text-purple">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground/80">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ WHERE AI DELIVERS LEVERAGE ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-16 -left-12 opacity-10" size="h-44 w-44" />
        <div className="container relative z-10 max-w-5xl">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Where AI Delivers Leverage
            </motion.p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {leverageAreas.map((area, i) =>
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <area.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{area.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-bold text-primary">{area.stat}</span> — {area.desc}
                </p>
              </motion.div>
          )}
          </div>
          <motion.p
          className="mt-8 text-center font-display text-lg font-bold text-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          
            AI enhances people. <span className="text-primary">It does not replace them.</span>
          </motion.p>
        </div>
      </section>

      {/* ═══════════ GOVERNED AI ═══════════ */}
      {/* ═══════════ GOVERNED AI — PROCESS ═══════════ */}
      <section className="relative overflow-hidden bg-background py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-16 -right-16 opacity-10" size="h-52 w-52" />
        <div className="container relative z-10 max-w-4xl">
          <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}>
          
            <p className="mb-3 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Governed AI, Not Experimental AI
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Every deployment includes
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
          { icon: ShieldCheck, label: "Escalation Frameworks", body: "Structured escalation logic ensures every AI interaction has a clear, tested pathway to a human agent — with full context transfer. No dead ends. No customer frustration.", flip: false },
          { icon: CheckCircle2, label: "Secure Data Architecture", body: "AI systems are integrated with data security by design. Role-based access, encrypted data flows and compliant storage architecture underpin every deployment.", flip: true },
          { icon: Target, label: "Audit Trails", body: "Every interaction is logged, timestamped and auditable. Built for regulated environments and internal governance requirements from day one.", flip: false },
          { icon: Users, label: "Role-Based Access Controls", body: "Granular access controls ensure only authorised personnel can configure, monitor and adjust AI behaviour — protecting operational integrity.", flip: true },
          { icon: Zap, label: "Continuous Optimisation", body: "Post-deployment, we monitor performance against defined KPIs and tune intent models, escalation triggers and response quality to improve over time.", flip: false }].
          map((step, i) =>
          <motion.div
            key={step.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className={`flex items-center gap-6 md:gap-10 ${step.flip ? "flex-row-reverse" : "flex-row"}`}>
            
                {/* Icon circle */}
                <div className="flex shrink-0 flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <span className="max-w-[80px] text-center text-xs font-semibold text-foreground/60">{step.label}</span>
                </div>
                {/* Card */}
                <div className={`flex-1 rounded-2xl px-6 py-5 ${i % 2 === 0 ? "bg-foreground text-background" : "bg-primary/10 border border-primary/20"}`}>
                  <p className={`font-display text-base font-bold ${i % 2 === 0 ? "text-background" : "text-foreground"}`}>{step.label}</p>
                  <p className={`mt-1.5 text-sm leading-relaxed ${i % 2 === 0 ? "text-background/60" : "text-muted-foreground"}`}>{step.body}</p>
                </div>
              </motion.div>
          )}
          </div>

          <motion.div
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}>
          
            <p className="text-sm text-muted-foreground">AI without governance creates risk.</p>
            <p className="mt-1 font-display text-lg font-bold text-foreground">
              AI with structure <span className="text-primary">creates confidence.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ COMMERCIAL IMPACT ═══════════ */}
      <section className="bg-foreground py-10">
        <div className="container max-w-6xl">
          <motion.div
          className="flex flex-col items-center gap-6 md:flex-row md:items-stretch md:justify-between md:divide-x md:divide-border"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}>
          
            {commercialImpacts.map((item) =>
          <div key={item.label} className="flex flex-1 flex-col items-center px-4 py-2 text-center first:pl-0 last:pr-0">
                <p className="font-display text-2xl font-extrabold text-primary">{item.metric}</p>
                <p className="mt-0.5 text-xs text-background/50">{item.label}</p>
              </div>
          )}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, hsl(var(--teal)/0.12) 0%, hsl(var(--purple)/0.10) 100%)" }}>
        {/* Shimmer */}
        <motion.div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"
        animate={{ translateX: ["-100%", "200%"] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }} />
      
        <DecorativeCircle color="purple" variant="ring" className="-bottom-24 -right-16 opacity-20" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10 max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Left — statement */}
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            
              <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                Ready to Begin
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
                Deploy AI Virtual Agents{" "}
                <span className="text-purple">properly.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Structured. Governed. Built to deliver commercial outcomes — not just automation for automation's sake.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-foreground text-primary hover:bg-foreground/90">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book an AI Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right — use-case tags */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-purple/20 bg-white/60 p-8 backdrop-blur-sm shadow-sm">
            
              <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">If you are exploring</p>
              <div className="flex flex-wrap gap-3">
                {ctaExploring.map((item) =>
              <span key={item} className="rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-sm font-medium text-foreground">
                    {item}
                  </span>
              )}
              </div>
              <p className="mt-8 border-t border-border/40 pt-6 font-display text-lg font-bold text-foreground">
                Let's design it properly. <span className="text-purple">Together.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <PageFAQSection
        title="AI Virtual Agent FAQs"
        subtitle="Straight answers for technology and operations leaders evaluating AI virtual agent deployment."
        faqs={faqs}
      />
      
    </main>
  </div>;


export default AIVirtualAgentsTechnologyPage;