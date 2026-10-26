# 02 Reference Audit: Workshop 3

Sources: https://dsl-uow.github.io/modern-se-in-ai-era-workshop-3/ and https://github.com/DSL-UOW/modern-se-in-ai-era-workshop-3 (inspected 2026-10-26).

| Aspect | Workshop 3 | Workshop 4 |
|---|---|---|
| Structure | One `index.html`, sections Hero → RSVP → About → Presenters → Schedule → Venue → Team → Footer | Keep order and single page |
| CSS | Bulma + Font Awesome (local), custom `index.css` | Replace with one custom `styles.css` |
| JS | jQuery 3.5.1 (CDN), burger toggle, RSVP auto-hide | Replace with ~100 lines vanilla JS |
| Template | Nerfies (CC BY-SA 4.0), attribution in footer | Not used; built from scratch |
| Fonts | Google Sans, Noto Sans, Castoro | Goldman + Inter |
| Nav | None (no sticky nav) | New sticky header |
| Assets | Relative `./static/...` | Relative `assets/...` |
| Content | Hard-coded in HTML | Data-driven from `assets/js/content.js` |
| Deploy | `static.yml`, uploads whole repo (`.`) | Same workflow, uploads staged site files only |
| Unused leftovers | bulma-carousel, bulma-slider, interpolation code | Dropped |

Not inspected: full `index.css`, the Pages settings of the Workshop 3 repo.
