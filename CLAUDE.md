# CLAUDE.md — AI Engineer Pivot Tracker

Maintenance context for anyone (Claude or human) working on this repo. Read it before editing.

## 0. The rules that matter most

- **Never rename, renumber, or delete a task `id`.** Checkmark progress is stored in
  `state.tasks` keyed by task ID (e.g. `state.tasks['p2-w8-t1'] = true`), persisted to
  `localStorage` under `STORAGE_KEY = 'pivot-tracker-state-v1'` and mirrored to a Supabase
  `tracker_state` table. Renaming an ID silently orphans that task's completion state.
- After ANY edit: confirm `STORAGE_KEY` is still exactly `'pivot-tracker-state-v1'` and the
  file parses as valid JS (`node --check app.js`).
- **Never `git commit` or `git push` unless explicitly told.** Uzair reviews and pushes himself.
- **Don't add an external link without live-verifying it returns 200 first** (follow redirects).
  Deep paths (doc slugs, workflow numbers) rot fastest — check those hardest. If a link is dead,
  STOP and report; don't improvise a replacement. Note: some hosts (e.g. `sebastianraschka.com`)
  reject curl's default `Accept` header with 406, and rate-limit with 429 — re-check with browser
  headers before calling a link dead.

## 1. File locations

- **The app is two files** at repo root:
  - `app.js` — **all data and logic**: `PLAN`, `TRACKS`, `TIMELINE`, state/storage, Supabase
    cloud-sync, dynamic artifacts, all rendering. **Edit task/plan content here.**
  - `index.html` — markup + CSS only.
  - (The desktop-app handoff said everything lives in `index.html`; that is wrong — the data is
    in `app.js`.)
- **Deployed:** `m67uzair.github.io/ai-pivot-tracker` (GitHub Pages; updates only after a push).
  After pushing, hard-refresh (Cmd+Shift+R) — GitHub/CDN caches `app.js` aggressively.
- **Practice repo:** `github.com/m67uzair/ai-pivot-practice`, local at
  `~/Documents/personal-projects/ai-pivot-practice`. See "Artifacts convention" in `README.md`.

## 2. Who this is for

Uzair — Flutter + Django dev (~3 yrs, Karachi, at Avialdo/LinkedUnion) pivoting to AI
engineering. Currently ~Phase 1, Week 2.

- **FREE LLM keys only.** Gemini (incl. 2.5 Flash implicit caching), Groq (`gpt-oss-120b` —
  real constrained-decoding strict mode), OpenRouter `:free` models. Any task that silently
  assumes a paid provider (OpenAI Responses API, paid Anthropic caching, OpenAI Realtime) is a
  smell — prefer the free path and say so.
- **Direct, correction-oriented, concise.** He pushes back on stale info, unverified claims, and
  fabricated provenance. Don't pad, don't guess; if you don't know, say so and verify. Verify
  your own searches before trusting a null result (a single-vs-double-quote grep once burned a turn).

## 3. Data model

- `PLAN[]` — phases `p0, p1, p2, buf1, p3, p4, buf2, p5`. Each: `{ id, number, title, weeks,
  hours, budget, summary, mvp, weekBlocks[], project{deliverables[]}, resources[] }`.
- `weekBlocks[].tasks[]` — `{ id, text (may contain HTML/`<a>`), hours }`. Rendered via `innerHTML`,
  so preserve HTML escaping (single-quoted JS strings → escape apostrophes as `\'`).
- `TRACKS[]` — parallel tracks (networking, market intel, applications, interview prep, cert,
  decision triggers). Track tasks have no `hours`.
- **Markers (text conventions, not fields):**
  - `★` as the FIRST char of `task.text` = stretch/optional (`isStretch = text.startsWith('★')`;
    render strips it, adds `stretch` class).
  - `🔥` = a from-scratch day (~6h). Exactly three: Tokenizer `p1-w2-t6`, Self-Attention
    `p2-w5-t6`, Raw Agent Loop `p3-w11-t2`. (Optional micrograd primer `p0-w0-t9`, ★.)
  - `🔒` decorative on `p2-w9-t7`.
- **Resource `tags`** (`'free' 'paid' 'core' 'stretch' 'new'`) render as chips. The `'new'`
  chip is currently suppressed in `renderResource` (`.filter(t => t !== 'new')`) — metadata kept,
  chip hidden. `'core'` etc. still show. These are resource classifications, not hidden tasks.
- **Task IDs now match their displayed week.** A prior pass renumbered all P3/P4/P5 IDs (they used
  to be off-by-one) so `weekBlocks[].week` and the `-wN-` in the ID agree (verified: 0 mismatches).
  Uzair confirmed keeping this. Don't re-introduce an offset.
- **Display-only fields:** `phase.hours` is now **unused** — the header badge is computed live by
  `phaseHours(phase)` (sums task hours). `phase.mvp` is text; its week numbers must cite the
  DISPLAYED week (P3 "W14+W15", P4 "W16+W18", P5 "W21+W24").

## 4. Dynamic behaviors (not hardcoded)

- **Phase-hours badge** — computed from task hours via `phaseHours()`, not `phase.hours`.
- **Pace indicator** (hero) — past weeks fully expected, current week pro-rated by day,
  future-week completions count as ahead. Scoped to weekly tasks only (not deliverables/tracks),
  which is why its "done" can differ from the hero "tasks done" stat.
- **Editable target date** (hero) — re-anchors the 25-week schedule via `state.startedAt`.
- **Artifacts panel** — fetches `ai-pivot-practice` folders live from GitHub (trees API + raw
  READMEs), parses a hidden `<!-- artifact -->` block. 5-min cache + ↻ refresh; raw URLs are
  cache-busted. Convention documented in `README.md`.

## 5. Curriculum spine (don't churn)

P0 Python bootcamp → P1 LLM API foundations → P2 RAG (Week 8 evals is the keystone; CI
faithfulness gate `p2-w9-t2`) → B1 review/apply → P3 agents + LangGraph + MCP → P4 production
hardening → B2 cert + mocks → P5 Flutter + AI micro-SaaS. Five flagship projects, three 🔥 days.

Plan cross-checked against `alexeygrigorev/ai-engineering-field-guide` (~895 AI-eng JDs + 100+
take-home repos). Weightings to keep if extending: RAG is the #1 in-demand pattern; "didn't start
with evals" is the #1 take-home red flag; open-source/local models are frequently MANDATORY in
take-homes; fine-tuning is in ~25% of JDs but almost never take-home-tested (keyword insurance,
not core). `resources[]` is a reference appendix — anything a task NEEDS must live in the task text.

## 6. Edit protocol

1. Read the target string in `app.js` before editing; match exact escaping/quotes. If you can't
   find it exactly, the edit may already be applied — skip and note it, don't force it.
2. Preserve HTML escaping inside `text`.
3. No new external link without a verified 200.
4. Don't touch task IDs or `STORAGE_KEY`. Don't commit/push.
5. After editing: confirm `STORAGE_KEY`, confirm valid JS, report which edits applied and which
   strings weren't found.

## 7. Tooling notes

- **Apify MCP** (`apify/rag-web-browser`) was used for research in the desktop app but is **not
  connected in Claude Code** — `ToolSearch` finds no apify tools here. Use native `curl`/fetch for
  link checks. If Apify is needed for future research, its MCP server must be added to this session.
- Local preview: `python3 -m http.server` in the repo, open the printed URL (the browser extension
  mangles `file://`, so serve over HTTP).
