import type { Metadata } from "next";
import RolePersona from "@/pages/RolePersona";

export const metadata: Metadata = {
  title: "For the Head of CX | AI agents, contact centres and pilots that scale | Fortay Connect",
  description:
    "For UK Heads of CX who have run an AI pilot that did not scale. The reasons it did not, the platforms that work, and the named outcomes when it does.",
};

export default function HeadOfCXPage() {
  return (
    <RolePersona
      roleLabel="Head of CX"
      roleSlug="head-of-cx"
      pain="AI pilots that never scale. Suppliers promising. Customers still waiting on hold."
      subhead="The pattern is familiar. Pilot in one channel, decent metrics, blocked at the integration. Six months in, the executive sponsor moves on, the pilot dies. We have rebuilt three of these in the last year. Here is what changes between pilot and production."
      problemStats={[
        { stat: "70%", description: "of AI pilots in mid market UK businesses fail to scale beyond the original channel. The cause is almost never the AI. It is the integration and the change management." },
        { stat: "300", description: "average chat volume per month at pilot stage. We have scaled the same architecture to 4,000 chats and 8,000 calls without re platforming." },
        { stat: "92%", description: "agent adoption rate at day 90 across our last five contact centre rollouts. Most platforms do not measure this. We do." },
      ]}
      outcomes={[
        {
          customer: "A UK travel insurance company",
          sector: "Insurance",
          headline: "Genesys pilot replaced with Boost AI. Scaled from 300 to 4,000 monthly chats.",
          detail:
            "The original pilot was running on Genesys with one telephony engineer also handling AI alongside her day job. The architecture was strangling adoption. We swapped to Boost AI, ran the change management properly, and the channel scaled without adding headcount.",
        },
        {
          customer: "A 40,000 monthly interaction automotive group",
          sector: "Automotive digital",
          headline: "DealerWeb integration delivered against a January deadline.",
          detail:
            "Chat system migration from LTK with seamless agent handoff and enhanced tracking. Hard deadline that nobody believed could be hit. We hit it because we ran the integration design, the rollout and the customer success in parallel, not in sequence.",
        },
        {
          customer: "A 30 agent contact centre, food and outdoor retail",
          sector: "Specialist retail",
          headline: "Phased automation 20% to 80% across two peak seasons without service collapse.",
          detail:
            "Head of CX had been told 80% automation in year one. We told her honestly that was wrong. Phased it across three quarters with measured handoff to humans. CSAT held above 4.6 across both peak seasons. Headcount flat, volume tripled.",
        },
      ]}
      monthTwo={[
        "AI agent scoring 4.6 plus on customer satisfaction within 60 days, or we escalate before you do.",
        "Live quality monitoring on AI conversations, daily not weekly. Tone breaches escalate to a human inside 30 seconds.",
        "Agent assist running for human conversations. Suggested responses, sentiment, deal context, all visible to the rep.",
        "WhatsApp, voice, web chat and email threaded into the same conversation. The customer thinks they are talking to one company.",
        "Quarterly CX review with named CSM, your director of operations and Mark. Where the AI is missing, what to retrain on, what to phase next.",
        "Documented case studies from your own deployment that you can put in front of the CFO when the next budget cycle starts.",
      ]}
      kpis={[
        { metric: "↑ 4.6", label: "CSAT score, above sector average" },
        { metric: "↑ 92%", label: "Agent adoption at day 90" },
        { metric: "↓ 30s", label: "AI to human escalation time" },
        { metric: "↑ 4×", label: "Channel scale at constant cost" },
        { metric: "↓ 35%", label: "Average handle time" },
        { metric: "98%", label: "Client retention, six year average" },
      ]}
      faqs={[
        {
          q: "Why do AI pilots fail in CX, and how do you stop that?",
          a: "Three reasons we see most often. First, the platform is wrong (Genesys complexity is the most common). Second, the change management is missing (the agents reject the AI because nobody trained them on the new workflow). Third, the integration is brittle and silently fails. We design for all three before we deploy.",
        },
        {
          q: "Can I see an AI agent live in my environment before I sign?",
          a: "Yes. We will run a 30 day proof of concept against your real call volumes and your real data. No invoice. If it does not perform, you have lost two weeks. We did this for G.Network in a 5 day sprint and recommended a platform within the engagement.",
        },
        {
          q: "What about brand risk on AI virtual agents?",
          a: "Every conversation is logged, every tone breach is flagged, every escalation goes to a human inside 30 seconds. The escalation rules are designed with you before go live, tuned weekly until you trust them, then tuned quarterly after that.",
        },
        {
          q: "Will my agents actually use agent assist?",
          a: "They will if it shortens their day. We deploy it inside the workflow they already use, train against your real call recordings, and tune the prompts in week two and week six. If adoption is below 70% at day 60, that is on us, not on them.",
        },
        {
          q: "How do you handle WhatsApp, given the channel is so messy?",
          a: "WhatsApp Business API integrated through the contact centre platform, threaded into the same conversation as voice and chat. Add on cost £25 to £45 per user per month. Worth it for any sales team. Worth it for service teams above 30 agents. Below that, the maths is harder.",
        },
      ]}
      finalCta="Ready to make the AI pilot stick?"
    />
  );
}
