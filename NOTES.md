# Teaching Notes

## Learner preferences
- **Minimal math.** Lead with intuition, water analogies, and rules of thumb. Keep arithmetic light; never derive with algebra/calculus. (Stated in mission.)
- Has "dabbled" — blinked an LED, followed kit tutorials, but lacks the *why*. Don't assume conceptual understanding from prior exposure; do leverage familiarity with the physical parts.
- Comfortable with computers and code (works in software). Analogies to programming/computing are likely to land.
- Wants short sessions, one concrete win per lesson.

## Mission anchor
Building home-automation gadgets (Arduino/ESP32, WiFi, controlling household devices, sensors, relays).
Every lesson should connect back to "something I'd build for the home."

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
- Lessons 1–22 published — the FULL mission arc is now covered (SENSE→DECIDE→ACT→REPORT):
  foundations (1–7), Components in Depth (8–12), The Microcontroller (13–15),
  Motion & the Physical World (16–18), Connectivity (19–22).
- References: glossary, schematic-symbols, component-field-guide, signals-and-buses, connectivity, rules-of-thumb.
- Lessons are self-contained and work offline (local assets) — learner can open files directly.
- Site is live at https://ee.bobthegeek.com (GitHub Pages, repo BobTheGeek/electrical-engineering).
- **Next session — shift from coverage to application.** The foundational curriculum is complete; the
  highest-value next step is a guided, hands-on "build your first real gadget end-to-end" project
  (e.g. temp reporter or phone-controlled relay into Home Assistant). Also: verify retention via
  retrieval (records 0002–0005), and consider a mission check-in on whether to build vs go deeper.
