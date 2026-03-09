# src 目录知识库（AGENTS）

## 概览

`src/` 是 Web 前端主战场：页面编排、业务功能、状态管理、API 适配和共享工具都在这里。

## 结构

```text
src/
├── features/      # 业务模块（chat/message/settings 等）
├── components/    # 通用组件与 UI 原语
├── hooks/         # 业务/交互复用逻辑
├── store/         # 全局状态中心
├── api/           # HTTP + SSE + 后端能力封装
├── utils/         # 纯工具和跨层辅助
├── contexts/      # Provider 与上下文桥接
└── types/         # 类型定义（含 api 子域）
```

## 去哪里找

| 任务             | 位置                                       | 备注                          |
| ---------------- | ------------------------------------------ | ----------------------------- |
| 聊天页面主编排   | `hooks/useChatSession.ts`                  | 串联消息、会话、权限、SSE     |
| 会话消息核心状态 | `store/messageStore.ts`                    | 大文件，改动前先搜同类模式    |
| SSE 事件入口     | `api/events.ts`                            | 与 `useGlobalEvents` 强耦合   |
| 根布局与面板组织 | `App.tsx`                                  | 组合 chat/right/bottom panels |
| 主题与样式行为   | `store/themeStore.ts`, `hooks/useTheme.ts` | 含过渡动画逻辑                |
| API 类型定义     | `types/api/`                               | 与 `api/*.ts` 一一对应        |

## 本目录约定（相对根目录的补充）

- 默认通过 `index.ts` 做 barrel export；新增模块优先补齐对应 index 导出。
- 测试文件与源码同目录共置，命名 `*.test.ts` / `*.test.tsx`。
- `features/*` 以功能边界组织，跨 feature 复用优先下沉到 `hooks/utils/store`。
- 文本渲染相关高风险点集中在 `CodeBlock/Diff*/Markdown`，改动需额外关注 XSS 边界。

## 反模式

- 不要在 feature 内重复实现已存在的 store/hook 能力（先搜 `hooks/index.ts` 与 `store/index.ts`）。
- 不要绕过 `api/` 直接散落 fetch/SSE 逻辑到组件层。
- 不要把新测试集中到独立 tests 目录，保持就近共置风格。

## 验证命令

```bash
npm run test:run
npm run typecheck
npm run lint
```
