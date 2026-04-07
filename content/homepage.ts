import { BRAND_NAME } from "@/content/brand";

export type Pillar = {
  title: string;
  copy: string;
  icon: "pulse" | "shield" | "spark" | "mind";
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
    heading: "Built for the long game.",
    subheading:
      "Precision wellness for thoughtful adults who want to age better, recover smarter, and think clearer.",
    supporting:
      "Restore deeply. Live steadily. Age well. A refined longevity system built around assessment-first protocols and measurable progression.",
    ctas: [
      { label: "Start Your Assessment", href: "#" },
      { label: "Explore Protocols", href: "#protocols" },
    ],
  },
  pillars: [
    {
      title: "Prevention & Longevity",
      copy: "Build long-term vitality by reducing future risk and reinforcing metabolic resilience.",
      icon: "shield",
    },
    {
      title: "Body Health & Recovery",
      copy: "Recover faster, move cleaner, and protect your physical output with precision support.",
      icon: "pulse",
    },
    {
      title: "Skin & Anti-Aging",
      copy: "Support cellular repair and skin integrity with modern longevity-driven skin protocols.",
      icon: "spark",
    },
    {
      title: "Brain & Psychology",
      copy: "Sharpen focus, regulate stress load, and build mental clarity for resilient daily living.",
      icon: "mind",
    },
  ] as Pillar[],
  protocols: [
    {
      name: "The Longevity Baseline",
      summary: "Establish core biomarkers, recovery score, and next-step strategy.",
      cta: "Start Assessment",
    },
    {
      name: "The Recovery Reset",
      summary: "Repair accumulated fatigue, improve sleep depth, and restore daily output.",
      cta: "Learn More",
    },
    {
      name: "The Skin Rebuild",
      summary: "Support collagen architecture, skin quality, and visible aging confidence.",
      cta: "Learn More",
    },
    {
      name: "The Mental Edge",
      summary: "Upgrade cognitive stamina, emotional regulation, and strategic focus.",
      cta: "Learn More",
    },
    {
      name: "The Full Spectrum",
      summary: "A whole-system optimization protocol for serious long-horizon wellbeing.",
      cta: "Unlock Your Baseline",
    },
  ] as Protocol[],
  process: [
    {
      title: "Start With Assessment",
      description:
        "Map current recovery, energy patterns, and longevity priorities through our intake.",
    },
    {
      title: "Understand Your Baseline",
      description:
        "Get a clear view of where your body and mind are now, and where they can go next.",
    },
    {
      title: "Receive Your Protocol",
      description:
        "Follow a structured plan built around your goals across body, skin, and cognitive health.",
    },
    {
      title: "Track Your Progress",
      description:
        "Refine over time with guided adjustments that keep results compounding.",
    },
  ] as ProcessStep[],
  mission: {
    heading: "Age with intention. Restore with intelligence.",
    body: `${BRAND_NAME} exists for people who treat health as strategy. We focus on resilient energy, clean recovery, cognitive steadiness, and whole-system optimization. This is not symptom chasing. It is precision wellness built for your future runway.`,
    callout: "Restore the system, not just the symptoms.",
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
    heading: "Sharper mind. Stronger body. Longer runway.",
    subheading:
      "Stay close to Vitalis Labs for protocol updates, education drops, and private release access.",
    emailPlaceholder: "Enter your email",
    primary: "Join the List",
    secondary: "Start Your Assessment",
  },
  footer: {
    legal: ["Privacy", "Terms", "Disclaimer"],
    social: ["Instagram", "LinkedIn", "YouTube"],
  },
} as const;
