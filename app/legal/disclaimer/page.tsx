import { LegalPage } from "@/components/layout/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="General Disclaimer"
      intro="All information provided on this site is for educational and informational purposes only."
      sections={[
        {
          heading: "No Guaranteed Outcomes",
          body: "Individual response to wellness protocols can vary. Results described on the website are illustrative and should not be interpreted as guarantees.",
        },
        {
          heading: "Professional Judgment",
          body: "Content is intended to support informed decision-making, not replace individualized professional or medical judgment.",
        },
        {
          heading: "Third-Party References",
          body: "External resources, products, or services may be referenced for context. We are not responsible for third-party content or claims.",
        },
      ]}
    />
  );
}
