import { LegalPage } from "@/components/layout/LegalPage";
import { BRAND_NAME } from "@/content/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "/legal/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This page outlines how we collect, use, and protect personal data across the ${BRAND_NAME} ecosystem.`}
      sections={[
        {
          heading: "Information We Collect",
          body: "We may collect contact details, assessment responses, and site interaction data required to deliver recommendations, support requests, and subscription communication.",
        },
        {
          heading: "How We Use Information",
          body: "Information is used to deliver requested services, improve site performance, and provide relevant educational content. We do not sell personal information.",
        },
        {
          heading: "Your Rights",
          body: "You may request access, correction, or deletion of your personal information by contacting hello@thesilacode.com.",
        },
      ]}
    />
  );
}
