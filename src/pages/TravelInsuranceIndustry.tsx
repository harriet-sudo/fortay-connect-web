"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import TrustedBySection from "@/components/TrustedBySection";
import {
  ArrowLeft,
  ArrowRight,
  Plane,
  ShieldCheck,
  Bot,
  TrendingDown,
  Clock,
  CheckCircle2,
  ChevronDown,
  Download,
  AlertTriangle,
  PhoneCall,
} from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const pressurePoints = [
  { text: "Peak season volume spikes 4 to 7 times average. Genesys licensing penalises that.", icon: TrendingDown },
  { text: "Claims first notice of loss must be triaged inside 60 minutes. Most policies say so.", icon: Clock },
  { text: "AI agents are now table stakes for medical assistance lines. The buyer expects 24/7.", icon: Bot },
  { text: "Multi country regulation. UK, EU, Australia, US, all different. The platform has to handle it.", icon: ShieldCheck },
  { text: "Brand risk on AI is acute when the customer is mid disaster.", icon: AlertTriangle },
  { text: "Cost per call has tripled since 2022. Every BDM in the sector wants the AI maths.", icon: PhoneCall },
];

const realChallenges = [
  {
    num: "01",
    title: "Genesys complexity exceeds team capacity",
    description:
      "We have audited four travel insurers running Genesys with one or two engineers managing it. The platform is enterprise grade. The team is not. Adoption stalls.",
  },
  {
    num: "02",
    title: "FNOL triage is the highest stakes AI use case in the sector",
    description:
      "First notice of loss is the single most emotionally loaded inbound call you will ever receive. The brand cost of getting it wrong is enormous. Most platforms do not understand this.",
  },
  {
    num: "03",
    title: "Peak season scaling costs more than the platform itself",
    description:
      "Licensing models that punish seasonal businesses are common. The right architecture moves the cost to per minute or per conversation, not per seat per month.",
  },
  {
    num: "04",
    title: "Multi country compliance becomes a deployment blocker",
    description:
      "Call recording rules, consent rules, retention rules all differ by jurisdiction. The platform has to handle it without a 12 page runbook for the agent to follow.",
  },
];

const aiUseCases = [
  "Pre travel policy queries handled in customer's language, 24/7, no human queue",
  "First notice of loss triaged with empathetic tone, escalated to a human inside 30 seconds when the case requires it",
  "Medical assistance routing with verified ID and policy lookup before the human picks up",
  "Cancellation and modification self service, end to end, without an agent touch",
  "Complaint detection on every call, sentiment scored, brand risk flagged in real time",
];

const monthTwo = [
  "AI agent live in production handling pre travel queries. Pre and post travel call volumes split, measured separately.",
  "FNOL flows piloted on one product line, not all of them. Empathy testing complete with the named claims handlers.",
  "Quality monitoring on AI conversations daily, with weekly tone calibration in the first month.",
  "Peak season cost model rebuilt. Same volume at 60% of the previous Genesys spend, on average across our last three deployments.",
  "Multi country rules documented and live. Call recording, consent, retention all jurisdiction aware.",
  "Quarterly review with the head of CX, the chief claims officer and Mark. The numbers, the risks, the next phase.",
];

const businessImpact = [
  { metric: "↓ 60%", label: "Peak season cost per call" },
  { metric: "↑ 4×", label: "Channel scale at constant cost" },
  { metric: "↓ 30s", label: "AI to human escalation" },
  { metric: "↑ 4.6", label: "CSAT on AI handled queries" },
  { metric: "0", label: "Compliance breaches across last 8 deployments" },
  { metric: "60 min", label: "FNOL triage SLA hit rate above 95%" },
];

const faqs = [
  {
    q: "Why move off Genesys?",
    a: "Most travel insurers we audit are running Genesys with a team that cannot maintain it. The platform is the right one for a 10,000 agent operation. It is the wrong one for a 100 agent operation with a single telephony engineer doubling on AI. We have moved insurers to Boost AI, Zoom Contact Centre and RingCX depending on volume and team capacity. The recommendation is yours after the audit.",
  },
  {
    q: "How do you handle FNOL? It is the highest stakes call we take.",
    a: "Carefully. Empathy testing is non negotiable in our deployment. We script the AI tone with your named claims handlers in the room. We test it with edge cases (medical, bereavement, theft mid trip) before any traffic touches it. Escalation to human is inside 30 seconds when the conversation pattern flags distress.",
  },
  {
    q: "Can you handle multi country compliance?",
    a: "Yes. UK FCA, EU GDPR with country variations, Australian privacy principles, US state level rules where relevant. The platform handles call recording, consent and retention by rule, not by manual handler. We have deployed this for two travel insurers and one underwriter.",
  },
  {
    q: "What does this cost per call?",
    a: "Conversational AI at around 25p to 80p per minute depending on platform and language. Compared with a fully loaded UK agent at roughly £25 per hour, the breakeven is around 30% deflection on a single product line. We will model your specific maths in the audit.",
  },
  {
    q: "How do you stop the brand risk on AI mid disaster?",
    a: "Three things. The escalation rules are written with you before go live. Tone breach detection runs daily, not weekly, in the first 90 days. And we are accountable for the result. If the AI under performs against the agreed CSAT score, we fix it inside 30 days or you have a written exit.",
  },
];

const ctaExploring = [
  "AI virtual agents for pre travel and FNOL",
  "Peak season cost models that scale with volume not seats",
  "Multi country compliance built in, not bolted on",
  "Genesys alternatives that match your team capacity",
  "Boost AI, Zoom Contact Centre, RingCX, Dialpad evaluation",
];

const TravelInsuranceIndustry = () => (
  <div className="min-h-screen bg-background">
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
        <div className="container relative z-10">
          <Link
            href="/industries"
            className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All industries
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                <Plane className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Travel insurance
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              FNOL inside 60 minutes. Pre travel queries 24/7.{" "}
              <span className="text-primary">Without burning Genesys cash.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/60">
              Travel insurance is the highest stakes AI use case we deploy. Mid disaster customers, multi country compliance, peak season volume spikes that punish per seat licensing. Most platforms in the sector are wrong for the team that runs them.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-background/70">
              We have moved travel insurers off Genesys onto Boost AI, Zoom Contact Centre and RingCX, depending on volume and team capacity. Same call patterns, lower cost, AI agents that triage rather than transcribe.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a 30 minute call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-background/20 text-background hover:bg-background/10">
                <Link href="/assessment">
                  <Download className="mr-2 h-4 w-4" />
                  Take the 5 minute CX assessment
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <TrustedBySection />

      {/* Pressure points */}
      <section className="py-20">
        <div className="container">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              Sound familiar?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              The reality in travel insurance
            </h2>
            <p className="mt-3 text-muted-foreground">
              Six pressures we hear in every audit we run in this sector.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pressurePoints.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-destructive/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 transition-colors group-hover:bg-destructive/20">
                  <p.icon className="h-5 w-5 text-destructive" />
                </div>
                <span className="text-sm text-foreground">{p.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real challenges */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="purple" className="-top-28 -right-20 opacity-15" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10">
          <motion.div className="mb-12 max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              What we keep finding
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Four challenges specific to this sector
            </h2>
          </motion.div>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 sm:grid-cols-2">
            {realChallenges.map((c, i) => (
              <motion.div
                key={c.num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex flex-col gap-3 bg-foreground px-6 py-7"
              >
                <span className="font-display text-3xl font-extrabold text-primary">{c.num}</span>
                <p className="font-display text-base font-bold text-background">{c.title}</p>
                <p className="text-sm leading-relaxed text-background/60">{c.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI use cases */}
      <section className="relative overflow-hidden py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -right-16 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                AI agents in this sector
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                The five AI use cases that pay back inside one year
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                These are the use cases we have deployed for travel insurers and underwriters. Pre travel, mid trip, post trip. Each one with measured CSAT and measured cost reduction.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {aiUseCases.map((u, i) => (
                <motion.div
                  key={u}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{u}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Month two */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              Month two
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              What week 9 looks like
            </h2>
            <p className="mt-3 text-muted-foreground">
              Most suppliers measure success on go live day. We measure it on day 90. Here is what is in production by then.
            </p>
          </motion.div>
          <div className="grid gap-3 md:grid-cols-2">
            {monthTwo.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple" />
                <span className="text-sm leading-relaxed text-foreground">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business impact */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-24 -left-16 opacity-15" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              The numbers
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              The business impact
            </h2>
            <p className="mt-3 text-background/50">
              Averaged across travel insurance deployments in the last 24 months.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center divide-x divide-background/10">
            {businessImpact.map((b) => (
              <motion.div
                key={b.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center px-6 py-4 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-primary">{b.metric}</p>
                <p className="mt-1 max-w-[150px] text-xs text-background/60">{b.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12 text-center">
            <motion.p variants={fadeUp} className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">FAQ</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Questions travel insurance leaders ask us
            </motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} variants={fadeUp} className="group rounded-xl border border-border bg-card">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-display text-base font-bold text-foreground [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -right-16 opacity-30" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to fix the Genesys problem?
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
              30 minutes with Mark Taylor.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a travel insurance strategy call
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

export default TravelInsuranceIndustry;
