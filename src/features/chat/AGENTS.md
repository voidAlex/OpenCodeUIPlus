# src/features/chat 目录知识库（AGENTS）

## 概览

`chat/` 是对话体验主模块：顶部栏、输入区、消息区、权限/问题弹窗、侧栏都在这里汇合。

## 结构

```text
chat/
├── InputBox.tsx          # 输入主组件（超大文件，逻辑密集）
├── ChatArea.tsx          # 消息列表与滚动行为
├── ModelSelector.tsx     # 模型/Agent 选择
├── PermissionDialog.tsx  # 权限请求处理
├── QuestionDialog.tsx    # 问题请求处理
├── input/                # 输入子区（toolbar/footer/undo）
└── sidebar/              # 侧栏子区（recent/context/panel）
```

## 去哪里找

| 任务                  | 位置                     | 备注                           |
| --------------------- | ------------------------ | ------------------------------ |
| 发送消息/附件/快捷键  | `InputBox.tsx`           | 最大复杂度热点，改动要小步验证 |
| 会话消息渲染容器      | `ChatArea.tsx`           | 与虚拟列表、滚动定位相关       |
| 模型与 Agent 选择逻辑 | `ModelSelector.tsx`      | 与 `useChatSession` 状态联动   |
| 权限批准流程          | `PermissionDialog.tsx`   | 与 `usePermissionHandler` 协同 |
| 问题答复流程          | `QuestionDialog.tsx`     | 请求队列与回复状态             |
| 输入工具区            | `input/InputToolbar.tsx` | 斜杠命令、模式切换             |
| 侧栏路由/上下文详情   | `sidebar/SidePanel.tsx`  | 高耦合文件，谨慎大改           |

## 本目录约定

- 组件命名统一 PascalCase，测试文件就近共置：`*.test.tsx`。
- 对外统一从 `chat/index.ts` 导出，避免跨层直接深链路径。
- 涉及会话状态的变更优先通过 hooks/store 完成，不在 UI 组件里复制状态机。

## 反模式

- 不要在 `InputBox` 直接新增跨模块副作用（先落到 hook/store 再接 UI）。
- 不要在 `ChatArea` 内写与滚动无关的业务判断，保持职责单一。
- 不要绕开权限/问题统一入口（`PermissionDialog` / `QuestionDialog`）。
