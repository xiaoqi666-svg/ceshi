# 新版正式服务器兼容版：v1 + v5 + v12

构建原则：
1. 先还原新版 v1。
2. 覆盖正式服务器曾使用的 v5 禁止缩放补丁。
3. 在这个实际基线上移植 v12 的激活前协议功能。
4. 不加入 v13 / v14 的其它设备码或启动链路改动。

保留 v5：
- maximum-scale=1
- minimum-scale=1
- user-scalable=no
- gesturestart / gesturechange / gestureend 禁止缩放
- 双指 touchmove 禁止 pinch
- 输入框 16px，避免 iOS 聚焦自动放大

兼容性修正：
v5 原来的全局 touchend 300ms preventDefault 会在 iPhone 上偶发吞掉
“我已阅读”或“立即激活”的 click。
因此仅将这一条内部实现替换成 dblclick preventDefault。
禁止缩放目标保留，但不会影响 v12 协议按钮。

新增 v12：
- 激活页显示“已阅读并同意 服务协议 和 隐私政策”
- 服务协议 / 隐私政策均可点击打开
- “我已阅读”不要求滚到底
- 未勾选时不能执行卡密激活
- 未勾选时提示先同意协议
- 旧“使用须知”不再启动，也不再在“更多”中显示

授权保护：
v1+v5 基线的卡密、设备码、RSA、持久化授权核心逐字未改。
授权核心 SHA-256：
49c2794bb088beedfaeccdb6594531ae794aa6f9d68e0c8234bacde4e031585d

Service Worker：
todaycampus-server-v1-v5-v12
