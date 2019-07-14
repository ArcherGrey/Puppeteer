# 类型判断

其实常规方法主要有四种

- `typeof`
- `instanceof`
- `Object.prototype.toString`
- `constructor`

其实这四种方式归根结底就是两种思路：

- 根据数据类型判断（1，2）
- 根据构造函数判断（3，4）`

## typeof

`typeof` 是一元运算符，用来返回操作数类型的字符串，但是无法具体区分`object`类型，它可以做的事情有：
- 检查一个变量是否存在，是否有值：`typeof` 只有在两种情况下返回 `undefined`
    - 变量没有声明
    - 变量没有初始化
- 判断一个值不等于 `undefined` 也不等于 `null`：`typeof null=object`（`javascript` 遗留`bug`）
- 区别对象和原始值
- 原始值的类型
- 判断是否是函数

## instanceof

`instanceof` 用来判断对象实例的具体类型（包括继承关系），也就是后面的变量在前面的变量的原型链上即可。

![关系图](./img/instanceof.jpg)