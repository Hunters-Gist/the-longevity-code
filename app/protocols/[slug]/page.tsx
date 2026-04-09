import { redirect } from "next/navigation";
import { protocols } from "@/content/protocols";

type ProtocolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return protocols.map((protocol) => ({ slug: protocol.slug }));
}

export default async function ProtocolDetailPage({ params }: ProtocolPageProps) {
  const { slug } = await params;
  redirect(`/the-code#${slug}`);
}
