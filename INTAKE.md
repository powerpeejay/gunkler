# INTAKE.md — Gunkler

> Phase 0 output. Filled by Claude Code during the discovery conversation.
> Confirmed by Peter before Phase 1 (Three Directions) begins.

---

## 1. Client

- **Name:** Karl-Heinz Gunkler e.K. — display: "Gunkler / Mein Bad"
- **Business type (matrix row):** Handwerker (Bau, Maler, Sanitär, Elektro)
- **Location:** Steinweg 16, 36272 Niederaula-Hattenbach (Hessen, Landkreis Hersfeld-Rotenburg). Catchment vermutlich Bad Hersfeld / Fulda / Vogelsbergkreis (Annahme — vor Launch verifizieren)
- **Website (if exists):** http://www.bad-komplett-service.de/ (kein HTTPS)
- **Languages:** DE only
- **Decision-maker:** Karl-Heinz Gunkler (Geschäftsführer, e.K. = Einzelunternehmer)
- **Project mode:** **Cold-outreach speculative build, Junski-style Demo-Mode.** Peter hat noch nicht mit Karl-Heinz gesprochen. Rechtlich sicherer Pfad: Site wird als **Konzeptstudie von Jacob Digital** gebaut, Impressum + Datenschutz weisen Jacob Digital / Peter Jacob als Verantwortlichen aus, sichtbarer Demo-Hinweis-Banner auf Impressum + Datenschutz, `<meta name="robots" content="noindex, nofollow">` auf JEDER Seite, Footer markiert klar als Konzept. Bei Übernahme durch Karl-Heinz: Jacob-Digital-Impressum gegen echtes ersetzen, Demo-Banner raus, noindex raus, Domain umziehen.
- **Echte Karl-Heinz-Daten (für Showcase-Realismus, NICHT für Impressum):** HRA Bad Hersfeld 900 · USt-ID DE 111142007 · Adresse Steinweg 16, 36272 Niederaula-Hattenbach · Tel 06625/919119. Diese erscheinen im Body-Content (Kontakt-Seite, Footer-Adresse) als Showcase, NICHT im Impressum. Email + WhatsApp während Demo-Phase als Platzhalter (`info@beispiel-domain.de`, `#whatsapp-platzhalter`) — sonst Risiko dass Outreach-Empfänger den Kunden direkt kontaktieren bevor er signt.

## 2. Audience

- **Primary:** Privatkund:innen 50+ aus dem ländlichen Hessen (Hersfeld-Rotenburg, Vogelsbergkreis), Eigenheimbesitzer:innen mit altersgerechtem Renovierungsbedarf, Wert auf persönliche Beratung statt Online-Konfigurator. Buchen typischerweise per Telefonanruf einen Beratungstermin im Showroom.
- **Secondary:** jüngere Eigenheim-Käufer:innen (35–50) die ein bestehendes Bad sanieren wollen (Wanne-in-Wanne, Duschsanierung) und qualitativ-langlebig statt billig-temporär kaufen.
- **Not the audience:** Bauträger / B2B Großprojekte. Mietwohnung-Modernisierungen (Klempner-Notdienst). DIY-Bastler die nur Material wollen.

## 3. Primary user goal

The ONE thing a visitor must be able to do when they land:

- **Beratungstermin starten** — entweder per Telefonanruf (`tel:06625919119`) ODER per WhatsApp-Message mit Foto vom aktuellen Bad. Beide sind gleichwertig primär; WhatsApp adressiert jüngere Sekundär-Audience und reduziert die Hürde für ältere Kunden, die "schnell ein Foto schicken" können statt schreiben.

Secondary actions (nice-to-have, never compete with primary):

- Leistungs-Übersicht durchblättern (insbesondere "altersgerechtes Bad")
- Vorher-Nachher-Galerie ansehen (Vertrauensaufbau via visueller Beweis)
- Showroom-Adresse + Anfahrt finden (Niederaula-Hattenbach)
- Öffnungszeiten checken
- Kontaktformular ausfüllen (Backup falls Tel/WhatsApp nicht passt)

## 4. Old website analysis

> Quellen: web_fetch von /, /Über-uns, /Leistungen, /Kontakt, /Impressum + Screenshot `reference/gunkler_old.png` + Gemini-Audit `reference/Website_Audit_Bad_Komplett_Service.md`.

**Currently in use:**
- **Direction (felt):** generischer Strato/CM4All Template-Bau, optisch 2008er 3-Spalten-Layout (Sidebar L + Center + Sidebar R) auf Strand-Stockphoto-Background
- **Color palette:** kein Branding sichtbar im DOM (`#000` und `#fff` als einzige Inline-Hex-Werte). Faktischer Gesamteindruck: Light-Blue-Sidebars + zentraler Banner mit eingescanntem "GUNKLER"-Logo in Royal Blue/Weiß
- **Typography:** Arial / Helvetica system-stack, kein Web-Font deklariert
- **Photography style:** Stock + uploaded raw — Beach-Stockfoto als Page-Background (komplett kontextfremd für Bad-Sanitär), Frau-mit-Wassertropfen Banner-JPG, eine Showroom-Außenaufnahme im Footer
- **Copy tone:** warm-persönlich, familienbetrieb-Voice ("Wir möchten uns für Ihr Interesse bedanken", "Chefsache, nicht Glückssache"), 1. Person Plural mit Du-Sie-Höflichkeit
- **Page structure:** 7 Seiten — Startseite · Über uns · Leistungen · Angebote · Kontakt · Impressum · Datenschutzerklärung
- **Stack:** Strato HomepageDesigner (CM4All Template `cm_dh_076`) — bit-identisch mit `heizungs-hahn.de` (Negativ-Anchor im Vault). Kein eigener Code-Zugriff möglich, vendor lock-in

**What works (preserve):**
- **Tagline "Bei uns ist Ihr Bad Chefsache und keine Glückssache"** — etablierte Positionierung, Karl-Heinz-Stimme. Behalten als typografisches Hero-Element (nicht mehr als JPG)
- **"Mein Bad"-Personalmarke** — gut für Einzelunternehmer-Branding, persönlicher als generisches "Bad Komplett Service"
- **Klares 3-Schritt-Prozess-Narrativ** (Vermessung → Gestaltung → Einbau) — übersichtlich, vertretbar als "Wie wir arbeiten"-Sektion
- **Konkrete Service-Benennung** — "altersgerechte Badrenovierung", "Wanne-in-Wanne", "Duschsanierung mit niedrigem Einstieg" sind starke SEO-Keywords mit klarer Käufer-Intent
- **Trust-Signale vorhanden** aber unter-kommuniziert: HRA-Eintrag, "Meister der Glaskunst"-Auszeichnung (im alten Footer-Sidebar), 30+ Jahre am Standort (vermutet, aus e.K.-Kontext)
- **Saturday-Öffnungszeiten** (Sa 10–12) — service-orientiert, Wochenend-erreichbar

**What fails (replace):**
- **Kein HTTPS** — Site nur über Plain-HTTP erreichbar, browser zeigen "Nicht sicher"-Warnung. SEO-Strafe seit 2018, Lighthouse-A11y/Best-Practices kollabiert
- **Builder lock-in** — Strato/CM4All Template `cm_dh_076` = same Stack wie heizungs-hahn.de Negativ-Anchor. Keine Code-Kontrolle, kein Performance-Tuning möglich
- **Logo ist `FullSizeRender.jpg`** — iPhone-Camera-Roll-Default-Filename, nie umbenannt; kein SVG, keine Brand-Identity
- **Hero ist Strand-Stockphoto** (`bhwf_12531424_cm-a.jpg` aus Strato MEDIA_ARCHIVE) — kontextfremd, austauschbar, keine Marke
- **"Willkommen auf unserer Homepage!"-H1** — peak 2005, null SEO-Wert, null Positionierungs-Information
- **Meta-Description ist 1 Wort: "Sanitär"** — komplett ungenutzt für SERP-Snippet
- **Title "Karl-Heinz Gunkler. Mein Bad - Startseite"** — hat den Namen aber falsche Reihenfolge (Stadt/Keyword fehlt: müsste "Badsanierung Niederaula | Karl-Heinz Gunkler – Mein Bad" o.ä.)
- **Email auf t-online.de** — kein Domain-Postfach, schwächt B2C-Vertrauen
- **Stale Banner "Betriebsurlaub 29.05.2025–17.06.2025"** noch im April 2026 sichtbar — Wartung lebt nicht
- **Kein Mobile-Layout** — CM4All Template ist Desktop-first, Tap-Targets <44px
- **Kein BFSG-Compliance** (Barrierefreiheitsstärkungsgesetz seit Juni 2025 verpflichtend für gewerbliche Sites mit B2C) — Abmahnrisiko
- **Phone-only CTA** — keine WhatsApp-Verlinkung, kein Online-Form-Flow, kein Foto-Upload

**What's missing (add):**
- **Vorher-Nachher-Galerie** — alte Seite hat null Projektreferenzen. Bad-Renovierungen sind hochgradig visuell, das ist der wichtigste Vertrauenshebel den sie nicht nutzen
- **WhatsApp-CTA** — direkter "Foto vom Bad schicken"-Flow, reduziert Hürde für 60+ Audience massiv
- **LocalBusiness JSON-LD** — keine strukturierten Daten → unsichtbar in Google Map Pack, AI-Search, Voice-Search
- **Service-Area-Map** — welcher Radius? (Annahme: Niederaula + Bad Hersfeld + Alsfeld + Fulda — ~30km)
- **Showroom-Bilder** — sie haben "über 70.000 Bad-Produkte" und eine Ausstellung, zeigen aber kein einziges Foto davon
- **Marken-Partner / Hersteller** — "Direktbezug ab Hersteller" wird beworben, aber welche? (Villeroy & Boch? Duravit? Hansgrohe?) Logo-Strip wäre Trust-Booster
- **FAQ-Sektion mit FAQPage-Schema** — Standard-Bad-Renovierungsfragen ("Wie lange dauert eine Badsanierung?", "Was kostet ein altersgerechtes Bad?") für GEO/AI-Search-Sichtbarkeit
- **Persönliches Foto von Karl-Heinz + Team** — Handwerk verkauft sich über Vertrauen in Personen, alter Site hat null Gesichter

## 5. Brand assets present

> Inventory of `brand_assets/` folder.

- [ ] Logo (SVG)
- [ ] Logo (raster fallback) — _alte Site nutzt `FullSizeRender.jpg` (iPhone-Upload), nicht brauchbar_
- [ ] Defined brand colors
- [ ] Defined typography
- [ ] Photography library
- [ ] Existing brand guidelines doc

**Inhalt von `reference/`:**
- `gunkler_old.png` — Screenshot der alten Startseite
- `Website_Audit_Bad_Komplett_Service.md` — Gemini-Gem-Audit (12-dim Scoring + Pitch-Angles)

**Gaps to flag with client (post-handover-Liste, nicht-blockierend für Cold-Outreach-Build):**
- Logo: aktuell nur als JPG-Banner-Bild. Vorschlag: typografisches Re-Lettering von "GUNKLER · Mein Bad" als SVG aus Phase-2-Direction-Type-Choice ableiten
- Photography: brauchen authentische Showroom- und Vorher-Nachher-Bilder. Für Cold-Outreach-Build mit Stock-Platzhaltern arbeiten (warm-organic Bad-Bilder von Unsplash mit klarer Markierung), bei Übergabe Foto-Brief an Karl-Heinz
- Brand colors: keine vorhanden → in Phase 1 als Direction-Choice neu setzen, nicht aus Alt-Site extrahieren (die hat nichts Eigenes)
- Hersteller-Partner-Logos: anfragen welche Partner Gunkler führt
- Karl-Heinz-Portrait: Foto-Brief an Kunde

## 6. Hard constraints

**Must keep:**
- Tagline "Bei uns ist Ihr Bad Chefsache und keine Glückssache" (Peter explizit)
- Demo-Mode-Setup nach Junski-Vorbild: Jacob Digital im Impressum, Demo-Hinweis-Banner auf Impressum + Datenschutz, `noindex, nofollow` auf jeder Seite, Footer-Copyright als Konzeptstudie ausweisen
- Karl-Heinz-Adresse + Tel im Body-Content (Realismus für Pitch), Email + WhatsApp als Platzhalter

**Must avoid:**
- Strand-Stockphoto-Aesthetik (Kontextbruch, Default-Anchor-Niveau)
- Generic Tradesman-Stockphotos (Bauarbeiter mit Helm, Daumen hoch — siehe Vault-Negative-Anchors)
- AI-Purple-Gradients, gen-z chaos, brutalist (CLAUDE.md §6 Banned-Spalte für Handwerker)
- Default-Tailwind-Indigo/Blue als Primärfarbe (CLAUDE.md §7)
- Inter / Roboto / system-ui als Display-Font (CLAUDE.md §7)
- Google-Fonts-CDN (CLAUDE.md §10 DSGVO — selbst-hosten als woff2)

**Compliance flags:**
- **BFSG (Barrierefreiheitsstärkungsgesetz)** seit Juni 2025 verpflichtend — WCAG 2.2 AA Pflicht (CLAUDE.md §10 deckt das schon ab)
- DSGVO: kein Tracking ohne Consent, Impressum + Datenschutzerklärung mit allen Pflichtangaben (alte Seite hat beides, Inhalte können großteils übernommen werden)
- USt-ID + HRA müssen 1:1 aus alter Impressum übernommen werden (siehe §1)

## 7. Scope

- **Page count:** 8 Seiten (alte Seite hatte 7 — "Angebote" entfällt mangels echter Inhalte, dafür "Altersgerechtes Bad" als eigene SEO-Page + "Referenzen/Galerie" neu):
  1. **Startseite** — Hero + Tagline + Trust + 3-Schritt-Prozess + WhatsApp/Tel-CTA
  2. **Leistungen** — alle Services mit Anker-Navigation
  3. **Altersgerechtes Bad** — eigene Seite (Hauptzielgruppe + SEO für "altersgerechte Badrenovierung Niederaula/Bad Hersfeld")
  4. **Referenzen** — Vorher-Nachher-Galerie (zu Beginn mit Stock-Platzhaltern, klar als solche markiert; Foto-Brief an Kunde post-Handover)
  5. **Über uns** — Karl-Heinz-Portrait, Showroom, "Meister der Glaskunst"-Auszeichnung, Hersteller-Partner
  6. **Kontakt** — Form + Map + Tel + WhatsApp + Öffnungszeiten + Anfahrt
  7. **Impressum** — übernommen aus alter Site (echte Daten)
  8. **Datenschutzerklärung** — selbst-gehostete Fonts, kein Tracking, Standard-Block
- **Forms:** Kontaktformular (n8n-Webhook-Backend optional, default mailto-Fallback). WhatsApp-Click-to-Chat als primärer Schnellweg (`https://wa.me/4966259119119` o.ä. — Nummer verifizieren)
- **Integrations:** Google Maps Embed (oder OpenStreetMap statisch falls DSGVO-strenger), tel:-Links, WhatsApp-Click-to-Chat
- **CMS need:** none — statisches HTML/CSS, ggf. Build-Step für Templating bei Wiederholungen (Header/Footer/Nav). Kein CMS für Cold-Outreach-Build sinnvoll (Karl-Heinz hat keine Content-Edit-Bedürfnisse erkennbar)
- **Hosting target:** Vercel (Free Tier) während Demo-Phase mit `noindex, nofollow` Meta + Robots.txt-Disallow + Demo-Banner aktiv. Bei Kunden-Sign: Impressum-Tausch (Jacob Digital → Karl-Heinz), Demo-Banner raus, noindex raus, Email/WhatsApp-Platzhalter mit echten Daten füllen, Custom-Domain `bad-komplett-service.de` umziehen, ggf. GitHub-Pages oder Hetzner-Static-Hosting wenn Karl-Heinz Hosting-Kontrolle braucht
- **Deadline:** keine harte Deadline (cold outreach), aber pitch-ready ASAP — Ziel ~1 Iteration durch Phase 1–3
- **Budget context:** spekulativ (unbezahlt bis Sign), darum: kein über-engineering, keine Custom-Photography vor Sign

## 8. Recommended Direction (matrix)

- **Matrix row matched:** Handwerker (Bau, Maler, Sanitär, Elektro)
- **Primary direction (Phase 1 → A):** **warm-organic + trust-and-authority** (Cross-Pollination) — wie bei `andreas-duerr.vercel.app` im Vault validiert. Cream-Surface, warmer Akzent (Terracotta/Amber/Olive — nicht Industrial-Blue), Display-Serif (Fraunces o.ä.) + clean Sans (Inter o.ä.), generous spacing, photography-led mit Bad-Detailaufnahmen
- **Secondary direction (Phase 1 → B):** **trust-and-authority pure** — Stripe-/Hashicorp-style, neutralere Palette (warm-greige + dunkler Akzent), striktere typografische Hierarchie, dichte Information ohne Wärme-Patina. Anker für die Hypothese "vielleicht funktioniert kühl-professionell besser als warm-emotional"
- **Bold candidate (Phase 1 → C):** **editorial-magazine** mit Fokus auf Vorher-Nachher-Storytelling — Bäder als Editorial-Subjekt behandelt (wie eine Wohnzeitschrift), große Photography-Frames, Pull-Quotes aus Kundenstimmen, asymmetrisches Magazin-Grid. Respektiert Banned-Spalte (kein playful, kein neon), pusht aber visuell härter

**Reasoning (2–3 sentences):** Audience-Signale (60+ Eigenheimbesitzer, "altersgerecht", persönliche Beratung, Saturday-Öffnungszeiten, ländliche Hessen-Mentalität) sprechen klar gegen pures `industrial-utilitarian` — das wäre zu kalt und zu corporate für die emotionale Investition einer Bad-Renovierung. Die `warm-organic`+`trust`-Cross-Pollination hat sich bei `andreas-duerr.vercel.app` für eine ähnliche Handwerker-Audience bereits bewährt (im Vault als Positiv-Benchmark dokumentiert), und die "Chefsache, keine Glückssache"-Tagline + "Mein Bad"-Personalmarke fließen natürlicher in eine warme Direction. Direction C ist der Bold-Move für den Fall dass Peter mit einer disruptiven Pitch-Variante in den Cold-Outreach gehen will (Editorial-Magazine-Look ist im DACH-Handwerker-Segment quasi inexistent).

---

## Sign-off

- **Filled:** 2026-04-26 by Claude Code
- **Confirmed by Peter:** [x] Yes — proceed to Phase 1 (Demo-Mode-Korrektur in §1, §6, §7 nachgereicht 2026-04-26)
