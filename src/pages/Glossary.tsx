"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const glossaryTerms = [
  { term: "AI (Artificial Intelligence)", definition: "Technology that enables machines to simulate human intelligence, including learning, reasoning and problem-solving. In CX, AI powers chatbots, virtual agents and predictive analytics." },
  { term: "AHT (Average Handling Time)", definition: "The average duration of a customer interaction, including hold time and after-call work. A key contact centre performance metric." },
  { term: "API (Application Programming Interface)", definition: "A set of protocols that allows different software systems to communicate and share data, enabling integrations between platforms." },
  { term: "CCaaS (Contact Centre as a Service)", definition: "A cloud-based solution that provides contact centre functionality — including voice, chat, email and social channels — without on-premise hardware." },
  { term: "Conversational AI", definition: "AI-powered technology that enables natural, human-like conversations through voice or text. Includes chatbots, virtual agents and voice assistants." },
  { term: "CRM (Customer Relationship Management)", definition: "Software used to manage customer interactions, track sales pipelines and store customer data. Common examples include Salesforce and HubSpot." },
  { term: "CSAT (Customer Satisfaction Score)", definition: "A metric that measures customer satisfaction with a specific interaction or experience, typically gathered through post-interaction surveys." },
  { term: "CX (Customer Experience)", definition: "The total experience a customer has with a brand across every interaction and touchpoint, from first enquiry through to ongoing support." },
  { term: "ERP (Enterprise Resource Planning)", definition: "Integrated software systems that manage core business processes including finance, supply chain, manufacturing and human resources." },
  { term: "FCA (Financial Conduct Authority)", definition: "The UK regulatory body overseeing financial services firms, ensuring fair treatment of customers and market integrity." },
  { term: "FCR (First Contact Resolution)", definition: "The percentage of customer enquiries resolved during the first interaction without the need for follow-up. A critical measure of service quality." },
  { term: "GDPR (General Data Protection Regulation)", definition: "EU regulation governing the collection, storage and processing of personal data. Requires businesses to protect customer privacy and provide data transparency." },
  { term: "IVR (Interactive Voice Response)", definition: "An automated telephony system that interacts with callers using voice and keypad inputs to route calls or provide self-service options." },
  { term: "NLP (Natural Language Processing)", definition: "A branch of AI that enables machines to understand, interpret and respond to human language in a meaningful way. Powers conversational AI and sentiment analysis." },
  { term: "NPS (Net Promoter Score)", definition: "A loyalty metric that measures how likely customers are to recommend a company to others, scored on a scale of -100 to +100." },
  { term: "Omnichannel", definition: "A customer engagement strategy that provides a seamless, consistent experience across all communication channels — voice, email, chat, social media and more." },
  { term: "PBX (Private Branch Exchange)", definition: "A private telephone network used within an organisation. Legacy PBX systems are often on-premise; modern alternatives are cloud-based." },
  { term: "QA (Quality Assurance)", definition: "The process of monitoring and evaluating customer interactions to ensure they meet defined quality and compliance standards." },
  { term: "RPA (Robotic Process Automation)", definition: "Software that automates repetitive, rule-based tasks such as data entry, form processing and system updates across applications." },
  { term: "Sentiment Analysis", definition: "AI-driven analysis of customer communications to detect emotional tone and attitude, enabling proactive intervention and quality monitoring." },
  { term: "SIP Trunking", definition: "A method of delivering voice and multimedia sessions over the internet, replacing traditional phone lines with a more flexible and cost-effective solution." },
  { term: "SLA (Service Level Agreement)", definition: "A commitment between a service provider and a client that defines expected service standards, response times and performance metrics." },
  { term: "SRA (Solicitors Regulation Authority)", definition: "The regulatory body for solicitors in England and Wales, setting standards for professional conduct, competence and client protection." },
  { term: "UCaaS (Unified Communications as a Service)", definition: "A cloud-delivered model that combines voice, video, messaging and collaboration tools into a single platform for internal and external communications." },
  { term: "WFM (Workforce Management)", definition: "Tools and processes used to forecast demand, schedule staff and optimise resource allocation in contact centre operations." },
];

const sortedTerms = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

const allLetters = Array.from(new Set(sortedTerms.map((t) => t.term[0].toUpperCase()))).sort();

const INITIAL_COUNT = 25;

const Glossary = () => {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    let items = sortedTerms;
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      );
    }
    if (activeLetter) {
      items = items.filter((t) => t.term[0].toUpperCase() === activeLetter);
    }
    return items;
  }, [search, activeLetter]);

  // Show all when filtering by letter or search, otherwise cap at 25
  const isFiltering = !!search.trim() || !!activeLetter;
  const visibleTerms = isFiltering || showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = !isFiltering && !showAll && filtered.length > INITIAL_COUNT;

  const grouped = visibleTerms.reduce<Record<string, typeof glossaryTerms>>((acc, item) => {
    const letter = item.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="bg-foreground py-20 text-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl text-center"
            >
              <p className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-primary">
                Glossary
              </p>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                CX &amp; AI Glossary
              </h1>
              <p className="mt-4 text-lg text-background/60">
                The most common vocabulary, metrics and phrases used across customer experience,
                contact centre and AI technology — defined clearly.
              </p>

              {/* Search bar */}
              <div className="relative mx-auto mt-8 max-w-lg">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-background/40" />
                <Input
                  type="text"
                  placeholder="Search terms…"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveLetter(null);
                  }}
                  className="h-12 rounded-full border-background/20 bg-background/10 pl-12 text-background placeholder:text-background/40 focus-visible:ring-primary"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Letter nav + terms */}
        <section className="py-12">
          <div className="container max-w-4xl">
            {/* Alphabet bar */}
            <div className="mb-10 flex flex-wrap justify-center gap-1">
              <button
                onClick={() => setActiveLetter(null)}
                className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                  !activeLetter
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                All
              </button>
              {allLetters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    setActiveLetter(letter === activeLetter ? null : letter);
                    setSearch("");
                  }}
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold transition-colors ${
                    activeLetter === letter
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>

            {/* Results */}
            {Object.keys(grouped).length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-lg text-muted-foreground">
                  No terms found for "<span className="font-medium text-foreground">{search || activeLetter}</span>"
                </p>
              </div>
            ) : (
              Object.entries(grouped).map(([letter, terms]) => (
                <div key={letter} className="mb-10" id={`letter-${letter}`}>
                  <h2 className="mb-4 border-b border-border pb-2 font-display text-2xl font-bold text-primary">
                    {letter}
                  </h2>
                  <div className="space-y-3">
                    {terms.map((item) => (
                      <div
                        key={item.term}
                        className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
                      >
                        <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.term}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.definition}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}

            {/* Show more */}
            {hasMore && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary hover:shadow-md"
                >
                  Show all {filtered.length} terms
                </button>
              </div>
            )}

            {/* Count */}
            <p className="mt-8 text-center text-sm text-muted-foreground">
              Showing {visibleTerms.length} of {sortedTerms.length} terms
              {activeLetter ? ` (filtered by "${activeLetter}")` : ""}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Glossary;
