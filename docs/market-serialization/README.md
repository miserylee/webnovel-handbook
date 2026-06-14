# market-serialization

平台、题材、包装、封面、更新、读者画像、读者生命周期、口碑传播、完本复盘和 IP 延展。

本目录负责作品作为“连载商品”如何被读者看见、理解、点击、留下、追读和传播。正文质量去 `../core-writing/README.md`，反馈数据诊断去 `../feedback-revision/README.md`，开书流程去 `../workflows/README.md`。

## 1. 先按任务选入口

| 任务 | 先读 | 作用 |
|---|---|---|
| 选择平台、频道、读者入口 | `12-platform-and-channel-differences.md`、`14-platform-and-reader-binding.md` | 判断平台规则、频道期待、读者绑定方式和连载入口差异 |
| 判断题材和类型承诺 | `13-genre-patterns.md`、`29-reader-expectation-genre-promise-selling-point.md` | 明确题材套路、主卖点、承诺回报和读者预期 |
| 研究竞品和市场样本 | `34-market-research-comp-analysis.md` | 建样本池，拆解可迁移卖点，避免盲目跟风 |
| 设计书名、简介、标签 | `16-title-blurb-tag-packaging.md` | 把类型承诺压缩成读者能一眼理解的入口 |
| 设计封面和缩略图 | `17-cover-visual-packaging.md` | 处理封面规格、类型视觉、标题可读性和点击理由 |
| 安排更新和连载运营 | `19-serialization-update-operations.md` | 更新节奏、断更风险、发布动作和读者信任 |
| 建目标读者画像 | `112-target-reader-persona-reading-context-model.md` | 读者场景、耐心预算、退出触发和核心回报 |
| 看读者生命周期 | `113-reader-journey-conversion-lifecycle-funnel.md` | 从曝光、点击、阅读、追读到口碑的转化链路 |
| 做口碑和推荐资产 | `103-reader-retelling-recommendation-word-of-mouth-assets.md` | 让读者能复述、安利和传播作品亮点 |
| 完本复盘和下本迁移 | `104-completion-postmortem-lessons-learned-next-project-transfer.md` | 总结可迁移经验、雷区和下本资产 |
| 番外、系列、IP 延展 | `108-bonus-chapters-side-stories-epilogue-reader-service.md`、`109-series-shared-universe-cross-book-continuity-entry.md`、`110-ip-adaptation-cross-media-assets-derivative-development.md` | 处理读者服务、跨书连续性和衍生开发 |

## 2. 推荐链路

### 2.1 开书前市场判断

```text
34 竞品样本 -> 112 目标读者 -> 13 题材模式 -> 29 类型承诺 -> workflows/43 立项评分
```

适合：决定一本书值不值得写、写给谁、主卖点是什么。

### 2.2 投稿和发布前包装

```text
29 读者承诺 -> 16 书名简介标签 -> 17 封面 -> 12 平台频道 -> workflows/45 第一章任务单
```

适合：创建作品、投稿、改书名简介、做封面和检查包装正文是否一致。

### 2.3 连载期运营

```text
19 更新运营 -> 113 生命周期 -> 103 口碑资产 -> feedback-revision/18 数据诊断 -> feedback-revision/43 修订队列
```

适合：作品已发布，开始关注更新稳定、追读、评论、推荐和反馈调参。

### 2.4 完本后资产沉淀

```text
104 完本复盘 -> 108 番外服务 -> 109 系列宇宙 -> 110 IP 延展
```

适合：完本总结、番外安排、系列化和跨媒体资产整理。

## 3. 文件名注意

本目录目前有两个 `12-...` 文件，必须按完整文件名区分：

| 文件 | 读它的场景 |
|---|---|
| `12-platform-and-channel-differences.md` | 平台、频道、推荐机制、投稿和读者期待差异 |
| `14-platform-and-reader-binding.md` | 平台生态如何绑定读者关系、更新信任和长期追读 |

数据掉点诊断不在本目录。需要点击、读完率、追读、评论和反馈复盘时，转去 `../feedback-revision/18-reader-data-feedback-diagnosis.md` 和 `../feedback-revision/40-serial-data-tuning-loop.md`。

## 4. 常见误用

- 不要把平台经验当永久规则；正式投稿、签约、封面上传和审核前，必须重新确认目标平台当前后台和官方说明。
- 不要只做书名、简介、封面，不检查第一章是否兑现承诺；包装和正文错位会变成首章掉点。
- 不要用竞品拆解直接抄设定、桥段或包装词；只能迁移读者需求、承诺结构和节奏判断。
- 不要把目标读者画像写成空泛人群标签；必须落到阅读场景、耐心预算、退出触发和期待回报。
- 不要把运营问题全部归因给“更新不够多”；也要检查章节回报、章末牵引、读者信任和内容质量。

## 5. 和其他目录的衔接

| 如果问题继续扩展到 | 转去 |
|---|---|
| 开书流程、项目初始化、第一章许可 | `../workflows/README.md` |
| 正文质量、人味、对白、章法 | `../core-writing/README.md` |
| 数据掉点、读者评论、编辑反馈和修订队列 | `../feedback-revision/README.md` |
| 机制、关系、情绪、悬疑、喜剧和卷结构 | `../storycraft/README.md` |
| 平台合规、版权、敏感内容和事实核查 | `../safety-research/README.md` |

## 6. 最小读取建议

开书市场判断：`34` + `112` + `13` + `29`。  
投稿包装：`29` + `16` + `17` + `12-platform-and-channel-differences.md`。  
连载运营：`19` + `113` + `103`。  
数据掉点：本目录只提供包装和运营视角，诊断转去 `../feedback-revision/18-reader-data-feedback-diagnosis.md`。  
完本和下本：`104` + `108` + `109` + `110`。
