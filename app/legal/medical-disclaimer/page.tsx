import { LegalPage } from "@/components/layout/LegalPage";
import { BRAND_NAME } from "@/content/brand";

export default function MedicalDisclaimerPage() {
  return (
    <LegalPage
      title="Medical Disclaimer"
      intro={`${BRAND_NAME} does not provide medical diagnosis, treatment, or emergency care.`}
      sections={[
        {
          heading: "Not Medical Advice",
          body: "Content, assessments, and protocol guidance are educational wellness resources and are not a substitute for professional medical advice, diagnosis, or treatment.",
        },
        {
          heading: "Consult Your Physician",
          body: "Always consult a qualified healthcare professional before beginning or changing any health, nutrition, supplement, or recovery plan.",
        },
        {
          heading: "Emergency Situations",
          body: "If you are experiencing a medical emergency, call emergency services or seek immediate medical care from a licensed provider.",
        },
      ]}
    />
  );
}
