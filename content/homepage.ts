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
    heading: "Strength, coded for modern wellness.",
    subheading:
      "A psychology-backed wellness platform blending nootropics, digital coaching, and measurable behavior change.",
    supporting:
      "Start with the 15-question Sila Assessment, receive your Sila Score, and enter the exact pathway for brain, body, skin, longevity, and resilience.",
    ctas: [
      { label: "Take the Sila Assessment", href: "/assessment" },
      { label: "Explore Programs", href: "/protocols" },
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
      title: "Rehab",
      copy: "Rewire your path with practical mental resilience education and a recovery-conscious support ecosystem.",
      icon: "rehab",
    },
  ] as Pillar[],
  protocols: [
    {
      name: "Community",
      summary: "Free access to weekly education, pillar-based guidance, and the Sila Assessment.",
      cta: "Join Free",
    },
    {
      name: "The Code Digital",
      summary: "Full digital course library, monthly masterclasses, and practical implementation tools.",
      cta: "View Tier",
    },
    {
      name: "Code + Capsule",
      summary: "Digital access plus monthly delivery of The Sila Code nootropic capsule stack.",
      cta: "View Tier",
    },
    {
      name: "Founding Member",
      summary: "Launch-only locked pricing, early product access, and long-term loyalty advantages.",
      cta: "View Tier",
    },
    {
      name: "Executive Track",
      summary: "A high-touch pathway for performance leaders requiring deeper strategy and oversight.",
      cta: "Apply",
    },
  ] as Protocol[],
  process: [
    {
      title: "Take the Sila Assessment",
      description:
        "Complete a 15-question onboarding flow based on validated stress and wellness frameworks.",
    },
    {
      title: "Receive Your Sila Score",
      description:
        "Get a clear score across all five Sila pillars with strengths, gaps, and immediate priorities.",
    },
    {
      title: "Choose Your Pathway",
      description:
        "Enter Community, The Code Digital, Code + Capsule, or Founding Member based on your needs.",
    },
    {
      title: "Track and Compound",
      description:
        "Use monthly check-ins and guided content to sustain momentum and compound long-term outcomes.",
    },
  ] as ProcessStep[],
  mission: {
    heading: "A system, not just a supplement.",
    body: `${BRAND_NAME} exists for people who treat health as strategy. ${BRAND_MEANING} We focus on resilient energy, clean recovery, cognitive steadiness, and whole-system optimisation. This is not symptom chasing. It is precision wellness built for your future runway.`,
    callout: "Rebuild your baseline. Then raise it.",
  },
  journal: [
    {
      category: "Longevity Strategy",
      title: "How Thoughtful Adults Can Think About Longevity",
      excerpt: "Why prevention beats correction and how to build a realistic long-term framework.",
      image: "/images/journal/longevity-strategy.svg",
    },
    {
      category: "Recovery Science",
      title: "Recovery Debt, Burnout, and the Cost of Chronic Output",
      excerpt: "Recognize hidden fatigue markers and close the recovery gap before it compounds.",
      image: "/images/journal/recovery-debt.svg",
    },
    {
      category: "Skin + Longevity",
      title: "Skin Aging Beyond Surface-Level Fixes",
      excerpt: "A systems view of skin health, stress, inflammation, and repair capacity.",
      image: "/images/journal/skin-aging.svg",
    },
  ] as JournalItem[],
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
