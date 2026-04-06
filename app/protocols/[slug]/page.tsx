import { notFound } from "next/navigation";
import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { getProtocolBySlug, protocols } from "@/content/protocols";

type ProtocolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return protocols.map((protocol) => ({ slug: protocol.slug }));
}

export default async function ProtocolDetailPage({ params }: ProtocolPageProps) {
  const { slug } = await params;
  const protocol = getProtocolBySlug(slug);

  if (!protocol) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Protocol"
        title={protocol.name}
        description={protocol.summary}
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Outcomes</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted sm:text-base">
              {protocol.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span aria-hidden="true" className="text-sage">
                    -
                  </span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Protocol profile</p>
            <dl className="mt-4 space-y-3 text-sm text-foreground/85">
              <div>
                <dt className="text-muted">Duration</dt>
                <dd>{protocol.duration}</dd>
              </div>
              <div>
                <dt className="text-muted">Cadence</dt>
                <dd>{protocol.cadence}</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <CtaRail
        title="Apply this protocol with precision."
        description="Get better outcomes with an assessment-backed entry and membership continuity."
        primary={{ label: "Start Assessment", href: "/assessment" }}
        secondary={{ label: "Join Membership", href: "/membership" }}
      />
    </>
  );
}
