# Electronics for Building Things

A short, hands-on course on understanding electronic circuits well enough to build your own
home-automation gadgets (Arduino / ESP32, breadboards, sensors, relays) — taught with intuition,
the water-pipe analogy, and rules of thumb instead of heavy math.

### 👉 [Read the course →](https://bobthegeek.github.io/electrical-engineering/)

Each lesson is a short, self-contained page with one concrete win and a quick self-check quiz,
grounded in trusted sources (SparkFun Learn, Adafruit) and tied to the goal of building real things.

## Contents

| | |
|---|---|
| **Landing page** | [bobthegeek.github.io/electrical-engineering](https://bobthegeek.github.io/electrical-engineering/) |
| **Lesson 1** | [What a Circuit Really Is](https://bobthegeek.github.io/electrical-engineering/lessons/0001-what-is-a-circuit.html) — voltage, current, resistance, and why an LED needs a resistor |
| **Glossary** | [Shared course vocabulary](https://bobthegeek.github.io/electrical-engineering/reference/glossary.html) |

## How this repo is organized

- `index.html` — the course landing page
- `lessons/` — the lessons, numbered in order (`0001-…`, `0002-…`)
- `reference/` — quick-reference docs (glossary, cheat sheets) revisited often
- `assets/` — shared stylesheet and quiz widget used by every lesson
- `MISSION.md` — why this course exists; grounds every lesson
- `RESOURCES.md` — curated, trusted sources and communities
- `learning-records/` — notes on what's been learned, to pace future lessons
- `NOTES.md` — teaching notes and learner preferences

## Hosting

The site is plain static HTML/CSS/JS served by [GitHub Pages](https://pages.github.com/) — no build
step. Pushing to `main` updates the live site automatically.
