# Teaching Notes

## Learner preferences
- **Minimal math.** Lead with intuition, water analogies, and rules of thumb. Keep arithmetic light; never derive with algebra/calculus. (Stated in mission.)
- Has "dabbled" — blinked an LED, followed kit tutorials, but lacks the *why*. Don't assume conceptual understanding from prior exposure; do leverage familiarity with the physical parts.
- Comfortable with computers and code (works in software). Analogies to programming/computing are likely to land.
- Wants short sessions, one concrete win per lesson.

## Mission anchor (TWO domains, one course — confirmed by learner)
1. Home-automation gadgets (Arduino/ESP32, WiFi, household devices, sensors, relays).
2. Guitar effect pedals (breadboarded analog audio: boost/overdrive/distortion/tone/delay; guitar→breadboard→amp).
Both share the electronics foundation. Tie lessons back to whichever domain fits; see MISSION.md.

## Teaching approach
- Lessons: short, beautiful (Tufte-ish), one tangible win, retrieval-practice quiz at the end.
- Reuse `assets/style.css` and `assets/quiz.js` for every lesson.
- Maintain `reference/glossary.html` as the single source of truth for terminology.
- Space and interleave: revisit V/I/R in later lessons in new contexts.

## Safety flag
The mission involves mains voltage (relays switching household power). When we get there, safety
must be front-and-center. Keep early lessons on safe low-voltage (3.3V/5V) territory.
→ Lesson 7 now covers mains safety explicitly. Keep reinforcing: walk plans past the teacher before
  any real mains build; a certified smart plug is a legitimate, encouraged fallback.

## Status (as of last session)
- Lessons 1–33 published:
  Home automation (1–22): foundations (1–7), Components (8–12), Microcontroller (13–15),
  Motion/Physical World (16–18), Connectivity (19–22).
  Guitar effects (23–29): audio mindset, bias/coupling, gain, clipping, tone, delay, capstone blueprint.
  Bench Skills & first build (30–33): multimeter, build-along overdrive, debugging, noise/grounding/power.
- References: glossary, schematic-symbols, component-field-guide, signals-and-buses, connectivity,
  guitar-effects, bench-skills, rules-of-thumb.
- LIVE COACHING: Lesson 31 (build-along) is meant to be done WITH the learner — they report measured
  voltages, I confirm/troubleshoot. Asked them about their setup to start; follow up on their answer.
- Lessons are self-contained and work offline (local assets) — learner can open files directly.
- Site is live at https://ee.bobthegeek.com (GitHub Pages, repo BobTheGeek/electrical-engineering).
  NOTE: Pages build queue has hiccuped before — if a push doesn't go live, force a build via
  `gh api -X POST repos/BobTheGeek/electrical-engineering/pages/builds`.
- **Next session — shift from coverage to application** in EITHER domain. Both arcs are now complete enough
  to build a real project: a home-automation gadget (sensor→ESP32→Home Assistant) or a breadboard pedal
  (Lesson 29 overdrive). Best done *with* the learner. Also verify retention (records 0002–0006) and ask
  which domain they want to pursue next.
