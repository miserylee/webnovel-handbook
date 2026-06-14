#!/usr/bin/env node

import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const sourceSkillPath = path.join(repoRoot, "skills", "webnovel-handbook", "SKILL.md");
const defaultTargetPath = path.join(
  os.homedir(),
  ".agents",
  "skills",
  "webnovel-handbook",
  "SKILL.md",
);

function expandHome(inputPath) {
  if (inputPath === "~") {
    return os.homedir();
  }

  if (inputPath.startsWith("~/") || inputPath.startsWith("~\\")) {
    return path.join(os.homedir(), inputPath.slice(2));
  }

  return inputPath;
}

function parseArgs(argv) {
  const options = {
    mode: "check",
    targetPath: defaultTargetPath,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--check") {
      options.mode = "check";
      continue;
    }

    if (arg === "--write") {
      options.mode = "write";
      continue;
    }

    if (arg === "--target") {
      const value = argv[index + 1];
      if (!value) {
        throw new Error("--target requires a path");
      }

      options.targetPath = path.resolve(expandHome(value));
      index += 1;
      continue;
    }

    if (arg === "--help" || arg === "-h") {
      options.mode = "help";
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

function printHelp() {
  console.log(`Usage:
  node scripts/sync-installed-skill.mjs --check [--target <path>]
  node scripts/sync-installed-skill.mjs --write [--target <path>]

Default target:
  ${defaultTargetPath}
`);
}

async function readOptional(filePath) {
  try {
    return await fs.readFile(filePath);
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.mode === "help") {
    printHelp();
    return;
  }

  const source = await fs.readFile(sourceSkillPath);
  const target = await readOptional(options.targetPath);

  if (options.mode === "check") {
    if (target && Buffer.compare(source, target) === 0) {
      console.log(`Installed skill is synchronized: ${options.targetPath}`);
      return;
    }

    console.error(
      target
        ? `Installed skill differs from repository source: ${options.targetPath}`
        : `Installed skill is missing: ${options.targetPath}`,
    );
    console.error("Run: node scripts/sync-installed-skill.mjs --write");
    process.exitCode = 1;
    return;
  }

  await fs.mkdir(path.dirname(options.targetPath), { recursive: true });
  await fs.writeFile(options.targetPath, source);
  console.log(`Installed skill synchronized: ${options.targetPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
