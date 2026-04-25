import { LegalPage } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund terms for The Sila Code products, memberships, and digital services.",
  alternates: {
    canonical: "/legal/refund",
  },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="This policy explains how refund requests are handled for physical products, digital memberships, and subscriptions."
      sections={[
        {
          heading: "Physical Products",
          body: "If a product arrives damaged, incorrect, or materially defective, contact support within 7 days of delivery with your order number and clear photographs. We may offer a replacement, store credit, or refund depending on the issue and applicable consumer law. We generally cannot accept returns for opened supplements unless required by law.",
        },
        {
          heading: "Change of Mind",
          body: "Change-of-mind refunds are not guaranteed for supplements, digital content, memberships, or advisory services. Where we choose to approve a discretionary return, products must be unopened, unused, and in saleable condition, and return shipping may be at the customer’s cost.",
        },
        {
          heading: "Digital Memberships",
          body: "Digital memberships provide immediate access to educational content, community features, and member resources. Refunds for digital access are assessed case-by-case and may be declined once access has been used, unless required by Australian Consumer Law.",
        },
        {
          heading: "Subscriptions",
          body: "Cancelling a subscription stops future billing but does not automatically refund the current billing period. If you believe you were charged in error, contact support promptly so we can review your account and Stripe billing record.",
        },
        {
          heading: "How to Request a Refund",
          body: "Email contact@thesilacode.com with your name, order email, order number, reason for request, and supporting evidence. Approved refunds are usually returned to the original payment method through Stripe and may take several business days to appear depending on your bank.",
        },
      ]}
    />
  );
}
