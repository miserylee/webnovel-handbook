# workflows

状态：已确认

agent 工作流、项目初始化、章节生产、上下文打包、知识库路由和连载项目管理。

用途：作为 `docs/workflows/` 的分类入口，帮助 agent 按任务阶段选择项目流程、章节生产、上下文打包、知识库维护或连载管理路线。

本目录负责“怎么组织工作”，不是具体写法本身。正文质量去 `../core-writing/README.md`，读者反馈去 `../feedback-revision/README.md`，市场包装去 `../market-serialization/README.md`。

## 1. 先按任务阶段选入口

| 任务 | 先读 | 作用 |
|---|---|---|
| 不确定该读哪些专题 | `57-knowledge-base-routing-consolidation-guide.md` | 最小阅读包、专题准入、避免无限发散 |
| 需要组装提示词和上下文 | `36-prompt-context-packaging.md` | 任务阶段、来源优先级、已确认事实、输出契约 |
| 从零开书或重定方向 | `35-ai-agent-novel-creation-workflow.md`、`43-commercial-project-greenlight-scorecard.md` | 创作总流程、商业立项和开书门槛 |
| 初始化单本小说项目 | `44-single-novel-project-initialization-package.md`、`64-single-novel-project-document-granularity.md` | 项目文档包、短文档、多索引和台账结构 |
| 第一章是否可以开写 | `45-first-chapter-task-brief-production-gate.md` | 第一章任务单、生产许可和缺口诊断 |
| 章节生产和多 agent 交接 | `38-chapter-production-pipeline-agent-handoff.md`、`58-integrated-drafting-beta-review-revision-workflow.md` | 写手、试读、审稿、修订和交接质量闸门 |
| 连载中动态调整项目 | `65-serial-project-kanban-change-control.md` | 看板、WIP 限制、变更控制、完成定义和复盘 |
| agent 自己要检索资料 | `107-agent-task-routing-retrieval-order-context-assembly.md` | 任务路由、检索顺序和上下文装配 |

## 2. 推荐链路

### 2.1 知识库维护

```text
57 路由收束 -> 107 检索顺序 -> 目标目录 README -> 目标专题 -> 必要时更新索引/来源/变更记录
```

适合：整理文档、检查索引、决定是否新增专题、修复路径缺链。

### 2.2 开新书

```text
35 总流程 -> 43 立项评分 -> 44 项目初始化 -> 45 第一章任务单 -> 36 上下文打包
```

适合：用户说“想开书”“帮我写第一章”“先试写一下”。缺项目包时，不直接写正式正文。

### 2.3 写章节

```text
36 上下文打包 -> 38 章节流水线 -> 58 写手/试读/审稿/修订闭环 -> 65 看板回写
```

适合：起草、续写、审稿、改稿一体化执行。章节完成后要回写台账、任务状态和后续承接点。

### 2.4 连载期项目管理

```text
64 短文档颗粒度 -> 65 看板变更控制 -> 57 路由收束 -> 107 上下文装配
```

适合：大纲、细纲、章节排表、台账、读者反馈和作者新想法都在连载中动态变化时。

## 3. 文件名注意

本目录存在历史重复编号，必须按完整文件名区分：

| 文件 | 读它的场景 |
|---|---|
| `57-knowledge-base-routing-consolidation-guide.md` | 知识库路由、收束、新专题准入和最小阅读包 |
| `66-long-timeskip-state-compression.md` | 长时间跳跃、状态压缩和剧情跨期承接 |
| `58-integrated-drafting-beta-review-revision-workflow.md` | 写手、试读、审稿、改稿一体化闭环 |
| `67-training-growth-anti-padding.md` | 修炼、训练、成长线防水和阶段回报 |
| `64-single-novel-project-document-granularity.md` | 单本小说项目短文档、多索引和巨型文件治理 |
| `68-iconic-scene-character-highlight-shareable-moment.md` | 名场面、人物高光和可传播瞬间 |

后续新增文件应避免复用已有编号；历史重复编号暂不重排时，所有索引必须写完整文件名。

## 4. 常见误用

- 不要只读 `35` 就直接写正文；新书缺口未补齐时，要先进入 `44` 和 `45`。
- 不要把 `36` 当提示词模板大全；它负责上下文边界和输出契约，具体模板去 `../templates/README.md`。
- 不要把 `38` 和 `58` 分开让用户手动切换读者群、编辑部和写手上下文；默认应在同一闭环内完成。
- 不要让 `65` 的看板替代正文判断；看板只管任务流转，正文质量仍要回到 `../core-writing/README.md` 和 `../feedback-revision/README.md`。
- 不要在连载中把大纲、细纲或排表视为一次性定稿；任何内容都可以调整，但必须留痕并回写台账。

## 5. 最小读取建议

知识库维护：`57-knowledge-base-routing-consolidation-guide.md` + 目标目录 README。  
开书准备：`35` + `43` + `44` + `45`。  
章节生产：`36` + `38` + `58-integrated`。  
项目管理：`64-single-novel-project-document-granularity.md` + `65`。  
agent 检索装配：`107` + `36`。

## 补充流程入口

| 文件 | 什么时候读 |
|---|---|
| `03-project-workflow.md` | 需要了解早期项目工作流、从资料到开书准备的基础流程，或追溯旧项目初始化链路时读取。新项目优先读 `44-single-novel-project-initialization-package.md` 和 `64-single-novel-project-document-granularity.md`。 |
