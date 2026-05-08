import type { Metadata } from "next";
import RolePersona from "@/pages/RolePersona";

export const metadata: Metadata = {
  title: "For the Transformation Director | Quarterly outcomes, board ready | Fortay Connect",
  description:
    "For UK Transformation Directors with a board mandate and a short delivery window. Quarterly KPIs, governance frameworks, and a roadmap that survives a CFO challenge.",
};

export default function TransformationDirectorPage() {
  return (
    <RolePersona
      roleLabel="Transformation Director"
      roleSlug="transformation-director"
      pain="Board expects outcomes in quarters. Budget is real. Delivery window is short."
      subhead="The board has approved an AI mandate. The CFO is going to ask for the maths in six months. Your job is to come back with a number, not a slide. We have built that number for fifteen Transformation Directors over the last three years. Here is the framework."
      problemStats={[
        { stat: "11 months", description: "average comms platform evaluation cycle in mid market UK businesses we have audited. Six months of that is internal politics, not procurement." },
        { stat: "£7,500 to £75,000", description: "monthly platform spend range we typically uncover at audit. Cost transparency alone often funds the transformation programme." },
        { stat: "0 of 50", description: "audits we have run had a single board ready dashboard combining cost, customer outcome and AI performance. We build that in week one." },
      ]}
      outcomes={[
        {
          customer: "A 900 agent UK financial services firm",
          sector: "Wealth management",
          headline: "Genesys go live by end May, board proposal by June. Both hit.",
          detail:
            "Helen, the Transformation Director, brought us in as the strategic advisor. We built the board proposal materials, ran the technical evaluation alongside her team, and held the platform decision date. May 30 go live, June board approval, July first measurable outcomes.",
        },
        {
          customer: "A £25m construction firm",
          sector: "Construction services",
          headline: "Failed Zoom rollout rebuilt in 90 days against an adoption target.",
          detail:
            "They had bought Zoom phone six months earlier and rejected it. Adoption was at 18%. The Transformation Director needed a number for the next board. We rebuilt the rollout with proper change management, training and configuration. Adoption hit 92% inside 90 days. Number found.",
        },
        {
          customer: "A 200 fee earner UK law firm",
          sector: "Legal services",
          headline: "Replaced Moneypenny at £7,500 a month with AI virtual agent at £1,500.",
          detail:
            "Innovation manager Alice was the internal champion, the Practice Director was the buyer, the Managing Partner approved. We sequenced the conversation across all three in six weeks, then ran the deployment in another six. Conversion up 18% in the first quarter.",
        },
      ]}
      monthTwo={[
        "Board ready one page summary every 90 days. Same metrics, same format, traffic light against agreed targets.",
        "Quarterly governance meeting with Mark Taylor, your CIO, your CFO and your Head of CX. We chair it. We bring the data.",
        "Rolling 12 month roadmap that sits on one page. Updated quarterly. Public to every executive sponsor.",
        "Budget burn tracked weekly against forecast. Variance over 5% triggers an immediate conversation, not a quarterly surprise.",
        "Risk register with named owner and named mitigation per risk. Reviewed monthly with you, not buried in a project tracker.",
        "Public success criteria for the next quarter. If we miss them, you have a written explanation by week one of the next quarter.",
      ]}
      kpis={[
        { metric: "↑ 92%", label: "Adoption at day 90" },
        { metric: "↓ 40%", label: "Cost per contact" },
        { metric: "1 page", label: "Quarterly board summary" },
        { metric: "↓ 60%", label: "Supplier count" },
        { metric: "98%", label: "Client retention, six years" },
        { metric: "0 outages", label: "Across last 30 consolidations" },
      ]}
      faqs={[
        {
          q: "How do you stop transformation programmes from drifting?",
          a: "Two mechanisms. Monthly variance review on budget and timeline, with a 5% trigger. And a documented success criteria for every quarter, signed at the start of the quarter, reviewed at the end. We have run 30 transformations and 28 of them hit the agreed quarter one milestone. The two that did not, we caught in week three not week eleven.",
        },
        {
          q: "What does board ready actually look like?",
          a: "One page. Three numbers (cost, customer, capability). Traffic light per number against the agreed target. Two paragraphs of context. Five risks with named owner. We have an example template we can share before the first meeting.",
        },
        {
          q: "How do you deal with internal politics?",
          a: "Honestly. We name the politics in week one. We sit with each executive sponsor inside the first month. If a sponsor is going to block the work, we will tell you in writing before you sign. We do not start projects that will fail politically. Two of our last ten engagements have been declined for this reason.",
        },
        {
          q: "What if my CFO challenges the ROI maths?",
          a: "We design the maths to survive that challenge. Agent fully loaded cost, deflection rate, call mix, payback period, all on one page with assumptions named. We will sit in the CFO challenge meeting with you. Most of the time we do not need to.",
        },
        {
          q: "Can you run alongside our PMO, or do you need to lead?",
          a: "We work both ways. About half our engagements have us leading the programme. The other half have us as the technical and architectural authority alongside an internal PMO. The deciding factor is usually the size of your transformation team, not the size of the programme.",
        },
      ]}
      finalCta="Ready to give your board the number it asked for?"
    />
  );
}
