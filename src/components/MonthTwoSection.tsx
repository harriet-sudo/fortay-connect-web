"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

type MonthTwoSectionProps = {
  bullets: string[];
  intro?: string;
  heading?: string;
};

/**
 * Reusable Month two section. Drops into any industry, role or technology page.
 * Communicates what is in production at day 90, removing implementation risk fear.
 *
 * Usage:
 * <MonthTwoSection
 *   bullets={[
 *     "AI agent live on tier one queries with quality monitoring scored daily.",
 *     "FCA compliant call recording on every channel, audited weekly in the first 90 days.",
 *   ]}
 * />
 */
const MonthTwoSection = ({
  bullets,
  intro,
  heading = "What week 9 looks like",
}: MonthTwoSectionProps) => (
  <section className="relative overflow-hidden bg-purple-light py-20">
    <DecorativeCircle
      color="purple"
      variant="ring"
      className="-top-28 -right-16 opacity-20"
      size="h-48 w-48 md:h-64 md:w-64"
    />
    <div className="container relative z-10">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
          Month two
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
          {heading}
        </h2>
        <p className="mt-3 text-muted-foreground">
          {intro ??
            "90 days after go live. Same metrics, every quarter, against the targets agreed in week one."}
        </p>
      </motion.div>
      <div className="grid gap-3 md:grid-cols-2">
        {bullets.map((m, i) => (
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
);

export default MonthTwoSection;
