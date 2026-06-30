# Study pack built in advance: Lessons 2–7 (foundations → relay payoff)

Ahead of a trip, the learner asked for a batch of lessons to study offline. Built a six-lesson arc
that completes the core hardware foundation for the home-automation mission:

2. Schematics & breadboards · 3. Series & parallel · 4. Power & powering safely (3.3V/5V, pin limits,
common ground) · 5. Buttons & inputs (pull resistors) · 6. Driving bigger loads (transistor switch +
flyback diode) · 7. Relays & switching mains **safely** (the payoff).

Also added two reference sheets (schematic-symbol cheat-sheet, rules-of-thumb) and expanded the glossary.

Implications:
- These were **delivered, not yet demonstrated.** Coverage ≠ learning. On return, probe with retrieval
  (don't assume mastery) before advancing. Likely sticking points to check: voltage *across* vs current
  *through*, 3.3V-vs-5V damage, why a pin can't drive a motor, flyback diode purpose, NO/NC.
- The hardware-control foundation is now complete. The **next frontier is connectivity** — WiFi / MQTT /
  Home Assistant on the ESP32 — which is the other half of the mission and currently a resources gap.
  See [[MISSION.md]] and the Gaps section of RESOURCES.md.
- Mains safety (Lesson 7) was taught with heavy safety framing. Before the learner does any real mains
  build, push them to walk the plan past the teacher (and consider a certified smart plug).
