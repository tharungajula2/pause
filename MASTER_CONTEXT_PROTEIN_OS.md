# MASTER CONTEXT: PROTEIN OS
**Project Maturity State:** System-Complete / Multi-Lab Architecture  
**Version:** 2.0 (Refreshed April 2026)  
**Last Verified Against Codebase:** 2026-04-11

---

## 1. Project Identity

### The Thesis
**Protein OS** is a **Cinematic Strategy Operating System** designed for high-performance protein brand founders, operators, and curious learners. It distills the complexity of the Indian protein ecosystem—biology, behavior, manufacturing, economics, and brand strategy—into a guided, high-fidelity strategic journey.

### The Problem
Traditional brand presentations are static PDFs or shallow dashboards. They fail to communicate the *logic* of how a portfolio wins. Protein OS solves this by making strategy navigable, cinematic, and data-driven.

### What It Is NOT
- Not a generic ecommerce site
- Not a nutrition tracker or fitness app
- Not a shallow SaaS dashboard
- Not an AI gimmick or recipe toy

---

## 2. High-Level Product Vision

### Cinematic Strategy Luxury
The app follows a **"Cinematic Strategy Luxury"** design philosophy:
- **Identity:** A private founder/operator strategic artifact
- **Tone:** Clinical, restrained, intentional, and premium
- **The Obsidian World:** Deep black (`#090909`) background with warm ivory (`#FCF9F2`) text and muted gold (`#C5A059`) highlights
- **Floating Product Aesthetic:** Products sit in atmospheric space with cinematic ambient lighting — never inside flat card containers

---

## 3. Technical Stack

| Layer | Technology | Version |
|:---|:---|:---|
| Framework | Next.js (App Router) | 16.2.3 |
| Language | TypeScript | ^5 |
| UI Library | React | 19.2.4 |
| Styling | Tailwind CSS (v4) + CSS Variables | ^4 |
| Animation | GSAP (GreenSock) | ^3.14.2 |
| Build Tool | Turbopack (via `next dev`) | Built-in |
| PostCSS | @tailwindcss/postcss | ^4 |

### Key Files
- `package.json` — Dependencies and scripts
- `next.config.ts` — Next.js configuration
- `tsconfig.json` — TypeScript configuration
- `postcss.config.mjs` — PostCSS + Tailwind v4
- `eslint.config.mjs` — ESLint v9 flat config

---

## 4. App Architecture Overview

```
protein-os/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                # Homepage (Cinematic Hero + Product Worlds)
│   ├── globals.css             # Design tokens & utility classes
│   ├── not-found.tsx           # Custom 404 page
│   ├── components/
│   │   ├── hero/               # CinematicHero scrollytelling engine
│   │   ├── layout/             # Navbar, Footer
│   │   ├── ui/                 # Shared primitives (ProductSurface, CtaButton, etc.)
│   │   ├── strategy/           # Step 01 components
│   │   ├── economics/          # Step 02 components
│   │   ├── channels/           # Step 03 components
│   │   ├── growth/             # Step 04 components
│   │   ├── product/            # PDP components (ProductHeroStage, etc.)
│   │   └── labs/
│   │       ├── packaging/      # Step 05 (8 components)
│   │       ├── flavor/         # Step 06 (9 components, incl. SummerConceptGrid)
│   │       ├── manufacturing/  # Step 07 (9 components)
│   │       ├── rd/             # Step 08 (8 components)
│   │       └── expansion/      # Step 09 (9 components)
│   ├── data/                   # All typed strategic data registries
│   ├── types/                  # TypeScript interfaces
│   ├── products/               # /products and /products/[slug] routes
│   ├── occasions/              # /occasions route
│   ├── strategy/               # /strategy route
│   ├── economics/              # /economics route
│   ├── channels/               # /channels route
│   ├── growth/                 # /growth route
│   └── labs/
│       ├── packaging/          # /labs/packaging route
│       ├── flavor/             # /labs/flavor route
│       ├── manufacturing/      # /labs/manufacturing route
│       ├── r-and-d/            # /labs/r-and-d route
│       └── expansion/          # /labs/expansion route
├── public/
│   ├── images/
│   │   ├── products/           # 6 core product PNGs (transparent)
│   │   └── concepts/summer/    # 5 summer concept PNGs (transparent)
│   └── noise.png               # Noise texture overlay
└── MASTER_CONTEXT_PROTEIN_OS.md
```

---

## 5. Full Route Map (12 Routes)

| Route | Nav Name | Step | Purpose | Selection Color |
|:---|:---|:---|:---|:---|
| `/` | Home | — | Cinematic Hero + Product Worlds + Occasion Engine | `gold` |
| `/products` | Products | — | 6-SKU portfolio in floating editorial surfaces | `gold` |
| `/products/[slug]` | (Dynamic PDP) | — | Per-product intelligence rail | `gold` |
| `/occasions` | Occasions | — | Behavioral occasion mapping | — |
| `/strategy` | 01 Strategy | 01 | Portfolio architecture & SKU matrix | `gold` |
| `/economics` | 02 Economics | 02 | Format economics & margin pressure | `red-500` |
| `/channels` | 03 Channels | 03 | Channel strategy & format fit | `gold` |
| `/growth` | 04 Growth | 04 | Behavioral adoption & habit loops | `gold` |
| `/labs/packaging` | 05 Packaging | 05 | Visual trust & claim clarity logic | `gold` |
| `/labs/flavor` | 06 Flavor | 06 | Sensory strategy + Summer Concept SKUs | `amber-500` |
| `/labs/manufacturing` | 07 Manufacturing | 07 | Production intelligence & process flow | `blue-500` |
| `/labs/r-and-d` | 08 R&D | 08 | Innovation studio & recipe development | `fuchsia-500` |
| `/labs/expansion` | 09 Expansion | 09 | Adjacency, risk, and future mapping | `teal-500` |

---

## 6. Ordered User Journey (12-Step Sequence)

The OS is designed to be demoed in this exact order:

1. **Home** — The "Why" (Cinematic Entry)
2. **Products** — The "What" (Portfolio Architecture)
3. **Occasions** — The "When" (Behavioral Mapping)
4. **01 Strategy** → 02 Economics → 03 Channels → 04 Growth
5. **05 Packaging** → 06 Flavor → 07 Manufacturing → 08 R&D → 09 Expansion

Each page terminates with a `SystemContinuation` component linking to the next step. The Expansion Lab loops back to Strategy (`/strategy`) to close the cycle.

---

## 7. Product Portfolio (6 Core SKUs)

All product data lives in `app/data/products.ts`. The `Product` interface is defined in `app/types/index.ts`.

| Product | Slug | Format | Category | themeColor |
|:---|:---|:---|:---|:---|
| Choco Loco | `choco-loco` | Drink | Indulgence Anchor | `#4A2311` (Rich Cocoa) |
| Kesar Pista | `kesar-pista` | Drink | Heritage Anchor | `#2E4A35` (Deep Forest) |
| Wah Vanilla | `wah-vanilla` | Drink | Core Staples | `#4A4232` (Muted Clay) |
| Café Latte Protein Coffee | `cafe-latte` | Coffee | Ritual Disruption | `#3E2723` (Dark Espresso) |
| Choco Brownie Bar | `choco-brownie-bar` | Bar | On-the-go Strategy | `#2B1B17` (Cocoa Shell) |
| Choco Almond Bar | `choco-almond-bar` | Bar | On-the-go Strategy | `#5C4033` (Wood/Almond) |

### Product Image Assets
Location: `public/images/products/`
- `choco-loco.png`, `kesar-pista.png`, `wah-vanilla.png`
- `cafe-latte.png`, `choco-brownie.png`, `choco-almond.png`

> **IMPORTANT**: There is NO `classic-vanilla.png`. The vanilla product is `wah-vanilla.png`. References to `classic-vanilla` are a known legacy bug that causes 404 loops.

---

## 8. Summer Concept SKUs (5 Seasonal Extensions)

Data: `app/data/summer-concepts.ts`. Rendered in: `SummerConceptGrid.tsx` (inside Flavor Lab).

| Concept | Classification | themeColor | Image Path |
|:---|:---|:---|:---|
| Mango Tango | Seasonal Hero | `#FFD700` | `/images/concepts/summer/mango-tango.png` |
| Rosy Falooda | Cultural Wedge | `#FF69B4` | `/images/concepts/summer/rosy-falooda.png` |
| Thandai Chill | Cultural Wedge | `#F5DEB3` | `/images/concepts/summer/thandai-chill.png` |
| Coco Chill | Premium Stretch | `#E0FFFF` | `/images/concepts/summer/coco-chill.png` |
| Strawberry Swirl | Trial-Driven | `#FC5A8D` | `/images/concepts/summer/strawberry-swirl.png` |

---

## 9. Data Registry Files (14 Files)

All data files live in `app/data/`:

| File | Purpose | Used By |
|:---|:---|:---|
| `products.ts` | 6 core SKU definitions | Home, Products, PDP |
| `summer-concepts.ts` | 5 seasonal concept SKUs | Flavor Lab |
| `occasions.ts` | Consumer occasion mapping | Home, Occasions page |
| `modules.ts` | OS module previews | Home (SystemModules) |
| `site-content.ts` | Hero copy and manifesto | Home |
| `navigation.ts` | Main nav + footer nav items | Navbar, Footer |
| `economics.ts` | Format economics data | Economics page |
| `channels.ts` | Channel profile data | Channels page |
| `growth.ts` | Consumer archetypes & messaging | Growth page |
| `trust.ts` | Trust signal data | Packaging Lab |
| `flavor.ts` | Flavor strategy modes | Flavor Lab |
| `expansion.ts` | Expansion opportunities | Expansion Lab |
| `manufacturing.ts` | Process stages, ingredient profiles, stability risks | Manufacturing Lab |
| `rd.ts` | Recipe concepts, hypotheses, AI workflow, experimentation stages | R&D Lab |

---

## 10. TypeScript Interfaces (app/types/index.ts)

The type system contains **17 interfaces**:

| Interface | Purpose |
|:---|:---|
| `NavItem` | Navigation structure |
| `Product` | Core 6-SKU product model |
| `Occasion` | Consumer occasion definition |
| `Module` | OS module preview cards |
| `SiteContent` | Homepage content |
| `FormatEconomics` | Format-level cost modeling |
| `ChannelProfile` | Channel behavior |
| `ConsumerArchetype` | Growth consumer models |
| `GrowthMessageFit` | Messaging strategy |
| `PackagingTrustMode` | Trust signal logic |
| `DigestibilityProfile` | Digestibility concerns |
| `FlavorStrategyMode` | Flavor repeat/novelty logic |
| `ExpansionOpportunity` | Adjacency mapping |
| `SummerConcept` | Seasonal concept extension |
| `ProcessStage` | Manufacturing process steps |
| `IngredientTechnicalProfile` | Ingredient behavior under production |
| `StabilityRisk` | Shelf-life failure modes |
| `ManufacturingRoadmapItem` | Production learning phases |
| `RecipeConcept` | R&D recipe direction |
| `RDHypothesis` | Benchmarking hypothesis |
| `AIWorkflowStep` | AI-assisted formulation |
| `ExperimentationStage` | Kill-or-scale funnel |

---

## 11. Component Architecture (52 Components)

### Layout (2)
- `Navbar.tsx` — Fixed top nav, 72px height (`h-18`), "Strategy OS" dropdown for Steps 01-09
- `Footer.tsx` — Minimal footer

### Hero System (4)
- `CinematicHero.tsx` — GSAP scrollytelling engine (Pin + Scrub)
- `NarrativeLayer.tsx` — "DIRECTION & INTENT" thesis text (has `pt-20` safe zone)
- `AtmosphereLayer.tsx` — Cinematic gradient backdrop
- `ProductStage.tsx` — Floating product on the hero

### UI Primitives (9)
- `ProductSurface.tsx` — Full-width editorial product display (triple-layer ambient lighting, pulsing spotlight, `animate-float-slow`)
- `ProductCard.tsx` — Compact product card
- `OccasionEngine.tsx` — Interactive occasion selector
- `SystemModules.tsx` + `ModulePreviewSurface.tsx` — Module grid
- `SectionHeader.tsx` — Reusable section headers
- `CtaButton.tsx` — Premium call-to-action button
- `StrategyCard.tsx` — Strategy module card
- `SystemContinuation.tsx` — Inter-page continuation link (enforces linear journey)

### Strategy (Step 01) — 5 components
`StrategyHero`, `ArchitectureOverview`, `InteractiveSkuMatrix`, `PortfolioMap`, `RecommendationLayer`

### Economics (Step 02) — 6 components
`EconomicsHero`, `WhatShapesEconomics`, `FormatEconomicsConsole`, `ChannelMarginPressure`, `RepeatDiscountTension`, `FragilitySurvivalLayer`

### Channels (Step 03) — 7 components
`ChannelHero`, `ChannelLandscape`, `ChannelSelectorConsole`, `FormatFitMatrix`, `QuickCommerceThesis`, `ChannelMismatchLogic`, `FounderMemo`

### Growth (Step 04) — 8 components
`GrowthHero`, `GrowthArchitectureMap`, `ConsumerIdentityLayer`, `MessageOccasionConsole`, `HabitLoopEngine`, `CreatorTrustLogic`, `FailureStateBreakdown`, `FounderMemo`

### Packaging Lab (Step 05) — 8 components
`PackagingHero`, `TrustAnatomyMap`, `PackagingSignalConsole`, `DigestibilityComfortLayer`, `ThumbnailClarityBlock`, `ClaimsClaritySection`, `TrustBreakdown`, `FounderMemo`

### Flavor Lab (Step 06) — 9 components
`FlavorLabHero`, `FlavorStrategyMap`, `FlavorPositioningConsole`, `RepeatVsNoveltyLayer`, `FormatFlavorFit`, `IndiaCulturalFit`, `SummerConceptGrid`, `FlavorBreakdown`, `FounderMemo`

### Manufacturing Lab (Step 07) — 9 components
`ManufacturingHero`, `ManufacturingPrinciples`, `ProcessFlowConsole` (interactive), `IngredientBehaviorLayer`, `StabilityShelfLifeLayer`, `EconomicsScaleLayer`, `ManufacturingRoadmap`, `ManufacturingFailureModes`, `ManufacturingFounderMemo`

### R&D Lab (Step 08) — 8 components
`RDHero`, `RDPrinciples`, `RecipeDevelopmentConsole` (interactive), `BenchmarkingLayer`, `AIWorkflowSection`, `ExperimentationFunnel`, `RDFailureModes`, `RDFounderMemo`

### Expansion Lab (Step 09) — 9 components
`ExpansionHero`, `AdjacencyFramework`, `ExpansionOpportunityConsole` (interactive), `CoreVsStretchLayer`, `ExpansionMappingBlock`, `KioskOfflineStrategy`, `GlobalAdaptationLogic`, `ExpansionBreakdown`, `FounderMemo`

### Product Detail Pages (PDP) — 3 components
`ProductHeroStage`, `StrategicIntelligenceRail`, `CrossLinkSystem`

---

## 12. Design System & Tokens

### Colors (globals.css)
| Token | Value | Usage |
|:---|:---|:---|
| `--background` | `#090909` | Obsidian Black |
| `--foreground` | `#FCF9F2` | Warm Ivory |
| `--muted-gold` | `#C5A059` | Primary accent |
| `--graphite` | `#2A2A2A` | Card backgrounds |

### Typography
| Role | Font | Variable |
|:---|:---|:---|
| Headings | Cormorant Garamond | `--font-cormorant` / `font-serif` |
| Body | Geist Sans | `--font-geist-sans` / `font-sans` |

### Cinematic Utilities (globals.css)
- `.glass-card` — Glassmorphism card with blur + border
- `.film-surface` — Gradient overlay for cinematic depth
- `.sheen-effect` — Hover sheen animation (45° diagonal light sweep)
- `.vignette-atmosphere` — Radial mask for atmospheric fade
- `.animate-float` / `.animate-float-slow` / `.animate-float-delayed` — Floating keyframe animations
- `.text-gradient-gold` — Gold gradient text
- `.text-balance` — CSS text-wrap balance

### Ambient Lighting System (ProductSurface & SummerConceptGrid)
The products use a **triple-layer lighting system**:
1. **Central Radial Wash** — `radial-gradient` using `themeColor`, `opacity-5` → `opacity-30` on hover
2. **Dual Corner Light Leaks** — `w-64 h-64 blur-[100px]`, top-right `opacity-20→50` and bottom-left `opacity-10→40`
3. **Behind-Asset Pulsing Spotlight** — `w-48 h-48 blur-[80px] animate-pulse`, `opacity-20→80` on hover
4. **Reflection Pedestal** — `bg-black/40 blur-xl` at the base
5. **Float Animation** — `animate-float-slow` on the product image

---

## 13. Navigation Architecture

### Navbar (`app/components/layout/Navbar.tsx`)
- **Position:** Fixed top, `z-[100]`, `h-18` (72px height)
- **Background:** `bg-background/80 backdrop-blur-2xl`
- **Logo:** `PROTEIN` + `OS` (italic gold), `text-xl`
- **Foundation Links:** Home, Products, Occasions (separated by a border)
- **Strategy OS Dropdown:** Groups Steps 01-09 in a hover-activated dropdown
- **CTA:** "Access System" button
- **Typography:** `text-[8.5px]` for nav links, `text-[8px]` for dropdown items
- **Mobile:** Hamburger menu with slide-down panel

### SystemContinuation (`app/components/ui/SystemContinuation.tsx`)
- Used at the bottom of every strategic page to enforce the linear stepped journey
- Accepts: `nextRoute`, `nextTitle`, `description`, `step`
- Renders a large clickable card with gold accent hover state

### Continuation Chain
```
Home → Products → Occasions → Strategy(01) → Economics(02) → Channels(03) → Growth(04) → Packaging(05) → Flavor(06) → [Manufacturing(07)] → [R&D(08)] → Expansion(09) → Strategy (loop)
```

> **KNOWN GAP**: The Flavor Lab `SystemContinuation` currently links directly to Expansion Lab (Step 07), skipping Manufacturing (07) and R&D (08). The Manufacturing Lab links to Expansion (Step 08), and R&D also links to Expansion (Step 09). This chain should ideally flow: Flavor → Manufacturing → R&D → Expansion for linear continuity.

---

## 14. Interactive Consoles (Client Components)

Five labs feature interactive `'use client'` consoles with state-driven stage/concept selection:

| Console | Location | Interaction |
|:---|:---|:---|
| `InteractiveSkuMatrix` | Strategy | SKU selector → detailed strategic readout |
| `FormatEconomicsConsole` | Economics | Format selector → margin/risk analysis |
| `ChannelSelectorConsole` | Channels | Channel selector → behavior/format fit |
| `MessageOccasionConsole` | Growth | Message framing selector → occasion fit |
| `FlavorPositioningConsole` | Flavor | Flavor mode selector → repeat/trust analysis |
| `ProcessFlowConsole` | Manufacturing | Process stage selector → variables/failure modes |
| `RecipeDevelopmentConsole` | R&D | Recipe concept selector → sensory/cost diagnostics |
| `ExpansionOpportunityConsole` | Expansion | Expansion concept selector → risk assessment |

---

## 15. Known Issues & Fragile Areas

| Issue | Severity | Details |
|:---|:---|:---|
| **Continuation Chain Gap** | Medium | Flavor Lab skips Manufacturing and R&D in its SystemContinuation. Should be updated to link to `/labs/manufacturing`. |
| **GSAP Hero Sensitivity** | Low | Changing homepage section count or heights requires a `ScrollTrigger.refresh()`. |
| **Image Fallback** | Resolved | `SummerConceptGrid` has a self-nullifying `onError` handler to prevent 404 loops. Falls back to `wah-vanilla.png`. |
| **Legacy `classic-vanilla` refs** | Resolved | All references have been purged. The correct asset is `wah-vanilla.png`. |
| **Turbopack Cache** | Low | Occasionally corrupts after heavy image changes. Fix: delete `.next/` and restart dev server. |
| **PDP `params` pattern** | Low | `app/products/[slug]/page.tsx` uses `params.slug` directly. Future Next.js versions may require `use(params)`. |

---

## 16. Hard Constraints

1. **Strictly Linear**: The Strategy OS must enforce a linear 01-09 step sequence.
2. **Asset Format**: Product PNGs MUST be transparent with no background.
3. **Design Philosophy**: Maintain the Obsidian/Gold/Ivory palette. Never add white backgrounds or flat SaaS colors.
4. **Floating Aesthetic**: Products must never have rectangular card borders.
5. **No Dashboard Feel**: Serif + sans balance must be maintained. If it looks like a SaaS dashboard, the design has failed.
6. **Data-Driven**: All strategic content comes from `app/data/` registries, not hardcoded in components.

---

## 17. Resume Guide for Future Agents

### Before Writing Code
1. **Read `app/data/navigation.ts`** to understand the full route sequence.
2. **Read `app/types/index.ts`** to understand the data model.
3. **Read `app/globals.css`** to understand the design tokens and utility classes.
4. **Check `app/layout.tsx`** for the global Navbar/Footer wrapper.

### When Adding a New Lab
1. Create a new data file in `app/data/`.
2. Add type interfaces to `app/types/index.ts`.
3. Create components in `app/components/labs/[lab-name]/`.
4. Create the route page at `app/labs/[lab-name]/page.tsx`.
5. Update `app/data/navigation.ts` to add the route to the sequence.
6. **Update the SystemContinuation chain** to ensure correct flow.

### Style Rules
- Use `font-serif` (Cormorant Garamond) for headings
- Use `font-sans` (Geist Sans) for body text
- Use `text-gold` for accent highlights
- Use `bg-graphite/10` for card backgrounds
- Use `border-foreground/5` for subtle borders
- Use `blur-[80-120px]` for atmospheric glows
- Use `animate-float-slow` for product floating motion
- Use `animate-pulse` for pulsing spotlights

### Page Pattern
Every strategic page follows this pattern:
```tsx
<main className="min-h-screen bg-background">
  <article>
    <Hero />
    <Section1 />
    <Section2 />
    ...
    <FounderMemo />
  </article>
  <SystemContinuation nextRoute="..." nextTitle="..." description="..." step="..." />
</main>
```

---

**Master Context v2.0 — Verified against live codebase April 2026**
