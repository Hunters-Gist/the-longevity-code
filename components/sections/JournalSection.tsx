import { BLOG_POSTS, SILA_PILLARS } from "@/content/sila";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ActionButton } from "@/components/ui/ActionButton";
import { SafeImage } from "@/components/ui/SafeImage";
import { sectionPatterns } from "@/components/ui/sectionStyles";
import { brandAssets, pillarImageMap } from "@/lib/brand/assets";

function getPillarName(categoryKey: string) {
  return SILA_PILLARS.find((pillar) => pillar.key === categoryKey)?.name ?? "Journal";
}

export function JournalSection() {
  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <section id="journal" className="section-space">
      <div className="section-wrap">
        <SectionHeading
          eyebrow="Journal"
          title="Editorial intelligence for better decisions."
          description="Practical longevity thinking for adults optimising body, skin, and cognitive health."
        />

        <ul className={`${sectionPatterns.contentGrid} md:grid-cols-2 xl:grid-cols-3`}>
          {featured.map((entry) => (
            <li
              key={entry.slug}
              className="group luxury-card flex h-full flex-col overflow-hidden rounded-[22px] transition duration-500 hover:border-sage/70 md:hover:-translate-y-1 sm:rounded-[28px]"
            >
              <div className="relative h-44 overflow-hidden border-b border-line sm:h-52 md:h-56">
                <SafeImage
                  src={pillarImageMap[entry.category] ?? brandAssets.heroPoster}
                  alt={`Journal cover image for ${entry.title}`}
                  fill
                  fallbackLabel="Sila journal visual"
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                  className="object-cover object-[center_40%] transition duration-700 md:group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bone-white/65 via-transparent to-transparent" />
              </div>
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta">
                  {getPillarName(entry.category)}
                </p>
                <h3 className="display-title mt-2.5 text-[1.56rem] font-medium leading-[1.07] text-heading sm:text-[1.86rem] md:text-[2.06rem]">
                  {entry.title}
                </h3>
                <p className="mt-2.5 text-[0.94rem] leading-relaxed text-muted sm:text-sm">
                  {entry.excerpt}
                </p>
                <p className="ui-caps mt-4 text-muted/85">{entry.readTime}</p>
                <div className="mt-5">
                  <ActionButton
                    href={`/blog/${entry.slug}`}
                    variant="secondary"
                    className="sm:w-auto"
                  >
                    Read Article
                  </ActionButton>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
