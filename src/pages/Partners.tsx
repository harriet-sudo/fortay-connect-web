"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const zoomLogo = "/assets/logos/zoom.png";
const ringcentralLogo = "/assets/logos/ringcentral.png";
const gotoLogo = "/assets/logos/goto.svg";
const dialpadLogo = "/assets/logos/dialpad.svg";
const ujetLogo = "/assets/logos/ujet.svg";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }),
};

const partners = [
  {
    slug: "zoom",
    logo: zoomLogo,
    logoInvert: true,
    name: "Zoom",
    tier: "Platinum Partner",
    tierColor: "text-teal",
    tierBorder: "border-teal/30 bg-teal/10",
    cardAccent: "border-teal/20 hover:border-teal/50",
    tagline: "Unified Communications & AI-Powered CX",
    description:
      "As a certified Zoom Platinum Partner, Fortay Connect delivers the full Zoom platform, from Zoom Phone and Zoom Contact Centre to AI Companion, unifying communications and elevating customer experience at enterprise scale.",
    capabilities: ["Zoom Phone", "Zoom Contact Centre", "Zoom AI Companion", "Zoom Workplace", "Revenue Accelerator"],
    route: "/partners/zoom",
  },
  {
    slug: "ringcentral",
    logo: ringcentralLogo,
    logoInvert: true,
    name: "RingCentral",
    tier: "Gold Partner",
    tierColor: "text-purple",
    tierBorder: "border-purple/30 bg-purple/10",
    cardAccent: "border-purple/20 hover:border-purple/50",
    tagline: "Enterprise Cloud Communications & Microsoft Teams Voice",
    description:
      "As a RingCentral Gold Partner, Fortay Connect architects RingEX, RingCX and RingSense AI deployments, with deep expertise in Microsoft Teams Direct Routing and enterprise UC migration.",
    capabilities: ["RingEX", "RingCX", "RingSense AI", "AI Receptionist", "Teams Direct Routing"],
    route: "/partners/ringcentral",
  },
  {
    slug: "goto",
    logo: gotoLogo,
    logoInvert: false,
    name: "GoTo",
    tier: "Certified Partner",
    tierColor: "text-teal",
    tierBorder: "border-teal/30 bg-teal/10",
    cardAccent: "border-teal/20 hover:border-teal/50",
    tagline: "Flexible Cloud Communications for Growing Organisations",
    description:
      "GoTo Connect and GoTo Contact Centre offer a scalable, cost-effective UCaaS and CCaaS platform. Fortay Connect delivers advisory, deployment and managed services for organisations seeking simplicity without compromise.",
    capabilities: ["GoTo Connect", "GoTo Contact Centre", "Cloud Phone", "Video Meetings", "Managed Services"],
    route: "/partners/goto",
  },
  {
    slug: "dialpad",
    logo: dialpadLogo,
    logoInvert: false,
    name: "Dialpad",
    tier: "Certified Partner",
    tierColor: "text-purple",
    tierBorder: "border-purple/30 bg-purple/10",
    cardAccent: "border-purple/20 hover:border-purple/50",
    tagline: "AI-Native Business Communications",
    description:
      "Dialpad is built AI-first, with real-time transcription, live coaching and sentiment analysis embedded natively. Fortay Connect advises and deploys Dialpad for organisations prioritising revenue intelligence and modern agent experience.",
    capabilities: ["Dialpad Talk", "Dialpad Contact Centre", "AI Coaching", "Real-time Transcription", "Salesforce Integration"],
    route: "/partners/dialpad",
  },
  {
    slug: "ujet",
    logo: ujetLogo,
    logoInvert: false,
    name: "UJET",
    tier: "Technology Partner",
    tierColor: "text-teal",
    tierBorder: "border-teal/30 bg-teal/10",
    cardAccent: "border-teal/20 hover:border-teal/50",
    tagline: "Cloud-Native Contact Centre for the AI Era",
    description:
      "UJET delivers a cloud-native, AI-powered contact centre platform with deep mobile and in-app capabilities. Fortay Connect integrates UJET into customer experience architectures requiring frictionless digital-first service delivery.",
    capabilities: ["UJET CCaaS", "AI Virtual Agents", "Mobile-First CX", "Google CCAI Integration", "Omnichannel Orchestration"],
    route: "/partners/ujet",
  },
];

const whyFortay = [
  "Platform-neutral. We recommend the right platform for you, not commission incentives",
  "Certified across multiple partner ecosystems for independent comparison",
  "UK-based engineers and consultants throughout deployment",
  "Free Proof of Concept before capital commitment",
  "Ongoing managed services and platform optimisation post-deployment",
];

const Partners = () => (
  <>
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-foreground py-28 md:py-36 text-background">
        <DecorativeCircle color="teal" variant="ring" className="-top-24 -right-24 opacity-20" size="h-96 w-96" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-28 -left-24 opacity-15" size="h-80 w-80" />
        <DecorativeCircle color="purple" variant="disc" className="top-1/3 left-1/2 opacity-5" size="h-64 w-64" />

        <div className="container relative z-10 max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Technology Partners
            </p>
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl"
          >
            The platforms we partner with.{" "}
            <span className="text-primary">Delivered without bias.</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 text-lg text-background/60 max-w-2xl"
          >
            Fortay Connect is certified across the leading UCaaS, CCaaS and AI platforms. We select and deploy the right technology for each client, not the most profitable one for us.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg shadow-primary/20 px-8">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Platform Comparison Session <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="teal" asChild className="rounded-full">
              <Link href="/assessment">Take the AI Readiness Assessment</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── PARTNER CARDS ── */}
      <section className="relative overflow-hidden bg-background py-24">
        <DecorativeCircle color="teal" variant="ring" className="-top-16 -left-16 opacity-15" size="h-52 w-52" />
        <DecorativeCircle color="purple" variant="disc" className="-bottom-20 -right-16 opacity-8" size="h-64 w-64" />

        <div className="container relative z-10">
          <motion.div
            className="mb-14 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              Our Ecosystem
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Select a partner to explore
            </h2>
            <p className="mt-3 text-muted-foreground">
              Each platform has distinct strengths. Our job is to match the right one to your organisation, architecturally, commercially, and operationally.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partners.map((p, i) => (
              <motion.div
                key={p.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <Link
                  href={p.route}
                  className={`group flex h-full flex-col rounded-2xl border ${p.cardAccent} bg-card p-8 transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Logo + tier */}
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <img
                      src={p.logo}
                      alt={p.name}
                      className={`h-8 w-auto object-contain ${p.logoInvert ? "brightness-0 dark:brightness-0 dark:invert" : ""}`}
                    />
                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${p.tierBorder} ${p.tierColor}`}>
                      {p.tier}
                    </span>
                  </div>

                  {/* Tagline */}
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground flex-1">
                    {p.description}
                  </p>

                  {/* Capabilities */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {p.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/70"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-semibold ${p.tierColor} group-hover:gap-3 transition-all`}>
                    Explore {p.name} <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY FORTAY CONNECT ── */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-20 -right-16 opacity-20" size="h-56 w-56" />
        <DecorativeCircle color="teal" variant="disc" className="-bottom-12 -left-10 opacity-10" size="h-40 w-40" />

        <div className="container relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              Why Fortay Connect
            </p>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Partner-certified. Architecturally independent.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Certifications exist so we can deliver effectively, not so we can push a preferred product.
            </p>
            <ul className="mt-8 space-y-3">
              {whyFortay.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-16 -right-14 opacity-15" size="h-48 w-48" />

        <div className="container relative z-10 max-w-2xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Not sure which platform is right for you?
            </h2>
            <p className="mt-4 text-background/60">
              Book a platform comparison session and we'll assess your requirements against the full ecosystem, without bias.
            </p>
            <Button
              size="lg"
              asChild
              className="mt-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 shadow-lg shadow-primary/20"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a Free Platform Comparison <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  </>
);

export default Partners