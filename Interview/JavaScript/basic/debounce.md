# 防抖

原理：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

适用场景：

- 按钮提交场景：防止多次提交按钮，只执行最后提交的一次
- 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似


```
// 箭头函数
const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 普通版
// 思路:在规定时间内未触发第二次，则执行
function debounce (fn, delay) {
  // 利用闭包保存定时器
  let timer = null
  return function () {
    let context = this
    let arg = arguments
    // 在规定时间内再次触发会先清除定时器后再重设定时器
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, arg)
    }, delay)
  }
}

```