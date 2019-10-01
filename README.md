# 文档合集

单页面  静态页面

安装：
- 需要 nodejs 环境
- npm install 
- npm start

[地址](https://archergrey.github.io/document/dist)



## 分支vue

<div style="color: red;">

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

问题解决：
- 解决点击展开所有menu的问题，由于index 设置一样导致所有都展开，index 不同即可 
- 底部添加回到顶部按钮（待修改为下拉滑动条显示）
- 添加Breadcrumb 面包屑，显示当前页面的路径，快速返回之前的任意页面
- vue 初次加载显示 {{xxx}} （添加 v-cloak在解析完成之前隐藏，详见vue文档）

**之前是vue写的，在branch分支**

</div>

-------------------------------------------------------------------------------------------

---
## 待更新内容

- 更新顶部：添加按照标题搜索功能（功能暂无）
- 文章目录


---
## 内容目录

<font color='red'>注： `dom` 相关都放到 `html` 部分</font>


- 前端
  - `Vue`
    - [x] 初次加载显示 {{xxx}}
    - [ ] 双向绑定
  - 开发工具
    - [x] sublime 安装和使用技巧
  - 原生 javascript 难点
    - [x] 包装对象
    - [x] 原型链
    - [x] `this`
    - [x] `call | apply | bind` (待补充)
    - [x] 特殊技巧 (待补充)
    - [x] `json` 和 `jsonp`
    - [x] 闭包
    - [x] 执行上下文、作用域、作用域链
    - [x] 模块化
    - [x] 内存管理
    - [x] 执行机制
    - [x] 深拷贝和浅拷贝（引用传递和值传递）
    - [x] `==` 和 `===`
    - [x] 分号结尾的问题
    - [x] 类型转换（待补充）
    - [x] 类型判断
    - [x] 设计模式
    - [x] `Memoization`
    - [x] `new` 做了什么
    - [x] `JavaScript` 中的继承 (待补充)
    - [ ] `JavaScript` 异步
    - [x] `JavaScript` 创建对象
    - [x] 防抖和节流
  - `WebGL`
    - [x] `[threejs入门-1] hello,Three.js`
    - [x] `[threejs入门-2] 创造一个世界`
    - [x] `[threejs入门-3] 探索和互动`
  - 性能优化
    - ~~javascript 高性能（阅读总结）~~（<font color='red'>待修改</font>）
  - `JQuery`
    - [x] 一步步实现 `jQuery`
  - `浏览器`
    - ~~浏览器内部工作原理 （待补充）~~
    - ~~`DOM API` （待补充）~~
    - ~~`file` 协议（待补充）~~
    - [x] `doctype`
    - [x] `cookie 和 session`
    - [x]  `sessionStorage | localStorage`
    - [待更新](https://juejin.im/post/5a6547d0f265da3e283a1df7)
    - [ ] `svg` 
    - [ ] `canvas` 
    - [x] `Iconfont` 矢量图图标使用说明
    - [ ] `HTTP` 请求/响应报文
  - `css`
    - [ ] `em px` 长度
    - [x] 盒模型
    - [x] 水平垂直居中
    - [x] 页面布局
    - [ ] 解析顺序
    - [ ] 开启GPU加速
  - 可视化效果
    - [x] 粒子特效
  - `Express` 
    - [x] 应用程序生成器

 
    
- 后端
  - `nodejs`
    - [x] `nodemon` 简介（自动重启应用） 
  - `C++`
  - `ASP.NET MVC4` 开发指南（阅读总结）
    - [x] `MVC` 基本概念
    - [x] 网址路由和 `MVC` 基本流程
    - [x] `Model` 相关技术
    - [x] `Controller` 相关技术
    - [x] `View` 相关技术
    - [x] `Area` 相关技术
  - `.NET`
    - [x] `log4net`
- 代码规范
  - 通用
    - [x] 什么时候要写注释如何写好注释
    - [x] 代码的格式
    - [x] 代码整洁之道
    - [x] 如何写好对象和数据结构
    - [x] 如何写好函数
- ~~数据库（待补充）~~
  - **`ibatis`(待补充)**
- 文档
  - `markdown`
    - [x] `markdown` 流程图语法 `flowchar`
  
- 版本控制
  - `git`
    - [x] `git 常用点` 

- 算法
  - 常用
    - [x] 二分查找
    - [x] 快速排序
  - `leetcode`
    - [x] 1.两数之和
    - [x] 2.两数相加
    - [x] 3.无重复字符的最长子串
    - [x] 4.寻找两个有序数组的中位数 
    - [x] 5.最长回文子串
    - [x] 6.Z 字形变换 
    - [x] 7.整数反转

- 网络
  - TCP
    - [ ] 三次握手四次挥手




---
## 待学习的内容
- electron 入门系列（记事本已完成，下一步需要做一个bs架构的，nodejs服务端）
- 前端性能测试 
- 循环引用（a.parent=b b.child=a）
- Puppeteer
- js 变量提升
- outerhtml与innerhtml什么区别 
- **ES6 新特性**
- anime 相关（官方文档翻译完待补充）
- MVVM MVC
- C# 循环内定义还是循环外 
- websocket
- signalR

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
- [算法练习](https://leetcode-cn.com/)
- [javascript比赛](https://2019.js13kgames.com/)
- [语雀](https://www.yuque.com/)


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
- chrome 插件
  - FeHelper
- 图标
  - [阿里巴巴矢量图标库](https://www.iconfont.cn/)

 
--- 

## vscode 插件

注：部分插件需要命令打开 `F1` 例如 json 编辑器 命令搜索json 开启

- Json Editor ： Json 可视化编辑器
- ESLint
- Markdown Preview Enhanced  流程图可视化



