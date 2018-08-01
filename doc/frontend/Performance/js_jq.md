# jQuery 和 原生 js 性能对比
目录
- [选择器](#Selector)


## Selector（选择器）
（jquery时间 / 原生js时间）
- ID: 五倍左右
- Class: 十倍左右
- tag(标签): 二十倍左右
- 属性: 三十倍左右
- 直接子元素: 使用 `children()` 十倍左右 | 使用 `>` 几百倍。。
- 所有后代: 三倍左右 （原生的querySelectorAll性能也一般）
- ...
