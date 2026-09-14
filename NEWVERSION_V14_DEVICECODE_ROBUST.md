# 新版 v14：iPhone 16 Pro 设备码稳定修复

检查结论：
v13 的禁止缩放代码没有修改设备码算法。
设备码无法出现的主要代码风险是异步存储 Promise 可能长期不返回。

v14 修复：
- navigator.storage.persist() 不再 await
- IndexedDB open 增加 450ms 硬超时
- IndexedDB / Cache Storage 读取均有限时
- 新 seed 立即写入同步本地存储
- IDB / Cache 作为后台镜像，不阻塞设备码显示
- 设备码格式仍为原 24 位十六进制
- v12 用户协议完整保留
- v13 禁止缩放完整保留

精确校验：
- RSA 公钥：与 v13 完全一致
- verifyRsaLicenseSignature()：与 v13 完全一致
- verifyDeviceLicenseCard()：与 v13 完全一致

卡密算法核心 SHA-256：
c098e2808ab6d27cf519496ce7622f20616bbe9e7d3eeef60707a7ed01734d0c

Service Worker：
todaycampus-pwa-v14-devicecode-robust
