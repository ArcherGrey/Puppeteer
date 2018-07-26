# 安装
[下载地址](http://www.sublimetext.com/)

安装package control:[安装地址](https://packagecontrol.io/installation)
```
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```
注册码：
```
—– BEGIN LICENSE —–
TwitterInc
200 User License
EA7E-890007
1D77F72E 390CDD93 4DCBA022 FAF60790
61AA12C0 A37081C5 D0316412 4584D136
94D7F7D4 95BC8C1C 527DA828 560BB037
D1EDDD8C AE7B379F 50C9D69D B35179EF
2FE898C4 8E4277A8 555CE714 E1FB0E43
D5D52613 C3D12E98 BC49967F 7652EED2
9D2D2E61 67610860 6D338B72 5CF95C69
E36B85CC 84991F19 7575D828 470A92AB
—— END LICENSE ——

```


`emmet` 插件安装：

`preferences`->`package control`->`install package`->`emmet`

---

**Emmet**常用技巧：（输入下面简写，按Tab键可触发效果）
# html中的应用
- 生成 HTML 文档初始结构
```
html:5 或者 ! 生成 HTML5 结构
html:xt 生成 HTML4 过渡型
html:4s 生成 HTML4 严格型
```
- 生成带有id、class的HTML标签
emmet默认的标签为div，如果不给出标签名的话，默认就生成div标签。（也就是直接按tab键会生成div标签）。
编写一个class为bbb的span标签，需要编写下面指令：
```span.bbb br```
编写一个id为ccc，class为ddd的ul标签：
```ul#ccc.ddd```
- 生成后代：`>`
大于号表示后面要生成的内容是当前标签的后代。
要生成一个无序列表，而且被class为aaa的div包裹：
`div.aaa>ul>li`
生成一个有序列表:
`.abc>ol>li`
- 生成上级元素：`^`
在使用了生成下级元素的指令之后，如果想返回上级添加标签，那么需要使用 `^` 提升级别：
`div>ul>li^span`
- 重复生成多个相同的标签：`*`
特别在列表中会有多有li标签，直接在 * 后面加上数字就是相同的标签数目：
`ul>li*5`
- 生成分组：`()`
用括号进行分组，主要可以明确要生成的结构，特别是层次关系：
`div>(header>ul>li*2>a)+footer>p`
- 生成自定义属性：`[attr]`
a 标签中往往需要附带 href属性和title属性，如果我们需要生成一个href为"http://blog.wpjam.com"，title为"我爱水煮鱼"的a标签：
`a[href="http://blog.wpjam.com" title="我爱水煮鱼"]`
- 对生产内容标号：`$`
如无序列表，给五个li添加一个class属性值为item1-5，那么就需要使用$符号：
`ul>li.item1*5`
$就表示一位数字，只出现一个的话，就从1开始。如果出现多个，就从0开始。如果我想生成三位数的序号，那么要写三个 $：
`ul>li.item001*5`
只能这样单调的生成序号？对于强大的 Emmet 来说，肯定不会会了，我们也可以在 $ 后面增加 @- 来实现倒序排列：
`ul>li.item1*5`
同样，我们也可以使用 @N 指定开始的序号：
`ul>li.item3*5`
- 生成文本内容：`{}`
上面讲解了如何生成 HTML 标签，那里面的内容呢？当然也可以生成了：
`a[href="http://blog.wpjam.com"]{点击这里到 我爱水煮鱼}`
在生成内容的时候，特别要注意前后的符号关系，虽然 `a>{Click me}` 和 `a{Click me}` 生成的结构是相同的，但是加上其他的内容就不一定了。
- 不要有空格
在写指令的时候，你可能为了代码的可读性，使用一些空格什么的排版一下。这就会导致代码无法使用。

# CSS中的应用
- 简写属性和属性值

如果你想生成 width:100px; 你只需要输入 w100 就可以了，因为 Emmet 的默认设置 w 是 width 的缩写，后面紧跟的数字就是属性值。默认的属性值单位是 px ，你可以在值的后面紧跟字符生成单位，可以是任意字符。例如，w100foo 会生成 width:100foo; 这样一条语句。你同样也可以简写属性单位，如果你紧跟属性值后面的字符是 p ，那么将会生成 width:100%; 这样的语句，其中 p 表示百分比单位。与此类似的还有：e → em; x → ex

margin 这样的属性，可能并不是一个属性值，生成多个属性值需要用横杠（-）连接两个属性值，因为 Emmet 的指令中是不允许空格的。例如使用 m10-20 这条命令可以生成 margin: 10px 20px; 这样一条语句。如果你想生成负值，多加一条横杠即可。需要注意的是，如果你对每个属性都指定了单位，那么不需要使用横杠分割。例如使用 m10ff20ff 这条命令可以生成 margin: 10ff 20ff; 这条语句，如果你在 20ff 前面加了横杠的话，20ff 就会变成负值了

你想一次生成多条语句，可以使用 ‘+’ 连接两条语句，例如使用 h10p+m5e 可以生成 height: 10%;margin: 5em; 这两条语句

颜色值也是可以快速生成的，例如 c#3 → color: #333;，更复杂一点的，使用 bd5#0s 可以生成border: 5px #000 solid; 这样一句
```
#1 → #111111
#e0 → #e0e0e0
#fc0 → #ffcc00
```
生成 !important 这条语句也当然很简单，只需要一个 ‘!’ 就可以了。
- 增加额外的选项

使用 @f 即可生成 CSS3 中的 font-face 的代码结构

background-image、 border-radius、 font、@font-face、 text-outline、 text-shadow 等属性，我们可以在生成的时候输入 ‘+’ 生成增强的结构，例如我们可以输入 @f+ 命令，即可输出选项增强版的 font-face 结构

- 增加实验性前缀（Vendor Prefixes）
CSS3 等现在还没有出正式的 W3C 规范，但是很多浏览器已经实现了对应的功能，仅作为测试只用，所以在属性前面加上自己独特的实验性前缀，不同的浏览器只会识别带有自己规定前缀的样式。然而为了实现兼容性，我们不得不编写大量的冗余代码，而且要加上对应的前缀。使用 Emmet 可以快速生成带有前缀的 CSS3 属性。

内置了一些常见的需要实验性前缀的 CSS3 属性，例如输入 trf 会弹出提示，然后敲击回车键即可生成。而 Emmet 增强了这个功能。在任意字符前面加上一条横杠（-），即可生成该属性的带前缀代码，例如输入 -foo-css

虽然 foo-css 并不是什么属性，但是照样可以生成。此外，你还可以详细的控制具体生成哪几个浏览器前缀或者先后顺序，使用 -wm-trf 即可生成

w 就是 webkit 前缀的缩写，m 是 moz 前缀缩写，s 是 ms 前缀缩写，o 就是 opera 浏览器前缀的缩写。如果使用 -osmw-abc 即可生成。

- 生成渐变背景

CSS3 中新增加了一条属性 linear-gradient 使用这个属性可以直接制作出渐变的效果。但是这个属性的参数比较复杂，而且需要添加实验性前缀，无疑需要生成大量代码。而在 Emmet 中使用 lg() 指令即可快速生成，例如：使用 lg(left, #fff 50%, #000) 可以直接生成。

- 生成 Lorem Ipsum

Lorem Ipsum 表示一段随机看不懂的文字。Lorem Ipsum的文字让人看不懂，这样才能忽略内容的含义而专注内容的排版，作为测试数据填充用的。使用 Emmet 生成Lorem Ipsum 文本非常简单，只需要使用 lorem 这一条命令即可，敲击 Tab 键之后

Emmet 的 lorem 命令不仅仅只有输出这么一段文字这样一个简单的功能，它既然作为测试数据，可以加上参数指定要输出的字符数量。例如，我们如果想输出一个十个单词的 h1 标题，我们就可以使用如下命令 h1>lorem10 。但是这项功能对于使用中文的网页测试来说，好像没有多大用处，毕竟中文和英语单词的排版是不同的。

- 跳转编辑区域

用 Shift+Ctrl+. 和 Shift+Ctrl+,分别向下或者向上移动，选取的是一整块，先从标签开始，再是整个属性，再是属性值。

- 增加图片的尺寸大小

将光标移动到代码段，摁下 Ctrl+U 即可让 Emmet 自动读取图片的尺寸添加上。前提条件是图片比较存在并且正确引用进来了
针对  标签的，会在后面加上 width、height 属性，如果是 background 引入的，会在下面加上 width、height 的 CSS 属性

- 更新 CSS 的属性值

想修改一下旋转的角度值，那么我们就需要依次修改或者按住 Ctrl 多个选中进行修改。使用 Emmet 的话，就方便多了，我们只需要修改其中一个，然后摁下 Shift+Ctrl+R 键即可更新其他的相关属性值

- 将图片资源转换成 data url 形式

将光标移动到 background: url() 中的图片位置的地方，按下 Ctrl+’ 即可将图片编码成 data url 格式。当然，前提条件是图片资源引用正确。