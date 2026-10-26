(function () {
  "use strict";

  var C = window.SITE_CONTENT;
  if (!C) return;

  var PRESENTER_DIR = "assets/images/presenters/";

  // Build an element; text is always set via textContent (never HTML).
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "class") node.className = attrs[k];
      else if (k === "text") node.textContent = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function isPlaceholder(v) { return typeof v === "string" && v.indexOf("[TBC") === 0; }

  // Text element that is visibly marked when it is a placeholder.
  function txt(tag, value, cls) {
    if (!value) return null;
    var c = (cls || "") + (isPlaceholder(value) ? " placeholder" : "");
    return el(tag, { "class": c.trim(), text: value });
  }

  // Paragraph/element made of [{text, bold}] parts.
  function rich(tag, parts, cls) {
    var node = el(tag, cls ? { "class": cls } : {});
    (parts || []).forEach(function (p) {
      node.appendChild(p.bold ? el("strong", { text: p.text }) : document.createTextNode(p.text));
    });
    return node;
  }

  function safeUrl(u) { return /^(https?:|mailto:)/i.test(u || "") ? u : ""; }

  function link(url, label) {
    var u = safeUrl(url);
    if (!u) return null;
    var a = el("a", { href: u, text: label });
    if (/^https?:/i.test(u)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }

  function initials(name) {
    if (!name || isPlaceholder(name)) return "?";
    return name.split(/\s+/).slice(0, 2).map(function (p) { return p.charAt(0).toUpperCase(); }).join("");
  }

  function avatar(person) {
    var wrap = el("div", { "class": "avatar" });
    var fallback = function () { wrap.appendChild(el("span", { "aria-hidden": "true", text: initials(person.name) })); };
    if (person.photo) {
      var img = el("img", { src: PRESENTER_DIR + person.photo, alt: person.name, loading: "lazy", width: "240", height: "240" });
      img.onerror = function () { wrap.removeChild(img); fallback(); };
      wrap.appendChild(img);
    } else {
      fallback();
    }
    return wrap;
  }

  function slot(name) { return document.querySelector('[data-slot="' + name + '"]'); }
  function fill(name, nodes) {
    var s = slot(name);
    if (!s) return;
    s.textContent = "";
    nodes.forEach(function (n) { if (n) s.appendChild(n); });
  }

  function bindText(key, value) {
    document.querySelectorAll('[data-bind="' + key + '"]').forEach(function (n) {
      n.textContent = value || "";
      n.classList.toggle("placeholder", isPlaceholder(value));
    });
  }

  var hero = C.hero || {};
  bindText("brand", C.brand);
  bindText("hero.title", hero.title);
  bindText("hero.datetime", hero.datetime);
  bindText("schedule.note", (C.schedule || {}).note);

  // Hero location (optionally a link)
  var loc = document.querySelector('[data-bind="hero.location"]');
  if (loc) {
    var locLink = isPlaceholder(hero.location) ? null : link(hero.locationUrl, hero.location);
    if (locLink) { loc.textContent = ""; loc.appendChild(locLink); }
    else { loc.textContent = hero.location || ""; loc.classList.toggle("placeholder", isPlaceholder(hero.location)); }
  }
  if (hero.ctaLabel) {
    var cta = link(hero.ctaUrl, hero.ctaLabel);
    if (cta) cta.className = "button";
    else if (isPlaceholder(hero.ctaUrl)) {
      // Link not confirmed yet: visible but inert button marked as placeholder
      cta = el("span", { "class": "button is-placeholder", "aria-disabled": "true", text: hero.ctaLabel + " " + hero.ctaUrl });
    }
    fill("hero-cta", [cta]);
  }

  // About
  fill("about", ((C.about || {}).paragraphs || []).map(function (p) { return txt("p", p); }));

  // Presenters
  fill("presenters", (C.presenters || []).map(function (p) {
    var nameNode = (isPlaceholder(p.name) ? null : link(p.url, p.name)) || el("span", { text: p.name || "" });
    var h3 = el("h3", { "class": isPlaceholder(p.name) ? "placeholder" : "" }, [nameNode]);
    return el("li", { "class": "presenter" }, [
      el("div", { "class": "photo" }, [avatar(p)]), h3,
      txt("p", p.title, "role"), txt("p", p.affiliation, "affil"), txt("p", p.talk, "talk")
    ]);
  }));

  // Schedule: Time | Session (title, optional "Presenter: x" and description lines)
  fill("schedule", ((C.schedule || {}).sessions || []).map(function (s) {
    var presenter = s.speaker ? el("div", { "class": "session-line" }, [
      document.createTextNode("Presenter: "),
      txt("span", s.speaker)
    ]) : null;
    return el("tr", {}, [
      el("td", { "class": "time" }, [txt("span", s.time)]),
      el("td", {}, [
        txt("strong", s.title),
        presenter,
        s.description ? el("div", { "class": "session-line", text: s.description }) : null
      ])
    ]);
  }));

  // Venue (bold/regular lines, copied style from Workshop 3)
  var v = C.venue || {};
  var venueP = el("p", { "class": "venue-lines" });
  (v.lines || []).forEach(function (l, i) {
    if (i) venueP.appendChild(document.createElement("br"));
    venueP.appendChild(l.bold ? el("strong", { text: l.text }) : document.createTextNode(l.text));
  });
  var mapLink = link(v.mapUrl, "Open in maps");
  fill("venue", [venueP, mapLink ? el("p", {}, [mapLink]) : null]);

  // Team
  var t = C.team || {};
  fill("team-intro", [rich("p", t.intro)]);
  fill("team", (t.members || []).map(function (m) {
    var parts = [{ text: m.name, bold: true }];
    if (m.affiliation) parts.push({ text: " (" + m.affiliation + ")" });
    return rich("p", parts);
  }));

  // Footer: title / "time | org" / copyright
  var f = C.footer || {};
  var timeLine = el("p", {}, [
    el("span", { "class": isPlaceholder(hero.datetime) ? "placeholder" : "", text: hero.datetime || "" }),
    f.org ? document.createTextNode(" | " + f.org) : null
  ]);
  fill("footer", [
    f.title ? el("p", {}, [el("strong", { text: f.title })]) : null,
    hero.datetime || f.org ? timeLine : null,
    f.copyright ? el("p", { "class": "copyright", text: "© " + new Date().getFullYear() + " " + f.copyright }) : null
  ]);

  // ---- Mobile menu ----
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("open", open);
  }
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  // ---- Highlight the nav link for the section in view (Team counts as Venue) ----
  var links = {};
  nav.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  var alias = { team: "venue" };
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = alias[en.target.id] || en.target.id;
        Object.keys(links).forEach(function (k) {
          if (k === id) links[k].setAttribute("aria-current", "true");
          else links[k].removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { io.observe(s); });
  }
})();
