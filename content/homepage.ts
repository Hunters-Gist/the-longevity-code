import { BRAND_MEANING, BRAND_NAME } from "@/content/brand";

export type Pillar = {
  title: string;
  copy: string;
  icon: "pulse" | "shield" | "spark" | "mind" | "rehab";
};

export type Protocol = {
  name: string;
  summary: string;
  cta: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type JournalItem = {
  title: string;
  excerpt: string;
  category: string;
  image: string;
};

export const homeContent = {
  nav: [
    "Protocols",
    "Pillars",
    "How It Works",
    "Journal",
    "About",
  ],
  hero: {
    eyebrow: BRAND_NAME,
    heading: "Where discipline becomes identity.",
    subheading:
      "A high-performance health, behaviour, and longevity system for ambitious men and women who want better energy, discipline, recovery, appearance, and long-term performance.",
    supporting:
      "Start with the 15-question Sila Assessment, then choose the education, membership, and product pathway that fits your current performance goals.",
    ctas: [
      { label: "Take the Sila Assessment", href: "/assessment" },
      { label: "Join Membership", href: "/subscribe" },
      { label: "Shop Products", href: "/shop" },
    ],
  },
  pillars: [
    {
      title: "Brain",
      copy: "Think clearer and stay sharp with structured support for focus, mood stability, and neuroplasticity.",
      icon: "mind",
    },
    {
      title: "Skin",
      copy: "Support cellular renewal and collagen integrity so skin health improves from the inside out.",
      icon: "spark",
    },
    {
      title: "Body",
      copy: "Rebuild and recover with better stress adaptation, energy consistency, and physical readiness.",
      icon: "pulse",
    },
    {
      title: "Longevity",
      copy: "Live longer, live better with prevention-focused habits, cellular support, and clear progression.",
      icon: "shield",
    },
    {
      title: "Recovery",
      copy: "Reset your path with practical mental resilience education and a recovery-conscious support ecosystem.",
      icon: "rehab",
    },
  ] as Pillar[],
  protocols: [
    {
      name: "Community",
      summary: "Free access to the Sila Community on Skool, weekly education, and the Sila Assessment.",
      cta: "Join Free",
    },
    {
      name: "The Code",
      summary: "A$149/month for the full course library, monthly masterclasses, and member-only practice tools.",
      cta: "View Tier",
    },
    {
      name: "The Code + Capsule",
      summary: "A$349/month for digital access, monthly Sila Focus delivery, and quarterly 1:1 concierge support.",
      cta: "View Tier",
    },
    {
      name: "Founding 100",
      summary: "A capped lifetime seat for future-ready members. Currently waitlist-only unless the Founding 100 release flag is enabled.",
      cta: "Join Waitlist",
    },
    {
      name: "Inner Circle",
      summary: "A$25,000/year. 12-month private advisory and two retreats. By invitation only.",
      cta: "Request Invite",
    },
  ] as Protocol[],
  process: [
    {
      title: "Take the Sila Assessment",
      description:
        "Complete a 15-question educational self-reflection flow across the five Sila pillars.",
    },
    {
      title: "Receive Your Sila Score",
      description:
        "Get a clear score across all five Sila pillars with strengths, gaps, and immediate priorities.",
    },
    {
      title: "Choose Your Pathway",
      description:
        "Prioritise the assessment first, then choose membership education or products based on your goals.",
    },
    {
      title: "Track and Compound",
      description:
        "Use monthly check-ins and guided content to sustain momentum and compound long-term outcomes.",
    },
  ] as ProcessStep[],
  mission: {
    heading: "A structured approach to performance.",
    body: `${BRAND_NAME} translates psychological principles into refined, repeatable systems designed for real-world application. ${BRAND_MEANING} This is where insight becomes disciplined practice and behaviour becomes sustainable over time.`,
    callout: "This is not motivation. It is structure. It is practice. It is The Sila Code.",
  },
  journal: [] as JournalItem[],
  finalCta: {
    heading: "Start your Sila journey.",
    subheading:
      "Get your Sila Score, unlock the right tier, and build measurable momentum in brain, body, and longevity.",
    emailPlaceholder: "Enter your email",
    primary: "Join the Community",
    secondary: "Take the Assessment",
  },
  footer: {
    legal: ["Privacy", "Terms", "Disclaimer"],
    social: ["Instagram", "LinkedIn", "YouTube"],
  },
} as const;
