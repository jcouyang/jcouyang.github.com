---
layout: post
title: "算法复习-Divide &amp; Conquer"
date: 2012-08-15 22:55
comments: true
categories: 
---

> 开学就找工作鸟, 复习下算法-- itune U 上的 MIT 算法导论
duh....尼玛这是**导论 Introduce**? 以前学到嘛国产经典教材数据结构都弱爆了

说到Divide & Conquer突然想到二分查找,
记得有本书上说全球90%的教科书都没写全对......

## compute X^n in lg(n)

**Divide** : 

<div markdown="0">
$$x^n =\frac{x^n}{2}+ \frac{x^n}{2}$$
</div>

时间O(lgn)

## Compute Fibonacci Number quicker then linear time

我擦雷闹,原来是宇宙无敌霹雳万能的矩阵......

<div markdown="0">
\[
\begin{bmatrix}
  F_{n+1} & F_n\\\
  F_n & F_{n-1} 
\end{bmatrix}
=
\begin{bmatrix}
1 & 1   \\\
1 & 0   
\end{bmatrix}
\begin{bmatrix}
F_{n} &F_{n-1}   \\\
F_{n-1}    & F_{n-2}   
\end{bmatrix}
=
\begin{bmatrix}
1&1  \\\
1 &0   
\end{bmatrix}^n
\]
</div>

这样就成了X^n_的问题, 可以divide and conquer

时间O(lgn)

## 矩阵乘法 matrix multipul

<div markdown="0">
$$c_{ij}=\sum_{k=1}^{n} a_{ik}b_{ki}$$
</div>
硬算的话O(n^3 )

擦,这太复杂了, 一个叫Strassen的天才发现了一堆规律,最终解决到O(n^{lg7 })

擦,没快多少么, 不看了

## 最小面积树
把n片叶子的完全二叉树放到Grid中,求Grid最小面积

面积= 2x子节点最小面积+根节点占面积

显然根节点在正方形正中最省地方
