"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Lightbulb,
  ListChecks,
  Rocket,
  Headset,
  CheckCircle2,
  Quote,
  type LucideIcon,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import TrustedBySection from "@/components/TrustedBySection";
import DecorativeCircle from "@/components/DecorativeCircle";
import SectionBridge from "@/components/home/SectionBridge";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ─── Service data ────────────────────────────────────────────────────────────

type Service = {
  icon: LucideIcon;
  title: string;
  slug: string;
  accent: "teal" | "purple";
  tagline: string;
  problem: string;
  whatWeDeliver: string[];
  outcome: string;
  whoFor: string;
};

const services: Service[] = [
  {
    icon: Lightbulb,
    title: "CX and AI Advisory",
    slug: "cx-ai-advisory",
    accent: "teal",
    tagline:
      "Get clarity before you commit budget. We audit your current estate, map the gaps, and build a prioritised transformation roadmap tied to measurable business outcomes.",
    problem:
      "Most organisations know something needs to change but cannot pinpoint where the real cost is leaking. Buying tools that do not integrate, designing journeys that do not scale, or rolling out AI without governance costs more than standing still.",
    whatWeDeliver: [
      "Current-state audit across UC, CX and AI tooling",
      "Gap analysis mapped to commercial KPIs",
      "Three-year prioritised roadmap with quick wins and phased plan",
      "Platform-neutral comparison and recommendation",
      "Executive summary your board can act on",
    ],
    outcome:
      "CA Auto Finance came to us with three disconnected platforms and no single source of truth. Six weeks later: one platform, costs down 40%, and a plan the board signed off without challenge.",
    whoFor: "For COOs and CX Directors who need to see the full picture before committing spend.",
  },
  {
    icon: ListChecks,
    title: "Technology Selection",
    slug: "technology-selection",
    accent: "purple",
    tagline:
      "We have evaluated and selected platforms for 200+ organisations. We know where each one excels, where each one fails, and we will tell you straight.",
    problem:
      "Every supplier will tell you their platform is the best fit. Most buyers lack the operational benchmarks to challenge that claim. The wrong platform decision locks you in for years and compounds cost.",
    whatWeDeliver: [
      "Scored evaluation across shortlisted platforms",
      "Commercial and contractual benchmarking against market rates",
      "Integration and migration risk assessment",
      "Proof of concept coordination where needed",
      "Final recommendation with clear rationale and trade-offs",
    ],
    outcome:
      "We do not resell. We do not take commission. Our recommendation is the one that survives your procurement team's scrutiny because it was built to.",
    whoFor: "For CTOs and IT Directors running competitive procurements who need independent validation.",
  },
  {
    icon: Rocket,
    title: "Deployment and Engineering",
    slug: "deployment",
    accent: "teal",
    tagline:
      "CA Auto Finance: three platforms to one, six weeks audit to live. That is the standard we hold ourselves to on every engagement.",
    problem:
      "Transformation programmes stall when the team that designed the strategy hands off to a different team for delivery. Requirements drift, timelines slip, and the business loses confidence.",
    whatWeDeliver: [
      "End-to-end project management from design through go-live",
      "Technical build, integration, and data migration",
      "Change management and user adoption programme",
      "Parallel running and cutover planning",
      "Post-deployment stabilisation and handover",
    ],
    outcome:
      "We deploy what we design. No hand-offs, no scope drift, no six-month discovery phases. The same team that ran your audit runs your go-live.",
    whoFor: "For Transformation Directors with a board mandate and a delivery window measured in weeks, not quarters.",
  },
  {
    icon: Headset,
    title: "Managed Services and Optimisation",
    slug: "managed-services",
    accent: "purple",
    tagline:
      "Our average client relationship is six years. We are not here to deploy and disappear.",
    problem:
      "Post-deployment is where most consultancies walk away and most platforms underperform. Without ongoing governance, licence costs creep, adoption drops, and the business reverts to old habits.",
    whatWeDeliver: [
      "Quarterly business reviews with actionable recommendations",
      "Licence and contract optimisation as your needs evolve",
      "Supplier management and escalation on your behalf",
      "Adoption tracking and training refresh cycles",
      "Roadmap updates aligned to platform releases and business change",
    ],
    outcome:
      "98% client retention. Not because of contracts, because the relationship keeps delivering value year after year.",
    whoFor: "For COOs and operations leaders focused on long-term cost governance and platform ROI.",
  },
];

// ─── Service section component ───────────────────────────────────────────────

const ServiceSection = ({
  service,
  index,
  reversed,
}: {
  service: Service;
  index: number;
  reversed: boolean;
}) => {
  const isTeal = service.accent === "teal";
  const accentText = isTeal ? "text-teal" : "text-purple";
  const accentBg = isTeal ? "bg-teal/10" : "bg-purple/10";
  const accentBorder = isTeal ? "border-teal/20" : "border-purple/20";
  const isLight = index % 2 === 0;

  return (
    <section
      className={`relative overflow-hidden py-20 md:py-28 ${
        isLight ? "bg-background text-foreground" : "bg-foreground text-white"
      }`}
    >
      <DecorativeCircle
        color={isTeal ? "teal" : "purple"}
        variant="ring"
        className={reversed ? "-top-20 -left-16 opacity-10" : "-top-20 -right-16 opacity-10"}
        size="h-56 w-56 md:h-72 md:w-72"
      />

      <div className="container relative z-10">
        <motion.div
          className={`grid items-start gap-12 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {/* Left: narrative */}
          <div className="lg:[direction:ltr]">
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-sm ${accentBg}`}
              >
                <service.icon className={`h-5 w-5 ${accentText}`} strokeWidth={1.8} />
              </div>
              <span
                className={`rounded-full border ${accentBorder} ${accentBg} px-4 py-1 text-[11px] font-bold uppercase tracking-widest ${accentText}`}
              >
                0{index + 1}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl font-bold md:text-4xl"
            >
              {service.title}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={`mt-4 text-lg leading-relaxed ${
                isLight ? "text-muted-foreground" : "text-white/70"
              }`}
            >
              {service.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className={`mt-6 rounded-xl border ${accentBorder} ${
                isLight ? "bg-muted/50" : "bg-white/5"
              } px-6 py-5`}
            >
              <p
                className={`text-sm leading-relaxed ${
                  isLight ? "text-foreground/80" : "text-white/80"
                }`}
              >
                {service.problem}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className={`mt-6 text-xs font-semibold uppercase tracking-widest ${accentText}`}
            >
              {service.whoFor}
            </motion.p>
          </div>

          {/* Right: deliverables + outcome */}
          <div className="lg:[direction:ltr]">
            <motion.div variants={fadeUp}>
              <p
                className={`mb-4 text-[10px] font-black uppercase tracking-widest ${accentText}`}
              >
                What we deliver
              </p>
              <ul className="space-y-3">
                {service.whatWeDeliver.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${accentText}`}
                      strokeWidth={2}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        isLight ? "text-foreground/80" : "text-white/80"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className={`mt-8 rounded-xl border ${accentBorder} ${accentBg} px-6 py-5`}
            >
              <Quote
                className={`mb-2 h-5 w-5 ${accentText} opacity-60`}
                strokeWidth={1.5}
              />
              <p
                className={`text-sm font-medium italic leading-relaxed ${
                  isLight ? "text-foreground" : "text-white"
                }`}
              >
                {service.outcome}
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <Link
                href={`/services/${service.slug}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold ${accentText} transition-colors hover:opacity-80`}
              >
                Explore {service.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── Page ────────────────────────────────────────────────────────────────────

const Services = () => (
  <main>
    <PageHero
      category="Our Services"
      icon={Lightbulb}
      title="End-to-end transformation. No gaps, no hand-offs."
      subtitle="From the first audit through to deployment and ongoing governance, we own the outcome at every stage."
    />

    <TrustedBySection />

    {services.map((service, i) => (
      <ServiceSection
        key={service.slug}
        service={service}
        index={i}
        reversed={i % 2 !== 0}
      />
    ))}

    {/* CTA band */}
    <section className="relative overflow-hidden bg-teal py-14 text-white">
      <DecorativeCircle
        color="purple"
        variant="ring"
        className="-top-16 -right-10 opacity-20"
        size="h-56 w-56"
      />
      <DecorativeCircle
        color="teal"
        variant="disc"
        className="-bottom-20 -left-14 opacity-30"
        size="h-64 w-64"
      />

      <div className="container relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-black leading-tight md:text-3xl">
            Not sure which service fits?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
            Book a 30-minute call. We will listen, ask the right questions, and
            tell you straight whether we can add value before any commitment.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:justify-end">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal shadow-lg transition-all hover:brightness-95"
          >
            Book your free audit
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/assessment"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/10"
          >
            Take the CX assessment
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
