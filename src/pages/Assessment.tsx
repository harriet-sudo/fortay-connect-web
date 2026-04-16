"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DecorativeCircle from "@/components/DecorativeCircle";
import {
  ArrowRight,
  ArrowLeft,
  ClipboardCheck,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  Phone,
  Bot,
  Users,
  BarChart3,
  Shield,
  Zap,
  Target,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Question data                                                      */
/* ------------------------------------------------------------------ */

interface Question {
  id: string;
  question: string;
  description: string;
  icon: React.ElementType;
  options: { value: string; label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: "platform",
    question: "What communications platform does your organisation currently use?",
    description: "This helps us understand your starting point.",
    icon: Phone,
    options: [
      { value: "legacy", label: "Traditional on-premise PBX / phone system", score: 1 },
      { value: "basic-cloud", label: "Basic cloud phone system (e.g. Teams calling only)", score: 2 },
      { value: "ucaas", label: "UCaaS platform (e.g. Zoom, RingCentral, GoTo)", score: 3 },
      { value: "integrated", label: "Integrated UC + contact centre platform", score: 4 },
    ],
  },
  {
    id: "channels",
    question: "How many customer contact channels do you actively manage?",
    description: "Think about phone, email, live chat, social media, messaging apps, etc.",
    icon: Users,
    options: [
      { value: "one", label: "1–2 channels (e.g. phone and email only)", score: 1 },
      { value: "few", label: "3–4 channels but they are siloed", score: 2 },
      { value: "several", label: "4–5 channels, partially connected", score: 3 },
      { value: "omni", label: "5+ channels with unified routing and history", score: 4 },
    ],
  },
  {
    id: "ai-adoption",
    question: "Where are you on your AI journey for customer experience?",
    description: "AI can range from simple chatbots to advanced virtual agents and analytics.",
    icon: Bot,
    options: [
      { value: "none", label: "Not using any AI, everything is manual", score: 1 },
      { value: "exploring", label: "Exploring / evaluating AI tools", score: 2 },
      { value: "basic", label: "Using basic chatbot or auto-attendant", score: 3 },
      { value: "advanced", label: "Deploying conversational AI, sentiment analysis or virtual agents", score: 4 },
    ],
  },
  {
    id: "pain-points",
    question: "What is your biggest customer experience challenge right now?",
    description: "Select the one that resonates most with your current situation.",
    icon: AlertTriangle,
    options: [
      { value: "response-time", label: "Slow response times and long queues", score: 2 },
      { value: "scaling", label: "Difficulty scaling during peak periods", score: 2 },
      { value: "consistency", label: "Inconsistent experience across channels", score: 2 },
      { value: "cost", label: "High cost-to-serve with limited visibility", score: 2 },
    ],
  },
  {
    id: "data-visibility",
    question: "How well can you measure CX performance today?",
    description: "Data-driven CX teams outperform reactive ones by 2–3×.",
    icon: BarChart3,
    options: [
      { value: "none", label: "Little to no reporting, we rely on gut feel", score: 1 },
      { value: "basic", label: "Basic call stats (volume, duration)", score: 2 },
      { value: "good", label: "Dashboards with CSAT, NPS and SLA tracking", score: 3 },
      { value: "advanced", label: "Real-time analytics with sentiment, forecasting and revenue attribution", score: 4 },
    ],
  },
  {
    id: "security",
    question: "How important is compliance and security in your CX infrastructure?",
    description: "Regulated industries have specific requirements for data handling.",
    icon: Shield,
    options: [
      { value: "minimal", label: "Not a major concern for us", score: 4 },
      { value: "standard", label: "Standard data protection (GDPR basics)", score: 3 },
      { value: "important", label: "Important, we handle sensitive customer data", score: 2 },
      { value: "critical", label: "Critical, FCA, SRA or sector-specific regulation applies", score: 1 },
    ],
  },
  {
    id: "readiness",
    question: "How ready is your leadership team to invest in CX transformation?",
    description: "Organisational buy-in is often the biggest accelerator, or blocker.",
    icon: Target,
    options: [
      { value: "unaware", label: "CX is not on the leadership agenda", score: 1 },
      { value: "interested", label: "Interest is growing but no budget allocated", score: 2 },
      { value: "planned", label: "Budget approved, actively evaluating options", score: 3 },
      { value: "committed", label: "Committed, looking for the right partner now", score: 4 },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Scoring & recommendations                                         */
/* ------------------------------------------------------------------ */

type Tier = "early" | "developing" | "advancing" | "leading";

function getTier(pct: number): Tier {
  if (pct < 35) return "early";
  if (pct < 55) return "developing";
  if (pct < 75) return "advancing";
  return "leading";
}

const tierConfig: Record<Tier, { label: string; color: string; headline: string; summary: string; recommendations: string[] }> = {
  early: {
    label: "Early Stage",
    color: "text-orange-500",
    headline: "You have a significant opportunity to transform your CX.",
    summary:
      "Your current setup is leaving revenue on the table. The good news? Organisations at this stage often see the most dramatic improvements when they modernise, with quick wins achievable in weeks, not months.",
    recommendations: [
      "Start with a cloud communications migration to eliminate infrastructure bottlenecks",
      "Deploy a basic AI chatbot to handle your highest-volume repetitive queries",
      "Implement unified reporting to get visibility into customer experience metrics",
      "Build a business case for CX investment with ROI modelling",
    ],
  },
  developing: {
    label: "Developing",
    color: "text-amber-500",
    headline: "You've started the journey, now it's time to accelerate.",
    summary:
      "You have some foundations in place but there are clear gaps holding you back. Focusing on channel integration and AI-assisted automation will unlock measurable gains in response time, CSAT and cost-to-serve.",
    recommendations: [
      "Unify your contact channels into a single omnichannel platform",
      "Introduce AI virtual agents for your top 5 repetitive query types",
      "Add real-time dashboards with sentiment analysis and SLA tracking",
      "Explore workforce optimisation to match staffing to demand patterns",
    ],
  },
  advancing: {
    label: "Advancing",
    color: "text-primary",
    headline: "You're ahead of most, let's make CX your competitive edge.",
    summary:
      "Your infrastructure is solid and you're already leveraging some AI. The next step is deepening intelligence, connecting CX to revenue outcomes and scaling what's working across your organisation.",
    recommendations: [
      "Deploy advanced conversational AI with natural language understanding",
      "Implement predictive analytics for demand forecasting and proactive outreach",
      "Connect CX metrics directly to revenue and retention dashboards",
      "Explore AI-powered quality management and agent coaching",
    ],
  },
  leading: {
    label: "CX Leader",
    color: "text-emerald-500",
    headline: "You're operating at the frontier of customer experience.",
    summary:
      "Your CX stack is mature and AI-enabled. The opportunity now is continuous optimisation, innovation and ensuring your infrastructure scales with growth. Let's explore what's next.",
    recommendations: [
      "Evaluate generative AI for hyper-personalised customer interactions",
      "Implement AI-driven revenue attribution across the full customer journey",
      "Explore autonomous CX workflows that self-optimise based on outcomes",
      "Benchmark against industry leaders and identify whitespace opportunities",
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Category scoring                                                   */
/* ------------------------------------------------------------------ */

interface CategoryScore {
  label: string;
  score: number;
  max: number;
  pct: number;
}

function getCategoryScores(answers: Record<string, string>): CategoryScore[] {
  const cats: { label: string; ids: string[] }[] = [
    { label: "Technology", ids: ["platform", "channels"] },
    { label: "AI Readiness", ids: ["ai-adoption", "readiness"] },
    { label: "Data & Analytics", ids: ["data-visibility", "security"] },
  ];

  return cats.map((cat) => {
    let total = 0;
    let max = 0;
    cat.ids.forEach((id) => {
      const q = questions.find((q) => q.id === id)!;
      const chosen = q.options.find((o) => o.value === answers[id]);
      total += chosen?.score ?? 0;
      max += 4;
    });
    return { label: cat.label, score: total, max, pct: Math.round((total / max) * 100) };
  });
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

const Assessment = () => {
  const [step, setStep] = useState(0); // 0 = intro, 1-7 = questions, 8 = lead capture, 9 = results
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = questions.length;
  const isQuestion = step >= 1 && step <= totalSteps;
  const isLeadCapture = step === totalSteps + 1;
  const isResults = step === totalSteps + 2;
  const currentQ = isQuestion ? questions[step - 1] : null;
  const progress = isResults ? 100 : isLeadCapture ? 95 : isQuestion ? Math.round((step / totalSteps) * 85) : 0;

  const totalScore = Object.entries(answers).reduce((sum, [id, val]) => {
    const q = questions.find((q) => q.id === id);
    const opt = q?.options.find((o) => o.value === val);
    return sum + (opt?.score ?? 0);
  }, 0);
  const maxScore = questions.length * 4;
  const pct = Math.round((totalScore / maxScore) * 100);
  const tier = getTier(pct);
  const config = tierConfig[tier];
  const categories = getCategoryScores(answers);

  const canProceed = isQuestion ? !!answers[currentQ!.id] : true;

  function handleNext() {
    if (isLeadCapture) {
      setSubmitted(true);
      setStep(step + 1);
      return;
    }
    setStep(step + 1);
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-background py-24">
        <DecorativeCircle color="teal" className="-top-32 -right-24 opacity-20" />
        <DecorativeCircle color="purple" variant="ring" className="-bottom-40 -left-20 opacity-20" size="h-56 w-56 md:h-80 md:w-80" />

        <div className="container relative z-10">
          {/* Progress bar */}
          {step > 0 && !isResults && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto mb-8 max-w-2xl">
              <div className="mb-2 flex justify-between text-xs text-muted-foreground">
                <span>
                  {isLeadCapture ? "Almost there" : `Question ${step} of ${totalSteps}`}
                </span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {/* -------- INTRO -------- */}
            {step === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mx-auto max-w-2xl text-center"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <ClipboardCheck className="h-10 w-10 text-primary" />
                </div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Free assessment</p>
                <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
                  AI & CX Readiness Assessment
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Answer 7 quick questions about your current setup and we'll give you a personalised readiness score with actionable recommendations, takes about 2 minutes.
                </p>

                <div className="mx-auto mt-10 grid max-w-md gap-4 text-left">
                  {[
                    { icon: CheckCircle2, text: "Evaluate your current CX maturity" },
                    { icon: TrendingUp, text: "Identify quick wins and strategic gaps" },
                    { icon: Sparkles, text: "Get a personalised action plan" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 rounded-lg border border-border bg-card p-4">
                      <item.icon className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="mt-10" onClick={() => setStep(1)}>
                  Start Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {/* -------- QUESTIONS -------- */}
            {isQuestion && currentQ && (
              <motion.div
                key={currentQ.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="mx-auto max-w-2xl"
              >
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <currentQ.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                    {currentQ.question}
                  </h2>
                  <p className="mt-2 text-muted-foreground">{currentQ.description}</p>
                </div>

                <RadioGroup
                  value={answers[currentQ.id] ?? ""}
                  onValueChange={(val) => setAnswers((prev) => ({ ...prev, [currentQ.id]: val }))}
                  className="space-y-3"
                >
                  {currentQ.options.map((opt) => (
                    <Label
                      key={opt.value}
                      htmlFor={opt.value}
                      className={`flex cursor-pointer items-center gap-4 rounded-xl border p-5 transition-all hover:border-primary/40 hover:bg-primary/5 ${
                        answers[currentQ.id] === opt.value
                          ? "border-primary bg-primary/5 shadow-sm"
                          : "border-border bg-card"
                      }`}
                    >
                      <RadioGroupItem value={opt.value} id={opt.value} />
                      <span className="text-sm font-medium text-foreground md:text-base">{opt.label}</span>
                    </Label>
                  ))}
                </RadioGroup>

                <div className="mt-8 flex justify-between">
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNext} disabled={!canProceed}>
                    {step === totalSteps ? "See My Results" : "Next"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* -------- LEAD CAPTURE -------- */}
            {isLeadCapture && (
              <motion.div
                key="lead"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                className="mx-auto max-w-md text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  Your results are ready!
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Enter your details below and we'll send you a copy of your personalised report.
                </p>

                <div className="mt-8 space-y-4 text-left">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your company" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1" />
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="ghost" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={handleNext} disabled={!email}>
                    View My Results
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  We respect your privacy. No spam, ever.
                </p>
              </motion.div>
            )}

            {/* -------- RESULTS -------- */}
            {isResults && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-3xl"
              >
                {/* Score card */}
                <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm md:p-12">
                  <p className="text-sm font-semibold uppercase tracking-widest text-primary">Your CX Readiness Score</p>

                  <div className="mx-auto my-8 flex h-40 w-40 items-center justify-center rounded-full border-4 border-primary/20 bg-primary/5">
                    <div>
                      <motion.span
                        className="block font-display text-5xl font-bold text-foreground"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        {pct}%
                      </motion.span>
                      <span className={`text-sm font-semibold ${config.color}`}>{config.label}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{config.headline}</h2>
                  <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{config.summary}</p>
                </div>

                {/* Category breakdown */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {categories.map((cat) => (
                    <motion.div
                      key={cat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="rounded-xl border border-border bg-card p-6"
                    >
                      <p className="text-sm font-medium text-muted-foreground">{cat.label}</p>
                      <p className="mt-1 font-display text-2xl font-bold text-foreground">{cat.pct}%</p>
                      <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                        <motion.div
                          className="h-full rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: `${cat.pct}%` }}
                          transition={{ duration: 1, delay: 0.6 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recommendations */}
                <div className="mt-8 rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-display text-xl font-bold text-foreground">Your Recommended Next Steps</h3>
                  <div className="mt-6 space-y-4">
                    {config.recommendations.map((rec, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex gap-4 rounded-lg border border-border bg-background p-4"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {i + 1}
                        </div>
                        <p className="text-sm text-foreground">{rec}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 rounded-2xl bg-foreground p-8 text-center md:p-12">
                  <h3 className="font-display text-2xl font-bold text-background">
                    Ready to act on these insights?
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-background/60">
                    Book a free strategy session and we'll walk through your results together with tailored recommendations for your organisation.
                  </p>
                  <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <Button size="lg" asChild>
                      <a href="https://meetings.hubspot.com/fortayconnect" target="_blank" rel="noopener noreferrer">
                        Book a Strategy Session
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-background/20 text-background hover:bg-background/10">
                      <a href="/contact">Get in Touch</a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};

export default Assessment;
