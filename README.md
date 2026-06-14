# webnovel-handbook

面向 AI agents 的中文网文创作知识库。

这个仓库不是单本小说项目，而是一套给 AI 写手、审稿 agent、试读 agent、修订 agent 和小说项目初始化 agent 使用的权威参考资料。目标是帮助 agent 写出更像真人作者、更商业化、更连贯、更适合连载的中文网文。

## 适合谁用

- AI agents：起草、续写、审稿、改稿、搭建小说项目、维护连续性台账。
- 作者和编辑：把零散写作经验整理成可执行流程。
- 写作工具开发者：接入中文网文工作流、模板和质量检查标准。

## 快速使用

不要把整个仓库塞进上下文。默认按渐进式披露读取：

1. 读 [AGENTS.md](AGENTS.md)。
2. 读 [docs/00-index.md](docs/00-index.md) 判断任务阶段和最小阅读包。
3. 写稿、续写、审稿、改稿优先进入 [docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md](./docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md)。
4. 人物、对白、人味、降低 AI 味优先读 [docs/core-writing/11-human-writing-upgrade.md](./docs/core-writing/11-human-writing-upgrade.md)、[docs/core-writing/37-project-style-bible-character-voice.md](./docs/core-writing/37-project-style-bible-character-voice.md)、[docs/core-writing/59-dialogue-comparison-reference.md](./docs/core-writing/59-dialogue-comparison-reference.md)。
5. 需要找大量专题时，再定向检索 [docs/navigation/00-expanded-topic-catalog.md](./docs/navigation/00-expanded-topic-catalog.md)。

更完整的阅读路线见 [docs/navigation/01-readme-details.md](./docs/navigation/01-readme-details.md)。

## 核心入口

- [docs/00-index.md](docs/00-index.md)：渐进式启动索引。
- [docs/navigation/00-expanded-topic-catalog.md](./docs/navigation/00-expanded-topic-catalog.md)：扩展专题目录，按需检索。
- [docs/workflows/35-ai-agent-novel-creation-workflow.md](./docs/workflows/35-ai-agent-novel-creation-workflow.md)：AI agents 小说创作总流程。
- [docs/workflows/44-single-novel-project-initialization-package.md](./docs/workflows/44-single-novel-project-initialization-package.md)：单本小说项目初始化最小文档包。
- [docs/workflows/45-first-chapter-task-brief-production-gate.md](./docs/workflows/45-first-chapter-task-brief-production-gate.md)：第一章任务单与生产许可。
- [docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md](./docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md)：写手、试读、审稿、改稿一体化闭环。
- [docs/templates/10-templates-and-checklists.md](./docs/templates/10-templates-and-checklists.md)：模板仓库，只按需检索。
- [docs/governance/99-decision-log.md](./docs/governance/99-decision-log.md)：活跃决策短索引。

## 关键原则

- 人味优先：人物要像在具体关系和压力里活着，不是替作者讲道理。
- 降低 AI 味：避免全员同声、抽象总结、成片短句、纪要式证据链和无功能漂亮句。
- 逻辑通顺：新信息有来源，动作顺序可拍，前后场有因果。
- 读者爱看：每章要有承诺、进度、回报和下一章欲望。
- 动态连载：大纲、细纲和章节排表是活文档，可以调整，但必须留痕。
- 渐进式读取：先最小阅读包，再目标专题，不默认整读大文件。

## 维护检查

- Skill 分发入口：[skills/webnovel-handbook/SKILL.md](skills/webnovel-handbook/SKILL.md)。
- 调整索引、路径或 skill 入口后，可运行 `node scripts/check-handbook-consumability.mjs` 检查 Markdown 本地链接、本仓库 `docs/...md` 裸路径、目录 README 覆盖、同一 `docs` 分类目录内编号唯一、文件名编号与标题编号一致、关键 agent 入口、`docs` 一级目录索引覆盖、skill 包布局、skill 打包设置、活跃入口体积护栏、超大 Markdown 白名单、UTF-8 BOM、CRLF 换行、常见编码污染和开源去身份化残留。
- 分发 skill 前，可运行 `node scripts/package-skill.mjs` 生成 `dist/webnovel-handbook-skill.zip`；脚本会反读 zip 目录，确认根层包含 `SKILL.md`，且没有把 `docs/`、仓库级 `scripts/` 或其他仓库内容误打进轻量 skill 包。
- 本机已安装 skill 需要同步时，可运行 `node scripts/sync-installed-skill.mjs --check` 或 `node scripts/sync-installed-skill.mjs --write`；默认目标是 `~/.agents/skills/webnovel-handbook/SKILL.md`，也可用 `--target` 指定。

## 开源状态

- License: [MIT](LICENSE)
- 主要语言：中文
- 主要用途：中文网文创作知识库与 agent 工作流
- 协作入口：[AGENTS.md](AGENTS.md)、[CONTRIBUTING.md](CONTRIBUTING.md)、[CHANGELOG.md](CHANGELOG.md)、[ROADMAP.md](ROADMAP.md)
- 开源治理：[SOURCE_POLICY.md](SOURCE_POLICY.md)、[SAFETY.md](SAFETY.md)、[DEIDENTIFICATION.md](DEIDENTIFICATION.md)、[SECURITY.md](SECURITY.md)、[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
- 详细贡献、安全、来源和去身份化规则见 [docs/navigation/01-readme-details.md](./docs/navigation/01-readme-details.md)
