# 网址路由

- [网址路由](#2)
  - [默认网址路由](#2.1)
  - [路由过程](#2.2)

<span id='2'></span>
## 网址路由

主要有两个目的：
- 比对通过浏览器传来的 `HTTP` 要求
- 响应适当的网址给浏览器

<span id='2.1'></span>
### 默认网址路由
`RouteConfig.cs` 例子：
```
public static void RegisterRoutes(RouteCollection routes)
{
    routes.IgnoreRoute("{resource}.asd/{*pathInfo}");

    routes.MapRoute(
        name: "Default",
        url: "{controller}/{action}/{id}",
        defaults: new{
            controller = "Home",
            action = "Index",
            id = urlParameter.Optional
        }
    );
}
```


默认的网址路由规则定义在 `RouteConfig.cs`，其中的属性说明 :
- `RouteTable.Routes` 是一个公开的静态对象，用来保存所有网址路由的规则集（`RouteCollection`）
- `IgnoreRoute` 是用来定义网址路由不处理的网址，第一个参数就是设置不处理网址的 `url` 样式，不处理的意义就是如果从客户端传过来的网址跟规则对比成功，那么就不会通过网址路由继续比对下去，将会改由 `IIS` 的其他 `HTTP` 模块进行处理，而不会进入 `ASP.NET MVC` 的运行周期
- `IgnoreRoute` 参数中的 `{resource}` 代表一个 `RouteValue` 路由变量，其路由变量的名称为 `resource`，只是代表一个变量，取任何其他名字都可以，`{resource}.axd` 的意思就是所有 `*.axd` 文档网址
- `IgnoreRoute` 参数中的 `{*pathInfo}` 也是一个 `RouteValue` 路由变量，前面的 `*` 代表所有的意思，`{resource}.axd/{*pathInfo}` 的意思也就是只要出现 `*.asd` 结尾的网址，而且在网址后面出现任何路径，都会被网址路由跳过
- `MapRoute` 是最常用来定义网址路由的扩充方法
- `MapRoute` 中 `name` 参数定义 `Route` 名称 
- `MapRoute` 中 `url` 参数定义 `url` 样式和每个路径段落的参数名称，例子中包括三个路由参数分别是`controller`、`action`、`id`，如果输入的网址路径是 `/Home/About/123` 的话，那么 `controller` 就是 `Home`，`action` 就是 `About`，`id` 就是 `123`
- `MapRoute` 中 `default` 参数定义路由参数的默认值，当网址路由比对不到`HTTP` 要求的网址时，会尝试带入这里定义的默认值，然后再进一步比对是否有符合的 `Controller` 和 `Action` 可以运行

<span id='2.2'></span>
### 路由过程

所有网址都是从 `http://localhost/` 之后开始比对，称为网址路径

> 例1 输入网址 `http://localhost/Trace.axd/a/b/c/d/e`

1. 比对顺序： `{resource}.axd` 比对得到 `Trace.axd`，`{*pathInfo}` 比对得到 `a/b/c/d/e` ，所有 `RouteValue` 都比对成功，所以这一次 `HTTP` 要求会由此网址路由提供服务
2. 比对结果： 该网址以 `routes.IgnoreRoute` 扩充方法进行比对成功，所以 `Routing` 模块不会将本次 `HTTP` 要求给 `ASP.NET MVC` 运行，而是将`HTTP` 重新交给 `IIS` 的其他 `HTTP` 模块处理

> 例2 输入网址 `http://localhost/Trace.axd`

1. 对比顺序： `{resource}.axd` 比对得到 `Trace.axd`，`{*pathInfo}` 比对得到空字符串，所有都比对成功，由网址路由提供服务
2. 比对结果： 该网址以 `routes.IgnoreRoute` 扩充方法进行比对成功，所以 `Routing` 模块不会将本次 `HTTP` 要求给 `ASP.NET MVC` 运行，而是将`HTTP` 重新交给 `IIS` 的其他 `HTTP` 模块处理

> 例3 输入网址 `http://localhost/Member/Detail?id=123`

1. 比对顺序： `{resource}.axd` 比对失败，接着跳到下一段 `routes.MapRoute`　的　`{controller}/{action}/{id}` 网址格式，`Member` 比对到 `{controller}` ，`Detail` 比对得到 `{action}` ，接着的 `?id=123` 不算网址路径的一部分，而属于 `QueryString` 的范围，所有的网址路径都已经比对完毕，剩下的 `{id}` 没有比对到，网址路由会自动读取 `default` 具名参数里的设置，取得默认值 `UrlParameter.Optional`，所有的 `RouteValue` 都比对成功，所以这一次 `HTTP` 请求会要求网址路由提供服务
2. 比对结果： 该网址以 `routes.MapRoute` 扩充方法进行比对成功，因此 `Routing` 模块将会把此次 `HTTP` 要求委托给 `MvcHandler` 负责处理， `MvcHandler` 会通过当前已经取得的 `RouteValue` 路由参数查找对应的 `Controller` 和 `Action` 来运行程序，所以此时就会去运行 `MemberController` 控制器中的 `Detail` 动作

<font color='red'>注： 必须所有参数都完全符合才算是比对成功，比对失败就会跳至下一条网址路由规则继续比对，如果所有路由规则都比对失败的话，那么这次请求就会交由 `IIS` 的其他 `HTTP` 模块负责处理</font>

