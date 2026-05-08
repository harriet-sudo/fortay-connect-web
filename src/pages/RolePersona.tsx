"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, Calendar, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import TrustedBySection from "@/components/TrustedBySection";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

export type RolePersonaProps = {
  roleLabel: string;
  roleSlug: string;
  pain: string;
  subhead: string;
  problemStats: { stat: string; description: string }[];
  outcomes: { customer: string; sector: string; headline: string; detail: string }[];
  monthTwo: string[];
  kpis: { metric: string; label: string }[];
  faqs: { q: string; a: string }[];
  finalCta: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const RolePersona = ({
  roleLabel,
  roleSlug,
  pain,
  subhead,
  problemStats,
  outcomes,
  monthTwo,
  kpis,
  faqs,
  finalCta,
}: RolePersonaProps) => (
  <div className="min-h-screen bg-background">
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
        <div className="container relative z-10">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              For the {roleLabel}
            </motion.span>
            <motion.h1 variants={fadeUp} className="font-display text-3xl font-extrabold leading-[1.15] tracking-tight md:text-5xl">
              {pain}
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg text-background/70">
              {subhead}
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book 30 minutes with Mark
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-background/20 text-background hover:bg-background/10">
                <Link href="/assessment">
                  <ClipboardCheck className="mr-2 h-4 w-4" />
                  Take the 5 minute assessment
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem stats, the maths the role recognises */}
      <section className="py-20">
        <div className="container">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              The pattern we see
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              The numbers a {roleLabel} should care about
            </h2>
            <p className="mt-3 text-muted-foreground">
              Pulled from the last 50 audits we have run. If two or more of these match your estate, we should talk.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {problemStats.map((s, i) => (
              <motion.div
                key={s.description}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <p className="font-display text-4xl font-extrabold text-primary">{s.stat}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustedBySection />

      {/* Outcomes, named or anonymised */}
      <section className="relative overflow-hidden bg-muted py-20">
        <DecorativeCircle color="teal" variant="disc" className="-top-20 -left-16 opacity-15" size="h-56 w-56" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-24 -right-12 opacity-20" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Three outcomes
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              What it looks like when this works
            </h2>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-3">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
              >
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">{o.customer}</span>
                  <span className="text-xs text-muted-foreground">{o.sector}</span>
                </div>
                <h3 className="font-display text-lg font-bold leading-snug text-foreground">{o.headline}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Month two, removes implementation risk */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="purple" className="-top-28 -right-20 opacity-15" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10">
          <motion.div className="mb-12 max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Month two
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              What week 9 looks like, not week 1
            </h2>
            <p className="mt-4 text-background/60">
              Most suppliers sell the go live moment. We measure ourselves on what your team is doing 90 days after the platform is in. Here is what that looks like.
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
                className="flex items-start gap-3 rounded-xl border border-background/10 bg-background/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-background/80">{m}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI dashboard */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <motion.div className="mx-auto mb-12 max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              The dashboard
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              The KPIs we report against every quarter
            </h2>
            <p className="mt-3 text-muted-foreground">
              These are the numbers you will get on a single page. Same numbers, every 90 days, against the targets we agreed in week one.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center divide-x divide-border">
            {kpis.map((k) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center px-6 py-4 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-primary">{k.metric}</p>
                <p className="mt-1 max-w-[140px] text-xs text-muted-foreground">{k.label}</p>
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
              The questions {roleLabel}s ask us before they sign
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
              {finalCta}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-foreground/70">
              30 minutes with Mark Taylor. Mark is one of the two co founders. He runs the discovery call himself, not a junior.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a {roleLabel} strategy call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                <Link href={`/case-studies?role=${roleSlug}`}>
                  See more outcomes
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </div>
);

export default RolePersona;
