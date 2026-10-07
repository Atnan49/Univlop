---
name: Crimson Archive
colors:
  surface: '#fff8f5'
  surface-dim: '#e0d8d5'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2ee'
  surface-container: '#f4ece9'
  surface-container-high: '#eee7e3'
  surface-container-highest: '#e9e1dd'
  on-surface: '#1e1b19'
  on-surface-variant: '#584140'
  inverse-surface: '#33302d'
  inverse-on-surface: '#f7efeb'
  outline: '#8b716f'
  outline-variant: '#dfbfbd'
  surface-tint: '#ab3236'
  primary: '#69000f'
  on-primary: '#ffffff'
  primary-container: '#8b1a22'
  on-primary-container: '#ff9a97'
  inverse-primary: '#ffb3b0'
  secondary: '#635d5b'
  on-secondary: '#ffffff'
  secondary-container: '#eae1dd'
  on-secondary-container: '#696360'
  tertiary: '#293424'
  on-tertiary: '#ffffff'
  tertiary-container: '#404a39'
  on-tertiary-container: '#aeb9a4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b0'
  on-primary-fixed: '#410006'
  on-primary-fixed-variant: '#8a1921'
  secondary-fixed: '#eae1dd'
  secondary-fixed-dim: '#cdc5c1'
  on-secondary-fixed: '#1f1b19'
  on-secondary-fixed-variant: '#4b4643'
  tertiary-fixed: '#dae6d0'
  tertiary-fixed-dim: '#becab4'
  on-tertiary-fixed: '#151e10'
  on-tertiary-fixed-variant: '#3f4a39'
  background: '#fff8f5'
  on-background: '#1e1b19'
  surface-variant: '#e9e1dd'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-desktop: 1.25rem
  margin: 1rem
  margin-desktop: 2.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.875rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system reimagines the secondhand resale marketplace into an elevated, gallery-like shopping experience. Rejecting the cluttered, chaotic flea-market aesthetic that dominates vintage and thrift apps, it adopts a high-end editorial and wellness-inspired posture: calm, curated, conscious, and distinctly modern. It bridges luxury archive curation with mindful, circular consumerism.

Targeted at discerning thrifters, archival fashion enthusiasts, and conscious shoppers who value provenance and sustainability without compromising on taste, the interface evokes stillness, quality, and tactile luxury. 

The aesthetic synthesizes **Warm Minimalism** with subtle **Soft-Glassmorphic Utility**:
- Airy, breathable canvas tones with warm porcelain underpinnings rather than harsh stark whites.
- Deep crimson accentuation that conveys passion, heritage, and deliberate curation rather than bargain-hunting urgency.
- Floating pill navigations, cocooned card surfaces, and micro-elevation cues that mirror organic wellness applications.
- Confident, clean sans-serif typography ensuring high scanability across condition ratings, pricing, and item origins.

## Colors

The palette establishes an artisanal, high-fashion grounding using precise functional tiers:

- **Primary (`#8B1A22` - Deep Crimson)**: The emotional anchor drawn from archival luxury stamps, vintage seals, and deliberate accents. Reserved for primary conversion actions, active tab pill indicators, key price highlights, and heart/favorite active states. It should be used sparingly as an editorial accent to retain its premium impact.
- **Secondary (`#24201E` - Charcoal Noir)**: An ultra-deep espresso brown-black used for primary text, high-emphasis icons, and structural navigation backdrops (such as floating bottom nav shells). Softer and more organic than raw `#000000`.
- **Tertiary (`#5A6553` - Sage Lichen)**: An earthy, muted green tone honoring circularity, wellness, and preloved verification. Leveraged for authentication badges, sustainability metrics, and "Like New" condition tags.
- **Neutral (`#948E8B` - Warm Sandstone)**: A warm stone grey used to derive secondary typography, muted tab containers, delicate border rings, and inactive indicator states.

### Surface Architecture
- **Canvas Base**: Soft ambient alabaster (`#FBF9F8`) across screens to eliminate cold glare.
- **Surface Cards**: Clean off-white (`#FFFFFF`) with subtle 0.5px sandstone strokes (`#EFECE9`) for clean product grid containment.
- **Condition Accents**: 
  - *Like New*: Pale sage tint (`#EEF2ED`) with tertiary text (`#5A6553`).
  - *Excellent / Good*: Pale warm stone tint (`#F4F1EE`) with espresso text (`#4B4441`).
  - *Vintage*: Warm blush-sand tint (`#F8EFEF`) with deep crimson text (`#8B1A22`).

## Typography

This design system standardizes on **Plus Jakarta Sans** across display, body, and UI roles. Its contemporary geometric curves, open counters, and humanistic warmth lend the interface an inviting, boutique retail poise that feels natural, soft, and modern.

### Rules of Usage
- **Numerics & Pricing**: Secondary prices in comparisons (e.g., original retail vs. secondhand) use strikethrough styling in `body-sm` with neutral coloration, while current thrifted pricing uses `title-md` or `headline-md` set in bold weight for immediate visual acquisition.
- **Badging & Micro-Metadata**: Condition markers ("LIKE NEW", "GOOD", "VINTAGE") are locked to uppercase `label-sm` with letter tracking (`0.04em`) to ensure legibility when overlaid on imagery or inset inside compact pill chips.
- **Narrative Descriptions**: Product condition reports and provenance notes use `body-md` with generous line-height (`20px`) for fatigue-free reading.

## Layout & Spacing

The layout is built around an airy mobile-first rhythm that transitions seamlessly into centered responsive containers on tablet and desktop.

### Mobile Grid (Default)
- **Margins**: Outer margin of `1rem` (16px) creates an intimate edge while keeping touch targets safe from bezel clipping.
- **Product Feeds**: Strict 2-column layout using a `0.75rem` (12px) gutter. Card imagery maintains a consistent 3:4 portrait aspect ratio to give vintage garments and items full vertical presence.
- **Horizontal Carousels**: Snap-scroll carousels for collections, stories, and curated tags bleed past the screen edge with a trailing 16px offset to indicate horizontal progression.

### Floating Canvas Insets
- **Bottom Navigation**: Floating pill navigation dock floats `1rem` (16px) above the bottom home indicator safe area, spanning centered with a maximum width of 340px.
- **Sticky Actions**: On product detail views, the sticky bottom bar ("Add to Bag / Buy Now") floats as a pill capsule with `0.75rem` outer margin padding, preserving ambient background visibility beneath frosted edges.

## Elevation & Depth

Visual depth is conveyed through translucent layering, frosted backdrop filters, and delicate ambient shadows rather than stark elevation shelves.

- **Flat Surface Cards**: Product listing tiles sit at base zero elevation (`z-0`) on the `#FBF9F8` background, defined by a featherlight border stroke (`rgba(36, 32, 30, 0.06)`) and pure white fill.
- **Floating Pill Docks**: The bottom navigation capsule and floating filter triggers utilize an ambient float shadow: `0px 10px 30px -4px rgba(36, 32, 30, 0.12)`, combined with a `backdrop-filter: blur(16px)` and 92% opaque fill (`rgba(255, 255, 255, 0.92)` or solid charcoal `#24201E`).
- **Modal Sheets & Overlays**: Bottom sheets for condition filtering, sizing charts, and seller profiles use an ambient elevation shadow of `0px -8px 32px rgba(36, 32, 30, 0.08)` paired with an ultra-soft dim scrim (`rgba(36, 32, 30, 0.35)`).
- **Interactive Badges**: Floating wish-list hearts and condition stickers pinned onto product images utilize frosted disks with `backdrop-filter: blur(8px)` and `rgba(255, 255, 255, 0.85)` surface fills with 1px border highlights.

## Shapes

The design system adopts a **Pill-shaped (Level 3)** geometry. Rounded contours are central to the brand expression, giving secondhand items a soft, organic, and contemporary tactile presence reminiscent of modern wellness design.

- **Pill Primitives (9999px / 2rem - 3rem)**: Exclusively employed for navigation bars, segmented category controls, condition tags, search fields, floating buttons, and status chips.
- **Product Tiles & Cards (`rounded-lg` / 1.5rem to 2rem)**: Product cards, collection promo banners, and seller review blocks feature generous corner radii (`24px` to `28px`), harmonizing smoothly with the organic curves of the pill controls.
- **Micro UI (`rounded-sm` to `rounded-md` / 8px to 12px)**: Product thumbnail color swatches and image preview thumbnails maintain slightly reduced rounding to preserve content area without appearing blocky.

## Components

### Buttons
- **Primary Action (Crimson Pill)**: Full-width or inline pill capsule with `#8B1A22` background, crisp white typography (`label-lg`), zero visible border, and subtle scale-down feedback (`0.98x`) on tap.
- **Secondary Action (Charcoal / Ink Pill)**: Deep `#24201E` background with white typography for alternate terminal commands (e.g., "Add to Bag" vs. "Buy Now").
- **Ghost & Subtle Action**: Translucent warm stone pill (`#F4F1EE`) with espresso text (`#24201E`) and no border, providing low-friction secondary exploration.
- **Icon Buttons (Favorites, Back, Share)**: Circular floating discs (40px x 40px) with frosted translucent white backdrop, micro-border, and center-aligned 20px monochrome icons. When active, favorite hearts transition to `#8B1A22` fill with gentle scale pulse.

### Navigation Pill Dock
- A floating capsule (height: 58px) centered horizontally at the bottom of the viewport.
- Contains an active sliding pill capsule: when a tab is selected, a pill highlight wraps the active icon and label with an animated fluid spring.
- Inactive icons rest in muted tone (`#948E8B`) with no text label; the active tab expands to show both icon and title.

### Category Chips & Condition Filters
- **Pills**: Height 36px, horizontal padding 16px.
- **Inactive State**: Light oyster background (`#FFFFFF`) with a 0.5px hairline border (`#EFECE9`) and `#4B4441` text.
- **Active State**: Inverted solid `#24201E` or deep `#8B1A22` with pure white text.
- **Condition Tags (Embedded on Cards)**:
  - *Like New*: Tiny pill chip pinned to top-left of image, pastel sage fill (`#EBF1EA`), deep sage text (`#455A3F`), `label-sm`.
  - *Vintage*: Warm desert-rose fill (`#F9EDED`), crimson text (`#8B1A22`), `label-sm`.
  - *Good / Preloved*: Soft pebble fill (`#F2EFEB`), warm slate text (`#484340`), `label-sm`.

### Product Cards
- **Structure**: Vertical card with top image container (3:4 ratio) with `rounded-xl` (20px), sitting flush or with minimal card border.
- **Image Treatment**: Soft studio background padding; pre-cleaned or neutrally staged secondhand photography.
- **Meta Hierarchy**: Condition badge floats in top-left; wishlist heart button floats in top-right. Below the media: Title in `body-md` (truncated to 1 line), Seller/Brand in `body-sm` (`#948E8B`), Price in `title-md` (`#24201E`) with optional strikethrough original retail in `body-sm`.
- **Quick Action**: Optional inline pill button ("Shop" / "+") nested on the lower right corner of the media frame.

### Input Fields & Search
- **Search Bar**: 48px height, full pill shape (`rounded-full`), soft bone fill (`#F3F0ED`), zero outer border on idle. Left-aligned magnifying icon, right-aligned slider/filter button inside an inset circular button.
- **Focus State**: 1.5px border highlight in `#8B1A22` with an ambient crimson glow (`rgba(139, 26, 34, 0.08)`).
- **Form Fields**: Floating label style in rounded pill or soft rounded rectangle (`16px`) with clear separation for size, condition description, and price offering.

### Checkboxes & Segmented Pickers
- **Segmented Sliders**: Full pill container holding equal-width options with a sliding white pill thumb creating physical depth.
- **Checkboxes**: Smooth rounded squircle (6px radius) or circular toggle checks with `#8B1A22` fill and white checkmark icon when selected.