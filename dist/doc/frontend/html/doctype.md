# doctype
> `DOCTYPE` 标签是一种标准通用标记语言的文档类型声明，它的目的是要告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义（`DTD`）来解析文档


特点：
- `<!doctype>` 声明必须处于 `HTML` 文档的头部，在 `<html>` 标签之前，`HTML5` 中不区分大小写
- `<!doctype>` 声明不是一个 `HTML` 标签，是一个用于告诉浏览器当前 `HTML` 版本的指令
- 现代浏览器的 `html` 布局引擎通过检查 `doctype` 决定使用兼容模式还是标准模式对文档进行渲染，一些浏览器有一个接近标准模型。
- 在 H`TML4.01` 中 `<!doctype>` 声明指向一个DTD，由于 `HTML4.01` 基于 `SGML`，所以 `DTD` 指定了标记规则以保证浏览器正确渲染内容
- `HTML5` 不基于 `SGML`，所以不用指定 `DTD`

常见使用：

|`DTD`|说明|声明|
|:---:|:---:|:---:|
|`HTML4.01 strict`|不允许使用表现性、废弃元素（如`font`）以及`frameset`|`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`|
|`HTML4.01 Transitional`|允许使用表现性、废弃元素（如`font`），不允许使用`frameset`|`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">`|
|`HTML4.01 Frameset`|允许表现性元素，废弃元素以及`frameset`|`<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">`|
|`XHTML1.0 Strict`|不使用允许表现性、废弃元素以及`frameset`。文档必须是结构良好的`XML`文档|`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">`
|`XHTML1.0 Transitional`|允许使用表现性、废弃元素，不允许`frameset`，文档必须是结构良好的`XML`文档|`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`|
|`XHTML 1.0 Frameset`|允许使用表现性、废弃元素以及`frameset`，文档必须是结构良好的`XML`文档|`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">`|
|`HTML 5`||`<!doctype html>`|