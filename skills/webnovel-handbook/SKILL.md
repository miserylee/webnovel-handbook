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


For new-book planning, project initialization, premise discussion, market positioning, character setup, outline design, or first-chapter preparation, also read:

- `docs/03-project-workflow.md`
- `docs/35-ai-agent-novel-creation-workflow.md`
- `docs/44-single-novel-project-initialization-package.md`
- `docs/10-templates-and-checklists.md`

Project discussion archive is mandatory. In the target novel project, write or update `docs/98-discussion-log.md` before ending the task. Record every substantive discussion item: user preferences, candidate ideas, rejected options, decision reasons, unresolved questions, source materials, and next actions. Stable decisions must also be promoted to `docs/99-decision-log.md` and the relevant project brief/outline files. Do not keep only the final brief and discard the discussion trail.

For writing, continuation, review, beta-read, or revision tasks, also read:

- `docs/58-integrated-drafting-beta-review-revision-workflow.md`
- `docs/06-ai-writing-guidelines.md`
- `docs/11-human-writing-upgrade.md`

If the user says the draft feels AI-like, bland, smooth-but-fake, generic, characterless, emotionally thin, or too templated, treat `docs/11-human-writing-upgrade.md` as mandatory and do not handle the issue as sentence polishing only.

If the user says the draft has logic holes, misplaced continuity, unexplained sentence jumps, sudden facts, or lines that appear for no reason, treat this as a delivery blocker. Check scene causality, information source, character knowledge, physical action order, and sentence-level purpose before polishing.

For full chapter drafting, apply a word-count and outline gate. Unless the user explicitly asks for a short scene, sample, outline expansion, or platform-specific short chapter, default to a publishable Chinese webnovel chapter around 3000 Chinese characters, with a normal target range of 2800-3500. A draft under 2500 Chinese characters should not be presented as a finished chapter by default; a draft under 2000 should be labeled as a fragment/short draft. If a chapter is too short, first diagnose whether the detailed outline is too thin: missing scene goal, resistance, failed attempt, consequence, emotional aftershock, payoff, or chapter-end pressure. Fix the chapter brief/detailed outline before expanding prose.

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
3. Word-count and outline gate: confirm the target length. If none is provided, use about 3000 Chinese characters for a normal publishable chapter. If the planned chapter cannot naturally reach 2500 characters, revise the chapter brief/detailed outline before drafting.
4. Writer pass: produce or revise the chapter according to the project facts, outline, genre promise, scene goal, anti-AI gate, logic gate, and target length.
5. Beta-reader pass: simulate target-reader reactions, focusing on hook, clarity, emotional pull, character vividness, chapter-end momentum, whether the prose feels like a prompt expansion, whether any line appears unearned, and whether the chapter feels complete rather than fragmentary.
6. Editor pass: check commercial readability, continuity, pacing, stakes, redundancy, AI-like blandness, logic holes, unexplained jumps, and whether the draft is too short because the outline is underbuilt.
7. Revision pass: apply the highest-impact fixes directly instead of only reporting problems. If AI-like blandness is high, fix scene causality, character reaction, dialogue texture, and concrete action before polishing sentences. If logic is broken, fix the cause-effect chain before changing style. If the draft is too short, first repair the chapter brief/detailed outline, then expand with necessary scene beats rather than filler.
8. Deliver the result with a short change note, unresolved risks, approximate word count, and any continuity-ledger updates the target project should record.

Do not present a chapter as finished if the internal anti-AI pass still rates it as high or very high AI flavor. Revise once within scope, or report that the chapter has a structural human-writing blocker.

Do not present a chapter as finished if there are unresolved obvious logic holes, unexplained information jumps, physical action order errors, or sentences that cannot explain their function in the scene.

Do not present a normal full chapter as finished if it is obviously below the publishable length gate, unless the user explicitly requested a short chapter or fragment. If the shortfall comes from a thin detailed outline, revise the outline first.

Do not make the user switch between separate reader-group, editorial, or drafting contexts unless they explicitly request separate reports.

## Public-source hygiene

When improving or distributing the handbook:

- Do not include private project names, local paths, chat identities, or unpublished source text.
- Abstract examples into reusable patterns before writing them into public docs.
- Register stable sources in `docs/01-source-inventory.md`.
- Record durable structural or governance decisions in `docs/99-decision-log.md`.

## Drafting prose rhythm guardrail

When drafting fiction, do not produce slabs of short, same-length declarative sentences. Short sentences are allowed for impact, interruption, panic, punchlines, or hard turns, but they must not become the default texture. Before final delivery, vary sentence length, merge adjacent mechanical beats, add causal or emotional transitions, and make paragraphs read like a person experiencing a scene rather than an outline being chopped into lines.

## Dialogue quality and exemplar guardrail

When the user says character speech is weak, samey, fake, too explanatory, or AI-like, treat dialogue quality as a structural blocker. Read `docs/04-character-and-dialogue.md` and `docs/37-project-style-bible-character-voice.md`. Do not solve it by adding catchphrases or famous-line imitation. Natural speech is the first gate: every important line must sound like this character would say it under the current relationship, pressure, knowledge limit, and emotional state. Then identify the speaker's agenda, concealment, pressure, relationship lever, line shape, action beat, and expected reaction. If using external high-performing webnovel dialogue as reference, use only short excerpts as functional examples and produce original project-specific dialogue.
