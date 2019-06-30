# `web` 存储

# `Cookie`

> 网络早期最大的问题之一是如何管理状态。简而言之就是服务器无法知道两个请求是否来自同一个浏览器。当时最简单的方法是在请求时在页面中插入一些参数，在下一个请求中回传参数，这需要使用包含参数的隐藏的表单，或者作为 `URL` 参数的一部分传递，这两个解决方案都是手动操作，容易出错。网景公司的一名员工为了解决用户网络购物的购物车历史记录，第一次将 `cookie` 应用于网络。

## 原理

由于 `http` 是无状态的协议，一旦客户端和服务器的数据交换完毕，就会断开连接，再次请求，会重新连接，这就说明服务器单从网络连接上是没有办法知道用户身份的。为了解决这个问题，就给每次新的用户请求时，发一个身份证，每次访问都要带上身份证，这样服务器就知道是谁来访问了，针对不同的用户做出不同的响应，这就是 `cookie` 的原理。

## 类型

按照过期时间分为两类：
- 会话 `Cookie`:是一种临时 `cookie` ，用户退出浏览器，就会被删除
- 持久 `Cookie`:存放在硬盘中，关闭浏览器或者重启电脑依然存在，保留时间由设置的有效期或者过期时间决定，通常是维护某个用户周期性访问服务器的配置文件或者登陆信息

## 属性

- 域：服务器可以向 `set-cookie` 响应首部添加一个 `Domain` 属性来控制哪些站点可以看到 `cookie`：
```
Set-Cookie: name="wang"; domain="m.zhuanzhuan.58.com"
```
如果用户访问的是 `m.zhuanzhuan.58.com` 那就会发送 `cookie: name="wang"`, 如果用户访问`www.aaa.com`（非 `zhuanzhuan.58.com`）就不会发送这个 `Cookie`

- 路径:可以为服务器特定文档指定 `Cookie`，这个属性设置的 `url` 且带有这个前缀的 `url` 路径都是有效的。
例如：`m.zhuanzhuan.58.com` 和 `m.zhaunzhuan.58.com/user/`这两个`url`。 `m.zhuanzhuan.58.com` 设置`cookie`
```
Set-cookie: id="123432";domain="m.zhuanzhuan.58.com";
```

`m.zhaunzhuan.58.com/user/` 设置`cookie`：
```
Set-cookie：user="wang", domain="m.zhuanzhuan.58.com"; path=/user/
```
但是访问其他路径`m.zhuanzhuan.58.com/other/`就会获得
```
cookie: id="123432"
```
如果访问`m.zhuanzhuan.58.com/user/`就会获得
```
  cookie: id="123432"
  cookie: user="wang"
```