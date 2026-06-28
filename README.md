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

Results are cached in `localStorage` (per repo) for 5 minutes; after pushing a new project, hit **↻ refresh** in the panel to force a live re-fetch (raw GitHub URLs are cache-busted to avoid stale CDN copies).

### Map your own practice repo (no auth)

The artifacts panel can point at **any public GitHub repo** — no sign-in, no fork required. Either:

- Add `?repo=owner/name` (optionally `&branch=…`) to the URL, e.g. `…/ai-pivot-tracker/?repo=you/your-practice` — this is shareable, or
- Type `owner/repo` into the box at the bottom of the Artifacts panel and hit **Map**.

The choice persists in `localStorage` and the panel re-fetches that repo's folders (read-only, anonymous GitHub API). Defaults to `m67uzair/ai-pivot-practice`.

## Public showcase

Anonymous visitors land on a **read-only showcase** — overall stats, a GitHub-style contribution graph, and weekly cards (with auto-derived skills) — and can hit **Start your own** to switch to the interactive tracker (their own `localStorage`). Signed-in users go straight to their interactive tracker and can preview their own showcase via the **👁 Showcase** button.

**Anyone can publish their own showcase** (not just the site owner). Set a handle in the **☁ Sync** modal; your progress is then published — sanitized — under that handle, shareable at `?user=<handle>`. The default landing (no `?user=`) shows the site owner's showcase.

Served **live** from a public-readable Supabase `showcase` table: on every cloud sync, the signed-in user publishes a **sanitized** snapshot (done tasks + timing/dates + start date only — **never notes**) under their own slug. RLS allows anyone to read but only the authenticated owner to write their row. See [Supabase setup](#supabase-setup-for-reference).

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

And the **public showcase** table (anyone can read; only the authenticated owner can write their slug):

```sql
create table if not exists public.showcase (
  slug       text primary key,
  user_id    uuid not null references auth.users(id),
  data       jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.showcase enable row level security;
create policy "showcase public read" on public.showcase for select using (true);
create policy "showcase owner insert" on public.showcase for insert to authenticated with check (auth.uid() = user_id);
create policy "showcase owner update" on public.showcase for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

After creating it, sign in as the owner once and make any edit — `cloud.push()` publishes the sanitized snapshot to the `m67uzair` slug, and the public showcase goes live.

The Supabase project URL and publishable key live in `app.js`. The publishable key is safe to ship in client code — row-level security is what protects the data.
