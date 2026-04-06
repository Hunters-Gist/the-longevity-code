import { homeContent } from "@/content/homepage";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="py-24 sm:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Premium Protocols"
          title="Goal-based protocols, not generic wellness stacks."
          description="Every protocol starts with intent and assessment, then evolves with your progress."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {homeContent.protocols.map((protocol) => (
            <article
              key={protocol.name}
              className="group luxury-card relative overflow-hidden rounded-[28px] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-teal/50"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/16 blur-2xl transition group-hover:bg-gold/26" />
              <p className="eyebrow relative text-sage/75">Protocol</p>
              <h3 className="display-title relative mt-4 text-3xl font-medium text-bone-white">
                {protocol.name}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {protocol.summary}
              </p>
              <a
                href="#"
                className="relative mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-teal transition duration-300 group-hover:translate-x-1 group-hover:text-sage"
              >
                {protocol.cta}
                <span aria-hidden="true">{"->"}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
