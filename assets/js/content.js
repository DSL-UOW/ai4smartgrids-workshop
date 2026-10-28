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
    datetime: "Tuesday 1st December 1:00pm – 5:00pm",
    location: "Room 249 - Sydney CBD campus",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=UOW+Sydney+CBD+Campus+201+Sussex+Street+Sydney",              // optional map link for the location
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
    { name: "Dr Debajyoti Biswas", title: "", affiliation: "University of Surrey, UK", talk: "Operation Research and Analytics for Clean Energy Transition", photo: "biswas.jpg", url: "" },
    { name: "A/Prof Wenyuan Tang", title: "", affiliation: "North Carolina State University, USA", talk: "AI/ML for Net Load Forecasting", photo: "tang.jpg", url: "" },
    { name: "Tim Ryan", title: "", affiliation: "Ready Energy", talk: "The Consumers’ Grid", photo: "ryan.jpg", url: "" },
    { name: "Tatsuya Yamada", title: "", affiliation: "Mitsubishi Electric, Japan", talk: "Digital Twin for Low Voltage Distribution Networks", photo: "", url: "" },
    { name: "A/Prof Ashish Agalgaonkar", title: "", affiliation: "University of Wollongong", talk: "Energy Technologies for Future Grids", photo: "agalgaonkar.jpg", url: "" },
    { name: "Martin Ma", title: "", affiliation: "HighFlow Energy", talk: "", photo: "", url: "" },
    { name: "Prof Jun Shen", title: "", affiliation: "University of Wollongong", talk: "", photo: "", url: "" },
    { name: "Prof Hoa Khanh Dam", title: "", affiliation: "University of Wollongong", talk: "", photo: "prof-hoa-dam.png", url: "" }
  ],

  schedule: {
    note: "Tuesday 1st December",   // line under the heading
    sessions: [
      // { time, title, speaker, description }   (speaker and description optional)
      { time: "13:00 – 13:10", title: "Opening & Introduction", speaker: "Prof Hoa Khanh Dam, University of Wollongong", description: "" },
      { time: "13:10 – 13:25", title: "AI/ML for Net Load Forecasting", speaker: "A/Prof Wenyuan Tang, North Carolina State University, USA", description: "" },
      { time: "13:25 – 13:40", title: "The Consumers’ Grid", speaker: "Tim Ryan, Ready Energy", description: "" },
      { time: "13:40 – 13:55", title: "Operation Research and Analytics for Clean Energy Transition", speaker: "Dr Debajyoti Biswas, University of Surrey, UK", description: "" },
      { time: "13:55 – 14:10", title: "Digital Twin for Low Voltage Distribution Networks", speaker: "Tatsuya Yamada, Mitsubishi Electric, Japan", description: "" },
      { time: "14:10 – 14:20", title: "Short Break", speaker: "", description: "" },
      { time: "14:20 – 14:35", title: "Energy Technologies for Future Grids", speaker: "A/Prof Ashish Agalgaonkar, University of Wollongong", description: "" },
      { time: "14:35 – 14:50", title: "TBA", speaker: "Martin Ma, HighFlow Energy", description: "" },
      { time: "14:50 – 15:05", title: "TBA", speaker: "", description: "" },
      { time: "15:05 – 15:20", title: "TBA", speaker: "", description: "" },
      { time: "15:20 – 15:30", title: "Short Break", speaker: "", description: "" },
      { time: "15:30 – 16:10", title: "Panel discussion", speaker: "", description: "" },
      { time: "16:10 – 16:15", title: "Closing remarks", speaker: "Prof Jun Shen, University of Wollongong", description: "" },
      { time: "16:15 – 17:00", title: "Networking", speaker: "", description: "Networking with presenters and attendees" }
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
