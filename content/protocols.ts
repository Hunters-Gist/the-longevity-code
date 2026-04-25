export type Protocol = {
  slug: string;
  name: string;
  summary: string;
  positioning: string;
  duration: string;
  cadence: string;
  focus: string[];
  outcomes: string[];
};

export const protocols: Protocol[] = [
  {
    slug: "sila-assessment",
    name: "The Sila Assessment",
    summary:
      "A free 15-question onboarding assessment that maps strengths and gaps across all five Sila pillars.",
    positioning: "Lead-in and segmentation",
    duration: "Single session (~5 min)",
    cadence: "Run at onboarding and revisit quarterly",
    focus: ["Pillar scoring", "Stress profile", "Personalised recommendations"],
    outcomes: [
      "Personalised Sila Score",
      "Pillar-specific next steps",
      "Entry recommendation into the right tier",
    ],
  },
  {
    slug: "the-code-digital",
    name: "The Code",
    summary:
      "A$149/month private-practice digital membership with full course library, monthly masterclass, and member community.",
    positioning: "Digital practice",
    duration: "Monthly or annual",
    cadence: "Weekly drops and monthly masterclass",
    focus: ["Behaviour design", "Pillar education", "Consistency systems"],
    outcomes: [
      "Clear weekly execution plan",
      "Higher adherence to wellness behaviours",
      "Compounding progress through structure",
    ],
  },
  {
    slug: "code-plus-capsule",
    name: "The Code + Capsule",
    summary:
      "A$349/month concierge tier combining The Code with monthly Sila Focus delivery and quarterly 1:1 check-ins.",
    positioning: "Concierge tier",
    duration: "Monthly or annual",
    cadence: "Monthly product delivery + quarterly call + digital continuity",
    focus: ["Focus support", "General wellbeing", "Cognitive resilience"],
    outcomes: [
      "Consistent product adherence",
      "Direct practitioner accountability",
      "Higher long-term retention and outcomes",
    ],
  },
  {
    slug: "founding-member",
    name: "Founding 100",
    summary:
      "A capped founder pathway currently held behind a release flag until legal, fulfilment, and member operations are ready.",
    positioning: "Founder waitlist",
    duration: "Release-gated",
    cadence: "Waitlist-first until enabled",
    focus: ["Retention", "Community identity", "Confirmed founder privileges"],
    outcomes: [
      "Permanent member status",
      "Lifetime access to future benefits",
      "Founder-tier recognition",
    ],
  },
  {
    slug: "executive-performance-track",
    name: "Inner Circle",
    summary:
      "A$25,000/year invitation-only private advisory with the founder. Bespoke protocols, two private retreats, direct-line access.",
    positioning: "Concierge advisory",
    duration: "12 months, renewable",
    cadence: "Weekly strategic oversight + two retreats/year",
    focus: ["Cognitive stamina", "Stress resilience", "Decision quality"],
    outcomes: [
      "Bespoke 12-month programming",
      "Private retreat participation",
      "Direct founder access",
    ],
  },
];

export function getProtocolBySlug(slug: string) {
  return protocols.find((protocol) => protocol.slug === slug);
}
