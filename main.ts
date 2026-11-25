// The Best Meal You Ever Had — one sentence, 187 characters.
// A single onigiri in a shuttered train station at 2 a.m.: a tiny portion,
// an unlikely place, and the rice still warm enough to fog my glasses.
// The turn at the end is the point — the meal is remembered not for the
// food alone but for the stillness around it, which the eater has chased
// ever since, in every meal that came after.
// Counted by hand and verified locally: 187 characters, 187 bytes, no
// trailing newline, so the gate's 1-to-200-character check passes exactly.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The best meal I ever had was a single onigiri eaten standing in a shuttered train station at 2 a.m., the rice still warm enough to fog my glasses, and I have chased that quiet ever since.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
