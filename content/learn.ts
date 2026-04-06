export type LearnCategory = {
  slug: string;
  name: string;
  description: string;
};

export type LearnArticle = {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  readTime: string;
  publishedOn: string;
  image: string;
  sections: { heading: string; body: string }[];
};

export const learnCategories: LearnCategory[] = [
  {
    slug: "longevity-strategy",
    name: "Longevity Strategy",
    description: "Frameworks for long-horizon health and wellbeing planning.",
  },
  {
    slug: "recovery-science",
    name: "Recovery Science",
    description: "Evidence-informed guidance for repair, energy, and resilience.",
  },
  {
    slug: "skin-longevity",
    name: "Skin + Longevity",
    description: "Skin health through the lens of systemic resilience and aging.",
  },
];

export const learnArticles: LearnArticle[] = [
  {
    slug: "modern-longevity-framework",
    title: "How Thoughtful Adults Can Think About Longevity",
    excerpt:
      "Why prevention beats correction and how to build a realistic long-term framework.",
    categorySlug: "longevity-strategy",
    readTime: "7 min read",
    publishedOn: "April 2026",
    image: "/images/journal/longevity-strategy.svg",
    sections: [
      {
        heading: "Shift From Tactics to Architecture",
        body: "Most people chase tactics. Better outcomes come from architecture. A longevity architecture prioritizes sleep depth, stress regulation, movement quality, and metabolic resilience in a sequence that compounds over decades.",
      },
      {
        heading: "Measure What Matters",
        body: "If you cannot see your recovery profile, decision quality, and output consistency over time, you are guessing. Baseline assessment turns optimization from opinion into a strategic process.",
      },
    ],
  },
  {
    slug: "recovery-debt-burnout-cost",
    title: "Recovery Debt, Burnout, and the Cost of Chronic Output",
    excerpt:
      "Recognize hidden fatigue markers and close the recovery gap before it compounds.",
    categorySlug: "recovery-science",
    readTime: "6 min read",
    publishedOn: "April 2026",
    image: "/images/journal/recovery-debt.svg",
    sections: [
      {
        heading: "The Hidden Tax",
        body: "Chronic output without deliberate restoration creates recovery debt. It quietly reduces cognitive precision, emotional regulation, and physical readiness before obvious symptoms appear.",
      },
      {
        heading: "Closing the Gap",
        body: "A repair-first protocol improves nervous system flexibility and sleep architecture, then rebuilds movement and workload tolerance. The goal is resilient wellbeing, not temporary relief.",
      },
    ],
  },
  {
    slug: "skin-aging-beyond-surface-fixes",
    title: "Skin Aging Beyond Surface-Level Fixes",
    excerpt:
      "A systems view of skin health, stress, inflammation, and repair capacity.",
    categorySlug: "skin-longevity",
    readTime: "8 min read",
    publishedOn: "April 2026",
    image: "/images/journal/skin-aging.svg",
    sections: [
      {
        heading: "Skin Is a Signal",
        body: "Skin quality reflects deeper system behavior: stress chemistry, sleep quality, inflammatory load, and nutrient status. Lasting changes require more than topical products alone.",
      },
      {
        heading: "Build the Rebuild Loop",
        body: "Start with barrier support and inflammation control, then layer strategic interventions tied to lifestyle and recovery. This creates visible results that can be maintained.",
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return learnCategories.find((category) => category.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return learnArticles.find((article) => article.slug === slug);
}
