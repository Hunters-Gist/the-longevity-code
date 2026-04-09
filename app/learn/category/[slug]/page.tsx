import { redirect } from "next/navigation";
import { learnCategories } from "@/content/learn";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return learnCategories.map((category) => ({ slug: category.slug }));
}

export default async function LearnCategoryPage({ params }: CategoryPageProps) {
  await params;
  redirect("/blog");
}
