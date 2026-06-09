param(
  [string]$OutputPath
)

$ErrorActionPreference = "Stop"

$SkillRoot = Split-Path -Parent $PSScriptRoot
$RepoRoot = Split-Path -Parent $SkillRoot

if (-not $OutputPath -or $OutputPath.Trim().Length -eq 0) {
  $DistDir = Join-Path $RepoRoot "dist"
  $OutputPath = Join-Path $DistDir "webnovel-handbook-skill.zip"
} else {
  $OutputPath = [System.IO.Path]::GetFullPath($OutputPath)
  $DistDir = Split-Path -Parent $OutputPath
}

New-Item -ItemType Directory -Path $DistDir -Force | Out-Null

if (Test-Path -LiteralPath $OutputPath) {
  Remove-Item -LiteralPath $OutputPath -Force
}

$RequiredSkillFile = Join-Path $SkillRoot "SKILL.md"
if (-not (Test-Path -LiteralPath $RequiredSkillFile)) {
  throw "Missing required skill file: $RequiredSkillFile"
}

Compress-Archive -Path (Join-Path $SkillRoot "*") -DestinationPath $OutputPath -Force
Write-Host "Packaged skill: $OutputPath"
