# Sila Brand Assets Production Update Design

## Context

The Sila Code site is a live production website. The current header and footer brand mark are text-only, so the supplied logo at `public/images/hero/the sila code logo.png` is not being used in the main UI. The site also contains several generic stock-style image references across the homepage, journal, About page, shop, and article views.

The approved direction is a phased production update:

- Restore the supplied Sila logo in the site chrome.
- Add burnt orange tastefully throughout the existing colour system.
- Replace the most visible and generic imagery first.
- Prepare a repeatable OpenRouter asset prompt and manifest workflow for the complete production asset set.

## Approved Visual Direction

The imagery direction is **cinematic performance** with **restrained burnt orange UI accents**.

The site should feel like dark clinical luxury: premium, disciplined, scientific, controlled, and future-focused. Burnt orange should add warmth and power without making the site loud or casual.

Use subtle humans only. Approved subject treatment includes silhouettes, back views, hands, movement, recovery moments, retreat environments, and premium lifestyle scenes where faces are not the focus.

Avoid:

- Generic wellness stock-photo imagery.
- Face-led aspirational portraits.
- Medical claims implied through imagery.
- Before-and-after visuals.
- Cheap supplement, gym, biohacker, or influencer aesthetics.
- Overuse of burnt orange.

## Scope

### Phase 1: Production Fix

Phase 1 should make the live site feel coherent and production-ready without attempting a full asset rebuild.

Update these areas:

- `BrandMark`: render `public/images/hero/the sila code logo.png` in header and footer with accessible text and responsive sizing.
- Global colour tokens: introduce a richer burnt orange token, replacing or complementing the current softer terracotta where accents need more strength.
- Homepage hero: keep the cinematic mountain video if it remains on-brand, but replace or repair the poster image reference with a local production asset.
- Journal cards and article hero images: replace generic stock paths with locally generated Sila-branded images mapped to the five pillars.
- About page imagery: replace generic founder/mission stock imagery with brand-safe editorial visuals.
- Shop and product imagery: replace visible generic product/lifestyle images with Sila-aligned generated visuals.
- Asset attribution/provenance: update `docs/asset-attributions.md` for generated assets and retained sourced assets.

### Phase 2: Complete Asset System

Phase 2 should create the full production asset set after Phase 1 is stable.

Prepare a local prompt and manifest system that defines:

- Asset IDs.
- Target routes/components.
- Prompt text.
- Negative prompt rules.
- Aspect ratio and output size.
- Intended filename.
- Generation model/provider metadata.
- Review status.
- Final local file path.

Suggested output locations:

- `public/images/brand/`
- `public/images/hero/`
- `public/images/journal/`
- `public/images/shop/`
- `public/images/social/`

## Colour System

Use a richer burnt orange around `#B65F2A` as the primary warm accent. Keep the existing botanical/obsidian foundation intact.

Recommended token changes:

- Add `--sila-burnt-orange: #b65f2a`.
- Keep `--sila-terracotta` only if a softer secondary warm tone is still useful.
- Map Tailwind theme `--color-burnt-orange` to the new token.
- Update prominent CTA, hover, label, glow, and divider accents from `terracotta` to the richer burnt orange where appropriate.

Usage rules:

- Use burnt orange for primary CTA fills, active highlights, small metadata labels, subtle hero glows, and hover states.
- Do not use it for large backgrounds except very transparent radial glows.
- Keep body backgrounds, panels, and text within the existing obsidian, bone, sage, clay, and stone system.
- Verify contrast on both dark and light sections.

## Logo Integration

`BrandMark` should use the supplied image file as the visible logo.

Requirements:

- Header and footer use the same component.
- The logo should link home through the existing header/footer links.
- The component should preserve accessible naming for screen readers.
- The image should be sized responsively and not distort.
- It should work on the current light header background and footer background.
- If a compact variant is used, it should reduce image size rather than swapping back to text.

## OpenRouter Asset Workflow

OpenRouter should be used as the generation gateway for new production imagery. The implementation should not hardcode temporary remote URLs into page components. Final reviewed assets should be downloaded into `public/images/...` and referenced locally.

Workflow:

1. Create a manifest of required Phase 1 assets.
2. Generate each asset with approved prompts.
3. Save outputs locally under stable filenames.
4. Review outputs for brand fit, subject safety, and absence of medical or exaggerated transformation implications.
5. Update component/content image references to local files.
6. Record model/provider/source details in the attribution document.

The generation script should read `OPENROUTER_API_KEY` from environment variables if automation is added. It must not commit secrets or write API keys into code.

## Phase 1 Prompt Set

Use these prompt themes as the starting point:

- Hero poster: cinematic mountain sunrise, lone human silhouette from behind, disciplined ascent, dark obsidian foreground, burnt orange dawn light, premium clinical-luxury mood.
- Brain pillar: abstract neural architecture, dark botanical-black background, subtle burnt orange signal lines, no literal medical scan.
- Skin pillar: premium editorial still life suggesting cellular renewal, warm light, stone, glass, botanical texture, no face-focused beauty stock.
- Body pillar: restrained performance recovery scene, movement silhouette or hands, premium gym/recovery environment, no shirtless transformation imagery.
- Longevity pillar: trail or architectural retreat landscape, early light, calm authority, long-horizon vitality.
- Recovery pillar: quiet retreat ritual, breathwork, journaling, cold/warm recovery environment, subtle human presence.
- About story: editorial environment suggesting psychology, discipline, and practice, not a founder portrait substitute unless approved.
- Shop/product: premium supplement or product-style still life with dark surface, bone label space, burnt orange accent light, no medical claims.

Shared negative prompt:

No generic wellness stock photo, no smiling face-forward model, no before-and-after body transformation, no hospital scene, no pills as medical cure, no syringe, no exaggerated muscles, no influencer gym aesthetic, no crypto neon style, no cheap supplement ad, no text, no logo recreation, no watermarks.

## Testing And Verification

Verify:

- Header and footer render the supplied logo on desktop and mobile.
- Home, About, Blog, Blog detail, Learn, Shop, and product pages load without broken images.
- New burnt orange accents maintain accessible contrast.
- No layout shift or oversized logo in sticky header.
- Metadata and structured data still reference valid local images.
- No console errors from missing assets.
- Build and lint pass.
- Smoke checks pass if available.

## Non-Goals

This task should not:

- Redesign the layout or typography.
- Rewrite brand copy.
- Add a third-party CMS.
- Change routes.
- Replace the approved hero video unless it fails brand or performance review.
- Commit generated API keys, temporary URLs, or unreviewed images.
