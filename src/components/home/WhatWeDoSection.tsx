"use client";

import { motion } from "framer-motion";
import { Headphones, Bot, Phone } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const services = [
  {
    icon: Phone,
    title: "Unified Communications",
    description:
      "Consolidate voice, video, messaging and collaboration onto a single platform that drives productivity and cuts costs.",
    who: "For COOs and CIOs consolidating fragmented stacks."
  },
  {
    icon: Headphones,
    title: "Customer Experience",
    description:
      "Design and deploy omnichannel contact centres that turn every interaction into an opportunity to win and retain customers.",
    who: "For Heads of CX and CROs running demanding service operations."
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Implement conversational AI, intelligent routing and workflow automation that scales without adding headcount.",
    who: "For CTOs and Transformation Directors with an AI mandate but no clear roadmap."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const WhatWeDoSection = () => (
  <section className="relative overflow-hidden bg-background py-20 md:py-28">
    <DecorativeCircle
      color="teal"
      variant="ring"
      className="-top-20 -right-16 opacity-15"
      size="h-56 w-56 md:h-72 md:w-72"
    />
    <DecorativeCircle
      color="purple"
      variant="ring"
      className="-bottom-24 -left-20 opacity-10"
      size="h-48 w-48 md:h-64 md:w-64"
    />

    <div className="container relative z-10">
      <motion.div
        className="mx-auto mb-14 max-w-2xl text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <p className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
          What we do
        </p>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
          Three disciplines.{" "}
          <span className="font-medium text-foreground/50">One accountable team.</span>
        </h2>
        <p className="mt-5 text-lg text-muted-foreground">
          We run CX, communications and AI transformation end to end. No hand-offs. No gaps between strategy and delivery.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              className="flex flex-col rounded-sm border border-border bg-card px-7 py-8 shadow-sm transition-all duration-200 hover:border-primary/40 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-primary/10">
                <Icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground">
                {service.description}
              </p>
              <p className="mt-5 border-t border-border pt-4 text-sm font-semibold uppercase tracking-wider text-purple">
                {service.who}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
