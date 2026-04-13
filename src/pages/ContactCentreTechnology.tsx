import { Link } from "react-router-dom";
import PageFAQSection from "@/components/PageFAQSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import { CheckCircle2, TrendingUp, Users, AlertTriangle, ShieldAlert } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const diagnostics = [
  {
    number: "01",
    title: "Rising Cost Per Contact",
    desc: "Manual handling of repetitive interactions drives operational cost.",
    impacts: ["Staffing grows linearly with demand", "Wait times increase", "Margins shrink"],
    icon: TrendingUp,
  },
  {
    number: "02",
    title: "Fragmented Customer Journeys",
    desc: "Customers move across voice, chat and messaging without continuity.",
    impacts: ["Customers repeat information", "Agents lack context", "Experience degrades"],
    icon: Users,
  },
  {
    number: "03",
    title: "Agent Experience Friction",
    desc: "Agents operate across multiple systems and dashboards.",
    impacts: ["Cognitive overload", "Toggle tax", "Burnout and attrition"],
    icon: AlertTriangle,
  },
  {
    number: "04",
    title: "AI Without Governance",
    desc: "AI pilots are deployed without structured oversight.",
    impacts: ["Escalation failures", "Security exposure", "Reputational risk"],
    icon: ShieldAlert,
  },
];

const readinessCriteria = [
  "Cost per contact is rising",
  "Agents manage repetitive demand",
  "Customers repeat information across channels",
  "AI has been tested but not structured",
  "Reporting lacks real-time visibility",
];

const faqs = [
  {
    q: "What is an AI-enabled contact centre?",
    a: "An AI-enabled contact centre integrates automation, intelligent routing and analytics into voice and digital channels to improve efficiency and customer experience.",
  },
  {
    q: "What is CCaaS?",
    a: "CCaaS (Contact Centre as a Service) is a cloud-based solution enabling scalable omnichannel customer engagement without on-premise infrastructure.",
  },
  {
    q: "How does AI reduce cost per contact?",
    a: "AI virtual agents absorb repetitive interactions and automate verification, reducing staffing pressure and lowering cost per interaction.",
  },
  {
    q: "How long does a contact centre transformation take?",
    a: "Most programmes take 3–9 months depending on integration complexity and deployment scope.",
  },
];

export default function ContactCentreTechnology() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20"
        style={{ background: "linear-gradient(170deg, hsl(268 55% 18%) 0%, hsl(var(--navy)) 60%, hsl(var(--navy)) 100%)" }}>
        <DecorativeCircle size="lg" color="purple" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle size="md" color="teal" className="bottom-0 left-10 opacity-10" />
        <div className="container relative z-10 max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span className="inline-block rounded-full bg-teal/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-6">
                Contact Centre
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Enabled Contact Centres{" "}
              <span className="text-teal">Designed for Scale, Compliance & Revenue Growth</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/70 mb-6 max-w-2xl mx-auto">
              Customer experience is no longer a support function.{" "}
              <strong className="text-white">It is a commercial control centre.</strong>
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto">
              {["Your most visible brand interaction", "Your richest source of operational data", "Your fastest indicator of strain", "Your clearest lever for margin control"].map((pill) => (
                <div key={pill} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 text-center">
                  {pill}
                </div>
              ))}
            </motion.div>
            <motion.p variants={fadeUp} className="text-white/60 italic mb-2">
              When response slows, revenue leaks. When queues grow, loyalty weakens. When journeys fragment, customers churn.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white font-semibold mb-10">
              This is architectural redesign — <span className="text-teal">not a platform refresh.</span>
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal text-navy font-semibold hover:bg-teal/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book CX Strategy Session</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/assessment">Take CX Assessment</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostics */}
      <section className="py-24 bg-background">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Diagnostic
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Where Contact Centres Break Down
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Contact centres don't fail because of technology. They drift when systems, workflows and AI evolve separately.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid gap-6 md:grid-cols-2">
            {diagnostics.map(({ number, title, desc, impacts, icon: Icon }) => (
              <motion.div key={number} variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-teal/30 leading-none">{number}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-teal" />
                      <h3 className="font-semibold text-foreground">{title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
                <ul className="space-y-1 pl-4 border-l border-teal/20">
                  {impacts.map((i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-teal inline-block" />{i}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Self-Qualification */}
      <section className="py-24 bg-muted/40">
        <div className="container max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal mb-4">
              Self-Qualification
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Is It Time to Re-Architect Your Contact Centre?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground mb-8">
              Contact centre transformation delivers the strongest impact when:
            </motion.p>
            <motion.ul variants={stagger} className="space-y-3 mb-8 text-left max-w-xl mx-auto">
              {readinessCriteria.map((item) => (
                <motion.li key={item} variants={fadeUp} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="text-foreground font-semibold mb-8">
              If three or more apply, your CX architecture likely requires redesign.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal text-navy font-semibold hover:bg-teal/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a CX Strategy Session</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/assessment">Take the CX Assessment</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <PageFAQSection title="Contact Centre FAQs" faqs={faqs} />
      <Footer />
    </div>
  );
}
