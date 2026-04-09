import { SectionHeading } from "@/components/ui/SectionHeading";
import { protocols } from "@/content/protocols";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="py-16 sm:py-24 lg:py-32">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Programs and Tiers"
          title="A structured model from free community to full stack."
          description="Start with assessment, then move into the right level of digital support, capsule access, and continuity."
        />

        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:mt-14 lg:grid-cols-5">
          {protocols.map((protocol) => (
            <article
              key={protocol.slug}
              className="group luxury-card relative overflow-hidden rounded-[24px] p-5 transition duration-500 hover:-translate-y-1.5 hover:border-sage/70 sm:rounded-[28px] sm:p-6"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-teal/18 blur-2xl transition group-hover:bg-teal/28" />
              <p className="eyebrow relative text-sage/90">Pathway</p>
              <h3 className="display-title relative mt-3 text-[1.9rem] font-medium text-heading sm:mt-4 sm:text-3xl">
                {protocol.name}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted">
                {protocol.summary}
              </p>
              <a
                href={`/protocols/${protocol.slug}`}
                className="relative mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bone-white/80 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-obsidian transition duration-300 group-hover:translate-x-1 group-hover:border-sage/60 group-hover:text-terracotta sm:mt-7"
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
