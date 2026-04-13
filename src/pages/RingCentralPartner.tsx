import { useState } from "react";
import PageFAQSection from "@/components/PageFAQSection";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Phone, MessageSquare, Bot,
  Brain, Shield, BarChart3, Globe, Zap, Users, Building2,
  Mic, TrendingUp, Layers
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DecorativeCircle from "@/components/DecorativeCircle";
import ringcentralLogo from "@/assets/logos/ringcentral.png";
import rcGoldImg from "@/assets/blog/ringcentral-gold.jpg";
import msRcImg from "@/assets/blog/ms-ringcentral.jpg";
import mitelRcImg from "@/assets/blog/mitel-rc.jpg";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

// Reusable purple pill label — matches site-wide style
const SectionPill = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
    {children}
  </p>
);

const ecosystemItems = [
  { icon: Phone, label: "RingEX", sub: "Cloud communications" },
  { icon: MessageSquare, label: "RingCX", sub: "Omnichannel CX" },
  { icon: Brain, label: "RingSense AI", sub: "Conversation analytics" },
  { icon: Mic, label: "AI Receptionist", sub: "Automated inbound" },
  { icon: Layers, label: "Teams Integration", sub: "Direct routing" },
];

const certifications = [
  "Employee Experience (EX) Delivery Certification",
  "Customer Experience (CX) Delivery Certification",
];

const excels = [
  "Microsoft-centric enterprises needing voice in Teams",
  "Multi-site global organisations",
  "Businesses migrating from legacy PBX",
  "Regulated industries requiring reliability",
  "Organisations aligning UC + CX under one strategy",
];

const alternatives = [
  "Video-first collaboration is the primary requirement",
  "Fully standalone contact centre without UCaaS",
  "Small businesses needing minimal telephony",
  "Organisations without Microsoft 365 footprint",
];

const fortayValue = [
  { icon: Brain, title: "Platform Suitability Assessment", desc: "Independent evaluation of RingCentral against your requirements." },
  { icon: Layers, title: "Teams Voice Integration Planning", desc: "Direct Routing configuration and Teams voice architecture." },
  { icon: Phone, title: "Number Migration & Porting", desc: "End-to-end number porting and legacy PBX migration strategy." },
  { icon: MessageSquare, title: "CX Architecture (RingCX & NICE)", desc: "Contact centre routing, IVR and omnichannel design." },
  { icon: Bot, title: "AI Configuration (RingSense & AI Receptionist)", desc: "Analytics, coaching and automated inbound workflows." },
  { icon: Shield, title: "Compliance & Secure Framework", desc: "Recording, data residency and sector compliance alignment." },
  { icon: Globe, title: "CRM & System Integration", desc: "Salesforce, HubSpot, Dynamics and custom API connectivity." },
  { icon: BarChart3, title: "Ongoing Optimisation", desc: "Performance monitoring, platform tuning and ongoing management." },
];

const integrations = [
  "Microsoft Teams", "Salesforce", "HubSpot", "Microsoft Dynamics",
  "NICE CX platforms", "CRM & ERP systems", "Collaboration tools", "Contact centre environments",
];

const insightCards = [
  {
    img: rcGoldImg,
    title: "Fortay Connect awarded Gold Partner Status with RingCentral",
    summary: "Recognised as a RingCentral Reach Gold Partner — representing the top 1% of RingCentral's partner ecosystem.",
    slug: "fortay-connect-ringcentral-gold-partner",
  },
  {
    img: msRcImg,
    title: "Microsoft Teams & RingCentral — Better Together",
    summary: "How Direct Routing and RingCentral combine to deliver enterprise voice inside Teams without disruption.",
    slug: "microsoft-teams-and-ringcentral",
  },
  {
    img: mitelRcImg,
    title: "Mitel and RingCentral — Virtual Lunch and Learn",
    summary: "Exploring the Mitel and RingCentral partnership and what it means for your unified communications strategy.",
    slug: "mitel-and-ringcentral-virtual-lunch-and-learn",
  },
];

const faqs = [
  { q: "What does RingCentral Gold Partner status mean?", a: "Gold status reflects certified delivery capability across Employee Experience (EX) and Customer Experience (CX) solutions within the RingCentral ecosystem." },
  { q: "Can RingCentral integrate with Microsoft Teams?", a: "Yes. RingCentral supports Teams voice integration via Direct Routing, enabling enterprise telephony within Teams without replacing the Teams experience." },
  { q: "What is RingCX?", a: "RingCX is RingCentral's cloud contact centre platform delivering omnichannel engagement, intelligent routing and workforce engagement management." },
  { q: "How does RingSense AI work?", a: "RingSense analyses conversations to surface sentiment, coaching insights, performance analytics and automated summaries across calls and meetings." },
  { q: "What is AI Receptionist?", a: "AI Receptionist automates inbound call answering, identity verification and intelligent routing — reducing administrative overhead and improving caller experience." },
  { q: "Is RingCentral suitable for regulated industries?", a: "Yes. With correct configuration, RingCentral supports secure and compliant enterprise deployment including recording, data residency and audit frameworks." },
  { q: "Why use a certified partner instead of purchasing directly?", a: "Licences alone do not ensure architecture, integration, migration success or optimisation. Execution defines whether the investment delivers ROI." },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "RingSense AI",
    short: "Conversation analytics and coaching insights.",
    detail: "RingSense analyses every conversation automatically — surfacing sentiment trends, identifying coaching opportunities, flagging compliance risks and generating call summaries. Managers gain visibility without manual review. Agents improve faster with targeted feedback.",
  },
  {
    icon: Mic,
    title: "AI Receptionist",
    short: "Automated inbound answering and intelligent triage.",
    detail: "AI Receptionist answers inbound calls, verifies caller identity and routes them intelligently — without human intervention. It handles high call volumes, reduces hold times and ensures consistent first-touch experience across every site.",
  },
  {
    icon: MessageSquare,
    title: "Auto Transcription",
    short: "Automated transcription and summarisation.",
    detail: "Every meeting and call is transcribed automatically. Summaries are generated with key actions and decisions highlighted. This reduces post-call admin, improves knowledge capture and supports compliance recording workflows.",
  },
  {
    icon: TrendingUp,
    title: "Sentiment Detection",
    short: "Real-time and post-call sentiment analysis.",
    detail: "Sentiment is monitored in real time during calls and analysed post-call for trend reporting. Teams can identify at-risk interactions early, improve quality management and demonstrate consistent service standards to regulators.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    short: "AI-powered team and individual performance tracking.",
    detail: "Dashboards surface individual and team performance metrics derived from AI analysis — call outcomes, talk ratios, resolution rates and coaching compliance. Leaders can allocate training resources precisely where needed.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    short: "AI-driven routing, CRM logging and automation.",
    detail: "AI automates CRM activity logging, follow-up task creation and intelligent call routing based on context. Agents spend less time on administration and more on high-value customer interactions. Integrations with Salesforce, HubSpot and Dynamics are fully supported.",
  },
];

const AIInnovationTabs = () => {
  const [active, setActive] = useState(0);
  const selected = aiFeatures[active];
  return (
    <div className="mx-auto max-w-5xl">
      {/* Clickable card row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        {aiFeatures.map((f, i) => {
          const Icon = f.icon;
          const isActive = active === i;
          return (
            <button
              key={f.title}
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-2 rounded-2xl border p-4 text-center transition-all ${
                isActive
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? "bg-primary" : "bg-primary/10"}`}>
                <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-primary"}`} />
              </div>
              <span className={`text-xs font-semibold leading-tight ${isActive ? "text-primary" : "text-foreground"}`}>{f.title}</span>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <motion.div
        key={active}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl border border-primary/20 bg-primary/5 p-8"
      >
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
            <selected.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">{selected.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{selected.detail}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const RingCentralPartner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-foreground py-28 md:py-36">
          <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-20 opacity-20" size="h-96 w-96" />
          <DecorativeCircle color="purple" variant="ring" className="-bottom-24 -left-24 opacity-15" size="h-80 w-80" />

          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">

              {/* Gold badge — primary teal pill matching site */}
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                <Building2 className="h-3.5 w-3.5" />
                RingCentral Gold Partner — UK
              </p>

              <img src={ringcentralLogo} alt="RingCentral" className="mb-6 h-10 w-auto brightness-0 invert opacity-90" />

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-background md:text-5xl lg:text-6xl">
                Gold-Certified RingCentral<br />
                <span className="text-primary">Deployment & CX Specialists</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-background/60 leading-relaxed">
                RingCentral is a global leader in enterprise cloud communications — combining enterprise telephony, deep Microsoft Teams integration, AI-powered analytics and omnichannel CX within one structured platform.
              </p>

              <p className="mt-2 text-base text-background/40">
                The platform is powerful. Architecture determines impact.
              </p>

              {/* Certifications */}
              <div className="mt-8 space-y-2.5">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-background/70">{cert}</span>
                  </div>
                ))}
              </div>

              {/* Ecosystem connector */}
              <div className="mt-10 flex flex-wrap items-end gap-0">
                {ecosystemItems.map((item, i) => (
                  <div key={item.label} className="flex items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.15 }} className="flex flex-col items-center gap-1.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-[10px] font-medium text-background/40 max-w-[60px] text-center leading-tight">{item.label}</span>
                    </motion.div>
                    {i < ecosystemItems.length - 1 && (
                      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
                        transition={{ delay: 0.55 + i * 0.15 }}
                        className="mx-2 mb-4 h-px w-8 bg-primary/30 origin-left" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button size="lg" asChild className="bg-background text-foreground font-semibold hover:bg-background/90 shadow-lg">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Request Free RingCentral POC <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                  <Link to="/contact">Speak to a Specialist</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="border-b border-border bg-muted/30 py-10">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {[
                { value: "Gold", label: "Partner Status" },
                { value: "400+", label: "Deployments" },
                { value: "99.999%", label: "SLA Uptime" },
                { value: "EX + CX", label: "Certified Delivery" },
              ].map((stat, i) => (
                <motion.div key={stat.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY RINGCENTRAL ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <DecorativeCircle color="purple" variant="ring" className="-top-16 -right-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <SectionPill>Why RingCentral</SectionPill>
                <h2 className="font-display text-3xl font-bold md:text-4xl leading-tight">
                  Enterprise communications.<br />
                  <span className="text-primary">One unified platform.</span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  RingCentral excels where organisations require enterprise cloud telephony reliability, Microsoft Teams voice integration, global scalability, AI-powered analytics and omnichannel CX. It is particularly strong for organisations standardised on Microsoft 365 — enhancing that investment rather than replacing it.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {ecosystemItems.map((item, i) => (
                  <motion.div key={item.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3 min-h-[120px] hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TEAMS INTEGRATION — dark section ── */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <DecorativeCircle color="teal" variant="ring" className="-bottom-20 -right-20 opacity-15" size="h-80 w-80" />
          <DecorativeCircle color="purple" variant="disc" className="-top-12 -left-12 opacity-5" size="h-64 w-64" />
          <div className="container relative z-10">
            <div className="grid gap-14 md:grid-cols-2 items-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                  Teams Integration
                </p>
                <h2 className="font-display text-3xl font-bold text-background md:text-4xl leading-tight">
                  Voice Embedded Into Teams
                </h2>
                <p className="mt-5 text-background/60 leading-relaxed">
                  For organisations embedded in Microsoft ecosystems, RingCentral strengthens voice capability while preserving Teams familiarity. This reduces disruption and accelerates adoption.
                </p>
                <div className="mt-6 space-y-2.5">
                  {[
                    "Direct Routing integration with Microsoft Teams",
                    "Enterprise PSTN replacement",
                    "Global number management",
                    "Centralised administrative control",
                    "Secure voice continuity",
                  ].map(p => (
                    <div key={p} className="flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-background/70">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual split — Teams + RC */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-background/10 bg-background/5 p-6 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-background">Microsoft Teams</p>
                  <p className="text-xs text-background/40">Collaboration & meetings layer</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm text-background">RingCentral</p>
                  <p className="text-xs text-background/40">Enterprise telephony overlay</p>
                </div>
                <div className="col-span-2 rounded-2xl border border-background/10 bg-background/5 p-5 text-center">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">Result</p>
                  <p className="text-sm text-background/60">Enterprise voice inside Teams. Zero disruption.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── AI & RINGSENSE ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <DecorativeCircle color="teal" variant="ring" className="-top-16 -left-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
              <SectionPill>AI & Innovation</SectionPill>
              <h2 className="font-display text-3xl font-bold md:text-4xl">AI Embedded Across RingCentral</h2>
              <p className="mt-4 text-muted-foreground">Supporting both EX and CX use cases through intelligence at every touchpoint.</p>
            </motion.div>

            <AIInnovationTabs />
          </div>
        </section>

        {/* ── CUSTOMER QUOTE ── */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <DecorativeCircle color="purple" variant="ring" className="-top-20 -right-20 opacity-15" size="h-80 w-80" />
          <DecorativeCircle color="teal" variant="disc" className="-bottom-16 -left-16 opacity-5" size="h-64 w-64" />
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl"
            >
              {/* pill */}
              <div className="mb-10 text-center">
                <p className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                  Client review
                </p>
              </div>

              <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
                {/* Avatar initials */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-purple/20 text-2xl font-bold text-primary">
                  JL
                </div>

                <div>
                  <p className="text-lg italic leading-relaxed text-background/80 md:text-xl">
                    "Saved us from an expensive mistake. The expertise was completely impartial — focused on finding what we actually needed. Moving to RingCentral with Fortay's guidance gave us a platform that genuinely scales with the business."
                  </p>
                  <p className="mt-4 text-sm text-background/40">
                    — Justine Long, Head of Operations at{" "}
                    <span className="font-semibold text-background/70">CA Auto Finance</span>
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { value: "40%", label: "cost reduction achieved" },
                  { value: "3", label: "platforms consolidated into one" },
                  { value: "6 weeks", label: "from audit to deployment" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-background/5 border border-background/10 px-4 py-5 text-center">
                    <p className="font-display text-2xl font-bold text-primary md:text-3xl">{s.value}</p>
                    <p className="mt-1 text-xs text-background/40">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── COMPETITIVE POSITIONING ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <DecorativeCircle color="purple" variant="ring" className="-bottom-16 -left-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
              <SectionPill>Competitive Positioning</SectionPill>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Where RingCentral Excels</h2>
              <p className="mt-4 text-muted-foreground">Our advisory is independent. We match platform to requirement.</p>
            </motion.div>

            <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold">Where RingCentral Excels</h3>
                </div>
                <div className="space-y-3">
                  {excels.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <p className="text-sm text-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="rounded-2xl border border-border bg-muted/30 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                    <Users className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-muted-foreground">When Alternatives May Suit</h3>
                </div>
                <div className="space-y-3">
                  {alternatives.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 bg-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FORTAY VALUE ── */}
        <section className="relative overflow-hidden bg-muted/30 border-y border-border py-20 md:py-28">
          <DecorativeCircle color="teal" variant="ring" className="-top-16 -right-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
              <SectionPill>Fortay Connect Delivery</SectionPill>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Where Fortay Connect Adds Value</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Platform capability is only one variable. Execution defines success.</p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {fortayValue.map((item, i) => (
                <motion.div key={item.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              className="text-center mt-10 text-sm text-muted-foreground">
              We ensure RingCentral is implemented as infrastructure — not just telephony.
            </motion.p>
          </div>
        </section>

        {/* ── INSIGHT & BLOG CARDS ── */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
              <SectionPill>RingCentral Insight</SectionPill>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Recognition & Resources</h2>
              <p className="mt-4 text-muted-foreground">Certified expertise across EX and CX — with insight to back it up.</p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
              {insightCards.map((card, i) => (
                <motion.div key={card.slug} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <Link to={`/insights/${card.slug}`}
                    className="group block rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:shadow-md transition-all">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img src={card.img} alt={card.title}
                        className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{card.summary}</p>
                      <p className="mt-4 text-xs font-semibold text-primary flex items-center gap-1">
                        Read more <ArrowRight className="h-3 w-3" />
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATIONS ── */}
        <section className="bg-muted/20 border-y border-border py-16">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <SectionPill>Integrations</SectionPill>
              <h2 className="font-display text-2xl font-bold">Ecosystem Compatibility</h2>
              <p className="mt-2 text-sm text-muted-foreground">Voice becomes embedded in workflow.</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 mx-auto max-w-3xl">
              {integrations.map((item, i) => (
                <motion.div key={item} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium hover:border-primary/30 transition-colors">
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── POC CTA ── */}
        <section className="relative overflow-hidden bg-foreground py-24 md:py-32">
          <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-20 opacity-20" size="h-96 w-96" />
          <DecorativeCircle color="purple" variant="ring" className="-bottom-20 -left-20 opacity-15" size="h-80 w-80" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Free Proof of Concept
                </p>
                <h2 className="font-display text-3xl font-extrabold text-background md:text-4xl">
                  Experience RingCentral in<br />
                  <span className="text-primary">Your Environment</span>
                </h2>
                <p className="mt-5 text-background/60 leading-relaxed">
                  Rather than a generic demo, we offer a free POC account. We configure it around your workflows — testing Teams voice integration, AI Receptionist, RingSense analytics and RingCX routing in your real environment.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left mb-10 max-w-xl mx-auto">
                  {[
                    "Test Teams voice integration live",
                    "Evaluate AI Receptionist functionality",
                    "Explore RingSense analytics",
                    "Validate RingCX routing flows",
                    "Assess call quality in your environment",
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="text-xs text-background/60">{f}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-background/30 mb-6">Evaluate properly. Then decide with confidence.</p>
                <Button size="lg" asChild className="bg-background text-foreground font-semibold hover:bg-background/90 shadow-lg">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Request a Free RingCentral POC <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <PageFAQSection
          title="RingCentral Partner FAQs"
          subtitle="Straight answers for organisations evaluating RingCentral EX and CX solutions."
          faqs={faqs}
        />
        

      </main>
      <Footer />
    </div>
  );
};

export default RingCentralPartner;
