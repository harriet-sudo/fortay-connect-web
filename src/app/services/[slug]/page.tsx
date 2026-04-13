import ServiceDetail from "@/pages/ServiceDetail";
export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  return <ServiceDetail slug={params.slug} />;
}
