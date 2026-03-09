# docker 目录知识库（AGENTS）

## 概览

`docker/` 提供容器化部署链路：前端、后端、网关与动态路由（Python Router + Caddy）。

## 去哪里找

| 任务           | 位置                    | 备注                               |
| -------------- | ----------------------- | ---------------------------------- |
| 网关路由规则   | `Caddyfile*`            | `/api`、`/routes`、`/preview` 转发 |
| 镜像构建定义   | `Dockerfile.*`          | frontend/backend/gateway 分离      |
| 动态端口路由   | `router/router.py`      | 扫描容器端口并生成预览映射         |
| 启动入口与环境 | `backend-entrypoint.sh` | 后端容器初始化                     |

## 本目录约定

- 生产/预览路由配置以网关优先，不在前端镜像里硬编码后端地址。
- 路由服务参数统一走环境变量（`ROUTER_*`）。

## 反模式

- 不要把凭据写进 Dockerfile/Caddyfile（使用 `.env` 与 Secrets）。
- 不要破坏 SSE 所需的反代行为（需关闭缓冲/保证实时 flush）。
- 不要修改路由扫描范围却不更新文档与 compose 环境变量。

## 常用命令

```bash
docker compose up -d
docker compose -f docker-compose.standalone.yml up -d
```
