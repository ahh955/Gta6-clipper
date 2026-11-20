// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry itself is the YouTube Short: a cut of Rockstar's official
// GTA VI Trailer 2 (Jason's motorcycle vs a plane, the night chase, the
// speedboat, the Vice City sunset) with a make.fun pitch card at the end.
// This program only hands the gate the video's address: it copies
// VIDEO.json from the repository root to the output directory, where the
// house reads it and scores the video's YouTube views.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

// Validate the input before copying: VIDEO.json must parse as JSON and
// name a video URL, so a corrupt or empty file fails here with a clear
// message instead of being handed to the gate.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`VIDEO.json at ${source} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`VIDEO.json at ${source} has no string "url" field`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`Failed to copy VIDEO.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
