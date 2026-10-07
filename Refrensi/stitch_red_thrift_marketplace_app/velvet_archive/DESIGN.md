---
name: Velvet & Archive
colors:
  surface: '#fcf9f7'
  surface-dim: '#dcd9d8'
  surface-bright: '#fcf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f1'
  surface-container: '#f0edeb'
  surface-container-high: '#eae8e6'
  surface-container-highest: '#e5e2e0'
  on-surface: '#1b1c1b'
  on-surface-variant: '#584140'
  inverse-surface: '#30302f'
  inverse-on-surface: '#f3f0ee'
  outline: '#8c706f'
  outline-variant: '#e0bfbd'
  surface-tint: '#ae2f37'
  primary: '#4f000b'
  on-primary: '#ffffff'
  primary-container: '#780016'
  on-primary-container: '#ff797a'
  inverse-primary: '#ffb3b1'
  secondary: '#a53940'
  on-secondary: '#ffffff'
  secondary-container: '#fd7b80'
  on-secondary-container: '#72131f'
  tertiary: '#500000'
  on-tertiary: '#ffffff'
  tertiary-container: '#790000'
  on-tertiary-container: '#ff7b67'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#8c1422'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ffb3b3'
  on-secondary-fixed: '#400009'
  on-secondary-fixed-variant: '#85212b'
  tertiary-fixed: '#ffdad4'
  tertiary-fixed-dim: '#ffb4a8'
  on-tertiary-fixed: '#410000'
  on-tertiary-fixed-variant: '#920703'
  background: '#fcf9f7'
  on-background: '#1b1c1b'
  surface-variant: '#e5e2e0'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 17px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system crafts an upscale, modern marketplace environment for pre-loved fashion and curated vintage archives. By rejecting the chaotic, flea-market clutter typical of secondhand platforms, it reframes thrift as conscious luxury and heritage curation. 

### Aesthetic Philosophy
The visual direction balances **sleek modern glassmorphism** with an editorial, tactile richness. Translucent frosted overlays, delicate inner borders, and sweeping pill shapes create an ethereal, tactile canvas that showcases pre-owned garments with museum-grade care.

### Core Attributes
- **Curated & Dignified:** Elevated treatment of vintage apparel, making every piece feel one-of-one rather than discarded.
- **Warm Tactility:** Cream-tinted foundations eliminate digital sterility, giving garments natural warmth and depth.
- **Sleek Fluidity:** Pill-shaped interactive elements, smooth floating chrome surfaces, and frosted panels make navigation feel effortless and dynamic.

## Colors

The palette departs from conventional utilitarian greens, adopting an opulent, editorial suite of deep oxblood, rich maroon, and velvet crimsons anchored by warm parchment neutrals.

### Palette Architecture
- **Primary (`#780016` - Deep Vintage Maroon):** The core brand color. Anchors primary calls-to-action, selected pill indicators, and high-impact editorial headings.
- **Secondary (`#5C0011` - Dark Noir Crimson):** Deep shadow tone used for elevated text emphasis, active states, badge outlines, and high-contrast iconography.
- **Tertiary (`#8B0000` - Radiant Crimson):** Highlight tone used for promotional badges, verification ticks, live bidding alerts, and heart/favorite reactions.
- **Neutral Canvas (`#FAF7F5` - Alabaster Cream):** A soft, warm foundation tinted with subtle peach-sand notes. Prevents stark optical glare and complements natural textile photography.

### Surface System & Alpha Variants
- **Glass Panel Surface:** `rgba(255, 255, 255, 0.72)` paired with `backdrop-filter: blur(16px)` and a boundary hairline of `rgba(120, 0, 22, 0.08)`.
- **Active Glass Pill:** `rgba(120, 0, 22, 0.08)` fill with `rgba(120, 0, 22, 0.16)` border.
- **Scrim / Overlay:** `rgba(32, 10, 14, 0.45)` with `backdrop-filter: blur(8px)`.
- **Text & Foreground Shades:**
  - High Emphasis: `#1C0F12` (Espresso Black)
  - Medium Emphasis: `#665558` (Muted Warm Charcoal)
  - Low Emphasis: `#A39295` (Soft Ash Maroon)

## Typography

The type system is built on **Plus Jakarta Sans**, offering geometric precision paired with organic terminals. This provides a contemporary, friendly silhouette that matches the rounded glass UI language while maintaining crisp clarity at dense marketplace scales.

### Hierarchy & Treatment
- **Display & Headlines:** Set tight with subtle negative tracking (`-0.02em` to `-0.03em`) to deliver modern editorial confidence. Headings use dark espresso `#1C0F12` or primary crimson `#780016`.
- **Product Titles & Pricing:** Use `title-md` and `headline-sm` with semibold weight, giving monetary figures immediate visual priority.
- **Labels & Micro-Copy:** Metadata chips (size, condition, authenticity status) use `label-md` and uppercase `label-sm` with wider tracking (`0.02em` to `0.04em`) for legibility across frosted glass badges.

## Layout & Spacing

A disciplined 8px modular spacing rhythm maintains breathing room between content-heavy visual assets.

### Grid & Breakpoints
- **Mobile (< 768px):** 4-column fluid layout with `1rem` outer margins and `0.75rem` gutters. Product feeds arrange into a dual-column masonry or symmetrical staggered grid.
- **Tablet (768px – 1024px):** 8-column layout with `1.5rem` margins and `1rem` gutters. Bottom navigation shifts to a compact floating glass pill bar.
- **Desktop (> 1024px):** 12-column layout capped at an optimal reading width of `1280px` max-width, `2rem` margins, and `1.5rem` gutters.

### Component Spacing Application
- **Card Interior Padding:** `space-sm` around image media; `space-md` for product description blocks.
- **Floating Controls:** Floating navigation pills sit `space-lg` above the bottom screen edge, nested within safe viewport boundaries.

## Elevation & Depth

Visual hierarchy relies on light dispersion, translucent layering, and diffused warm shadows rather than opaque greyscale stacking.

### Glassmorphism System
- **Level 0 (Base Canvas):** Solid warm cream `#FAF7F5` with subtle radial lighting accents in warm beige.
- **Level 1 (Card & Section Surfaces):** Semi-opaque frosted panel: `rgba(255, 255, 255, 0.76)`, blur `14px`, bounded by a light border `rgba(255, 255, 255, 0.9)` at top and `rgba(120, 0, 22, 0.05)` at bottom.
- **Level 2 (Interactive Overlays & Sticky Modules):** Frosted glass: `rgba(255, 255, 255, 0.84)`, blur `20px`, accompanied by a crimson-tinted ambient drop shadow: `0 8px 24px -4px rgba(120, 0, 22, 0.08)`.
- **Level 3 (Floating Pill Navigation & Modals):** High-reflectance glass: `rgba(255, 255, 255, 0.92)`, blur `28px`, cast with dual shadows:
  - Ambient: `0 16px 36px -8px rgba(92, 0, 17, 0.14)`
  - Keylight: `0 4px 12px 0 rgba(120, 0, 22, 0.04)`

## Shapes

The interface embraces a hyper-rounded, pill-shaped aesthetic (`roundedness: 3`) to match modern glass styling.

### Curvature Spectrum
- **Full Pill (`9999px`):** Used on all interactive buttons, filter chips, search fields, floating bottom tab bars, and condition rating badges.
- **Extra-Large Rounded Containers (`rounded-xl` / `24px` - `32px`):** Product listing cards, hero discovery carousels, and bottom sheets.
- **Media Image Masking (`16px` - `20px`):** Product photos retain soft, pronounced outer radii, preventing sharp corners from interrupting the fluid glass frame.

## Components

### Buttons
- **Primary Action (Buy Now / Make Offer):** Pill-shaped, rich maroon `#780016` background with white `#FFFFFF` text. Subtle inner glow `inset 0 1px 1px rgba(255, 255, 255, 0.25)` and a soft maroon shadow `0 8px 20px -4px rgba(120, 0, 22, 0.35)`.
- **Secondary (Add to Bag / Chat):** Glass pill surface `rgba(255, 255, 255, 0.8)`, border `1px solid rgba(120, 0, 22, 0.2)`, text `#780016`.
- **Ghost / Minimalist:** Unfilled pill, text `#5C0011`, dynamic background `rgba(120, 0, 22, 0.05)` on hover/press.

### Chips & Filter Tags
- **Default State:** Pill shape with translucent white background `rgba(255, 255, 255, 0.7)`, border `1px solid rgba(120, 0, 22, 0.1)`, text `#665558`.
- **Selected State:** Solid `#780016` pill with text `#FFFFFF` or frosted crimson tint `rgba(120, 0, 22, 0.12)` with `#780016` bold text and an active dot indicator.

### Product Cards
- **Architecture:** Frosted glass panel with `24px` radius. Interior features a photo with `16px` radius, top-right glass pill favorite button (`backdrop-filter: blur(8px)`, heart icon toggling into `#8B0000`), item brand in `label-sm` uppercase, title in `title-md`, and price tagged next to the original retail strikethrough.
- **Condition Tags:** Floating micro-pills over the bottom-left of garment photos (`Pristine`, `Gently Used`, `Vintage Archive`) set in `label-sm`.

### Input & Search Fields
- **Search Bar:** Full pill with frosted background `rgba(255, 255, 255, 0.85)`, subtle border `1px solid rgba(120, 0, 22, 0.08)`, magnifying glass icon in `#780016`, placeholder in `#A39295`.
- **Form Fields:** `16px` rounded corners, padding `12px 18px`. Focus ring transitions to `#780016` with a soft crimson glow `0 0 0 3px rgba(120, 0, 22, 0.12)`.

### Checkboxes & Radios
- **Radio Buttons:** Circular with `#FAF7F5` base, stroke `1.5px solid rgba(120, 0, 22, 0.3)`. Checked state displays a solid inner dot in `#780016`.
- **Checkboxes:** Rounded square (`6px` radius) transitioning on selection to solid `#780016` with a white checkmark icon.

### Floating Pill Navigation
- Floating detached dock pinned above the viewport bottom. Frosted glass finish `rgba(255, 255, 255, 0.85)`, blur `24px`, inner hairline highlight, and rounded to `9999px`. Active tabs illuminate with a small pill indicator in `#780016` containing light iconography.

### Pre-Loved Verification Badges
- Miniature badge with tertiary crimson accent `#8B0000` and cream lettering indicating authenticity inspection, seller rating stars, or verified material composition (e.g., "100% Cashmere", "Verified Authentic").