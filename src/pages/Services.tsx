"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lightbulb, ListChecks, Rocket, Headset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";

const services = [
  { icon: Lightbulb, title: "CX & AI Advisory", slug: "cx-ai-advisory", description: "Strategic assessment of your current landscape with actionable recommendations for transformation.", accent: "teal" },
  { icon: ListChecks, title: "Technology Selection", slug: "technology-selection", description: "Platform-neutral evaluation and shortlisting to match the right platform to your business needs.", accent: "purple" },
  { icon: Rocket, title: "Deployment Services", slug: "deployment", description: "Seamless implementation with change management, training, and integration support.", accent: "teal" },
  { icon: Headset, title: "Managed Services", slug: "managed-services", description: "Ongoing optimisation, support, and strategic guidance to maximise your investment.", accent: "purple" },
];

const Services = () => (
  <>
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <DecorativeCircle color="teal" className="-top-28 -right-28 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-32 -left-24 opacity-30" size="h-64 w-64 md:h-96 md:w-96" />
        <div className="container relative z-10">
          <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Our services
            </p>
            <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">End-to-end CX & AI transformation</h1>
            <p className="mt-4 text-lg text-background/50">From strategy to deployment and beyond, we're with you at every stage.</p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative overflow-hidden bg-background py-24">
        <DecorativeCircle color="teal" variant="ring" className="-top-20 -left-16 opacity-15" size="h-52 w-52" />
        <DecorativeCircle color="purple" variant="disc" className="-bottom-20 -right-16 opacity-10" size="h-56 w-56" />
        <div className="container relative z-10">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s, i) => {
              const isTeal = s.accent === "teal";
              const accentBorder = isTeal ? "border-teal/20 hover:border-teal/50" : "border-purple/20 hover:border-purple/50";
              const accentIconBg = isTeal ? "bg-teal/10" : "bg-purple/10";
              const accentIconText = isTeal ? "text-teal" : "text-purple";
              const accentBtn = isTeal ? "text-teal" : "text-purple";

              return (
                <motion.div key={s.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className={`h-full border ${accentBorder} transition-all duration-300 hover:shadow-lg bg-card`}>
                    <CardContent className="p-8">
                      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentIconBg}`}>
                        <s.icon className={`h-6 w-6 ${accentIconText}`} />
                      </div>
                      <h3 className="mb-3 font-display text-xl font-bold text-foreground">{s.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                      <Button variant="ghost" asChild className={`p-0 ${accentBtn}`}>
                        <Link href={`/services/${s.slug}`}>Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  </>
);

export default Services