import { LegalPage } from "@/components/layout/LegalPage";
import { BRAND_NAME } from "@/content/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Sila Code collects, uses, and protects personal information across our website, assessments, and membership services.",
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
          body: "We may collect contact details, account identifiers, checkout and subscription metadata, support messages, assessment answers and scores, marketing preferences, and site interaction data required to operate the website, deliver requested services, process purchases, and improve user experience.",
        },
        {
          heading: "How We Use Information",
          body: "Information is used to deliver requested services, persist assessment submissions, operate memberships, process orders, provide customer support, send transactional messages, improve site performance, and provide relevant educational content where you have opted in or where the law permits. We do not sell personal information.",
        },
        {
          heading: "Assessment and Wellness Data",
          body: "Assessment responses are educational self-reflection data, not medical records. We collect only the information needed to save results, understand aggregate audience needs, and follow up responsibly. Do not submit sensitive medical history, diagnoses, emergency information, or details you do not want processed through a general wellness platform.",
        },
        {
          heading: "Service Providers",
          body: "We use trusted service providers for authentication, checkout, database hosting, email delivery, analytics, fulfilment, and infrastructure. These providers process information only as needed to provide their services to us and are not authorised to use it for unrelated purposes.",
        },
        {
          heading: "Retention and Security",
          body: "We retain information for as long as reasonably required to provide services, meet legal and accounting obligations, resolve disputes, and improve the platform. We use reasonable technical and organisational safeguards, but no internet service can guarantee absolute security.",
        },
        {
          heading: "Your Rights",
          body: "You may request access, correction, deletion, or marketing opt-out assistance by contacting contact@thesilacode.com. We may need to retain certain records where required by law, fraud prevention, dispute handling, or transaction accounting obligations.",
        },
      ]}
    />
  );
}
