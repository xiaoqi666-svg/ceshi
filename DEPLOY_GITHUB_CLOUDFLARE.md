# GitHub → Cloudflare Pages 部署说明

本目录就是 GitHub 仓库根目录。不要再套一层 `todaycampus_github_cloudflare/` 后上传。

## 仓库根目录应看到

- `index.html`
- `manifest.webmanifest`
- `service-worker.js`
- `_headers`
- `.gitignore`
- `icons/`
- `README.md`
- `APK_AUDIT.txt`

## GitHub

推荐仓库名：

`todaycampus-pwa`

建议使用 `Private` 私有仓库，因为 HTML/JS 中包含你的客户端业务代码和 RSA 公钥（公钥本身不属于秘密，但没有必要公开整个项目源码）。

网页上传方式：

1. GitHub → New repository
2. Repository name: `todaycampus-pwa`
3. Visibility: `Private`
4. Create repository
5. Add file → Upload files
6. 把本目录中的“文件和文件夹本身”拖进去
7. Commit message: `Initial PWA deployment`
8. Commit to `main`

注意：不要只上传这个 ZIP 文件。Cloudflare Pages 需要看到解压后的 `index.html` 等静态文件。

## Cloudflare Pages

Cloudflare Dashboard：

1. Workers & Pages
2. Create application
3. Pages
4. Import an existing Git repository / Connect to Git
5. 授权 `Cloudflare Workers and Pages` GitHub App
6. 只授权你准备部署的 `todaycampus-pwa` 仓库即可
7. 选择仓库 → Begin setup

推荐配置：

- Project name: `todaycampus-pwa`
- Production branch: `main`
- Framework preset: `None`
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: 留空（仓库根目录）
- Environment variables: 不需要

然后点击 Save and Deploy / Deploy。

部署成功后会得到：

`https://<project-name>.pages.dev`

## iPhone

1. Safari 打开 `https://<project-name>.pages.dev`
2. 确认卡密页正常显示
3. 分享 → 添加到主屏幕
4. 从主屏幕图标重新打开
5. 复制设备码
6. 用你的卡密生成器签发对应卡密
7. 输入卡密激活

## 后续更新

以后修改文件后提交到 GitHub 的 `main`：

`GitHub main → Cloudflare Pages 自动构建 → 自动发布`

不需要重新创建 Cloudflare 项目。

如果只是测试新版，建议建一个其他分支；Cloudflare Pages 可以给非生产分支生成预览部署，不影响正式 `main` 版本。
