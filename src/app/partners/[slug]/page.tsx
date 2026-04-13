import PartnerDetail from "@/pages/PartnerDetail";
export default function PartnerDetailPage({ params }: { params: { slug: string } }) {
  return <PartnerDetail slug={params.slug} />;
}
