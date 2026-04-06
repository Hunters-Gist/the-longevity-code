import Link from "next/link";
import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { protocols } from "@/content/protocols";

export default function ProtocolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Protocols"
        title="A library of precision protocols."
        description="Explore structured pathways across recovery, longevity, skin health, and cognitive clarity. Each protocol can stand alone or layer into membership."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 md:grid-cols-2">
          {protocols.map((protocol) => (
            <article
              key={protocol.slug}
              className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-8"
            >
              <p className="eyebrow">{protocol.positioning}</p>
              <h2 className="display-title mt-3 text-[2rem] font-medium sm:mt-4 sm:text-5xl">
                {protocol.name}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {protocol.summary}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {protocol.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-bone-white/72 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link
                href={`/protocols/${protocol.slug}`}
                className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-bone-white/80 px-4 text-xs font-semibold uppercase tracking-[0.15em] text-obsidian transition hover:translate-x-1 hover:border-sage/70 hover:text-terracotta sm:mt-7"
              >
                View protocol
                <span aria-hidden="true">{"->"}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <CtaRail
        title="Not sure where to start?"
        description="Assessment recommends the right protocol sequence based on your current state and priorities."
        primary={{ label: "Start Assessment", href: "/assessment" }}
        secondary={{ label: "View Membership", href: "/membership" }}
      />
    </>
  );
}
