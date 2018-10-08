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
- vue
- element (配合vue的ui框架)
- marked.js (解析markdown文件)
- anime (动画库)

~~难点（和问题差不多以后都写在问题中）：~~
- markdown文件读取（通过xhr来读取文件）
- 菜单树形结果存储（对象数组）
- 缓存xhr导致修改md没效果
- 缓存js导致js修改没效果(未发现影响)


## 问题 （加粗首要|删除线已完成|斜体待观察）
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
 
## 一些有意思的网站

- [你不需要jquery](https://blog.garstasio.com/you-dont-need-jquery/)
- [nodejs文档](https://nodejs.org/download/release/v8.9.1/docs/api/)
- [codepen-前端各种特效，在线实时渲染](https://codepen.io/)
- [codewars-在线刷题升级](https://www.codewars.com/)
- [git](https://git-scm.com/docs)
- [经济指标](https://zh.tradingeconomics.com/)
- [svg编辑器](https://editor.method.ac/)
- []()
- []()
  
 ## 注

 - dom 相关都放到 `html` 部分
 
