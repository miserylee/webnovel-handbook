# 贡献指南

感谢你愿意帮助完善webnovel-handbook。这个仓库是面向 AI agents 的中文网文写作知识库，贡献目标不是堆资料，而是让 agent 更稳定地完成开书、起草、试读、审稿、改稿和项目维护。

## 贡献前先读

请至少阅读：

1. `README.md`
2. `docs/00-index.md`
3. `docs/workflows/57-knowledge-base-routing-consolidation-guide.md`
4. 本次修改直接相关的专题文档

如果修改涉及来源、版权、隐私或安全边界，请同时阅读：

- `SOURCE_POLICY.md`
- `DEIDENTIFICATION.md`
- `SAFETY.md`
- `docs/sources/01-source-inventory.md`
- `docs/governance/99-decision-log.md`

## 可以贡献什么

欢迎贡献：

- 修正文档错误、过时链接和术语混乱。
- 提纯已有专题，补充入口判断、行动链、证据链、常见误写和安全边界。
- 改进 AI agent 的工作流、提示词封包、试读/审稿/改稿流程。
- 补充可靠来源，并把来源登记到 `docs/sources/01-source-inventory.md`。
- 增加模板、检查清单和可复用场景卡。
- 改进 README、索引、贡献流程和开源治理文件。

## 不鼓励的贡献

请不要：

- 为低频、冷门或可由旧专题承接的场景新建专题。
- 大段复制法规、文章、课程、平台规则或私人聊天原文。
- 提交真实读者群、编辑沟通、未公开稿件、联系方式或可识别个人信息。
- 把违法、规避监管、伪造、诈骗、走私、侵犯隐私、伤害未成年人等内容写成可操作教程。
- 只堆链接，不沉淀为 AI 可执行规则。
- 创建 `final`、`v2`、`new` 这类重复文件名。

## 新专题准入

新增专题前，请先用 `docs/workflows/57-knowledge-base-routing-consolidation-guide.md` 判断是否真的需要新文件。

至少满足以下条件中的多项，才建议新建专题：

- 高频：中文网文或县域生活中常见。
- 易错：AI 不查资料容易写假。
- 独立：有独立主管主体、流程或证据链。
- 有戏：能产生人物选择、冲突、悬念、情绪或回报。
- 有风险：涉及未成年人、隐私、公共安全、医疗、金融、行政处罚、刑事风险等边界。
- 不能被旧专题通过小节、交叉引用或模板字段承接。

如果不满足，优先修改旧专题、索引或模板。

## 文档写法

新增或大改专题时，优先使用这个结构：

1. 入口判断：什么时候读，什么时候不读。
2. 原则：这条规则解决什么问题。
3. 用法：写作或审稿时怎么执行。
4. 风险：违反后会出现什么读者体感或安全问题。
5. 行动链：人物、机构或流程如何推进。
6. 证据链：哪些材料能推动事实判断。
7. 常见误写：AI 最容易写错的点。
8. 检查问题：agent 自查清单。
9. 案例或场景卡：可复用但不泄露私人信息。

## 必须同步的文件

按修改类型同步：

- 新增来源：更新 `docs/sources/01-source-inventory.md`。
- 新增关键决策：更新 `docs/governance/99-decision-log.md`。
- 新增专题：更新 `README.md`、`docs/00-index.md`、必要时更新 `docs/templates/10-templates-and-checklists.md`。
- 新增 agent 工作流：更新 `README.md`、`docs/workflows/35-ai-agent-novel-creation-workflow.md`、相关入口文档和模板。
- 开源治理变更：更新 README、相关政策文件和 PR 模板。

## Issue 和 PR 入口

如果还不确定是否应该直接提交 PR，先按问题类型选择对应模板：

- 文档错误、链接失效、规则过时或前后矛盾：使用 `.github/ISSUE_TEMPLATE/bug_report.md`。
- 新增来源、来源失效或平台规则更新：使用 `.github/ISSUE_TEMPLATE/source_update.md`。
- 请求新增专题：使用 `.github/ISSUE_TEMPLATE/topic_request.md`，并先说明为什么旧专题、索引或模板无法承接。
- 起草、试读、审稿、改稿、台账或上下文封包流程改进：使用 `.github/ISSUE_TEMPLATE/workflow_improvement.md`。
- 已经准备好提交修改：使用 `.github/PULL_REQUEST_TEMPLATE.md`，在 PR 里说明索引入口、来源边界、安全边界和 agent 可消费性。

## PR 检查

提交 PR 前请确认：

- 文档使用中文和 UTF-8。
- 来源可靠，并已按需登记。
- 没有大段复制受版权保护内容。
- 没有私人信息、未授权稿件或匿名读者反馈原文。
- 没有旧项目真实名称、本机绝对路径、群名、账号、昵称或可拼接识别的来源结构。
- 没有危险可操作细节。
- 新内容能被 AI agent 直接消费，而不是只给人类阅读。
- 已说明本次修改是否新增专题、修改入口、修改模板或修改安全边界。


