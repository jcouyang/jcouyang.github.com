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


<div class="figure">
<p><img src="http://ergoemacs.org/emacs/i/emacs_learning_curves.png"  alt="emacs_learning_curves.png"/></p>
<p>editors learning curve</p>
</div>

<p>
显然, emacs 门槛要比vim低多了, 甚至你把他当做 notepad 用也是完全可以的.
但是命令和插件巨多导致你永远到不了yoda 的境界. emacs 被 vim 用户调侃是
最好的os, vim才是最好的编辑器,就是因为可扩展性太强了.emacs插件众多,很
多扩展也源于其他优秀编辑器如vim,textmate,sublime,idea. 因此你不但需要把 os 的东西搞熟练, 还要熟
练上面的软件.
</p>

<p>
首先, 上手最好先使用 emacs-starter-kit. 里面包含了emacs各种常用的的插
件. 也就是说基本上所有可能会有用又好用的mode都已经安装了. 当然, 还是有
一些需要手动安装盒根据自己习惯调整的地方.
</p>

<p>
后来呢, 你会发现 starter-kit 弱弱的, 因为好多东西都在 24.3 集成了, 或
者都已经在 elpa 里了. 这时候, 你可以&#x2026;
自己编译 Aquamacs 3.0 源代码 from <a href="https://github.com/davidswelt/aquamacs-emacs.git">here</a>. 因为3.0 based on emacs 24.3.
</p>

<p>
下面是我决定有用和可以装x的一些tricks. 
下列提及的插件凡是没有提及地址的,都能再 epla 找到.<sup><a id="fnr.1" name="fnr.1" class="footref" href="#fn.1">1</a></sup>
</p>

<p>
以下trick或只在 aquamacs3.0 有用, 因为我没有测试其他环境.
</p>
<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Editing</h2>
<div class="outline-text-2" id="text-1">
</div><div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Moving Ctrl Key</h3>
<div class="outline-text-3" id="text-1-1">
<p>
first thing first, 使用 emacs 最常用的按键当然是 <code>Ctrl</code>, 但是不幸的是
标准键位居然把这么重要一个按钮放到一个要扭曲小拇指才能够到的地方.
因此,在使用 emacs 之前,将 <code>Caps</code> 定义成 <code>Ctrl</code>, 好吧, 具体详情来读读这篇
  <a href="http://www.emacswiki.org/emacs/RepeatedStrainInjury">文章</a>, 再看看 <a href="http://www.pfu.fujitsu.com/hhkeyboard/">HHKB</a> 的键位. 在mac下更换 <code>Caps</code> 是十分容易的,
  Preference &gt; keyboard &gt; modify key 底下直接改就可以了. 
</p>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> zap-to-char</h3>
<div class="outline-text-3" id="text-1-2">
<p>
快捷键绑定  <code>M-z</code>.
zap 是消除的意思. 将光标至第一个出现你输入的字符中间都删除, 比如你的光标在 'abcdef' a 的位
置上, <code>M-z d</code> 会变成 'ef'
</p>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> iy-move-to-char</h3>
<div class="outline-text-3" id="text-1-3">
<p>
跟 vim f 的功能一样&#x2026;这个比较轻量一些, 当然有了后面说的
ace-jump-mode 会让你的光标任意跳跃.
</p>

<table border="2" cellspacing="0" cellpadding="6" rules="groups" frame="hsides">


<colgroup>
<col class="left"/>

<col class="left"/>
</colgroup>
<thead>
<tr>
<th scope="col" class="left"><code>C-c f</code></th>
<th scope="col" class="left">跳到后面第一个出现的字符</th>
</tr>
</thead>
<tbody>
<tr>
<td class="left"><code>C-c F</code></td>
<td class="left">跳到前面第一个出现的字符</td>
</tr>
</tbody>
<tbody>
<tr>
<td class="left"><code>;</code></td>
<td class="left">继续向前</td>
</tr>
</tbody>
<tbody>
<tr>
<td class="left">=,=</td>
<td class="left">继续向后</td>
</tr>

<tr>
<td class="left">&#xa0;</td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>
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
rectangle text <code>C-x r t</code> 可以批量编辑规整的, 但是不规整的用
multiple-cursor就碉堡了.
</p>

<p>
下面绑定快捷键的 lisp 比较直白, 我就不翻译了.
</p>
<div class="org-src-container">

<pre class="src src-lisp"><span style="color: #6b6b6b;">(</span>global-set-key <span style="color: #6b6b6b;">(</span>kbd <span style="color: #E6DB74;">"C-&gt;"</span><span style="color: #6b6b6b;">)</span> 'mc/mark-next-like-this<span style="color: #6b6b6b;">)</span>
<span style="color: #6b6b6b;">(</span>global-set-key <span style="color: #6b6b6b;">(</span>kbd <span style="color: #E6DB74;">"C-&lt;"</span><span style="color: #6b6b6b;">)</span> 'mc/mark-previous-like-this<span style="color: #6b6b6b;">)</span>
<span style="color: #6b6b6b;">(</span>global-set-key <span style="color: #6b6b6b;">(</span>kbd <span style="color: #E6DB74;">"C-c C-&lt;"</span><span style="color: #6b6b6b;">)</span> 'mc/mark-all-like-this<span style="color: #6b6b6b;">)</span>
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-1-6" class="outline-3">
<h3 id="sec-1-6"><span class="section-number-3">1.6</span> mark</h3>
<div class="outline-text-3" id="text-1-6">
<p>
这就算 vim 的 visual mode 吗?
</p>
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
<div id="outline-container-sec-1-7" class="outline-3">
<h3 id="sec-1-7"><span class="section-number-3">1.7</span> Use M-m instead of C-a TAB</h3>
<div class="outline-text-3" id="text-1-7">
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
<div id="outline-container-sec-1-8" class="outline-3">
<h3 id="sec-1-8"><span class="section-number-3">1.8</span> keychord</h3>
<div class="outline-text-3" id="text-1-8">
<p>
键盘和旋. 让你定义同时按住两个键的快捷键, 或者一个按键两次.
我想没有神马别的编辑器能干这个事情了.
</p>
</div>
</div>
<div id="outline-container-sec-1-9" class="outline-3">
<h3 id="sec-1-9"><span class="section-number-3">1.9</span> ace-jump-mode</h3>
<div class="outline-text-3" id="text-1-9">
<p>
这个 mode 也是从 vim 那边剽窃过来的, 好吧, 也可以说是 share, 因为剽窃
的话 vim 就再也没有这个插件了.
</p>

<p>
是这样玩的, 在整个 frame<sup><a id="fnr.2" name="fnr.2" class="footref" href="#fn.2">2</a></sup>, 也可以是所有 window 里, 你只需敲3下, 就可以
到你想要到达的地方.
键入 <code>C-c SPC</code> 后, mini-buff 会问你单词第一个字符是啥,键入后整个页面会
灰掉, 所有出现你输入的字符的位置会以 a-z 代替, 键入 你想去得位置的代码
即可.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> language</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> js2-mode</h3>
<div class="outline-text-3" id="text-2-1">
<p>
best javascript modex
</p>
</div>
</div>

<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> <a href="https://github.com/rooney/zencoding">zencoding-mode</a></h3>
<div class="outline-text-3" id="text-2-2">
<p>
a neat way to write markup quickly in emacs 
用 css selector 写 html, zencoding + yas, 这个模式其他编辑器如vim
sublime 也有插件, 非常好用.
</p>
</div>
</div>

<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> <a href="http://web-mode.org/">web-mode</a></h3>
<div class="outline-text-3" id="text-2-3">
<p>
我认为比较好用的 web 编辑模式
快捷键好多, 有的背了, whee&#x2026;.
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
跟 vim 的powerline 一样, 让你的 mainline 带颜色<sup><a id="fnr.2.100" name="fnr.2.100" class="footref" href="#fn.2">2</a></sup>
我喜欢骚青的 mainline
</p>
</div>
</div>
<div id="outline-container-sec-4-3" class="outline-3">
<h3 id="sec-4-3"><span class="section-number-3">4.3</span> Cursor</h3>
<div class="outline-text-3" id="text-4-3">
<p>
我喜欢骚青的 cursor
</p>
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
<h2 id="sec-5"><span class="section-number-2">5</span> org-mode</h2>
<div class="outline-text-2" id="text-5">
<ul class="org-ul">
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
<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> <p class="footpara">
Emacs Lisp Package Archive: 这是一个放 package 的地方, 类似
apt-get 的源, 你可以用 list-package 列出 package 或者直接
package-install 来安装 package. 我用的源是 <a href="http://tromey.com/elpa/">http://tromey.com/elpa/</a>
和 <a href="http://melpa.milkbox.net">http://melpa.milkbox.net</a>
</p></div>

<div class="footdef"><sup><a id="fn.2" name="fn.2" class="footnum" href="#fnr.2">2</a></sup> <p class="footpara">
emacs 各种名词 看这里
</p></div>


</div>
</div>
