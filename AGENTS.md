# 项目协作说明

这个项目是“学习如何写网文”的知识库。后续 AI 写网文、改网文、审稿或初始化小说项目时，可以把这里当作权威参考资料。

## 每次先读

新会话或上下文丢失后，先读：

1. `README.md`
2. `docs/00-index.md`
3. `docs/01-source-inventory.md`

再按任务读取专题：

- 起草或修订章节：`docs/02-webnovel-principles.md`、`docs/04-character-and-dialogue.md`、`docs/11-human-writing-upgrade.md`、`docs/06-ai-writing-guidelines.md`、`docs/10-templates-and-checklists.md`
- 搭建新小说项目：`docs/03-project-workflow.md`、`docs/07-continuity-ledger.md`
- 设计大纲或连载节奏：`docs/05-plot-and-serial-rhythm.md`
- 审稿、试读、判断 AI 含量：`docs/08-review-and-reader-feedback.md`、`docs/09-case-notes.md`

## 来源优先级

处理本知识库时，优先级如下：

1. 用户当前指令。
2. 本项目已经确认的文档。
3. 本地 `novel` skill 与其 references。
4. 旧小说项目、编辑部项目、读者群项目中已经沉淀的经验。
5. 临时笔记和未整理材料。

如果来源之间冲突，先写明冲突，再按用户最新决定或本项目 `99-decision-log.md` 里的已确认规则处理。

## 本项目的特殊性

`novel` skill 对单本小说项目的规则是：不要把通用写作方法整段复制到项目文档里。但本项目不是单本小说，而是专门给后续 AI 写网文使用的知识库，所以允许把通用方法吸收、重组、展开，并写成详细参考。

写入时不要只复制来源原文。优先把内容整理成：

- 原则：这条规则解决什么问题。
- 用法：写作或审稿时怎么执行。
- 风险：违反后会出现什么读者体感。
- 检查问题：AI 或作者可以怎样自查。
- 案例：来自旧项目的可复用经验。

## 编码与语言

- 文档、笔记、模板默认使用中文。
- 状态标签使用“已确认”“候选”“待确认”。
- 文件读写使用 UTF-8。
- 英文只保留在文件名、代码、稳定技术术语或来源原名里。

## 维护规则

- 新增稳定结论要写进专题文档，不只留在聊天里。
- 新增来源要登记到 `docs/01-source-inventory.md`。
- 新增关键决策要记录到 `docs/99-decision-log.md`。
- 临时想法可以先放 `notes/`，但不能替代正式文档。
- 不创建 `final`、`v2` 这类重复文档名；需要版本脉络时写进决策记录或案例笔记。
- 如果用户指出“人物不活、剧情生硬、没有梗、情绪淡、读者不黏”，必须读取 `docs/11-human-writing-upgrade.md`，不要只做句子润色。
