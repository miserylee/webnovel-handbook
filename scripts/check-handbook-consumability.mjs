#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const ignoredDirectories = new Set([
  ".git",
  "node_modules",
  ".venv",
  "dist",
  "build",
]);

const textFilePattern = /\.(md|mdx|yml|yaml|json|txt)$/i;
const markdownFilePattern = /\.(md|mdx)$/i;
const highConfidenceMojibakePattern =
  /(?:�|鈥|銆|锛|乣|歚|宎|鐨|鍏|鏂|鍐|寮|姣|缃|闈|绱)/g;

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (ignoredDirectories.has(entry.name)) {
      continue;
    }

    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(absolutePath)));
      continue;
    }

    if (entry.isFile()) {
      files.push(absolutePath);
    }
  }

  return files;
}

function toRepoPath(absolutePath) {
  return path.relative(repoRoot, absolutePath).replaceAll(path.sep, "/");
}

function stripLinkDecoration(rawTarget) {
  return rawTarget
    .replace(/\s+"[^"]*"$/, "")
    .split("#")[0]
    .split("?")[0];
}

function isExternalTarget(target) {
  return /^(?:https?:|mailto:|app:|file:)/i.test(target);
}

async function exists(absolutePath) {
  try {
    await fs.access(absolutePath);
    return true;
  } catch {
    return false;
  }
}

async function checkMarkdownLinks(markdownFiles) {
  const brokenLinks = [];
  const linkPattern = /!?(?:\[[^\]]*\])\(([^)\s]+(?:\s+"[^"]*")?)\)/g;

  for (const file of markdownFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split(/\r?\n/);

    for (const [index, line] of lines.entries()) {
      let match;
      while ((match = linkPattern.exec(line))) {
        let target = stripLinkDecoration(match[1]);
        if (!target || isExternalTarget(target)) {
          continue;
        }

        try {
          target = decodeURIComponent(target);
        } catch {
          // Keep the raw target if it is not URI-encoded.
        }

        const baseDirectory = target.startsWith("/") ? repoRoot : path.dirname(file);
        const targetPath = path.resolve(baseDirectory, target);

        if (!(await exists(targetPath))) {
          brokenLinks.push({
            file: toRepoPath(file),
            line: index + 1,
            target,
          });
        }
      }
    }
  }

  return brokenLinks;
}

async function checkRawRepoDocPaths(markdownFiles) {
  const missingRawDocPaths = [];
  const rawDocPathPattern = /(^|[^A-Za-z0-9_<>/-])(docs\/[A-Za-z0-9._/-]+\.md)/g;

  for (const file of markdownFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split(/\r?\n/);

    for (const [index, line] of lines.entries()) {
      let match;
      while ((match = rawDocPathPattern.exec(line))) {
        const target = match[2];
        if (target.includes("...")) {
          continue;
        }

        const targetPath = path.resolve(repoRoot, target);

        if (!(await exists(targetPath))) {
          missingRawDocPaths.push({
            file: toRepoPath(file),
            line: index + 1,
            target,
          });
        }
      }
    }
  }

  return missingRawDocPaths;
}

async function checkMojibake(textFiles) {
  const suspiciousFiles = [];

  for (const file of textFiles) {
    const content = await fs.readFile(file, "utf8");
    const matches = content.match(highConfidenceMojibakePattern) || [];

    if (matches.length >= 5 || content.includes("�")) {
      const firstSuspiciousLine =
        content
          .split(/\r?\n/)
          .find((line) => highConfidenceMojibakePattern.test(line)) || "";

      suspiciousFiles.push({
        file: toRepoPath(file),
        count: matches.length,
        sample: firstSuspiciousLine.slice(0, 120),
      });
    }
  }

  return suspiciousFiles;
}

async function checkDirectoryReadmeCoverage(markdownFiles) {
  const missingCoverage = [];
  const readmeCache = new Map();

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);

    if (!repoPath.startsWith("docs/")) {
      continue;
    }

    if (path.basename(file).toLowerCase() === "readme.md") {
      continue;
    }

    const directoryRepoPath = path.dirname(repoPath).replaceAll(path.sep, "/");

    if (directoryRepoPath === "docs") {
      continue;
    }

    const readmePath = path.join(repoRoot, directoryRepoPath, "README.md");
    const readmeRepoPath = `${directoryRepoPath}/README.md`;

    if (!(await exists(readmePath))) {
      missingCoverage.push({
        file: readmeRepoPath,
        target: repoPath,
        sample: "directory README is missing",
      });
      continue;
    }

    let readmeContent = readmeCache.get(readmePath);
    if (readmeContent === undefined) {
      readmeContent = await fs.readFile(readmePath, "utf8");
      readmeCache.set(readmePath, readmeContent);
    }

    const fileName = path.basename(file);
    const relativeFromReadme = path
      .relative(path.dirname(readmePath), file)
      .replaceAll(path.sep, "/");

    if (
      !readmeContent.includes(fileName) &&
      !readmeContent.includes(relativeFromReadme) &&
      !readmeContent.includes(repoPath)
    ) {
      missingCoverage.push({
        file: readmeRepoPath,
        target: repoPath,
        sample: "topic file is not mentioned in its directory README",
      });
    }
  }

  return missingCoverage;
}

function printSection(title, rows) {
  console.log(`\n${title}: ${rows.length}`);
  for (const row of rows.slice(0, 50)) {
    const detail = row.target ? ` -> ${row.target}` : "";
    const sample = row.sample ? ` | ${row.sample}` : "";
    console.log(`- ${row.file}:${row.line ?? 1}${detail}${sample}`);
  }

  if (rows.length > 50) {
    console.log(`- ... ${rows.length - 50} more`);
  }
}

async function main() {
  const allFiles = await walk(repoRoot);
  const markdownFiles = allFiles.filter((file) => markdownFilePattern.test(file));
  const textFiles = allFiles.filter((file) => {
    return textFilePattern.test(file) || path.basename(file) === "SKILL.md";
  });

  const [
    brokenLinks,
    missingRawDocPaths,
    suspiciousMojibake,
    missingDirectoryReadmeCoverage,
  ] =
    await Promise.all([
      checkMarkdownLinks(markdownFiles),
      checkRawRepoDocPaths(markdownFiles),
      checkMojibake(textFiles),
      checkDirectoryReadmeCoverage(markdownFiles),
    ]);

  printSection("Broken Markdown links", brokenLinks);
  printSection("Missing raw repo docs paths", missingRawDocPaths);
  printSection("Suspicious mojibake files", suspiciousMojibake);
  printSection(
    "Docs missing directory README coverage",
    missingDirectoryReadmeCoverage,
  );

  const hasProblems =
    brokenLinks.length > 0 ||
    missingRawDocPaths.length > 0 ||
    suspiciousMojibake.length > 0 ||
    missingDirectoryReadmeCoverage.length > 0;

  if (hasProblems) {
    process.exitCode = 1;
    return;
  }

  console.log("\nHandbook consumability check passed.");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
