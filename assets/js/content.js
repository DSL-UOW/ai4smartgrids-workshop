/*
 * ALL WORKSHOP CONTENT LIVES HERE. Edit this file only; the page updates itself.
 *
 * - Any value starting with "[TBC" is shown as a visibly marked placeholder.
 * - Add or remove items in presenters / sessions / members / lines freely.
 * - Presenter photos: put the file in assets/images/presenters/ and set photo: "filename.jpg".
 *   Leave photo empty ("") to show initials instead.
 * - Optional fields can be left as "" (empty) and are simply not shown.
 * - Do not add unconfirmed details as real values; keep "[TBC]" until approved.
 */
window.SITE_CONTENT = {
  brand: "DSL-UOW",

  hero: {
    title: "AI for Smart Grids and Renewable Energy Systems",
    datetime: "[TBC date and time]",
    location: "[TBC location]",
    locationUrl: "",              // optional map link for the location
    ctaLabel: "Register",          // button text; clear it ("") to hide the button
    ctaUrl: "[TBC registration link]"  // replace with the real https:// link; the button becomes clickable
  },

  about: {
    paragraphs: [
      "This workshop explores how artificial intelligence can help make smart grids and renewable energy systems more reliable, efficient and sustainable."
      // add more paragraphs here once approved
    ]
  },

  presenters: [
    // { name, title, affiliation, talk, photo, url }
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" },
    { name: "[TBC presenter name]", title: "[TBC title]", affiliation: "[TBC affiliation]", talk: "", photo: "", url: "" }
  ],

  schedule: {
    note: "[TBC date]",           // line under the heading, e.g. the date and time range
    sessions: [
      // { time, title, speaker, description }   (speaker and description optional)
      { time: "[TBC time]", title: "[TBC session]", speaker: "[TBC]", description: "" },
      { time: "[TBC time]", title: "[TBC session]", speaker: "[TBC]", description: "" },
      { time: "[TBC time]", title: "[TBC session]", speaker: "[TBC]", description: "" },
      { time: "[TBC time]", title: "Closing & Networking", speaker: "", description: "Networking with presenters and attendees" }
    ]
  },

  // Copied from Workshop 3: confirm it is still correct for Workshop 4.
  venue: {
    lines: [
      { text: "University of Wollongong (Sydney CBD Campus)", bold: true },
      { text: "Room 249", bold: true },
      { text: "Darling Park, Tower 1, Level 2, 201 Sussex Street" },
      { text: "Sydney NSW 2000, Australia" }
    ],
    mapUrl: ""                    // optional link to a map
  },

  // Copied from Workshop 3: confirm the intro and members for Workshop 4.
  team: {
    intro: [
      { text: "This workshop is part of our " },
      { text: "AI-Driven Transformation in the Computing and Software Engineering Profession", bold: true },
      { text: " project, which is delivered under UOW's " },
      { text: "renAIssance: AI Professional Practice Co-Lab", bold: true },
      { text: " program." }
    ],
    members: [
      // { name, affiliation }
      { name: "Prof Hoa Khanh Dam", affiliation: "UOW Australia" },
      { name: "Dr Guoxin Su", affiliation: "UOW Australia" },
      { name: "Dr John Le", affiliation: "UOW Australia" },
      { name: "Prof May El Barachi", affiliation: "UOW Dubai" },
      { name: "A/Prof Kiran Trivedi", affiliation: "UOW India" },
      { name: "Dr Ho Lam Lau", affiliation: "UOW College Hong Kong" },
      { name: "Frank Lau", affiliation: "UOW College Hong Kong" },
      { name: "Abel Choy", affiliation: "UOW-SIM Singapore" }
    ]
  },

  footer: {
    title: "AI for Smart Grids and Renewable Energy Systems Workshop",
    org: "University of Wollongong",      // shown after the workshop time
    copyright: "DSL-UOW"
  }
};
