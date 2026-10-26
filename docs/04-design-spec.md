# 04 Design Spec

Status: first implementation, pending your review.

- **Tone:** academic, professional, contemporary; energy and grid theme.
- **Fonts:** Goldman (headings, brand, table head), Inter (body). Loaded from Google Fonts; system fallbacks.
- **Palette:** navy `#0a1f33` / `#12304d`; teal `#19b6a6`; green `#5fd068`; solar amber `#f5b301`; light tint `#eef5f7`. Link colour `#0b6f8a` on white.
- **Motif:** inline-SVG network of nodes and flowing dashed lines in the hero (grid and power flow); gradient accent bar under each section title (teal → green → solar). Animation stops under `prefers-reduced-motion`.
- **Header:** sticky navy bar; brand left; About / Presenters / Schedule / Venue right. Under 768 px, collapses to a menu button. Current section gets `aria-current` and a green underline. Team counts as Venue.
- **Layout:** mobile-first, container max 1080 px, breakpoint 768 px. Alternate white / tinted sections.
- **Cards:** presenters and team in responsive grids; circular photo or initials.
- **Schedule:** real `<table>` in a horizontally scrollable wrapper.
- **Placeholders:** amber highlight so unfinished content is obvious.
- **Accessibility:** skip link, landmarks, visible focus, 44 px touch target for menu button, alt text from names, semantic table.
