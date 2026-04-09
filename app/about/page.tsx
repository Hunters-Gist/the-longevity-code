import { CtaRail } from "@/components/ui/CtaRail";
import { PageHero } from "@/components/ui/PageHero";
import { BRAND_MEANING, BRAND_NAME } from "@/content/brand";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Sila story, mission, and science behind our psychology-backed wellness methodology.",
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
        description={`${BRAND_NAME} was founded at the intersection of psychology, performance, and preventative wellness. ${BRAND_MEANING}`}
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap grid gap-3 sm:gap-4 lg:grid-cols-2">
          <article className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">The Sila story</p>
            <h2 className="display-title mt-3 text-[2rem] font-medium sm:mt-4 sm:text-5xl">
              Psychology translated into practical daily wellness.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              The founder, Cassie, built The Sila Code after studying psychology
              and seeing how many people understood what they should do, but
              lacked a structure they could actually sustain. The brand name
              reflects her Russian heritage and the meaning of Sila - strength.
              That strength is not performative; it is behavioural, cognitive,
              and built over time.
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
              To bridge the gap between clinical psychology and daily wellness,
              making science-backed cognitive support accessible to everyone.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              <li>Assessment-led pathways grounded in behavioural principles</li>
              <li>Clinically studied ingredient logic, not trend-driven blends</li>
              <li>Digital support to reinforce consistency over intensity</li>
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
              The Sila Code references neuroscience, behaviour design, and
              evidence-informed supplementation. Our language remains compliant,
              measured, and focused on supporting cognitive function, mental
              clarity, and general wellbeing.
            </p>
          </article>
          <article className="luxury-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-9">
            <p className="eyebrow">The team</p>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              We are currently building our advisory board across psychology,
              formulation science, and preventive health. Team profiles will be
              published here as we expand.
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
