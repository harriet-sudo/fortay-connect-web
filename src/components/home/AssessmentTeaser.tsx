"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DecorativeCircle from "@/components/DecorativeCircle";

const steps = [
  "Evaluate your current CX maturity",
  "Identify quick wins and strategic gaps",
  "Get a personalised action plan",
];

const AssessmentTeaser = () => (
  <section className="relative overflow-hidden bg-foreground py-24">
    <DecorativeCircle color="teal" className="-top-32 -left-24 opacity-30" />
    <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -right-20 opacity-40" size="h-56 w-56 md:h-80 md:w-80" />

    <div className="container relative z-10">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
            Free tool
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-background md:text-4xl">
            How ready is your CX?
          </h2>
          <p className="mt-4 text-lg text-background/60">
            Take our 2-minute assessment and get a personalised score with
            actionable recommendations — no strings attached.
          </p>
          <ul className="mt-6 space-y-3">
            {steps.map((s) => (
              <li key={s} className="flex items-center gap-3 text-sm text-background/70">
                <ClipboardCheck className="h-5 w-5 shrink-0 text-primary" />
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/assessment">
                Take the CX Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Right — visual card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center"
        >
          <div className="relative w-full max-w-sm rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm">
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <ClipboardCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-background">CX Readiness Score</h3>
            </div>
            {/* Fake progress bars */}
            {[
              { label: "Technology", width: "75%" },
              { label: "Customer Journey", width: "55%" },
              { label: "AI Readiness", width: "40%" },
            ].map((bar) => (
              <div key={bar.label} className="mb-4">
                <div className="mb-1 flex justify-between text-xs text-background/50">
                  <span>{bar.label}</span>
                  <span>?</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-background/10">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: bar.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>
              </div>
            ))}
            <p className="mt-4 text-center text-xs text-background/40">
              Find out your score →
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AssessmentTeaser;
