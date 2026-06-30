# Two tracks added: The Microcontroller (13–15) and Motion & the Physical World (16–18)

At the learner's request to keep expanding component/foundation coverage — specifically microcontrollers
and physical components (motors, servos, etc.) — added six lessons:

13. Anatomy of a microcontroller (Arduino vs ESP32) · 14. Digital/analog/PWM signals · 15. How modules
talk (I²C/SPI/UART) · 16. DC motors & drivers (H-bridge) · 17. Servos & steppers · 18. Sensors (input
overview).

Also: new "Signals & Buses" reference; extended Component Field Guide with motor/driver/servo/stepper/
sensor cards; expanded glossary (GPIO, ADC, PWM, duty cycle, buses, motors, servo, stepper, sensor).

Deliberate synthesis: Lesson 18 frames the whole course as SENSE → DECIDE → ACT → REPORT, tying together
sensors (input), microcontroller (logic), and relays/motors/servos (output), plus Wi-Fi.

Implications:
- **Delivered, not demonstrated** (same caveat as records 0002, 0003). Probe before advancing.
- Course now spans the full hardware stack: fundamentals (1–7), components (8–12), microcontroller
  (13–15), physical I/O (16–18). The learner can reason about every box in SENSE→DECIDE→ACT.
- The one major mission piece still **untaught is connectivity** (ESP32 Wi-Fi / MQTT / Home Assistant) —
  the "REPORT" arrow. Still a resources gap (see RESOURCES.md). Strong candidate for the next track, OR
  a hands-on "build your first real gadget end-to-end" project lesson now that all the parts are covered.
- See [[MISSION.md]].
