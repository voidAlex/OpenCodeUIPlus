# 项目知识库（AGENTS）

**生成时间**: 2026-03-09 11:17:53 CST  
**分支**: `main`  
**提交**: `6bfd400`

## 项目概览

OpenCodeUIPlus 是 OpenCode 的第三方前端，主栈为 React 19 + TypeScript + Vite 7，并包含 Tauri 桌面端与 Docker 部署链路。

## 结构速览

```text
.
├── src/                 # Web 前端主代码（核心业务）
├── src-tauri/           # Tauri 桌面端（Rust + mobile 产物）
├── docker/              # 网关/后端/前端容器与路由
├── .github/workflows/   # CI/CD 与发版流水线
└── scripts/             # 版本与构建辅助脚本
```

## 去哪里找（WHERE TO LOOK）

| 任务               | 位置                       | 备注                                  |
| ------------------ | -------------------------- | ------------------------------------- |
| 聊天主流程/UI 交互 | `src/features/chat/`       | 输入框、侧栏、会话切换、权限/问题弹窗 |
| 全局状态与会话数据 | `src/store/`               | `messageStore` 是核心状态中心         |
| API 与 SSE 链路    | `src/api/`                 | `events.ts` 负责实时事件通道          |
| 公共能力与工具函数 | `src/hooks/`, `src/utils/` | 高复用，跨层依赖密集                  |
| 桌面端行为         | `src-tauri/src/`           | 启停服务、原生桥接、平台差异          |
| 容器路由/部署      | `docker/`                  | Caddy + Python Router 动态预览        |

## 代码地图（简版）

| 符号/模块                | 位置                          | 角色                         |
| ------------------------ | ----------------------------- | ---------------------------- |
| `App`                    | `src/App.tsx`                 | 前端根组件，聚合主布局与交互 |
| `messageStore`           | `src/store/messageStore.ts`   | 会话消息、撤销重做、流式状态 |
| `useChatSession`         | `src/hooks/useChatSession.ts` | 聊天页面主业务编排           |
| `subscribeToEvents` 链路 | `src/api/events.ts`           | SSE 事件分发与恢复           |
| `app::run`               | `src-tauri/src/app.rs`        | Tauri 应用入口逻辑           |

> 说明：当前未直接产出完整 LSP centrality 表，使用仓库结构 + 入口文件 +导出/测试分布完成定位。

## 项目约定（仅列偏离“默认模板”的部分）

- Prettier：`semi=false`、`singleQuote=true`、`printWidth=120`。
- ESLint 规则以 `warn` 为主，但仍视作必须修复项（避免技术债累积）。
- 测试使用 Vitest（`jsdom`），测试文件与源码同目录共置（`*.test.ts(x)`）。
- 提交前标准校验命令：`npm run validate`。

## 反模式（本仓库明确避免）

- 不要使用 `@ts-ignore/@ts-nocheck`、显式 `any`（见 `eslint.config.js` 规则）。
- 不要移除 `src-tauri/src/main.rs` 中 Windows 子系统属性（含 `DO NOT REMOVE` 注释）。
- 不要继续使用 OpenAPI 已标记 `@deprecated` 的字段（见 `openapi_doc.json`）。
- 谨慎扩散 `dangerouslySetInnerHTML`：仅限受控、可证明安全的数据源。

## 常用命令

```bash
npm run dev
npm run test:run
npm run typecheck
npm run lint
npm run build
npm run validate
npm run tauri build
docker compose up -d
```

## 子级 AGENTS 层级

- `src/AGENTS.md`
- `src/features/chat/AGENTS.md`
- `src/store/AGENTS.md`
- `src-tauri/AGENTS.md`
- `docker/AGENTS.md`
