# Electronics for Building Things — Resources

## Knowledge

- [SparkFun Learn: Voltage, Current, Resistance, and Ohm's Law](https://learn.sparkfun.com/tutorials/voltage-current-resistance-and-ohms-law/all)
  The canonical beginner explainer, built around the water-tank analogy. Use for: the core mental model of V/I/R and how they relate.
- [SparkFun Learn: How to Read a Schematic](https://learn.sparkfun.com/tutorials/how-to-read-a-schematic/all)
  Covers every fundamental schematic symbol and how they connect. Use for: anything to do with reading circuit diagrams.
- [SparkFun Learn: How to Use a Breadboard](https://learn.sparkfun.com/tutorials/how-to-use-a-breadboard/all)
  How the rows/rails are connected internally. Use for: translating a schematic onto a breadboard.
- [SparkFun Learn: Where Do I Start?](https://learn.sparkfun.com/tutorials/where-do-i-start/all)
  A curated learning path. Use for: deciding what foundational topic to tackle next.
- [Adafruit Learning System](https://learn.adafruit.com/)
  Huge library of project-based guides, strong on ESP32/Arduino and home automation. Use for: hands-on build guides once a concept is understood.
- [Starting Electronics: Voltage, Current, and Resistance](https://startingelectronics.org/voltage-current-and-resistance/)
  A second, concise take on the fundamentals. Use for: a different phrasing if the SparkFun version doesn't click.
- [SparkFun Learn: Series and Parallel Circuits](https://learn.sparkfun.com/tutorials/series-and-parallel-circuits/all)
  Use for: Lesson 3. The two connection patterns with worked examples (skip the heavier math).
- [SparkFun Learn: Logic Levels](https://learn.sparkfun.com/tutorials/logic-levels/all)
  Use for: Lesson 4. Why 3.3V and 5V parts need care when they meet.
- [SparkFun Learn: Pull-up Resistors](https://learn.sparkfun.com/tutorials/pull-up-resistors/all)
  Use for: Lesson 5. Floating pins and how pull-up/pull-down resistors fix them.
- [SparkFun Learn: Transistors](https://learn.sparkfun.com/tutorials/transistors/all)
  Use for: Lesson 6. The transistor-as-a-switch via the water-valve analogy.
- [Random Nerd Tutorials: Relay Module with Arduino](https://randomnerdtutorials.com/guide-for-relay-module-with-arduino/)
  Use for: Lesson 7. Practical relay-module wiring (COM/NO/NC, control side).
- [DroneBotWorkshop: Control AC Devices with Arduino — SAFELY](https://dronebotworkshop.com/ac-arduino/)
  Use for: Lesson 7. The mains-safety practices. High-trust hobbyist source with a strong safety stance.
- [SparkFun Learn: Resistors](https://learn.sparkfun.com/tutorials/resistors/all)
  Use for: Lesson 8. Color codes, power rating, applications.
- [SparkFun Learn: Voltage Dividers](https://learn.sparkfun.com/tutorials/voltage-dividers/all)
  Use for: Lesson 8/10. Scaling voltages and reading resistive sensors.
- [SparkFun Learn: Capacitors](https://learn.sparkfun.com/tutorials/capacitors/all)
  Use for: Lesson 9. Types, polarity, decoupling. Pair with the [Polarity](https://learn.sparkfun.com/tutorials/polarity/all) tutorial.
- [SparkFun Learn: Reading a Potentiometer](https://learn.sparkfun.com/tutorials/sik-experiment-guide-for-arduino---v32/experiment-2-reading-a-potentiometer)
  Use for: Lesson 10. Wiring a pot and reading it with analogRead.
- [SparkFun Learn: Diodes](https://learn.sparkfun.com/tutorials/diodes/all)
  Use for: Lesson 11. One-way behavior, types, protection circuits.
- [SparkFun Learn: Integrated Circuits](https://learn.sparkfun.com/tutorials/integrated-circuits/all)
  Use for: Lesson 12. Packages, finding pin 1, and an entry point to datasheets.

## Wisdom (Communities)

- [Arduino Forum — General Electronics](https://forum.arduino.cc/c/using-arduino/general-electronics/9)
  Active, beginner-tolerant. Use for: "is this circuit safe / will this work?" sanity checks.
- [r/arduino](https://reddit.com/r/arduino) and [r/AskElectronics](https://reddit.com/r/AskElectronics)
  Use for: project critique, "why isn't this working" troubleshooting, component selection second opinions.
- [Adafruit Forums](https://forums.adafruit.com/)
  Use for: ESP32/board-specific and home-automation questions.

## Gaps
- _(resolved)_ Relays / mains safety — now covered by Random Nerd Tutorials + DroneBotWorkshop above.
- Need a trusted resource on **WiFi / connecting an ESP32 to a network or Home Assistant / MQTT** — the connectivity half of the home-automation mission, not yet taught. To find before a networking lesson.
- Could use a good **multimeter basics** resource (measuring voltage/continuity to debug builds).
