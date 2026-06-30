# Components-in-depth track added: Lessons 8–12

At the learner's request, added a five-lesson deep-dive on individual components, plus a printable
Component Field Guide reference:

8. Resistors (color codes, power rating, **voltage divider**) · 9. Capacitors (types, polarity,
**decoupling**) · 10. Potentiometers (3-terminal divider → **analogRead**, first analog input) ·
11. Diodes (one-way valve; flyback + reverse-polarity protection) · 12. ICs & reading a datasheet
(pin 1, power+GND+0.1µF, "copy the typical app circuit").

Interleaving used on purpose: voltage divider (L8) → reused in pot/sensor reading (L10); decoupling
cap (L9) → reused in IC wiring (L12); flyback diode (L6) → revisited in L11.

Implications:
- **Delivered, not yet demonstrated.** As with the 2–7 pack, probe retention before advancing. Good
  retrieval checks: 104 = 0.1 µF, electrolytic polarity, voltage-divider "for signals not power,"
  ESP32 analogRead = 0–4095, diode band = cathode, find-pin-1 + decoupling habit.
- Lesson 10 is the first real **analog input** and the natural bridge to a sensor-reading / code lesson.
- The hardware foundation (1–7) + component fluency (8–12) is now broad. Remaining big gap toward the
  mission is still **connectivity** (ESP32 WiFi / MQTT / Home Assistant) — see RESOURCES.md Gaps and
  [[MISSION.md]].
