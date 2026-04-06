import { LegalPage } from "@/components/layout/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This page outlines how we collect, use, and protect personal data in The Longevity Code ecosystem."
      sections={[
        {
          heading: "Information We Collect",
          body: "We may collect personal identifiers, assessment responses, and interaction data required to provide protocol recommendations, membership services, and support communication.",
        },
        {
          heading: "How We Use Information",
          body: "Data is used to improve your platform experience, deliver requested services, and maintain operational quality. We do not sell personal data.",
        },
        {
          heading: "Data Security",
          body: "We apply commercially reasonable safeguards to protect data against unauthorized access, disclosure, or misuse.",
        },
      ]}
    />
  );
}
