# 决策记录

## 2026-05-31 初始化知识库

- 已确认：本项目主题是“学习如何写网文”，目标是给后续 AI 写网文提供权威参考资料。
- 已确认：本项目不是单本小说项目，而是通用知识库，因此可以沉淀通用写作方法。
- 已确认：文档不能只写总结结论，要尽量展开适用场景、操作方法、风险、检查问题和案例。
- 已确认：第一版参考来源包括抽象化通用写作方法、匿名旧项目样本 `匿名旧项目A`、匿名旧项目样本 `匿名旧项目B`、匿名编辑反馈样本和匿名读者反馈样本。
- 已确认：中文文档统一使用 UTF-8。

## 2026-05-31 增补人味增强专题

- 背景：试写后发现人物不够丰满鲜活、剧情生硬、读者黏着性不高、缺少梗点、情绪寡淡。
- 已确认：新增 `docs/11-human-writing-upgrade.md`，作为起草和修订时的必读专题。
- 已确认：后续遇到类似问题时，不只润色句子，要优先检查人物自保动作、剧情因果链、章节承诺进度、梗点来源和情绪触点。
- 已确认：新增联网资料来源登记到 `docs/01-source-inventory.md`。

## 2026-06-08 建立联网资料滚动沉淀机制

- 背景：用户确认本知识库的目标是持续完善为 AI agents 可用的中文网文权威参考资料，并要求不断从网络查找资料、沉淀到文档中。
- 已确认：后续联网资料优先选择平台公开资料、作家专区、行业观察和能直接转化为写作检查项的资料。
- 已确认：联网资料必须先登记到 `docs/01-source-inventory.md`，再写入对应专题文档或模板。
- 已确认：本轮新增“平台开篇、爽点与低质内容治理”资料，重点转化为开篇留存、爽点变量、读者脑补空间、AI 低质内容红线和联网资料沉淀模板。

## 2026-06-08 增补前 10 章商业拍表规则

- 背景：为了让 AI agents 在搭建新书时不只列事件，而能完成商业连载的开篇验证，本轮补充前 10 章规划规则。
- 已确认：前 10 章应被视为小型商业验证，至少验证主角入场、类型承诺、主线方向、可重复爽点、第一轮落袋和更大问题。
- 已确认：新增五段式交付：第 1 章入场，第 2-3 章证明，第 4-5 章入轨，第 6-8 章换招，第 9-10 章回报。
- 已确认：章节拍表新增“章节转折”和“读者进度感”，防止 AI 把前 10 章写成事件列表。

## 2026-06-08 增补 AI 审稿评分表

- 背景：为了让 AI agents 审稿时不只输出主观体感，本轮把审稿拆成可量化维度。
- 已确认：审稿评分采用 100 分制，维度包括类型承诺、连载动力、文本执行、人物与关系、AI 含量风险和修改成本。
- 已确认：分数必须绑定文本证据和读者影响，不能只给数字。
- 已确认：新增一票降级规则，覆盖开篇类型承诺缺失、主角长期无主动选择、大量低质 AI 文特征和材料不足等情况。

## 2026-06-09 增补平台与频道差异专题

- 背景：为了让 AI agents 在写新书、审稿或改稿前先判断平台/频道适配，本轮新增平台差异专题。
- 已确认：新增 `docs/12-platform-and-channel-differences.md`，作为选平台、定频道、审稿适配和改稿方向判断的专题文档。
- 已确认：平台/频道差异应被视为读者期待模型，而不是性别刻板印象或固定创作边界。
- 已确认：新增平台/频道定位卡，用于在项目简报前明确目标平台、目标频道、主承诺、副承诺和错频道风险。

## 2026-06-09 增补题材类型拆解表

- 背景：平台/频道差异解决“写给谁”，但 AI agents 仍需要判断具体题材该兑现什么读者承诺。
- 已确认：新增 `docs/13-genre-patterns.md`，覆盖玄幻/仙侠、都市脑洞/神豪、现言、古言、悬疑/规则怪谈、快穿/无限/副本、系统/金手指、无 CP/成长流、群像喜剧和种田经营等题材。
- 已确认：每个题材必须拆成核心承诺、第一章证明、长篇引擎、章节回报和高危套路。
- 已确认：新增题材类型定位卡，用于在项目简报阶段明确主承诺、副承诺和融合题材分工。

## 2026-06-09 增补金手指与机制设计专题

- 背景：系统、重生、穿书、空间、读心、弹幕、规则反杀等机制是 AI 写网文时最容易写成自动外挂的部分，需要单独建立设计规则。
- 已确认：新增 `docs/14-mechanism-and-cheat-design.md`，覆盖机制承诺、触发条件、输出结果、限制边界、使用代价、失败方式、对手反制和升级路径。
- 已确认：机制必须让主角更主动，而不是替主角自动赢。
- 已确认：新增金手指/机制设计卡，用于在项目简报阶段明确机制规则和防滥用自检。

## 2026-06-09 增补人物关系类型库

- 背景：人物不鲜活、情绪淡和读者不黏，常常不是单个人物卡不够，而是人物之间缺少关系张力、欠账和阶段回报。
- 已确认：新增 `docs/15-character-relationship-patterns.md`，覆盖师徒、宿敌、搭档、暧昧/恋爱、家族、主仆/上下级、旧友/前任、群像等关系类型。
- 已确认：人物关系必须服务剧情推进和读者回报，不能只靠称呼、身份或旁白说明成立。
- 已确认：新增人物关系设计卡，用于记录关系轴、关系欠账、阶段进度和防工具化自检。
## 2026-06-09 增补书名简介标签包装专项

- 背景：为了让 AI agents 在开书、审稿和改稿时不只生成正文，还能判断书名、简介、标签、分类和第一章是否构成一致的读者承诺，本轮新增外包装专项。
- 已确认：新增 `docs/16-title-blurb-tag-packaging.md`，作为书名、简介/文案、标签/分类、目标读者和第一章承诺一致性的专题文档。
- 已确认：书名、简介和标签不是营销装饰，而是作品基础定位和读者承诺链的一部分。
- 已确认：新增书名简介标签包装卡，用于在项目简报阶段记录候选书名、标签、简介和承诺一致性检查。
- 已确认：涉及平台后台规则、标签体系、签约后修改条件和多书名实验等时效性信息，正式使用前必须重新确认最新平台规则。

## 2026-06-09 增补封面与视觉包装专项

- 背景：书名、简介和标签解决文字外包装，但 AI agents 仍需要判断封面、缩略图和视觉风格是否正确吸引目标读者，并避免平台合规和版权风险。
- 已确认：新增 `docs/17-cover-visual-packaging.md`，作为封面、缩略图、视觉风格、版权合规和第一章承诺一致性的专题文档。
- 已确认：封面是视觉版书名，必须服务书名、简介、标签和正文开篇，不能只按审美或流行图感生成。
- 已确认：新增封面与视觉包装卡，用于记录视觉承诺、缩略图可读性、平台合规、版权来源和承诺一致性检查。
- 已确认：涉及平台封面尺寸、格式、默认封面推荐资格、审核要求、修改流程和版权授权时，正式发布前必须重新确认最新平台规则。

## 2026-06-09 增补读者数据与反馈诊断专项

- 背景：知识库已有审稿、试读、包装和封面规则，但缺少作品发布后用点击、读完率、追读、评论和读者反馈反推问题的诊断闭环。
- 已确认：新增 `docs/18-reader-data-feedback-diagnosis.md`，作为数据与反馈复盘的专题文档。
- 已确认：数据是现象，不是病因；AI 必须把指标放回曝光、点击、阅读、读完、追读、互动、订阅和收益的读者路径中判断。
- 已确认：不能编造后台数据，不能把单条评论当总体结论，不能把平台旧公告、社区经验或单本案例当通用阈值。
- 已确认：新增数据与反馈诊断模板，用于记录数据周期、评论聚类、诊断归因、修改优先级和观察窗口。

## 2026-06-09 增补连载更新与发布运营专项

- 背景：知识库已有章节节奏和数据诊断规则，但缺少发布层面的更新频率、存稿、推荐期、定时发布、断更恢复和爆更质量控制。
- 已确认：新增 `docs/19-serialization-update-operations.md`，作为连载更新与发布运营的专题文档。
- 已确认：发布节奏是读者信任管理，不能为了日更、补更或爆更牺牲章节转折、落袋回报、章末钩子和连续性。
- 已确认：存稿只有通过章节自检后才算可发布存稿，未质检草稿不能作为稳定更新保障。
- 已确认：新增连载更新复盘模板，用于记录计划更新、实际更新、存稿状态、运营节点、数据评论和禁止动作。

## 2026-06-09 增补内容合规与风险审核专项

- 背景：知识库已有写作质量、包装、发布和数据复盘规则，但缺少内容安全、平台审核、版权、AI 标识和低质内容治理的统一风险检查。
- 已确认：新增 `docs/20-content-compliance-risk-review.md`，作为内容合规与风险审核专题文档。
- 已确认：合规风险要前置到题材、设定、人物关系、封面、简介、标签和发布流程，不只是发布前扫敏感词。
- 已确认：AI agents 不能编造平台规则、审核结果、授权证明或法律结论；涉及正式发布、签约、授权、商业化或争议处理时必须重新确认最新规则。
- 已确认：新增内容合规与风险审核模板，用于记录风险扫描、证据、风险等级、暂停发布判断、修改建议和待确认事项。

## 2026-06-09 增补反派与阻力系统专项

状态：已确认。

决策：新增 `docs/21-antagonist-opposition-system.md`，把反派、对手、竞争者、组织阻力、制度阻力、环境阻力和内在阻力统一整理为“阻力系统”。后续 AI agents 设计持续 3 章以上的对手戏时，必须先明确对手资源、战术、误判、失败后后果和主角落袋回报。

原因：仅靠“反派嘲讽-主角打脸”会导致对手降智、爽点变轻、冲突重复、读者疲劳。商业级网文需要先托高对手，再让主角通过机制、人设、信息和关系完成反制。

执行：`docs/04-character-and-dialogue.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/10-templates-and-checklists.md` 已加入联动入口；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补开篇三章与前 30 章留存模型

状态：已确认。

决策：新增 `docs/22-opening-retention-model.md`，把“黄金三章”从口号转化为 AI agents 可执行的连续留存模型：外包装承诺 -> 第一章抓住 -> 前 3-6 章证明 -> 前 10 章落袋 -> 前 30 章入轨。

原因：开篇不是固定三章套路，而是读者耐心值管理。AI 写开篇常见问题是第一章硬炸、设定堆砌、主角晚出场、前三章后泄气，或只留悬念不兑现。商业级新书需要让读者连续确认：这本书是我想看的类型，主角值得跟，卖点能兑现，后续有稳定追读引擎。

执行：`README.md`、`docs/00-index.md`、`docs/02-webnovel-principles.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/16-title-blurb-tag-packaging.md`、`docs/10-templates-and-checklists.md` 已加入联动入口；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补中段防水与卷结构专题

状态：已确认。

决策：新增 `docs/23-midbook-volume-structure.md`，把 30 章后的长篇推进整理为“状态增量 -> 单元回报 -> 卷级故事 -> 卷末结算 -> 下一卷牵引”的 AI 执行模型。后续 AI agents 规划中段、换地图、写新卷、修订追读下滑或处理支线膨胀时，必须检查每章状态增量、支线功能、卷中点转折和卷末结算。

原因：AI 长篇最容易在开篇后进入重复升级、重复打脸、支线膨胀、赶路开会和设定解释。商业级网文中段可以慢，但不能没有增量；可以休整，但必须带来关系、资源、信息、目标或世界状态变化。

执行：`README.md`、`docs/00-index.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/07-continuity-ledger.md`、`docs/18-reader-data-feedback-diagnosis.md`、`docs/19-serialization-update-operations.md`、`docs/10-templates-and-checklists.md` 已加入联动入口；`docs/01-source-inventory.md` 已登记联网来源。同步清理了 README 和索引中上一轮产生的重复/夹注入口。

## 2026-06-09 增补结尾、完本与烂尾风险控制专题

状态：已确认。

决策：新增 `docs/24-ending-completion-risk-control.md`，把最后一卷、大结局、番外、完本申请和烂尾风险整理为“开篇承诺 -> 中段旋涡 -> 终局冲突 -> 核心兑现 -> 余波谢幕 -> 完本状态”的 AI 执行模型。后续 AI agents 处理终局时，必须先生成终局台账，区分必须回收、可以留白、可以番外和可以续作的事项。

原因：AI 长篇最容易在终局阶段出现仓促完结、数据驱动腰斩、伏笔不回、主线未解、天降解法、番外补主线和开放式结局误用。商业级完本需要兑现开篇承诺、解决主冲突、证明人物弧、回收关键伏笔、给最终情绪，并按平台最新规则完成发布。

执行：`README.md`、`docs/00-index.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/07-continuity-ledger.md`、`docs/08-review-and-reader-feedback.md`、`docs/18-reader-data-feedback-diagnosis.md`、`docs/19-serialization-update-operations.md`、`docs/23-midbook-volume-structure.md`、`docs/10-templates-and-checklists.md` 已加入联动入口；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补女频情绪线与关系推进专题

状态：已确认。

决策：新增 `docs/25-emotion-line-relationship-progression.md`，把感情线、暧昧线、误会、情敌、追妻/追夫、CP 化学反应、情绪债和关系阶段回报整理为 AI agents 可执行的关系推进模型。后续 AI 处理女频、言情、甜宠、虐恋、强关系副线或任何“人物不心动、关系不黏”的问题时，必须检查关系前状态、触发事件、情绪误读/压力、可见选择、关系后状态和读者期待。

原因：AI 写情绪线常见问题是只撒糖不推进、只误会不解决、只虐不补偿、只写亲密动作不写关系变化、女主或关系核心人物失去能动性。商业级强关系叙事需要让小事有特殊性，让情绪债有阶段回报，让关系线和主线互相改变。

执行：`README.md`、`docs/00-index.md`、`docs/04-character-and-dialogue.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/08-review-and-reader-feedback.md`、`docs/10-templates-and-checklists.md`、`docs/11-human-writing-upgrade.md`、`docs/12-platform-and-channel-differences.md`、`docs/13-genre-patterns.md`、`docs/15-character-relationship-patterns.md`、`docs/18-reader-data-feedback-diagnosis.md` 已加入联动入口；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补悬疑、反转与信息差控制专题

状态：已确认。

决策：新增 `docs/26-suspense-reversal-information-control.md`，把谜团、伏笔、线索、红鲱鱼、断章、反转和信息差整理为 AI agents 可执行的真相台账与审稿模型。后续 AI 处理悬疑、规则怪谈、无限副本、权谋阴谋、身份真相、机制真相或任何“反转/伏笔/谜团”时，必须记录最终真相、表面误读、读者/主角/对手知道什么、真线索、误导线索、阶段揭示和回收位置。

原因：AI 写悬疑常见问题是作者知道但不说、谜语人台词、反转空降、伏笔失踪、红鲱鱼无意义、连续加坑不解决和断章不兑现。商业级信息差叙事必须让读者有可追问题、可判断材料、阶段进度和回看成立的公平反转。

执行：`README.md`、`docs/00-index.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/07-continuity-ledger.md`、`docs/08-review-and-reader-feedback.md`、`docs/10-templates-and-checklists.md`、`docs/13-genre-patterns.md`、`docs/18-reader-data-feedback-diagnosis.md`、`docs/20-content-compliance-risk-review.md`、`docs/21-antagonist-opposition-system.md`、`docs/23-midbook-volume-structure.md`、`docs/24-ending-completion-risk-control.md` 已加入联动入口；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补喜剧、梗点与轻松感专题

状态：已确认。

决策：新增 `docs/27-comedy-gags-lightness.md`，把轻喜剧、沙雕文、吐槽文、群像喜剧、对话体轻小说、热梗、人物癖好、重复变体和轻松章节整理为 AI agents 可执行的喜剧设计模型。后续 AI 处理“没有梗、不好笑、轻松感弱、人物像段子机器、日常像水”的问题时，必须检查生活入口、人物癖好、错位链路、笑点后果和重复变体。

原因：AI 写喜剧常见问题是硬塞段子、全员同声吐槽、热梗过期、重复抖包袱、为搞笑降智、轻松章节没有状态增量。商业级轻松文需要让梗点服务人物、关系、机制、世界或剧情推进，让笑点产生后果和回响。

执行：`README.md`、`docs/00-index.md`、`docs/02-webnovel-principles.md`、`docs/04-character-and-dialogue.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/09-case-notes.md`、`docs/10-templates-and-checklists.md`、`docs/11-human-writing-upgrade.md`、`docs/13-genre-patterns.md`、`docs/18-reader-data-feedback-diagnosis.md` 已加入联动入口或案例；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补项目风格手册与角色声音规范专题

状态：已确认。

决策：新增 `docs/37-project-style-bible-character-voice.md`，把项目整体声音、旁白距离、角色声音矩阵、称呼术语样式表、风格样例边界、可保留粗糙和多 agent 续写交接整理为 AI agents 可执行规范。

原因：AI 写长篇时常见问题不是单章不通顺，而是人物同声、旁白漂移、口癖泛滥、称呼术语不一致，以及修订时把有效的人物缺陷和文本粗糙改平。商业级长篇需要把声音当作连续性资产维护。

执行：`README.md`、`docs/00-index.md`、`docs/04-character-and-dialogue.md`、`docs/06-ai-writing-guidelines.md`、`docs/10-templates-and-checklists.md`、`docs/11-human-writing-upgrade.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/36-prompt-context-packaging.md` 已加入联动入口或模板；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补章节生产流水线与多 agent 交接规范专题

状态：已确认。

决策：新增 `docs/38-chapter-production-pipeline-agent-handoff.md`，把章节生产拆成任务识别、上下文封包、章节设计、正文起草、风格连续性初检、商业审稿、修订执行、台账/风格手册回写和下一章任务生成，并定义总控、封包、起草、风格守门、连续性、审稿、修订、发布复盘等 agent 的职责边界。

原因：AI 批量写长篇时常见问题是一个 agent 同时写、审、改、记账，导致正文夹杂说明、审稿越权改文、修订改平、台账欠债和上下文接力污染。商业级网文生产需要可交接的流水线、质量闸门和回写机制。

执行：`README.md`、`docs/00-index.md`、`docs/06-ai-writing-guidelines.md`、`docs/07-continuity-ledger.md`、`docs/08-review-and-reader-feedback.md`、`docs/10-templates-and-checklists.md`、`docs/33-revision-rewrite-version-workflow.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/36-prompt-context-packaging.md`、`docs/37-project-style-bible-character-voice.md` 已加入联动入口或模板；`docs/01-source-inventory.md` 已登记联网来源。

## 2026-06-09 增补开篇试写与 A/B 版本评估规范专题

状态：已确认。

决策：新增 `docs/39-opening-variant-ab-evaluation.md`，作为新书开头、第一章重写、包装正文联测、多个开篇方案取舍时的强制参考文档。

理由：现有知识库已经覆盖开篇留存、读者预期、包装、数据诊断和章节流水线，但缺少一个把多个开篇候选方案转成可评估实验的规范。该专题要求 agent 先锁定同一个主承诺，再设计版本假设、控制变量、收集盲评或数据，并把胜出版本同步到项目圣经、章节流水线和交接包。

执行规则：后续任务中，只要用户要求“试几个开头”“比较第一章”“重写开篇”“包装和正文哪个更好”“点击好但追读差”等，都应读取 `docs/39-opening-variant-ab-evaluation.md`，不得只凭文采或个人口味做版本选择。

## 2026-06-09：新增连载期数据调参与观察窗口闭环

状态：已确认。

决策：新增 `docs/40-serial-data-tuning-loop.md`，作为作品发布后处理数据波动、评论风向、推荐期调参、上架付费转化、断更恢复和爆更后复盘的权威入口。

原因：已有文档已经覆盖读者数据诊断、连载更新运营、开篇测试、章节流水线和修订流程，但缺少一个把“数据现象 -> 病因定位 -> 最小调参 -> 观察窗口 -> 复盘记录”串起来的执行闭环。AI agent 如果没有这个闭环，容易看见单日数据或单条评论就大改，破坏连载稳定性。

规则：

- 连载期调参必须一次只改一个关键变量，并记录观察窗口。
- 推荐期、包装修改、断更恢复、爆更后，都不能立刻把单日波动定性为文本失败。
- 评论反馈必须聚类，正反馈也要记录为作品资产。
- 已发布文本优先轻修、微调和后文补偿；结构性大改必须进入 `docs/33-revision-rewrite-version-workflow.md`。
- 缺少后台数据时不得伪造数字，只能标记为“数据缺失：待确认”或“候选判断”。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加连载期调参入口。
- `docs/18-reader-data-feedback-diagnosis.md`、`docs/19-serialization-update-operations.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/08-review-and-reader-feedback.md`、`docs/33-revision-rewrite-version-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“连载期数据调参与观察窗口卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增读者评论语料标注与反馈聚类协议

状态：已确认。

决策：新增 `docs/41-reader-comment-coding-feedback-clustering.md`，作为处理评论、章评、书评、试读反馈、匿名读者反馈、编辑反馈和评论区风向的权威入口。

原因：已有文档已经要求“评论要聚类，不看单句”，但缺少可执行的标注字段、标签体系、证据强度和从反馈到修订动作的转译流程。AI agent 如果没有统一协议，容易被尖锐评论牵着走，或者只做情绪总结而不能形成可复盘的改稿任务。

规则：

- 评论原文必须先拆成观察点，再打标签和聚类。
- 一条评论可以有多个观察点，不能只贴一个总标签。
- 必须区分读者问题和读者建议；读者建议不自动等于改稿方案。
- 正反馈必须沉淀为作品资产，修订时先列不能误伤项。
- 冲突反馈按目标读者、阅读阶段、主承诺和后果风险分层处理，不能简单按票数决定。
- 涉及隐私、辱骂、合规、版权或现实伤害时，先进入内容合规与风险审核。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加评论语料入口。
- `docs/08-review-and-reader-feedback.md`、`docs/18-reader-data-feedback-diagnosis.md`、`docs/33-revision-rewrite-version-workflow.md`、`docs/40-serial-data-tuning-loop.md`、`docs/11-human-writing-upgrade.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“读者评论标注与反馈聚类报告模板”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增编辑、读者与数据反馈冲突处理规范

状态：已确认。

决策：新增 `docs/42-editor-reader-data-feedback-conflict-resolution.md`，作为编辑建议、读者评论、后台数据、作者直觉、项目主承诺和平台合规互相冲突时的权威决策入口。

原因：已有文档已经覆盖审稿、评论聚类、数据诊断、连载调参和修订流程，但仍缺少“多方反馈互相打架时怎么取舍”的上层规则。AI agent 如果没有该规则，容易简单按票数、按最尖锐意见、按编辑单句或按单日数据大改，导致误伤作品有效资产。

规则：

- 反馈冲突不能简单投票，必须先拆分来源、问题感受、建议动作和证据强度。
- 合规与发布风险优先级最高，不能用读者喜欢或数据上涨抵消。
- 编辑反馈要先理解其指出的问题，再决定是否采纳具体改法。
- 读者反馈要区分目标读者和非目标读者，读者感受必须判断，读者改法不自动采纳。
- 数据反馈只证明行为变化，不直接证明病因，必须配合文本诊断和观察窗口。
- 每次决策必须写明采纳、不采纳、转译采纳或暂缓观察的理由，并记录不改清单。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加反馈冲突处理入口。
- `docs/08-review-and-reader-feedback.md`、`docs/18-reader-data-feedback-diagnosis.md`、`docs/33-revision-rewrite-version-workflow.md`、`docs/40-serial-data-tuning-loop.md`、`docs/41-reader-comment-coding-feedback-clustering.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/36-prompt-context-packaging.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“编辑/读者/数据反馈冲突决策卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增商业级开书立项评分与淘汰机制

状态：已确认。

决策：新增 `docs/43-commercial-project-greenlight-scorecard.md`，作为新书点子、开书前判断、重定方向、项目暂缓、项目重构和项目淘汰的权威入口。

原因：已有文档覆盖市场调研、读者承诺、平台频道、题材类型、包装、开篇留存和 A/B 测试，但缺少一个统一的“能否立项”评分门。AI agent 如果没有这个门槛，容易被一个新鲜设定、热门标签或漂亮开篇带着直接批量起草，后续才发现目标读者不清、长线引擎不足、包装承诺错位或合规风险不可控。

规则：

- 开书前必须先判断目标读者、主承诺、市场位置、开篇验证、长线引擎、包装承接、风险成本和测试计划。
- 总分低于 70 的项目不能进入完整章节起草；只能补强、测试、重构或淘汰。
- 触发一票否决项时，即使总分较高，也不能直接立项。
- 最小验证样本必须足以体现核心承诺，不能用低质样本测试目标读者。
- 淘汰项目要记录原因并回收可用资产，防止重复消耗创作预算。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加商业级开书立项评分入口。
- `docs/03-project-workflow.md`、`docs/34-market-research-comp-analysis.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/29-reader-expectation-genre-promise-selling-point.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“商业级开书立项评分卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增单本小说项目初始化最小文档包规范

状态：已确认。

决策：新增 `docs/44-single-novel-project-initialization-package.md`，作为新书通过立项后创建单本小说项目、生成目录、建立最小文档包、准备台账和风格手册、判断能否进入第一章生产的权威入口。

原因：已有文档覆盖项目流程、总控路线、提示词封包、风格手册、章节流水线、连续性台账和立项评分，但缺少一个把这些规则落到单本小说项目文件结构上的执行规范。AI agent 如果只创建空目录或直接写正文，会导致候选设定混入已确认事实、正文夹杂工作说明、台账缺失和多 agent 接力失控。

规则：

- 通过立项不等于可以立刻写正文，必须先建立最小文档包。
- 项目初始化必须区分“已确认”“候选”“待确认”。
- 单本项目只记录项目专属事实和决策，不整段复制通用写作方法。
- 第一章任务单齐备前，不得创建或起草 `ch001.md`。
- 正文文件只放读者可见内容；大纲、自检、审稿、台账和作者说明放入项目文档。
- 初始化完成后必须输出第一章生产许可：可进入第一章、只能补文档、只能做小样或暂停。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加单本小说项目初始化入口。
- `docs/03-project-workflow.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/36-prompt-context-packaging.md`、`docs/37-project-style-bible-character-voice.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/43-commercial-project-greenlight-scorecard.md`、`docs/07-continuity-ledger.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“单本小说项目初始化报告模板”。
- `docs/01-source-inventory.md` 登记本轮外部来源和抽象化方法来源。

## 2026-06-09：新增第一章任务单与开篇生产许可专项

状态：已确认。

决策：新增 `docs/45-first-chapter-task-brief-production-gate.md`，作为第一章起草、第一章重写、开篇 A/B 版本放行、判断 `ch001.md` 是否可以开写，以及第一章写后回写的权威入口。

原因：已有文档已经覆盖开篇留存模型、项目初始化、章节流水线和开篇 A/B 评估，但仍缺少一个专门的第一章生产闸门。AI agent 如果没有这个闸门，容易在任务单不齐、风格手册缺失、台账未建或主承诺未落场景时直接写正文，导致第一章只有设定说明、主角被动、卖点不可见或正文夹杂作者工作说明。

规则：

- 第一章任务单不齐，不能写 `ch001.md`。
- 第一章起草前必须检查项目许可、任务许可和输出许可。
- 第一章必须有主角或核心视角、当下压力、主角主动选择、类型承诺、场景化信息、短回报和下一章欲望。
- `ch001.md` 只放读者可见正文，不放任务单、自检、台账、审稿意见或作者说明。
- 写完第一章后，必须另行输出台账更新项、风格手册更新项和下一章任务建议。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第一章生产许可入口。
- `docs/22-opening-retention-model.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/39-opening-variant-ab-evaluation.md`、`docs/44-single-novel-project-initialization-package.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/36-prompt-context-packaging.md`、`docs/37-project-style-bible-character-voice.md`、`docs/07-continuity-ledger.md`、`docs/32-chapter-paragraph-mobile-reading-experience.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第一章生产许可卡”和“第一章写后回写卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增前三章生产与承诺兑现专项

状态：已确认。

决策：新增 `docs/46-first-three-chapters-promise-fulfillment.md`，作为第 1 章完成后生成第 2-3 章任务、审稿前三章、处理“首章强但后续掉速”、判断是否进入第 4-5 章入轨的权威入口。

原因：已有文档覆盖开篇三章模型、第一章生产许可、章节流水线和 A/B 评估，但缺少第 2-3 章的执行级规则。AI agent 如果只会写一个强首章，后续常会出现第二章复述、众人震惊、解释设定、第三章换题、卖点断档和前十章无落袋方向。

规则：

- 前三章是一条承诺验证链：第 1 章入场，第 2 章兑现，第 3 章证明。
- 第 2 章必须承接或转化第 1 章章末钩子，把主角选择变成后果，并给第一轮短回报。
- 第 3 章必须再次证明核心卖点，让阻力升级或目标更清晰，并露出前 10 章落袋方向。
- 前三章完成后必须检查主角处境、资源、关系、信息、风险或目标是否发生状态变化。
- 如果三章后只新增设定知识，没有状态变化，不能进入第 4-5 章。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加前三章承诺兑现入口。
- `docs/22-opening-retention-model.md`、`docs/45-first-chapter-task-brief-production-gate.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/39-opening-variant-ab-evaluation.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/29-reader-expectation-genre-promise-selling-point.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“前三章承诺兑现生产卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增第 4-5 章入轨与阶段目标公开专项

状态：已确认。

决策：新增 `docs/47-chapters-4-5-track-stage-goal.md`，作为前三章完成后设计第 4-5 章、公开阶段目标、安排阻力升级、判断是否进入第 6-8 章换招的权威入口。

原因：已有文档覆盖前 10 章五段式交付、开篇留存模型和前三章承诺兑现，但第 4-5 章“入轨”仍缺少执行级规则。AI agent 如果只知道前三章要证明卖点，后续容易继续铺设定、只拿资格不拿目标、让对手无反应，导致第 5 章后仍看不出前 10 章要落袋什么。

规则：

- 第 4-5 章必须完成入轨五件套：阶段目标、行动路线、阻力升级、回报币种和可重复引擎。
- 第 4 章负责让读者知道主角接下来要争什么。
- 第 5 章负责让阻力开始自保，并让前 10 章落袋更清楚。
- 只加危机不等于入轨，必须让主角处境、资源、关系、信息、风险或目标发生变化。
- 第 5 章后如果第 6-8 章换招方向不清，不能继续批量起草。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第 4-5 章入轨入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/22-opening-retention-model.md`、`docs/46-first-three-chapters-promise-fulfillment.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/29-reader-expectation-genre-promise-selling-point.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第 4-5 章入轨与阶段目标公开卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增第 6-8 章换招、阻力升级与新鲜感专项

状态：已确认。

决策：新增 `docs/48-chapters-6-8-variation-escalation.md`，作为第 4-5 章入轨后设计第 6-8 章、安排对手反制、暴露机制限制、避免同一爽点横向重复，并判断是否进入第 9-10 章落袋的权威入口。

原因：已有文档覆盖前 10 章五段式、阻力系统、金手指机制、开篇留存和第 4-5 章入轨，但第 6-8 章“换招”缺少执行级规则。AI agent 如果只按惯性续写，容易连续使用同一金手指、同一打脸流程、同一围观反应，导致读者在第 9-10 章落袋前已经疲劳。

规则：

- 第 6-8 章必须完成换招四件套：换场景、换阻力、换方法、换回报形态。
- 第 6 章负责让旧招受限，第 7 章负责让主角换方法，第 8 章负责把落袋推到结算前夜。
- 换招必须来自前文资产，不能用新外挂、配角空降或作者补设定解决。
- 对手或阻力必须至少升级一次，并改变主角行动方式。
- 第 8 章后如果回报币种仍不具体，不能进入第 9-10 章。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第 6-8 章换招入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/21-antagonist-opposition-system.md`、`docs/22-opening-retention-model.md`、`docs/47-chapters-4-5-track-stage-goal.md`、`docs/46-first-three-chapters-promise-fulfillment.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/14-mechanism-and-cheat-design.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第 6-8 章换招与阻力升级卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增第 9-10 章第一轮落袋与更大问题专项

状态：已确认。

决策：新增 `docs/49-chapters-9-10-first-payoff-next-hook.md`，作为第 6-8 章换招完成后设计第 9-10 章结算、判断第一轮回报是否落袋、余波和更大问题是否足以牵引第 11-15 章的权威入口。

原因：已有文档覆盖前 10 章五段式、开篇留存和第 6-8 章换招，但第 9-10 章“回报”仍缺少执行级规则。AI agent 如果只写“赢了”或“众人震惊”，没有硬收益/硬代价、公开结果、余波和更大问题，前 10 章就不能证明作者兑现能力。

规则：

- 第 9-10 章必须完成第一轮落袋五件套：承诺兑现、硬收益/硬代价、公开结果、余波和更大问题。
- 第 9 章负责让结算不可避免，第 10 章负责落袋、余波并打开更大问题。
- 落袋结果必须来自前文铺垫，不能靠临时外挂、临时证据或临时设定。
- 第 10 章后如果主角状态没有改变，或第 11-15 章第二轮目标不清，不能继续批量起草。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第 9-10 章落袋入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/22-opening-retention-model.md`、`docs/48-chapters-6-8-variation-escalation.md`、`docs/47-chapters-4-5-track-stage-goal.md`、`docs/46-first-three-chapters-promise-fulfillment.md`、`docs/21-antagonist-opposition-system.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第 9-10 章第一轮落袋卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增第 11-15 章第二轮展开与新问题接续专项

状态：已确认。

决策：新增 `docs/50-chapters-11-15-second-cycle-expansion.md`，作为第 9-10 章第一轮落袋后设计第 11-15 章第二轮目标、新规则试探、对手压迫点、主角换策略、第 15 章小回报和第 16-20 章牵引的权威入口。

原因：已有文档已经覆盖前 10 章承诺、入轨、换招和落袋，但第 10 章之后仍容易出现二次开篇、换地图设定灌输、同一爽点横向重复、对手不学习、只铺垫不回报等问题。第 11-15 章必须证明故事能持续运转，而不是只会写一次开篇爽点。

规则：

- 第 11 章必须从第 10 章余波出发，把余波转成第二轮任务。
- 第 12 章必须用前 10 章旧资产试探新规则，结果应是 yes-but 或 no-and。
- 第 13 章必须出现对手、制度、关系、环境或机制压迫点，迫使主角不能直线复制旧招。
- 第 14 章必须让主角基于已有资产主动换策略。
- 第 15 章必须落下小回报、代价和第 16-20 章牵引。
- 第 11-15 章至少要在阻力、方法、回报、代价、关系、信息等维度中变化两项。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第 11-15 章第二轮展开入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/22-opening-retention-model.md`、`docs/49-chapters-9-10-first-payoff-next-hook.md`、`docs/48-chapters-6-8-variation-escalation.md`、`docs/47-chapters-4-5-track-stage-goal.md`、`docs/46-first-three-chapters-promise-fulfillment.md`、`docs/21-antagonist-opposition-system.md`、`docs/14-mechanism-and-cheat-design.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第 11-15 章第二轮展开卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增第 16-20 章第三轮推进与小高潮预备专项

状态：已确认。

决策：新增 `docs/51-chapters-16-20-third-cycle-mini-climax.md`，作为第 11-15 章第二轮展开后设计第 16-20 章第三轮目标、循环引擎、压迫升级、高成本选择、第 20 章小高潮或入轨确认、第 21-30 章牵引的权威入口。

原因：已有文档已经覆盖前 10 章落袋和第 11-15 章第二轮展开，但第 16-20 章仍容易出现空降新任务、纯设定灌输、只换地图不换引擎、对手升级只靠头衔、第 20 章只赢不入轨等问题。第 16-20 章必须证明作品已经具备可持续循环，而不是只靠前 15 章惯性。

规则：

- 第 16 章必须承接第 15 章小回报或钩子，不能空降新任务。
- 第 17 章必须展示至少一个循环引擎首次运转。
- 第 18 章必须出现对手、规则、关系、环境或机制压迫升级，并针对主角已有优势。
- 第 19 章必须形成高成本选择，不能只是小高潮前的准备章。
- 第 20 章必须有小胜、小败或代价胜，并确认至少一个可重复引擎。
- 第 20 章后必须能推出第 21-30 章目标和第 30 章阶段回报候选。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第 16-20 章第三轮推进入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/22-opening-retention-model.md`、`docs/23-midbook-volume-structure.md`、`docs/50-chapters-11-15-second-cycle-expansion.md`、`docs/49-chapters-9-10-first-payoff-next-hook.md`、`docs/48-chapters-6-8-variation-escalation.md`、`docs/21-antagonist-opposition-system.md`、`docs/14-mechanism-and-cheat-design.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第 16-20 章第三轮推进卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增第 21-30 章稳定追读与阶段高潮专项

状态：已确认。

决策：新增 `docs/52-chapters-21-30-stable-retention-stage-climax.md`，作为第 16-20 章小高潮或入轨确认后设计第 21-30 章稳定追读、十章目标、单元小结、阶段高潮、前 30 章闭环和 30 章后卷级推进交接的权威入口。

原因：已有文档已经覆盖前 10 章落袋、第 11-15 章第二轮展开和第 16-20 章入轨确认，但第 21-30 章仍容易出现重新开书、稳定水、只堆危机、阶段高潮没有选择成本、第 30 章只爆不交接等问题。前 30 章必须证明作品不仅会开头，还能形成稳定追读习惯和长篇发动机。

规则：

- 第 21 章必须承接第 20 章结果，明确第 21-30 章十章目标。
- 第 22-23 章必须有章内进展和旧资产回响，不能只过渡。
- 第 24 章必须让阻力第一次升级，并来自前文因果。
- 第 25 章必须有小胜、小败或代价胜，作为第 21-25 章单元小结。
- 第 26 章必须启动阶段高潮，第 27-28 章必须有反制、误判和代价集中。
- 第 29 章必须形成高成本选择，第 30 章必须有阶段结果、状态变化、长线牵引和台账交接。
- 第 30 章后必须能推出第 31-60 章候选方向，才能进入 30 章后卷级推进。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加第 21-30 章稳定追读入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/22-opening-retention-model.md`、`docs/23-midbook-volume-structure.md`、`docs/51-chapters-16-20-third-cycle-mini-climax.md`、`docs/50-chapters-11-15-second-cycle-expansion.md`、`docs/49-chapters-9-10-first-payoff-next-hook.md`、`docs/21-antagonist-opposition-system.md`、`docs/14-mechanism-and-cheat-design.md`、`docs/07-continuity-ledger.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“第 21-30 章稳定追读与阶段高潮卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增 30 章后第一卷推进与卷级结构专项

状态：已确认。

决策：新增 `docs/53-after-30-first-volume-structure.md`，作为前 30 章留存闭环后设计第 31 章以后第一卷/卷级推进、卷目标、小单元链、卷中转折、支线管理、卷末结算和下一卷牵引的权威入口。

原因：已有文档已经覆盖前 30 章闭环和中段防水总原则，但第 31 章以后仍容易出现重新开书、卷目标太虚、支线膨胀、每章无状态增量、卷中只加敌人、卷末只爆不结算等问题。30 章后必须把章节追读升级为卷级故事，让读者形成长期信任。

规则：

- 第 31 章必须承接第 30 章结果，公开本卷目标，不能重新开书。
- 本卷目标必须具体可结算，并有失败代价。
- 每个小单元必须有目标、阻力、回报、代价和对卷目标的推进。
- 卷中转折必须改变目标、规则、对手、关系、信息或代价，迫使主角换策略。
- 支线必须服务卷目标，并标注功能、代价、伏笔和退出/并入节点。
- 每章必须有状态增量，能说明目标、资源、关系、信息、风险、对手策略或规则理解发生了什么变化。
- 卷末必须回答本卷目标、更新台账，并让下一卷目标从本卷结果自然生长。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加 30 章后第一卷推进入口。
- `docs/05-plot-and-serial-rhythm.md`、`docs/22-opening-retention-model.md`、`docs/23-midbook-volume-structure.md`、`docs/52-chapters-21-30-stable-retention-stage-climax.md`、`docs/07-continuity-ledger.md`、`docs/21-antagonist-opposition-system.md`、`docs/14-mechanism-and-cheat-design.md`、`docs/29-reader-expectation-genre-promise-selling-point.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“30 章后第一卷推进卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增卷级支线管理与多线程收束专项

状态：已确认。

决策：新增 `docs/54-volume-subplot-thread-management.md`，作为 30 章后管理主线、人物线、关系线、悬念线、机制线、世界线、情绪线、伏笔和多 agent 线程交接的权威入口。

原因：已有文档已经覆盖卷级结构和第一卷推进，但支线管理仍主要散落在卷结构、台账、悬疑和人物文档中。AI agent 继续长篇时，容易开很多看似有趣的支线，却不知道何时交叉、回收、并入、延期或删除，导致中段散、水、坑多不收、人物线抢主线。

规则：

- 每条支线必须至少承担一种合法功能：推进主线、增加代价、加深人物、展开规则、回收伏笔或转换节奏。
- 每条支线必须写明服务的卷目标、改变的状态、交叉点、回报/代价和退出/并入/延期节点。
- 支线超过一个小单元没有和主线或其他关键线交叉，必须压缩、并入、延期或删除。
- 伏笔必须记录首次出现、表面理解、真实含义、下一次回响、阶段回收、最终回收和状态。
- 每个小单元结束后做线程小结；卷末必须完成线程清账。
- 多 agent 交接必须包含活跃线程、不可触碰线程、可回收伏笔和新增线程许可。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加卷级支线管理入口。
- `docs/23-midbook-volume-structure.md`、`docs/53-after-30-first-volume-structure.md`、`docs/52-chapters-21-30-stable-retention-stage-climax.md`、`docs/07-continuity-ledger.md`、`docs/26-suspense-reversal-information-control.md`、`docs/21-antagonist-opposition-system.md`、`docs/15-character-relationship-patterns.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“卷级支线与多线程管理卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增卷末结算、余波与下一卷牵引专项

状态：已确认。

决策：新增 `docs/55-volume-ending-settlement-next-hook.md`，作为卷末阶段高潮、结案、项目交付、关系质变、支线清账、余波落地和下一卷牵引的权威入口。

原因：已有文档已经覆盖卷级结构和多线程清账，但卷末仍容易出现只爆不结算、只结不牵、悬崖替债、余波太软、下一卷空降等问题。商业连载需要让读者在卷末同时获得满足感和追读动力，而不是用未结清的债强行拖到下一卷。

规则：

- 卷末必须先回答本卷目标，再打开下一卷问题。
- 卷末必须完成目标回答、公开结果、主角状态变化、支线清账、余波落地和下一卷牵引六件套。
- 卷末余波必须包含情绪余波、现实余波和行动余波。
- 下一卷牵引必须来自本卷结果、代价、对手反馈或认知变化，不能靠空降新敌人、新地图或新任务。
- 悬崖可以使用，但不能替代结算；如果删掉悬崖后本卷不成立，必须先补卷末。
- 卷末完成后必须生成“卷末到下一卷交接包”。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加卷末结算与下一卷牵引入口。
- `docs/23-midbook-volume-structure.md`、`docs/53-after-30-first-volume-structure.md`、`docs/54-volume-subplot-thread-management.md`、`docs/24-ending-completion-risk-control.md`、`docs/07-continuity-ledger.md`、`docs/21-antagonist-opposition-system.md`、`docs/26-suspense-reversal-information-control.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“卷末结算与下一卷牵引卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增卷间转场与新地图/新阶段启动专项

状态：已确认。

决策：新增 `docs/56-volume-transition-new-stage-launch.md`，作为卷末交接包之后开启下一卷、新地图、新副本、新项目、新案件、新组织层级或新关系阶段的权威入口。

原因：已有文档已经覆盖卷末结算与下一卷牵引，但下一卷开头仍容易像重新开书：旧卷资产断线、旧代价消失、换地图先灌设定、新敌人空降、新阶段目标过虚。卷间转场必须让旧卷结果在新阶段继续产生压力和价值。

规则：

- 新卷第一场景必须带入旧卷至少两个资产。
- 旧卷代价不能自动消失，必须至少影响一次新卷选择。
- 新阶段目标必须具体，并能在第一单元内看到小回报方向。
- 新地图或新规则必须通过行动压力展示，不能用设定百科开场。
- 新敌人、新任务或新地图必须和旧卷结果有因果关系。
- 新卷前五章必须完成承接余波、进入新规则、第一阻力、主角调整策略、第一单元小回报和更大压力。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加卷间转场入口。
- `docs/23-midbook-volume-structure.md`、`docs/53-after-30-first-volume-structure.md`、`docs/55-volume-ending-settlement-next-hook.md`、`docs/54-volume-subplot-thread-management.md`、`docs/28-worldbuilding-setting-exposition.md`、`docs/07-continuity-ledger.md`、`docs/35-ai-agent-novel-creation-workflow.md`、`docs/38-chapter-production-pipeline-agent-handoff.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“卷间转场与新阶段启动卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增长篇时间跳跃与状态压缩专项

状态：已确认。

决策：新增 `docs/57-long-timeskip-state-compression.md`，作为处理几天后、几个月后、几年后、训练期、赶路期、调查期、备赛期、项目推进期、伤后恢复期和卷间空窗的权威入口。

原因：已有文档要求卷间转场不能跳掉因果，但缺少可执行的时间跳跃方法。AI agent 容易用一句“数月后”抹掉关系债、伤势、伏笔、对手反制和旧代价，导致读者感觉漏章、重开或追读断裂。

规则：

- 时间跳跃前必须回答为什么跳、跳过了什么、跳后改变了什么。
- 只能跳过重复过程，不能跳过关键选择、关键代价、关系质变、伏笔回响和对手反制。
- 跳后必须有状态差额，至少覆盖目标、资源、关系、信息、风险、对手或规则中的关键项。
- 跳后第一场景必须恢复方向、状态和压力。
- 时间跳跃必须回写台账，记录新增事实、变更事实、已结事项、活跃事项和延期事项。

影响范围：

- `README.md` 和 `docs/00-index.md` 增加长篇时间跳跃入口。
- `docs/07-continuity-ledger.md`、`docs/23-midbook-volume-structure.md`、`docs/56-volume-transition-new-stage-launch.md`、`docs/55-volume-ending-settlement-next-hook.md`、`docs/38-chapter-production-pipeline-agent-handoff.md`、`docs/28-worldbuilding-setting-exposition.md`、`docs/54-volume-subplot-thread-management.md` 增加跳转入口。
- `docs/10-templates-and-checklists.md` 增加“长篇时间跳跃与状态压缩卡”。
- `docs/01-source-inventory.md` 登记本轮外部来源。

## 2026-06-09：新增长篇训练、修炼与成长段落防水专项

状态：已确认

决策：新增 `docs/58-training-growth-anti-padding.md`，作为训练、修炼、闭关、学习、备赛、技能升级、职业成长、系统任务、团队磨合等段落的专项入口。

原因：现有知识库已经在时间跳跃、机制设计、中段结构和移动阅读体验中零散提到训练可压缩、成长要有状态增量，但缺少一个专门告诉 AI agent 如何判断训练段是否该写、该跳、该压缩，以及如何写出目标、瓶颈、方法、代价、反馈、验证和下一阶段限制的文档。

确认规则：训练段不是“努力展示”，而是“能力差额验证”。练习过程可以压缩，成长证据不能省略。凡是训练段没有具体缺口、外部压力、反馈修正、代价、验证和新限制，默认需要压缩、重构或删除。

影响范围：后续涉及修炼、闭关、技能升级、系统熟练度、职业成长、备赛、考试、团队磨合、人物成长线时，优先调用该专题，并联动 `docs/57-long-timeskip-state-compression.md`、`docs/14-mechanism-and-cheat-design.md`、`docs/23-midbook-volume-structure.md` 与 `docs/10-templates-and-checklists.md`。

## 2026-06-09：新增反派、竞争对手与外部世界同步升级专项

状态：已确认

决策：新增 `docs/59-antagonist-world-synchronous-escalation.md`，作为主角胜利、训练突破、时间跳跃、卷级推进、换地图、新阶段启动、对手失败但未退场、组织/制度/舆论/市场反馈时的专项入口。

原因：现有知识库已有 `docs/21-antagonist-opposition-system.md` 处理单个反派和阻力设计，也已有训练、时间跳跃、卷级结构等专题，但缺少一个专门要求“主角状态变化后，外部世界必须同步变化”的执行级文档。AI agent 如果只让主角成长，不让对手学习、组织调度、规则反馈、舆论变化和资源重排，就会出现世界原地等待、对手重复送、新敌人空降和升级失真。

确认规则：主角每一次有效成长，都必须改变外部世界对他的认知、资源分配、行动策略或风险等级。外部学习链为“看见 -> 解释 -> 试探 -> 反制 -> 升级”。同步升级必须有信息渠道、误判或盲区，不能让反派像偷看大纲。

影响范围：后续涉及主角胜利、训练成长、对手失败、阶段高潮、卷末余波、时间跳跃、换地图、新组织层级、资源争夺、规则补丁、舆论变化、市场反馈时，必须联动该专题，并将对手已知信息、误判、外部动作、世界规则变化和下一轮压迫点写入台账或交接包。

## 2026-06-09：新增高潮战、大场面与群体冲突调度专项

状态：已确认

决策：新增 `docs/60-climax-battle-large-scene-coordination.md`，作为高潮战、决战、群战、团队战、战场、公开审判、比赛决胜、发布会、直播爆点、灾难救援、卷末大场面和终局决战的专项入口。

原因：现有知识库已经覆盖连载节奏、反派阻力、卷级结构、卷末结算、外部同步升级和移动端阅读体验，但缺少一个专门告诉 AI agent 如何把大场面写清楚的执行级文档。AI 如果只堆人数、招式、爆炸、喊话和震惊，会导致读者看不懂空间、看不清目标、记不住角色功能，打完之后也没有状态变化。

确认规则：大场面不是人数和特效堆叠，而是多目标、多角色、多空间、多代价在读者可理解范围内完成状态翻转。开写前必须确认目标、胜负条件、失败代价、空间锚点、视角锚点、角色功能和结算方向。动作只细写关键拍，重复动作必须压缩，战后必须清账并回写台账。

影响范围：后续涉及高潮战、卷末大战、终局决战、群体冲突、公开审判、发布会、比赛决胜、团队副本、灾难救援、群像战争和任何三条以上行动线同时推进的章节时，必须调用该专题，并联动 `docs/04-character-and-dialogue.md`、`docs/05-plot-and-serial-rhythm.md`、`docs/21-antagonist-opposition-system.md`、`docs/23-midbook-volume-structure.md`、`docs/24-ending-completion-risk-control.md`、`docs/32-chapter-paragraph-mobile-reading-experience.md`、`docs/55-volume-ending-settlement-next-hook.md` 与 `docs/59-antagonist-world-synchronous-escalation.md`。

## 2026-06-09：新增信息战、舆论战与公开场合话语权攻防专项

状态：已确认

决策：新增 `docs/61-information-public-opinion-discourse-battle.md`，作为证据链反杀、公开审判、庭审、朝堂对峙、直播翻车、热搜风波、危机公关、发布会、商战舆论、娱乐圈黑料、职场甩锅、宗门审判、弹幕评论区风向和任何“胜负取决于谁被相信”的场景的专项入口。

原因：现有知识库已经有信息差、反派抢解释权、大场面公开场合、外部同步升级和合规文档，但缺少一个专门指导 AI agent 写“嘴仗、证据、舆论、公开反转”的执行级专题。AI 如果只写万能录音、主角长篇独白、众人震惊、全员道歉和热搜空转，会让信息战失去可信度和商业爽点。

确认规则：信息战的胜负，不是说出真相，而是让关键受众在正确时间相信、转向并采取行动。每一轮信息战必须确认争点、关键受众、证据来源与边界、对手叙事、反制节奏、公开行动请求、落袋余波和合规风险。现实舆论、真实个人/组织、隐私、诽谤、网暴和群体污名风险必须联动合规文档处理。

影响范围：后续涉及证据链、公开摊牌、庭审、朝堂、发布会、直播、热搜、评论区、危机公关、职场甩锅、娱乐圈黑料、宗门审判、规则反杀或舆论站队时，必须调用该专题，并将已公开事实、证据状态、受众站队、舆论变化、规则变化和下一章余波写入台账或交接包。

## 2026-06-09：新增日常章、过渡章与低强度章节防水专项

状态：已确认

决策：新增 `docs/62-everyday-transition-low-intensity-anti-padding.md`，作为日常、过渡、休整、赶路、聊天、吃饭、生活流、低冲突推进、战后余波、关系缓冲、情绪沉淀、信息整理、准备章和轻松章的专项入口。

原因：现有知识库已经反复要求每章有状态增量、中段不能水、转场要压缩、低强度也要有反馈，但缺少一个专门指导 AI agent 写“没有强冲突但仍然好看”的执行级文档。AI 如果把低强度章节写成吃饭聊天、赶路到了、休整清零、复述前情和生活流水账，会导致长篇中段跳读和追读下降。

确认规则：日常章不是没有剧情，而是用低烈度方式改变人物、关系、信息、资源、情绪或下一步行动。安静不是问题，原地不动才是问题。低强度章节必须承接旧结果，有小目标、低烈度阻力、微变化、小回报、章末具体动作和台账回写；否则应压缩、合并或删除。

影响范围：后续涉及日常、过渡、休整、赶路、聊天、吃饭、生活流、轻松章、战后余波、卷间缓冲、关系缓冲、情绪沉淀、信息整理、准备章或低冲突推进时，必须调用该专题，并联动节奏、中段防水、人味、情绪线、喜剧、移动端段落、时间跳跃和外部同步升级相关规则。


## 2026-06-09：确认长篇伏笔必须管理读者记忆温度

状态：已确认

决策：新增 `docs/63-foreshadowing-callback-reader-memory-management.md`，把“作者记得伏笔”与“读者还记得伏笔”分开管理。以后处理跨 5 章以上、跨卷或多卷后才回收的伏笔时，必须记录最近回响、记忆温度、下一次提醒、阶段回收和最终回收。

执行规则：

- 跨 5 章以上未出现的伏笔，需要检查是否安排轻回响。
- 跨 10 章以上未出现的伏笔，回收前需要带后果的再激活。
- 跨卷伏笔最终回收前，需要场景化唤醒，不能只靠一句“还记得当初”。
- 回收章不得首次引入决定胜负的新规则、新证据或新能力。
- 废弃伏笔必须降级、解释、转赠或自然消散，不能从正文无声蒸发。

影响：后续起草、审稿、章节交接、卷末清账、跨卷启动、低强度日常章设计时，都应调用 63 号专题检查读者记忆温度与回响强度。


## 2026-06-09：新增名场面、角色高光与可转述记忆点设计专项

状态：已确认

决策：新增 `docs/64-iconic-scene-character-highlight-shareable-moment.md`，作为设计、起草、审稿和复盘名场面、角色高光、爽点落袋、情绪峰值、关系爆点、梗点变体、公开反转和评论区可复述点的权威入口。

原因：现有知识库已经覆盖爽点循环、人味增强、梗点、大场面、信息战和伏笔回响，但缺少一个专门把这些能力统筹成“读者能记住并复述的场景资产”的执行级文档。AI 容易把高光写成特效堆叠、金句口号、众人震惊和无后果爆点，导致章节当下热闹但长期记忆弱。

确认规则：关键章节、卷中转折、卷末高潮、角色高光和包装资产设计时，必须先写“读者复述句”，再检查场景功能、人物真相、压力代价、可记忆载体、见证者行动变化、状态翻转和后文余波。没有状态变化和余波的高光，不算有效名场面。

影响范围：后续涉及角色高光、公开反转、爽点落袋、情绪爆点、关系推进、梗点升级、大场面、评论复盘、包装语言提炼和多 agent 交接时，应联动该专题，并把高价值场景的复述句、记忆载体和可回响元素写入项目台账或交接包。


## 2026-06-09：新增上架、付费转化与订阅留存专项

状态：已确认

决策：新增 `docs/65-paid-conversion-subscription-retention.md`，作为上架前、收费节点、会员章节、订阅、收益验证、活动爆更和付费数据复盘的权威入口。

原因：现有知识库已经有发布运营、数据复盘、前 30 章留存和卷级推进规则，但付费节点仍主要散落在“上架前后观察”和“关键节点章节回报更硬”里。AI agent 如果缺少专项规则，容易把付费转化误写成卡断章、拖答案、拆水章或硬凑爆更，伤害读者信任。

确认规则：付费节点是读者信任的第二次签约。免费期必须证明价值；最后免费章必须完整且给合法期待；首个付费章必须先兑现再加压；付费后 3-5 章必须连续交付价值单位；长期订阅靠每章状态增量和小单元回报。没有真实后台数据时，不得编造首订、均订、追订、收益或平台阈值。

影响范围：后续涉及上架、收费、付费章节、会员章节、订阅、收益验证、付费后掉读、评论说“付费后水了”、活动爆更或断更后恢复付费读者信任时，应调用该专题，并联动 `docs/18-reader-data-feedback-diagnosis.md`、`docs/19-serialization-update-operations.md`、`docs/40-serial-data-tuning-loop.md`、`docs/41-reader-comment-coding-feedback-clustering.md` 与章节流水线。


## 2026-06-09：新增作者话、评论区互动与读者社区关系专项

状态：已确认

决策：新增 `docs/66-author-note-reader-community-interaction.md`，作为作者话、作家说、评论回复、读者群、粉丝群、催更、求票、投票活动、上架感言、请假说明、断更恢复、完本说明和番外沟通的权威入口。

原因：现有知识库已经能收集评论、聚类反馈、诊断数据和处理付费节点，但“作者如何回应读者、怎样写作者话、什么时候不回复、读者群如何设边界”仍缺少专项规则。AI agent 如果只凭感觉互动，容易剧透、对线、求票过度、群内补设定、泄露隐私或用作者话替正文修复剧情。

确认规则：读者关系靠正文兑现，作者话和互动只做信任维护、边界说明和反馈倾听。作者话不能替正文解释剧情；评论回复不能确认或否认后文猜测；读者群不能补主线；投票不能临时改核心承诺；互动动作必须记录到数据复盘；不得诱导刷数据、组织攻击或公开读者隐私。

影响范围：后续涉及作者话、评论回复、读者群、催更、求票、请假、断更恢复、上架感言、完本说明、番外沟通、评论争议、读者投票或社群活动时，应调用该专题，并联动评论聚类、发布运营、合规、数据复盘、完本和付费节点规则。

## 2026-06-09：新增章节名、目录页与推荐标题承诺管理专项

- 状态：已确认
- 决策：新增 `docs/67-chapter-title-toc-promise-management.md`，把章节名、目录页、卷名、推荐标题、分享标题和付费节点标题统一纳入“标题承诺层”管理。
- 原因：网文的标题不仅是装饰，它影响点击、目录回看、续读、付费节点期待和读者记忆。AI 写作容易出现两类问题：一是章名空泛、连续无信息；二是为了吸引点击而剧透、夸大或文不对题。因此需要独立规则约束。
- 确认规则：标题可以预告冲突、爽点、情绪和阶段变化，但必须被正文兑现；标题不能提前说出核心反转答案；推荐标题可以比正文章名更外向，但不得制造正文没有的承诺；付费节点标题要刺激购买期待，但不能以标题党透支信任。
- 影响范围：章节草拟、章节修订、发布运营、读者数据诊断、付费转化诊断、包装体系和模板清单。

## 2026-06-09：新增主角失败、挫折、撤退与代价管理专项

- 状态：已确认
- 决策：新增 `docs/68-protagonist-failure-setback-cost-management.md`，作为主角失败、吃亏、撤退、低谷、代价胜、阶段小败和反弹节奏的专项入口。
- 原因：现有知识库已经强调爽点要有阻力和代价，但“主角如何合理失败”仍散落在多个文档中。AI agent 容易走两个极端：要么一路碾压导致爽点变轻，要么为了制造低谷让主角突然降智、连续挨打、读者憋屈。因此需要独立规则管理失败强度、代价、反弹抓手和台账承接。
- 确认规则：主角可以失败，但不能无动作地失败；失败必须来自合理阻力，不能来自主角突然降智；失败必须留下具体代价和反弹抓手；爽文失败要让读者期待反弹而不是只感到憋屈；F2 以上失败必须进入台账或交接包，并至少影响一次后续选择。
- 影响范围：后续涉及强敌压制、卷中转折、高潮前低谷、代价胜、机制反噬、撤退、读者反馈“主角太顺/失败憋屈”、章节审稿和长篇台账时，应调用该专题，并联动阻力系统、节奏、人味、名场面和外部同步升级规则。

## 2026-06-09：新增叙事视角、叙述距离与信息焦点管理专项

- 状态：已确认
- 决策：新增 `docs/69-pov-narrative-distance-information-focus.md`，把人称、视角人物、叙述距离、旁白权限、信息焦点、切视角、多视角交接统一为“视角契约”。
- 原因：既有文档已覆盖风格手册、章节交接、悬疑信息差和段落体验，但缺少一个专门约束 AI 不乱切视角、不泄露信息、不用旁白替人物判断的总入口。
- 确认规则：除非项目明确采用全知视角，否则商业网文章节默认“一场戏，一个主动意识”；切视角必须发生在清晰断点，并产生新信息、新压力、新误会或新情绪。
- 影响范围：章节起草、续写交接、审稿、风格手册、悬疑反转设计、人物声音维护、移动端段落焦点检查。

## 2026-06-09：新增行动-反应单元与场景节拍管理专项

- 状态：已确认
- 决策：新增 `docs/70-action-reaction-scene-beat.md`，作为 AI agent 起草和修订正文时的微观节拍参考。
- 原因：现有知识库已经覆盖宏观结构、人物、段落功能、叙事距离和正文渲染，但缺少独立文档约束“刺激如何引出反应，反应如何导向选择，行动如何产生后果”。这是修复流水账、人物不活、动作链断裂、对话无节拍和爽点不落地的关键执行层。
- 确认规则：AI 写关键场景时，应优先检查 `外部刺激 -> 角色接收 -> 身体/情绪反应 -> 判断/误判 -> 选择/动作 -> 外部后果 -> 下一拍压力` 是否完整；高价值状态改变要展开，低价值流程要压缩。
- 影响范围：章节起草、场景重写、审稿反馈、动作戏、对话戏、爽点场景、情绪戏、悬疑线索、群戏反应和移动端段落功能检查。

## 2026-06-09：新增具身化细节、感官锚点与场景在场感专项

- 状态：已确认
- 决策：新增 `docs/71-embodied-sensory-detail-grounding.md`，作为 AI agent 起草、扩写、润色和审稿时的细节功能化参考。
- 原因：知识库已有视角、段落、行动-反应和名场面规则，但还需要独立文档约束 AI 如何选择具体细节、身体反应、感官锚点、环境功能和物件记忆点，避免抽象情绪、空泛环境、五感堆砌和漂亮但无用的描写。
- 确认规则：细节不是装饰，而是证据；每个关键细节应服务视角、压力、情绪、信息、关系或选择。关键情绪不能只命名，重要场景应有可记忆的具象锚点。
- 影响范围：章节起草、场景扩写、情绪戏重写、环境描写、AI 味诊断、名场面打磨、低强度章节防水和移动端段落优化。

## 2026-06-09：新增读者信任、剧情合理性与反作者作弊专项

- 状态：已确认
- 决策：新增 `docs/72-reader-trust-plausibility-anti-cheat.md`，作为 AI agent 处理剧情合理性、内部一致性、金手指边界、反转公平、主角失败、反派反制和付费节点信任的总闸门。
- 原因：现有知识库已经在反派、伏笔、悬疑、视角、付费、失败管理等专题中多次提到公平、降智和读者信任，但缺少一个统摄性的“反作者作弊”文档。AI 长篇写作尤其容易用空降规则、便利巧合、临时新能力和人物降智推动情节，需要统一护栏。
- 确认规则：商业网文可以夸张，但必须遵守自身叙事契约。关键结果要有前因，角色要按信息和利益行动，反转要有公平线索，收益要付代价，解释不能压死爽感。R2 以上合理性问题不能只润色句子，必须改因果、信息、规则或代价。
- 影响范围：长篇大纲、章节起草、爽点设计、金手指和系统、主角失败、反派反制、悬疑反转、伏笔回收、付费章节、高潮章、卷末结算和读者反馈诊断。

## 2026-06-09：新增场景价值转变、场景必要性与状态增量闸门专项

- 状态：已确认
- 决策：新增 `docs/73-scene-value-shift-purpose-gate.md`，作为 AI agent 判断场景是否值得存在、是否应删除/压缩/合并/重构/展开的总闸门。
- 原因：知识库已经多次在阶段文档中引用“状态变化”“价值转变”“从 A 到 B”，但这些规则散落在前 10 章、卷级推进、伏笔、名场面和低强度章节中。AI 起草和审稿仍可能写出事件很多但场景状态不变的内容，因此需要独立专题统一处理场景必要性。
- 确认规则：有效场景必须至少改变一个关键价值，能写成“这场把谁/什么从 A 状态推到 B 状态”。没有状态增量的场景，即使有设定、气氛、动作或漂亮句子，也应删除、压缩、合并或重构。章末钩子不能替代本章主体进展。
- 影响范围：章节起草、场景删改、章节审稿、设定章压缩、对话戏重构、低强度章节防水、名场面设计、章节流水线交接和读者反馈“水/没进展”的问题诊断。

## 2026-06-09：新增角色选择、两难压力与昂贵决定专项

- 状态：已确认
- 决策：新增 `docs/74-character-choice-dilemma-costly-decision.md`，作为 AI agent 设计人物主动性、两难压力、选择代价、关系选择权和昂贵决定的专项入口。
- 原因：现有知识库已经在场景价值、行动反应、人味增强、名场面、失败代价和合理性护栏中多次提到“选择”，但缺少一个独立文档约束 AI 如何设计互斥选项、选择压力、角色价值排序、可见行动和后续债务。AI 如果只安排事件不安排选择，人物会像被剧情推着走。
- 确认规则：关键场景必须有角色主动选择；有意义选择必须有互斥选项、双方代价、压力限制、可见行动和后续后果。选择要暴露人物价值排序，并至少改变一次后文行动、关系、资源、风险或情绪债。
- 影响范围：章节起草、场景设计、人物弧线、关系线推进、爽点兑现、主角失败、反派反制、悬疑反转、低强度章节增量、名场面设计和读者反馈“主角没用/选择太假/人物不活/剧情生硬”的问题诊断。

## 2026-06-09：新增对话潜台词、战术话轮与高密度台词专项

- 状态：已确认
- 决策：新增 `docs/75-dialogue-subtext-tactical-conversation.md`，作为 AI agent 处理对话戏、潜台词、台词战术、信息交代、人物声音和群戏话轮的专项入口。
- 原因：现有知识库已有人物与对话、角色声音、行动反应和场景价值规则，但对话仍主要散落在多个文档中。AI 写对白时容易变成信息问答、全员同声、长台词说明书、潜台词缺失和对话后状态不变，需要独立文档把“对白是行动”落成可检查话轮。
- 确认规则：对白不是现实聊天复刻，而是有目的的行动。每段对话必须改变目标、关系、信息、压力、筹码或情绪；关键台词要有战术功能；潜台词来自说话和真实意图之间的差距；对话修订先删水，再补战术，再补潜台词，最后分声音和接后果。
- 影响范围：章节起草、对话重写、人物声音、情绪线、喜剧斗嘴、信息交代、谈判、争吵、嘴仗、公开摊牌、群戏和读者反馈“对话尬/像问答/没有潜台词/全员同声”的问题诊断。

## 2026-06-09：新增句子节奏、叙述呼吸与降 AI 味终磨专项

- 状态：已确认
- 决策：新增 `docs/76-sentence-rhythm-narrative-breath-ai-flavor.md`，作为 AI agent 在结构、场景、人物选择和对话战术成立之后执行句段层终磨的专项入口。
- 原因：现有知识库已有 AI 写作指南、移动端段落、风格手册和修订工作流，但“句子层如何降 AI 味”仍散落在多个文档里。AI 容易出现句式均质、解释过满、段尾总总结、同义反复、移动端无呼吸，以及修订越改越平的问题，需要独立规则约束。
- 确认规则：句子节奏必须跟随场景压力，不跟随固定模板。终磨顺序是先删解释，再调节奏，再换承载物，再保留人味毛刺，最后优化移动端呼吸。漂亮但不服务状态变化、人物反应或读者回报的句子可以删除。
- 影响范围：章节终磨、AI 味诊断、句段层修订、移动端阅读优化、动作戏提速、情绪戏降噪、信息章压缩、风格手册更新和读者反馈“像 AI/句子尬/解释太多/读起来累”的问题诊断。

## 2026-06-09：新增人物弧线、信念变化与行为证据专项

- 状态：已确认
- 决策：新增 `docs/77-character-arc-belief-behavior-evidence.md`，作为 AI agent 处理人物弧线、信念变化、成长证据、扁平弧验证、负向堕落、救赎线和终局人物证明的专项入口。
- 原因：现有知识库已经在人物、人味、训练、失败、选择和终局文档中多次提到人物成长，但缺少独立文档约束“人物变化必须如何被行为证明”。AI 长篇写作容易让角色突然顿悟、突然释怀、突然黑化，或用数值升级替代人物成长，需要统一人物弧线管理规则。
- 确认规则：人物变化必须由行为证明。同类压力再次出现时，角色应有不同选择、不同说法、不同补救或不同代价承担方式。Want 推动剧情，Need 推动物弧；旧伤解释人物但不免除后果；扁平弧也必须被世界真实测试；重大信念变化必须进入台账。
- 影响范围：人物设计、章节起草、卷级推进、关系线、主角成长、配角成长、反派堕落、救赎线、终局选择、番外审稿和读者反馈“人物没成长/人设崩/主角像没变”的问题诊断。

## 2026-06-09：新增信息密度、认知负荷与专有名词投放专项

- 状态：已确认
- 决策：新增 `docs/78-information-density-cognitive-load-term-management.md`，作为 AI agent 管理信息负载、名词密度、术语投放、读者理解成本和样式表回写的专项入口。
- 原因：现有知识库已有世界观设定、段落信息密度、专业术语和风格样式表规则，但缺少一个总闸门判断“读者此刻能承受多少信息”。AI 起草时容易在开篇、新卷、专业场景和世界观场景中一次性投放太多人名、组织名、规则名和背景解释，导致读者反馈“看不懂”。
- 确认规则：信息必须按读者当前任务投放。读者可以暂时不知道答案，但不能不知道当前问题。第一次出现专名，优先给功能、反应或后果，不给百科定义；本章用不到的背景进入台账，不进入正文；新信息最好在 1 至 3 章内回响；称呼、术语和特殊格式必须进入样式表。
- 影响范围：开篇设计、世界观投放、专业题材、悬疑规则、规则怪谈、玄幻等级、多势力群像、新卷启动、风格手册、读者反馈诊断和多 agent 接力。

## 2026-06-09：新增情绪债、情绪支付与读者情绪曲线专项

- 状态：已确认
- 决策：新增 `docs/79-emotional-debt-payoff-reader-affect-curve.md`，作为 AI agent 管理跨题材情绪债、阶段利息、情绪兑现、补偿机制和读者情绪疲劳的专项入口。
- 原因：现有知识库已有情绪线、低强度章节、付费节点、失败代价和读者反馈文档，但情绪债规则主要散落在强关系线中。AI 容易只会加压、制造虐点或开新期待，却忘记阶段利息、补偿和场景化兑现，导致读者反馈“不爽”“虐得累”“憋屈”“没情绪”。
- 确认规则：情绪可以欠，但必须付利息。每个高压桥段都要登记读者在等什么情绪回报；E3 以上情绪债必须进入台账或交接包；虐点必须有反应、边界、补偿或反弹抓手；甜点必须有前置压力和关系状态变化；付费节点必须先交付价值单位，再继续加压。
- 影响范围：章节起草、情绪回报设计、爽点/虐点/甜点节奏、失败低谷、关系线补偿、付费章节、卷末结算、低强度余波、数据反馈诊断和读者评论聚类。

## 2026-06-09：确认“主角可追随性”作为独立审稿与生成门槛

状态：已确认

决策：新增 `docs/80-protagonist-followability-reader-alignment.md`，把“主角讨喜/不讨喜”升级为“可追随性”判断。后续 AI agent 在开篇、人设、反英雄、黑莲花、爽文、成长线和审稿任务中，应先判断读者是否有明确追随理由，而不是只给主角增加善良标签、惨痛身世或口头魅力。

执行规则：

- 主角不一定讨喜，但必须有欲望、压力、主动动作、能力或潜力证据、缺陷代价、价值底线、情绪入口和回报承诺中的足够支撑。
- 反英雄和黑暗主角不是豁免项，越界行为必须有目标、边界、代价和叙事态度。
- 读者反馈“不想看主角赢”“代入不进去”“主角不活”时，优先使用第 80 篇诊断，不先做表层句子润色。

## 2026-06-09：确认“配角系统工程”作为独立生成与审稿门槛

状态：已确认

决策：新增 `docs/81-supporting-cast-allies-relationship-network.md`，把配角设计从“关系标签”和“人物卡补充”升级为独立系统工程。后续 AI agent 在设计队友、盟友、导师、闺蜜、兄弟、同事、家人、小单元角色、群体观众和群像关系网时，必须检查配角层级、功能负载、独立欲望、当前压力、可见选择、状态变化、复用或退场安排。

执行规则：

- 配角不应只负责送消息、送资源、夸主角、误会主角、牺牲、背叛或讲设定。
- 配角可以高光，但不能替主角完成核心选择。
- 群像不能全员同步反应，必须按权力、利益、亲密度和信息差分层。
- 重要配角的重大转向必须有利益、信息、情绪或关系依据。
- 单元结束后，重要配角必须有复用、退场或回响安排。

## 2026-06-09：确认“读者问题链与答案债务”作为章末钩子上位规则

状态：已确认

决策：新增 `docs/82-reader-question-chain-curiosity-hook-answer-management.md`，把“章末钩子”从单点技巧升级为跨题材的问题栈与答案债务管理。后续 AI agent 设计章节、单元、卷末、悬疑、情绪线、关系线、爽文反转和付费章时，必须先确认读者当前在问什么、旧问题是否推进、本章是否有阶段答案、新问题是否来自本章结果、下一章是否必须承接。

执行规则：

- 每章起草前先写“本章主问题”。
- 每章至少推进一个旧问题，不能只新增问题。
- 章末钩子必须来自章内结果，不能空降危机。
- 长期问题可以拖，但必须付利息。
- 视角人物已知的信息不能无理由瞒读者。
- 卷末和单元末必须先回答主问题，再打开下一阶段问题。

## 2026-06-09：确认“主题/立意/价值观表达”作为反说教专项

状态：已确认

决策：新增 `docs/83-theme-moral-premise-value-without-preaching.md`，把主题从“口号、金句、结尾升华”改写为“价值问题、人物选择、行为后果、世界规则和结尾余味”的执行系统。后续 AI agent 在立项、写大纲、设计人物弧线、写结尾、写名场面或处理“说教/没内核/价值观不舒服”反馈时，应调用该专题。

执行规则：

- 主题先写成问题，不写成口号。
- 主题必须通过选择和后果呈现，不靠旁白替读者总结。
- 主题不能替代类型承诺，只能让爽点、甜点、悬疑、成长或经营更有余味。
- 反派和配角应提供主题镜像或反证，不能只是稻草人。
- 结尾升华必须来自前文反复验证的选择链。
- 高风险价值观必须有边界、代价和叙事态度。

## 2026-06-09：确认“意象/母题/重复物件回响”作为跨章节质感系统

状态：已确认

决策：新增 `docs/84-motif-symbol-object-callback-emotional-resonance.md`，把意象从“漂亮描写”和“象征解释”改写为可管理的跨章节回响系统。后续 AI agent 处理主题表达、情绪债、伏笔、名场面、章节标题、关系小物、风格手册和完本余味时，应使用该专题判断载体是否有现实功能、重复是否有变奏、回收是否有高成本动作、余响是否进入后文。

执行规则：

- 意象第一次出现必须有现实功能。
- 重复意象必须有意义变奏。
- 重要意象必须服务人物、关系、情绪、伏笔、主题、节奏或标题之一。
- 关键情绪债和名场面应尽量绑定可记忆载体。
- 不解释象征意义，让读者从重复、选择和后果中读出来。
- 核心母题默认控制在 1-3 个，并写入台账或风格手册。

## 2026-06-09：确认“张力释放与压力波形”作为跨章节疲劳管理闸门

状态：已确认

决策：新增 `docs/85-tension-release-pressure-rhythm-fatigue-management.md`，把节奏从“快慢”改写为“压力类型、释放方式、回报币种、余波处理和疲劳诊断”的执行系统。后续 AI agent 在章节起草、连续章节规划、中段防疲软、付费章质检、爽点/虐点/悬念/战斗/日常疲劳诊断时，应调用该专题。

执行规则：

- 每章必须有主压力，但不必每章高压。
- 每章最好释放或推进一笔旧压力，不能只新增压力。
- 高压后必须有余波，低压中必须有牵引。
- 连续三章不能只用同一种压力和同一种回报币种。
- 释放后必须改变状态，否则只是烟花。
- 张力升级不是加大音量，而是让旧方法变贵。
- 章末钩子不能替代本章压力释放。

## 2026-06-09：确认“回报资产连续性”作为落袋与奖励管理闸门

状态：已确认

决策：新增 `docs/86-payoff-currency-reward-asset-continuity.md`，把爽点、系统奖励、阶段回报、经营收益、关系回报、信息答案和失败收益统一改写为“可见、可用、可延续”的状态资产。后续 AI agent 在设计或审稿回报时，必须确认回报币种、入账凭证、成本代价、获得者/失去者、下一次使用和可能反制。

执行规则：

- R2 以上回报必须写清回报币种和入账凭证。
- 回报必须改变后续行动资格、关系状态、世界反馈或读者问题。
- 系统奖励必须有成本、限制、冷却、暴露或反制空间。
- 对手失败必须付出可见代价，否则爽点变轻。
- 关系回报必须有行为凭证，不能只说“更信任了”。
- 失败也要留下反弹资产。
- R2 以上回报进入章节交接包，R3 以上进入台账。

## 2026-06-09：确认“角色登场与再识别”作为人物呈现专项

状态：已确认

决策：新增 `docs/87-character-introduction-first-impression-recognition.md`，把角色登场从“人物资料介绍”改写为“场景压力、视角过滤、可见动作、记忆标签和后文再识别”的执行系统。后续 AI agent 在写新角色首次出现、群像开场、CP/宿敌/导师/反派登场、换地图新组织、章节交接和风格手册时，应调用该专题。

执行规则：

- 角色登场不是人物卡公开。
- 重要角色首次出现必须有场景压力、登场动作和可复述第一印象。
- 记忆标签必须绑定行为、关系、压力或后续功能。
- 单场景新增需要记住的名字默认 1-3 个。
- 群像先给视角锚点和关键功能人，不开人物表。
- 角色隔 5 章以上再出现，要给轻量再识别。

## 2026-06-09：确认“空间调度与动作连续性”作为普通场景基础闸门

状态：已确认

决策：新增 `docs/88-spatial-blocking-scene-geography-action-continuity.md`，把空间锚点、人物站位、动作动线、视线/听见范围和物件预置从大场面专项扩展为所有实体场景的基础规则。后续 AI agent 在起草或审稿对话、争吵、暧昧、追逐、打斗、调查、公开打脸和群戏时，应调用该专题。

执行规则：

- 每个实体场景至少有 1 个空间锚点，复杂场景 2-3 个。
- 关键人物初始站位必须清楚。
- 关键动作必须有起点、路径和结果。
- 关键物件必须在使用前预置。
- 谁能看见、谁能听见，会影响信息差、误会和公开结果。
- 空间变化必须改变后续行动条件，不能只是装修说明。

## 2026-06-09 决策：新增内心独白与认知过滤专项

状态：已确认

决策：将“心理描写”从泛泛的情绪说明中拆出，新增为独立专题 `docs/89-internal-monologue-cognition-emotion-filtering.md`。后续 AI 起草或审稿时，凡涉及人物内心、心理活动、独白、误会、情绪压抑、关系试探，都应优先检查“外部刺激 -> 视角过滤 -> 身体或情绪反应 -> 自动念头 -> 旧伤或欲望干扰 -> 判断或误判 -> 选择倾向 -> 可见动作或沉默 -> 后果”链路。

理由：AI 常把内心戏写成解释腔、自我分析或情绪标签，导致人物不像活人、节奏变水、读者不代入。该专题将内心活动绑定到角色过滤器、选择、误判和情绪出口，便于后续 agents 直接执行。

## 2026-06-09 决策：新增短线铺垫、章内回收与即时公平感专项

状态：已确认

决策：新增 `docs/90-short-setup-payoff-scene-fairness.md`，将同场景、同章、1-3 章内的短线铺垫与即时回收从长篇伏笔管理中拆出。后续 AI agent 设计爽点翻盘、逃脱、打脸、笑点、关系动作、道具使用、技能组合、案件线索和章末回钩时，必须检查 setup、trigger、payoff 三元组。

理由：已有第 63 篇负责跨 5 章以上的伏笔记忆温度，但 AI 仍容易在短距离写作中出现“回收空降”“伏笔没有触发”“道具突然出现”“只解释不改变局面”等问题。商业级连载需要高频小闭环，让读者持续感到作者没有废笔、场景精密、结果公平。

确认规则：短线 setup 第一次出现时必须有当前场景功能；关键 payoff 必须能反推到前文 setup；每个 setup 都要有 trigger；payoff 必须造成行动、关系、信息、资源、情绪或局面的可见变化；跨 5 章以上则联动第 63 篇。

## 2026-06-09 决策：新增场景转场、过场桥接与章节衔接专项

状态：已确认

决策：新增 `docs/91-scene-transition-bridge-continuity-momentum.md`，把相邻场景之间的转场从章节体验、低强度章、卷间启动和时间跳跃文档中拆出，形成微观执行入口。后续 AI agent 处理同章多场景、章末到下一章、换地点、换时间、换 POV、赶路压缩、战后余波、调查推进和多线切换时，必须检查“四锚一钩”：时间、地点、视角、状态、当前问题。

理由：AI 长篇常把转场写成两种坏形态：一种是过场流水账，角色从 A 走到 B 写满无价值过程；另一种是硬切过猛，上一场结果、人物状态、地点时间和章末钩子都没有承接。商业级连载可以跳得快，但必须让读者不丢方向、不丢因果、不丢情绪。

确认规则：转场必须承接上一场结果；无关键选择、代价、信息或情绪变化的过程应压缩或删除；新场景开头必须完成时间、地点、视角、状态和当前问题的定位；章末钩子必须在下一章前 25% 内承接、推进或转化；换 POV 必须带来新压力、新后果或新信息，不得只为解释。

## 2026-06-09 决策：新增悬念、惊讶、戏剧反讽与信息差模式选择专项

状态：已确认

决策：新增 `docs/92-suspense-surprise-dramatic-irony-information-gap.md`，作为章末钩子、悬疑反转、爽文设局、恋爱误会、喜剧错位、恐怖惊吓、权谋多线和多 POV 信息分配的决策入口。后续 AI agent 写这类内容前，必须标注读者、主角、对手分别知道什么，并明确目标情绪是好奇、悬念、惊讶还是戏剧反讽。

理由：已有第 26 篇负责悬疑反转台账，第 82 篇负责读者问题链，但 AI 仍容易把所有吸引力都写成“藏答案”：视角人物知道却不让读者知道、读者比主角知道太多导致主角降智、反转只追求惊讶但没有公平铺垫。商业级连载需要根据目标情绪分配信息，而不是机械保密。

确认规则：悬念不等于隐藏全部信息；读者必须知道自己在等什么；主角知道但读者不知道时必须有准备痕迹和战术理由；读者知道但主角不知道时必须保护主角智商；惊讶必须有回看公平性；信息释放后必须改变人物、关系、资源、风险、情绪或下一步行动。

## 2026-06-09 决策：新增场景化、摘要化、说明化与 Show/Tell 选择专项

状态：已确认

决策：新增 `docs/93-scene-summary-exposition-show-tell-selection.md`，作为 AI agent 判断正文段落应场景化、摘要化、说明化还是省略的总入口。后续起草、续写、改稿、压缩水章、扩写关键场景、设定投放、情绪戏、动作戏和低强度过渡时，应先判断读者需要现场体验、知道结果、知道必要事实，还是不需要知道。

理由：已有文档分别覆盖设定投放、时间跳跃、具身细节、场景价值、句段终磨和转场，但 AI 仍容易把关键高潮写成摘要、把低价值过程写成长镜头、把情绪写成标签、把背景写成说明书。商业级网文需要叙事变焦能力：重要内容拉近，重复过程拉远，必要信息短说明，无功能过程直接省略。

确认规则：关键选择、代价、爽点、情绪债和关系质变必须优先场景化；重复过程、低价值移动和已知执行结果应摘要化或省略；说明只保留当前场景理解和下一步行动必需的信息；摘要必须给状态差额；读者能从场景看懂的内容，不要再解释一遍。

## 2026-06-09 决策：新增读者沉浸感、叙事运输与出戏点控制专项

状态：已确认

决策：新增 `docs/94-reader-immersion-narrative-transportation-presence.md`，作为 AI agent 检查章节沉浸感、代入感、叙事临场和出戏点的总入口。后续起草、续写、审稿、降 AI 味、开篇留存、中段掉读、设定投放、动作戏和情绪戏处理时，应从叙事理解、注意焦点、画面临场、情绪参与和可信框架五个维度检查。

理由：已有文档分别覆盖视角、细节、合理性、信息密度、主角站队、转场和 show/tell，但 AI 仍可能写出“局部正确、整体不沉浸”的文本。商业级网文需要让读者持续理解、想象、在乎、相信，并自然追下一拍；任何视角、词汇、因果、空间、规则、节奏和作者解释的裂缝都会把读者从故事里踢出去。

确认规则：第一屏必须让读者抓住人物、目标、压力或异常之一；视角要稳定，切视角必须重建目标和压力；重要情绪和危险必须有可见证据；设定和规则必须通过限制、选择、代价或后果进入正文；语言必须符合时代、世界、身份和项目风格手册；出戏点优先修结构和信息，不先做表层润色。

## 2026-06-09 决策：新增读者反馈症状、病因定位与专题路由专项

状态：已确认

决策：新增 `docs/95-reader-feedback-symptom-diagnosis-routing.md`，作为读者评论、编辑反馈、用户反馈和数据异常进入修订前的分诊入口。后续 AI agent 遇到“水、不爽、看不懂、假、主角不讨喜、人物不活、剧情生硬、对话尬、打斗乱、设定多、AI 味、没钩子”等反馈时，必须先转译为证据强度、问题层级、正文证据、可能病因和优先调用专题，再进入具体修订。

理由：已有第 33 篇负责修订、重写和版本工作流，第 41 篇负责评论聚类，第 42 篇负责反馈冲突，但 AI 仍容易把读者反馈当处方直接执行，或用句子润色掩盖结构、人物、信息、回报和合理性问题。商业级连载需要先分诊，再修订；先保护有效资产，再改问题。

确认规则：读者反馈先当症状，不当处方；体验描述优先记录，修改建议必须转译；多条同向、数据同向、目标读者同向优先于单条尖锐；高层问题未解决前不做句子润色；修订前必须列出有效资产；已发布连载优先轻修、后文补偿和观察窗口，大改需进入第 33 篇工作流。

## 2026-06-09 决策：新增旁白人格、叙述态度与叙事声音专项

状态：已确认

决策：新增 `docs/96-narrative-voice-attitude-narrator-persona.md`，作为 AI agent 设计、起草、续写和修订旁白声音的专项入口。后续遇到旁白漂移、题材味不足、万能讲解员、修订后变平、角色声音和旁白声音混乱、读者反馈“像 AI/没味道/旁白怪”时，应优先检查旁白人格十轴、voice/tone 区分、POV 信息权限和声音资产保护。

理由：已有第 37 篇负责项目风格手册和角色声音，但 AI 长篇仍容易把不同题材、不同章节、不同 POV 写成同一个中性讲解员。商业级网文需要稳定而可识别的叙事声音，让读者感到这本书有自己的说话方式，同时又不让旁白抢走角色、场景和情绪。

确认规则：每本书必须有稳定旁白人格；voice 稳定，tone 可随场景变化；旁白声音、角色声音和作者说明必须区分；贴身叙述应受 POV 角色的注意力、词汇、偏见和欲望影响；全知或说书人旁白必须有稳定人格和信息规则；修订时先保护声音资产，再做句段终磨。

## 2026-06-09 决策：新增前情重提、读者再入场与旧信息再激活专项

状态：已确认

决策：新增 `docs/97-recap-reentry-old-information-reactivation.md`，作为长篇连载、断更恢复、跨卷启动、付费章节、复杂设定回收、旧角色回归和多 agent 续写中的旧信息重提入口。后续 AI agent 需要提醒读者旧信息时，必须先判断该信息的当前用途、重提强度和重提载体，优先通过后果、物件、对话冲突、选择压力和环境反馈激活。

理由：已有第 63 篇负责伏笔记忆温度，但 AI 仍容易把旧信息重提写成复述前情、角色背课文、台账搬正文或付费章回顾过多。商业级连载需要帮助读者再入场，但不能牺牲当章推进和付费价值。旧信息只有重新改变当前判断、选择、风险、关系或情绪，才值得进入正文。

确认规则：前情重提不是复述过去，而是让旧信息在当前场景重新产生作用；章节开头可以帮读者再入场，但不能复述上一章完整剧情；跨 5 章以上旧信息要联动第 63 篇；断更或跨卷可用正文外 recap 服务读者，但不能替正文兑现主线；台账不能原样搬进正文。

## 2026-06-09 决策：新增类型混搭、主副卖点与承诺优先级专项

状态：已确认

决策：新增 `docs/98-genre-blending-primary-secondary-promise-hierarchy.md`，作为融合题材、多卖点项目、跨频道项目和类型漂移诊断的承诺层级入口。后续 AI agent 处理系统+修仙、甜宠+悬疑、经营+古言、快穿+打脸、都市+神豪+直播、群像+主线题材等混搭项目时，必须先确定主类型入口、主承诺、主回报币种、副类型功能和类型底线。

理由：已有第 13 篇负责题材模式，第 29 篇负责读者预期和主承诺，但 AI 仍容易把多个卖点平均用力，导致元素堆叠、包装正文错配、主承诺停滞、副线抢戏、回报币种乱跳和读者觉得“四不像”。商业级混搭不是多放元素，而是让副类型服务主承诺。

确认规则：主承诺只能先立一个；副类型最多两个，并且必须承担明确功能；副线连续三章抢主承诺时必须合并、压缩或转化为主回报；包装最多突出一个主承诺和两个副承诺；类型底线冲突时按主类型底线处理；读者反馈要求换主承诺时，不直接采纳，先回到目标读者和项目定位。

## 2026-06-09 决策：新增正典事实、不确定性、设定冲突与 AI 幻觉控制专项

状态：已确认

决策：新增 `docs/100-canon-uncertainty-conflict-hallucination-control.md`，作为长篇网文多 agent 创作中的事实治理入口。后续 AI agent 在单本小说项目初始化、长篇续写、章节起草、台账维护、设定补全、修订和发布前质检时，必须区分已确认、候选、待确认、推断、冲突、废弃和变更中事实，并记录来源、影响范围和处理方式。

理由：已有第 07 篇负责连续性台账，第 36 篇负责上下文封包，第 38 篇负责多 agent 交接，但 AI 仍容易把候选脑洞、读者猜测、竞品桥段、模型推断或临时补全写成正文 canon。长篇连载一旦让错误事实进入正文，会造成滚雪球式设定漂移、角色知识错乱、规则作弊和读者信任破坏。

确认规则：候选不是事实，推断不是事实，读者猜测不是事实；关键结果不能依赖未确认事实；正文 canon 通常高于台账；台账与正文冲突时先标记冲突，不静默覆盖；角色知识状态必须单独管理；资源、规则、时间线、关系状态和信息权限是高风险事实，不能靠模型补全；外部平台、法律、医学、数据和合规规则必须查证，缺证据标待确认。

## 2026-06-09 决策：新增读者弃书触发器、毒点雷点与留存安全专项

决策：新增 `docs/101-reader-dropoff-poison-points-red-flags-retention-safety.md`，作为毒点、雷点、弃书、劝退、恶心读者、主角窝囊、角色降智、关系背刺、虐点无补偿和付费被骗感的专项入口。

理由：已有文档覆盖读者反馈、失败管理、情绪债、合理性和付费留存，但 AI agent 仍容易把毒点处理成两个极端：要么机械避开所有争议元素，把故事写平；要么无视目标读者信任，在关键节点制造承诺背刺、角色崩坏、虐点过量或付费被骗感。商业级网文需要管理“哪些读者会因为什么离开”，而不是简单列禁忌。

确认规则：毒点必须按目标读者、类型承诺、触发强度、出现位置、铺垫预警、主角主动性、情绪补偿和后续回报判断；单条评论不能直接决定主线；目标读者强雷点优先于非目标读者口味分歧；R3 以上风险暂停批量生产，先改结构；排雷用于预期管理，不能替代正文质量；付费章必须兑现上一章钩子或提供实质新进展。

影响范围：后续新书立项、开篇设计、章节起草、审稿、付费节点质检和读者反馈诊断中，遇到“毒点/雷点/弃书/劝退/付费不值”等信号时，应先调用该专题，再路由到反馈聚类、失败管理、合理性、情绪债或付费留存文档。

## 2026-06-09 决策：新增原创性、来源转化、防洗稿与借鉴边界专项

决策：新增 `docs/102-originality-source-transformation-anti-plagiarism.md`，作为 AI agent 联网搜集资料、竞品拆解、题材跟风、热门梗吸收、书名简介参考、角色声音样例、真实案例改编、AI 续写和章节改写时的原创性与来源转化入口。

理由：已有第 20 篇覆盖合规与版权，第 34 篇覆盖竞品拆解，但 AI agent 仍容易把“可迁移规律”误处理成“改名桥段”，或把外部资料逐句换词后写入文档。商业级小说既要学习市场，又要建立自己的主角欲望、冲突引擎、回报币种、关系网络和语言视角，否则会出现融梗、洗稿、同质化、版权风险和长篇续写断裂。

确认规则：来源材料先分为通用知识、可迁移功能、高识别表达和高风险权利内容；只有通用知识和抽象后的可迁移功能可以进入创作提示；灵感进入正文前至少完成“功能、变量、因果”三重变形；O2 以上风险不得批量生产后文；O3 以上风险不得进入 canon；同人、影视游戏 IP、歌词、真实人物和长段原文直接进入第 20 篇合规流程。

影响范围：后续任何联网资料吸收、竞品拆书、风格手册建立、标题简介参考、真实案例改编、AI 续写和章节改写任务，都应保留来源登记、可迁移规则、不可迁移内容和相似风险等级。

## 2026-06-09 决策：新增读者安利、可复述推荐语与口碑传播资产专项

决策：新增 `docs/103-reader-retelling-recommendation-word-of-mouth-assets.md`，作为新书立项、书名简介、标签包装、开篇设计、名场面规划、章节标题、评论复盘、付费节点复盘和完本复盘中的口碑资产入口。

理由：已有第 29 篇负责卖点，第 64 篇负责场景记忆点，第 67 篇负责章节名和分享标题，第 66 篇负责读者互动，但 AI agent 仍缺少一个书级视角来判断“读者会不会把这本书讲给别人听”。商业级网文不仅需要好看，还需要让目标读者能用自己的话复述主承诺、角色高光、关系张力、梗点、情绪峰值和证明场景。

确认规则：每本书必须有目标读者听得懂的一句话高概念；每个安利点必须有正文证明场景；读者复述原话优先于作者自夸总结；评论区正反馈要沉淀为资产；分享标题可以外向但必须忠于正文；不得用虚假评论、刷量、对立煽动或标题党制造口碑；负口碑触发器进入第 101 篇，竞品高识别内容进入第 102 篇检查。

影响范围：后续涉及新书包装、开篇承诺、关键章节设计、评论复盘、作话互动、推荐标题、分享标题、卷末复盘和完本复盘时，应维护口碑资产台账，并记录安利点对应的正文证明位置、读者原话和风险状态。

## 2026-06-09 决策：新增完本复盘、项目后评估与下一本经验迁移专项

决策：新增 `docs/104-completion-postmortem-lessons-learned-next-project-transfer.md`，作为完本、卷末、暂停、腰斩、付费节点、阶段数据复盘和下一本开书准备中的项目后评估入口。

理由：已有第 18 篇负责数据反馈，第 24 篇负责完本风险，第 41/42 篇负责评论和反馈冲突，第 103 篇负责口碑资产，但仍缺少一个把整本书的原始目标、实际结果、关键证据、有效资产、失败模式、可迁移经验和下一本闸门统一起来的复盘系统。AI agent 如果没有这个系统，容易把复盘写成剧情总结、数据罗列、自我表扬或空泛“以后注意”。

确认规则：复盘先写原始目标，再写实际结果；没有证据的结论标为候选；成功资产和失败模式都要记录；追读、付费、评论、文本和编辑意见至少取两类互相校验；每条有效结论必须生成下一本闸门；不把偶然成功当稳定规律；不把单部作品专属经验直接写进知识库硬规则；多 agent 复盘不追责个人，追流程和系统。

影响范围：后续完本、卷末、付费节点、阶段数据、项目暂停/腰斩和下一本开书准备，都应使用该专题生成复盘报告，并把稳定、可执行、高价值结论回写到专题文档、来源清单或决策记录中。

## 2026-06-09 决策：新增敏感内容、创伤知情写法与读者伤害防护专项

决策：新增 `docs/105-sensitive-content-trauma-informed-harm-avoidance.md`，作为创伤、心理危机、自伤自杀、性暴力、亲密关系权力差、未成年人、校园欺凌、家庭暴力、极端羞辱、暴力血腥、精神控制、真实案例、虐恋、反英雄越界和暗黑题材的创作安全入口。

理由：已有第 20 篇负责内容合规和平台风险，但 AI agent 实际起草时仍需要更细的写法规则。敏感内容如果处理不当，容易变成猎奇、低俗、爽点、反转噱头、受害者工具化、可模仿教程、浪漫化伤害或二次伤害读者。商业级网文可以有黑暗、创伤和高压冲突，但必须保护人物主体性、叙事立场、读者预期和平台边界。

确认规则：高风险内容先判断必要性；能写后果就不写过程，能暗示就不详写；不得写可模仿的自伤、自杀、犯罪和伤害步骤；不得把强迫、控制、羞辱或无法拒绝写成浪漫；不得色情化、猎奇化或消费化未成年人；受害者必须有主体性和后续状态；严重伤害必须有后果；内容提示帮助读者选择但不能替代正文责任；正式发布前涉及平台、法律、医疗和心理健康判断必须重新确认。

影响范围：后续章节起草、审稿、平台风险评估、内容提示、作话沟通、真实案例改编、暗黑题材立项、亲密关系设计和未成年人相关剧情，都应先使用该专题进行尺度、视角、后果和审稿闸门判断。

## 2026-06-09 决策：新增命名、称谓、术语与可识别性一致性专项

决策：新增 `docs/106-naming-address-terminology-recognition-consistency.md`，作为人名、称谓、外号、地名、组织名、技能名、功法名、系统字段、专业术语、功能称呼、关系称呼和命名样式表的专项入口。

理由：已有第 37 篇负责风格手册，第 78 篇负责信息密度，第 87 篇负责角色登场，第 100 篇负责正典事实，但 AI agent 仍容易在长篇、多角色、多势力和多 agent 接力中出现名字过密、重名撞名、称谓漂移、术语堆叠、系统字段变化、地名无功能、外号硬塞和专名融梗。商业级长篇需要把命名当成读者识别系统和连续性资产管理，而不是临时取名。

确认规则：单场景新增需要记住的名字默认 1-3 个；不重要且不复用的人物优先不命名；新专名第一次出现先给功能、动作或后果；重要名字之间必须拉开音形和功能；同一对象只能有一个正式名，别名和称谓必须登记；称呼变化必须有关系、场合或情绪原因；系统字段、技能名、地名、组织名必须进入样式表；不得把竞品专名改字后使用。

影响范围：后续新书设定、群像登场、组织/地图/等级设计、系统面板、专业题材术语、古言称谓、CP 关系称呼、评论区外号回收、章节审稿和多 agent 交接时，应调用该专题并维护命名样式表。

## 2026-06-09 决策：新增 AI agent 任务路由、检索顺序与上下文装配专项

决策：新增 `docs/107-agent-task-routing-retrieval-order-context-assembly.md`，作为 AI agent 使用本知识库时的查库总导航，覆盖立项、初始化、大纲、第一章、续写、审稿、修订、反馈、复盘和知识库维护的任务路由。

理由：知识库已经扩展到大量专题。没有总路由时，AI agent 容易读得太少、读得太多、读错顺序，或把整库塞进上下文，导致正文违背项目 canon、审稿只做表层润色、反馈被当成处方、知识库维护只留在聊天里。商业级 AI 写作需要“读对、读少、读到可执行”。

确认规则：先判任务类型，再读专题；新会话或上下文丢失后先读 README、00、01；单本项目 canon 高于通用技巧；起草前必须有任务单、风格约束和相关台账；审稿前必须先判问题层级；反馈先当症状，不当处方；上下文包只放与任务相关、状态清楚、可执行的信息；超过 8 篇专题时先压缩，不直接塞给起草 agent；稳定结论必须回写文档。

影响范围：后续所有 AI agent 使用本知识库的任务，都应先调用该专题进行任务分诊、必读链选择、专题组合、上下文装配、输出契约和回写位置确认。

## 2026-06-09 决策：新增番外、外传、后日谈与读者福利专项

决策：新增 `docs/108-bonus-chapters-side-stories-epilogue-reader-service.md`，作为完本番外、卷末番外、CP 糖番外、群像番外、配角外传、反派外传、前传、后日谈、if 线、小剧场、读者福利章、活动番外和续作轻钩子的专项入口。

理由：已有第 24 篇确认番外只能补余味，不能替正文收主线；第 66 篇确认完本说明和番外沟通不能替正文解释剧情。但 AI agent 仍需要更细的执行规则，判断哪些读者期待适合番外、哪些内容应回正文、if 线如何隔离 canon、读者投票能影响什么、配角外传何时升级为独立项目、续作钩子怎样不破坏本书完整性。

确认规则：正文不完整，不写番外补洞；番外必须有明确余味功能；不读番外，正文结局也必须成立；番外不能替正文完成告白、和解、伏笔回收或人物成长；if 线必须标注非正典；读者投票只能决定福利方向，不能决定核心主线；续作钩子不能扣住本书主答案；番外新增 canon 事实必须回写台账；不承诺未确定的番外数量和更新时间；发布前重新确认目标平台的完本、番外和活动规则。

影响范围：后续涉及完本后运营、卷末余波、读者福利、番外投票、if 线、外传规划、续作轻钩子、新书衔接和完本复盘时，应调用该专题，并维护番外台账与 canon 状态。

## 2026-06-09 决策：新增系列化、多书宇宙、跨作品连续性与新读者入口专项

决策：新增 `docs/109-series-shared-universe-cross-book-continuity-entry.md`，作为同一作者多本书、同世界新书、续作、前传、外传、下一代、共享世界、角色客串、跨书伏笔和系列圣经维护的专项入口。

理由：已有第 108 篇规定番外、外传和续作钩子的边界，第 104 篇处理下一本经验迁移，第 100 篇处理正典事实，但多本书系列化会带来新的系统风险：新书依赖前作注释、新读者进不来、老角色抢戏、续作推翻前作胜利、系列大谜团压过单书回报、跨书 canon 漂移和多 agent 不知道读取哪个事实包。商业级系列必须同时服务老读者回报和新读者入口。

确认规则：每本书必须有自己的主角、主承诺和第一轮回报；新读者不能被前作复盘挡在第一章外；老读者彩蛋不能成为理解门槛；续作不能推翻前作结局和情绪偿还；前作主角不能替新主角解决核心危机；系列主线不能替代单书结局；跨书 canon 必须进入系列圣经；外传若有完整主线，应按新书立项；包装必须说明是否可独立阅读和阅读顺序。

影响范围：后续同世界新书、续作、前传、外传、下一代、共享世界、IP 延展、系列包装、跨书客串、跨书伏笔和多 agent 系列接力任务，应调用该专题并维护系列圣经与跨书 canon。

## 2026-06-09：新增“IP 改编适配、跨媒介资产与衍生开发意识”专题

- 状态：已确认
- 决策：新增 `docs/110-ip-adaptation-cross-media-assets-derivative-development.md`，作为 AI agent 评估和沉淀网文跨媒介资产的专门规则。
- 原因：商业级网文往往具备影视、短剧、漫画/条漫、动画、有声、游戏、周边和系列化延展空间，但 AI 容易在“完全不沉淀资产”和“把正文写成剧本/项目提案”之间摇摆，需要独立规则约束。
- 已确认原则：小说正文优先；可改编资产必须先服务读者追读和类型承诺；跨媒介不是机械复述，而是根据媒介优势重构体验；所有改编资产都必须经过原创性、授权和敏感风险检查。
- 影响范围：后续审稿、复盘、完本总结、项目初始化、IP 潜力判断和商业包装任务，均可调用本专题与 `docs/64-iconic-scene-and-meme-asset.md`、`docs/96-narrative-voice-and-prose-identity.md`、`docs/102-originality-source-transformation-and-anti-plagiarism.md`、`docs/103-reader-retelling-and-word-of-mouth-assets.md`、`docs/109-series-shared-universe-cross-book-continuity.md` 联动。
## 2026-06-09：新增“创作调研、事实核查、来源可信度与小说转化”专题

- 状态：已确认
- 决策：新增 `docs/111-research-fact-checking-source-evaluation-fiction-transformation.md`，作为 AI agent 联网查资料、判断来源可信度、核查事实和转化真实资料的专门规则。
- 原因：本知识库要求持续联网吸收资料，但 AI agent 容易把模型输出、单一网页、论坛经验、竞品内容或过期资料当作事实，也容易把调研结果堆成百科，必须建立统一调研闸门。
- 已确认原则：AI 输出不能作为来源；关键事实必须标注来源、日期、可信度和使用边界；真实资料进入正文前必须转成限制、压力、选择、代价、后果或生活质感；高风险事实必须优先查官方、机构或专业来源，并避免写成可操作教程。
- 影响范围：后续真实职业/行业、地域时代、历史制度、科技规则、法律医疗、平台规则、公共事件、真实案例改编和知识库维护任务，均应调用本专题，并与第 30、31、34、78、93、100、102、105、107 篇联动。
## 2026-06-09：新增“目标读者画像、阅读场景与阅读任务建模”专题

- 状态：已确认
- 决策：新增 `docs/112-target-reader-persona-reading-context-model.md`，作为 AI agent 建立目标读者画像、判断阅读场景、区分目标/非目标反馈和指导开篇/包装/付费节点的专门规则。
- 原因：本知识库已有类型承诺、市场调研、反馈聚类和口碑资产文档，但“目标读者”仍容易被写成人口标签或泛人群，不能真正指导正文和审稿，需要独立建模。
- 已确认原则：目标读者不是年龄、性别、地区等人口标签，而是阅读任务模型；画像必须包含阅读入口、阅读场景、核心回报、耐心预算、雷点边界和证据状态；画像必须能改变写法，否则只是装饰。
- 影响范围：后续新书立项、市场调研、书名简介、标签选择、开篇 A/B、评论反馈、付费转化、读者关系维护和口碑资产提炼，均应调用本专题，并与第 29、34、39、41、42、43、65、101、103 篇联动。
## 2026-06-09：新增“读者旅程、转化节点与长线生命周期漏斗”专题

- 状态：已确认
- 决策：新增 `docs/113-reader-journey-conversion-lifecycle-funnel.md`，作为 AI agent 诊断读者从曝光、点击、首章、追读、付费、完本到口碑/下本转化的全链路规则。
- 原因：本知识库已有数据诊断、开篇留存、付费转化、口碑安利和目标读者画像专题，但缺少把这些节点串起来的生命周期地图；agent 容易看到数据波动就乱改多个变量。
- 已确认原则：先定位读者旅程节点，再讨论修法；入口承诺必须被下游正文兑现；一轮只改一个主瓶颈；数据说明哪里有问题，文本解释为什么；没有真实后台数据时必须写“数据缺失”，不能编造数值。
- 影响范围：后续数据复盘、开篇测试、推荐期调参、付费节点诊断、卷末复盘、完本复盘、口碑设计和下本立项，均应调用本专题，并与第 18、22、39、40、65、67、103、104、112 篇联动。
## 2026-06-09：新增“力量体系、等级曲线、资源经济与战力通胀控制”专题

- 状态：已确认
- 决策：新增 `docs/114-power-system-scaling-resource-economy-inflation-control.md`，作为 AI agent 设计和审稿升级类长篇中能力规则、等级曲线、资源经济和战力通胀的专门规则。
- 原因：本知识库已有金手指机制、训练成长、反作弊、回报币种和对手系统，但缺少把能力、等级、资源、敌人、地图和奖励合并管理的长篇平衡文档；AI 容易让主角连续白拿奖励、敌人只靠头衔升级、新地图清零旧资产。
- 已确认原则：力量体系是长篇爽点经济系统；每个核心能力必须有触发条件、限制、成本、失败方式和反制；每次升级必须改变行动资格并带来新价格；资源必须有入口和出口；对手必须学习主角旧招；新地图不能清零旧资产和旧代价。
- 影响范围：后续玄幻、仙侠、系统、游戏、无限流、规则怪谈、末世、领主、御兽、星际机甲等升级类项目，设计机制、训练突破、系统奖励、战斗审稿、新地图启动和战力崩修复时，均应调用本专题，并与第 13、14、21、56、58、59、68、72、86、100 篇联动。
## 2026-06-09：新增“CP 化学反应、暧昧拉扯、亲密升级与关系边界”专题

- 状态：已确认
- 决策：新增 `docs/115-romantic-chemistry-intimacy-boundaries-relationship-tension.md`，作为 AI agent 设计和审稿 CP 化学反应、暧昧拉扯、亲密升级和关系边界的专门规则。
- 原因：本知识库已有感情线大框架、人物关系类型、对话潜台词、情绪债和敏感内容安全文档，但缺少专门把“为什么有 CP 感、怎样慢热不水、怎样亲密不越界、怎样修复关系雷点”整合起来的执行文档。
- 已确认原则：CP 必须有双主体目标；每场关系戏至少改变一个状态变量；慢热必须持续提供小回报或新问题；亲密升级必须保护选择权和拒绝权；不能把控制、羞辱、胁迫、无法拒绝或边界侵犯写成浪漫奖励。
- 影响范围：后续言情、甜宠、强强、双男主、百合、师徒、宿敌、搭档、救赎、副 CP、暧昧线、亲密戏和关系线审稿任务，均应调用本专题，并与第 15、25、75、79、80、88、101、105、112 篇联动。
## 2026-06-09：新增“恐惧曲线、惊吓节拍、规则恐怖与安全阈值”专题

- 状态：已确认
- 决策：新增 `docs/116-horror-fear-curve-dread-safety-threshold.md`，作为 AI agent 设计和审稿恐怖、惊悚、规则怪谈、无限流副本、民俗怪谈、心理恐怖、末世生存和黑暗题材场景的专门规则。
- 原因：本知识库已有悬疑、信息差、规则公平、沉浸感、毒点和敏感内容安全文档，但缺少专门把恐惧曲线、惊吓节拍、恐怖货币、规则恐怖和安全阈值整合起来的执行文档。
- 已确认原则：恐怖场景先建立正常，再写异常；每个恐惧点必须有违和、规则、选择或后果；规则怪谈必须公平；血腥和暴力细节必须克制；高风险内容必须联动第 105 篇；恐惧要服务追读、人物选择和规则理解，不服务随机刺激。
- 影响范围：后续恐怖、惊悚、悬疑、规则怪谈、无限流、民俗怪谈、心理恐怖、末世生存、黑暗副本和高压生存场景，均应调用本专题，并与第 26、82、92、94、101、105、111、114 篇联动。
## 2026-06-09：新增“喜剧节拍、反差梗、回调复用与梗疲劳控制”专题

- 状态：已确认
- 决策：新增 `docs/117-comedy-beat-running-gag-callback-fatigue-control.md`，作为 AI agent 设计和审稿笑点节拍、反差梗、running gag、callback、吐槽密度和梗疲劳的专门规则。
- 原因：本知识库已有喜剧轻松感基础文档，但缺少对喜剧节拍、重复变体、回调退场和疲劳风险的细颗粒执行规则；AI 容易硬塞段子、全员吐槽、重复玩梗或用笑点清零主线情绪。
- 已确认原则：笑点必须服务人物、关系、信息、压力、主线、口碑或回调之一；吐槽必须来自角色立场；running gag 第三次必须升级、反用或产生新后果；重复梗要有休眠和退场机制；喜剧不能清零主线代价、爽点重量、虐点余波或恐怖危险。
- 影响范围：后续轻喜剧、沙雕文、吐槽文、轻小说、都市脑洞、系统喜剧、群像喜剧、日常喜剧、黑色幽默、讽刺、社死场景和严肃题材缓冲笑点，均应调用本专题，并与第 27、37、75、76、84、87、101、103、112 篇联动。
## 2026-06-09：新增“战斗场景、动作编排、微观攻防与战术交换”专题

- 状态：已确认
- 决策：新增 `docs/118-fight-scene-action-choreography-tactical-exchange.md`，作为 AI agent 设计和审稿微观动作戏、攻防交换、追逐动线、单挑决斗和小队战的专门规则。
- 原因：本知识库已有大场面、空间站位、行动反应、力量体系和句段节奏文档，但缺少专门指导“每一轮攻防如何改变局面”的微观动作执行文档；AI 容易写成招式表、光效堆叠、逐招编舞或无痛战斗。
- 已确认原则：动作戏不是招式清单；战斗先写胜负条件，再写动作；每轮攻防必须改变位置、身体、主动权、资源、信息、风险、关系或胜负条件之一；只写关键帧，不逐招编舞；战后必须有账单；不写现实危险行为可模仿教程。
- 影响范围：后续单挑、决斗、小队战、追逐、潜入、肉搏、冷兵器、枪战、术法对轰、机甲战、怪物战、比赛决胜和公开动手场景，均应调用本专题，并与第 60、70、72、76、86、88、105、111、114 篇联动。
## 2026-06-09：新增“竞赛赛制、排名榜、淘汰晋级与综艺/试炼结构”专题

- 状态：已确认
- 决策：新增 `docs/119-competition-tournament-ranking-audition-elimination-structure.md`，作为 AI agent 设计和审稿比赛、试炼、选秀、综艺、排行榜、积分榜和晋级淘汰结构的专门规则。
- 原因：本知识库已有大场面、付费转化、回报币种、读者旅程和微观战斗文档，但缺少专门管理“赛制如何制造追读、每轮比赛如何改变状态、排名如何变成资源、淘汰如何影响后文”的结构文档；AI 容易写成流水轮次和观众震惊合集。
- 已确认原则：赛制规则必须影响策略；每轮必须有不同故事功能；低价值轮次应压缩；排名、积分、票数和评分必须兑换资源、风险或身份变化；重要对手不能一轮游；赛后必须结算奖励、名声、资格、关系、消耗和下一阶段目标。
- 影响范围：后续宗门大比、学院考试、秘境试炼、擂台赛、排位赛、选秀、综艺竞演、体育比赛、电竞赛事、厨艺/设计/演艺竞赛、职场考核、排行榜、积分榜、晋级淘汰和公开投票任务，均应调用本专题，并与第 21、52、60、61、65、67、73、86、113、118 篇联动。
## 2026-06-09：新增调查线索、证据链、推理场景与侦查流程专项

决策：新增 `docs/120-investigation-clue-evidence-chain-reasoning-procedure.md`，作为 AI agent 处理悬疑、刑侦、探案、规则怪谈、副本解谜、宫斗查案、职场调查、宗门翻案、商战取证、娱乐圈黑料、历史断案、律师/记者/侦探线和追凶线的专项入口。

原因：既有第 26 篇偏悬疑/反转/信息控制，第 61 篇偏公开证据战和舆论解释权，第 92 篇偏信息差模式，但知识库缺少“角色如何发现、验证、误读、排除、推理并把证据转成行动”的执行文档。AI 写调查戏最容易出现线索空降、万能监控、最终自白、推理跳步和多 agent 遗忘线索，因此需要独立专题。

已确认规则：调查必须同时管理事实链、取证链、推理链和行动链；关键结论不能只靠单一线索；发现、识别和指向要拆开；红鲱鱼必须产生副产物；证据要有来源、可信度、可攻击点和使用边界；写后必须回写线索台账。

影响范围：后续涉及查案、推理、翻案、规则验证、线索回收、证据链、追凶、调查型副本、悬疑单元、公开反杀前置取证、多 agent 悬疑接力时，应先调用第 120 篇，再按需要联动第 26、61、82、90、92、100、111 篇。

## 2026-06-09：新增追逐逃亡、追捕猎杀、猫鼠博弈与脱险结构专项

决策：新增 `docs/121-chase-escape-pursuit-hunt-cat-and-mouse-structure.md`，作为 AI agent 处理追逐、逃亡、追杀、追捕、猎杀、围捕、潜逃、护送撤离、被通缉、规则怪谈逃生、末世撤离、战场突围、都市躲追踪、飞车追逐、舰队追击和猫鼠博弈的专项入口。

原因：既有第 88 篇负责单场景空间站位，第 118 篇负责微观动作攻防，但知识库缺少“追与逃如何跨场景持续变化”的结构规则。AI 写追逃常出现只写速度、空间模糊、追方降智、逃方无限体力、障碍随机和长线逃亡疲劳，因此需要独立专题。

已确认规则：追逃必须管理路线线、压力线、消耗线和反制线；每段至少改变距离、信息、资源、路线或身份之一；追方必须有追踪依据和学习能力；逃方脱险必须有成本；长线逃亡必须有阶段小胜和换局。

影响范围：后续涉及追逐、逃亡、追杀、追捕、围捕、通缉、撤离、逃生、反追踪、反猎杀、怪物追逃、制度/舆论追捕、长线逃亡卷时，应先调用第 121 篇，再按需要联动第 56、59、61、85、86、88、92、100、101、116、118、120 篇。

## 2026-06-09：新增谈判交易、筹码博弈、契约让步与联盟结构专项

决策：新增 `docs/122-negotiation-deal-bargain-leverage-contract-alliance.md`，作为 AI agent 处理谈判、交易、议价、联盟、结盟、背叛前交易、求和、停战、赎人、救人交换、商战签约、权谋议事、宗门议价、宫斗条件交换、黑市买卖、系统契约、婚约谈判、合作分赃、团队资源分配和反派招安的专项入口。

原因：既有第 75 篇负责对话战术和潜台词，但知识库缺少谈判结构本身的规则。AI 写谈判常出现主角嘴炮、对手突然让步、筹码虚、契约万能、联盟太顺、让步无代价和谈后无余波，因此需要独立专题。

已确认规则：谈判必须同时管理利益线、筹码线、让步线和后果线；每方都要有表层立场、真实利益、替代方案、底线和可交换议题；每次让步必须换回东西；成交必须有执行方式、违约代价和余波回写。

影响范围：后续涉及谈判、交易、联盟、停战、签约、招安、分赃、资源交换、黑市买卖、权谋会议、宗门议价、婚约谈判、团队资源分配或主角嘴炮修复时，应先调用第 122 篇，再按需要联动第 60、61、73、74、75、81、86、100、101、105、115 篇。

## 2026-06-09：新增潜入盗取、劫案任务、伪装渗透与撤离结构专项

决策：新增 `docs/123-infiltration-heist-stealth-mission-extraction-structure.md`，作为 AI agent 处理潜入、渗透、盗取、盗宝、劫狱、救人、夺证、卧底、伪装入局、黑市任务、团队劫案、秘境取物、宗门藏宝阁、宫廷夜探、商战取证、规则副本偷钥匙、末世物资突入、战场斩首和撤离行动的专项入口。

原因：既有第 118 篇负责微观动作，第 121 篇负责追逃脱险，第 120 篇负责线索证据，但知识库缺少“潜入任务如何立项、计划、入场、深入、变故、拿目标、撤离和回写”的结构规则。AI 写潜入常出现主角像幽灵、安保降智、计划空泛、回闪作弊、团队无分工、目标到手无后果，因此需要独立专题。

已确认规则：潜入任务必须同时管理目标线、掩护线、压力线、变故线和撤离线；任务目标必须改变后续行动资格；伪装必须有维持成本；警戒要分层反应；计划后手必须有前文资产、代价和限制；本专题只沉淀小说叙事结构，禁止现实违法、伤害、规避安保、黑客、绑架、爆炸等教程化内容。

影响范围：后续涉及潜入、盗宝、夺证、救人、劫狱、卧底、伪装、团队劫案、秘密会面、任务撤离、潜入暴露、安保降智、回闪作弊或现实高风险任务场景时，应先调用第 123 篇，再按需要联动第 20、60、74、81、85、86、88、92、100、101、105、118、120、121 篇。

## 2026-06-09：新增经营建设、基地店铺、领地管理与生产链增长专项

决策：新增 `docs/124-business-building-base-territory-management-production-chain.md`，作为 AI agent 处理种田、经营、基建、领地、基地、店铺、宗门产业、家族产业、末世据点、领主经营、空间种田、餐馆/医馆/书院/工坊/商铺、直播带货、文娱公司、游戏公会、星际殖民、城市建设和门派经营的专项入口。

原因：既有第 13 篇只给题材承诺，第 86 篇只管收益落袋，第 114 篇管能力/等级/资源通胀，但知识库缺少经营建设本身的执行结构。AI 写经营常出现仓库清单、数字上涨、空间无限供货、建设秒成、顾客全员夸主角、经营对象处于真空和扩张无代价，因此需要独立专题。

已确认规则：经营建设必须同时管理目标线、资源线、生产线、反馈线和扩张线；每轮都要有当前瓶颈、投入资源、生产/服务链、顾客/民众/市场反馈、收益落袋、维护成本、外部反应和下一轮新瓶颈；经营收益必须转化为后续行动资格，而不是只存在于报表。

影响范围：后续涉及店铺经营、种田生产、基地建设、领地管理、宗门产业、商战公司、文娱直播、工坊制造、医馆服务、游戏公会、空间种田、经营流水账、仓库清单、扩张无代价和经营线抢主线问题时，应先调用第 124 篇，再按需要联动第 13、14、30、31、59、61、73、86、95、114、120、122 篇。

## 2026-06-09：新增隐藏身份、马甲误认、身份揭示与掉马余波专项

决策：新增 `docs/125-secret-identity-alias-mistaken-recognition-reveal-fallout.md`，作为 AI agent 处理隐藏身份、马甲、掉马、秘密身份、伪装身份、真假千金、替身文学、认亲、血脉揭示、前世身份、重生身份、穿书身份、卧底身份、匿名作者/主播/神医/高手、扮猪吃虎、身份错认、误会认错、替嫁、冒名顶替和公开身份反转的专项入口。

原因：既有第 92 篇负责信息差模式，第 63 篇负责伏笔回收，第 106 篇负责命名称谓，第 123 篇负责任务伪装，但知识库缺少身份线本身的执行结构。AI 写马甲/掉马常出现全员眼瞎、马甲堆叠、掉马空降、误认降智、揭示只为震惊和掉马后无余波，因此需要独立专题。

已确认规则：身份不是标签，而是行动权限、关系位置、资源通道、风险来源和读者情绪债的组合；身份线必须同时管理秘密线、误认线、破绽线、揭示线和余波线；掉马前要有可回看痕迹，掉马后必须结算关系、资源、名声、风险和情绪债；身份台账必须区分已确认、候选、待确认、误认、谎言和废弃。

影响范围：后续涉及马甲、隐藏身份、掉马、真假千金、替身、认亲、血脉揭示、卧底、匿名大佬、扮猪吃虎、身份错认、公开身份打脸、全员眼瞎修复、马甲堆叠修复或身份揭示无后果时，应先调用第 125 篇，再按需要联动第 61、63、79、80、86、92、100、101、105、106、115、120、123 篇。

## 2026-06-09：新增角色死亡、牺牲重伤、复活退场与哀悼余波专项

决策：新增 `docs/126-character-death-sacrifice-injury-resurrection-exit-grief-fallout.md`，作为 AI agent 处理角色死亡、濒死、重伤、牺牲、便当、退场、葬礼、悼念、遗言、遗物、复活、假死、转生、灵魂残留、英雄牺牲、反派死亡、配角退场、队友伤亡、亲人离世、末世/战争/副本死亡和生死反转的专项入口。

原因：既有第 105 篇负责敏感内容与创伤防护，第 81 篇负责配角复用退场，第 79 篇负责情绪债，但知识库缺少“死亡/重伤/复活如何判断必要性、如何写主体选择、如何铺垫、如何哀悼、如何回写生死状态”的独立执行规则。AI 写死亡常出现为虐而死、工具人牺牲、死亡无后果、复活无代价、假死骗读者和哀悼模板化，因此需要独立专题。

已确认规则：死亡不是最高级的情绪按钮，而是角色生命状态、关系债、资源结构、目标方向和读者信任的重大变更；死亡/重伤/复活必须同时管理功能线、选择线、铺垫线、余波线和记忆线；写死角色前先判断是否可用更低代价替代；牺牲必须有主体选择；复活必须有提前规则和高代价；写后必须回写生死状态台账。

影响范围：后续涉及死亡、牺牲、重伤、复活、假死、转生、便当、退场、葬礼、悼念、死亡案例、配角牺牲、导师死亡、反派退场、队友伤亡、死亡雷点、复活廉价或哀悼模板化时，应先调用第 126 篇，再按需要联动第 20、33、60、63、68、72、74、79、81、83、86、95、100、101、105、116、121 篇。

## 2026-06-09：新增背叛、信任破裂、道歉修复、原谅和解与二次合作专项

决策：新增 `docs/127-betrayal-trust-rupture-apology-forgiveness-reconciliation.md`，作为 AI agent 处理背叛、背刺、隐瞒、出卖、反水、内鬼、盟友倒戈、关系破裂、信任崩塌、追妻/追夫火葬场、道歉、悔改、赎罪、原谅、和解、重建合作、二次结盟、家庭和解、师徒决裂、队友背叛、反派洗白和配角回归的专项入口。

原因：既有第 15 篇负责关系类型，第 25 篇负责感情线阶段，第 77 篇负责人物变化证据，第 79 篇负责情绪债，第 81 篇负责配角关系网，第 101 篇负责关系背刺雷点，但知识库缺少“背叛如何成立、伤害如何入账、道歉如何有效、原谅是否可信、和解后如何设新边界”的独立执行规则。AI 写背叛和原谅常出现突然背刺、苦衷洗白、一句道歉清账、火葬场变骚扰、二次合作太顺和关系清零，因此需要独立专题。

已确认规则：信任是一种长篇资产，背叛是资产破坏，道歉是修复申请，原谅是被伤害者的选择，和解是新关系结构，不是回到过去；背叛必须有诱因、选择点、具体动作和伤害账单；苦衷只能解释不能免罪；道歉必须承认具体伤害并接受边界；修复必须靠连续行动和复发测试。

影响范围：后续涉及背叛、背刺、队友反水、内鬼、关系破裂、追妻/追夫火葬场、家庭和解、师徒决裂、反派洗白、道歉、原谅、二次合作、关系背刺雷点、强行洗白和原谅太快时，应先调用第 127 篇，再按需要联动第 15、25、33、74、77、79、81、86、92、95、100、101、105、115、122、126 篇。

## 2026-06-09：新增复仇清算、打脸回报、惩罚正义与越界代价专项

决策：新增 `docs/128-revenge-payback-justice-retaliation-clearing.md`，作为 AI agent 处理复仇爽文、重生复仇、逆袭打脸、虐渣清算、权谋报复、黑莲花、反英雄、翻案、旧账讨回、公开羞辱反杀、阶段敌人下线和清算余波的专项入口。

原因：既有第 21 篇负责对手系统，第 79 篇负责情绪债，第 80 篇负责主角可追随性，第 86 篇负责回报币种，第 90 篇负责短线铺垫回收，但知识库缺少“复仇线如何立账、追账、反制、清算、控制比例和留下余波”的独立执行规则。AI 写复仇和打脸常出现旧账空泛、反派降智、清算太轻或太重、重复打脸、主角显得小气、反英雄越界无代价和复仇完成后失去长期引擎，因此需要独立专题。

已确认规则：复仇不是情绪口号，而是被破坏的尊严、资源、关系、秩序或生命安全要求被重新定价；清算必须有账，打脸必须有见证，惩罚必须有比例，爽点必须有落袋，越界必须有代价；连续清算必须换对象、换方法、换币种和换后果。

影响范围：后续涉及复仇、清算、打脸、虐渣、反派下线、旧账回收、重生改命、翻案、公开反杀、黑莲花、反英雄、主角报复过度、清算不爽或重复打脸疲劳时，应先调用第 128 篇，再按需要联动第 21、68、74、79、80、83、86、90、92、101、105、120、125、127 篇。

## 2026-06-09：新增反派洗白、敌转友、赎罪代价、招安入队与改邪归正专项

决策：新增 `docs/129-villain-redemption-enemy-to-ally-atonement-reform.md`，作为 AI agent 处理反派洗白、敌转友、反派入队、反派招安、敌将归顺、反派改造、反派救赎、配角赎罪、黑化角色回归、误会型反派澄清、工具人反派转向、前反派 CP、反派番外和终局合作的专项入口。

原因：既有第 21 篇负责反派作为阻力，第 77 篇负责人物变化证据，第 101 篇负责强行洗白等毒点，第 122 篇负责招安谈判，第 127 篇负责背叛后的信任修复，第 128 篇负责复仇清算，但知识库缺少“一个曾经作为阻力或加害者的人，凭什么还能被继续使用”的独立执行规则。AI 写反派洗白和敌转友常出现身世洗白、苦衷免罪、一次救场清账、全员失忆、恶人无代价入队、受害者被迫原谅和前反派 CP 雷点，因此需要独立专题。

已确认规则：救赎不是把坏事解释没了，而是让角色在知道自己造成过伤害后，承担后果、补偿损失、接受边界，并在新的压力下反复做出不同选择；敌转友不是关系重置，而是权限降级后的试用合作；受害者可以不原谅，合作也不等于信任恢复。

影响范围：后续涉及反派洗白、敌转友、反派入队、招安投降、敌将归顺、反派改造、反派救赎、配角赎罪、黑化角色回归、误会型反派澄清、前反派 CP、反派番外、终局合作、强行洗白修复或恶人无代价入队时，应先调用第 129 篇，再按需要联动第 21、77、79、80、83、101、105、108、115、122、127、128 篇。

## 2026-06-09：新增组织势力、派系权力、制度政治、站队博弈与权力重排专项

决策：新增 `docs/130-faction-power-network-institutional-politics.md`，作为 AI agent 处理宗门、家族、豪门、朝堂、宫廷、学院、公司、娱乐圈、军团、公会、帮派、商会、门派、王国、基地、委员会、董事会、派系内斗、权力继承、站队、党争、办公室政治、宫斗权谋和制度改革的专项入口。

原因：既有第 21 篇负责对手和组织阻力，第 28 篇负责世界观设定，第 59 篇负责外部世界同步，第 61 篇负责公开话语权，第 78 篇负责信息密度，第 122 篇负责谈判联盟，第 124 篇负责经营建设，但知识库缺少“组织内部权力如何运转、派系为什么站队、资源和流程怎么卡主角、主角胜利后权力如何重排”的独立执行规则。AI 写宗门、家族、朝堂、公司和学院时常出现架构表开场、势力背景板、组织降智、派系二元化、全员同步站队、权谋幼稚、新组织名词轰炸和主角赢后世界无反应，因此需要独立专题。

已确认规则：组织不是名字和等级，而是资源入口、规则执行者、保护伞、信息通道、晋升路径、惩罚机制和利益联盟的组合；派系不是正邪两队，而是不同人围绕资源、风险、理念、血缘、职位、秘密和未来收益形成的联盟；站队必须有代价，权力重排必须有余波。

影响范围：后续涉及新组织登场、宗门/家族/朝堂/公司内斗、派系站队、权力继承、办公室政治、宫斗权谋、公开会议、组织审判、族会、制度改革、主角晋升、权力真空、组织降智修复或权谋幼稚修复时，应先调用第 130 篇，再按需要联动第 21、28、31、59、60、61、78、81、86、100、106、122、124、128 篇。

## 2026-06-09：新增伤病治疗、医术诊断、康复照护、神医疗伤与医疗可信度专项

决策：新增 `docs/131-injury-illness-treatment-healing-recovery-medical-credibility.md`，作为 AI agent 处理受伤、战损、病弱角色、昏迷、失血、骨折、感染、中毒、解毒、慢性病、旧伤、后遗症、康复复健、护理照护、医术诊断、神医文、医馆经营、丹药疗伤、治愈异能、治疗魔法和系统修复的专项入口。

原因：既有第 126 篇负责死亡/重伤/复活的剧情必要性，第 105 篇负责创伤与伤害安全，第 30 篇负责职业可信度，第 124 篇负责医馆经营循环，第 114 篇负责资源经济和能力通胀，但知识库缺少“伤病如何限制行动、治疗如何有判断和成本、康复如何产生状态增量、神医/丹药/治愈能力如何避免万能按钮”的独立执行规则。AI 写伤病和医疗桥段常出现受伤没后果、昏迷工具化、治疗按钮化、神医万能化、中毒解毒太随便、康复水章和现实医疗风险，因此需要独立专题。

已确认规则：伤病不是装饰，而是行动资格、资源消耗、关系负担、情绪压力和长期状态的改变；治疗不是万能按钮，而是有判断、限制、风险、时间、照护和复发可能的过程；现实医疗内容只做叙事可信度参考，不写诊疗教程、药物剂量、手术步骤、毒物配方或可模仿危险操作。

影响范围：后续涉及战斗战损、疗伤休整、病弱角色、神医打脸、医馆服务、医生/护士/治疗师角色、丹药疗伤、治愈异能、治疗魔法、系统修复、中毒解毒、长期康复、旧伤后遗症、医疗桥段安全审核或受伤无后果修复时，应先调用第 131 篇，再按需要联动第 20、30、58、68、71、85、105、114、118、124、126 篇。

## 2026-06-09：新增御兽灵宠、战宠坐骑、召唤兽、契约伙伴与非人角色专项

决策：新增 `docs/132-beast-taming-spirit-pet-summon-nonhuman-companion.md`，作为 AI agent 处理御兽文、召唤流、宠物流、灵宠、战宠、坐骑、契约兽、伴生兽、召唤兽、魔兽、妖兽、灵兽、兽族伙伴、非人队友、动物伙伴、萌宠、神兽幼崽、兽潮、宠物养成、卡牌/御兽阵容和契约羁绊的专项入口。

原因：既有第 14 篇负责机制设计，第 15 篇负责关系类型，第 58 篇负责训练成长，第 81 篇负责配角网络，第 86 篇负责回报资产，第 114 篇负责力量体系和御兽/卡牌的通胀控制，但知识库缺少“非人伙伴如何作为角色、战力、关系、资源和萌点长期运作”的独立执行规则。AI 写御兽和灵宠常出现宠物只卖萌、战宠装备化、灵宠万能救场、羁绊空喊、非人角色像人套皮、契约万能、伙伴数量膨胀和动物伤害轻飘，因此需要独立专题。

已确认规则：灵宠/战宠/召唤兽不是装备栏，而是有欲望、感知方式、风险反应、成长路径和关系成本的行动者；御兽不是“收集稀有度”，而是主角用资源、训练、契约、理解和取舍管理一组非人伙伴，并让每个伙伴改变行动资格、关系情绪和战斗策略；契约不能等于洗脑忠诚，收服必须保留伙伴选择和主角代价。

影响范围：后续涉及御兽、召唤流、宠物流、灵宠、战宠、坐骑、契约兽、伴生兽、神兽幼崽、兽潮、兽族、动物伙伴、非人队友、宠物养成、卡牌/御兽阵容、灵宠受伤退场、宠物只卖萌修复或战宠万能救场修复时，应先调用第 132 篇，再按需要联动第 14、15、21、58、70、71、81、86、88、105、114、118、126、131 篇。

## 2026-06-09：新增梦境幻境、幻术心魔、精神空间、真假现实与试炼公平感专项

决策：新增 `docs/133-dream-illusion-mindscape-unreliable-reality-trial.md`，作为 AI agent 处理梦境、梦魇、梦中梦、预知梦、共享梦境、幻境、幻术、心魔、心境试炼、精神空间、识海、神识交锋、意识世界、精神污染、真假现实、虚拟副本、记忆迷宫、规则怪谈假场景、恐怖梦魇、修仙问心和无限流精神关卡的专项入口。

原因：既有第 26 篇负责悬疑反转，第 69 篇负责视角信息，第 72 篇负责读者信任，第 77 篇负责人物弧线，第 89 篇负责内心独白，第 92 篇负责信息差，第 100 篇负责正典事实，但知识库缺少“梦境/幻境/精神空间如何保持规则、公平、选择、代价和出场后果”的独立执行规则。AI 写梦境幻境常出现梦醒诈骗、幻境无规则、心魔说教、梦境灌设定、真假现实看不懂、读者被排除、幻术万能和醒来后白写了，因此需要独立专题。

已确认规则：可以欺骗角色，但不能无成本欺骗读者；可以扭曲现实，但必须有可回看的规则；可以象征内心，但必须让角色做出选择；可以梦醒，但不能让读者觉得前文没有价值。梦境/幻境必须有入口、规则、锚点、选择、代价和出场后果。

影响范围：后续涉及梦境、梦魇、幻境、幻术、心魔、问心试炼、精神空间、识海斗法、真假现实、虚拟副本、规则怪谈假场景、无限流精神关卡、梦醒诈骗修复、幻境水修复或心魔说教修复时，应先调用第 133 篇，再按需要联动第 26、63、69、72、77、82、89、90、92、94、100、105、116 篇。

## 2026-06-09：新增穿越重生、穿书剧情、时间回溯、先知信息与蝴蝶效应专项

决策：新增 `docs/134-transmigration-rebirth-book-travel-foreknowledge-butterfly-effect.md`，作为 AI agent 处理穿越、重生、穿书、快穿前置身份、时间回溯、时间循环、预知未来、前世记忆、原著剧情、剧情节点、改命、炮灰逆袭、恶毒女配翻身、反派穿书、读者穿书、剧透型主角、未来信息、原书男女主、剧情修复、剧情崩坏和二周目/读档结构的专项入口。

原因：既有第 14 篇负责机制设计，第 72 篇负责预知优势合理性，第 90 篇负责重生信息的短线铺垫，第 98 篇负责重生/穿书作为类型工具的主副承诺，第 100 篇负责正典事实，第 125 篇负责前世/穿书身份揭示，第 128 篇负责重生复仇，但知识库缺少“前世/原著/未来信息如何作为可贬值资产管理、节点改动后如何产生蝴蝶效应、原著人物如何保持自主性、时间线如何回写”的独立执行规则。AI 写穿越重生穿书常出现前世记忆万能、原著人物 NPC 化、蝴蝶效应缺席、改命太顺、剧透过量和时间线混乱，因此需要独立专题。

已确认规则：先知信息是一种会贬值、会误读、会被蝴蝶效应污染的资源。主角可以比别人早知道某些事，但每次改动都必须改变后续条件；原著人物不是剧情齿轮，重生世界也不是前世录像重播。每条前世/原著/未来信息必须标注来源和可靠度，节点改变后必须回写新时间线。

影响范围：后续涉及穿越、重生、穿书、快穿前置身份、时间回溯、时间循环、预知未来、前世记忆、原著剧情、炮灰逆袭、恶毒女配、反派穿书、先知优势、改命、剧情修复、剧情崩坏、二周目/读档、前世记忆万能修复、原著人物 NPC 化修复或时间线混乱修复时，应先调用第 134 篇，再按需要联动第 14、57、72、90、92、98、100、102、125、128、133 篇。

## 2026-06-09：新增预言天命、命格因果、天选者、神谕谶语与逆天改命专项

决策：新增 `docs/135-prophecy-fate-destiny-chosen-one-causality.md`，作为 AI agent 处理预言、神谕、谶语、卜算、占星、命盘、命格、命数、天命、天道、因果线、劫数、应劫之人、天选之子、命定之人、救世预言、灭世预言、宿命论、逆天改命、改命代价、预兆、预知碎片、天机不可泄露和天道任务的专项入口。

原因：既有第 63 篇负责伏笔回收，第 72 篇负责合理性和防作弊，第 83 篇负责主题，第 84 篇负责意象回响，第 100 篇负责正典事实，第 133 篇负责梦境/预知梦公平感，第 134 篇负责先知信息和蝴蝶效应，但知识库缺少“预言/天命/命格如何不剧透、不替代因果、不取消角色选择、如何通过误读、自证、解释权争夺和改命代价制造长线张力”的独立执行规则。AI 写预言和天命常出现预言剧透、天选开挂、作者代判、命格标签化、改命无代价、预言兑现太硬和天道机械清算，因此需要独立专题。

已确认规则：预言可以给方向，不能替代因果；天命可以制造压力，不能取消选择；命格可以解释风险，不能洗掉人物责任；逆天改命可以爽，但必须付出资源、关系、规则或主题代价。预言必须有来源、解释者、误读点、触发条件和兑现方式，写后必须回写预言天命台账。

影响范围：后续涉及预言、神谕、谶语、卜算、占星、命盘、命格、命数、天命、天道、因果线、劫数、应劫之人、天选之子、命定之人、救世/灭世预言、宿命论、逆天改命、预兆、预知碎片、天机、天道任务、预言剧透修复、天选开挂修复或天道机械清算修复时，应先调用第 135 篇，再按需要联动第 63、72、82、83、84、90、92、100、116、133、134 篇。

## 2026-06-09：新增契约誓言、禁忌诅咒、规则绑定与违约反噬专项

决策：新增 `docs/136-contract-oath-vow-curse-taboo-rule-binding.md`，作为 AI agent 处理契约、誓言、誓约、血誓、天道誓言、主仆契约、婚约、系统契约、神明契约、诅咒、禁忌、禁制、规则束缚、怪谈规则、违约反噬、破誓代价、解除契约和转移诅咒的专项入口。

原因：既有第 122 篇负责谈判成交，第 132 篇负责御兽/非人伙伴，第 116 篇负责规则恐怖，第 135 篇负责预言天命，但知识库缺少“承诺、禁令、诅咒和契约生效后如何长期改变行动资格”的独立执行规则。AI 写绑定规则常出现契约万能、誓言空喊、禁忌装饰、诅咒随机、解除太便宜、规则剥夺主体性和违约无余波，因此需要独立专题。

已确认规则：契约/誓言/禁忌/诅咒不是一句漂亮设定，而是长篇中的规则资产；它必须同时管理来源线、对象线、条款线、触发线、执行线、代价线、选择线和余波线。绑定规则越强，越要保护角色选择、读者公平和后果入账。

影响范围：后续涉及玄幻/仙侠天道誓言、御兽契约、规则怪谈禁忌、副本规则、古言婚约、都市合同、宗门禁制、诅咒线、破誓反噬、契约漏洞反杀、解除契约余波、绑定规则台账回写或读者反馈“规则像作者作弊/契约万能/禁忌没用/诅咒随机”时，应先调用第 136 篇，再按需要联动第 14、15、21、28、61、63、72、74、86、100、116、120、122、132、135 篇。

## 2026-06-09：新增美食烹饪、宴席餐馆、味觉描写与食物场景专项

决策：新增 `docs/137-food-cooking-cuisine-banquet-restaurant-sensory.md`，作为 AI agent 处理美食文、厨师文、餐馆经营、酒楼茶楼、种田做饭、宫宴家宴、赛厨厨艺、吃播探店、灵食药膳、异世界料理、末世食物、旅行饮食、餐桌谈判、宴席社交、食物记忆和味觉/嗅觉/口感描写的专项入口。

原因：既有第 71 篇负责身体感官，第 31 篇负责地域风俗，第 124 篇负责经营建设，第 119 篇负责竞赛结构，但知识库缺少“食物场景如何同时承担馋感、人物、关系、文化、经营和回报”的独立执行规则。AI 写美食常出现只报菜名、只写夸张震惊、做菜像菜谱、宴席像空背景、餐馆爆火太轻松和味觉描写空泛，因此需要独立专题。

已确认规则：美食场景不是菜单、菜名和夸张反应的堆叠，而是“感官刺激 -> 人物反应 -> 关系变化 -> 资源/身份/文化信息 -> 章节回报”的组合。每顿饭都要先判断剧情功能，再决定写香气、口感、工序、食客、价格、礼仪、竞争、回忆还是经营反馈。

影响范围：后续涉及美食文开书、餐馆经营单元、厨艺比赛、宫宴权谋、治愈日常、CP 共厨、地方风味、灵食药膳、末世食物、探店吃播、宴席信息战、食物描写空泛修复或读者反馈“只有菜名没有馋感/吃饭戏水/餐馆爆火太假/宴席没用起来”时，应先调用第 137 篇，再按需要联动第 30、31、61、71、79、88、105、119、124、131 篇。

## 2026-06-09：新增机关谜题、陷阱密室、解谜试炼与公平破局专项

决策：新增 `docs/138-puzzle-trap-riddle-trial-mechanism-lockroom-fairness.md`，作为 AI agent 处理机关谜题、密室逃脱、迷宫、暗门、钥匙、阵法机关、谜语、密码、符文锁、试炼闯关、遗迹探索、规则副本、无限流解谜、机关陷阱、墓穴机关、藏宝阁机关、死亡房间、团队解谜、锁门场景、逃脱房和通关条件的专项入口。

原因：既有第 120 篇负责调查证据链，第 119 篇负责竞赛/试炼赛制，第 123 篇负责潜入盗取，第 116 篇负责规则恐怖，第 133 篇负责幻境试炼，第 136 篇负责绑定规则，但知识库缺少“谜题、机关、陷阱和密室如何公平、可解、可爽”的独立执行规则。AI 写解谜常出现谜语人、答案空降、主角突然懂了、陷阱随机惩罚、线索单点卡死、队友工具化和破解后无回报，因此需要独立专题。

已确认规则：机关谜题必须同时管理目标线、规则线、线索线、交互线、反馈线、代价线、破局线和回报线；关键答案至少有多条支持线索或反馈路径；陷阱必须有征兆、选择和后果；破局必须来自已见材料、人物能力和当场选择。

影响范围：后续涉及秘境机关、规则副本、无限流解谜、古墓遗迹、藏宝阁机关、密室逃脱、团队试炼、谜语门、陷阱反杀、试炼关卡设计、解谜空降修复、谜语人修复、陷阱随机惩罚修复或读者反馈“看不懂/作者作弊/主角突然懂/机关水/谜题不公平”时，应先调用第 138 篇，再按需要联动第 20、26、63、72、82、88、90、92、100、105、116、119、120、123、133、136 篇。

## 2026-06-09：新增师徒传承、导师教学、衣钵继承与出师超越专项

决策：新增 `docs/139-mentor-apprentice-teaching-inheritance-lineage.md`，作为 AI agent 处理师徒文、导师角色、拜师收徒、宗门师承、学院导师、职业师傅、师父师尊、徒弟成长、传承衣钵、秘法授业、技能训练、门派谱系、出师考核、师徒决裂、师门旧债、导师死亡、师父失误、徒弟超越和师徒 CP 边界的专项入口。

原因：既有第 15 篇覆盖师徒作为关系类型，第 58 篇覆盖训练成长，第 115 篇覆盖亲密边界，第 126/127 篇覆盖导师死亡和师徒决裂，但知识库缺少“师徒如何教学、反馈、传承、边界、出师和超越”的独立执行规则。AI 写师徒常出现师父像说明书、徒弟像听课机器、一指点就顿悟、师父抢主角戏、传承只有秘籍、严厉训练被甜化和导师死亡工具化，因此需要独立专题。

已确认规则：师徒关系必须同时管理功能线、差额线、教学线、反馈线、资源线、权力边界线、情感债线和出师线；真正的传承不是把秘籍交出去，而是让徒弟在没有师父兜底时仍能用学到的判断做出不同选择。

影响范围：后续涉及玄幻仙侠师徒线、宗门亲传、学院导师、职业师傅、工匠/厨艺/医术传承、导师退场、师门旧债、师徒决裂、出师考核、徒弟独立验证、严师滥用修复、师父抢戏修复或读者反馈“师父像说明书/徒弟像听课机器/一指点就顿悟/师徒关系没有债”时，应先调用第 139 篇，再按需要联动第 15、20、25、58、74、77、81、83、86、101、105、115、126、127、130 篇。

## 2026-06-09：新增炼器炼丹、装备道具、工坊制造与物品升级经济专项

决策：新增 `docs/140-crafting-artifact-alchemy-equipment-item-upgrade-economy.md`，作为 AI agent 处理炼器、炼丹、法宝、灵器、神器、丹药、药剂、装备、武器、防具、道具、符箓、阵盘、铭文、附魔、锻造、工坊制造、药方丹方、材料收集、装备升级、强化精炼、耐久维护、品质稀有度、系统合成、游戏/无限流道具、末世装备和机甲零件升级的专项入口。

原因：既有第 114 篇负责力量体系和资源经济，第 124 篇负责经营工坊，第 131 篇负责医疗丹药，第 84/86/90 篇负责物件回响、回报入账和铺垫回收，但知识库缺少“制造/升级本身如何成为剧情系统”的独立执行规则。AI 写炼器炼丹和装备道具常出现材料清单水、制作按钮化、丹药万能、法宝救场、品质只剩颜色、强化只有数值、工坊无良率和道具无台账，因此需要独立专题。

已确认规则：制造类剧情必须同时管理需求线、材料线、配方线、工艺线、失败线、品质线、使用线、维护线和经济线；重要物品必须进入台账，记录来源、功能、限制、代价、状态、使用和下次回收点。

影响范围：后续涉及玄幻仙侠炼丹炼器、游戏文装备强化、无限流道具、末世装备修复、工坊制造、机甲零件升级、丹药万能修复、法宝救场修复、材料清单水修复、装备台账维护、物品升级经济或读者反馈“装备像仓库清单/炼丹炼器水/道具空降/法宝太万能”时，应先调用第 140 篇，再按需要联动第 14、30、58、62、63、84、86、90、105、114、124、131、138 篇。

## 2026-06-09：新增庭审公堂、审判裁决、证据质证与程序攻防专项

决策：新增 `docs/141-trial-courtroom-adjudication-evidence-verdict-procedure.md`，作为 AI agent 处理庭审、法庭、公堂断案、公开审判、朝堂对质、宗门审判、族会裁决、学院听证、公司调查会、劳动仲裁、商事仲裁、纪律委员会、军事审判、神明审判、规则副本裁决、判决宣读、证人出庭、质证、交叉询问、辩护、控诉、申诉、上诉和判后执行的专项入口。

原因：既有第 61 篇负责公开舆论和解释权，第 120 篇负责调查证据链，第 60 篇负责公开大场面调度，第 130 篇负责组织权力，但知识库缺少“审判/庭审/公堂/宗门裁决这个程序场本身怎样让证据、角色、规则和裁决落地”的独立执行规则。AI 写审判常出现主角独白式翻案、万能证据、证人工具化、程序缺席、裁判者降智、对手不会质证和判后无余波，因此需要独立专题。

已确认规则：审判裁决必须同时管理法域/制度线、争点线、角色线、举证责任线、证据线、证人线、质证/交叉询问线、裁判线、旁听/公开线和判后执行线；证据不是拿出来就赢，必须经受来源、真实性、关联性、程序和解释权攻击。

影响范围：后续涉及律师文庭审、刑侦翻案、古代公堂、宗门审判、家族族会、公司听证、朝堂对峙、公开裁决、证据反杀、证人质证、裁判者降智修复、万能证据修复或读者反馈“庭审像吵架/证据一拿就赢/审判没有程序/判完没后果”时，应先调用第 141 篇，再按需要联动第 20、60、61、72、88、90、100、105、120、122、123、128、130、136 篇。

## 2026-06-09：新增“直播弹幕、论坛热帖、评论区风向、热搜榜与社交媒体叙事”专题

状态：已确认

决策：新增 `docs/142-social-media-livestream-barrage-forum-comment-heat-search-narrative.md`，把正文中的直播间、弹幕、论坛帖、评论区、短视频传播、热搜榜、粉圈广场、游戏公屏和打赏榜统一视为“平台化公开场景”。

理由：既有文档已覆盖信息舆论战、作者话/读者社区、读者反馈编码、口碑资产、文娱商业资源和机制弹幕，但缺少专门教 AI 如何写“屏幕文本作为叙事场景”的规则。新专题要求 AI 同时管理平台、事件、受众、信息差、文本功能、节奏波峰、攻防动作、资源结算和长尾台账，避免只写“哈哈哈”“卧槽”“震惊”。

边界：

- 公共舆论与信任战优先查 `docs/61-information-public-opinion-leak-rumor-media-fandom.md`。
- 真实作者话、读者社群运营优先查 `docs/66-author-note-reader-community-serial-feedback.md`。
- 真实读者评论分析优先查 `docs/41-feedback-coding-system.md`。
- 读者复述和口碑资产优先查 `docs/103-reader-retelling-mouthfeel-recommendation-asset.md`。
- 文娱商业资源优先查 `docs/124-industry-company-studio-agency-platform-business-contract-resource.md`。
- 弹幕作为金手指或系统机制时优先查 `docs/14-mechanism-design.md`。

## 2026-06-09：新增“天气季节、昼夜节气、节庆仪式与环境压力叙事”专题

状态：已确认

决策：新增 `docs/143-weather-season-festival-calendar-environmental-pressure-atmosphere.md`，作为 AI agent 处理天气、季节、昼夜、节气、节庆、祭典、庙会、灯会、农时、灾害、气候、环境压力和氛围描写的专项入口。

理由：既有第 31 篇覆盖地域时代和风俗质感，第 84 篇覆盖意象回响，第 71 篇覆盖感官落地，第 88 篇覆盖空间调度，第 85 篇覆盖压力节奏，第 124 篇覆盖经营生产链，第 137 篇覆盖饮食时令，但缺少一篇专门把天气、季节、昼夜和节庆作为“章节级压力系统”来执行的文档。AI 写作常出现纯景物开场、月光雨雪滥用、节日装饰化、灾害按钮化、季节消失、天气不影响行动等问题，因此需要独立规则。

已确认规则：环境不是风景素材。每个天气、季节、昼夜、节气或节庆元素都必须至少承担限制行动、制造期限、改变资源、强化情绪、提供公开场景、埋设线索或形成长线世界感中的一种功能。推荐执行链为“环境现象 -> 行动限制 -> 人物选择 -> 资源后果 -> 台账回写”。

影响范围：后续涉及古言宫宴、灯会、祭祖、玄幻雷劫、秘境开启、都市档期、综艺直播、种田农时、经营旺季、悬疑雨夜、雪地证据、台风封岛、末世严寒、恋爱节日、氛围水修复、纯景物开场修复时，应优先调用本专题，并按需要联动第 31、71、84、85、88、116、124、137 篇。

## 2026-06-09：新增“官场衙门、政令执行、基层治理、文书流程与官僚链路”专题

状态：已确认

决策：新增 `docs/144-bureaucracy-court-politics-officialdom-governance-faction-policy-execution.md`，作为 AI agent 处理古代官场、朝堂议政、县衙办事、科举入仕、任官升迁、政令执行、地方治理、赋税徭役、赈灾修堤、官吏勾连、幕僚师爷、地方豪强、派系党争和现代审批类剧情的专项入口。

理由：既有第 130 篇负责组织派系和制度政治，第 141 篇负责庭审/裁决程序，第 61 篇负责公开舆论和解释权，第 122 篇负责谈判交易，但缺少一篇专门把官场和基层治理拆成“权源、管辖、文书、资源、执行层、地方阻力、问责结算”的流程型文档。AI 写官场常出现聪明人嘴炮、皇帝/掌门万能按钮、政令自动执行、清官悬浮、贪官降智、地方势力抽象和问责不入账，因此需要独立规则。

已确认规则：官场不是谁官大谁说了算，而是“权源 -> 管辖 -> 文书 -> 资源 -> 执行 -> 地方 -> 问责”的行动链。主角要赢，不只要说得对，还要拿到可执行文书、人手、钱粮、时限、执行层配合和问责结果。真实朝代官职、法律、科举和现代公共机构必须查证并标注不确定性。

影响范围：后续涉及官场权谋、县衙办案、朝堂议政、科举任官、赈灾修河、基层治理、税粮账册、文书批复、地方豪强、派系党争、清官爽文、贪官反派、现代审批和组织流程时，应先调用第 144 篇，并按需要联动第 20、31、61、111、122、130、141 篇。

## 2026-06-09：新增“服饰妆容、制服礼服、阶层标识、伪装破绽与视觉身份”专题

状态：已确认

决策：新增 `docs/145-costume-clothing-makeup-uniform-status-disguise-visual-identity.md`，作为 AI agent 处理服饰、妆容、发饰、首饰、制服、官服、校服、礼服、婚服、丧服、战甲、法袍、职业装、伪装换装、阶层标识、门派徽记、家族纹样、身份牌、视觉记忆点和衣物线索的专项入口。

理由：既有第 31 篇覆盖地域时代生活层，第 84 篇覆盖意象回响，第 87 篇覆盖人物首次识别，第 123 篇覆盖潜入伪装，第 125 篇覆盖身份秘密，第 140 篇覆盖装备制造，但缺少一篇专门把服饰妆容作为“可见身份系统”来执行的文档。AI 写服饰常出现从头到脚报菜名、白衣胜雪红衣似火、古风影楼滤镜、伪装只靠换衣服、衣物无连续性和真实服制混搭无意识，因此需要独立规则。

已确认规则：服饰不是外貌清单，而是“场合 -> 身份 -> 行动 -> 关系 -> 线索 -> 后果”的可见身份系统。每处衣着细节必须服务身份、行动、关系、线索、阶层、主题或世界规则之一。真实历史服制、民族服饰、宗教服饰、职业制服和礼仪规则必须查证并避免刻板化。

影响范围：后续涉及人物登场、古言宫斗礼服、婚服孝服、宗门制服、官服朝服、都市职业装、娱乐圈妆造、悬疑衣物线索、潜入伪装、身份误认、关系信物、战甲法袍、服饰描写空泛修复或衣物连续性台账时，应先调用第 145 篇，并按需要联动第 17、20、31、84、87、111、123、125、140 篇。

## 2026-06-09：新增“声音音乐、歌舞舞台、戏曲演出、演唱会与观演反馈叙事”专题

状态：已确认

决策：新增 `docs/146-sound-music-performance-stage-concert-opera-audience-feedback.md`，作为 AI agent 处理声音、音乐、歌曲、演唱、演奏、歌舞、舞蹈、戏曲、曲艺、说书、舞台表演、演唱会、综艺竞演、练习生舞台、古言才艺、修仙乐修、文娱作品发布、舞台事故、观众反应、评委反馈和表演后资源结算的专项入口。

理由：既有第 75 篇负责对话潜台词，第 84 篇负责声音意象回响，第 96 篇负责叙事声音，第 119 篇负责竞赛赛制，第 142 篇负责弹幕评论和平台传播，第 145 篇负责服饰妆造，但缺少专门指导“音乐/舞台表演如何作为剧情场景运作”的文档。AI 写表演常出现歌声空灵、全场震撼、掌声雷动、技术空心、观众工具化、表演无目标、现实歌词版权风险和文娱舞台无产业后果，因此需要独立规则。

已确认规则：表演不是形容词堆叠，而是“表演目标 -> 技术执行 -> 情绪指向 -> 舞台环境 -> 观众/评委反应 -> 失误或突破 -> 资源结算 -> 后续余波”的实时反馈场。正文默认不直接引用现实歌词，优先写原创歌曲、原创舞台或概述表演效果。

影响范围：后续涉及娱乐圈舞台、文娱爆曲、选秀综艺、古言献艺、戏曲说书、修仙乐修、演唱会、直播唱歌、悬疑声音线索、舞台事故、观众震惊疲劳修复、音乐描写空泛修复、现实歌词版权风险排查时，应先调用第 146 篇，并按需要联动第 20、75、84、96、102、119、142、145 篇。

## 2026-06-09：新增“仪式典礼、婚丧嫁娶、拜师册封、祭祖继位与身份转化”专题

状态：已确认

决策：新增 `docs/147-ritual-ceremony-wedding-funeral-investiture-initiation-status-transition.md`，作为 AI agent 处理婚礼、退婚、丧礼、葬礼、守灵、祭祖、祭祀、拜师礼、入门大典、宗门大典、册封、封后封妃、加冠及笄、登基继位、传位授印、授勋授衔、誓师大会和现代授证/发布类仪式的专项入口。

理由：既有第 31 篇覆盖地域时代礼俗，第 122 篇覆盖婚约/联盟谈判，第 126 篇覆盖死亡和葬礼余波，第 136 篇覆盖契约誓言，第 143 篇覆盖节庆仪式作为环境压力，第 145 篇覆盖礼服孝服等视觉身份，第 146 篇覆盖表演中的仪式目标，但缺少专门把“仪式怎样让身份正式改变、关系被公开承认、违礼产生后果”落成执行链的文档。AI 写仪式常出现红绸香案空景、百科礼制、宾客只震惊、违礼无后果、仪式万能解决矛盾和真实礼俗混搭，因此需要独立规则。

已确认规则：仪式不是装饰场面，而是“社会承认机器”。每场仪式都必须管理旧身份、新身份、主持者、见证者、关键动作、规制限制、资源变化、反对破坏和台账回写。仪式完成后必须改变称呼、权限、关系、资源、文书、物件或群体记忆。真实婚丧、宗教、民族、历史礼制和现代法律流程必须查证并避免刻板化。

影响范围：后续涉及婚礼/退婚、葬礼/悼念、拜师收徒、宗门入门、册封继位、祭祖祭祀、成人礼、授证授印、仪式空景修复、违礼无后果修复、真实礼俗混搭风险排查时，应先调用第 147 篇，并按需要联动第 20、31、105、111、115、122、126、136、141、143、145、146 篇。

## 2026-06-09：新增“书信口信、传讯符、电话短信、群聊邮件、邮驿信使与消息链路”专题

状态：已确认

决策：新增 `docs/148-message-communication-letter-courier-delay-misdelivery-signal-chain.md`，作为 AI agent 处理书信、家书、密信、口信、信使、驿站、飞鸽、传令、军报、烽火、传讯符、玉简、传音、电话、短信、邮件、群聊、聊天记录、系统通知、暗号、密码、留言、已读不回、撤回、误传、截获、延迟送达和断联的专项入口。

理由：既有第 31 篇覆盖地域时代通讯条件，第 61 篇覆盖公共传播和舆论，第 120 篇覆盖消息作为证据，第 142 篇覆盖平台化屏幕文本，第 144 篇覆盖公文政令，但缺少一篇专门管理“消息如何从发送者到接收者，途中如何延迟、变形、被截获、被误读并改变行动”的通信链路文档。AI 写消息常出现电话刚好响、密信刚好到、传讯符万能、截图一锤定音、口信不走样、古代通信现代化和消息读完无后果，因此需要独立规则。

已确认规则：消息不是剧情快递，而是“发送者动机 -> 消息内容 -> 选择媒介 -> 传递路径 -> 时间延迟 -> 真伪校验 -> 途中变形/截获 -> 接收者状态 -> 行动后果 -> 台账回写”的通信链路。关键消息必须有媒介限制、传递路径、时间差、真伪校验和读后行动。涉及现实隐私、聊天记录、邮件、录音、通信平台和取证时必须联动合规与事实查证文档。

影响范围：后续涉及古代密信/驿报、仙侠传讯符、现代电话短信、群聊误发、职场邮件、遗言家书、战报军令、暗号接头、电话钩子、已读不回、消息误传、通信截断、截图证据、通信台账或读者反馈“信息来得太巧/误会太硬/古代像有手机”时，应先调用第 148 篇，并按需要联动第 20、31、37、61、111、120、123、138、142、144 篇。

## 2026-06-09：新增出行旅程、路线交通与路程成本专题（已确认）

- 决策：新增 `docs/149-travel-route-transport-inn-checkpoint-map-logistics-journey-cost.md`。
- 原因：既有知识库已有新地图开场、时间跳跃、低强度反水文、空间脑内地图、转场桥、追逃路线、地域时代质感、坐骑和载具专题，但缺少专门处理普通出行、赶路、交通、住宿、通关和到达状态差额的入口。
- 规则：远距离移动最少必须保留“走哪条路、付出什么成本、到达后哪里变了”。如果三件事都没有，这段旅程应删除或压缩。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增金钱货币、价格尺度与经济可信度专题（已确认）

- 决策：新增 `docs/150-money-currency-price-income-expense-debt-cost-of-living-economic-credibility.md`。
- 原因：既有知识库已有资源经济、回报资产、经营建设、谈判交易、装备制造、税粮官场和旅程成本，但缺少一个统一管理普通钱感、价格尺度、收入支出、现金流、债务和购买力锚点的入口。AI 写长篇时，如果钱只是随手数字，会破坏阶层、经营、爽点、债务压力和现实可信度。
- 规则：重要金额最少必须说明“这笔钱大概能买什么、对当前角色是轻松/肉疼/掏空/不可能、进账出账或欠账后后文状态改变什么”。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增年龄寿命、成长阶段与时间年龄连续性专题（已确认）

- 决策：新增 `docs/151-age-lifespan-generation-seniority-growth-stage-continuity.md`。
- 原因：既有知识库已把年龄纳入正典事实、合规风险、称谓术语、时间跳跃、师徒传承和仪式身份转化，但缺少专门管理实际年龄、公开年龄、身体年龄、外貌年龄、心理/记忆年龄、社会权限、辈分代际和寿命状态的统一入口。AI 写长篇时，年龄冻结、重生年龄风险、儿童成人化、长生无代价和辈分错乱会严重破坏可信度与安全边界。
- 规则：年龄不是人物卡里的一个数字，而是身体阶段、社会权限、心理经验、关系辈分、寿命剩余和时间线位置的组合。每次时间跳跃、重生、返老还童、突破延寿、寿命扣减、成人礼、拜师出师和身份公开，都必须同步年龄台账。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增住所房屋、居住权与空间归属专题（已确认）

- 决策：新增 `docs/152-home-house-residence-property-room-domestic-space-territory.md`。
- 原因：既有知识库已有生活细节、地域风俗、感官落地、物件回响、空间调度、潜入任务、经营基地、旅程住宿和金钱房租规则，但缺少一个专门管理长期住所、居住权、进入权限、私密边界、宅院权力、宿舍制度、洞府基地和搬家后果的入口。AI 写住所时容易写成装修背景，导致空间不改变行动、关系和连续性。
- 规则：住所不是“人物待着的地方”，而是“谁能进入、谁有权留下、谁负责维护、谁被看见、谁被保护、谁被排除”的空间制度。重要住所必须记录进入权、居住权、生活成本、私密边界、空间秘密和状态变化。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增睡眠疲劳、休息恢复与身体资源连续性专题（已确认）

- 决策：新增 `docs/153-sleep-fatigue-rest-recovery-circadian-body-resource-continuity.md`。
- 原因：既有知识库已有时间跳跃、训练成长、低强度防水、身体感官、叙事疲劳、战斗消耗、追逃疲劳、伤病恢复、梦境和昼夜环境规则，但缺少一个专门管理普通睡眠、疲劳、守夜、熬夜、休息恢复和身体资源连续性的入口。AI 写长篇时容易把主角写成永动机，或把休息写成回血按钮和水章。
- 规则：休息不是跳过剧情，疲劳不是形容词，睡眠不是回血按钮；它们都是角色行动资格、判断质量、情绪稳定、关系照护和后续代价的连续性资产。写任何疲劳或休息相关内容，必须检查上次有效睡眠、疲劳来源、疲劳是否改变选择，以及休息后状态差额。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增卫生清洁、洗浴如厕与身体体面专题（已确认）

- 决策：新增 `docs/154-hygiene-bathing-toilet-laundry-sanitation-smell-body-care-daily-life.md`。
- 原因：既有知识库已有地域生活层、感官细节、美食卫生、服饰气味、住所动线、旅程洗浴和身体资源规则，但缺少一个专门管理水源、洗浴、如厕、污物、衣物清洗、气味、经期体面、清洁劳动和公共卫生的入口。AI 写生活、逃亡、末世、古言、餐馆、宿舍和病伤照护时，容易让人物像没有身体，也容易把卫生写成猎奇或尴尬留白。
- 规则：卫生不是尴尬细节，而是“水从哪来、污物去哪、身体如何保持体面、谁承担清洁劳动、缺清洁会带来什么风险”的叙事系统。长期生活、旅途、战后、群居、餐饮、病伤和身体隐私相关内容，必须检查水、洗、排、换、污物处理、隐私和台账状态。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增语言方言、翻译传译与跨文化沟通专题（已确认）

- 决策：新增 `docs/155-language-dialect-accent-translation-code-switching-miscommunication.md`。
- 原因：既有知识库已有角色声音、称谓术语、信息密度、内心过滤、信息差、身份伪装和消息链规则，但缺少一个专门管理语言能力、方言口音、翻译成本、读写能力、暗语行话、异族语言和跨文化误读的入口。AI 写跨地域、古言、玄幻、星际、职场、商队和多语场景时，容易默认全员无障碍沟通，或用错字化方言、透明翻译和术语堆叠破坏可读性与尊重边界。
- 规则：语言不是台词皮肤，而是“谁能听懂、谁能说服、谁能隐瞒、谁被排除、谁必须依赖翻译”的沟通权限系统。写任何语言差异、方言口音、翻译、暗语、术语或跨文化沟通，必须检查谁会说、谁听得懂、谁需要翻译，语言差异改变什么，以及是否进样式表/台账。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增非语言沟通、身体语言与微动作潜台词专题（已确认）

- 决策：新增 `docs/156-nonverbal-communication-body-language-silence-gaze-distance-touch-subtext.md`。
- 原因：既有知识库已有人物对话、情绪关系、视角权限、行动反应、感官落地、对白潜台词、空间站位、内心过滤、信息差、亲密边界和动作攻防规则，但缺少一个专门管理非语言沟通的入口。AI 写人物时容易用模板动作替代情绪，或把身体语言当读心术，导致人物不活、群戏同步震惊、触碰越界和微动作无后果。
- 规则：身体语言不是情绪翻译器，而是人物在压力下管理欲望、边界、信息、关系和风险时露出的可见痕迹。写任何非语言沟通，必须检查动作是否由刺激/目标/压力触发，谁观察或误读，是否改变话轮、行动、关系或台账状态。
- 执行：已同步 README、总索引、来源清单、模板清单。

## 2026-06-09：新增校园课堂、班级社团、作业考试与教育制度专项

决策：新增 `docs/157-school-campus-classroom-homework-exam-club-education-system.md`，作为 AI agent 处理校园文、青春成长、学院流、书院/宗门课堂、训练营、班级群像、学生会/社团、考试升学、家长会、校园舆论、课堂戏、作业考试、同学关系、教师家长和未成年人学校安全边界的专项入口。

原因：既有知识库已有考试竞赛、师徒导师、年龄阶段、宿舍住房、卫生、睡眠、校园欺凌安全和组织派系等专题，但缺少一个把学校作为“日程、空间、权限、评价、同伴生态、家庭压力、身体资源和安全边界”整体运转的执行入口。AI 写校园场景常出现学校像咖啡馆、老师工具化、考试按钮化、同学路人化、社团摆拍、家长消失、未成年人边界模糊等问题，因此需要独立专题。

已确认规则：校园不是背景板，而是制度场。每个校园场景都要明确时间、空间、权威人物、评价机制和安全边界，并让至少一条制度压力改变人物选择、关系、名声、资格、纪律、身体状态或下一步行动。涉及未成年人、欺凌、隐私、危险行为或师生权力差时，必须联动第 20 和第 105 篇。

影响范围：后续涉及校园恋爱、青春成长、重生校园、学院流、宗门学堂、艺校军校、课堂戏、考试节点、作业压力、社团活动、家长会、班级舆论、校园安全事件、未成年人边界审稿或读者反馈“校园像背景板/老师降智/考试太假/同学没有人味/欺凌处理不舒服”时，应先调用第 157 篇，并按需要联动第 20、30、31、58、61、62、74、88、105、119、130、139、141、151、152、153、154、155 篇。

## 2026-06-09：新增怀孕分娩、产后恢复、婴幼儿照护、亲子责任与家庭后果专项

决策：新增 `docs/158-pregnancy-childbirth-postpartum-childcare-parenting-family-responsibility.md`，作为 AI agent 处理怀孕、孕期、产检、临产、分娩、产后、坐月子、哺乳、婴儿照护、育儿、带娃、亲子关系、监护抚养、产假、家庭分工、孕产风险、流产/早产/难产、产后抑郁、亲子身份、抱错/遗弃/收养、单亲育儿、家族继承和任何“孩子或孕产改变人物生活结构”的专项入口。

原因：既有知识库已有医疗、敏感内容、年龄阶段、睡眠疲劳、卫生、亲密同意和校园教育等专题，但缺少一篇专门把孕产、产后和婴幼儿照护作为“身体资源、时间安排、金钱成本、关系责任、家庭权力、职业机会、社会身份和长篇台账”来管理的执行文档。AI 写这类情节常出现怀孕反转按钮、产后秒恢复、婴儿道具化、父亲只会感动、喂养道德化、带球跑无代价、生产靠吼解决和孩子被当 CP 奖杯等问题，因此需要独立专题。

已确认规则：孕产和育儿不是剧情道具，而是持续生活系统。怀孕、分娩、产后和婴幼儿照护必须进入台账，并改变人物的身体、时间、资源、关系、责任和社会身份。孩子不是 CP 奖杯，而是持续义务和权利主体。涉及流产、死亡、产后抑郁、虐童、遗弃、强迫怀孕、未成年人怀孕、医疗事故或婴幼儿安全时，必须联动第 20、105、126、131 篇，并查最新官方资料。

影响范围：后续涉及都市婚恋、追妻/带球跑、古言宅斗、年代文、种田文、末世逃亡、玄幻血脉、萌娃治愈、亲子身份反转、产后照护、育儿日常、未成年人安全边界审稿或读者反馈“怀孕狗血/孩子像工具/产后不真实/男主不负责/育儿冒犯”时，应先调用第 158 篇，并按需要联动第 20、25、30、31、68、71、74、79、86、101、105、111、115、126、131、151、153、154、157 篇。

## 2026-06-09：新增残障、慢性病、神经差异、辅助器具与无障碍环境专项

决策：新增 `docs/159-disability-chronic-illness-neurodiversity-accessibility-assistive-devices.md`，作为 AI agent 处理残障角色、慢性病角色、神经差异角色、视障/听障/行动障碍/言语障碍/认知障碍角色、轮椅/拐杖/义肢/助听器/白杖/屏幕阅读器/字幕/手语/服务动物等辅助系统、无障碍环境、学校/职场便利、照护关系、残障歧视、信息可及性、超凡治愈后遗症和架空世界无障碍设计的专项入口。

原因：既有知识库已有伤病治疗与康复、第 105 篇敏感内容、第 156 篇非语言沟通中的身体差异提醒、第 155 篇语言可及性提示，但缺少一篇专门把残障、慢性病、神经差异、辅助器具和无障碍环境作为“人物主体性 + 环境制度 + 辅助系统 + 台账后果”来管理的执行文档。AI 写这类角色常出现卖惨、励志模板、奇迹治愈唯一圆满、反派残障化、拿身体差异开玩笑、辅助器具装饰化、无障碍消失和照护关系越界等问题，因此需要独立专题。

已确认规则：残障不是人物缺陷或剧情惩罚，而是身体/感知/认知状态与环境、制度、资源、他人态度共同作用后形成的生活条件。残障角色必须有残障以外的目标、关系、技能、缺点和欲望；辅助器具必须有功能、适配、维护、成本和损坏后果；无障碍环境、沟通可及、合理便利、隐私和拒绝权必须进入场景和台账。

影响范围：后续涉及都市职场、校园青春、古言宅斗、玄幻仙侠、末世逃亡、科幻赛博、医疗康复、亲密关系、照护冲突、无障碍场景、残障角色审稿、慢性病角色台账、神经差异描写或读者反馈“卖惨/残障工具化/励志腔/治愈太冒犯/辅助器具像装饰/拿残障开玩笑”时，应先调用第 159 篇，并按需要联动第 20、25、30、31、68、71、74、80、101、105、111、131、145、151、153、154、155、156、157、158 篇。

## 2026-06-09：新增老年、失能照护、失智认知退化、养老资源与代际责任专项

决策：新增 `docs/160-aging-eldercare-dementia-long-term-care-caregiver-burden-intergenerational-responsibility.md`，作为 AI agent 处理老年角色、失能/半失能照护、失智/认知退化、阿尔茨海默病相关情节、跌倒风险、长期照护、家庭赡养、养老院/护理院/社区养老、护工陪护、照护者疲劳、代际责任、遗嘱财产、老年再婚、空巢老人、孤寡老人、老人被诈骗/被虐待/被忽视、临终安排、安宁疗护、长寿种衰老和宗门长老退位的专项入口。

原因：既有知识库已有年龄寿命与代际连续性、第 131 篇伤病治疗、第 153 篇睡眠疲劳、第 159 篇残障无障碍和第 150 篇金钱成本，但缺少一篇专门把老年、失能照护、失智认知退化、养老资源和代际责任作为“日常功能 + 照护系统 + 资源成本 + 权益尊严 + 长篇台账”来管理的执行文档。AI 写这类情节常出现老人标签化、养老口号化、失智当笑点、摔倒剧情按钮、照护者无限承受、养老院等于不孝、老人被骗写成愚蠢等问题，因此需要独立专题。

已确认规则：养老照护不是“孝顺口号”，而是围绕日常功能、医疗风险、居住安全、金钱资源、照护分工、法律权利、情感债和老年人自主权展开的长期系统。老人必须保有目标、选择、习惯、旧账和尊严边界；失智、跌倒、走失、被骗、照护者疲劳和养老选择都必须进入后果与台账。

影响范围：后续涉及都市家庭伦理、年代文、乡村亲情、古言家族、玄幻长寿种、悬疑失智证词、养老机构经营、照护者疲劳、老年诈骗、赡养冲突、临终告别、老人模板化修复或读者反馈“老人像工具/养老像作文/失智不尊重/孝道绑架/照护不真实”时，应先调用第 160 篇，并按需要联动第 20、25、30、31、68、71、74、79、86、101、105、111、126、131、150、151、152、153、154、159 篇。

## 2026-06-09：新增身份文书、户籍档案、证件许可、资格证明与登记记录专项

决策：新增 `docs/161-identity-documents-registration-records-permits-credentials-civil-status.md`，作为 AI agent 处理身份证、户籍、户口、出生登记、死亡登记、婚姻登记、收养登记、改名更名、学籍学历、职业资格、执照许可证、护照签证、通行凭证、居住证、档案、令牌腰牌、路引过所、官凭文牒、宗门身份牌、系统身份、数字 ID、黑户、无证者、冒名顶替、身份冒用、证件丢失、档案调取、登记错误和任何“一个人能否被制度承认”的专项入口。

原因：既有知识库已有第 125 篇秘密身份与掉马、第 144 篇官场文书、第 147 篇仪式身份转换、第 149 篇通行凭证、第 152 篇住所房契、第 157 篇学籍、第 158 篇出生/收养提示，但缺少一篇专门把“身份文书”作为社会承认机器来管理的执行文档。AI 写身份常出现主角一句话证明身份、证件万能、档案万能答案、冒名无成本、婚姻/收养/死亡无登记后果、现实证件流程胡写等问题，因此需要独立专题。

已确认规则：身份文书不是背景资料，而是社会承认机器；它决定角色能否被看见、进入、交易、学习、工作、结婚、继承、通行、受保护、被追责和改变身份。关键身份必须区分自我身份、关系身份、社会身份和制度身份，并有凭证、签发者、登记处、适用范围、核验方式、风险后果和台账状态。

影响范围：后续涉及都市现实、古言权谋、悬疑调查、校园学籍、婚姻收养、真假千金、身份冒用、跨境旅行、宗门腰牌、系统 ID、档案调取、无证者处境、身份揭示余波或读者反馈“身份太随便/证件像万能钥匙/档案一查全知道/冒名顶替太轻松”时，应先调用第 161 篇，并按需要联动第 20、30、31、61、74、86、100、106、111、120、125、130、141、144、145、147、148、149、150、152、157、158 篇。

## 2026-06-09：新增招聘入职、劳动合同、薪酬社保、绩效晋升、解雇离职与职场制度专项

决策：新增 `docs/162-workplace-employment-hiring-contract-payroll-performance-promotion-termination-labor-rights.md`，作为 AI agent 处理招聘、面试、背调、offer、入职、试用期、劳动合同、劳务/外包/实习、岗位职责、汇报线、薪酬工资、奖金提成、社保公积金、考勤打卡、加班调休、休假、绩效考核、KPI/OKR、晋升降职、转岗调岗、保密协议、竞业限制、离职、辞退、裁员、解雇、劳动仲裁、工伤、产假病假、职场歧视和办公室政治的专项入口。

原因：既有知识库已有职业可信度、组织派系、公开证据、谈判、劳动仲裁程序、薪酬成本、身份资格和职场日常等碎片，但缺少一篇专门把“招聘到离职”的员工生命周期拆成岗位、合同、工资、考勤、绩效、权限、责任、风险和离职余波的执行文档。AI 写职场常出现老板万能、入职无手续、工资空泛、绩效假数字、晋升无权限变化、辞退靠吼、仲裁像综艺和 HR 工具人等问题，因此需要独立专题。

已确认规则：职场不是办公室背景板，而是“岗位 -> 合同 -> 工资 -> 考勤 -> 绩效 -> 权限 -> 责任 -> 风险 -> 离职余波”的制度链。每一次入职、晋升、加薪、背锅、裁员或离职，都要改变钱、权限、记录、关系、名声或下一次机会。现实劳动法、社保、工伤、女职工保护、未成年工、仲裁和裁员内容必须查最新官方资料，不输出违法操作建议。

影响范围：后续涉及都市职场、行业文、商战、娱乐圈公司、平台用工、劳动争议、职场调查、薪酬绩效、晋升打脸、裁员离职、工伤争议、孕产/残障职场边界或读者反馈“职场像宫斗/老板太万能/工资没质感/劳动仲裁不真实/HR 工具人”时，应先调用第 162 篇，并按需要联动第 20、30、31、58、61、74、81、86、100、111、120、122、130、141、144、148、150、158、159、161 篇。

## 2026-06-09：新增数字账号、密码隐私、网络安全、黑客桥段与电子数据可信度专项

决策：新增 `docs/163-digital-account-password-privacy-cybersecurity-hacking-data-evidence.md`，作为 AI agent 处理账号盗用、密码凭据、多因素认证、设备会话、平台封禁、后台权限、数据泄露、隐私曝光、网络诈骗、黑客角色、聊天记录、转账记录、日志取证、电子证据、职场泄密、校园匿名墙、娱乐圈账号危机、赛博数字身份和网络安全桥段的专项入口。

原因：既有知识库已有第 61 篇信息战、第 120 篇调查证据链、第 142 篇社媒平台文本、第 148 篇通信链路、第 161 篇身份档案和第 162 篇职场制度，但缺少一篇专门管理“账号、凭据、设备、权限、日志、平台、隐私和电子证据边界”的数字可信度文档。AI 写现代和赛博题材时常出现黑客万能、密码万能、截图万能、平台缺席、隐私无代价、数据泄露无后果和攻击教程化等问题，因此需要独立专题。

已确认规则：数字世界不是魔法后台，而是“现实身份 -> 数字账号 -> 登录凭据 -> 设备会话 -> 权限范围 -> 数据资产 -> 平台规则 -> 日志痕迹 -> 风险扩散 -> 证据边界 -> 现实余波”的叙事系统。账号不等于本人，登录不只靠密码，截图不是一锤定音，隐私泄露必须有伤害和责任，网络安全桥段只能写叙事可信度、风险和后果，不能输出现实攻击、盗号、绕过验证、恶意软件或规避追踪教程。

影响范围：后续涉及现代都市、娱乐圈、公关舆论、商战、校园、职场、悬疑刑侦、记者线、律师线、赛博朋克、黑客角色、平台运营、账号盗用、数据泄露、隐私暴露、聊天记录、转账记录、后台日志、系统通知、网络诈骗、勒索软件、数字身份、电子证据或读者反馈“黑客太假/截图即真相/账号事故没后果/平台像空气/隐私泄露太轻飘”时，应先调用第 163 篇，并按需要联动第 61、66、72、105、111、120、123、142、148、161、162 篇。

## 2026-06-09：新增火灾消防、灾害事故、应急疏散、救援响应与灾后余波专项

决策：新增 `docs/164-fire-disaster-emergency-evacuation-rescue-accident-aftermath-safety.md`，作为 AI agent 处理火灾、烟雾、燃气泄漏、爆炸事故、工厂事故、商场/学校/医院/酒店事故、高层住宅事故、地震、洪水、台风、暴雨内涝、山体滑坡、泥石流、停电断水、群体疏散、消防救援、避难安置、灾后恢复、事故调查和责任追究的专项入口。

原因：既有知识库已有第 60 篇灾难救援大场面调度、第 85 篇压力节奏、第 88 篇空间调度、第 105 篇创伤安全、第 120 篇调查证据、第 121 篇逃生追逐、第 131 篇伤病治疗、第 143 篇天气环境和第 149 篇路线交通，但缺少一篇专门管理“事故从隐患、触发、预警、疏散、救援、次生风险到调查恢复”的全生命周期文档。AI 写灾害事故常出现爆炸空降、主角单刷救援、专业响应缺席、疏散混乱、事故无责任、灾后清零和危险操作教程化，因此需要独立专题。

已确认规则：灾害不是单个大场面，而是“隐患 -> 触发 -> 预警 -> 现场判断 -> 报警/通报 -> 疏散/避险 -> 专业响应 -> 次生风险 -> 救援分工 -> 安置救助 -> 事故调查 -> 责任与恢复 -> 长篇台账”的连锁压力系统。主角只能做合理的局部贡献，不能替代消防、应急、医疗、公安、物业、学校或企业系统；涉及火灾、燃气、爆炸、危险品、破拆、排险、伤情处理和事故规避时，只写叙事可信度、风险和后果，不输出可模仿操作步骤。

影响范围：后续涉及灾难救援、火场事故、燃气事故、工厂安全、校园安全、商场酒店医院事故、自然灾害、避难安置、灾后重建、事故悬疑、企业责任、救援英雄高光或读者反馈“爆炸太突然/救援太假/主角像超人/事故没后果/危险细节不适”时，应先调用第 164 篇，并按需要联动第 20、60、85、88、105、111、120、121、131、143、149、159、163 篇。

## 2026-06-09：新增银行账户、贷款信用、保险理赔、税务发票与金融合规专项

决策：新增 `docs/165-bank-loan-credit-insurance-tax-invoice-financial-compliance-money-flow.md`，作为 AI agent 处理银行账户、资金流水、贷款借贷、征信逾期、担保抵押、信用卡分期、保险投保、保险理赔、发票报销、税务申报、公司财务、现金流、反洗钱风控、账户冻结、金融诈骗、非法集资、投资亏损、事故赔偿和任何“钱进入制度后产生后果”的专项入口。

原因：既有知识库已有第 124 篇经营循环、第 150 篇日常金钱和生活成本、第 162 篇工资社保、第 163 篇数字账号与电子数据、第 164 篇事故赔偿余波，但缺少一篇专门管理银行账户、贷款征信、保险合同、税务发票、现金流和金融合规的制度链文档。AI 写都市、商战、家庭、重生赚钱和悬疑时常出现钱凭空到账、贷款按钮化、保险自动赔、税务消失、利润等于现金、金融诈骗靠降智和金融违法教程化，因此需要独立专题。

已确认规则：钱一旦进入现代制度，就会留下账户、合同、流水、征信、票据、税务、保险和监管痕迹。关键资金必须回答“谁的钱、从哪来、进哪去、凭什么、留下什么记录、后续谁承担”。贷款不是资源包，保险不是自动赔钱，经营收入不是到手现金，金融桥段只能写叙事可信度、风险和后果，不能输出洗钱、逃税、骗保、骗贷、虚开发票、套现、非法集资等可模仿步骤。

影响范围：后续涉及都市家庭债务、商战创业融资、重生赚钱、娱乐圈片酬税务、保险理赔、事故赔偿、职场报销、公司审计、金融诈骗、悬疑资金链、古言账簿银票或读者反馈“钱太假/贷款太随便/保险像外挂/公司财务像儿戏/资金证据一锤定音”时，应先调用第 165 篇，并按需要联动第 30、61、72、111、120、124、141、148、150、161、162、163、164 篇。

## 2026-06-09：新增报警接处警、公安办案、侦查措施、拘留逮捕与案件程序专项

决策：新增 `docs/166-police-reporting-public-security-investigation-detention-search-case-procedure.md`，作为 AI agent 处理报警、报案、110 接处警、派出所接待、民警出警、现场处置、受案登记、立案/不立案、刑事案件侦查、治安行政案件、询问、讯问、笔录、传唤、拘留、逮捕、取保候审、监视居住、搜查、扣押、查封、冻结、鉴定、辨认、证人保护、被害人告知、案件移送、检察院审查、校园警情、家暴警情、诈骗报案和失踪走失的专项入口。

原因：既有知识库已有第 120 篇调查证据链和第 141 篇庭审裁决程序，但缺少一篇专门管理“冲突如何进入公安/警务系统，报案后如何被接警、分流、受案、立案、调查、侦查、采取强制措施并移送”的前置程序文档。AI 写悬疑、都市、校园、家庭和商战时常出现报警秒抓、派出所万能、立案即定罪、主角私查无代价、询问讯问混用、强制措施轻飘和规避侦查教程化，因此需要独立专题。

已确认规则：警察不是剧情橡皮章，而是有职权边界、程序条件、证据要求、时限压力、公众监督和后续移送链的制度角色。报警之后不是直接抓人，而是“警情发生 -> 报警/报案 -> 接警分流 -> 现场处置 -> 受案登记 -> 刑事/行政/民事/求助分流 -> 证据固定 -> 调查/侦查 -> 强制措施 -> 权利告知 -> 案件移送/处罚/调解/不立案 -> 复议救济/申诉 -> 台账回写”。警务桥段只能写程序可信度、风险和后果，不能输出逃避侦查、毁灭证据、虚假报案、作伪证、威胁证人或规避法律责任的可模仿步骤。

影响范围：后续涉及悬疑刑侦、都市报警、校园警情、家暴处置、失踪走失、诈骗报案、商战职务犯罪、事故责任追查、娱乐圈报警澄清、古代报官、宗门执法或读者反馈“报警太假/警察像NPC/派出所万能/立案就等于定罪/主角私查太离谱”时，应先调用第 166 篇，并按需要联动第 20、61、72、105、111、120、123、141、148、157、161、163、164、165 篇。

## 2026-06-09：新增著作权、作者身份、授权许可、平台签约、同人改编与 AI 生成内容边界专项

决策：新增 `docs/167-copyright-authorship-licensing-platform-contract-fanwork-plagiarism-ai-generated-content.md`，作为 AI agent 处理原创性之后的权利链入口，覆盖著作权归属、作者身份、署名、共同创作、委托创作、职务创作、平台签约、独家/非独家授权、买断/分成/保底、信息网络传播权、改编权、影视/漫画/有声/游戏授权、同人二创、转载引用、素材许可、版权登记、侵权争议和 AI 生成内容标识。

原因：既有第 20 篇覆盖内容合规和版权总闸门，第 102 篇覆盖原创性、来源转化和防洗稿，第 110 篇覆盖 IP 改编资产，但知识库缺少一篇专门管理“权利归谁、授权到哪里、合同怎么限制、素材是否可用、AI 参与如何记录”的权利链文档。AI agent 如果只会说“注意版权”，仍然容易在平台签约、同人转原创、改编授权、素材使用和 AIGC 发布时出现权利不清、授权不明、合同失忆、侵权争议扩大和伪造授权风险。

已确认规则：第 102 篇负责“内容够不够原创”，第 167 篇负责“权利归谁、授权到哪里、证据在哪里”。商业级网文必须能说清每个可商业化资产的创作来源、人类贡献、权利人、权利类型、授权范围、平台合同、素材许可、AI 参与记录和争议处理状态。正式签约、商业化发布、授权或争议处理前必须查最新平台规则和专业意见，不得编造授权、法律结论、平台审核结果或规避检测方法。

影响范围：后续涉及新书立项版权风险、平台签约、IP 改编、同人转原创、歌词台词引用、封面字体素材、AIGC 辅助写作、AI 标识、版权登记、授权合同、侵权争议、读者反馈“像某 IP/融梗/洗稿/未授权素材”或商业化发布前风险审查时，应先调用第 167 篇，并按需要联动第 20、34、102、110、122、136、146、163、165 篇。

## 2026-06-09：新增第168篇“驾驶车辆、道路交通、交通事故、责任认定与车险理赔专项”

状态：已确认

决策：新增独立交通车辆专题，不再把驾驶、车祸和车险分散放在旅行交通、灾害事故、金融保险或警务程序中。

理由：现代网文中车辆场景极高频，且一场车戏天然牵连驾驶资格、车辆登记、道路规则、危险行为、事故现场、证据链、责任认定、保险理赔、修车定损和后续处罚。若不独立沉淀，AI 容易把车祸写成“撞一下就推进感情”的工具桥段，缺少制度余波和商业级现实压力。

执行规则：后续出现开车、网约车、货车、校门口事故、停车场剐蹭、肇事逃逸、酒驾塌房、车祸悬疑、保险定损或交通事故赔偿时，优先读取第168篇，并与第149篇、第164篇、第165篇、第166篇联动。

## 2026-06-09：新增第169篇“医院急诊、住院病历、医保报销、医疗纠纷与陪护照护链专项”

状态：已确认

决策：新增独立医院制度链专题，不再把医院戏全部归入伤病治疗、灾害救援、医保金融或警务取证。

理由：既有第131篇已经处理伤病、治疗与康复可信度，但 AI 写现代医院场景时仍容易跳过挂号分诊、急诊留观、住院手续、病历文书、知情同意、费用医保、出院复诊、医疗投诉和陪护照护成本。医院不是治疗按钮，而是一个让人物身份、家庭关系、费用压力、证据链和制度秩序同时显形的场域。

执行规则：后续出现急诊、住院、病历、医保、异地就医、医疗纠纷、陪护守夜、出院复诊、工伤医疗、车祸住院、病弱人设或医院证据时，优先读取第169篇，并与第131篇、第158篇、第159篇、第160篇、第164篇、第165篇、第166篇联动。

## 2026-06-09：新增第170篇“餐饮厨房、食品安全、外卖平台、饭局酒桌与过敏中毒风险链专项”

状态：已确认

决策：新增独立餐饮食品安全与外卖平台专题，不再把所有食物场景都归入第137篇美食描写。

理由：第137篇负责馋感、味觉、饭局戏、厨艺和餐馆经营回报，但 AI 在写现代餐饮、外卖、食堂、预包装食品、过敏忌口、疑似食物中毒和食品安全事故时，仍容易忽略许可备案、采购储存、后厨操作、平台订单、标签过敏原、投诉举报、抽检召回、监管处罚、赔偿和舆论余波。食品安全不是菜单细节，而是会把人物、商家、平台、监管、医院和公众舆论连在一起的制度链。

执行规则：后续出现餐馆经营、外卖平台、酒桌饭局、集中用餐、校园食堂、医院/养老机构食堂、探店直播、食品过敏、疑似食物中毒、预包装食品标签、食品召回、食安投诉或监管处罚时，优先读取第170篇，并与第137篇、第154篇、第131篇、第169篇、第165篇、第168篇、第61篇联动。

## 2026-06-09：新增第171篇“酒店民宿、旅馆入住登记、客房服务、监控隐私与住宿安全链专项”

状态：已确认

决策：新增独立住宿场所制度链专题，不再把酒店、民宿、客栈和旅馆只作为第149篇旅程住宿或第152篇住所空间的附属内容。

理由：既有第149篇负责旅程中的住宿节点，第152篇负责长期住所，第163篇负责数字隐私，第164篇负责酒店事故，第166篇负责警务程序，但 AI 写酒店和民宿场景时仍容易忽略预订渠道、实名登记、未成年人入住保护、房卡门锁、访客管理、客房卫生、保洁维修、公共区域监控、客房隐私、消费退款、投诉报警和退房证据。住宿场所不是同住梗道具，而是身份、权限、服务、隐私、安全和消费争议共同作用的制度场。

执行规则：后续出现酒店、旅馆、民宿、客栈、青旅、电竞酒店、公寓酒店、出差住宿、被迫同房、未成年人入住、偷拍视频、私生跟踪、查监控、房卡日志、客房卫生、退款投诉或住宿安全事件时，优先读取第171篇，并与第149篇、第152篇、第154篇、第163篇、第164篇、第166篇、第170篇联动。

## 2026-06-09：新增第172篇“宠物动物、兽医诊疗、城市养宠、动物伤害与照护责任链专项”

状态：已确认

决策：新增独立现实宠物与动物责任专题，不再把宠物/动物全部归入第132篇御兽灵宠或普通生活细节。

理由：第132篇负责虚构非人伙伴、灵宠、战宠和御兽机制，但 AI 写现实宠物、城市养宠、兽医诊疗、动物咬伤抓伤、流浪动物救助、宠物经济、服务动物、异宠和野生动物时，仍容易忽略动物来源、饲养人责任、登记免疫、地方养犬规则、公共空间、兽医病历、狂犬病风险、人医/兽医链、民事赔偿、动物福利和情感善后。动物不是萌点挂件，也不是伤害按钮，而是生命、责任和公共空间参与者。

执行规则：后续出现现实宠物、猫狗日常、城市养宠、遛狗冲突、动物医院、兽医、宠物寄养美容、宠物保险、宠物走失、动物咬伤抓伤、流浪动物救助、服务动物、异宠野生动物、虐待弃养或动物责任争议时，优先读取第172篇，并与第132篇、第159篇、第164篇、第168篇、第169篇、第171篇、第166篇联动。

## 2026-06-09：新增第173篇“快递物流、仓储配送、签收退货、丢件破损与供应链证据链专项”

状态：已确认

决策：新增独立快递物流与包裹证据链专题，不再把快递、仓储、退货和丢损仅分散在第124篇经营供应链、第148篇消息传递、第149篇旅程物流或第170篇外卖配送中。

理由：现代网文中快递和物流高频出现在网购、都市生活、商战样品、合同证据、悬疑匿名包裹、经营爆单、退货退款、隐私泄露和供应链冲突里。AI 容易让物品瞬移、让物流记录万能、让签收等于收到、让退货等于删除交易、让丢件破损无责任。因此需要独立沉淀“订单-仓储-面单-运输-交付-售后-证据-后果”的实物流转链。

执行规则：后续出现网购快递、寄件收件、仓库发货、样品/合同寄送、物流延误、签收代收、驿站快递柜、退货换货、丢件破损、保价理赔、禁寄物品、面单隐私、快递诈骗或供应链证据时，优先读取第173篇，并与第124篇、第148篇、第149篇、第163篇、第165篇、第166篇、第170篇联动。

## 2026-06-09：新增第174篇“摄影摄像、照片视频、影像证据、肖像权隐私与剪辑传播链专项”

状态：已确认

决策：新增独立影像材料与传播取证专题，不再把照片、视频、截图、监控、偷拍视频和 AI 换脸只分散在舆论、数字证据、版权或酒店隐私专题中。

理由：既有第61篇负责公共舆论，第120篇负责证据链，第142篇负责平台化屏幕文本，第163篇负责数字账号与电子证据，第167篇负责版权授权，第171篇负责酒店偷拍隐私，但 AI 写影像时仍容易让截图万能、视频一出真相大白、偷拍变爽点、肖像商业使用无授权、恶剪无代价、AI 换脸像玩笑、摄影师权利消失。影像不是事实本身，而是经过拍摄、选择、剪辑、发布和解释的材料，需要独立链条管理。

执行规则：后续出现照片、视频、截图、录屏、监控、直播回放、街拍代拍、偷拍视频、恶意剪辑、肖像授权、摄影作品版权、个人信息泄露、AI 换脸、深度合成、平台传播、公开澄清或影像证据时，优先读取第174篇，并与第20篇、第61篇、第105篇、第120篇、第142篇、第163篇、第167篇、第171篇联动。

## 2026-06-09：新增第175篇“房地产租赁、买房卖房、中介合同、物业纠纷与搬家交割链专项”

状态：已确认

决策：新增独立房产交易与租赁交割专题，不再把租房、买房、中介、物业和搬家交割只放在第152篇住所空间、第150篇钱感、第165篇贷款金融或第173篇快递搬家中。

理由：第152篇负责房子作为生活空间和私密边界，但 AI 写都市租房、买房、卖房、退押金、中介、房贷、产权、物业、验房和搬家时，仍容易忽略房源来源、权属核查、合同条款、资金路径、网签备案、不动产登记、物业费、维修资金、水电燃气、钥匙门禁和争议证据。房子不是背景板和奖励道具，而是会改变现金流、行动半径、关系权力、身份安全感和长篇资产台账的制度对象。

执行规则：后续出现租房、合租、房东租客、中介带看、押金退租、买房卖房、首付贷款、网签备案、不动产登记、抵押查封、新房预售交付、物业纠纷、维修资金、验房搬家、水电燃气交割、房产继承或房屋纠纷时，优先读取第175篇，并与第152篇、第150篇、第161篇、第165篇、第166篇、第173篇、第164篇联动。

## 2026-06-09：新增第176篇亲密关系法律/情感责任链

状态：已确认

决定：新增 `docs/176-romance-marriage-engagement-cohabitation-bride-price-dowry-divorce-property-intimate-responsibility.md`，作为婚恋、同居、订婚、婚姻登记、彩礼嫁妆、夫妻财产债务、离婚分割、子女抚养和家暴保护的综合专题。

理由：既有第15篇偏关系张力，第147篇偏婚礼仪式，第158篇偏孕产育儿，第161篇偏证件，第165篇偏金融债务，第166篇偏警务流程，第175篇偏房产交割，缺少“亲密关系从承诺进入制度后果，再到破裂清算”的统一 AI 写作入口。

规则：以后 AI 写现代婚恋和家庭线时，必须同时检查情感链和制度链；婚礼不等于登记，彩礼不等于普通恋爱消费，离婚不等于一句签字，控制和家暴不得浪漫化。

## 2026-06-09：新增第177篇继承遗嘱与亲属财产冲突链

状态：已确认

决定：新增 `docs/177-inheritance-will-estate-division-remarried-family-kinship-property-conflict.md`，作为 AI agent 处理继承、遗嘱、遗产分割、再婚家庭、继子女、遗产管理、房产存款保险股权交付和亲属财产冲突的专项入口。

理由：既有第126篇管死亡情绪余波，第160篇管老人照护，第161篇管身份文书，第165篇管金融资产，第175篇管房产，第176篇管婚姻再婚，但缺少“死亡后资产和亲属资格如何被制度清算”的统一入口。

规则：以后写遗产争夺、豪门争产、老人遗嘱、再婚家庭争房、保险受益人、存款继承、股权继承时，必须先确认死亡事实、遗产范围、亲属资格、遗嘱/遗赠扶养协议、遗产管理人、债务和交付路径；继承戏的爽点必须来自证据、程序和旧情感债共同落地，不得写伪造遗嘱、冒领存款、隐匿转移遗产等现实操作方案。

## 2026-06-09：新增第178篇公司企业、股权合伙与商业纠纷链

状态：已确认

决定：新增 `docs/178-company-enterprise-equity-partnership-employment-labor-commercial-dispute.md`，作为 AI agent 处理公司设立、市场主体登记、股东出资、章程治理、法定代表人、董事高管、股权转让、股权代持、股权激励、融资投资、合伙企业、商业合同、劳动用工接口、商业秘密、清算破产和商业纠纷的专项入口。

理由：既有第124篇管经营建设，第130篇管组织权力，第162篇管员工生命周期，第165篇管金融税票，第177篇管股权继承，但缺少“公司作为法律主体如何出生、运转、争权、签约、用工、融资、纠纷和死亡”的统一入口。AI 写商战和创业常出现老板万能、公司等于私人钱包、股权比例即全部控制、融资像打赏、合同没有主体、利润等于现金、员工和股东身份混乱等问题。

规则：以后写公司、创业、商战、豪门家族企业、娱乐公司、股权争夺、合伙散伙、融资投资、商业秘密或公司清算时，必须先确认主体类型、登记许可、股权/合伙结构、章程/协议、控制权、合同链、财务税票、劳动接口和争议路径；不得提供逃税、洗钱、虚假出资、恶意破产、违法辞退、窃取商业秘密等现实操作方案。

## 2026-06-09：新增第179篇知识产权组合与侵权维权链

状态：已确认

决定：新增 `docs/179-intellectual-property-copyright-trademark-patent-trade-secret-adaptation-licensing-infringement.md`，作为 AI agent 处理版权、商标、专利、商业秘密、软件、品牌包装、授权许可、平台投诉、侵权比对、行政投诉、仲裁诉讼和商业维权的综合入口。

理由：第167篇已经负责网文著作权、作者身份、平台签约和改编授权，但商战、科技创业、娱乐公司、直播电商、游戏软件和品牌打假还需要统一区分版权、商标、专利、商业秘密和不正当竞争。AI 写 IP 时常把所有权利都叫版权，把商标注册当公司名，把专利当发明家光环，把商业秘密写成口头机密，把维权写成热搜喊话，因此需要独立专题。

规则：以后写 IP、品牌、技术、软件、商业秘密、盗版、洗稿、抢注、平台投诉、商标/专利/商业秘密侵权时，必须先区分权利类型、权利人、形成证据、登记/申请/保密状态、授权范围、侵权比对、证据链和程序路径；不得提供规避侵权、伪造授权、窃取秘密、恶意投诉、盗版传播等现实操作方案。

## 2026-06-09：新增第180篇消费者权益、网购平台与售后维权链

状态：已确认

决定：新增 `docs/180-consumer-rights-ecommerce-platform-return-refund-false-advertising-product-quality-after-sales.md`，作为 AI agent 处理消费者权益、网购平台、退换货退款、虚假宣传、产品质量、售后维权、直播带货、评价刷单、假货打假、投诉举报和平台责任的专项入口。

理由：既有第170篇管食品安全，第173篇管快递和退货物流，第178篇管企业主体，第179篇管品牌/IP，但缺少“消费者从被宣传吸引到下单付款、收货体验、售后申请、平台介入、投诉举报和维权余波”的统一入口。AI 写消费纠纷常出现客服万能、退货秒退款、平台像法官、虚假宣传无证据、假货只靠热搜、七日无理由万能、刷单控评被写成营销智慧等问题。

规则：以后写网购、直播带货、退货退款、产品质量、虚假宣传、价格套路、假货打假、差评争议或平台售后时，必须先确认宣传承诺、订单付款、商家/平台/主播/品牌/生产者分工、证据链、售后路径和商业后果；不得提供恶意退款、骗赔、刷单控评、伪造证据、虚假广告、规避监管等现实操作方案。

## 2026-06-09：新增第181篇教育培训、职业资格与培训退费纠纷链

状态：已确认

决定：新增 `docs/181-education-training-tutoring-vocational-qualification-exam-registration-certificate-fraud-refund-dispute.md`，作为 AI agent 处理教育培训、校外培训、职业培训、考试报名、职业资格、证书核验、培训退费、培训贷、保过班、考试违规、证书造假和机构跑路的专项入口。

理由：既有第157篇管校内校园制度，第161篇管学籍学历和职业资格作为身份文书，第180篇管一般消费退费，但缺少“培训机构如何招生、收费、交付课程、承诺考试或证书、退费维权和资格核验”的统一入口。AI 写考证和培训常出现交钱就拿证、培训机构万能、保过班无合同、假证无后果、培训贷像福利、作弊被美化和退费只靠吵架等问题。

规则：以后写培训机构、考证逆袭、校外辅导、职业资格、证书造假、培训贷、协议班退费、机构跑路或考试违规时，必须先确认培训类型、学员身份、机构资质、招生承诺、合同收费、课程交付、考试/证书、证据链和解决路径；不得提供作弊、替考、假证、证书挂靠、诱导培训贷、伪造退费证据等现实操作方案。

## 2026-06-09：新增第182篇旅游出行、旅行社与旅游纠纷链

状态：已确认

决定：新增 `docs/182-tourism-travel-scenic-spot-hotel-agency-ticket-change-refund-guide-service-dispute.md`，作为 AI agent 处理旅游产品、旅行社、OTA 平台、旅游合同、行程单、交通住宿门票、导游领队、景区安全、强制购物、低价团、票务退改、旅游投诉和旅游纠纷的专项入口。

理由：既有第149篇管旅程路线和交通成本，第168篇管驾驶事故，第171篇管住宿登记，第180篇管一般消费维权，但缺少“旅游作为经营服务链”的统一入口。AI 写旅游时常出现风景导游词、平台万能退款、跟团游只有黑导游、票务改签一键解决、投诉秒赔、出境无证件、景区事故全靠主角救等问题。

规则：以后写旅游、跟团游、自由行、景区门票、导游服务、票务改签、低价团、强制购物、旅行社纠纷和旅游投诉时，必须先确认旅游产品、经营主体、合同订单、行程资产、票务状态、证件材料、导游/领队、证据链和投诉路径；不得提供伪造订单证件、逃避实名安检边检、黑导游黑团、骗保骗赔或私闯危险区域等现实操作方案。

## 2026-06-09：新增第183篇美容医美、健身康养与身体风险纠纷链

状态：已确认

决定：新增 `docs/183-beauty-medical-aesthetics-fitness-wellness-prepaid-card-body-risk-service-dispute.md`，作为 AI agent 处理生活美容、医疗美容、化妆品护理、健身私教、瑜伽普拉提、康养按摩、高危险性体育、预付卡会员卡、医美分期、虚假宣传、身体损害、退费投诉和监管处罚的专项入口。

理由：既有第169篇管医院和医疗纠纷，第180篇管一般消费退费，第165篇管医美分期和资金流，第174篇管照片视频隐私，但缺少“身体服务消费”统一入口。AI 写医美、健身和康养常出现医美像普通美容、私教三天变身、预付卡一句不退、减肥痛苦被美化、康养包治百病、术前术后照随便传播和身体损害只赔钱无余波等问题。

规则：以后写美容、医美、健身、康养、私教、预付卡、身体损害、医美分期、身体焦虑或服务退费时，必须先确认服务类型、经营主体、资质许可、广告承诺、评估同意、合同付款、产品器械、服务记录、风险触发和处理路径；不得提供医美操作、危险减肥、黑医美、过度训练、伪造记录、骗赔骗退等现实操作方案。

## 2026-06-09｜已确认｜新增第184篇养老机构、护理院、社区养老、监护照护合同与老年权益风险链专项

- 决策：新增 `docs/184-elderly-care-institution-nursing-home-community-care-guardianship-contract-rights-risk.md`，将养老机构、护理院、社区居家养老、医养结合、长护险、监护决定、养老服务合同、护理记录、风险事故、养老预付费诈骗和老人权益保护整理为独立专题。
- 分工：第160篇继续负责老年角色、失能照护、认知退化、家庭责任和代际伦理的总系统；第184篇负责养老服务的机构化、合同化、记录化、监管化和证据化链路。
- 写作规则：后续涉及养老机构或养老服务纠纷时，AI agents 必须至少检查老人本人意愿、服务类型、经营主体、合同费用、护理等级、日常记录、风险事件、证据链、投诉监管路径和家庭余波。
- 来源依据：老年人权益保障法、养老机构管理办法、GB 38600-2019 养老机构服务安全基本规范、长护险失能等级评估管理办法、医养结合政策解读、养老机构服务合同示范文本和民法典监护规则。

## 2026-06-09｜已确认｜新增第185篇死亡善后、殡葬服务、公墓安葬、骨灰处置、祭扫礼俗与家属纠纷链专项

- 决策：新增 `docs/185-funeral-burial-cemetery-cremation-death-certificate-memorial-ritual-dispute.md`，将死亡证明、遗体接运、殡仪馆服务、火化、骨灰领取、公墓墓位、生态安葬、祭扫礼俗、丧葬费用、亲属争议和殡葬消费纠纷整理为独立专题。
- 分工：第147篇继续负责丧礼、葬礼、守灵、祭祖等仪式结构；第161篇负责死亡登记和身份文书；第177篇负责继承；第185篇负责死亡后现实善后服务链、证据链和纠纷链。
- 写作规则：后续涉及死亡善后时，AI agents 必须至少检查死亡发生地点、死亡证明或调查衔接、遗体去向、殡葬服务项目和收费、骨灰/墓位安排、逝者遗愿、亲属资格、丧葬费用和后续身份/继承/保险衔接。
- 来源依据：修订后的《殡葬管理条例》、公墓管理暂行办法、死亡医学证明和信息登记管理规范、民政部清明祭扫和殡葬领域治理公开资料、人体器官捐献和移植条例、民法典。

## 2026-06-09｜已确认｜新增第186篇单位、社保、公积金、工伤、退休、人事档案与职场保障纠纷链专项

- 决策：新增 `docs/186-work-unit-social-insurance-housing-provident-fund-work-injury-retirement-personnel-file-dispute.md`，将单位用工、社保经办、医保断缴、养老保险缴费年限、公积金缴存贷款、工伤认定、劳动能力鉴定、延迟退休、养老金、人事档案、政审职称和职场保障纠纷整理为独立专题。
- 分工：第162篇继续负责招聘入职、劳动合同、薪酬绩效、辞退离职和普通劳动争议；第186篇负责长期保障账户、缴费记录、档案材料、待遇资格、退休核定和跨部门经办链。
- 写作规则：后续涉及社保、公积金、工伤、退休或人事档案时，AI agents 必须至少检查劳动关系、参保地、缴费月份、缴费基数、断缴情形、经办材料、档案位置、争议分流和生活后果。
- 现实更新：2025年1月1日起实施渐进式延迟法定退休年龄和弹性退休制度；现实题材不得再默认“男60、女50/55到点自动退休”，应结合出生年月、最低缴费年限、弹性退休和地方/身份规则查证。
- 来源依据：社会保险法、社会保险经办条例、工伤保险条例、劳动能力鉴定管理办法、住房公积金管理条例、全国人大常委会关于实施渐进式延迟法定退休年龄的决定、实施弹性退休制度暂行办法、流动人员人事档案管理服务规定。

## 2026-06-09｜已确认｜新增第187篇互联网平台账号、直播电商、MCN、公会、粉丝经济与数字劳动纠纷链专项

- 决策：新增 `docs/187-platform-account-live-commerce-mcn-guild-influencer-fandom-digital-labor-dispute.md`，将平台账号、短视频账号、直播间、直播带货、MCN、公会、达人经纪、粉丝打赏、账号封禁限流、推荐算法、虚假流量、选品翻车、坑位费佣金、达人分成、数字劳动和平台纠纷整理为独立专题。
- 分工：第142篇继续负责弹幕、评论区、热搜和平台舆论的文本呈现；第180篇负责消费者售后维权；第187篇负责账号主体、平台规则、MCN合同、直播电商经营、粉丝经济、后台证据和平台/监管/合同分流。
- 写作规则：后续涉及直播带货、网红账号、MCN、公会、达人合同、账号封禁、粉丝打赏或平台限流时，AI agents 必须至少检查账号主体、实名认证、平台规则、MCN/商家/品牌/主播分工、选品话术、结算资金、粉丝群体、后台证据和纠纷分流。
- 现实更新：截至2026-06-09，《直播电商监督管理办法》已自2026-02-01起施行；《互联网信息内容多渠道分发服务管理规定》已公布并将于2026-09-01施行。写现实时间线时必须注意生效日期。
- 来源依据：直播电商监督管理办法、网络交易平台规则监督管理办法、网络直播营销管理办法（试行）、互联网用户账号信息管理规定、网络主播行为规范、互联网信息服务算法推荐管理规定、网络反不正当竞争暂行规定、规范网络直播营利行为意见和互联网信息内容多渠道分发服务管理规定。

## 2026-06-09｜已确认｜新增第188篇网络游戏、电竞俱乐部、陪玩代练、虚拟道具交易与未成年人游戏消费纠纷链专项

- 决策：新增 `docs/188-online-game-esports-club-boosting-companion-virtual-item-minor-consumption-dispute.md`，将网络游戏、手游、电竞俱乐部、职业选手、青训、赛事、游戏账号、实名防沉迷、充值退款、虚拟货币、虚拟道具、皮肤抽卡、账号交易、代练陪玩、外挂脚本、游戏公会、未成年人游戏消费和游戏服务纠纷整理为独立专题。
- 分工：第119篇继续负责电竞赛制和比赛结构；第124篇负责游戏公会经营循环；第163篇负责账号安全和电子证据；第187篇负责直播平台和粉丝经济；第188篇负责游戏服务、虚拟资产、电竞职业、代练陪玩和未成年人游戏消费纠纷。
- 写作规则：后续涉及游戏充值、未成年人消费、账号封禁、代练陪玩、虚拟道具、电竞合同或赛事处罚时，AI agents 必须至少检查账号实名主体、实际使用者、防沉迷、支付记录、虚拟资产状态、平台规则、电子证据、合同或赛事规则和现实余波。
- 安全规则：不得输出绕过防沉迷、骗退款、外挂脚本、代练规避封号、账号黑产交易、虚拟货币赌博或操纵比赛的现实操作方法。
- 来源依据：防止未成年人沉迷网络游戏通知、未成年人网络保护条例、网络游戏虚拟货币管理通知、网络出版服务管理规定、体育赛事活动管理办法、电子竞技员/运营师新职业公开信息、消费者权益保护法实施条例、互联网用户账号信息管理规定和网络游戏管理办法征求意见稿相关官方解读。

## 2026-06-09｜已确认｜新增第189篇 AI 生成内容、深度合成、数字人、声音克隆、版权归属与虚假信息风险链专项

- 决策：新增 `docs/189-ai-generated-content-deep-synthesis-digital-human-voice-cloning-copyright-misinformation-risk.md`，将生成式 AI、AIGC、AI 绘画、AI 配音、AI 视频、深度合成、AI 换脸、声音克隆、数字人、AI 主播、虚拟客服、合成内容标识、水印、模型输出版权、训练数据、提示词、人格权、虚假信息、诈骗和平台治理整理为独立专题。
- 分工：第167篇继续负责版权授权和 AIGC 参与记录；第174篇负责照片视频和影像证据；第163篇负责账号安全和电子证据；第61篇负责舆论战；第189篇负责生成合成内容作为技术、身份、标识、误导、核验和责任链的专项规则。
- 写作规则：后续涉及 AI 生成内容、数字人、AI 换脸、声音克隆、AI 广告、虚假合成证据、AIGC 版权或内容标识时，AI agents 必须至少检查来源素材、授权同意、人类贡献、显式标识、隐式标识、发布平台、受众误认、权利损害、核验证据和责任分流。
- 现实更新：截至2026-06-09，《人工智能生成合成内容标识办法》已于2025-09-01起施行；现实题材涉及 AI 生成合成内容发布和传播时，必须注意显式标识、隐式标识、平台核验、用户声明和标识被删除或篡改后的后果。
- 安全规则：不得输出深度伪造、声音克隆、去水印、伪造证据、绕过平台审核、删除标识、冒充身份、诈骗话术或非法训练数据获取的现实操作方法。
- 来源依据：生成式人工智能服务管理暂行办法、互联网信息服务深度合成管理规定、人工智能生成合成内容标识办法、著作权法、个人信息保护法、民法典、网络信息内容生态治理规定和互联网信息服务算法推荐管理规定。

## 2026-06-09｜已确认｜新增第190篇低空经济、无人机、航拍测绘、空域审批、隐私安全与坠落责任链专项

- 决策：新增 `docs/190-low-altitude-economy-drone-uav-aerial-photography-mapping-airspace-privacy-crash-liability.md`，将低空经济、无人机、无人驾驶航空器、航拍、飞手、无人机物流、无人机巡检、植保无人机、测绘航测、景区航拍、救援无人机、空域审批、实名登记、运行识别、禁飞限飞、隐私侵权、坠落伤人、撞车起火、数据泄露和无人机经营纠纷整理为独立专题。
- 分工：第174篇继续负责照片视频和影像传播证据；第168篇负责道路交通事故；第182篇负责旅游景区服务；第164篇负责灾害救援；第190篇负责无人机飞行、低空空域、航拍测绘、运行识别和坠落责任链。
- 写作规则：后续涉及无人机飞行、航拍、测绘、物流、巡检、救援、表演或低空经济时，AI agents 必须至少检查设备类型、所有人、操控者、实名登记、运行识别、空域类型、申请状态、起降安全、数据风险、飞控日志、事故证据和责任分流。
- 安全规则：不得输出绕过实名登记、禁飞限飞、空域审批、运行识别、电子围栏、非法航拍、非法测绘、设备改装、干扰劫持、投放危险物或规避监管的现实操作方法。
- 来源依据：无人驾驶航空器飞行管理暂行条例、民用无人驾驶航空器运行安全管理规则、民用微轻小型无人驾驶航空器运行识别最低性能要求、通用航空装备创新应用实施方案、测绘法、地图管理条例、个人信息保护法和民法典。

## 2026-06-09｜已确认｜新增第191篇社区治理、物业业委会、邻里纠纷、噪音扰民、停车充电与公共空间冲突链专项

- 决策：新增 `docs/191-community-property-management-owners-committee-neighbor-noise-parking-charging-public-space-dispute.md`，将小区、社区、物业服务、业主大会、业主委员会、居委会、邻里纠纷、噪音扰民、装修、停车位、车库、充电桩、电动自行车停放充电、公共收益、维修资金、高空抛物、占用消防通道、公共空间争夺和基层调解整理为独立专题。
- 分工：第175篇继续负责房屋交易租赁和搬家交割中的物业接口；第191篇负责入住后的社区治理、业主自治、物业服务、公共空间、公共收益、维修资金、噪音停车充电和邻里长期冲突。
- 写作规则：后续涉及小区物业、业委会、邻里纠纷、噪音扰民、停车充电、维修资金或公共空间争夺时，AI agents 必须至少检查当事人身份、空间归属、规则来源、主体权限、证据链、业主群发酵、调解/监管/诉讼分流和关系余波。
- 安全规则：不得输出堵门、堵车、断水断电、破坏门禁或充电桩、非法调取监控、人肉网暴、飞线充电、楼道充电、伪造表决、侵占公共收益或操纵业委会选举的现实操作方法。
- 来源依据：民法典、物业管理条例、业主大会和业主委员会指导规则、住宅专项维修资金管理办法、噪声污染防治法、高层民用建筑消防安全管理规定、城市居民委员会组织法、人民调解法和电动自行车安全隐患全链条整治公开资料。

## 2026-06-09｜已确认｜新增第192篇校园欺凌、未成年人保护、家校沟通、处分转学与心理危机干预链专项

- 决策：新增 `docs/192-school-bullying-minor-protection-home-school-communication-discipline-transfer-psychological-crisis-intervention.md`，将校园欺凌、学生欺凌、校园暴力、网络欺凌、同伴排挤、家校沟通、班主任处置、学校处分、转学休学复学、未成年人保护、校园安全、心理危机、家长维权、校园舆论和公安/司法介入整理为独立专题。
- 分工：第105篇继续负责创伤和自伤安全边界；第157篇负责校园制度大框架；第166篇负责警务分流；第163/174/189篇负责网络、影像和 AI 合成证据；第192篇负责欺凌事件从识别、保护、家校沟通、处分、转学复学到心理支持的处置链。
- 写作规则：后续涉及校园欺凌、网络欺凌、未成年人伤害、家校沟通、处分转学、心理危机或校园舆论时，AI agents 必须至少检查异常信号、初步保护、隐私保护、学校责任人、监护人链条、证据来源、分流判断、处分程序、心理支持和长期恢复。
- 安全规则：不得输出可模仿的欺凌、暴力、自伤、自杀、偷拍视频传播、网暴人肉、伪造证据、串供威胁或报复操作方法；不得把欺凌、心理危机或暴力反杀写成爽点。
- 来源依据：未成年人保护法、未成年人学校保护规定、加强中小学生欺凌综合治理方案、中小学教育惩戒规则（试行）、预防未成年人犯罪法、加强学生心理健康管理工作的通知、学生心理健康专项行动计划和中小学心理健康教育指导纲要。

## 2026-06-09｜已确认｜新增第193篇社区医院、基层卫生服务、家庭医生、疫苗接种、慢病管理与公共卫生随访链专项

- 决策：新增 `docs/193-community-health-primary-care-family-doctor-vaccination-chronic-disease-public-health-followup.md`，将社区卫生服务中心、社区卫生服务站、乡镇卫生院、村卫生室、基层医疗、家庭医生签约、居民健康档案、基本公共卫生服务、预防接种、儿童保健、孕产妇健康管理、老年人健康管理、高血压糖尿病慢病随访、严重精神障碍患者管理、传染病报告、分级诊疗和双向转诊整理为独立专题。
- 分工：第169篇继续负责急诊住院和医疗纠纷；第193篇负责基层医疗、社区公卫、家庭医生、疫苗接种、慢病随访、健康档案和出院后/社区内连续照护链。
- 写作规则：后续涉及社区医院、乡镇卫生院、村医、家庭医生、疫苗接种、慢病管理或公共卫生随访时，AI agents 必须至少检查机构层级、居民健康档案、签约或服务记录、接种/随访/转诊证据、家庭沟通、医保费用、隐私边界和下一次随访。
- 安全规则：不得输出诊断、治疗、用药、疫苗选择、急救、心理干预、传染病规避、伪造记录、隐瞒接触史或泄露健康档案的现实操作方法。
- 现实更新：截至2026-06-09，《中华人民共和国传染病防治法》已于2025-04-30第二次修订；涉及传染病报告、免疫规划、学校托育配合、公共卫生监测和社区随访时，应写清最新制度背景和隐私保护。
- 来源依据：基本医疗卫生与健康促进法、国家基本公共卫生服务规范（第三版）、家庭医生签约服务高质量发展指导意见、疫苗管理法、预防接种工作规范（2023年版）、传染病防治法（2025年修订）、个人信息保护法和国家基层慢病管理指南公开资料。

## 2026-06-09：新增第 194 篇农村土地、宅基地、村集体经济与乡村治理纠纷链

- 状态：已确认
- 决策：新增 `docs/194-rural-homestead-land-contract-collective-economy-expropriation-compensation-village-governance-dispute.md`，作为 AI agent 写乡村土地、祖宅、承包地、流转、分红、征地补偿、村务公开和基层治理冲突的权威参考。
- 理由：既有知识库只在房产、继承、殡葬、低空经济等专题中零散提到宅基地、土地边界和村规民约，缺少可直接写乡村现实冲突的“地权和村集体程序链”。
- 规则：后续涉及农村土地时，必须先区分宅基地、农房、承包地、土地经营权、集体收益和征地补偿；不得把村干部写成土地所有者；不得默认外嫁、离婚、丧偶、就学、服役、务工等身份变化自动消灭成员权益；地方细则影响结果时应保留“地方口径”提示。

## 2026-06-09：新增第 195 篇村镇招商、乡村振兴项目、合作社、农业公司、文旅民宿与政府补贴风险链

- 状态：已确认
- 决策：新增 `docs/195-rural-revitalization-township-investment-cooperative-agricultural-company-cultural-tourism-homestay-subsidy-risk.md`，作为 AI agent 写乡村振兴项目、村镇招商、合作社、农业公司、财政补助、采购招投标、项目验收、民宿文旅和项目烂尾风险的权威参考。
- 理由：第 194 篇已经补齐农村土地和村集体权益，但乡村现实题材还需要“项目制”规则链，解释项目如何进入村庄、资金如何安排、谁负责验收、谁获得收益、失败后如何追责。
- 规则：后续写乡村项目时，必须先标明项目性质和资金来源；不得把政府补贴写成无条件红包；不得把合作社写成只有招牌没有成员、章程和账本；不得写主角通过骗补、围标、虚假验收或压农户获得正向爽感。

## 2026-06-09：新增第 196 篇农村基层金融、农户贷款、农业保险、担保、互助资金与债务纠纷链

- 状态：已确认
- 决策：新增 `docs/196-rural-finance-farmer-loan-agricultural-insurance-guarantee-mutual-aid-debt-dispute.md`，作为 AI agent 写农村贷款、帮扶小额信贷、农业保险、涉农担保、互助资金、民间借贷、征信逾期和熟人社会债务的权威参考。
- 理由：第 165 篇已经管理通用资金制度链，第 194-195 篇补齐农村土地和乡村项目，但乡村创业、农业灾害、合作社周转和基层帮扶还需要一篇农村金融专项，解释钱从哪里来、风险谁承担、保险怎么赔、担保如何追偿、逾期如何影响家庭和村庄信用。
- 规则：后续写 2026 年以后帮扶贷款剧情时，优先使用“帮扶小额信贷”口径；写 2021-2025 年过渡期剧情才使用“脱贫人口小额信贷”口径。不得把政策贷款写成无条件红包，不得把农业保险写成自动赔钱按钮，不得让担保人没有后果，不得输出骗贷、骗保、逃债、非法集资或暴力催收方法。

## 2026-06-09：新增第 197 篇农产品生产、食品安全、农药兽药、冷链溯源、直播带货与质量投诉链

- 状态：已确认
- 决策：新增 `docs/197-agricultural-product-food-safety-pesticide-veterinary-drug-cold-chain-traceability-live-commerce-quality-complaint.md`，作为 AI agent 写农产品生产、食品安全、农药兽药、承诺达标合格证、批次追溯、冷链生鲜、直播带货、质量投诉、抽检处罚和品牌危机的权威参考。
- 理由：第 170 篇负责餐饮后厨和外卖食品安全，第 180 篇负责消费者维权，第 187 篇负责直播电商账号和平台纠纷，第 195 篇负责乡村项目，但缺少一篇从农产品生产端到平台销售端的质量安全和追溯专项。
- 规则：后续写农产品纠纷时，必须先区分产品类型和风险阶段；至少保留合格证、批次、检测、温控、订单、直播回放或抽检公告之一作为证据；不得输出农药兽药使用教程、检测规避、虚假溯源、伪造合格证、投毒污染、刷单控评或骗赔方法。

## 2026-06-09：新增第 198 篇县域物流、冷链仓储、社区团购、产地仓、快递进村与农产品上行链

- 状态：已确认
- 决策：新增 `docs/198-county-logistics-cold-chain-warehouse-community-group-buying-origin-warehouse-express-to-village-agricultural-product-upward-supply-chain.md`，作为 AI agent 写县域物流、农村寄递、快递进村、客货邮、产地仓、冷链仓储、社区团购、农产品上行、直播爆单和退货逆向供应链的权威参考。
- 理由：第 173 篇负责普通快递物流，第 197 篇负责农产品质量安全和冷链追溯，第 195 篇负责乡村项目制，但缺少一篇专门解释县乡村三级物流网络、产地仓运营、快递进村可持续性、社区团购团长节点和农产品上行履约成本的供应链专题。
- 规则：后续写县域物流和农产品上行时，必须先标明流向和节点；不得把快递进村写成城市快递平移；不得把冷库写成免费保鲜魔法；不得把低价补贴、刷单控评、虚假发货、篡改温控、伪造物流轨迹或骗赔写成正向爽点。

## 2026-06-09：新增第 199 篇县域医疗资源、救护转运、分级诊疗、医保结算、异地就医与大病救助链

- 状态：已确认
- 决策：新增 `docs/199-county-medical-resources-ambulance-transfer-tiered-diagnosis-medical-insurance-settlement-cross-region-treatment-serious-illness-assistance.md`，作为 AI agent 写县域医疗、120 急救转运、分级诊疗、县域医共体、转诊转院、医保结算、跨省异地就医、大病保险、医疗救助和家庭陪护费用的权威参考。
- 理由：第 169 篇已经管理医院内急诊住院和医保费用，第 193 篇管理基层随访和公共卫生，但缺少一篇专门解释“从村里到县医院、再到市/省医院”的路程、转诊、急救、结算和救助链。
- 规则：后续写县域医疗和转院剧情时，必须先标明第一站和事件性质；120 不能写成出租车，医保不能写成自动全报，转诊不能写成熟人万能，医疗救助不能写成无底洞；不得输出诊疗、用药、急救、骗保、伪造病历票据或现实报销指导。

## 2026-06-09：新增第 200 篇乡村教育、寄宿制学校、留守儿童、营养餐、校车通学与控辍保学链

- 状态：已确认
- 决策：新增 `docs/200-rural-education-boarding-school-left-behind-children-nutrition-meal-school-bus-attendance-dropout-control-chain.md`，作为 AI agent 写乡村教育、村小教学点、乡镇寄宿制学校、留守儿童、困境儿童、营养餐、校车通学、学生资助、家访走访、控辍保学和劝返复学的权威参考。
- 理由：第 157 篇负责通用校园，第 192 篇负责欺凌和未成年人保护，但知识库缺少乡村教育可及性和儿童照护专项，无法支撑寄宿、通学、营养餐、留守儿童、控辍保学等现实乡村题材。
- 规则：后续写乡村教育时，必须先标明学校类型、儿童处境和通学方式；不得把留守儿童写成单一苦情标签；不得让辍学儿童自然消失；不得把营养餐、校车、寄宿和学生资助写成无制度责任的背景板；涉及欺凌、侵害、心理危机或事故时必须联动未成年人保护和安全专题。

## 2026-06-09：新增第 201 篇县域就业、外出务工、返乡就业、零工市场、劳务中介与欠薪维权链

- 状态：已确认
- 决策：新增 `docs/201-county-employment-migrant-work-return-home-employment-gig-market-labor-agency-wage-arrears-rights.md`，作为 AI agent 写县域就业、农民工外出务工、返乡就业创业、零工市场、劳务中介、工程建设欠薪、劳动监察和劳动仲裁的权威参考。
- 理由：第 162 篇已覆盖通用职场和劳动关系，但乡村与县域题材还需要一篇专门处理劳务输出、熟人招工、零工市场、工程欠薪、返乡就业和家庭留守回流的就业链文档。
- 规则：后续写县域就业和外出务工时，必须先标明找活路径、工作场景和用工主体；写欠薪必须保留合同、工牌、考勤、工资表、流水、聊天记录、实名制或投诉材料等证据；不得把暴力讨薪、黑中介、伪造证据、规避社保或规避用工责任写成正向爽点。

## 2026-06-09：新增县域婚恋、彩礼嫁妆、相亲媒人、跨省婚姻、婚俗改革与家庭债务链专题

状态：已确认

决策：新增 `docs/202-county-marriage-dating-betrothal-gift-dowry-matchmaker-cross-provincial-marriage-custom-reform-family-debt.md`，作为第 176 篇通用婚姻家庭法律链的县域/乡村婚恋分支。后续 AI 写县域婚恋时，必须先把婚事拆成相亲来源、真实意愿、媒人网络、彩礼嫁妆、婚房车债务、婚姻登记、跨省安全、婚俗改革和退婚/彩礼返还出口，不得只写“彩礼高低”或“父母反对”。

理由：县域婚恋是家庭资源、地方舆论、行政登记和安全风险交汇点。若不单列，AI 容易把彩礼写成性别对立，把婚俗改革写成口号，把跨省婚姻写成猎奇或污名化。本专题用链条和模板约束 AI：既保留商业戏剧冲突，也维护婚姻自由、真实意愿、反家暴、反拐和债务风险边界。

## 2026-06-09：新增县域养老、赡养分工、返乡照护、老人再婚、长期护理、遗产房地与养老诈骗链专题

状态：已确认

决策：新增 `docs/203-county-elderly-care-support-remarriage-long-term-care-inheritance-elder-fraud-family-duty.md`，作为第 160 篇老年照护总系统和第 184 篇养老服务机构/社区服务专题的县域家庭分工分支。后续 AI 写县域养老、返乡照护、老人再婚、兄弟姐妹赡养、分家析产、养老诈骗和遗产预热时，必须先拆清老人状态、子女布局、费用结构、照护方案、老人真实意愿、房地财产、证据记录和出口路径。

理由：县域养老冲突最容易被写成空泛“孝道作文”或“争房恶亲戚”。本专题把养老拆成钱、时间、身体、房地、婚恋、服务、诈骗和基层调解的链条，帮助 AI 写出商业级家庭伦理的现实压力，同时维护老人权益、婚姻自由、财产自主、反虐待、反诈骗和长期照护安全边界。

## 2026-06-09：新增县域司法所、人民调解、公共法律服务、法律援助、人民法庭、诉前调解与执行链专题

状态：已确认

决策：新增 `docs/204-county-justice-office-people-mediation-legal-aid-basic-court-enforcement-public-legal-service-dispute-resolution.md`，作为第 141 篇庭审裁判和第 166 篇报警公安程序之间的基层纠纷解决分支。后续 AI 写县域邻里、家事、赡养、借贷、土地、消费、小额合同和行政争议时，必须先判断纠纷性质、当事人关系、紧急风险、证据、调解可能、法律援助、诉前调解、人民法庭和执行路径，不得把所有冲突都写成报警或法院一句话判完。

理由：中文现实网文里大量戏剧冲突发生在“还没进法庭、也不是警情”的基层纠纷处理阶段。若缺少本专题，AI 容易把司法所、人民调解、公共法律服务、法律援助、人民法庭、司法确认和执行混成一个模糊的“找政府”。本专题用链条和模板把情绪、面子、证据、协议、裁判和执行区分开，帮助 AI 写出商业级县域法治质感，同时防止伪造证据、虚假诉讼、规避执行和滥用信访的危险写法。

## 2026-06-09：新增县域心理健康、心理咨询、精神障碍、危机干预、社区康复与家属照护链专题

状态：已确认

决策：新增 `docs/205-county-mental-health-psychological-counseling-psychiatric-disorder-crisis-intervention-community-rehabilitation-family-care.md`，作为第 105 篇创伤安全闸门、第 193 篇基层公卫接口和第 192 篇校园心理危机之外的县域成人/家庭/社区心理健康专项。后续 AI 写心理困扰、精神障碍、心理咨询、热线求助、精神科就医、严重精神障碍随访、社区康复和家属照护时，必须先区分困扰类型、风险等级、求助入口、专业边界、隐私污名、家属角色和长期恢复路径。

理由：心理健康和精神障碍题材极易被 AI 写成污名化、猎奇化、爱情秒治、恐怖工具或可模仿危机细节。本专题用“信号 -> 风险 -> 隐私 -> 求助 -> 转介/诊疗 -> 随访/康复 -> 家属照护 -> 社会融入”的链条，把现实制度和创伤安全结合起来，使 AI 既能写出商业级心理现实感，也不输出诊断、用药、自伤方法、强迫送医或群体污名内容。

## 2026-06-09：新增县域政务服务、行政许可、12345热线、政府信息公开、材料补正、窗口办理与营商环境链专题

状态：已确认

决策：新增 `docs/206-county-government-service-administrative-license-12345-hotline-information-disclosure-window-service-material-correction-business-environment.md`，作为身份材料、村务土地、基层纠纷和返乡创业之间的政务服务分支。后续 AI 写办证办照、行政许可、材料补正、政务大厅、乡镇便民服务、12345热线、政府信息公开、一件事一次办、高效办成一件事、政务服务好差评和营商环境时，必须先拆清事项类型、主管部门、申请主体、材料链、窗口流程、热线工单、信息公开答复和后续救济，不得用领导一句话或热线万能化替代程序。

理由：现实题材里“去办事”经常决定创业能不能开张、补贴能不能到账、婚期能不能赶上、征收争议有没有证据、基层干部是否被夹在制度与群众情绪中。本专题把政务服务从简单刁难桥段升级为材料、权限、时限、补正、流转、答复、评价和救济的可执行链条，帮助 AI 写出商业级县域生活质感，同时防止伪造材料、找关系插队、行贿办事、隐私泄露和滥用热线信访的危险写法。

## 2026-06-09：新增县域生态环境、污染投诉、排污许可、环评、农村污水垃圾、养殖污染、矿山修复与企业整改链专题

状态：已确认

决策：新增 `docs/207-county-ecological-environment-pollution-complaint-discharge-permit-eia-rural-sewage-waste-livestock-mining-remediation.md`，作为县域现实、乡村振兴、企业经营、基层治理和环保执法之间的生态环境分支。后续 AI 写工厂污染、养殖粪污、河道黑臭、农村垃圾污水、矿山破坏、农业面源污染、环保投诉、排污许可、环评、行政处罚和督察整改时，必须先拆清污染类型、污染源、受害体感、证据链、主管部门、投诉分流、排污许可/环评状态、监测执法、整改复查和长期余波。

理由：生态环境题材很容易被 AI 写成“黑心企业污染、主角曝光、领导关厂”的扁平爽点。本专题把污染治理拆成生活体感、生产利益、证据程序、执法边界、整改成本、农村运维和地方经济压力，帮助 AI 写出商业级县域现实质感，同时防止偷排暗管、监测规避、伪造台账、私闯偷样、暴力堵厂和危险处置教程化。

## 2026-06-09：新增县域供水、供电、燃气、通信、停复供、抢修、缴费投诉与民生保障链专题

状态：已确认

决策：新增 `docs/208-county-utilities-water-electricity-gas-telecom-outage-repair-billing-complaint-public-service-continuity.md`，作为第 164 篇灾害事故、第 175 篇房屋交割和第 206 篇政务热线之外的日常民生基础设施分支。后续 AI 写停水停电停气、宽带断网、基站故障、二次供水、老旧小区管线、表计缴费、欠费停供、12398能源监管投诉、电信申诉、重点用户保供和抢修恢复时，必须先拆清服务类型、影响对象、公共侧/物业侧/用户侧边界、原因、通知、证据、报修投诉和安全出口。

理由：水电气通信常被 AI 当作方便制造恐怖、误会和孤岛的开关。本专题把它们重写为民生连续性系统，既能制造商业级生活压力、经营损失、基层治理和家庭伦理，也能防止私接改装、偷水偷电偷气、燃气排险、带电作业、通信破坏和抢修操作教程化。

## 2026-06-09：新增村民自治、村务公开、村民会议、村规民约、村务监督与农村集体经济组织链专题

状态：已确认

决策：新增 `docs/209-village-self-governance-village-affairs-disclosure-villagers-meeting-village-rules-supervision-collective-economy-organization.md`，作为第 194 篇乡村土地/宅基地/征收补偿专题之外的通用村庄治理底座。后续 AI 写村干部、村委会、村务公开、村民会议、村民代表会议、村规民约、村务监督委员会、农村集体经济组织、成员资格、集体资产、分红名单、项目资金和红白事治理时，必须先拆清事项性质、主体资格、决策路径、公开内容、监督链、证据链和争议出口，不得用“村长一句话”替代会议、公示和监督程序。

理由：乡村现实题材里，村庄不是个人领地，村委会也不是政府分局。大量商业冲突来自“谁能代表村、谁有资格参与、谁能分钱、账目是否公开、会议是否真实、规约是否合法、监督是否有效”。本专题把村民自治和集体经济组织写成可执行链条，既能增强村庄群像的现实质感，也能防止操纵选举、伪造会议、冒签公示、侵占集体资产、用村规民约歧视弱势群体等危险写法。

同步规则：涉及《中华人民共和国村民委员会组织法》的后续写作和来源登记，以 2025 年 10 月 28 日修改、2026 年 1 月 1 日施行的版本为准；涉及农村集体资产和成员权益，以 2025 年 5 月 1 日施行的《中华人民共和国农村集体经济组织法》为准。

## 2026-06-09：新增县域社会救助、低保、特困供养、临时救助、低收入人口监测、医疗救助、慈善帮扶与困境家庭链专题

状态：已确认

决策：新增 `docs/210-county-social-assistance-dibao-extreme-poverty-temporary-relief-medical-aid-charity-children-family-hardship.md`，作为第 199 篇医疗救助、第 200 篇困境儿童教育保护和第 203 篇养老救助接口之外的民政社会救助底座。后续 AI 写低保、特困供养、临时救助、低收入人口监测、医疗救助、困境儿童、事实无人抚养儿童、慈善帮扶、民政窗口、村居走访和困难家庭时，必须先拆清困难类型、救助对象、申请或主动发现路径、材料与家庭经济状况核对、入户调查、公示复核、救助组合、隐私尊严和动态管理。

理由：困难家庭题材很容易被 AI 写成苦情消费或主角私人施舍。本专题把“撑不住”转化为制度链：申请、发现、核对、认定、救助、转介、复核和退出，帮助 AI 写出商业级现实压力，同时防止骗补、伪造材料、虚假募捐、儿童隐私曝光、公示羞辱和把困难群众污名化。

同步规则：《中华人民共和国社会救助法》已于 2026 年 4 月 30 日通过，将于 2026 年 7 月 1 日施行。故事时间在 2026 年 7 月 1 日前时，仍按社会救助暂行办法和相关政策运行来写；故事时间在 2026 年 7 月 1 日后时，可纳入社会救助法框架。

## 2026-06-09 决策：新增第211篇“县域市场监管、12315、消费者投诉与行政处罚链”

- 状态：已确认。
- 决策：知识库新增 `docs/211-county-market-regulation-consumer-complaint-12315-product-quality-price-advertising-measurement-administrative-penalty.md`，作为县域市场监管监管侧底座。
- 原因：既有第 180 篇偏消费者售后和平台消费，第 170/183/197 篇分别覆盖食品、医美健身、农产品等专项，但缺少从市场监管部门视角拆解投诉举报、现场检查、产品质量、价格广告、计量、行政处罚、信用整改的通用叙事模板。
- 已确认规则：2026 年 4 月 15 日后，市场监管投诉举报处理应按《市场监督管理投诉举报处理办法》新规理解，写作中不再把旧《市场监督管理投诉举报处理暂行办法》作为当前规则底座。
- 写作影响：后续 AI agent 写“12315、市监局、假货、价格欺诈、虚假广告、缺斤少两、抽检处罚”时，应先区分投诉和举报，再补证据、管辖、监管动作和后续整改，不得把 12315 写成万能裁判。

## 2026-06-09 决策：新增第212篇“县域城管、市容环卫、流动摊贩与公共空间执法链”

- 状态：已确认。
- 决策：知识库新增 `docs/212-county-urban-management-vendor-street-stall-public-space-sanitation-parking-law-enforcement-dispute.md`，作为 AI agent 写县域城市管理、街面秩序、摊贩治理、市容环卫、夜市经济、垃圾治理、违停占道和公共空间执法尺度的权威参考。
- 原因：既有第 170 篇负责食品安全，第 191 篇负责小区物业邻里，第 207 篇负责生态环境，第 211 篇负责市场监管，但缺少城管执法和公共空间治理的独立底座。AI 写城管和摊贩时常出现脸谱化、程序缺失、舆情反转偷懒、公共风险消失等问题。
- 已确认规则：后续写城管、市容、流动摊贩、占道经营、夜市、垃圾分类、建筑垃圾、违停和公共空间治理时，必须先拆清空间属性、行为类型、受影响者、主管部门、证据、劝导整改或处罚程序、民生替代方案和舆情余波。
- 写作影响：城管戏不得简化为“城管欺负人”或“摊贩天然正确”。商业级写法应同时呈现谋生压力、公共通行、卫生安全、执法规范、处罚比例和替代安置。

## 2026-06-09 决策：新增第213篇“县域信访、12345、综治中心、网格治理与群众诉求分流链”

- 状态：已确认。
- 决策：知识库新增 `docs/213-county-petition-letters-visits-grid-governance-social-governance-center-dispute-prevention-resolution.md`，作为 AI agent 写信访事项、12345 热线、综治中心、网格员、矛盾纠纷预防化解、人民调解、行政复议诉讼分流和基层治理回访的权威参考。
- 原因：既有第 204 篇负责司法所、调解、法律援助和法院执行，第 206 篇负责政务服务与 12345 办事入口，第 209 篇负责村级自治，但缺少一个把群众诉求从第一入口到分类、分流、办理、督办、回访和积案化解连成整体的专题。
- 已确认规则：后续写群众找政府、打 12345、信访接待、网格员走访、综治中心调处、历史遗留问题和基层矛盾时，必须先区分咨询、投诉、举报、信访、民事纠纷、行政争议、涉法涉诉、纪检监察和紧急警情，不得把信访、热线、曝光、围堵写成替代法定程序的万能快捷键。
- 写作影响：基层治理戏应同时呈现群众真实困难、证据和程序边界、主管部门权限、基层干部资源限制、隐私保护、回访复查和长期台账；不能只写“干部压事”或“群众闹赢”。

## 2026-06-09 决策：新增第214篇“县域电信网络诈骗、反诈预警劝阻、银行卡止付冻结与受害家庭链”

- 状态：已确认。
- 决策：知识库新增 `docs/214-county-telecom-network-fraud-anti-fraud-center-bank-card-freeze-stop-payment-warning-family-recovery.md`，作为 AI agent 写电信网络诈骗、96110 预警劝阻、银行柜台拦截、报警止付、涉案资金冻结返还、银行卡涉诈、断卡治理、追赃挽损和受害家庭修复的权威参考。
- 原因：既有第 163 篇负责数字账号和电子证据，第 166 篇负责报警侦查，第 165 篇负责资金流，第 203 篇负责养老诈骗接口，但缺少一个专门把电诈受害心理、县域反诈预警、银行公安协同、银行卡涉诈和家庭余波连成整体的安全专题。
- 已确认规则：后续写电诈、反诈、96110、银行卡冻结、涉诈账户、追赃挽损、老人被骗、学生刷单和小商户账户异常时，必须采用非教程化写法；只写受害心理、异常信号、证据保存、报警止付、冻结返还程序、家庭余波和违法后果，不得复刻诈骗话术、资金转移、跑分洗钱、规避风控、买卖银行卡电话卡或逃避侦查方法。
- 写作影响：电诈戏不得把受害者写成“蠢人”，应写孤独、恐惧、缺钱、羞耻、沉没成本和信息差；追赃不得写成报警必追回，冻结也不得误写成立即返还。

## 2026-06-09 决策：新增第215篇“县域农机、农业机械化、机收服务与农忙抢收链”

- 状态：已确认。
- 决策：知识库新增 `docs/215-county-agricultural-machinery-mechanization-harvest-service-cross-region-operation-subsidy-safety-accident.md`，作为 AI agent 写农机作业、农业机械化、机收服务、农业社会化服务、跨区作业、机收减损、农机购置补贴、农机事故和农忙抢收的权威参考。
- 原因：既有第 194 篇负责土地和集体权益，第 195 篇负责乡村项目和合作社，第 196 篇负责农机贷款保险，第 201 篇负责农忙短工，但缺少一个把机器如何下田、谁排队、谁付钱、谁承担损失、谁负责安全和补贴如何落地连成整体的农机专题。
- 已确认规则：后续写种田文、乡村现实、返乡创业、合作社、家庭农场、粮食生产、抢收抢种、农机手和农业现代化时，必须拆清作物季节、地块条件、服务主体、作业协议、质量标准、补贴核验、安全风险、事故处理和下一季台账。
- 写作影响：农业机械化不是主角买机器就成功；农机戏应体现天气窗口、地块适配、服务排班、贷款折旧、维修油料、机收减损、事故责任和农户关系，不得提供危险操作、违规改装、骗补套补或逃避事故责任方法。

## 2026-06-09 决策：新增第216篇“县域农资店、种子、化肥、农药兽药、赊销与假劣农资链”

- 状态：已确认。
- 决策：知识库新增 `docs/216-county-agricultural-inputs-seeds-fertilizer-pesticide-veterinary-drug-fake-inferior-credit-sales-technical-service.md`，作为 AI agent 写农资店、种子、化肥、农药、兽药饲料、农资赊销、假劣农资、农技服务、肥害药害、出苗异常和损失赔偿的权威参考。
- 原因：既有第 197 篇负责农产品质量安全、农药兽药残留、合格证和农产品投诉，但缺少农资作为上游商品与服务的独立底座。农资纠纷往往发生在春耕备耕、合作社统一采购、农资赊销、农技推荐和假劣农资监管中，是乡村现实题材高频冲突。
- 已确认规则：第 216 篇管农资进入田间前后的购买、推荐、赊销、质量、异常结果、检测鉴定和赔偿责任；第 197 篇管农产品产出后的质量安全、残留、追溯、抽检和消费投诉。
- 写作影响：后续写农资纠纷时，必须拆清农资类型、采购渠道、卖方身份、标签批号、票据台账、农技建议、异常结果、因果排除、证据链、监管和赔偿路径；涉及农药、兽药、肥料、饲料时，只写证据、监管、责任和后果，不写现实使用教程、制假售假、规避检测或骗赔方法。

## 2026-06-09 决策：新增第217篇“县域退役军人事务、优抚安置、就业创业与烈士褒扬链”

- 状态：已确认。
- 决策：知识库新增 `docs/217-county-veterans-affairs-preferential-treatment-resettlement-employment-entrepreneurship-martyr-honor-family-assistance.md`，作为 AI agent 写退役军人保障、安置就业、教育培训、优待证、抚恤优待、困难帮扶、烈士褒扬、烈属服务和家庭转型的权威参考。
- 原因：既有知识库覆盖就业、政务服务、社保、殡葬、基层治理和心理健康，但缺少退役军人事务的独立底座。AI 写退役军人时容易把角色写成“万能战神”或“荣誉符号”，忽略移交接收、安置、就业创业、优抚、服务站、家庭转型和隐私尊严。
- 已确认规则：2024 年 9 月 1 日后写退役军人安置，应按《退役军人安置条例》新规语境；2024 年 10 月 1 日后写军人抚恤优待，应按新修订《军人抚恤优待条例》语境。
- 写作影响：后续写退役军人、军属烈属、优待证、安置就业、困难帮扶、烈士褒扬和荣誉纪念时，必须拆清身份类型、材料路径、服务部门、政策边界、就业转型、家庭余波和隐私尊严；不得写现役敏感信息、战术细节、武器操作或用退役身份替代公安司法程序。

## 2026-06-09 决策：新增第218篇“县域残联、残疾人证、康复辅具、无障碍、就业与两项补贴链”

- 状态：已确认。
- 决策：知识库新增 `docs/218-county-disabled-persons-federation-disability-certificate-rehabilitation-assistive-devices-employment-accessibility-subsidy-care.md`，作为 AI agent 写残联、残疾人证、两项补贴、残疾儿童康复救助、辅助器具适配、无障碍环境、残疾人就业、托养照护和家庭照护的权威参考。
- 原因：第 159 篇已经负责残障角色主体性、辅助器具、无障碍体验和反工具化写法，但缺少县域服务系统的独立底座。现实题材中，残疾人证、补贴、康复、辅具、就业、无障碍和家庭照护经常决定角色能否上学、就业、出门、办事和保有尊严。
- 已确认分工：第 159 篇管残障角色主体性和场景体验；第 218 篇管县域残联、证件补贴、康复辅具、就业帮扶、无障碍整改和部门分流。
- 写作影响：后续写残疾人证、两项补贴、康复救助、辅具适配、无障碍改造、残疾人就业和家庭照护时，必须拆清本人意愿、残疾或功能需求、当前证件状态、申请材料、服务路径、部门分工、隐私尊严和台账后果；不得把残疾人证写成万能福利卡，不得把康复写成奇迹治愈，不得把残障角色写成卖惨或励志工具。

## 2026-06-09 决策：文物非遗和古村开发线必须先写保护链，再写商业爽点

状态：已确认

- 决策：当小说涉及施工发现疑似文物、祖宅老物件、祠堂古桥修缮、古村古镇开发、非遗直播、博物馆展陈或文物犯罪线索时，AI agent 必须先读取 `docs/219-county-cultural-relics-intangible-heritage-ancient-village-archaeology-museum-tourism-development-protection.md`。
- 原因：文物、非遗和古村落不是普通可消费素材，错误写法会把私挖、私藏、倒卖、拆真建假、非遗摆拍和破坏性开发包装成爽点。
- 执行：起草时必须识别保护对象、写清权责主体、设置“停、护、报”等正确处置动作；审稿时必须检查是否存在盗掘教程、倒卖路径、老宅随便拆改、博物馆手续缺失、非遗流量化压榨等问题。
- 叙事取向：允许写违法冲突和商业诱惑，但叙事不能奖励违法私占；真正的爽点应来自守住保护底线后找到生计、开发和地方记忆之间的解法。

## 2026-06-09 决策：查档、地方志和族谱线必须写清资料来源、查阅权限和互证缺口

状态：已确认

- 决策：当小说涉及档案馆查旧事、地方志年鉴、族谱家谱、婚姻档案、学籍档案、不动产登记资料、村集体旧账、旧照片旧报纸、寻亲认亲、祖产争议或旧案翻查时，AI agent 必须先读取 `docs/220-county-archives-local-gazetteer-genealogy-school-marriage-land-records-historical-evidence.md`。
- 原因：档案和地方资料很容易被 AI 写成万能答案库，或写成熟人越权调档、泄露隐私、族谱一锤定音、地方志当判决书。真实可信的写法必须区分资料类型、形成主体、保管主体、开放状态、查阅资格、隐私/保密边界和证据能力。
- 执行：起草时必须使用“资料类型 -> 形成主体 -> 保管主体 -> 开放/限制 -> 申请材料 -> 检索调卷 -> 结果固定 -> 多源互证 -> 人物后果”的链路；审稿时重点检查非法调档、伪造档案、隐私泄露、单一资料定真相和查完无后果。
- 叙事取向：真正的爽点不应来自偷看隐私或后台秒查，而应来自主角在合法边界内把碎片拼成事实，并承担家族、身份、利益和地方记忆层面的代价。

## 2026-06-09 决策：纪检监察和巡察线必须先判对象身份与事项性质，再写线索处置和整改后果

状态：已确认

- 决策：当小说涉及纪委监委、巡察组、群众举报、村干部廉洁问题、项目资金异常、补贴救助分配不公、违规吃喝、吃拿卡要、处分问责、追缴退赔、澄清正名或群众身边腐败时，AI agent 必须先读取 `docs/221-county-discipline-inspection-supervision-patrol-village-affairs-corruption-reporting-integrity-risk.md`。
- 原因：纪检监察线很容易被 AI 写成“举报秒杀反派”“纪委是主角私人武器”“匿名传言等于事实”或“曝光替代程序”。商业级现实题材必须拆清对象身份、事项性质、线索来源、监督主体、证据池、处置方式、处分问责和整改反馈。
- 执行：起草时必须使用“公共权力异常 -> 线索来源 -> 对象身份 -> 事项分流 -> 监督主体 -> 证据核验 -> 处置处分 -> 追缴退赔或澄清正名 -> 整改公开 -> 人物余波”的链路；审稿时重点检查举报秒杀、纪委万能、非法取证、行贿毁证教程化、处分无层级和整改清零。
- 叙事取向：反腐戏真正的爽点不是“坏人被带走”，而是群众看见钱、权、责和程序重新对上，公共生活因此发生可见改变。

## 2026-06-09 决策：采购招投标和项目验收线必须写清项目性质、资金来源和交易履约链

状态：已确认

- 决策：当小说涉及政府采购、招标投标、公共资源交易、项目验收、付款结算、质疑投诉、审计整改、低价中标、围标串标风险、工程款争议或采购商战时，AI agent 必须先读取 `docs/222-county-government-procurement-bidding-public-resource-transaction-project-acceptance-audit-settlement.md`。
- 原因：采购交易线很容易被 AI 写成“领导一句话定项目”“主角演讲感动评委”“验收只靠合影”“审计等于抓贪官”。真实可信的写法必须拆清项目性质、资金来源、采购需求、交易方式、评审依据、合同履约、验收付款、质疑投诉和监督整改。
- 执行：起草时必须使用“公共需求 -> 项目性质 -> 资金来源 -> 采购需求/招标文件 -> 公告响应 -> 开评标 -> 中标成交 -> 合同履约 -> 验收付款 -> 质疑投诉/审计整改 -> 人物余波”的链路；审稿时重点检查领导拍板、评委凭喜好、低价无代价、验收空心化、部门混同和违规操作教程化。
- 叙事取向：采购交易戏真正的爽点不是谁拿到项目，而是公共钱、公开竞争和实际使用效果之间的承诺被看见、被验证、被追责。

## 2026-06-09 决策：财政资金线必须先判资金类型、预算状态和支付条件，不能把财政写成万能钱袋

状态：已确认

- 决策：当小说涉及财政拨款、专项资金、转移支付、补贴到账、项目款支付、国库集中支付、预算绩效、财政违法、地方债、专项债、财政紧张、审计整改或公共资金问责时，AI agent 必须先读取 `docs/223-county-public-finance-budget-special-funds-transfer-payment-treasury-performance-debt-risk.md`。
- 原因：财政线很容易被 AI 写成“领导一句话拨钱”“补贴像红包”“专项债免费建设”“专项资金随便挪用”“审计只等于抓贪官”。商业级现实题材必须拆清资金类型、预算状态、指标下达、支付条件、绩效目标、监督整改和债务风险。
- 执行：起草时必须使用“公共需求 -> 资金类型 -> 预算或项目库状态 -> 指标下达 -> 支付条件 -> 国库支付 -> 绩效监控评价 -> 审计财政纪检分流 -> 项目和人物余波”的链路；审稿时重点检查财政万能钱袋、补贴红包化、专项资金挪用正当化、专项债免费化、绩效空心化和部门职责混乱。
- 叙事取向：财政戏真正的爽点不是“钱来了”，而是公共资金的来源、用途、支付、效果和责任终于被看见、被验证、被追责。

## 2026-06-09 决策：县域数据线必须先判数据来源、统计口径和使用边界，不能把数字当万能背景板

状态：已确认

- 决策：当小说涉及统计局、统计调查、人口普查、经济普查、农业普查、统计报表、统计年鉴、统计公报、常住人口、GDP、市场主体、游客量、农业面积、指标考核、统计执法或数据造假时，AI agent 必须先读取 `docs/224-county-statistics-census-survey-indicators-reporting-data-quality-falsification-risk.md`。
- 原因：统计线很容易被 AI 写成“角色随口报数”“统计局万能”“GDP 代表一切”“人口口径混淆”“造假是聪明操作”。商业级现实题材必须拆清数据来源、统计对象、时间口径、空间范围、采集审核、公开边界、口径误读和统计违法后果。
- 执行：起草时必须使用“数据用途 -> 数据类型 -> 统计对象 -> 时间口径 -> 空间范围 -> 采集路径 -> 审核发布 -> 使用边界 -> 误读或造假风险 -> 监督处理 -> 剧情后果”的链路；审稿时重点检查常住/户籍混淆、登记/经营混淆、人次/人数混淆、GDP万能化、统计局万能化和造假正向奖励。
- 叙事取向：数据戏真正的爽点不是数字大，而是口径被拆清、被遮住的生活被看见，项目、公共服务或干部责任因此发生改变。

## 2026-06-09 决策：审计线必须写清审计类型、证据程序、责任拆分和整改销号，不能把审计报告当判决书

状态：已确认

- 决策：当小说涉及审计局、审计报告、预算执行审计、财政财务收支审计、政府投资审计、经济责任审计、自然资源资产离任审计、内部审计、审计移送、审计整改或整改回头看时，AI agent 必须先读取 `docs/225-county-audit-supervision-budget-execution-economic-responsibility-government-investment-rectification.md`。
- 原因：审计线很容易被 AI 写成“审计员一看账本秒破案”“审计报告等于刑事判决”“所有问题都是贪污”“整改一句话结束”。商业级现实题材必须拆清审计类型、审计对象、审计范围、触发来源、证据池、程序节点、问题定性、责任拆分、结果分流和整改销号。
- 执行：起草时必须使用“风险出现 -> 审计类型和对象 -> 审计通知 -> 取证核实 -> 征求意见 -> 审计报告/决定/移送 -> 整改清单 -> 对账销号或回头看 -> 人物余波”的链路；审稿时重点检查审计万能化、报告判决化、腐败一刀切、整改空心化和做假账毁证教程化。
- 叙事取向：审计戏真正的爽点不是审计员神探式抓坏人，而是公共资金、公共资产、公共资源和领导干部责任终于被证据、程序和整改结果对上。

## 2026-06-09 决策：人大政协线必须写成调研、交办、办理、答复、督办链，不能写成代表委员万能命令

状态：已确认

- 决策：当小说涉及人大代表、代表建议、人大议案、人大常委会监督、预算审查、执法检查、专题询问、政协委员、政协提案、社情民意、协商议政、提案办理或建议办理时，AI agent 必须先读取 `docs/226-county-people-congress-cppcc-deputy-suggestion-proposal-budget-supervision-consultation.md`。
- 原因：人大政协线很容易被 AI 写成“代表委员一句话命令部门”“提案等于行政决定”“个案绕过司法信访纪检程序”。商业级现实题材必须拆清渠道选择、调研证据、文本类型、承办单位、办理答复、监督督办、权限边界和现实后果。
- 执行：起草时必须使用“群众问题 -> 渠道判断 -> 调研取材 -> 文本形成 -> 审查交办 -> 承办办理 -> 答复反馈 -> 督办跟踪 -> 项目或政策后果”的链路；审稿时重点检查代表万能化、提案命令化、预算监督空心化、个案绕程序、办理答复无后续和隐私泄露。
- 叙事取向：人大政协戏真正的爽点不是当场拍板，而是群众体感被转译成可办理、可追问、可回访的公共议题，并最终让现实往前动一寸。

## 2026-06-09 决策：行政争议线必须先识别具体行政行为、文书和救济路径，不能用信访曝光替代复议诉讼

状态：已确认

- 决策：当小说涉及行政处罚、不予许可、行政强制、行政不作为、政府信息公开争议、征收补偿、行政复议、行政诉讼、听证、国家赔偿、执法记录或重大执法决定法制审核时，AI agent 必须先读取 `docs/227-county-administrative-reconsideration-litigation-penalty-hearing-enforcement-state-compensation-remedy.md`。
- 原因：行政救济线很容易被 AI 写成“信访万能、曝光秒撤罚、找领导办证、法院复议机关纪委混成一体”。商业级现实题材必须拆清具体行政行为、文书状态、主体权限、事实证据、法律依据、程序告知、救济路径、机关分工和结果类型。
- 执行：起草时必须使用“行政行为 -> 文书状态 -> 争议点 -> 陈述申辩/听证/补正 -> 复议或诉讼/赔偿/分流 -> 审查结果 -> 执法整改和人物余波”的链路；审稿时重点检查处罚无程序、强制粗暴化、信访替代法定救济、复议诉讼混写、伪证行贿正向化和国家赔偿封口费化。
- 叙事取向：行政救济戏真正的爽点不是闹赢，而是让行政权力的事实、证据、依据、程序和裁量经得起审查。

## 2026-06-09：新增县域基层法院立案、诉前调解、审理、执行、失信限高与判后兑现专题

状态：已确认

决策：新增 `docs/228-county-basic-court-case-filing-mediation-trial-enforcement-credit-discipline.md`，作为第 204 篇基层纠纷解决生态、第 141 篇庭审裁判程序、第 166 篇警务程序和第 227 篇行政救济专题之间的法院内流程细化文档。后续 AI 写县域基层法院、人民法庭、诉讼服务中心、网上立案、跨域立案、诉前调解、司法确认、简易程序、小额诉讼、在线诉讼、庭审裁判、申请执行、执行查控、执行和解、终本恢复、执行异议、执行监督、失信限高和判后关系回写时，应优先调用本篇。

理由：既有第 204 篇已经覆盖司法所、人民调解、公共法律服务、法律援助、人民法庭和执行链的大框架，但 AI 仍容易在法院内部程序上写出“立案即胜诉、判决即到账、调解即和稀泥、执行即抓人、失信限高即主角私刑”的失真桥段。因此需要独立专题把纠纷进入法院后的节点拆成可执行链条，并把胜诉后的兑现困难、信用后果和执行监督写清楚。

已确认规则：基层法院不是“领导主持公道”的办公室。法院桥段必须写清诉讼请求、证据池、程序节点、争点、调解、审理、裁判、生效、履行或执行；立案只是程序入口，判决只是确认权利，执行才是兑现压力；失信和限制消费必须有生效法律文书、执行程序和拒不履行等前提。不得把伪造证据、虚假诉讼、转移财产、规避执行、威胁司法人员或买通法院写成可模仿、被奖励的聪明操作。

影响范围：后续涉及都市现实、县域治理、婚恋彩礼、赡养老年、邻里宅基地、物业停车、民间借贷、劳动争议、消费合同、行政诉讼、商战债务、破产边缘、小镇熟人社会、反派失信限高、主角胜诉后拿不到钱或读者反馈“法院太假/判完就爽/执行太玄幻/法官像 NPC”时，应调用第 228 篇，并按需要联动第 141、166、202、203、204、213、214、221、226、227 篇。

## 2026-06-09：新增县域检察院、公诉、批捕审查、法律监督、公益诉讼、未成年人检察专题

状态：已确认

决策：新增 `docs/229-county-procuratorate-public-prosecution-arrest-review-legal-supervision-public-interest-litigation-minor-protection.md`，作为第 166 篇公安警务程序、第 228 篇基层法院程序、第 207 篇生态环境治理、第 214 篇电诈反诈、第 221 篇纪检监察和第 227 篇行政救济之间的检察机关专项接口。后续 AI 写县域人民检察院、审查逮捕、审查起诉、不起诉、提起公诉、量刑建议、认罪认罚从宽、刑事诉讼监督、民事行政检察监督、公益诉讼、诉前检察建议、未成年人检察和公检法司衔接时，应优先调用本篇。

理由：既有知识库已有公安、法院、行政救济和基层纠纷解决文档，但缺少检察院的独立职责边界。AI 容易把检察官写成刑警、法官、纪委或万能领导，导致“公安抓人直接判刑、起诉即定罪、认罪认罚买轻判、公益诉讼私人索赔、未成年人保护纵容化”等失真桥段。本专题用批捕、审查起诉、公诉、监督、公益诉讼和未成年人检察链条补齐公检法之间的中枢接口。

已确认规则：检察院不是公安升级版，也不是法院替身。检察院桥段必须先判断是刑事追诉、法律监督、公益诉讼、未成年人保护还是控告申诉；批捕要审查证据和羁押必要性，审查起诉要审事实、证据、罪名、程序和量刑，提起公诉不是定罪，认罪认罚不是花钱换轻判，公益诉讼不是私人索赔，未成年人保护不是纵容。不得把串供、伪证、买通检察官、规避批捕起诉、泄露案卷秘密或泄露未成年人隐私写成可模仿、被奖励的聪明操作。

影响范围：后续涉及刑侦悬疑、都市法治、县城伤害案、盗窃诈骗、电信网络诈骗、职务犯罪移送、污染环境、食品药品安全、校园欺凌、未成年人犯罪、侵害未成年人、公益诉讼、虚假诉讼监督、行政争议监督、刑事执行监督或读者反馈“检察院像 NPC/公检法混乱/起诉就等于判了/公益诉讼像私人官司/未成年人处理太假”时，应调用第 229 篇，并按需要联动第 141、166、202、203、204、207、214、221、227、228 篇。

## 2026-06-09：新增县域社区矫正、刑满释放安置帮教、司法所监督帮扶与重新融入专题

状态：已确认

决策：新增 `docs/230-county-community-corrections-release-resettlement-judicial-office-supervision-reintegration.md`，作为第 166 篇公安程序、第 228 篇法院程序、第 229 篇检察监督、第 204 篇司法所公共法律服务、第 201 篇就业、第 210 篇救助和第 213 篇基层治理之间的刑罚执行后端与社会回归接口。后续 AI 写管制、缓刑、假释、暂予监外执行、社区矫正对象、解除矫正、刑满释放、安置帮教、司法所监督帮扶、就业救助、被害人阴影和重新融入时，应优先调用本篇。

理由：既有知识库已经覆盖公安侦查、检察公诉、法院裁判执行和司法所调解，但缺少“判后不入监/出狱回归”这条现实链。AI 容易把缓刑假释写成完全自由，把刑满释放写成永远反派标签，把司法所写成黑箱管控，把安置帮教写成继续服刑，或者把逃避监管写成聪明爽点。本专题补齐社区矫正和刑释解矫人员重新融入的程序、帮扶、风险和人物弧线。

已确认规则：社区矫正是社区中的刑罚执行，不是“没事了”；刑满释放安置帮教是回归后的非强制引导、扶助、教育和管理，不是继续服刑。写作时必须区分社区矫正对象与刑释/解矫安置帮教对象，写清法律文书、报到接收、司法所日常、教育帮扶、就业救助、家庭接纳、被害人感受、违规后果和长期回归压力。不得把逃避报到、规避监管、伪造材料、接触威胁被害人、骗取帮扶或再次犯罪写成可模仿、被奖励的聪明操作。

影响范围：后续涉及刑侦后续、都市现实、县域司法、前科人员就业、假释考验、缓刑观察、暂予监外执行、刑满释放第一天、家庭接纳、被害人恐惧、旧同伙拉拢、司法所走访、检察监督、网格治理、重新犯罪或读者反馈“出狱太轻松/缓刑像无事发生/社区矫正不真实/刑释人员被脸谱化/救赎太快”时，应调用第 230 篇，并按需要联动第 166、201、204、210、213、228、229 篇。

## 2026-06-09：新增县域药店、处方药、药品安全、医疗器械、医保刷卡与药监医保监管专题

状态：已确认

决策：新增 `docs/231-county-pharmacy-drug-safety-prescription-medical-device-insurance-fraud-regulation.md`，作为第 169 篇医院医疗纠纷、第 193 篇基层卫生、第 199 篇县域医疗转诊医保、第 180 篇消费维权、第 211 篇市场监管和第 229 篇公益诉讼之间的药品药械专项接口。后续 AI 写县城药店、乡镇药房、处方药、非处方药、执业药师、药品经营许可、医保定点药店、医保刷卡、医保套刷、假药劣药、过期药、药品召回、医疗器械、保健食品误导、药品广告和药监医保监管时，应优先调用本篇。

理由：既有知识库已经覆盖医院诊疗、基层卫生、医保结算、消费投诉和市场监管，但缺少医院外侧的药品药械零售与医保基金监管底座。AI 容易把药店写成便利店、处方药写成随手买、医保卡写成购物卡、保健食品写成药、医疗器械写成普通小电器，或者把骗保、假药、虚假广告写成商业爽点。本专题用产品属性、处方审核、执业药师、批号效期、票据记录、医保结算、广告证据、监管投诉和召回后果补齐现实链。

已确认规则：药店不是便利店，药品不是普通商品，医保卡不是购物卡，保健食品不是药，医疗器械不是普通小电器。写作时必须先区分药品、医疗器械、保健食品、普通商品和医疗服务，再判断处方、执业药师、经营许可、注册备案、批号效期、医保范围、广告宣传和监管路径。不得把具体用药、骗保套现、伪造处方病历、销售假药劣药、规避药监医保检查或泄露健康隐私写成可模仿、被奖励的聪明操作。

影响范围：后续涉及老人买药、慢病购药、县城药店、医保刷卡、药店会员、直播卖药、保健品骗局、医疗器械误导、药品召回、假药劣药、医保基金检查、药品广告、药械公益诉讼或读者反馈“药店像便利店/医保卡乱刷/保健品写得像神药/假药线太儿戏/药监医保不真实”时，应调用第 231 篇，并按需要联动第 163、169、180、183、193、199、203、205、211、214、229 篇。

## 2026-06-09：新增县域税务局、发票、增值税、个体户小微企业、税务稽查、社保费征收与纳税信用专题

状态：已确认

决策：新增 `docs/232-county-taxation-invoice-vat-small-business-tax-inspection-social-insurance-fees.md`，作为第 165 篇金融合规总论、第 206 篇政务服务、第 187 篇直播平台、第 201/186 篇就业社保、第 222/223/225 篇采购财政审计、第 227 篇行政救济和第 166/229 篇刑事检察接口之间的税务发票专项。后续 AI 写县域税务局、办税服务厅、电子税务局、纳税申报、增值税、个体工商户、小微企业、发票、税务风险提示、税务稽查、补税处罚、纳税信用、重大税收违法失信、社保费征收、直播税务、民宿餐饮税务和工程项目税票时，应优先调用本篇。

理由：第 165 篇已经覆盖钱、银行、保险、税票和金融合规总链，但县域经营场景还需要独立拆解税务局、发票、申报、增值税、个体户、社保费和稽查程序。AI 常把营业执照写成合规终点，把发票写成报销小票，把增值税写成随口加价，把个体户写成不用纳税，把税务稽查写成举报秒罚，或把逃税、虚开发票、两套账写成商业头脑。本专题补足经营事实、票账款货、申报、风险提示、稽查取证和信用后果。

已确认规则：经营收入不是到手利润，发票不是装饰道具，营业执照不是经营合规终点。税务发票桥段必须写清经营主体、收入类型、合同订单、流水账簿、发票、申报、社保费、风险提示或稽查程序，以及补税、处罚、信用、融资、招投标和现金流后果。不得把逃税、虚开发票、买票抵扣、两套账、刷流水、规避社保费或抗拒稽查写成可模仿、被奖励的聪明操作。

影响范围：后续涉及返乡创业、县城小店、民宿餐饮、直播带货、MCN 分成、工程结算、财政支付、政府采购、合作社项目、公司报销、审计发票、虚开发票、税务举报、纳税信用、社保费少缴、个体户转公司或读者反馈“税务消失/发票像小票/开店太容易/偷税太儿戏/稽查像抓人爽点”时，应调用第 232 篇，并按需要联动第 165、187、201、206、211、222、223、225、227、229 篇。

## 2026-06-09：新增县域职业教育、中职技校、高职衔接、校企合作、学生实习、资助与就业升学专题

状态：已确认

决策：新增 `docs/233-county-vocational-education-secondary-vocational-school-student-internship-school-enterprise-cooperation-subsidy-employment.md`，作为第 157 篇校园通用、第 181 篇培训资格、第 200 篇义务教育后衔接、第 201 篇就业欠薪、第 162/186 篇劳动社保和第 192/205 篇校园心理保护之间的职业教育专项接口。后续 AI 写中职、职高、技校、高职、职教高考、校企合作、订单班、现代学徒制、认识实习、岗位实习、实习报酬、实习安全、资助申请、技能证书、就业推荐和县域产业用工时，应优先调用本篇。

理由：既有知识库有校园通用、培训考证、农村义务教育和县域就业文档，但缺少“进入中职/技校/高职之后如何学习、实训、实习、获得资助并走向升学就业”的独立链条。AI 容易把职校写成失败标签，把实习写成廉价打工，把校企合作写成卖学生，把助学金写成可怜人设，把技能证书写成能力外挂。本专题用学校类型、专业课程、实训、校企合作协议、实习协议、报酬保险、安全和投诉路径补齐职业教育现实感。

已确认规则：职业教育不是失败人生，学生实习不是廉价用工，校企合作不是学校把学生卖给企业。写作时必须区分中职、职高、技校、高职和培训机构，写清专业课程、实训、学籍资助、校企合作协议、认识实习/岗位实习、岗位匹配、报酬、保险、安全、投诉路径和就业升学后果。不得把强迫实习、克扣报酬、伪造学籍资助、替考作弊、买证挂证或压制投诉写成可模仿、被奖励的聪明操作。

影响范围：后续涉及中考分流、职校偏见、县城技校、学生实习、校企合作、订单班、技能竞赛、资助公示、实习事故、实习报酬、毕业就业、职教高考、县域产业缺工、返乡青年技能转型或读者反馈“职校太脸谱/实习像黑工/校企合作不真实/技能成长太玄幻/包就业太假”时，应调用第 233 篇，并按需要联动第 157、181、192、200、201、205、206、222、232 篇。

## 2026-06-09：新增县域妇联、反家暴、妇女儿童权益、家庭教育指导、婚姻家庭支持与维权转介专题

状态：已确认

决策：新增 `docs/234-county-womens-federation-domestic-violence-family-education-women-children-rights-aid.md`，作为第 176/202 篇婚恋家庭、第 166 篇公安警情、第 228 篇法院保护令和诉讼、第 229 篇检察未成年人保护、第 192/200 篇校园乡村儿童、第 204 篇司法所法律援助、第 201/162/186 篇劳动权益之间的妇联专项接口。后续 AI 写县域妇联、乡镇妇联、村社区妇联、12338、妇女儿童维权、反家暴、人身安全保护令、家庭教育指导、女职工权益、性骚扰、困境妇女儿童、单亲母亲、留守儿童和多部门转介时，应优先调用本篇。

理由：既有知识库已经覆盖婚恋、公安、法院、检察、校园、乡村教育和法律援助，但妇联往往只以“热心大姐劝几句”的碎片出现。AI 容易把妇联写成劝忍机构或万能执法机关，既弱化家暴风险，也混淆公安、法院、民政、人社和检察职责。本专题把妇联定位为发现、倾听、支持、协调、转介和跟进节点，补齐妇女儿童权益、反家暴、家庭教育指导和基层维权支持的现实链。

已确认规则：妇联不是公检法替身，也不是劝忍机构。妇联桥段必须先识别安全风险和权益类型，再写清接访、倾听、材料清单、法律援助、公安法院民政学校检察人社等分流、妇联陪伴支持和回访；家暴不是家务事，保护令不必以离婚为前提，未成年人不是成人关系工具。不得把劝忍家暴、逼迫和解、伪造证据、非法带走孩子、曝光隐私、网暴施压或报复施暴者写成可模仿、被奖励的聪明操作。

影响范围：后续涉及家庭伦理、离婚冷静期、彩礼退婚、跨省婚姻、家暴、性骚扰、女职工孕产权益、出嫁女土地分红、困境母亲、留守儿童、家庭教育令、校园和家庭保护衔接、村社区妇联、12338 求助或读者反馈“妇联像 NPC/家暴被劝和/孩子被当工具/维权太空/妇联万能”时，应调用第 234 篇，并按需要联动第 163、166、176、192、200、202、204、210、228、229 篇。

## 2026-06-09：新增县域消防救援机构、消防监督检查、隐患整改、火灾事故调查与安全责任专项

决策：新增 `docs/235-county-fire-rescue-supervision-inspection-fire-investigation-hidden-danger-rectification.md`，作为 AI agent 处理县域消防救援机构、消防监督检查、公众聚集场所营业前消防安全检查、建设工程消防审验衔接、消防技术服务、重大火灾隐患整改、高层建筑、电动自行车治理、火灾事故调查和安全责任分流的专项入口。

原因：第 164 篇已经覆盖火灾、灾害事故、疏散救援和灾后余波，第 191 篇覆盖小区物业和充电通道，但知识库仍缺少“消防救援机构作为日常监督、整改、事故调查和多部门治理节点”的制度链。AI 常把消防写成只会救火、随口罚款、万能盖章或主角秒破火灾原因，因此需要独立专题。

已确认规则：消防桥段必须先拆清场所类型、责任主体、触发来源、监督或调查程序、材料证据、行政救济和事故后果；建设工程消防设计审查验收与投入使用后的消防监督不能混用；火灾事故认定不是法院判决或刑事定罪；电动自行车和高层建筑治理要写全链条供给、管理和整改，而不是只写禁令。

影响范围：后续涉及开店消防、商场学校医院酒店民宿、厂房仓库、小区消防通道、电动车停放充电、高层建筑、公众聚集场所开业、消防检查争议、维保造假、火灾事故责任、消防员高光、火灾原因调查或读者反馈“消防太假/检查像敲诈/事故没责任/主角像神探”时，应先调用第 235 篇，再按需要联动第 164、191、208、222、227、228、229、166 篇。

## 2026-06-09：新增县域应急管理局、安全生产监管、隐患排查、危化品、工贸有限空间、特种作业与事故调查专项

决策：新增 `docs/236-county-emergency-management-work-safety-hazardous-chemicals-accident-investigation.md`，作为 AI agent 处理县域应急管理局、安委办、安全生产综合监管、工厂车间、工业园区、仓储物流、危化品、烟花爆竹、非煤矿山、工贸企业、有限空间、特种作业、外包承包、重大事故隐患、应急预案、生产安全事故报告、事故调查和复工整改的专项入口。

原因：第 164 篇负责灾害事故场景，第 235 篇负责消防监督和火灾调查，第 207 篇负责生态环境污染，但知识库仍缺少“安全生产作为日常预防、监管检查、企业责任、隐患整改、事故报告调查和复工复产链”的独立文档。AI 常把事故写成天降爆炸、员工失误背全锅、主角冲进危险空间救人、应急管理局万能定责或事故调查当天结束，因此需要独立专题。

已确认规则：安全生产桥段必须先拆清生产经营事实、行业主管边界、企业主体责任、隐患排查、许可培训持证、外包管理、检查整改、事故报告、调查处理、工伤赔偿和复工整改；“管行业必须管安全、管业务必须管安全、管生产经营必须管安全”是分工原则；危化品、有限空间、特种作业、矿山和烟花爆竹只写风险、专业处置、证据和后果，不输出危险操作步骤。

影响范围：后续涉及工厂事故、园区安全检查、危化品异味、有限空间、无证特种作业、烟花爆竹、非煤矿山、建筑施工安全、外包推责、事故瞒报、复工复产、家属索赔或读者反馈“事故太假/监管万能/员工背锅/主角救援太危险/调查没程序”时，应先调用第 236 篇，再按需要联动第 164、235、207、201、162、186、227、228、229、166 篇。

## 2026-06-09：新增县域自然灾害预警、转移避险、防汛抗旱、地质灾害、安置救助与灾后恢复专项

决策：新增 `docs/237-county-natural-disaster-warning-transfer-relief-flood-drought-geological-hazard.md`，作为 AI agent 处理县域自然灾害、气象预警、暴雨洪涝、山洪、台风、干旱、地震、地质灾害、滑坡泥石流、防汛抗旱指挥、乡镇村社转移避险、安置点、灾情统计、救灾物资、受灾群众基本生活救助、倒损住房、冬春救助、农业灾损和灾后恢复的专项入口。

原因：第 164 篇已经覆盖灾害事故场景生命周期，第 236 篇覆盖安全生产和应急管理监管，但知识库缺少“自然灾害从预警到末端叫应、群众转移、安置点运行、灾情数据、救灾款物和灾后恢复”的制度链。AI 常把自然灾害写成天气特效、村干部一喊全村秒撤、救灾物资自动出现、灾情数据没有口径、灾后第二天清零，因此需要独立专题。

已确认规则：自然灾害桥段必须先拆清灾害类型、地形季节、预警来源、会商研判、末端叫应、重点人群、转移路线、安置点、灾情初报续报核报、救灾款物接收发放公示、倒损住房、农业损失、保险贷款和冬春救助；防汛、抗旱、地质灾害分别有不同专业部门和叙事压力；群众不愿转移要写生活成本而不是愚昧。

影响范围：后续涉及暴雨、山洪、台风、干旱、地震、滑坡泥石流、防汛抗旱、群众转移、避险安置、救灾物资、灾情统计、倒损住房、农业保险、灾后重建或读者反馈“天灾像特效/救灾太假/干部太扁/物资凭空来/灾后没后果”时，应先调用第 237 篇，再按需要联动第 164、236、208、196、210、225、221、190、143 篇。

## 2026-06-09：新增县域疾控中心、传染病监测报告、流调实验室、学校聚集性疫情、食源性疾病与公共卫生应急专项

决策：新增 `docs/238-county-cdc-infectious-disease-reporting-vaccination-public-health-emergency.md`，作为 AI agent 处理县域疾控中心、疾控局/卫健部门、传染病监测预警、疫情报告、流行病学调查、实验室检测、学校托幼机构聚集性疫情、食源性疾病监测、疑似预防接种异常反应、公共卫生事件应急、风险沟通、谣言辟谣和健康数据隐私的专项入口。

原因：第 193 篇已经覆盖社区卫生、家庭医生、基本公共卫生服务、预防接种和传染病报告入口，但仍缺少“线索进入疾控/卫健系统后如何核实、流调、检测、评估、协同处置、信息发布和复盘整改”的公共卫生事件链。AI 常把疾控中心写成医院、把流调写成审讯、把学校疫情写成班主任瞒报、把食源性疾病写成主角闻菜破案、把公共卫生通告写成曝光患者隐私，因此需要独立专题。

已确认规则：第 193 篇管基层卫生和居民随访，第 238 篇管疾控公共卫生处置。公共卫生桥段必须写清异常健康信号、正式报告链、疾控/卫健核实研判、流调时间线、采样检测、风险评估、必要范围处置、多部门协同、信息发布、隐私保护和复盘整改；不得把患者、儿童、外来人口、职业或地域写成风险源，不得输出逃避报告、隐瞒接触史、伪造检测接种记录、人肉患者、传播谣言或食品污染的可模仿步骤。

影响范围：后续涉及疾控中心、流调、传染病报告、学校疫情、托幼机构、食物中毒、婚宴后多人就医、养老院聚集疫情、疫苗异常反应疑虑、官方通报、患者隐私泄露、公共卫生谣言或读者反馈“疾控像医院/流调像审讯/患者被网暴/学校疫情太儿戏/食物中毒靠神探”时，应先调用第 238 篇，再按需要联动第 193、169、199、200、205、231、237、163、20、105 篇。

## 2026-06-09：新增第 239 篇县域动物防疫、畜牧兽医、检疫屠宰与人兽共患风险专项

- 决策：新增 `docs/239-county-animal-disease-prevention-veterinary-quarantine-slaughter-livestock-zoonosis.md`，把动物防疫、动物检疫、官方兽医、屠宰检疫、病死畜禽无害化、重大动物疫情和人兽共患风险整理成独立专题。
- 原因：既有第 172 篇覆盖宠物和动物诊疗，第 197 篇覆盖农产品食品安全，第 207 篇覆盖养殖污染，第 216 篇覆盖兽药饲料等农资，第 238 篇覆盖疾控和公共卫生，但缺少“养殖场异常死亡、活体调运、产地检疫、屠宰检疫、病死畜禽无害化、官方兽医和重大动物疫情”的制度链。
- 写作规则：涉及畜禽疫病和病死动物时，优先写报告、检疫、隔离、采样送检、无害化处理、证据留痕、补偿保险和部门联动；不得把隐瞒疫情、伪造检疫证明、违规调运、私屠滥宰、非法处置病死畜禽写成正向解决方案。
- 联动：动物端归本专题，进入餐桌后联动第 197 篇，涉及人群暴露联动第 238 篇，涉及污染联动第 207 篇，涉及兽药饲料联动第 216 篇，涉及灾后次生风险联动第 237 篇。

## 2026-06-09：新增第 240 篇县域宗教事务、宗教活动场所、民间信仰、香火财务与邪教风险专项

- 决策：新增 `docs/240-county-religious-affairs-temple-monastery-folk-belief-incense-commercialization-cult-risk.md`，把寺庙道观、宗教活动场所、宗教教职人员、宗教团体、功德箱财务、民间信仰、庙会安全、互联网宗教信息、佛道商业化、假大师诈骗和邪教风险整理为独立专题。
- 原因：既有第 31 篇只提醒地域、宗教和异文化要查证，第 143 篇负责节庆庙会作为环境压力，第 147 篇负责仪式结构，第 182/195/219 篇分别负责旅游、文旅项目和文物非遗，但缺少一篇专门管理现实宗教事务、香火财务、网络宗教内容和邪教风险的制度链文档。
- 写作规则：涉及宗教和民间信仰时，必须先区分正常宗教活动、民间信仰、商业经营、迷信诈骗和邪教风险；写寺庙道观不能把场所当私人公司，写香火捐赠不能让钱随意进个人账户，写诈骗和邪教不能展示可模仿话术、组织方法和规避监管细节。
- 尊重原则：真实宗教、民族、地域和信教群众不能被妖魔化、猎奇化或统一写成愚昧；老人、病人、丧亲者等受害者应写孤独、恐惧、信息差和救助路径，不写成笑料。
- 联动：地域文化查第 31 篇，内容合规查第 20 篇，仪式查第 147 篇，庙会节庆查第 143 篇，文物古建和非遗查第 219 篇，旅游景区查第 182 篇，市场消费查第 211 篇，诈骗刑事查第 166/229 篇，消防安全查第 235 篇，网络账号和电子证据查第 163 篇。

## 2026-06-09：新增第 241 篇县域公共交通、城乡客运、客运站、出租车、网约车与运输服务纠纷专项

- 决策：新增 `docs/241-county-public-transport-rural-passenger-bus-taxi-ride-hailing-station-transport-service-safety.md`，把县域公交、城乡客运、农村班线、客运站、巡游出租车、网约车、顺风车边界、黑车非法营运、12328 投诉和弱势群体出行难整理为独立专题。
- 原因：既有第 149 篇负责旅程路线，第 168 篇负责驾驶和交通事故，第 182 篇负责旅游出行，第 200 篇负责校车通学，第 226 篇有公交线路建议案例，但缺少一个专门处理县域日常公共出行服务、线路班次、客运站、出租网约车经营和交通运输投诉的制度链文档。
- 写作规则：后续涉及公交、客运站、出租车、网约车和农村出行时，必须先拆清出行目的、线路班次、经营主体、车辆驾驶员资质、订单票据、投诉入口和弱势群体体感；不得把黑车、非法营运、拒载绕路、危险驾驶、规避监管、刷单控单或恶意投诉写成正向爽点。
- 联动：赶路成本查第 149 篇，事故查第 168 篇，旅游客运查第 182 篇，校车查第 200 篇，12345 和政务服务查第 206 篇，群众诉求分流查第 213 篇，代表政协推动公共服务查第 226 篇，行政救济查第 227 篇，灾害停运查第 237 篇，残障出行查第 159/218 篇。

## 2026-06-09：新增第 242 篇县域气象公共服务、天气预报预警、防雷安全、人工影响天气与气象资料专项

- 决策：新增 `docs/242-county-meteorology-weather-warning-disaster-prevention-lightning-protection-artificial-weather.md`，把气象局、气象台站、天气预报、灾害预警信号、预警传播、行业气象服务、防雷减灾、雷电防护装置、人工影响天气、气象资料证明、气象探测环境保护和气象谣言治理整理为独立专题。
- 原因：既有第 143 篇负责天气季节作为叙事压力，第 237 篇负责自然灾害应急和救助，但缺少一个专门处理气象部门专业服务、预报预警发布与传播、防雷和气象资料证据链的制度文档。AI 写天气时常把预警当氛围、把气象局写成万能背锅、把天气 App 截图当铁证、把人工增雨写成法术。
- 写作规则：后续涉及气象预警、暴雨台风高温寒潮雷电、学校停课、工地停工、景区闭园、农业天气、防雷检测、气象证明和人工影响天气时，必须先拆清权威来源、发布时间、影响区域、传播渠道、责任单位、响应动作和证据材料；不得把民间天气号当权威，不得输出人工影响天气、防雷造假、伪造资料、传播谣言或危险避险教程。
- 联动：天气氛围查第 143 篇，自然灾害和救灾查第 237 篇，事故应急查第 164/235/236 篇，农业抢收查第 215 篇，旅游活动查第 182 篇，公共交通停运查第 241 篇，保险理赔查第 165/196 篇，行政救济查第 227 篇，谣言和电子证据查第 61/163 篇。

## 2026-06-09：新增第 243 篇县域林业资源、林权采伐、森林草原防火、野生动植物保护、生态护林员与自然保护地专项

- 决策：新增 `docs/243-county-forestry-forest-fire-wildlife-logging-rights-ecological-ranger-nature-reserve.md`，把林地权属、林木采伐许可证、建设项目使用林地、公益林天然林、森林草原防灭火、生态护林员巡山、国有林场、野生动物救护移交、非法猎捕交易、湿地自然保护地、古树名木、林下经济和林长制基层治理整理为独立专题。
- 原因：既有第 172 篇负责宠物和异宠，第 207 篇负责生态环境污染，第 237 篇负责自然灾害应急，第 242 篇负责气象预警，但缺少一篇专门把山林资源、采伐许可、防火巡护、野生动植物保护和自然保护地作为县域现实制度链管理的文档。
- 写作规则：后续涉及山林、林场、砍树、护林员、山火、野生动物、湿地、保护区和林下经济时，必须先拆清对象类型、权属状态、许可审批、防火期、巡护证据、主管部门和违法后果；不得把盗伐滥伐、非法占地、违规用火、捕猎交易、纵火、偷运木材或伪造许可写成正向爽点。
- 联动：宠物异宠查第 172 篇，动物防疫查第 239 篇，生态污染和矿山修复查第 207 篇，自然灾害和转移避险查第 237 篇，气象预警和防雷查第 242 篇，土地村集体查第 194/209 篇，文旅保护查第 182/219 篇，刑事侦查查第 166/229 篇，自然资源资产审计查第 225 篇。

## 2026-06-09：新增第 244 篇县域水利、水资源、河湖长制、水库大坝、灌区取水与防洪抗旱工程专项

- 决策：新增 `docs/244-county-water-conservancy-river-reservoir-dam-irrigation-water-permit-flood-control-river-chief.md`，把水资源配置、取水许可、地下水、河道管理范围、水库大坝安全、堤防水闸泵站、灌区轮灌、农田水利工程、河湖长制、涉河建设、河道采砂、水土保持、防洪抗旱和水利工程长期运维整理为独立专题。
- 原因：既有第 207 篇处理河道污染和生态环境执法，第 208 篇处理城乡供水和民生服务，第 237 篇处理洪涝干旱灾害应急，第 242 篇处理气象预警，但缺少一篇专门把水利工程、水资源许可、河湖库渠闸泵和灌区调度作为制度链管理的文档。
- 写作规则：后续涉及水利、水库、河道、堤防、水闸、泵站、灌区、取水、地下水、防洪、抗旱、河湖长、采砂和水土保持时，必须先拆清水利对象、空间上下游、用途、管理主体、许可审批、调度记录、巡查证据和长期运维；不得把私开水闸、非法取水、非法采砂、破坏堤防、伪造许可、危险涉水或妨害防汛写成正向爽点。
- 联动：河道污染查第 207 篇，城乡供水查第 208 篇，自然灾害和救灾查第 237 篇，气象预警查第 242 篇，农业生产和保险查第 215/196 篇，村集体和土地查第 194/209 篇，工程采购审计查第 222/225 篇，刑事公益诉讼查第 166/229 篇。

## 2026-06-09：新增第 245 篇县域文化市场、娱乐场所、网吧、剧本娱乐、密室逃脱、营业性演出与未成年人保护专项

- 决策：新增 `docs/245-county-cultural-market-entertainment-venue-internet-cafe-script-murder-escape-room-minor-protection.md`，把 KTV、歌舞娱乐场所、游艺游戏厅、网吧、电竞酒店接口、剧本杀、密室逃脱、酒吧驻唱、营业性演出、演出经纪、文化市场综合执法、实名登记、未成年人保护、内容自审、适龄提示、消防治安、消费投诉和行政处罚整理为独立专题。
- 原因：既有第 171 篇负责酒店住宿和电竞酒店住宿侧，第 235/164 篇负责消防和事故，第 192/200 篇负责未成年人和校园，第 146 篇负责舞台表演，第 138 篇负责虚构谜题设计，但缺少一篇专门处理县城娱乐文化场所经营、监管、内容和未成年人保护的制度链文档。
- 写作规则：后续涉及 KTV、网吧、游戏厅、剧本杀、密室逃脱、酒吧驻唱和营业性演出时，必须先拆清场所类型、经营主体、证照许可、实名核验、未成年人保护、内容风险、消防治安、消费证据和执法分流；不得把未成年人混入、规避实名、遮监控、改记录、逃消防检查、赌博化设备、涉黄赌毒赌、危险密室机关或非法演出写成正向爽点。
- 联动：住宿和电竞酒店查第 171 篇，消防事故查第 235/164 篇，未成年人校园查第 192/200 篇，消费退款查第 180/211 篇，报警刑事查第 166/229 篇，电子证据查第 163 篇，舞台表演查第 146 篇，虚构密室谜题查第 138 篇，行政救济查第 227 篇。

## 2026-06-09：新增第 246 篇县域粮食收购、粮库仓储、政府储备粮、质量安全与购销监管专项

- 决策：新增 `docs/246-county-grain-purchase-storage-reserve-food-security-quality-warehouse-farmer-sale.md`，把农民卖粮、收购点排队、扦样检验、过磅计量、定等定价、结算付款、粮库入仓、仓号货位、粮情检测、储备粮轮换、库存检查、粮食质量安全、超标粮处置、应急保供、粮库安全生产和粮食购销监管整理为独立专题。
- 原因：既有第 215 篇负责收割、烘干、转运和农机服务，第 198 篇负责县域物流仓储，第 197 篇负责农产品质量投诉，第 196 篇负责农业金融，但缺少一篇专门处理粮食从田头进入粮库后的收购、仓储、储备、质量、安全和监管制度链文档。
- 写作规则：后续涉及粮食收购、粮库、储备粮、卖粮款、粮食质量和应急保供时，必须先拆清粮食品种、来源、收获状态、收购主体、扦样检验、过磅计量、定等定价、结算付款、仓号货位、保管账、轮换计划和库存检查；不得把压级压价、地磅作弊、伪造检验、虚假入库、转圈粮、套取补贴、掩盖霉变超标粮写成正向爽点。
- 联动：田间收割和烘干查第 215 篇，农产品质量和供应链查第 197/198 篇，农业金融和保险查第 196 篇，食品安全和市场监管查第 170/211 篇，安全生产和消防查第 236/235 篇，审计纪检查第 225 篇，刑事案件查第 166/229 篇，气象灾害查第 242/237 篇。

## 2026-06-09：新增第 247 篇县域体育、全民健身、公共体育场馆、群众赛事、高危险性体育项目与体彩公益金专项

- 状态：已确认。
- 决策：新增 `docs/247-county-sports-public-fitness-venues-events-high-risk-sports-lottery-fund.md`，作为 AI agent 处理县体育局、全民健身、公共体育场馆、群众赛事、村 BA、路跑赛事、青少年体育训练、高危险性体育项目、体育彩票和体彩公益金的专项入口。
- 原因：既有第 119 篇负责赛制结构，第 183 篇负责商业健身消费纠纷，第 188 篇负责电竞，第 235、236 篇负责消防和事故调查，但缺少把县域体育写成公共服务、赛事组织、安全责任、场馆开放、青训机会和公益金资金链的现实底座。
- 写作规则：后续涉及县域体育时，AI agents 必须先拆清公共/商业/学校/协会属性、主办承办执行链、场馆开放与收费、资金来源、安全评估、医疗安保交通天气预案、未成年人保护、高危险性体育项目许可、体彩公益金项目证据和事故后果。
- 安全边界：不得把操纵彩票、兴奋剂规避、伪造参赛资格、规避许可、破坏赛事安全、瞒报事故或套取公益金写成可执行爽点。
- 影响范围：体育热血、县域现实、校园体育、乡村文旅、群众赛事、公共资源争夺、体彩公益金、体育馆运营、体校青训和赛事事故剧情，应优先读取第 247 篇，并按需要联动第 119、157、183、188、191、200、212、222、223、235、236、238、241、242 篇。

## 2026-06-09：新增第 248 篇县级融媒体、广播电视、政务发布、应急广播、舆情回应与短视频传播专项

- 状态：已确认。
- 决策：新增 `docs/248-county-media-center-broadcast-tv-government-release-emergency-broadcast-public-opinion-short-video.md`，作为 AI agent 处理县级融媒体中心、广播电视、政务新媒体、政府通报、新闻发布、应急广播、舆情回应、谣言澄清和县域短视频传播的专项入口。
- 原因：既有第 61 篇负责舆论攻防，第 142 篇负责社交媒体和热搜叙事，第 206 篇负责政府信息公开申请，第 242 篇负责气象预警传播，但缺少“县里如何正式发声、如何审核、如何触达群众、如何纠错”的制度化底座。
- 写作规则：后续涉及县融媒体、政务号、新闻发布会、官方通报、应急广播、短视频文旅宣传、基层记者和谣言澄清时，AI agents 必须先拆清信息性质、权威来源、发布权限、采编核实、审核签发、发布渠道、目标受众、隐私风险、舆情反馈、补充通报和信任修复。
- 安全边界：不得把伪造官方通报、冒充媒体记者、泄露隐私、造谣引流、刷量控评、破坏应急广播或规避审核写成可执行爽点。
- 影响范围：现代县域、基层干部、记者线、灾害预警、公共卫生通报、文旅宣传、政务新媒体翻车、短视频舆情、应急广播叫应和官方辟谣剧情，应优先读取第 248 篇，并按需要联动第 61、142、163、166、174、189、206、237、238、242 篇。

## 2026-06-09：新增第 249 篇县域新能源、屋顶光伏、风电、充电基础设施、并网消纳、村集体收益与项目纠纷专项

- 状态：已确认。
- 决策：新增 `docs/249-county-renewable-energy-rooftop-photovoltaic-wind-power-charging-grid-connection-village-revenue.md`，作为 AI agent 处理县域新能源开发、户用屋顶光伏、村集体光伏、工商业屋顶光伏、分散式风电、集中式风光项目、公共充电站、并网消纳、光伏贷、用地林地争议和村集体收益分配的专项入口。
- 原因：既有第 208 篇负责日常供电抢修和能源投诉，第 191 篇负责小区车位充电桩，第 195 篇负责乡村项目制，第 194/209 篇负责农村集体经济，第 207/243 篇负责环保林地，但缺少把新能源项目从资源、合同、备案、并网、用地、安全、收益、投诉到整改串起来的现实底座。
- 写作规则：后续涉及新能源项目时，AI agents 必须先拆清项目类型、主体链、资产位置、资金来源、收益模型、电网接入、用地环保、安全运维、证据材料、投诉监管和后续回写，不得把“绿色发展”写成无成本发财口号。
- 安全边界：不得把伪造备案并网、规避审批、窃电破坏、骗贷套补、篡改计量、非法占地、破坏电力设施、虚假招投标或转移集体资产写成可执行爽点。
- 影响范围：县域现实、乡村振兴、村集体经济、返乡创业、能源招商、工商业降本、充电焦虑、光伏骗局、风电用地争议和新能源项目腐败审计线，应优先读取第 249 篇，并按需要联动第 165、191、194、195、196、207、208、209、221、222、223、225、232、235、236、243 篇。

## 2026-06-09：新增第 250 篇县域住房保障、公租房、保障性租赁住房、老旧小区改造、棚户区城中村改造与居住更新专项

- 状态：已确认。
- 决策：新增 `docs/250-county-housing-security-public-rental-affordable-rental-old-community-renovation-urban-village.md`，作为 AI agent 处理县域住房保障、公租房、租赁补贴、保障性租赁住房、青年人才公寓、新市民住房、老旧小区改造、棚户区改造、城中村改造、回迁安置、改造资金和住房困难家庭的专项入口。
- 原因：既有第 175 篇负责普通房屋交易租赁，第 191 篇负责物业和社区自治，第 206 篇负责政务窗口，第 223/225 篇负责财政审计，但缺少把公共住房保障和城市更新从资格、审核、公示、轮候、配租、改造、安置、验收和后续管理串起来的现实底座。
- 写作规则：后续涉及住房保障和居住更新时，AI agents 必须先拆清人物身份、住房困难、本地政策、申请审核、公示轮候、配租补贴、居民意愿、安置补偿、资金来源、工程验收、动态管理和隐私保护。
- 安全边界：不得把伪造材料骗取保障房、转租转借公租房、强拆逼迁、套取改造资金、伪造验收、操纵居民同意或泄露申请人隐私写成可执行爽点。
- 影响范围：县域现实、基层治理、返乡就业、进城务工、青年住房、困难家庭、老旧小区、棚改回迁、城中村租住生态、住房腐败和城市更新项目线，应优先读取第 250 篇，并按需要联动第 175、191、206、210、221、222、223、225、227、194 篇。

## 2026-06-09：新增第 251 篇县域地名、行政区划、门牌地址、地图测绘、导航错位与边界命名专项

- 状态：已确认。
- 决策：新增 `docs/251-county-place-names-administrative-division-address-house-number-map-surveying-boundary-geoinformation.md`，作为 AI agent 处理现实县域地名、门楼牌、标准地址、行政区划调整、道路命名、自然村俗称、地图导航错误、行政区域界线、标准地图和测绘地理信息的专项入口。
- 原因：既有第 106 篇负责小说内部命名，第 161 篇负责身份登记，第 149 篇负责路线出行，第 190 篇负责无人机航拍测绘，第 220 篇负责档案地方志，但缺少“一个地方在现实制度中叫什么、地址怎么写、归哪里管、地图能不能公开、边界如何证明”的县域底座。
- 写作规则：后续涉及找人寻路、救护报警、快递错投、地名更改、行政区划调整、门牌混乱、村界争议、地图宣传图、老地图线索、地址隐私和地方归属感时，AI agents 必须先拆清正式地名、俗称旧称、地址层级、使用目的、主管部门、证据材料、下游影响和安全边界。
- 安全边界：不得把伪造地址证明、私设门牌、移动界桩、传播问题地图、泄露敏感地理信息、人肉定位、虚假地址骗取公共资源或规避地图审核写成可执行爽点。
- 影响范围：县域现实、寻亲找人、救护报警、快递错投、出行导航、入学办证、征收补偿、项目红线、地方志老地图、文旅宣传图和行政区划调整剧情，应优先读取第 251 篇，并按需要联动第 106、149、161、173、190、194、206、209、220、248 篇。

## 2026-06-09：新增第 252 篇县域征兵、人民武装部、民兵、国防动员、人民防空、防空警报与军地协同专项

- 状态：已确认。
- 决策：新增 `docs/252-county-conscription-militia-national-defense-mobilization-civil-air-defense-military-civilian-coordination.md`，作为 AI agent 处理县人民武装部、征兵报名、兵役登记、体检政考、役前教育、民兵整组点验、民兵抢险救灾、国防动员潜力调查、人民防空工程、防空警报试鸣、疏散演练和军地协同的专项入口。
- 原因：既有第 217 篇负责退役军人事务，第 237 篇只把民兵作为灾害救援协同力量，第 248 篇负责官方发布，但缺少“入伍前、地方武装、国防动员和人防公共事务”的制度化底座。
- 写作规则：后续涉及征兵、民兵、国防动员、人防和军地协同时，AI agents 必须先拆清人物身份、动机或担忧、正式流程、证据材料、公共通知、统一指挥、隐私保护和安全边界；征兵不是当天热血入伍，民兵不是万能战队，人防不是灾难片按钮。
- 安全边界：不得把现役部署、战术装备、武器操作、敏感训练、规避体检政考、伪造材料、破坏人防设施、泄露动员资源或军事行动细节写成可执行内容。
- 影响范围：县域现实、青春成长、校园征兵、返乡青年、民兵救灾、社区演练、人防工程、警报试鸣、军地协同和基层干部群像，应优先读取第 252 篇，并按需要联动第 161、200、201、205、217、233、235、236、237、248 篇。

## 2026-06-09：新增第 253 篇县域公共文化服务、图书馆、文化馆站、农家书屋、阅读推广、群众文化活动与文化志愿服务专项

- 状态：已确认。
- 决策：新增 `docs/253-county-public-cultural-service-library-cultural-center-farmer-bookstore-reading-volunteer-activity.md`，作为 AI agent 处理县图书馆、文化馆、乡镇综合文化站、村级综合文化服务中心、农家书屋、阅读推广、文化志愿服务、村晚、送戏下乡、公益培训、免费开放、公共文化设施闲置和基层公共文化经费的专项入口。
- 原因：既有第 245 篇负责文化市场监管，第 219 篇负责非遗文保，第 220 篇只把图书馆当资料保管点，第 247 篇负责体育场馆，但缺少公共文化服务体系、图书馆文化馆、基层文化站、农家书屋和群众文化活动的现实底座。
- 写作规则：后续涉及公共文化服务时，AI agents 必须先拆清服务对象、设施类型、开放规则、人员安排、经费设备、活动组织、群众反馈、安全版权、隐私保护和长期维护；不得把文化惠民写成摆拍背景，也不得把农家书屋写成有书就有人读。
- 安全边界：不得把虚报服务人次、冒领免费开放资金、盗版传播、伪造志愿时长、泄露读者隐私、未成年人不当引导、公共文化设施违规占用或诈骗传销引流写成可执行内容。
- 影响范围：县域现实、校园成长、留守儿童、老人社交、返乡青年、基层干部、公共空间、文化惠民、村晚活动、阅读推广、设备闲置和形式主义整改线，应优先读取第 253 篇，并按需要联动第 191、192、200、209、219、220、222、223、225、245、247、248 篇。

## 2026-06-09 决策：新增县域烟草专卖、卷烟零售许可、电子烟、未成年人保护与真假烟治理专题

- 状态：已确认
- 背景：县城小卖部、烟酒店、婚宴礼品烟、学生买烟、电子烟隐蔽销售、假烟投诉和低价外来烟诱惑是中文网文高频生活场景，但既有市场监管、消费者权益、文化市场和未成年人保护专题未能覆盖烟草专卖的特殊许可、进货渠道和电子烟新规。
- 决策：新增 `docs/254-county-tobacco-monopoly-cigarette-retail-license-e-cigarette-minor-protection-counterfeit-smuggling.md`，把烟草专卖法、实施条例、许可证管理办法、电子烟管理办法、未成年人保护法、电子烟寄递限制和电子烟国家标准整理为 AI agent 可执行的场景链、证据链、审稿清单和安全边界。
- 执行规则：后续凡涉及小卖部卖烟、烟草证、烟酒店搬址、未成年人买烟、电子烟经营、假烟投诉、走私烟或低价外来烟线索，应优先读取该专题；只写诱因、证据、程序和后果，不输出伪造、走私、规避检查、绕开平台或向未成年人售卖的可操作方法。

## 2026-06-09 决策：知识库进入收束提纯优先阶段

- 状态：已确认
- 背景：知识库专题已经覆盖大量写作流程、商业网文技法、县域生活、公共服务、司法行政、市场经营、教育医疗、灾害安全和社会治理细节。如果继续无节制横向新增，会增加 agent 阅读成本和上下文噪音。
- 决策：新增 `docs/57-knowledge-base-routing-consolidation-guide.md`，作为专题路由、最小阅读包、相邻专题分流、旧专题提纯和新专题准入门槛的元规范。该文档不是行业专题，而是用于减少误读、重复阅读和继续发散。
- 执行规则：后续维护优先顺序调整为“修入口和路由 -> 合并重复规则 -> 补模板和检查清单 -> 更新旧专题 -> 最后才考虑新增专题”。新增专题必须证明具备高频、易错、独立流程、独立证据链、可产生戏剧冲突或安全边界价值；否则优先写进旧专题小节、索引交叉引用或模板字段。

## 2026-06-09 决策：写手、试读、审稿与改稿合并为一体化章节生产闭环

- 状态：已确认
- 背景：用户希望后续写稿时，不再手动在读者群、编辑部、写手项目和修订项目之间切换。现有知识库已有章节生产流水线、审稿标准、评论聚类、反馈冲突处理和修订工作流，但缺少把它们合并为默认写稿闭环的总入口。
- 决策：新增 `docs/58-integrated-drafting-beta-review-revision-workflow.md`，将“章节任务单 -> 起草 agent -> 试读 subagents -> 审稿 subagents -> 反馈仲裁 -> 修订 agent -> 二次轻检 -> 台账/风格/下一章任务回写”设为后续写稿默认流程。
- 执行规则：写一章、续写一章、批量起草、重写开篇或审稿后改稿时，默认由内部目标读者、冷读者、反 AI 味读者完成试读，由商业编辑、连续性风格编辑、合规风险编辑完成审稿，再由反馈仲裁 agent 生成修改清单，修订 agent 完成一轮有边界改稿。普通章节不再要求用户手动切换外部读者群或匿名编辑反馈样本；真实读者和编辑反馈保留为新书立项、开篇 A/B、上架前、数据异常和重大方向判断时的外部输入。

## 2026-06-10 决策：仓库按 MIT License 开源并建立开源治理文件

- 状态：已确认
- 背景：用户明确要求将本仓库作为开源项目看待，采用 MIT License，移除不必要文件，突出关键文件，并考虑 AI agent 如何消费知识库。
- 决策：新增 `LICENSE`、`CONTRIBUTING.md`、`SOURCE_POLICY.md`、`SAFETY.md`、`SECURITY.md`、`CODE_OF_CONDUCT.md`、`ROADMAP.md`、`CHANGELOG.md`、GitHub PR 模板和 issue 模板；更新 `README.md`、`AGENTS.md` 与 `.gitignore`，把项目入口、关键文件、agent 消费路径、来源政策、安全边界和贡献流程公开化。
- 执行规则：后续贡献默认遵守 MIT License、来源政策和安全边界；新增专题必须先经过 `docs/57-knowledge-base-routing-consolidation-guide.md` 的准入判断；写稿类 agent 默认优先调用 `docs/58-integrated-drafting-beta-review-revision-workflow.md` 完成起草、内部试读、审稿、仲裁、改稿和台账回写。
- 文件清理：移除仅包含占位 README 的空内容目录 `notes/`、`cases/`、`prompts/`、`templates/`；后续临时想法不再依赖提交空目录，优先转为 issue、正式文档小节或本地未提交笔记。


## 2026-06-10 决策：开源仓库去身份化加固

- 状态：已确认
- 背景：用户指出开源前去身份化不够彻底。扫描发现仓库中仍保留旧项目真实代号、本机绝对路径、私有来源结构称呼，以及把编辑/读者反馈来源写得过具体的问题。
- 决策：新增 `DEIDENTIFICATION.md`，将私有来源统一改为 `匿名旧项目A`、`匿名旧项目B`、`匿名编辑反馈样本`、`匿名读者反馈样本` 等抽象标签；删除或改写本机路径、旧项目真实名称、私有项目目录名和可拼接识别的来源描述。
- 执行规则：后续任何贡献都不得提交真实项目名、本机路径、群名、账号、读者昵称、编辑报告原文、聊天原文或未公开稿件信息；案例只能保留抽象经验，并写成原则、用法、风险、检查问题和匿名案例。


## 2026-06-10 决策：开源资料移除本地 novel skill 来源痕迹

- 状态：已确认
- 背景：用户指出 `novel skill` 不应该体现到开源资料中。公开仓库应呈现已经沉淀出来的写作方法和 agent 工作流，而不是暴露本地工具链、内部 skill 名称、内部文件结构或私有路径。
- 决策：将公开文档中的 `novel skill`、本地 skill 路径和内部 references 表述替换为“抽象化通用写作方法来源”；来源清单只保留已吸收的方法论内容，不再列本地工具链名称、内部文件名或路径。
- 执行规则：后续开源文档不得出现本地 skill 名称、`.codex` 路径、内部 skill references 或把私有工具链作为公开来源的表述；如果需要说明方法来源，只能写“抽象化通用写作方法”“匿名作者实践样本”或公开来源。

## 2026-06-10：以根目录 SKILL.md 作为可分发入口

状态：已确认

决策：本知识库通过根目录 `SKILL.md` 作为可分发 skill，不另建一套重复资料，也不要求每个小说项目复制完整 `docs/`。

原因：

- 小说项目 agent 需要的是可触发、可路由、可按需读取的操作入口，而不是整库灌入上下文。
- 根目录 skill 可以复用同一套公开文档，避免 skill 文档和知识库正文长期分叉。
- `docs/57-knowledge-base-routing-consolidation-guide.md` 负责最小阅读包路由，`docs/58-integrated-drafting-beta-review-revision-workflow.md` 负责写稿闭环。

执行规则：

- 后续如果调整 agent 消费方式，优先修改根目录 `SKILL.md` 和相关正式文档。
- 不在公开 skill 中暴露私有身份、旧项目真实名称、本地路径或不可公开来源。
- 不把 skill 做成复杂安装器；当前阶段保持轻量、可读、可直接分发。

## 2026-06-10：skill 改为轻量入口包

状态：已确认

决策：不再把整个仓库根目录作为可分发 skill。改为在 `skill/` 目录维护轻量 skill 包，skill 只负责触发、说明本地缓存位置、引导 agent clone/update 本仓库，并要求后续检索从本地 clone 中按需读取。

原因：

- 完整知识库作为 skill 包分发会逐渐变重，不利于安装和更新。
- 轻量入口包可以保持稳定，完整知识库则通过 Git 仓库独立更新。
- agent 消费时真正需要的是“如何找到、同步、路由、读取知识库”，而不是预加载全部内容。

执行规则：

- `skill/SKILL.md` 保持简短，只写触发条件、本地缓存目录、clone/update 行为、最小阅读入口和写稿闭环。
- 打包产物默认输出到 `dist/webnovel-handbook-skill.zip`，不纳入版本控制。
- 如果未来新增其他 agent 适配层，也应作为轻量入口，不复制完整知识库正文。

## 2026-06-10：skill 不固定 Codex 缓存目录

状态：已确认

决策：轻量 skill 不使用 Codex 专属目录作为固定本地缓存路径。handbook clone 位置应按优先级解析：项目或运行环境显式配置、`WEBNOVEL_HANDBOOK_HOME` / `WEBNOVEL_HANDBOOK_PATH` 环境变量、agent runtime 的标准缓存目录、操作系统用户缓存目录。

原因：

- 这个 skill 需要能被不同 agent runtime 消费，而不是只服务 Codex。
- 固定 `.codex` 路径会把开源分发和特定客户端绑定在一起。
- 可配置路径能兼容团队共享缓存、CI、不同操作系统和未来的 agent 接入方式。

执行规则：

- 文档和 skill 说明中不把 `~/.codex/...` 作为默认路径。
- 如果某个具体 agent 需要专属安装路径，应在该 agent 的适配层或项目说明中配置，不写进通用 skill 入口。

## 2026-06-10：skill 使用固定本地仓库路径

状态：已确认

决策：轻量 skill 使用固定本地仓库路径 `~/.webnovel-handbook/repo`。这条规则覆盖上一条“按配置和环境变量解析路径”的方案。

原因：

- skill 的目标是让小说项目 agent 低成本接入知识库，不需要额外配置层。
- 固定用户目录比运行时专属目录更通用，也避免绑定 Codex 或其他单一客户端。
- 统一路径方便多个 agent 共用同一份本地 handbook clone，减少重复下载和版本分叉。

执行规则：

- `skill/SKILL.md` 和公开说明中以 `~/.webnovel-handbook/repo` 作为默认且唯一通用路径。
- 如果用户在具体任务中明确要求其他路径，可以按该任务执行，但不改变通用 skill 默认规则。
