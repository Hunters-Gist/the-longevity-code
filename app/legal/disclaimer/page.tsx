import { LegalPage } from "@/components/layout/LegalPage";
import { SILA_HEALTH_DISCLAIMER } from "@/content/sila";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Disclaimer",
  description:
    "Health and wellness disclaimer for The Sila Code content, assessments, and product information.",
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
          body: "Statements on this website describe general wellbeing, behaviour, education, performance, and lifestyle support only. They are not therapeutic claims and should not be interpreted as evidence that a product, assessment, membership, article, or protocol can diagnose, treat, cure, or prevent disease.",
        },
        {
          heading: "No medical diagnosis or treatment",
          body: "The Sila Code does not provide medical diagnosis, treatment plans, prescriptions, emergency care, or clinical monitoring. Always seek professional medical advice for individual health concerns, symptoms, injuries, medication interactions, pregnancy, breastfeeding, diagnosed conditions, or changes to diet, supplementation, exercise, or recovery practices.",
        },
        {
          heading: "Professional consultation",
          body: "If symptoms persist, stop use where appropriate and consult your healthcare professional. Supplements should not replace a balanced diet, sleep, exercise, medication, or practitioner-guided care. Always read the label and follow directions for use.",
        },
        {
          heading: "Assessment Boundaries",
          body: "The Sila Assessment is an educational self-reflection tool. Scores and recommendations are not diagnostic instruments, clinical screenings, risk assessments, or personalised medical advice. They are intended to help you prioritise habits and learning pathways.",
        },
        {
          heading: "No Implied Approval",
          body: "Unless expressly stated with verified documentation, The Sila Code does not claim that any product, ingredient, programme, assessment, or membership has been approved by the TGA, FDA, or any equivalent regulator as a treatment for a disease or medical condition.",
        },
      ]}
    />
  );
}
