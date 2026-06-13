# 99. 决策记录索引

状态：已确认  
用途：记录当前仍影响 agent 行为的高优先级决策，并指向按月归档。本文是决策入口，不再保存完整历史长文。

## 读取规则

- 新会话默认只读本文，不整读历史归档。
- 需要查旧决策时，先读 `docs/decisions/README.md`，再按月份或关键词检索归档。
- 新增关键决策时，不把全文长期堆在本文，也不继续向已经很长的历史归档追加正文。优先在本文保留短索引；确需长说明时，新建短小的单条决策文件并从本文链接过去。
- 本文只保留仍会影响默认工作方式、文件结构、开源治理和写稿质量门槛的活跃决策。
- 活跃文档必须保持短小。内容膨胀时，允许索引链路变长：入口 -> 分类索引 -> 单条说明，而不是把入口文件继续写长。

## 活跃决策索引

### 2026-06-13：docs 目录改为多级结构索引

- 状态：已确认
- 说明：仅短索引，不写入历史长归档
- 影响：`docs/00-index.md`、`docs/README.md`、各分类目录 `README.md`
- 执行口径：目录结构本身也是索引表达。除 `docs/00-index.md` 作为根启动入口外，专题文档按用途进入分类目录；agent 先读分类目录 README，再打开目标专题。允许索引链路变长，避免活跃入口变成超大文档。

### 2026-06-13：索引改为渐进式披露

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`docs/00-index.md` 是薄启动索引；`docs/navigation/00-expanded-topic-catalog.md`、`docs/sources/01-source-inventory.md`、`docs/templates/10-templates-and-checklists.md` 只做定向检索。
- 执行口径：agent 先判任务阶段和最小阅读包，再读取目标专题，不全库泛读。

### 2026-06-13：根 README 薄化，详细说明下沉

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`README.md`、`docs/navigation/00-readme-details.md`
- 执行口径：根 README 只承担开源门面、快速使用和核心入口；详细任务路线、贡献、安全和维护说明下沉到 `docs/navigation/00-readme-details.md`。

### 2026-06-13：大纲、细纲和章节排表是连载活文档

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`docs/35`、`docs/05`、`docs/44`、`docs/58`、`docs/07`
- 执行口径：大纲、细纲、前 10 章拍表、卷纲和章节排表都可在连载中动态调整；调整必须留痕并同步台账、排表、风格手册和下一章任务。

### 2026-06-13：仓库维护优先使用跨平台方案

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`AGENTS.md`
- 执行口径：优先 Bash/POSIX 兼容命令、Node.js 脚本和跨平台工具；不默认新增 Windows-only 方案。

### 2026-06-13：AI 新建文件必须同步建立索引路径

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`AGENTS.md`、`docs/workflows/03-project-workflow.md`、`docs/workflows/57-knowledge-base-routing-consolidation-guide.md`
- 执行口径：新文件必须说明路径、索引入口、读取场景和维护状态；没有入口的新文件不合格。

### 2026-06-12：对话样本对比单独整理为参考书

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`docs/core-writing/59-dialogue-comparison-reference.md`
- 执行口径：用户纠错形成的对话样本，必须保留 Agent 初稿、用户改稿、差异分析和可迁移规则。

### 2026-06-13：AI 封面文字优先一体生成

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`docs/market-serialization/17-cover-visual-packaging.md`
- 执行口径：正式封面标题优先由 AI 作为画面整体绘制；脚本排字只做临时预览或兜底。

## 新增决策写入格式

新增决策时，优先只在本文追加短索引。确实需要长说明时，新建单条决策文件，例如 `docs/decisions/active/YYYY-MM-DD-short-title.md`：

```markdown
## YYYY-MM-DD：决策标题

状态：已确认 / 候选 / 待确认

用户确认：

执行规则：

影响范围：
```

然后在本文追加一条短索引：

```markdown
### YYYY-MM-DD：决策标题

- 状态：
- 说明：
- 影响：
- 执行口径：
```

## 归档入口

- `docs/decisions/README.md`：决策归档读取规则。
- `docs/decisions/2026-06.md`：2026 年 6 月历史决策长文。

### 2026-06-13：续写前必须核对人工正稿和连载台账

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`AGENTS.md`、`docs/07`、`docs/38`、`docs/58`、`docs/10`
- 执行口径：续写、审稿、改稿或排后续章节前，先确认人工正稿、上一章真实落点、已发生/未发生事件、活跃包袱和支线状态；大纲、聊天讨论、AI 草稿和文件名不能覆盖正文事实；作者改稿后必须回写连载台账。

### 2026-06-13：单本小说项目采用短文档、多索引维护

- 状态：已确认
- 归档：`docs/decisions/2026-06.md`
- 影响：`AGENTS.md`、`docs/00-index.md`、`docs/workflows/64-single-novel-project-document-granularity.md`
- 执行口径：单本小说项目资料优先短文档、多索引、可替换；入口只承载状态、索引和读取顺序；超过 3000 字且多主题应考虑拆分，超过 6000 字默认拆分或建立子索引。
