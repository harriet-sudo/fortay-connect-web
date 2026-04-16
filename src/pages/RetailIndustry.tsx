"use client";

import Link from "next/link";
import SocialProofSection from "@/components/home/SocialProofSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  ShieldCheck,
  TrendingDown,
  Users,
  Bot,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Download,
  Zap,
  MessageSquare,
  Globe,
  Lock,
  Eye,
  Clock,
  Package,
  Headphones,
  XCircle,
  Heart,
  Sparkles,
  Bell,
  LineChart,
  ShoppingBag,
  Smartphone,
  Timer,
} from "lucide-react";

const astonVillaLogo = "/assets/logos/aston-villa.webp";
const ineosLogo = "/assets/logos/ineos.webp";
const pkfLogo = "/assets/logos/pkf.png";
const alcumusLogo = "/assets/logos/alcumus.webp";
const caAutoLogo = "/assets/logos/ca-auto-finance.webp";
const dextLogo = "/assets/logos/dext.webp";
const ashtonsLegalLogo = "/assets/logos/ashtons-legal.webp";
const nottinghamForestLogo = "/assets/logos/nottingham-forest.png";

const BOOKING_URL = "https://meetings.hubspot.com/fortayconnect";

const clientLogos = [
  { name: "Aston Villa", src: astonVillaLogo },
  { name: "INEOS", src: ineosLogo },
  { name: "PKF", src: pkfLogo },
  { name: "Alcumus", src: alcumusLogo },
  { name: "CA Auto Finance", src: caAutoLogo },
  { name: "Dext", src: dextLogo },
  { name: "Ashtons Legal", src: ashtonsLegalLogo },
  { name: "Nottingham Forest", src: nottinghamForestLogo },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const realityChecks = [
  { text: "Chat queues build while customers hesitate mid-checkout", icon: MessageSquare },
  { text: "Calls go unanswered during peak trading hours", icon: Clock },
  { text: "Order status queries overwhelm your service teams", icon: Package },
  { text: "Customers expect instant answers across every channel", icon: Smartphone },
  { text: "Peak seasons stretch your CX to breaking point", icon: AlertTriangle },
  { text: "Acquisition spend grows but conversion doesn't follow", icon: TrendingDown },
];

const revenueLeaks = [
  {
    icon: ShoppingBag,
    num: "01",
    title: "Abandoned Baskets",
    description:
      "A sizing question. A delivery concern. A return policy hesitation. No instant answer? The customer leaves. AI virtual agents embedded directly into ecommerce journeys resolve uncertainty in seconds, protecting conversion at the point of decision.",
  },
  {
    icon: Package,
    num: "02",
    title: "Order Status & Returns Overload",
    description:
      '"Where is my order?" "How do I return this?" "Has this shipped yet?" Predictable. High-volume. Operationally expensive. Handled manually, they drain margin. Automated intelligently, they disappear.',
  },
  {
    icon: Zap,
    num: "03",
    title: "Peak-Season Fragility",
    description:
      "Black Friday. Christmas. Flash sales. Traditional CX scales linearly: more demand → more staff → more cost → more inconsistency. AI-enabled CX scales elastically: AI absorbs routine volume while human teams focus on high-value interactions.",
  },
  {
    icon: Globe,
    num: "04",
    title: "Channel Fragmentation",
    description:
      "Customers move fluidly across website, live chat, social media, email and voice. When these channels are disconnected, context is lost, conversations restart, and loyalty fades.",
  },
];

const approachPoints = [
  { text: "Deploy AI chatbots for instant order tracking, returns and FAQs", icon: Bot },
  { text: "Implement omnichannel CX across web, app, social and voice", icon: Globe },
  { text: "Enable elastic scaling for peak-season demand", icon: Zap },
  { text: "Integrate with ecommerce and order management platforms", icon: Lock },
  { text: "Provide real-time analytics tied to conversion metrics", icon: BarChart3 },
  { text: "Automate proactive customer notifications", icon: Bell },
];

const chatbotCapabilities = [
  "Provide instant order tracking across carriers",
  "Guide product selection with intelligent recommendations",
  "Resolve shipping and return queries automatically",
  "Offer size guides and product comparisons",
  "Escalate seamlessly to human agents with full context",
  "Operate 24/7 with unlimited concurrency",
];

const voiceAgentFeatures = [
  "Answer calls instantly, no hold music, no queue",
  "Authenticate customers securely",
  "Handle routine enquiries and order updates",
  "Route VIP or high-value customers intelligently",
  "Capture structured CRM data automatically",
  "Support peak demand without queue growth",
];

const omnichannelFeatures = [
  "Connect every channel into a single platform",
  "Preserve full conversation history across touchpoints",
  "Deliver real-time sentiment analysis",
  "Provide live dashboards for service and conversion metrics",
  "Prioritise high-value customers automatically",
];

const retailTrends = [
  {
    title: "Conversational Commerce",
    description:
      "AI embedded directly into ecommerce journeys to guide shopping, compare products and support decision-making at the point of purchase.",
    icon: MessageSquare,
  },
  {
    title: "Hyper-Personalisation",
    description:
      "AI analysing browsing behaviour and purchase history to deliver tailored engagement and smarter upsell opportunities.",
    icon: Sparkles,
  },
  {
    title: "Proactive CX",
    description:
      "Automated shipping updates, stock alerts and return notifications that reduce inbound demand while increasing trust.",
    icon: Bell,
  },
  {
    title: "Predictive Demand Forecasting",
    description:
      "Using CX analytics to anticipate service spikes, optimise staffing and align campaigns to real-time customer sentiment.",
    icon: LineChart,
  },
];

const traditionalRetailer = [
  "Reactive support during peaks",
  "Long chat queues at high-traffic moments",
  "Manual order tracking processes",
  "Disconnected channel data",
  "Limited visibility into CX impact on revenue",
  "Seasonal staffing pressure and inconsistency",
];

const aiEnabledRetailer = [
  "24/7 conversational AI across all channels",
  "Instant order and return automation",
  "Elastic scaling during demand spikes",
  "Unified omnichannel journey tracking",
  "Real-time analytics tied to conversion",
  "Controlled cost-to-serve at any volume",
];

const businessImpacts = [
  { metric: "30–60%", label: "Reduction in repetitive service volume" },
  { metric: "↑", label: "Basket conversion rates" },
  { metric: "< 5s", label: "Average response time" },
  { metric: "↓", label: "Cost per customer interaction" },
  { metric: "↑", label: "NPS and CSAT scores" },
  { metric: "↑", label: "Customer retention and lifetime value" },
];

const whyFortayPoints = [
  "Platform-neutral advisory across AI, UCaaS and CCaaS platforms",
  "Secure integration with ecommerce and order management systems",
  "ROI modelling aligned to conversion and retention metrics",
  "Scalable infrastructure built for peak-season elasticity",
  "Board-level reporting visibility across CX performance",
];

const ctaExploring = [
  "AI for retail UK",
  "Ecommerce chatbots",
  "Retail virtual agents",
  "Omnichannel contact centre modernisation",
  "Conversational AI strategy",
];

const RetailIndustryPage = () => (
  <div className="min-h-screen bg-background">
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground py-24 md:py-32 text-background">
        <DecorativeCircle color="teal" className="-top-32 -right-32 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-28 opacity-30" size="h-56 w-56 md:h-80 md:w-80" />
        <div className="container relative z-10">
          <Link
            href="/industries"
            className="mb-8 inline-flex items-center gap-1 text-sm text-background/50 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All Industries
          </Link>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                <ShoppingCart className="h-7 w-7 text-primary" />
              </div>
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Retail
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
            >
              Customer Experience Is Your Most Valuable{" "}
              <span className="text-primary">Retail Asset</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg text-background/50">
              Not your store. Not your product. Not your campaign.
              <br />
              Your responsiveness.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-4 max-w-2xl text-background/70">
              Fortay Connect helps UK retailers deploy AI-powered CX, virtual agents and
              omnichannel communications infrastructure that responds instantly at scale,
              protecting conversion, margin and loyalty during everyday demand and peak-season
              pressure alike.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 rounded-xl border border-background/10 bg-background/5 p-5 backdrop-blur-sm">
              <p className="font-display text-lg font-bold">
                In retail, seconds convert.
                <br />
                <span className="text-primary">We make every second count.</span>
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Retail CX Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-background/20 text-background hover:bg-background/10">
                <a href="#">
                  <Download className="mr-2 h-4 w-4" />
                  Download Retail AI Blueprint
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <SocialProofSection />

      {/* The Conversion Problem */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-destructive/20 bg-destructive/5 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-destructive">
              Sound familiar?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Retail Has a Conversion Problem, Not a Traffic Problem
            </h2>
            <p className="mt-3 text-muted-foreground">
              Retailers invest heavily in acquisition, paid media, influencer campaigns, product launches.
              But when traffic arrives:
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {realityChecks.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-destructive/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-destructive/10 transition-colors group-hover:bg-destructive/20">
                  <item.icon className="h-5 w-5 text-destructive" />
                </div>
                <span className="text-sm text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mx-auto mt-12 max-w-xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-sm text-muted-foreground">
              Traffic without scalable CX is wasted spend.
            </p>
            <p className="mt-4 font-display text-2xl font-bold text-primary">
              Customer experience is no longer a support function. It is a revenue function.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where Revenue Quietly Leaks */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="purple" className="-top-28 -right-20 opacity-15" size="h-56 w-56 md:h-72 md:w-72" />
        <div className="container relative z-10">
          <motion.div
            className="mb-12 max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Revenue at risk
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Where Revenue Quietly Leaks
            </h2>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {revenueLeaks.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl border border-background/10 bg-background/5 p-8 backdrop-blur-sm"
              >
                <span className="absolute -right-2 -top-4 font-display text-8xl font-extrabold text-primary/10">
                  {s.num}
                </span>
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/20">
                    <s.icon className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-background/60">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="mt-10 text-center text-sm text-background/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Peak performance is not operational.{" "}
            <span className="font-semibold text-background">It is strategic.</span>
          </motion.p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="relative overflow-hidden py-20">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-20 -right-16 opacity-20" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Our approach
              </motion.p>
              <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                CX Infrastructure That Converts
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                We design AI-powered customer experience ecosystems that turn every interaction into a revenue opportunity.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5">
                <p className="font-medium text-foreground">
                  This isn't another chatbot project.
                  <br />
                  <span className="text-primary">It's conversion infrastructure.</span>
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-3"
            >
              {approachPoints.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.08 }}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Chatbots, dark with ecommerce chat mockup */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" className="-top-24 -left-20 opacity-15" />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Ecommerce chat mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1"
            >
              <div className="rounded-2xl border border-background/10 bg-background/5 p-6 backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-2 border-b border-background/10 pb-3">
                  <Bot className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">AI Shopping Assistant</span>
                  <span className="ml-auto flex h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-background/40">Online 24/7</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      I'm between sizes M and L in the oversized hoodie. What do you recommend?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      Based on your previous orders, I'd recommend the L for a relaxed fit. Would you like me to check stock in your preferred colour?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[75%] rounded-2xl rounded-tr-md bg-primary/20 px-4 py-2.5 text-xs text-background/80">
                      Yes please, charcoal. And can I still return if it doesn't fit?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[75%] rounded-2xl rounded-tl-md bg-background/10 px-4 py-2.5 text-xs text-background/80">
                      ✓ Charcoal L is in stock. Free returns within 30 days. I've added it to your basket, ready to checkout?
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-background/30">
                    <ShoppingCart className="h-3 w-3" />
                    Conversion protected · Instant response · Zero queue time
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chatbot features */}
            <motion.div
              className="order-1 md:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <Bot className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold md:text-4xl">
                AI Chatbots for Ecommerce That Actually Convert
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-background/50">
                Modern retail chatbots are not scripted FAQ widgets. They are conversational AI systems that:
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3">
                {chatbotCapabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-background/80">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-6 space-y-1">
                <p className="text-sm font-bold text-background/70">In retail, immediacy drives revenue.</p>
                <p className="text-sm font-bold text-primary">Reduce repetitive volume by 30–60%. Increase basket conversion.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Voice AI & Contact Centre */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Headphones className="h-6 w-6 text-primary" />
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
                AI Virtual Agents for Retail Contact Centres
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
                Voice remains critical for high-value orders and complex returns. We deploy AI virtual agents that:
              </motion.p>
              <motion.ul variants={fadeUp} className="mt-4 space-y-3">
                {voiceAgentFeatures.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <p className="mt-6 font-display text-lg font-bold text-primary">
                No hold music fatigue. No voicemail overflow. No peak-season panic.
              </p>
            </motion.div>

            {/* Omnichannel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple/10">
                <Globe className="h-6 w-6 text-purple" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                Omnichannel Retail CX Infrastructure
              </h2>
              <p className="mt-4 text-muted-foreground">
                Retail customers move fluidly across website, live chat, social media, email and voice. Your systems must follow them.
              </p>
              <div className="mt-6 space-y-3">
                {omnichannelFeatures.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                    className="flex items-center gap-4 rounded-xl border border-purple/20 bg-purple/5 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple/10">
                      <CheckCircle2 className="h-5 w-5 text-purple" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-border bg-muted/30 p-5">
                <p className="font-medium text-foreground">
                  Experience becomes consistent. Performance becomes measurable.
                  <br />
                  <span className="text-primary">CX becomes commercially accountable.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Retail Trends */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Strategic advantage
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Retail Trends Driving Competitive Advantage
            </h2>
            <p className="mt-3 text-muted-foreground">
              Reactive retail struggles. <span className="font-semibold text-primary">Predictive retail scales.</span>
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {retailTrends.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs AI-Enabled */}
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
              Traditional Retailer vs AI-Enabled Retailer
            </h2>
            <p className="mt-3 text-muted-foreground">
              One reacts. <span className="font-semibold text-primary">The other anticipates.</span>
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-destructive">Traditional Retailer</h3>
              <ul className="space-y-3">
                {traditionalRetailer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive/60" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            {/* AI-Enabled */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-primary/20 bg-primary/5 p-8"
            >
              <h3 className="mb-6 font-display text-xl font-bold text-primary">AI-Enabled Retailer</h3>
              <ul className="space-y-3">
                {aiEnabledRetailer.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8 text-center"
          >
            <p className="font-display text-xl font-bold text-foreground">
              Ready to move from <span className="text-destructive">traditional</span> to <span className="text-primary">AI-enabled</span>?
            </p>
            <p className="max-w-md text-sm text-muted-foreground">
              Book a free 30-minute audit and we'll show you exactly where AI can transform your retail CX.
            </p>
            <a
              href="https://meetings.hubspot.com/fortayconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              Book Your Free Audit
            </a>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="relative overflow-hidden bg-foreground py-20 text-background">
        <DecorativeCircle color="teal" variant="disc" className="-bottom-24 -left-16 opacity-15" size="h-40 w-40 md:h-56 md:w-56" />
        <div className="container relative z-10">
          <motion.div
            className="mx-auto mb-12 max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Results
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              The Commercial Impact
            </h2>
            <p className="mt-3 text-background/50">
              This is not cost reduction alone. It is revenue amplification.
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center divide-x divide-background/10">
            {businessImpacts.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className="flex flex-col items-center px-6 py-4 text-center"
              >
                <p className="font-display text-3xl font-extrabold text-primary">{item.metric}</p>
                <p className="mt-1 max-w-[110px] text-xs text-background/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mx-auto mt-10 max-w-xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="mt-2 font-display text-lg font-bold text-primary">
              Revenue amplification, not just cost reduction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="border-y border-border bg-muted/30 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <p className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
              Trusted By
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Who We Work With
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-14"
          >
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100 md:h-12"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Fortay */}
      <section className="relative overflow-hidden bg-purple-light py-20">
        <DecorativeCircle color="purple" variant="ring" className="-top-28 -right-16 opacity-20" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="mb-2 inline-block rounded-full border border-purple/20 bg-purple/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-purple">
              Why us
            </motion.p>
            <motion.h2 variants={fadeUp} className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Why Fortay Connect?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-muted-foreground">
              Retailers do not need isolated chatbot providers. They need commercially aligned CX architects.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-2 text-muted-foreground">
              We design CX as competitive infrastructure. Not as a feature.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {whyFortayPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 rounded-xl border border-purple/20 bg-card p-6">
              <p className="font-display text-lg font-bold text-foreground">
                You won't get buzzwords.
                <br />
                <span className="text-primary">You'll get a conversion engine.</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-primary py-20">
        <DecorativeCircle color="purple" variant="disc" className="-bottom-24 -right-16 opacity-30" size="h-48 w-48 md:h-64 md:w-64" />
        <div className="container relative z-10 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Ready to Make CX Your Competitive Advantage?
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-foreground/70">If you are exploring:</motion.p>
            <motion.ul variants={fadeUp} className="mx-auto mt-4 inline-flex flex-col items-start gap-2">
              {ctaExploring.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-foreground" />
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.p variants={fadeUp} className="mt-6 font-display text-xl font-bold text-foreground">
              Let's design it properly.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a Retail CX Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/10">
                <a href="#" className="inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Retail AI &amp; CX Blueprint
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  </div>
);

export default RetailIndustryPage;
