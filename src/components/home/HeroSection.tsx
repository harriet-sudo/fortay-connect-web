"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import DecorativeCircle from "@/components/DecorativeCircle";

const alcumusLogo = "/assets/logos/alcumus.webp";
const ashtonsLogo = "/assets/logos/ashtons-legal.webp";
const astonVillaLogo = "/assets/logos/aston-villa.webp";
const caAutoFinanceLogo = "/assets/logos/ca-auto-finance.webp";
const dextLogo = "/assets/logos/dext.webp";
const ineosLogo = "/assets/logos/ineos.webp";
const nottinghamForestLogo = "/assets/logos/nottingham-forest.png";
const pkfLogo = "/assets/logos/pkf.png";
const gardenCourtLogo = "/assets/logos/garden-court-chambers.svg";

const clients = [
  { name: "Alcumus", src: alcumusLogo },
  { name: "Ashtons Legal", src: ashtonsLogo },
  { name: "Aston Villa FC", src: astonVillaLogo },
  { name: "CA Auto Finance", src: caAutoFinanceLogo },
  { name: "Dext", src: dextLogo },
  { name: "INEOS", src: ineosLogo },
  { name: "Nottingham Forest", src: nottinghamForestLogo },
  { name: "PKF", src: pkfLogo },
  { name: "Garden Court Chambers", src: gardenCourtLogo },
];

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stats = [
  { target: 200, suffix: "+", label: "Transformations delivered" },
  { target: 6, suffix: "+", label: "Year avg. client retention" },
  { target: 0, suffix: "", prefix: "£Millions", label: "In savings identified" },
];

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (target === 0) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const StatItem = ({ target, suffix, prefix, label }: { target: number; suffix: string; prefix?: string; label: string }) => {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-bold text-primary md:text-4xl">
        {prefix || `${count}${suffix}`}
      </p>
      <p className="mt-1 text-xs text-background/50">{label}</p>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative overflow-hidden bg-foreground pb-12 pt-24 md:pt-36">
    {/* Decorative circles */}
    <DecorativeCircle color="teal" variant="ring" className="-top-24 -left-24 opacity-20" size="h-72 w-72 md:h-96 md:w-96" />
    <DecorativeCircle color="purple" variant="disc" className="-bottom-32 -right-28 opacity-15" size="h-72 w-72 md:h-[28rem] md:w-[28rem]" />
    <DecorativeCircle color="teal" variant="disc" className="top-1/3 -right-40 opacity-10" size="h-64 w-64 md:h-80 md:w-80" />
    <DecorativeCircle color="purple" variant="ring" className="bottom-1/4 -left-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
    {/* Radial gradient overlay for depth */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]" />

    <div className="container relative z-10">
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary"
        >
          Enterprise CX, Communications & AI Advisory
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-background md:text-5xl lg:text-7xl"
        >
          <span className="block">Fragmented CX.</span>
          <span className="block">Disconnected Communications.</span>
          <span className="block text-primary">An AI Mandate Without Clarity.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-background/60 md:text-xl"
        >
          Never-ending apps, fragmented customer journeys and disjointed workflows. We design and govern enterprise transformation across CX, communications and AI to simplify engagements, align operations and deliver measurable commercial performance.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
          >
            Book a Strategy Call
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-md shadow-teal/20 transition-all hover:bg-teal/90"
          >
            Take the CX Assessment
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} className="mx-auto mt-14 max-w-2xl">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-background/40">
            We've Delivered over 200 AI &amp; CX Transformations For
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-background/10 pt-8">
            {stats.map((s) => <StatItem key={s.label} {...s} />)}
          </div>
        </motion.div>
      </motion.div>

      {/* Trusted by carousel */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-14 border-t border-background/10 pt-10"
      >
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-background/60">
          Trusted by
        </p>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-foreground to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-foreground to-transparent" />
          <div className="flex w-max animate-logo-scroll items-center gap-16">
            {[...clients, ...clients].map((client, i) => (
              <img
                key={`${client.name}-${i}`}
                src={client.src}
                alt={client.name}
                className="h-7 w-auto shrink-0 object-contain brightness-0 invert opacity-80 transition-all duration-300 hover:opacity-100 md:h-9"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
