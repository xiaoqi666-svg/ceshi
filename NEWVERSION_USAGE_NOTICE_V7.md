# 新版 使用须知 v7

修复“点击我已阅读到这里没有反应”。

根因：
v5 为禁止双击放大加入了全局 touchend preventDefault。
用户滚动到底后马上点击底部按钮时，这个全局逻辑可能抑制 iOS 合成 click。

v7：
- 删除全局 touchend 双击拦截
- 保留 viewport 禁缩放
- 保留 gesturestart/gesturechange/gestureend 禁缩放
- 保留双指 touchmove 禁缩放
- 底部按钮使用自己的 touchstart/touchend 直接触发
- 手指移动小于 18px 才算点击，避免滑动过程中误触
- 同时保留 onclick，兼容鼠标/桌面浏览器
- 按钮增加 z-index / pointer-events / touch-action

仍保留：
- TC2 / RSA
- 24 位设备码
- 激活持久化
- iOS App 化防回弹
- 双指捏合缩放禁用
- 使用须知底部实体确认方案
