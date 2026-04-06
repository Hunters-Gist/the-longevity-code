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
      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <div className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-10">
            <div className="space-y-7 sm:space-y-8">
              {sections.map((section) => (
                <article key={section.heading} className="space-y-3">
                  <h2 className="display-title text-[1.9rem] font-medium sm:text-3xl">
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
