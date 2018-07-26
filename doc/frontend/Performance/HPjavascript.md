# 目录
- [加载和运行](#加载和运行)
- [数据访问](#数据访问)
- [DOM编程](https://github.com/ArcherGrey/study/blob/master/JavaScript/HPjavascript/HPjavascript3.md)
- [算法和流程控制](https://github.com/ArcherGrey/study/blob/master/JavaScript/HPjavascript/HPjavascript4.md)
- [字符串和正则表达式](https://github.com/ArcherGrey/study/blob/master/JavaScript/HPjavascript/HPjavascript5.md)
- [响应接口](https://github.com/ArcherGrey/study/blob/master/JavaScript/HPjavascript/HPjavascript6.md)
- [ajax和xml](https://github.com/ArcherGrey/study/blob/master/JavaScript/HPjavascript/HPjavascript7.md)
- [编程实践](https://github.com/ArcherGrey/study/blob/master/JavaScript/HPjavascript/HPjavascript8.md)

# 加载和运行

`<script>` 标签使得整个页面因为脚本解析、运行而出现等待，无论是内联还是包含在外边文件中的 javascript 代码，在`页面下载`和`解析过程`的时候都会使页面阻塞等待这些处理完成才能继续。

因为无法预知javascript是否会对页面进行修改，所以浏览器会停下来运行javascript然后继续解析翻译页面。这个过程中，页面解析和用户交互式被完全阻塞的。

## 脚本位置

`问题`：浏览器在遇到 `<body>` 标签的时候才会开始渲染，如果将脚本文件放在之前那么将会先下载运行脚本文件再进行渲染，这样做会使得其他页面资源被阻塞，也就是网页开始加载时用户必须等待一段空白页面直到脚本下载并且运行完成。

`解决`：推荐的办法是尽量将脚本文件放在 `<body>` 标签的底部位置，尽量减少对整个页面下载的影响。 

> 将脚本放在底部

## 脚本数量

`问题`：每个 `<script>` 标签下载时都会阻塞页面解析过程，下载一个100KB的文件比四个25KB的文件要快。（因为每个文件的下载都是http请求，文件数量多了请求数量也就多了）
`解决`：将多个脚本文件整个成一个文件，只使用一个标签引用，可以通过打包工具实现。

> 脚本文件越少越好

## 非阻塞脚本

`问题`：保持脚本文件短小，限制http请求数量，只是创建反应迅速的网页应用的第一步。一个应用程序所包含的功能越多所需要的javascript代码就越多，保持源码短小并不是总能实现。尽管下载一个大的javascript文件只产生一次请求，却会锁定浏览器一大段时间，为了解决这个问题我们需要向页面中逐步添加javascript，同时不阻塞浏览器。

`解决`：非阻塞脚本的秘密在于，等页面完成加载之后，再加载javascript。也就是说在页面 load 事件完成之后开始下载代码。

主要有下面几种方式实现：
- 延期脚本：html4 为 `<script>` 标签定义了一个扩展属性 `defer`。这个属性指明所包含的脚本不会修改DOM，因此代码可以稍后执行。这个方法需要 `Internet Explorer 4` 和 `Firefox 3.5` 更高版本的浏览器支持，如果浏览器支持的话，是一种可行的解决方案。带有扩展属性 `defer`的标签可以放在文档的任何位置。（经测试chrome不支持）

例子：(如果浏览器支持就会依次弹出“script”，“defer”和“load”，不支持会是“defer”，“script”和“load”)
```
<html>
<head>
<title>Script Defer Example</title>
</head>
<body>
<script defer>
alert("defer");
</script>
<script>
alert("script");
</script>
<script>
window.onload = function(){
alert("load");
};
</script>
</body>
</html>
```
<hr>

- 动态脚本节点（dynamic script node）：DOM允许你是用javascript动态创建几乎全部文档内容，`<script>` 和其他页面元素没有什么不同，所以可以使用DOM来动态加载javascript文件，这样加载代码使得代码的下载和运行都不会阻塞其他页面处理过程，而且还可以把动态加载的脚本放在页面的任何位置而不会对其余部分的页面代码造成影响。这种方法就能在页面中动态加载很多javascript文件，是非阻塞下载中最常用的模式，因为它可以跨浏览器同时简单易用。

例子：
```
var script = document.createElement ("script");
script.type = "text/javascript";
script.src = "file1.js";
document.getElementsByTagName_r("head")[0].appendChild(script);
```
<hr>

- XHR 脚本注入：这种方法首先创建一个XHR对象然后下载javascript文件，接着使用上面动态脚本加载的方法将代码注入页面。

例子：
```
var xhr = new XMLHttpRequest();
xhr.open("get", "file1.js", true);
xhr.onreadystatechange = function(){
if (xhr.readyState == 4){
if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
var script = document.createElement ("script");
script.type = "text/javascript";
script.text = xhr.responseText;
document.body.appendChild(script);
}
}
};
xhr.send(null);
```
此代码向服务器发送一个获取file1.js 文件的GET 请求。onreadystatechange 事件处理函数检查readyState是不是4，然后检查HTTP 状态码是不是有效（2XX 表示有效的回应，304 表示一个缓存响应）。如果收到了一个有效的响应，那么就创建一个新的<script>元素，将它的文本属性设置为从服务器接收到的responseText 字符串。这样做实际上会创建一个带有内联代码的<script>元素。一旦新<script>元素被添加到文档，代码将被执行，并准备使用。
  
这种方法的主要优点是，你可以下载javascript代码而不立即执行。由于代码返回在标签之外，所以下载后不会自动执行，可以人为控制执行时机。

不过这个方法有个限制：javascript文件必须与页面放置在同一个域内，正因为这个原因，大型网页通常不使用该技术。

## 推荐的非阻塞模式
 
推荐的向页面加载大量javascript的方法有两个步骤：
1. 包含动态加载javascript所需的代码
2. 然后加载页面初始化所需的除了javascript之外的部分

这部分代码尽量小，可能只包含loadscript()函数，它的下载和运行非常迅速，不会对页面造成很大的干扰。当初始代码准备好之后，用它来加载其余的javascript。例子：
```
<script type="text/javascript" src="loader.js"></script>
<script type="text/javascript">
loadScript("the-rest.js", function(){
Application.init();
});
</script>
```
将此段代码放在 `</body>` 之前。这样做有几点好处：
1. javascript的运行不会影响页面的其他部分显示
2. 当javascript文件完成下载所有的DOM都已经创建完成，并且做好被访问的准备，避免再使用额外的事件处理（例如 window.onload）来得知页面是否已经准备好了

另一个选择是直接将 loadScript() 函数嵌入在页面中，这样可以避免另一次http请求。例如：
```
<script type="text/javascript">
function loadScript(url, callback){
var script = document.createElement ("script")
script.type = "text/javascript";
if (script.readyState){ //IE
script.onreadystatechange = function(){
if (script.readyState == "loaded" ||
script.readyState == "complete"){
script.onreadystatechange = null;
callback();
}
};
} else { //Others
script.onload = function(){
callback();
};
}
script.src = url;
document.getElementsByTagName_r("head")[0].appendChild(script);
}
loadScript("the-rest.js", function(){
Application.init();
});
</script>
```

一旦页面初始化下载完成，还可以使用loadscript()函数来加载页面所需的额外功能函数。

## 总结

javascript代码的执行和下载会阻塞浏览器的进程，减少javascript对性能的影响主要方法：
- 将所有 <script> 标签放置在页面的底部，body的底部，保证页面加载完成之前不会受到javascript脚本执行或下载的影响
- 将脚本打包，减少脚本数量，脚本越少加载越快，页面的响应越迅速，无论是内联还是外部脚本都是如此
- 使用非阻塞方式下载javascript：1.添加defer属性（对浏览器版本有要求）2.动态创建脚本 3.使用xhr对象下载脚本，并注入到页面中

对于大量使用javascript代码的网页上述方法可以极大提供网页应用的实际性能。

---

# 数据访问

数据存储在哪里，关系到代码运行期间数据被检索到的速度。在javascript中这个问题相对简单，因为数据存储是少量方式可以选择。

javascript 中有四种基本的数据访问位置：
- 直接量：包括字符串、数字、布尔值、对象、数组、函数、正则表达式，具有特殊意义的空值（null）以及未定义（undefined）
- 变量：var 关键字创建
- 数组：具有数字索引
- 对象：具有字符串索引

大多数情况下，对一个直接量和一个局部变量数据访问的性能差异是微不足道的。访问数组和对象的代价要更高一些，具体差距多少依赖于浏览器。

## 管理作用域

作用域概念是理解javascript的关键，不仅从性能的角度而且从功能的角度。作用域对javascript有许多影响，从确定那些变量可以被函数访问，到确定this的值。作用域也关系到性能。

每一个javascript函数都可以看作一个对象，换一句话说它是一个函数实例。函数对象和其他对象一样，有可以访问的属性和一系列不能被访问的仅供javascript引擎使用的内部属性，其中一个内部属性是 `scope`。

`scope`属性包含一个函数被创建的作用域中对象的集合。此集合被称为函数的作用域链，它决定那些数据可以被函数访问。函数作用域链中的每一个对象被称为一个可变对象，每一个可变对象都以 `key/value` 的形式存在。当一个函数被创建之后，它的作用域链被填充以对象，这些对象代表创建此函数的环境中可以访问的对象。

例子：
```
function add(num1, num2){
var sum = num1 + num2;
return sum;
}
```

`add` 函数创建后，它的作用域链中填入一个单独可变对象，这个对象代表了所有全局范围定义的变量。（也就是提供了一个接口来访问全局定义的变量）

在调用函数的时候会建立一个内部对象，称为运行时上下文。一个运行时上下文定义了一个函数运行时的环境。函数每次调用，都会创建不同的运行时上下文，所以多次调用同一个函数就会导致多次创建运行时上下文。当函数执行完毕，运行时上下文就会被销毁。

一个运行时上下文有自己的作用域链，用于标识符解析。当运行时上下文被创建的时候，它的作用域链被初始化。在函数运行过程中，每遇到一个变量，标识符识别过程决定从哪里获得或者存储数据，此过程搜索运行时上下文的作用域链，查找同名标识符。这种搜索过程往往会影响性能。

标识符的位置越深，读写速度越慢，所以局部变量的速度总是最快的，全局变量的速度通常是最慢的。（全局变量总是位于作用域链的最后一个位置，不过好像chrome浏览器都差不多，因为v8的优化很好）

所以在没有优化javascript引擎的浏览器中，尽可能的使用局部变量。

一般来说，一个运行时上下文的作用域链不会被改变，但是有两种方法可以临时改变：
- with 关键字，最好不要使用影响性能
- catch 子句 最好不要在子句内访问局部变量

## 动态作用域
无论是 with 还是 catch 子句还有包含 `()` 的函数，都被认为是动态作用域。一个动态作用域只因代码运行而存在，因此无法通过静态分析（代码结构）来确定是否存在动态作用域。

例子：
```
function execute(code) {
(code);
function subroutine(){
return window;
}
var w = subroutine();
//what value is w?
};
```

大多数情况下，w将等价于全局window对象，不过在 `execute("var window={};")` 的情况下，会在函数中创建一个局部的window变量，所以不允许这段代码是没有办法预先确定标识符的确切含义的。

所以在绝对必要的时候才推荐使用动态作用域。

## 闭包、作用域、内存
通常一个函数的激活对象和运行时上下文一同被销毁，但是涉及闭包的时候，激活对象就无法被销毁，因为引用依然存在于闭包的属性中，这意味着脚本中的闭包和非闭包函数相比，需要更多的内存开销，特别是在大型网页应用中，这会是一个严重的问题，同时还有可能导致内存泄漏的问题。

脚本中最好小心的使用闭包。

## 对象成员
大多数javascript代码以面向对象的形式编写，因此存在很多对象成员访问。

对象成员包括属性和方法，在javascript中，两者差别甚微，对象的一个命名成员可以包含任何数据类型，既然函数也是一种对象，那么也可以包含一个函数，当一个命名成员引用了一个函数时，它被称为一个 `方法`，而一个非函数类型的数据则被称为 `属性`。

对象成员比直接量或局部变量的访问速度要慢，在某些浏览器上甚至比数组还要慢，其中的原因就是javascript中的对象的性质决定的。

### 原形

javascript中的对象是基于原形的，原形是其他对象的基础，定义并实现一个新对象必须具有的成员。原形对象为所有给定类型的对象实例所共享，因此所有实例共享原形对象的成员。

一个对象通过一个内部属性绑定到它的原形，开发人员可以通过 `chrome` | `firefox` | `safari`浏览器看到 `__proto__`。任何时候你创建一个内置类型的实例，这些实例自动拥有一个 `object` 作为它们的原形。

因此，对象可以有两种类型的成员：
- 实例成员：存在于实例本身
- 原形成员：从对象原形继承

### 原形链
对象的原形决定了一个实例的类型，默认情况下，所有对象都是object的实例，并继承了所有基本方法。

例子：
```
function Book(title, publisher){
this.title = title;
this.publisher = publisher;
}
Book.prototype.sayTitle = function(){
alert(this.title);
};
var book1 = new Book("High Performance JavaScript", "Yahoo! Press");
var book2 = new Book("JavaScript: The Good Parts", "Yahoo! Press");
alert(book1 instanceof Book); //true
alert(book1 instanceof Object); //true
book1.sayTitle(); //"High Performance JavaScript"
alert(book1.toString()); //"[object Object]"
```

Book 构造器用于创建一个新的实例
```
book1.__proto__ = Book.prototype 
Book.prototype.__proto = Object.prototype
Object.prototype.__proto = null
```

上面就是一个原型链，原型链的深度越深，搜索的速度就会越慢。

所以，如果要多次访问同一个对象的属性，最好把它存储到一个局部变量，用局部变量代替多余的属性查找带来的性能开销。特别是在处理嵌套对象成员的时候，它们会对运行速度产生难以置信的影响。

## 总结
- 直接量和局部变量的访问速度非常快，数组和对象需要更长的时间
- 局部变量比域外变量快，因为它位于作用域链的第一个对象中。变量在作用域链中的位置越深，访问所需的时间就越长。全局变量总是最慢的，因为它们总是位于作用域链的最后一环
- 避免使用改变运行时的作用域链
- 嵌套对象成员会造成重大性能影响，尽量少用
- 一个属性或方法在原型链中的位置越深，访问它的速度就越慢
- 将经常使用的对象成员、数组项、域外变量存入局部变量中，可以提高代码的性能

---
