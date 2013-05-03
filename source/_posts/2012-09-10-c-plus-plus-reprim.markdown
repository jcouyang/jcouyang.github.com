---
layout: post
title: "C++ rePrim"
date: 2012-09-10 23:01
comments: true
categories: ["C++","面试"]
---


# 复习C++ Primer
>C++有很多木乱的概念, 趁面试前这两天理一理;)

## const
类似于java的final, 但是远比final木乱多了

但是可以简单终结规律如下:
1. 这玩意其实就是挨着谁谁不准动

比如``int const *p`` const挨着指针p, p指针不能动, 内容可以动<br>
``const int *p`` const 挨着int, p指针指向的int被const了, 所以内容不能动

2. 那么成员函数后面的const是啥意思

成员函数后面的const 表明传入函数的``this``是const class const *this<br>
也就是说, 一般this是哥const指针, 指针不能改变, ``const {}``后传如的 ``class const *this``有加了个const, 于是就成了
``const class const *this``

现在, 像这种纠结代码就好理解了 ``const char const *nimei (const int i) const{ return "nimeia"};``<br>
nimei返回const指针,指向const char, 函数的this指向的类也是const, 传递进去的i 也是const.<br>
所以, 不能动的有this指向的类, nimei的返回指针, 返回指针所指的char, 和传递进去的i

<!-- more -->
### mutable
想让数据甚至能被const成员函数访问

## 为什么C++类以`;`收尾
跟java不一样, C++的类应该理解为扩展过的struct就好了,``如 struct nimei{} a,b;``当然要`;`结尾

##  . 和 -> 啥区别
点乃直接访问, ->意思是先解指针再访问 相当于 ``(*p).member``

## 构造函数初始化列表 constructor initializer list
java程序员肯定看不懂 构造函数冒号后面那啥玩意....
```c
class Sales_item {
     public:
         // operations on Sales_itemobjects
         // default constructor needed to initialize members of built-in type
         Sales_item(): units_sold(0), revenue(0.0) { }
     private:
         std::string isbn;
         unsigned units_sold;
         double revenue;
     };
```
其实只是为了方便初始化内部成员而已.

>想起来careercup上面一个thoughtworks的面试题, 问怎么打印1000个"nimei", 不准用任何循环和递归

>答案是构造函数打印, 然后new 1000个对象
