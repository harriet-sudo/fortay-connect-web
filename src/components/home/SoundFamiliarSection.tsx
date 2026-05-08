"use client";

import { motion } from "framer-motion";
import { Play, TrendingUp, Cpu, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import DecorativeCircle from "@/components/DecorativeCircle";

const HERO_VIDEO_URL = "";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const pillars = [
  { icon: Users, label: "Customer experience", detail: "drives revenue", description: "Omnichannel contact centres designed for the volume you actually run, not the brochure version.", color: "text-teal", bg: "bg-teal/10" },
  { icon: Cpu, label: "Communications infrastructure", detail: "drives operational efficiency", description: "Voice, video, messaging and collaboration on one platform. Fewer suppliers, lower cost, less to manage.", color: "text-purple", bg: "bg-purple/10" },
  { icon: TrendingUp, label: "AI and automation", detail: "drives productivity", description: "Virtual agents and intelligent routing tested for 30 days against your real call volumes before we sign anything off.", color: "text-primary", bg: "bg-primary/10" }
];

const soundFamiliarItems = [
  "You're juggling multiple platforms with no single source of truth",
  "Your contact centre tech is holding your CX team back",
  "AI feels like a buzzword, not a business outcome",
  "Leadership wants transformation but IT isn't aligned",
  "You're overpaying for platforms that don't talk to each other",
  "You bought the kit but adoption never happened",
];

const SoundFamiliarSection = () => (
  <section className="relative overflow-hidden bg-[hsl(var(--purple)/0.08)] border-t border-purple/20 py-20 md:py-28">
    <DecorativeCircle color="teal" variant="disc" className="-top-20 -left-20 opacity-10" size="h-64 w-64" />
    <DecorativeCircle color="purple" variant="ring" className="-bottom-24 -right-16 opacity-20" size="h-56 w-56 md:h-72 md:w-72" />

    <div className="container relative z-10 space-y-12">

      {/* Bubble label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex justify-center"
      >
        <span className="rounded-full border border-purple/40 bg-purple/15 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-purple">
          WHAT WE DO
        </span>
      </motion.div>

      {/* Full-width heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="font-display text-center text-3xl font-extrabold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl"
      >
        CX, communications and AI transformation{" "}
        <span className="text-purple">that pays back inside one year.</span>
      </motion.h2>

      {/* Split screen: Video (left) + Sound Familiar (right) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="grid gap-6 md:grid-cols-2 md:items-stretch"
      >
        {/* Video, left half */}
        <motion.div
          variants={fadeUp}
          className="group relative overflow-hidden rounded-2xl border border-border/40 bg-muted/30 min-h-[320px]"
        >
          {HERO_VIDEO_URL ? (
            <video controls playsInline className="h-full w-full object-cover">
              <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-purple/20 via-foreground/95 to-foreground">
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/40 bg-primary/20 backdrop-blur-sm transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-7 w-7 text-primary" />
                </div>
                <p className="text-sm text-background/50">Identify your biggest CX challenge</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Sound Familiar / This is for you if, right half */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-center rounded-2xl border border-purple/20 bg-[hsl(var(--purple)/0.06)] px-7 py-8 space-y-6"
        >
          <div className="space-y-2">
            <span className="inline-block rounded-full border border-purple/40 bg-purple/15 px-4 py-1 text-xs font-bold uppercase tracking-widest text-purple">
              Sound Familiar?
            </span>
            <h3 className="font-display text-xl font-extrabold text-foreground md:text-2xl">
              This is for you if…
            </h3>
          </div>

          <ul className="space-y-3">
            {soundFamiliarItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple" strokeWidth={2} />
                <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 rounded-full bg-purple px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-purple/30 transition-all hover:brightness-110"
            >
              Take the 5 minute CX assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="self-center text-xs italic text-foreground/50">
              Personalised audit at the end. No call booked unless you want one.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Three pillars */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid gap-4 sm:grid-cols-3"
      >
        {pillars.map((p) => (
          <div key={p.label} className={`flex items-start gap-4 rounded-xl border border-border/30 ${p.bg} px-5 py-4`}>
            <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background/60 ${p.color}`}>
              <p.icon className="h-4 w-4" strokeWidth={1.8} />
            </div>
            <div>
              <p className={`text-sm font-bold ${p.color}`}>{p.label}</p>
              <p className="text-xs font-medium text-muted-foreground">{p.detail}</p>
              <p className="mt-2 text-sm text-foreground/70">{p.description}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Problem statement + why Fortay */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="space-y-8"
      >
        <motion.p variants={fadeUp} className="mx-auto max-w-3xl text-center text-base leading-relaxed text-foreground/70 md:text-lg">
          When CX, communications and AI grow without alignment, the cost of running them <span className="font-semibold text-foreground">climbs roughly 30% above what it should</span>, response times slow, and the AI mandate from the board sits stuck behind misaligned suppliers and undefined KPIs.
        </motion.p>

        <motion.div variants={fadeUp} className="mx-auto max-w-3xl space-y-4 rounded-2xl border border-purple/20 bg-[hsl(var(--purple)/0.08)] px-8 py-7 text-center">
          <span className="inline-block rounded-full border border-purple/40 bg-purple/15 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-purple">
            What we do about it
          </span>
          <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
            We write a roadmap with <span className="font-semibold text-foreground">quarterly KPI targets</span>, hold platform decisions to it, and report results to your board every 90 days. Strategy through platform selection, deployment, adoption and ongoing optimisation. One team, one accountable contract.
          </p>
          <p className="text-sm font-semibold text-purple">Independent advice. Platform neutral outcomes. No commission bias.</p>
        </motion.div>
      </motion.div>

    </div>
  </section>
);

export default SoundFamiliarSection;
