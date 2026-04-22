"use client";

import { motion } from "framer-motion";
import { Lightbulb, Building2, Rocket, BarChart3 } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    accent: "purple" as const,
    label: "Strategic Definition and Transformation Roadmap",
    subtitle: "For executive teams at the outset of CX, communications and AI transformation.",
    intro: "We define:",
    bullets: [
      "Commercial and operational objectives",
      "Transformation KPIs and success metrics",
      "Governance and accountability structure",
      "Future-state architecture blueprint",
      "Board-ready transformation roadmap",
    ],
    note: null,
    outcome: "Clear strategic direction before capital is deployed.",
  },
  {
    number: "02",
    icon: Building2,
    accent: "teal" as const,
    label: "Architecture Authority and Technology Strategy",
    subtitle: "For organisations requiring independent architectural leadership before selecting platforms.",
    intro: "We:",
    bullets: [
      "Design system architecture across CX, communications and AI",
      "Evaluate and shortlist technology options",
      "Lead commercial negotiation with suppliers",
      "Ensure architectural integrity across integrations",
      "De-risk AI deployment through governance frameworks",
    ],
    note: "This is strategic oversight, not implementation.",
    outcome: "Technology decisions aligned to long-term commercial intent.",
  },
  {
    number: "03",
    icon: Rocket,
    accent: "purple" as const,
    label: "Deployment and Engineering Leadership",
    subtitle: "For enterprises ready to move from architecture into controlled execution.",
    intro: "We:",
    bullets: [
      "Lead implementation planning and integration design",
      "Oversee engineering delivery",
      "Coordinate supplier and internal technical teams",
      "Align workflows and operational readiness",
      "Establish performance reporting frameworks",
    ],
    note: "This is structured execution, not supplier management.",
    outcome: "Disciplined deployment with measurable performance from day one.",
  },
  {
    number: "04",
    icon: BarChart3,
    accent: "teal" as const,
    label: "Ongoing Governance and Performance Optimisation",
    subtitle: "For organisations requiring sustained oversight post-implementation.",
    intro: "We:",
    bullets: [
      "Monitor performance against defined KPIs",
      "Optimise system efficiency and workflow alignment",
      "Govern AI evolution and expansion",
      "Maintain executive visibility and reporting cadence",
    ],
    note: null,
    outcome: "Sustained ROI and operational clarity long after deployment.",
  },
];

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <DecorativeCircle color="purple" className="-bottom-44 -right-16" size="h-56 w-56 md:h-80 md:w-80" />
      <DecorativeCircle color="teal" variant="disc" className="-top-20 -left-12 opacity-40" size="h-32 w-32 md:h-48 md:w-48" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
            How we work with you
          </p>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Enterprise transformation requires clarity at every stage.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Our involvement reflects the level of structural leadership required.
          </p>
        </motion.div>

        {/* Four stages, all exposed simultaneously on desktop */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s, i) => {
            const isTeal = s.accent === "teal";
            const accentText = isTeal ? "text-teal" : "text-purple";
            const accentBorder = isTeal ? "border-teal/25" : "border-purple/25";
            const accentBg = isTeal ? "bg-teal/5" : "bg-purple/5";
            const accentDot = isTeal ? "bg-teal" : "bg-purple";
            const accentRing = isTeal ? "border-teal bg-teal/10" : "border-purple bg-purple/10";
            const Icon = s.icon;

            return (
              <motion.article
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`flex h-full flex-col overflow-hidden rounded-2xl border ${accentBorder} ${accentBg} shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
              >
                {/* Header */}
                <div className={`border-b ${accentBorder} px-6 py-5`}>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${accentRing}`}>
                      <Icon className={`h-5 w-5 ${accentText}`} strokeWidth={2} />
                    </div>
                    <span className={`font-display text-3xl font-black leading-none ${accentText}`}>
                      {s.number}
                    </span>
                  </div>
                  <h3 className={`font-display text-lg font-bold leading-snug ${accentText}`}>
                    {s.label}
                  </h3>
                  <p className="mt-2 text-xs italic leading-snug text-muted-foreground">
                    {s.subtitle}
                  </p>
                  {s.note && (
                    <p className={`mt-3 inline-block rounded-lg border ${accentBorder} bg-card px-2.5 py-1 text-[11px] font-semibold ${accentText}`}>
                      {s.note}
                    </p>
                  )}
                </div>

                {/* Bullets */}
                <div className="flex flex-1 flex-col gap-3 px-6 py-5">
                  <p className={`text-[10px] font-black uppercase tracking-widest ${accentText}`}>
                    {s.intro}
                  </p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85">
                        <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accentDot}`} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome footer */}
                <div className={`mt-auto border-t ${accentBorder} ${accentBg} px-6 py-4`}>
                  <p className={`mb-1 text-[10px] font-black uppercase tracking-widest ${accentText}`}>
                    Outcome
                  </p>
                  <p className={`text-sm font-semibold leading-snug ${accentText}`}>
                    {s.outcome}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
