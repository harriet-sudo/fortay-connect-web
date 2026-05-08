"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Scale, FlaskConical, Clock, MapPin, Puzzle } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const usps = [
  {
    icon: ShieldCheck,
    stat: "98%",
    title: "Client retention",
    description: "Clients stay with us for 6 years on average. They get quarterly reviews against named KPIs and a Customer Success Manager who knows their stack.",
    color: "teal",
  },
  {
    icon: Clock,
    stat: "30+",
    title: "Years across CX, comms and AI",
    description: "Two founders who have personally deployed every platform we recommend, from Avaya migrations to Boost AI virtual agents. No theory.",
    color: "purple",
  },
  {
    icon: Scale,
    stat: "100%",
    title: "Platform neutral",
    description: "We carry SPIFF arrangements with every major UC, CX and AI provider. That removes the bias to push one over another and lets us recommend the right fit.",
    color: "teal",
  },
  {
    icon: MapPin,
    stat: "UK",
    title: "Engineers and consultants in your time zone",
    description: "Every engineer who touches your deployment is based in the UK. No 9am handover from a night shift somewhere else. Same hours, same accountability.",
    color: "purple",
  },
  {
    icon: FlaskConical,
    stat: "✓",
    title: "Tested in your environment first",
    description: "We test every capability in your environment for two weeks before we recommend it. Platforms release monthly. We validate quarterly. You only deploy what we have already broken and rebuilt.",
    color: "teal",
  },
  {
    icon: Puzzle,
    stat: "Free",
    title: "Proof of concept on us",
    description: "We will run a 30 day POC against your real call volumes and your real data. No invoice. If it does not perform, you have lost nothing but two weeks.",
    color: "purple",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyFortaySection = () => (
  <section className="relative overflow-hidden bg-foreground py-24">
    <DecorativeCircle color="teal" variant="disc" className="-top-16 -left-12 opacity-10" size="h-48 w-48 md:h-64 md:w-64" />
    <DecorativeCircle color="purple" variant="ring" className="-bottom-20 -right-12 opacity-20" size="h-48 w-48 md:h-72 md:w-72" />

    <div className="container relative z-10">
      <motion.div
        className="mx-auto mb-16 max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
          Why Fortay Connect
        </p>
        <h2 className="font-display text-3xl font-bold text-background md:text-4xl">
          Six reasons our clients stay{" "}
          <span className="text-background/40 font-medium">an average of six years.</span>
        </h2>
        <p className="mt-4 text-background/50">
          Most consultancies sell once and disappear. We measure ourselves on what happens at month 24, not month 2.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {usps.map((usp, i) => {
          const Icon = usp.icon;
          const isTeal = usp.color === "teal";
          return (
            <motion.div
              key={usp.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07 } },
              }}
              className={`group rounded-2xl border p-7 transition-all duration-200 hover:scale-[1.02] ${
                isTeal
                  ? "border-primary/20 bg-primary/8 hover:bg-primary/12"
                  : "border-purple/20 bg-purple/8 hover:bg-purple/12"
              }`}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isTeal ? "bg-primary/15" : "bg-purple/15"}`}>
                  <Icon className={`h-6 w-6 ${isTeal ? "text-primary" : "text-purple"}`} strokeWidth={1.5} />
                </div>
                <span className={`font-display text-3xl font-black leading-none ${isTeal ? "text-primary" : "text-purple"}`}>
                  {usp.stat}
                </span>
              </div>
              <h3 className="mb-2 text-sm font-bold text-background">{usp.title}</h3>
              <p className="text-sm leading-relaxed text-background/50">{usp.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyFortaySection