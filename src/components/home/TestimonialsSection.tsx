"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: string;
  company: string;
  name: string;
  role: string;
  quote: string;
  stats: { value: string; label: string }[];
  storyHref?: string;
};

const testimonials: Testimonial[] = [
{
  id: "ca-auto-finance",
  company: "CA Auto Finance",
  name: "Justine Long",
  role: "Head of Operations",
  quote: "Mark was completely impartial and focused on what we actually needed, not what was easy to sell. He caught things we'd have completely missed.",
  stats: [
  { value: "40%", label: "cost reduction" },
  { value: "3\u21921", label: "platforms consolidated" },
  { value: "6 weeks", label: "audit to deployment" }],
  storyHref: "/case-studies"
},
{
  id: "ashtons-legal",
  company: "Ashtons Legal",
  name: "Ben Hallatt",
  role: "COO",
  quote: "We thought we just needed a phone upgrade. Fortay showed us we were thinking too small, and transformed how we interact with clients.",
  stats: [
  { value: "35%", label: "faster client response" },
  { value: "100+", label: "staff migrated" },
  { value: "\u00a380k", label: "annual savings" }]
},
{
  id: "manufacturing-co",
  company: "INEOS",
  name: "IT Director",
  role: "Global Manufacturing",
  quote: "They didn't just sell us technology, they understood our business first and mapped everything to our actual workflows.",
  stats: [
  { value: "5", label: "sites unified" },
  { value: "60%", label: "fewer tools" },
  { value: "24/7", label: "support coverage" }]
}];


const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section className="relative z-10 bg-[hsl(var(--purple)/0.06)] py-8 border-y border-purple/10">
      <div className="container">
        <motion.div
          className="mx-auto mb-6 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>

          <p className="mb-1.5 inline-block rounded-full border border-purple/25 bg-purple/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-purple">
            Client reviews
          </p>
          <h2 className="font-display text-xl font-bold text-foreground md:text-2xl">
            Transformation that speaks for itself.
          </h2>
        </motion.div>

        {/* Company tabs */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {testimonials.map((t, i) =>
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition-all",
              active === i ?
              "border-purple bg-purple/10 text-purple" :
              "border-border bg-card text-muted-foreground hover:border-purple/40 hover:text-foreground"
            )}>

              {t.company}
            </button>
          )}
        </div>

        {/* Quote area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-3xl">

            <div className="flex flex-col items-center gap-5 md:flex-row md:items-start">
              {/* Avatar placeholder */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-light text-lg font-bold text-purple">
                {current.name.split(" ").map((n) => n[0]).join("")}
              </div>

              <div>
                <p className="text-base italic leading-relaxed text-foreground md:text-lg">
                  {current.quote}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {current.name}, {current.role} at{" "}
                  <span className="font-semibold text-foreground">{current.company}</span>
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {current.stats.map((s) =>
              <div
                key={s.label}
                className="rounded-xl bg-foreground px-4 py-3 text-center">

                  <p className="font-display text-xl font-bold text-primary md:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-0.5 text-xs text-background/60">{s.label}</p>
                </div>
              )}
            </div>

            {current.storyHref && (
              <div className="mt-5 flex justify-center">
                <Link
                  href={current.storyHref}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Read the full story
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>);

};

export default TestimonialsSection;
