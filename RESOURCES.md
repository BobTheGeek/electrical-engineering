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
- [SparkFun Learn: ESP32 Thing Hookup Guide](https://learn.sparkfun.com/tutorials/esp32-thing-hookup-guide/all)
  Use for: Lesson 13. ESP32 board anatomy and capabilities. Pair with a board-specific pinout diagram.
- [SparkFun Learn: Pulse Width Modulation](https://learn.sparkfun.com/tutorials/pulse-width-modulation/all)
  Use for: Lesson 14. Duty cycle and where PWM is used.
- [SparkFun Learn: I²C](https://learn.sparkfun.com/tutorials/i2c/all) · [SPI](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi/all) · [Serial/UART](https://learn.sparkfun.com/tutorials/serial-communication/all)
  Use for: Lesson 15. The three communication buses. I²C is the one to know best.
- [SparkFun Learn: Driving Motors with Arduino](https://learn.sparkfun.com/tutorials/driving-motors-with-arduino/all) · [TB6612FNG Hookup Guide](https://learn.sparkfun.com/tutorials/tb6612fng-hookup-guide/all)
  Use for: Lesson 16. DC motors, H-bridges, a concrete driver.
- [SparkFun Learn: Hobby Servo Tutorial](https://learn.sparkfun.com/tutorials/hobby-servo-tutorial/all) · [Basic Servo Control](https://learn.sparkfun.com/tutorials/basic-servo-control-for-beginners/all)
  Use for: Lesson 17. Servo signal, wiring, and code.
- [SparkFun Learn: Sensors tutorials (tag)](https://learn.sparkfun.com/tutorials/tags/sensors?page=all)
  Use for: Lesson 18. Per-sensor wiring and code guides.

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
