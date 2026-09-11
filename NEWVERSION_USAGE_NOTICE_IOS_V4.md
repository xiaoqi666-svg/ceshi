# 新版 iPhone 使用须知 v4 修复

仅针对“新版”。

修复：
- iPhone 上使用须知视觉已经滑到底，但按钮仍不可点击
- scrollTop / scrollHeight 小数像素误差
- safe-area / 字体缩放造成的底部判断误差
- momentum scroll 最后一帧没有触发有效 scroll 判断
- Safari/PWA 动态 disabled 按钮偶发触摸异常

现在采用：
1. 32px+ DPR 容差
2. scrollTop / scrollHeight 判断
3. “已阅读至底部”标记可视位置判断
4. IntersectionObserver 辅助判断
5. touchend / pointerup 再检查
6. 点击“我已知晓并同意”时最后再检查一次
7. 不再使用原生 disabled，改为程序锁定状态

未修改：
- TC2 / RSA
- 24位设备码
- 激活码持久化
- iOS App 化防回弹
- 公告功能
