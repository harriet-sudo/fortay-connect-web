import type { Metadata } from "next";
import PartnerDetail from "@/pages/PartnerDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${title} Partner | Fortay Connect`,
    description: `Independent advisory, deployment and managed services for ${title}. Fortay Connect is a certified partner.`,
  };
}

export default function PartnerDetailPage({ params }: { params: { slug: string } }) {
  return <PartnerDetail slug={params.slug} />;
}
