import { LegalPage } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscription Terms",
  description: "Subscription billing, cancellation, access, and renewal terms for The Sila Code memberships.",
  alternates: {
    canonical: "/legal/subscription",
  },
};

export default function SubscriptionTermsPage() {
  return (
    <LegalPage
      title="Subscription Terms"
      intro="These terms explain how paid memberships, recurring billing, cancellations, and member access work."
      sections={[
        {
          heading: "Recurring Billing",
          body: "When you purchase a recurring membership, you authorise Stripe to charge your selected payment method on the billing schedule shown at checkout until you cancel. Prices, inclusions, and billing intervals are displayed before payment.",
        },
        {
          heading: "Cancellation",
          body: "You can manage or cancel eligible subscriptions through the member billing portal or by contacting support. Cancellation stops future renewals but does not automatically refund the current billing period or physical products already dispatched unless required by law.",
        },
        {
          heading: "Access and Inclusions",
          body: "Membership access may include digital education, community access, live sessions, product deliveries, advisory support, or concierge features depending on tier. Some inclusions may be subject to availability, scheduling, operational readiness, stock, eligibility, or reasonable usage expectations.",
        },
        {
          heading: "Failed Payments",
          body: "If a payment fails, Stripe may retry the charge and we may suspend or limit access until payment is resolved. You remain responsible for keeping billing information accurate and current.",
        },
        {
          heading: "Founding 100",
          body: "Founding 100 is gated behind a release flag until legal, fulfilment, and member operations are ready. If enabled in the future, deliverables, limits, and eligibility must be clearly disclosed before payment is accepted.",
        },
      ]}
    />
  );
}
