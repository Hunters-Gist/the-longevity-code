import { redirect } from "next/navigation";
import { learnArticles } from "@/content/learn";

type LearnArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learnArticles.map((article) => ({ slug: article.slug }));
}

export default async function LearnArticlePage({ params }: LearnArticlePageProps) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
