import type { Metadata } from "next";
import RolePersona from "@/pages/RolePersona";

export const metadata: Metadata = {
  title: "For the CTO | Architecture, integration and consolidation | Fortay Connect",
  description:
    "For UK CTOs running multi platform comms estates: three suppliers, three roadmaps, three contracts. Independent architecture, integration depth and consolidation without downtime.",
};

export default function CTOPage() {
  return (
    <RolePersona
      roleLabel="CTO"
      roleSlug="cto"
      pain="Three suppliers. Three roadmaps. Three contracts. Consolidation without downtime."
      subhead="You know the architecture is wrong. You also know the path to fix it cuts across teams who do not report to you. We have run that programme thirty times. Here is what good consolidation looks like, what it does not look like, and how to keep the lights on while you do it."
      problemStats={[
        { stat: "62%", description: "of mid market comms estates we audit have at least one platform end of life inside 18 months. Most CTOs have it on the risk register but do not yet have a plan." },
        { stat: "8", description: "average number of integrations between contact centre, telephony and CRM. Most fail silently. Nobody owns the contract for any of them." },
        { stat: "0 outages", description: "across our last 30 platform consolidations. Same number on go live as week 26." },
      ]}
      outcomes={[
        {
          customer: "A 1.2 million bookings a year inspection group",
          sector: "Vehicle inspection services",
          headline: "Avaya end of life, security cert failed, replaced in 4 months.",
          detail:
            "The CTO had a hard deadline because Avaya could no longer issue a renewed security certificate. We ran the platform shortlist (RingCentral, GoTo, Dialpad, UJet), led commercial negotiation, and delivered with virtual agents handling out of hours volume. Zero downtime in the cutover window.",
        },
        {
          customer: "A 200 user property services business",
          sector: "Property and field services",
          headline: "Max Contact replaced with RingCentral plus AI agent. HubSpot integration kept.",
          detail:
            "Existing AI agent (Rose) was already deployed handling 50% of bookings. We architected the move to keep the AI agent unchanged, swap the underlying platform, and improve the integration to HubSpot. CTO got board sign off in three weeks because the technical risk was named and ringfenced.",
        },
        {
          customer: "A 5,000 user UK telecoms group",
          sector: "Connectivity",
          headline: "Post administration restart, full estate rebuilt in 90 days.",
          detail:
            "The business had come out of administration with no comms infrastructure. We ran a 5 day £1,000 a day sprint, fee waived against platform selection, then rebuilt the stack with virtual agents from day one. 391% ROI on the AI tier alone.",
        },
      ]}
      monthTwo={[
        "Architecture diagram signed off by you, by the platform supplier, and by Mark. Single source of truth.",
        "Every integration documented with owner, contract, escalation path. No more silently failing handoffs.",
        "Migration playbook with rollback at every stage. The CIO and you have a Plan B for every Plan A.",
        "Security and compliance posture documented and signed by your CISO, before any production traffic moves.",
        "Quarterly architecture review with the Fortay engineering lead, you and the platform CTO. Roadmap alignment, not surprise releases.",
        "On call escalation runs through us first. Your engineers are not the first line for platform issues.",
      ]}
      kpis={[
        { metric: "0", label: "Outages in 30 consolidations" },
        { metric: "↓ 70%", label: "Integration count" },
        { metric: "↓ 60%", label: "Active suppliers" },
        { metric: "4 weeks", label: "From shortlist to recommendation" },
        { metric: "1", label: "Renewal date" },
        { metric: "98%", label: "Client retention, six year average" },
      ]}
      faqs={[
        {
          q: "Are you a platform reseller or independent?",
          a: "Both, technically. We carry SPIFF arrangements with every major UC, CX and AI provider, which means our commercial bias is to recommend whatever fits, not whichever pays best. The two times we have recommended a platform we do not partner with, we still ran the procurement. We will tell you which platforms we partner with up front, in writing.",
        },
        {
          q: "Will you commit to integration work, or just architect it?",
          a: "Both. Engineers in our team have deployed every platform we recommend, including the integrations. Day rate £1,000 to £1,200 depending on complexity. You can also use our team alongside your in house engineers, which is how most of our long running customers run.",
        },
        {
          q: "What is your stance on Microsoft Teams integration?",
          a: "Teams is in 90% of mid market estates we audit. We integrate with it, we do not replace it. The contact centre, the AI agent and the telephony platform all need to read and write to Teams. We have done this with Zoom, RingCentral, Dialpad and 8x8 stacks. There is no single right pattern. We will recommend one based on your usage data.",
        },
        {
          q: "How do you handle the bespoke database the supplier never quite integrated with?",
          a: "Honestly. If the integration is brittle, we tell you. We will scope the work to fix it before we trust it in production. Most platform sales teams skip this conversation. We have it on day one.",
        },
        {
          q: "What is the catch with the SPIFF model?",
          a: "There is one. Platforms pay us 4 to 11 times the monthly recurring revenue at signature, then about 20% on the lifetime of the contract. That funds our consultancy and engineering hours. The risk is bias. The mitigation is that we partner with every major provider, so we do not have a horse in the platform race. The two times we have ever recommended against our own commercial interest, we still ran the procurement.",
        },
      ]}
      finalCta="Ready to consolidate without losing a week of uptime?"
    />
  );
}
