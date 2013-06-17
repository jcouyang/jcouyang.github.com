---
layout: post
title: "emacs tricks"
date: 2013-06-11 17:17
comments: true
categories: 
---
<p>
总结一下自己觉得有用的 emacs tricks
</p>

<p>
首先, 上手最好先使用 emacs-starter-kit. 里面包含了emacs各种常用的的插
件. 也就是说基本上所有可能会有用又好用的mode都已经安装了. 当然, 还是有
一些需要手动安装盒根据自己习惯调整的地方.
</p>


<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Editting</h2>
<div class="outline-text-2" id="text-1">
<ul class="org-ul">
<li>Moving Ctrl Key: 将 <code>Caps</code> 定义成 Ctrl
</li>
<li>zap-to-char
</li>
<li>M-SPC: remove extra space
</li>
<li>mark: go back to place where you have edit
</li>
</ul>
<p>
insert register with <code>C-x r i</code>, <code>C-u C-SPC</code>
</p>
<ul class="org-ul">
<li>Use M-m instead of C-a TAB
</li>
<li>bind RET to ='reindent-then-newline-and-indent=
</li>
</ul>
<div class="org-src-container">

<pre class="src src-lisp"><span style="color: #7f7f7f;">(</span>global-set-key <span style="color: #7f7f7f;">(</span>kbd <span style="color: #E6DB74;">"RET"</span><span style="color: #7f7f7f;">)</span> 'reindent-then-newline-and-indent<span style="color: #7f7f7f;">)</span>.
</pre>
</div>
<ul class="org-ul">
<li>use <code>C-s C-w</code> to search current pointed word, and you can type
several times <code>C-w</code> to select more words.
</li>
<li>auth-highlight-mode
</li>
</ul>
</div>
</div>

<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Buffer and Files</h2>
<div class="outline-text-2" id="text-2">
<ul class="org-ul">
<li>Git
</li>
<li>Ediff with Git
</li>
<li>Eshell: actually is shell implement in lisp
</li>
<li></li>
</ul>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> GTD</h2>
<div class="outline-text-2" id="text-3">
<ul class="org-ul">
<li>org-mode
</li>
<li>markdown-mode
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> Appearance</h2>
<div class="outline-text-2" id="text-4">
<ul class="org-ul">
<li>ColorTheme
</li>
<li>Cursor
</li>
<li></li>
</ul>
</div>
</div>
