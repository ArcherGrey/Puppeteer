# `session 和 cookie`


> 网络早期最大的问题之一是如何管理状态。简而言之就是服务器无法知道两个请求是否来自同一个浏览器。

会话（`Session`）跟踪是`Web`程序中常用的技术，用来跟踪用户的整个会话。常用的会话跟踪技术是`Cookie`与`Session`。`Cookie`通过在客户端记录信息确定用户身份，`Session`通过在服务器端记录信息确定用户身份。



## `Cookie`
### 原理

由于 `http` 是无状态的协议，一旦客户端和服务器的数据交换完毕，就会断开连接，再次请求，会重新连接，这就说明服务器单从网络连接上是没有办法知道用户身份的。为了解决这个问题，就给每次新的用户请求时，发一个身份证，每次访问都要带上身份证，这样服务器就知道是谁来访问了，针对不同的用户做出不同的响应。

### 类型

按照过期时间分为两类：
- 会话 `Cookie`:是一种临时 `cookie` ，用户退出浏览器，就会被删除
- 持久 `Cookie`:存放在硬盘中，关闭浏览器或者重启电脑依然存在，保留时间由设置的有效期或者过期时间决定，通常是维护某个用户周期性访问服务器的配置文件或者登陆信息

### 不可跨域名性

`Cookie`具有不可跨域名性。根据`Cookie`规范，浏览器访问`Google`只会携带`Google`的`Cookie`，而不会携带`Baidu`的`Cookie`。`Google`也只能操作`Google`的`Cookie`，而不能操作`Baidu`的`Cookie`。

### 属性

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

- `secure`:设置了属性`secure`，`cookie`只有在`https`协议加密情况下才会发送给服务端。但是这并不是最安全的，由于其固有的不安全性，敏感信息也是不应该通过`cookie`传输的(`chrome 52`和`firefox 52` 开始不安全的（`HTTP`）是无法使用`secure`的)

### 操作 `cookie`

通过`docuemnt.cookie`可以设置和获取`Cookie`的值
```
document.cookie = "user=wang";
console.log(document.cookie);
```
禁止`javascript`操作`cookie`（为避免跨域脚本(`xss`)攻击，通过`javascript`的`document.cookie`无法访问带有`HttpOnly`标记的`cookie`）
```
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2017 07:28:00 GMT; Secure; HttpOnly
```

### 第三方 `cookie`

通常`cookie`的域和浏览器地址的域匹配，这被称为第一方`cookie`。那么第三方`cookie`就是`cookie`的域和地址栏中的域不匹配，这种`cookie`通常被用在第三方广告网站。为了跟踪用户的浏览记录，并且根据收集的用户的浏览习惯，给用户推送相关的广告。

---

## `Session`

