import type { Metadata } from "next";
import ArticleDetail from "@/pages/ArticleDetail";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${title} | Insights | Fortay Connect`,
    description: `Read ${title.toLowerCase()} from the Fortay Connect team.`,
  };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  return <ArticleDetail slug={params.slug} />;
}
