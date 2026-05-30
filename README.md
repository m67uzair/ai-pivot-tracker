# ai-pivot-tracker

**Live:** https://m67uzair.github.io/ai-pivot-tracker

An interactive, single-file progress tracker for my career pivot: **Dart/Flutter → Remote AI Engineer** — ship 3 deployed AI projects in 25 weeks (Karachi → remote).

It's one self-contained `index.html`: no build step, no dependencies, no server. Open it in a browser and your progress saves automatically.

## Features

- **25-week plan** broken into phases → weeks → tasks, each with an hour estimate.
- **Parallel tracks** (interview prep, certification) layered across the timeline.
- **Timeline grid** — a heatmap of all 25 weeks; tap any cell to jump to its phase.
- **Live stats** — tasks done, total, days in, hours logged, overall %.
- **Filters** (all / open only / done only) and expand/collapse-all.
- **Per-task notes** you can jot inline.
- **Artifacts sidebar** — a collapsible left panel listing the practice projects I've shipped, each linking to its repo and its mapped plan task with a live done-state. See [ai-pivot-practice](https://github.com/m67uzair/ai-pivot-practice).
- **Export / Import / Reset** your progress as JSON.

## Usage

Open `index.html` in any modern browser — that's it.

```bash
open index.html
```

## How progress is stored

State persists to the browser's `localStorage` under the key `pivot-tracker-state-v1`. It's local to the browser you open the file in. Use **Export** to back it up or move it to another machine, and **Import** to restore it.

## Tech

Plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tooling.
