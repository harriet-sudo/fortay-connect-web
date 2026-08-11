"use client";

import Link from "next/link";
import PageFAQSection from "@/components/PageFAQSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import { CheckCircle2, TrendingUp, Users, AlertTriangle, ShieldAlert, ArrowLeft, ArrowRight, ClipboardCheck, Headphones } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const diagnostics = [
  {
    number: "01",
    title: "Rising Cost Per Contact",
    desc: "Manual handling of repetitive interactions drives operational cost.",
    impacts: ["Staffing grows linearly with demand", "Wait times increase", "Margins shrink"],
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Fragmented Customer Journeys",
    desc: "Customers move across voice, chat and messaging without continuity.",
    impacts: ["Customers repeat information", "Agents lack context", "Experience degrades"],
    icon: Users,
  },
  {
    number: "03",
    title: "Agent Experience Friction",
    desc: "Agents operate across multiple systems and dashboards.",
    impacts: ["Cognitive overload", "Toggle tax", "Burnout and attrition"],
    icon: AlertTriangle,
  },
  {
    number: "04",
    title: "AI Without Governance",
    desc: "AI pilots are deployed without structured oversight.",
    impacts: ["Escalation failures", "Security exposure", "Reputational risk"],
    icon: ShieldAlert,
  },
];

const readinessCriteria = [
  "Cost per contact is rising",
  "Agents manage repetitive demand",
  "Customers repeat information across channels",
  "AI has been tested but not structured",
  "Reporting lacks real-time visibility",
];

const faqs = [
  {
    q: "What is an AI-enabled contact centre?",
    a: "An AI-enabled contact centre integrates automation, intelligent routing and analytics into voice and digital channels to improve efficiency and customer experience.",
  },
  {
    q: "What is CCaaS?",
    a: "CCaaS (Contact Centre as a Service) is a cloud-based solution enabling scalable omnichannel customer engagement without on-premise infrastructure.",
  },
  {
    q: "How does AI reduce cost per contact?",
    a: "AI virtual agents absorb repetitive interactions and automate verification, reducing staffing pressure and lowering cost per interaction.",
  },
  {
    q: "How long does a contact centre transformation take?",
    a: "Most programmes take 3–9 months depending on integration complexity and deployment scope.",
  },
];

export default function ContactCentreTechnology() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
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
                <Headphones className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Contact Centre
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              AI-Enabled Contact Centres{" "}
              <span className="text-primary">Designed for Scale, Compliance &amp; Revenue Growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/60">
              Customer experience is no longer a support function. It is a commercial control centre.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 font-display text-xl font-bold">
              This is architectural redesign,{" "}
              <span className="text-primary">not a platform refresh.</span>
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book CX Strategy Session <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="teal" asChild>
                <Link href="/assessment">
                  <ClipboardCheck className="mr-2 h-4 w-4" /> Take CX Assessment
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Diagnostic
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where Contact Centres Break Down
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Contact centres don't fail because of technology. They drift when systems, workflows and AI evolve separately.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid gap-6 md:grid-cols-2">
            {diagnostics.map(({ number, title, desc, impacts, icon: Icon }) => (
              <motion.div key={number} variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-teal/30 leading-none">{number}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-teal" />
                      <h3 className="font-semibold text-foreground">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
                <ul className="space-y-1 pl-4 border-l border-teal/20">
                  {impacts.map((i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal inline-block" />{i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Self-Qualification */}
      <section className="py-24 bg-muted/40">
        <div className="container max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Self-Qualification
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Is It Time to Re-Architect Your Contact Centre?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Contact centre transformation delivers the strongest impact when:
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-8 text-left max-w-xl mx-auto">
              {readinessCriteria.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="text-foreground font-semibold mb-8">
              If three or more apply, your CX architecture likely requires redesign.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal text-navy font-semibold hover:bg-teal/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a CX Strategy Session</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/assessment">Take the CX Assessment</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PageFAQSection title="Contact Centre FAQs" faqs={faqs} />
    </div>
  );
}
