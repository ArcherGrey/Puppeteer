# 数据绑定

[参考](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf#comment)
[Object.defineProperty](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
[proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

数据绑定是响应式框架的基础。

主要基于下面几种方式实现：
- 发布订阅
- 脏检查 
- 数据劫持（好像就是发布订阅）
- 数据模型


最简单版本：
```
// html
<input type="text" id="input">
<span id="span"></span>

// js
let input = document.getElementById('input')
let span = document.getElementById('span')
input.addEventListener('keyup', function(e) {
  span.innerHTML = e.target.value
})
```

这里是通过事件监听回调操作dom

## 数据劫持

