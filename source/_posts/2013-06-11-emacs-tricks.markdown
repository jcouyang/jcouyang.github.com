---
layout: post
title: "emacs tricks (draft)"
date: 2013-06-11 17:17
comments: true
categories: ["emacs"]
---
<p>
总结一下自己觉得有用的 emacs tricks
</p>

<p>
<a href="http://ergoemacs.org/emacs/i/emacs_learning_curves.png">editors learning curve</a>
</p>

<p>
显然, emacs 门槛要比vim低多了, 但是命令和插件巨多导致你永远到不了
yoda 的境界.
首先, 上手最好先使用 emacs-starter-kit. 里面包含了emacs各种常用的的插
件. 也就是说基本上所有可能会有用又好用的mode都已经安装了. 当然, 还是有
一些需要手动安装盒根据自己习惯调整的地方.
</p>

<ol class="org-ol">
<li>自己编译 Aquamacs 3.0 from <a href="https://github.com/davidswelt/aquamacs-emacs.git">here</a>. 因为3.0 based on emacs 24.3.
</li>
<li>下列提及的插件凡是没有提及地址的,都能再 epla 找到.
</li>
</ol>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Editing</h2>
<div class="outline-text-2" id="text-1">
</div><div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Moving Ctrl Key</h3>
<div class="outline-text-3" id="text-1-1">
<p>
将 <code>Caps</code> 定义成 <code>Ctrl</code>, 为什么呢? 好吧, 来读读这篇
 <a href="http://www.emacswiki.org/emacs/RepeatedStrainInjury">文章</a>, 再看看 <a href="http://www.pfu.fujitsu.com/hhkeyboard/">HHKB</a> 的键位. 在mac下更换 <code>Caps</code> 是十分容易的,
 Preference &gt; keyboard &gt; modify key 底下直接改就可以了. 
</p>
</div>
</div>

<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> zap-to-char <code>M-z</code></h3>
<div class="outline-text-3" id="text-1-2">
<p>
将光标至第一个出现你输入的字符中间都删除, 比如你的光标在 'abcdef' a 的位
置上, <code>M-z d</code> 会变成 'ef'
</p>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> iy-move-to-char</h3>
<div class="outline-text-3" id="text-1-3">
<p>
跟 vim f 的功能一样
</p>
</div>
</div>
<div id="outline-container-sec-1-4" class="outline-3">
<h3 id="sec-1-4"><span class="section-number-3">1.4</span> M-SPC: remove extra space</h3>
<div class="outline-text-3" id="text-1-4">
<p>
这个将多余的空格去掉,只留一个.
</p>
</div>
</div>
<div id="outline-container-sec-1-5" class="outline-3">
<h3 id="sec-1-5"><span class="section-number-3">1.5</span> multiple-cursor</h3>
<div class="outline-text-3" id="text-1-5">
<p>
一个比 rectange 更强势的批量编辑. 用了这个其他编辑器神马的都弱爆了
</p>
</div>
</div>

<div id="outline-container-sec-1-6" class="outline-3">
<h3 id="sec-1-6"><span class="section-number-3">1.6</span> zencoding-mode</h3>
<div class="outline-text-3" id="text-1-6">
<p>
用 css selector 写 html, zencoding + yas, 其他 html 编辑器都弱爆了,真的.
</p>
</div>
</div>
<div id="outline-container-sec-1-7" class="outline-3">
<h3 id="sec-1-7"><span class="section-number-3">1.7</span> mark</h3>
<div class="outline-text-3" id="text-1-7">
<ul class="org-ul">
<li><code>C-x r m</code> register 你的位置,给个名字,这叫bookmark, 并给他取一个名字. <code>C-x r b</code> + 名字, 回
到该bookmark
</li>
<li><code>C-u C-SPC</code> 可会上个编辑的地方,上上个编辑的地方,上上上个编辑的地方&#x2026;碉
堡了
</li>
<li>expend-region
Increase selected region, 可以跟 IDEA 里的 <code>Command w</code> 一样选中
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-1-8" class="outline-3">
<h3 id="sec-1-8"><span class="section-number-3">1.8</span> Use M-m instead of C-a TAB</h3>
<div class="outline-text-3" id="text-1-8">
<p>
当写程序的时候我们通常知道到代码行的头,而不是本行的最开始, 不要用
<code>C-a TAB</code>, 因为 <code>M=m</code> 就是干这个的.对于写代码来说,  bind RET to
='reindent-then-newline-and-indent= 将是一劳永逸的事情. 
</p>
<div class="org-src-container">

<pre class="src src-lisp"><span style="color: #6b6b6b;">(</span>global-set-key <span style="color: #6b6b6b;">(</span>kbd <span style="color: #E6DB74;">"RET"</span><span style="color: #6b6b6b;">)</span> 'reindent-then-newline-and-indent<span style="color: #6b6b6b;">)</span>.
</pre>
</div>
<ul class="org-ul">
<li>use <code>C-s C-w</code> to search current pointed word, and you can type
several times <code>C-w</code> to select more words.
</li>
<li>auto-highlight-mode
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-1-9" class="outline-3">
<h3 id="sec-1-9"><span class="section-number-3">1.9</span> keychord</h3>
<div class="outline-text-3" id="text-1-9">
<p>
键盘和旋. 让你定义同时按住两个键的快捷键, 或者一个按键两次.
我想没有神马别的编辑器能干这个事情了.
</p>
</div>
</div>

<div id="outline-container-sec-1-10" class="outline-3">
<h3 id="sec-1-10"><span class="section-number-3">1.10</span> ace-jump-mode</h3>
</div>
</div>

<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> language</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> js2-mode</h3>
<div class="outline-text-3" id="text-2-1">
<p>
best javascript mode
</p>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Buffer and Files</h2>
<div class="outline-text-2" id="text-3">
</div><div id="outline-container-sec-3-1" class="outline-3">
<h3 id="sec-3-1"><span class="section-number-3">3.1</span> MaGit</h3>
<div class="outline-text-3" id="text-3-1">
<ul class="org-ul">
<li>Ediff with Git
</li>
<li>Eshell: actually it is shell implement in lisp
</li>
</ul>
</div>
</div>
</div>


<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> Appearance</h2>
<div class="outline-text-2" id="text-4">
</div><div id="outline-container-sec-4-1" class="outline-3">
<h3 id="sec-4-1"><span class="section-number-3">4.1</span> ColorTheme</h3>
<div class="outline-text-3" id="text-4-1">
<p>
monokai theme is the best
</p>
</div>
</div>
<div id="outline-container-sec-4-2" class="outline-3">
<h3 id="sec-4-2"><span class="section-number-3">4.2</span> power-line</h3>
<div class="outline-text-3" id="text-4-2">
<p>
跟 vim 的powerline 一样, 让你的 mainline 带颜色
</p>
</div>
</div>
<div id="outline-container-sec-4-3" class="outline-3">
<h3 id="sec-4-3"><span class="section-number-3">4.3</span> Cursor</h3>
<div class="outline-text-3" id="text-4-3">
<div class="org-src-container">

<pre class="src src-lisp"><span style="color: #6b6b6b;">(</span>setq-default cursor-type 'box<span style="color: #6b6b6b;">)</span>
<span style="color: #6b6b6b;">(</span>set-cursor-color <span style="color: #E6DB74;">"green"</span><span style="color: #6b6b6b;">)</span>
<span style="color: #6b6b6b;">(</span>blink-cursor-mode<span style="color: #6b6b6b;">)</span>
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> GTD</h2>
<div class="outline-text-2" id="text-5">
<ul class="org-ul">
<li>org-mode
</li>
<li>markdown-mode
</li>
</ul>

<blockquote>
<p>
tobe continue&#x2026;
</p>
</blockquote>
</div>
</div>
