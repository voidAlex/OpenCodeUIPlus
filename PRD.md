# OpenCodeUIPlus 产品需求文档（PRD）

**版本**: v1.0  
**日期**: 2026-03-09  
**状态**: Draft（可直接进入拆解开发）

---

## 1. 背景与目标

当前项目已具备：

- Web 前端（GitHub Pages 可部署）
- Tauri 桌面端代码与多平台构建工作流
- OpenCode `/config` API 接入基础
- 子 Agent（subtask）渲染与会话追踪基础

本次目标是在**不破坏现有 Web 方案**的前提下，完成：

1. 项目打包为桌面客户端（macOS + Windows），并通过 GitHub Actions 自动产物发布。
2. GitHub Pages 方案继续保留，允许页面模式下阉割无法实现的能力。
3. 增加“配置中心”，可视化管理 `opencode.json` 与 `oh-my-opencode.json` 全配置（API 优先）。
4. 优化 UI 交互：明显 loading 提示；多 agent 协同时，提供可点击的 subagent 列表与详情。
5. 桌面客户端支持自动发现 OpenCode 服务。

---

## 2. 范围定义（In Scope / Out of Scope）

### In Scope

- 桌面发布链路：GitHub Actions 自动构建并发布 macOS/Windows 安装包。
- Web 与桌面双通道并存：Pages 持续可用。
- 配置中心：OpenCode 配置 API + 文件回退方案（含 OMO 配置）。
- 聊天等待态、子任务协同态可视化增强。
- 桌面端 OpenCode 服务自动发现（局域网/本机优先）。

### Out of Scope（本阶段不做）

- 全量企业签名体系落地（可先支持 unsigned 测试包，签名为可选增强）。
- Web 端无权限场景下的强制局域网扫描（可退化为手动输入 + 健康检查）。
- 将所有高级配置改造成“100% 表单化”一步到位（先“表单 + JSON 高级编辑器”混合）。

---

## 3. 需求详述

## R1. 桌面客户端打包与发布（macOS + Windows）

### 目标

- 每次发布 Tag 自动产出桌面安装包并挂载到 GitHub Release。

### 现状依据

- 仓库已有 `.github/workflows/release.yml`，已包含桌面矩阵构建（macOS/Windows/Linux）与发布步骤。

### 产品要求

1. 保留并强化现有 release 工作流，确保 macOS + Windows 为**必过平台**。
2. Release 产物命名规范化（含版本号、平台、架构）。
3. 发布说明自动引用 `CHANGELOG.md` 对应版本段落。
4. 签名/公证能力作为二期增强（可选启用 secrets）。

### 验收标准

- Push `v*` tag 后，自动生成 GitHub Release。
- Release 至少包含：Windows 安装包、macOS 安装包。
- 产物可下载、可安装、可启动。

---

## R2. 保留 GitHub Pages 方案（Fork 友好）

### 目标

- 在 fork 仓库中也可一键启用自动部署 Pages。

### 产品要求

1. 保留 `.github/workflows/deploy.yml` 的 Pages 部署链路。
2. 页面模式允许阉割：
   - 本地文件写入、桌面专属能力、局域网自动扫描等。
3. 在文档中明确 fork 用户必配步骤（见第 6 节）。

### 验收标准

- fork 仓库按配置步骤完成后，`main` push 自动部署 Pages 成功。
- 页面可访问，基础对话功能可用。

---

## R3. 配置中心（API 优先，JSON 回退）

### 目标

- 提供统一“配置中心”UI，完整覆盖 OpenCode 和 OMO 配置。

### 产品要求

1. **OpenCode 配置（API 优先）**
   - 读取：`GET /config`、`GET /global/config`
   - 更新：`PATCH /config`、`PATCH /global/config`
   - 路径展示：`GET /path`（显示 `config` 路径）
2. **oh-my-opencode 配置（文件优先）**
   - 约定路径读取与写入（项目级 `.opencode/...` + 用户级 config 目录）
   - 若无官方 API，则走 JSON/JSONC 文件编辑
3. 配置中心 UI 结构
   - 基础模式：表单化编辑（常用项）
   - 高级模式：JSON/JSONC 编辑器（全量项）
   - 支持导入/导出与差异预览（可选）
4. 风险控制
   - API 失败自动回退文件模式
   - 保存前 schema 校验
   - 提供“恢复默认/回滚到上一个版本”

### 验收标准

- 能读取并更新 OpenCode 项目/全局配置。
- 能读取并更新 OMO 配置文件。
- UI 覆盖“常用 + 全量高级编辑”。

---

## R4. 现有 UI 体验优化

### 目标

- 降低“无反馈等待焦虑”，增强多 Agent 协作可见性。

### 产品要求

1. **明显 Loading 提示**
   - 用户发送指令后，聊天区展示统一等待态（不仅是细粒度流式文本）。
   - 区分状态：`排队中 / 推理中 / 工具执行中 / 重试中`。
2. **多 Agent 协同可视化**
   - 提供 Subagent 列表（名称、状态、开始时间、耗时、关联任务）。
   - 列表项可点击：
     - 查看子会话详情
     - 跳转对应消息/子 session
3. 不影响现有 `SubtaskPartView` 与 `TaskRenderer` 基础功能，做增强而非重写。

### 验收标准

- 发送消息后 200ms 内可见等待态反馈。
- 多 subagent 并行时，列表状态准确更新且可点击查看详情。
- 用户能从主会话快速定位到任一子任务上下文。

---

## R5. 桌面端自动发现 OpenCode 服务

### 目标

- 在桌面客户端自动发现可连接 OpenCode 服务，降低手工配置成本。

### 产品要求

1. 桌面优先实现：
   - 本机探测（常见端口）
   - mDNS/局域网发现（可选开关）
   - 对候选服务执行 `/global/health` 探活
2. 发现结果可一键加入 Servers 列表并切换。
3. 提供“手动输入 URL”兜底。

### 验收标准

- 桌面端可在常见场景自动发现至少 1 个可用服务。
- 发现失败时不影响手动连接流程。

---

## 4. 里程碑建议

### M1（基础可用）

- Pages fork 流程打通 + 文档补齐
- 配置中心 MVP（OpenCode API + OMO 文件编辑）

### M2（体验增强）

- Loading 状态统一化
- Subagent 列表与详情联动

### M3（桌面增强）

- 自动发现 OpenCode 服务
- 发布链路稳定化（macOS/Windows）

### M4（发布质量）

- 可选签名/公证接入
- 回归测试与发布规范固化

---

## 5. 技术与实现原则

1. **API First**：能用 OpenCode API 的场景，不直接改文件。
2. **Graceful Fallback**：无 API 或 API 失败，再走文件读写。
3. **Web/Desktop 能力隔离**：桌面专属能力在 UI 上明确标注。
4. **可回滚**：配置写入必须具备回滚路径。
5. **可观测性**：所有关键动作（保存、发布、发现）有明确结果提示。

---

## 6. Fork 仓库必配清单（Pages + Release）

你在 fork 仓库需要做的配置：

### A. GitHub Pages 自动发布

1. `Actions` 页面先启用工作流（fork 默认可能关闭）。
2. 仓库 `Settings -> Pages`：Source 选择 **GitHub Actions**。
3. 确认 `deploy.yml` 权限包含：
   - `pages: write`
   - `id-token: write`
4. 修改 `VITE_BASE_PATH`：
   - 当前工作流写死 `/OpenCodeUI/`
   - 你的 fork 若仓库名不同，改为 `/${你的仓库名}/`
5. 若使用自定义域名，在 `Settings -> Pages` 配置，不依赖仓库内 CNAME。

### B. Release 自动发布（桌面）

1. 保持 `release.yml` 生效（tag 触发 `v*`）。
2. 打 Tag 发布：`git tag vX.Y.Z && git push origin vX.Y.Z`。
3. 若启用 Android 签名，配置 Secrets：
   - `ANDROID_KEY_ALIAS`
   - `ANDROID_KEY_PASSWORD`
   - `ANDROID_KEY_BASE64`
4. 若启用 macOS/Windows 签名（可选），额外配置平台签名 secrets。

---

## 7. 风险与应对

1. **API 与文件状态不一致**
   - 应对：保存后强制刷新配置快照，显示来源（Global/Project）。
2. **JSONC 注释丢失**
   - 应对：优先 JSONC 语法编辑器，避免粗暴 stringify 覆盖。
3. **Pages 与桌面能力差异导致认知混淆**
   - 应对：设置页明确能力标签（Web-only / Desktop-only）。
4. **发布平台签名复杂**
   - 应对：先 unsigned 可用，再逐步接入签名公证。

---

## 8. 发布完成定义（Definition of Done）

- PRD 所有需求都有对应实现任务与验收用例。
- fork 用户可按第 6 节在 30 分钟内完成 Pages 自动发布。
- 桌面端能稳定发布 macOS + Windows 安装包。
- 配置中心可编辑 OpenCode + OMO 配置并成功生效。
- 多 Agent 协同与等待态体验明显改善。
