import { LegalPage } from "@/components/layout/LegalPage";
import { BRAND_NAME } from "@/content/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="By using this website and related services, you agree to these terms governing access, subscriptions, and content usage."
      sections={[
        {
          heading: "Service Scope",
          body: `${BRAND_NAME} provides educational wellness content, assessment tools, and subscription services. Access to certain services may require account creation.`,
        },
        {
          heading: "User Responsibilities",
          body: "You agree to provide accurate information, maintain account security, and use the website for lawful purposes only.",
        },
        {
          heading: "Intellectual Property",
          body: "All content, programme materials, and brand assets are protected by intellectual property law and may not be reproduced without written permission.",
        },
      ]}
    />
  );
}
