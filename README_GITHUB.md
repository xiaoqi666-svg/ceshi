# 今日校园 PWA

iPhone / Safari PWA 版本。

## Cloudflare Pages build settings

| Setting | Value |
|---|---|
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory | leave blank |

详细步骤见 `DEPLOY_GITHUB_CLOUDFLARE.md`。

## Important

- 本项目不需要后端 API 或数据库。
- 首次安装需要 HTTPS。
- 卡密验证在本地执行。
- iPhone PWA 无法读取 Android ID，因此使用 PWA 本地稳定设备码。
- 清除 Safari 网站数据可能导致设备码和本地授权丢失。
