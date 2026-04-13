"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Building2, Rocket, BarChart3 } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    label: "Strategic Definition & Transformation Roadmap",
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
    label: "Architecture Authority & Technology Strategy",
    subtitle: "For organisations requiring independent architectural leadership before selecting platforms.",
    intro: "We:",
    bullets: [
      "Design system architecture across CX, communications and AI",
      "Evaluate and shortlist technology options",
      "Lead commercial negotiation with vendors",
      "Ensure architectural integrity across integrations",
      "De-risk AI deployment through governance frameworks",
    ],
    note: "This is strategic oversight, not implementation.",
    outcome: "Technology decisions aligned to long-term commercial intent.",
  },
  {
    number: "03",
    icon: Rocket,
    label: "Deployment & Engineering Leadership",
    subtitle: "For enterprises ready to move from architecture into controlled execution.",
    intro: "We:",
    bullets: [
      "Lead implementation planning and integration design",
      "Oversee engineering delivery",
      "Coordinate vendor and internal technical teams",
      "Align workflows and operational readiness",
      "Establish performance reporting frameworks",
    ],
    note: "This is structured execution, not vendor management.",
    outcome: "Disciplined deployment with measurable performance from day one.",
  },
  {
    number: "04",
    icon: BarChart3,
    label: "Ongoing Governance & Performance Optimisation",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <section className="relative overflow-hidden bg-muted/20 py-24">
      <DecorativeCircle color="purple" className="-bottom-44 -right-16" size="h-56 w-56 md:h-80 md:w-80" />
      <DecorativeCircle color="teal" variant="disc" className="-top-20 -left-12 opacity-40" size="h-32 w-32 md:h-48 md:w-48" />

      <div className="container relative z-10">
        <motion.div
          className="mx-auto mb-16 max-w-2xl text-center"
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

        {/* Horizontal step icons */}
        <div className="relative grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0">
          {/* Connector line desktop */}
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-teal via-purple to-teal opacity-30 md:block" />

          {steps.map((step, i) => {
            const isActive = activeIndex === i;
            const isTeal = false;
            return (
              <motion.button
                key={step.number}
                onClick={() => toggle(i)}
                className="relative flex flex-col items-center text-center focus:outline-none group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className={`relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 transition-all duration-200
                  ${isActive
                    ? isTeal
                      ? "border-teal bg-teal/10 shadow-lg shadow-teal/25"
                      : "border-purple bg-purple/10 shadow-lg shadow-purple/25"
                    : "border-border bg-background group-hover:border-teal/40"
                  }`}>
                  <step.icon className={`h-8 w-8 transition-colors duration-200
                    ${isActive ? (isTeal ? "text-teal" : "text-purple") : "text-muted-foreground group-hover:text-teal"}`} />
                  <span className={`absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors duration-200
                    ${isActive
                      ? isTeal ? "bg-teal text-primary-foreground" : "bg-purple text-white"
                      : "bg-muted-foreground text-white"
                    }`}>
                    {i + 1}
                  </span>
                </div>
                <h3 className={`px-2 font-display text-sm font-semibold leading-snug transition-colors duration-200
                  ${isActive ? (isTeal ? "text-teal" : "text-purple") : "text-foreground group-hover:text-teal"}`}>
                  {step.label}
                </h3>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (() => {
            const s = steps[activeIndex];
            const isTeal = false;
            const accentText = isTeal ? "text-teal" : "text-purple";
            const accentBorder = isTeal ? "border-teal/30" : "border-purple/30";
            const accentBg = isTeal ? "bg-teal/5" : "bg-purple/5";
            const accentDot = isTeal ? "bg-teal" : "bg-purple";
            const accentOutcomeBorder = isTeal ? "border-teal/25" : "border-purple/25";
            const accentOutcomeBg = isTeal ? "bg-teal/8" : "bg-purple/8";
            return (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`mt-10 rounded-2xl border ${accentBorder} ${accentBg} shadow-md overflow-hidden`}
              >
                {/* Title bar across the top */}
                <div className={`border-b ${accentBorder} px-8 py-5`}>
                  <div className="flex flex-wrap items-baseline gap-3">
                    <span className={`font-display text-4xl font-black leading-none ${accentText}`}>{s.number}</span>
                    <h3 className={`font-display text-2xl font-bold ${accentText}`}>{s.label}</h3>
                  </div>
                  <p className="mt-2 text-base italic text-muted-foreground">{s.subtitle}</p>
                  {s.note && (
                    <p className={`mt-3 inline-block rounded-lg border ${accentBorder} px-3 py-1.5 text-sm font-semibold ${accentText}`}>{s.note}</p>
                  )}
                </div>

                {/* Body: bullets left, outcome right */}
                <div className="grid gap-0 md:grid-cols-2">
                  {/* Left — what we do */}
                  <div className="border-b border-r-0 md:border-b-0 md:border-r px-8 py-7" style={{borderColor: `hsl(var(--${isTeal ? "teal" : "purple"}) / 0.2)`}}>
                    <p className={`mb-4 text-xs font-black uppercase tracking-widest ${accentText}`}>{s.intro}</p>
                    <ul className="space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-base text-foreground">
                          <span className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${accentDot}`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right — outcome */}
                  <div className={`flex flex-col justify-center px-8 py-7 ${accentBg}`}>
                    <span className={`mb-3 text-xs font-black uppercase tracking-widest ${accentText}`}>Outcome</span>
                    <p className={`font-display text-2xl font-bold leading-snug ${accentText}`}>{s.outcome}</p>
                  </div>
                </div>
              </motion.div>
            );
          })()}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcessSection;
