# 00. 项目索引（渐进式入口）

状态：已确认  
用途：给 AI agents 用极少上下文找到本次任务真正需要的知识。本文是启动索引，不是全量目录。

## 0. 先读结论

每次新会话或上下文丢失后，默认只读：

1. `README.md`
2. `AGENTS.md`
3. `docs/00-index.md`

不要默认整读以下大文件：

- `docs/01-source-inventory.md`：只在登记、核查或引用来源时定向检索。
- `docs/10-templates-and-checklists.md`：只在需要某张模板/检查卡时按标题检索。
- `docs/00-expanded-topic-catalog.md`：只在本文件无法定位专题时按关键词检索。
- 大量县域、行业、合规专题：只在章节明确涉及该场景时读取目标专题。

## 1. 渐进式披露流程

```text
任务阶段 -> 最小阅读包 -> 可选专题 -> 专业事实专题 -> 来源核查
```

执行规则：

1. 先判断用户要的是开书、初始化、起草、续写、审稿、修订、包装、运营、数据复盘，还是维护知识库。
2. 只读取对应阶段的最小阅读包，不把全库塞进上下文。
3. 如果问题集中在人物、人味、对白、逻辑或读者黏性，优先读取写作质量专题，不先跳到行业资料。
4. 如果需要真实制度、行业、地域或职业细节，先用 `docs/00-expanded-topic-catalog.md` 或本地搜索定位专题，再读取单个目标文档。
5. 新增文件必须能从本文、README、相关专题、模板文档或决策记录找到入口；没有索引路径的文件不合格。

## 2. 常用任务最小阅读包

| 任务 | 先读 | 按需追加 | 不要默认读 |
|---|---|---|---|
| 知识库维护、索引治理 | `README.md`、`AGENTS.md`、`docs/00-index.md`、`docs/57-knowledge-base-routing-consolidation-guide.md`、`docs/99-decision-log.md` | 被修改的目标专题、`SOURCE_POLICY.md`、`DEIDENTIFICATION.md`、`SAFETY.md` | `docs/01-source-inventory.md` 全文、`docs/10` 全文 |
| 开新书、重定方向 | `docs/35-ai-agent-novel-creation-workflow.md`、`docs/43-commercial-project-greenlight-scorecard.md`、`docs/44-single-novel-project-initialization-package.md`、`docs/45-first-chapter-task-brief-production-gate.md` | `docs/29-reader-expectation-genre-promise-selling-point.md`、`docs/13-genre-patterns.md`、`docs/16-title-blurb-tag-packaging.md`、`docs/17-cover-visual-packaging.md`、`docs/34-market-research-comp-analysis.md` | 直接写 `ch001.md` |
| 单本小说项目初始化 | `docs/44-single-novel-project-initialization-package.md`、`docs/64-single-novel-project-document-granularity.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/07-continuity-ledger.md`、`docs/37-project-style-bible-character-voice.md` | `docs/10` 中的项目模板、`docs/45` 的第一章许可 | 把本知识库通用方法整段搬进项目 |
| 起草或续写章节 | `docs/58-integrated-drafting-beta-review-revision-workflow.md`、`docs/06-ai-writing-guidelines.md`、`docs/11-human-writing-upgrade.md`、`docs/37-project-style-bible-character-voice.md`、`docs/07-continuity-ledger.md`、`docs/32-chapter-paragraph-mobile-reading-experience.md` | `docs/59-dialogue-comparison-reference.md`、`docs/04-character-and-dialogue.md`、`docs/05-plot-and-serial-rhythm.md`、题材/机制/情绪/悬疑/喜剧专题 | 只凭大纲直接扩写正文 |
| 人物、对白、降低 AI 味 | `docs/59-dialogue-comparison-reference.md`、`docs/04-character-and-dialogue.md`、`docs/37-project-style-bible-character-voice.md`、`docs/11-human-writing-upgrade.md`、`docs/06-ai-writing-guidelines.md` | `docs/25-emotion-line-relationship-progression.md`、`docs/27-comedy-gags-lightness.md` | 只替换词语、只加口癖 |
| 审稿、试读、改稿 | `docs/58-integrated-drafting-beta-review-revision-workflow.md`、`docs/08-review-and-reader-feedback.md`、`docs/06-ai-writing-guidelines.md`、`docs/11-human-writing-upgrade.md`、`docs/33-revision-rewrite-version-workflow.md` | `docs/59`、`docs/37`、`docs/07`、`docs/18-reader-data-feedback-diagnosis.md`、`docs/20-content-compliance-risk-review.md` | 只给“加强/优化/自然一点” |
| 逻辑、连续性、伏笔、反转 | `docs/58`、`docs/07-continuity-ledger.md`、`docs/32-chapter-paragraph-mobile-reading-experience.md`、`docs/05-plot-and-serial-rhythm.md` | `docs/26-suspense-reversal-information-control.md`、`docs/63-foreshadowing-callback-reader-memory-management.md` | 把逻辑漏洞改成漂亮句 |
| 投稿、包装、发布前材料 | `docs/16-title-blurb-tag-packaging.md`、`docs/17-cover-visual-packaging.md`、`docs/12-platform-and-channel-differences.md`、`docs/29-reader-expectation-genre-promise-selling-point.md` | `docs/19-serialization-update-operations.md`、`docs/20-content-compliance-risk-review.md` | 把单次封面/书名方案当通用规则 |
| 发布后数据与评论复盘 | `docs/18-reader-data-feedback-diagnosis.md`、`docs/40-serial-data-tuning-loop.md`、`docs/41-reader-comment-coding-feedback-clustering.md`、`docs/42-editor-reader-data-feedback-conflict-resolution.md` | `docs/33`、对应章节/包装专题 | 编造没有提供的数据 |
| 现实职业、行业、县域公共事务 | `docs/30-profession-industry-life-detail-credibility.md`、`docs/31-region-era-social-custom-texture.md` | 用关键词检索 `docs/00-expanded-topic-catalog.md` 后读取目标专题 | 先读全部县域专题 |

## 3. 写稿质量硬入口

凡是要产出正文、改正文或判断正文质量，至少检查五个维度：

1. 人味：人物是否有自保动作、口语毛边、生活动作和不完全正确的真实反应。
2. 降 AI 味：是否存在全员同声、抽象总结、成片短句、纪要式证据链、无功能漂亮句。
3. 逻辑通顺：新信息是否有来源，动作顺序是否可拍，前后场是否有因果。
4. 内涵与情绪：本章触碰了人物什么价值、羞耻、关系债或选择代价。
5. 读者爱看：本章是否有承诺、进度、回报、章末未完成动作和下一章欲望。

如果其中任一项成为硬伤，不要只润色句子；先回到 `docs/58` 的试读、审稿、仲裁和修订闭环。

## 4. 专题簇速查

### 4.1 入口、流程与上下文

- `docs/35-ai-agent-novel-creation-workflow.md`：端到端创作阶段、门槛和交付物。
- `docs/00-readme-details.md`：根 README 下沉出来的扩展说明，包含详细阅读路线、贡献与安全说明。
- `docs/36-prompt-context-packaging.md`：提示词、上下文封包、输出契约和材料边界。
- `docs/38-chapter-production-pipeline-agent-handoff.md`：章节生产流水线、多 agent 交接和质量闸门。
- `docs/57-knowledge-base-routing-consolidation-guide.md`：专题路由、最小阅读包和新增专题准入。
- `docs/58-integrated-drafting-beta-review-revision-workflow.md`：写手、试读、审稿、仲裁、改稿一体化闭环。
- `docs/99-decision-log.md`：活跃决策短索引；历史长文按月归档到 `docs/decisions/`。

### 4.2 人物、声音、对白和人味

- `docs/04-character-and-dialogue.md`：人物卡、人物差异、对话、群戏、反派和工具人。
- `docs/37-project-style-bible-character-voice.md`：项目风格手册、角色声音矩阵和可保留粗糙。
- `docs/59-dialogue-comparison-reference.md`：Agent 初稿/用户改稿对比案例，优先用于训练自然对白。
- `docs/11-human-writing-upgrade.md`：人物鲜活、剧情自然、读者黏着、梗点和情绪浓度。
- `docs/25-emotion-line-relationship-progression.md`：感情线、关系推进、糖点、虐点和 CP 化学反应。
- `docs/27-comedy-gags-lightness.md`：喜剧、梗点、轻松感、人物癖好和重复变体。

### 4.3 章节、节奏和长篇连续性

- `docs/02-webnovel-principles.md`：网文核心原则、开篇、爽点、章末钩子和信息投放。
- `docs/05-plot-and-serial-rhythm.md`：长篇引擎、阶段目标、爽点循环和节奏压缩。
- docs/07-continuity-ledger.md：事实台账、伏笔闭环、设定连续性和写后回写。
- docs/64-single-novel-project-document-granularity.md：单本小说项目短文档、多索引、台账拆分和巨型文件治理。
- `docs/22-opening-retention-model.md`：第一章、前 3-6 章、前 10 章和前 30 章留存模型。
- `docs/23-midbook-volume-structure.md`：中段防水、卷结构、支线管理和卷末结算。
- `docs/24-ending-completion-risk-control.md`：结尾、最后一卷、完本和烂尾风险控制。
- `docs/32-chapter-paragraph-mobile-reading-experience.md`：章法、段落、手机阅读体验、转场和章末牵引。

### 4.4 市场、包装和平台

- `docs/12-platform-and-channel-differences.md`：平台、频道和读者期待差异。
- `docs/13-genre-patterns.md`：题材类型、开篇承诺、核心引擎和章节回报。
- `docs/16-title-blurb-tag-packaging.md`：书名、简介、标签与第一章承诺一致性。
- `docs/17-cover-visual-packaging.md`：封面、缩略图、视觉包装和点击理由。
- `docs/29-reader-expectation-genre-promise-selling-point.md`：读者预期、类型承诺、卖点验证和承诺回报链。
- `docs/34-market-research-comp-analysis.md`：竞品拆解、样本池和可迁移边界。

### 4.5 审稿、反馈、修订和数据

- `docs/08-review-and-reader-feedback.md`：审稿标准、AI 含量判断和匿名读者试读流程。
- `docs/18-reader-data-feedback-diagnosis.md`：点击、读完率、追读、评论和反馈诊断。
- `docs/33-revision-rewrite-version-workflow.md`：修订、重写、反馈处理、bug 修复和版本同步。
- `docs/40-serial-data-tuning-loop.md`：连载期数据复盘和调参闭环。
- `docs/41-reader-comment-coding-feedback-clustering.md`：读者评论语料标注与反馈聚类。
- `docs/42-editor-reader-data-feedback-conflict-resolution.md`：编辑、读者、数据和主承诺冲突处理。

### 4.6 设定、机制、世界与现实质感

- `docs/14-mechanism-and-cheat-design.md`：系统、重生、穿书、空间、读心、弹幕、规则反杀等机制。
- `docs/15-character-relationship-patterns.md`：师徒、宿敌、搭档、暧昧、家族、队友、主仆、群像关系。
- `docs/21-antagonist-opposition-system.md`：反派、对手、组织/制度/环境阻力和反制回报。
- `docs/26-suspense-reversal-information-control.md`：悬疑、反转、伏笔、线索、红鲱鱼和信息差。
- `docs/28-worldbuilding-setting-exposition.md`：世界观、设定、规则、名词密度和信息投放。
- `docs/30-profession-industry-life-detail-credibility.md`：职业、行业、生活细节和专业可信度。
- `docs/31-region-era-social-custom-texture.md`：地域、时代、社会风俗和地方生活质感。

## 5. 大文件使用方式

### 5.1 `docs/00-expanded-topic-catalog.md`

用途：二级扩展目录。适合用关键词找专题编号、文件名和适用场景。

推荐检索词：题材名、职业名、制度名、场景物件、风险词、平台名、关系类型。

### 5.2 `docs/10-templates-and-checklists.md`

用途：模板仓库。只在需要复制模板、检查卡或场景卡时读取命中小节。

推荐先搜：`模板：`、`检查卡`、`场景卡`、`对白自然度`、`一体化章节生产卡`、`项目讨论留档模板`。

### 5.3 `docs/01-source-inventory.md`

用途：来源登记和使用边界。只在新增来源、核查来源、确认引用边界或处理合规问题时读取。

不要把来源清单当作写作指南；写正文时先读专题规则，必要时再回源。

### 5.4 `docs/99-decision-log.md` 与 `docs/decisions/`

`docs/99-decision-log.md` 是活跃决策短索引，适合默认读取。`docs/decisions/` 是历史决策归档，只在需要追溯旧决策原因时按月份和关键词检索。

## 6. 新文件索引要求

AI 新建任何正式文件时，交付前必须说明：

```text
【新文件】路径
【索引入口】它已挂到哪里
【读取场景】后续 agent 什么时候读
【维护状态】已确认 / 候选 / 待确认 / 临时
```

如果无法说明索引入口，优先不要新建文件，把内容并入已有专题、模板、案例参考书或决策记录。

