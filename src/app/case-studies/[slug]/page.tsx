import type { Metadata } from "next";
import CaseStudyDetail from "@/pages/CaseStudyDetail";

const caseStudyMeta: Record<string, { title: string; desc: string }> = {
  "ca-auto-finance": { title: "CA Auto Finance Case Study | 40% Cost Reduction | Fortay Connect", desc: "Three platforms consolidated to one. 40% cost reduction. Six weeks audit to live. Read the full CA Auto Finance transformation story." },
  "your-world-recruitment": { title: "Your World Recruitment Case Study | Fortay Connect", desc: "Enterprise communications transformation for Your World Recruitment. Read the full story." },
  "garden-court-chambers": { title: "Garden Court Chambers Case Study | Fortay Connect", desc: "Communications modernisation for Garden Court Chambers. Read the full story." },
  "paragon-law": { title: "Paragon Law Case Study | Fortay Connect", desc: "Legal sector communications transformation for Paragon Law. Read the full story." },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = caseStudyMeta[params.slug];
  return {
    title: meta?.title ?? "Case Study | Fortay Connect",
    description: meta?.desc ?? "Enterprise CX transformation case study from Fortay Connect.",
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  return <CaseStudyDetail slug={params.slug} />;
}
