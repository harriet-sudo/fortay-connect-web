import type { Metadata } from "next";
import TechnologyDetail from "@/pages/TechnologyDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${title} | Technology | Fortay Connect`,
    description: `Platform-neutral ${title.toLowerCase()} solutions. Independent evaluation and deployment from Fortay Connect.`,
  };
}

export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  return <TechnologyDetail slug={params.slug} />;
}
