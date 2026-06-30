# Connectivity track added: Lessons 19–22 — the mission's "REPORT" arrow is now taught

Added the connectivity track that completes the home-automation mission end to end:

19. Getting on Wi-Fi (station vs AP, IP address, 2.4 GHz / secrets / reconnect gotchas) ·
20. Talking over the network — HTTP (request/response, ESP32 web server, URLs as commands, its limits) ·
21. MQTT (publish/subscribe, broker, topics, why it beats HTTP for a whole home) ·
22. Home Assistant (ESPHome vs MQTT paths, entities, automations — the finish line).

Also: new "Connectivity cheat-sheet" reference; expanded glossary (station/AP, IP, HTTP, MQTT,
broker/topic, pub/sub, Home Assistant, ESPHome, MQTT Discovery); rules-of-thumb + resources updated;
connectivity resources gap marked resolved.

Significance:
- **The full mission arc is now covered.** The course spans SENSE→DECIDE→ACT→REPORT across 22 lessons:
  fundamentals (1–7), components (8–12), microcontroller (13–15), physical I/O (16–18), connectivity
  (19–22). Lesson 22 explicitly frames the course as complete and points to *building a real gadget*.
- **Delivered, not demonstrated** (same caveat as records 0002–0004). Nothing yet shows retention.

Strong implication for next session — the teaching center of gravity should shift from *more lessons*
to **application**: a guided, hands-on "build your first real gadget end-to-end" project (e.g. a
temperature reporter or phone-controlled relay into Home Assistant). This is where storage strength and
real wisdom get built. Consider also: a mission check-in (does the learner now want to go deeper on a
sub-area, or build?), and a possible MISSION.md note that the foundational curriculum is complete.
See [[MISSION.md]].
