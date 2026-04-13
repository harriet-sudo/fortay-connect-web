"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, ShoppingCart, Factory, Scale, ArrowLeft } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const industryData: Record<string, {
  title: string;
  icon: typeof Building2;
  headline: string;
  overview: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
}> = {
  "financial-services": {
    title: "Financial Services",
    icon: Building2,
    headline: "Secure, compliant CX transformation for financial institutions",
    overview:
      "Financial services organisations face unique pressures — from strict regulatory requirements to rising customer expectations for seamless digital experiences. We help banks, insurers, and wealth managers deploy AI-powered communications that drive efficiency while maintaining full compliance.",
    challenges: [
      { title: "Regulatory Compliance", description: "Navigating FCA, PCI-DSS, and GDPR requirements across all customer communication channels." },
      { title: "Customer Authentication", description: "Balancing security with frictionless customer experiences across voice, chat, and digital channels." },
      { title: "Legacy System Integration", description: "Connecting modern CX platforms with core banking systems and existing infrastructure." },
      { title: "Fraud Prevention", description: "Leveraging AI to detect and prevent fraud in real-time across communication channels." },
    ],
    solutions: [
      { title: "Compliant AI Deployment", description: "AI-powered automation that meets regulatory standards with full audit trails and data residency controls." },
      { title: "Omnichannel Orchestration", description: "Unified customer journeys across voice, video, chat, and email with complete interaction history." },
      { title: "Intelligent Routing", description: "Skills-based routing with AI-driven intent detection to connect customers with the right specialist instantly." },
      { title: "Analytics & Reporting", description: "Real-time dashboards and compliance reporting to monitor service quality and regulatory adherence." },
    ],
  },
  "retail": {
    title: "Retail",
    icon: ShoppingCart,
    headline: "Connected customer experiences across every retail touchpoint",
    overview:
      "Modern retail demands seamless experiences across online stores, physical locations, and every channel in between. We help retailers deploy intelligent CX solutions that personalise interactions, handle peak demand, and turn every customer touchpoint into a revenue opportunity.",
    challenges: [
      { title: "Peak Season Scalability", description: "Handling 10x contact volumes during Black Friday, Christmas, and seasonal peaks without service degradation." },
      { title: "Channel Fragmentation", description: "Customers expect consistent experiences whether they're in-store, on the app, or on social media." },
      { title: "Personalisation at Scale", description: "Delivering relevant, personalised interactions across millions of customer journeys." },
      { title: "Returns & Order Enquiries", description: "Automating high-volume, repetitive enquiries to free agents for complex issues." },
    ],
    solutions: [
      { title: "AI-Powered Self-Service", description: "Intelligent chatbots and voice assistants that handle order tracking, returns, and FAQs automatically." },
      { title: "Unified Commerce CX", description: "Seamless customer experience across web, app, social, and in-store with shared context." },
      { title: "Workforce Optimisation", description: "AI-driven forecasting and scheduling to match agent capacity with demand patterns." },
      { title: "Proactive Engagement", description: "Automated outbound notifications for delivery updates, promotions, and re-engagement campaigns." },
    ],
  },
  "manufacturing": {
    title: "Manufacturing",
    icon: Factory,
    headline: "Modernise communications across your manufacturing operations",
    overview:
      "Manufacturing businesses operate across multiple sites, time zones, and teams — from the factory floor to the boardroom. We help manufacturers replace fragmented communication tools with unified platforms that improve collaboration, streamline supply chain interactions, and modernise customer-facing operations.",
    challenges: [
      { title: "Multi-Site Coordination", description: "Keeping teams aligned across factories, warehouses, offices, and remote locations." },
      { title: "Supply Chain Communication", description: "Managing supplier and partner interactions efficiently across complex supply networks." },
      { title: "Field Service Management", description: "Coordinating field engineers and service teams with real-time communication and scheduling." },
      { title: "Legacy Infrastructure", description: "Migrating from outdated PBX and on-premise systems to modern cloud platforms." },
    ],
    solutions: [
      { title: "Unified Communications", description: "Single platform for voice, video, messaging, and file sharing across all sites and teams." },
      { title: "Supply Chain Integration", description: "Automated communication workflows for order updates, delivery scheduling, and supplier coordination." },
      { title: "Mobile-First Field Service", description: "Equip field teams with mobile UC tools for real-time collaboration and customer updates." },
      { title: "Cloud Migration", description: "Phased migration from legacy systems to scalable cloud UC and CX platforms." },
    ],
  },
  "legal": {
    title: "Legal",
    icon: Scale,
    headline: "Secure, efficient client communications for legal firms",
    overview:
      "Law firms and legal departments handle highly sensitive information and complex client relationships. We help legal organisations deploy secure communication platforms that protect confidentiality, improve client responsiveness, and integrate with case management workflows.",
    challenges: [
      { title: "Data Security & Confidentiality", description: "Ensuring all client communications meet the highest security and encryption standards." },
      { title: "Client Responsiveness", description: "Meeting client expectations for rapid, accessible communication across preferred channels." },
      { title: "Billing Integration", description: "Tracking billable communication time accurately across voice, video, and messaging." },
      { title: "Document Collaboration", description: "Securely sharing and collaborating on sensitive documents with clients and external counsel." },
    ],
    solutions: [
      { title: "Encrypted Communications", description: "End-to-end encrypted voice, video, and messaging that meets legal industry security standards." },
      { title: "Client Portal Integration", description: "Seamless communication channels integrated with your case management and client portal systems." },
      { title: "AI-Assisted Triage", description: "Intelligent routing and prioritisation of client enquiries based on urgency and matter type." },
      { title: "Compliance & Archiving", description: "Automated recording, archiving, and retention policies for regulatory compliance." },
    ],
  },
};

const IndustryDetail = ({ slug }: { slug: string }) => {
  // slug received via props
  const industry = slug ? industryData[slug] : null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl font-bold">Industry not found</h1>
          <Link href="/industries" className="mt-4 inline-block text-primary hover:underline">
            ← Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="bg-foreground py-20 text-background">
          <div className="container">
            <Link
              href="/industries"
              className="mb-6 inline-flex items-center gap-1 text-sm text-background/60 hover:text-background"
            >
              <ArrowLeft className="h-4 w-4" /> All Industries
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                {industry.title}
              </h1>
              <p className="mt-4 text-lg text-background/70">
                {industry.headline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {industry.overview}
            </p>
          </div>
        </section>

        {/* Challenges */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Challenges We Address
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {industry.challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="rounded-lg border border-border bg-card p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16">
          <div className="container">
            <h2 className="font-display text-3xl font-bold text-foreground">
              How We Help
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {industry.solutions.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="rounded-lg border border-primary/20 bg-primary/5 p-6"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-foreground py-16 text-background">
          <div className="container text-center">
            <h2 className="font-display text-3xl font-bold">
              Ready to transform your {industry.title.toLowerCase()} CX?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-background/70">
              Book a walkthrough to see how we can help your organisation.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Walkthrough
                </a>
              </Button>
              <Button asChild variant="teal" size="lg">
                <Link href="/assessment">Take the CX Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default IndustryDetail;
