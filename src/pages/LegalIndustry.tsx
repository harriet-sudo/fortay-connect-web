import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/home/SocialProofSection";
import TrustedBySection from "@/components/TrustedBySection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import zoomLogo from "@/assets/logos/zoom.png";
import ringcentralLogo from "@/assets/logos/ringcentral.png";
import niceLogo from "@/assets/logos/nice.png";
import gotoLogo from "@/assets/logos/goto.svg";
import ujetLogo from "@/assets/logos/ujet.svg";
import dialpadLogo from "@/assets/logos/dialpad.svg";
import clioLogo from "@/assets/logos/clio.svg";
import peppermintLogo from "@/assets/logos/peppermint.svg";
import msTeamsLogo from "@/assets/logos/ms-teams.svg";

const legalPartners = [
  { name: "Zoom", src: zoomLogo },
  { name: "RingCentral", src: ringcentralLogo },
  { name: "Dialpad", src: dialpadLogo },
  { name: "NICE", src: niceLogo },
  { name: "GoTo", src: gotoLogo },
  { name: "UJET", src: ujetLogo },
  { name: "Clio", src: clioLogo },
  { name: "Peppermint", src: peppermintLogo },
  { name: "Microsoft Teams", src: msTeamsLogo },
];
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  ArrowLeft,
  ArrowRight,
  Scale,
  ShieldCheck,
  Phone,
  TrendingDown,
  Users,
  Bot,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Download,
  Zap,
  MessageSquare,
  Globe,
  Lock,
  Eye,
  Clock,
  PhoneOff,
  FileText,
  Calendar,
  Headphones,
  Building2,
  XCircle,
} from "lucide-react";

import astonVillaLogo from "@/assets/logos/aston-villa.webp";
import ineosLogo from "@/assets/logos/ineos.webp";
import pkfLogo from "@/assets/logos/pkf.png";
import alcumusLogo from "@/assets/logos/alcumus.webp";
import caAutoLogo from "@/assets/logos/ca-auto-finance.webp";
import dextLogo from "@/assets/logos/dext.webp";
import ashtonsLegalLogo from "@/assets/logos/ashtons-legal.webp";
import nottinghamForestLogo from "@/assets/logos/nottingham-forest.png";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const clientLogos = [
  { name: "Aston Villa", src: astonVillaLogo },
  { name: "INEOS", src: ineosLogo },
  { name: "PKF", src: pkfLogo },
  { name: "Alcumus", src: alcumusLogo },
  { name: "CA Auto Finance", src: caAutoLogo },
  { name: "Dext", src: dextLogo },
  { name: "Ashtons Legal", src: ashtonsLegalLogo },
  { name: "Nottingham Forest", src: nottinghamForestLogo },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const pressurePoints = [
  { text: "Clients expect instant response", icon: Clock },
  { text: "Fee-earners are overloaded", icon: Users },
  { text: "Compliance requirements are tightening", icon: ShieldCheck },
  { text: "Competition is sharper", icon: Zap },
  { text: "Margins are under scrutiny", icon: TrendingDown },
  { text: "Legacy telephony and manual intake processes still in use", icon: Phone },
];

const revenueLeaks = [
  { text: "Missed calls during peak periods", icon: PhoneOff },
  { text: "Voicemails never returned", icon: MessageSquare },
  { text: "New enquiries outside office hours", icon: Clock },
  { text: "Poor intake qualification", icon: FileText },
  { text: "Delayed response times", icon: AlertTriangle },
];

const breakdowns = [
  {
    icon: PhoneOff,
    num: "01",
    title: "Missed Call = Missed Instruction",
    description:
      "Reception overwhelmed. Fee-earners unavailable. No structured triage. Every missed call is a potential lost client.",
  },
  {
    icon: Users,
    num: "02",
    title: "High-Cost Resource on Low-Value Tasks",
    description:
      "Qualified solicitors booking appointments, chasing documents, answering routine queries — instead of billing.",
  },
  {
    icon: ShieldCheck,
    num: "03",
    title: "Manual Compliance & Audit Risk",
    description:
      "Inconsistent call recording. Weak audit trails. Limited QA visibility. One gap becomes regulatory exposure.",
  },
  {
    icon: Globe,
    num: "04",
    title: "Fragmented Technology",
    description:
      "Separate telephony, CRM and case management systems that barely communicate. Growth on outdated infrastructure creates drag.",
  },
];

const approachPoints = [
  { text: "Capture every inbound enquiry 24/7", icon: Phone },
  { text: "Deploy AI receptionists for law firms", icon: Bot },
  { text: "Integrate with leading case management systems", icon: Globe },
  { text: "Automate client intake and appointment scheduling", icon: Calendar },
  { text: "Strengthen call recording and compliance oversight", icon: ShieldCheck },
  { text: "Deliver real-time analytics to leadership", icon: BarChart3 },
];

const aiReceptionistFeatures = [
  "Answers every call, including out of hours",
  "Identifies matter type and urgency",
  "Captures structured client intake data",
  "Schedules consultations directly into diaries",
  "Verifies identity before escalation",
  "Transfers seamlessly to the appropriate team",
  "Supports multi-office routing",
  "Handles unlimited concurrent conversations",
];

const contactCentreFeatures = [
  "Distribute enquiries by practice area",
  "Provide call and conversation analytics",
  "Enable compliance flagging and QA monitoring",
  "Deliver performance dashboards by office or team",
  "Support omnichannel engagement — voice, webchat and messaging",
];

const partnerVisibility = [
  { label: "Enquiry-to-instruction conversion rates", icon: BarChart3 },
  { label: "Missed opportunity data", icon: Eye },
  { label: "Fee-earner utilisation trends", icon: Users },
  { label: "Response time performance", icon: Clock },
];

const complianceReqs = [
  "SRA regulatory expectations",
  "GDPR and secure data storage requirements",
  "Encrypted communications",
  "Role-based access controls",
  "Full audit trails",
];

const traditionalFirm = [
  "Reception hours limit opportunity",
  "Missed calls after 5pm",
  "Manual intake notes",
  "Delayed client response",
  "Fee-earners managing admin",
  "Limited performance visibility",
  "Compliance review reactive",
];

const aiEnabledFirm = [
  "24/7 AI receptionist handling enquiries",
  "Structured intake captured automatically",
  "Instant appointment scheduling",
  "Intelligent routing to correct practice area",
  "Automated call recording and transcription",
  "Real-time performance analytics",
  "Proactive compliance monitoring",
];

const businessImpacts = [
  { metric: "↑ 40%", label: "Enquiry conversion rate" },
  { metric: "↓ 60%", label: "Missed calls" },
  { metric: "↓ 30%", label: "Admin overhead" },
  { metric: "↑ 85%", label: "First response time" },
  { metric: "↑ 95%", label: "Fee-earner utilisation" },
  { metric: "100%", label: "Compliance oversight" },
  { metric: "↑ 4.8★", label: "Client satisfaction" },
];

const whyFortayPoints = [
  "Vendor-agnostic advisory across UCaaS, CCaaS and AI",
  "Deep understanding of regulated professional services",
  "Commercial ROI modelling before implementation",
  "Secure integration with legal case management systems",
  "Board-level reporting visibility",
];

const ctaExploring = [
  "AI for law firms UK",
  "AI receptionist for solicitors",
  "Legal telephony modernisation",
  "AI client intake automation",
  "Legal contact centre solutions",
  "Compliance-focused communications upgrades",
];

const LegalIndustryPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="purple" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="teal" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
        <div className="container relative z-10">
          <Link
            to="/industries"
            className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All Industries
          </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                <Scale className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Legal
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              AI for Law Firms That Protect{" "}
              <span className="text-primary">Revenue, Reputation &amp; Compliance</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              Modern law firms are under pressure from every direction.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-background/70">
              Fortay Connect helps UK law firms deploy secure AI-powered communications and
              client experience platforms that increase enquiry conversion, reduce administrative
              burden and strengthen regulatory compliance.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-bold">
                This is not experimental AI.
                <br />
                <span className="text-primary">This is structured operational advantage.</span>
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="border border-background/20 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Legal Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustedBySection />

      {/* The Pressure + Pain Points — combined */}
      <section className="relative overflow-hidden bg-foreground py-16">
        <div className="container">
          <motion.div
            className="mx-auto mb-10 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              Sound familiar?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-background md:text-4xl">
              Where Legal Firms Struggle
            </h2>
          </motion.div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
            {breakdowns.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex flex-col gap-3 bg-foreground px-6 py-6"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-destructive/20">
                  <s.icon className="h-4 w-4 text-destructive" />
                </div>
                <p className="font-display text-sm font-bold text-background">{s.title}</p>
                <p className="text-xs leading-relaxed text-background/50">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative overflow-hidden bg-purple-pale py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -right-16 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Our approach
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Controlled Modernisation for Law Firms
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                We design secure, compliant AI and communications ecosystems tailored for legal.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="font-medium text-foreground">
                  We don't disrupt fee-earners.
                  <br />
                  <span className="text-primary">We protect their billable focus.</span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {approachPoints.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Receptionist — dark with chat mockup */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" className="-top-24 -left-20 opacity-15" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Chat mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-background/10 pb-3">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">AI Legal Receptionist</span>
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-background/40">Online 24/7</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      Good evening. Thank you for calling Smith & Partners. How can I help you today?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      I need advice about a property purchase. The chain is about to collapse.
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      I understand the urgency. Let me capture some details and schedule you with our conveyancing team first thing tomorrow. Can I take your full name?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      James Richardson
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      ✓ Appointment booked with Sarah Mitchell, Conveyancing — 9:15am tomorrow. Confirmation sent to your email.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Lock className="h-3 w-3" />
                    Encrypted · SRA compliant · Fully auditable
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features list */}
            <motion.div
              className="order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Bot className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
                AI Receptionist for Law Firms
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-background/50">
                Imagine a fully branded AI legal receptionist that:
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3">
                {aiReceptionistFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-6 space-y-1">
                <p className="text-sm font-bold text-background/70">No voicemail. No lost leads. No receptionist bottlenecks.</p>
                <p className="text-sm font-bold text-primary">All fully auditable and secure.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Client Intake & Contact Centre */}
      <section className="relative overflow-hidden bg-muted/30 py-20">
        <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-12 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                AI Client Intake &amp; Legal Contact Centre
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                For larger firms, we implement intelligent legal contact centre platforms that:
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3">
                {contactCentreFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="mb-4 font-display text-lg font-bold text-foreground">Partners gain visibility into:</p>
              <div className="space-y-3">
                {partnerVisibility.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 font-display text-lg font-bold text-primary">
                Decisions become commercial, not anecdotal.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Confidentiality */}
      <section className="relative overflow-hidden border-y border-border bg-muted/30 py-20">
        <DecorativeCircle color="purple" variant="ring" className="-bottom-32 -right-20 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10">
                <ShieldCheck className="h-6 w-6 text-purple" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Compliance &amp; Confidentiality First
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                Technology in legal must align with the highest standards. AI without governance is exposure.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-border bg-card p-5">
                <p className="font-medium text-foreground">
                  We build compliance frameworks alongside technical deployment
                  <br />
                  <span className="text-primary">from day one.</span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {complianceReqs.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-purple/20 bg-purple/5 px-5 py-4"
                >
                  <ShieldCheck className="h-5 w-5 shrink-0 text-purple" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs AI-Enabled */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              The choice
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-background md:text-4xl">
              Traditional vs AI-Enabled Law Firm
            </h2>
            <p className="mt-3 text-background/50">
              One model reacts. <span className="font-semibold text-primary">The other scales.</span>
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-destructive/30 bg-destructive/10 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-destructive">Traditional Firm</h3>
              <ul className="space-y-3">
                {traditionalFirm.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/70" />
                    <span className="text-sm text-background/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* AI-Enabled */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-primary/30 bg-primary/10 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-primary">AI-Enabled Firm</h3>
              <ul className="space-y-3">
                {aiEnabledFirm.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-background/10 bg-background/5 px-8 py-8 text-center backdrop-blur-sm"
          >
            <p className="font-display text-xl font-bold text-background">
              Ready to move from <span className="text-destructive">traditional</span> to <span className="text-primary">AI-enabled</span>?
            </p>
            <p className="max-w-md text-sm text-background/50">
              Book a free 30-minute audit and we'll show you exactly where AI can eliminate friction in your firm.
            </p>
            <a
              href="https://meetings.hubspot.com/fortay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Book Your Free Audit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
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
              The Business Impact
            </h2>
            <p className="mt-3 text-background/50">
              Firms deploying AI communications platforms typically see:
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center divide-x divide-background/10">
            {businessImpacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex flex-col items-center px-6 py-4 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-primary">{item.metric}</p>
                <p className="mt-1 max-w-[110px] text-xs text-background/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mx-auto mt-10 max-w-xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm text-background/50">
              This is not about replacing lawyers.
            </p>
            <p className="mt-2 font-display text-lg font-bold text-primary">
              It is about removing friction around them.
            </p>
          </motion.div>
        </div>
      </section>

      <SocialProofSection partners={legalPartners} />

      {/* Why Fortay */}
      <section className="relative overflow-hidden bg-purple-pale py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <DecorativeCircle color="purple" variant="disc" className="-bottom-20 -left-12 opacity-10" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              Why us
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Fortay Connect?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
              Law firms do not need software resellers. They need strategic, compliant architects.
            </motion.p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "98%", title: "Client Retention", description: "Long-term partnerships built on trust, results, and continuous value delivery — not churn-and-burn contracts." },
              { stat: "30+", title: "Years in CX & Transformation", description: "Three decades of hands-on expertise across contact centre, unified communications, and AI-led transformation." },
              { stat: "100%", title: "Technology Agnostic", description: "No commissions, no partner bias. Our only agenda is what's right for your firm and your clients." },
              { stat: "🇬🇧", title: "UK Engineers & Consultants", description: "Our team is entirely UK-based — accessible, accountable, and deeply familiar with the UK regulatory landscape." },
              { stat: "✓", title: "We Stress-Test Everything", description: "While vendors push monthly AI releases, we validate real-world outcomes first. You get proven capabilities, not promises." },
              { stat: "Free", title: "Proof of Concept", description: "We prove value before you invest. Our free POC gives you confidence the solution works in your environment." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="font-display text-3xl font-bold text-primary">{item.stat}</p>
                <p className="font-display text-base font-bold text-foreground">{item.title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 rounded-2xl border border-purple/20 bg-card p-6 text-center"
          >
            <p className="font-display text-lg font-bold text-foreground">
              We design for reputation and profitability.{" "}
              <span className="text-primary">Not hype.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -right-16 opacity-30" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Protect and Grow Your Firm?
            </motion.h2>
            <motion.div variants={fadeUp} className="mx-auto mt-8 max-w-xl rounded-2xl border border-foreground/20 bg-foreground/10 p-6 text-left backdrop-blur-sm">
              <p className="mb-4 font-display text-sm font-bold uppercase tracking-widest text-foreground/60">This is for you if…</p>
              <ul className="space-y-2.5">
                {[
                  "You're a law firm or legal department tired of fragmented, insecure communication tools",
                  "You want to automate client intake and triage without sacrificing confidentiality",
                  "Your team is losing billable time to manual processes that AI could handle",
                  "You need communications infrastructure that meets SRA and GDPR obligations",
                  "You're evaluating cloud telephony, UC, or contact centre solutions for a legal environment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-8 text-foreground/70">If you are exploring:</motion.p>
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
              <Button asChild size="lg" className="border border-background/20 bg-background/10 text-background backdrop-blur-sm hover:bg-background/20">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Legal Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default LegalIndustryPage;
