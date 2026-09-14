# 新版 v13 最终禁止缩放版

基线：
- 完整继承新版 v12 激活前协议确认版
- 服务协议 / 隐私政策 / 勾选后激活全部保留

v13 新增：
- viewport maximum-scale=1
- viewport minimum-scale=1
- user-scalable=no
- 页面主要区域 touch-action: pan-y
- iOS gesturestart / gesturechange / gestureend 禁止
- 双指 touchstart 禁止
- 双指 touchmove 禁止
- dblclick 默认缩放禁止
- Ctrl/Meta + wheel 缩放禁止
- input / textarea / select 强制最小 16px，避免聚焦自动放大

特别说明：
- 没有使用 v5 那种全局 touchend 300ms 拦截方式
- 不会因为防双击而吞掉普通按钮点击
- v12 的用户协议功能完整保留
- TC2 / RSA / 24位设备码 / 激活持久化 / 卡密验证核心逐字未改

授权核心 SHA-256：
49c2794bb088beedfaeccdb6594531ae794aa6f9d68e0c8234bacde4e031585d

Service Worker：
todaycampus-pwa-v13-final-nozoom
