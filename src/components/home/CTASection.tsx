"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const CTASection = () => (
  <motion.div
    className="relative overflow-hidden bg-primary px-6 py-5"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    {/* Shimmer */}
    <motion.div
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
      animate={{ translateX: ["-100%", "200%"] }}
      transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
    />
    <div className="container relative flex flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-sm font-semibold text-foreground md:text-base">
        <span className="font-bold">Find out what your CX stack is costing you.</span>
        {" "}Free audit — no strings attached.
      </p>
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-bold text-primary shadow-md transition-all hover:bg-foreground/90"
      >
        Book Your Free CX Audit
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  </motion.div>
);

export default CTASection;
