# 1.两数之和
问题：

给定一个整数数组 `nums` 和一个目标值 `target`，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 `nums = [2, 7, 11, 15], target = 9`

因为 `nums[0] + nums[1] = 2 + 7 = 9`
所以返回 `[0, 1]`



思路：

1. 暴力法

暴力法很简单，遍历每个元素 `xx`，并查找是否存在一个值与 `target - x` 相等的目标元素:

```
var twoSum = function(nums, target) {
     for(var i=0;i<nums.length;i++){
           for(var j=i+1;j<nums.length;j++){
               if(nums[i]+nums[j]==target)
                   return [i,j];
           }
       })
};
```

复杂度分析：

时间复杂度：`O(n^2)`， 对于每个元素，我们试图通过遍历数组的其余部分来寻找它所对应的目标元素，这将耗费 `O(n)` 的时间。因此时间复杂度为 `O(n^2)`

空间复杂度：`O(1)`


时间|内存
:---:|:---:
152 ms|34.7 MB

2. 利用 `hash` 表，把 `target` 和当前值的差作为索引，当前值的索引作为值保存，每次判断表中是否有值，存在则返回：

```
var twoSum = function(nums, target) {
    var a=[];
    for(var i=0;i<nums.length;i++){
        if(a[nums[i]]!=undefined) return [a[nums[i]],i];
        a[target-nums[i]]=i;
    }
};
```
复杂度分析：
- 时间复杂度 `O(n)`
- 空间复杂度 `O(n)`


时间|内存
:---:|:---:
84 ms|34.4 MB