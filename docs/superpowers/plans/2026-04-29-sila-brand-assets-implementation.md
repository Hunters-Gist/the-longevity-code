# Sila Brand Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restore the supplied Sila logo, strengthen the burnt orange brand accent, replace the highest-visibility generic imagery with local Sila-branded assets, and add an OpenRouter generation workflow for the complete asset set.

**Architecture:** Keep UI changes small and centralized. Use `BrandMark` for logo rendering, `app/globals.css` for colour tokens, `lib/brand/assets.ts` plus `content/asset-manifest.json` for local image references, and `scripts/generate-openrouter-assets.mjs` for repeatable generation.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4 theme tokens, Node.js scripts, OpenRouter Chat Completions image output.

---

### Task 1: Add Asset Smoke Guards

**Files:**
- Modify: `scripts/smoke-checks.mjs`

- [ ] **Step 1: Add failing smoke checks for this production update**

Add checks that require `BrandMark` to reference the approved logo, require the OpenRouter asset manifest, and reject generic stock image references from source files.

- [ ] **Step 2: Run smoke checks and verify failure**

Run: `npm run smoke`

Expected: failure mentioning missing manifest and generic image references.

### Task 2: Restore Logo And Burnt Orange Tokens

**Files:**
- Modify: `.gitignore`
- Modify: `components/ui/BrandMark.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Ignore visual companion scratch files**

Add `.superpowers/` to `.gitignore` so browser brainstorming artifacts are not committed.

- [ ] **Step 2: Render the approved logo image in `BrandMark`**

Use `next/image` with `src="/images/hero/the sila code logo.png"`, preserve the existing accessible home label, and keep compact sizing support.

- [ ] **Step 3: Add burnt orange tokens**

Add `--sila-burnt-orange: #b65f2a`, keep the old terracotta as a soft tone, and map Tailwind `terracotta` to the richer burnt orange so existing accent classes improve without broad class churn.

- [ ] **Step 4: Run lint for edited files**

Run: `npm run lint`

Expected: no new lint errors in edited files.

### Task 3: Add OpenRouter Asset Manifest And Generator

**Files:**
- Create: `content/asset-manifest.json`
- Create: `scripts/generate-openrouter-assets.mjs`
- Modify: `docs/asset-attributions.md`

- [ ] **Step 1: Create the manifest**

Define Phase 1 assets for hero poster, five pillar images, About story, About mission, shop hero, and Sila Focus gallery images. Include prompt, negative prompt, aspect ratio, image size, target output path, and usage notes.

- [ ] **Step 2: Create the generator script**

Implement a Node.js script that reads `OPENROUTER_API_KEY` from the environment or `.env.local`, calls `https://openrouter.ai/api/v1/chat/completions` with `modalities: ["image", "text"]`, decodes the returned base64 data URL, and writes each asset locally.

- [ ] **Step 3: Generate Phase 1 assets**

Run: `node scripts/generate-openrouter-assets.mjs --phase phase-1`

Expected: local image files written under `public/images/brand/`, `public/images/journal/`, and `public/images/shop/`.

- [ ] **Step 4: Update attribution docs**

Document the OpenRouter model, generation date, local paths, and retained Pexels hero video.

### Task 4: Wire Local Brand Assets Into Site

**Files:**
- Create: `lib/brand/assets.ts`
- Modify: `components/sections/HeroSection.tsx`
- Modify: `components/sections/JournalSection.tsx`
- Modify: `app/blog/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `app/about/page.tsx`
- Modify: `app/shop/page.tsx`
- Modify: `app/shop/sila-focus/page.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create shared asset constants**

Export logo path, hero poster path, pillar image map, About image paths, shop image paths, and social/structured-data logo image constants.

- [ ] **Step 2: Replace hardcoded generic image references**

Update the listed pages/components to use the shared constants and generated local files.

- [ ] **Step 3: Update structured data logo**

Use the approved logo path for organization schema instead of `og-image.png`.

### Task 5: Verify Production Readiness

**Files:**
- Verify all edited files.

- [ ] **Step 1: Run smoke checks**

Run: `npm run smoke`

Expected: all image references exist, logo guard passes, and no generic blocked image names remain.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: no lint errors.

- [ ] **Step 3: Run production build**

Run: `npm run build`

Expected: successful Next.js production build.

- [ ] **Step 4: Inspect git status**

Run: `git status --short`

Expected: only scoped brand, asset, docs, generated images, and ignored scratch changes are present.
