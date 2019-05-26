# Memoization

> Memoization 是一种优化技术，主要用于通过存储耗时的函数调用结果来加速程序运行，再次调用时直接返回缓存，大部分在递归中使用

随着 `ajax` 兴起，客户端对服务器请求越来越密集，如果有一个良好的缓存机制，那么客户端程序的执行效率将会有显著提升。

## 斐波那契数列

一般实现斐波那契数列输出第 `n` 个数，都是使用递归：
```
function fibonacci(n){
    if(n == 0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2)
}
```

这样计算会产生很多重复数据，可以把计算过的结果暂时存储，等到下次使用直接取出：
```
var fibonacci = (function(){
    var cache = [];
    return function(n){
        if(n===0 || n===1){
            return n;
        }
        else{
            cache[n-1] = cache[n-1] || fibonacci(n-1);
            cache[n-2] = cache[n-2] || fibonacci(n-2);
            return cache[n-1] + cache[n-2];
        }
    }
})
```
