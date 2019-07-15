# 2. 两数相加

问题：

给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：
```
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
```

思路：
1. 同时遍历两个链表`a` `b`，设置进位标志 `f` 初始为0，相加大于9，标志置为1，除了第一位，后面的每位结果都是 `(a + b + f) % 10`,如果其中一个链表遍历完了，该链表值为0，继续遍历直到另一个完成：
```
// JavaScript
var addTwoNumbers = function(l1, l2) {
    var a=l1?l1.val:0;
    var b=l2?l2.val:0;
    var n = new ListNode((a+b)%10);  
    var f=a+b>9?1:0;
    var head = n;
    l1=l1.next;
    l2=l2.next;
    while(l1 || l2){
        a=l1?l1.val:0;
        b=l2?l2.val:0;
        n.next = new ListNode((a+b+f)%10); 
        f=a+b+f>9?1:0;
        l1=l1?l1.next:l1;
        l2=l2?l2.next:l2;
        n=n.next;
    }
    if(f==1){
        n.next=new ListNode(1); 
    }
    return head;
};
```

时间|内存
:---:|:---:
176 ms|38.5 MB

2. 先把链表转换成数字，相加以后再转换成链表(`JavaScript` 其中一个太长的话精度无法保存，计算结果不正确)