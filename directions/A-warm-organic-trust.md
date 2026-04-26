# DIRECTION A — Warm-Organic + Trust

> Phase 1 artifact. Reviewed alongside `previews/A.html`.

---

## Risk profile

`safe` — primary direction from Direction Matrix for Handwerker (with Cross-Pollination). Lowest pitch-risk for cold outreach.

## One-sentence philosophy

Die Site fühlt sich an wie der Showroom: warm beleuchtet, ruhig, mit Materialien die du anfassen willst — die emotionale Investition einer Bad-Renovierung in Typografie und Farbe übersetzt.

## Why this fits this client

Cite `INTAKE.md`:

- **Audience match (§2):** 60+ Eigenheimbesitzer im ländlichen Hessen, "altersgerechte Badrenovierung", "die nächsten 15-20 Jahre halten" — kein Stripe-cold, kein App-startup-vibe, sondern eine ruhige Beziehungs-Ästhetik
- **Primary goal alignment (§3):** Beratungstermin per Telefon/WhatsApp = persönlicher Erstkontakt → Site muss diese Wärme vorab transportieren, nicht Distanz schaffen
- **Old-site improvement (§4):** ersetzt Strato-Stockphoto-Beach-Background + Arial-system-stack durch eigene typografische Identität; behält den persönlichen Tone der "Chefsache"-Tagline und verstärkt ihn statt ihn als JPG-Banner zu zerstückeln
- **Vault precedent:** identische Cross-Pollination-Strategie wie `andreas-duerr.vercel.app` (Vault Positiv-Anker) — dort bewiesen für vergleichbare Handwerker-Audience

## The ONE move

**Tagline-as-H1 in Fraunces 600 (display optical size 144), tight tracking, mit dem Wort "Chefsache" in Fraunces Italic als emotionaler Pivot.** Foto rechts asymmetrisch bei ~38% Breite eingebettet (nicht 50/50), warmer Drop-Shadow in Terracotta-Tinte. Erzeugt Magazin-Hero-Gefühl ohne Editorial-Härte.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#F8F3EB` | Base canvas (cream, leicht wärmer als duerr) |
| `--color-surface` | `#F1E9DA` | Elevated surface (Karten, Sektionsblöcke) |
| `--color-surface-2` | `#E8DCC4` | Secondary surface (Hervorhebung) |
| `--color-border` | `#D9C9A9` | Hairlines, dividers |
| `--color-text` | `#2A2018` | Primary text (warm-ink, brauntoniges Schwarz) |
| `--color-text-muted` | `#5A4A38` | Secondary text |
| `--color-accent` | `#B85C2A` | CTA, "Chefsache"-Italic, Hover-Marker (deeper terracotta — kein Neon-Orange) |
| `--color-accent-hover` | `#9B4A1F` | Accent hover state |

**Color logic:** Cream dominiert (>80% Bildfläche). Akzent appears nur an: CTA-Button, einem typografischen Wort in der Tagline ("Chefsache"), den Hairline-Underlines unter Service-Headings. Kein Indigo, kein Navy, kein kühles Grau. Forbidden: Default-Tailwind-Slate als Surface, Industrial-Amber wie Schreinermeisterei.

## Typography

- **Display:** Fraunces — Google Fonts (self-hosted woff2 in `/fonts/`) — weights 400/600/800, opsz 9..144 variable
- **Body:** Inter — self-hosted woff2 — weights 400/500/600/700
- **Self-hosted:** [x] confirmed (no Google Fonts CDN — siehe `fonts/fonts.css`)
- **Sample headline rendering:**
  > "Bei uns ist Ihr Bad **Chefsache**, keine Glückssache."
  > — Fraunces 600, opsz 144, 4.5rem desktop / 2.75rem mobile, line-height 0.98, tracking -0.025em. "Chefsache" in Fraunces 600 Italic + accent color.

## Spacing & layout character

- **Density:** generous — section padding 120px desktop, 80px mobile
- **Asymmetry:** ja, gezielt — Hero text 60% / photo 38% (statt 50/50). Service-Sektionen nutzen 7-Spalten-Raster mit gezielten Lücken, nicht uniformes 12-Spalten-Grid
- **Section rhythm:** alternating — full-bleed Photo-Section (Showroom, Bad-Detail) → schmale Text-Sektion (max-width 60ch) → full-width 3-card "Wie wir arbeiten" → wide quote section → full-bleed photo

## Texture / atmosphere

- **Subtle paper grain** als SVG-Noise-Overlay über Cream-Background (3% opacity, ~2KB SVG inline)
- **Photo art-direction:** warm tungsten lighting, Material-Detail-Aufnahmen (Wasserhahn-Chrom, Fliesen-Textur, Holz-Oberfläche), shallow DOF, niemals leere Wide-shots. Keine Bauarbeiter-mit-Helm-Stockfotos. Bei Stock-Platzhaltern: Unsplash-Filter "interior · bathroom · warm · material · close-up"

## Mood references (real sites)

1. **https://andreas-duerr.vercel.app/** — Vault Positiv-Anker. Übernehme: Cream-Surface + warmer Akzent-Terracotta-Mechanik, Fraunces+Sans-Pairing, generöses Spacing für Trade-Site
2. **https://www.aesop.com/** — botanische Material-Photography-Styling + restrained Akzent. Übernehme: art-direction-disziplin für Material-Detail-Aufnahmen (kein generic "person + product")
3. **https://www.notion.so/** — warm typography + soft surfaces. Übernehme: type-warmth-charakter für die persönliche "Mein Bad"-Voice ohne in playful zu kippen

Keine Dribbble/Awwwards-Refs in dieser Direction.

## Trade-offs

What this direction sacrifices vs. B and C:

- **vs. B:** weniger immediate "professional/precise"-Signaling — könnte für jüngere Sekundär-Audience zu nostalgisch wirken; weniger geeignet falls Karl-Heinz sein Geschäft "modernisieren wollen würde" statt "die existierende Wärme verstärken"
- **vs. C:** weniger visuell-disruptiv — kein Pitch-Wow-Faktor "wow das hat noch kein Konkurrent"; sicherer aber unauffälliger
- **General:** funktioniert nur mit echter Photography (Showroom, Material-Details). Bei Stock-Platzhaltern ohne klares Foto-Brief-Follow-up wirkt es generisch warm-organic statt spezifisch Gunkler

## Implementation notes

- **Best-fit components:** asymmetrischer Hero (60/38), Material-Detail-Photo-Frames, Hairline-underlined Service-Headings (Fraunces 600), Pull-Quote in Fraunces Italic, "Wie wir arbeiten"-3-Schritt mit minimaler Iconographie (Ziffer + Hairline statt Icon)
- **Avoid for this direction:** 3-Spalten-Icon-Grid, Carousel, Logo-Strip mit "Trusted by", flat shadow-md cards, Tailwind-default surface scales
- **Performance considerations:**
  - Fraunces variable woff2 (Latin + Latin-Ext) ≈ 130KB — preload only the latin file (47KB) for above-fold, lazy-load latin-ext via unicode-range fallback
  - Grain-Overlay als SVG inline ≤ 2KB
  - Hero-Photo: AVIF + WebP, fetchpriority=high, explizit width/height
  - Total above-fold weight target: <200KB inkl. Fonts
