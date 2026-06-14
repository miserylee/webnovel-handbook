# agent-operations

状态：已确认

agent 路由、任务装配、研究转化、上下文交接、系列化和 IP/完本复盘的导航入口。

本目录目前是“操作导航面板”，不是独立专题库。真正的执行规则分布在 `../workflows/`、`../market-serialization/`、`../reality-reference/`、`../feedback-revision/` 等目录。除非出现稳定高频的 agent 操作规则，否则不要在这里复制已有专题。

## 1. 先按 agent 任务选入口

| 任务 | 先读 | 作用 |
|---|---|---|
| agent 不知道该读哪些文档 | `../workflows/107-agent-task-routing-retrieval-order-context-assembly.md` | 任务路由、检索顺序、上下文装配和输出边界 |
| 需要把任务打包成可执行上下文 | `../workflows/36-prompt-context-packaging.md` | 阶段、来源优先级、已确认事实、材料边界和输出契约 |
| 知识库维护、避免无限发散 | `../workflows/57-knowledge-base-routing-consolidation-guide.md` | 最小阅读包、新专题准入、目录索引和收束规则 |
| 写稿、试读、审稿、改稿一体化 | `../workflows/58-integrated-drafting-beta-review-revision-workflow.md` | 不让用户在写手、读者群和编辑部之间切换 |
| 多 agent 章节交接 | `../workflows/38-chapter-production-pipeline-agent-handoff.md` | 写手、审稿、修订、连续性 agent 的输入输出 |
| 单本小说项目文档结构 | `../workflows/64-single-novel-project-document-granularity.md` | 短文档、多索引、台账拆分和避免巨型文件 |
| 连载项目任务流转 | `../workflows/65-serial-project-kanban-change-control.md` | 看板、WIP 限制、变更控制、完成定义和复盘 |
| 研究资料转成小说素材 | `../reality-reference/README.md`、`../workflows/57-knowledge-base-routing-consolidation-guide.md` | 先判叙事功能，再只提取行动链、证据链、人物冲突和安全边界 |
| 读者反馈进入改稿队列 | `../feedback-revision/README.md` | 审稿、评论聚类、反馈冲突、优先级队列和修订执行 |
| 完本、系列化、IP 资产复盘 | `../market-serialization/104-completion-postmortem-lessons-learned-next-project-transfer.md`、`../market-serialization/109-series-shared-universe-cross-book-continuity-entry.md`、`../market-serialization/110-ip-adaptation-cross-media-assets-derivative-development.md` | 下本迁移、跨书连续性和衍生资产 |

## 2. 推荐链路

### 2.1 普通小说任务 agent

```text
107 检索装配 -> 36 上下文打包 -> 目标目录 README -> 目标专题 -> 输出并回写项目台账
```

适合：写一章、改一章、审一章、补设定、处理反馈。

### 2.2 知识库维护 agent

```text
57 路由收束 -> docs/00-index.md -> 目标目录 README -> 目标专题 -> 检查入口/来源/变更记录
```

适合：新增资料、整理目录、检查路径缺链、压缩大文档、更新 skill 入口。

### 2.3 单本小说项目接入 agent

```text
44 项目初始化 -> 64 项目文档颗粒度 -> 65 看板 -> 58 写作闭环 -> 07 连续性台账
```

适合：把本知识库接入一个具体小说项目，让后续 agent 能持续写、审、改、回写。

### 2.4 研究转写 agent

```text
57 判断叙事功能 -> reality-reference 定位事实专题 -> safety-research 查边界 -> scene/core/storycraft 转成可写场景
```

适合：把行业、县域、制度、职业和生活资料转成小说里能用的冲突、细节、证据和人物选择。

## 3. 常见误用

- 不要把整个知识库塞进上下文；agent 应先读启动索引，再读目录 README，再读目标专题。
- 不要把 `agent-operations` 当成新专题收纳箱；能由 `workflows`、`core-writing`、`feedback-revision` 或 `market-serialization` 承接的内容，不在这里重复写。
- 不要只输出建议，不回写索引、台账、来源或变更记录；agent 操作的核心是让后续 agent 接得上。
- 不要让研究资料直接进入正文；先转成叙事功能、人物冲突、证据链和安全边界。
- 不要把系列化/IP/完本复盘当作独立脑暴；必须先回到已完成正文事实、读者反馈和可迁移资产。

## 4. 新增本目录文件的门槛

只有满足以下条件，才在本目录新增正式文件：

- 它描述的是 agent 操作方式，而不是写作技巧、市场包装、现实资料或反馈修订本身。
- 现有 `../workflows/` 或其他目录无法承接。
- 它会被多个任务反复读取，且能明确写出入口场景。
- 新增后同步更新 `docs/00-index.md` 或本 README，以及必要的 `CHANGELOG.md`、来源或决策记录。

否则，优先更新目标目录 README 或对应专题。

## 5. 最小读取建议

agent 检索装配：`../workflows/107-agent-task-routing-retrieval-order-context-assembly.md` + `../workflows/36-prompt-context-packaging.md`。  
知识库维护：`../workflows/57-knowledge-base-routing-consolidation-guide.md` + 目标目录 README。  
单本项目接入：`../workflows/44-single-novel-project-initialization-package.md` + `../workflows/64-single-novel-project-document-granularity.md` + `../workflows/65-serial-project-kanban-change-control.md`。  
写稿闭环：`../workflows/58-integrated-drafting-beta-review-revision-workflow.md` + `../core-writing/README.md`。  
反馈修订：`../feedback-revision/README.md`。
