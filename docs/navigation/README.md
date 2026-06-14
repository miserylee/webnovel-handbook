# navigation

状态：已确认  
用途：导航目录级索引。这里不承载写作方法，只帮助 agent 在最少上下文内找到正确入口。

## 先读结论

默认不要从本目录开始整读。新会话或上下文丢失后，仍然先走：

```text
README.md -> AGENTS.md -> docs/00-index.md -> 目标目录 README -> 目标专题
```

只有当 `docs/00-index.md` 无法快速定位目标专题、需要查扩展目录，或需要根 README 下沉说明时，才进入本目录。

## 文件分工

| 文件 | 什么时候读 | 不要怎么用 |
|---|---|---|
| `../00-index.md` | 默认启动索引，判断任务阶段和最小阅读包。 | 不要把它扩成全量目录。 |
| `00-expanded-topic-catalog.md` | `../00-index.md` 找不到目标专题时，按关键词、题材、职业、制度、场景或风险词检索。 | 不要默认整读；不要把它当写作指南。 |
| `01-readme-details.md` | 需要根 README 的扩展说明、开源贡献、安全边界、详细阅读路线或文档地图时读取。 | 不要把所有新增说明继续塞回根 README。 |

## 常见路线

### 找写稿、审稿或改稿入口

```text
../00-index.md
-> ../workflows/README.md
-> ../workflows/58-integrated-drafting-beta-review-revision-workflow.md
```

如果问题集中在人物、人味、对白、AI 味或逻辑漏洞，再从 `../core-writing/README.md` 或 `../feedback-revision/README.md` 进入目标专题。

### 找一个不确定专题

```text
../00-index.md
-> 00-expanded-topic-catalog.md（按关键词检索）
-> 目标目录 README
-> 目标专题
```

推荐关键词包括：题材、平台、读者反馈词、职业、地域、制度、场景物件、关系类型、风险类型。

### 查开源维护、贡献和安全说明

```text
README.md
-> 01-readme-details.md
-> SOURCE_POLICY.md / SAFETY.md / DEIDENTIFICATION.md / CONTRIBUTING.md
```

如果是新增来源、版权边界或私有样本处理，再进入 `../sources/README.md`。

### 做知识库索引治理

```text
../00-index.md
-> ../workflows/57-knowledge-base-routing-consolidation-guide.md
-> 目标目录 README
-> CHANGELOG.md
```

新增正式文件时，必须能说明它挂在哪个入口、属于哪个任务路线、后续 agent 什么场景读取。

## 维护规则

- 根 README 只保留项目定位、快速使用、核心入口和关键原则；长说明下沉到 `01-readme-details.md`。
- `../00-index.md` 是启动索引，只放高频路线和硬规则；不要维护成全量百科。
- `00-expanded-topic-catalog.md` 是扩展目录，只在定位困难时检索；内容变大可以继续分区，但不作为默认整读入口。
- 各分类目录的 `README.md` 是二级索引；优先让目录结构本身表达知识类型，不把所有路径堆到单个索引文件。
- 新增或移动文档后，要同步更新至少一个入口索引，并运行 `node scripts/check-handbook-consumability.mjs`。

## 快速判断

| 你现在要做 | 应该去 |
|---|---|
| 不知道本次任务该读什么 | `../00-index.md` |
| 知道关键词但不知道文件名 | `00-expanded-topic-catalog.md` |
| 根 README 太短，需要更多开源说明 | `01-readme-details.md` |
| 某个目录下文件太多 | 该目录自己的 `README.md` |
| 要修索引、拆巨型文档、处理路径缺链 | `../workflows/57-knowledge-base-routing-consolidation-guide.md` |
