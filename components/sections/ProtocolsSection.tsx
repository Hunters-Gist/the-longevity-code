import { SectionHeading } from "@/components/ui/SectionHeading";
import { protocols } from "@/content/protocols";
import { ActionButton } from "@/components/ui/ActionButton";
import { sectionPatterns } from "@/components/ui/sectionStyles";

export function ProtocolsSection() {
  return (
    <section id="protocols" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Programs and Tiers"
          title="A structured model from free community to full stack."
          description="Start with assessment, then move into the right level of digital support, capsule access, and continuity."
        />

        <ul className={`${sectionPatterns.contentGrid} md:grid-cols-2 xl:grid-cols-5`}>
          {protocols.map((protocol, index) => (
            <li
              key={protocol.slug}
              className={`group relative flex h-full flex-col overflow-hidden ${sectionPatterns.cardFrame} transition duration-500 md:hover:-translate-y-1 ${
                index === 2
                  ? "border border-line-strong bg-obsidian text-bone-white shadow-[0_24px_50px_-28px_rgba(10,18,15,0.7)] hover:border-terracotta/60"
                  : "luxury-card hover:border-sage/70"
              } ${
                index === 0 ? "md:col-span-2 xl:col-span-1" : "xl:col-span-1"
              }`}
            >
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition ${
                  index === 2 ? "bg-terracotta/28 group-hover:bg-terracotta/38" : "bg-teal/18 group-hover:bg-teal/28"
                }`}
              />
              <p className={`eyebrow relative ${index === 2 ? "text-sage/85" : "text-sage/90"}`}>
                {index === 2 ? "Featured pathway" : "Pathway"}
              </p>
              <h3
                className={`display-title relative mt-2.5 text-[1.62rem] font-medium leading-[1.07] sm:mt-3 sm:text-[1.85rem] ${
                  index === 2 ? "text-bone-white" : "text-heading"
                }`}
              >
                {protocol.name}
              </h3>
              <p className={`relative mt-2.5 text-[0.94rem] leading-relaxed sm:text-sm ${index === 2 ? "text-bone-white/75" : "text-muted"}`}>
                {protocol.summary}
              </p>
              <div className="mt-5 sm:mt-6">
                <ActionButton
                  href={
                    protocol.slug === "sila-assessment"
                      ? "/assessment"
                      : "/subscribe"
                  }
                  variant={index === 2 ? "primary" : "secondary"}
                  className={`relative sm:w-full xl:w-full ${
                    index === 2
                      ? "bg-bone-white text-obsidian hover:bg-terracotta hover:text-bone-white"
                      : ""
                  }`}
                >
                  {protocol.slug === "sila-assessment" ? "Start Assessment" : "View Tier"}
                </ActionButton>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
