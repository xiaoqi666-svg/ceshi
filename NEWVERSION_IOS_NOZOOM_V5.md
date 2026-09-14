# 新版 iPhone 禁止缩放 v5

仅针对“新版”。

本次修复：
- 禁止双指捏合放大/缩小
- 禁止 iOS gesturestart / gesturechange / gestureend 缩放
- 禁止双指 touchmove 触发页面 zoom
- 禁止双击放大
- 表单输入框字号最低 16px，避免 iPhone 聚焦输入框时自动放大
- viewport 设置 maximum-scale=1 / minimum-scale=1 / user-scalable=no

未修改：
- TC2 / RSA
- 24位设备码
- 激活持久化
- 公告 / 使用须知
- 使用须知到底解锁 v4
- iOS App 化防回弹 v3

说明：
禁用缩放会降低可访问性，因为用户无法通过双指放大文字。
