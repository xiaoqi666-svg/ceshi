# 今日校园 PWA v1

这个版本从上传的 Android APK 中提取现有 HTML/CSS/JS，并做了 PWA / iPhone 适配。

## 已修改

1. 修复启动卡密绕过：
   - 原 APK 末尾直接执行 `unlockLicensedApp()`。
   - PWA 版改为启动执行 `initLicenseActivation()`。
   - `<body>` 默认带 `license-locked`，避免启动时先显示已解锁界面。

2. 保留原有卡密格式：
   - 仍为 `TC2.<payload>.<RSA-SHA256 signature>`。
   - 保留 APK 内原 RSA 公钥。
   - 保留 24 位十六进制设备码格式。
   - 如果你现有卡密生成器是“输入设备码 -> 用原私钥签名”，可以继续使用。

3. iPhone / PWA 设备码：
   - Android 原生壳仍优先使用 Android ID。
   - Safari / iPhone PWA 无法读取 Android ID，因此直接生成本机稳定随机种子并派生设备码。
   - 设备码和卡密保存在当前站点 / 主屏幕 PWA 的本地存储中。
   - 清除 Safari 网站数据、删除相关站点数据、系统清理存储等情况可能导致设备码或授权丢失，需要重新绑定。

4. PWA：
   - 新增 `manifest.webmanifest`
   - 新增 `service-worker.js`
   - 新增 iPhone 主屏幕相关 meta
   - 新增 180 / 192 / 512 图标
   - 首次成功加载后可离线打开主要界面与功能

## 部署

PWA 仍需要一个 HTTPS 静态地址进行首次访问和安装，但不需要后端 API、数据库或业务服务器。

把整个目录上传到任意支持 HTTPS 的静态托管即可。根目录需要能访问：
- /index.html
- /manifest.webmanifest
- /service-worker.js
- /icons/...

iPhone：
1. 用 Safari 打开 HTTPS 地址
2. 分享
3. “添加到主屏幕”
4. 从桌面图标打开
5. 复制设备码发给开发者
6. 使用原有签名工具生成该设备码对应的卡密
7. 输入卡密激活

## 重要限制

PWA 不能读取 iPhone 的 IMEI、UDID、序列号或等价的系统硬件唯一 ID。
这里绑定的是“当前 PWA / 站点的本地安装数据”，不是 Apple 硬件 ID。
