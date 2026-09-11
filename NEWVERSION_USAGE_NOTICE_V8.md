# 新版 使用须知 v8

这是结构性修复，不再尝试识别“滚动到底”。

新流程：
1. 打开使用须知
2. 正文从顶部开始
3. 用户正常向下滚动
4. “我已知晓并同意”按钮直接位于正文物理最底部
5. 用户只有真正滚到底才能看到并点击
6. 点击后直接关闭使用须知

已删除：
- scrollTop / scrollHeight 到底判定作为前置条件
- IntersectionObserver 解锁
- “我已阅读到这里”中间按钮
- disabled / is-locked 解锁状态
- scroll/touchend/pointerup 到底识别监听

同时：
- iOS 防回弹脚本明确放行 button/input/link 等交互控件
- 避免 preventDefault 吞掉按钮点击
- 保留双指缩放禁用
- 保留 TC2 / RSA / 24位设备码 / 激活持久化
