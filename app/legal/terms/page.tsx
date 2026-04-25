import { LegalPage } from "@/components/layout/LegalPage";
import { BRAND_NAME } from "@/content/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms governing the use of The Sila Code website, services, assessments, and membership subscriptions.",
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
          body: `${BRAND_NAME} provides educational wellness content, self-reflection assessments, products, memberships, and community experiences. Our services are designed for general education, behaviour support, and lifestyle optimisation only. They are not medical advice, diagnosis, treatment, or a substitute for consultation with a qualified healthcare practitioner.`,
        },
        {
          heading: "User Responsibilities",
          body: "You agree to provide accurate information, maintain account security, review product labels and directions, and decide whether any product, assessment, membership, or educational material is appropriate for your circumstances. You must not use the site unlawfully, disrupt the service, misuse community access, or rely on website content as a replacement for professional advice.",
        },
        {
          heading: "Products, Supplements, and Age Restrictions",
          body: "Products sold through this website are wellness supplements or related goods unless stated otherwise. They are not represented as medicines and are not intended to diagnose, treat, cure, or prevent disease. Purchasers should be 18 years or older, or have the consent and supervision of a parent or guardian where local law permits. If you are pregnant, breastfeeding, taking medication, managing a diagnosed condition, or unsure whether a product is suitable, consult a healthcare professional before purchase or use.",
        },
        {
          heading: "Memberships, Billing, and Access",
          body: "Paid memberships may be billed monthly, annually, or once-off depending on the offer selected at checkout. By purchasing a membership, you authorise recurring billing where applicable until cancelled. Digital access, community features, product inclusions, advisory services, and founder-tier deliverables may vary by tier and may be subject to operational readiness, availability, eligibility, or separate terms presented at checkout.",
        },
        {
          heading: "Cancellations, Refunds, and Shipping",
          body: "Cancellation, refund, and shipping terms are explained in our dedicated Refund Policy, Shipping Policy, and Subscription Terms. Digital content and memberships may have different refund treatment from physical products. International customers are responsible for customs duties, import taxes, and local compliance requirements unless expressly stated otherwise.",
        },
        {
          heading: "Intellectual Property",
          body: "All content, programme materials, and brand assets are protected by intellectual property law and may not be reproduced without written permission.",
        },
        {
          heading: "Limitation of Liability",
          body: "To the maximum extent permitted by law, The Sila Code Pty Ltd is not liable for indirect, incidental, consequential, or special loss arising from use of the website, products, assessment outputs, memberships, or community content. Nothing in these terms excludes rights that cannot be excluded under Australian Consumer Law.",
        },
      ]}
    />
  );
}
