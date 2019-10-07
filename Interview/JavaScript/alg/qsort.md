# 快速排序


```
function qsort(arr,low,high){
    if(low>=high) return;
    var i=low,j=high,k=arr[low];
    while(1){
        while(arr[i]<k){
            if(i>=high) break;
            i++;
        }
        while(arr[j]>k){
            if(j<=low) break;
            j--;
        }
        if(i>=j) break;
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    [arr[j],k]=[k,arr[j]];
    qsort(arr,low,j-1);
    qsort(arr,j+1,high);
}
```