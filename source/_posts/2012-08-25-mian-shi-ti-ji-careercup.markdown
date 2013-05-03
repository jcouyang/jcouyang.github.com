---
layout: post
title: "面试题集 CareerCup"
date: 2012-08-25 23:14
comments: true
categories: ["算法","面试"]
---

Strings & Array
=========

### 1.1 Implement an algorithm to determine if a string has all unique characters. What if you can not use additional data structures?

> 检测字符串是否有unique characters, 直接找应该是O(n^2 )
首先想到的解法:
1. quicksort 排序,用时nlgn
2. 从左到右找重复字符, 用时n
算法复杂O(nlgn)

答案:
<!-- more -->
1. 用一个256bit的boolean数组. 从左到右检测字符, toggle数组对应位置, O(n)
```python
def checkUnique(string):
    char_set = [False for x in range(256)]
    for i in string:
        if char_set[ord(i)]:return False 
        char_set[ord(i)]=True
    return True

```
2. 从左到右,选一个跟后面的全比, O(n^2_)
3. 我提到的算法

### 1.3 Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. NOTE:One or two additional variables are fine. An extra copy of the array is not.
> 去重复字符

> 第一反应还是去掉重复,左移,这是O(n^2 )

答案果然也要O(n^2_)


### 1.4 Write a method to decide if two strings are anagrams or not.
检测两个字符串是否倒序

divide and conquer可以解决到O(nlgn)

1. Divide: 分两端, 看前半段和另一个串的后半串是否anagram
2. 递归

擦....结果 anagrams的意思是变位词

1. 直接排序, 看排序后是否相同 O(nlgn)
2. 数字母出现次数是否相同 O(n)

### 1.5 Write a method to replace all spaces in a string with ‘%20’
>擦, 第一反应是.replace

>除了硬找, 没思路啊, 最多弄到O(n)了, 看看python源代码好了

答案就是O(n)

but a little tricky

需要多考虑的是得先数好空格数,然后加空格数*2的空间, 从后往前把string挪到后面新加空间


### 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
Divide and Conquer
十字分四分, 依次换位, 递归

### 1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.
> 硬来?
### 1.8 Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (i.e., “waterbottle” is a rotation of “erbottlewat”).
说实在, 没看懂 

Linked list
==========

### 2.1 去链表重复节点?

如果能用buffer:用hash看是不是contain

如果不能用buffer:O(n^2_), 一个一个遍历,遍历每个的时候看后面是否有重复

### 2.2 单链表中查找倒数第n个节点

此方法比较Tricky:

用两个指针...一个指0, 一个指n-1个,然后开走

第二个到达末尾的时候,第一个指向的是倒数第n个

### 2.5 找出链表中的环, 并且找头
快慢指针大家都知道, 但是怎么找头

比如头在k, 那么当慢指针走到k时, 快指针已经距离环头k

那么当他们碰见的时候会在环的哪呢

解个方程就ok, 假设碰见的地方是距离头x,也就是慢指针走x步, 环大小为n,i是圈数

x+in=k+2x

解方程得 x=in-k, 也就是在环的倒数第k个碰见, 反之两指针相遇的地方再走k步就是头了

那k等于多少呢, 只需要相遇后设置一个指针在0,然后一起走,相遇的地方就是头了 

Stack
=======
### 3.1 如何用一个数组实现3个栈

第一反应肯定是分三分, 再好好想想.

其实可以前3个是栈底, 依次往后分配就行了,只是数据结构改下,栈的元素弄成链表

再用一栈存放空白地方, 搞定

### 3.4 用栈实现Hanoi塔

分析: 假设要从rod1挪到rod3

1. 挪一个, 直接挪到rod3
2. 挪两个, 挪第一个到rod2,挪第二个到rod3,然后rod2挪rod3
3. 挪3个, 挪第一个到rod3, 挪2th到rod2, 挪1th到rod2,挪3th到rod3, 然后用2步骤,把1th和2th挪到rod3

递归关系来了

挪n个可以解释为: 

1. 把前n-1个挪到rod2
2. nth挪到rod3
3. 把n-1再挪到rod3

3个栈当rod就ok了

### 3.5 用两个栈实现一个Queue

第一个满了以后倒到第二个栈, 第二个空了从第一个倒

### 3.6 只用栈, 实现排升序

意思就是让小的先进, 大的都先弹出来

用两个,s1,s2, s2代表大的

1. tmp = s1.pop()
1. while tmp <s2.peek then s1.push(s2.peek)
把所有比tmp大的都弹走,把tmp丫进去
2. s2.push(s1.peek)

O(N^2)

Tree and Graphs
=======

### 4.1 检查树是否平衡
猛的一想是不是要递归检查每颗子树也是平衡数?

擦,考研时中值定理白学了, 看最高和最低的高度是否差1就行了

### 4.2 检查有向图中两点是否有路径
深度遍历

### 4.5 中序遍历,找节点的下一个节点, 二叉树带指向父节点指针
1. 如果有有孩子, 他的下一个就是右孩子 
2. 如果是左孩子, 他的父亲就是下一个
3. 如果是右孩子,那他的下一个是他的父节点的下一个

### 4.6 二叉树中查找两个节点最近的父节点

如果这俩节点分布在一个节点的两边,即这个节点就是最近父节点

### 4.7 检查一颗小树是否是一颗大树的子树

Bit Manipulation
==========

### 5.1 把N的i到j位换成M
```c
int updateBits(int n, int m,int i, int j){
    int max = ~0;//全部置1, int的最大值
    int left = max - ((1<<)-1); //把j右边的全部置0,左边全1
    int right = ((1<<i)-1); //i右边全1,左边全0
    int mask = left|right;//i j 中间全0
    return (n&mask)|(m<<i);//ij中间全抹零,把m放进去
}
```
### 5.4 解释((n&(n-1))==0)
==0说明n和n-1没有一位相同
,这种情况只有 0001000..-1
,所以n是2的倍数

### 5.5 比较两个数转换需要改变多少位
XOR就是不一样的位,然后数一

