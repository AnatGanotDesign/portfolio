/* ============================================================
   Anat Ganot — Portfolio · main.js
   ============================================================ */

/* --- WhatsApp config (international format, digits only) -------------- */
const WHATSAPP_NUMBER = "972547887666";
const WHATSAPP_MESSAGE = "היי ענת, ראיתי את האתר שלך ואשמח לדבר איתך";

function whatsappHref() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

document.querySelectorAll(".js-whatsapp").forEach((el) => {
  el.setAttribute("href", whatsappHref());
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

/* --- Mobile menu ----------------------------------------------------- */
const toggle = document.querySelector(".nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");
if (toggle && mobileMenu) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    mobileMenu.hidden = open;
  });
  mobileMenu.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    })
  );
}

/* --- Active nav link follows the section in view (scroll-spy) --------- */
(function navSpy() {
  const anchorLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const setActive = (id) =>
    anchorLinks.forEach((a) =>
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + id)
    );

  // sections that actually exist on the page
  const sections = [...new Set(anchorLinks.map((a) => a.getAttribute("href").slice(1)))]
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  // update immediately on click for snappiness
  anchorLinks.forEach((a) => {
    const id = a.getAttribute("href").slice(1);
    if (document.getElementById(id)) a.addEventListener("click", () => setActive(id));
  });

  if (!("IntersectionObserver" in window) || !sections.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.5, 1] }
  );
  sections.forEach((s) => io.observe(s));
})();

/* --- Project data (verbatim from Figma) ------------------------------ */
const PROJECTS = [
  {
    name: "I-NEXT (Ichilov)", url: "taamc.org/inext", logo: "inext",
    href: "https://www.tasmc.org.il/rd/i-next-data/",
    shipping: true,
    desc: "A 0→1 clinical platform for physicians at one of Israel's leading medical centers, designed end-to-end across UX, UI, AI interfaces, and design system. In active daily use by hundreds of users - and I'm still shipping new features today.",
    tags: ["Healthcare", "B2B", "AI Interface", "UX · UI · Design System", "Desktop · Mobile web"],
    quote: "A turning point for the world of medicine - so precise, so efficient.",
    cite: "Physician, Ichilov",
    date: "2025-present",
  },
  {
    name: "Summa", url: "summa.co.il", logo: "summa",
    desc: "Lead designer on a fintech product where precision and regulatory trust are non-negotiable. Scaled the platform from 1→N, led a cross-cultural design team, and built the design system from the ground up.",
    tags: ["Fintech", "B2B", "Complex System", "Lead Designer", "UX · UI · Design System"],
    quote: "It is impossible to overstate Anat's impact… Her contribution to the company and to the product has been immense.",
    cite: "Dr. Roi Katz, CEO and Co-founder",
    date: "2024-2025",
  },
  {
    name: "Applitools", url: "applitools.com", logo: "applitools",
    desc: "Part of the design team on a complex, data-rich developer tool used by QA and engineering teams worldwide. Worked across a large feature set with intricate dependencies between data, entities, and insights.",
    tags: ["Dev Tools", "B2B", "Complex System", "AI Interface", "UX · UI · Design System"],
    quote: "True team player, highly engaged, very experienced, and a talented product designer.",
    cite: "Neta Avivi, VP Product",
    date: "2022-2024",
  },
  {
    name: "Parazero Technologies", url: "parazero.com", logo: "parazero",
    desc: "Solo designer on a 0→1 safety-critical fleet management platform for SafeAir. ParaZero's drone parachute safety system covering device registration, maintenance workflows, regulatory compliance, and real-time flight monitoring.",
    tags: ["Aerospace & Defense", "B2B", "Solo Designer", "UX · UI · Design System"],
    quote: "Anat came into a domain - drone parachute safety systems, aerospace regulations, field operators - and didn't just learn it, she internalized it.",
    cite: "Yuval Gilad, CPO",
    date: "2021-2022 · 1Y",
  },
  {
    name: "Datos Health", url: "datos-health.com", logo: "datos",
    desc: "Designed a dual-perspective survey builder for PREM & PROM data collection, a highly configurable clinician-facing tool and a lightweight mobile experience for patients tracking their own health.",
    tags: ["Healthcare", "B2B · B2B2C", "UX · UI · Design System", "Desktop · Mobile web"],
    quote: "Anat has always found a creative and successful solution to any challenge.",
    cite: "Matat Miller, VP Product",
    date: "2021-2023",
  },
  {
    name: "OffRa", url: "offra.health", logo: "offra",
    desc: "Solo designer on a 0→1 AI-driven platform for at-risk cancer patients and their care teams. Designed for two user types: patients managing their own BRCA-related health tracking, and clinicians coordinating care.",
    tags: ["Healthcare", "B2B2C", "Solo Designer", "UX · UI · Design System"],
    date: "2023 · 6m",
  },
  {
    name: "iMDsoft", url: "imd-soft.com", logo: "imdsoft",
    desc: "UX designer on a native mobile clinical information system for critical care physicians - a context where clinical decisions are made on the go, under time pressure, based on live patient data.",
    tags: ["Healthcare", "B2B", "Solo Designer", "UX", "Native"],
    quote: "Anat is very professional. She demonstrated adaptability to embrace change all along the product's design phase.",
    cite: "Laure Debattisse, Clinical Product Manager",
    date: "2023 · 1y",
  },
  {
    name: "ChangeHealthCare", url: "changehealthcare.com", logo: "chc",
    acquired: "Acquired by Optum Oct 2022",
    desc: "UI designer on a B2B2C native app for health insurance reimbursement, working within an American enterprise environment, designed for both providers managing claims and patients tracking their reimbursement status.",
    tags: ["Fintech", "B2B2C", "UI", "Native", "American Market"],
    quote: "With her help, my team was able to achieve greater velocity and higher quality deliverables with everything related to design… If I could copy & paste Anat's way of work, I'd do it for all of my team.",
    cite: "Shlomi Green, Eng. Group Mng",
    date: "2019-2021",
  },
  {
    name: "Taliaz", url: "taliazhealth.co.il", logo: "taliaz",
    desc: "UI designer on a 0→1 AI-driven platform helping psychiatrists make more precise medication decisions. Designed a multi-step clinical workflow from patient onboarding and consent through assessment, medication history, and AI-generated treatment recommendations.",
    tags: ["Healthcare", "B2B", "AI Interface", "UX · UI · Design System"],
    quote: "Anat has an extensive experience with complex systems, which makes the work flow very smooth and fast. Anat stays my first choice designer for future projects.",
    cite: "Inna Davidovich, VP Product",
    date: "2021 · 6m",
  },
  {
    name: "Dario", url: "Dariohealth.com", logo: "dario", centered: true,
    desc: "UI designer on a native mobile health app that connected to a portable glucose monitor and combined real-time tracking with food logging, activity, and lifestyle coaching, all aimed at long-term behavior change for diabetes patients.",
    tags: ["Healthcare", "B2B2C", "UI", "Native"],
    quote: "Anat is a real pro, she has the unique capability to work the fine details while truly understanding the big picture and the whole product.",
    cite: "Justin Hancock, Creative Director",
    date: "2019-2020",
  },
];

/* --- Logo files (exact Figma export names, so re-drops just work) ----- */
const LOGO_FILES = {
  // 8 true-vector logos exported as crisp SVG
  applitools: "applitools.svg",
  summa: "summa.svg",
  imdsoft: "imdsoft.svg",
  offra: "offra.svg",
  parazero: "parazero.svg",
  taliaz: "taliaz.svg",
  chc: "chc.svg",
  dario: "dario.svg",
  // I-NEXT and Datos are raster in Figma (not vectors) — now hi-res 192px (4x) exports.
  inext: "Property 1=ichilov.jpg",
  datos: "Datos.jpg",
};

/* --- Render ---------------------------------------------------------- */
function initial(name) {
  return name.replace(/[^A-Za-z]/, "").charAt(0).toUpperCase() || "•";
}

function cardHTML(p) {
  const tags = p.tags.map((t) => `<span class="tag">${t}</span>`).join("");
  const shipping = p.shipping ? `<span class="shipping-badge">Actively shipping</span>` : "";
  const acquired = p.acquired ? `<span class="card-acquired">${p.acquired}</span>` : "";
  const quote = p.quote
    ? `<div class="card-quote"><p>“${p.quote}”</p><cite>${p.cite}</cite></div>`
    : "";
  const link = p.link ? `<a href="#" class="card-link">${p.link}</a>` : "";

  return `
    <article class="card${p.centered ? " card-centered" : ""}">
      <div class="card-head">
        <span class="card-logo">
          <img src="assets/logos/${encodeURIComponent(LOGO_FILES[p.logo])}" alt="${p.name} logo"
               onload="this.nextElementSibling.style.display='none';"
               onerror="this.remove();" />
          <span class="logo-fallback">${initial(p.name)}</span>
        </span>
        <div>
          <h3 class="card-title">${p.name}</h3>
          <a class="card-url" href="${p.href || "https://" + p.url}" target="_blank" rel="noopener">${p.url}</a>
          ${acquired}
        </div>
      </div>
      ${shipping}
      <p class="card-desc">${p.desc}</p>
      <div class="card-tags">${tags}</div>
      <div class="card-spacer"></div>
      ${quote}
      ${link}
      <span class="card-date">${p.date}</span>
    </article>`;
}

const grid = document.getElementById("card-grid");
if (grid) grid.innerHTML = PROJECTS.map(cardHTML).join("");
