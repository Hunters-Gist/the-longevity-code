import { LegalPage } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Education Disclaimer",
  description: "Research, education, and evidence boundaries for The Sila Code content.",
  alternates: {
    canonical: "/legal/research",
  },
};

export default function ResearchDisclaimerPage() {
  return (
    <LegalPage
      title="Research & Education Disclaimer"
      intro="The Sila Code uses research-informed education while maintaining conservative boundaries around evidence and claims."
      sections={[
        {
          heading: "Educational Context",
          body: "Articles, courses, ingredient discussions, assessment explanations, and community resources are provided for general education. They are not personalised professional advice and should not be used as the sole basis for health, supplement, training, or recovery decisions.",
        },
        {
          heading: "Research References",
          body: "Where scientific studies, ingredient data, or behavioural concepts are discussed, they are summarised for educational context. Research may be preliminary, population-specific, dose-specific, or not directly equivalent to a finished product or individual outcome.",
        },
        {
          heading: "No Guaranteed Outcomes",
          body: "Performance, focus, recovery, appearance, discipline, and wellbeing outcomes vary by person and depend on many factors including sleep, nutrition, medical history, medication, training, stress, genetics, and adherence. We do not guarantee specific results.",
        },
        {
          heading: "Professional Advice",
          body: "Consult appropriately qualified professionals for medical, psychological, nutritional, training, or legal questions. If you have symptoms, a diagnosed condition, or a mental health concern, seek professional care.",
        },
      ]}
    />
  );
}
