# EXTERNAL_ASSETS.md -- Gunkler

Every third-party request the production site makes. DSGVO accountability.

| URL / domain | Purpose | Justification | DSGVO note |
|---|---|---|---|
| `placehold.co` | Hero + section image placeholders während Demo-Phase | Echte Showroom- und Vorher-Nachher-Photos folgen nach Karl-Heinz-Sign. Bis dahin Platzhalter mit klarer Caption-Markierung. | Externes CDN — wird bei Sign durch self-hosted /assets/img/ ersetzt. KEIN Tracking. |
| `wa.me/49...` | WhatsApp Click-to-Chat (Secondary CTA) | Primärer Conversion-Pfad neben Tel-Link. Nur Click-out, kein Embedded-Code, kein Tracking-Pixel. | Erst beim ersten User-Click wird WhatsApp aufgerufen. Datenschutzerklärung listet WhatsApp als Drittanbieter mit IP-Übertragungs-Hinweis. |

**Rule:** if it's not on this list, it doesn't load.

**Explicitly NOT loaded:**
- Google Fonts CDN (alle Fonts self-hosted in `/fonts/`)
- Google Maps Embed (Kontakt-Seite nutzt OpenStreetMap statisch oder verlinkt zu Google Maps ohne Embed)
- Google Analytics / Plausible / jegliches Tracking
- Cookie-Consent-Banner (keine Cookies werden gesetzt)
- jQuery / externe JS-Libraries (alles vanilla JS in `/js/app.js`)
