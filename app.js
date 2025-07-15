// app.js – AI Value-Chain Explorer SPA (FINAL)
// Vanilla ES6 modules—all logic in this file. Runs from file:// with no server.
// Chart.js is loaded in index.html via CDN.

/*************************** 1. DATA ***************************/
// Complete 7-industry dataset (no placeholders).
window.APP_DATA = {
  industries: [
    {
      id: "tech",
      name: "Technology Software, Products & Platforms",
      ai_maturity: 5,
      highlights: [
        "Copilots embedded in every workflow",
        "Engineering headcount shrinks 10pp by 2028",
        "Median payback on Gen-AI < 12 mo",
      ],
      workforce_2024: [
        { label: "R&D / ENG", pct: 45 },
        { label: "GTM Sales", pct: 15 },
        { label: "Marketing", pct: 10 },
        { label: "Cloud Ops & SRE", pct: 10 },
        { label: "Customer Support", pct: 10 },
        { label: "G&A", pct: 10 },
      ],
      workforce_2028: [
        { label: "*AI-Augmented ENG*", pct: 35 },
        { label: "Growth/Rev Ops", pct: 15 },
        { label: "Channel", pct: 5 },
        { label: "AI Success (CSM)", pct: 5 },
        { label: "Lean G&A + Co-Pilot", pct: 10 },
        { label: "Digital GTM (Sales+Mktg)", pct: 30 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "Microsoft",
          country: "USA",
          revenue: 261.8,
          business_model: "Cloud + Productivity",
          ai_maturity: 5,
          initiative: "Copilot",
          challenge: "Legacy transition",
        },
        {
          rank: 2,
          name: "Apple",
          country: "USA",
          revenue: 391.0,
          business_model: "Hardware + Services",
          ai_maturity: 4,
          initiative: "Apple Intelligence",
          challenge: "Services growth dependency",
        },
      ],
      success_cases: [
        {
          company: "Microsoft",
          use_case: "Copilot in M365",
          technique: "GPT-4 + RAG",
          kpi: "29% faster task completion",
          ttv: "6 mo",
        },
        {
          company: "GitHub",
          use_case: "Copilot code assist",
          technique: "Seq2Seq LLM",
          kpi: "55% higher dev velocity",
          ttv: "3 mo",
        },
      ],
      personas: [
        {
          name: "DevOps Engineer",
          pre_ai_timeline: [
            "06:30 PagerDuty alerts",
            "07:00 manually inspecting logs",
            "09:00 SSH root cause",
            "11:30 manual rollback",
            "14:30 config updates",
            "19:30 on-call anxiety",
          ],
          post_ai_timeline: [
            "07:00 AI infra health report",
            "08:00 predictive scaling approved",
            "10:00 autonomous deployment",
            "11:30 AI root-cause in minutes",
            "15:00 mentoring juniors",
          ],
          kpis: [
            { label: "MTTR", pre: "4-6 h", post: "20 min", delta: "-85%" },
            { label: "Strategic work", pre: "25%", post: "70%", delta: "+180%" },
          ],
        },
      ],
    },
    {
      id: "semi",
      name: "Semiconductors",
      ai_maturity: 4,
      highlights: [
        "AI virtual fabs cut downtime 30%",
        "Automated route-place slashes design cycles",
        "95% accurate supply-chain forecasting",
      ],
      workforce_2024: [
        { label: "Fab Technicians", pct: 35 },
        { label: "Design Engineers", pct: 25 },
        { label: "Manufacturing Eng", pct: 15 },
        { label: "Sales & Apps", pct: 10 },
        { label: "Supply-Chain", pct: 15 },
      ],
      workforce_2028: [
        { label: "Robot-Fabs", pct: 20 },
        { label: "AI Design", pct: 30 },
        { label: "Smart Manufacturing", pct: 10 },
        { label: "Solution Architects", pct: 15 },
        { label: "Digital SCM", pct: 25 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "TSMC",
          country: "Taiwan",
          revenue: 88.3,
          business_model: "Foundry",
          ai_maturity: 5,
          initiative: "EUV RL defect detection",
          challenge: "Geopolitical risk",
        },
        {
          rank: 2,
          name: "NVIDIA",
          country: "USA",
          revenue: 89.5,
          business_model: "Fab-less",
          ai_maturity: 5,
          initiative: "H100/H200 roadmap",
          challenge: "Supply constraints",
        },
      ],
      success_cases: [
        {
          company: "TSMC",
          use_case: "Wafer anomaly detection",
          technique: "Vision CNN",
          kpi: "-40% scrap rate",
          ttv: "9 mo",
        },
      ],
      personas: [
        {
          name: "Chip Design Engineer",
          pre_ai_timeline: ["Manual layout", "Trial-error simulations"],
          post_ai_timeline: ["AI design exploration", "Predictive yield modelling"],
          kpis: [
            { label: "Iterations/day", pre: "3", post: "20", delta: "x6" },
            { label: "Tape-out timeline", pre: "18 mo", post: "12 mo", delta: "-33%" },
          ],
        },
      ],
    },
    {
      id: "prof",
      name: "Professional Services",
      ai_maturity: 4,
      highlights: [
        "Research time cut 80% via Gen-AI",
        "Generative slideware saves 50 hrs/engagement",
        "AI agents expand margins 3 pp",
      ],
      workforce_2024: [
        { label: "Partners", pct: 5 },
        { label: "Managers", pct: 15 },
        { label: "Consultants", pct: 60 },
        { label: "Analysts", pct: 15 },
        { label: "Support", pct: 5 },
      ],
      workforce_2028: [
        { label: "SME Leads", pct: 10 },
        { label: "Hybrid Managers", pct: 20 },
        { label: "AI Consultants", pct: 35 },
        { label: "Prompt Engineers", pct: 15 },
        { label: "Digital Ops", pct: 20 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "Accenture",
          country: "Ireland",
          revenue: 66.2,
          business_model: "IT & Strategy",
          ai_maturity: 5,
          initiative: "GenAI Codestrap",
          challenge: "Margin pressure",
        },
        {
          rank: 2,
          name: "McKinsey & Co",
          country: "USA",
          revenue: 16.2,
          business_model: "Strategy Consulting",
          ai_maturity: 5,
          initiative: "Lilli",
          challenge: "Talent war",
        },
      ],
      success_cases: [
        {
          company: "Accenture",
          use_case: "Code generation accelerator",
          technique: "Transformer fine-tune",
          kpi: "-45% dev effort",
          ttv: "4 mo",
        },
      ],
      personas: [
        {
          name: "Consultant",
          pre_ai_timeline: ["Manual desk research", "Excel pivots"],
          post_ai_timeline: ["Agentic synthesis", "Auto-storylining"],
          kpis: [
            { label: "Research speed", pre: "8 h", post: "1 h", delta: "-88%" },
            { label: "Delivery", pre: "3 w", post: "4 d", delta: "-81%" },
          ],
        },
      ],
    },
    {
      id: "comm",
      name: "Communications",
      ai_maturity: 3,
      highlights: [
        "Predictive maintenance avoids 12 k truck rolls",
        "Churn models lift NPS +7",
        "Self-healing network halves MTTR",
      ],
      workforce_2024: [
        { label: "Field Techs", pct: 30 },
        { label: "NOC Engineers", pct: 20 },
        { label: "Call Center", pct: 25 },
        { label: "Digital IT", pct: 10 },
        { label: "Sales", pct: 10 },
        { label: "G&A", pct: 5 },
      ],
      workforce_2028: [
        { label: "Field Robots", pct: 15 },
        { label: "AIOps", pct: 8 },
        { label: "Digital CX", pct: 12 },
        { label: "Edge Cloud", pct: 20 },
        { label: "Growth Partner", pct: 20 },
        { label: "G&A", pct: 5 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "Verizon",
          country: "USA",
          revenue: 134.0,
          business_model: "Carrier",
          ai_maturity: 4,
          initiative: "AI Connect",
          challenge: "Debt load",
        },
      ],
      success_cases: [
        {
          company: "Verizon",
          use_case: "Network root-cause AI",
          technique: "Graph ML",
          kpi: "-65% outage time",
          ttv: "5 mo",
        },
      ],
      personas: [
        {
          name: "Network Ops Engineer",
          pre_ai_timeline: ["Manual triage", "CLI configs"],
          post_ai_timeline: ["Predictive alarms", "Self-healing nets"],
          kpis: [
            { label: "MTTR", pre: "7 h", post: "45 m", delta: "-89%" },
            { label: "Incidents/mo", pre: "12", post: "2", delta: "-83%" },
          ],
        },
      ],
    },
    {
      id: "media",
      name: "Media & Streaming",
      ai_maturity: 4,
      highlights: [
        "Synthetic actors cut production cost 40%",
        "Hyper-personalized feeds lift MAU 18%",
        "Real-time dubbing unlocks global TAM",
      ],
      workforce_2024: [
        { label: "Content Crew", pct: 25 },
        { label: "Post-Prod Tech", pct: 20 },
        { label: "Marketing", pct: 20 },
        { label: "Broadcast", pct: 15 },
        { label: "Platform", pct: 10 },
        { label: "G&A", pct: 10 },
      ],
      workforce_2028: [
        { label: "AI Creators", pct: 30 },
        { label: "Growth Data", pct: 25 },
        { label: "Virtual Prod", pct: 10 },
        { label: "Cloud Playout", pct: 5 },
        { label: "Personalization", pct: 20 },
        { label: "G&A", pct: 10 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "Disney",
          country: "USA",
          revenue: 91.4,
          business_model: "Studio + Parks",
          ai_maturity: 4,
          initiative: "Magic Words",
          challenge: "Cord-cut",
        },
      ],
      success_cases: [
        {
          company: "Netflix",
          use_case: "Content recommendation",
          technique: "Deep CF",
          kpi: "+18% watch time",
          ttv: "ongoing",
        },
      ],
      personas: [
        {
          name: "Creative Director",
          pre_ai_timeline: ["Manual briefs", "Spreadsheet schedules"],
          post_ai_timeline: ["AI storylines", "Auto-edit"],
          kpis: [
            { label: "Production cycle", pre: "6 m", post: "3 m", delta: "-50%" },
            { label: "Cost", pre: "100%", post: "60%", delta: "-40%" },
          ],
        },
      ],
    },
    {
      id: "sport",
      name: "Sports & Entertainment",
      ai_maturity: 3,
      highlights: [
        "Real-time analytics drives fan engagement",
        "Automated camerawork saves 30 crew/event",
        "Prediction models open betting revenues",
      ],
      workforce_2024: [
        { label: "Athletes", pct: 35 },
        { label: "Venue Ops", pct: 20 },
        { label: "Broadcast", pct: 15 },
        { label: "Data & XR", pct: 5 },
        { label: "Sales", pct: 15 },
        { label: "G&A", pct: 10 },
      ],
      workforce_2028: [
        { label: "Athletes", pct: 35 },
        { label: "Robotics Ops", pct: 10 },
        { label: "AI Broadcast", pct: 8 },
        { label: "Fan Analytics", pct: 20 },
        { label: "Sales", pct: 17 },
        { label: "G&A", pct: 10 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "TKO Group",
          country: "USA",
          revenue: 2.8,
          business_model: "WWE + UFC",
          ai_maturity: 4,
          initiative: "Fight prediction AI",
          challenge: "Global reach",
        },
      ],
      success_cases: [
        {
          company: "NBA",
          use_case: "Player tracking insights",
          technique: "Vision + Graph",
          kpi: "+35% fan dwell time",
          ttv: "season",
        },
      ],
      personas: [
        {
          name: "Sports Data Analyst",
          pre_ai_timeline: ["Manual stat entry", "Late reports"],
          post_ai_timeline: ["Real-time AI analytics", "Instant coach intel"],
          kpis: [
            { label: "Insights/game", pre: "8", post: "50", delta: "+525%" },
            { label: "Accuracy", pre: "60%", post: "87%", delta: "+45%" },
          ],
        },
      ],
    },
    {
      id: "edu",
      name: "Education",
      ai_maturity: 2,
      highlights: [
        "Personal tutors boost grades 12%",
        "Automated grading frees 40% teacher time",
        "Adaptive pathways cut dropout 15%",
      ],
      workforce_2024: [
        { label: "Faculty", pct: 45 },
        { label: "Curric Design", pct: 10 },
        { label: "Student Support", pct: 8 },
        { label: "IT", pct: 12 },
        { label: "Admin", pct: 15 },
        { label: "Facilities", pct: 10 },
      ],
      workforce_2028: [
        { label: "Faculty", pct: 35 },
        { label: "Learning Architects", pct: 15 },
        { label: "AI Coach", pct: 15 },
        { label: "Tech Platform", pct: 20 },
        { label: "Admin", pct: 10 },
        { label: "Facilities", pct: 5 },
      ],
      top_companies: [
        {
          rank: 1,
          name: "Khan Academy",
          country: "USA",
          revenue: 0.2,
          business_model: "Non-profit EdTech",
          ai_maturity: 5,
          initiative: "Khanmigo",
          challenge: "Funding model",
        },
      ],
      success_cases: [
        {
          company: "Duolingo",
          use_case: "GPT-powered conversation",
          technique: "Fine-tuned GPT-3.5",
          kpi: "+19% retention",
          ttv: "3 mo",
        },
      ],
      personas: [
        {
          name: "Curriculum Designer",
          pre_ai_timeline: ["Manual research", "Hand-made quizzes"],
          post_ai_timeline: ["AI learning paths", "Adaptive assessments"],
          kpis: [
            { label: "Plans/year", pre: "10", post: "100", delta: "x10" },
            { label: "Outcome uplift", pre: "0", post: "+20%", delta: "+20%" },
          ],
        },
      ],
    },
  ],
};

const DATA = window.APP_DATA;

/*************************** 2. HELPERS ***************************/
const $ = (s, scope = document) => scope.querySelector(s);
const $$ = (s, scope = document) => Array.from(scope.querySelectorAll(s));
const fmt = (n) => n.toLocaleString("en", { maximumFractionDigits: 0 });
const debounce = (fn, d = 300) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), d); }; };
const createEl = (tag, attrs = {}, kids = []) => { const el = document.createElement(tag); Object.entries(attrs).forEach(([k, v]) => { if (k === "class") el.className = v; else if (k === "html") el.innerHTML = v; else el.setAttribute(k, v); }); kids.forEach((c) => el.appendChild(c)); return el; };
const appRoot = () => $("#app");

/*************************** 3. ROUTER ***************************/
const routes = [
  { p: /^#\/?$/, h: renderHome },
  { p: /^#\/industry\/([\w-]+)$/, h: (id) => renderIndustry(id) },
  { p: /^#\/library$/, h: renderLibrary },
  { p: /^#\/about$/, h: renderAbout },
];
function router() {
  const hash = location.hash || "#/";
  for (const r of routes) { const m = hash.match(r.p); if (m) { r.h(...m.slice(1)); setTimeout(() => appRoot().focus(), 0); return; } }
  location.hash = "#/";
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);

/*************************** 4. HOME ***************************/
function cardHTML(ind) {
  const pct = (ind.ai_maturity / 5) * 100;
  return `<article tabindex="0" class="industry-card" data-id="${ind.id}"><header class="flex justify-between items-center"><h3 class="h5">${ind.name}</h3><span aria-hidden="true">🤖</span></header><p class="revenue">AI-Readiness: ${ind.ai_maturity}/5</p><div class="sparkline"><div class="fill" style="width:${pct}%"></div></div></article>`;
}
function renderHome() {
  const root = appRoot();
  root.innerHTML = `<section class="industry-grid">${DATA.industries.map(cardHTML).join("")}</section>`;
  $$(".industry-card", root).forEach((c) => { const nav = () => (location.hash = `#/industry/${c.dataset.id}`); c.addEventListener("dblclick", nav); c.addEventListener("click", nav); c.addEventListener("keydown", (e) => e.key === "Enter" && nav()); });
}

/*************************** 5. INDUSTRY ***************************/
let charts = [];
const destroyCharts = () => { charts.forEach((c) => c.destroy && c.destroy()); charts = []; };
function renderIndustry(id) {
  const ind = DATA.industries.find((x) => x.id === id);
  if (!ind) return (location.hash = "#/");
  destroyCharts();
  const root = appRoot();
  root.innerHTML = "";

  // Highlights
  const banner = createEl("section", { class: "card section" });
  banner.innerHTML = `<h2 class="h4">${ind.name}</h2><ul class="mt-8">${ind.highlights.map((h) => `<li>${h}</li>`).join("")}</ul>`;
  root.appendChild(banner);

  // Charts
  const sectionCharts = createEl("section", { class: "section" });
  sectionCharts.innerHTML = `<div class="chart-row"><div class="chart-box"><canvas id="bar24"></canvas></div><div class="chart-box"><canvas id="bar28"></canvas></div><div class="chart-box donut-box"><canvas id="donut"></canvas></div></div>`;
  root.appendChild(sectionCharts);

  // Tabs skeleton
  const tabsWrap = buildTabsSkeleton();
  root.appendChild(tabsWrap);

  // Populate panels now
  renderCompanies(ind);
  renderSuccessCases(ind);
  renderPersonas(ind);

  // Draw charts
  buildBar("bar24", ind.workforce_2024, "2024");
  buildBar("bar28", ind.workforce_2028, "2028");
  buildDonut("donut", ind.ai_maturity);
}
function buildBar(cid, arr, lbl) {
  const ctx = document.getElementById(cid);
  const ch = new Chart(ctx, { type: "bar", data: { labels: arr.map((o) => o.label), datasets: [{ label: lbl, data: arr.map((o) => o.pct), backgroundColor: "#1FB8CD" }] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { callback: (v) => v + "%" } } }, plugins: { legend: { display: false } } } });
  charts.push(ch);
}
function buildDonut(cid, v) { const ctx = document.getElementById(cid); const ch = new Chart(ctx, { type: "doughnut", data: { labels: ["AI Maturity", "Remaining"], datasets: [{ data: [v, 5 - v], backgroundColor: ["#FFC185", "#ECEBD5"] }] }, options: { cutout: "60%", responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } } } }); charts.push(ch); }

/*********** 5a. Tabs framework ***********/
function buildTabsSkeleton() {
  const wrap = createEl("section", { class: "section" });
  const list = createEl("div", { class: "tab-list", role: "tablist" });
  const panels = createEl("div");
  wrap.append(list, panels);
  const defs = [ { id: "companies", label: "Companies" }, { id: "success", label: "Success Cases" }, { id: "personas", label: "Personas" } ];
  defs.forEach((d, i) => { const b = createEl("button", { id: `tab-${d.id}`, role: "tab", tabindex: i === 0 ? "0" : "-1", "aria-selected": i === 0 }); b.textContent = d.label; list.appendChild(b); const p = createEl("div", { id: `panel-${d.id}`, role: "tabpanel", class: "tab-panel", "aria-labelledby": `tab-${d.id}` }); if (i !== 0) p.hidden = true; panels.appendChild(p); });
  // interaction
  const setActive = (id) => defs.forEach((d) => { const active = d.id === id; $("#tab-"+d.id).setAttribute("aria-selected", active); $("#tab-"+d.id).tabIndex = active ? 0 : -1; $("#panel-"+d.id).hidden = !active; });
  $$("[role=tab]", list).forEach((b) => { b.addEventListener("click", () => setActive(b.id.replace("tab-", ""))); b.addEventListener("keydown", (e) => { if (["ArrowLeft","ArrowRight"].includes(e.key)) { const dir = e.key === "ArrowRight" ? 1 : -1; const bt = $$("[role=tab]", list); let idx = bt.indexOf(b); idx = (idx + dir + bt.length) % bt.length; bt[idx].focus(); bt[idx].click(); } }); });
  return wrap;
}

/*********** Companies panel ***********/
function renderCompanies(ind) {
  const panel = $("#panel-companies");
  const perPage = 5; let page = 1; const pages = Math.ceil(ind.top_companies.length / perPage);
  const draw = () => {
    const slice = ind.top_companies.slice((page-1)*perPage, page*perPage);
    panel.innerHTML = `<table class="table"><thead><tr><th>Name</th><th>Revenue ($B)</th><th>Business Model</th><th>AI Maturity</th></tr></thead><tbody>${slice.map((c,i) => `<tr data-idx="${i}" tabindex="0"><td>${c.name}</td><td>${fmt(c.revenue)}</td><td>${c.business_model}</td><td>${c.ai_maturity}</td></tr>`).join("")}</tbody></table>`;
    attach(slice);
  };
  const attach = (rows) => { $$("tbody tr", panel).forEach((r) => { const data = rows[r.dataset.idx]; const open = () => openModal(companyModal(data)); r.addEventListener("dblclick", open); r.addEventListener("keydown", (e) => e.key === "Enter" && open()); }); };
  if (pages>1) { const nav = createEl("div", { class: "pagination" }); const prev = createEl("button", { class: "btn btn--sm btn--outline" }); prev.textContent = "Prev"; const next = createEl("button", { class: "btn btn--sm btn--outline" }); next.textContent = "Next"; const stat = createEl("span"); nav.append(prev, stat, next); panel.appendChild(nav); const update = () => { prev.disabled = page===1; next.disabled = page===pages; stat.textContent = `Page ${page}/${pages}`; draw(); }; prev.addEventListener("click", () => { page--; update(); }); next.addEventListener("click", () => { page++; update(); }); update(); } else draw();
}
function companyModal(c) { return `<h3 id="modal-title">${c.name}</h3><p><strong>Revenue:</strong> $${c.revenue} B</p><p><strong>Country:</strong> ${c.country}</p><p><strong>Business Model:</strong> ${c.business_model}</p><p><strong>AI Maturity:</strong> ${c.ai_maturity}</p><p><strong>Initiative:</strong> ${c.initiative}</p><p><strong>Challenge:</strong> ${c.challenge}</p>`; }

/*********** Success cases panel ***********/
function renderSuccessCases(ind) {
  const panel = $("#panel-success");
  const search = createEl("input", { class: "form-control mb-8", type: "search", placeholder: "Search…", "aria-label": "Search success cases" });
  const table = createEl("table", { class: "table" });
  panel.append(search, table);
  const draw = () => {
    const term = search.value.toLowerCase();
    const filt = ind.success_cases.filter((s) => s.company.toLowerCase().includes(term) || s.use_case.toLowerCase().includes(term));
    table.innerHTML = `<thead><tr><th>Company</th><th>Use case</th><th>Technique</th><th>KPI</th><th>TTV</th></tr></thead><tbody>${filt.map((s,i) => `<tr data-idx="${i}" tabindex="0"><td>${s.company}</td><td>${s.use_case}</td><td>${s.technique}</td><td>${s.kpi}</td><td>${s.ttv}</td></tr>`).join("")}</tbody>`;
    $$("tbody tr", table).forEach((r) => { const sc = filt[r.dataset.idx]; const open = () => openModal(successModal(sc)); r.addEventListener("dblclick", open); r.addEventListener("keydown", (e) => e.key === "Enter" && open()); });
  };
  search.addEventListener("input", debounce(draw,200)); draw();
}
function successModal(s) { return `<h3 id="modal-title">${s.company} – ${s.use_case}</h3><p><strong>Technique:</strong> ${s.technique}</p><p><strong>KPI Impact:</strong> ${s.kpi}</p><p><strong>Time to Value:</strong> ${s.ttv}</p>`; }

/*********** Personas panel ***********/
function renderPersonas(ind) {
  const panel = $("#panel-personas"); panel.innerHTML = "";
  ind.personas.forEach((p) => { const det = createEl("details"); const sum = createEl("summary"); sum.textContent = p.name; det.appendChild(sum); const body = createEl("div", { class: "mt-8" }); body.innerHTML = `<div class="flex gap-16"><div><h5>Pre-AI</h5><ul>${p.pre_ai_timeline.map((t) => `<li>${t}</li>`).join("")}</ul></div><div><h5>Post-AI</h5><ul>${p.post_ai_timeline.map((t) => `<li>${t}</li>`).join("")}</ul></div></div>${kpiTbl(p.kpis)}`; det.appendChild(body); panel.appendChild(det); sum.addEventListener("keydown", (e) => { if (["Enter"," "].includes(e.key)) { e.preventDefault(); det.open=!det.open; } }); });
}
function kpiTbl(arr) { return `<table><thead><tr><th>KPI</th><th>Pre</th><th>Post</th><th>∆</th></tr></thead><tbody>${arr.map((k) => `<tr><td>${k.label}</td><td>${k.pre}</td><td>${k.post}</td><td>${k.delta}</td></tr>`).join("")}</tbody></table>`; }

/*************************** 6. GLOBAL LIBRARY ***************************/
let global = null; const buildGlobal = () => { if (global) return global; global=[]; DATA.industries.forEach((i) => (i.success_cases||[]).forEach((s) => global.push({ ...s, industry: i }))); return global; };
function renderLibrary() {
  const root = appRoot(); root.innerHTML="";
  const filterBar = createEl("div", { class: "filter-bar mb-8 flex gap-8 items-center" });
  const sel = createEl("select", { class: "form-control" }); sel.innerHTML = `<option value="all">All Industries</option>${DATA.industries.map((i) => `<option value="${i.id}">${i.name}</option>`).join("")}`;
  const search = createEl("input", { class: "form-control", type: "search", placeholder: "Search…", "aria-label": "Search library" });
  filterBar.append(sel, search);
  const table = createEl("table", { class: "table" });
  root.append(filterBar, table);
  const draw = () => { const term = search.value.toLowerCase(); const f = sel.value; const rows = buildGlobal().filter((r) => (f==="all"||r.industry.id===f) && (r.company.toLowerCase().includes(term)||r.use_case.toLowerCase().includes(term))); table.innerHTML = `<thead><tr><th>Industry</th><th>Company</th><th>Use case</th><th>Technique</th><th>KPI</th></tr></thead><tbody>${rows.map((r,i) => `<tr data-idx="${i}" tabindex="0"><td>${r.industry.name}</td><td>${r.company}</td><td>${r.use_case}</td><td>${r.technique}</td><td>${r.kpi}</td></tr>`).join("")}</tbody>`; $$("tbody tr", table).forEach((tr) => { const data = rows[tr.dataset.idx]; const open = () => openModal(successModal(data)); tr.addEventListener("dblclick", open); tr.addEventListener("keydown", (e) => e.key === "Enter" && open()); }); };
  sel.addEventListener("change", draw); search.addEventListener("input", debounce(draw,200)); draw();
}

/*************************** 7. ABOUT ***************************/
function renderAbout() { appRoot().innerHTML = `<section class="section"><h2 class="h4 mb-8">About this Tool</h2><p>This SPA runs fully client-side. Edit <code>app.js</code> to extend <code>window.APP_DATA</code>; the UI updates automatically. No build or server needed.</p></section>`; }

/*************************** 8. MODAL ***************************/
function openModal(html) { const m = $("#modal"); m.innerHTML = `<div class="modal-content" role="document">${html}<button class="close-modal" aria-label="Close">×</button></div>`; m.classList.remove("hidden"); $(".close-modal", m).focus(); $(".close-modal", m).addEventListener("click", close); m.addEventListener("click", (e) => { if (e.target===m) close(); }); document.addEventListener("keydown", esc); function esc(e){ if(e.key==="Escape") close(); } function close(){ m.classList.add("hidden"); m.innerHTML=""; document.removeEventListener("keydown", esc);} }

/*************************** 9. INIT ***************************/
router();
