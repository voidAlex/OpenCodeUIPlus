# src-tauri 目录知识库（AGENTS）

## 概览

`src-tauri/` 是桌面端宿主：Rust 侧负责窗口生命周期、原生命令、服务管理与跨平台能力。

## 结构

```text
src-tauri/
├── src/
│   ├── main.rs   # 桌面入口（Windows 子系统属性）
│   ├── lib.rs    # 复用入口
│   └── app.rs    # 主逻辑（run/commands/plugins）
├── tauri.conf.json
└── gen/android/  # 生成产物（谨慎手改）
```

## 去哪里找

| 任务             | 位置                        | 备注                      |
| ---------------- | --------------------------- | ------------------------- |
| 桌面应用启动     | `src/main.rs`, `src/app.rs` | 实际运行入口在 `app::run` |
| 原生命令绑定     | `src/app.rs`                | `invoke` 对应命令集中在此 |
| Tauri 打包配置   | `tauri.conf.json`           | bundle、窗口、权限等      |
| Android 生成工程 | `gen/android/`              | 主要是自动生成目录        |

## 本目录约定

- Rust 改动优先保持最小面，先查现有 command/register 模式再增量修改。
- Tauri 前后端联动（前端 invoke 名称）必须与 `app.rs` 命令名一致。

## 反模式

- **禁止删除** `src/main.rs` 的 Windows 子系统属性（有 DO NOT REMOVE 注释）。
- 不要把临时调试逻辑直接提交到 `app.rs` 长期保留。
- 非必要不要直接修改 `gen/android/` 生成产物。

## 常用命令

```bash
npm run tauri build
npm run tauri android build
```
