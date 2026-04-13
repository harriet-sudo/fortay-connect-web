import IndustryDetail from "@/pages/IndustryDetail";
export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  return <IndustryDetail slug={params.slug} />;
}
