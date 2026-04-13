import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const technologyData: Record<string, { title: string; description: string; features: string[] }> = {
  "ai-virtual-agents": {
    title: "AI Virtual Agents",
    description: "Deploy intelligent virtual agents that handle customer enquiries around the clock. From simple FAQs to complex multi-turn conversations, our AI solutions reduce wait times, improve first-contact resolution, and free your human agents for high-value interactions.",
    features: [
      "24/7 customer self-service across voice and digital channels",
      "Natural language understanding with multi-turn conversation support",
      "Seamless handoff to live agents with full context transfer",
      "Continuous learning from interactions to improve accuracy",
      "Integration with your CRM, ticketing, and knowledge base systems",
    ],
  },
  "contact-centre": {
    title: "Contact Centre",
    description: "Transform your contact centre with omnichannel platforms that unify voice, chat, email, social media and video into one seamless agent experience. We help you select, deploy and optimise the right CCaaS solution for your business.",
    features: [
      "Omnichannel routing across voice, chat, email and social",
      "Real-time and historical analytics with custom dashboards",
      "Workforce management and quality assurance tools",
      "CRM and business system integrations",
      "Scalable cloud architecture with enterprise-grade security",
    ],
  },
  "ai-automation": {
    title: "AI & Automation",
    description: "Harness the power of AI and automation to streamline operations, reduce manual effort, and deliver smarter customer experiences. From intelligent routing to sentiment analysis and process automation, we help you work faster and smarter.",
    features: [
      "Intelligent call and interaction routing",
      "Real-time sentiment and emotion analysis",
      "Automated post-call summarisation and disposition",
      "Workflow automation for repetitive tasks",
      "Predictive analytics for demand forecasting",
    ],
  },
  "sales-agents": {
    title: "Sales Agents",
    description: "Empower your sales team with AI-driven tools that provide real-time coaching, automate follow-ups, and surface insights to help close more deals. From outbound dialling to conversation intelligence, we deploy technology that accelerates revenue.",
    features: [
      "AI-powered real-time sales coaching and prompts",
      "Automated outbound dialling and cadence management",
      "Conversation intelligence with deal risk scoring",
      "CRM integration with automatic activity logging",
      "Performance analytics and leaderboards",
    ],
  },
  "unified-communications": {
    title: "Unified Communications",
    description: "Consolidate your voice, video, messaging and collaboration tools onto a single, modern platform. We help you select and deploy the right UCaaS solution to boost productivity, reduce costs, and enable flexible working.",
    features: [
      "Enterprise voice with global PSTN connectivity",
      "HD video conferencing and webinar capabilities",
      "Team messaging and persistent chat spaces",
      "File sharing and real-time collaboration",
      "Mobile and desktop apps with consistent experience",
    ],
  },
};

const TechnologyDetail = () => {
  const { slug } = useParams();
  const tech = technologyData[slug || ""];

  if (!tech) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Technology not found.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="py-24">
        <div className="container">
          <motion.div className="mx-auto max-w-3xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Technology</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">{tech.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{tech.description}</p>
            <ul className="mt-8 space-y-3">
              {tech.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-foreground">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button size="lg" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Discuss your requirements <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TechnologyDetail;
