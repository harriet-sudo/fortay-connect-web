"use client";

import { useState } from "react";
import TrustedBySection from "@/components/TrustedBySection";
import ProcessSection from "@/components/home/ProcessSection";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, Quote, Star } from "lucide-react";
import DecorativeCircle from "@/components/DecorativeCircle";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// ─── Service data ────────────────────────────────────────────────────────────

type ServiceData = {
  title: string;
  badge: string;
  headline: string;
  subline: string;
  heroCta: string;
  thisIsForYou: string[];
  problemHeading: string;
  problemBody: string;
  whatWeDoTitle: string;
  whatWeDo: { title: string; body: string }[];
  testimonials: {
    company: string;
    name: string;
    role: string;
    quote: string;
    stats?: { value: string; label: string }[];
  }[];
  faqs: { q: string; a: string }[];
};

const serviceData: Record<string, ServiceData> = {
  "cx-ai-advisory": {
    title: "CX & AI Advisory",
    badge: "Services",
    headline: "Get clarity before you invest in UC, CX or AI",
    subline: "We've architected 100+ enterprise communication transformations because we help you understand the real challenges first, then solve them with modern technology that delivers business advantage.",
    heroCta: "Get Your Free Technology Audit",
    thisIsForYou: [
      "You need to understand your true communication challenges",
      "Your current processes need redesign around new capabilities",
      "You want to align technology with your business goals",
      "You need to see what modern platforms (including AI) can actually do",
      "You want to drive efficiencies in multiple business areas in a risk-free way",
    ],
    problemHeading: "Modern communication platforms can transform performance, but only when they're designed right.",
    problemBody: "Advisory helps you avoid costly missteps: buying tools that don't integrate, designing journeys that don't scale, or rolling out AI without controls. We'll map your current state, define outcomes, and build a clear, prioritised roadmap.",
    whatWeDoTitle: "What we actually do",
    whatWeDo: [
      {
        title: "Audit your current setup",
        body: "We dig into everything, processes, inefficiencies, and gaps. Through discovery, we help you understand what the real problems actually are. No assumptions made, just current-state assessment + gap analysis.",
      },
      {
        title: "Create your 3-year roadmap",
        body: "Not some vague 'digital transformation' plan. A practical roadmap that redesigns processes around new technology capabilities and aligns with your business goals. Prioritised roadmap with quick wins + phased plan.",
      },
      {
        title: "Deep platform analysis",
        body: "We look beyond features to what really matters: how AI and modern platforms can transform your customer experiences. We gauge mutual fit to ensure solutions match your needs. Platform-neutral comparison and recommendation.",
      },
    ],
    testimonials: [
      {
        company: "CA Auto Finance",
        name: "Justine Long",
        role: "Head of Operations",
        quote: "We had suppliers trying to sell us something we didn't understand. Mark was completely impartial and focused on finding what we actually needed. He took all the technical jargon and made it simple to understand the real business impact. More importantly, he caught things we would have completely missed. That expertise probably saved us from making a very expensive mistake.",
        stats: [
          { value: "40%", label: "cost reduction" },
          { value: "3→1", label: "platforms consolidated" },
          { value: "6 weeks", label: "audit to deployment" },
        ],
      },
      {
        company: "Ashtons Legal",
        name: "Ben Hallatt",
        role: "IT Director",
        quote: "We thought we just needed to upgrade our phone system. Mark helped us see we were thinking way too small. He walked us through what modern platforms can actually do, translated all the technical jargon into real business value, and completely transformed how we interact with clients. Without his expertise, we would have just upgraded to another basic phone system.",
        stats: [
          { value: "35%", label: "faster client response" },
          { value: "100+", label: "staff migrated" },
          { value: "£80k", label: "annual savings" },
        ],
      },
    ],
    faqs: [
      { q: "How do I know if I need advisory services?", a: "If you're planning a major communication tech change, you need a strategy first. Most companies come to Fortay Connect when they realise going straight to technology selection is risky, especially with 200+ users and complex needs." },
      { q: "What exactly happens in the advisory phase?", a: "We analyse your current setup, interview stakeholders, map out requirements, and build your transformation strategy. Think of it as the blueprint phase, getting this right prevents expensive mistakes later." },
      { q: "What's included in your initial audit?", a: "A deep dive into your current costs, systems, pain points, and opportunities. We analyse workflows, culture, locations, integrations, user feedback, and business goals to build a complete picture." },
      { q: "How long does the advisory phase take?", a: "Typically 4–6 weeks from first workshop to final strategy presentation. We advise starting this process 6 months before procurement." },
      { q: "What deliverables do we get?", a: "A complete transformation strategy: current state analysis, detailed requirements mapping, 3-year technology roadmap, budget and resource planning, and an executive presentation deck." },
      { q: "Do we need advisory if we know which platform we want?", a: "Even when you have a platform in mind, proper planning prevents expensive surprises. One client thought they just needed new phones, our analysis helped them transform their entire customer experience." },
    ],
  },

  "technology-selection": {
    title: "Technology Selection",
    badge: "Services",
    headline: "Choose the right communications platform without the guesswork",
    subline: "We help you choose the best-fit platform by validating features, pressure-testing integrations, and mapping each option to your real use cases, so you can commit with confidence and scale for years.",
    heroCta: "Get Your Free Technology Audit",
    thisIsForYou: [
      "Every supplier demo looks suspiciously perfect",
      "You need to know what's actually negotiable",
      "You need help mapping features to your specific use cases",
      "You want detailed implementation plans before committing",
      "You'd like to test with a POC before buying",
      "You want to future-proof decisions with a technology deep dive",
    ],
    problemHeading: "Stop drowning in endless feature comparisons.",
    problemBody: "Every demo looks perfect, until you try to integrate it, roll it out, and measure adoption. We help you cut through the noise by focusing on what matters: your workflows, your customer journeys, and your systems. Then we validate the shortlist with practical testing so you don't end up locked into the wrong platform.",
    whatWeDoTitle: "How we help you choose right",
    whatWeDo: [
      {
        title: "Deep-dive analysis",
        body: "Beyond basic feature comparisons. We look at R&D spend, financial health, and real customer experiences. Shortlists + scoring, because expensive surprises are only fun on birthdays.",
      },
      {
        title: "Practical testing",
        body: "We run free proof-of-concept trials so you know exactly what you're getting. No more 'oh, that feature works differently than we thought' moments.",
      },
      {
        title: "Integration planning",
        body: "Detailed assessment of how each platform will work with your existing tools. Because a platform that doesn't play nice with others isn't worth having. We'll give you an integration map + rollout plan.",
      },
    ],
    testimonials: [
      {
        company: "Garden Court Chambers",
        name: "Dan Bunce",
        role: "IT Systems Project Manager",
        quote: "With cloud-based comms, there are fewer points of failure as someone, somewhere, will have an internet connection and be able to take calls. Previously if we had an outage, we lost calls, which is a major problem for barristers.",
        stats: [
          { value: "100%", label: "call reliability" },
          { value: "Cloud", label: "fully migrated" },
          { value: "Zero", label: "downtime events" },
        ],
      },
      {
        company: "CA Auto Finance",
        name: "Justine Long",
        role: "Head of Operations",
        quote: "Mark was completely impartial and focused on finding what we actually needed. He took all the technical jargon and made it simple to understand the real business impact. He caught things we would have completely missed, expertise that probably saved us from a very expensive mistake.",
        stats: [
          { value: "40%", label: "cost reduction" },
          { value: "3→1", label: "platforms consolidated" },
          { value: "6 weeks", label: "audit to deployment" },
        ],
      },
    ],
    faqs: [
      { q: "How do you determine the best fit for my business?", a: "We analyse multiple areas: your current and future business requirements, technical needs (especially integrations) and the supplier's long-term stability. We go deep on things like R&D investment and product roadmaps." },
      { q: "Can you help negotiate contracts?", a: "Yes, and this is where we often save clients significant money. We know exactly what's negotiable beyond standard pricing, from feature bundles to SLAs to implementation support." },
      { q: "What's involved in technology testing?", a: "We run practical proof-of-concept trials focusing on your specific use cases, not just generic demos. These systems are live and operational which catches potential issues early." },
      { q: "Do you only work with certain technology partners?", a: "While we're certified partners with all major platforms (RingCentral, Zoom, Teams, etc.), our recommendations are completely independent. We have analysis and relationships with 30+ partners." },
      { q: "What should I look for in a provider's stability?", a: "Three critical factors: financial health (including debt levels), R&D investment (shows innovation commitment), and market trajectory. We analyse these because they predict whether a supplier will still be innovating in 3 to 5 years." },
      { q: "What about system integration?", a: "Integration assessment happens before platform selection, not after. We map all your connection points (CRM, productivity tools, etc.) and verify compatibility." },
    ],
  },

  "deployment": {
    title: "Deployment Services",
    badge: "Services",
    headline: "Rolling out new systems doesn't have to disrupt your business",
    subline: "Fortay Connect takes the stress out of deployment with staged transitions, deep integrations and comprehensive training, delivered with a security-first approach so teams adopt the new system quickly and confidently.",
    heroCta: "Get Your Free Technology Audit",
    thisIsForYou: [
      "You need zero downtime during transition",
      "You want thorough user training and change management",
      "You need cross-department enablement for different teams",
      "You don't want to distract your team from their focus areas",
      "You want a trusted partner with decades of experience",
    ],
    problemHeading: "Poor implementations can kill even the best platforms.",
    problemBody: "Even the best platforms fail with poor planning and adoption. We deliver staged rollouts, system integrations and user enablement so your business keeps running. Expect clear governance, regular comms, and a security-first approach from day one.",
    whatWeDoTitle: "How we make deployment painless",
    whatWeDo: [
      {
        title: "Staged transition process",
        body: "Forget risky 'rip and replace' approaches. We capture all requirements, re-architect processes from the ground up, and roll out changes strategically with thorough user testing and training.",
      },
      {
        title: "Deep system integration",
        body: "Your CRM, contact centre, and existing tools, all working together seamlessly. We handle complex technical details like number porting while keeping you informed through weekly project syncs.",
      },
      {
        title: "Security first, always",
        body: "Built-in compliance (PCI, GDPR, etc.) and robust security from day one. After go-live, we provide hyper-support to help your IT team and ensure smooth cross-department enablement.",
      },
    ],
    testimonials: [
      {
        company: "ESI Technologies",
        name: "Alan Venner",
        role: "IT Business Unit Leader",
        quote: "The system was easy to set up and the onboarding ran smoothly, thanks to excellent planning and regular communication from the project team. The flexibility and customisation we now have at our fingertips is light years ahead of anything we had before.",
        stats: [
          { value: "0", label: "downtime on go-live" },
          { value: "4 months", label: "full deployment" },
          { value: "100%", label: "user adoption" },
        ],
      },
      {
        company: "Ashtons Legal",
        name: "Ben Hallatt",
        role: "IT Director",
        quote: "He walked us through what modern platforms can actually do, translated all the technical jargon into real business value, and completely transformed how we interact with clients. What really stood out was how he made complex decisions feel manageable.",
        stats: [
          { value: "35%", label: "faster client response" },
          { value: "100+", label: "staff migrated" },
          { value: "£80k", label: "annual savings" },
        ],
      },
    ],
    faqs: [
      { q: "How long does a typical deployment take?", a: "Most projects take 4–9 months from start to finish. But more importantly, we stage the rollout so your business keeps running smoothly throughout. No 'big bang' implementations that risk disruption." },
      { q: "What steps do you take to minimise downtime?", a: "The new system is built alongside your existing one. As it's cloud-based it will be live and operational during testing. Once built we can go live immediately with no downtime." },
      { q: "How do you handle system integration?", a: "Before touching any systems, we map every integration point, CRM, contact centre, business tools, and create a detailed connection plan. We test your environment extensively before going live." },
      { q: "Do you provide training?", a: "Yes, and we go beyond basic 'how to use' sessions. We create role-specific training plans, offer hands-on workshops, and provide follow-up support until your team is fully confident." },
    ],
  },

  "managed-services": {
    title: "Managed Services",
    badge: "Services",
    headline: "Managed Services that maximise your technology investment 24/7",
    subline: "Fortay Connect's expert team provides proactive management, strategic guidance, and optimisation to ensure you get continuous value from your communication platforms.",
    heroCta: "Talk to a Managed Services Specialist",
    thisIsForYou: [
      "You want your contact centre to innovate with ease",
      "You need to stay ahead of rapid technology changes",
      "You want to maximise value from AI and new features",
      "Your business depends on communication technology",
      "You don't have the time to learn every technology release",
      "You need to deliver measurable ROI to the board",
    ],
    problemHeading: "Standard support isn't enough when technology evolves this quickly.",
    problemBody: "Ticket-based support keeps the lights on, it doesn't keep you improving. We proactively monitor performance, optimise new features, and drive adoption across UC, CX and AI so your platforms keep delivering value long after go-live. Expect governance, regular optimisation cycles and clear reporting, not reactive firefighting.",
    whatWeDoTitle: "What you get with Fortay Managed Services",
    whatWeDo: [
      {
        title: "CX Optimisation",
        body: "Analyse conversational intelligence for customer themes and sales insights, AI capability review, agent experience, first contact resolution rates, customer sentiment analysis, and virtual agent query performance.",
      },
      {
        title: "Proactive Care",
        body: "System health monitoring, AI capabilities optimisation, future-proofing consultation, quarterly technology roadmap updates, strategic feature implementation planning, ROI optimisation, and team training.",
      },
      {
        title: "Expert Resolution",
        body: "Our own UK-based expert team (no outsourcing), direct access to accredited platform experts, prioritised issue resolution, complete issue tracking, and bespoke platform for queries and tickets. Zoom CX Support Certified, the first in the UK.",
      },
    ],
    testimonials: [
      {
        company: "Paragon Law",
        name: "Thal Vasishta",
        role: "Group CEO",
        quote: "Implementing GoToMeeting and GoToConnect had an immediate impact on our business. It meant our teams could work from anywhere, using any device. Videoconferencing is integrated into the software, so it's easy for multiple people to connect at any time. We have total flexibility when it comes to calling locally or internationally.",
        stats: [
          { value: "Remote", label: "work enabled" },
          { value: "E2E", label: "security" },
          { value: "6+", label: "years partnership" },
        ],
      },
      {
        company: "Your World Recruitment",
        name: "Simon Knox",
        role: "IT Director",
        quote: "The issue was that there was a delay, and in recruitment any kind of a delay is too long. Avaya Cloud Office works and does what we need it to do, which is to integrate seamlessly with our VDI environment so that our real time telephony is a seamless and effortless experience for our recruiters.",
        stats: [
          { value: "0ms", label: "effective latency" },
          { value: "Global", label: "recruitment enabled" },
          { value: "100%", label: "VDI integration" },
        ],
      },
    ],
    faqs: [
      { q: "What is a modern managed service?", a: "A proactive service that focuses on analysing the data from your platform to maintain success or to innovate further. Contact centres are not static, they need to adapt quickly to stay relevant to changes in the market, customer requirements, plus staff or business changes." },
      { q: "Is it Fortay services or the technology partners?", a: "We work closely with all technology partners, our support services complement each other. We advise clients to always open a ticket with the technology provider and share the ticket reference with us so we can use our relationships to escalate and work together to resolve." },
      { q: "Why are Fortay services different?", a: "Fortay engineers are all UK-based and have all the details of your system (having probably built it). You get engineers you know and trust, who act as an extension of your tech team." },
      { q: "Can you support multiple platforms?", a: "Yes. We support all major platforms (RingCentral, Zoom, Teams, etc.) and handle the integrations between them. One central point of contact for everything." },
      { q: "Is this break-fix support?", a: "No, we help optimise your system, implement new features, and ensure you're getting value from your investment. Think of us as your ongoing optimisation partner." },
    ],
  },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

const TestimonialsBlock = ({ testimonials }: { testimonials: ServiceData["testimonials"] }) => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--purple)/0.06)] border-t border-purple/10 py-20">
      <DecorativeCircle color="purple" variant="ring" className="-bottom-16 -right-12 opacity-20" size="h-64 w-64" />
      <div className="container relative z-10">
        <motion.div className="mb-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="inline-block rounded-full border border-purple/30 bg-purple/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-purple">
            Client Reviews
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-foreground md:text-3xl">
            Transformation that speaks for itself.
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.company}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition-all ${
                active === i
                  ? "border-purple bg-purple/10 text-purple"
                  : "border-border bg-card text-muted-foreground hover:border-purple/40 hover:text-foreground"
              }`}
            >
              {t.company}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.company}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-3xl"
          >
            <div className="flex flex-col items-start gap-5 rounded-2xl border border-purple/20 bg-background p-7 shadow-sm md:flex-row">
              <Quote className="mt-1 h-8 w-8 shrink-0 text-purple/40" />
              <div>
                <p className="text-base italic leading-relaxed text-foreground md:text-lg">"{current.quote}"</p>
                <p className="mt-3 text-sm font-semibold text-foreground">
                  {current.name}{" "}
                  <span className="font-normal text-muted-foreground">
                   , {current.role}, {current.company}
                  </span>
                </p>
              </div>
            </div>

            {current.stats && (
              <div className="mt-4 grid grid-cols-3 gap-3">
                {current.stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-foreground px-4 py-4 text-center">
                    <p className="font-display text-xl font-bold text-primary md:text-2xl">{s.value}</p>
                    <p className="mt-0.5 text-xs text-background/60">{s.label}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const FAQBlock = ({ faqs }: { faqs: { q: string; a: string }[] }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="relative overflow-hidden bg-foreground py-20">
      <DecorativeCircle color="teal" variant="disc" className="-top-20 -left-16 opacity-10" size="h-64 w-64" />
      <DecorativeCircle color="purple" variant="ring" className="-bottom-24 -right-16 opacity-20" size="h-72 w-72" />
      <div className="container relative z-10">
        <motion.div className="mb-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            FAQs
          </span>
          <h2 className="mt-3 font-display text-2xl font-bold text-background md:text-3xl">Frequently asked questions</h2>
        </motion.div>

        <div className="mx-auto max-w-3xl divide-y divide-background/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold text-background/90 transition-colors hover:text-primary"
              >
                {faq.q}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-background/40 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-relaxed text-background/60">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── Main page ───────────────────────────────────────────────────────────────

const ServiceDetail = ({ slug }: { slug: string }) => {
  // slug received via props
  const service = serviceData[slug || ""];

  if (!service) {
    return (
      <>
        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Service not found.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <main>

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-foreground py-24 text-background">
          <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
          <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-64 w-64 md:h-96 md:w-96" />
          <div className="container relative z-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

              {/* Left: headline + opener */}
              <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
                <motion.p variants={fadeUp} className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                  {service.title}
                </motion.p>
                <motion.h1 variants={fadeUp} className="font-display text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                  {service.headline}
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-background/70 md:text-lg">
                  {service.subline}
                </motion.p>
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:brightness-110"
                  >
                    {service.heroCta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-7 py-3 text-sm font-bold text-background transition-all hover:bg-background/20"
                  >
                    Book a strategy call
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right: "This is for you if" */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="rounded-2xl border border-background/10 bg-background/5 px-7 py-7 backdrop-blur-sm"
              >
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">This is for you if…</p>
                <ul className="space-y-3">
                  {service.thisIsForYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                      <span className="text-sm leading-relaxed text-background/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CUSTOMER CAROUSEL ── */}
        <TrustedBySection />

        {/* ── PROBLEM STATEMENT ── */}
        <section className="relative overflow-hidden bg-background py-20">
          <DecorativeCircle color="teal" variant="ring" className="-top-16 -right-16 opacity-15" size="h-52 w-52" />
          <div className="container relative z-10">
            <motion.div
              className="mx-auto max-w-3xl text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-teal">
                The challenge
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
                {service.problemHeading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.problemBody}
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3 text-sm font-bold text-white shadow-lg shadow-teal/30 transition-all hover:brightness-110"
              >
                Get a free audit
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── HOW WE WORK WITH YOU (Process) ── */}
        <ProcessSection />

        {/* ── WHAT WE ACTUALLY DO ── */}
        <section className="relative overflow-hidden bg-[hsl(var(--purple)/0.06)] border-y border-purple/10 py-20">
          <DecorativeCircle color="purple" variant="disc" className="-bottom-20 -left-16 opacity-10" size="h-56 w-56" />
          <div className="container relative z-10">
            <motion.div
              className="mb-12 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="mb-3 inline-block rounded-full border border-purple/30 bg-purple/10 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-purple">
                {service.whatWeDoTitle}
              </span>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Exactly what we deliver
              </h2>
            </motion.div>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {service.whatWeDo.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-purple/20 bg-background px-6 py-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-sm font-bold text-purple uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/75">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── MID CTA ── */}
        <section className="bg-primary py-16">
          <div className="container text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display text-2xl font-bold text-primary-foreground md:text-3xl">
                Ready to move forward?
              </h2>
              <p className="mt-3 text-base text-primary-foreground/80">
                Book a strategy call with our team. No obligation, no supplier bias.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-primary shadow-lg transition-all hover:bg-white/90"
                >
                  Book a strategy call
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-white/20"
                >
                  Take the free assessment
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CLIENT REVIEWS ── */}
        <TestimonialsBlock testimonials={service.testimonials} />

        {/* ── FAQs ── */}
        <FAQBlock faqs={service.faqs} />

      </main>
    </>
  );
};

export default ServiceDetail;
