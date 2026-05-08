import type { Metadata } from "next";
import RolePersona from "@/pages/RolePersona";

export const metadata: Metadata = {
  title: "For the COO | CX, communications and AI consolidation | Fortay Connect",
  description:
    "For UK COOs running 2,000 plus people: three platforms doing what one could, rising costs, no single source of operational truth. The maths, the named outcomes and what month nine looks like.",
};

export default function COOPage() {
  return (
    <RolePersona
      roleLabel="COO"
      roleSlug="coo"
      pain="Three platforms doing what one could. Rising costs. No single source of operational truth."
      subhead="If your CX, communications and AI estate has crept past one supplier, one contract and one number, you are paying roughly 30% more than you should and you do not yet have the data to prove it. We have done this twenty times in mid market UK businesses. Here is the pattern."
      problemStats={[
        { stat: "30%", description: "of operational comms spend is duplication. Multiple platforms running variants of the same capability." },
        { stat: "6.4×", description: "the cost of a contact centre seat versus a back office seat. Most COOs do not see this until the procurement review." },
        { stat: "0", description: "of the 50 audits we have run had a single dashboard combining contact centre, telephony and CSAT in one view." },
      ]}
      outcomes={[
        {
          customer: "CA Auto Finance",
          sector: "Regulated finance, FCA",
          headline: "Three platforms to one. Costs down 40%. Six weeks audit to live.",
          detail:
            "Justine Long, the CFO, brought us in to consolidate. We mapped the operational stack, ran the procurement, and migrated everyone in six weeks with FCA compliant call recording end to end. She asked us back for the next phase.",
        },
        {
          customer: "A 1,200 person services group",
          sector: "Manufacturing and distribution",
          headline: "Five sites unified. 60% fewer tools. £80k a year out of OpEx.",
          detail:
            "Independent procurement, single supplier contract, named UK Customer Success Manager. The COO had been running quarterly contract reviews. Now she runs one annual review and reads a quarterly KPI report.",
        },
        {
          customer: "A £25m construction firm",
          sector: "Construction services",
          headline: "Adoption fixed in 90 days after a failed Zoom rollout.",
          detail:
            "They had bought Zoom phone six months earlier and rejected it. We rebuilt the rollout with proper change management, training and configuration that mapped to how the business actually runs. Adoption hit 92% inside 90 days.",
        },
      ]}
      monthTwo={[
        "One contract for telephony, contact centre and AI agents. One renewal date. One escalation path.",
        "A single quarterly KPI dashboard combining cost per contact, average handling time, FCR and adoption rate against the targets agreed in week one.",
        "The named UK Customer Success Manager who knows your stack, runs your reviews, and is in the room when something breaks.",
        "Adoption tracking week by week, not at go live. We do not declare success on the day the platform goes in. We declare it on day 90.",
        "A documented governance framework, signed by your CIO, your CFO and Mark, defining what good looks like and how we measure it.",
        "Quarterly board ready summary that fits on one page. Read it in three minutes. Use it in your ops review the same day.",
      ]}
      kpis={[
        { metric: "↓ 40%", label: "Cost per contact" },
        { metric: "↑ 92%", label: "Adoption rate at day 90" },
        { metric: "↓ 60%", label: "Number of suppliers" },
        { metric: "↑ 35%", label: "First contact resolution" },
        { metric: "1", label: "Renewal date instead of 5" },
        { metric: "98%", label: "Client retention, six year average" },
      ]}
      faqs={[
        {
          q: "How do you not become another supplier I have to manage?",
          a: "We sign one contract and we run the rest of them. You manage us, we manage your platforms. Most COOs we work with have gone from five renewal dates a year to one annual review with us.",
        },
        {
          q: "What if I want a platform you do not partner with?",
          a: "We carry SPIFF arrangements with every major UC, CX and AI provider, so this is rare. The two times it has happened, we still ran the procurement for the client and recommended against our own commercial interest. The relationship is worth more than the commission.",
        },
        {
          q: "How quickly can you actually deliver?",
          a: "Advisory and platform selection runs 2 to 4 weeks. Full deployment runs 3 to 6 months depending on scope. CA Auto Finance went audit to live in 6 weeks. We will tell you a fixed timeline before any work starts and we hold to it.",
        },
        {
          q: "What happens if my CIO does not want to play?",
          a: "We have done this on every engagement. Mark sits down with the CIO in week one, walks the architecture, and earns the technical mandate. If your CIO has reasons we have not met before, we will hear them and adapt. If your CIO blocks the project, we will tell you why honestly. We do not start projects that will fail politically.",
        },
        {
          q: "How is this different from Softcat or CDW?",
          a: "Softcat and CDW are aggregators. They pass leads to platform sales teams and step out. We have engineers who deploy, a Customer Success Manager who measures, and we are accountable for the outcome. Different operating model, different result.",
        },
      ]}
      finalCta="Ready to compress your supplier list to one?"
    />
  );
}
