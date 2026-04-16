"use client";

import DecorativeCircle from "@/components/DecorativeCircle";
import { motion } from "framer-motion";
import { ArrowRight, Quote, Users, Target, Shield, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamBanner = "/assets/team/team-banner.jpg";
const harrietImg = "/assets/team/harriet-forrest.webp";
const markImg = "/assets/team/mark-taylor.webp";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

const values = [
{
  icon: Target,
  title: "Outcomes over opinions",
  description:
  "Every recommendation is anchored to a measurable business outcome, cost reduction, efficiency gain, or revenue impact."
},
{
  icon: Shield,
  title: "Platform-neutral, always",
  description:
  "We have no single-platform allegiance. We evaluate every platform against your specific needs, not our commercial interests."
},
{
  icon: Users,
  title: "In-house expertise",
  description:
  "Our team has architected, deployed, and managed comms platforms at Vodafone, Google, AWS, and Mitel. We know what works at scale."
},
{
  icon: Handshake,
  title: "Partnership, not projects",
  description:
  "Our average client relationship lasts 6+ years. We're invested in long-term success, not one-off implementations."
}];


const stats = [
{ value: "100+", label: "Enterprise transformations delivered" },
{ value: "6+ yrs", label: "Average client retention" },
{ value: "£Millions", label: "In savings identified for clients" },
{ value: "15+", label: "Technology partnerships" }];


const About = () =>
<>
    <main>
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
          src={teamBanner}
          alt="The Fortay Connect team at a technology conference"
          className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
        </div>
        <div className="container relative py-28 md:py-40">
          <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>

            <motion.p
            variants={fadeUp}
            className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">

              About Fortay Connect
            </motion.p>
            <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-background md:text-5xl lg:text-6xl">

              A letter from our founders
            </motion.h1>
            <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg text-background/60">

              Why we built Fortay Connect, and why it matters for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER LETTER ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <DecorativeCircle color="teal" className="-right-32 -top-32 opacity-10" />
        <div className="container relative">
          <motion.div
          className="mx-auto max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>

            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <Quote className="h-10 w-10 text-primary/30" />
            </motion.div>

            <motion.h2
            variants={fadeUp}
            className="font-display text-3xl font-bold text-foreground md:text-4xl">

              Enterprise communication has changed.
            </motion.h2>

            <motion.div variants={fadeUp} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                The last few years have transformed how businesses connect, collaborate, and compete.
                And no one has felt this more than the companies trying to modernise their communication
                systems. It's not surprising that most transformation initiatives fail.
              </p>
              <p>
                But we saw this problem long before the world changed. We lived it. Harriet spent years
                watching major enterprises struggle with cloud transformations at Google and AWS. Mark
                devoted 15 years to architecting communications solutions at Vodafone and Mitel. The gap
                between what suppliers promised and what businesses actually needed kept growing.
              </p>
              <p>
                Communication technology should create advantages, not headaches. But when every supplier
                claims transformation and every platform promises revolution, how do you cut through
                the noise?
              </p>
              <p>
                That's why we built <strong className="text-foreground">Fortay Connect</strong> in 2019.
                We wanted to create what we wished had existed: a truly independent communications
                consultancy that puts your business outcomes first. Our name comes from combining our
                surnames (Forrest + Taylor), but it represents something bigger, our commitment to
                getting things right.
              </p>
              <p>
                We've helped <strong className="text-foreground">100+ enterprises</strong> transform how
                they connect. From enabling global law firms to deliver borderless service to helping
                healthcare recruiters slash response times during critical shortages. Each success comes
                from combining deep technical expertise with a relentless focus on business impact.
              </p>
              <p className="text-foreground font-medium">
                If you're facing a communication transformation that has to succeed, we'd love to help.
                We've been in your shoes. We know what works. And we're ready to prove it.
              </p>
            </motion.div>

            {/* Founder signatures */}
            <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">

              <div className="flex items-center gap-4">
                <img
                src={harrietImg}
                alt="Harriet Forrest"
                className="h-16 w-16 rounded-full border-2 border-primary/20 object-cover" />

                <div>
                  <p className="font-display font-bold text-foreground">Harriet Forrest</p>
                  <p className="text-sm text-muted-foreground">Co-founder</p>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex items-center gap-4">
                <img
                src={markImg}
                alt="Mark Taylor"
                className="h-16 w-16 rounded-full border-2 border-primary/20 object-cover" />

                <div>
                  <p className="font-display font-bold text-foreground">Mark Taylor</p>
                  <p className="text-sm text-muted-foreground">Co-founder</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-foreground py-16">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) =>
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}>

                <p className="font-display text-3xl font-bold text-primary md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-background/50">{stat.label}</p>
              </motion.div>
          )}
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <DecorativeCircle color="purple" className="-left-40 bottom-0 opacity-10" />
        <div className="container relative">
          <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Our approach
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Why businesses choose Fortay Connect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">We're not a reseller. We're not a technology supplier. We're independent consultants who exist to get you the right result.


          </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) =>
          <motion.div
            key={value.title}
            className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}>

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
          )}
          </div>
        </div>
      </section>

      {/* ── CTA, BOOK A MEETING ── */}
      <section className="bg-foreground py-20 md:py-28">
        <div className="container">
          <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

            <div className="mx-auto mb-6 flex justify-center">
              <img
              src={markImg}
              alt="Mark Taylor"
              className="h-20 w-20 rounded-full border-4 border-primary/30 object-cover" />

            </div>
            <h2 className="font-display text-3xl font-bold text-background md:text-4xl">
              Book a meeting with Mark
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-background/60">
              Discover how we can streamline your communication stack. In a personalised 30-minute call, our co-founder Mark will walk you through exactly where you're losing money and what to do about it.
            

          </p>
            <div className="mt-8">
              <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg">

                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book Your Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  </>;


export default About;
