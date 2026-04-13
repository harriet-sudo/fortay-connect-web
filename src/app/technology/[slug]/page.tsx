import TechnologyDetail from "@/pages/TechnologyDetail";
export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  return <TechnologyDetail slug={params.slug} />;
}
