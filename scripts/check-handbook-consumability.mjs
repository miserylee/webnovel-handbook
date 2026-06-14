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

const textFilePattern = /\.(md|mdx|mjs|js|yml|yaml|json|txt)$/i;
const markdownFilePattern = /\.(md|mdx)$/i;
const highConfidenceMojibakePattern =
  /(?:�|鈥|銆|锛|乣|歚|宎|鐨|鍏|鏂|鍐|寮|姣|缃|闈|绱)/g;
const replacementQuestionMarkPattern = /\?{4,}/;

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
  "docs/navigation/01-readme-details.md",
  "docs/sources/01-source-inventory.md",
  "docs/workflows/README.md",
  "docs/workflows/03-project-workflow.md",
  "docs/workflows/35-ai-agent-novel-creation-workflow.md",
  "docs/workflows/38-chapter-production-pipeline-agent-handoff.md",
  "docs/workflows/43-commercial-project-greenlight-scorecard.md",
  "docs/workflows/44-single-novel-project-initialization-package.md",
  "docs/workflows/45-first-chapter-task-brief-production-gate.md",
  "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
  "docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md",
  "docs/workflows/64-single-novel-project-document-granularity.md",
  "docs/workflows/65-serial-project-kanban-change-control.md",
  "docs/templates/10-templates-and-checklists.md",
  "docs/core-writing/02-webnovel-principles.md",
  "docs/core-writing/04-character-and-dialogue.md",
  "docs/core-writing/05-plot-and-serial-rhythm.md",
  "docs/core-writing/06-ai-writing-guidelines.md",
  "docs/core-writing/07-continuity-ledger.md",
  "docs/core-writing/11-human-writing-upgrade.md",
  "docs/core-writing/32-chapter-paragraph-mobile-reading-experience.md",
  "docs/core-writing/37-project-style-bible-character-voice.md",
  "docs/core-writing/59-dialogue-comparison-reference.md",
  "docs/market-serialization/12-platform-and-channel-differences.md",
  "docs/market-serialization/16-title-blurb-tag-packaging.md",
  "docs/market-serialization/17-cover-visual-packaging.md",
  "docs/market-serialization/29-reader-expectation-genre-promise-selling-point.md",
  "docs/feedback-revision/08-review-and-reader-feedback.md",
  "docs/feedback-revision/09-case-notes.md",
  "docs/feedback-revision/18-reader-data-feedback-diagnosis.md",
  "docs/feedback-revision/33-revision-rewrite-version-workflow.md",
  "docs/feedback-revision/40-serial-data-tuning-loop.md",
  "docs/feedback-revision/41-reader-comment-coding-feedback-clustering.md",
  "docs/feedback-revision/42-editor-reader-data-feedback-conflict-resolution.md",
  "docs/feedback-revision/43-feedback-revision-priority-queue.md",
  "docs/reality-reference/30-profession-industry-life-detail-credibility.md",
  "docs/reality-reference/31-region-era-social-custom-texture.md",
  "docs/governance/99-decision-log.md",
];

const requiredRootReadmeLinks = [
  "AGENTS.md",
  "CHANGELOG.md",
  "CODE_OF_CONDUCT.md",
  "CONTRIBUTING.md",
  "DEIDENTIFICATION.md",
  "LICENSE",
  "package.json",
  "ROADMAP.md",
  "SAFETY.md",
  "SECURITY.md",
  "SOURCE_POLICY.md",
];

const startupFirstReads = ["README.md", "AGENTS.md", "docs/00-index.md"];
const sourceInventoryPath = "docs/sources/01-source-inventory.md";
const largeConditionalStartupPaths = [
  sourceInventoryPath,
  "docs/templates/10-templates-and-checklists.md",
  "docs/navigation/00-expanded-topic-catalog.md",
  "docs/navigation/01-readme-details.md",
];

const routeSignalPattern =
  /(用途|适用对象|适用场景|核心用途|核心目标|目标：|适合|用于)/;

const numberedHeadingUniqueEntrypoints = new Set([
  "docs/00-index.md",
  "docs/workflows/35-ai-agent-novel-creation-workflow.md",
  "docs/workflows/38-chapter-production-pipeline-agent-handoff.md",
  "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
  "docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md",
  "docs/governance/99-decision-log.md",
]);

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

function extractBlock(content, startMarker, endMarker) {
  const startIndex = content.indexOf(startMarker);

  if (startIndex === -1) {
    return "";
  }

  const endIndex = content.indexOf(endMarker, startIndex + startMarker.length);

  return content.slice(startIndex, endIndex === -1 ? undefined : endIndex);
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

async function checkRawRepoFilePaths(markdownFiles) {
  const missingRawRepoFilePaths = [];
  const rawRepoFilePathPattern =
    /(^|[^A-Za-z0-9_<>/-])((?:scripts|skills)\/[A-Za-z0-9._/-]+\.[A-Za-z0-9]+|(?:README|AGENTS|CHANGELOG|CODE_OF_CONDUCT|CONTRIBUTING|DEIDENTIFICATION|ROADMAP|SAFETY|SECURITY|SOURCE_POLICY)\.md|LICENSE|package\.json)/g;

  for (const file of markdownFiles) {
    const content = await fs.readFile(file, "utf8");
    const lines = content.split(/\r?\n/);

    for (const [index, line] of lines.entries()) {
      let match;
      while ((match = rawRepoFilePathPattern.exec(line))) {
        const target = match[2];
        if (target.includes("...")) {
          continue;
        }

        const targetPath = path.resolve(repoRoot, target);

        if (!(await exists(targetPath))) {
          missingRawRepoFilePaths.push({
            file: toRepoPath(file),
            line: index + 1,
            target,
          });
        }
      }
    }
  }

  return missingRawRepoFilePaths;
}

async function checkRootEntrypointLinkSemantics(markdownFiles) {
  const rootEntrypointLinkProblems = [];
  const rootEntrypointNames = new Set([
    "README.md",
    "AGENTS.md",
    "CHANGELOG.md",
    "CODE_OF_CONDUCT.md",
    "CONTRIBUTING.md",
    "DEIDENTIFICATION.md",
    "ROADMAP.md",
    "SAFETY.md",
    "SECURITY.md",
    "SOURCE_POLICY.md",
  ]);
  const markdownLinkPattern = /\[[^\]]+\]\(([^)]+)\)/g;

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);
    if (!repoPath.includes("/")) {
      continue;
    }

    const content = await fs.readFile(file, "utf8");
    const lines = content.split(/\r?\n/);

    for (const [index, line] of lines.entries()) {
      let match;
      while ((match = markdownLinkPattern.exec(line))) {
        const target = match[1].split("#")[0];
        if (!rootEntrypointNames.has(target)) {
          continue;
        }

        rootEntrypointLinkProblems.push({
          file: repoPath,
          line: index + 1,
          target,
          sample:
            "subdirectory document links to a root entrypoint with a bare relative target; " +
            "use the correct ../ path to the repository root",
        });
      }
    }
  }

  return rootEntrypointLinkProblems;
}

async function checkMojibake(textFiles) {
  const suspiciousFiles = [];

  for (const file of textFiles) {
    if (toRepoPath(file) === "scripts/check-handbook-consumability.mjs") {
      continue;
    }

    const content = await fs.readFile(file, "utf8");
    const lines = content.split(/\r?\n/);
    const matches = content.match(highConfidenceMojibakePattern) || [];
    const questionMarkReplacementLine = lines.find((line) =>
      replacementQuestionMarkPattern.test(line),
    );

    if (matches.length >= 5 || content.includes("�") || questionMarkReplacementLine) {
      const firstSuspiciousLine =
        lines.find((line) => {
          highConfidenceMojibakePattern.lastIndex = 0;
          return (
            highConfidenceMojibakePattern.test(line) ||
            replacementQuestionMarkPattern.test(line)
          );
        }) || "";

      suspiciousFiles.push({
        file: toRepoPath(file),
        count: matches.length + (questionMarkReplacementLine ? 1 : 0),
        sample: firstSuspiciousLine.slice(0, 120),
      });
    }
  }

  return suspiciousFiles;
}

async function checkUtf8Bom(textFiles) {
  const bomFiles = [];

  for (const file of textFiles) {
    const content = await fs.readFile(file);

    if (
      content.length >= 3 &&
      content[0] === 0xef &&
      content[1] === 0xbb &&
      content[2] === 0xbf
    ) {
      bomFiles.push({
        file: toRepoPath(file),
        sample: "file starts with a UTF-8 BOM",
      });
    }
  }

  return bomFiles;
}

async function checkCrlfLineEndings(textFiles) {
  const crlfFiles = [];
  const crlfPattern = Buffer.from("\r\n");

  for (const file of textFiles) {
    const content = await fs.readFile(file);

    if (content.includes(crlfPattern)) {
      crlfFiles.push({
        file: toRepoPath(file),
        sample: "file contains CRLF line endings; use LF",
      });
    }
  }

  return crlfFiles;
}

async function checkPublicHygieneResidue(textFiles) {
  const residue = [];
  const patterns = [
    {
      name: "local Windows user path",
      pattern: /\b[A-Za-z]:[\\/](?:Users|Documents and Settings)[\\/][^\s`"')<]+/i,
    },
    {
      name: "local Unix user path",
      pattern: /\/(?:Users|home)\/[^\s`"')<]+/,
    },
    {
      name: "private Codex runtime path",
      pattern: /\.codex[\\/](?:skills|plugins)/i,
    },
    {
      name: "obsolete novel skill wording",
      pattern: /\bnovel skill\b/i,
    },
    {
      name: "local workspace folder name",
      pattern: /学习写网文/,
    },
  ];

  for (const file of textFiles) {
    const repoPath = toRepoPath(file);

    if (repoPath === "scripts/check-handbook-consumability.mjs") {
      continue;
    }

    const lines = (await fs.readFile(file, "utf8")).split(/\r?\n/);

    for (const [index, line] of lines.entries()) {
      for (const { name, pattern } of patterns) {
        pattern.lastIndex = 0;

        if (pattern.test(line)) {
          residue.push({
            file: repoPath,
            line: index + 1,
            sample: `${name}: ${line.slice(0, 120)}`,
          });
        }
      }
    }
  }

  return residue;
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

async function checkAgentsInstructionEntrypointCoverage() {
  const coverageProblems = [];
  const agentsPath = path.join(repoRoot, "AGENTS.md");
  const agentsContent = await fs.readFile(agentsPath, "utf8");
  const agentDocPathPattern = /docs\/[A-Za-z0-9._/-]+\.md/g;
  const requiredEntrypointSet = new Set(requiredEntrypoints);
  const agentDocPaths = new Set(agentsContent.match(agentDocPathPattern) || []);

  for (const repoPath of [...agentDocPaths].sort()) {
    if (!requiredEntrypointSet.has(repoPath)) {
      coverageProblems.push({
        file: "AGENTS.md",
        target: repoPath,
        sample: "AGENTS.md references a task route that is not listed in requiredEntrypoints",
      });
    }
  }

  return coverageProblems;
}

async function checkRequiredEntrypointRouteSignals() {
  const missingRouteSignals = [];

  for (const repoPath of requiredEntrypoints) {
    if (!repoPath.startsWith("docs/") || !markdownFilePattern.test(repoPath)) {
      continue;
    }

    const absolutePath = path.join(repoRoot, repoPath);

    if (!(await exists(absolutePath))) {
      continue;
    }

    const headingBlock = (await fs.readFile(absolutePath, "utf8"))
      .split(/\r?\n/)
      .slice(0, 18)
      .join("\n");

    if (!routeSignalPattern.test(headingBlock)) {
      missingRouteSignals.push({
        file: repoPath,
        sample: "required agent entrypoint is missing a route/use signal near the top",
      });
    }
  }

  return missingRouteSignals;
}

async function checkRootReadmeLinkCoverage() {
  const missingRootReadmeLinks = [];
  const readmePath = path.join(repoRoot, "README.md");
  const readmeContent = await fs.readFile(readmePath, "utf8");
  const rootEntries = await fs.readdir(repoRoot, { withFileTypes: true });

  for (const repoPath of requiredRootReadmeLinks) {
    if (!readmeContent.includes(repoPath)) {
      missingRootReadmeLinks.push({
        file: "README.md",
        target: repoPath,
        sample: "root public file is not linked from README.md",
      });
    }
  }

  for (const entry of rootEntries) {
    if (!entry.isFile() || !markdownFilePattern.test(entry.name)) {
      continue;
    }

    if (entry.name === "README.md") {
      continue;
    }

    if (!readmeContent.includes(entry.name)) {
      missingRootReadmeLinks.push({
        file: "README.md",
        target: entry.name,
        sample: "root Markdown file is not linked from README.md",
      });
    }
  }

  const scriptsDirectory = path.join(repoRoot, "scripts");
  if (await exists(scriptsDirectory)) {
    const scriptEntries = await fs.readdir(scriptsDirectory, { withFileTypes: true });

    for (const entry of scriptEntries) {
      if (!entry.isFile() || !/\.(?:js|mjs)$/i.test(entry.name)) {
        continue;
      }

      const repoPath = `scripts/${entry.name}`;
      if (!readmeContent.includes(repoPath)) {
        missingRootReadmeLinks.push({
          file: "README.md",
          target: repoPath,
          sample: "maintenance script is not mentioned in README.md",
        });
      }
    }
  }

  const skillsDirectory = path.join(repoRoot, "skills");
  if (await exists(skillsDirectory)) {
    const skillEntries = await fs.readdir(skillsDirectory, { withFileTypes: true });

    for (const entry of skillEntries) {
      if (!entry.isDirectory()) {
        continue;
      }

      const repoPath = `skills/${entry.name}/SKILL.md`;
      if (!readmeContent.includes(repoPath)) {
        missingRootReadmeLinks.push({
          file: "README.md",
          target: repoPath,
          sample: "skill package entrypoint is not linked from README.md",
        });
      }
    }
  }

  return missingRootReadmeLinks;
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

async function checkDocsIndexRequiredEntrypointCoverage() {
  const missingDocsIndexCoverage = [];
  const indexPath = path.join(repoRoot, "docs", "00-index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");

  for (const repoPath of requiredEntrypoints) {
    if (!repoPath.startsWith("docs/") || !markdownFilePattern.test(repoPath)) {
      continue;
    }

    if (path.basename(repoPath).toLowerCase() === "readme.md") {
      continue;
    }

    if (!indexContent.includes(repoPath)) {
      missingDocsIndexCoverage.push({
        file: "docs/00-index.md",
        target: repoPath,
        sample: "required docs entrypoint is not discoverable from the startup index",
      });
    }
  }

  return missingDocsIndexCoverage;
}

async function checkDocsIndexMinimumReadEntrypointCoverage() {
  const missingMinimumReadCoverage = [];
  const indexPath = path.join(repoRoot, "docs", "00-index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const minimumReadSection = extractBlock(
    indexContent,
    "## 2. 常用任务最小阅读包",
    "## 3. 写稿质量硬入口",
  );
  const requiredEntrypointSet = new Set(requiredEntrypoints);
  const minimumReadDocPathPattern = /docs\/[A-Za-z0-9._/-]+\.md/g;
  const seen = new Set();

  for (const line of minimumReadSection.split(/\r?\n/)) {
    if (!line.startsWith("|") || !line.includes("`docs/")) {
      continue;
    }

    const cells = line.split("|").map((cell) => cell.trim());
    const firstReadCell = cells[2] || "";
    const matches = firstReadCell.match(minimumReadDocPathPattern) || [];

    for (const repoPath of matches) {
      if (seen.has(repoPath)) {
        continue;
      }

      seen.add(repoPath);

      if (!requiredEntrypointSet.has(repoPath)) {
        missingMinimumReadCoverage.push({
          file: "docs/00-index.md",
          target: repoPath,
          sample: "docs/00-index.md minimum-read doc is not listed in requiredEntrypoints",
        });
      }
    }
  }

  return missingMinimumReadCoverage;
}

async function checkDefaultRouteLargeDocLeakage() {
  const leakageProblems = [];
  const disallowedDefaultRoutePaths = new Set(largeConditionalStartupPaths);

  const agentsPath = path.join(repoRoot, "AGENTS.md");
  const agentsContent = await fs.readFile(agentsPath, "utf8");
  const agentsTaskRouteBlock = extractBlock(
    agentsContent,
    "再按",
    "## 来源优先级",
  );

  for (const [index, line] of agentsTaskRouteBlock.split(/\r?\n/).entries()) {
    if (!line.startsWith("- ")) {
      continue;
    }

    for (const repoPath of disallowedDefaultRoutePaths) {
      if (line.includes(repoPath)) {
        leakageProblems.push({
          file: "AGENTS.md",
          line: index + 1,
          target: repoPath,
          sample: "large or conditional document appears in an AGENTS default task route",
        });
      }
    }
  }

  const indexPath = path.join(repoRoot, "docs", "00-index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const minimumReadSection = extractBlock(
    indexContent,
    "## 2. 常用任务最小阅读包",
    "## 3. 写稿质量硬入口",
  );
  let currentMinimumReadField = "";

  for (const [index, line] of minimumReadSection.split(/\r?\n/).entries()) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("|")) {
      leakageProblems.push({
        file: "docs/00-index.md",
        line: index + 1,
        sample:
          "minimum reading pack should use task subsections with explicit fields, not a dense Markdown table",
      });
      continue;
    }

    if (
      trimmedLine === "先读：" ||
      trimmedLine === "按需追加：" ||
      trimmedLine === "不要默认读："
    ) {
      currentMinimumReadField = trimmedLine;
      continue;
    }

    if (!line.startsWith("- ") || currentMinimumReadField !== "先读：") {
      continue;
    }

    for (const repoPath of disallowedDefaultRoutePaths) {
      if (line.includes(repoPath)) {
        leakageProblems.push({
          file: "docs/00-index.md",
          line: index + 1,
          target: repoPath,
          sample: "large or conditional document appears in a minimum-read first-read item",
        });
      }
    }
  }

  return leakageProblems;
}

async function checkMinimumReadingPackFieldStructure() {
  const structureProblems = [];
  const requiredFields = ["先读：", "按需追加：", "不要默认读："];
  const indexPath = path.join(repoRoot, "docs", "00-index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const minimumReadSection = extractBlock(
    indexContent,
    "## 2. 常用任务最小阅读包",
    "## 3. 写稿质量硬入口",
  );
  const taskSections = [];
  let currentTask = null;
  let currentField = "";

  for (const [index, line] of minimumReadSection.split(/\r?\n/).entries()) {
    const trimmedLine = line.trim();
    const taskHeadingMatch = trimmedLine.match(/^### 2\.\d+ .+/);

    if (taskHeadingMatch) {
      if (currentTask) {
        taskSections.push(currentTask);
      }

      currentTask = {
        heading: trimmedLine,
        line: index + 1,
        fields: new Map(),
        bulletCounts: new Map(),
      };
      currentField = "";
      continue;
    }

    if (!currentTask) {
      continue;
    }

    if (requiredFields.includes(trimmedLine)) {
      currentField = trimmedLine;
      currentTask.fields.set(trimmedLine, index + 1);
      currentTask.bulletCounts.set(trimmedLine, 0);
      continue;
    }

    if (line.startsWith("- ") && currentField) {
      currentTask.bulletCounts.set(
        currentField,
        (currentTask.bulletCounts.get(currentField) || 0) + 1,
      );
    }
  }

  if (currentTask) {
    taskSections.push(currentTask);
  }

  if (taskSections.length === 0) {
    structureProblems.push({
      file: "docs/00-index.md",
      target: "## 2. 常用任务最小阅读包",
      sample: "minimum reading pack is missing task subsections such as ### 2.1",
    });
    return structureProblems;
  }

  for (const taskSection of taskSections) {
    for (const field of requiredFields) {
      if (!taskSection.fields.has(field)) {
        structureProblems.push({
          file: "docs/00-index.md",
          line: taskSection.line,
          target: `${taskSection.heading} / ${field}`,
          sample: "each minimum-reading task subsection must include all three fields",
        });
        continue;
      }

      if ((taskSection.bulletCounts.get(field) || 0) === 0) {
        structureProblems.push({
          file: "docs/00-index.md",
          line: taskSection.fields.get(field),
          target: `${taskSection.heading} / ${field}`,
          sample: "minimum-reading task field must contain at least one bullet item",
        });
      }
    }
  }

  return structureProblems;
}

async function checkAgentsRouteDelegation() {
  const delegationProblems = [];
  const agentsPath = path.join(repoRoot, "AGENTS.md");
  const agentsContent = await fs.readFile(agentsPath, "utf8");
  const agentsTaskRouteBlock = extractBlock(
    agentsContent,
    "再按",
    "## 来源优先级",
  );

  if (!agentsTaskRouteBlock.includes("docs/00-index.md")) {
    delegationProblems.push({
      file: "AGENTS.md",
      target: "docs/00-index.md",
      sample: "AGENTS task routing should delegate to the startup index",
    });
  }

  if (!agentsTaskRouteBlock.includes("常用任务最小阅读包")) {
    delegationProblems.push({
      file: "AGENTS.md",
      target: "常用任务最小阅读包",
      sample: "AGENTS task routing should name the minimum-reading section",
    });
  }

  const routeDocPathPattern = /docs\/[A-Za-z0-9._/-]+\.md/g;
  const routeDocs = new Set(agentsTaskRouteBlock.match(routeDocPathPattern) || []);
  const allowedRouteDocs = new Set([
    "docs/00-index.md",
    "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
  ]);

  for (const repoPath of [...routeDocs].sort()) {
    if (!allowedRouteDocs.has(repoPath)) {
      delegationProblems.push({
        file: "AGENTS.md",
        target: repoPath,
        sample: "AGENTS task routing should not duplicate detailed task routes; put them in docs/00-index.md",
      });
    }
  }

  const routingGuidePath = path.join(
    repoRoot,
    "docs",
    "workflows",
    "57-knowledge-base-routing-consolidation-guide.md",
  );
  const routingGuideContent = await fs.readFile(routingGuidePath, "utf8");
  const taskStageBlock = extractBlock(
    routingGuideContent,
    "### 2.1 第一层：任务阶段层",
    "### 2.2 第二层：叙事功能层",
  );

  if (!taskStageBlock.includes("docs/00-index.md")) {
    delegationProblems.push({
      file: "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
      target: "docs/00-index.md",
      sample: "routing guide task-stage layer should delegate executable minimum reads to docs/00-index.md",
    });
  }

  if (!taskStageBlock.includes("常用任务最小阅读包")) {
    delegationProblems.push({
      file: "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
      target: "常用任务最小阅读包",
      sample: "routing guide task-stage layer should name the single minimum-reading section",
    });
  }

  for (const [index, line] of taskStageBlock.split(/\r?\n/).entries()) {
    if (line.trim().startsWith("|")) {
      delegationProblems.push({
        file: "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
        line: index + 1,
        sample:
          "routing guide task-stage layer should not reintroduce a duplicate task route table; " +
          "keep executable routes in docs/00-index.md",
      });
    }
  }

  return delegationProblems;
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

async function checkSkillStartupRoutingConsistency() {
  const startupProblems = [];
  const skillFile = path.join(repoRoot, "skills", "webnovel-handbook", "SKILL.md");

  if (!(await exists(skillFile))) {
    return startupProblems;
  }

  const content = await fs.readFile(skillFile, "utf8");
  const firstReadsMatch = content.match(
    /For a new session or after context loss, read these files from the local clone:\s*\n([\s\S]*?)\n\s*For /,
  );
  const firstReadsBlock = firstReadsMatch?.[1] || "";

  for (const repoPath of startupFirstReads) {
    if (!firstReadsBlock.includes(`\`${repoPath}\``)) {
      startupProblems.push({
        file: "skills/webnovel-handbook/SKILL.md",
        target: repoPath,
        sample: "skill minimal startup reads are missing a required thin entrypoint",
      });
    }
  }

  if (firstReadsBlock.includes("docs/workflows/57-knowledge-base-routing-consolidation-guide.md")) {
    startupProblems.push({
      file: "skills/webnovel-handbook/SKILL.md",
      target: "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
      sample: "routing guide should be conditional, not part of the minimal startup reads",
    });
  }

  if (!content.includes("For route-ambiguous tasks, knowledge-base maintenance, index governance")) {
    startupProblems.push({
      file: "skills/webnovel-handbook/SKILL.md",
      target: "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
      sample: "skill is missing the conditional routing-guide trigger",
    });
  }

  return startupProblems;
}

async function checkStartupReadingConsistency() {
  const startupProblems = [];
  const startupBlocks = [
    {
      file: "AGENTS.md",
      requiredPaths: startupFirstReads,
      startMarker: "## 每次先读",
      endMarker: "`docs/sources/01-source-inventory.md` 是大文件",
      disallowedDefaultPaths: largeConditionalStartupPaths,
      missingBlockSample: "AGENTS.md is missing the minimal first-read section",
    },
    {
      file: "docs/00-index.md",
      requiredPaths: startupFirstReads,
      startMarker: "## 0. 先读结论",
      endMarker: "不要默认整读以下大文件",
      disallowedDefaultPaths: largeConditionalStartupPaths,
      missingBlockSample: "docs/00-index.md is missing the minimal first-read conclusion",
    },
    {
      file: "skills/webnovel-handbook/SKILL.md",
      requiredPaths: startupFirstReads,
      startMarker:
        "For a new session or after context loss, read these files from the local clone:",
      endMarker: "For route-ambiguous tasks",
      disallowedDefaultPaths: [
        ...largeConditionalStartupPaths,
        "docs/workflows/57-knowledge-base-routing-consolidation-guide.md",
      ],
      missingBlockSample: "skill entrypoint is missing the minimal first-read block",
    },
    {
      file: "README.md",
      requiredPaths: startupFirstReads,
      startMarker: "## 快速使用",
      endMarker: "更完整的阅读路线",
      disallowedDefaultPaths: [sourceInventoryPath],
      missingBlockSample: "README.md is missing the quick-use routing block",
    },
  ];

  for (const {
    file,
    requiredPaths,
    startMarker,
    endMarker,
    disallowedDefaultPaths,
    missingBlockSample,
  } of startupBlocks) {
    const absolutePath = path.join(repoRoot, file);

    if (!(await exists(absolutePath))) {
      continue;
    }

    const content = await fs.readFile(absolutePath, "utf8");
    const block = extractBlock(content, startMarker, endMarker);

    if (!block) {
      startupProblems.push({
        file,
        sample: missingBlockSample,
      });
      continue;
    }

    for (const repoPath of requiredPaths) {
      if (!block.includes(repoPath)) {
        startupProblems.push({
          file,
          target: repoPath,
          sample: "minimal startup reading route is missing a required thin entrypoint",
        });
      }
    }

    for (const repoPath of disallowedDefaultPaths) {
      if (block.includes(repoPath)) {
        startupProblems.push({
          file,
          target: repoPath,
          sample: "large or conditional document appears in the default startup reading block",
        });
      }
    }
  }

  return startupProblems;
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

    if (!packageScript.includes("validateSkillEntryNames")) {
      packagingProblems.push({
        file: packageScriptRepoPath,
        sample: "package script does not validate lightweight skill entry names",
      });
    }

    if (!packageScript.includes("readZipEntryNames")) {
      packagingProblems.push({
        file: packageScriptRepoPath,
        sample: "package script does not inspect the generated zip entry list",
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

async function checkPackageJsonScripts() {
  const packageProblems = [];
  const packageJsonPath = path.join(repoRoot, "package.json");
  const requiredScripts = new Map([
    ["verify", "node scripts/verify-maintenance.mjs"],
    ["check", "node scripts/check-handbook-consumability.mjs"],
    ["package-skill", "node scripts/package-skill.mjs"],
    ["sync-skill", "node scripts/sync-installed-skill.mjs --write"],
    ["sync-skill:check", "node scripts/sync-installed-skill.mjs --check"],
  ]);

  if (!(await exists(packageJsonPath))) {
    packageProblems.push({
      file: "package.json",
      sample: "package.json is missing; maintenance commands lack a unified npm entrypoint",
    });
    return packageProblems;
  }

  let packageJson;
  try {
    packageJson = JSON.parse(await fs.readFile(packageJsonPath, "utf8"));
  } catch (error) {
    packageProblems.push({
      file: "package.json",
      sample: `package.json is not valid JSON: ${error instanceof Error ? error.message : error}`,
    });
    return packageProblems;
  }

  if (packageJson.license !== "MIT") {
    packageProblems.push({
      file: "package.json",
      sample: "package.json license should be MIT",
    });
  }

  for (const [scriptName, expectedCommand] of requiredScripts.entries()) {
    if (packageJson.scripts?.[scriptName] !== expectedCommand) {
      packageProblems.push({
        file: "package.json",
        target: scriptName,
        sample: `expected npm script: ${expectedCommand}`,
      });
    }
  }

  return packageProblems;
}

async function checkChangelogDateHeadingUniqueness() {
  const duplicateDateHeadingProblems = [];
  const changelogPath = path.join(repoRoot, "CHANGELOG.md");

  if (!(await exists(changelogPath))) {
    return duplicateDateHeadingProblems;
  }

  const lines = (await fs.readFile(changelogPath, "utf8")).split(/\r?\n/);
  const seen = new Map();
  const dateHeadingPattern = /^##\s+(\d{4}-\d{2}-\d{2})\s*$/;

  for (const [index, line] of lines.entries()) {
    const match = line.match(dateHeadingPattern);
    if (!match) {
      continue;
    }

    const date = match[1];
    const previousLine = seen.get(date);
    if (previousLine !== undefined) {
      duplicateDateHeadingProblems.push({
        file: "CHANGELOG.md",
        line: index + 1,
        target: date,
        sample: "duplicate changelog date heading; previous occurrence is on line " + previousLine,
      });
      continue;
    }

    seen.set(date, index + 1);
  }

  return duplicateDateHeadingProblems;
}

async function checkChangelogSubsectionHeadingUniqueness() {
  const duplicateSubsectionHeadingProblems = [];
  const changelogPath = path.join(repoRoot, "CHANGELOG.md");

  if (!(await exists(changelogPath))) {
    return duplicateSubsectionHeadingProblems;
  }

  const lines = (await fs.readFile(changelogPath, "utf8")).split(/\r?\n/);
  const sectionHeadingPattern = /^##\s+(.+?)\s*$/;
  const subsectionHeadingPattern = /^###\s+(.+?)\s*$/;
  let currentSection = "";
  let seenSubsections = new Map();

  for (const [index, line] of lines.entries()) {
    const sectionMatch = line.match(sectionHeadingPattern);
    if (sectionMatch) {
      currentSection = sectionMatch[1];
      seenSubsections = new Map();
      continue;
    }

    const subsectionMatch = line.match(subsectionHeadingPattern);
    if (!subsectionMatch || !currentSection) {
      continue;
    }

    const subsection = subsectionMatch[1];
    const previousLine = seenSubsections.get(subsection);
    if (previousLine !== undefined) {
      duplicateSubsectionHeadingProblems.push({
        file: "CHANGELOG.md",
        line: index + 1,
        target: `${currentSection} / ${subsection}`,
        sample: "duplicate changelog subsection heading inside one release section; previous occurrence is on line " + previousLine,
      });
      continue;
    }

    seenSubsections.set(subsection, index + 1);
  }

  return duplicateSubsectionHeadingProblems;
}

async function checkMarkdownSizeGovernance(markdownFiles) {
  const sizeProblems = [];
  const activeEntrypointBudgets = new Map([
    ["README.md", 10_000],
    ["AGENTS.md", 18_000],
    ["CHANGELOG.md", 8_000],
    ["docs/00-index.md", 28_000],
    ["docs/governance/99-decision-log.md", 10_000],
    ["docs/workflows/57-knowledge-base-routing-consolidation-guide.md", 24_000],
  ]);
  const allowedLargeMarkdownFiles = new Map([
    ["docs/sources/01-source-inventory.md", "source inventory; search only"],
    ["docs/templates/10-templates-and-checklists.md", "template warehouse; search by heading"],
    ["docs/decisions/2026-06.md", "frozen historical decision archive"],
    ["docs/governance/01-changelog-detail-archive.md", "changelog detail archive; read by date or keyword"],
    ["docs/navigation/00-expanded-topic-catalog.md", "expanded catalog; keyword search only"],
    ["docs/navigation/01-readme-details.md", "README overflow details; read by section"],
  ]);
  const docsIndexRequiredLargeDocRoutes = new Map([
    [
      "docs/navigation/01-readme-details.md",
      "README overflow details must remain explicitly routed as a non-default section read",
    ],
  ]);
  const routedLargeDocPattern =
    /(按需读取|定向读取|按标题|关键词|不要整篇|不作为默认整读|默认入口只读|冻结历史)/u;
  const largeMarkdownThreshold = 100_000;
  const docsIndexContent = await fs.readFile(
    path.join(repoRoot, "docs", "00-index.md"),
    "utf8",
  );
  const docsIndexLargeDocListBlock = extractBlock(
    docsIndexContent,
    "不要默认整读以下大文件",
    "### 0.1 路径约定",
  );
  const docsIndexLargeDocUsageBlock = extractBlock(
    docsIndexContent,
    "## 6. 大文件使用方式",
    "## 7. 新文件索引要求",
  );
  const changelogArchivePath = "docs/governance/01-changelog-detail-archive.md";
  const changelogContent = await fs.readFile(
    path.join(repoRoot, "CHANGELOG.md"),
    "utf8",
  );

  if (!changelogContent.includes(changelogArchivePath)) {
    sizeProblems.push({
      file: "CHANGELOG.md",
      target: changelogArchivePath,
      sample:
        "root changelog must stay as a summary and link to the routed detail archive",
    });
  }

  for (const [repoPath, reason] of docsIndexRequiredLargeDocRoutes) {
    if (
      !docsIndexLargeDocListBlock.includes(repoPath) ||
      !docsIndexLargeDocUsageBlock.includes(repoPath)
    ) {
      sizeProblems.push({
        file: "docs/00-index.md",
        target: repoPath,
        sample:
          `allowed large markdown (${reason}) must appear in both the ` +
          "non-default large-doc list and the large-file usage section",
      });
    }
  }

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);
    const { size } = await fs.stat(file);
    const activeBudget = activeEntrypointBudgets.get(repoPath);
    const largeDocReason = allowedLargeMarkdownFiles.get(repoPath);

    if (activeBudget !== undefined && size > activeBudget) {
      sizeProblems.push({
        file: repoPath,
        sample: `active entrypoint is ${size} bytes; budget is ${activeBudget} bytes, split or route through a thinner index`,
      });
    }

    if (size >= largeMarkdownThreshold && !largeDocReason) {
      sizeProblems.push({
        file: repoPath,
        sample: `large markdown file is ${size} bytes; add an explicit routing reason or split into smaller documents`,
      });
    }

    if (largeDocReason) {
      const content = await fs.readFile(file, "utf8");
      const opening = content.slice(0, 1200);
      if (!routedLargeDocPattern.test(opening)) {
        sizeProblems.push({
          file: repoPath,
          sample:
            `allowed large markdown (${largeDocReason}) is missing an opening routing note; ` +
            "state that agents should read it by heading, keyword, date, or section instead of full loading",
        });
      }
    }
  }

  return sizeProblems;
}

async function checkEntrypointLineLengthGovernance() {
  const lineLengthProblems = [];
  const lineLengthBudgets = new Map([
    ["README.md", 360],
    ["AGENTS.md", 360],
    ["CHANGELOG.md", 360],
    ["docs/00-index.md", 420],
    ["docs/governance/99-decision-log.md", 360],
    ["docs/workflows/57-knowledge-base-routing-consolidation-guide.md", 360],
  ]);

  for (const [repoPath, budget] of lineLengthBudgets) {
    const absolutePath = path.join(repoRoot, ...repoPath.split("/"));
    const content = await fs.readFile(absolutePath, "utf8");
    const lines = content.split(/\n/);

    for (const [index, line] of lines.entries()) {
      const lineLength = [...line].length;
      if (lineLength <= budget) {
        continue;
      }

      lineLengthProblems.push({
        file: repoPath,
        line: index + 1,
        target: `${lineLength} characters`,
        sample:
          `active entrypoint line exceeds ${budget} characters; ` +
          "split details into wrapped lines or a routed detail document",
      });
    }
  }

  return lineLengthProblems;
}

async function checkDocsNumericPrefixUniqueness(markdownFiles) {
  const duplicatePrefixProblems = [];
  const prefixesByDirectory = new Map();

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);

    if (!repoPath.startsWith("docs/")) {
      continue;
    }

    const fileName = path.basename(repoPath);
    const prefixMatch = fileName.match(/^(\d+)-/);

    if (!prefixMatch) {
      continue;
    }

    const directory = path.dirname(repoPath).replaceAll(path.sep, "/");
    const key = `${directory}/${prefixMatch[1]}`;
    const filesWithPrefix = prefixesByDirectory.get(key) || [];
    filesWithPrefix.push(repoPath);
    prefixesByDirectory.set(key, filesWithPrefix);
  }

  for (const [key, filesWithPrefix] of prefixesByDirectory.entries()) {
    if (filesWithPrefix.length <= 1) {
      continue;
    }

    duplicatePrefixProblems.push({
      file: key,
      sample: `duplicate numeric prefix in one docs directory: ${filesWithPrefix.join(", ")}`,
    });
  }

  return duplicatePrefixProblems;
}

async function checkDocsHeadingPrefixConsistency(markdownFiles) {
  const headingPrefixProblems = [];

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);

    if (!repoPath.startsWith("docs/")) {
      continue;
    }

    const fileName = path.basename(repoPath);
    const filePrefixMatch = fileName.match(/^(\d+)-/);

    if (!filePrefixMatch) {
      continue;
    }

    const firstHeading = (await fs.readFile(file, "utf8"))
      .split(/\r?\n/)
      .find((line) => line.startsWith("# "));
    const headingPrefixMatch = firstHeading?.match(/^#\s+(\d+)(?:[.．、]|\s)/);

    if (!headingPrefixMatch || headingPrefixMatch[1] === filePrefixMatch[1]) {
      continue;
    }

    headingPrefixProblems.push({
      file: repoPath,
      sample: `filename prefix is ${filePrefixMatch[1]}, first heading prefix is ${headingPrefixMatch[1]}: ${firstHeading}`,
    });
  }

  return headingPrefixProblems;
}

async function checkEntrypointHeadingNumberUniqueness(markdownFiles) {
  const duplicateHeadingNumberProblems = [];
  const numberedHeadingPattern = /^(#{2,6})\s+(\d+(?:\.\d+)*)(?:[.．、]|\s)/;

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);

    if (!numberedHeadingUniqueEntrypoints.has(repoPath)) {
      continue;
    }

    const seen = new Map();
    const lines = (await fs.readFile(file, "utf8")).split(/\r?\n/);

    for (const [index, line] of lines.entries()) {
      const match = line.match(numberedHeadingPattern);

      if (!match) {
        continue;
      }

      const key = `${match[1]} ${match[2]}`;
      const previous = seen.get(key);

      if (previous !== undefined) {
        duplicateHeadingNumberProblems.push({
          file: repoPath,
          line: index + 1,
          sample: `duplicate numbered heading ${key}; previous occurrence is on line ${previous}`,
        });
        continue;
      }

      seen.set(key, index + 1);
    }
  }

  return duplicateHeadingNumberProblems;
}

async function checkDocsStatusMetadata(markdownFiles) {
  const statusMetadataProblems = [];
  const statusPattern = /(^|\n)状态：\s*(已确认|候选|待确认)/;

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);

    if (!repoPath.startsWith("docs/")) {
      continue;
    }

    if (path.basename(repoPath).toLowerCase() === "readme.md") {
      continue;
    }

    const headingBlock = (await fs.readFile(file, "utf8"))
      .split(/\r?\n/)
      .slice(0, 12)
      .join("\n");

    if (!statusPattern.test(headingBlock)) {
      statusMetadataProblems.push({
        file: repoPath,
        sample: "formal docs file is missing 状态：已确认/候选/待确认 near the top",
      });
    }
  }

  return statusMetadataProblems;
}

function checkDocsFilenameConventions(markdownFiles) {
  const filenameConventionProblems = [];
  const docsFileNamePattern = /^[0-9a-z][0-9a-z.-]*[0-9a-z]\.md$/;
  const maxDocsFileNameLength = 160;

  for (const file of markdownFiles) {
    const repoPath = toRepoPath(file);

    if (!repoPath.startsWith("docs/")) {
      continue;
    }

    const fileName = path.basename(repoPath);

    if (fileName === "README.md") {
      continue;
    }

    if (!docsFileNamePattern.test(fileName)) {
      filenameConventionProblems.push({
        file: repoPath,
        sample: "docs filename should use lowercase ASCII letters, digits, hyphens, dots, and .md",
      });
    }

    if (fileName.includes("--")) {
      filenameConventionProblems.push({
        file: repoPath,
        sample: "docs filename should not contain repeated hyphens",
      });
    }

    if (fileName.length > maxDocsFileNameLength) {
      filenameConventionProblems.push({
        file: repoPath,
        sample: `docs filename is ${fileName.length} characters; keep it at or below ${maxDocsFileNameLength}`,
      });
    }
  }

  return filenameConventionProblems;
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
    missingRawRepoFilePaths,
    rootEntrypointLinkProblems,
    suspiciousMojibake,
    utf8BomFiles,
    crlfLineEndingFiles,
    publicHygieneResidue,
    missingDirectoryReadmeCoverage,
    missingEntrypoints,
    missingAgentsInstructionEntrypointCoverage,
    missingEntrypointRouteSignals,
    missingRootReadmeLinks,
    missingDirectoryIndexCoverage,
    missingDocsIndexRequiredEntrypointCoverage,
    missingDocsIndexMinimumReadEntrypointCoverage,
    defaultRouteLargeDocLeakageProblems,
    minimumReadingPackFieldStructureProblems,
    agentsRouteDelegationProblems,
    skillPackageProblems,
    skillStartupRoutingProblems,
    startupReadingConsistencyProblems,
    skillPackagingProblems,
    packageJsonProblems,
    changelogDateHeadingProblems,
    changelogSubsectionHeadingProblems,
    markdownSizeGovernanceProblems,
    entrypointLineLengthGovernanceProblems,
    docsNumericPrefixProblems,
    docsHeadingPrefixProblems,
    docsHeadingNumberProblems,
    docsStatusMetadataProblems,
    docsFilenameConventionProblems,
  ] =
    await Promise.all([
      checkMarkdownLinks(markdownFiles),
      checkRawRepoDocPaths(markdownFiles),
      checkRawRepoFilePaths(markdownFiles),
      checkRootEntrypointLinkSemantics(markdownFiles),
      checkMojibake(textFiles),
      checkUtf8Bom(textFiles),
      checkCrlfLineEndings(textFiles),
      checkPublicHygieneResidue(textFiles),
      checkDirectoryReadmeCoverage(markdownFiles),
      checkRequiredEntrypoints(),
      checkAgentsInstructionEntrypointCoverage(),
      checkRequiredEntrypointRouteSignals(),
      checkRootReadmeLinkCoverage(),
      checkDocsDirectoryIndexCoverage(),
      checkDocsIndexRequiredEntrypointCoverage(),
      checkDocsIndexMinimumReadEntrypointCoverage(),
      checkDefaultRouteLargeDocLeakage(),
      checkMinimumReadingPackFieldStructure(),
      checkAgentsRouteDelegation(),
      checkSkillPackageLayout(),
      checkSkillStartupRoutingConsistency(),
      checkStartupReadingConsistency(),
      checkSkillPackagingSetup(),
      checkPackageJsonScripts(),
      checkChangelogDateHeadingUniqueness(),
      checkChangelogSubsectionHeadingUniqueness(),
      checkMarkdownSizeGovernance(markdownFiles),
      checkEntrypointLineLengthGovernance(),
      checkDocsNumericPrefixUniqueness(markdownFiles),
      checkDocsHeadingPrefixConsistency(markdownFiles),
      checkEntrypointHeadingNumberUniqueness(markdownFiles),
      checkDocsStatusMetadata(markdownFiles),
      checkDocsFilenameConventions(markdownFiles),
    ]);

  printSection("Broken Markdown links", brokenLinks);
  printSection("Missing raw repo docs paths", missingRawDocPaths);
  printSection("Missing raw repo file paths", missingRawRepoFilePaths);
  printSection("Root entrypoint link semantic problems", rootEntrypointLinkProblems);
  printSection("Suspicious mojibake files", suspiciousMojibake);
  printSection("UTF-8 BOM files", utf8BomFiles);
  printSection("CRLF line ending files", crlfLineEndingFiles);
  printSection("Public hygiene residue", publicHygieneResidue);
  printSection(
    "Docs missing directory README coverage",
    missingDirectoryReadmeCoverage,
  );
  printSection("Missing required agent entrypoints", missingEntrypoints);
  printSection(
    "Missing AGENTS route entrypoint coverage",
    missingAgentsInstructionEntrypointCoverage,
  );
  printSection(
    "Missing required entrypoint route signals",
    missingEntrypointRouteSignals,
  );
  printSection("Missing root README links", missingRootReadmeLinks);
  printSection(
    "Docs top-level directories missing index coverage",
    missingDirectoryIndexCoverage,
  );
  printSection(
    "Docs index missing required entrypoint coverage",
    missingDocsIndexRequiredEntrypointCoverage,
  );
  printSection(
    "Docs index minimum reads missing entrypoint coverage",
    missingDocsIndexMinimumReadEntrypointCoverage,
  );
  printSection(
    "Default routes leaking large conditional docs",
    defaultRouteLargeDocLeakageProblems,
  );
  printSection(
    "Minimum reading pack field structure problems",
    minimumReadingPackFieldStructureProblems,
  );
  printSection("AGENTS task route delegation problems", agentsRouteDelegationProblems);
  printSection("Skill package layout problems", skillPackageProblems);
  printSection("Skill startup routing problems", skillStartupRoutingProblems);
  printSection(
    "Startup reading consistency problems",
    startupReadingConsistencyProblems,
  );
  printSection("Skill packaging setup problems", skillPackagingProblems);
  printSection("Package.json script problems", packageJsonProblems);
  printSection("Changelog duplicate date headings", changelogDateHeadingProblems);
  printSection(
    "Changelog duplicate subsection headings",
    changelogSubsectionHeadingProblems,
  );
  printSection("Markdown size governance problems", markdownSizeGovernanceProblems);
  printSection(
    "Entrypoint line length governance problems",
    entrypointLineLengthGovernanceProblems,
  );
  printSection("Docs numeric prefix problems", docsNumericPrefixProblems);
  printSection("Docs heading prefix problems", docsHeadingPrefixProblems);
  printSection("Entrypoint heading number problems", docsHeadingNumberProblems);
  printSection("Docs status metadata problems", docsStatusMetadataProblems);
  printSection("Docs filename convention problems", docsFilenameConventionProblems);

  const hasProblems =
    brokenLinks.length > 0 ||
    missingRawDocPaths.length > 0 ||
    missingRawRepoFilePaths.length > 0 ||
    rootEntrypointLinkProblems.length > 0 ||
    suspiciousMojibake.length > 0 ||
    utf8BomFiles.length > 0 ||
    crlfLineEndingFiles.length > 0 ||
    publicHygieneResidue.length > 0 ||
    missingDirectoryReadmeCoverage.length > 0 ||
    missingEntrypoints.length > 0 ||
    missingAgentsInstructionEntrypointCoverage.length > 0 ||
    missingEntrypointRouteSignals.length > 0 ||
    missingRootReadmeLinks.length > 0 ||
    missingDirectoryIndexCoverage.length > 0 ||
    missingDocsIndexRequiredEntrypointCoverage.length > 0 ||
    missingDocsIndexMinimumReadEntrypointCoverage.length > 0 ||
    defaultRouteLargeDocLeakageProblems.length > 0 ||
    minimumReadingPackFieldStructureProblems.length > 0 ||
    agentsRouteDelegationProblems.length > 0 ||
    skillPackageProblems.length > 0 ||
    skillStartupRoutingProblems.length > 0 ||
    startupReadingConsistencyProblems.length > 0 ||
    skillPackagingProblems.length > 0 ||
    packageJsonProblems.length > 0 ||
    changelogDateHeadingProblems.length > 0 ||
    changelogSubsectionHeadingProblems.length > 0 ||
    markdownSizeGovernanceProblems.length > 0 ||
    entrypointLineLengthGovernanceProblems.length > 0 ||
    docsNumericPrefixProblems.length > 0 ||
    docsHeadingPrefixProblems.length > 0 ||
    docsHeadingNumberProblems.length > 0 ||
    docsStatusMetadataProblems.length > 0 ||
    docsFilenameConventionProblems.length > 0;

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
