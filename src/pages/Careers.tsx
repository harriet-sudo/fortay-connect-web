"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, Users, Zap, Globe, Heart, ArrowRight } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const values = [
  {
    icon: Zap,
    title: "Impact Over Activity",
    description: "We measure success by outcomes, not hours. Every project we deliver makes a tangible difference to our clients' operations.",
  },
  {
    icon: Users,
    title: "Collaborative by Nature",
    description: "We work as one team — with each other and with our clients. No silos, no egos, just shared goals and mutual respect.",
  },
  {
    icon: Globe,
    title: "Commercially Curious",
    description: "We don't just understand technology. We understand how it drives revenue, reduces cost and creates competitive advantage.",
  },
  {
    icon: Heart,
    title: "Integrity First",
    description: "We recommend what's right, not what's easy. Our clients trust us because we are vendor-neutral and commercially honest.",
  },
];

const benefits = [
  "Flexible & remote working",
  "Competitive salary & bonus structure",
  "Professional development budget",
  "Access to leading technology platforms",
  "Collaborative, low-hierarchy culture",
  "Exposure to enterprise-level clients",
  "Regular team events & socials",
  "Pension contributions",
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <main>
      {/* Hero */}
      <section className="bg-foreground py-20 text-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
              <Briefcase className="h-7 w-7 text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              Careers at Fortay Connect
            </h1>
            <p className="mt-4 text-lg text-background/70">
              Join a team that's shaping the future of AI-powered customer experience and communications for some of the UK's most ambitious organisations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-3 text-muted-foreground">
              Our values aren't posters on a wall. They're how we work every day.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Benefits &amp; Perks
            </h2>
          </motion.div>
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-5 py-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-sm font-medium text-foreground">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles / CTA */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Open Positions
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
              We're always interested in hearing from talented people who share our passion for technology and customer experience. Even if we don't have a specific role listed, we'd love to hear from you.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 rounded-2xl border border-border bg-card p-10">
              <p className="font-display text-lg font-bold text-foreground">
                No open roles right now — but don't let that stop you.
              </p>
              <p className="mt-3 text-sm text-muted-foreground">
                Send us your CV and a short note about what excites you about AI and CX. We'll keep you on file for future opportunities.
              </p>
              <div className="mt-6">
                <Button asChild size="lg">
                  <a href="mailto:careers@fortayconnect.com">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </div>
);

export default Careers;
