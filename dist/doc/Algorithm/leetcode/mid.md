# 4.寻找两个有序数组的中位数

题目:

给定两个大小为 `m` 和 `n` 的有序数组 `nums1` 和 `nums2`。

请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 `O(log(m + n))`。

你可以假设 `nums1` 和 `nums2` 不会同时为空。

示例 1:
```
nums1 = [1, 3]
nums2 = [2]
```
则中位数是 `2.0`


思路：

1. 暴力法

合并数组，排序，找到中位数

代码：

```
var findMedianSortedArrays = function(nums1, nums2) {
    var x=[];
    x=x.concat(nums1,nums2);
    x.sort((a,b)=>{return a-b;})
    return x.length%2==0?(x[(x.length>>1)-1]+x[x.length>>1])/2:x[x.length>>1];
};
```
时间|内存
:---:|:---:
164 ms|39.4 MB

2. 递归法

将长度为 `m` 数组 `a` 分成两部分：

left_a|right_a
:-:|:-:
a[0] a[1] ... a[i-1] | a[i] a[i+1] ... a[m-1] 

同样的长度为 `n` 数组 `b`:

left_b|right_b
:-:|:-:
b[0] b[1] ... b[j-1] | b[j] b[j+1] ... b[n-1] 

将左边右边分别放在一块：

left|right
:-:|:-:
left_a|right_a
left_a|right_b

如果可以确认：
- len(left)=len(right)
- max(left)<=min(right) 

中位数就是 (max(left)+min(right))/2:

```
var findMedianSortedArrays = function(nums1, nums2) {
    var n=nums1.length;
    var m=nums2.length;
    if(n>m){
        return findMedianSortedArrays(nums2,nums1);
    }

    var lmax1,lmax2,rmin1,rmin2,c1,c2,l=0,h=2*n;
    while(l<=h){
        c1=l+h>>1;
        c2=m+n-c1;
        lmax1 = c1 == 0?-Infinity:nums1[(c1 - 1) >> 1];
        rmin1 = (c1 == 2 * n) ? Infinity : nums1[c1 >> 1];
		lmax2 = (c2 == 0) ? -Infinity : nums2[(c2 - 1) >> 1];
		rmin2 = (c2 == 2 * m) ? Infinity : nums2[c2>>1];
        if(lmax1>rmin2)
            h=c1-1;
        else if(lmax2>rmin1)
            l=c1+1;
        else break;
    }
    var a=lmax1>lmax2?lmax1:lmax2;
    var b=rmin1<rmin2?rmin1:rmin2;
    return (a+b)/2
};

```

时间|内存
:---:|:---:
152 ms|39.1 MB







3. 二叉平衡树