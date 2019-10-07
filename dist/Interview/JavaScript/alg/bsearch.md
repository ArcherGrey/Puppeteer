# 二分查找

```
function bs(arr,num){
    var l=0,h=arr.length-1;
    while(l<=h){
        var mid=~~(l+(h-l>>1));
        if(arr[mid]==num) return mid;
        else if(arr[mid]>num) {
            h=mid-1;
        }
        else if(arr[mid]<num){
            l=mid+1;
        }
    }
    return -1;
}
```