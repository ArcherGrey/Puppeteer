# 6.Z 字形变换 

题目：

将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
```
L   C   I   R
E T O E S I I G
E   D   H   N
```
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

`string convert(string s, int numRows);`

示例 1:
```
输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
```

思路：

每行用一个数组保存，最后把数组连接起来：

```
var convert = function(s, numRows) {
    if(s.length<=numRows || numRows==1)
        return s;

    var res=new Array(numRows);
    for(var j=0;j<numRows;j++)
        res[j]="";
    var curRow=0;
    var godown=false;
    for(var i=0;i<s.length;i++){
        res[curRow]+=s[i];
        // 在第一行和最后一行的时候调整方向
        if(curRow==0||curRow==numRows-1) godown=!godown;
        // 向下的时候加一向上减一
        curRow+=godown?1:-1;
    }
    var str="";
    for(var k=0;k<numRows;k++){
        str+=res[k];
    }
    return str;
};
```

时间|内存
:---:|:---:
104 ms|38 MB