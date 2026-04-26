# DIRECTION B — Trust-and-Authority Pure

> Phase 1 artifact. Reviewed alongside `previews/B.html`.

---

## Risk profile

`adjacent` — Direction Matrix Secondary für Handwerker. Trust-Codex von Stripe/Linear/Hashicorp übersetzt auf Sanitär-Fachbetrieb. Anker für die Hypothese: vielleicht zieht "professionelle Präzision" diese Audience besser als "warme Vertrautheit".

## One-sentence philosophy

Ein Handwerksbetrieb der seit 30+ Jahren am Standort ist und exakt weiß was er tut — Vertrauen über Klarheit und Präzision, nicht über Wärme.

## Why this fits this client

Cite `INTAKE.md`:

- **Audience match (§2):** Sekundär-Audience (35–50, jüngere Eigenheim-Käufer:innen) — die haben Stripe-/Linear-Aesthetik in ihrem täglichen Tool-Set, kennen das Codex sofort als "vertrauenswürdig"
- **Primary goal alignment (§3):** Beratungstermin ist eine ernsthafte ~5k–25k-Investitionsentscheidung — Präzision in der Darstellung kommuniziert "die nehmen Maße ernst, die nehmen Termine ernst"
- **Old-site improvement (§4):** ersetzt das Stockphoto-Chaos durch radikale typografische Disziplin — keine Hero-Stockphotos, sondern eine einzige fokussierte Material-Detailaufnahme im Top-Right-Corner
- **Reframing-bet:** wenn Karl-Heinz' Geschäft sich als "Premium-Handwerk" positionieren wollen würde (siehe duerroptimize.md aus deinen alten Projekten), wäre B die geeignete Sprache

## The ONE move

**Mono-Typeset (JetBrains Mono) für ALLE faktischen Daten — Adresse, Telefonnummer, USt-ID, Service-Codes ("WANNE-IN-WANNE · TYP-S03"), Öffnungszeiten.** Das gibt der Site das Stripe-/Linear-Codex: "wir sind technische Profis, hier sind die Specs". Hero text-led, kein großes Bild — eine einzige kleine Material-Detail-Aufnahme als Anchor rechts oben.

## Color tokens

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#FAFAF7` | Base canvas (off-white, leicht warmer Tilt — kein steriles Weiß) |
| `--color-surface` | `#F1F0EB` | Elevated surface (Cards, Spec-Boxes) |
| `--color-surface-2` | `#E5E3DC` | Secondary surface |
| `--color-border` | `#CDC9BD` | Hairlines (sichtbarer als A) |
| `--color-text` | `#1C1C1A` | Primary text (near-black, neutral-tilt) |
| `--color-text-muted` | `#5C5A53` | Secondary text |
| `--color-accent` | `#5A3A1F` | CTA, Spec-Highlights (warm-burgundy / copper-brown) |
| `--color-accent-hover` | `#3F2812` | Accent hover state |

**Color logic:** dominant ist neutral-warm-greige (>85% Bildfläche). Akzent-Burgundy/Copper-Brown ist der bewusste Anti-Industrial-Blue-Move — warm genug um nicht corporate-tech zu wirken, dunkel genug um seriös zu bleiben. CTA-Buttons + ein einzelner Spec-Marker pro Sektion. Forbidden: jegliches Tailwind-Indigo, jegliches Vivid-Amber wie Schreinermeisterei (Stock-Handwerker-Codex).

## Typography

- **Display + Body:** Geist Sans — self-hosted woff2 — weights 400/500/600/700 (weight-driven hierarchy, kein Display-Family-Wechsel)
- **Mono accent:** JetBrains Mono — self-hosted woff2 — weights 400/500
- **Self-hosted:** [x] confirmed
- **Sample headline rendering:**
  > "Komplette Badrenovierung — Niederaula seit über 30 Jahren."
  > — Geist 600, 4rem desktop / 2.5rem mobile, line-height 1.05, tracking -0.02em
  >
  > Subhead Tagline: "Bei uns ist Ihr Bad Chefsache, keine Glückssache." — Geist 500, 1.25rem, line-height 1.4, tracking 0
  >
  > Spec-Line: `STEINWEG 16 · 36272 NIEDERAULA · TEL 06625 919119` — JetBrains Mono 400, 0.8rem, tracking 0.05em, color text-muted

## Spacing & layout character

- **Density:** controlled — section padding 96px desktop, 64px mobile (etwas dichter als A)
- **Asymmetry:** minimal — strict 12-Spalten-Grid mit gezielten 1-Spalten-Versätzen für Text-Block-Anker
- **Section rhythm:** uniform — alle Sektionen leben in derselben Container-Breite (max 1280px), Sectionen werden durch Hairline-Border + Section-Number-Tag (`§ 02`) getrennt, nicht durch Photo-Cuts

## Texture / atmosphere

- **Flat — kein grain, kein gradient, kein noise.** Disziplin durch Abwesenheit von Texture. Maximal: 1-pixel-Hairline-borders in `--color-border`
- **Photo art-direction:** sehr selektiv. Nur 3–5 Photos auf der gesamten Site, jeweils Material-Detail (Wasserhahn-Detail, Fugenarbeit, Showroom-Element). Keine Wide-shots, keine Personen-Aufnahmen außer dem Karl-Heinz-Portrait auf "Über uns" (B&W oder duotone-Treatment in Burgundy)

## Mood references (real sites)

1. **https://stripe.com/** — restrained color use, typografische Hierarchie, dichte Information ohne Lärm. Übernehme: Mono-Spec-Treatment-Pattern für Daten-Listen
2. **https://linear.app/** — refined-minimal, weight-driven hierarchy in einer Sans-Family, single-accent discipline. Übernehme: Hero text-led ohne große Imagery, Mono für meta-Info
3. **https://www.hashicorp.com/** — Trust-Signal-Architektur für B2B → ich übersetze sie auf B2C-Handwerk: explizite Spec-Boxen mit Service-Codes, "wir wissen exakt was wir können"

Keine Dribbble/Awwwards-Refs.

## Trade-offs

What this direction sacrifices vs. A and C:

- **vs. A:** weniger emotionale Wärme — könnte 60+ Primär-Audience distanziert wirken ("die wirken wie eine App-Firma, nicht wie ein Familienbetrieb"); riskiert die "Mein Bad"-Personalmarke zu verwässern
- **vs. C:** weniger visuell-distinkt — Stripe-Codex ist mittlerweile "the new generic" in Tech-Welt, könnte als unoriginal wahrgenommen werden
- **General:** schwer Vertrauen via Wärme aufzubauen wenn Hero text-only ist; braucht hervorragende Copy-Substanz, sonst wirkt es leer. Karl-Heinz' "Chefsache"-Tagline kommt als Subhead — verliert ihre emotionale Hauptrolle aus A

## Implementation notes

- **Best-fit components:** Spec-Boxen (Mono-Daten in Surface-Cards), Hairline-Section-Trenner mit § Section-Numbers, weight-driven Hierarchy ohne Display-Switch, Stripe-style "Tabbed Service Browser", subtile underline-on-hover
- **Avoid for this direction:** Drop-Caps, Italic-Display, Photo-bleed-out-of-Frame, Pull-Quotes in cursive, multi-color gradients
- **Performance considerations:**
  - Geist Sans + JetBrains Mono ≈ 110KB für latin-only (klein dank Sans-no-italic)
  - Total above-fold target: <150KB (text-led hero hilft)
  - Lighthouse Best-Practices: leicht 100/100 dank Disziplin
