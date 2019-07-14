# 5.最长回文子串

题目：

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：
```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

思路：

1. 暴力法：

把每个子串从长到短依次判断是否是回文

时间复杂度 O(n<sup>3</sup>)

会超时

2. 动态规划

索引从i到j的子串是是否是回文结果是`dp[i][j]`
只有在下面情况下为真：
```
1. i=j
2. s[i]==s[j] j=i+1
3. s[i]==s[j] && dp[i+1][j-1] j>i+1
```
时间复杂度是O(n<sup>2</sup>)，空间复杂度也是

代码：
```
var longestPalindrome = function (s) {
    var l = s.length;
    // 初始化结果矩阵
    var dp = new Array(l);
    for (var i = 0; i < l; i++) {
        dp[i] = new Array(l);
    }
    var max = 1; // 最长子串长度
    var start = 0; // 最长子串起点
    for (var j = 0; j < l; j++)
        for (var i = 0; i <= j; i++) {
            if (i == j) {
                dp[i][j] = true;
            } else if (j == i + 1 && s[i] == s[j]) {
                dp[i][j] = true;
            } else if (j - i > 1 && s[i] == s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
            }
            if (j - i + 1 > max && dp[i][j]) {
                max = j - i + 1;
                start = i;
            }
        }
    return s.substring(start, start + max);
}
```

时间|内存
:---:|:---:
468 ms|79.9 MB


3.  Manacher 算法

代码：
```
// Manacher 算法

// 1. 预处理：在每个字符串之间加入# 使得到的回文串都是奇数长度
// 2. 设置 p[i] 保存第i个字符为中心的回文长度，最长回文串的最右边节点mr，中心节点mp
// 3. 遍历字符串：
//     1. 当i<mr时可以利用回文特性，以md为中心，i的对称点j=2mp-i：
//         1.1 当p[j]<mr-i，说明j的回文在最长回文内部，由对称性得到p[i]=p[j]
//         1.2 当p[j]>=mr-i,p[i]>=mr-i，mr后面的需要去匹配
//     2. 其他情况就需要匹配


var longestPalindrome = function (s) {
     ss = "#" + s.split("").join("#") + "#";
    var p = new Array(s.length);
    var mr = 0;
    var mp = 0;
    for (var i = 0; i < ss.length; i++) {
        if (i < mr) {
            var j=2 * mp - i;
            p[i] = p[j] > mr - i ? mr - i : p[j];
        } else {
            p[i] = mp > i ? Math.min(p[2 * mp - i], mr - i) : 1;
        }
        while(i-p[i]>=0&&i+p[i]<ss.length&&ss[i-p[i]]==ss[i+p[i]]){
            p[i]++;
        }
        if(p[i]>mr-mp){
            mr=p[i]+i-1;
            mp=i;
        }
    }
    return ss.substring(2*mp-mr,mr+1).replace(/#/g,"");
}
```

时间复杂度是 o(n) 


时间|内存
:---:|:---:
96 ms|37.7 MB

4. 中心检测

分为奇数偶数情况