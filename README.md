# ai-pivot-tracker

**Live:** https://m67uzair.github.io/ai-pivot-tracker

An interactive progress tracker for my career pivot: **Dart/Flutter → Remote AI Engineer** — ship 3 deployed AI projects in 25 weeks (Karachi → remote).

No build step and no framework — static HTML/CSS/JS hosted on GitHub Pages. Progress saves locally and, when you sign in, syncs to the cloud across devices.

## Features

- **25-week plan** broken into phases → weeks → tasks, each with an hour estimate.
- **Parallel tracks** (interview prep, certification) layered across the timeline.
- **Timeline grid** — a heatmap of all 25 weeks; tap any cell to jump to its phase.
- **Live stats** — tasks done, total, days in, hours logged, overall %.
- **Filters** (all / open only / done only) and expand/collapse-all.
- **Per-task notes** you can jot inline.
- **Artifacts sidebar** — a collapsible left panel that **discovers practice projects live** from [ai-pivot-practice](https://github.com/m67uzair/ai-pivot-practice): every top-level folder with a `README.md` becomes a card linking to its repo and its mapped plan task with a live done-state. No code change needed to add one — see [Artifacts convention](#artifacts-convention).
- **Cloud sync** — sign in with a 6-digit email code to sync progress across devices.
- **Export / Import / Reset** your progress as JSON.

## Usage

Open the [live site](https://m67uzair.github.io/ai-pivot-tracker), or run it locally:

```bash
open index.html
```

## Artifacts convention

The Artifacts panel is populated **dynamically at runtime** — nothing about the practice projects is hardcoded in this repo. On load (and on **↻ refresh**) it:

1. Lists the top-level folders of [ai-pivot-practice](https://github.com/m67uzair/ai-pivot-practice) via the GitHub trees API.
2. Fetches each folder's `README.md` from `raw.githubusercontent.com`.
3. Parses metadata from a hidden HTML-comment block at the top of that README.

So a folder shows up as a card **only if it has a `README.md` in this format**:

```markdown
<!-- artifact
emoji: 🧱
tasks: p1-w2-t2
stack: Python, openai, groq, Pydantic
-->

# Project Title

The first paragraph after the H1 becomes the card description.
```

| Field    | Source                        | Required | Notes |
|----------|-------------------------------|----------|-------|
| `emoji`  | comment block                 | no       | defaults to 📦 |
| `tasks`  | comment block                 | no       | comma-separated plan task IDs (e.g. `p1-w2-t2`); links the card to roadmap checkboxes with a live done-state |
| `stack`  | comment block                 | no       | comma-separated tech tags shown as pills |
| `name`   | first `# H1` heading          | no       | overridable via `name:` in the block |
| `desc`   | first paragraph after the H1  | no       | overridable via `desc:` in the block |

Results are cached in `localStorage` for 5 minutes; after pushing a new project, hit **↻ refresh** in the panel to force a live re-fetch (raw GitHub URLs are cache-busted to avoid stale CDN copies). The source repo is configured at the top of the artifacts section in `app.js` (`ARTIFACTS_OWNER` / `ARTIFACTS_NAME` / `ARTIFACTS_BRANCH`).

## How progress is stored

Progress always saves to the browser's `localStorage` (key `pivot-tracker-state-v1`) — so it works fully offline.

Hit **☁ Sync** and sign in with your email (you get a one-time 6-digit code, no password) to also sync to the cloud. After that, edits push automatically and other devices pull the latest on load and on tab focus. Sync uses last-write-wins by timestamp, which is fine for a single user across devices.

You can still **Export**/**Import** the raw JSON at any time.

## Tech

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tooling.
- [Supabase](https://supabase.com) for auth (email OTP) and a single `tracker_state` table, locked down with row-level security so each account only ever reads/writes its own row.

## Project structure

| File         | Purpose                                  |
|--------------|------------------------------------------|
| `index.html` | Markup and styles.                       |
| `app.js`     | All application logic (plan data, rendering, storage, cloud sync, dynamic artifacts fetch). |

### Supabase setup (for reference)

The table this expects:

```sql
create table if not exists public.tracker_state (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb  not null,
  client_ts  bigint not null default 0,
  updated_at timestamptz not null default now()
);
alter table public.tracker_state enable row level security;
create policy "own row" on public.tracker_state
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

The Supabase project URL and publishable key live in `app.js`. The publishable key is safe to ship in client code — row-level security is what protects the data.
