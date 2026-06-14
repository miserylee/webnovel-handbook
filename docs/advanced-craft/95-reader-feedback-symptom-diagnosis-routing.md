# 95. 读者反馈症状、病因定位与专题路由专项

状态：已确认

适用范围：审稿、改稿、读者评论分析、编辑反馈转译、数据下滑诊断、多 agent 修订分工、章节 QA、连载期小修、开篇重写、付费章节掉读、用户反馈“水”“平”“假”“看不懂”“不爽”“出戏”“AI 味”“主角不讨喜”“人物不活”“剧情生硬”“没钩子”“反转硬”“对话尬”“打斗乱”“设定太多”。

核心结论：读者反馈通常是症状，不是处方。AI agent 不能按读者原话直接改，也不能只润色句子；必须先把反馈翻译成问题层级、可能病因、证据强度和应调用专题，再进入修订工作流。

最小链路：反馈原文 -> 症状标签 -> 证据强度 -> 问题层级 -> 可能病因 -> 保护有效资产 -> 调用专题 -> 修订动作 -> 观察指标。

---

## 1. 这个专题解决什么问题

已有第 33 篇处理修订、重写与版本控制，第 41 篇处理读者评论聚类，第 42 篇处理多方反馈冲突。本篇不替代它们，而是补一个更前置的“症状路由器”。

AI 常犯的错误：

- 读者说“水”，AI 只删几句废话，但真正问题是场景没有价值转变。
- 读者说“不爽”，AI 加强情绪词，但真正问题是回报没有落袋。
- 读者说“看不懂”，AI 加长解释，但真正问题是信息顺序错、问题链乱或视角泄密。
- 读者说“主角不讨喜”，AI 给主角加善良台词，但真正问题是目标、主动性和价值排序不清。
- 读者说“像 AI”，AI 做同义词替换，但真正问题是人物同声、反应同步、段尾总结和解释腔。
- 编辑说“节奏慢”，AI 盲目删日常，但真正问题可能是低强度章没有微回报。

本专题的目标：让 agent 先判断“病在哪一层”，再决定怎么改。

---

## 2. 来源与吸收方式

本专题吸收以下资料与已有知识库规则：

- Purdue OWL 关于 Writing with Feedback 的资料：吸收把反馈改写成自己的理解、制作行动清单、按重要性排序的原则。
- Reedsy 关于 How to Revise a Novel 的资料：吸收修订应先从整体结构、时间线、角色、节奏等大层面评估，再进入细节层的思路。
- Reedsy 关于 Beta Readers 的资料：吸收 beta reader 重点在阅读体验、可信度、角色可信、世界沉浸、节奏流动，而不只是行文纠错。
- Writer's Digest 关于 revision 的资料：吸收修订可以分波次处理，从结构、人物、场景到语言逐层推进。
- Plotiar Beta Reader Feedback Template 资料：吸收读者反馈应关注整体印象、停读点、角色、节奏、对话和类型期待；多名读者停在同一位置通常提示结构问题。
- AutoCrit Alpha/Beta Reader Feedback 说明：吸收 alpha 反馈偏故事基础，beta 反馈偏阅读体验，可迁移为“先判断反馈类型，再决定修订层级”。
- 本知识库已有文档：`08-review-and-reader-feedback`、`18-reader-data-feedback-diagnosis`、`33-revision-rewrite-version-workflow`、`40-serial-data-tuning-loop`、`41-reader-comment-coding-feedback-clustering`、`42-editor-reader-data-feedback-conflict-resolution`、`73-scene-value-shift-purpose-gate`、`76-sentence-rhythm-narrative-breath-ai-flavor`、`94-reader-immersion-narrative-transportation-presence`。

吸收原则：不照搬外部资料原文，只转化为中文商业网文和 AI agent 可执行的反馈诊断路由。

---

## 3. 反馈不是处方

读者说的问题，通常是他们的阅读体验；读者给的修改建议，通常不是最终方案。

AI 应区分三层：

| 层级 | 示例 | agent 应做什么 |
| --- | --- | --- |
| 体验描述 | “这里好水”“我不想看他赢”“这里看不懂” | 高价值，优先记录 |
| 病因猜测 | “是不是铺垫太少”“是不是人物太弱” | 候选，需用正文验证 |
| 修改建议 | “把女二删了”“让男主直接杀回去” | 不直接执行，先判断是否符合主承诺 |

原则：尊重读者体验，不迷信读者处方。

---

## 4. 证据强度分级

| 强度 | 证据 | 处理方式 |
| --- | --- | --- |
| E0 单条情绪 | 一条评论说“不喜欢” | 记录，不立刻改主线 |
| E1 同类多条 | 多人说“这一章水” | 进入症状定位 |
| E2 数据同向 | 评论说水，同时追读/完读下降 | 进入修订计划 |
| E3 编辑/目标读者同向 | 编辑、核心读者和数据都指向同层问题 | 优先修复 |
| E4 文本硬伤 | 明确矛盾、断因果、规则崩、人物降智 | 无需等待更多反馈，立即修 |

注意：尖锐不等于证据强；高频、同向、与目标读者匹配，才更可靠。

---

## 5. 问题层级：先判层，再修文

从高到低判断，不要跳级润色。

| 层级 | 问题 | 典型反馈 | 优先调用 |
| --- | --- | --- | --- |
| L1 承诺层 | 这本书给错期待或没兑现核心卖点 | 不知道看点、题不对文、开篇不像简介 | `29`、`22`、`39`、`45` |
| L2 结构层 | 章节/单元没有目标、回报、推进 | 水、散、没进展、节奏慢 | `05`、`32`、`73`、`85` |
| L3 因果合理层 | 结果无前因、人物降智、规则作弊 | 假、强行、降智、不合理 | `72`、`90`、`92`、`88` |
| L4 人物层 | 主角不可追、人物不活、关系不成立 | 不想看主角赢、人物像工具人 | `80`、`74`、`77`、`81`、`89` |
| L5 信息层 | 看不懂、谜语人、设定过载 | 绕、乱、名词多、反转硬 | `78`、`82`、`26`、`92`、`28` |
| L6 场景层 | 场景不在现场、对话无战术、动作混乱 | 像大纲、对话尬、打斗乱 | `70`、`75`、`88`、`93` |
| L7 情绪回报层 | 不爽、不甜、虐累、回报轻 | 憋屈、没情绪、付费不值 | `79`、`86`、`65`、`68` |
| L8 语言风格层 | AI 味、句子尬、解释过满 | 像 AI、太工整、读起来累 | `37`、`76`、`94` |

修订顺序：高层问题未修前，不进入低层润色。承诺错配时，漂亮句子只会让错误更难发现。

---

## 6. 高频症状路由表

### 6.1 “水”“没进展”“跳读”

可能病因：

- 场景没有价值转变。
- 低强度章没有小目标和微回报。
- 摘要/场景选择错误，把低价值过程写太长。
- 回报币种没有落袋。
- 压力波形一直平。

优先调用：`73-scene-value-shift-purpose-gate`、`62-everyday-transition-low-intensity-anti-padding`、`93-scene-summary-exposition-show-tell-selection`、`86-payoff-currency-reward-asset-continuity`、`85-tension-release-pressure-rhythm-fatigue-management`。

优先修复：补状态变化、压缩重复过程、补小回报、明确下一步动作。

### 6.2 “不爽”“憋屈”“付费不值”

可能病因：

- 情绪债只累积，不支付利息。
- 主角失败没有反弹抓手。
- 回报没有入账凭证。
- 对手没有付代价。
- 付费章只铺垫不兑现。

优先调用：`79-emotional-debt-payoff-reader-affect-curve`、`86-payoff-currency-reward-asset-continuity`、`68-protagonist-failure-setback-cost-management`、`65-paid-conversion-subscription-retention`、`21-antagonist-opposition-system`。

优先修复：给阶段答案、公开结果、资源入账、对手损失、主角新抓手。

### 6.3 “看不懂”“太绕”“谜语人”

可能病因：

- 读者不知道自己在等什么。
- 信息密度过高，名词过多。
- 视角和信息权限混乱。
- 悬念只藏答案，不给可判断材料。
- 转场没有四锚一钩。

优先调用：`78-information-density-cognitive-load-term-management`、`82-reader-question-chain-curiosity-hook-answer-management`、`92-suspense-surprise-dramatic-irony-information-gap`、`69-pov-narrative-distance-information-focus`、`91-scene-transition-bridge-continuity-momentum`。

优先修复：先给问题、再给材料；减少同屏名词；标注谁知道什么；补时间地点视角状态。

### 6.4 “假”“强行”“降智”“作者开挂”

可能病因：

- 关键结果没有前文 setup。
- 规则临时出现或临时改变。
- 角色没有按信息和利益行动。
- 主角或对手为了剧情犯蠢。
- 空间、时间、道具来源不清。

优先调用：`72-reader-trust-plausibility-anti-cheat`、`90-short-setup-payoff-scene-fairness`、`88-spatial-blocking-scene-geography-action-continuity`、`74-character-choice-dilemma-costly-decision`、`21-antagonist-opposition-system`。

优先修复：补前文凭证、改结果来源、加限制代价、重写信息边界和角色选择。

### 6.5 “主角不讨喜”“不想看他赢”“代入不进去”

可能病因：

- 主角目标不清或不主动。
- 主角收益和读者价值不对齐。
- 主角选择没有代价，只占便宜。
- 叙述距离不适合题材。
- 主角内心只有解释，没有过滤和行动。

优先调用：`80-protagonist-followability-reader-alignment`、`74-character-choice-dilemma-costly-decision`、`69-pov-narrative-distance-information-focus`、`89-internal-monologue-cognition-emotion-filtering`、`94-reader-immersion-narrative-transportation-presence`。

优先修复：补可追目标、底线、主动选择、价值排序、对他人和局面的具体影响。

### 6.6 “人物不活”“全员工具人”“同声”

可能病因：

- 人物没有自保动作和私人目标。
- 对话只运输信息。
- 内心和反应都是同一种 AI 语气。
- 配角没有功能、站位和关系变化。
- 人物弧线只靠总结，不靠行为证据。

优先调用：`11-human-writing-upgrade`、`37-project-style-bible-character-voice`、`75-dialogue-subtext-tactical-conversation`、`81-supporting-cast-allies-relationship-network`、`77-character-arc-belief-behavior-evidence`、`89-internal-monologue-cognition-emotion-filtering`。

优先修复：给人物目标、禁忌、利益、说话策略、不同注意对象和可见选择。

### 6.7 “剧情生硬”“像大纲”“没有现场感”

可能病因：

- 刺激、反应、选择、后果链条缺拍。
- 关键场面被摘要化。
- 空间、动作、物件和站位不清。
- 场景缺目标和阻力。
- 转场跳过状态差额。

优先调用：`70-action-reaction-scene-beat`、`93-scene-summary-exposition-show-tell-selection`、`88-spatial-blocking-scene-geography-action-continuity`、`73-scene-value-shift-purpose-gate`、`91-scene-transition-bridge-continuity-momentum`。

优先修复：补外部刺激、即时反应、可见选择、后果承接和场景锚点。

### 6.8 “对话尬”“像问答”“解释设定”

可能病因：

- 对话没有战术目标。
- 人物说出真实想法，没有潜台词。
- 问答式交代设定。
- 角色声音没有区分。
- 对话后状态没有变化。

优先调用：`75-dialogue-subtext-tactical-conversation`、`37-project-style-bible-character-voice`、`61-information-public-opinion-discourse-battle`、`89-internal-monologue-cognition-emotion-filtering`。

优先修复：先删水，再补目标、筹码、隐瞒、误解、抢话、沉默和后果。

### 6.9 “打斗乱”“大场面看不清”

可能病因：

- 胜负条件不清。
- 空间站位不清。
- 角色功能重复。
- 招式堆叠，没有转折。
- 战后结算缺失。

优先调用：`60-climax-battle-large-scene-coordination`、`88-spatial-blocking-scene-geography-action-continuity`、`70-action-reaction-scene-beat`、`86-payoff-currency-reward-asset-continuity`。

优先修复：先定目标、胜负条件、空间锚、角色功能、关键转折和战后入账，再压缩招式。

### 6.10 “设定太多”“名词太密”“像说明书”

可能病因：

- 世界观先于目标和冲突出现。
- 名词没有绑定行动后果。
- 说明过早、过长、过抽象。
- 读者不知道哪些信息现在重要。

优先调用：`28-worldbuilding-setting-exposition`、`78-information-density-cognitive-load-term-management`、`93-scene-summary-exposition-show-tell-selection`、`94-reader-immersion-narrative-transportation-presence`。

优先修复：删后台设定，只保留当前选择需要的信息；把规则改成限制、代价和后果。

### 6.11 “像 AI”“太工整”“修完更假”

可能病因：

- 句式均质、段尾总结、解释过满。
- 人物反应同步。
- 情绪和因果过度顺滑。
- 修订误伤人物毛刺和现场摩擦。
- 语言不符合项目风格。

优先调用：`76-sentence-rhythm-narrative-breath-ai-flavor`、`37-project-style-bible-character-voice`、`11-human-writing-upgrade`、`94-reader-immersion-narrative-transportation-presence`。

优先修复：删总结、保留不完美反应、分层群戏反应、恢复角色词汇和叙述距离。

### 6.12 “没钩子”“不想翻下一章”

可能病因：

- 读者问题链断了。
- 本章没有阶段答案或新问题。
- 章末钩子不是本章结果自然生长。
- 下一章承接动作不明确。
- 类型承诺没有进度。

优先调用：`82-reader-question-chain-curiosity-hook-answer-management`、`67-chapter-title-toc-promise-management`、`91-scene-transition-bridge-continuity-momentum`、`85-tension-release-pressure-rhythm-fatigue-management`。

优先修复：明确本章主问题、章内回答、章末新问题和下一章前 25% 承接方式。

---

## 7. 症状到专题的最小路由规则

AI agent 可以按以下规则快速分诊：

```text
水/没进展 -> 先查 73，再查 62/93/85/86。
不爽/憋屈 -> 先查 79，再查 86/68/65。
看不懂/谜语人 -> 先查 78 和 82，再查 26/92/91。
假/降智/强行 -> 先查 72，再查 90/88/74。
主角不讨喜 -> 先查 80，再查 74/89/69。
人物不活/同声 -> 先查 11 和 37，再查 75/89/81。
剧情生硬/像大纲 -> 先查 70，再查 93/73/88。
对话尬 -> 先查 75，再查 37/61。
打斗乱 -> 先查 60 和 88，再查 70/86。
设定太多 -> 先查 28 和 78，再查 93。
像 AI -> 先查 76，再查 37/94/11。
没钩子 -> 先查 82，再查 67/91/85。
```

---

## 8. 诊断流程

### 8.1 收集原话

不要先总结。先保留读者原话、章节位置、时间、来源和是否目标读者。

### 8.2 标注症状

一条反馈可以有多个标签，例如“水”可能同时是场景无价值、回报缺失、信息重复。

### 8.3 找正文证据

必须能指向具体文本现象：哪一章、哪一场、哪一屏、哪条因果、哪段对话。

### 8.4 判问题层级

先判断 L1-L8 层级。高层问题没修前，低层润色暂停。

### 8.5 保护有效资产

任何修订前先列出不能误伤的内容：有效爽点、人物魅力、梗点、关系张力、读者喜欢的场面、已建立伏笔。

### 8.6 输出修订动作

修订动作必须是可执行的，不写“加强节奏”这种空话。

有效动作：压缩第 3 场赶路为一句状态差额；把第 4 场重写为主角主动选择；在章末前补对手可见代价。

### 8.7 决定观察指标

发布后或重写后观察：追读、完读、评论关键词、停读章、付费转化、收藏转化、目标读者反馈。

---

## 9. 反馈冲突处理

当反馈冲突时，按以下顺序判断：

1. 目标读者优先于非目标读者。
2. 体验描述优先于修改建议。
3. 多条同向优先于单条尖锐。
4. 数据同向优先于情绪猜测。
5. 主承诺优先于局部偏好。
6. 保留有效资产优先于全面重写。
7. 已发布连载优先考虑后文补偿和轻修，慎用大改。

如果两类目标读者反馈相反，先回到作品定位：这本书到底服务谁。

---

## 10. AI 不应直接执行的反馈

以下反馈需要转译，不要原样执行：

- “删掉某角色”：先判断该角色功能是否重复、是否抢主线、是否可合并。
- “快点写爽点”：先判断情绪债、回报币种和阶段承诺是否到位。
- “加点感情戏”：先判断关系线是否承担主承诺或节奏释放功能。
- “多解释一下”：先判断是信息缺口、视角错误，还是读者没抓住主问题。
- “文笔再好一点”：先判断是 AI 味、叙述距离、句式、细节，还是场景本身无效。
- “主角强一点”：先判断是能力不足、主动性不足、回报不足，还是尊严受损未补偿。
- “删日常”：先判断日常是否有微变化和轻回响；无功能才删。

---

## 11. 输出模板：反馈诊断路由卡

```text
反馈来源：读者评论 / 章评 / 编辑 / 数据 / 用户指令 / 自检
反馈原文：
目标读者匹配度：高 / 中 / 低 / 不明
出现位置：章节 / 场景 / 段落 / 付费节点 / 全书
证据强度：E0 / E1 / E2 / E3 / E4
症状标签：水 / 不爽 / 看不懂 / 假 / 主角不讨喜 / 人物不活 / 生硬 / 对话尬 / 打斗乱 / 设定多 / AI 味 / 没钩子 / 其他
问题层级：L1 承诺 / L2 结构 / L3 因果合理 / L4 人物 / L5 信息 / L6 场景 / L7 情绪回报 / L8 语言风格
正文证据：
可能病因：
必须保护的有效资产：
优先调用专题：
建议修订动作：
不建议执行的读者处方：
修订成本：轻修 / 中修 / 大修 / 重写 / 后文补偿 / 观察
观察指标：
```

---

## 12. 审稿检查清单

- 是否保留了反馈原话，而不是只写 AI 总结？
- 是否区分体验、病因猜测和修改建议？
- 是否判断目标读者匹配度？
- 是否给出证据强度，而不是被单条评论牵走？
- 是否找到正文证据？
- 是否先判问题层级，再定修订动作？
- 是否保护了有效资产？
- 是否调用了正确专题，而不是直接润色？
- 是否把修订动作写成可执行步骤？
- 是否说明哪些读者建议不直接采纳？
- 是否有观察指标和复盘窗口？

通过标准：反馈被转化为可执行、可复盘、不会误伤作品资产的修订任务。

---

## 13. 最小可执行规则

AI 处理反馈时至少遵守以下规则：

- 读者反馈先当症状，不当处方。
- 保留原话、位置、来源和目标读者匹配度。
- 多条同向、数据同向、目标读者同向，比单条尖锐更重要。
- 先判问题层级，再调用专题，再修订。
- 高层问题未解决前，不做句子润色。
- 修订前必须列出有效资产，防止越改越平。
- 读者建议需要转译，不自动等于改稿方案。
- 已发布连载优先考虑轻修、后文补偿和观察窗口；大改需进入第 33 篇工作流。
- 每次修订都要留下观察指标，避免凭感觉循环改稿。

---

## 14. 与其他专题的连接

- 与 `33-revision-rewrite-version-workflow` 连接：本篇负责反馈分诊，第 33 篇负责进入具体修订、重写和版本管理。
- 与 `41-reader-comment-coding-feedback-clustering` 连接：读者评论批量处理先聚类，再用本篇路由。
- 与 `42-editor-reader-data-feedback-conflict-resolution` 连接：多方反馈冲突时用第 42 篇定取舍。
- 与 `40-serial-data-tuning-loop` 连接：数据下滑需结合观察窗口，不能单日大改。
- 与 `08-review-and-reader-feedback` 连接：正式审稿结论必须输出有效点、风险点和修改优先级。
- 与 `94-reader-immersion-narrative-transportation-presence` 连接：出戏、代入弱和像 AI 的反馈常需要先查沉浸链条。
- 与 `76-sentence-rhythm-narrative-breath-ai-flavor` 连接：只有结构、人物、场景和回报成立后，才进入句段终磨。
