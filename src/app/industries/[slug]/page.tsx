import type { Metadata } from "next";
import IndustryDetail from "@/pages/IndustryDetail";

const industryMeta: Record<string, { title: string; desc: string }> = {
  "financial-services": { title: "Financial Services CX & AI | Fortay Connect", desc: "AI-powered CX for FCA-regulated environments. Compliance built in, not bolted on." },
  "retail": { title: "Retail CX & AI Transformation | Fortay Connect", desc: "Turn customer experience into competitive advantage with AI and omnichannel CX." },
  "manufacturing": { title: "Manufacturing Communications & AI | Fortay Connect", desc: "Multi-site communications infrastructure designed for operational efficiency." },
  "legal": { title: "Legal Sector Communications | Fortay Connect", desc: "SRA-compliant communications and AI for law firms. Protect revenue and reputation." },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = industryMeta[params.slug];
  return {
    title: meta?.title ?? "Industry Solutions | Fortay Connect",
    description: meta?.desc ?? "Sector-specific CX and AI transformation from Fortay Connect.",
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  return <IndustryDetail slug={params.slug} />;
}
