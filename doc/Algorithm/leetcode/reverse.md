# 7.整数反转

```
// 如果是负数，转换成字符串去掉符号位转换成数组翻转转换成数字再乘以-1

var reverse = function (x) {
    var r;
    if (x < 0) {
        r = Number(x.toString().substr(1).split('').reverse().join('')) * (-1)
        return r < Math.pow(2, 31) - 1 && r > -1 * Math.pow(2, 31) ? r : 0;
    }
    r = Number(x.toString().split('').reverse().join(''));
    return r < Math.pow(2, 31) - 1 && r > -1 * Math.pow(2, 31) ? r : 0;
};
```