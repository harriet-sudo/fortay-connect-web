"use client";

import Link from "next/link";
import PageFAQSection from "@/components/PageFAQSection";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle, Phone, Video, MessageSquare, Bot,
  Brain, Shield, BarChart3, Star, Globe, Zap, Users, Building2, TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DecorativeCircle from "@/components/DecorativeCircle";
const zoomLogo = "/assets/logos/zoom.png";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const ecosystemItems = [
  { icon: Phone, label: "Zoom Phone", sub: "Global cloud telephony" },
  { icon: Video, label: "Zoom Workplace", sub: "Meetings & collaboration" },
  { icon: MessageSquare, label: "Zoom Contact Centre", sub: "Omnichannel CX" },
  { icon: Bot, label: "AI Companion", sub: "Embedded intelligence" },
  { icon: Brain, label: "Virtual Agent", sub: "AI-powered self-service" },
];

const certifications = [
  "Zoom Phone Deployment Certification",
  "Zoom Contact Centre (CX) Deployment Certification",
  "Zoom Contact Centre Support Certification",
];

const fortayValue = [
  { icon: Brain, title: "Platform Suitability Assessment", desc: "Independent evaluation of Zoom against your requirements." },
  { icon: Phone, title: "Telephony Migration & Porting", desc: "End-to-end number porting and legacy PBX migration planning." },
  { icon: MessageSquare, title: "CX Architecture Design", desc: "Contact centre routing, IVR and agent experience design." },
  { icon: Bot, title: "AI Companion Configuration", desc: "Tuned summaries, coaching and workflow automation." },
  { icon: Shield, title: "Compliance & Recording Frameworks", desc: "Secure call recording aligned to FCA, ISO and sector requirements." },
  { icon: Globe, title: "CRM & System Integration", desc: "Salesforce, HubSpot, Dynamics and custom API connectivity." },
];

const excels = [
  "Unified UCaaS + Contact Centre in one ecosystem",
  "AI-native roadmap, not bolt-on AI",
  "Strong video heritage + enterprise telephony",
  "Rapid feature innovation cycles",
  "Global scalability with consistent experience",
];

const alternatives = [
  "Deep contact centre customisation is the sole priority",
  "Existing investment in a specific vendor's ecosystem",
  "Legacy on-premise infrastructure with no cloud roadmap",
  "Highly specialist vertical compliance requirements",
];

const faqs = [
  { q: "What does Zoom Platinum Partner status mean?", a: "Platinum status reflects advanced certification, proven deployment capability and ongoing delivery performance within the Zoom partner ecosystem. It is the highest tier awarded to UK delivery partners." },
  { q: "Is Zoom Phone suitable for enterprise businesses?", a: "Yes. Zoom Phone provides enterprise-grade global cloud telephony with intelligent routing, compliance frameworks, analytics and deep integration capabilities." },
  { q: "What is Zoom Contact Centre?", a: "Zoom Contact Centre is a cloud-based omnichannel CX platform supporting voice, chat, messaging and AI-driven engagement — built natively within the Zoom ecosystem." },
  { q: "Does Zoom include AI capabilities?", a: "Yes. Zoom AI Companion provides transcription, summarisation, conversational intelligence and workflow enhancement across meetings and contact centre environments." },
  { q: "Can Zoom integrate with CRM systems?", a: "Yes. Zoom integrates with Salesforce, HubSpot, Microsoft Dynamics and other enterprise platforms via native connectors and open APIs." },
  { q: "Why use a partner instead of purchasing direct?", a: "Licences alone do not deliver transformation. Architecture, migration, integration and optimisation are what determine ROI. That is what Fortay Connect provides." },
];

// Section label pill — matches site-wide purple pill style
const SectionPill = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
    {children}
  </p>
);

const ZoomPartner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">

        {/* ── HERO — matches bg-foreground dark hero used site-wide ── */}
        <section className="relative overflow-hidden bg-foreground py-28 md:py-36">
          <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-20 opacity-20" size="h-96 w-96" />
          <DecorativeCircle color="purple" variant="ring" className="-bottom-24 -left-24 opacity-15" size="h-80 w-80" />

          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">

              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                <Star className="h-3.5 w-3.5 fill-primary" />
                Zoom Platinum Partner — UK
              </p>

              <img src={zoomLogo} alt="Zoom" className="mb-6 h-10 w-auto brightness-0 invert opacity-90" />

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-background md:text-5xl lg:text-6xl">
                Platinum-Certified Zoom<br />
                <span className="text-primary">Deployment & CX Specialists</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-background/60 leading-relaxed">
                Zoom has evolved from video conferencing into an AI-first communications platform spanning unified communications, contact centre, revenue intelligence and AI. We design and optimise Zoom environments that convert connectivity into commercial advantage.
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

              {/* Ecosystem connector strip */}
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
                    Request Free Zoom POC <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-background/20 text-background hover:bg-background/10" asChild>
                  <Link href="/contact">Speak to a Specialist</Link>
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
                { value: "Platinum", label: "Partner Status" },
                { value: "500+", label: "Zoom Deployments" },
                { value: "99.999%", label: "Platform Uptime" },
                { value: "50+", label: "Countries Supported" },
              ].map((stat, i) => (
                <motion.div key={stat.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY ZOOM ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <DecorativeCircle color="purple" variant="ring" className="-top-16 -right-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <div className="grid gap-16 md:grid-cols-2 items-center">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <SectionPill>Why Zoom</SectionPill>
                <h2 className="font-display text-3xl font-bold md:text-4xl leading-tight">
                  One AI-native platform.<br />
                  <span className="text-primary">Every channel unified.</span>
                </h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  Zoom unifies global voice, omnichannel CX, video collaboration and AI Companion within a single infrastructure. Its strength lies in ecosystem cohesion — voice, video, messaging and AI operate together without integration overhead.
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

        {/* ── R&D INVESTMENT — dark section ── */}
        <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
          <DecorativeCircle color="teal" variant="ring" className="-bottom-20 -right-20 opacity-15" size="h-80 w-80" />
          <DecorativeCircle color="purple" variant="disc" className="-top-12 -left-12 opacity-5" size="h-64 w-64" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Innovation Commitment
              </p>
              <h2 className="font-display text-3xl font-bold text-background md:text-4xl">Zoom's AI-First Investment</h2>
              <p className="mt-4 text-background/50 max-w-xl mx-auto">For organisations making long-term infrastructure decisions, innovation velocity matters. AI is embedded across the platform — not bolted on.</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              {[
                { icon: BarChart3, stat: "$0.852B", label: "Annual R&D Spend", sub: "FY2025" },
                { icon: TrendingUp, stat: "6.13%", label: "Year-on-Year Increase", sub: "R&D growth rate" },
                { icon: Zap, stat: "$260.9M", label: "Non-GAAP R&D Spend", sub: "Q2 FY2026" },
              ].map((item, i) => (
                <motion.div key={item.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="rounded-2xl border border-background/10 bg-background/5 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="font-display text-4xl font-extrabold text-primary">{item.stat}</p>
                  <p className="mt-2 font-semibold text-sm text-background">{item.label}</p>
                  <p className="mt-0.5 text-xs text-background/40">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPETITIVE POSITIONING ── */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <DecorativeCircle color="teal" variant="ring" className="-top-16 -left-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
              <SectionPill>Competitive Positioning</SectionPill>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Where Zoom Excels</h2>
              <p className="mt-4 text-muted-foreground">Our advisory is independent. We match platform to requirement.</p>
            </motion.div>

            <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold">Where Zoom Excels</h3>
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

        {/* ── WHERE FORTAY ADDS VALUE ── */}
        <section className="relative overflow-hidden bg-muted/30 border-y border-border py-20 md:py-28">
          <DecorativeCircle color="purple" variant="ring" className="-bottom-16 -right-16 opacity-10" size="h-72 w-72" />
          <div className="container relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center mb-14">
              <SectionPill>Fortay Connect Delivery</SectionPill>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Where Fortay Connect Adds Value</h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Platform capability is only one variable. Execution defines success.</p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
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
              We ensure Zoom delivers measurable outcomes — not just deployment completion.
            </motion.p>
          </div>
        </section>

        {/* ── CASE STUDY ── */}
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
                <SectionPill>Example Deployment</SectionPill>
                <h2 className="font-display text-3xl font-bold md:text-4xl">UK Financial Services</h2>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Requirements</p>
                    <div className="space-y-2">
                      {["Migration from legacy telephony", "Secure, compliant cloud comms", "Omnichannel CX", "AI-powered meeting summaries", "CRM integration"].map(r => (
                        <div key={r} className="flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                          <p className="text-xs text-muted-foreground">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Deployed</p>
                    <div className="space-y-2">
                      {["Zoom Phone — multi-site", "Zoom Contact Centre with intelligent routing", "AI Companion configuration", "Secure call recording framework", "CRM automation workflows"].map(r => (
                        <div key={r} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <p className="text-xs text-muted-foreground">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Outcomes</p>
                    <div className="space-y-3">
                      {["Reduced administrative time", "Improved routing efficiency", "Enhanced compliance oversight", "Greater cross-team visibility"].map(r => (
                        <div key={r} className="flex items-start gap-2">
                          <div className="mt-0.5 h-4 w-4 shrink-0 flex items-center justify-center rounded-full bg-primary/10">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          </div>
                          <p className="text-xs text-foreground font-medium">{r}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── RECOGNITION ── */}
        <section className="bg-muted/20 border-y border-border py-16">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="font-display text-2xl font-bold">Recognition & Certification</h2>
              <p className="mt-2 text-sm text-muted-foreground">Recognised within the Zoom ecosystem for delivery excellence.</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-3xl">
              {[
                { icon: Star, label: "Platinum Partner", sub: "Highest UK tier" },
                { icon: Phone, label: "Zoom Phone Competency", sub: "Certified deployment" },
                { icon: MessageSquare, label: "Contact Centre Support", sub: "Certified support" },
                { icon: Building2, label: "UK Transformation", sub: "Leading initiatives" },
              ].map((item, i) => (
                <motion.div key={item.label} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 hover:border-primary/30 transition-colors">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <PageFAQSection
          title="Zoom Partner FAQs"
          subtitle="Straight answers for organisations evaluating Zoom Phone, Zoom Contact Centre and AI Companion."
          faqs={faqs}
        />
        

        {/* ── POC CTA — dark hero style ── */}
        <section className="relative overflow-hidden bg-foreground py-24 md:py-32">
          <DecorativeCircle color="teal" variant="ring" className="-top-20 -right-20 opacity-20" size="h-96 w-96" />
          <DecorativeCircle color="purple" variant="ring" className="-bottom-20 -left-20 opacity-15" size="h-80 w-80" />

          <div className="container relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                  <Star className="h-3.5 w-3.5 fill-primary" />
                  Free Proof of Concept
                </p>
                <h2 className="font-display text-3xl font-extrabold text-background md:text-4xl">
                  Experience Zoom in<br />
                  <span className="text-primary">Your Environment</span>
                </h2>
                <p className="mt-5 text-background/60 leading-relaxed">
                  Rather than a generic demo, we offer a free POC account. Test Zoom Phone or Contact Centre within your real workflows — validate integrations, assess call quality, explore analytics.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left mb-10 max-w-xl mx-auto">
                  {[
                    "Experience Zoom Phone or Contact Centre live",
                    "Test AI Companion in your workflows",
                    "Validate CRM and system integrations",
                    "Assess call quality and routing",
                    "Explore reporting and analytics",
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="text-xs text-background/60">{f}</span>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-background/30 mb-6">Evaluate the platform properly. Then decide with confidence.</p>
                <Button size="lg" asChild className="bg-background text-foreground font-semibold hover:bg-background/90 shadow-lg">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                    Request a Free Zoom POC Account <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default ZoomPartner;
