#!/usr/bin/env node
// Validates that every slug listed in IMAGE_MAP.md has a corresponding
// public/images/<slug>.png file. Runs on prebuild.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const map = readFileSync(join(root, 'IMAGE_MAP.md'), 'utf8');

const rows = map
  .split('\n')
  .filter((l) => l.startsWith('|') && !l.includes('---') && !l.includes('slug'))
  .map((l) => l.split('|').map((c) => c.trim()))
  .filter((cols) => cols.length >= 4 && cols[2]);

let bad = 0;
for (const [, , slug] of rows) {
  const file = join(root, 'public', 'images', `${slug}.png`);
  if (!existsSync(file)) {
    console.error(`✗ missing public/images/${slug}.png`);
    bad++;
  }
}

if (bad > 0) {
  console.error(`\n${bad} image(s) missing. Update IMAGE_MAP.md or add the files.`);
  process.exit(1);
}

console.log(`✓ ${rows.length} product images present.`);
