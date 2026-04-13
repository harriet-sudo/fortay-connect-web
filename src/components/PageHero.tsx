"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import { type LucideIcon } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

interface PageHeroProps {
  category: string;
  icon: LucideIcon;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  pillars?: string[];
  calloutText?: string;
  calloutAccent?: string;
  primaryCTA?: { label: string; href?: string; to?: string };
  secondaryCTA?: { label: string; href?: string; to?: string; icon?: LucideIcon };
  backLink?: { to: string; label: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const PageHero = ({
  category,
  icon: Icon,
  title,
  titleAccent,
  subtitle,
  pillars,
  calloutText,
  calloutAccent,
  primaryCTA,
  secondaryCTA,
  backLink,
}: PageHeroProps) => {
  const SecondaryIcon = secondaryCTA?.icon;

  return (
    <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
      <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
      <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
      {/* Extra subtle purple disc top-left */}
      <DecorativeCircle color="purple" variant="disc" className="-top-20 left-1/3 opacity-10" size="h-40 w-40" />

      <div className="container relative z-10">
        {backLink && (
          <Link
            href={backLink.to}
            className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> {backLink.label}
          </Link>
        )}

        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/30">
              <Icon className="h-7 w-7 text-primary" />
            </div>
            <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              {category}
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
          >
            {title}{titleAccent && <><br /><span className="text-primary">{titleAccent}</span></>}
          </motion.h1>

          {subtitle && (
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              {subtitle}
            </motion.p>
          )}

          {pillars && pillars.length > 0 && (
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              {pillars.map((p) => (
                <span key={p} className="rounded-full border border-background/10 bg-background/5 px-5 py-2 text-sm text-background/70 backdrop-blur-sm">
                  {p}
                </span>
              ))}
            </motion.div>
          )}

          {(calloutText || calloutAccent) && (
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              {calloutText && <p className="text-sm text-background/60">{calloutText}</p>}
              {calloutAccent && (
                <p className="mt-3 font-display text-lg font-bold text-background">
                  {calloutAccent.split("__ACCENT__").map((part, i, arr) =>
                    i < arr.length - 1
                      ? [part, <span key={i} className="text-primary">{arr[i + 1]}</span>]
                      : part
                  )}
                </p>
              )}
            </motion.div>
          )}

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            {primaryCTA && (
              primaryCTA.href ? (
                <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-semibold">
                  <a href={primaryCTA.href} target="_blank" rel="noopener noreferrer">
                    {primaryCTA.label} <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 font-semibold">
                  <Link href={primaryCTA.to!}>{primaryCTA.label} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              )
            )}
            {secondaryCTA && (
              secondaryCTA.href ? (
                <Button size="lg" variant="outline" asChild className="rounded-full border-background/20 text-background hover:bg-background/10 backdrop-blur-sm">
                  <a href={secondaryCTA.href} target="_blank" rel="noopener noreferrer">
                    {SecondaryIcon && <SecondaryIcon className="mr-2 h-4 w-4" />}
                    {secondaryCTA.label}
                  </a>
                </Button>
              ) : (
                <Button size="lg" variant="outline" asChild className="rounded-full border-background/20 text-background hover:bg-background/10 backdrop-blur-sm">
                  <Link href={secondaryCTA.to!}>
                    {SecondaryIcon && <SecondaryIcon className="mr-2 h-4 w-4" />}
                    {secondaryCTA.label}
                  </Link>
                </Button>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
