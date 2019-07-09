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

2. 分治法（待补充）

3. 二叉平衡树