# `Express` 应用程序生成器

通过该工具可以快速创建一个应用骨架（对于初学者有研究学习价值）

包含了 `express` 命令行工具

安装：
```
// 全局安装
$ npm install express-generator -g
```

`-h` 参数可以列出所有可用的命令行参数：
```
$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          输出使用方法
        --version       输出版本号
    -e, --ejs           添加对 ejs 模板引擎的支持
        --hbs           添加对 handlebars 模板引擎的支持
        --pug           添加对 pug 模板引擎的支持
    -H, --hogan         添加对 hogan.js 模板引擎的支持
        --no-view       创建不带视图引擎的项目
    -v, --view <engine> 添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）
    -c, --css <engine>  添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文件）
        --git           添加 .gitignore
    -f, --force         强制在非空目录下创建
```

## 创建流程
1. 在创建不带视图引擎的项目 `test`：
```
express --no-view test
```

2. 安装所有依赖包：
```
cd test
npm install
```

3. 启动项目：
```
// MacOs & Linux
DEBUG = test:* npm start

// windows
set DEBUG=test:* &npm start
```

4. 在浏览器中访问  `http://localhost:3000/` 就可以看到了


通过生成器创建的应用一般有如下目录（带模板）：
```
.
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

```