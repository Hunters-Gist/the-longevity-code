import { LegalPage } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Support Policy",
  description: "How to contact The Sila Code for order, membership, product, and support questions.",
  alternates: {
    canonical: "/legal/support",
  },
};

export default function SupportPolicyPage() {
  return (
    <LegalPage
      title="Contact & Support Policy"
      intro="This policy explains how support requests are handled and what information helps us respond quickly."
      sections={[
        {
          heading: "Support Channel",
          body: "For support, email contact@thesilacode.com with your name, account email, order number if applicable, and a concise description of the issue. Please do not send urgent medical, psychological, or emergency information through website forms or email.",
        },
        {
          heading: "Response Times",
          body: "We aim to respond during Australian business days. Response timing may vary during launches, public holidays, carrier delays, or high-volume periods. Urgent health or safety matters should be directed to appropriate emergency or professional services.",
        },
        {
          heading: "Order and Billing Support",
          body: "For checkout, subscription, refund, or shipping questions, include your Stripe receipt email, order number, and screenshots where useful. We will never ask for your full card number or account password by email.",
        },
        {
          heading: "Community Conduct",
          body: "Community access may be moderated to protect member safety, privacy, and quality of discussion. We may remove harmful, misleading, unlawful, or medical-advice-seeking content and may restrict access for repeated policy breaches.",
        },
      ]}
    />
  );
}
