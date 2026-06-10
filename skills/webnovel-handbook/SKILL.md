---
name: webnovel-handbook
description: >-
  Use when working on Chinese webnovel projects or AI-agent novel workflows:
  planning a new webnovel, drafting or continuing chapters, running internal
  beta-read/review/revision loops, diagnosing reader feedback, maintaining
  continuity ledgers, or routing to the Chinese webnovel handbook. This skill is
  a lightweight entrypoint: it should clone or update the handbook repository
  into a local cache directory, then search and read local files on demand.
metadata:
  short-description: 中文网文创作知识库入口
---

# Webnovel Handbook Skill

This is a lightweight entrypoint skill. Do not treat this skill package as the full knowledge base.

The full handbook should live in a local cache directory and be searched/read from there on demand.

## Repository

Default upstream repository:

`https://github.com/miserylee/webnovel-handbook.git`

Local cache directory:

`~/.webnovel-handbook/repo`

Use this fixed local clone location across agent runtimes. Expand `~` to the current user's home directory.

Do not require project configuration, environment variables, or runtime-specific cache discovery for normal use. If the user explicitly asks to use another location, follow that instruction for the current task, but keep `~/.webnovel-handbook/repo` as the generic default.

## Startup behavior

When this skill is triggered:

1. Check whether the handbook repository exists at the local cache directory.
2. If it does not exist, clone the upstream repository into that directory.
3. If it already exists, update it when network access is available and the user has not asked for offline mode.
4. Read from the local clone, not from the skill zip package.
5. Do not load the whole repository into context. Route first, then read the minimum relevant files.

If network access is unavailable, continue with the existing local clone if present. If no clone exists, explain that the handbook cache is missing and ask the user to provide or clone it.

## Required first reads from the local clone

For a new session or after context loss, read these files from the local clone:

1. `README.md`
2. `AGENTS.md`
3. `docs/00-index.md`
4. `docs/57-knowledge-base-routing-consolidation-guide.md`

For writing, continuation, review, beta-read, or revision tasks, also read:

- `docs/58-integrated-drafting-beta-review-revision-workflow.md`
- `docs/06-ai-writing-guidelines.md`
- `docs/11-human-writing-upgrade.md`

If the user says the draft feels AI-like, bland, smooth-but-fake, generic, characterless, emotionally thin, or too templated, treat `docs/11-human-writing-upgrade.md` as mandatory and do not handle the issue as sentence polishing only.

If the user says the draft has logic holes, misplaced continuity, unexplained sentence jumps, sudden facts, or lines that appear for no reason, treat this as a delivery blocker. Check scene causality, information source, character knowledge, physical action order, and sentence-level purpose before polishing.

## Operating rules

Priority order:

1. User's current instruction.
2. The target novel project's facts, outline, continuity ledger, style rules, and chapter text.
3. Confirmed guidance in the local handbook clone.
4. Temporary inference, clearly marked as inference.

Use the handbook as an authoritative reference, but do not copy generic methodology into a target novel project unless the user asks for reusable project documentation.

## Integrated writing workflow

When asked to write or revise fiction, run one compact internal loop unless the user asks for more:

1. Anti-AI gate: before drafting, identify the scene-specific friction, character self-protection move, concrete object/action chain, emotional trigger, and one controlled imperfection that should prevent generic smoothness.
2. Logic gate: identify the previous-scene carryover, current scene cause-effect chain, information sources, character knowledge limits, physical action order, and why each key sentence exists now.
3. Writer pass: produce or revise the chapter according to the project facts, outline, genre promise, scene goal, anti-AI gate, and logic gate.
4. Beta-reader pass: simulate target-reader reactions, focusing on hook, clarity, emotional pull, character vividness, chapter-end momentum, whether the prose feels like a prompt expansion, and whether any line appears unearned.
5. Editor pass: check commercial readability, continuity, pacing, stakes, redundancy, AI-like blandness, logic holes, and unexplained jumps.
6. Revision pass: apply the highest-impact fixes directly instead of only reporting problems. If AI-like blandness is high, fix scene causality, character reaction, dialogue texture, and concrete action before polishing sentences. If logic is broken, fix the cause-effect chain before changing style.
7. Deliver the result with a short change note, unresolved risks, and any continuity-ledger updates the target project should record.

Do not present a chapter as finished if the internal anti-AI pass still rates it as high or very high AI flavor. Revise once within scope, or report that the chapter has a structural human-writing blocker.

Do not present a chapter as finished if there are unresolved obvious logic holes, unexplained information jumps, physical action order errors, or sentences that cannot explain their function in the scene.

Do not make the user switch between separate reader-group, editorial, or drafting contexts unless they explicitly request separate reports.

## Public-source hygiene

When improving or distributing the handbook:

- Do not include private project names, local paths, chat identities, or unpublished source text.
- Abstract examples into reusable patterns before writing them into public docs.
- Register stable sources in `docs/01-source-inventory.md`.
- Record durable structural or governance decisions in `docs/99-decision-log.md`.

