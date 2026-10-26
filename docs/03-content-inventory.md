# 03 Content Inventory

All content is edited in **`assets/js/content.js`** (single source). Photos go in `assets/images/`. Status values: Placeholder / Draft / Confirmed. Only Confirmed content may be published as fact.

| Slot | Field(s) in content.js | Status | Source / approver |
|---|---|---|---|
| Hero | `hero.title` | Confirmed (given title) | Project brief |
| Hero | `hero.datetime`, `location`, `locationUrl`, `ctaLabel/ctaUrl` (no subtitle) | Placeholder | |
| About | `about.paragraphs` | Draft: one general sentence on the topic, needs approval | |
| Presenters | `presenters[]` (name, title, affiliation, talk, photo, url) | Placeholder (3 sample slots) | |
| Schedule | `schedule.sessions[]` (time, title, speaker) | Placeholder | |
| Venue | `venue.lines[]`, `mapUrl` | Copied from Workshop 3, confirm for Workshop 4 | Workshop 3 site |
| Team | `team.intro[]`, `team.members[]` | Copied from Workshop 3, confirm for Workshop 4 | Workshop 3 site |
| Footer | `footer.title`, `org`, `copyright` (time comes from `hero.datetime`) | Draft, owner-specified wording | Owner |
| Logos | `assets/images/brand/` | Missing | |

## How to edit
- Replace a `[TBC ...]` value with the real text; placeholder highlighting disappears automatically.
- Add or delete entries in `presenters`, `sessions`, `members`; the page follows.
- Photo: save the file in `assets/images/presenters/` (or `team/`), set `photo: "file.jpg"`. No photo shows initials.
- Leave optional fields as `""` to hide them.
- Update the Status column above when content is approved.
