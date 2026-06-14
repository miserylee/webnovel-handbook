# core-writing

核心写作原则、人味、AI 味、对话、连续性和章法。

本目录负责小说正文的底层质量：一章是否像网文、人物是否像活人、对白是否自然、段落是否适合手机阅读、设定和台账是否前后一致。它不是市场包装目录，也不是反馈复盘目录；写稿、续写、改稿时通常先从这里取规则。

## 1. 先按问题选入口

| 问题 | 先读 | 作用 |
|---|---|---|
| 不知道一章网文该怎么成立 | `02-webnovel-principles.md` | 类型承诺、爽点、章末钩子、信息投放和读者回报 |
| 长篇节奏、阶段目标、爽点循环不稳 | `05-plot-and-serial-rhythm.md` | 阶段目标、连载节奏、防水和结构推进 |
| AI 味重、像大纲扩写、句子太平 | `11-human-writing-upgrade.md`、`06-ai-writing-guidelines.md` | 人味、现场感、动作链、反 AI 味硬规则 |
| 人物不活、对白假、全员同声 | `04-character-and-dialogue.md`、`37-project-style-bible-character-voice.md`、`59-dialogue-comparison-reference.md` | 角色声音、关系压力、对白样本对比和自然度训练 |
| 连续性、伏笔、事实台账、正稿错位 | `07-continuity-ledger.md`、`100-canon-uncertainty-conflict-hallucination-control.md` | 正稿事实、设定冲突、未知状态和幻觉控制 |
| 命名、称呼、术语前后不一致 | `106-naming-address-terminology-recognition-consistency.md` | 角色称呼、地名、术语、识别线索和一致性 |
| 章法、段落、转场、手机阅读体验 | `32-chapter-paragraph-mobile-reading-experience.md` | 段落密度、转场、章末牵引和移动端可读性 |
| 视角、叙述距离、信息焦点混乱 | `69-pov-narrative-distance-information-focus.md` | POV、叙述距离、信息控制和读者站位 |
| 反派、世界压力和主角成长不同步 | `60-antagonist-world-synchronous-escalation.md` | 对手系统、世界升级和主角能力成长的同步压力 |

## 2. 推荐读取链路

### 2.1 起草或续写一章

```text
02 网文原则 -> 05 连载节奏 -> 32 章法段落 -> 06 AI 写作规则 -> 11 人味增强 -> 07 台账回写
```

适合：从章节任务单扩写正文、续写下一章、检查一章是否能作为可发布章节。

### 2.2 修人物和对白

```text
37 角色声音 -> 04 人物对白 -> 59-dialogue 对比样本 -> 11 人味增强
```

适合：用户指出“台词不像人说话”“人物不活”“全员一个腔”“AI 味重”时。不要只替换词语或加口癖。

### 2.3 修逻辑和连续性

```text
07 连续性台账 -> 100 正典不确定性 -> 106 命名称呼术语 -> 32 场景动作顺序
```

适合：前后事实错位、角色知道了不该知道的信息、称呼乱、伏笔误回收、AI 凭旧大纲覆盖正稿。

### 2.4 修阅读体验

```text
32 手机阅读体验 -> 02 章节回报 -> 05 节奏 -> 11 人味
```

适合：段落像纪要、短句成片、转场硬、章末没牵引、正文读起来不顺。

## 3. 文件名注意

本目录目前有两个 `59-...` 文件，必须按完整文件名区分：

| 文件 | 读它的场景 |
|---|---|
| `59-dialogue-comparison-reference.md` | 对白自然度、Agent 初稿/用户改稿对比、台词样本训练 |
| `60-antagonist-world-synchronous-escalation.md` | 反派压力、世界升级、主角成长节奏同步 |

后续新增或重命名时，优先避免继续产生同号文件；如果历史文件暂不重排，索引里必须写完整文件名。

## 4. 常见误用

- 不要只读 `06-ai-writing-guidelines.md` 就开始写；降 AI 味不是风格滤镜，还需要 `11` 的人物现场感和 `32` 的动作段落。
- 不要只读 `04-character-and-dialogue.md` 就硬加金句；对白先要自然，再考虑锋利、幽默或压场。
- 不要用 `05-plot-and-serial-rhythm.md` 的大纲推断覆盖 `07-continuity-ledger.md` 的正稿事实。
- 不要把 `59-dialogue-comparison-reference.md` 当外部名句库；它是对比案例和功能拆解，不能复制成目标作品台词。
- 不要把 `32-chapter-paragraph-mobile-reading-experience.md` 理解成“多切短句”；手机阅读也需要自然的长短句变化和因果承接。

## 5. 和其他目录的衔接

| 如果问题继续扩展到 | 转去 |
|---|---|
| 写手、试读、审稿、改稿闭环 | `../workflows/58-integrated-drafting-beta-review-revision-workflow.md` |
| 审稿反馈、数据掉点、读者评论 | `../feedback-revision/README.md` |
| 题材、包装、读者承诺 | `../market-serialization/README.md` |
| 机制、关系、情绪、悬疑、喜剧和卷结构 | `../storycraft/README.md` |
| 职业、行业、地域、制度细节 | `../reality-reference/README.md` |

## 6. 最小读取建议

轻量润色：`32` + `11`。  
人物对白：`37` + `04` + `59-dialogue`。  
完整章节起草：`02` + `05` + `32` + `06` + `11` + `07`。  
连续性修复：`07` + `100` + `106`。  
反 AI 味重写：`11` + `06` + `37` + `32`。
