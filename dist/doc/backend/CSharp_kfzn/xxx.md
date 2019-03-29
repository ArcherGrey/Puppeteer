# MVC代码规则

## controller

- 所有 `controller` 类别都必须在 `controllers` 目录下
- 类名必须以 `controller` 结尾，且类中所有公开方法默认都是 `Action` 方法

## View

所有页面配置都要在 `views` 目录下，第一层子目录的名称必须是相对应的 `controller` 名称，且页面的文档名，必须以 `Action` 名称来命名，扩展名可以为 aspx,ascx或者cshtml

## Model

所有都要在 `models` 目录下


# 一个简单的MVC项目

## 创建项目
（这里使用的是vs2015）
1. 打开 vs 新建项目
2. 选择 `C#` 下面的 `web` 中的 `asp.net web application` 名字改为 `MvcGuestBook`
3. 模板选择 `MVC`

## 项目结构

按 `F5` 就能在浏览器中看到一个默认的网站，该网站只有最基本的功能，有几个简单的页面和注册登录功能。

在第一次运行注册登录页面后，在 `App_Data` 目录下会自动创建一组默认数据库文档（mdf ldf 文件）命名规则是 `aspnet-项目名称-日期` （需要点击显示所有文件才能看到）

默认项目模板创建的文档和目录：

> `App_Start` 目录
- `BundleConfig.cs` 定义 `css/js` 打包规则
- `FilterConfig.cs` 全局 `Action Filter` 定义的地方
- `RouteConfig.cs` 定义网址路由

> `Content` 目录：
存储网站所有静态属性，例如：图片、CSS、下载文件等等

> `Controllers` 目录：存放控制器文件

> `Models` 目录：存放数据有关文件

> `Script` 目录：存放所有脚本文件

> `Views` 目录：存放所有视图文件

# routing  网址路由

routing 主要有两个作用： 

1. 识别不同的http请求：（客户端 -> 服务器）

举个例子来说，当你点击某个链接，浏览器的网址也就是 `URL` 会发生变化，这个点击链接的动作实际上会让浏览器将网址转换成一个 `http` 请求，并将这个请求发送到服务器上，然后 `IIS` 服务器接收到这个请求，再通过网址路由确定转发给哪个 `httphandler` 处理。

2. 相应适当的网址给浏览器：（服务器 -> 客户端）

`MVC` 中的 `httphandler` 也就是 `mvchandler` 根据请求中的信息决定应该返回什么视图给浏览器。
