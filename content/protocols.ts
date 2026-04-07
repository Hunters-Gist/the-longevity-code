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
    slug: "longevity-baseline",
    name: "The Longevity Baseline",
    summary:
      "Establish your current operating reality through recovery markers, stress load, and foundational habits.",
    positioning: "Assessment-first foundation protocol",
    duration: "4 weeks",
    cadence: "Weekly check-ins",
    focus: ["Sleep architecture", "Stress regulation", "Recovery depth"],
    outcomes: [
      "Clear baseline report",
      "Priority roadmap for next 90 days",
      "Lifestyle correction sequence",
    ],
  },
  {
    slug: "recovery-reset",
    name: "The Recovery Reset",
    summary:
      "Repair accumulated output debt and restore stable energy, mood, and physical readiness.",
    positioning: "Nervous system and fatigue repair protocol",
    duration: "6 weeks",
    cadence: "Twice-weekly coaching touchpoints",
    focus: ["Recovery debt", "Sleep timing", "Inflammatory pressure"],
    outcomes: [
      "Reduced burnout symptoms",
      "Improved daily energy consistency",
      "More resilient movement capacity",
    ],
  },
  {
    slug: "skin-rebuild",
    name: "The Skin Rebuild",
    summary:
      "A systems-first skin strategy focused on quality, confidence, and long-term tissue health.",
    positioning: "Skin quality and anti-aging protocol",
    duration: "8 weeks",
    cadence: "Weekly implementation reviews",
    focus: ["Barrier integrity", "Inflammation control", "Collagen support"],
    outcomes: [
      "Visible texture and tone improvements",
      "Reduced irritation and flare cycles",
      "Long-term anti-aging framework",
    ],
  },
  {
    slug: "mental-edge",
    name: "The Mental Edge",
    summary:
      "Build steadier focus, cognitive stamina, and better stress response under pressure.",
    positioning: "Cognitive clarity protocol",
    duration: "6 weeks",
    cadence: "Weekly optimization sprint",
    focus: ["Attention quality", "Stress threshold", "Decision fatigue"],
    outcomes: [
      "Sharper deep-work windows",
      "Lower cognitive drag",
      "More stable emotional range",
    ],
  },
  {
    slug: "full-spectrum",
    name: "The Full Spectrum",
    summary:
      "A complete body-mind-skin optimization architecture for adults playing the long game.",
    positioning: "Comprehensive premium protocol",
    duration: "12 weeks",
    cadence: "White-glove strategic guidance",
    focus: ["Whole-system optimization", "Compounding habits", "Health runway"],
    outcomes: [
      "Integrated personal protocol stack",
      "Quarterly progression roadmap",
      "Membership-ready long-term plan",
    ],
  },
];

export function getProtocolBySlug(slug: string) {
  return protocols.find((protocol) => protocol.slug === slug);
}
