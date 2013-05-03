---
layout: post
title: "算法复习 Sorting"
date: 2012-08-22 11:10
comments: true
categories: ["算法"]
---

## Quicksort

1. Divide: 选一个pivot进行分区, 左边大于pivot, 右边小于pivot
2. Conquer: 递归

python 3 行搞定版

```python
def qsort(L):
    if L== []:return []
    return qsort([x for x in L[1:] if x < L[0]]) + L[0:1] +qsort([x for x in L[1:] if x >= L[0]])
```
注意是L[0:1]不是L[0], L[0]返回值, L[0:1]返回数组.

c 原版
```c
#define pivot_index() (begin+(end-begin)/2)//为什么这么写,因为 (begin+end)/2有可能溢出,当begin+end大于2^16
#define swap(a,b,t) ((t)=(a),(a)=(b),(b)=(t))
void sort(int array[], int begin, int end){
  int pivot;
  int temp;
  if(begin<end){
    int l,r=begin+1;// l指大小分界,r指未分区部分
    swap(array[begin],array[pivot_index()],temp);//换取中间作为pivot,或者radom选一个
    pivot=array[begin];
    while(r<end){
      if(array[r]<=pivot){
        l++;
        r++;
      }else{
        swap(array[l],array[r],temp);
        r++;
      }
    }
    swap(array[begin],array[l],temp);
    sort(array,begin,l-1);
    sort(array,l+1,end);
  }
}
#undef swap
#undef pivot_index
```
## 
