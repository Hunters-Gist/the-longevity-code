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
    positioning: "Lead magnet and segmentation engine",
    duration: "Single session (10-12 min)",
    cadence: "Run at onboarding and revisit quarterly",
    focus: ["Pillar scoring", "Stress profile", "Personalized recommendations"],
    outcomes: [
      "Personalized Sila Score",
      "Pillar-specific next steps",
      "Entry recommendation into the right tier",
    ],
  },
  {
    slug: "the-code-digital",
    name: "The Code (Digital)",
    summary:
      "Core digital membership with course modules, monthly masterclasses, and a community-led implementation rhythm.",
    positioning: "Paid digital education tier",
    duration: "Month-to-month",
    cadence: "Weekly content and monthly masterclass",
    focus: ["Behavior design", "Pillar education", "Consistency systems"],
    outcomes: [
      "Clear weekly execution plan",
      "Higher adherence to wellness behaviors",
      "Compounding progress through structure",
    ],
  },
  {
    slug: "code-plus-capsule",
    name: "The Code + Capsule",
    summary:
      "The core commercial tier combining digital support with monthly supply of The Sila Code nootropic stack.",
    positioning: "Subscription bundle",
    duration: "Month-to-month",
    cadence: "Monthly auto-ship + digital continuity",
    focus: ["Focus support", "Mood stability", "Cognitive resilience"],
    outcomes: [
      "Consistent product adherence",
      "Better day-to-day cognitive performance",
      "Higher long-term retention and outcomes",
    ],
  },
  {
    slug: "founding-member",
    name: "Founding Member",
    summary:
      "Launch-only membership with locked pricing, early access, and priority recognition inside the ecosystem.",
    positioning: "Urgency and loyalty tier",
    duration: "Locked lifetime rate",
    cadence: "Continuous membership with launch privileges",
    focus: ["Retention", "Community identity", "Early access"],
    outcomes: [
      "High-value loyal customer cohort",
      "Lower churn via identity anchoring",
      "Higher referral intent",
    ],
  },
  {
    slug: "executive-performance-track",
    name: "Executive Performance Track",
    summary:
      "A premium pathway for high-output professionals who need sharper focus, steadier mood, and sustained performance under pressure.",
    positioning: "High-touch premium pathway",
    duration: "12-week sprints",
    cadence: "Weekly strategic oversight",
    focus: ["Cognitive stamina", "Stress resilience", "Decision quality"],
    outcomes: [
      "Improved high-pressure performance",
      "More stable mental bandwidth",
      "Clear executive-level wellbeing roadmap",
    ],
  },
];

export function getProtocolBySlug(slug: string) {
  return protocols.find((protocol) => protocol.slug === slug);
}
