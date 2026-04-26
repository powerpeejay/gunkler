# DIRECTION C — Editorial-Magazine

> Phase 1 artifact. Reviewed alongside `previews/C.html`.

---

## Risk profile

`bold` — Direction-Matrix erlaubt diese als Cross-Pollination falls Banned-Spalte respektiert wird (kein playful, kein neon — passt). Visuell-disruptiv für DACH-Handwerker-Segment, deshalb der Pitch-Wow-Move für Cold-Outreach.

## One-sentence philosophy

Karl-Heinz' Bad-Renovierungen werden wie Reportagen einer Wohnzeitschrift behandelt — Kapitel, Pull-Quotes, Photo-Frames mit Captions, Drop-Caps in jeder Story.

## Why this fits this client

Cite `INTAKE.md`:

- **Audience match (§2):** ländliche 60+ Audience liest tatsächlich Print (Wohnzeitschriften, Regional-Anzeiger) — die Magazin-Sprache ist ihnen näher als App-UIs. Sekundär-Audience (35–50) reagiert auf den unerwarteten Editorial-Move im Trade-Sektor
- **Primary goal alignment (§3):** Beratungstermin = Vertrauen via Geschichten. Magazin-Format zwingt zu narrativem Content (Kunden-Story, Vorher-Nachher als Reportage), das transportiert Vertrauen tiefer als Spec-Boxen oder Service-Cards
- **Old-site improvement (§4):** das größte fehlende Element auf der alten Site sind Vorher-Nachher-Bilder. C macht genau diese Galerie zum strukturellen Hauptelement — die Site IST eine Magazin-Ausgabe von Karl-Heinz' Renovierungen
- **Cold-outreach Wow-Faktor:** kein deutscher Sanitär-Handwerker hat eine Editorial-Magazine-Site. Peter pitcht "ich zeige dir wie deine Renovierungen wie ein Magazin aussehen würden — möchtest du diese Site übernehmen?"

## The ONE move

**Magazin-Asymmetric-Grid mit Chapter-Header, Drop-Cap Body-Intro und Pull-Quote in Instrument Serif Italic in Riesengröße zwischen Hero und Body.** Hairline-thin schwarze Trenner statt Background-Cards. Tabular-Lining-Numerals für Section-Numbering ("01 — DAS BAD ALS RAUM"). Photo-Captions in Serif-Italic.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#FAF7F2` | Base canvas (paper-cream, warmer und mehr Print-feel als A) |
| `--color-surface` | `#FFFFFF` | Photo-Frames, Card-Backgrounds (max purity weiß für Print-Feel) |
| `--color-surface-2` | `#F1ECE3` | Subtle Hervorhebung (selten genutzt) |
| `--color-border` | `#1A1815` | Hairlines (STARK — schwarz wie Print-Linie, nicht muted-grey) |
| `--color-text` | `#0D0B08` | Primary text (deep ink, fast schwarz) |
| `--color-text-muted` | `#6E6660` | Secondary text, Photo-Captions |
| `--color-accent` | `#A33D1B` | Terracotta-glow — kommt nur sparsamst zum Einsatz: CTA-button + ein kleiner accent-marker pro Sektion (Section-Number-Underline) |
| `--color-accent-hover` | `#7C2C12` | Accent hover state |

**Color logic:** Paper-Cream + Schwarz (sichtbar starke Hairlines) dominieren. Akzent ist die seltenste Farbe der Site — taucht 2-3 Mal auf der Homepage auf, sonst nichts. Der visuelle Codex ist "schwarze Tinte auf cremigem Papier", Akzent ist die "Zweite Farbe der Druckerei". Forbidden: jegliches Indigo, jegliches Cool-Grey, jegliche Karten-Backgrounds (Magazin nutzt Whitespace + Hairlines, keine Cards).

## Typography

- **Display:** Instrument Serif — self-hosted woff2 — weight 400 normal + 400 italic (italic ist tragend!)
- **Body:** Newsreader — self-hosted woff2 — weights 400/500/700, opsz variable 6..72 (für unterschiedliche Größen perfekt skaliert)
- **Self-hosted:** [x] confirmed
- **Sample headline rendering:**
  > *"Bei uns ist Ihr Bad Chefsache, keine Glückssache."*
  > — Instrument Serif **Italic** 400, 5rem desktop / 3rem mobile, line-height 1.0, tracking -0.015em, color text. **Italic** ist hier strukturell, nicht emphasis — die ganze Tagline ist eine "Pull-Quote", typisches Magazin-Mittel.
  >
  > Chapter-Header: `01 — DAS BAD ALS RAUM` — Newsreader 500 small-caps, 0.75rem, tracking 0.15em, color text-muted.
  >
  > Body-Intro mit Drop-Cap: erste Zeile beginnt mit großem Initial in Newsreader 700, opsz 72, 4.5rem hoch, float left, drei Zeilen Body umschließend.

## Spacing & layout character

- **Density:** balanced — section padding 96px desktop, 64px mobile. Bei vollen Photo-Frames Edge-to-Edge ohne Padding (das ist die Magazin-Spread-Geste)
- **Asymmetry:** stark + intentional — 12-Spalten-Grid wird gezielt "gebrochen": Chapter-Header in Spalte 2-4, Pull-Quote in Spalte 3-10, Body in Spalte 5-9, Photo in Spalte 1-7 (komplett asymmetrisch zur Spalte-Nummerierung). Mobile fällt auf Single-Column zurück mit konsistentem L-Padding
- **Section rhythm:** Reportage-Pacing — Chapter-Header → Pull-Quote → Photo → Body-Intro mit Drop-Cap → Body-Continuation 2-spaltig (max-width 60ch pro Spalte) → Caption-Photo → next Chapter

## Texture / atmosphere

- **Subtle paper grain** stärker als A (5% opacity, nicht 3%) — verstärkt Print-Feel
- **Hairline-Trenner überall:** Section-Trennungen, unter Captions, neben Pull-Quotes — nicht als dekorative Elemente sondern als strukturelle Anker (wie in einem echten Magazin-Layout)
- **Photo art-direction:** Großformat-Photo-Frames mit Caption darunter ("Komplettrenovierung Bad Hersfeld · 2024 · Foto: Karl-Heinz Gunkler"). Material-Detail UND Wide-Room-Shots beide erlaubt (anders als A). Bei Stock-Platzhalter ein deutliches "PLATZHALTER · Echtes Foto folgt nach Sign"-Caption-Overlay

## Mood references (real sites)

1. **https://www.pitchfork.com/** — editorial Hierarchie, Pull-Quote-Treatment, Article-Header-Disziplin. Übernehme: Section-Number + Chapter-Title-Pattern, Drop-Cap-Use
2. **https://www.are.na/** — minimal print-feel mit asymmetrischen Editorial-Layouts, hairline-trenner statt Cards. Übernehme: Whitespace-Disziplin + die "ich zeige dir was wirklich wichtig ist"-Auswahlhaltung
3. **https://andreas-duerr.vercel.app/** — Vault Positiv-Anker. Übernehme: Beweis dass Serif-Display in Handwerker-Kontext funktioniert (Fraunces dort, Instrument Serif hier). Discard: andreas-duerr ist nicht editorial-strukturell, ich pushe weiter

Keine Dribbble/Awwwards-Refs.

## Trade-offs

What this direction sacrifices vs. A and B:

- **vs. A:** prätentiöser Risk — "wir sind keine Wohnzeitschrift, wir sind ein Sanitär-Geschäft" könnte Karl-Heinz' Selbstverständnis übersteigen. Wenn er ländlich-bodenständig pitchen möchte: zu hoch
- **vs. B:** weniger immediate "Specs/Daten/Vertrauen"-Codex; jüngere B2B-Käufer fragen sich vielleicht "wo ist die Service-Liste?"
- **General:** absolut abhängig von echter Photography (Vorher-Nachher-Reportagen). Funktioniert NICHT mit Stockphotos aus Unsplash — das kollabiert sofort. Cold-Outreach-Mockup nutzt Stock-Platzhalter mit explizitem "PLATZHALTER"-Caption, was die Pitch-Story ist: "schau wie es aussieht WENN du echte Photos lieferst"

## Implementation notes

- **Best-fit components:** Chapter-Headers mit Section-Number, Drop-Caps (CSS `::first-letter`), Pull-Quotes als eigene Sektion (nicht inline), 2-Column-Body-Text bei Long-Form, Photo-Frames mit unterschriebenen Captions, hairline-thin schwarze Trenner überall
- **Avoid for this direction:** flat shadow-md cards, gradient backgrounds, sans-serif anywhere außer optional in Spec-Footer, icon grids, mehrere Akzentfarben gleichzeitig
- **Performance considerations:**
  - Newsreader variable font (Latin) ≈ 130KB — relativ schwer; preload nur das 400-weight, lazy 500/700
  - Drop-Cap via `::first-letter` (CSS-only, kein extra Font-Asset)
  - Photo-Frames müssen large + qualitativ sein → AVIF Pflicht, nicht WebP-Fallback
  - Total above-fold target: <250KB (akzeptiert höhere Last für Editorial-Erlebnis)
