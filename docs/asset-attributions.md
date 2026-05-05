# Asset Attributions

## Hero Video

- File: `public/videos/sila-hero-mountain-sunrise.mp4`
- Source: Pexels
- Title: "Silhouette of Person at Sunrise on Mountain Peak"
- Creator: Khanh Hoang Minh 2
- Source URL: https://www.pexels.com/video/silhouette-of-person-at-sunrise-on-mountain-peak-28769576/
- License: Pexels License, free to use

Attribution is not required by the Pexels License, but this record is kept for production provenance and future asset audits.

## Generated Brand Imagery

- Provider: OpenRouter
- Model: `google/gemini-3.1-flash-image-preview`
- Generation workflow: `scripts/generate-openrouter-assets.mjs`
- Prompt manifest: `content/asset-manifest.json`
- Generated on: 2026-04-29
- Review standard: cinematic performance imagery, restrained burnt orange accents, subtle humans only, no medical or exaggerated transformation claims.

Generated Phase 1 files:

- `public/images/brand/sila-hero-poster.png`
- `public/images/brand/sila-about-story.png`
- `public/images/brand/sila-about-mission.png`
- `public/images/journal/sila-pillar-brain.png`
- `public/images/journal/sila-pillar-skin.png`
- `public/images/journal/sila-pillar-body.png`
- `public/images/journal/sila-pillar-longevity.png`
- `public/images/journal/sila-pillar-recovery.png`
- `public/images/shop/sila-shop-hero.png`
- `public/images/shop/sila-focus-primary.png`
- `public/images/shop/sila-focus-ritual.png`
- `public/images/shop/sila-focus-capsule.png`

Each generated image also has a sidecar `.meta.json` file with the asset ID, prompt, model, generation timestamp, and intended usage.
