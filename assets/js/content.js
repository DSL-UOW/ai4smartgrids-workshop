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
  hero: {
    title: "AI for Smart Grids and Renewable Energy Systems",
    datetime: "Tuesday 1st December 1:00pm – 5:00pm",
    location: "Room 249 - University of Wollongong, Sydney CBD campus",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=UOW+Sydney+CBD+Campus+201+Sussex+Street+Sydney",              // optional map link for the location
    ctaLabel: "Register",          // button text; clear it ("") to hide the button
    ctaUrl: "https://www.eventbrite.com.au/e/ai-for-smart-grids-and-renewable-energy-systems-workshop-tickets-2004093869713?aff=oddtdtcreator"  // replace with the real https:// link; the button becomes clickable
  },

  about: {
    paragraphs: [
      "The global transition to renewable energy is transforming electricity systems, creating unprecedented challenges in managing variable generation and balancing supply and demand across distributed resources (including wind and solar farms, batteries, electric vehicles, and smart buildings). These growing complexities place increasing demands on grid reliability and resilience.",
      "Artificial Intelligence (AI) offers opportunities to address these challenges through intelligent forecasting, adaptive optimisation, autonomous decision-making, and coordinated energy management. This workshop brings together researchers and industry practitioners to exchange cutting-edge research, share real-world experiences, and explore collaborations that advance AI-driven solutions for smarter, more reliable and sustainable energy systems."
    ]
  },

  presenters: [
    // { name, title, affiliation, talk, photo, url }
    { name: "Dr Debajyoti Biswas", title: "", affiliation: "University of Surrey, UK", talk: "", photo: "biswas.jpg", url: "" },
    { name: "A/Prof Wenyuan Tang", title: "", affiliation: "North Carolina State University, USA", talk: "", photo: "tang.jpg", url: "" },
    { name: "Tim Ryan", title: "", affiliation: "Ready Energy", talk: "", photo: "ryan.jpg", url: "" },
    { name: "Tatsuya Yamada", title: "", affiliation: "Mitsubishi Electric, Japan", talk: "", photo: "", url: "" },
    { name: "A/Prof Ashish Agalgaonkar", title: "", affiliation: "University of Wollongong", talk: "", photo: "agalgaonkar.jpg", url: "" },
    { name: "Martin Ma", title: "", affiliation: "HighFlow Energy", talk: "", photo: "martin-ma.png", url: "" },
    { name: "Prof Jun Shen", title: "", affiliation: "University of Wollongong", talk: "", photo: "junshen.jpeg", url: "" },
    { name: "Prof Hoa Khanh Dam", title: "", affiliation: "University of Wollongong", talk: "", photo: "prof-hoa-dam.png", url: "" }
  ],

  schedule: {
    note: "Tuesday 1st December",   // line under the heading
    sessions: [
      // { time, title, speaker, description, icon }   (all but time/title optional; icon "sprout" or "tree" makes a group heading row)
      { time: "13:00 – 13:10", title: "Opening & Introduction", speaker: "Prof Hoa Khanh Dam, University of Wollongong", description: "" },
      { time: "", title: "Presentation Session 1", icon: "sprout", speaker: "", description: "Session Chair: A/Prof Le Chung Tran, University of Wollongong" },
      { time: "13:10 – 13:25", title: "AI/ML for Net Load Forecasting", speaker: "A/Prof Wenyuan Tang, North Carolina State University, USA", description: "" },
      { time: "13:25 – 13:40", title: "The Consumers’ Grid", speaker: "Tim Ryan, Ready Energy", description: "" },
      { time: "13:40 – 13:55", title: "Operation Research and Analytics for Clean Energy Transition", speaker: "Dr Debajyoti Biswas, University of Surrey, UK", description: "" },
      { time: "13:55 – 14:10", title: "Digital Twin for Low Voltage Distribution Networks", speaker: "Tatsuya Yamada, Mitsubishi Electric, Japan", description: "" },
      { time: "14:10 – 14:20", title: "Short Break", speaker: "", description: "" },
      { time: "", title: "Presentation Session 2", icon: "tree", speaker: "", description: "Session Chair: Dr John Le, University of Wollongong" },
      { time: "14:20 – 14:35", title: "Energy Technologies for Future Grids", speaker: "A/Prof Ashish Agalgaonkar, University of Wollongong", description: "" },
      { time: "14:35 – 14:50", title: "AI-Driven Energy Management: From User Engagement to Intelligent Forecasting and Optimisation", speaker: "Martin Ma, HighFlow Energy", description: "" },
      { time: "14:50 – 15:05", title: "TBA", speaker: "", description: "" },
      { time: "15:05 – 15:20", title: "TBA", speaker: "", description: "" },
      { time: "15:20 – 15:30", title: "Short Break", speaker: "", description: "" },
      { time: "15:30 – 16:10", title: "Panel discussion", speaker: "", description: "Session Chair: A/Prof Ashish Agalgaonkar, University of Wollongong" },
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

  team: {
    intro: [
      { text: "This workshop is part of our " },
      { text: "\"UGPN-SmartGridAI: An Agentic Digital Twin for Cyber-Resilient Smart Grids and Clean Energy Systems\"", bold: true },
      { text: " project, funded by the University Global Partnership Network (UGPN)." }
    ],
    members: [
      // { name, affiliation }
      { name: "Prof Hoa Khanh Dam", affiliation: "University of Wollongong, Australia" },
      { name: "A/Prof Wenyuan Tang", affiliation: "North Carolina State University, USA" },
      { name: "Dr Debajyoti Biswas", affiliation: "University of Surrey, UK" },
      { name: "A/Prof Ashish Agalgaonkar", affiliation: "University of Wollongong, Australia" },
      { name: "Dr John Le", affiliation: "University of Wollongong, Australia" },
      { name: "Prof Jun Shen", affiliation: "University of Wollongong, Australia" },
      { name: "Ngoc Yen Nhi Tran", affiliation: "University of Wollongong, Australia" }
    ]
  },

  footer: {
    title: "AI for Smart Grids and Renewable Energy Systems Workshop",
    org: "University of Wollongong",      // shown after the workshop time
    copyright: ""                         // optional line, e.g. © notice; empty hides it
  }
};
