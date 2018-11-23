# 文档合集

`markdown`：
- **markdown的锚点跳转标签必须是英文小写(全部都要)**
- **锚点多个单词之间可以使用`-`连接**

> `index.js` 中添加新文章

[地址](https://archergrey.github.io/document/)

布局：
- 左侧菜单中是类别目录，点击后再中央区域显示具体文章
- 系列文档放在首页跑马灯中

技术栈：
- `vue`
- `element` (配合 `vue` 的 `ui` 框架)
- `marked.js` (解析 `markdown` 文件)
- `anime` (动画库)

---
## 内容目录



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
  - `WebGL`
    - `[threejs入门-1] hello,Three.js`
    - `[threejs入门-2] 创造一个世界`
    - `[threejs入门-3] 探索和互动`
  - 性能优化
    - ~~javascript 高性能（阅读总结）~~（<font color='red'>待修改</font>）
  - `JQuery`
    - 一步步实现 `jQuery`
  - `html`
  - `css`
  - 可视化效果
    - 粒子特效
  - `Express` 
    - 
    
- 后端
  - `C++`
  - `ASP.NET MVC4` 开发指南（阅读总结）
    - `MVC` 基本概念
    - 网址路由和 `MVC` 基本流程
    - `Model` 相关技术
    - `Controller` 相关技术
    - `View` 相关技术
    - `Area` 相关技术
- 代码规范
  - 通用
    - 什么时候要写注释如何写好注释
    - 代码的格式
    - 代码整洁之道
    - 如何写好对象和数据结构
    - 如何写好函数
---
## 问题 （加粗首要|删除线已完成|斜体待观察）
- ~~markdown文件读取（通过xhr来读取文件）~~
- ~~菜单树形结果存储（对象数组）~~
- ~~缓存xhr导致修改md没效果~~
- 缓存js导致js修改没效果(未发现影响)
- ~~待添加代码规范文档内容（已完成待观察)~~
- **考虑添加一个动画（无限剑制）位置待定**
- **网页top功能添加**
- ~~点击新页面没有返回top（已解决）~~
- 带有目录的文档现在无法跳转（中文锚点无法跳转：修改为英文小写）
- ~~目录字体样式待调整~~
- 下拉菜单功能待调整
- 搜索功能待调整
- 所有目录一起展开待调整
- javascript 高性能显示不全（待修复：~~应该是缓存xhr造成~~ | 还是有问题猜测是xhr返回长度限制）
- ~~增加鼠标停留时显示提示信息（待观察）~~
- ~~解决目录名字过长产生滑动条的问题（横向）~~
- ~~添加首页跑马灯~~
- ~~backtoindex(回到首页) 待添加~~(都通过goto来跳转)
- ~~goto (首页跳转) 待添加~~
- 性能文档待添加
- ~~首页跑马灯图片添加~~
- ~~跑马灯大小比例待调整~~
- ~~跑马灯中图片添加点击事件无效~~(img不是组件不需要native绑定事件)
- ~~需要调整一下目录结构~~
---
## 待学习的内容
- electron 入门系列（记事本已完成，下一步需要做一个bs架构的，nodejs服务端）
- 前端性能测试 
- 循环引用（a.parent=b b.child=a）
- ~~浅拷贝深拷贝~~
- ~~json 和 jsonp 简介~~
- Puppeteer
- ~~闭包~~
- ~~js模块化~~
- ~~js 作用域~~
- js 变量提升
- outerhtml与innerhtml什么区别 
- ES6 新特性
- anime 相关（官方文档翻译完待补充）
- MVVM 简介
- ~~javascript 内存管理~~
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
  
---
## 常用库、框架

- jQuery
- Vue [文档](https://cn.vuejs.org/index.html)
- Puppeteer [文档](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
- express [文档](https://expressjs.com/en/4x/api.html)
- nodejs 
---
 ## 注

 - dom 相关都放到 `html` 部分
 

