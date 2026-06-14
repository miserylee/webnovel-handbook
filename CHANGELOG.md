# Changelog

本项目使用人工维护的变更记录，记录面向开源用户和 AI agents 的重要结构变化。

根变更日志只保留概要。详细维护流水见 [docs/governance/01-changelog-detail-archive.md](docs/governance/01-changelog-detail-archive.md)。

## Unreleased

### Added

- 建立变更日志详细流水归档：[docs/governance/01-changelog-detail-archive.md](docs/governance/01-changelog-detail-archive.md)，避免根 `CHANGELOG.md` 长期膨胀。
- 持续补强跨平台维护脚本、轻量 skill 分发、已安装 skill 同步和知识库可消费性检查。
- 新增反馈修订优先级队列、连载项目看板变更控制、对话样本参考书和封面包装标准等面向 agent 的生产资料。

### Changed

- 根 `CHANGELOG.md` 改为概要入口；详细历史细项下沉到治理归档，后续 agent 只在追溯具体维护动作时读取归档。
- 持续收束 `README.md`、`AGENTS.md`、`docs/00-index.md` 和 `57` 路由规范的启动阅读口径，默认只读薄入口，再按任务进入最小阅读包。
- 强化最小阅读包三字段结构、大文件按需读取、目录 README 覆盖、文件命名、状态元数据、裸路径和去身份化等自动护栏。
- 强化写稿交付闸门：高 AI 味、逻辑漏洞、短章、细纲过薄、台账缺失和合规风险都不能作为普通润色放行。
- 扩展目录级索引，让 docs 目录结构本身承担多级导航，而不是依赖单个超大索引文件。
- 修复上一轮写入造成的问号型编码污染，并收紧根 `CHANGELOG.md` 的体积预算。

### Removed

- 移除空占位目录，避免开源仓库保留无索引路径的空壳资料。
