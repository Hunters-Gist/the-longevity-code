import { LegalPage } from "@/components/layout/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping, customs, and fulfilment terms for The Sila Code product orders.",
  alternates: {
    canonical: "/legal/shipping",
  },
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      intro="This policy covers fulfilment expectations for physical products and membership product deliveries."
      sections={[
        {
          heading: "Fulfilment Timing",
          body: "Orders are processed during business days after payment confirmation and fraud checks. Estimated dispatch and delivery timing may vary by destination, stock availability, carrier performance, public holidays, and pre-order status.",
        },
        {
          heading: "Shipping Regions",
          body: "We may offer shipping within Australia and selected international destinations through checkout. Available countries can change without notice based on carrier support, product compliance, operational readiness, and customs restrictions.",
        },
        {
          heading: "International Duties and Customs",
          body: "International customers are responsible for import duties, customs charges, taxes, local restrictions, and any regulatory requirements in their destination country. We cannot guarantee that supplements or wellness products are permitted for import in every jurisdiction.",
        },
        {
          heading: "Lost, Returned, or Delayed Parcels",
          body: "If a parcel is delayed, returned, lost, or marked delivered but not received, contact support with your order details. We will work with the carrier where practical, but delivery outcomes can depend on carrier investigation, local postal services, and address accuracy.",
        },
        {
          heading: "Address Accuracy",
          body: "Customers are responsible for entering accurate shipping details. If an order is returned or lost because of an incorrect address, reshipment or refund eligibility may be limited.",
        },
      ]}
    />
  );
}
