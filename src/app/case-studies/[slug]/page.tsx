import CaseStudyDetail from "@/pages/CaseStudyDetail";
export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  return <CaseStudyDetail slug={params.slug} />;
}
