import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { BRAND_NAME } from "@/content/brand";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "A structured approach to human performance grounded in psychology and built for real-world application.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The story behind The Sila Code."
        description={`${BRAND_NAME} is a structured approach to human performance, grounded in psychology and built for real-world application.`}
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 lg:grid-cols-2">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">The Sila story</p>
            <h2 className="display-title mt-3 text-[2rem] font-medium sm:mt-4 sm:text-5xl">
              Where discipline becomes identity.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              The Sila Code is a structured approach to human performance,
              grounded in psychology and built for real-world application.
              Developed in Victoria, Australia, by the Founder following formal
              study in psychology and extensive experience across healthcare,
              disability, and community sectors, it was created to address a
              clear gap - understanding behaviour does not guarantee change.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Traditional psychological models are essential for diagnosis and
              classification, including frameworks such as the DSM-5, yet many
              approaches stop at explanation. The Sila Code translates
              psychological principles into refined, repeatable systems designed
              to support clarity, consistency, and long-term wellbeing.
            </p>
            <div className="mt-6 overflow-hidden rounded-[26px] border border-line sm:rounded-[30px] lg:rounded-t-[140px]">
              <Image
                src="/images/hero/premium_photo-1681882038701-96b1874e3ea8.avif"
                alt="Founder story editorial portrait"
                width={900}
                height={620}
                className="h-44 w-full object-cover object-[center_28%] transition duration-700 ease-out hover:scale-105 sm:h-56"
              />
            </div>
          </article>
          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              &ldquo;Sila,&rdquo; meaning strength in Russian, reflects the brand&apos;s
              philosophy: strength is not performative, but built through
              disciplined, consistent action over time.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Grounded in psychology and behavioural design</li>
              <li>Built for real-world execution, not abstract theory</li>
              <li>Designed to create sustainable change over time</li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-[26px] border border-line sm:rounded-[30px] lg:rounded-t-[140px]">
              <Image
                src="/images/hero/how-to-fuel-your-skin-for-a-radiant-complexion-9ed1e6a9-6df8-4a4a-b29b-d2ea7d1f05c7.webp"
                alt="Mission strategy editorial visual"
                width={900}
                height={620}
                className="h-44 w-full object-cover object-[center_36%] transition duration-700 ease-out hover:scale-105 sm:h-56"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="pb-4">
        <div className="section-wrap grid gap-3 sm:gap-4 lg:grid-cols-2">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">The science</p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Blending neuroscience, behavioural design, and
              evidence-informed supplementation, The Sila Code offers a measured
              approach to sustainable change.
            </p>
          </article>
          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">The philosophy</p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              This is not motivation.
              <br />
              It is structure.
              <br />
              It is practice.
              <br />
              It is The Sila Code.
            </p>
          </article>
        </div>
        <div className="vine-line mt-6 sm:mt-8" aria-hidden="true" />
      </section>

      <CtaRail
        title="Start with clarity."
        description="Take the Sila Assessment to identify your strongest and weakest pillars before choosing your next step."
        primary={{ label: "Take the Assessment", href: "/assessment" }}
        secondary={{ label: "Explore The Code", href: "/the-code" }}
      />
    </>
  );
}
