# CSS 盒模型

在`CSS`中所有元素都被一个个盒子包围，理解盒模型的基本原理是使用`CSS`实现准确布局、处理元素排列的关键。

## 块级盒和内联盒

通过设置 `display` 来控制盒子外部显示类型。
盒子内部显示类型决定盒子内部元素如何布局，默认情况是正常流布局。

最广泛应用的两种盒：
- 块级盒 `block box`：
    - 盒子在内联方向上扩展并占据父容器在该方向上的所有可用空间，在绝大多数情况下意味着盒子和父容器一样宽
    - 盒子之间会换行
    - `width` 和 `heigth` 生效
    - `padding margin border` 会将其他元素从当前盒子周围推开
- 内联盒 `inline box`：
    - 不会换行
    - `width height` 不生效
    - `padding margin border` 生效但是不会推开其他 `inline box`


## 什么是盒模型

完整的盒模型应用于块级盒子，内联盒子只使用盒模型定义中的部分内容，模型定义了盒子的每个部分：
- `margin`：显示内容，大小通过`width height`设置
- `border`：包围在内容外部的空白区域，大小通过`padding`设置
- `padding`：包裹内容和内边距，大小通过`border`设置
- `content`：盒子和其他元素之间的空白区域，大小通过`margin`设置


如下图：
![](https://user-gold-cdn.xitu.io/2019/10/14/16dc843e17da5704?w=569&h=308&f=png&s=11716) 

### 标准盒

在标准模型中，给盒子设置`width height`，实际设置的是`content box`

假设下面是一个盒子的样式：
```
.box {
  width: 350px;
  height: 150px;
  margin: 25px;
  padding: 25px;
  border: 5px solid black;
}
```

使用标准模型的宽度 = 410（350+25+25+5+5） 也就是 `width+padding+border`

> 注: `margin` 不计入实际大小，当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止，不会延伸到 `margin`。


### 替代（IE）盒模型


你可能会认为盒子的大小还要加上边框和内边距，这样很麻烦，而且你的想法是对的! 因为这个原因，`css`还有一个替代盒模型。使用这个模型，所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分。

默认浏览器会使用标准模型。如果需要使用替代模型，您可以通过为其设置 `box-sizing: border-box` 来实现。 这样就可以告诉浏览器使用 `border-box` 来定义区域，从而设定您想要的大小。