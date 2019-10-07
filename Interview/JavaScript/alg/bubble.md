# 冒泡排序

```
function bubble(arr){
    var l=arr.length;
    for(var i=0;i<l;i++){
        for(var j=0;j<l-i-1;j++){
            if(arr[j]>a[j+1])
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
    return arr;
}
```