import type { Metadata } from "next";
import ServiceDetail from "@/pages/ServiceDetail";

const serviceMeta: Record<string, { title: string; desc: string }> = {
  "cx-ai-advisory": { title: "CX & AI Advisory | Fortay Connect", desc: "Get clarity before you commit budget. Independent CX and AI advisory for enterprise leaders." },
  "technology-selection": { title: "Technology Selection | Fortay Connect", desc: "Platform-neutral technology evaluation. We have selected platforms for 200+ organisations." },
  "deployment": { title: "Deployment & Engineering | Fortay Connect", desc: "CA Auto Finance: three platforms to one, six weeks audit to live. That is the standard we hold." },
  "managed-services": { title: "Managed Services & Optimisation | Fortay Connect", desc: "Our average client relationship is six years. We deploy and stay accountable." },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const meta = serviceMeta[params.slug];
  return {
    title: meta?.title ?? "Services | Fortay Connect",
    description: meta?.desc ?? "End-to-end CX and AI transformation services from Fortay Connect.",
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <ServiceDetail slug={params.slug} />;
}
