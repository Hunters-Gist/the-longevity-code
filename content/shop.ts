export type ShopOfferingCategory =
  | "supplement"
  | "course"
  | "digital"
  | "recovery"
  | "merch"
  | "bundle";

export type ShopOfferingStatus = "available" | "coming-soon" | "concept";

export type ShopOffering = {
  slug: string;
  name: string;
  category: ShopOfferingCategory;
  status: ShopOfferingStatus;
  priceLabel: string;
  eyebrow: string;
  summary: string;
  description: string;
  highlights: string[];
  cta: {
    label: string;
    href: string;
  };
};

export const shopOfferings: ShopOffering[] = [
  {
    slug: "sila-focus",
    name: "Sila Focus",
    category: "supplement",
    status: "available",
    priceLabel: "A$89",
    eyebrow: "Nootropic Capsule",
    summary: "Calm clarity and cognitive stamina for demanding days.",
    description:
      "A daily wellness capsule featuring L-Theanine, Citicoline, Alpha-GPC, and saffron extract for general focus and wellbeing support.",
    highlights: ["60 capsules", "30-day supply", "Available now"],
    cta: { label: "View Product", href: "/shop/sila-focus" },
  },
  {
    slug: "foundation-reset-course",
    name: "Foundation Reset Course",
    category: "course",
    status: "coming-soon",
    priceLabel: "Member access",
    eyebrow: "Digital Course",
    summary: "A structured 30-day rebuild for routine, recovery, and standards.",
    description:
      "A practical education pathway for rebuilding daily defaults across sleep, movement, planning, nutrition, and personal operating systems.",
    highlights: ["30-day structure", "Workbook prompts", "Member library"],
    cta: { label: "Join Membership", href: "/subscribe" },
  },
  {
    slug: "recovery-tea-blend",
    name: "Sila Recovery Tea Blend",
    category: "recovery",
    status: "concept",
    priceLabel: "TBC",
    eyebrow: "Evening Ritual",
    summary: "A calm evening blend for better routine design.",
    description:
      "A caffeine-free ritual product concept built around evening consistency, sensory wind-down, and recovery-supportive habits.",
    highlights: ["Caffeine-free concept", "Evening routine", "Recovery ritual"],
    cta: { label: "Register Interest", href: "/contact" },
  },
  {
    slug: "daily-wellness-journal",
    name: "Daily Wellness Journal",
    category: "merch",
    status: "concept",
    priceLabel: "TBC",
    eyebrow: "Merch / Tools",
    summary: "A premium paper system for tracking the five Sila pillars.",
    description:
      "A physical journal concept for weekly reviews, habit scoring, pillar notes, sleep tracking, and reflection without app fatigue.",
    highlights: ["Pillar tracking", "Weekly reviews", "Premium stationery"],
    cta: { label: "Register Interest", href: "/contact" },
  },
  {
    slug: "skin-sleep-protocol",
    name: "Skin + Sleep Protocol",
    category: "digital",
    status: "coming-soon",
    priceLabel: "Digital guide",
    eyebrow: "Protocol Guide",
    summary: "A practical guide to the routines that show up on your face.",
    description:
      "An educational protocol covering sleep timing, stress regulation, hydration, nutrition basics, and daily consistency for appearance-supportive living.",
    highlights: ["PDF guide", "Routine checklist", "Compliance-safe education"],
    cta: { label: "Join Membership", href: "/subscribe" },
  },
  {
    slug: "calm-ritual-starter-kit",
    name: "Calm Ritual Starter Kit",
    category: "bundle",
    status: "concept",
    priceLabel: "TBC",
    eyebrow: "Wellbeing Bundle",
    summary: "A curated entry kit for better evenings and nervous-system downshift.",
    description:
      "A future ecommerce bundle concept combining simple ritual tools, journal prompts, and education for consistent recovery behaviours.",
    highlights: ["Ritual tools", "Prompt cards", "Recovery education"],
    cta: { label: "Register Interest", href: "/contact" },
  },
  {
    slug: "cognitive-performance-masterclass",
    name: "Cognitive Performance Masterclass",
    category: "course",
    status: "coming-soon",
    priceLabel: "Member access",
    eyebrow: "Masterclass",
    summary: "Focus, decision quality, and deep-work systems without hype.",
    description:
      "A course concept for high-performance professionals who need sustainable attention, reduced friction, and repeatable execution.",
    highlights: ["Video lessons", "Deep-work templates", "Member Q&A"],
    cta: { label: "Join Membership", href: "/subscribe" },
  },
  {
    slug: "longevity-starter-kit",
    name: "Longevity Starter Kit",
    category: "bundle",
    status: "concept",
    priceLabel: "TBC",
    eyebrow: "Starter Kit",
    summary: "A premium introduction to prevention-focused daily standards.",
    description:
      "A future kit concept pairing educational cards, tracking templates, and simple lifestyle tools for people beginning a longevity practice.",
    highlights: ["Education cards", "Tracking templates", "Habit system"],
    cta: { label: "Register Interest", href: "/contact" },
  },
  {
    slug: "recovery-tools-bundle",
    name: "Recovery Tools Bundle",
    category: "recovery",
    status: "concept",
    priceLabel: "TBC",
    eyebrow: "Recovery Goods",
    summary: "A tactile bundle for mobility, breathwork, and nightly reset.",
    description:
      "A future ecommerce product concept for simple recovery tools that support consistency before intensity.",
    highlights: ["Mobility tools", "Breath prompts", "Sleep prep"],
    cta: { label: "Register Interest", href: "/contact" },
  },
  {
    slug: "sila-apparel-capsule",
    name: "Sila Apparel Capsule",
    category: "merch",
    status: "concept",
    priceLabel: "TBC",
    eyebrow: "Merch Capsule",
    summary: "Restrained premium apparel for members and community events.",
    description:
      "A minimal apparel concept for training, travel, and retreat environments with quiet branding and elevated materials.",
    highlights: ["Member merch", "Retreat-ready", "Minimal branding"],
    cta: { label: "Register Interest", href: "/contact" },
  },
];

export const shopCategoryLabels: Record<ShopOfferingCategory, string> = {
  supplement: "Supplement",
  course: "Course",
  digital: "Digital",
  recovery: "Recovery",
  merch: "Merch",
  bundle: "Bundle",
};

export const shopStatusLabels: Record<ShopOfferingStatus, string> = {
  available: "Available",
  "coming-soon": "Coming soon",
  concept: "Concept",
};
