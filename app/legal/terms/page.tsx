import { LegalPage } from "@/components/layout/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="By using this website and related services, you agree to these terms governing access, membership, and content usage."
      sections={[
        {
          heading: "Service Scope",
          body: "The Longevity Code provides educational wellness content, assessment frameworks, and membership guidance. Access to certain services may require subscription or eligibility checks.",
        },
        {
          heading: "User Responsibilities",
          body: "You agree to provide accurate information, safeguard account credentials, and use the platform for lawful purposes only.",
        },
        {
          heading: "Intellectual Property",
          body: "All content, protocols, and platform materials are protected by intellectual property law and may not be copied or redistributed without permission.",
        },
      ]}
    />
  );
}
