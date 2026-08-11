"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const proof = [
  { figure: "200+", label: "transformations delivered" },
  { figure: "6 yrs", label: "average client retention" },
  { figure: "98%", label: "client retention" },
  { figure: "£millions", label: "in savings identified" },
];

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const HeroSection = () => (
  <section className="bg-foreground">
    {/* Statement */}
    <div className="container pb-16 pt-28 md:pb-24 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-5xl"
      >
        <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
          <span className="h-px w-8 bg-primary/50" />
          Independent CX, Communications &amp; AI Consultancy
        </p>

        <h1 className="max-w-[16ch] font-display text-[2.75rem] font-bold leading-[1.03] tracking-[-0.02em] text-background sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
          The independent experts who make CX and AI{" "}
          <span className="text-primary">work</span>.
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-background/55 md:text-xl">
          We do not sell the platforms, so our only job is the outcome that is
          right for you. Over 200 enterprise transformations delivered.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground transition-all hover:brightness-110"
          >
            Book a strategy call
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/assessment"
            className="group inline-flex items-center gap-2 text-base font-semibold text-background/80 transition-colors hover:text-primary"
          >
            Take the CX assessment
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    </div>

    {/* Proof line */}
    <div className="border-t border-background/10">
      <div className="container grid grid-cols-2 gap-x-8 gap-y-8 py-10 md:grid-cols-4">
        {proof.map((p) => (
          <div key={p.label}>
            <p className="font-display text-2xl font-bold text-background md:text-3xl">
              {p.figure}
            </p>
            <p className="mt-1 text-sm text-background/45">{p.label}</p>
          </div>
        ))}
      </div>
    </div>

  </section>
);

export default HeroSection;
