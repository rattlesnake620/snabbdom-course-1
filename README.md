# snabbdom-course-1
拉钩Vue核心学习第一天课程


选择题1： ABCD
选择题2： D
简答题：
1) 依次调用prepatch和update钩子函数
2) 如果新节点有text属性，且不等于旧节点的text属性。此时判断老节点是否有children属性，有则移除，否则设置新dom的textcontent
3) 如果新老节点均有children，且不相等，调用updateChildren更新二者之间的差异
4) 如果新节点有children属性，判断老节点是否有text属性，有则清空textContent，然后添加新节点的children属性
5) 如果只有老节点有children属性，删除老节点
6) 如果只有老节点有text属性，清空DOM元素的textContent
7) 触发postpatch钩子函数
