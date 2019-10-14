只列举最简单最常用的

# 水平居中

- 行内元素：`text-align:center`
- 块级：`margin:0 auto`
- 外层是非`position:static`，内部设置`position:absolute`，然后先`left:50%`，最后`transform(-50%,0)`
- 外层设置`display:flex`和`justify-content: center`


# 垂直居中

- 行内单行 `line-height`设置为外层的高度，多行设置为高度除以行数
- 外层是非`position:static`，内部设置`position:absolute`，然后先`top:50%`，最后`transform(0,-50%)`
- 外层设置`display:flex`和`align-items: center`


# 水平垂直

- 外层是非`position:static`，内部设置`position:absolute`，然后先`left:50%; top:50%`，最后`transform(-50%,-50%)`
- 外层设置`display:flex`和`align-items: center;justify-content: center`
