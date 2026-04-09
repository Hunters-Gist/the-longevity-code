import type { Metadata } from "next";
import { SilaAssessmentClient } from "@/components/assessment/SilaAssessmentClient";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "The Sila Assessment",
  description:
    "15 questions across Brain, Skin, Body, Longevity, and Rehab with a personalised Sila Score and recommendations.",
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
        description="15 questions. 3 minutes. Discover your personalised Sila Score across all five pillars."
      />

      <section className="py-12 sm:py-16">
        <div className="section-wrap">
          <SilaAssessmentClient />
        </div>
      </section>
    </>
  );
}
