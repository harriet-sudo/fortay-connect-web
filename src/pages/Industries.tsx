import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, ShoppingCart, Factory, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const industries = [
  {
    slug: "financial-services",
    title: "Financial Services",
    icon: Building2,
    description:
      "Transform customer interactions across banking, insurance, and wealth management with AI-powered communications that meet strict compliance requirements.",
    challenges: [
      "Regulatory compliance across channels",
      "Secure customer authentication",
      "Fraud detection and prevention",
      "Omnichannel customer journeys",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    icon: ShoppingCart,
    description:
      "Deliver seamless shopping experiences across online and in-store channels with intelligent customer engagement and AI-driven personalisation.",
    challenges: [
      "Peak season scalability",
      "Unified online and offline experience",
      "Real-time inventory enquiries",
      "Personalised customer engagement",
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    description:
      "Streamline supply chain communications, improve field service coordination, and modernise legacy systems with integrated UC and CX platforms.",
    challenges: [
      "Supply chain communication gaps",
      "Field service coordination",
      "Legacy system modernisation",
      "Multi-site collaboration",
    ],
  },
  {
    slug: "legal",
    title: "Legal",
    icon: Scale,
    description:
      "Enhance client communications and case management with secure, compliant platforms that protect sensitive information while improving responsiveness.",
    challenges: [
      "Client confidentiality and data security",
      "Billing and time tracking integration",
      "Document-heavy workflows",
      "Multi-party communication management",
    ],
  },
];

const Industries = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
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
            <h1 className="font-display text-4xl font-bold md:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-4 text-lg text-background/70">
              Deep sector expertise that translates into real-world CX and AI
              outcomes. We understand the unique challenges, regulations, and
              opportunities in your industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {industry.title}
                </h2>
                <p className="mt-3 text-muted-foreground">
                  {industry.description}
                </p>
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground/60">
                    Key Challenges We Solve
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {industry.challenges.map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-16">
        <div className="container text-center">
          <h2 className="font-display text-3xl font-bold text-foreground">
            Don't see your industry?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Our CX and AI expertise applies across sectors. Get in touch to
            discuss how we can help your business.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Walkthrough
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Industries;
