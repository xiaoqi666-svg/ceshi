# 新版 v16：正式服务器设备码修复版

真实基线：
- v1
- v5 禁止缩放
- v12 激活前服务协议 / 隐私政策

本次只修设备码异步存储链路。

根因：
首次安装没有 localStorage 设备码时，代码会等待 IndexedDB / Cache Storage。
部分 iPhone 16 Pro / iOS WebKit 环境可能不及时回调，导致设备码一直无法完成识别。

修复：
- IndexedDB open：420ms 硬超时
- IDB transaction：420ms 硬超时
- Cache Storage：420ms 硬超时
- navigator.storage.persist()：后台调用，不阻塞启动
- 新 seed：先同步保存 localStorage，再后台镜像
- iPhone/PWA 1.8 秒最终保险：调用原 createFallbackDeviceCode()
- 最终保险仍使用原 DEVICE_FALLBACK_PREFIX + DEVICE_HASH_SUFFIX 算法

绝对未修改：
- DEVICE_FALLBACK_PREFIX
- DEVICE_HASH_SUFFIX
- STABLE_DEVICE_CODE_KEY
- FALLBACK_DEVICE_SEED_KEY
- DEVICE_CODE_SOURCE_KEY
- hashIdentityToDeviceCode()
- createFallbackDeviceCode()
- verifyRsaLicenseSignature()
- verifyDeviceLicenseCard()

关键算法 SHA-256：
35946f7b2dc6f719b085ac4d9d0dbffc453eb398e3486572a013480e835cce0f

保留：
- v5 禁止网页缩放
- v12 用户协议勾选
- TC2 / RSA
- 24 位设备码
- 卡密绑定规则

Service Worker：
todaycampus-pwa-v16-live-devicefix
