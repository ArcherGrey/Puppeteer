# 3. 无重复字符的最长子串

题目：

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:
```
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

思路：
用一个数组（窗口）保存最长字符串，碰到存在的字符时移动窗口的位置，从重复的下一个开始到最新的，继续直到遍历完成，每次移动窗口的时候更新最大长度。


代码：
```
var lengthOfLongestSubstring = function(s) {
    if (!s)
        return 0;
    var max = 0;
    var t = [];
    for (var i = 0; i < s.length; i++) {
        if (t.indexOf(s[i]) == -1) {
            t.push(s[i]);
        } else {
            max = t.length > max ? t.length : max;
            t = t.slice(t.indexOf(s[i]) + 1, t.length);
            t.push(s[i]);
        }
    }
    max = t.length > max ? t.length : max;
    return max;
};
```

时间|内存
:---:|:---:
192 ms|41.1 MB