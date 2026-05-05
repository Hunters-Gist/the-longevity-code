import type { PillarKey } from "@/content/sila";

export const brandAssets = {
  logo: "/images/hero/the sila code logo.png",
  heroPoster: "/images/brand/sila-hero-poster.png",
  aboutStory: "/images/brand/sila-about-story.png",
  aboutMission: "/images/brand/sila-about-mission.png",
  shopHero: "/images/shop/sila-shop-hero.png",
} as const;

export const pillarImageMap: Record<PillarKey, string> = {
  brain: "/images/journal/sila-pillar-brain.png",
  skin: "/images/journal/sila-pillar-skin.png",
  body: "/images/journal/sila-pillar-body.png",
  longevity: "/images/journal/sila-pillar-longevity.png",
  rehab: "/images/journal/sila-pillar-recovery.png",
};

export const blogCoverImages = [
  pillarImageMap.brain,
  pillarImageMap.skin,
  pillarImageMap.body,
  pillarImageMap.longevity,
  pillarImageMap.rehab,
] as const;

export const silaFocusGalleryImages = [
  "/images/shop/sila-focus-primary.png",
  "/images/shop/sila-focus-ritual.png",
  "/images/shop/sila-focus-capsule.png",
] as const;
