import { redirect } from "next/navigation";
import { protocols } from "@/content/protocols";

type ProtocolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return protocols.map((protocol) => ({ slug: protocol.slug }));
}

// Map each legacy /protocols/<slug> to a real, live destination so no users hit dead anchors.
// Assessment slug -> /assessment. All membership/tier slugs -> /subscribe. Everything else -> /the-code.
const PROTOCOL_REDIRECT_MAP: Record<string, string> = {
  "sila-assessment": "/assessment",
  "the-code-digital": "/subscribe",
  "code-plus-capsule": "/subscribe",
  "founding-member": "/subscribe",
  "executive-performance-track": "/subscribe",
};

export default async function ProtocolDetailPage({ params }: ProtocolPageProps) {
  const { slug } = await params;
  const destination = PROTOCOL_REDIRECT_MAP[slug] ?? "/the-code";
  redirect(destination);
}
