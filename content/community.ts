export type ForumGroup = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
};

export type WeeklyTopic = {
  title: string;
  summary: string;
  cadence: "daily" | "weekly";
};

export type CommunitySignal = {
  topic: string;
  group: string;
  mentions: number;
  demand: number;
  intent: string;
};

export type MerchProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "active" | "draft";
  imageUrl: string;
};

export const forumGroups: ForumGroup[] = [
  {
    slug: "peptides",
    title: "Peptides (Education)",
    summary:
      "Member-led, education-only discussion on peptides in the longevity conversation. No medical advice, no sourcing, no product sales — general information only.",
    outcomes: ["General education", "Literature discussion", "Questions to raise with your clinician"],
  },
  {
    slug: "aging",
    title: "Aging",
    summary:
      "Open discussion on healthy aging, prevention, daily habits, and realistic long-term vitality.",
    outcomes: ["Healthy longevity", "Energy", "Mobility"],
  },
  {
    slug: "supplements",
    title: "Supplements",
    summary:
      "Member-reviewed supplementation stacks, interactions, timing, and what appears to work best.",
    outcomes: ["Clarity", "Performance", "Stress support"],
  },
  {
    slug: "psychology",
    title: "Psychology",
    summary:
      "Mental health, behavior change, resilience, and practical strategies for emotional wellbeing.",
    outcomes: ["Mood stability", "Focus", "Habit adherence"],
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    summary:
      "Skin routines, ingredient education, and community-tested approaches for confidence and care.",
    outcomes: ["Skin barrier", "Acne support", "Ageing support"],
  },
  {
    slug: "new-products",
    title: "New Products",
    summary:
      "Early access discussions and feedback loops for new releases and member-requested products.",
    outcomes: ["Product discovery", "Value", "Trust in sourcing"],
  },
];

export const weeklyTopics: WeeklyTopic[] = [
  {
    title: "Sleep teas",
    summary: "Member-tested tea routines, timing windows, and sleep quality outcomes.",
    cadence: "weekly",
  },
  {
    title: "Skin care tips",
    summary: "Simple routines, ingredient pairing, and practical consistency prompts.",
    cadence: "weekly",
  },
  {
    title: "Meditation",
    summary: "Breathwork and meditation approaches for stress downregulation.",
    cadence: "weekly",
  },
  {
    title: "Australian mental health events",
    summary: "Upcoming local events, peer gatherings, and support opportunities.",
    cadence: "weekly",
  },
  {
    title: "Suggested apps",
    summary: "Curated tools for tracking, journaling, sleep, and habit consistency.",
    cadence: "weekly",
  },
  {
    title: "Wellness trips",
    summary: "Retreats and travel ideas for recovery, mindfulness, and community.",
    cadence: "weekly",
  },
  {
    title: "Coaching",
    summary: "Coaching formats and accountability systems that members rate highly.",
    cadence: "weekly",
  },
  {
    title: "Psychology studies",
    summary: "Digestible breakdowns of new findings and what they mean in real life.",
    cadence: "weekly",
  },
  {
    title: "Networking",
    summary: "Connections between members facing similar wellness journeys.",
    cadence: "weekly",
  },
  {
    title: "Exercise styles",
    summary: "Comparisons between different training types and adherence outcomes.",
    cadence: "weekly",
  },
  {
    title: "Fact checking",
    summary: "Clear myth-vs-evidence posts to reduce misinformation in health spaces.",
    cadence: "weekly",
  },
  {
    title: "Ethically sourced goods",
    summary: "Supplier transparency and quality checks that matter to members.",
    cadence: "weekly",
  },
  {
    title: "Giving back",
    summary: "Community volunteering and contribution campaigns with measurable impact.",
    cadence: "weekly",
  },
  {
    title: "Help lines",
    summary: "Up-to-date emergency and support contact pathways when members need help.",
    cadence: "daily",
  },
  {
    title: "Tough Mudder and challenge events",
    summary: "Community challenge event prep, safety, and team participation threads.",
    cadence: "weekly",
  },
];

export const communitySignals: CommunitySignal[] = [
  { topic: "Sleep quality", group: "aging", mentions: 128, demand: 94, intent: "Better deep sleep" },
  { topic: "Skin routine outcomes", group: "skin-care", mentions: 121, demand: 90, intent: "Improve skin clarity" },
  { topic: "Stress regulation", group: "psychology", mentions: 117, demand: 88, intent: "Reduce daily anxiety" },
  { topic: "Stack timing", group: "supplements", mentions: 98, demand: 81, intent: "Increase daytime focus" },
  { topic: "Recovery and peptides", group: "peptides", mentions: 89, demand: 74, intent: "Recover faster" },
  { topic: "New product requests", group: "new-products", mentions: 84, demand: 79, intent: "Access trusted products" },
];

export const initialMerchProducts: MerchProduct[] = [
  {
    id: "sil-merch-001",
    name: "Sila Recovery Tea Blend",
    category: "Tea",
    price: 34.95,
    stock: 84,
    status: "active",
    imageUrl:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sil-merch-002",
    name: "Daily Wellness Journal",
    category: "Accessories",
    price: 22,
    stock: 146,
    status: "active",
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sil-merch-003",
    name: "Calm Ritual Starter Kit",
    category: "Bundles",
    price: 79,
    stock: 34,
    status: "draft",
    imageUrl:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=800&q=80",
  },
];
