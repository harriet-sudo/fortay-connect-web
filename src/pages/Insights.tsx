import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Search, ChevronDown, Mail, Filter } from "lucide-react";
import { toast } from "sonner";

// Blog cover images
import imgUc2026 from "@/assets/blog/uc-2026.jpg";
import imgLegalAi from "@/assets/blog/legal-ai.jpg";
import imgZoomCxCert from "@/assets/blog/zoom-cx-cert.jpg";
import imgAiCxEmotion from "@/assets/blog/ai-cx-emotion.jpg";
import imgCloseSales from "@/assets/blog/close-sales.jpg";
import imgSentiment from "@/assets/blog/sentiment-analysis.jpg";
import imgChatbotAgent from "@/assets/blog/chatbot-vs-agent.jpg";
import imgAiMeeting from "@/assets/blog/ai-meeting-assistant.jpg";
import imgZoomAiCompanion from "@/assets/blog/zoom-ai-companion-new.jpg";
import imgOmnichannel from "@/assets/blog/omnichannel-cx.jpg";
import imgAiSales from "@/assets/blog/ai-sales-analytics.jpg";
import imgCxProd from "@/assets/blog/cx-productivity.jpg";
import imgZoomPlat from "@/assets/blog/zoom-platinum.jpg";
import imgUcProvider from "@/assets/blog/uc-provider.jpg";
import imgAiCompanion from "@/assets/blog/ai-companion-zoom.jpg";
import imgUcContract from "@/assets/blog/uc-contract.jpg";
import imgCxHubs from "@/assets/blog/cx-hubs.jpg";
import imgTeams from "@/assets/blog/teams-telephony.jpg";
import imgRecruitment from "@/assets/blog/recruitment-cloud.jpg";
import imgRcGold from "@/assets/blog/ringcentral-gold.jpg";
import imgZoomPhone from "@/assets/blog/zoom-phone.jpg";
import imgCloudCc from "@/assets/blog/cloud-cc.jpg";
import imgAvayaLunch from "@/assets/blog/avaya-lunch.jpg";
import imgMitelRc from "@/assets/blog/mitel-rc.jpg";
import imgConference from "@/assets/blog/conference.jpg";
import imgMsRc from "@/assets/logos/ringcentral.png";
import imgCloudJourney from "@/assets/blog/cloud-journey.jpg";
import imgRaceDay from "@/assets/blog/race-day.jpg";
import imgMichelin from "@/assets/blog/michelin.jpg";
import imgWpChatbot from "@/assets/blog/wp-chatbot-checklist.jpg";
import imgWpConnectivity from "@/assets/blog/wp-connectivity-blueprint.jpg";
import imgWpOmnichannel from "@/assets/blog/wp-omnichannel-service.jpg";
import imgWpPbxCloud from "@/assets/blog/wp-pbx-to-cloud.jpg";
import imgWpCxRoadmap from "@/assets/blog/wp-cx-roadmap.jpg";
import imgWpAboutFortay from "@/assets/blog/wp-about-fortay.jpg";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
  image: string;
  isLogo?: boolean;
};

const featured: Post = {
  title: "Unified Communications in 2026: Less Admin, More Automation, Better Outcomes",
  excerpt:
    "UCaaS has quietly crossed a line. In 2026, unified communications isn't just about calls and chat — it's about less admin, more automation, and measurably better outcomes.",
  date: "21st Jan 2026",
  tags: ["Unified Communications"],
  url: "https://www.fortayconnect.com/content/unified-communications-in-2026",
  image: imgUc2026,
};

const posts: Post[] = [
  {
    title: "AI Chatbot Assessment Checklist",
    excerpt: "Not sure if your business is ready for an AI chatbot? Use this checklist to assess your readiness, avoid common pitfalls, and build a business case for conversational AI.",
    date: "8th Feb 2026",
    tags: ["White Paper", "AI", "Chatbot"],
    url: "https://www.fortayconnect.com/ai-chatbot-checklist",
    image: imgWpChatbot,
  },
  {
    title: "Your Connectivity Blueprint",
    excerpt: "A practical guide to designing your business connectivity strategy — from network infrastructure to cloud-first communications architecture.",
    date: "21st Nov 2024",
    tags: ["White Paper", "Connectivity"],
    url: "https://www.fortayconnect.com/connectivity-blueprint",
    image: imgWpConnectivity,
  },
  {
    title: "Unify Your Customer Service Across Every Channel",
    excerpt: "Every channel, one voice. Discover how to deliver consistent, seamless customer experiences across voice, chat, email, and social — without the operational complexity.",
    date: "3rd Mar 2025",
    tags: ["White Paper", "Omnichannel", "CX"],
    url: "https://www.fortayconnect.com/download-every-channel-one-voice",
    image: imgWpOmnichannel,
  },
  {
    title: "7 Business Benefits of Moving from an On-Premises PBX to Cloud Communications",
    excerpt: "Still running an on-premises PBX? This whitepaper outlines seven compelling business benefits of migrating to a modern cloud communications and collaboration system.",
    date: "7th May 2025",
    tags: ["White Paper", "Cloud", "Unified Communications"],
    url: "https://www.fortayconnect.com/7-business-benefits-ringcentral",
    image: imgWpPbxCloud,
  },
  {
    title: "The CX Leader's Roadmap: Implementing Conversational AI for Exceptional Service",
    excerpt: "A strategic guide for CX leaders navigating the journey from traditional contact centre operations to AI-powered, conversational customer experiences.",
    date: "8th Nov 2025",
    tags: ["White Paper", "CX", "AI"],
    url: "https://www.fortayconnect.com/cx-leader-roadmap-guide",
    image: imgWpCxRoadmap,
  },
  {
    title: "Making Communications Count: Everything You Need To Know About Fortay Connect",
    excerpt: "Who we are, what we do, and why it matters. A comprehensive overview of Fortay Connect's services, partnerships, and approach to transforming business communications.",
    date: "12th Jan 2025",
    tags: ["White Paper", "Fortay Connect"],
    url: "https://www.fortayconnect.com/everything-you-need-to-know-about-fortay-connect",
    image: imgWpAboutFortay,
  },
  {
    title: "AI in Legal: 9 High-Impact Legal AI Use Cases for Modern Firms",
    excerpt: "Legal is one of the fastest-moving industries when it comes to AI adoption and the upside is obvious: less admin, faster turnaround, and better risk control.",
    date: "19th Jan 2026",
    tags: ["AI Sales Analytics", "AI Meeting Assistant", "Legal"],
    url: "https://www.fortayconnect.com/content/ai-in-legal-use-cases",
    image: imgLegalAi,
  },
  {
    title: "Zoom Customer Experience Support Certification: Fortay Connect Leads the UK",
    excerpt: "We've got something big to share. Fortay Connect has achieved the Zoom Customer Experience Support Certification — leading the way in the UK for CX excellence.",
    date: "9th Jan 2026",
    tags: ["News", "Zoom", "CX"],
    url: "https://www.fortayconnect.com/content/zoom-customer-experience-support-certification-fortay-connect-leads-the-uk",
    image: imgZoomCxCert,
  },
  {
    title: "Why Understanding Emotion Is Key: Can AI Make CX More Human?",
    excerpt: "The notion that AI and 'human CX' are mutually exclusive is finally being proven wrong by the most forward-thinking organisations.",
    date: "17th Sep 2025",
    tags: ["CX"],
    url: "https://www.fortayconnect.com/content/can-ai-make-cx-more-human",
    image: imgAiCxEmotion,
  },
  {
    title: "Transform Your Sales Approach: How To Close Sales Deals Faster",
    excerpt: "Closing deals quickly isn't about pushing harder, it's about working smarter. Sales leaders who embrace conversational intelligence and AI-driven revenue insights are pulling ahead.",
    date: "3rd Sep 2025",
    tags: ["Conversational Intelligence"],
    url: "https://www.fortayconnect.com/content/how-to-close-sales-deals-faster",
    image: imgCloseSales,
  },
  {
    title: "7 Innovative Ways Sentiment Analysis Can Be Used To Improve Customer Experience",
    excerpt: "Customer expectations are evolving faster than most businesses can keep up. One technology is quietly reshaping how brands listen, respond, and adapt.",
    date: "27th Aug 2025",
    tags: ["Sentiment Analysis"],
    url: "https://www.fortayconnect.com/content/sentiment-analysis-improve-customer-experience",
    image: imgSentiment,
  },
  {
    title: "Expert Analysis: Chatbot Vs Virtual Agent – What Are The Differences and Which Should You Choose?",
    excerpt: "If you're a technical leader, you've likely seen the hype around 'AI-powered customer engagement tools.' But when it comes to chatbot vs virtual agent, the differences matter.",
    date: "20th Aug 2025",
    tags: ["Chatbot", "Virtual Agent"],
    url: "https://www.fortayconnect.com/content/chatbot-vs-virtual-agent",
    image: imgChatbotAgent,
  },
  {
    title: "The AI Meeting Assistant Landscape: Who's Leading The Charge On Collaboration And Productivity?",
    excerpt: "If you're a sales leader or business decision-maker in the UK, you already know: the right tools for data analytics and AI-driven collaboration can transform how your teams work.",
    date: "13th Aug 2025",
    tags: ["News", "AI Meeting Assistant"],
    url: "https://www.fortayconnect.com/content/the-ai-meeting-assistant-landscape",
    image: imgAiMeeting,
  },
  {
    title: "Unlocking The Power Of Zoom AI Companion: The Productivity Edge You Haven't Tried",
    excerpt: "Real productivity gains come from AI that works inside the tools you already use. Zoom AI Companion is redefining what's possible in everyday collaboration.",
    date: "6th Aug 2025",
    tags: ["Zoom", "AI Companion"],
    url: "https://www.fortayconnect.com/content/zoom-ai-companion-productivity",
    image: imgZoomAiCompanion,
  },
  {
    title: "Omnichannel Self-Assessment: 20 Questions On How To Improve Omnichannel Customer Experience",
    excerpt: "The biggest CX buzzword of the last decade has to be 'omnichannel'. But for most businesses, the reality is still a patchwork of siloed channels and frustrated customers.",
    date: "30th Jul 2025",
    tags: ["News", "Omnichannel"],
    url: "https://www.fortayconnect.com/content/how-to-improve-omnichannel-customer-experience",
    image: imgOmnichannel,
  },
  {
    title: "The Future Of AI Sales Analytics For Decision-Making: Trends To Watch",
    excerpt: "Sales leaders are under relentless pressure: drive revenue, coach teams, and deliver accurate forecasts — often across sprawling, global operations.",
    date: "16th Jul 2025",
    tags: ["News", "AI Sales Analytics"],
    url: "https://www.fortayconnect.com/content/ai-sales-analytics-decision-making",
    image: imgAiSales,
  },
  {
    title: "How to Boost Business Productivity with CX Tools",
    excerpt: "In today's fast-paced, customer-centric world, businesses are constantly seeking ways to enhance productivity while delivering exceptional customer experiences.",
    date: "15th Apr 2025",
    tags: ["News", "Partners"],
    url: "https://www.fortayconnect.com/content/how-to-boost-business-productivity-with-cx-tools",
    image: imgCxProd,
  },
  {
    title: "Fortay Connect: Leading The Zoom Revolution In The UK",
    excerpt: "We're thrilled to announce that Fortay Connect has achieved a groundbreaking milestone: we are a Zoom Platinum Partner — only the second partner in the UK to reach this level.",
    date: "17th Dec 2024",
    tags: ["News", "Zoom"],
    url: "https://www.fortayconnect.com/content/fortay-connect-zoom-platinum-partner",
    image: imgZoomPlat,
  },
  {
    title: "Key Factors To Consider When Choosing A UC Provider",
    excerpt: "Choosing the right Unified Communication (UC) provider can significantly impact your business operations. With the right provider, you can enhance collaboration and streamline workflows.",
    date: "29th Nov 2024",
    tags: ["Unified Communications"],
    url: "https://www.fortayconnect.com/content/key-factors-to-consider-when-choosing-a-uc-provider",
    image: imgUcProvider,
  },
  {
    title: "What Does AI Companion Do On Zoom?",
    excerpt: "Unlocking new productivity features. Welcome to the future of virtual collaboration! If you've ever found yourself lost in the whirlwind of a Zoom meeting, AI Companion changes everything.",
    date: "23rd Oct 2024",
    tags: ["News", "Zoom"],
    url: "https://www.fortayconnect.com/content/what-does-ai-companion-do-on-zoom",
    image: imgAiCompanion,
  },
  {
    title: "End Of Contract Coming Soon, Which UC Provider Should I Use?",
    excerpt: "As your Unified Communication (UC) contract nears its expiration, you might feel overwhelmed by the many providers in the market. Choosing the right UC solution is critical.",
    date: "9th Oct 2024",
    tags: ["Unified Communications", "Partners"],
    url: "https://www.fortayconnect.com/content/end-of-contract-coming-soon-which-uc-provider-should-i-use",
    image: imgUcContract,
  },
  {
    title: "The Rise Of Intelligent Customer Experience Hubs",
    excerpt: "90% of consumers now expect consistent interactions across all channels, meaning it's never been more important to implement omnichannel solutions in your customer hub.",
    date: "15th Sep 2024",
    tags: ["Resources", "Contact Centre"],
    url: "https://www.fortayconnect.com/content/the-rise-of-intelligent-customer-experience-hubs",
    image: imgCxHubs,
  },
  {
    title: "Navigating Telephony in Microsoft Teams: A Complex Journey",
    excerpt: "Microsoft Teams telephony presents a range of options — but choosing the right path requires careful consideration of your business needs and existing infrastructure.",
    date: "10th Oct 2023",
    tags: ["Unified Communications", "Microsoft Teams"],
    url: "https://www.fortayconnect.com/content/navigating-telephony-in-microsoft-teams",
    image: imgTeams,
  },
  {
    title: "Your World Recruitment Drives Global Improvements with Avaya Cloud Office",
    excerpt: "Your World Recruitment, a global staffing organisation providing careers to experienced healthcare professionals worldwide, is set to better address global healthcare staffing challenges.",
    date: "7th Jun 2023",
    tags: ["Case Studies", "Avaya"],
    url: "https://www.fortayconnect.com/content/your-world-recruitment-avaya-cloud-office",
    image: imgRecruitment,
  },
  {
    title: "Fortay Connect awarded Gold Partner Status with RingCentral",
    excerpt: "Fortay Connect is pleased to announce that they are recognised as a RingCentral Reach Gold Partner — representing the Top 1% of RingCentral's partner ecosystem.",
    date: "3rd Mar 2023",
    tags: ["News", "RingCentral"],
    url: "https://www.fortayconnect.com/content/fortay-connect-ringcentral-gold-partner",
    image: imgRcGold,
  },
  {
    title: "Fortay Connect is first UK partner awarded the Zoom Phone Competency",
    excerpt: "Fortay Connect is pleased to announce that they are the first UK Zoom partner to receive certification for the Zoom Phone Competency.",
    date: "31st Jan 2023",
    tags: ["News", "Zoom"],
    url: "https://www.fortayconnect.com/content/fortay-connect-zoom-phone-competency",
    image: imgZoomPhone,
  },
  {
    title: "Cloud Contact Centre: The Case For Cloud Contact Centers",
    excerpt: "Exploring the compelling business case for migrating your contact centre to the cloud — from cost savings to flexibility and scalability.",
    date: "21st Dec 2022",
    tags: ["Resources", "Contact Centre"],
    url: "https://www.fortayconnect.com/content/cloud-contact-centre",
    image: imgCloudCc,
  },
  {
    title: "Virtual Lunch & Learn: Avaya IP Office to Avaya Cloud Office",
    excerpt: "Maximise your IP Office investment with Avaya Cloud Office. RingCentral and Avaya introduce Avaya Cloud Office, a UCaaS platform with Avaya phones.",
    date: "26th Oct 2022",
    tags: ["Events", "Avaya"],
    url: "https://www.fortayconnect.com/content/virtual-lunch-learn-avaya-ip-office-to-avaya-cloud-office",
    image: imgAvayaLunch,
  },
  {
    title: "Mitel and RingCentral — Virtual Lunch and Learn",
    excerpt: "Join us for an exclusive virtual event exploring the Mitel and RingCentral partnership and what it means for your unified communications strategy.",
    date: "5th Sep 2022",
    tags: ["Events", "RingCentral"],
    url: "https://www.fortayconnect.com/content/mitel-and-ringcentral-virtual-lunch-and-learn",
    image: imgMitelRc,
  },
  {
    title: "Michelin Masterclass with RingCentral",
    excerpt: "An exclusive masterclass event bringing together RingCentral expertise and premium hospitality for an unforgettable learning experience.",
    date: "20th Jul 2022",
    tags: ["Events", "RingCentral"],
    url: "https://www.fortayconnect.com/content/michelin-masterclass-with-ringcentral",
    image: imgMichelin,
  },
  {
    title: "DTX & UCX Manchester",
    excerpt: "Fortay Connect at DTX & UCX Manchester — exploring the latest in unified communications, contact centre technology, and digital transformation.",
    date: "13th Apr 2022",
    tags: ["Events", "Unified Communications"],
    url: "https://www.fortayconnect.com/content/dtx-ucx-manchester",
    image: imgConference,
  },
  {
    title: "Elevate Your Microsoft Investment with RingCentral",
    excerpt: "Discover how RingCentral integrates with and enhances your existing Microsoft investment for a seamless unified communications experience.",
    date: "31st Jan 2022",
    tags: ["Events", "RingCentral"],
    url: "https://www.fortayconnect.com/content/elevate-your-microsoft-investment-with-ringcentral",
    image: imgMsRc,
    isLogo: true,
  },
  {
    title: "First Class Trip to Cloud",
    excerpt: "Your guide to a smooth cloud migration journey — from legacy telephony to modern unified communications in the cloud.",
    date: "14th Jan 2022",
    tags: ["Events", "Unified Communications"],
    url: "https://www.fortayconnect.com/content/first-class-trip-to-cloud",
    image: imgCloudJourney,
  },
  {
    title: "Jonathan Palmer Race Day",
    excerpt: "An exclusive networking event at the Jonathan Palmer race circuit — bringing together partners, clients, and the Fortay Connect team.",
    date: "7th Oct 2021",
    tags: ["Events", "RingCentral"],
    url: "https://www.fortayconnect.com/content/jonathan-palmer-race-day",
    image: imgRaceDay,
  },
];

const categories = [
  { label: "All", value: "all" },
  { label: "Blogs", value: "blogs" },
  { label: "White Papers", value: "whitepapers" },
  { label: "News", value: "news" },
  { label: "Opinions", value: "opinions" },
];

// Map categories to matching tags
const categoryTagMap: Record<string, string[]> = {
  blogs: ["Unified Communications", "CX", "Conversational Intelligence", "Sentiment Analysis", "Chatbot", "Virtual Agent", "AI Companion", "AI Meeting Assistant", "AI Sales Analytics", "Omnichannel", "Contact Centre", "Resources", "Cloud", "Connectivity", "Partners", "Microsoft Teams"],
  whitepapers: ["White Paper"],
  news: ["News", "Events"],
  opinions: ["CX", "Conversational Intelligence", "Sentiment Analysis"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TagBadge = ({ tag }: { tag: string }) => (
  <span className="rounded-md bg-primary px-2.5 py-0.5 text-xs font-bold uppercase text-primary-foreground">
    {tag}
  </span>
);

const INITIAL_COUNT = 11;

const Insights = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [category, setCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Sync category from URL query param (?category=Blogs or ?category=White+Papers)
  useEffect(() => {
    const qCat = searchParams.get("category");
    if (qCat) {
      const normalised = qCat.toLowerCase().replace(/\s+/g, "");
      if (normalised === "blogs") setCategory("blogs");
      else if (normalised === "whitepapers") setCategory("whitepapers");
      else setCategory("all");
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    let filtered = posts;

    // Category filter
    if (category !== "all") {
      const matchTags = categoryTagMap[category] || [];
      filtered = filtered.filter((p) =>
        p.tags.some((t) => matchTags.some((mt) => t.toLowerCase().includes(mt.toLowerCase())))
      );
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [search, category]);

  const visiblePosts = showAll || search.trim() || category !== "all" ? filteredPosts : filteredPosts.slice(0, INITIAL_COUNT);
  const hasMore = !showAll && !search.trim() && category === "all" && filteredPosts.length > INITIAL_COUNT;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubscribed(true);
    toast.success("You're subscribed! We'll keep you in the loop.");
    setEmail("");
  };

  return (
    <>
      <Navbar />
      <main className="py-24">
        <div className="container">
          <motion.div
            className="mx-auto mb-16 max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">Insights</p>
            <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">Latest News &amp; Resources</h1>
            <p className="mt-4 text-lg text-muted-foreground">Impressions, topics &amp; trends from the world of CX and communications.</p>
          </motion.div>

          {/* Subscribe CTA — top of page */}
          <motion.div
            className="mx-auto mb-16 max-w-3xl overflow-hidden rounded-2xl bg-foreground"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
          >
            <div className="flex flex-col items-center gap-6 p-8 text-center md:flex-row md:p-10 md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/20">
                <Mail className="h-7 w-7 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-bold text-background">Stay ahead of the curve</h3>
                <p className="mt-1 text-sm text-background/70">Get CX insights, white papers &amp; AI strategy guides straight to your inbox.</p>
              </div>
              {subscribed ? (
                <p className="text-sm font-semibold text-primary">✓ You're subscribed!</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-3 md:w-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="min-w-0 flex-1 rounded-xl border border-background/20 bg-background/10 px-4 py-3 text-sm text-background placeholder:text-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    required
                    maxLength={255}
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Search & Filter bar */}
          <div className="mx-auto mb-12 max-w-3xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowAll(false);
                  }}
                  className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="relative">
                <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setShowAll(false);
                  }}
                  className="h-full w-full appearance-none rounded-xl border border-border bg-card py-3 pl-11 pr-10 text-sm font-medium text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all sm:w-48 cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
            </div>
          </div>

          {/* Featured post (hidden when searching) */}
          {!search.trim() && (
            <motion.a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-12 block cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[260px] overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    {featured.tags.slice(0, 2).map((t) => <TagBadge key={t} tag={t} />)}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-8 md:p-10">
                  <p className="mb-2 text-sm text-muted-foreground">{featured.date}</p>
                  <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{featured.title}</h2>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:underline">
                      Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          )}

          {/* Post grid */}
          {visiblePosts.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">No articles found matching "{search}"</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePosts.map((post, i) => (
                <motion.a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.04 }}
                >
                  <div className={`relative h-[220px] overflow-hidden ${post.isLogo ? 'bg-muted flex items-center justify-center p-6' : ''}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className={post.isLogo
                        ? "h-auto max-h-[80%] w-auto max-w-[80%] object-contain transition-transform duration-500 group-hover:scale-105"
                        : "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      }
                      loading="lazy"
                    />
                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 2).map((t) => <TagBadge key={t} tag={t} />)}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-2 text-sm text-muted-foreground">{post.date}</p>
                    <h3 className="font-display text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          )}

          {/* Show more button */}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:shadow-md"
              >
                Show all articles
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

          {/* Subscribe section removed — moved to top */}
      </main>
      <Footer />
    </>
  );
};

export default Insights;
