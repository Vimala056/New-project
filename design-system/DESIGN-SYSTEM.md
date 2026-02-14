# KodNest Premium Build System

A premium SaaS design system for B2C product companies. Calm, intentional, coherent, confident.

---

## Design Philosophy

- **Calm** — No visual noise, no animation clutter
- **Intentional** — Every element has purpose
- **Coherent** — One mind designed it; no visual drift
- **Confident** — Serious, professional, trustworthy

**Avoid:** Gradients, glassmorphism, neon colors, animation noise, flashy effects, playful tone, hackathon-style aesthetics.

---

## Color System

Maximum 4 colors across the entire system.

| Role | Value | Usage |
|------|-------|-------|
| Background | `#F7F6F3` | Page background (off-white) |
| Primary text | `#111111` | Headlines, body copy |
| Accent | `#8B0000` | CTAs, focus states, links |
| Success | `#4a6741` | Shipped, completed states |
| Warning | `#9a7b4f` | In progress, attention needed |

Semantic variants (derived): `--color-text-secondary`, `--color-text-muted`, `--color-border`, `--color-border-focus`.

---

## Typography

### Fonts
- **Headings:** Cormorant Garamond (serif) — large, confident, generous spacing
- **Body:** DM Sans (sans-serif) — clean, 16–18px, line-height 1.6–1.8

### Scale
- H1: 2.5rem
- H2: 2rem
- H3: 1.5rem
- H4: 1.25rem
- Body: 1rem (16px), Body large: 1.125rem (18px)
- Small: 0.875rem

### Rules
- Max width for text blocks: **720px**
- Line height: 1.6–1.8 for body
- No decorative fonts, no random sizes

---

## Spacing System

Use only these values. Never use random spacing (13px, 27px, etc.).

| Token | Value | Use |
|-------|-------|-----|
| `--space-1` | 8px | Tight gaps |
| `--space-2` | 16px | Default padding |
| `--space-3` | 24px | Card padding, section gaps |
| `--space-4` | 40px | Section spacing |
| `--space-5` | 64px | Major sections |

Whitespace is part of the design.

---

## Global Layout Structure

Every page follows this structure:

```
[Top Bar]
    ↓
[Context Header]
    ↓
[Primary Workspace (70%) | Secondary Panel (30%)]
    ↓
[Proof Footer]
```

### Top Bar
- **Left:** Project name
- **Center:** Progress indicator (Step X / Y)
- **Right:** Status badge — Not Started / In Progress / Shipped

### Context Header
- Large serif headline
- 1-line subtext
- Clear purpose, no hype language

### Primary Workspace (70% width)
- Main product interaction
- Clean cards, predictable components
- No crowding

### Secondary Panel (30% width)
- Step explanation (short)
- Copyable prompt box
- Buttons: Copy, Build in Lovable, It Worked, Error, Add Screenshot
- Calm styling

### Proof Footer (persistent)
Checklist style:
- □ UI Built
- □ Logic Working
- □ Test Passed
- □ Deployed

Each checkbox requires user proof input.

---

## Component Rules

| Component | Rule |
|-----------|------|
| Primary button | Solid deep red (`#8B0000`) |
| Secondary button | Outlined, same border radius |
| Hover | Same effect everywhere, 150–200ms |
| Border radius | `6px` consistent |
| Inputs | Clean borders, no heavy shadows, clear focus state |
| Cards | Subtle border, no drop shadows, balanced padding |

---

## Interaction Rules

- **Transitions:** 150–200ms, ease-in-out
- **No bounce, no parallax**

---

## Error & Empty States

### Errors
- Explain what went wrong
- Explain how to fix
- Never blame the user

### Empty States
- Provide next action
- Never feel dead

---

## File Structure

```
design-system/
├── index.css      # Single import (fonts + tokens + layout + components)
├── tokens.css     # Colors, typography, spacing, layout variables
├── layout.css     # Top bar, context header, workspace, panel, footer
├── components.css # Buttons, inputs, cards, badge, prompt box, error, empty
└── DESIGN-SYSTEM.md
```

---

## Usage

Import the design system in your app:

```html
<link rel="stylesheet" href="design-system/index.css">
```

Or in CSS:

```css
@import "design-system/index.css";
```

Apply layout classes: `kodnest-layout`, `kodnest-topbar`, `kodnest-context-header`, `kodnest-main`, `kodnest-workspace`, `kodnest-panel`, `kodnest-footer`.

Apply component classes: `kodnest-btn--primary`, `kodnest-btn--secondary`, `kodnest-card`, `kodnest-input`, `kodnest-badge`, etc.
