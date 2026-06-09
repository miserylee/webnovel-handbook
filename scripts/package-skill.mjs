#!/usr/bin/env node

import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";
import { promisify } from "node:util";

const deflateRaw = promisify(zlib.deflateRaw);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const skillRoot = path.join(repoRoot, "skills", "webnovel-handbook");
const outputPath = path.resolve(
  repoRoot,
  process.argv[2] || "dist/webnovel-handbook-skill.zip",
);

const requiredSkillFile = path.join(skillRoot, "SKILL.md");

function crc32(buffer) {
  let crc = 0xffffffff;

  for (const byte of buffer) {
    crc ^= byte;
    for (let index = 0; index < 8; index += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }

  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date) {
  const year = Math.max(date.getFullYear(), 1980);
  const dosTime =
    (date.getHours() << 11) |
    (date.getMinutes() << 5) |
    Math.floor(date.getSeconds() / 2);
  const dosDate =
    ((year - 1980) << 9) |
    ((date.getMonth() + 1) << 5) |
    date.getDate();

  return { dosDate, dosTime };
}

async function listFiles(directory, baseDirectory = directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await listFiles(absolutePath, baseDirectory)));
      continue;
    }

    if (entry.isFile()) {
      files.push({
        absolutePath,
        zipPath: path.relative(baseDirectory, absolutePath).replaceAll(path.sep, "/"),
      });
    }
  }

  return files.sort((left, right) => left.zipPath.localeCompare(right.zipPath));
}

function localFileHeader({ compressedSize, crc, dosDate, dosTime, nameBuffer, size }) {
  const header = Buffer.alloc(30);
  header.writeUInt32LE(0x04034b50, 0);
  header.writeUInt16LE(20, 4);
  header.writeUInt16LE(0, 6);
  header.writeUInt16LE(8, 8);
  header.writeUInt16LE(dosTime, 10);
  header.writeUInt16LE(dosDate, 12);
  header.writeUInt32LE(crc, 14);
  header.writeUInt32LE(compressedSize, 18);
  header.writeUInt32LE(size, 22);
  header.writeUInt16LE(nameBuffer.length, 26);
  header.writeUInt16LE(0, 28);
  return header;
}

function centralDirectoryHeader({
  compressedSize,
  crc,
  dosDate,
  dosTime,
  localHeaderOffset,
  nameBuffer,
  size,
}) {
  const header = Buffer.alloc(46);
  header.writeUInt32LE(0x02014b50, 0);
  header.writeUInt16LE(20, 4);
  header.writeUInt16LE(20, 6);
  header.writeUInt16LE(0, 8);
  header.writeUInt16LE(8, 10);
  header.writeUInt16LE(dosTime, 12);
  header.writeUInt16LE(dosDate, 14);
  header.writeUInt32LE(crc, 16);
  header.writeUInt32LE(compressedSize, 20);
  header.writeUInt32LE(size, 24);
  header.writeUInt16LE(nameBuffer.length, 28);
  header.writeUInt16LE(0, 30);
  header.writeUInt16LE(0, 32);
  header.writeUInt16LE(0, 34);
  header.writeUInt16LE(0, 36);
  header.writeUInt32LE(0, 38);
  header.writeUInt32LE(localHeaderOffset, 42);
  return header;
}

function endOfCentralDirectory({ centralDirectoryOffset, centralDirectorySize, entryCount }) {
  const header = Buffer.alloc(22);
  header.writeUInt32LE(0x06054b50, 0);
  header.writeUInt16LE(0, 4);
  header.writeUInt16LE(0, 6);
  header.writeUInt16LE(entryCount, 8);
  header.writeUInt16LE(entryCount, 10);
  header.writeUInt32LE(centralDirectorySize, 12);
  header.writeUInt32LE(centralDirectoryOffset, 16);
  header.writeUInt16LE(0, 20);
  return header;
}

async function main() {
  await fs.access(requiredSkillFile);

  const files = await listFiles(skillRoot);
  if (files.length === 0) {
    throw new Error(`No files found in skill directory: ${skillRoot}`);
  }

  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const file of files) {
    const data = await fs.readFile(file.absolutePath);
    const stat = await fs.stat(file.absolutePath);
    const compressed = await deflateRaw(data, { level: 9 });
    const nameBuffer = Buffer.from(file.zipPath, "utf8");
    const { dosDate, dosTime } = dosDateTime(stat.mtime);
    const crc = crc32(data);

    const localHeader = localFileHeader({
      compressedSize: compressed.length,
      crc,
      dosDate,
      dosTime,
      nameBuffer,
      size: data.length,
    });

    const centralHeader = centralDirectoryHeader({
      compressedSize: compressed.length,
      crc,
      dosDate,
      dosTime,
      localHeaderOffset: offset,
      nameBuffer,
      size: data.length,
    });

    localParts.push(localHeader, nameBuffer, compressed);
    centralParts.push(centralHeader, nameBuffer);
    offset += localHeader.length + nameBuffer.length + compressed.length;
  }

  const centralDirectoryOffset = offset;
  const centralDirectory = Buffer.concat(centralParts);
  const endHeader = endOfCentralDirectory({
    centralDirectoryOffset,
    centralDirectorySize: centralDirectory.length,
    entryCount: files.length,
  });

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, Buffer.concat([...localParts, centralDirectory, endHeader]));

  console.log(`Packaged skill: ${outputPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});


