// SPDX-License-Identifier: MIT
// news-image-20261118 — one image summing up the world news of
// Wednesday 18 November 2026, for the make.fun competition of that day.
//
// The picture itself is bundled in this repository as entry.png. This
// program does exactly one deterministic thing: it copies that file to
// the output directory make.fun provides, so every run writes the
// same bytes. It uses only the Node.js standard library and touches
// no network. A plain file copy has no randomness, no timestamps and
// no compression step, so the two graded runs are byte-identical.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "entry.png"), join(outDir, "entry.png"));
