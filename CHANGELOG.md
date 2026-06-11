# Changelog

本项目使用人工维护的变更记录，记录面向开源用户和 AI agents 的重要结构变化。

## Unreleased

### Added

- MIT License。
- 贡献指南 `CONTRIBUTING.md`。
- 来源与版权政策 `SOURCE_POLICY.md`。
- 安全与内容边界 `SAFETY.md`。
- 安全报告说明 `SECURITY.md`。
- 社区行为准则 `CODE_OF_CONDUCT.md`。
- 路线图 `ROADMAP.md`。
- GitHub PR 模板和 issue 模板。

### Changed

- README 增加开源使用、关键文件和 AI agent 消费路径。
- 仓库维护重心明确为收束、提纯和 agent 可消费。

### Removed

- 移除仅包含占位 README 的空内容目录：`notes/`、`cases/`、`prompts/`、`templates/`。

## 2026-06-10

### Added

- 新增根目录 `SKILL.md`，使本仓库可以作为 `webnovel-handbook` skill 分发给小说项目 agent 使用。
- 在 `README.md` 增加 skill 消费方式，强调按任务读取最小文档包，并默认接入“写手 + 试读 + 审稿 + 改稿”闭环。

## 2026-06-10

### Changed

- 将 skill 分发方案从“整个仓库作为 skill”调整为 `skill/` 轻量入口包。
- 轻量 skill 负责引导 agent clone/update 本仓库到本地缓存目录，再从本地文件按需检索知识库。

### Added

- 新增 `skill/scripts/package-skill.ps1`，用于将 `skill/` 打包为 `dist/webnovel-handbook-skill.zip`。
- 新增 `.gitignore` 规则，忽略打包生成的 zip 产物。

## 2026-06-10

### Changed

- 调整轻量 skill 的本地仓库路径策略：不再固定使用 Codex 目录，改为项目配置、环境变量、agent 标准缓存目录和操作系统缓存目录的优先级规则。

## 2026-06-10

### Changed

- 收束轻量 skill 的本地仓库路径策略：不再使用显式配置或环境变量优先级，统一固定为 `~/.webnovel-handbook/repo`。

## 2026-06-10

### Changed

- 将 skill 打包脚本从 `skill/scripts/` 迁移到仓库级 `scripts/`，避免维护脚本被打入 skill 分发包。
- 将打包脚本从 Windows PowerShell 改为跨平台 Node.js 脚本：`node scripts/package-skill.mjs`。

## 2026-06-10

### Changed

- 调整轻量 skill 包布局以兼容 `npx skills`：分发目录从 `skill/` 改为顶层 `webnovel-handbook/`，目录名与 skill name 保持一致。
- 更新 Node.js 打包脚本，使其从 `webnovel-handbook/` 目录生成 `dist/webnovel-handbook-skill.zip`。

## 2026-06-10

### Changed

- 调整 skill 包布局为 `npx skills` 默认扫描结构：`skills/webnovel-handbook/SKILL.md`。
- 更新打包脚本，使其从 `skills/webnovel-handbook/` 生成分发 zip。

## 2026-06-10

### Fixed

- 修复 `skills/webnovel-handbook/SKILL.md` frontmatter：将包含冒号的 `description` 改为 YAML block scalar，避免 `npx skills` 解析失败。
- 修复 `skills/webnovel-handbook/SKILL.md` 文件编码：确保文件以无 BOM UTF-8 写入，使文件开头第一个字符就是 `---`。

## 2026-06-10

### Changed

- 提升降 AI 味在 skill 和写稿闭环中的优先级：高 AI 味稿件不能作为定稿交付，必须先修人物反应、场景摩擦、动作链和情绪触发。
- 更新 `docs/06-ai-writing-guidelines.md`、`docs/11-human-writing-upgrade.md` 和 `docs/58-integrated-drafting-beta-review-revision-workflow.md`，明确降 AI 味不是终稿润色，而是起草前硬门槛。

## 2026-06-10

### Changed

- 将逻辑连续性提升为章节交付硬门槛：明显逻辑漏洞、前后错位、信息空降、动作顺序错误和无功能句不能作为定稿交付。
- 在 skill 入口、AI 写作指南和一体化写稿闭环中增加逻辑 gate，要求先修因果、信息来源和句子功能，再做文风润色。

## 2026-06-10

### Added

- 在审稿入口和一体化写稿闭环中补充审稿反例，帮助 agent 识别空泛审稿、误把通顺当合格、AI 味词句化处理、逻辑跳跃放行和无功能漂亮句保留等错误审查方式。
- 补充稿文本身的命中反例，覆盖逻辑跳跃、信息空降、角色知识越界、动作顺序错误、无功能漂亮句、AI 味情绪旁白、全员同声、证据链纪要、假章末钩子、主角被剧情推走、反派降智送证据和爽点未落袋。


## 2026-06-10

### Changed

- 新增章节字数与细纲门槛：普通可发布中文网文章节默认约 3000 字，常规目标区间为 2800-3500 字；短于 2500 字时优先检查细纲是否过薄。
- 新增短句节奏规则：禁止把提纲拆成成片短句，普通叙述必须有长短句变化、动作链承接和人物现场反应。

## 2026-06-11

### Added

- 新增顶尖网文短摘句示例：用单句级摘句拆解人物对白的说话动作、关系杠杆、句子形状和 agent 原创改写方法。

## 2026-06-11

### Changed

- 将“顶尖网文短摘句”从名句赏析升级为对白训练集：每条样本补充成立条件、AI 坏仿写、原创改写练习和可迁移规则，帮助 agent 学会人物说话的场景功能，而不是复读名句。

## 2026-06-12

### Changed

- 将人物对白训练的最高优先级调整为“自然度”：台词必须先像角色在当前关系、压力和信息条件下会说的话，再追求金句、压场、锋利或幽默。

## 2026-06-12

### Added

- 新增试写纠错沉淀样本：记录散文化物象、审判腔对白、短句切碎和直球功能动作四类问题，并给出通过版与可迁移规则。
- 新增“动作不要直球报功能”规则，要求录音、截图、证据、合同等功能性动作先像人物自然动作，再服务剧情机关。

## 2026-06-12

### Added

- 新增“职场对峙不要写成审讯台”试写纠错样本，强调老板甩锅、主角自保和反击台词都要保留真实关系里的试探、绕法和压力。
## 2026-06-12

### Added

- 新增试写纠错对比案例规范，要求同时保存 Agent 初稿和用户改稿，并记录差异分析与可迁移规则。
- 新增“合同数字与附件二”“客户报价甩锅”两个对比案例，用于训练职场对峙对白的自然度。
## 2026-06-12

### Added

- 新增 `docs/59-dialogue-comparison-reference.md`，作为对话样本对比参考书，集中保存 Agent 初稿、用户改稿、差异分析和可迁移规则。

### Changed

- 将对话样本对比从 `docs/04-character-and-dialogue.md` 中抽离为独立参考入口，并更新 README 与索引中的读取路线。