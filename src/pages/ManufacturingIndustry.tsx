import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/home/SocialProofSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  ArrowLeft,
  ArrowRight,
  Factory,
  ShieldCheck,
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
  Package,
  Headphones,
  XCircle,
  Truck,
  Wrench,
  Server,
  DollarSign,
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

const operationalPressures = [
  { text: "Rising labour costs", icon: DollarSign },
  { text: "Supply chain volatility", icon: Truck },
  { text: "Global distributor expectations", icon: Globe },
  { text: "Growing order volumes", icon: Package },
  { text: "Pressure to increase productivity without increasing headcount", icon: Users },
  { text: "Service performance visibility is limited", icon: Eye },
];

const currentPainPoints = [
  { text: "Customer service teams are overwhelmed", icon: Headphones },
  { text: "Order status queries dominate inbound calls", icon: MessageSquare },
  { text: "ERP, CRM and telephony operate in silos", icon: Server },
  { text: "Service performance visibility is limited", icon: BarChart3 },
  { text: "Every inefficiency compounds cost", icon: TrendingDown },
];

const breakdowns = [
  {
    icon: MessageSquare,
    num: "01",
    title: "Repetitive, High-Volume Queries",
    description:
      '"How do I track my order?" "When will this ship?" "What is the lead time?" Predictable, low-complexity interactions handled by high-cost human resource.',
  },
  {
    icon: Wrench,
    num: "02",
    title: "Engineers Interrupted by Avoidable Calls",
    description:
      "Technical teams pulled into routine enquiries reduce production focus and output efficiency.",
  },
  {
    icon: Server,
    num: "03",
    title: "Fragmented Systems",
    description:
      "ERP in one place. Telephony in another. Email and spreadsheets bridging the gap. This creates delay, duplication and error risk.",
  },
  {
    icon: Eye,
    num: "04",
    title: "No Real-Time Operational Insight",
    description:
      "Many manufacturers lack live visibility into call drivers, response time, missed enquiries and service bottlenecks.",
  },
];

const approachPoints = [
  { text: "Integrate securely with ERP and CRM systems", icon: Lock },
  { text: "Deploy AI virtual agents for order tracking and routine service queries", icon: Bot },
  { text: "Automate high-volume inbound requests", icon: Zap },
  { text: "Enable intelligent routing by product line or region", icon: Globe },
  { text: "Provide real-time service analytics", icon: BarChart3 },
  { text: "Strengthen distributor and customer engagement", icon: Users },
];

const aiVirtualAgentFeatures = [
  "Provides instant order tracking",
  "Accesses ERP-integrated shipment data",
  "Answers lead time queries automatically",
  "Triages technical support requests intelligently",
  "Routes complex issues to the correct department",
  "Supports multilingual global distributors",
  "Handles unlimited concurrent conversations",
];

const contactCentreFeatures = [
  "Distribute enquiries by product type or region",
  "Prioritise key distributor accounts",
  "Monitor service levels in real time",
  "Capture conversation analytics",
  "Enable quality assurance and compliance tracking",
];

const leadershipVisibility = [
  { label: "Cost per interaction", icon: DollarSign },
  { label: "Demand patterns", icon: BarChart3 },
  { label: "Workforce utilisation", icon: Users },
  { label: "Escalation rates", icon: AlertTriangle },
  { label: "Revenue opportunity from inbound demand", icon: TrendingDown },
];

const traditionalModel = [
  "Service teams overloaded with repetitive calls",
  "Engineers interrupted by avoidable queries",
  "Manual order tracking processes",
  "After-hours enquiries delayed",
  "Limited operational visibility",
  "Reactive customer service model",
];

const aiEnabledModel = [
  "24/7 AI virtual agent handling routine queries",
  "Automated ERP-integrated order tracking",
  "Intelligent routing by product and priority",
  "Real-time service analytics dashboards",
  "Reduced call volume for human teams",
  "Proactive distributor communication",
];

const competitiveAdvantages = [
  {
    title: "Faster Response Wins Distributor Preference",
    description:
      "Distributors favour suppliers who respond instantly and provide transparent updates. AI-enabled manufacturers operate 24/7. Preferred supplier status follows responsiveness.",
    icon: Clock,
  },
  {
    title: "Protected Engineer Time Increases Output",
    description:
      "When technical expertise is shielded from avoidable interruptions: output improves, backlogs reduce, innovation cycles accelerate.",
    icon: Wrench,
  },
  {
    title: "Real-Time Data Enables Smarter Decisions",
    description:
      "Live demand trend visibility. Product-specific issue tracking. Predictive workload forecasting. Data-backed staffing models.",
    icon: BarChart3,
  },
  {
    title: "Scalable Growth Without Linear Headcount",
    description:
      "More orders → AI absorbs routine demand → Controlled headcount growth → Protected margin. This is scalable profitability.",
    icon: TrendingDown,
  },
];

const businessImpacts = [
  { metric: "30–60%", label: "Reduction in routine inbound calls" },
  { metric: "↓", label: "Lower cost per service interaction" },
  { metric: "↑", label: "Faster response times" },
  { metric: "↑", label: "Improved first contact resolution" },
  { metric: "↑", label: "Increased distributor satisfaction" },
  { metric: "↑", label: "Greater operational scalability" },
];

const whyFortayPoints = [
  "Technology neutral advisory across UCaaS, CCaaS and AI platforms",
  "Secure ERP and CRM integration strategy",
  "ROI modelling before deployment",
  "Phased transformation roadmaps",
  "Board-level operational reporting frameworks",
];

const ctaExploring = [
  "AI for manufacturing UK",
  "AI virtual agent for order tracking",
  "Manufacturing contact centre upgrades",
  "Customer service automation",
  "Omnichannel communications integration",
];

const ManufacturingIndustryPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
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
                <Factory className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Manufacturing
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              AI-Powered Communications &amp; CX for{" "}
              <span className="text-primary">Operationally Driven Manufacturers</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              Manufacturers don't compete on slogans. They compete on margin, throughput, reliability and speed of response.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-background/70">
              Fortay Connect helps UK manufacturers deploy AI-powered communications and customer
              experience platforms that reduce operational friction, protect revenue and increase
              service efficiency.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-bold">
                This is not digital transformation for its own sake.
                <br />
                <span className="text-primary">This is operational advantage.</span>
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Manufacturing Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-background/20 text-background hover:bg-background/10">
                <a href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Download Manufacturing AI Blueprint
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SocialProofSection />

      {/* Operational Pressure */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              Sound familiar?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              The Operational Pressure Facing Manufacturing Leaders
            </h2>
            <p className="mt-3 text-muted-foreground">
              If you're a COO or Operations Director, you are balancing:
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {operationalPressures.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-destructive/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 transition-colors group-hover:bg-destructive/20">
                  <item.icon className="h-5 w-5 text-destructive" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meanwhile — the reality */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              Meanwhile
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              The Current Reality
            </h2>
          </motion.div>
          <div className="mx-auto max-w-2xl space-y-3">
            {currentPainPoints.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-center gap-4 rounded-xl border border-destructive/20 bg-card p-5"
              >
                <item.icon className="h-5 w-5 shrink-0 text-destructive" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mx-auto mt-10 max-w-xl text-center font-display text-xl font-bold text-primary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Every inefficiency compounds cost.
          </motion.p>
        </div>
      </section>

      {/* Where Traditional Manufacturing Breaks Down */}
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
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Pain points
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Where Traditional Manufacturing Communications Break Down
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {breakdowns.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm"
              >
                <span className="absolute -right-2 -top-4 font-display text-8xl font-extrabold text-primary/10">
                  {s.num}
                </span>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/20">
                    <s.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-background/60">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-10 text-center text-sm text-background/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Growth layered onto legacy infrastructure creates{" "}
            <span className="font-semibold text-background">operational drag.</span>
          </motion.p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative overflow-hidden py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -right-16 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Our approach
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Intelligent Communications Infrastructure
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                We design AI-enabled communications ecosystems that integrate directly into your operational environment.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="font-medium text-foreground">
                  We don't replace your teams.
                  <br />
                  <span className="text-primary">We remove friction around them.</span>
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

      {/* AI Virtual Agent — dark with chat mockup */}
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
                  <span className="text-sm font-semibold">AI Virtual Agent</span>
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-background/40">Online 24/7</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      I need to check the status of order #PO-78432. When will it ship?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      Let me check that for you. Order #PO-78432 is currently in production. Estimated dispatch: 14 Feb. Tracking will be sent automatically.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      What about the lead time on part #MFG-2291?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      Part #MFG-2291 has a current lead time of 6–8 working days. Shall I create a quote or connect you with your account manager?
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Lock className="h-3 w-3" />
                    ERP-integrated · Secure · Fully auditable
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
                AI Virtual Agent for Manufacturing
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-background/50">
                Imagine a 24/7 AI voice or chat agent that:
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3">
                {aiVirtualAgentFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-6 space-y-1">
                <p className="text-sm font-bold text-background/70">No queues. No voicemail overflow. No unnecessary escalation.</p>
                <p className="text-sm font-bold text-primary">AI for manufacturing applied where it delivers measurable operational return.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Contact Centre */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Manufacturing Contact Centre Solutions
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                For larger or multi-site manufacturers, we implement intelligent contact centre platforms that:
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
              <p className="mb-4 font-display text-lg font-bold text-foreground">Leadership gains visibility into:</p>
              <div className="space-y-3">
                {leadershipVisibility.map((item, i) => (
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
                Operational decisions become data-led.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs AI-Enabled */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Traditional vs AI-Enabled Manufacturer
            </h2>
            <p className="mt-3 text-muted-foreground">
              One absorbs inefficiency. <span className="font-semibold text-primary">The other compounds efficiency.</span>
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-destructive">Traditional Model</h3>
              <ul className="space-y-3">
                {traditionalModel.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/60" />
                    <span className="text-sm text-foreground/80">{item}</span>
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
              className="rounded-2xl border border-primary/20 bg-primary/5 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-primary">AI-Enabled Model</h3>
              <ul className="space-y-3">
                {aiEnabledModel.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
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
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8 text-center"
          >
            <p className="font-display text-xl font-bold text-foreground">
              Ready to move from <span className="text-destructive">traditional</span> to <span className="text-primary">AI-enabled</span>?
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              Book a free 30-minute audit and we'll show you exactly where AI can drive efficiency across your operations.
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

      {/* Competitive Advantage */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Strategic advantage
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              How Manufacturers Are Using AI for Competitive Advantage
            </h2>
            <p className="mt-3 text-muted-foreground">
              AI in manufacturing communications is not just about efficiency. It is strategic positioning.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {competitiveAdvantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
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
              Manufacturers deploying AI communications solutions typically achieve:
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
              And critically:
            </p>
            <p className="mt-2 font-display text-lg font-bold text-primary">
              More focus on production, not phones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Trusted By
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Who We Work With
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-14"
          >
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 md:h-12"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Fortay */}
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
              Manufacturers do not need generic CX consultants. They need commercially grounded implementation partners.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {whyFortayPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-purple/20 bg-card p-6">
              <p className="font-display text-lg font-bold text-foreground">
                We design communications as operational infrastructure.
                <br />
                <span className="text-primary">Not as a bolt-on system.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -right-16 opacity-30" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Modernise Manufacturing Communications?
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
                  Book a Manufacturing Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                <a href="#" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Manufacturing AI &amp; CX Blueprint
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

export default ManufacturingIndustryPage;
