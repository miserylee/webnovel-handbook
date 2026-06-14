# 00. 项目索引（渐进式入口）

状态：已确认  
用途：给 AI agents 用极少上下文找到本次任务真正需要的知识。本文是启动索引，不是全量目录。

## 0. 先读结论

每次新会话或上下文丢失后，默认只读：

1. `README.md`
2. `AGENTS.md`
3. `docs/00-index.md`

不要默认整读以下大文件：

- `docs/sources/01-source-inventory.md`：只在登记、核查或引用来源时定向检索。
- `docs/templates/10-templates-and-checklists.md`：只在需要某张模板/检查卡时按标题检索。
- `docs/navigation/00-expanded-topic-catalog.md`：只在本文件无法定位专题时按关键词检索。
- `docs/navigation/01-readme-details.md`：只在根 README 信息不足、需要详细贡献/安全/维护说明或追溯下沉记录时按小节读取。
- 大量县域、行业、合规专题：只在章节明确涉及该场景时读取目标专题。

### 0.1 路径约定

- `docs/...` 默认表示本知识库仓库内路径，应该能从仓库根目录直接找到。
- `<novel-project-docs>/...` 表示单本小说项目自己的 `docs` 目录，不是本知识库文件；维护单本项目时，按目标项目根目录落地。

## 1. 渐进式披露流程

```text
任务阶段 -> 最小阅读包 -> 可选专题 -> 专业事实专题 -> 来源核查
```

执行规则：

1. 先判断用户要的是开书、初始化、起草、续写、审稿、修订、包装、运营、数据复盘，还是维护知识库。
2. 只读取对应阶段的最小阅读包，不把全库塞进上下文。
3. 如果问题集中在人物、人味、对白、逻辑或读者黏性，优先读取写作质量专题，不先跳到行业资料。
4. 如果需要真实制度、行业、地域或职业细节，先用 `docs/navigation/00-expanded-topic-catalog.md` 或本地搜索定位专题，再读取单个目标文档。
5. 新增文件必须能从本文、README、相关专题、模板文档或决策记录找到入口；没有索引路径的文件不合格。

## 2. 常用任务最小阅读包

先匹配任务标题，再读取对应小节。每个任务只读“先读”字段；“按需追加”必须有明确场景触发。

### 2.1 知识库维护、索引治理

先读：

- `README.md`
- `AGENTS.md`
- `docs/00-index.md`
- `docs/workflows/57-knowledge-base-routing-consolidation-guide.md`
- `docs/governance/99-decision-log.md`

按需追加：

- 被修改的目标专题
- `SOURCE_POLICY.md`
- `DEIDENTIFICATION.md`
- `SAFETY.md`
- `node scripts/check-handbook-consumability.mjs`

不要默认读：

- `docs/sources/01-source-inventory.md` 全文
- `docs/templates/10-templates-and-checklists.md` 全文

### 2.2 开新书、重定方向

先读：

- `docs/workflows/35-ai-agent-novel-creation-workflow.md`
- `docs/workflows/43-commercial-project-greenlight-scorecard.md`
- `docs/workflows/44-single-novel-project-initialization-package.md`
- `docs/workflows/45-first-chapter-task-brief-production-gate.md`

按需追加：

- `docs/market-serialization/29-reader-expectation-genre-promise-selling-point.md`
- `docs/market-serialization/13-genre-patterns.md`
- `docs/market-serialization/16-title-blurb-tag-packaging.md`
- `docs/market-serialization/17-cover-visual-packaging.md`
- `docs/market-serialization/34-market-research-comp-analysis.md`

不要默认读：

- 直接写 `ch001.md`

### 2.3 单本小说项目初始化

先读：

- `docs/workflows/44-single-novel-project-initialization-package.md`
- `docs/workflows/64-single-novel-project-document-granularity.md`
- `docs/workflows/65-serial-project-kanban-change-control.md`
- `docs/workflows/35-ai-agent-novel-creation-workflow.md`
- `docs/core-writing/07-continuity-ledger.md`
- `docs/core-writing/37-project-style-bible-character-voice.md`

按需追加：

- `docs/templates/10-templates-and-checklists.md` 中的项目模板
- `docs/workflows/45-first-chapter-task-brief-production-gate.md` 的第一章许可

不要默认读：

- 把本知识库通用方法整段搬进项目

### 2.4 起草或续写章节

先读：

- `docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md`
- `docs/core-writing/06-ai-writing-guidelines.md`
- `docs/core-writing/11-human-writing-upgrade.md`
- `docs/core-writing/37-project-style-bible-character-voice.md`
- `docs/core-writing/07-continuity-ledger.md`
- `docs/core-writing/32-chapter-paragraph-mobile-reading-experience.md`

按需追加：

- `docs/core-writing/59-dialogue-comparison-reference.md`
- `docs/core-writing/04-character-and-dialogue.md`
- `docs/core-writing/05-plot-and-serial-rhythm.md`
- 题材、机制、情绪、悬疑或喜剧专题

不要默认读：

- 只凭大纲直接扩写正文

### 2.5 人物、对白、降低 AI 味

先读：

- `docs/core-writing/59-dialogue-comparison-reference.md`
- `docs/core-writing/04-character-and-dialogue.md`
- `docs/core-writing/37-project-style-bible-character-voice.md`
- `docs/core-writing/11-human-writing-upgrade.md`
- `docs/core-writing/06-ai-writing-guidelines.md`

按需追加：

- `docs/storycraft/25-emotion-line-relationship-progression.md`
- `docs/storycraft/27-comedy-gags-lightness.md`

不要默认读：

- 只替换词语、只加口癖

### 2.6 审稿、试读、改稿

先读：

- `docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md`
- `docs/feedback-revision/08-review-and-reader-feedback.md`
- `docs/core-writing/06-ai-writing-guidelines.md`
- `docs/core-writing/11-human-writing-upgrade.md`
- `docs/feedback-revision/33-revision-rewrite-version-workflow.md`

按需追加：

- `docs/core-writing/59-dialogue-comparison-reference.md`
- `docs/core-writing/37-project-style-bible-character-voice.md`
- `docs/core-writing/07-continuity-ledger.md`
- `docs/feedback-revision/18-reader-data-feedback-diagnosis.md`
- `docs/feedback-revision/43-feedback-revision-priority-queue.md`
- `docs/safety-research/20-content-compliance-risk-review.md`

不要默认读：

- 只给“加强/优化/自然一点”

### 2.7 逻辑、连续性、伏笔、反转

先读：

- `docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md`
- `docs/core-writing/07-continuity-ledger.md`
- `docs/core-writing/32-chapter-paragraph-mobile-reading-experience.md`
- `docs/core-writing/05-plot-and-serial-rhythm.md`

按需追加：

- `docs/storycraft/26-suspense-reversal-information-control.md`
- `docs/storycraft/63-foreshadowing-callback-reader-memory-management.md`

不要默认读：

- 把逻辑漏洞改成漂亮句

### 2.8 投稿、包装、发布前材料

先读：

- `docs/market-serialization/16-title-blurb-tag-packaging.md`
- `docs/market-serialization/17-cover-visual-packaging.md`
- `docs/market-serialization/12-platform-and-channel-differences.md`
- `docs/market-serialization/29-reader-expectation-genre-promise-selling-point.md`

按需追加：

- `docs/market-serialization/19-serialization-update-operations.md`
- `docs/safety-research/20-content-compliance-risk-review.md`

不要默认读：

- 把单次封面或书名方案当通用规则

### 2.9 发布后数据与评论复盘

先读：

- `docs/feedback-revision/18-reader-data-feedback-diagnosis.md`
- `docs/feedback-revision/40-serial-data-tuning-loop.md`
- `docs/feedback-revision/41-reader-comment-coding-feedback-clustering.md`
- `docs/feedback-revision/42-editor-reader-data-feedback-conflict-resolution.md`
- `docs/feedback-revision/43-feedback-revision-priority-queue.md`

按需追加：

- `docs/feedback-revision/33-revision-rewrite-version-workflow.md`
- 对应章节或包装专题

不要默认读：

- 编造没有提供的数据

### 2.10 现实职业、行业、县域公共事务

先读：

- `docs/reality-reference/30-profession-industry-life-detail-credibility.md`
- `docs/reality-reference/31-region-era-social-custom-texture.md`

按需追加：

- 用关键词检索 `docs/navigation/00-expanded-topic-catalog.md` 后读取目标专题

不要默认读：

- 先读全部县域专题

## 3. 写稿质量硬入口

凡是要产出正文、改正文或判断正文质量，至少检查五个维度：

1. 人味：人物是否有自保动作、口语毛边、生活动作和不完全正确的真实反应。
2. 降 AI 味：是否存在全员同声、抽象总结、成片短句、纪要式证据链、无功能漂亮句。
3. 逻辑通顺：新信息是否有来源，动作顺序是否可拍，前后场是否有因果。
4. 内涵与情绪：本章触碰了人物什么价值、羞耻、关系债或选择代价。
5. 读者爱看：本章是否有承诺、进度、回报、章末未完成动作和下一章欲望。

如果其中任一项成为硬伤，不要只润色句子；先回到 `docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md` 的试读、审稿、仲裁和修订闭环。

## 4. 目录结构索引

`docs` 目录本身就是一级索引。后续 agent 不应只依赖单个索引文件，而应先看目录名判断知识类型，再读目录内 `README.md`，最后打开目标专题。

目录分工：

- `docs/navigation/`：导航、扩展目录和 README 下沉说明。
- `docs/sources/`：来源清单和来源边界。
- `docs/templates/`：模板和检查卡。
- `docs/governance/`：活跃决策、维护治理和决策索引。
- `docs/workflows/`：agent 工作流、项目初始化、章节生产和路由规则。
- `docs/core-writing/`：核心写作原则、人味、AI 味、对话、连续性和章法。
- `docs/storycraft/`：机制、关系、情绪、悬疑、喜剧、卷结构和伏笔。
- `docs/market-serialization/`：平台、题材、包装、封面、更新、数据和读者生命周期。
- `docs/feedback-revision/`：审稿、试读、反馈聚类、修订和掉点诊断。
- `docs/agent-operations/`：agent 路由、任务装配、研究转化、系列化和 IP/完本复盘。
- `docs/scene-craft/`：场景类型、动作、谈判、战斗、生活细节和专项桥段技法。
- `docs/reality-reference/`：现实职业、行业、县域、制度、公共事务和生活事实专题。
- `docs/safety-research/`：合规、安全、版权、敏感内容和事实核查边界。
- `docs/advanced-craft/`：高级专题和过渡性专题；后续内容膨胀时继续拆分。

读取顺序：

```text
docs/00-index.md -> 分类目录 README -> 目标专题 -> 必要来源/模板/归档
```

允许索引链路变长，不允许活跃入口无限变长。

## 5. 专题簇速查

### 5.1 入口、流程与上下文

- `docs/workflows/03-project-workflow.md`：项目阶段、开书准备、连载推进和资料沉淀的基础工作流。
- `docs/workflows/35-ai-agent-novel-creation-workflow.md`：端到端创作阶段、门槛和交付物。
- `docs/navigation/01-readme-details.md`：根 README 下沉出来的扩展说明，包含详细阅读路线、贡献与安全说明。
- `docs/workflows/36-prompt-context-packaging.md`：提示词、上下文封包、输出契约和材料边界。
- `docs/workflows/38-chapter-production-pipeline-agent-handoff.md`：章节生产流水线、多 agent 交接和质量闸门。
- `docs/workflows/57-knowledge-base-routing-consolidation-guide.md`：专题路由、最小阅读包和新增专题准入。
- `docs/workflows/58-integrated-drafting-beta-review-revision-workflow.md`：写手、试读、审稿、仲裁、改稿一体化闭环。
- `docs/governance/99-decision-log.md`：活跃决策短索引；历史长文按月归档到 `docs/decisions/`。

### 5.2 人物、声音、对白和人味

- `docs/core-writing/04-character-and-dialogue.md`：人物卡、人物差异、对话、群戏、反派和工具人。
- `docs/core-writing/37-project-style-bible-character-voice.md`：项目风格手册、角色声音矩阵和可保留粗糙。
- `docs/core-writing/59-dialogue-comparison-reference.md`：Agent 初稿/用户改稿对比案例，优先用于训练自然对白。
- `docs/core-writing/11-human-writing-upgrade.md`：人物鲜活、剧情自然、读者黏着、梗点和情绪浓度。
- `docs/storycraft/25-emotion-line-relationship-progression.md`：感情线、关系推进、糖点、虐点和 CP 化学反应。
- `docs/storycraft/27-comedy-gags-lightness.md`：喜剧、梗点、轻松感、人物癖好和重复变体。

### 5.3 章节、节奏和长篇连续性

- `docs/core-writing/02-webnovel-principles.md`：网文核心原则、开篇、爽点、章末钩子和信息投放。
- `docs/core-writing/05-plot-and-serial-rhythm.md`：长篇引擎、阶段目标、爽点循环和节奏压缩。
- `docs/core-writing/07-continuity-ledger.md`：事实台账、伏笔闭环、设定连续性和写后回写。
- `docs/workflows/64-single-novel-project-document-granularity.md`：单本小说项目短文档、多索引、台账拆分和巨型文件治理。
- `docs/workflows/65-serial-project-kanban-change-control.md`：连载任务看板、WIP 限制、变更控制、完成定义和短周期复盘。
- `docs/storycraft/22-opening-retention-model.md`：第一章、前 3-6 章、前 10 章和前 30 章留存模型。
- `docs/storycraft/23-midbook-volume-structure.md`：中段防水、卷结构、支线管理和卷末结算。
- `docs/storycraft/24-ending-completion-risk-control.md`：结尾、最后一卷、完本和烂尾风险控制。
- `docs/core-writing/32-chapter-paragraph-mobile-reading-experience.md`：章法、段落、手机阅读体验、转场和章末牵引。

### 5.4 市场、包装和平台

- `docs/market-serialization/12-platform-and-channel-differences.md`：平台、频道和读者期待差异。
- `docs/market-serialization/13-genre-patterns.md`：题材类型、开篇承诺、核心引擎和章节回报。
- `docs/market-serialization/16-title-blurb-tag-packaging.md`：书名、简介、标签与第一章承诺一致性。
- `docs/market-serialization/17-cover-visual-packaging.md`：封面、缩略图、视觉包装和点击理由。
- `docs/market-serialization/29-reader-expectation-genre-promise-selling-point.md`：读者预期、类型承诺、卖点验证和承诺回报链。
- `docs/market-serialization/34-market-research-comp-analysis.md`：竞品拆解、样本池和可迁移边界。

### 5.5 审稿、反馈、修订和数据

- `docs/feedback-revision/08-review-and-reader-feedback.md`：审稿标准、AI 含量判断和匿名读者试读流程。
- `docs/feedback-revision/09-case-notes.md`：匿名案例笔记，用于把读者反馈、编辑意见和旧项目经验转成可复用规则。
- `docs/feedback-revision/18-reader-data-feedback-diagnosis.md`：点击、读完率、追读、评论和反馈诊断。
- `docs/feedback-revision/33-revision-rewrite-version-workflow.md`：修订、重写、反馈处理、bug 修复和版本同步。
- `docs/feedback-revision/40-serial-data-tuning-loop.md`：连载期数据复盘和调参闭环。
- `docs/feedback-revision/41-reader-comment-coding-feedback-clustering.md`：读者评论语料标注与反馈聚类。
- `docs/feedback-revision/42-editor-reader-data-feedback-conflict-resolution.md`：编辑、读者、数据和主承诺冲突处理。
- `docs/feedback-revision/43-feedback-revision-priority-queue.md`：把多源反馈转成 P0/P1/P2/P3/Park/Reject 改稿队列，决定本轮先修、后文补、观察或不采纳。

### 5.6 设定、机制、世界与现实质感

- `docs/storycraft/14-mechanism-and-cheat-design.md`：系统、重生、穿书、空间、读心、弹幕、规则反杀等机制。
- `docs/storycraft/15-character-relationship-patterns.md`：师徒、宿敌、搭档、暧昧、家族、队友、主仆、群像关系。
- `docs/storycraft/21-antagonist-opposition-system.md`：反派、对手、组织/制度/环境阻力和反制回报。
- `docs/storycraft/26-suspense-reversal-information-control.md`：悬疑、反转、伏笔、线索、红鲱鱼和信息差。
- `docs/storycraft/28-worldbuilding-setting-exposition.md`：世界观、设定、规则、名词密度和信息投放。
- `docs/reality-reference/30-profession-industry-life-detail-credibility.md`：职业、行业、生活细节和专业可信度。
- `docs/reality-reference/31-region-era-social-custom-texture.md`：地域、时代、社会风俗和地方生活质感。

## 6. 大文件使用方式

### 6.1 `docs/navigation/00-expanded-topic-catalog.md`

用途：二级扩展目录。适合用关键词找专题编号、文件名和适用场景。

推荐检索词：题材名、职业名、制度名、场景物件、风险词、平台名、关系类型。

### 6.2 `docs/templates/10-templates-and-checklists.md`

用途：模板仓库。只在需要复制模板、检查卡或场景卡时读取命中小节。

推荐先搜：`模板：`、`检查卡`、`场景卡`、`对白自然度`、`一体化章节生产卡`、`项目讨论留档模板`。

### 6.3 `docs/sources/01-source-inventory.md`

用途：来源登记和使用边界。只在新增来源、核查来源、确认引用边界或处理合规问题时读取。

不要把来源清单当作写作指南；写正文时先读专题规则，必要时再回源。

### 6.4 `docs/governance/99-decision-log.md` 与 `docs/decisions/`

`docs/governance/99-decision-log.md` 是活跃决策短索引，适合默认读取。`docs/decisions/` 是历史决策归档，只在需要追溯旧决策原因时按月份和关键词检索。

### 6.5 `docs/navigation/01-readme-details.md`

用途：根 README 的扩展说明和历史下沉记录。只在根 README 信息不足、需要详细贡献/安全/维护说明，或需要追溯某段 README 下沉内容时读取目标小节。

不要把它当默认启动入口；需要全库定位时先回到 `docs/00-index.md`，需要专题检索时优先使用目录 README 或 `docs/navigation/00-expanded-topic-catalog.md`。

## 7. 新文件索引要求

AI 新建任何正式文件时，交付前必须说明：

```text
【新文件】路径
【索引入口】它已挂到哪里
【读取场景】后续 agent 什么时候读
【维护状态】已确认 / 候选 / 待确认 / 临时
```

如果无法说明索引入口，优先不要新建文件，把内容并入已有专题、模板、案例参考书或决策记录。
