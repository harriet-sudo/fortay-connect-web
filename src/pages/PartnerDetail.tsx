"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Building2, CheckCircle, Shield, Zap, Globe, HeadphonesIcon, BarChart3, Phone, Video, MessageSquare, Bot, Brain } from "lucide-react";
import { motion } from "framer-motion";
import DecorativeCircle from "@/components/DecorativeCircle";

const zoomLogo = "/assets/logos/zoom.png";
const ringcentralLogo = "/assets/logos/ringcentral.png";
const gotoLogo = "/assets/logos/goto.svg";
const dialpadLogo = "/assets/logos/dialpad.svg";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

interface PartnerData {
  name: string;
  logo: string;
  heroImage: string;
  tagline: string;
  description: string;
  heroGradient: string;
  capabilities: { icon: React.ElementType; title: string; description: string }[];
  products: { name: string; description: string }[];
  whyPartner: string[];
  stats: { value: string; label: string }[];
}

const partners: Record<string, PartnerData> = {
  zoom: {
    name: "Zoom",
    logo: zoomLogo,
    heroImage: "/assets/blog/ai-companion-zoom.jpg",
    tagline: "Unified Communications & AI-Powered Customer Experience",
    description: "As a certified Zoom partner, Fortay Connect delivers the full Zoom platform, from Zoom Phone and Zoom Contact Centre to Zoom AI Companion, helping organisations unify communications and elevate customer experience with AI-native tools.",
    heroGradient: "from-blue-600/20 to-blue-900/40",
    capabilities: [
      { icon: Phone, title: "Zoom Phone", description: "Enterprise cloud phone system with intelligent call routing, analytics and global PSTN connectivity." },
      { icon: Video, title: "Zoom Workplace", description: "Unified meetings, chat, whiteboard and collaboration tools powered by AI Companion." },
      { icon: HeadphonesIcon, title: "Zoom Contact Centre", description: "Omnichannel contact centre with AI-powered virtual agents and workforce management." },
      { icon: Bot, title: "Zoom AI Companion", description: "Built-in AI assistant for meeting summaries, smart scheduling and real-time coaching." },
    ],
    products: [
      { name: "Zoom Phone", description: "Replace legacy PBX with a cloud-native phone system" },
      { name: "Zoom Contact Centre", description: "Omnichannel CX with AI virtual agents" },
      { name: "Zoom Workplace", description: "Unified collaboration platform" },
      { name: "Zoom AI Companion", description: "AI assistant embedded across the platform" },
      { name: "Zoom Revenue Accelerator", description: "Conversational intelligence for sales teams" },
    ],
    whyPartner: [
      "Platinum-certified Zoom partner with deep deployment expertise",
      "End-to-end delivery from advisory through to managed services",
      "Proven migration paths from legacy UC and contact centre platforms",
      "AI Companion integration and optimisation specialists",
      "UK-based support and ongoing platform management",
    ],
    stats: [
      { value: "Platinum", label: "Partner Status" },
      { value: "500+", label: "Zoom Deployments" },
      { value: "99.999%", label: "Platform Uptime" },
      { value: "50+", label: "Countries Supported" },
    ],
  },
  ringcentral: {
    name: "RingCentral",
    logo: ringcentralLogo,
    heroImage: "/assets/blog/ms-ringcentral.jpg",
    tagline: "Intelligent Cloud Communications & Contact Centre",
    description: "Fortay Connect is a Gold-tier RingCentral partner, delivering RingCentral's unified communications and contact centre solutions to help businesses streamline operations, reduce costs and deliver exceptional customer experiences.",
    heroGradient: "from-orange-600/20 to-orange-900/40",
    capabilities: [
      { icon: Phone, title: "RingCentral RingEX", description: "All-in-one cloud communications with calling, messaging and video meetings." },
      { icon: HeadphonesIcon, title: "RingCentral RingCX", description: "AI-first contact centre with omnichannel routing and workforce engagement." },
      { icon: Brain, title: "RingSense AI", description: "Conversational intelligence and AI insights embedded across the platform." },
      { icon: Globe, title: "Global Office", description: "Multi-site and international deployments with local number provisioning." },
    ],
    products: [
      { name: "RingEX", description: "Unified cloud communications platform" },
      { name: "RingCX", description: "AI-powered contact centre solution" },
      { name: "RingSense AI", description: "Conversation intelligence and analytics" },
      { name: "RingCentral for Microsoft Teams", description: "Direct routing and embedded calling" },
    ],
    whyPartner: [
      "Gold-tier partner with certified deployment capabilities",
      "Expertise in Microsoft Teams integration and direct routing",
      "Migration specialists from legacy PBX to RingCentral",
      "Contact centre transformation with RingCX",
      "Ongoing managed services and optimisation",
    ],
    stats: [
      { value: "Gold", label: "Partner Tier" },
      { value: "400+", label: "Deployments" },
      { value: "99.999%", label: "SLA Uptime" },
      { value: "40+", label: "Countries" },
    ],
  },
  goto: {
    name: "GoTo",
    logo: gotoLogo,
    heroImage: "/assets/blog/cloud-cc.jpg",
    tagline: "Simplified Business Communications & IT Support",
    description: "Fortay Connect partners with GoTo to deliver streamlined cloud communications and IT management solutions. GoTo Connect brings together phone, meetings and messaging in a single platform built for simplicity and reliability.",
    heroGradient: "from-teal-600/20 to-teal-900/40",
    capabilities: [
      { icon: Phone, title: "GoTo Connect", description: "Cloud phone system with integrated meetings, messaging and contact centre capabilities." },
      { icon: HeadphonesIcon, title: "GoTo Contact Centre", description: "Multi-channel contact centre with analytics, call flows and agent dashboards." },
      { icon: Shield, title: "GoTo Resolve", description: "Remote IT support and management with zero-trust security architecture." },
      { icon: Zap, title: "GoTo Connect CX", description: "Enhanced customer experience features with AI-powered call routing." },
    ],
    products: [
      { name: "GoTo Connect", description: "Unified cloud communications" },
      { name: "GoTo Contact Centre", description: "Multi-channel customer engagement" },
      { name: "GoTo Resolve", description: "Remote IT support and management" },
      { name: "GoTo Connect CX", description: "AI-enhanced customer experience" },
    ],
    whyPartner: [
      "Certified GoTo partner with proven SMB and mid-market expertise",
      "Rapid deployment and migration from legacy phone systems",
      "Combined UC and IT support solutions under one provider",
      "Cost-effective alternative for growing businesses",
      "UK-based ongoing support and management",
    ],
    stats: [
      { value: "300+", label: "Deployments" },
      { value: "SMB", label: "Specialisation" },
      { value: "30-day", label: "Avg Deployment" },
      { value: "24/7", label: "Support" },
    ],
  },
  dialpad: {
    name: "Dialpad",
    logo: dialpadLogo,
    heroImage: "/assets/blog/ai-sales-analytics.jpg",
    tagline: "AI-Native Business Communications",
    description: "Fortay Connect partners with Dialpad to deliver AI-native communications. Dialpad is built from the ground up with artificial intelligence at its core, providing real-time transcription, coaching and analytics across every business conversation.",
    heroGradient: "from-purple-600/20 to-purple-900/40",
    capabilities: [
      { icon: Brain, title: "Dialpad Ai", description: "Real-time transcription, sentiment analysis and AI-powered coaching built into every call." },
      { icon: Phone, title: "Dialpad Connect", description: "Cloud business phone system with unified messaging and video." },
      { icon: HeadphonesIcon, title: "Dialpad Ai Contact Centre", description: "Omnichannel contact centre with AI CSAT scoring and real-time assist." },
      { icon: BarChart3, title: "Dialpad Ai Sales", description: "Sales dialler with AI coaching, call scoring and CRM integration." },
    ],
    products: [
      { name: "Dialpad Connect", description: "AI-powered business communications" },
      { name: "Dialpad Ai Contact Centre", description: "Intelligent omnichannel CX" },
      { name: "Dialpad Ai Sales", description: "AI sales coaching and dialler" },
      { name: "Dialpad Ai Meetings", description: "Smart video conferencing" },
    ],
    whyPartner: [
      "Specialist in AI-native communications deployment",
      "Deep expertise in Dialpad's AI capabilities and configuration",
      "Integration with Salesforce, HubSpot and Microsoft 365",
      "Migration from legacy systems with minimal disruption",
      "Ongoing AI optimisation and performance monitoring",
    ],
    stats: [
      { value: "AI-First", label: "Platform" },
      { value: "100%", label: "Cloud Native" },
      { value: "Real-time", label: "Transcription" },
      { value: "70+", label: "Integrations" },
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const PartnerDetail = ({ slug }: { slug: string }) => {
  // slug received via props
  const partner = partners[slug || ""];

  if (!partner) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Partner Not Found</h1>
            <Button asChild><Link href="/about">Back to Company</Link></Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-foreground py-14 text-background md:py-20">
          <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
          <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-72 md:w-72" />
          <div className="container relative z-10">
            <Link href="/partners" className="mb-6 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> All Partners
            </Link>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              {/* Left: content */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                  <Building2 className="h-3.5 w-3.5" /> {partner.name} Certified Partner, UK
                </span>
                <img src={partner.logo} alt={partner.name} className="mb-5 h-8 w-auto brightness-0 invert" />
                <h1 className="font-display text-3xl font-extrabold leading-[1.1] tracking-tight md:text-4xl lg:text-5xl">
                  Certified {partner.name}{" "}
                  <span className="text-primary">Deployment &amp; CX Specialists</span>
                </h1>
                <p className="mt-3 text-base font-medium text-primary/80 md:text-lg">{partner.tagline}</p>
                <p className="mt-4 text-base leading-relaxed text-background/60">{partner.description}</p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                      Discuss {partner.name} Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
              {/* Right: image */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-background/10 shadow-2xl shadow-black/40"
              >
                <img src={partner.heroImage} alt={`${partner.name} solutions`} className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-muted/30 py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {partner.stats.map((stat, i) => (
                <motion.div key={stat.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold md:text-4xl">Core Capabilities</h2>
              <p className="mt-4 text-muted-foreground">Key platform capabilities we deploy and optimise for our clients.</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2">
              {partner.capabilities.map((cap, i) => (
                <motion.div key={cap.title} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
                  <cap.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{cap.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="bg-muted/30 py-20 md:py-28">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="font-display text-3xl font-bold md:text-4xl">{partner.name} Products We Deliver</h2>
            </motion.div>
            <div className="mx-auto max-w-2xl space-y-4">
              {partner.products.map((product, i) => (
                <motion.div key={product.name} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Fortay Connect */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-display text-3xl font-bold md:text-4xl">
                  Why Fortay Connect for {partner.name}?
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  We don't just resell, we architect, deploy and manage {partner.name} solutions aligned to your commercial outcomes.
                </p>
              </motion.div>
              <div className="space-y-4">
                {partner.whyPartner.map((point, i) => (
                  <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-muted-foreground">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary/5 py-20 md:py-28">
          <div className="container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Ready to explore {partner.name}?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's discuss how {partner.name} can transform your communications and customer experience.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Book a {partner.name} Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PartnerDetail;
