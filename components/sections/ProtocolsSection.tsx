import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="py-20 sm:py-28">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Premium Protocols"
          title="Goal-based protocols, not generic wellness stacks."
          description="Every protocol starts with intent and assessment, then evolves with your progress."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {homeContent.protocols.map((protocol) => (
            <article
              key={protocol.name}
              className="group relative overflow-hidden rounded-3xl border border-line bg-surface/90 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-teal/60"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal/20 blur-2xl transition group-hover:bg-teal/30" />
              <h3 className="relative text-lg font-display font-medium text-bone-white">
                {protocol.name}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {protocol.summary}
              </p>
              <a
                href="#"
                className="relative mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-teal transition hover:text-sage"
              >
                {protocol.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
