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

1. 每行用一个数组保存，最后把数组连接起来：

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
116 ms|38.1 MB

---

2. 把每行序号算出来

```
// 按照行来遍历：
// 设置行数为r，行号为k，行内序号为i，原字符串为s
// 除去第一列，后面先上后下是一个循环
// 1. 第一行和最后一行，也就是k=0和k=r-1的时候，第i个循环对应原字符串中序号为：i*(2*r-2)+k
// 2. 其余行第i个循环字符对应的序号为：向上 i(r-1)-k 或 向下 i(r-1)+k
// 3. 序号大于原字符串长度换行

var convert = function(s, numRows) {
    var l=s.length;
    if(l<=numRows||numRows==1)
        return s;
    var ss="";
    for(var k=0;k<numRows;k++){
        var i=0;
        var m=0;
        while(m<l){
            if(k==0||k==numRows-1){    
                m=i*(2*numRows-2)+k;
                if(m<l)
                    ss+=s[m];
                i++;
            }else{
                m=i*(numRows-1)-k;    
                if(0<=m&&m<l)
                    ss+=s[m];    
                m=i*(numRows-1)+k;    
                if(m<l)
                    ss+=s[m];
                i+=2;
            }
        }
    }
    return ss;
};
```

