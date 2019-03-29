# `Model` 相关技术

- [`Model` 的责任](#1)
- [开发 `Model` 的基本观念](#2)
  - [`ORM` 简介](#2.1)
  - [`LocalDB` 介绍](#2.2)
  - [代码优先开发模式](#2.3)
- [数据注解](#3)


<span id='1'></span>
## `Model` 的责任

`Model` 负责所有和数据有关的任务，不管是 `Controller` 或者是 `View` 都会参考 `Model` 里定义的所有数据形态，或者用到 `Model` 里定义的一些数据操作方法，例如：增删改查等。

`Model` 不负责处理所有和数据无关的事，只专注于如果有效率的提供数据访问机制、交易环境、数据格式验证、商业逻辑验证
等工作。

<span id='2'></span>
## 开发 `Model` 的基本观念

要充分发挥 `MVC` 快速开发的又是，在 `Model` 层采用 `ORM` 信息访问技术来开发

<span id='2.1'></span>
### `ORM` 简介

`ORM` 全名是 `Oject Relational Mapping`，翻译过来就是对象关系映射，用于实现面向对象程序语言中，不同类型系统之间的数据转换，例如 `SQL server` 中的关系型数据和 `.NET` 型对象之间的转换等。


不同的数据库，在设计逻辑和 `SQL` 语法上都会有些差异，导致开发数据访问的开发缺乏效率，为了解决这个问题，利用`ORM` 来把结构化的关系型数据，映射成面向对象模型，让我们可以专注于数据本身。

数据库开发模式：
- 数据库优先开发模式
- 模型优先开发模式
- 程序代码优先开发模式


<span id='2.2'></span>
### `LocalDB` 介绍

运行方式：
- 实例差异：安装时会复制一个 `SQL Server Express` 实例所需的最少文档，`LocalDB` 基本等同于完整的 `SQL Server Express` 数据库引擎，且以 `LocalDB` 方式启动 `SQL Server Database Engine` 实例
- 实例类型：
  - 自动实例
    - 公用的 
    - 安装完后的 `v11.0` 就是自动实例，每个用户都可以创建自己的实例
    - 每个版本都有自己的自动实例
  - 具名实例：
    - 私有的
    - 由负责创建和管理实例的用户或者应用程序所拥有
    - 不同用户默认无法访问自定义的具名实例，除非开启分享功能
- 实例的系统数据库：`%LOCALAPPDATA%\Microsoft\Microsoft SQL Server Local DB\Instances` 
- 实例的用户数据库：在系统盘的用户目录下

连接实例：
1. 使用 `SQL Server 2012 Management Studio` 管理工具连接实例，只要在连接对话框中输入正确的服务器名称即可
2. 通过 `.NET` 程序连接实例：
- 不指定数据库的情况下，连接字符串：
```
Server = (localdb)\v11.0;Integrated Security = true
```
- 如果要指定数据库连接，可以指定 `Initial Catalog` 参数：
```
Server = (LocalDB)\v11.0;Integrated Security = true;
Initial Catalog = ContactDB
```
- 如果要指定数据库文档连接，需要指定 `AttachDbFileName`：
```
Server = (LocalDB)\v11.0;Integrated Security = true;
AttachDbFileName = D:\Data\MyDB1.mdf
```

管理实例：

0. 通过 `SqlLocalDB.exe` 工具程序来管理实例，具体目录一般在：`C:\Program\Microsoft SQL Server\110\Tools\Binn\SqlLocalDB.exe` （其中 `110` 根据不同版本不一样）
1. 启动实例：`SqlLocalDB.exe start 实例名`
2. 查询实例信息：`SqlLocalDB.exe info 实例名` （后面不写实例名就是列出所有实例）
3. 停止实例：`SqlLocalDB.exe stop 实例名`
4. 创建实例：`SqlLocalDB.exe create 实例名`
5. 删除实例：`SqlLocalDB.exe delete 实例名`

<span id='2.3'></span>
### 代码优先开发模式

创建数据模型和创建通用 `C#` 类没有区别：
```
public class Book{
    public int Id {get;set;}
    public string Name {get;set;}
    public string Message {get;set;}
}
```
这段程序会自动在数据中创建一个名为 `Guestbook` 的表

`Entity Framework` 自动创建数据库结构过程：
1. 声明主键：在 `Entity Framework` 中声明主键，最简单的方式就是直接把属性名称设置为 `Id` 或者属性名称中有 `Id` ，并将该属性指派为 `int` 类型，代码优先模式会自动识别这个字段是主键，并加上自动编号的识别规格设置，
如果不是这样命名就需要加上 `Key` 属性：
```
[Key]
public int No { get; set; }
```
2. 声明必填字段：加上 `Required` 属性：
```
[Required]
public string Name { get; set;}
```
3. 声明允许 `NULL` 字段：类型声明后加上一个 `?` :
```
public DateTime? CreatedOn { get; set;}
```
4. 声明字段长度：属性加上一个 `MaxLength`:
```
[MaxLength(5)]
public string Name { get; set;}
```

---

<span id='3'></span>
## 数据注解

作用：
- 数据映射：把类通过 `EntityFramework` 映射成对应的表
- 数据验证：在服务器端和客户端验证数据的有效性
- 数据显示：在 `View` 显示相应的数据

相关的命名空间：
- `System.ComponentModel.DataAnnotations`
- `System.ComponentModel.DataAnnotations.Schema`
- `System.Web.Mvc`
- `System.Web.Security`

`DataAnnotations` 包含主要的数据注解，`Schema` 包含一些数据映射的数据注解，`Mvc` 中包含字符、数组、数值长度、属性比较的数据注解，`Security` 包含 `MemberShipPassword` 注解特性。

数据映射和验证相关：

|名称|说明|
|:---:|:---:|
`[Required]`|必填字段
`[MaxLength]`|指定属性中允许的数组或字符串数据的最大长度
`[MinLength]`|指定属性中允许的数组或字符串数据的最小长度
`[StringLength]`|指定最小和最大字符长度
`[Range]`|指定数值范围

数据验证相关：

|名称|说明|
|:---:|:---:|
`[Remote]`|使用 `jQuery` 验证插件远程验证程序的特性
`[FileExtension]`|验证文件扩展名
`[Compare]`|比较两个属性的值
`[RegularExpression]`|使用正则表达式验证
`[CustomValidation]`|自定义验证方法
`[DataType]`|指定要与数据字段关联的附加类型的名称
`[EmailAddress]`|电子邮件地址
`[Phone]`|电话
`[CreditCard]`|信用卡号
`[url]`|验证 `url`
`[MemberShipPassword]`|验证密码字段是否满足成员资格提供程序的当前密码要求

数据映射相关：

|名称|说明|
|:---:|:---:|
`[Key]`|主键字段
`[Column]`|数据库列属性映射
`[NotMapped]`|不要创建对应的字段
`[Table]`|指定类将映射到的数据库表
`[ForeignKey]`|表示关系中用作外键的属性
`[DatabaseGenerated]`|指定数据库生成属性值的方式

数据显示相关：

|名称|说明|
|:---:|:---:|
`[DisplayName]`|指定本地化的字符串（习惯用语类）
`[Display]`|指定本地化的字符串（习惯用语属性）
`[DisplayFormat]`|设置数据字段的格式
`[ReadOnly]`|指定该特性所绑定的属性是只读属性还是读/写属性
`[EditAble]`|指示数据字段是否可编辑
`[HiddenInput]`|指示是否将属性值或字段值呈现为隐藏的元素
`[ScaffoldColumn]`|指定类或数据列是否使用基架
`[UIHint]`|指定动态数据用来显示数据字段的模板

其他：

|名称|说明|
|:---:|:---:|
`[DisplayColumn]`|将所引用的表中显示的列指定为外键列
`[Description]`|可视化设计器在引用组件成员时可以显示指定的说明

