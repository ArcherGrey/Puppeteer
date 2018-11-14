# `Controller` 相关技术

- [概念](#1)
- [类别和方法](#2)
- [运行过程](#3)
- [动作方法选择器](#4)
- [`ActionResult`](#5)
  - [`ViewResult`](#5.1)
  - [`PartialViewResult`](#5.2)
  - [`EmptyResult`](#5.3)
  - [`ContentResult`](#5.4)
  - [`FileResult`](#5.5)
  - [`JavaScriptResult`](#5.6)
  

<span id='1'></span>
## 概念
`MVC` 的核心就是 `Controller`，负责处理浏览器的所有要求，并决定响应什么属性给浏览器

<span id='2'></span>
## 类别和方法

`Controller` 本身就是一个类（`class`），其中有许多方法（`Method`），这些方法中只要是公开方法（`public method`）就会被视为一个动作（`Action`），只要有动作存在就可以通过动作接收客户端传来的要求然后决定应该响应的视图（`View`）。

撰写 `Controller` 基本要求：
- `Controller` 必须是公开类型 （`Public`）
- 名称必须以 `Controller` 结尾
- 必须继承自 `ASP.NET MVC` 内建的 `Controller` 类，或继承自实现 `IController` 接口的自定义类，或自行实现 `IController` 接口
- 所有 `Action` 都必须是公开方法，该方法可以没有参数也可以有多个参数，所有非公开的方法都不会被视为一个 `Action`

<span id='3'></span>
## 运行过程

1. 根据客户端的请求 `MvcHandler` 选中相应的 `Controller`
2. 通过 `ActionInvoker` 选定适当的 `Action`，根据模型绑定机制将参数传入 `Action` 中；如果 `ActionInvoker` 找不到对应的 `Action`，默认会运行 `HandleUnknownAction`，会响应 `HTTP 404 找不到资源` 的错误消息
3. `Action` 运行完成后回传 `ActionResult` 类型或者其他衍生类型，也可以使用 `.NET` 内建的基本数据类型（最后会被 `ASP.NET MVC` 自动转换成 `ContentResult`），如果 `Action` 声明成 `void`，就不回传任何数据
4. `MvcHandler` 运行 `ActionResult` 提供的 `ExecuteResult` 方法，并将运行结果响应到客户端

<span id='4'></span>
## 动作方法选择器


- `NonAction` 属性：
```
[NonAction]
public ActionResult Index(){
    return View();
}
```
如果有该属性在 `Action` 方法上，就会告知 `ActionInvoker` 不要选定这个 `Action` 来运行，主要是用来保护特定方法不要发布到 `Web` 上，或者是功能尚未开发完成就要进行部署

将 `Action` 方法的 `public` 修改为 `private`，也可以达成完全相同的目的
```
private ActionResult Index(){
    return View();
}
```

- `HTTP` 动词限定属性：
`HttpGet`、`HttpPost`、`HttpDelete`、`HttpPut`、`HttpHead`、`HttpOption`、`HttpPatch` 

如果再动作方法上使用 `HttpGet` 属性，就代表只有当客户端发送 `Http Get` 请求的时候，`ActionInvoker` 才会选定到这个 `Action`:
```
[HttpGet]
public ActionResult Index(){
    return View();
}
```

如果什么动作限定属性都没有的话，不管客户端发送任意请求都会选定到对应的 `Action`

这些属性最多的用途是，需要对 `post` 请求和 `get` 请求响应不同的结果

<span id='5'></span>
## `ActionResult`

`ActionResult` 是 `Action` 运行后的回传类型，但是当 `Action` 回传 `ActionResult` 的时候，其实并不包含这个 `ActionResult` 的运行结果，而是包含运行时所需的数据，当 `MvcHandler` 从 `Controller` 取得 `ActionResult` 之后才会去运行出结果

<span id='5.1'></span>
### `ViewResult`

`ViewResult` 是 `ASP.NET MVC` 中最常用的 `ActionResult`，用于回传一个标准的视图页面：
```
// 回传默认的视图页面
public ActionResult About(){
    return View();
}

// 响应指定视图页面
public ActionResult About(){
    return View("About");
}
```

搜索目录：
1. 在网站根目录下 `Views` 里查找第一层，默认搜索和 `Controller` 同名的目录
2. 如果找不到就改为搜索 `Shared` 目录，里面通常会放置共享于多个 `Controller` 之间的 `View` 页面

<span id='5.2'></span>
### `PartialViewResult`

`PartialViewResult` 和 `ViewResult` 非常相似，但是无法为选中的 `View` 指派主版页面，如果想在页面中设计出更好的关注点分离特性，可以将页面中的另一部分独立成另一个动作 `Action` ，这时就可以利用 `PartialViewResult` 取得页面中的部分属性。

在以 `Ajax` 为主的页面应用时，经常会用到 `PartialViewResult` 取得页面的部分属性。

<span id='5.3'></span>
### `EmptyResult`

有些 `Action` 不需要回传任何数据，例如，想要在统计实时在线人数，从网页中动态发送一个请求，在 `Action` 里运行加总或者记录的动作，之后不回传任何数据，因为这个 `Action` 的主要目的就是统计数据而已。对于这种情况 `EmptyResult` 就非常合适。

有两种使用方式：
- 第一种：
```
public ActionResult OnlineUser(){
    return new EmptyResult();
}
```
- 第二种：
```
public void OnlineUser(){
    return;
}
```

<span id='5.4'></span>
### `ContentResult`

`ContentResult` 可以响应任何文字属性的结果，可以指定任意文字属性、属性类型（`Content-Type`）、文字编码（`Encoding`）。

例子：响应一段 `XML` 文字，设置相应的 `Content-Type` 为 `text/xml`，并指定文字编码为 `Encoding.UTF8`:
```
public ActionResult GetXML(){
    return Content("<ROOT><TEXT>123</TEXT></ROOT>","text/xml",System.Text.Encoding.UTF8);
}
```

如果想单纯的响应一串 `UTF8` 编码的 `HTML` 字符串：
```
public ActionResult GetHTML(){
    string strHTML = "..."
    return Content(strHTML);
}
```

还可以用另一种方法表达上例中简单的回传类型，就是直接把回传类型设置为 `string`，`ASP.NET MVC` 会自动判断从 `Action` 回传的类型，只要不是 `ActionResult` 的衍生类型，就会将回传的数据自动转换成 `ContentResult` 来输出：
```
public string Content(){
    string strHTML = "...";
    return strHTML;
}
```

<span id='5.5'></span>
### `FileResult`

`FileResult` 可以响应任何文档属性，包括二进制个数的数据，例如图档、`pdf`、`Excel`、或者压缩文件等，可以传入文档路径、字节流等不同的属性，让 `ASP.NET MVC` 帮你将属性回传给客户端，还能指定回传时的属性类型（`Content-Type`）或者指定客户端下载时要显示的文件名等。

`FileResult` 是一个抽象类型，具体共有三个：
- `FilePathResult` : 响应一个实体文档的属性
- `FileContentResult` : 响应一个 `byte[]` 属性
- `FileStreamResult` : 响应一个 `Stream` 属性

通过 `System.Web.Mvc.Controller` 提供的 `File` 辅助方法可以自动选定不同的 `FileResult` 响应

例子：通过 `Action` 输出一个放在 `App_Data` 目录下的 `PNG` 图文件：
```
public ActionResult GetFile(){
    return File(Server.MapPath("~/App_Data/UserA/Avatar.png"),"image/png");
}
```

如果希望能够要求浏览器直接下载文件而不是直接在浏览器开启文件，也可以传入要求下载的文档名在第三个参数：
```
public ActionResult GetFile(){
    // pdf 文档来自数据库
    byte[] fileContent = GetFileByteArrayFromDB();
    return File(fileContent,"application/pdf","xxx.pdf");
    // 文件名是自定义的
}
```

<span id='5.6'></span>
### `JavaScriptResult`

主要用途是响应 `javascript` 代码给浏览器（~~感觉很鸡肋啊。。为啥不直接放在前端~~），响应 `alert('ok')` 到客户端 :
```
public ActionResult JavaScript(){
    return JavaScript("alert('ok')")
}
```

和 `Ajax` 使用有关


<span id='5.7'></span>
### `JsonResult`

