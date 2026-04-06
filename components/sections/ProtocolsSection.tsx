import { SectionHeading } from "@/components/ui/SectionHeading";
import { protocols } from "@/content/protocols";

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
          {protocols.map((protocol) => (
            <article
              key={protocol.slug}
              className="group luxury-card relative overflow-hidden rounded-[28px] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-sage/70"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal/18 blur-2xl transition group-hover:bg-teal/28" />
              <p className="eyebrow relative text-sage/90">Protocol</p>
              <h3 className="display-title relative mt-4 text-3xl font-medium text-heading">
                {protocol.name}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {protocol.summary}
              </p>
              <a
                href={`/protocols/${protocol.slug}`}
                className="relative mt-7 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-obsidian transition duration-300 group-hover:translate-x-1 group-hover:text-terracotta"
              >
                Learn More
                <span aria-hidden="true">{"->"}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
