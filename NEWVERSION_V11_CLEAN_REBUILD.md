# 新版 v11 干净重建版

本版不是在 v10 上继续叠补丁，而是从最后一个已知卡密正常的 v2 基线重新构建。

授权核心保护：
- PWA 设备码持久化
- TC2 卡密格式
- RSA 公钥验签
- 24 位设备码匹配
- 卡密保存/恢复
以上代码与 v2 基线逐字一致。

授权核心 SHA-256：
49c2794bb088beedfaeccdb6594531ae794aa6f9d68e0c8234bacde4e031585d

重新加入：
- 使用须知永久停用
- 更新公告保留
- iPhone App 化 CSS 防整体网页滚动
- 禁止双指捏合缩放
- 不再使用任何会拦截单指按钮点击的全局 touchend / 单指 touchmove
- 设备不一致时显示“卡密绑定设备码”和“当前设备码”，方便直接判断原因

Service Worker：
todaycampus-pwa-v11-clean-license
