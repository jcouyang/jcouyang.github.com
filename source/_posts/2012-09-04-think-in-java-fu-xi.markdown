---
layout: post
title: "ReThink in Java"
date: 2012-09-04 14:00
comments: true
categories: ["复习","面试","Java"]
---

> 最近找工作, 复习下Java, 什么面试宝典都是浮云, 还是Re看下Think in Java
# 面向对象概念 &  Java 基础

- 一切皆对象
- 程序只是对象直接通信而已
- Each object has its own memory made up of other objects. Put another way, you create a new kind of object by making a package containing existing objects. Thus, you can build complexity into a program while hiding it behind the simplicity of objects.
- 所有对象都有类型
- 所有相同类型的能接受同样的消息

<!-- more -->
对象属性
======
-  对象有接口
- 对象提供服务
- 封装实现
  * protect 只能子类访问
  * private 只有自己访问
  * nothing 包内访问
- 重用实现
 对象包含另一对象, Composition means has 如: 车 有 引擎
- **继承**
只要是能说成 is a 的,就是继承关系, 如: a circle is a shape, circle继承shape

如果提供更多接口, 如 冷热空调和单制空调, 冷热空调 is not a 单制空调, 但是 is like 单制空调, 也同样可以当单制空调用. 如果其他对象发送消息制冷,对冷热空调同样可以结束, 那么冷热空调继承单制空调
- **多态**
与C++不同, java采用late binding, 意思是编译器在调用method的时候还不知道具体method,until runtime. 而C++和non-OO语言都是early binding, 编译器编译链接时就直到调用的代码地址(除非用virtual声明成late binding). Java的 dynamic binding是默认的,不需要任何声明

这样就能更方便实现多态, 如企鹅和鹅都继承了鸟, 那么给鸟的*移动*的消息, 企鹅收到会走,鹅收到会飞

但是这里意思并不是判断如果是企鹅,就走,如果是鹅,就飞. 而是发送消息给鸟, 意思是你是鸟, 你知道自己该怎么移动, 自己动去吧.

- **抽象**
如果一个基类只是作上面说的鸟一样的传递工作,而不需要具体实现的话, 定义其为抽象类, 其方法为抽象方法

- 对象生命周期

不像c++ new完以后要记得delete, malloc完以后要free, Java 由garbage collector 来判断那些对象要回收. python也有这种机制, 对象的引用为0时,回收

- Collections and Iterator

包括Map,List,Set
如果你要一个能比较上面类型的元素的方法时, 怎么办,用判断么,如果是list怎么取,如果是set怎么取.

用Iterator

- 一切对象皆继承Object
  * 保证每个对象都有一定的functionality
  * 保证都有Garbage Collector
  * 永远确定对象类型起码是Object

# 一切皆对象
## 对象放在哪

1. Register. 非程序能控制, cpu控制
2. **Stack**: 非数据结构Stack, 常说堆栈中的栈. 高效分配内存, 次于register. 对象的reference存放在此. 还有基本类型, 比如int

3. **Heap**: 通用内存池, 慢与stack, new 对象的时候对象本身放到这里. C里面任何要手动free的东西都是放这里
4. **Static**: 声明 static的放到这
5. **Contance**: ROM
>Java中没有unsigned

## Scope
```java
{
int x = 12; {
    int x = 96; // Illegal
  }
}
```
in C it's legal, but not java

```java
{
  String s = new String("a string");
} // End of scope
```
scope外面s的引用消失, 但是s对象还在内存中

### static
```java
class StaticTest {
  static int i = 47;
}
```
- 不管new多少个StaticTest, i只存在一个
- 修改任何一个对象的i都会印象其他
- static在静态区域, 不管对象存不存在, 他都在那,不多不少
- 静态方法也同理, 整个方法存在静态区域, 所以也不能调用类中的非静态方法或者变量, 因为不知道他们的地址. 
main方法就是静态的因为是程序入口, 不需要new对象就可以执行

# Initialization & Cleanup
## Overload and Overwrite
* overload: 参数不同或返回值不同的方法, 

## this 的用法
很多人喜欢在类里面写 this.xxx(), 其实完全没用, 真的

真正的用法在这里
```java
public class Leaf {
  static Test monitor = new Test();
  int i = 0;
  Leaf increment() {
i++;
    return this;
  }
  void print() {
    System.out.println("i = " + i);
  }
  public static void main(String[] args) {
    Leaf x = new Leaf();
    x.increment().increment().increment().print();// Jquery 里面最常见的用法
    monitor.expect(new String[] {
"i = 3" });
}
} ///:~
```
另外一种用法是在构造函数里调用别的构造函数
```java
Flower(int petals) {
    petalCount = petals;
    System.out.println(
      "Constructor w/ int arg only, petalCount= "
      + petalCount);
  }
  Flower(String ss) {
    System.out.println(
      "Constructor w/ String arg only, s=" + ss);
    s = ss;
  }
  Flower(String s, int petals) {
    this(petals);
//!    this(s); // Can't call two!
    this.s = s; // Another use of "this"
    System.out.println("String & int args");
  }
```
>静态方法没有this, 因为不能引用非静态

## finalize() 并不是C++的delete
finalize()并不回收内存, finalize()只是GC(Garbage Collecter)回收的时候第一个调用的方法. 
如果你要在回收之前做一些特殊操作, 那么就写在finalize()里.

而并不是C++里的delete, 应该相当于析构函数, delete直手动(当然C++也不会自动)删除对象, 而java删除对象始终是GC的活

## 初始化
变量没初始化就操作会报错, C++则不会

## static 的初始化
下面这题弄出来就明白了
```java
class Bowl {
  Bowl(int marker) {
    System.out.println("Bowl(" + marker + ")");
  }
  void f(int marker) {
    System.out.println("f(" + marker + ")");
} }
class Table {
  static Bowl b1 = new Bowl(1); //2
  Table() {
System.out.println("Table()");
b2.f(1); } // 4
  void f2(int marker) {
    System.out.println("f2(" + marker + ")");
}
  static Bowl b2 = new Bowl(2); //3
}
class Cupboard {
  Bowl b3 = new Bowl(3); // 8 12
  static Bowl b4 = new Bowl(4); //6
  Cupboard() {
    System.out.println("Cupboard()"); //9 13
b4.f(2); } //10 14
  void f3(int marker) {
    System.out.println("f3(" + marker + ")");
}
  static Bowl b5 = new Bowl(5); //7
}
public class StaticInitialization {
  static Test monitor = new Test();
  public static void main(String[] args) {
    System.out.println("Creating new Cupboard() in main");//11
    new Cupboard();
    System.out.println("Creating new Cupboard() in main"); //15
    new Cupboard(); //16....
    t2.f2(1);
    t3.f3(1);
    monitor.expect(new String[] {
      "Bowl(1)",
      "Bowl(2)",
      "Table()",
      "f(1)",
      "Bowl(4)",
      "Bowl(5)",
      "Bowl(3)",
      "Cupboard()",
      "f(2)",
      "Creating new Cupboard() in main",
      "Bowl(3)",
      "Cupboard()",
       "f(2)",
      "Creating new Cupboard() in main",
      "Bowl(3)",
      "Cupboard()",
      "f(2)",
      "f2(1)",
      "f3(1)"
}); }
  static Table t2 = new Table(); //1
  static Cupboard t3 = new Cupboard(); //5
} ///:~
```
1. 当new 或者static直接访问时, static声明的先初始化
2. 其他变量初始化
3. 构造函数

### static clause
``static{}``可以初始化static 变量, 同样static访问或者new时才生成

非static的初始化可直接写在``{}``中,效果和static一样,new的时候先初始化,再调用构造函数

## 初始化变量长的Array 
C++在初始化数组时必须编译时确定维数 如``int a[]={1,2,3}``或者``int a[3];``

但是在java中, 你可以这样写``int a[];``, 你还可以这样写``int[] a;``, 你还可以这样写
``int b=somethingRadom; int[] a = new int[b];``

因为java在运行时创建数组,数组也是对象, 这样初始化的int全是0,

# 封装
##  什么时候用private, protect, public,nothing
想象一个手机是对象,那么你不会想要用户看见或者碰见你的芯片,所以private. 当然拨号按钮必须public, 不然就用不成了.

那什么时候用protect呢, 擦, 更简单, 就是当孩子他爸的钱可以给孩子用,但是不给孩子他妈知道, 那么 孩子他爸"取钱"这个方法就是protect. 孩子也可以取因为继承了孩子他爸, 但是孩子他妈看不见,也不能取(不然私房钱就没了T_T)
 
什么也不加就方便包内文件之间的访问

# Reusing Class

## Name hiding
java不像C++,当你在子类重载, 那么父类方法不会被覆盖.

## 什么时候用Composition,什么时候用Inheritance
Composition 关系是指 has, 如 car has wheel
Inheritance 关系是 is a, 如 car is a vehicle

## final
- final data: 
  - 可以是编译时确定常量
  - 也可以在运行时赋值,但不会再次改变.比如final int a = some random
  - 当声明基本类型时, 使其值常量, 但有对象引用可以变
  - 当声明对象时, 引用不能变化
  - 全局静态与final经常一起用
  - 可以声明为 ``final int a;``, 但是必须在使用前赋值, 否则编译错误
- final arguments: 
意思你不能在函数里改变参数引用
- final methods代表什么,有什么好处
  - 不能被继承
  - 更高效, 应该相当于C++的inline, 编译器简单的把代码替换到调用的地方. 而省去函数调用步骤:push 函数至栈, 跳转到函数地址运行完再跳转回并清空栈....而且告诉编译器不需要dynamic binding
但是final被用在更多设计层面上比较多,因为很多情况下,效率并不会明显改善.

> 不能继承final 那么继承private呢
  - 继承private不会错,但是完全相当于又定义了子类的private方法.自然也不叫继承,只是方法名相同,但是互相看不见

- final class
继承final class 会编译错误, 但是继承final method不会编译错,只是毫无意义而且并没有继承上

> Java 2 将Vector换成为ArrayList, Hashtable换成为HashMap, why?

## 继承的初始化顺序
前面那题静态初始化顺序晕了没, 没晕在来看看这个初始化顺序是啥
```java
class Insect {
  protected static Test monitor = new Test();
  private int i = 9;
  protected int j;
  Insect() {
    System.out.println("i = " + i + ", j = " + j);
j = 39; }
  private static int x1 =
    print("static Insect.x1 initialized");
  static int print(String s) {
    System.out.println(s);
    return 47;
} }
public class Beetle extends Insect {
  private int k = print("Beetle.k initialized");
  public Beetle() {
    System.out.println("k = " + k);
    System.out.println("j = " + j);
  }
  private static int x2 =
    print("static Beetle.x2 initialized");
  public static void main(String[] args) {
    System.out.println("Beetle constructor");
    Beetle b = new Beetle();
    monitor.expect(new String[] {
      "static Insect.x1 initialized",
      "static Beetle.x2 initialized",
      "Beetle constructor",
      "i = 9, j = 0",
      "Beetle.k initialized",
      "k = 47",
      "j = 39"
}); }
} ///:~
```
事情是这样的:
1. 当你进入入口main时, **因为main在Beetle里面**, 会加载Beetle.class
2. 发现extends, 加载Insect
3. 上两部不管你new不new都会执行, 然后是静态的初始化
4. 接下来才执行到new, 下来你懂的

# 多态 Polymorphism

前面已经总结过了, 再强调下
## 抽象类和抽象方法
如果父类的用途只是为了upcasting, 而本身不需要实际做什么,那么可以声明为abstract
## 什么时候继承,什么时候扩展
* 继承 is a
* 扩展 is like a
正如前面的空调的例子, 冷热空调并不是单制空调,但是可以继承单制空调, 因为他可以like a 单制空调,可以当单制空调用

# 接口 和 内部类
## 接口和抽象的区别
- 接口是默认public, 不需要声明就是public
- 接口不需要实现,也不能new
- 实现接口用 implements, 继承抽象类用 extends
- 可以implements多个接口,但是只能extends一个类, 接口实现了Java的**多继承**
- 接口中的fields会自动static和final, 所以声明全局今天常量可以
```java
interface Months {
  int
    JANUARY = 1, FEBRUARY = 2, MARCH = 3,
    APRIL = 4, MAY = 5, JUNE = 6, JULY = 7,
    AUGUST = 8, SEPTEMBER = 9, OCTOBER = 10,
    NOVEMBER = 11, DECEMBER = 12;
}
```
- 因为是static和final,所以必须在声明时赋值, 不管是编译时赋值还是运行时, 绝不能 blank

### interface 继承interface
接口还可以继承接口, 还可以继承多接口
``interface Vampire extends DangerousMonster,Lethal.....``
但是类只能继承**一个**

### 内部接口
在class里面的interface就是内部接口, 内部接口可以定义为private

## 内部类和Composition有毛区别
- 同内部接口,可更好封装 private, protect...
- 内部类还可以在方法里面
- 内部类可以在任何scope里面 如``if(true){class Inner{}};``
- 内部类不会被继承

### 匿名内部类
```java
return new Contents() {
  private int i = 11;
  public int value() { return i; }
};
```
意思是
```java
class MyContents implements Contents {
  private int i = 11;
  public int value() { return i; }
}
return new MyContents();
```
### The link to the outer  class
内部类不仅仅是命名hiding. 和C++不同, 外部类有内部类的引用.

### 嵌套类 Nested class aka static inner class
就是静态内部类

## 为啥要用内部类, 什么时候要用内部类
用内部类分别实现一些特定接口, 当然也可以一个类都实现所有接口,而不用内部类.
但是
>If that’s all you need, then that’s how you should do it.

但是如果当你需要继承多个抽象类的时候.....如果给你两个类人和禽兽, 实现一个衣冠禽兽类,那内部衣冠继承人,还有内部类继承禽兽. 你懂得

# 异常处理

## finally在Java中真的有用么
因为Java有GC, 完全不需要finally中回收内存操作, 那么 finally还有什么用呢

finally当然还是有用,比如可以恢复发生异常前的参数状态, __让异常默默消失__ oh no

## wrap 检测性异常
```java
class WrapCheckedException {
  void throwRuntimeException(int type) {
    try {
      switch(type) {
        case 0: throw new FileNotFoundException();
        case 1: throw new IOException();
        case 2: throw new RuntimeException("Where am I?");
        default: return;
      }
    } catch(Exception e) { // Adapt to unchecked:
      throw new RuntimeException(e);
    }
} }
```
当你throw WrapCheckedException 时, 不需要用try catch













