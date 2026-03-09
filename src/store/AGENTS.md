# src/store 目录知识库（AGENTS）

## 概览

`store/` 承担全局状态与跨页面一致性，核心是会话消息、布局、通知、服务状态等单向数据流。

## 去哪里找

| 任务                     | 位置                                            | 备注                         |
| ------------------------ | ----------------------------------------------- | ---------------------------- |
| 消息流/撤销重做/流式状态 | `messageStore.ts`                               | 本仓库关键状态中心，文件较大 |
| 布局与面板状态           | `layoutStore.ts`                                | 面板开关、尺寸、终端 tab     |
| 服务器与健康状态         | `serverStore.ts`                                | 多后端切换与健康检查         |
| 主题与显示偏好           | `themeStore.ts`                                 | 主题模式、预设、自定义 CSS   |
| 通知与待处理请求         | `notificationStore.ts`, `activeSessionStore.ts` | 会话状态联动                 |

## 本目录约定

- Store 通过 `store/index.ts` 聚合导出，新增 store 记得补齐导出。
- 优先保持“状态变更原子化”：一次 action 只做一类状态写入。
- 选择器优先复用现有 helper（减少组件层重复计算）。

## 反模式

- 不要在组件层直接拼接复杂 store 派生逻辑，优先下沉到 store/hook。
- 不要在多个 store 里重复维护同一事实来源（single source of truth）。
- 不要把异步副作用散落到任意 action，先评估是否应放到 hooks/api 层。

## 验证建议

```bash
npm run test:run -- src/store/messageStore.test.ts
npm run typecheck
```
