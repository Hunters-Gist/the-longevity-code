# Botanical Design System Migration (Global Default)

## Overview

This document defines the approved design for migrating the site to a global Botanical / Organic Serif visual system.

Scope for this phase:
- Make Botanical the default global theme.
- Centralize and normalize design tokens and typography.
- Refactor shared primitives to enforce consistent styling and interaction behavior.
- Roll out the updated system across homepage sections for immediate visual validation.

Out of scope for this phase:
- Full multi-page rollout beyond the homepage.
- Structural content rewrites unrelated to design-system adoption.

## Goals

- Establish a maintainable, token-driven styling foundation in `app/globals.css`.
- Align typography and visual personality to the Botanical style guide.
- Reduce one-off utility styling by strengthening reusable UI primitives.
- Preserve accessibility and responsive behavior while improving visual coherence.

## Current System Context

- Stack: Next.js 16 App Router, React 19, Tailwind CSS v4.
- Global style source: `app/globals.css` with semantic variables and `@theme inline`.
- Font variables are set in `app/layout.tsx` and consumed globally.
- Existing primitives: `ActionButton`, `SectionHeading`, section-oriented composition under `components/sections`.
- Current visual language: dark, glass/luxury motifs with ambient gradients.

## Chosen Migration Strategy

Approach selected: **token-first migration with compatibility aliases**.

Why:
- Lowest regression risk while replacing the global theme.
- Allows progressive section refactors without breaking existing class usage.
- Keeps naming and architecture aligned with existing code patterns.

### Strategy Details

1. Replace root and semantic tokens with Botanical values.
2. Keep an alias bridge for existing utility semantics during transition.
3. Update primitives to become canonical Botanical building blocks.
4. Refactor homepage sections to consume updated primitives and remove one-off styles.
5. Retain accessibility and responsive behavior as non-negotiable constraints.

## Design Architecture

### 1) Tokens and Global Styling

Primary token updates in `app/globals.css`:
- Background: warm alabaster/rice paper.
- Foreground: deep forest green.
- Accent/system colors: sage, soft clay, terracotta, subtle stone borders.
- Shadows: soft, diffused, low-contrast elevations.
- Motion: standardized duration/curve system (300, 500, 700 ms; eased-out).
- Radius: card, pill, and image arch conventions.

Global shell behavior:
- Preserve fixed grain overlay pattern.
- Replace dark atmospheric gradients with warm, tactile background treatments.
- Keep reduced-motion support and improve default focus ring styling.

Compatibility:
- Maintain semantic aliases so existing classes (`text-heading`, `border-line`, etc.) map to Botanical values during rollout.

### 2) Typography System

In `app/layout.tsx`:
- Heading font: `Playfair Display`.
- Body font: `Source Sans 3`.
- Keep current variable-based font plumbing for consistency with project patterns.

Usage conventions:
- Headlines/display: Playfair, larger scale, selective italic emphasis.
- Body/UI copy: Source Sans 3, readable line-height, humanist tone.
- Mono retained for data-like content only.

### 3) Primitive Components

`ActionButton`:
- Canonical Botanical primary/secondary variants.
- Pill shape, uppercase small UI text, tracking, tactile hover/focus behavior.
- Minimum touch target maintained.

`SectionHeading`:
- Owns eyebrow/title/description rhythm and alignment variants.
- Standardizes typography scale and spacing.
- Supports intentional italic emphasis without brittle string logic.

Card and panel primitives:
- Rework existing card contracts to Botanical surfaces, borders, shadows, and motion.
- Define reusable hover-lift and stagger rhythm helpers.

Image shape utilities:
- Introduce reusable arch/organic rounding conventions for image blocks.
- Keep smooth, slow image hover scaling where appropriate.

### 4) Homepage Rollout

Refactor homepage sections to use the updated primitives and tokens:
- `HeroSection`: Botanical hero hierarchy, arch imagery, softer overlays, CTA polish.
- `PillarsSection`: card restyle and staggered desktop rhythm.
- Supporting sections (`HowItWorks`, `Assessment`, `Membership`, `Journal`, `FAQ`, `FinalCta`): spacing, type, card and interaction normalization.
- `SiteHeader` / footer visual alignment to Botanical system while preserving existing behavior and legal content.

## Data Flow and Dependency Boundaries

No business-logic data model changes are required.

Dependency flow:
1. `app/layout.tsx` defines font variables and app shell.
2. `app/globals.css` defines canonical tokens/utilities.
3. Primitives consume semantic tokens.
4. Sections consume primitives and section-level layout patterns.

This keeps style decisions centralized and prevents local style drift.

## Accessibility Requirements

- Maintain semantic heading hierarchy across sections.
- Enforce visible keyboard focus treatment across all interactive components.
- Preserve minimum touch targets for mobile interactions.
- Verify color contrast for all new Botanical pairings.
- Respect `prefers-reduced-motion`.

## Responsive Requirements

- Keep current mobile-first breakpoints and section composition.
- Preserve reduced spacing and type scaling on small screens.
- Apply staggered card rhythm only from medium breakpoints and above.

## Risks and Mitigations

- Risk: Temporary semantic mismatch while aliases coexist.
  - Mitigation: Keep alias layer intentionally small and remove as sections are refactored.

- Risk: Visual inconsistency from ad-hoc class usage in section files.
  - Mitigation: Move section styling decisions into primitives and shared utility contracts.

- Risk: Contrast regressions after palette inversion.
  - Mitigation: Run focused contrast checks on CTA, muted text, and border-on-surface combos.

## Validation and Testing Plan

Required checks after implementation:
- Lint pass for edited files.
- Build pass for Next.js app.
- Manual responsive checks (mobile, tablet, desktop) on homepage.
- Keyboard navigation/focus checks for header/menu/buttons/links.
- Quick visual QA for section rhythm, card hover behavior, and typography hierarchy.

## Implementation Sequence

1. Update global tokens/utilities in `app/globals.css`.
2. Update font imports/variables in `app/layout.tsx`.
3. Refactor shared primitives (`ActionButton`, `SectionHeading`, card utility contracts).
4. Refactor homepage sections to consume primitives and remove one-offs.
5. Run lint/build and manual responsive/accessibility verification.

## Success Criteria

- Botanical visual identity is clearly established globally on first load.
- Homepage sections feel cohesive and intentionally designed, not mixed-theme.
- Reusable primitives carry most styling responsibility.
- Accessibility and responsiveness remain intact or improved.
