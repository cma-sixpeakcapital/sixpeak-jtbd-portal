import { useState } from "react";

const DENIM = "#0B1833";
const SPACE = "#2C3A51";
const STEEL = "#BFC7DA";
const RUST = "#C4581A";
const RUST_GLOW = "#E8935A";
const GHOST = "#F8F9F4";
const STEEL_LIGHT = "#E2E7F0";
const GRAY_DARK = "#475569";
const SUCCESS = "#10B981";
const WARNING = "#F59E0B";

const PEOPLE = [
  {
    id: "tom",
    name: "Tom Taggart",
    title: "Director of Business Development",
    entity: "LV Construction",
    salary: "$222K",
    lvAlloc: "100%",
    photo: "TT",
    color: RUST,
    revenueDriver: "$207M → $480M+ Pipeline GMP",
    niContribution: "+$29.6M cumulative NI (FY2026–2033)",
    summary: "Convert from Asset Manager to full-time BD. Source, qualify, and close 3rd-party GC and co-GP construction management contracts in the 30–200 unit multifamily sweet spot across Los Angeles.",
    jtbd: [
      {
        job: "Build a repeatable deal pipeline that sustains $90–100M annual GC billing",
        outcome: "6 signed contracts per year at $15–18M GMP each, every 2 months",
        metric: "Signed GMP / Year",
        target: "$90–108M",
      },
      {
        job: "Source developers before they go to bid using public-data intelligence",
        outcome: "Identify projects at permit or land-acquisition stage, build relationships before RFP",
        metric: "Qualified Leads / Quarter",
        target: "8–12",
      },
      {
        job: "Move deals from lead to signed contract within 6–9 months",
        outcome: "Pipeline velocity that keeps billing smooth across fiscal years",
        metric: "Avg. Days Lead → Signed",
        target: "< 270 days",
      },
      {
        job: "Protect Six Peak's bonding capacity by targeting unbonded deals",
        outcome: "Fee revenue without bonding drag — 0% drag = 10.28% marginal NI rate",
        metric: "% Unbonded Deals",
        target: "100%",
      },
    ],
    sourcing: [
      { channel: "LADBS Permit Monitoring", freq: "Weekly", desc: "Track new multifamily permit applications (30–200 units, Type IIIA-V) to identify developers pulling permits before GC selection" },
      { channel: "CTCAC Tax Credit Monitoring", freq: "Bimonthly", desc: "Monitor LIHTC award rounds and applications — catch developers during the defined window between award and GC bid" },
      { channel: "CoStar Land Sales Monitoring", freq: "Weekly", desc: "Watch land transactions matching multifamily development profiles — earliest signal, pre-design relationship building" },
    ],
    pipeline: [
      { stage: "Lead", def: "Initial contact or identified opportunity", count: "15–20 active" },
      { stage: "Qualified", def: "Met developer, confirmed scope/budget fit, no fatal flaws", count: "8–12 active" },
      { stage: "Proposal", def: "GMP estimate submitted, in active negotiation", count: "4–6 active" },
      { stage: "Negotiation", def: "Term sheet or LOI stage, legal review", count: "2–3 active" },
      { stage: "Signed", def: "Executed GC contract, 9-month groundbreaking lead time", count: "Target: 6/yr" },
    ],
    milestones: [
      { period: "90 Days", item: "Pipeline seeded with 15+ leads, 3+ qualified, sourcing systems operational" },
      { period: "180 Days", item: "First contract signed (BD-01, $18M). Pipeline has 20+ leads" },
      { period: "12 Months", item: "4 contracts signed ($63M cumulative). Cadence established" },
      { period: "18 Months", item: "7 contracts signed ($108M). Salary gate passed. Bonus eligibility active" },
      { period: "24 Months", item: "10 contracts signed ($162M). Pipeline self-sustaining at 6/year pace" },
    ],
    comp: {
      base: "$222,000",
      bonus: "0.20% of signed GMP",
      cap: "$150,000/year",
      gate: "Must sign 1+ contract by Month 18 or salary drops to $190K",
      totalBonus: "$750K over model horizon (30 deals)",
    },
    fyBilling: [
      { fy: "FY2028", billing: "$27.7M" },
      { fy: "FY2029", billing: "$57.6M" },
      { fy: "FY2030", billing: "$72.4M" },
      { fy: "FY2031", billing: "$93.5M" },
      { fy: "FY2032", billing: "$96.7M" },
    ],
  },
  {
    id: "schuyler",
    name: "Schuyler Dietz",
    title: "Associate — Uplifters Program Lead",
    entity: "Six Peak Capital",
    salary: "$115K",
    lvAlloc: "0%",
    photo: "SD",
    color: "#4A8B8C",
    revenueDriver: "$4.1M Uplifters Revenue (FY2027–2031)",
    niContribution: "+$4.1M incremental NI over 5-year program",
    summary: "Lead the Uplifters Foundation development fee program — source, underwrite, and manage 60 single-family residential properties over 5 years. This is a pure Six Peak Capital revenue stream with no GC execution risk.",
    jtbd: [
      {
        job: "Source and close 12 Uplifters properties per year for 5 years",
        outcome: "Steady pipeline of SFR acquisitions at ~$1.4M avg lot price + $1.6M construction",
        metric: "Properties Closed / Year",
        target: "12",
      },
      {
        job: "Manage the full Uplifters lifecycle from sourcing through disposition",
        outcome: "Coordinate acquisition, entitlement, construction oversight, and sale",
        metric: "Active Properties in Pipeline",
        target: "15–20",
      },
      {
        job: "Maximize development fee yield per property",
        outcome: "Negotiate optimal fee structures with Uplifters Foundation",
        metric: "Avg Dev Fee / Property",
        target: "Per program terms",
      },
      {
        job: "Maintain program relationship with Uplifters Foundation leadership",
        outcome: "Secure renewals, expansions, and referrals beyond initial 60-property commitment",
        metric: "Foundation Satisfaction",
        target: "Renewal by Year 4",
      },
    ],
    milestones: [
      { period: "Q1 2027", item: "Program launch. First 2–3 properties identified and under contract" },
      { period: "Q3 2027", item: "6 properties closed. Construction underway on first 3" },
      { period: "FY2028", item: "12 properties closed. $1.32M in development fee revenue recognized" },
      { period: "FY2029", item: "24 cumulative. $1.63M revenue. Pipeline systems fully operational" },
      { period: "FY2031", item: "60 properties complete. Program evaluation for renewal/expansion" },
    ],
    fyRevenue: [
      { fy: "FY2027", revenue: "$0.10M" },
      { fy: "FY2028", revenue: "$1.32M" },
      { fy: "FY2029", revenue: "$1.63M" },
      { fy: "FY2030", revenue: "$0.59M" },
      { fy: "FY2031", revenue: "$0.46M" },
    ],
  },
  {
    id: "derek",
    name: "Derek Sanders",
    title: "Director of Development",
    entity: "Six Peak Capital (30% LV)",
    salary: "$250K",
    lvAlloc: "30%",
    photo: "DS",
    color: "#7B9464",
    revenueDriver: "$88.3M Combined GMP (4 Developer Projects)",
    niContribution: "LIHTC revenue + developer fee income across Francis, Reseda, 3rd St",
    summary: "Lead all developer-side responsibilities on Six Peak's owned/co-GP projects during construction. Manage permitting, entitlements, LIHTC compliance, and developer obligations while LV Construction executes the GC scope.",
    jtbd: [
      {
        job: "Drive Ramsgate through construction completion and lease-up milestones",
        outcome: "Hit 20%, 50%, 90% occupancy gates to unlock remaining developer fee tranches",
        metric: "Dev Fee Tranches Collected",
        target: "All 4 tranches by stabilization",
      },
      {
        job: "Manage Francis LIHTC compliance and developer obligations through 30-month build",
        outcome: "Maintain CTCAC compliance, manage Steyn guaranty obligations, unlock LIHTC revenue",
        metric: "Francis LIHTC Revenue Recognized",
        target: "$0.33M+ (SP share, FY2030+)",
      },
      {
        job: "Lead Reseda permitting, entitlements, and pre-construction through groundbreaking",
        outcome: "Reseda starts Month 13, 30-month build. LIHTC revenue begins post-construction",
        metric: "Reseda LIHTC Revenue",
        target: "$0.85M (SP share, FY2030+)",
      },
      {
        job: "Advance 3rd Street from pre-development through permitting and GC contract execution",
        outcome: "3rd St starts Month 27, 30-month build. Largest single-project GMP ($41.4M)",
        metric: "Permit & Entitlement Timeline",
        target: "On-schedule for Month 27 start",
      },
    ],
    projects: [
      { name: "Ramsgate", gmp: "$20.0M", status: "In Construction", start: "Mo 1", dur: "16 mo", lihtc: "No" },
      { name: "Francis", gmp: "$43.0M", status: "In Construction", start: "Mo 4", dur: "30 mo", lihtc: "Yes — $0.33M SP share" },
      { name: "Reseda", gmp: "$45.3M", status: "Pre-Construction", start: "Mo 13", dur: "30 mo", lihtc: "Yes — $0.85M SP share" },
      { name: "3rd Street", gmp: "$41.4M", status: "Pre-Development", start: "Mo 27", dur: "30 mo", lihtc: "Yes — TBD" },
    ],
    milestones: [
      { period: "FY2027", item: "Ramsgate construction complete. Francis at ~50% completion. Reseda groundbreaking" },
      { period: "FY2028", item: "Francis nearing completion. Reseda mid-construction. 3rd St groundbreaking" },
      { period: "FY2029", item: "Francis complete, LIHTC revenue starts. Reseda nearing completion" },
      { period: "FY2030", item: "Reseda complete, LIHTC revenue starts ($0.85M). 3rd St mid-construction" },
      { period: "FY2031", item: "3rd St complete. All developer projects stabilized or in lease-up" },
    ],
  },
  {
    id: "bob",
    name: "Bob Kennedy",
    title: "Partner — Legal & Deal Closing",
    entity: "Six Peak Capital (20% LV)",
    salary: "$400K",
    lvAlloc: "20%",
    photo: "BK",
    color: "#5E7B9B",
    revenueDriver: "Enables all revenue — every deal flows through legal closing",
    niContribution: "Gate function: $33.7M cumulative NI requires 30+ closings",
    summary: "Own the legal and closing process for every deal Six Peak and LV Construction execute. From Tom's BD contracts to Schuyler's Uplifters acquisitions to Derek's developer deals — Bob is the bottleneck that must never be a bottleneck.",
    jtbd: [
      {
        job: "Close Tom's BD pipeline deals within the 9-month signing-to-groundbreaking window",
        outcome: "GC contracts fully executed with clean terms, proper insurance, lien waivers",
        metric: "Avg. Days from Term Sheet → Executed Contract",
        target: "< 45 days",
      },
      {
        job: "Structure and close Uplifters property acquisitions for Schuyler",
        outcome: "12 clean closings/year with proper title, entitlements, and fee structures",
        metric: "Uplifters Closings / Year",
        target: "12",
      },
      {
        job: "Manage LIHTC partnership agreements and Steyn guaranty documentation",
        outcome: "Derek's developer deals have clean legal structures protecting SP equity",
        metric: "LIHTC Compliance Issues",
        target: "Zero",
      },
      {
        job: "Negotiate and protect Six Peak's interests in all co-GP and JV structures",
        outcome: "Favorable fee structures, appropriate risk allocation, clean exit provisions",
        metric: "Legal Cost / Deal",
        target: "Declining as templates mature",
      },
    ],
    dealFlow: [
      { source: "Tom — BD Pipeline", volume: "6 deals/year", type: "GC contracts ($15–18M GMP)", complexity: "Medium — template-driven after first few" },
      { source: "Schuyler — Uplifters", volume: "12 deals/year", type: "SFR acquisitions ($1.4M lots)", complexity: "Low–Medium — repeatable structure" },
      { source: "Derek — Developer", volume: "1–2 deals/year", type: "LIHTC partnerships, co-GP ($40M+)", complexity: "High — each is bespoke" },
      { source: "Chris — Strategic", volume: "Ad hoc", type: "JV structures, fund formation", complexity: "High" },
    ],
    milestones: [
      { period: "Q2 2026", item: "Template GC contract finalized for BD pipeline deals. First BD deal (BD-01) closing" },
      { period: "Q4 2026", item: "3 BD deals closed. Uplifters program agreement executed" },
      { period: "FY2028", item: "10+ BD deals closed. 12 Uplifters closings. Template fully refined" },
      { period: "FY2029", item: "20+ cumulative BD closings. Legal ops running at scale" },
      { period: "FY2030", item: "All deal types at steady state. Outside counsel costs minimized through templates" },
    ],
  },
  {
    id: "chris",
    name: "Chris Aiello",
    title: "Principal",
    entity: "Six Peak Capital (50% LV)",
    salary: "$400K",
    lvAlloc: "50%",
    photo: "CA",
    color: DENIM,
    revenueDriver: "Strategic oversight of all $33.7M cumulative NI",
    niContribution: "Force multiplier across all revenue streams",
    summary: "Strategic orchestrator across all Six Peak and LV activities. Support Tom on high-value BD pursuits, guide Schuyler on Uplifters execution, backstop Derek on developer decisions, and ensure Bob has what he needs to close. The connective tissue that makes the whole machine work.",
    jtbd: [
      {
        job: "Co-source and close the highest-value BD opportunities alongside Tom",
        outcome: "Principal-level relationships with developers that Tom can't access alone",
        metric: "BD Deals with Chris Involvement",
        target: "Top 30% of pipeline by GMP",
      },
      {
        job: "Set strategic direction for capital allocation across BD, Uplifters, and developer deals",
        outcome: "Right mix of risk/return across all revenue streams, bonding capacity protected",
        metric: "Consolidated NI vs Plan",
        target: "$33.7M cumulative through FY2033",
      },
      {
        job: "Manage board reporting and investor relations for all Six Peak activities",
        outcome: "Board has clear visibility into pipeline, milestones, and financial performance",
        metric: "Board Deck Delivered",
        target: "Quarterly, within 15 days of quarter-end",
      },
      {
        job: "Recruit, develop, and retain the revenue-generating team",
        outcome: "Tom, Schuyler, Derek, Bob all performing at target — zero key-person departures",
        metric: "Team Retention",
        target: "100% through FY2030",
      },
      {
        job: "Ensure Grady and the construction team have the resources to execute the growing backlog",
        outcome: "GC capacity scales with BD pipeline — hiring, bonding, equipment ahead of need",
        metric: "Project Delivery On-Time %",
        target: "> 90%",
      },
    ],
    oversight: [
      { stream: "BD Pipeline (Tom)", revenue: "$29.6M NI", status: "Scaling", action: "Co-sell top deals, set pricing discipline" },
      { stream: "Uplifters (Schuyler)", revenue: "$4.1M NI", status: "Launching", action: "Guide program setup, approve initial deals" },
      { stream: "Developer (Derek)", revenue: "LIHTC + Dev Fees", status: "In Execution", action: "Monitor Steyn obligations, LIHTC compliance" },
      { stream: "Legal (Bob)", revenue: "Enabling", status: "Steady", action: "Ensure closing velocity matches deal flow" },
    ],
    milestones: [
      { period: "Q2 2026", item: "Tom onboarded to BD role. Uplifters program agreement in motion. Board deck presented" },
      { period: "FY2027", item: "First 4 BD deals signed. Uplifters launched. Consolidated NI positive ($3.68M)" },
      { period: "FY2028", item: "Pipeline at scale. $6.80M consolidated NI. Construction backlog growing" },
      { period: "FY2030", item: "All revenue streams mature. $5.24M NI. Business self-sustaining" },
      { period: "FY2032", item: "30 BD deals signed. Cumulative NI $32.5M+. Evaluate fund formation" },
    ],
  },
];

const ScenarioBar = () => {
  const data = [
    { fy: "FY26", a: 1.65, i: 1.65 },
    { fy: "FY27", a: 2.35, i: 3.68 },
    { fy: "FY28", a: -0.0, i: 6.80 },
    { fy: "FY29", a: -2.44, i: 5.63 },
    { fy: "FY30", a: -4.54, i: 5.24 },
    { fy: "FY31", a: -6.27, i: 4.71 },
    { fy: "FY32", a: -6.17, i: 4.75 },
  ];
  const maxVal = 8;
  const barH = 140;
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-end", height: barH + 40, padding: "0 8px" }}>
      {data.map((d) => (
        <div key={d.fy} style={{ flex: 1, textAlign: "center" }}>
          <div style={{ height: barH, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 2, position: "relative" }}>
            {d.a >= 0 ? (
              <div style={{ width: 14, height: (d.a / maxVal) * barH * 0.8, background: STEEL, borderRadius: "3px 3px 0 0", minHeight: 2 }} />
            ) : (
              <div style={{ position: "absolute", bottom: 0, width: 14, height: (Math.abs(d.a) / maxVal) * barH * 0.8, background: "rgba(239,68,68,0.3)", borderRadius: "0 0 3px 3px", transform: "translateY(100%)" }} />
            )}
            {d.i >= 0 ? (
              <div style={{ width: 14, height: (d.i / maxVal) * barH * 0.8, background: RUST, borderRadius: "3px 3px 0 0", minHeight: 2, marginLeft: 16, position: "absolute", bottom: 0, left: "50%" }} />
            ) : null}
          </div>
          <div style={{ fontSize: "0.65rem", color: GRAY_DARK, marginTop: 4, fontFamily: "'Aptos', sans-serif" }}>{d.fy}</div>
        </div>
      ))}
    </div>
  );
};

const Badge = ({ text, variant = "core" }) => {
  const colors = {
    core: { bg: "rgba(196,88,26,0.12)", text: RUST },
    ops: { bg: "rgba(44,58,81,0.08)", text: SPACE },
    success: { bg: "rgba(16,185,129,0.12)", text: "#059669" },
    teal: { bg: "rgba(74,139,140,0.12)", text: "#4A8B8C" },
    sage: { bg: "rgba(123,148,100,0.12)", text: "#5E6B3A" },
    slate: { bg: "rgba(94,123,155,0.12)", text: "#5E7B9B" },
  };
  const c = colors[variant] || colors.core;
  return (
    <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 999, fontSize: "0.68rem", fontWeight: 600, background: c.bg, color: c.text, letterSpacing: "0.04em", fontFamily: "'Aptos', sans-serif" }}>
      {text}
    </span>
  );
};

const SectionLabel = ({ children }) => (
  <div style={{ marginBottom: 12 }}>
    <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: RUST, fontFamily: "'Aptos', sans-serif" }}>
      {children}
    </div>
    <div style={{ width: 60, height: 2, background: `linear-gradient(to right, ${RUST}, transparent)`, marginTop: 4 }} />
  </div>
);

const StatCard = ({ value, label, sub }) => (
  <div style={{ textAlign: "center", padding: "16px 12px" }}>
    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: RUST }}>{value}</div>
    <div style={{ fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: GRAY_DARK, marginTop: 2, fontFamily: "'Aptos', sans-serif" }}>{label}</div>
    {sub && <div style={{ fontSize: "0.72rem", color: STEEL, marginTop: 2 }}>{sub}</div>}
  </div>
);

const PersonCard = ({ person, onClick, isSelected }) => (
  <div
    onClick={onClick}
    style={{
      background: "white",
      borderRadius: 12,
      border: isSelected ? `2px solid ${person.color}` : "1px solid rgba(11,24,51,0.08)",
      padding: 20,
      cursor: "pointer",
      transition: "all 0.2s",
      boxShadow: isSelected ? `0 8px 25px rgba(196,88,26,0.15)` : "0 2px 12px rgba(0,0,0,0.06)",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div style={{ width: 48, height: 48, borderRadius: 12, background: person.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: 700, fontSize: "0.9rem", fontFamily: "'DM Sans', sans-serif", flexShrink: 0 }}>
        {person.photo}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, color: DENIM, fontSize: "1rem", fontFamily: "'DM Sans', sans-serif" }}>{person.name}</div>
        <div style={{ fontSize: "0.78rem", color: GRAY_DARK, fontFamily: "'Aptos', sans-serif" }}>{person.title}</div>
      </div>
    </div>
    <div style={{ marginTop: 12, padding: "8px 12px", background: `${person.color}11`, borderRadius: 8 }}>
      <div style={{ fontSize: "0.75rem", fontWeight: 600, color: person.color, fontFamily: "'Aptos', sans-serif" }}>{person.revenueDriver}</div>
    </div>
  </div>
);

const JTBDRow = ({ job, idx }) => (
  <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(11,24,51,0.06)" }}>
    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
      <div style={{ width: 22, height: 22, borderRadius: 6, background: `${RUST}18`, color: RUST, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", fontWeight: 700, flexShrink: 0, marginTop: 1 }}>
        {idx + 1}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, color: DENIM, fontSize: "0.88rem", lineHeight: 1.4, fontFamily: "'Aptos', sans-serif" }}>{job.job}</div>
        <div style={{ fontSize: "0.8rem", color: GRAY_DARK, marginTop: 4, lineHeight: 1.5, fontFamily: "'Aptos', sans-serif" }}>{job.outcome}</div>
        <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
          <div style={{ fontSize: "0.72rem", color: SPACE, fontFamily: "'Aptos', sans-serif" }}>
            <span style={{ fontWeight: 600 }}>Metric:</span> {job.metric}
          </div>
          <div style={{ fontSize: "0.72rem", color: RUST, fontWeight: 600, fontFamily: "'Aptos', sans-serif" }}>
            Target: {job.target}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MilestoneTimeline = ({ milestones }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
    {milestones.map((m, i) => (
      <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20 }}>
          <div style={{ width: 10, height: 10, borderRadius: 5, background: i === 0 ? RUST : STEEL, flexShrink: 0, marginTop: 3 }} />
          {i < milestones.length - 1 && <div style={{ width: 2, flex: 1, background: `${STEEL}60`, marginTop: 2 }} />}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "0.72rem", fontWeight: 700, color: RUST, fontFamily: "'Aptos', sans-serif" }}>{m.period}</div>
          <div style={{ fontSize: "0.8rem", color: GRAY_DARK, lineHeight: 1.4, fontFamily: "'Aptos', sans-serif" }}>{m.item}</div>
        </div>
      </div>
    ))}
  </div>
);

const PersonDetail = ({ person }) => {
  const [tab, setTab] = useState("jtbd");
  const tabs = [
    { id: "jtbd", label: "Jobs to Be Done" },
    ...(person.sourcing ? [{ id: "sourcing", label: "Sourcing" }] : []),
    ...(person.pipeline ? [{ id: "pipeline", label: "Pipeline" }] : []),
    ...(person.projects ? [{ id: "projects", label: "Projects" }] : []),
    ...(person.dealFlow ? [{ id: "deals", label: "Deal Flow" }] : []),
    ...(person.oversight ? [{ id: "oversight", label: "Oversight" }] : []),
    ...(person.comp ? [{ id: "comp", label: "Comp" }] : []),
    { id: "milestones", label: "Milestones" },
  ];

  return (
    <div style={{ background: "white", borderRadius: 12, border: "1px solid rgba(11,24,51,0.08)", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      <div style={{ background: person.color, padding: "24px 28px", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "1.1rem", fontFamily: "'DM Sans', sans-serif" }}>
            {person.photo}
          </div>
          <div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5rem", fontWeight: 700 }}>{person.name}</div>
            <div style={{ opacity: 0.85, fontSize: "0.9rem", fontFamily: "'Aptos', sans-serif" }}>{person.title} — {person.entity}</div>
          </div>
        </div>
        <div style={{ marginTop: 14, fontSize: "0.88rem", lineHeight: 1.6, opacity: 0.92, fontFamily: "'Aptos', sans-serif" }}>{person.summary}</div>
        <div style={{ display: "flex", gap: 20, marginTop: 16, flexWrap: "wrap" }}>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, fontFamily: "'Aptos', sans-serif" }}>Salary</div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}>{person.salary}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px" }}>
            <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, fontFamily: "'Aptos', sans-serif" }}>LV Allocation</div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}>{person.lvAlloc}</div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 14px", flex: 1, minWidth: 200 }}>
            <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7, fontFamily: "'Aptos', sans-serif" }}>NI Contribution</div>
            <div style={{ fontWeight: 700, fontSize: "1.05rem", fontFamily: "'DM Sans', sans-serif" }}>{person.niContribution}</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(11,24,51,0.08)", overflowX: "auto" }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: "12px 18px",
              border: "none",
              borderBottom: tab === t.id ? `2px solid ${person.color}` : "2px solid transparent",
              background: "transparent",
              color: tab === t.id ? person.color : GRAY_DARK,
              fontWeight: tab === t.id ? 700 : 500,
              fontSize: "0.78rem",
              cursor: "pointer",
              fontFamily: "'Aptos', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div style={{ padding: "20px 28px" }}>
        {tab === "jtbd" && (
          <div>
            <SectionLabel>Core Jobs</SectionLabel>
            {person.jtbd.map((j, i) => <JTBDRow key={i} job={j} idx={i} />)}
          </div>
        )}

        {tab === "sourcing" && person.sourcing && (
          <div>
            <SectionLabel>Sourcing Intelligence</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {person.sourcing.map((s, i) => (
                <div key={i} style={{ padding: 16, background: "#F4F6FA", borderRadius: 10, borderLeft: `3px solid ${RUST}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700, color: DENIM, fontSize: "0.88rem", fontFamily: "'Aptos', sans-serif" }}>{s.channel}</div>
                    <Badge text={s.freq} variant="core" />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: GRAY_DARK, marginTop: 6, lineHeight: 1.5, fontFamily: "'Aptos', sans-serif" }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "pipeline" && person.pipeline && (
          <div>
            <SectionLabel>Pipeline Stage Definitions</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {person.pipeline.map((p, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: i % 2 === 0 ? "#F4F6FA" : "white", borderRadius: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: `${RUST}${(20 + i * 15).toString(16)}`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.65rem", fontWeight: 700, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: DENIM, fontSize: "0.85rem", fontFamily: "'Aptos', sans-serif" }}>{p.stage}</div>
                    <div style={{ fontSize: "0.78rem", color: GRAY_DARK, fontFamily: "'Aptos', sans-serif" }}>{p.def}</div>
                  </div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: RUST, whiteSpace: "nowrap", fontFamily: "'Aptos', sans-serif" }}>{p.count}</div>
                </div>
              ))}
            </div>
            {person.fyBilling && (
              <div style={{ marginTop: 24 }}>
                <SectionLabel>BD Pipeline Billing by FY</SectionLabel>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {person.fyBilling.map((f) => (
                    <div key={f.fy} style={{ padding: "10px 16px", background: "#F4F6FA", borderRadius: 8, textAlign: "center", minWidth: 80 }}>
                      <div style={{ fontSize: "0.68rem", color: GRAY_DARK, fontWeight: 600, fontFamily: "'Aptos', sans-serif" }}>{f.fy}</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 700, color: RUST, fontFamily: "'DM Sans', sans-serif" }}>{f.billing}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "projects" && person.projects && (
          <div>
            <SectionLabel>Developer Projects</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {person.projects.map((p, i) => (
                <div key={i} style={{ padding: 16, background: "#F4F6FA", borderRadius: 10, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ minWidth: 100 }}>
                    <div style={{ fontWeight: 700, color: DENIM, fontSize: "0.95rem", fontFamily: "'DM Sans', sans-serif" }}>{p.name}</div>
                    <Badge text={p.status} variant={p.status === "In Construction" ? "success" : p.status === "Pre-Construction" ? "core" : "ops"} />
                  </div>
                  <div style={{ display: "flex", gap: 20, flex: 1, flexWrap: "wrap" }}>
                    <div><div style={{ fontSize: "0.65rem", color: GRAY_DARK, textTransform: "uppercase", fontFamily: "'Aptos', sans-serif" }}>GMP</div><div style={{ fontWeight: 700, color: SPACE, fontFamily: "'Aptos', sans-serif" }}>{p.gmp}</div></div>
                    <div><div style={{ fontSize: "0.65rem", color: GRAY_DARK, textTransform: "uppercase", fontFamily: "'Aptos', sans-serif" }}>Start</div><div style={{ fontWeight: 600, color: SPACE, fontFamily: "'Aptos', sans-serif" }}>{p.start}</div></div>
                    <div><div style={{ fontSize: "0.65rem", color: GRAY_DARK, textTransform: "uppercase", fontFamily: "'Aptos', sans-serif" }}>Duration</div><div style={{ fontWeight: 600, color: SPACE, fontFamily: "'Aptos', sans-serif" }}>{p.dur}</div></div>
                    <div><div style={{ fontSize: "0.65rem", color: GRAY_DARK, textTransform: "uppercase", fontFamily: "'Aptos', sans-serif" }}>LIHTC</div><div style={{ fontWeight: 600, color: p.lihtc.startsWith("Yes") ? SUCCESS : GRAY_DARK, fontSize: "0.82rem", fontFamily: "'Aptos', sans-serif" }}>{p.lihtc}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "deals" && person.dealFlow && (
          <div>
            <SectionLabel>Closing Pipeline by Source</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {person.dealFlow.map((d, i) => (
                <div key={i} style={{ padding: 16, background: "#F4F6FA", borderRadius: 10, borderLeft: `3px solid ${["#C4581A","#4A8B8C","#7B9464","#0B1833"][i]}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <div style={{ fontWeight: 700, color: DENIM, fontSize: "0.88rem", fontFamily: "'Aptos', sans-serif" }}>{d.source}</div>
                    <Badge text={d.complexity} variant={d.complexity === "High" ? "core" : d.complexity.includes("Medium") ? "ops" : "success"} />
                  </div>
                  <div style={{ fontSize: "0.8rem", color: GRAY_DARK, marginTop: 4, fontFamily: "'Aptos', sans-serif" }}>{d.volume} — {d.type}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "oversight" && person.oversight && (
          <div>
            <SectionLabel>Revenue Stream Oversight</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {person.oversight.map((o, i) => (
                <div key={i} style={{ padding: 16, background: "#F4F6FA", borderRadius: 10, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ minWidth: 160 }}>
                    <div style={{ fontWeight: 700, color: DENIM, fontSize: "0.88rem", fontFamily: "'Aptos', sans-serif" }}>{o.stream}</div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 600, color: RUST, fontFamily: "'Aptos', sans-serif" }}>{o.revenue}</div>
                  </div>
                  <Badge text={o.status} variant={o.status === "Scaling" ? "core" : o.status === "Launching" ? "teal" : o.status === "In Execution" ? "sage" : "ops"} />
                  <div style={{ flex: 1, fontSize: "0.8rem", color: GRAY_DARK, fontFamily: "'Aptos', sans-serif" }}>{o.action}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "comp" && person.comp && (
          <div>
            <SectionLabel>Compensation Structure</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
              {Object.entries(person.comp).map(([key, val]) => (
                <div key={key} style={{ padding: 14, background: "#F4F6FA", borderRadius: 8 }}>
                  <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.1em", color: GRAY_DARK, fontWeight: 600, fontFamily: "'Aptos', sans-serif" }}>{key.replace(/([A-Z])/g, " $1").trim()}</div>
                  <div style={{ fontWeight: 700, color: DENIM, fontSize: "0.95rem", marginTop: 4, fontFamily: "'Aptos', sans-serif" }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "milestones" && (
          <div>
            <SectionLabel>Key Milestones</SectionLabel>
            <MilestoneTimeline milestones={person.milestones} />
          </div>
        )}
      </div>
    </div>
  );
};

export default function JTBDPortal() {
  const [selected, setSelected] = useState("tom");
  const person = PEOPLE.find((p) => p.id === selected);

  return (
    <div style={{ minHeight: "100vh", background: STEEL_LIGHT, fontFamily: "'Aptos', 'DM Sans', Calibri, 'Segoe UI', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ background: DENIM, padding: "28px 32px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", color: RUST, fontFamily: "'Aptos', sans-serif" }}>Six Peak Capital</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "white", marginTop: 4 }}>Revenue Team — Jobs to Be Done</div>
              <div style={{ fontSize: "0.88rem", color: STEEL, marginTop: 4, fontFamily: "'Aptos', sans-serif" }}>Scenario I + Uplifters — 30 BD Deals + 60 SFR Properties</div>
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: RUST }}>$33.7M</div>
                <div style={{ fontSize: "0.65rem", color: STEEL, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Aptos', sans-serif" }}>Cumulative NI</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: SUCCESS }}>$50.6M</div>
                <div style={{ fontSize: "0.65rem", color: STEEL, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Aptos', sans-serif" }}>Swing vs Base</div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px 18px", textAlign: "center" }}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "white" }}>5</div>
                <div style={{ fontSize: "0.65rem", color: STEEL, textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Aptos', sans-serif" }}>Revenue Drivers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 24, alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ background: "white", borderRadius: 12, border: "1px solid rgba(11,24,51,0.08)", padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <SectionLabel>Consolidated NI: Base vs Scenario I+U</SectionLabel>
              <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: STEEL }} /><span style={{ fontSize: "0.68rem", color: GRAY_DARK }}>Base Case</span></div>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}><div style={{ width: 10, height: 10, borderRadius: 2, background: RUST }} /><span style={{ fontSize: "0.68rem", color: GRAY_DARK }}>Scenario I+U</span></div>
              </div>
              <ScenarioBar />
            </div>

            {PEOPLE.map((p) => (
              <PersonCard key={p.id} person={p} onClick={() => setSelected(p.id)} isSelected={selected === p.id} />
            ))}
          </div>

          <div>
            {person && <PersonDetail person={person} />}
          </div>
        </div>
      </div>
    </div>
  );
}
