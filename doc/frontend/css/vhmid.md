# 水平垂直居中

## 水平居中

- 行内元素：给父元素设置 `text-align:center`
- 块级元素：该元素设置 `margin:0 auto`
- 若子元素包含 `float:left` 属性, 为了让子元素水平居中, 则可让父元素宽度设置为fit-content,并且配合margin, 作如下设置:
.parent{
      width: -moz-fit-content;
    width: -webkit-fit-content;
    width:fit-content;
    margin:0 auto;
}复制代码fit-content是CSS3中给width属性新加的一个属性值,它配合margin可以轻松实现水平居中, 目前只支持Chrome 和 Firefox浏览器.
