import { PageHero } from "@/components/ui/PageHero";

type LegalPageProps = {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} />
      <section className="py-16">
        <div className="section-wrap">
          <div className="glass-card rounded-[28px] p-7 sm:p-10">
            <div className="space-y-8">
              {sections.map((section) => (
                <article key={section.heading} className="space-y-3">
                  <h2 className="display-title text-3xl font-medium">
                    {section.heading}
                  </h2>
                  <p className="max-w-4xl text-sm leading-relaxed text-muted sm:text-base">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
