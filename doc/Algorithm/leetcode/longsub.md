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

先对字符串做预处理，在每个字符之间插入 `#` ，这样得到的回文串都是奇数个

定义回文半径数组 `p`，`p[i]` 表示第 `i` 个字符为中心的回文串半径，那么该字符串为中心的回文串长度就为 `2p[i]-1`

定义 `mx` 是当前最长回文串的右边界，`id` 是当前最长回文串的中心

如果 `mx > i`, 则 `p[i] = min(p[2 * id - i], mx - i)`，否则 `p[i] = 1`。

代码：
```
var longestPalindrome = function (s){
    var l=s.length;
    if(l<2)
        return s;
    var ss='#'+s.split('').join('#')+'#';
    var sl=ss.length;
    var p=new Array(l);
    var mx=0,id=0,m=1,r;
    for(var i=0;i<sl;i++){
        if(i<mx){
            p[i]=Math.min(p[2*id-i],mx-1);
        }else{
            p[i]=1;
        }
        while(i-p[i]>=0&&i+p[i]<sl&&ss[i-p[i]]==ss[p[i]+i]){
            p[i]++;
        }
          if (i + p[i] > mx) {
                mx = i + p[i];
                id = i;
            }
            if(p[i]>m){
                m=p[i];
                r=i;
            }

    }
    return ss.substring(r-m+1,r+m).replace(/#/g,'');
}
```

时间复杂度是 o(n) 


时间|内存
:---:|:---:

4. 中心检测

分为奇数偶数情况