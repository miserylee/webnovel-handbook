#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const steps = [
  {
    name: "check handbook consumability",
    command: "node",
    args: ["scripts/check-handbook-consumability.mjs"],
  },
  {
    name: "package lightweight skill",
    command: "node",
    args: ["scripts/package-skill.mjs"],
  },
  {
    name: "check installed skill sync",
    command: "node",
    args: ["scripts/sync-installed-skill.mjs", "--check"],
  },
];

for (const step of steps) {
  console.log(`\n==> ${step.name}`);

  const result = spawnSync(step.command, step.args, {
    cwd: repoRoot,
    stdio: "inherit",
    shell: false,
  });

  if (result.error) {
    console.error(`Failed to run ${step.name}: ${result.error.message}`);
    process.exit(1);
  }

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("\nMaintenance verification passed.");
