import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Headset, Sparkles, Users, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";

const technologies = [
  { icon: Bot, title: "AI Virtual Agents", slug: "ai-virtual-agents", description: "Intelligent conversational agents that handle customer enquiries 24/7, reducing wait times and freeing your team for complex tasks.", accent: "teal" },
  { icon: Headset, title: "Contact Centre", slug: "contact-centre", description: "Omnichannel contact centre platforms that unify voice, chat, email and social into a single, powerful agent experience.", accent: "purple" },
  { icon: Sparkles, title: "AI & Automation", slug: "ai-automation", description: "Workflow automation, sentiment analysis, and intelligent routing that transforms operational efficiency at scale.", accent: "teal" },
  { icon: Users, title: "Sales Agents", slug: "sales-agents", description: "AI-powered sales engagement tools that help your team close more deals with real-time coaching and automated follow-ups.", accent: "purple" },
  { icon: Phone, title: "Unified Communications", slug: "unified-communications", description: "Consolidate voice, video, messaging and collaboration onto a single platform that drives productivity and cuts costs.", accent: "teal" },
];

const Technology = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 text-background">
        <DecorativeCircle color="teal" className="-top-28 -right-28 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-32 -left-24 opacity-30" size="h-64 w-64 md:h-96 md:w-96" />
        <div className="container relative z-10">
          <motion.div className="mx-auto max-w-2xl text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Technology
            </p>
            <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">Solutions we deliver</h1>
            <p className="mt-4 text-lg text-background/50">From AI-powered virtual agents to unified communications — explore the platforms and solutions we specialise in.</p>
          </motion.div>
        </div>
      </section>

      {/* Cards grid */}
      <section className="relative overflow-hidden bg-background py-24">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -right-16 opacity-10" size="h-64 w-64" />
        <DecorativeCircle color="teal" variant="ring" className="-top-16 -left-16 opacity-15" size="h-48 w-48" />
        <div className="container relative z-10">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((t, i) => {
              const isTeal = t.accent === "teal";
              const accentBorder = isTeal ? "border-teal/20 hover:border-teal/50" : "border-purple/20 hover:border-purple/50";
              const accentIconBg = isTeal ? "bg-teal/10" : "bg-purple/10";
              const accentIconText = isTeal ? "text-teal" : "text-purple";
              const accentBtn = isTeal ? "text-teal" : "text-purple";

              return (
                <motion.div key={t.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <Card className={`h-full border ${accentBorder} transition-all duration-300 hover:shadow-lg bg-card`}>
                    <CardContent className="p-8">
                      <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentIconBg}`}>
                        <t.icon className={`h-6 w-6 ${accentIconText}`} />
                      </div>
                      <h3 className="mb-3 font-display text-xl font-bold text-foreground">{t.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{t.description}</p>
                      <Button variant="ghost" asChild className={`p-0 ${accentBtn} hover:${accentBtn}/80`}>
                        <Link to={`/technology/${t.slug}`}>Learn more <ArrowRight className="ml-1 h-4 w-4" /></Link>
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
    <Footer />
  </>
);

export default Technology;
