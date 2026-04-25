export type PillarKey = "brain" | "skin" | "body" | "longevity" | "rehab";

export type Pillar = {
  key: PillarKey;
  name: string;
  focus: string;
  consumerLanguage: string;
  accent: string;
  href: string;
};

export type AssessmentQuestion = {
  id: number;
  pillar: PillarKey;
  text: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: PillarKey;
  /** Human-readable date shown in the UI. */
  publishedOn: string;
  /** ISO 8601 date used in structured data and machine-readable metadata. */
  publishedAt: string;
  /** ISO 8601 date used for Article schema `dateModified`. */
  updatedAt: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const SILA_HEALTH_DISCLAIMER =
  "This product is not intended to diagnose, treat, cure or prevent any disease. Always read the label and follow directions for use. If symptoms persist, consult your healthcare professional. Supplements should not replace a balanced diet. The Sila Code Pty Ltd. All rights reserved.";

export const SILA_PILLARS: Pillar[] = [
  {
    key: "brain",
    name: "Brain",
    focus: "Cognitive function, focus, neuroplasticity",
    consumerLanguage: "Think clearer, stay sharp",
    accent: "#2D3A31",
    href: "/the-code#brain",
  },
  {
    key: "skin",
    name: "Skin",
    focus: "Anti-ageing, cellular renewal",
    consumerLanguage: "Glow from the inside",
    accent: "#DCCFC2",
    href: "/the-code#skin",
  },
  {
    key: "body",
    name: "Body",
    focus: "Physical recovery, energy, gut health",
    consumerLanguage: "Rebuild and recover",
    accent: "#8C9A84",
    href: "/the-code#body",
  },
  {
    key: "longevity",
    name: "Longevity",
    focus: "Prevention, cellular health, lifespan",
    consumerLanguage: "Live longer, live better",
    accent: "#5F6F5F",
    href: "/the-code#longevity",
  },
  {
    key: "rehab",
    name: "Recovery",
    focus: "Mental resilience, habit recalibration",
    consumerLanguage: "Reset your path",
    accent: "#C27B66",
    href: "/the-code#rehab",
  },
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    pillar: "brain",
    text: "I can maintain focus on a single task for 30+ minutes without distraction.",
  },
  {
    id: 2,
    pillar: "brain",
    text: "I feel mentally sharp and clear-headed most days.",
  },
  {
    id: 3,
    pillar: "brain",
    text: "I rarely experience brain fog or difficulty concentrating.",
  },
  {
    id: 4,
    pillar: "skin",
    text: "I actively invest in my skin health beyond basic hygiene.",
  },
  {
    id: 5,
    pillar: "skin",
    text: "I feel confident about how my skin looks and feels.",
  },
  {
    id: 6,
    pillar: "skin",
    text: "I understand the connection between what I consume and my skin health.",
  },
  {
    id: 7,
    pillar: "body",
    text: "I recover quickly from physical exertion or illness.",
  },
  {
    id: 8,
    pillar: "body",
    text: "My energy levels are consistent throughout the day.",
  },
  {
    id: 9,
    pillar: "body",
    text: "I prioritise movement and physical health daily.",
  },
  {
    id: 10,
    pillar: "longevity",
    text: "I make daily choices with my long-term health in mind.",
  },
  {
    id: 11,
    pillar: "longevity",
    text: "I understand and actively support my cellular health.",
  },
  {
    id: 12,
    pillar: "longevity",
    text: "I have a proactive approach to preventing health issues.",
  },
  {
    id: 13,
    pillar: "rehab",
    text: "I have healthy coping mechanisms for stress and adversity.",
  },
  {
    id: 14,
    pillar: "rehab",
    text: "I feel mentally resilient when facing setbacks.",
  },
  {
    id: 15,
    pillar: "rehab",
    text: "I have broken free from habits or patterns that no longer serve me.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-the-sila-code",
    title: "What is The Sila Code? The Psychology Behind Our Five Pillars",
    excerpt:
      "A practical framework for cognitive wellness that blends behavioural psychology, supplementation, and everyday execution.",
    category: "rehab",
    publishedOn: "April 2026",
    publishedAt: "2026-04-01",
    updatedAt: "2026-04-20",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why we built The Sila Code",
    body: "The Sila Code was designed for people who want structure, not noise. We combine psychology-led behavioural principles with carefully selected wellness tools to support consistent progress across five key areas of wellbeing.",
      },
      {
        heading: "Why five pillars",
        body: "Brain, Skin, Body, Longevity, and Recovery reflect how modern wellbeing actually behaves. When one pillar is neglected, performance in the others often drops. The framework helps users identify the first lever to pull, then build momentum from there.",
      },
    ],
  },
  {
    slug: "l-theanine-and-calm-focus",
    title: "L-Theanine: The Science of Calm Focus",
    excerpt:
      "How one ingredient supports alpha brainwave activity for clearer focus without the overstimulated crash.",
    category: "brain",
    publishedOn: "April 2026",
    publishedAt: "2026-04-05",
    updatedAt: "2026-04-20",
    readTime: "6 min read",
    sections: [
      {
        heading: "Calm clarity, not blunt sedation",
        body: "L-Theanine is widely studied for supporting a calm, focused state. It is often used to reduce overstimulation while preserving attention, making it a valuable option for demanding cognitive days.",
      },
      {
        heading: "How we use it in Sila Focus",
        body: "Our formulation uses L-Theanine to support stress response and mental clarity in combination with cholinergic ingredients, creating a stack designed for sustained concentration and composure.",
      },
    ],
  },
  {
    slug: "why-citicoline",
    title: "Why We Chose Citicoline Over Common Choline Sources",
    excerpt:
      "A look at bioavailability, brain support pathways, and why ingredient quality matters more than label hype.",
    category: "brain",
    publishedOn: "April 2026",
    publishedAt: "2026-04-08",
    updatedAt: "2026-04-20",
    readTime: "8 min read",
    sections: [
      {
        heading: "Not all choline sources are equal",
        body: "Citicoline (CDP-Choline) provides both choline and cytidine, supporting membrane integrity and cognitive energy pathways. That dual-pathway profile made it a strategic choice for our focus-first stack.",
      },
      {
        heading: "Formulation quality as a non-negotiable",
        body: "We built Sila Focus around clinically studied ingredients and practical dosing logic. The goal is not trend-driven complexity, but a clear formulation that supports everyday performance and resilience.",
      },
    ],
  },
  {
    slug: "how-to-read-your-sila-score",
    title: "The Sila Assessment: How to Read Your Score",
    excerpt:
      "What your pillar-by-pillar profile means, and how to turn your lowest score into your strongest growth lever.",
    category: "longevity",
    publishedOn: "April 2026",
    publishedAt: "2026-04-12",
    updatedAt: "2026-04-20",
    readTime: "5 min read",
    sections: [
      {
        heading: "Your score is a starting point",
        body: "The Sila Score identifies where your current routines are strongest and where support is needed. It is designed to guide priorities, not label identity.",
      },
      {
        heading: "How to use it",
        body: "Start with the lowest pillar first. Apply one clear change for two weeks, then reassess. The process is intentionally simple: diagnose, focus, execute, and compound.",
      },
    ],
  },
  {
    slug: "five-daily-habits-behavioural-psychology",
    title: "5 Daily Habits Backed by Behavioural Psychology",
    excerpt:
      "Small, repeatable actions that improve consistency, reduce decision fatigue, and support long-term cognitive performance.",
    category: "rehab",
    publishedOn: "April 2026",
    publishedAt: "2026-04-15",
    updatedAt: "2026-04-20",
    readTime: "6 min read",
    sections: [
      {
        heading: "Environment beats willpower",
        body: "Behavioural psychology consistently shows that context shapes action. Build low-friction environments for sleep, movement, and focused work before relying on motivation.",
      },
      {
        heading: "Consistency over intensity",
        body: "High performance comes from repeatable routines. A small routine completed daily usually outperforms occasional extreme efforts. Sustainable habits support resilience and longevity.",
      },
    ],
  },
];

export const PILLAR_INSIGHTS: Record<PillarKey, string> = {
  brain: "Your Brain score suggests room for cognitive optimisation and steadier focus habits.",
  skin: "Your Skin score suggests an opportunity to better support renewal through internal and external routines.",
  body: "Your Body score suggests recovery, movement, and energy consistency should be prioritised.",
  longevity:
    "Your Longevity score suggests stronger long-term prevention habits could improve your baseline.",
  rehab:
    "Your Recovery score suggests resilience rituals and stress recovery systems may need reinforcement.",
};
