---
layout: post
title: "小试Intellij IDEA 郑大晔校02"
date: 2012-11-25 00:25
comments: true
categories: ["Code","Tools","ThoughtWorks"]
---

夜校第二期, 表演了一次结对, 比较impress的是Intelij IDEA看起来确实很inteli

表演中这两个动作有意思, 让我感觉到以前用emacs之类的编辑器不能完成的工作

- 抽取成变量...这个真的酷
- alt+enter会出来一个intleli小灯泡选项里面快捷操作包括新建Class,method,之类的一下refactoring操作

于是回来试了下看有木有其他牛叉功能

但是, 刚装完后,我把keymap设置成emacs,因为习惯emacs的快捷键, 就发现mac版本的bug了, 而且这个bug确实有点致命, 大家都知道emacs底下option应该映射成meta, 而mac底下正常的话__**option+字符**__在mac下会出来特殊字符. 比如我输入option+w,会出来∑. 天哪, intelij居然没有覆盖掉?...emacs底下这个是copy操作啊, 要命啊, 这下怎么copy啊. 另外好多牵扯option的比如emacs下的M-V,向上翻页操作....也不行.....OMG要逆天啊这是.

stackoverflow上有人说用esc当meta.....个人不习惯,esc这个键位离得实在太远了,请试试一个手同时按esc和v,能按上的人我想是骨骼特异万中无一.

哎, 只能默默用command先代替下, 另外还有个bug, 明明说`command`+ `1`是打开project窗口, 为什么默默就变成了`option`+ `1`

算了, 改天有空提交issue, 先说一下好的地方吧

- join line             -- `control`+`shift`+ `j`
- duplicate line      --   `command`+`d`
- end statment       --    `control`+ `shift`+ `return` (就是不管光标在哪, 直接跳到行尾加`;`)
- 这个不知道叫什么, 弹出一个智能窗口,里面经常会有你想要的选项 - - `option`+ `return` (这个确实很酷)
- goto file         -- 默认`control`+ `shift`+ `n`, 我把这快捷改成C-X B了,因为跟emacs切换buffer功能类似

另外改了一些用起来更像emacs

{% include_code Emacs emacs.xml %}
