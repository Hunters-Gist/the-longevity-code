import { LegalPage } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assessment Disclaimer",
  description: "Boundaries for The Sila Assessment and personalised score outputs.",
  alternates: {
    canonical: "/legal/assessment",
  },
};

export default function AssessmentDisclaimerPage() {
  return (
    <LegalPage
      title="Assessment Disclaimer"
      intro="The Sila Assessment is a self-reflection and education tool, not a medical or psychological assessment."
      sections={[
        {
          heading: "Self-Reflection Only",
          body: "The assessment helps users reflect on habits and priorities across Brain, Skin, Body, Longevity, and Recovery. It is not a diagnostic instrument, psychological test, clinical screen, risk assessment, or personalised treatment recommendation.",
        },
        {
          heading: "Scores and Recommendations",
          body: "Scores are calculated from your selected answers and are intended to guide educational pathways, not determine health status. Recommendations are general and should be interpreted cautiously, especially if you have medical, mental health, nutritional, or training considerations.",
        },
        {
          heading: "Data Submitted",
          body: "When you enter your email to unlock results, we store your email, answers, computed scores, source route, consent preference, and submission time so we can save your result and follow up responsibly. Do not submit sensitive health details or emergency information.",
        },
        {
          heading: "When to Seek Help",
          body: "If you are experiencing distress, symptoms, injury, illness, medication concerns, or urgent health issues, do not rely on the assessment. Contact a qualified professional or emergency service appropriate to your location.",
        },
      ]}
    />
  );
}
