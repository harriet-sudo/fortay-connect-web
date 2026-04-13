import ArticleDetail from "@/pages/ArticleDetail";
export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  return <ArticleDetail slug={params.slug} />;
}
