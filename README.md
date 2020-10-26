# Puppeteer

## 示例

- [截图](./example/screenshot.js)
- [创建 pdf](./example/pdf.js)

## 微博

- [登录](./weibo/login.js)
  - 网页版登录后还需要扫码二维码，暂时无法解决

## 默认设置

1. 使用 `headless mode`，如果要使用完全版本修改配置：

```js
const browser = await puppeteer.launch({ headless: false }); // default is true
```

2. 运行绑定的 `Chromium` 版本

默认情况下，`Puppeteer` 下载并使用特定版本的 `Chromium` 以及其 `API` 保证开箱即用。 如果要将 `Puppeteer` 与不同版本的 `Chrome` 或 `Chromium` 一起使用，在创建 `Browser` 实例时传入 `Chromium` 可执行文件的路径即可：

```js
const browser = await puppeteer.launch({ executablePath: "/path/to/Chrome" });
```
