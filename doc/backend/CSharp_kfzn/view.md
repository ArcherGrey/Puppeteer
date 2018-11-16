# `View` 相关技术

- [`View` 的责任](#1)
- [`Razor`](#2)
- [如何从 `Action` 取得数据](#3)
  - [`HTML` 辅助方法](#3.1)

<span id="1"></span>
## `View` 的责任

`View` 负责将 `Controller` 传过来的数据转换成客户端需要的输出格式，主要工作就是呈现数据，所以在 `View` 中不应该出现复杂的应用代码逻辑或者商业逻辑在内，开发时尽量维持 `View` 逻辑简单，不要做过多的事。

<span id="2"></span>
## `Razor`

> `MVC 3` 开始引入 `Razor` 语法

输出单一变量：
```
@DataTime.Now
```

输出运算表达式：
```
@(ViewBag.isOK?"ok":"notok")
```

多行代码：
```
@{
    var a = 1;
    var b = 2;
}
```

**（剩下的可以百度。。。）**

<span id="3"></span>
## 如何从 `Action` 取得数据

从 `Action` 取得数据有两种方式：
- 使用弱类型取得数据：`View` 页面不需要任何声明，数据可以从 `ViewData`、`ViewBag`、`TempData` 取得，也可以通过 `@Model` 属性取得 `ViewData.Model` 数据模型，类别是 `object` 也算是弱类型
- 使用强类型取得数据：必须在 `View` 页面第一行使用 `@model` 引入一个 `View` 页面专用的数据模型
```
@model MvcApplication5.Models.LoginModel

<hgroup class = "title">
    <h1>@ViewBag.title</h1>
</hgroup>
```


<span id="3.1"></span>
### `HTML` 辅助方法

**百度 `@Html`**




