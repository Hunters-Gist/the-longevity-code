# Botanical Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current global visual system with the Botanical style and roll it through the homepage and shared UI primitives.

**Architecture:** Keep token and typography decisions centralized in global files, then refactor shared primitives so section/page code mostly composes those primitives. Migrate homepage visuals to the new semantics while preserving accessibility and responsive behavior.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

---

### Task 1: Global Botanical token and typography migration

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] Replace root and semantic tokens in `app/globals.css` with Botanical palette values while keeping semantic names.
- [ ] Keep a compatibility alias layer for existing utility names (`heading`, `line`, `bone-white`, etc.) to reduce breakage during rollout.
- [ ] Update shell/background treatment from dark glass-heavy style to warm paper-like Botanical base while retaining grain texture behavior.
- [ ] Update font imports in `app/layout.tsx` to `Playfair Display` (headings) and `Source Sans 3` (body), preserving variable-driven font plumbing.
- [ ] Preserve reduced-motion support and add/normalize accessible focus ring conventions in global styles.

### Task 2: Primitive component normalization

**Files:**
- Modify: `components/ui/ActionButton.tsx`
- Modify: `components/ui/SectionHeading.tsx`
- Modify: `components/layout/SiteHeader.tsx`
- Modify: `components/layout/SiteFooter.tsx`

- [ ] Refactor `ActionButton` variants to canonical Botanical primary/secondary styling (pill form, uppercase micro-typography, soft motion).
- [ ] Normalize `SectionHeading` scales and spacing for Botanical hierarchy while preserving current API (`eyebrow`, `title`, `description`, `align`).
- [ ] Update header styling to Botanical surfaces and interactions without changing mobile menu behavior.
- [ ] Update footer styling to match Botanical system and keep required legal/disclaimer content intact.
- [ ] Verify interactive controls preserve keyboard accessibility and visible focus.

### Task 3: Homepage Botanical rollout

**Files:**
- Modify: `app/page.tsx`

- [ ] Replace dark luxury hero treatment with Botanical layout language (soft surfaces, serif-led hierarchy, pill CTA system).
- [ ] Rework pillar/product/assessment/subscription and trust sections to use Botanical card/spacing/radius/motion patterns.
- [ ] Consolidate repeated CTA classes to shared conventions where practical.
- [ ] Ensure responsive spacing/type scales align with Botanical rules and maintain touch target minimums.
- [ ] Keep metadata/schema and existing content structure valid.

### Task 4: Verification and polish

**Files:**
- Verify edited files from Tasks 1-3

- [ ] Run lints on edited files and fix any newly introduced issues.
- [ ] Run project build to ensure compile/type safety.
- [ ] Perform a quick visual pass for key states (default, hover, focus) and responsive breakpoints.
- [ ] Confirm no regression in core nav/footer behavior and homepage readability.

