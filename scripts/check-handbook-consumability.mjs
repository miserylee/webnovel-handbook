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

const requiredEntrypoints = [
  "README.md",
  "AGENTS.md",
  "LICENSE",
  "SOURCE_POLICY.md",
  "SAFETY.md",
  "DEIDENTIFICATION.md",
  "skills/webnovel-handbook/SKILL.md",
  "docs/00-index.md",
  "docs/navigation/README.md",
  "docs/navigation/00-expanded-topic-catalog.md",
  "docs/navigation/00-readme-details.md",
  "docs/workflows/README.md",
  "docs/workflows/35-ai-agent-novel-creation-workflow.md",
  "docs/workflows/44-single-novel-project-initialization-package.md",
  "docs/workflows/45-first-chapter-task-brief-production-gate.md",
  "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
  "docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md",
  "docs/templates/10-templates-and-checklists.md",
  "docs/core-writing/04-character-and-dialogue.md",
  "docs/core-writing/06-ai-writing-guidelines.md",
  "docs/core-writing/11-human-writing-upgrade.md",
  "docs/core-writing/37-project-style-bible-character-voice.md",
  "docs/core-writing/59-dialogue-comparison-reference.md",
  "docs/governance/99-decision-log.md",
];

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

async function checkRequiredEntrypoints() {
  const missingEntrypoints = [];

  for (const repoPath of requiredEntrypoints) {
    const absolutePath = path.join(repoRoot, repoPath);

    if (!(await exists(absolutePath))) {
      missingEntrypoints.push({
        file: repoPath,
        sample: "required agent entrypoint is missing",
      });
    }
  }

  return missingEntrypoints;
}

async function checkDocsDirectoryIndexCoverage() {
  const missingDirectoryIndexCoverage = [];
  const docsDirectory = path.join(repoRoot, "docs");
  const indexPath = path.join(docsDirectory, "00-index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const entries = await fs.readdir(docsDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const directoryRepoPath = `docs/${entry.name}/`;
    const readmePath = path.join(docsDirectory, entry.name, "README.md");

    if (!(await exists(readmePath))) {
      missingDirectoryIndexCoverage.push({
        file: directoryRepoPath,
        sample: "top-level docs directory is missing README.md",
      });
      continue;
    }

    if (!indexContent.includes(directoryRepoPath)) {
      missingDirectoryIndexCoverage.push({
        file: "docs/00-index.md",
        target: directoryRepoPath,
        sample: "top-level docs directory is not mentioned in docs/00-index.md",
      });
    }
  }

  return missingDirectoryIndexCoverage;
}

async function checkSkillPackageLayout() {
  const skillPackageProblems = [];
  const skillsDirectory = path.join(repoRoot, "skills");

  if (!(await exists(skillsDirectory))) {
    skillPackageProblems.push({
      file: "skills/",
      sample: "skills directory is missing",
    });
    return skillPackageProblems;
  }

  const entries = await fs.readdir(skillsDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const skillDirectory = path.join(skillsDirectory, entry.name);
    const skillFile = path.join(skillDirectory, "SKILL.md");
    const skillRepoPath = `skills/${entry.name}/SKILL.md`;

    if (!(await exists(skillFile))) {
      skillPackageProblems.push({
        file: skillRepoPath,
        sample: "skill package directory is missing SKILL.md",
      });
      continue;
    }

    const content = await fs.readFile(skillFile, "utf8");
    const frontmatterMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    const nameMatch = frontmatterMatch?.[1]?.match(/^name:\s*([^\r\n]+)/m);
    const frontmatterName = nameMatch?.[1]?.trim().replace(/^["']|["']$/g, "");

    if (!frontmatterName) {
      skillPackageProblems.push({
        file: skillRepoPath,
        sample: "SKILL.md frontmatter is missing name",
      });
      continue;
    }

    if (frontmatterName !== entry.name) {
      skillPackageProblems.push({
        file: skillRepoPath,
        sample: `frontmatter name "${frontmatterName}" does not match directory "${entry.name}"`,
      });
    }
  }

  return skillPackageProblems;
}

async function checkSkillPackagingSetup() {
  const packagingProblems = [];
  const packageScriptRepoPath = "scripts/package-skill.mjs";
  const packageScriptPath = path.join(repoRoot, packageScriptRepoPath);
  const gitignorePath = path.join(repoRoot, ".gitignore");

  if (!(await exists(packageScriptPath))) {
    packagingProblems.push({
      file: packageScriptRepoPath,
      sample: "skill package script is missing",
    });
  } else {
    const packageScript = await fs.readFile(packageScriptPath, "utf8");

    if (packageScript.charCodeAt(0) === 0xfeff) {
      packagingProblems.push({
        file: packageScriptRepoPath,
        sample: "script starts with a UTF-8 BOM before shebang",
      });
    }

    if (!packageScript.includes('path.join(repoRoot, "skills", "webnovel-handbook")')) {
      packagingProblems.push({
        file: packageScriptRepoPath,
        sample: "package script does not target skills/webnovel-handbook",
      });
    }

    if (!packageScript.includes('"dist/webnovel-handbook-skill.zip"')) {
      packagingProblems.push({
        file: packageScriptRepoPath,
        sample: "package script default output is not dist/webnovel-handbook-skill.zip",
      });
    }
  }

  if (!(await exists(gitignorePath))) {
    packagingProblems.push({
      file: ".gitignore",
      sample: ".gitignore is missing",
    });
  } else {
    const gitignoreLines = (await fs.readFile(gitignorePath, "utf8"))
      .split(/\r?\n/)
      .map((line) => line.trim());

    if (!gitignoreLines.includes("dist/")) {
      packagingProblems.push({
        file: ".gitignore",
        sample: "dist/ is not ignored",
      });
    }

    if (!gitignoreLines.includes("*.zip")) {
      packagingProblems.push({
        file: ".gitignore",
        sample: "*.zip is not ignored",
      });
    }
  }

  return packagingProblems;
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
    missingEntrypoints,
    missingDirectoryIndexCoverage,
    skillPackageProblems,
    skillPackagingProblems,
  ] =
    await Promise.all([
      checkMarkdownLinks(markdownFiles),
      checkRawRepoDocPaths(markdownFiles),
      checkMojibake(textFiles),
      checkDirectoryReadmeCoverage(markdownFiles),
      checkRequiredEntrypoints(),
      checkDocsDirectoryIndexCoverage(),
      checkSkillPackageLayout(),
      checkSkillPackagingSetup(),
    ]);

  printSection("Broken Markdown links", brokenLinks);
  printSection("Missing raw repo docs paths", missingRawDocPaths);
  printSection("Suspicious mojibake files", suspiciousMojibake);
  printSection(
    "Docs missing directory README coverage",
    missingDirectoryReadmeCoverage,
  );
  printSection("Missing required agent entrypoints", missingEntrypoints);
  printSection(
    "Docs top-level directories missing index coverage",
    missingDirectoryIndexCoverage,
  );
  printSection("Skill package layout problems", skillPackageProblems);
  printSection("Skill packaging setup problems", skillPackagingProblems);

  const hasProblems =
    brokenLinks.length > 0 ||
    missingRawDocPaths.length > 0 ||
    suspiciousMojibake.length > 0 ||
    missingDirectoryReadmeCoverage.length > 0 ||
    missingEntrypoints.length > 0 ||
    missingDirectoryIndexCoverage.length > 0 ||
    skillPackageProblems.length > 0 ||
    skillPackagingProblems.length > 0;

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
