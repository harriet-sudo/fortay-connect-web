import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/home/SocialProofSection";
import TrustedBySection from "@/components/TrustedBySection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  ShieldCheck,
  Server,
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
} from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

import astonVillaLogo from "@/assets/logos/aston-villa.webp";
import ineosLogo from "@/assets/logos/ineos.webp";
import pkfLogo from "@/assets/logos/pkf.png";
import alcumusLogo from "@/assets/logos/alcumus.webp";
import caAutoLogo from "@/assets/logos/ca-auto-finance.webp";
import dextLogo from "@/assets/logos/dext.webp";
import ashtonsLegalLogo from "@/assets/logos/ashtons-legal.webp";
import nottinghamForestLogo from "@/assets/logos/nottingham-forest.png";

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

const realityChecks = [
  { text: "Your contact centre is fragmented across telephony, CRM and manual workflows", icon: MessageSquare },
  { text: "FCA compliance requirements are increasing, not decreasing", icon: ShieldCheck },
  { text: "Customers expect instant service, but your systems were built for queues", icon: Users },
  { text: "Your board wants AI, but your risk team wants guarantees", icon: Bot },
  { text: "Operational cost is rising while headcount growth is capped", icon: TrendingDown },
  { text: "Data exists everywhere… but insight exists nowhere", icon: Eye },
];

const struggles = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "Compliance & Risk Exposure",
    description:
      "Call recording gaps. Inconsistent customer authentication. Weak audit trails. One misstep can become regulatory exposure.",
  },
  {
    icon: Server,
    num: "02",
    title: "Legacy Infrastructure",
    description:
      "On-prem PBX. Siloed telephony. Disconnected CRM. Every change feels like a 12-month programme.",
  },
  {
    icon: TrendingDown,
    num: "03",
    title: "Cost to Serve",
    description:
      "High call volumes. Repetitive queries. Manual verification. Simple interactions consuming expensive human resource.",
  },
  {
    icon: Users,
    num: "04",
    title: "Customer Expectation Gap",
    description:
      "Clients expect Amazon-level experience. You're working with decade-old architecture.",
  },
];

const approachPoints = [
  { text: "Integrate securely with existing banking platforms and CRMs", icon: Lock },
  { text: "Strengthen compliance through automated recording, transcription and QA", icon: ShieldCheck },
  { text: "Deploy AI virtual agents for 24/7 self-service", icon: Bot },
  { text: "Provide real-time analytics for leadership visibility", icon: BarChart3 },
  { text: "Reduce cost to serve while improving CSAT", icon: TrendingDown },
];

const aiFeatures = [
  "A voice or chat agent handling balance checks, payment queries, policy changes",
  "Intelligent ID&V before escalation to human agents",
  "Fully auditable conversation history",
  "Multi-language support without additional headcount",
  "No limit on concurrent conversations",
];

const complianceReqs = [
  "Meet FCA and GDPR requirements",
  "Deliver secure data storage and encryption",
  "Provide audit trails and quality monitoring",
  "Enable secure omnichannel communications",
  "Support role-based access and governance controls",
];

const analyticsCapabilities = [
  { label: "Real-time service level visibility", icon: Eye },
  { label: "Call and conversation analytics", icon: MessageSquare },
  { label: "Sentiment analysis", icon: Zap },
  { label: "Compliance flagging", icon: ShieldCheck },
  { label: "Productivity tracking", icon: BarChart3 },
  { label: "Revenue opportunity identification", icon: TrendingDown },
];

const businessImpacts = [
  { metric: "↓ 40%", label: "Cost per contact" },
  { metric: "↑ 85%", label: "First contact resolution" },
  { metric: "↑ 95%", label: "Compliance scoring" },
  { metric: "↓ 35%", label: "Average handling time" },
  { metric: "↑ 92%", label: "Customer retention" },
  { metric: "3×", label: "Cross-sell visibility" },
];

const whyFortayPoints = [
  "Deep experience across UCaaS, CCaaS and AI ecosystems",
  "Strategic advisory + technical deployment capability",
  "Compliance-aware architecture",
  "Board-level commercial understanding",
  "Clear ROI modelling before implementation",
];

const ctaExploring = [
  "AI receptionists",
  "Omnichannel contact centres",
  "Compliance-first communications",
  "Operational efficiency through automation",
  "Better visibility across customer interactions",
];

const FinancialServicesPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      {/* Hero — full-width dark with decorative circles */}
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
                <Building2 className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Financial Services
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              AI-Powered CX &amp; Communications for{" "}
              <span className="text-primary">Regulated Environments</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              Compliance. Risk. Cost pressure. Legacy systems.
              <br />
              Financial services isn't short of complexity.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-background/70">
              Fortay Connect helps regulated financial organisations deploy AI, omnichannel CX
              and communications platforms that improve customer experience, reduce operational
              cost and strengthen compliance.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-background/20 text-background hover:bg-background/10">
                <a href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Download Blueprint
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SocialProofSection />

      {/* The Reality — cards grid instead of plain list */}
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
              The Reality in Financial Services
            </h2>
            <p className="mt-3 text-muted-foreground">
              If you're here, it's probably because one of these is true:
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {realityChecks.map((item, i) => (
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
          <motion.div
            className="mx-auto mt-12 max-w-xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm italic text-muted-foreground">
              And every vendor says the same thing:
              <br />
              <span className="font-medium text-foreground">"Seamless. Intelligent. Transformational."</span>
            </p>
            <p className="mt-4 font-display text-2xl font-bold text-primary">
              We prefer measurable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where Firms Struggle — numbered cards with large accent numbers */}
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
              Where Financial Firms Struggle
            </h2>
          </motion.div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 sm:grid-cols-2 lg:grid-cols-4">
            {struggles.map((s, i) => (
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

      {/* Our Approach — side-by-side with visual */}
      <section className="relative overflow-hidden py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -right-16 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Our approach
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                Modernise Without Disrupting
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                We don't "rip and replace."
                <br />
                We design controlled, compliant transformation.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="font-medium text-foreground">
                  This isn't AI theatre.
                  <br />
                  <span className="text-primary">It's operational engineering.</span>
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

      {/* AI Virtual Agents — dark with chat mockup */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" className="-top-24 -left-20 opacity-15" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Chat mockup visual */}
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
                  <span className="text-xs text-background/40">Online</span>
                </div>
                {/* Chat bubbles */}
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[70%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      I need to check my current balance and recent transactions
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      Of course! I'll need to verify your identity first. Can you confirm your registered email address?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[70%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      j.smith@company.co.uk
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      ✓ Verified. Your current balance is £12,450.32. Your last 3 transactions are…
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <Lock className="h-3 w-3" />
                    End-to-end encrypted · FCA compliant · Fully auditable
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Copy */}
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
                AI Virtual Agents for Financial Services
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-background/50">Imagine:</motion.p>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3">
                {aiFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp} className="mt-6 text-background/60">
                Your human advisors focus on complex, revenue-generating interactions.
                <br />
                The rest is handled instantly.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-sm font-bold text-primary">
                And yes, it can be compliant.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance — with shield visual */}
      <section className="relative overflow-hidden py-20">
        <DecorativeCircle color="purple" variant="ring" className="-bottom-32 -right-20 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10">
                <ShieldCheck className="h-6 w-6 text-purple" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Compliance Built In, Not Bolted On
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                For regulated firms, technology must meet the highest standards from day one.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 text-sm text-muted-foreground">
                We work with enterprise-grade platforms designed for regulated industries and
                implement them with governance frameworks in place from day one.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
                <p className="font-medium text-foreground">
                  Transformation without control is risk.
                  <br />
                  <span className="text-primary">We don't do risk.</span>
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

      {/* Analytics — dashboard mockup */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Analytics
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Leadership Visibility Through Analytics
            </h2>
            <p className="mt-3 text-muted-foreground">
              Boards don't want dashboards. They want <span className="font-semibold text-foreground">answers.</span>
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {analyticsCapabilities.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-8 text-center text-sm text-muted-foreground"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            From COO to CRO, decision-making becomes <span className="font-semibold text-foreground">data-led, not anecdotal.</span>
          </motion.p>
        </div>
      </section>

      <TrustedBySection />

      {/* Business Impact — big metric cards */}
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
              Financial firms that modernise correctly see:
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
          <motion.p
            className="mt-10 text-center font-display text-lg font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            And critically: <span className="text-primary">Less operational friction.</span>
          </motion.p>
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
              We are technology neutral and commercially focused.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-muted-foreground">
              We don't sell licences. We design outcomes.
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
                You won't get buzzwords.
                <br />
                <span className="text-primary">You'll get a roadmap.</span>
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
              Ready to Modernise Financial CX?
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
              Let's talk.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Financial Services Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                <a href="#" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download AI &amp; CX Blueprint
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

export default FinancialServicesPage;
