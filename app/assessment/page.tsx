import type { Metadata } from "next";
import { SilaAssessmentClient } from "@/components/assessment/SilaAssessmentClient";
import { PageHero } from "@/components/ui/PageHero";
import Image from "next/image";
import { pillarImageMap } from "@/lib/brand/assets";

export const metadata: Metadata = {
  title: "The Sila Assessment",
  description:
    "15 questions across Brain, Skin, Body, Longevity, and Recovery with a personalised Sila Score and recommendations.",
  alternates: {
    canonical: "/assessment",
  },
};

export default function AssessmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Assessment"
        title="The Sila Assessment"
        description="15 questions. About 5 minutes. Discover your personalised Sila Score across all five pillars."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap space-y-4">
          <div className="glass-card overflow-hidden rounded-[26px] border border-line">
            <Image
              src={pillarImageMap.brain}
              alt="Assessment neuroscience visual"
              width={1600}
              height={1100}
              className="h-52 w-full object-cover object-[center_45%] transition duration-700 ease-out hover:scale-105 sm:h-60"
            />
            <div className="border-t border-line bg-bone-white/70 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Assessment canvas preview
              </p>
            </div>
          </div>
          <SilaAssessmentClient />
        </div>
      </section>
    </>
  );
}
