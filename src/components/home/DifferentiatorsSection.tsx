"use client";

import { motion } from "framer-motion";
import { Trophy, Workflow, Banknote } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const proofs = [
  {
    icon: Banknote,
    headline: "40% cost reduction in 6 weeks",
    customer: "CA Auto Finance",
    detail:
      "Three platforms consolidated to one, FCA compliant call recording end to end, audit to live in six weeks. Justine Long, the CFO, asked Mark to come back for the next phase.",
    color: "teal",
  },
  {
    icon: Workflow,
    headline: "Phone upgrade became a CX overhaul",
    customer: "Ashtons Legal",
    detail:
      "Ben Hallatt brought us in for a phone replacement. We left with a contact centre, AI transcription that bills against the matter file, and a 35% faster client response time.",
    color: "purple",
  },
  {
    icon: Trophy,
    headline: "5 sites, 60% fewer tools, one supplier",
    customer: "INEOS",
    detail:
      "We did not sell technology. We mapped how the business works, then designed the stack to match. £80k a year out of operational cost, plus 24/7 support coverage that did not exist before.",
    color: "teal",
  },
];

const DifferentiatorsSection = () => (
  <section className="relative overflow-hidden bg-muted py-20">
    <DecorativeCircle color="purple" variant="ring" className="-bottom-20 -right-10 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
    <DecorativeCircle color="teal" variant="disc" className="-top-16 -left-10 opacity-10" size="h-40 w-40 md:h-56 md:w-56" />

    <div className="container relative z-10">
      <motion.div
        className="mx-auto mb-12 max-w-2xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
          How we prove it
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Three named customers.{" "}
          <span className="font-medium text-foreground/40">Three measurable outcomes.</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Not a metric wall. Real organisations, real numbers, real before and after.
        </p>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-3">
        {proofs.map((p, i) => {
          const Icon = p.icon;
          const isTeal = p.color === "teal";
          return (
            <motion.div
              key={p.customer}
              className={`group flex flex-col rounded-2xl border px-6 py-7 transition-all duration-200 hover:scale-[1.02] ${
                isTeal
                  ? "border-primary/20 bg-primary/10 hover:bg-primary/15"
                  : "border-purple/20 bg-purple/10 hover:bg-purple/15"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${isTeal ? "bg-primary/20" : "bg-purple/20"}`}>
                  <Icon className={`h-5 w-5 ${isTeal ? "text-primary" : "text-purple"}`} strokeWidth={1.75} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest ${isTeal ? "text-primary" : "text-purple"}`}>
                  {p.customer}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                {p.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.detail}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        className="mx-auto mt-10 max-w-2xl text-center text-sm italic text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Eight more named customers in the trusted by row above. Their outcomes are different, but the pattern is the same: we measure the result, then we keep measuring it for years afterwards.
      </motion.p>
    </div>
  </section>
);

export default DifferentiatorsSection;
