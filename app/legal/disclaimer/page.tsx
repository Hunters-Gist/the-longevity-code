import { LegalPage } from "@/components/layout/LegalPage";
import { SILA_HEALTH_DISCLAIMER } from "@/content/sila";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Disclaimer",
  alternates: {
    canonical: "/legal/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Health Disclaimer"
      intro={SILA_HEALTH_DISCLAIMER}
      sections={[
        {
          heading: "General wellbeing support",
          body: "Statements on this website describe general wellbeing support only and are not intended as therapeutic claims.",
        },
        {
          heading: "No medical diagnosis or treatment",
          body: "The Sila Code does not diagnose, treat, cure, or prevent disease. Always seek professional medical advice for individual health concerns.",
        },
        {
          heading: "Professional consultation",
          body: "If symptoms persist, consult your healthcare professional. Supplements should not replace a balanced diet.",
        },
      ]}
    />
  );
}
