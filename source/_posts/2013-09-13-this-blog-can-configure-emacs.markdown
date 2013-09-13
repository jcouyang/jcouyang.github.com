---
layout: post
title: "this blog can configure emacs"
date: 2013-09-13 23:16
comments: true
categories: 
---
<p>
有同学问初学该有个什么starter-kit之类的, 虽然我之前也在用
emacs-starter-kit, 但是那玩意其实对 emacs 24 来说已经很鸡肋了. emacs
24 对包管理这块做的已经足够好,而且源也足够多, 因此, 配置 emacs 24 会变
得容易的多.
</p>


<p>
我也不知道在哪翻出来的这个 repo, 正好同时解决了新手配置以及文档化的问
题. 所以我决定从 starter-kit 迁过来, 这样以后只用维护
</p>

<p>
<a href="https://github.com/geogeo/steckemacs">&#x2013;&#x2014;&#x2014;&#x2014;&#x2014;&#x2014;&#x2014;&#x2014;&#x2014;&gt; <b><b>这个Org文件</b></b> &lt;------------------------</a>
</p>

<p>
即可.\o/
</p>

<p>
事情是这样子的:
</p>

<p>
修改这个repo下的 steckems.org 文件会引发
</p>

<ol class="org-ol">
<li>.emacs文件 会将其中的 elisp 代码抽到 steckems.el 文件并且load 进来, 这
样emacs 在启动是就配置好了.
</li>
<li>修改完后 按 C-c C-e P f 转成 markdown 并发布到 octopress 的 emacs 目录下
</li>
<li>这篇博客会将 markdown 文件 render<sub>partial</sub> 过来
</li>
</ol>

<p>
这是 <a href="https://github.com/steckerhalter/steckemacs"><b>steckemacs</b></a> 的一个<a href="http://github.com/geogeo/steckemacs">fork</a>. <b>steckemacs</b> 是集成了60多个pakage的emacs配置文件.作者是steck.
</p>

<p>
当然我在这个 fork 里面添加了一些自己偏好的一些package, 也删除了一些鸡肋
的package. 并且做了一些解释,便于新手上手.
</p>

<p>
另外,这篇文章的特别之处是它本身会被编译成 elisp 配置文件.
因此,在更新这篇博客的同时,配置文件也随之改变.
</p>

<p>
我的 emacs 版本是 aquamacs 3.0, 自己从 repo 上下来编译的.
目前 stable 版本是 2.5, 内核是 emacs 23, 我没有测试过, 有可能部分包会
由问题.
</p>
{% render_partial emacs/steckemacs.markdown %}
