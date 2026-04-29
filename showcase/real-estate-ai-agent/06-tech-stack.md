# Tech Stack

## Implementation

| Component | Tool | Why |
|---|---|---|
| Primary Channel | LINE Official Account | Dominant in Thai market. Every agency already has one |
| Secondary Channel | Web chat widget (Crisp / custom) | Captures Google/Facebook traffic that doesn't use LINE |
| Agent Gateway | n8n (self-hosted) or Make.com | Handles routing logic, webhooks, fallback rules. No vendor lock-in |
| AI Brain | Claude API (claude-sonnet-4) | Best at Thai/EN code-switch, not hallucinating listings |
| Property Data | Google Sheets + webhook | Agency already uses this. Zero migration friction on Day 1 |
| Calendar | Google Calendar API | Auto-block slots, prevent double-booking, send reminders |
| Agent Notify | LINE Notify + Telegram bot | Dual channel: LINE for Thai agents, Telegram as backup |
| Lead Log | Google Sheets or Airtable | Visible to agency without any new software to learn |
| Follow-up Engine | n8n scheduled triggers | T+24hr, T+72hr, weekly digest. Fully automated |
| Analytics | Looker Studio (free) | Weekly dashboard: leads by score, response rate, booking conversion |

## Setup Sequence

| Phase | Task |
|---|---|
| Day 1–2 | LINE OA connect + base agent config |
| Day 2–3 | Property sheet integration + matching logic |
| Day 3–4 | Calendar + notification pipeline |
| Day 4–5 | Scoring logic + lead log |
| Day 5–7 | QA, test conversations, handover |
