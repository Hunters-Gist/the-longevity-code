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
    slug: "brand-architecture",
    name: "Brand Architecture",
    description: "How The Sila Code model is structured and why the five-pillar system matters.",
  },
  {
    slug: "product-stack",
    name: "Product Stack",
    description: "The nootropic formulation logic, audience fit, and value proposition design.",
  },
  {
    slug: "launch-operations",
    name: "Launch Operations",
    description: "Funnel, subscriptions, compliance guardrails, and the 8-week execution sprint.",
  },
];

export const learnArticles: LearnArticle[] = [
  {
    slug: "the-sila-code-brand-architecture",
    title: "The Sila Code Brand Architecture",
    excerpt:
      "How 'Sila' (strength in Russian) anchors a five-pillar wellness system across product, education, and community.",
    categorySlug: "brand-architecture",
    readTime: "8 min read",
    publishedOn: "April 2026",
    image: "/images/brand/sila-about-story.png",
    sections: [
      {
        heading: "From Name to Philosophy",
        body: "Sila means strength in Russian, and that meaning is not cosmetic. It defines a philosophy of resilient health systems that hold under pressure and improve over time. The brand is positioned as a methodology, not just a capsule.",
      },
      {
        heading: "The Five Pillars",
        body: "Every recommendation maps to Brain, Skin, Body, Longevity, or Recovery. This creates a coherent framework for product design, educational content, and customer journeys rather than disconnected wellness messaging.",
      },
    ],
  },
  {
    slug: "psychology-informed-nootropic-stack",
    title: "The Psychology-Informed Nootropic Stack",
    excerpt:
      "A clear breakdown of the core capsule formula and how each ingredient maps to cognitive and behavioral outcomes.",
    categorySlug: "product-stack",
    readTime: "7 min read",
    publishedOn: "April 2026",
    image: "/images/shop/sila-focus-primary.png",
    sections: [
      {
        heading: "Ingredient Logic",
        body: "The stack combines L-Theanine for calm clarity, Citicoline and Alpha-GPC for acetylcholine and cognitive drive, and saffron extract for mood support. Together, it targets focus, stability, and resilience with a systems view.",
      },
      {
        heading: "Dual Audience Positioning",
        body: "Messaging supports two high-intent audiences: high-performance professionals seeking sustained mental stamina, and recovery-oriented users seeking cognitive rebuilding and emotional steadiness through structured, compliant wellness support.",
      },
    ],
  },
  {
    slug: "the-8-week-launch-sprint",
    title: "The 8-Week Launch Sprint",
    excerpt:
      "How digital funnel, subscription mechanics, and regulatory checkpoints are sequenced for commercial launch.",
    categorySlug: "launch-operations",
    readTime: "9 min read",
    publishedOn: "April 2026",
    image: "/images/brand/sila-hero-poster.png",
    sections: [
      {
        heading: "Funnel Before Scale",
        body: "The model starts with a free Sila Assessment, then routes users into personalised results and a tiered subscription path. This creates segmentation, authority, and conversion without relying only on product-first traffic.",
      },
      {
        heading: "Compliance as Strategy",
        body: "Australian guardrails shape every claim. The launch plan emphasizes compliant language, evidence readiness, and careful boundaries between wellness education and therapeutic claims.",
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
