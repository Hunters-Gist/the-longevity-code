# CURSOR AI PROMPT: Complete Website Rebrand & Pivot to "The Sila Code"

---

## ROLE

You are a senior full-stack developer and brand architect. You are rebranding and pivoting an existing website into **The Sila Code** - a premium, psychology-backed wellness brand selling nootropic supplements and digital wellness subscriptions in Australia.

---

## CONTEXT & BRAND OVERVIEW

**Brand Name:** The Sila Code
**Tagline Options:** "Unlock Your Code" | "Strength Starts Within" | "Psychology-Backed Wellness"
**Company:** The Sila Code Pty Ltd (Australian company)
**Industry:** Nootropics, cognitive wellness, psychology-informed supplements
**Target Market:** Australia-first, expanding to APAC
**Tone:** Premium, clinical, scientific, but accessible and human. Think Aesop meets a neuroscience lab. Never cheap, never "bro science", never overly corporate.

**"Sila" means "strength" in Russian** - this is core to the brand identity. The founder is half-Russian and this heritage anchors the authenticity.

---

## THE FIVE BRAND PILLARS

Every page, product, and piece of content maps back to one or more of these pillars:

| Pillar | Focus | Consumer Language | Colour Accent |
|--------|-------|-------------------|---------------|
| **Brain** | Cognitive function, focus, neuroplasticity | "Think clearer, stay sharp" | Deep blue (#1A3A5C) |
| **Skin** | Anti-aging, cellular renewal | "Glow from the inside" | Soft gold (#C9A96E) |
| **Body** | Physical recovery, energy, gut health | "Rebuild and recover" | Sage green (#6B8F71) |
| **Longevity** | Prevention, cellular health, lifespan | "Live longer, live better" | Deep purple (#4A2D6F) |
| **Rehab** | Mental resilience, rewiring habits | "Rewire your path" | Warm amber (#B8763D) |

---

## DESIGN SYSTEM

### Colour Palette

```css
:root {
  /* Primary */
  --sila-black: #0A0A0F;
  --sila-white: #FAFAF8;
  --sila-cream: #F5F0EB;
  --sila-charcoal: #1A1A2E;

  /* Accent */
  --sila-navy: #1A3A5C;
  --sila-gold: #C9A96E;
  --sila-sage: #6B8F71;
  --sila-purple: #4A2D6F;
  --sila-amber: #B8763D;

  /* Neutral */
  --sila-grey-100: #F7F7F5;
  --sila-grey-200: #E8E6E1;
  --sila-grey-300: #D1CFC8;
  --sila-grey-500: #8A8780;
  --sila-grey-700: #4A4844;
  --sila-grey-900: #1C1B18;

  /* Functional */
  --sila-success: #2D6A4F;
  --sila-warning: #B8763D;
  --sila-error: #A4243B;
}
```

### Typography

```css
/* Headings: Use a clean serif or semi-serif for premium feel */
/* Recommended: "Playfair Display", "Cormorant Garamond", or "DM Serif Display" */
--font-heading: 'DM Serif Display', serif;

/* Body: Clean sans-serif */
/* Recommended: "Inter", "DM Sans", or "Plus Jakarta Sans" */
--font-body: 'Inter', sans-serif;

/* Mono/Data: For ingredient labels, dosages, clinical data */
--font-mono: 'JetBrains Mono', monospace;

/* Scale */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;
--text-6xl: 3.75rem;
```

### Design Principles

1. **Dark mode dominant** - Primary background is dark (--sila-charcoal or --sila-black). Light sections used sparingly for contrast.
2. **Generous whitespace** - Let the content breathe. Minimum 80px section padding.
3. **Clinical precision** - Data, dosages, and ingredient info displayed in monospace or structured layouts. Think pharmaceutical packaging meets luxury.
4. **Subtle animations** - Fade-ins, smooth scrolls, micro-interactions. No bouncing, no spinning, no parallax overload.
5. **Photography style** - Moody, editorial, dark backgrounds. Product shots on black. Lifestyle shots are warm but desaturated. Never stock-photo generic.
6. **No emojis anywhere on the site.**
7. **Australian English** - "optimise" not "optimize", "colour" not "color", "programme" not "program" (where applicable).

---

## SITE STRUCTURE

### Pages to Build/Rebrand

```
/                     → Homepage (hero, pillars, product teaser, assessment CTA, social proof)
/about                → Brand story, Cassie's background (psych degree, mission), the meaning of Sila
/the-code             → The methodology explained (5 pillars deep dive)
/shop                 → Product listing (hero capsule initially, expandable)
/shop/sila-focus      → Hero product PDP (Sila Focus capsule - the nootropic stack)
/assessment           → The Sila Assessment (15-question mental wellness quiz, email capture)
/community            → Sila Community info page + link to Skool
/subscribe            → Subscription tiers comparison page
/blog                 → The Sila Journal (content hub for SEO + authority)
/faq                  → Frequently asked questions
/contact              → Contact form
/legal/terms          → Terms & Conditions
/legal/privacy        → Privacy Policy
/legal/disclaimer     → Health Disclaimer (TGA compliant)
```

---

## PAGE-BY-PAGE SPECIFICATIONS

### Homepage (/)

**Hero Section:**
- Full-width dark background
- Large heading: "Unlock Your Code"
- Subheading: "Psychology-backed nootropics engineered for focus, mood, and cognitive resilience."
- Two CTAs: "Take the Assessment" (primary) | "Shop Sila Focus" (secondary)
- Subtle animated gradient or particle effect in background (dark navy to charcoal)

**The Five Pillars Section:**
- Horizontal scroll or grid layout showing each pillar with icon, name, one-liner
- Each pillar clickable, linking to /the-code#pillar-name
- Dark cards with pillar accent colour as border or icon colour

**Hero Product Section:**
- Product image on dark background (left)
- Product name: "Sila Focus"
- Stack summary: L-Theanine + Citicoline + Alpha-GPC + Saffron Extract
- Key benefit bullets (max 4):
  - "Calm focus without the crash"
  - "Clinically studied ingredients"
  - "Psychology-informed formulation"
  - "Made in a TGA-licensed Australian facility"
- CTA: "Shop Now" or "Subscribe & Save"

**The Sila Assessment Teaser:**
- Section with heading: "Where does your strength begin?"
- Subtext: "Take the free Sila Assessment. 15 questions. 3 minutes. Discover your personalised Sila Score across all five pillars."
- CTA: "Start the Assessment"
- Display mock assessment result graphic

**Social Proof / Trust Bar:**
- "Formulated by a psychology professional"
- "Made in Australia in a TGA-licensed facility"
- "Clinically studied ingredients"
- "No artificial fillers or stimulants"

**Subscription Teaser:**
- Brief comparison of tiers (Free Community / The Code Digital $29/mo / Code + Capsule $69/mo)
- CTA: "Join The Sila Code"

**Footer:**
- Brand logo, tagline
- Navigation links
- Social media links (Instagram, TikTok, YouTube)
- "The Sila Code Pty Ltd | ABN: [number]"
- Health disclaimer: "This product is not intended to diagnose, treat, cure or prevent any disease. Always read the label and follow directions for use. If symptoms persist, consult your healthcare professional."

---

### About Page (/about)

- **The Sila Story:** Cassie's journey from psychology graduate to wellness founder. Written in third person. Focus on the intersection of psychology and wellness. Mention the Russian heritage and meaning of Sila (strength). DO NOT mention legal history or prison/rehab goals.
- **The Mission:** "To bridge the gap between clinical psychology and daily wellness, making science-backed cognitive support accessible to everyone."
- **The Science:** Brief overview of the neuroscience behind the formulation. Credibility builders.
- **The Team:** Placeholder section for future team members / advisory board.

---

### Hero Product Page (/shop/sila-focus)

**Product Name:** Sila Focus
**Format:** Capsules (60 per bottle, 30-day supply at 2/day)
**Price:** $59.95 AUD (one-time) | $49.95/month (subscription, save 17%)

**Product Page Layout:**
- Large product image gallery (dark background, multiple angles)
- Product title + price + subscription toggle
- Add to cart / Subscribe button

**Ingredient Breakdown Section:**
Display each ingredient in a structured, clinical format:

```
┌─────────────────────────────────────────────────────┐
│ L-THEANINE (AlphaWave)              200mg per serve │
│ --------------------------------------------------- │
│ Promotes alpha brainwave activity for calm focus     │
│ without drowsiness. TGA-approved source.             │
│ Source: AlphaWave (Ethical Naturals, USA via          │
│ TransChem AU)                                        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ CITICOLINE (CDP-Choline)            250mg per serve │
│ --------------------------------------------------- │
│ Supports brain energy metabolism and cell membrane   │
│ repair. Provides both choline and cytidine for       │
│ dual-pathway cognitive support.                      │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ ALPHA-GPC                           300mg per serve │
│ --------------------------------------------------- │
│ Highly bioavailable choline source (~90%).           │
│ Crosses the blood-brain barrier to support           │
│ acetylcholine synthesis for memory and learning.     │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ SAFFRON EXTRACT (affron)             28mg per serve │
│ --------------------------------------------------- │
│ Clinically studied mood support. Standardised        │
│ Spanish saffron extract for serotonin modulation.    │
│ Source: Pharmactive Biotech, Spain.                  │
└─────────────────────────────────────────────────────┘
```

**"Why This Stack?" Section:**
- Brief explanation connecting ingredients to neurotransmitter systems
- Use language like: "Each ingredient targets a specific pathway: acetylcholine for memory, dopamine for motivation, serotonin for mood, and alpha brainwaves for calm clarity."
- Include a simple diagram/visual of the four pathways

**Who It's For Section:**
Two columns:
- **For High-Performance Professionals:** "Sustained focus, mental stamina, and stress resilience across demanding days."
- **For Anyone Rebuilding:** "Supporting the neurochemistry of resilience - regaining clarity, stability, and control."

**Trust Signals:**
- "Made in a TGA-licensed facility in Australia"
- "No artificial colours, flavours, or stimulants"
- "Third-party tested for purity and potency"
- "Vegan capsule shell"
- "Gluten free" (important for AU market)

**FAQ accordion specific to product**

---

### The Sila Assessment (/assessment)

**Functionality:**
- 15-question interactive quiz
- Questions cover all 5 pillars (3 questions per pillar)
- Each question has 5 response options (Likert scale: Strongly Disagree to Strongly Agree)
- On completion, calculate a "Sila Score" (0-100) with a breakdown by pillar
- Display results as a radar/spider chart showing strengths and gaps across the 5 pillars
- Email capture gate before showing full results: "Enter your email to unlock your personalised Sila Score and recommendations."
- After email capture: show full results + personalised recommendations + CTA to join community or shop

**Sample Questions (implement all 15):**

Brain Pillar:
1. "I can maintain focus on a single task for 30+ minutes without distraction."
2. "I feel mentally sharp and clear-headed most days."
3. "I rarely experience brain fog or difficulty concentrating."

Skin Pillar:
4. "I actively invest in my skin health beyond basic hygiene."
5. "I feel confident about how my skin looks and feels."
6. "I understand the connection between what I consume and my skin health."

Body Pillar:
7. "I recover quickly from physical exertion or illness."
8. "My energy levels are consistent throughout the day."
9. "I prioritise movement and physical health daily."

Longevity Pillar:
10. "I make daily choices with my long-term health in mind."
11. "I understand and actively support my cellular health."
12. "I have a proactive approach to preventing health issues."

Rehab/Resilience Pillar:
13. "I have healthy coping mechanisms for stress and adversity."
14. "I feel mentally resilient when facing setbacks."
15. "I have broken free from habits or patterns that no longer serve me."

**Results Page Design:**
- Dark background
- Animated radar chart drawing in the user's scores
- Overall Sila Score prominently displayed
- Each pillar score with a one-line insight (e.g., "Your Brain score suggests room for cognitive optimisation.")
- Personalised product/content recommendation based on lowest pillar score
- CTAs: "Join the Free Community" | "Shop Sila Focus" | "Start The Code ($29/mo)"

---

### Subscription Page (/subscribe)

**Three tiers displayed as cards:**

| | Community (Free) | The Code (Digital) | The Code + Capsule |
|---|---|---|---|
| **Price** | $0/month | $29/month | $69/month |
| Sila Community access | Yes | Yes | Yes |
| Weekly content drops | Yes | Yes | Yes |
| Full course library | No | Yes | Yes |
| Monthly masterclass | No | Yes | Yes |
| Ebooks (free + paid) | Free only | All access | All access |
| Monthly Sila Focus capsule supply | No | No | Yes (auto-shipped) |
| Founding member pricing | N/A | N/A | $49/mo (launch only, locked for life) |

**Founding Member callout:**
- "The first 100 members lock in $49/month for life. This price will never increase."
- Countdown or progress bar showing spots remaining

---

### The Sila Journal (/blog)

- Clean, minimal blog layout
- Categories mapping to the 5 pillars
- Each post tagged with relevant pillar(s)
- Featured image style: dark, editorial, moody
- Suggested launch posts:
  1. "What is The Sila Code? The Psychology Behind Our Five Pillars"
  2. "L-Theanine: The Science of Calm Focus"
  3. "Why We Chose Citicoline Over Common Choline Sources"
  4. "The Sila Assessment: How to Read Your Score"
  5. "5 Daily Habits Backed by Behavioural Psychology"

---

## TECHNICAL REQUIREMENTS

### Stack
- **Framework:** Next.js (App Router) or the existing framework of the current site
- **Styling:** Tailwind CSS with custom design tokens matching the colour palette above
- **Hosting:** Vercel (or current hosting provider)
- **E-commerce:** Shopify (headless via Storefront API) OR Stripe Checkout for subscriptions
- **Email:** Klaviyo or Mailchimp integration for assessment email capture and subscription management
- **Community:** External link to Skool (thesilacode.skool.com)
- **Analytics:** Google Analytics 4 + Meta Pixel + TikTok Pixel
- **Forms:** Assessment built as a React component with state management, NOT a third-party embed

### Performance
- Lighthouse score target: 90+ on all metrics
- Images: WebP format, lazy loaded, responsive srcsets
- Fonts: Self-hosted, preloaded, display: swap
- No unused JavaScript. No jQuery. No Bootstrap.

### SEO
- Semantic HTML (proper heading hierarchy, landmark roles)
- Meta titles and descriptions on every page
- Open Graph and Twitter Card meta tags
- Schema markup: Organization, Product, FAQ, Article (blog posts)
- Sitemap.xml and robots.txt
- Canonical URLs on all pages

### Accessibility
- WCAG 2.1 AA compliance minimum
- Sufficient colour contrast on all text
- Keyboard navigable
- Alt text on all images
- Focus indicators on interactive elements

---

## HEALTH DISCLAIMER (Required on Every Page Footer)

```
This product is not intended to diagnose, treat, cure or prevent any disease.
Always read the label and follow directions for use. If symptoms persist,
consult your healthcare professional. Supplements should not replace a
balanced diet. The Sila Code Pty Ltd. All rights reserved.
```

---

## TGA ADVERTISING COMPLIANCE (Apply to ALL Copy)

**ALLOWED language:**
- "Supports cognitive function"
- "Helps maintain mental clarity"
- "Supports healthy stress response"
- "Assists with focus and concentration"
- "Formulated by a psychology professional"
- "Supports general wellbeing"

**PROHIBITED language (never use anywhere on the site):**
- "Treats anxiety" or "Cures depression"
- "Helps with addiction recovery"
- "Reduces PTSD symptoms"
- "Better than prescription medication"
- Any testimonials claiming therapeutic outcomes
- Any reference to specific diseases or clinical conditions
- "Clinically proven" (use "clinically studied" instead)

---

## ASSETS NEEDED

- [ ] Logo (primary, reversed, icon mark)
- [ ] Product photography (capsule bottle, individual capsules, lifestyle)
- [ ] Favicon (Sila icon mark)
- [ ] OG image (1200x630)
- [ ] Pillar icons (5 custom icons, one per pillar)
- [ ] Radar chart component for assessment results
- [ ] Email templates (welcome, assessment results, subscription confirmation)

---

## IMPLEMENTATION PRIORITY

1. **Phase 1 (Week 1):** Homepage, About, Assessment, basic navigation, footer with disclaimer
2. **Phase 2 (Week 2):** Shop page, Product page (Sila Focus), Subscription page, Stripe/Shopify integration
3. **Phase 3 (Week 3):** Blog structure, first 3 posts, Community page, email integrations
4. **Phase 4 (Week 4):** Polish, SEO optimisation, analytics setup, performance tuning, launch

---

## FINAL NOTES FOR CURSOR

- Rip out ALL existing branding, colours, copy, and imagery. This is a complete rebrand, not a reskin.
- Every piece of copy must comply with TGA advertising rules listed above. When in doubt, soften the claim.
- The site should feel like a luxury wellness brand backed by science, not a supplement store. Think Aesop, Byredo, or Eight Sleep - not GNC or Chemist Warehouse.
- Mobile-first. Over 70% of Australian wellness consumers browse on mobile.
- Dark mode is the default. Light sections used as contrast, not the norm.
- No placeholder text. Write real, brand-aligned copy for every section.
- Australian English throughout.