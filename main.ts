// Robot Romance: One-Line Pickup Lines for AI
// Writes a single original pickup line, aimed at an AI, to entry.txt.
// Node 22+, standard library only, deterministic, no network, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You must be my favorite token, because no matter what I type, I keep predicting you.";

// Gate validation: single line, 1-199 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`Line must be 1-199 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("Line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Line must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("Line must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output/entry.txt";
const outPath = outDir.endsWith("entry.txt") ? outDir : join(outDir, "entry.txt");
mkdirSync(join(outPath, ".."), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
