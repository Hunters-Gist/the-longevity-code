export const brandTheme = {
  colors: {
    obsidian: "#0D0F12",
    deepCharcoal: "#151922",
    graphite: "#232833",
    stone: "#D8D5CF",
    mist: "#EAECEF",
    boneWhite: "#F7F5F0",
    softSageGlow: "#A8C3A0",
    mutedTeal: "#6FC7C0",
    paleGold: "#CDBA7C",
  },
  radii: {
    card: "24px",
    button: "999px",
  },
  spacing: {
    sectionY: "7rem",
    sectionYMobile: "4.5rem",
  },
} as const;

export type BrandTheme = typeof brandTheme;
