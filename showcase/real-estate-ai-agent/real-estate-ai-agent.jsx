import { useState } from "react";

const sections = [
  "overview",
  "why",
  "flow",
  "conversations",
  "scoring",
  "stack",
  "pricing",
  "pitch",
];

const sectionLabels = {
  overview: "Overview",
  why: "Why RE",
  flow: "The Flow",
  conversations: "Conversations",
  scoring: "Lead Scoring",
  stack: "Tech Stack",
  pricing: "Pricing Tiers",
  pitch: "Sales Pitch",
};

export default function App() {
  const [active, setActive] = useState("overview");

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0d0d0d",
      minHeight: "100vh",
      color: "#e8e0d0",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2a2a2a",
        padding: "28px 40px 20px",
        display: "flex",
        alignItems: "flex-end",
        gap: "16px",
      }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "4px", color: "#c9a84c", textTransform: "uppercase", marginBottom: "6px" }}>
            Service Playbook — Revised
          </div>
          <h1 style={{ margin: 0, fontSize: "26px", fontWeight: "normal", color: "#f5f0e8", lineHeight: 1 }}>
            Real Estate AI Agent Setup
          </h1>
        </div>
        <div style={{ marginLeft: "auto", fontSize: "11px", color: "#555", letterSpacing: "1px" }}>
          Phuket · Samui · Chiang Mai
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar Nav */}
        <div style={{
          width: "180px",
          flexShrink: 0,
          borderRight: "1px solid #1e1e1e",
          padding: "24px 0",
        }}>
          {sections.map(s => (
            <button key={s} onClick={() => setActive(s)} style={{
              display: "block",
              width: "100%",
              textAlign: "left",
              padding: "10px 24px",
              background: active === s ? "#1a1a1a" : "transparent",
              border: "none",
              borderLeft: active === s ? "2px solid #c9a84c" : "2px solid transparent",
              color: active === s ? "#f5f0e8" : "#666",
              fontSize: "12px",
              letterSpacing: "0.5px",
              cursor: "pointer",
              transition: "all 0.15s",
            }}>
              {sectionLabels[s]}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "40px 48px", maxWidth: "820px" }}>
          {active === "overview" && <Overview />}
          {active === "why" && <WhyRE />}
          {active === "flow" && <TheFlow />}
          {active === "conversations" && <Conversations />}
          {active === "scoring" && <Scoring />}
          {active === "stack" && <Stack />}
          {active === "pricing" && <Pricing />}
          {active === "pitch" && <Pitch />}
        </div>
      </div>
    </div>
  );
}

/* ─── Shared Components ─── */

function SectionTitle({ children, sub }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ fontSize: "10px", letterSpacing: "3px", color: "#c9a84c", textTransform: "uppercase", marginBottom: "8px" }}>
        {sub}
      </div>
      <h2 style={{ margin: 0, fontSize: "22px", fontWeight: "normal", color: "#f5f0e8" }}>{children}</h2>
    </div>
  );
}

function Card({ children, accent }) {
  return (
    <div style={{
      background: "#141414",
      border: `1px solid ${accent ? "#c9a84c33" : "#1e1e1e"}`,
      borderRadius: "6px",
      padding: "20px 24px",
      marginBottom: "16px",
    }}>
      {children}
    </div>
  );
}

function Label({ children, color }) {
  return (
    <span style={{
      display: "inline-block",
      fontSize: "10px",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: color || "#c9a84c",
      marginBottom: "6px",
    }}>
      {children}
    </span>
  );
}

function ChatBubble({ who, text, highlight }) {
  const isBot = who === "bot";
  return (
    <div style={{
      display: "flex",
      flexDirection: isBot ? "row" : "row-reverse",
      marginBottom: "10px",
      gap: "10px",
      alignItems: "flex-start",
    }}>
      <div style={{
        width: "28px", height: "28px", borderRadius: "50%",
        background: isBot ? "#c9a84c22" : "#2a2a2a",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "11px", color: isBot ? "#c9a84c" : "#888",
        flexShrink: 0,
      }}>
        {isBot ? "🤖" : "👤"}
      </div>
      <div style={{
        background: isBot ? "#1a1a1a" : "#1d1d1d",
        border: isBot
          ? highlight ? "1px solid #c9a84c55" : "1px solid #2a2a2a"
          : "1px solid #252525",
        borderRadius: isBot ? "4px 12px 12px 12px" : "12px 4px 12px 12px",
        padding: "10px 14px",
        maxWidth: "75%",
        fontSize: "13px",
        lineHeight: "1.6",
        color: highlight ? "#f5d98a" : "#ccc",
        whiteSpace: "pre-line",
      }}>
        {text}
      </div>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", marginBottom: "20px" }}>
      <thead>
        <tr>
          {headers.map(h => (
            <th key={h} style={{
              textAlign: "left", padding: "8px 12px",
              borderBottom: "1px solid #2a2a2a",
              color: "#c9a84c", fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase",
              fontWeight: "normal",
            }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid #1a1a1a" }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "10px 12px", color: j === 0 ? "#e8e0d0" : "#888", verticalAlign: "top" }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ─── Sections ─── */

function Overview() {
  return (
    <div>
      <SectionTitle sub="What This Is">The Setup</SectionTitle>
      <p style={{ color: "#888", lineHeight: "1.8", fontSize: "14px", marginBottom: "28px" }}>
        This is your core service offer: a done-for-you AI agent deployment for real estate agencies. 
        You configure it, you hand it over, they pay monthly. The playbook below covers everything 
        from the sales pitch to the exact tech stack — refined specifically for the Thai property market.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginBottom: "28px" }}>
        {[
          { n: "72hrs", label: "Avg setup time" },
          { n: "8K–25K", label: "THB/month retainer" },
          { n: "~60%", label: "Margin after tools" },
        ].map(item => (
          <Card key={item.n} accent>
            <div style={{ fontSize: "26px", color: "#c9a84c", fontWeight: "normal" }}>{item.n}</div>
            <div style={{ fontSize: "11px", color: "#666", marginTop: "4px", letterSpacing: "1px" }}>{item.label}</div>
          </Card>
        ))}
      </div>

      <Card>
        <Label>What you deliver</Label>
        <ul style={{ margin: "8px 0 0", paddingLeft: "18px", color: "#888", fontSize: "13px", lineHeight: "2" }}>
          <li>Conversational agent on LINE OA + web widget (dual channel)</li>
          <li>Live property matching from their database (Google Sheet / Airtable)</li>
          <li>Automated lead qualification with scoring before human sees it</li>
          <li>Calendar booking + instant agent notification</li>
          <li>Weekly lead summary report (automated)</li>
          <li>Thai + English language support out of the box</li>
        </ul>
      </Card>

      <Card>
        <Label color="#666">What you don't do</Label>
        <ul style={{ margin: "8px 0 0", paddingLeft: "18px", color: "#555", fontSize: "13px", lineHeight: "2" }}>
          <li>You don't maintain their property database (they do)</li>
          <li>You don't handle post-sale or contract management</li>
          <li>You don't guarantee lead volume — you guarantee lead quality</li>
        </ul>
      </Card>
    </div>
  );
}

function WhyRE() {
  return (
    <div>
      <SectionTitle sub="Market Fit">Why Real Estate Works</SectionTitle>

      <Card accent>
        <Label>The core problem you're solving</Label>
        <p style={{ color: "#ccc", fontSize: "14px", lineHeight: "1.8", margin: "8px 0 0" }}>
          A Phuket agency gets 40–80 LINE inquiries a week. Their agent answers the same 6 questions 
          on repeat — budget, location, type, timeline, viewing, price. That's 8–15 hours of 
          copy-paste work before a single real conversation happens. You eliminate that entirely.
        </p>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", margin: "20px 0" }}>
        {[
          { title: "High ticket value", body: "One condo sale = 50K–500K THB commission. Agent ROI on your service is visible within the first deal." },
          { title: "Repetitive early questions", body: "90% of incoming messages are qualification-stage. Perfect for automation — zero nuance required." },
          { title: "After-hours volume", body: "Foreign buyers (EU, AU) message at 11pm–2am Thai time. No one is answering. Agent is." },
          { title: "Multi-language gap", body: "Most agencies have one bilingual agent. Bot handles Thai, English, and basic Russian without extra hire." },
        ].map(c => (
          <Card key={c.title}>
            <Label>{c.title}</Label>
            <p style={{ margin: "6px 0 0", color: "#888", fontSize: "13px", lineHeight: "1.7" }}>{c.body}</p>
          </Card>
        ))}
      </div>

      <Card>
        <Label>Phuket-specific context</Label>
        <p style={{ color: "#888", fontSize: "13px", lineHeight: "1.7", margin: "8px 0 0" }}>
          High season (Nov–Apr) floods small agencies with leads they can't process fast enough. 
          Low season, they're chasing cold leads manually. Your agent runs 24/7 regardless — 
          capturing the peak overflow and re-engaging dormant leads in off-season. 
          Frame it as leveling their capacity without headcount.
        </p>
      </Card>
    </div>
  );
}

function TheFlow() {
  const steps = [
    { n: "01", title: "Inquiry Arrives", detail: "LINE OA message or web widget. Agent responds in <5 seconds, 24/7. First reply: detect language (Thai / EN / RU), acknowledge, open qualification.", color: "#c9a84c" },
    { n: "02", title: "Qualification Loop", detail: "5 structured questions delivered conversationally. Budget → Location → Property type → Bedrooms → Timeline. If user drops off mid-flow, re-engage once after 2 hours.", color: "#8ab4c9" },
    { n: "03", title: "Lead Scoring", detail: "System scores the lead A/B/C based on budget range, timeline urgency, and response completeness. Score determines routing priority.", color: "#c98a8a" },
    { n: "04", title: "Property Matching", detail: "Agent queries live property sheet. Returns max 3 matching units with key specs. Offers photos (link) or viewing booking.", color: "#8ac99a" },
    { n: "05", title: "Booking & Handoff", detail: "Slot selection → calendar block → agent notification via LINE Notify. Human agent gets: name, contact, score, matched property, budget confirmed, timeline.", color: "#c9a84c" },
    { n: "06", title: "Post-Viewing Follow-up", detail: "T+24hrs: automated check-in message. T+72hrs: if no response from human agent, flag in lead log. Keeps pipeline visible.", color: "#8ab4c9" },
  ];

  return (
    <div>
      <SectionTitle sub="System Architecture">The Full Flow</SectionTitle>
      {steps.map((s, i) => (
        <div key={s.n} style={{ display: "flex", gap: "20px", marginBottom: "12px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{
              width: "36px", height: "36px", borderRadius: "50%",
              background: s.color + "22",
              border: `1px solid ${s.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "11px", color: s.color, fontFamily: "monospace", flexShrink: 0,
            }}>{s.n}</div>
            {i < steps.length - 1 && <div style={{ width: "1px", flex: 1, background: "#1e1e1e", margin: "4px 0" }} />}
          </div>
          <div style={{ paddingBottom: "16px", flex: 1 }}>
            <div style={{ color: "#e8e0d0", fontSize: "14px", marginBottom: "4px" }}>{s.title}</div>
            <div style={{ color: "#666", fontSize: "13px", lineHeight: "1.7" }}>{s.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Conversations() {
  const [tab, setTab] = useState("qualify");
  const tabs = [
    { id: "qualify", label: "Qualification" },
    { id: "match", label: "Property Match" },
    { id: "book", label: "Booking" },
    { id: "objection", label: "Objections" },
  ];

  const convos = {
    qualify: [
      { who: "bot", text: "สวัสดีครับ! Welcome to Phuket Property Co. 🌴\n\nAre you looking to buy or rent? (ซื้อหรือเช่า)" },
      { who: "user", text: "Buy" },
      { who: "bot", text: "Great choice — Phuket is a strong market right now.\n\nWhat's your approximate budget? (in THB or USD is fine)" },
      { who: "user", text: "Around 4-5 million baht" },
      { who: "bot", text: "Good range — several options available there.\n\nAny preferred area? We have inventory across:\n• Rawai / Nai Harn (quieter, local feel)\n• Patong / Karon (central, rental yield)\n• Bang Tao / Laguna (luxury, expat community)\n• Chalong / Ao Po (value, marina access)" },
      { who: "user", text: "Rawai area preferably" },
      { who: "bot", text: "Noted. House or condo? And how many bedrooms are you thinking?", highlight: true },
      { who: "user", text: "Condo, 2 beds ideally" },
      { who: "bot", text: "Last question — what's your timeline? Are you looking to move quickly or still in the research stage?\n\n• Ready to buy within 3 months\n• 3–6 months\n• Just exploring for now" },
      { who: "user", text: "3 months or so" },
      { who: "bot", text: "Perfect. I've found 4 units matching your criteria. Can I get your name and a WhatsApp/LINE number so our agent can send you the full details + photos?", highlight: true },
    ],
    match: [
      { who: "user", text: "Do you have a 2 bed condo near Rawai under 4.5M?" },
      { who: "bot", text: "Yes — 3 units match that search right now:\n\n🏠 Baan Talay Rawai\n3.2M THB · 68sqm · Pool view · Ready to transfer\n\n🏠 Rawai Residence B\n3.8M THB · 75sqm · Garden unit · Q3 handover\n\n🏠 The Crest Nai Harn\n4.3M THB · 82sqm · Sea view · Fully furnished\n\nWant photos, floor plans, or to schedule a viewing on any of these?" },
      { who: "user", text: "Photos of the first one and third one please" },
      { who: "bot", text: "Here you go:\n\n📸 Baan Talay Rawai → [link]\n📸 The Crest Nai Harn → [link]\n\nBoth have virtual tours available too. Which one interests you more?", highlight: true },
    ],
    book: [
      { who: "user", text: "I want to see Baan Talay Rawai" },
      { who: "bot", text: "Great pick — it's one of our most popular units this month.\n\nAvailable viewing slots:\n• Thursday 2:00pm\n• Friday 10:00am\n• Friday 3:00pm\n• Saturday 11:00am\n\nWhich works for you?" },
      { who: "user", text: "Friday 10am" },
      { who: "bot", text: "Confirmed ✅\n\nFriday, [date] at 10:00am\nProperty: Baan Talay Rawai, 3.2M THB\nAgent: Khun Lek (+66 81 xxx xxxx)\nAddress: [Google Maps link]\n\nYou'll get a reminder the evening before. Anything to know before the visit?" },
      { who: "user", text: "Is there parking at the condo?" },
      { who: "bot", text: "Yes — 1 covered parking space included per unit, with a second available to rent from the juristic office. I've noted your question for the agent too.", highlight: true },
    ],
    objection: [
      { who: "user", text: "I'm just browsing, not serious yet" },
      { who: "bot", text: "No pressure at all — browsing is a great way to start.\n\nIf it helps, I can send you a weekly digest of new listings in your preferred area so you stay informed without any commitment. Would that be useful?" },
      { who: "user", text: "Are these prices negotiable?" },
      { who: "bot", text: "Most sellers have some flexibility, especially on direct transactions. Our agent can advise on recent comparable sales and what realistic negotiation looks like for each unit.\n\nWant me to arrange a quick call — no obligation?" },
      { who: "user", text: "I need to talk to my wife first" },
      { who: "bot", text: "Of course — makes total sense for a purchase like this.\n\nWant me to send you a PDF summary of the units you liked? Easy to share with her, includes specs, photos, and price. Takes 2 seconds to forward.", highlight: true },
    ],
  };

  return (
    <div>
      <SectionTitle sub="Conversation Design">Live Conversation Flows</SectionTitle>
      <div style={{ display: "flex", gap: "8px", marginBottom: "24px", flexWrap: "wrap" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "6px 16px",
            background: tab === t.id ? "#c9a84c22" : "transparent",
            border: tab === t.id ? "1px solid #c9a84c55" : "1px solid #2a2a2a",
            borderRadius: "20px",
            color: tab === t.id ? "#c9a84c" : "#666",
            fontSize: "12px",
            cursor: "pointer",
            letterSpacing: "0.5px",
          }}>{t.label}</button>
        ))}
      </div>
      <Card>
        {convos[tab].map((m, i) => (
          <ChatBubble key={i} who={m.who} text={m.text} highlight={m.highlight} />
        ))}
      </Card>
      {tab === "objection" && (
        <Card>
          <Label>Design principle</Label>
          <p style={{ margin: "6px 0 0", color: "#666", fontSize: "13px", lineHeight: "1.7" }}>
            Every objection response offers a micro-commitment — something small and useful 
            (digest, PDF, call) that keeps the lead warm without pressure. Never a dead-end reply.
          </p>
        </Card>
      )}
    </div>
  );
}

function Scoring() {
  return (
    <div>
      <SectionTitle sub="Lead Intelligence">Lead Scoring System</SectionTitle>
      <p style={{ color: "#888", fontSize: "13px", lineHeight: "1.8", marginBottom: "24px" }}>
        Agent scores every lead before a human sees them. Agents see Grade + summary. 
        No more "is this a real buyer" guesswork at 8am.
      </p>

      {[
        { grade: "A", color: "#8ac99a", label: "Hot — Priority Response", criteria: ["Budget confirmed ≥ 3M THB", "Timeline: within 3 months", "Specific property / area preference", "Agreed to viewing OR callback", "Responded to all 5 questions"], action: "Notify agent immediately via LINE. Flag in CRM as Priority. Human must respond within 2 hours." },
        { grade: "B", color: "#c9a84c", label: "Warm — Follow Up This Week", criteria: ["Budget stated but vague range", "Timeline 3–6 months", "Has preferences but open to options", "Dropped off after 3+ questions"], action: "Enter into weekly nurture sequence. Agent reviews within 48 hours. Re-engage with new listings when available." },
        { grade: "C", color: "#c98a8a", label: "Cold — Nurture Sequence", criteria: ["Budget not confirmed or very low", "'Just looking' / no timeline", "Incomplete qualification (<3 questions)", "No callback or viewing intent"], action: "Add to monthly newsletter. No agent time spent. Re-qualify if they re-engage organically." },
      ].map(s => (
        <Card key={s.grade} accent={s.grade === "A"}>
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
            <div style={{
              width: "48px", height: "48px", borderRadius: "4px",
              background: s.color + "22", border: `1px solid ${s.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "22px", color: s.color, flexShrink: 0,
            }}>{s.grade}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: s.color, fontSize: "13px", marginBottom: "8px", letterSpacing: "0.5px" }}>{s.label}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                <div>
                  <div style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", marginBottom: "6px" }}>QUALIFIES IF</div>
                  <ul style={{ margin: 0, paddingLeft: "16px", color: "#888", fontSize: "12px", lineHeight: "1.9" }}>
                    {s.criteria.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
                <div>
                  <div style={{ fontSize: "10px", color: "#444", letterSpacing: "2px", marginBottom: "6px" }}>AGENT ACTION</div>
                  <p style={{ margin: 0, color: "#666", fontSize: "12px", lineHeight: "1.7" }}>{s.action}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <Card>
        <Label>What the agent receives (auto-generated)</Label>
        <div style={{ background: "#0d0d0d", borderRadius: "4px", padding: "14px 16px", marginTop: "10px", fontFamily: "monospace", fontSize: "12px", color: "#888", lineHeight: "2" }}>
          <span style={{ color: "#c9a84c" }}>LEAD SUMMARY — Friday 10:14am</span><br />
          Name: David Chen &nbsp;|&nbsp; LINE: @davidcth<br />
          <span style={{ color: "#8ac99a" }}>Grade: A (Hot)</span><br />
          Budget: 3.8–4.5M THB confirmed<br />
          Property: 2-bed condo, Rawai area<br />
          Timeline: Within 3 months<br />
          Interest: Baan Talay Rawai + The Crest Nai Harn<br />
          Viewing: Booked Friday 10am — Baan Talay<br />
          <span style={{ color: "#555" }}>Notes: Asked about parking (1 space included, confirmed)</span>
        </div>
      </Card>
    </div>
  );
}

function Stack() {
  return (
    <div>
      <SectionTitle sub="Implementation">Tech Stack</SectionTitle>
      <Table
        headers={["Component", "Tool", "Why"]}
        rows={[
          ["Primary Channel", "LINE Official Account", "Dominant in Thai market — every agency already has one"],
          ["Secondary Channel", "Web chat widget (Crisp / custom)", "Captures Google/Facebook traffic that doesn't use LINE"],
          ["Agent Gateway", "n8n (self-hosted) or Make.com", "Handles routing logic, webhooks, fallback rules — no vendor lock-in"],
          ["AI Brain", "Claude API (claude-sonnet-4)", "Best at nuanced Thai/EN code-switch, not hallucinating listings"],
          ["Property Data", "Google Sheets + webhook", "Agency already uses this — zero migration friction on Day 1"],
          ["Calendar", "Google Calendar API", "Auto-block slots, prevent double-booking, send reminders"],
          ["Agent Notify", "LINE Notify + Telegram bot", "Dual channel — LINE for Thai agents, Telegram as backup"],
          ["Lead Log", "Google Sheets or Airtable", "Visible to agency without any new software to learn"],
          ["Follow-up Engine", "n8n scheduled triggers", "T+24hr, T+72hr, weekly digest — fully automated"],
          ["Analytics", "Looker Studio (free)", "Weekly dashboard: leads by score, response rate, booking conversion"],
        ]}
      />
      <Card>
        <Label>Setup sequence</Label>
        <div style={{ display: "flex", gap: "0", marginTop: "10px" }}>
          {["Day 1–2: LINE OA connect + base agent config", "Day 2–3: Property sheet integration + matching logic", "Day 3–4: Calendar + notification pipeline", "Day 4–5: Scoring logic + lead log", "Day 5–7: QA, test conversations, handover"].map((step, i) => (
            <div key={i} style={{ flex: 1, padding: "10px 12px", borderRight: i < 4 ? "1px solid #1a1a1a" : "none" }}>
              <div style={{ fontSize: "10px", color: "#c9a84c", marginBottom: "4px" }}>Day {i + 1}{i > 0 ? `–${i + 2}` : "–2"}</div>
              <div style={{ fontSize: "11px", color: "#666", lineHeight: "1.5" }}>{step.split(": ")[1]}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "8,000",
      setup: "15,000 one-time",
      color: "#888",
      ideal: "Small agency, 1–2 agents, under 100 leads/month",
      includes: [
        "LINE OA integration only",
        "Basic 5-question qualifier",
        "Google Sheet property matching (up to 50 listings)",
        "Manual calendar booking link",
        "Lead log to Google Sheet",
        "A/B/C scoring",
        "Email support",
      ],
      not: ["Web widget", "Auto calendar booking", "Agent notify", "Analytics dashboard"],
    },
    {
      name: "Pro",
      price: "15,000",
      setup: "25,000 one-time",
      color: "#c9a84c",
      ideal: "Mid-size agency, 3–5 agents, 100–300 leads/month",
      includes: [
        "LINE OA + web widget (dual channel)",
        "Full qualification + objection handling",
        "Google Sheets or Airtable, up to 200 listings",
        "Google Calendar auto-booking",
        "LINE Notify + Telegram agent alerts",
        "Lead scoring + CRM log",
        "Thai + English language support",
        "Looker Studio weekly dashboard",
        "Post-viewing follow-up automation",
        "Monthly check-in call",
      ],
      not: [],
    },
    {
      name: "Agency+",
      price: "25,000",
      setup: "40,000 one-time",
      color: "#8ab4c9",
      ideal: "Larger agency or group, multi-agent, multi-project",
      includes: [
        "Everything in Pro",
        "Multi-agent routing (by area or tier)",
        "Existing CRM integration (HubSpot, custom)",
        "Russian language support added",
        "Seasonal campaign sequences",
        "Custom branded web widget",
        "Priority support + weekly calls",
        "Quarterly optimization review",
      ],
      not: [],
    },
  ];

  return (
    <div>
      <SectionTitle sub="Packaging">Pricing Tiers</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
        {tiers.map(t => (
          <div key={t.name} style={{
            background: "#141414",
            border: t.name === "Pro" ? "1px solid #c9a84c55" : "1px solid #1e1e1e",
            borderRadius: "6px",
            padding: "20px",
          }}>
            {t.name === "Pro" && (
              <div style={{ fontSize: "9px", color: "#c9a84c", letterSpacing: "3px", marginBottom: "10px" }}>RECOMMENDED</div>
            )}
            <div style={{ fontSize: "18px", color: t.color, marginBottom: "2px" }}>{t.name}</div>
            <div style={{ fontSize: "22px", color: "#f5f0e8", margin: "10px 0 2px" }}>{t.price} <span style={{ fontSize: "12px", color: "#555" }}>THB/mo</span></div>
            <div style={{ fontSize: "11px", color: "#444", marginBottom: "16px" }}>{t.setup} setup</div>
            <div style={{ fontSize: "11px", color: "#555", marginBottom: "14px", fontStyle: "italic" }}>{t.ideal}</div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "14px" }}>
              {t.includes.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", marginBottom: "7px", alignItems: "flex-start" }}>
                  <span style={{ color: t.color, fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                  <span style={{ fontSize: "11px", color: "#888", lineHeight: "1.5" }}>{item}</span>
                </div>
              ))}
              {t.not.map(item => (
                <div key={item} style={{ display: "flex", gap: "8px", marginBottom: "7px", alignItems: "flex-start" }}>
                  <span style={{ color: "#333", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>–</span>
                  <span style={{ fontSize: "11px", color: "#333", lineHeight: "1.5" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Card style={{ marginTop: "16px" }}>
        <Label>Upsell opportunities</Label>
        <p style={{ margin: "6px 0 0", color: "#666", fontSize: "13px", lineHeight: "1.8" }}>
          Rental management module (+5K/mo) · Facebook Ads lead intake (+3K/mo) · 
          WhatsApp Business API integration (+4K/mo) · Custom property matching logic (+one-time 8K) · 
          Training your client's staff to maintain it (+half day workshop 5K)
        </p>
      </Card>
    </div>
  );
}

function Pitch() {
  return (
    <div>
      <SectionTitle sub="Sales Framing">How to Sell This</SectionTitle>

      <Card accent>
        <Label>The one-liner that closes</Label>
        <p style={{ margin: "8px 0 0", color: "#f5f0e8", fontSize: "16px", lineHeight: "1.7", fontStyle: "italic" }}>
          "One qualified lead in Phuket real estate is worth 50,000–500,000 THB in commission. 
          This system costs 15,000 THB a month. You need it to pay for itself once a quarter. 
          The math is not complicated."
        </p>
      </Card>

      <div style={{ marginTop: "20px" }}>
        <Label>Objection handling — client side</Label>
        {[
          { q: '"We already have a LINE OA"', a: "Good — we integrate with it. No migration, no new account. We just make it intelligent." },
          { q: '"Our agents prefer personal contact"', a: "They'll still do the personal contact — just on pre-qualified leads who already know what they want and when they want to view. No more 11pm 'how much condo' messages." },
          { q: '"What if the AI says something wrong?"', a: "It only communicates from your property sheet and your approved scripts. It doesn't speculate. Any question it can't answer, it says 'let me connect you with our team'." },
          { q: '"We don\'t have a property database"', a: "Google Sheet with 5 columns is enough to start. We build the sheet structure for you in the setup. Most agencies can fill it in 2 hours." },
          { q: '"Can we try before we commit?"', a: "Yes — we offer a 2-week paid pilot on the Starter tier. You see the leads coming in, you decide. No annual contract required." },
        ].map(item => (
          <Card key={item.q}>
            <div style={{ color: "#e8e0d0", fontSize: "13px", marginBottom: "6px" }}>{item.q}</div>
            <div style={{ color: "#888", fontSize: "13px", lineHeight: "1.7" }}>{item.a}</div>
          </Card>
        ))}
      </div>

      <Card>
        <Label>Who to target first</Label>
        <p style={{ margin: "6px 0 0", color: "#888", fontSize: "13px", lineHeight: "1.8" }}>
          Mid-size Phuket agencies (5–15 listings, 2–4 agents) with active LINE OA but no automation. 
          They're big enough to have lead volume problems, small enough to not have IT teams. 
          Check their LINE OA — if response time is slow or replies are inconsistent, that's your in. 
          Facebook and Google reviews mentioning "hard to contact" or "slow response" are buying signals.
        </p>
      </Card>
    </div>
  );
}
