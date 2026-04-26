# DESIGN.md — Karl-Heinz Gunkler · Mein Bad

> Per-client visual system. Read by any AI agent before generating UI.
> Format follows the Google Stitch DESIGN.md spec, adapted for DACH SME projects.
> Pair with `CLAUDE.md` (build rules) in the project root.
>
> **Direction A (warm-organic + trust)** locked 2026-04-26 after Phase 1.
> Full reasoning in `directions/A-warm-organic-trust.md`. B + C archived.

---

## 1. Visual Theme & Atmosphere

**Direction:** `warm-organic` + `trust-and-authority` (Cross-Pollination)
**Mood (3 words):** ruhig, handfest, persönlich
**Density:** generous
**One-line philosophy:** Die Site fühlt sich an wie der Showroom — warm beleuchtet, ruhig, mit Materialien die du anfassen willst. Die emotionale Investition einer Bad-Renovierung in Typografie und Farbe übersetzt.

**Reference anchors** (sites whose feel we're aiming at, not copying):
- https://andreas-duerr.vercel.app/ — Vault Positiv-Anker, Cream-Surface + warmer Akzent für Handwerker, gleiche Cross-Pollination
- https://www.aesop.com/ — Material-Photography-Styling + restrained Akzent-Disziplin
- https://www.notion.so/ — warm typography + soft surfaces als Inspiration für die persönliche "Mein Bad"-Voice

---

## 2. Color Palette & Roles

Define semantic role first, then the value. Hex literals never appear in markup — only CSS variables.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#F8F3EB` | Base canvas — cream, leicht wärmer als duerr |
| `--color-surface` | `#F1E9DA` | Elevated surface (Cards, Sektions-Blöcke) |
| `--color-surface-2` | `#E8DCC4` | Secondary surface (Hervorhebung, Demo-Strip-Background) |
| `--color-border` | `#D9C9A9` | Hairlines, Trenner |
| `--color-text` | `#2A2018` | Primary text — warm-ink (brauntoniges Schwarz, nicht Pure Black) |
| `--color-text-muted` | `#5A4A38` | Secondary text, Captions, Eyebrows |
| `--color-accent` | `#B85C2A` | CTA-Background, "Chefsache"-Italic-Wort, Hover-Marker (deeper terracotta — kein Neon-Orange) |
| `--color-accent-hover` | `#9B4A1F` | Accent hover state |
| `--color-focus-ring` | `#2A2018` | Keyboard focus outline (text-color statt accent — kontrastreicher) |

**Rules:**
- Dominant: `--color-bg` + `--color-text`. ~85% jeder Viewport-Fläche.
- `--color-accent` taucht auf MAX 5% jeder Viewport-Fläche auf. Konkret: CTA-Button (1× pro Sektion), das Wort "Chefsache" in der Hero-Tagline, Section-Heading-Hairline-Underline.
- `--color-accent` NIEMALS für Body-Copy, große Surfaces, Backgrounds.
- `--color-bg` UND `--color-surface` haben beide warm-cream Tilt — kein steriles Weiß irgendwo.
- Photo-Drop-Shadow nutzt warm-ink mit Terracotta-Tinte: `rgba(184, 92, 42, 0.18)` als Layer 1 + `rgba(42, 32, 24, 0.15)` als Layer 2.

---

## 3. Typography

**Pairing:** Fraunces (Display) / Inter (Body)
**Source:** Self-hosted woff2 in `/fonts/`, geladen via `/fonts/fonts.css`. **Niemals** load from `fonts.googleapis.com`.

| Style | Family | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Display (h1) | Fraunces | clamp(2.75rem, 6vw, 4.75rem) | 600, opsz 144 | -0.025em | 0.98 |
| Heading (h2) | Fraunces | clamp(1.875rem, 4vw, 3rem) | 600, opsz 96 | -0.02em | 1.05 |
| Subheading (h3) | Fraunces | clamp(1.25rem, 2vw, 1.5rem) | 600, opsz 36 | -0.015em | 1.2 |
| Eyebrow / Pre-heading | Inter | 0.75rem | 500 | 0.18em UPPERCASE | 1.4 |
| Body | Inter | 1rem | 400 | 0 | 1.55 |
| Body-large (Subhead unter h1) | Inter | 1.15rem | 400 | 0 | 1.55 |
| Small / Meta | Inter | 0.85rem | 400 | 0.01em | 1.5 |
| Caption (Photo) | Inter | 0.75rem | 500 | 0.05em UPPERCASE | 1.4 |
| CTA-Button-Text | Inter | 0.95rem | 500 | 0 | 1 |

**Special treatments:**
- "Chefsache" in der Hero-Tagline: Fraunces 600 **Italic** + `--color-accent` color. Kein anderer Italic-Use auf der Site.
- Pull-Quotes (in Sektionen): Fraunces 600 Italic, 1.875rem desktop / 1.375rem mobile, line-height 1.3, max-width 28ch, hängend mit linker Hairline-Border (4px solid `--color-accent`, 24px padding-left).

**Rules:**
- 2 families maximum (Fraunces + Inter). Keine dritte einführen.
- 4 weights total verwendet: Fraunces 600 + 800 (für Pull-Stops), Inter 400 + 500. Keine 700/Bold-Inter.
- Body measure: 60–70ch hard limit. Subhead: 52ch.
- Variable-Font opsz Axis aktiv nutzen — `font-variation-settings: "opsz" <number>` für jede Display-Größe (siehe Sizes oben).

---

## 4. Component Stylings

### Buttons

| Variant | Background | Text | Border | Hover | Notes |
|---|---|---|---|---|---|
| Primary | `--color-accent` | `--color-bg` | none | `--color-accent-hover` + `translateY(-1px)` | Max 1 pro Viewport. Verb-first ("Beratungstermin vereinbaren"). |
| Secondary | transparent | `--color-accent` | 1px `--color-accent` | Background → `--color-accent`, Text → `--color-bg` | Supporting Action. Default für WhatsApp-CTA. |
| Ghost | transparent | `--color-text-muted` | none | Color → `--color-accent` | In-flow Links, Footer-Links, Tertiär. |

All buttons:
- Padding: `1rem 1.75rem` desktop, `0.875rem 1.5rem` mobile
- Border-radius: **`2px`** (kantig, kein abgerundetes Pill — passt zu Material-Aesthetik)
- Font: Inter 500, 0.95rem, line-height 1
- Transition: `transform 180ms ease-out, background-color 180ms ease-out, color 180ms ease-out`
- `:focus-visible` → `outline: 2px solid var(--color-focus-ring); outline-offset: 3px;`
- `:active` → `transform: translateY(0)` (deaktiviert hover-lift während click)
- `cursor: pointer` Pflicht
- Min-Touch-Target: 44×44px effektive Klickfläche

### Cards

- Background: `--color-surface`
- Border: 1px `--color-border` (kein Shadow auf Cards — Shadows sind exklusiv für Photos reserviert)
- Padding: `2rem` desktop, `1.5rem` mobile
- Border-radius: `2px` (matches Button-Scale)
- Heading inside card: Fraunces h3, 1.5rem, mit Hairline-Underline 1px `--color-accent` nach 28px tracking-bottom

### Inputs

- Background: `--color-bg` (nicht surface — Inputs sollen "leer" wirken)
- Border: 1px `--color-border`, focus → 1px `--color-accent`
- Padding: `0.875rem 1rem`
- Label: IMMER sichtbar, ÜBER dem Input, Inter 500 0.85rem mit 6px margin-bottom. Kein Placeholder-as-Label.
- Required-Marker: Asterisk in `--color-accent`, `*` Pflicht.

### Navigation

- Height: 80px desktop, 64px mobile
- Background: `--color-bg` mit `backdrop-filter: blur(12px)` ON SCROLL (transparent at top)
- Border-bottom: 1px `--color-border`, ON SCROLL only (top: none)
- Wordmark left: "Gunkler · *Mein Bad*" — Fraunces 600, 1.4rem, "Mein Bad" in Italic + `--color-accent`
- Nav-Links: Inter 500, 0.85rem UPPERCASE 0.08em letter-spacing, color `--color-text-muted`, hover → `--color-accent`
- Mobile: Hamburger ab 880px, Slide-In von rechts, full-height overlay

### Photo Frames (Hero + Sections)

- Aspect-ratio: variabel je Kontext (Hero 4:5, Section 3:2, Detail-Inset 1:1)
- Box-shadow (Hero only): `0 30px 50px -20px rgba(184, 92, 42, 0.18), 0 8px 18px -10px rgba(42, 32, 24, 0.15)`
- Caption: absolut positioniert bottom-left, `--color-bg` background mit 8px 14px padding, Inter caption-style
- Bei Stock-Platzhalter Phase 3: Caption-Suffix " · Platzhalter" in `--color-accent`

### Process-Steps (Wie wir arbeiten — 1-2-3)

- 3-Spalten-Grid (1-Spalte mobile)
- Step-Number: Fraunces 800 opsz 144, 4rem, color `--color-accent`, line-height 1
- Hairline 2px solid `--color-accent` rechts von Number, 24px breit
- Step-Heading: Fraunces 600, 1.5rem, mt-12px
- Step-Body: Inter 400, max-width 28ch, mt-8px

---

## 5. Layout Principles

**Spacing scale (8pt rhythm):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 120, 160px

**Grid:**
- Container max-width: **1480px** (großzügig — passt zur generous Density)
- Page padding: 6vw left/right (~ 24px mobile, ~88px desktop)
- Gutter: 24px mobile, 32px desktop
- Columns: 12 desktop, 4 mobile (12 für asymmetrische 60/38, 7-Spalten-Pattern etc.)

**Section padding:**
- Vertical: 120px desktop, 80px mobile (minimum)
- Hero: 80px top + 120px bottom desktop (sieht in Preview gut aus, beibehalten)

**Whitespace philosophy:** generous — Rhythm > Density. Lieber eine Sektion weniger als jede Sektion vollstopfen.

**Asymmetry:** ja, gezielt:
- **Hero:** 60/38 (Text/Photo) statt 50/50, ~2% Gap
- **"Wie wir arbeiten"-Block:** 7-Spalten-Raster mit gezielten Lücken, Steps belegen Spalten 2-3, 5-6, 8-9 (zentrierte 3-Block-Asymmetrie)
- **Pull-Quote-Sektion:** linksbündig in Spalten 2-7 (nicht zentriert), Hairline-Border-Left
- **Service-Liste:** 2-Spalten asymmetrisch — Heading links 3-Spalten, Liste rechts 8-Spalten
- Alle anderen Sektionen: zentriert max-width 1480px

---

## 6. Depth & Elevation

Drei explizite Layer:

| Layer | Surface | Shadow | Use |
|---|---|---|---|
| Base | `--color-bg` | none | Page background |
| Elevated | `--color-surface` | none (Border statt Shadow auf Cards) | Cards, inline panels, Process-Step-Blöcke |
| Floating | `--color-surface` | `0 12px 32px -8px rgba(42, 32, 24, 0.18)` | Sticky Nav on scroll, Mobile-Slide-In-Menu |

**Photo Layer (sui generis):**
- Hero-Photos: `0 30px 50px -20px rgba(184, 92, 42, 0.18), 0 8px 18px -10px rgba(42, 32, 24, 0.15)` (warm Drop)
- Section-Photos: `0 12px 28px -10px rgba(42, 32, 24, 0.12)` (gedämpfter)

**Texture:** Subtle paper grain als SVG-Noise inline auf `<body>`, **3% opacity**. SVG max ~2KB. Verstärkt warm-organic-Charakter ohne den Browser zu belasten.

---

## 7. Do's and Don'ts

**Do**
- Verwende `--color-accent` sparsamst — er soll sich verdient anfühlen.
- Lead Sektionen mit Type, support mit Imagery (nicht umgekehrt).
- Material-Detail-Photography (Wasserhahn-Chrom, Fliesen-Textur, Holz-Oberfläche) bevorzugen.
- CTAs verb-first formulieren ("Beratungstermin vereinbaren", nicht "Mehr Infos").
- Tagline "Bei uns ist Ihr Bad **Chefsache**, keine Glückssache" als wiederkehrendes typografisches Motiv (Hero-H1 + Footer-Bekräftigung).
- "Chefsache" durchgehend in Italic + Akzent-Farbe wenn die Tagline erscheint.
- WhatsApp-CTA als Secondary-Variante neben Primary-Tel-CTA in Hero und auf Kontakt-Seite.

**Don't**
- Apply gradients to text or large surfaces.
- Use emoji as icons — Lucide oder Heroicons SVG only.
- Stack more than 2 shadow levels.
- Add a section just to fill the page.
- Bauarbeiter-mit-Helm-Stockfotos verwenden (Default-Anchor-Niveau aus Vault).
- Strand-/Beach-Backgrounds (Anti-Pattern aus alter Site).
- Default-Tailwind-Indigo/Slate als Surface (CLAUDE.md §7).
- Inter als Display-Font (verboten in CLAUDE.md §7 — Inter ist hier explizit Body-only-Pairing).
- Mehr als ein Akzent-Element pro Section.

---

## 8. Responsive Behavior

**Breakpoints:** 375 / 768 / 880 / 1024 / 1440px

**Touch targets:** ≥ 44×44px auf Viewports ≤ 880px.

**Collapsing strategy:**
- Hero 60/38 → einspaltig stacked at 880px, Photo BELOW Text (nicht above — Text first für Scroll-Reading)
- Process-Steps 3-up → einspaltig stacked at 768px
- Service-Liste 2-up → einspaltig at 768px
- Horizontal nav → Hamburger at 880px, Slide-in von rechts
- Hero-Type scaled via `clamp()`, kein separater mobile-copy-Text
- Hero-Photo: Mobile = 4:5 ratio gleich wie Desktop. Wenn separater Mobile-Crop nötig (z.B. Detail-Aufnahme): `<picture>` mit `<source media="(max-width: 880px)">`
- Spec-Strip / Demo-Footer: horizontal-scroll auf Mobile mit `overflow-x: auto`, kein wrap

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition: none !important; animation: none !important; }
}
```

---

## 9. Agent Prompt Guide

**Quick reference for prompts:**
- Background: warm cream `#F8F3EB`
- Accent: terracotta `#B85C2A` (sparingly!)
- Text: warm-ink `#2A2018`
- Display: Fraunces 600 italic for emphasis
- Body: Inter 400/500
- Spacing: 8pt rhythm, sections 120px desktop / 80px mobile
- Container: 1480px max
- Border-radius: 2px
- Demo-Mode: noindex, Jacob-Digital-Footer

**Ready-to-use prompts for Phase 3:**

> "Build the Leistungen page for Gunkler. Direction `warm-organic`. Section header h2 in Fraunces 600 opsz 96 with hairline-underline in `--color-accent`. Service-Items als 2-Spalten asymmetrisches Layout (Heading links 3-Spalten, Liste rechts 8). Jeder Service-Item bekommt eine eigene Anker-ID für Deep-Linking. Akzent NUR auf den Item-Heading-Underlines + Section-Title-Underline. Reference DESIGN.md §4 'Cards' für Item-Boxes."

> "Build the 'Wie wir arbeiten' 3-Step section. Use Process-Step component spec from DESIGN.md §4. Steps: 'Vermessen', 'Gestalten', 'Einbauen' (alte Site Copy übernehmen). Step-Numbers 01/02/03 in Fraunces 800 opsz 144, 4rem, accent color. Hairline 2px accent rechts von der Nummer."

> "Build the Referenzen-Galerie page. Photography-led, asymmetrische Photo-Frames mit Captions. Bei Stock-Platzhaltern explicit caption-suffix ' · Platzhalter, echtes Foto folgt nach Sign'. 3-Spalten Masonry desktop, 1-Spalte mobile. Photo-Shadow per DESIGN.md §6 'Section-Photos' specs."

> "Build the Kontakt page form. Inputs per DESIGN.md §4 Inputs spec. Two CTAs above the form: Primary 'Beratungstermin vereinbaren' (tel-link), Secondary 'Foto via WhatsApp senden' (wa.me-link). Below form: address-block in Inter 1.05rem with embedded OpenStreetMap (NICHT Google Maps wegen DSGVO)."

> "Build Impressum + Datenschutz. **Demo-Mode** active: Jacob Digital / Peter Jacob als Diensteanbieter. Demo-Hinweis-Banner top-of-page in `--color-surface-2` background mit Inter 500 0.95rem text. noindex meta confirmed. See cold-outreach-demo-mode.md memory for full text of disclaimer."

---

## Sign-off

**Client:** Karl-Heinz Gunkler · "Mein Bad" (Cold-Outreach Demo-Mode build by Jacob Digital)
**Direction locked:** 2026-04-26 — A (warm-organic + trust-and-authority Cross-Pollination)
**Last updated:** 2026-04-26
**Phase 1 archive:** B-trust-pure und C-editorial-magazine in `directions/_archive/`
