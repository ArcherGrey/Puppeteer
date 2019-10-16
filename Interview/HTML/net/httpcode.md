# http 状态码

- 1XX:代表请求已被接受，需要继续处理。这类响应是临时响应
  - 101 协议升级 websocket
- 2XX:代表请求已成功被服务器接收、理解、并接受
  - 200 请求已成功
  - 204 无内容
- 3XX:重定向
  - 301:永久性重定向
  - 302:临时性重定向
  - 304:协商缓存
    - 浏览器缓存分为强制缓存和协商缓存，优先读取强制缓存。
      - 强制缓存分为 expires 和 cache-control，而 expires 是一个特定的时间，是比较旧的标准和 cache-control 通常是一个具体的时间长度，比较新，优先级也比较高。
      - 协商缓存包括 etag 和 last-modified，last-modified 的设置标准是资源的上次修改时间，而 etag 是为了应对资源修改时间可能很频繁的情况出现的，是基于资源的内容计算出来的值，因此优先级也较高。
      - 协商缓存与强制缓存的区别在于强制缓存不需要访问服务器，返回结果是 200，协商缓存需要访问服务器，如果命中缓存的话，返回结果是 304
- 4XX:请求错误 客户端错误
  - 400:语义有误 请求参数有误
  - 403:服务器已经理解请求，但是拒绝执行它
  - 404:请求失败，请求所希望得到的资源未被在服务器上发现
- 5XX：服务器错误
  - 500：服务器端的源代码出现错误