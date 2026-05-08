import type { Metadata } from "next";
import RolePersona from "@/pages/RolePersona";

export const metadata: Metadata = {
  title: "For the CRO | CX, AI agents and revenue intelligence | Fortay Connect",
  description:
    "For UK CROs whose CX spend is climbing while conversion is flat. Three named outcomes, the AI agent maths and the revenue intelligence stack that closes the gap between technology and revenue.",
};

export default function CROPage() {
  return (
    <RolePersona
      roleLabel="CRO"
      roleSlug="cro"
      pain="CX spend climbing. Conversion plateauing. No clear line from technology to revenue."
      subhead="The board wants AI to drive growth. Your CX investment is tracked as a cost line, not a revenue line. Fixing that is mostly a measurement problem, then a sales intelligence problem, then an automation problem. In that order. Here is what we have done about it for other CROs."
      problemStats={[
        { stat: "391%", description: "ROI on conversational AI in a 5,000 calls a month services business. Reduced agent handle time, reduced abandonment rate, more revenue per minute of voice." },
        { stat: "£25 to £45", description: "per user per month for sales intelligence. Sentiment scoring, deal probability, WhatsApp threading. Pays back inside 60 days at any sane sales team size." },
        { stat: "30%", description: "of inbound calls in the average mid market business get abandoned in queue. Each one is revenue you decided not to take." },
      ]}
      outcomes={[
        {
          customer: "A £150m UK insurer",
          sector: "Travel insurance",
          headline: "Boost AI deployed against 300 monthly chats, scaled to 4,000 over six months.",
          detail:
            "They were stuck on Genesys with one telephony engineer trying to manage AI alongside her day job. We deployed Boost AI as a simpler alternative, ran the change management, and proved out the channel before scaling. The cost line did not move. The revenue line did.",
        },
        {
          customer: "A 100 fee earner law firm",
          sector: "Legal services",
          headline: "Replaced Moneypenny at £7,500 a month with AI virtual agent at £1,500.",
          detail:
            "Faster intake, consistent qualification, every call routed to the right partner inside 60 seconds. The CRO equivalent here was the Practice Director, who saw new client conversion go up 18% in the first quarter.",
        },
        {
          customer: "A 5,000 employee retail group",
          sector: "Retail",
          headline: "Phased automation from 20% to 80% over six months without service collapse.",
          detail:
            "The CFO had been told 80% automation was a year one target. We told them honestly that was wrong. Phased it across three quarters with measured handoff to humans. They hit the 80% number, in quarter four, with CSAT up not down.",
        },
      ]}
      monthTwo={[
        "AI agents in production handling tier one queries, with quality monitoring scored daily, not weekly.",
        "Sales intelligence wired into your CRM. Sentiment, deal probability, recommended next action, all visible in the rep's normal workflow.",
        "Revenue dashboard that ties technology spend to closed pipeline. CX as a revenue line on the board pack, not a cost line.",
        "WhatsApp, voice and chat threaded into the same conversation. The customer thinks they are talking to one company because they are.",
        "Quarterly sales intelligence review with named CSM. Where deals are stuck, what AI is missing, what to retrain on.",
        "Documented case studies you can put in front of your CFO when budget season comes around.",
      ]}
      kpis={[
        { metric: "↑ 18%", label: "New client conversion" },
        { metric: "↑ 391%", label: "Conversational AI ROI" },
        { metric: "↓ 30%", label: "Call abandonment" },
        { metric: "↑ 35%", label: "Faster client response" },
        { metric: "↑ 3×", label: "Cross sell visibility" },
        { metric: "60 days", label: "Sales intel payback" },
      ]}
      faqs={[
        {
          q: "How do you measure revenue impact, not just cost reduction?",
          a: "We build the measurement framework in week one with your RevOps team. Pipeline created from AI handled conversations, conversion rate by source, deal velocity by channel. If your CRM does not yet capture this, we instrument it before we deploy any AI.",
        },
        {
          q: "Will my reps actually use the sales intelligence layer?",
          a: "Reps use it when it lives inside their normal workflow and shortens their day. We deploy it inside the CRM, train against your real call recordings, and tune the prompts in week two and week six. Adoption at 90 days has averaged 78% across the last five deployments.",
        },
        {
          q: "What about brand risk on AI virtual agents?",
          a: "Every conversation is logged, every tone breach is flagged, every escalation goes to a human inside 30 seconds. We design the escalation rules with your CX leader before go live, and we tune them weekly until you trust them.",
        },
        {
          q: "Can I see the 391% ROI maths?",
          a: "Yes, with the assumptions on one page. Agent fully loaded cost, deflection rate, call mix, payback period. We will not put a number on a slide we cannot defend in a board meeting.",
        },
        {
          q: "What is the difference between you and the platform's own AI team?",
          a: "Platform AI teams sell AI. We sell the outcome. We will tell you when AI is the wrong answer, which most platform sales teams will not. Two of our last ten engagements ended with us recommending against the AI deployment the prospect originally asked for.",
        },
      ]}
      finalCta="Ready to put CX on the revenue line?"
    />
  );
}
