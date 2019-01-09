# `log4net` 文档 
[参考网址](http://logging.apache.org/log4net/index.html)


<div id='directory'>

- [简介](#1)
  - [特性](#1.1)

</div>

<span id='1'></span>
## 简介

`log4net` 库是一个帮助程序员将日志语句输出到各种输出目标的工具，是 `Apache log4j` 框架在 `.net` 环境下的实现。

<span id='1.1'></span>
### 特性

- 支持多个框架：`log4net` 在所有 `ECMA CLI 1.0` 兼容的运行时上运行。 `log4net` 具有以下框架的特定构建：
  - `.NET Core 1.0 - using netstandard-1.3`
  - `Microsoft® .NET Framework 1.0*`
  - `Microsoft .NET Framework 1.1*`
  - `Microsoft .NET Framework 2.0`
  - `Microsoft .NET Framework 3.5`
  - `Microsoft .NET Framework 4.0`
  - `Microsoft .NET Framework 4.5`
  - `Microsoft .NET Framework 3.5 Client Profile`
  - `Microsoft .NET Framework 4.0 Client Profile`
  - `Microsoft .NET Compact Framework 1.0*`
  - `Microsoft .NET Compact Framework 2.0*`
  - `Mono 1.0*`
  - `Mono 2.0`
  - `Mono 3.5`
  - `Mono 4.0`
  - `Microsoft Shared Source CLI 1.0*`
  - `CLI 1.0 Compatible*`

  `客户端配置文件` 版本是 `普通` 版本的精简版，不包含任何 `ASP.NET` 相关代码，例如 `%aspnet- *` 模式和 `AspNetTraceAppender` 不可用。

  带有 `*` 的二进制版本不支持，但可以从源版本构建。

- 可以输出到多个日志记录目标：`log4net` 附带以下 `appender`（不在所有框架上，具体表格详见官网）
- 分层日志记录体系结构：分层日志记录非常适合基于组件的开发，每个组件都有自己的记录器。单独测试时，可以根据开发人员的要求设置这些记录器的属性。当与其他组件结合使用时，记录器将继承由组件的集成商确定的属性。 可以选择性地提升一个组件上的日志记录优先级，而不会影响其他组件。 当您需要来自单个组件的详细跟踪而不会将跟踪文件与来自其他组件的消息一起拥挤时，这非常有用。所有这些都可以通过配置文件来完成，不需要更改代码
- `XML` 配置：配置信息可以嵌入其他 `XML` 配置文件（例如应用程序的 `.config` 文件）或单独的文件中。 该配置易于阅读和更新，同时保留了表达所有配置的灵活性。或者，可以通过编程方式配置 `log4net`。
- 动态配置：`log4net` 可以监视其配置文件中的更改并动态应用配置程序所做的更改。可以在运行时调整日志记录级别，`appender`，布局以及其他所有内容。在许多情况下，可以在不终止相关过程的情况下诊断应用程序问题。这可以成为调查已部署应用程序问题的非常有价值的工具。
- 记录上下文：`log4net` 可用于以对日志记录点开发人员透明的方式收集日志记录上下文数据。`GlobalContext` 和`ThreadContext` 允许应用程序存储附加到日志消息的上下文数据。 例如，在 `Web` 服务中，一旦调用者被认证，调用者的用户名就可以存储在 `ThreadContext` 属性中。 然后，此属性将自动记录为从同一线程发出的每个后续日志记录消息的一部分。
- 被验证过的体系结构：基于非常成功的 `Apache log4j™` 日志库，自1996年开始开发。这种流行且经过验证的体系结构迄今已被移植到12种语言中。

- 模块化和可扩展的设计
- 高性能和灵活性
