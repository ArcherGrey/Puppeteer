# 文档合集

单页面

~~看到 `gitbook` 好像能搞出类似的效果，准备试一试~~

~~gitbook 必须在官网上面注册然后上传到上面，用官网做为服务器~~

[地址](https://archergrey.github.io/document/dist)

`markdown`：
- **markdown的锚点跳转标签必须是英文小写(全部都要)**
- **锚点多个单词之间可以使用`-`连接**


布局：
- 左侧菜单中是类别目录，点击后再中央区域显示具体文章
- 系列文档放在首页跑马灯中

技术相关：
- `vue`
- `element` (配合 `vue` 的 `ui` 框架)
- `marked.js` (解析 `markdown` 文件)
- `anime` (动画库)
- `webpack` (打包工具)

前端常用变量（文档链接）保存在 `json` 中：
- `mainmenu.json` 保存中间跑马灯图片链接
- `sidemenu.json` 保存侧边选中后的文档链接，添加新的文档就在这个文件中添加，通过 `json` 可视化编辑器添加很方便



---
## 内容目录

<font color='red'>注： `dom` 相关都放到 `html` 部分</font>


- 前端
  - 开发工具
    - sublime 安装和使用技巧
  - javascript 知识点
    - 包装对象
    - 原型链
    - `this`
    - `call | apply | bind`
    - 特殊技巧 (待补充)
    - `json` 和 `jsonp`
    - 闭包
    - 作用域、上下文、执行环境、作用域链
    - 模块化
    - 内存管理（堆和栈）
    - 深拷贝和浅拷贝
    - `==` 和 `===`
    - 分号结尾的问题
  - `WebGL`
    - `[threejs入门-1] hello,Three.js`
    - `[threejs入门-2] 创造一个世界`
    - `[threejs入门-3] 探索和互动`
  - 性能优化
    - ~~javascript 高性能（阅读总结）~~（<font color='red'>待修改</font>）
  - `JQuery`
    - 一步步实现 `jQuery`
  - `html`
    - ~~浏览器内部工作原理 （待补充）~~
    - ~~`DOM API` （待补充）~~
    - ~~`file` 协议（待补充）~~
  - `css`
  - 可视化效果
    - 粒子特效
  - `Express` 
    - 应用程序生成器
  - `nodejs`
    - ~~`nodemon` 简介（自动重启应用）~~ 
    
- 后端
  - `C++`
  - `ASP.NET MVC4` 开发指南（阅读总结）
    - `MVC` 基本概念
    - 网址路由和 `MVC` 基本流程
    - `Model` 相关技术
    - `Controller` 相关技术
    - `View` 相关技术
    - `Area` 相关技术
  - `.NET`
    - `log4net`
- 代码规范
  - 通用
    - 什么时候要写注释如何写好注释
    - 代码的格式
    - 代码整洁之道
    - 如何写好对象和数据结构
    - 如何写好函数
- 数据库
  - **`ibatis`(待补充)**
- 文档
  - `markdown` 流程图语法 `flowchar`
  
---
## 待更新内容

- 搜索功能待调整
- 所有目录一起展开待调整
- javascript 高性能显示不全（待修复：~~应该是缓存xhr造成~~ | 还是有问题猜测是xhr返回长度限制）
- 性能文档待添加

---
## 待学习的内容
- electron 入门系列（记事本已完成，下一步需要做一个bs架构的，nodejs服务端）
- 前端性能测试 
- 循环引用（a.parent=b b.child=a）
- Puppeteer
- js 变量提升
- outerhtml与innerhtml什么区别 
- ES6 新特性
- anime 相关（官方文档翻译完待补充）
- MVVM 简介
- javascript 定时器
- C# 循环内定义还是循环外
- **mvc 开发指南 （ p344）**

---
## 一些有意思的网站

- [你不需要jquery](https://blog.garstasio.com/you-dont-need-jquery/)
- [nodejs文档](https://nodejs.org/download/release/v8.9.1/docs/api/)
- [codepen-前端各种特效，在线实时渲染](https://codepen.io/)
- [codewars-在线刷题升级](https://www.codewars.com/)
- [git](https://git-scm.com/docs)
- [经济指标](https://zh.tradingeconomics.com/)
- [svg编辑器](https://editor.method.ac/)
- [npm中文文档](https://www.npmjs.com.cn/)
- [Cloud 9 是一个非常强大的在线代码编辑器，它包含了一个完整的 Ubuntu 环境，所有的一切都是运行在云端](http://c9.io)
- [前端资源教程](https://cnodejs.org/topic/56ef3edd532839c33a99d00e)
- [pagespeed 前端性能测试](http://developers.google.cn/speed/pagespeed/insights/)


---
## 常用库、框架、工具

- jQuery
- Vue [文档](https://cn.vuejs.org/index.html)
- 模拟操作
  - Puppeteer [文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
- nodejs 
  - express [文档](https://expressjs.com/en/4x/api.html)
- 网页模板 
  - pug 模板引擎 [文档](https://pug.bootcss.com/api/getting-started.html)
- 打包工具
  - webpack [官网](https://www.webpackjs.com/)
- 开发工具
  - sublime : 最轻便
  - atom：有点厚重
  - vscode：综合最好
- github 
  - shields.io ：说明文档中各种小图标 [网址](https://shields.io/)

 
--- 

## vscode 插件

注：部分插件需要命令打开 `F1` 例如 json 编辑器 命令搜索json 开启

- Json Editor ： Json 可视化编辑器
- ESLint
- Markdown Preview Enhanced  流程图可视化



