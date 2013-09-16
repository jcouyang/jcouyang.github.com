---
layout: page
title:  "steckemacs - 真正高端!大气!上档次!的emacs 自动配置工具"
date: 2013-09-08 09:16
comments: true
---
<div class="org-src-container">

<pre class="src src-emacs-lisp">(org-babel-tangle-file "steckemacs.org" "steckemacs.el" "emacs-lisp")
</pre>
</div>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Usage</h2>
<div class="outline-text-2" id="text-1">
<p>
有同学问初学有个什么starter-kit之类的, 虽然我之前也在用
emacs-starter-kit, 但是那玩意其实对 emacs 24 来说已经很鸡肋了. emacs
24 对包管理这块做的已经足够好, 因此, 配置 emacs 24 会变得容易的多.
</p>

<p>
我也不知道在哪翻出来的这个 repo, 正好同时解决了新手配置以及文档化的问
题. 所以我决定从 starter-kit 迁过来, 这样以后只用维护这个博客即可.
</p>

<p>
这是 <a href="https://github.com/steckerhalter/steckemacs"><b>steckemacs</b></a> 的一个<a href="http://github.com/geogeo/steckemacs">folk</a>. <b>steckemacs</b> 是集成了60多个pakage的emacs配置文件.作者是steck.
</p>

<p>
当然我在这个 folk 里面添加了一些自己偏好的一些package, 也删除了一些鸡肋
的package.
</p>

<p>
另外,这篇文章的特别之处是它本身会被编译成 elisp 配置文件.
因此,在更新这篇博客的同时,配置文件也随之改变. 这叫 <b>Literate Programming</b>
</p>

<p>
另外在使用 aquamacs 的同学也可以使用这个配置, 当然你需要自己下载编译
Aquamacs 3.0
</p>

<pre class="example">
使用这个配置文件需要至少 emacs 24.3.而且要 orgmode 8.0
</pre>
</div>

<div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Installation</h3>
<div class="outline-text-3" id="text-1-1">
<p>
Change to a directory of your choice and clone <b>steckemacs</b>:
</p>

<div class="org-src-container">

<pre class="src src-shell-script">cd &lt;my directory&gt;
git clone https://github.com/steckerhalter/steckemacs.git
</pre>
</div>

<p>
And symlink <code>.emacs</code> into your home directory:
</p>

<div class="org-src-container">

<pre class="src src-shell-script">cd ~
ln -s &lt;path to the directory from above&gt;/.emacs
</pre>
</div>

<p>
That's it. Then you can run emacs and it should pick up the config, install all the packages and make you happy ;)
</p>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> Keyboard shortcuts</h3>
<div class="outline-text-3" id="text-1-2">
<p>
所有的快捷键都写在 keys 表格中, 这个表格会被编译成对应的 elisp 配置.使用了 <code>key-chord</code> 模式,很霸气可以同时按下两个按键组合来完成一个命令.
</p>

<p>
当然在这个表格里只是我自己的偏好设置,你可以根据自己的偏好更改这个表格.
</p>
</div>
<div id="outline-container-sec-1-2-1" class="outline-4">
<h4 id="sec-1-2-1"><span class="section-number-4">1.2.1</span> General</h4>
<div class="outline-text-4" id="text-1-2-1">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-h x</code></td>
<td class="left">Kill emacs (including the daemon if it is running)</td>
</tr>

<tr>
<td class="right"><code>C-S-l</code></td>
<td class="left">List available packages</td>
</tr>

<tr>
<td class="right"><code>M-x</code></td>
<td class="left">Helm M-x (execute command)</td>
</tr>

<tr>
<td class="right"><code>C-x b</code></td>
<td class="left">Helm mini</td>
</tr>

<tr>
<td class="right"><code>C-h C-h</code></td>
<td class="left">Helm M-x (execute command)</td>
</tr>

<tr>
<td class="right"><code>C-h h</code></td>
<td class="left">Helm navigate project files</td>
</tr>

<tr>
<td class="right"><code>C-x f</code></td>
<td class="left">Helm for files</td>
</tr>

<tr>
<td class="right"><code>cg</code></td>
<td class="left">Customize group</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-2" class="outline-4">
<h4 id="sec-1-2-2"><span class="section-number-4">1.2.2</span> Interface</h4>
<div class="outline-text-4" id="text-1-2-2">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-c m</code></td>
<td class="left">Toggle the menu bar</td>
</tr>

<tr>
<td class="right"><code>C--</code></td>
<td class="left">Decrease the font size</td>
</tr>

<tr>
<td class="right"><code>C-=</code></td>
<td class="left">Increase the font size</td>
</tr>

<tr>
<td class="right"><code>ln</code></td>
<td class="left">Show/hide the line numbers</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-3" class="outline-4">
<h4 id="sec-1-2-3"><span class="section-number-4">1.2.3</span> Internet</h4>
<div class="outline-text-4" id="text-1-2-3">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-x C-u</code></td>
<td class="left">Prompt for URL and insert contents at point</td>
</tr>

<tr>
<td class="right"><code>C-c C-w</code></td>
<td class="left">Browse URL under cursor</td>
</tr>

<tr>
<td class="right"><code>gt</code></td>
<td class="left">Google "this"</td>
</tr>

<tr>
<td class="right"><code>gs</code></td>
<td class="left">Google search</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-4" class="outline-4">
<h4 id="sec-1-2-4"><span class="section-number-4">1.2.4</span> Editing</h4>
<div class="outline-text-4" id="text-1-2-4">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-h C-c</code></td>
<td class="left">Copy region or current line</td>
</tr>

<tr>
<td class="right"><code>C-h C-n</code></td>
<td class="left">Newline and indent (also on C-j)</td>
</tr>

<tr>
<td class="right"><code>&lt;M-f10&gt;</code></td>
<td class="left">Move line or region up</td>
</tr>

<tr>
<td class="right"><code>C-z</code></td>
<td class="left">Undo - but do not trigger redo</td>
</tr>

<tr>
<td class="right"><code>&lt;M-f9&gt;</code></td>
<td class="left">Move line or region down</td>
</tr>

<tr>
<td class="right"><code>C-S-c C-S-c</code></td>
<td class="left">Edit region with multiple cursors</td>
</tr>

<tr>
<td class="right"><code>C-&lt;</code></td>
<td class="left">Multiple cursors up</td>
</tr>

<tr>
<td class="right"><code>C-&gt;</code></td>
<td class="left">Multiple cursors down</td>
</tr>

<tr>
<td class="right"><code>C-*</code></td>
<td class="left">Mark all like "this" with multiple cursors</td>
</tr>

<tr>
<td class="right"><code>C-h r</code></td>
<td class="left">Query and replace text</td>
</tr>

<tr>
<td class="right"><code>vr</code></td>
<td class="left">Visual regexp/replace</td>
</tr>

<tr>
<td class="right"><code>i9</code></td>
<td class="left">Toggle electric indent mode</td>
</tr>

<tr>
<td class="right"><code>C-c i</code></td>
<td class="left">indent the whole the buffer</td>
</tr>

<tr>
<td class="right"><code>ac</code></td>
<td class="left">Align nearby elements</td>
</tr>

<tr>
<td class="right"><code>C-8</code></td>
<td class="left">Select symbol under cursor, repeat to expand</td>
</tr>

<tr>
<td class="right"><code>M-8</code></td>
<td class="left">Contract the current selection</td>
</tr>

<tr>
<td class="right"><code>M-W</code></td>
<td class="left">Delete region (but don't put it into kill ring)</td>
</tr>

<tr>
<td class="right"><code>C-c q</code></td>
<td class="left">Toggle word wrap</td>
</tr>

<tr>
<td class="right"><code>C-c w</code></td>
<td class="left">Cleanup whitespaces</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-5" class="outline-4">
<h4 id="sec-1-2-5"><span class="section-number-4">1.2.5</span> Source</h4>
<div class="outline-text-4" id="text-1-2-5">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-?</code></td>
<td class="left">Go to definition of function or variable at point</td>
</tr>

<tr>
<td class="right"><code>C-h C-f</code></td>
<td class="left">Go to the definition of the function under cursor</td>
</tr>

<tr>
<td class="right"><code>M-5</code></td>
<td class="left">Helm select etags</td>
</tr>

<tr>
<td class="right"><code>M-6</code></td>
<td class="left">Find tag in a new window</td>
</tr>

<tr>
<td class="right"><code>C-c C-/</code></td>
<td class="left">Edebug defun at point</td>
</tr>

<tr>
<td class="right"><code>C-h C-b</code></td>
<td class="left">Evaluate the current buffer</td>
</tr>

<tr>
<td class="right"><code>C-h C-e</code></td>
<td class="left">Toggle debug on error</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-6" class="outline-4">
<h4 id="sec-1-2-6"><span class="section-number-4">1.2.6</span> Directory</h4>
<div class="outline-text-4" id="text-1-2-6">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-h C-d</code></td>
<td class="left">Open dired in current file location</td>
</tr>

<tr>
<td class="right"><code>sb</code></td>
<td class="left">Open the speedbar</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-7" class="outline-4">
<h4 id="sec-1-2-7"><span class="section-number-4">1.2.7</span> Buffers</h4>
<div class="outline-text-4" id="text-1-2-7">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-h C-s</code></td>
<td class="left">Save the current buffer</td>
</tr>

<tr>
<td class="right"><code>C-c r</code></td>
<td class="left">Revert a buffer to the saved state</td>
</tr>

<tr>
<td class="right"><code>C-x C-b</code></td>
<td class="left">use ido to switch buffers</td>
</tr>

<tr>
<td class="right"><code>&lt;f6&gt;</code></td>
<td class="left">Kill current buffer</td>
</tr>

<tr>
<td class="right"><code>&lt;f8&gt;</code></td>
<td class="left">Switch to "other" buffer</td>
</tr>

<tr>
<td class="right"><code>jn</code></td>
<td class="left">Switch to "other" buffer</td>
</tr>

<tr>
<td class="right"><code>fv</code></td>
<td class="left">Kill current buffer</td>
</tr>

<tr>
<td class="right"><code>sv</code></td>
<td class="left">Save the current buffer</td>
</tr>

<tr>
<td class="right"><code>sc</code></td>
<td class="left">Switch to scratch buffer</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-8" class="outline-4">
<h4 id="sec-1-2-8"><span class="section-number-4">1.2.8</span> History</h4>
<div class="outline-text-4" id="text-1-2-8">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-h v</code></td>
<td class="left">Helm show the kill ring</td>
</tr>

<tr>
<td class="right"><code>C-h m</code></td>
<td class="left">Helm show all mark rings</td>
</tr>

<tr>
<td class="right"><code>C-3</code></td>
<td class="left">Go backward in movement history</td>
</tr>

<tr>
<td class="right"><code>C-4</code></td>
<td class="left">Go forward in movement history</td>
</tr>

<tr>
<td class="right"><code>M-y</code></td>
<td class="left">show kill ring in helm</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-9" class="outline-4">
<h4 id="sec-1-2-9"><span class="section-number-4">1.2.9</span> Occur</h4>
<div class="outline-text-4" id="text-1-2-9">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-c SPC</code></td>
<td class="left">ace jump mode</td>
</tr>

<tr>
<td class="right"><code>M-2</code></td>
<td class="left">Show all symbols like the one cursor is located at</td>
</tr>

<tr>
<td class="right"><code>M-3</code></td>
<td class="left">Previous symbol like the one the cursor is on</td>
</tr>

<tr>
<td class="right"><code>M-4</code></td>
<td class="left">Next symbol like the one the cursor is on</td>
</tr>

<tr>
<td class="right"><code>M-9</code></td>
<td class="left">Helm search for occurences in open buffers</td>
</tr>

<tr>
<td class="right"><code>34</code></td>
<td class="left">Helm imenu</td>
</tr>

<tr>
<td class="right"><code>ok</code></td>
<td class="left">Projectile multiple occur</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-10" class="outline-4">
<h4 id="sec-1-2-10"><span class="section-number-4">1.2.10</span> Windows</h4>
<div class="outline-text-4" id="text-1-2-10">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-0</code></td>
<td class="left">Select previous window</td>
</tr>

<tr>
<td class="right"><code>C-9</code></td>
<td class="left">Select next window</td>
</tr>

<tr>
<td class="right"><code>&lt;f4&gt;</code></td>
<td class="left">Delete current window (not the buffer)</td>
</tr>

<tr>
<td class="right"><code>&lt;f5&gt;</code></td>
<td class="left">Only keep the current window and delete all others</td>
</tr>

<tr>
<td class="right"><code>&lt;f7&gt;</code></td>
<td class="left">Toggle arrangement of two windows horizontally/vertically</td>
</tr>

<tr>
<td class="right"><code>&lt;M-up&gt;</code></td>
<td class="left">Move the current buffer window up</td>
</tr>

<tr>
<td class="right"><code>&lt;M-down&gt;</code></td>
<td class="left">Move the current buffer window down</td>
</tr>

<tr>
<td class="right"><code>&lt;M-left&gt;</code></td>
<td class="left">Move the current buffer window left</td>
</tr>

<tr>
<td class="right"><code>&lt;M-right&gt;</code></td>
<td class="left">Move the current buffer window right</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-11" class="outline-4">
<h4 id="sec-1-2-11"><span class="section-number-4">1.2.11</span> Find/Grep</h4>
<div class="outline-text-4" id="text-1-2-11">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>vg</code></td>
<td class="left">VC git grep</td>
</tr>

<tr>
<td class="right"><code>C-h C-g</code></td>
<td class="left">Grep find</td>
</tr>

<tr>
<td class="right"><code>C-c o</code></td>
<td class="left">list matching regexp</td>
</tr>

<tr>
<td class="right"><code>C-h C-a</code></td>
<td class="left">Use the ag cli tool to grep project</td>
</tr>

<tr>
<td class="right"><code>C-h C-l</code></td>
<td class="left">Helm locate</td>
</tr>

<tr>
<td class="right"><code>C-h C-z</code></td>
<td class="left">Projectile find file</td>
</tr>

<tr>
<td class="right"><code>C-h g</code></td>
<td class="left">Projectile grep</td>
</tr>

<tr>
<td class="right"><code>C-h z</code></td>
<td class="left">Projectile ack</td>
</tr>

<tr>
<td class="right"><code>M-0</code></td>
<td class="left">Helm find files with Git</td>
</tr>

<tr>
<td class="right"><code>C-x g</code></td>
<td class="left">&#xa0;</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-12" class="outline-4">
<h4 id="sec-1-2-12"><span class="section-number-4">1.2.12</span> VCS</h4>
<div class="outline-text-4" id="text-1-2-12">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-c g</code></td>
<td class="left">Magit status - manual: <a href="http://magit.github.io/magit/">http://magit.github.io/magit/</a></td>
</tr>

<tr>
<td class="right"><code>C-c l</code></td>
<td class="left">Magit log</td>
</tr>

<tr>
<td class="right"><code>bm</code></td>
<td class="left">Magit blame mode</td>
</tr>
</tbody>
</table>
</div>
</div>

<div id="outline-container-sec-1-2-13" class="outline-4">
<h4 id="sec-1-2-13"><span class="section-number-4">1.2.13</span> Open</h4>
<div class="outline-text-4" id="text-1-2-13">
<table border="2" cellspacing="0" cellpadding="4" rules="all" frame="hsides">


<colgroup>
<col class="right"/>

<col class="left"/>
</colgroup>
<tbody>
<tr>
<td class="right"><code>C-c c</code></td>
<td class="left">Open deft (quick notes tool)</td>
</tr>

<tr>
<td class="right"><code>C-c s</code></td>
<td class="left">Open emacs shell</td>
</tr>

<tr>
<td class="right"><code>C-h t</code></td>
<td class="left">Org mode capture (todo)</td>
</tr>

<tr>
<td class="right"><code>C-h n</code></td>
<td class="left">Open Org mode agenda</td>
</tr>
</tbody>
</table>


<p>
This table is generated with an Elisp block <code>keys-doc</code> from an Org
table which is also used in the code <i>further below</i>.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> Contributions</h3>
<div class="outline-text-3" id="text-1-3">
<p>
I'm using <b>org-mode</b> to manage <b>steckemacs</b>. <code>.emacs</code> loads <code>steckemacs.org</code>, exports all the code blocks to <code>steckemacs.el</code> and loads that file to initialize Emacs.
</p>

<p>
You can find more information about <b>Literate Programming</b> and <b>org-mode</b> here: <a href="http://orgmode.org/worg/org-contrib/babel/intro.html#literate-programming">http://orgmode.org/worg/org-contrib/babel/intro.html#literate-programming</a>
</p>

<p>
If you want to help me out improving the config, fork the repo, create a new branch and open up a Pull Request so we can discuss the merge.
</p>

<p>
Of course you can also just <a href="https://github.com/steckerhalter/steckemacs/issues">report issues</a> :)
</p>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Code</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> Load Path</h3>
<div class="outline-text-3" id="text-2-1">
<p>
这里配置了 emacs 的 load path.
</p>
<div class="org-src-container">

<pre class="src src-emacs-lisp">(let ((default-directory "~/.emacs.d/elisp/"))
  (unless (file-exists-p default-directory)
    (make-directory default-directory))
  (setq load-path
        (append
         (let ((load-path (copy-sequence load-path))) ;; Shadow
           (append
            (copy-sequence (normal-top-level-add-to-load-path '(".")))
            (normal-top-level-add-subdirs-to-load-path)))
         load-path)))
</pre>
</div>

<p>
Here we create the directory <code>~/.emacs.d/elisp/</code> if it does not exist, add it to the <code>load-path</code> and also add all subdirectories. Doing that any <code>.el</code> or <code>.elc</code> files in these directories will be available to <b>emacs</b>.
</p>
</div>
</div>
<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> Online Check</h3>
<div class="outline-text-3" id="text-2-2">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq stk/onlinep nil)
(unless
    (condition-case nil
        (delete-process
         (make-network-process
          :name "stk/check-internet"
          :host "elpa.gnu.org"
          :service 80))
      (error t))
  (setq stk/onlinep t))
</pre>
</div>

<p>
判断当前是否联网.国内连elpa.gun.org会很慢,所以最好该成别的镜像.
Try to open a connection to <code>elpa.gnu.org</code> and if it succeeds set <code>stk/onlinep</code> to true. We use this flag later for network related operations.
</p>
</div>
</div>
<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> El-Get</h3>
<div class="outline-text-3" id="text-2-3">

<div id="el-get-logo" class="figure">
<p><img src="https://raw.github.com/dimitri/el-get/master/logo/el-get.png"  alt="el-get.png"/></p>
<p>El-Get Logo</p>
</div>

<blockquote>
<p>
El-Get 让你可以自定义 el-get-sources, el-get会从这些地方下载package
</p>
</blockquote>


<div id="fig:dimitri" class="figure">
<p><img src="http://tapoueh.org/images/dim.jpeg"  alt="dim.jpeg"/></p>
<p>Dimitri Fontaine</p>
</div>

<p>
Dimitri (on the image above, <a href="#fig:dimitri">2</a>) is the clever guy that brougth us El-Get. The code is hosted <a href="https://github.com/dimitri/el-get">on Github</a>.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp"><span class="linenr"> 1: </span>; (add-to-list 'load-path "~/.emacs.d/el-get/el-get")
<span class="linenr"> 2: </span> (setq el-get-install-skip-emacswiki-recipes t)
<span class="linenr"> 3: </span> (unless (require 'el-get nil 'noerror)
<span class="linenr"> 4: </span>   (if stk/onlinep
<span class="linenr"> 5: </span>     (with-current-buffer
<span class="linenr"> 6: </span>         (url-retrieve-synchronously
<span class="linenr"> 7: </span>          "https://raw.github.com/dimitri/el-get/master/el-get-install.el")
<span class="linenr"> 8: </span>       (goto-char (point-max))
<span class="linenr"> 9: </span>       (eval-print-last-sexp))
<span class="linenr">10: </span>     (error "El-Get is not installed and we are unable to download it without an internet connection: cannot continue")
<span class="linenr">11: </span>     ))
</pre>
</div>

<p>
This sets up the load path and fetches and evaluates the stable El-Get branch if not already loaded (as described <a href="https://github.com/dimitri/el-get#basic-setup">on Github</a>). In line <a href="#coderef-wiki"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-wiki');" onmouseout="CodeHighlightOff(this, 'coderef-wiki');">nil</a> we make sure El-Get doesn't load all the Wiki recipes as we don't use them.
</p>

<p>
These are simple El-Get recipes that will either fetch single Elisp files or clone a Git repo. The <code>ob-php</code> recipe uses a neat El-Get feature that allows to do some preparation after the installation.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq el-get-sources
      '(
        (:name evernote-dev-mode
               :type git
               :url "https://github.com/geogeo/evernote-dev-mode")

        ))
</pre>
</div>

<div class="org-src-container">

<pre class="src src-emacs-lisp"><span class="linenr">1: </span>(setq my-el-get-packages
<span class="linenr">2: </span>      (append
<span class="linenr">3: </span>       '()
<span class="linenr">4: </span>       (mapcar 'el-get-source-name el-get-sources)))
<span class="linenr">5: </span>
<span class="linenr">6: </span>(when stk/onlinep
<span class="linenr">7: </span>  (el-get 'sync my-el-get-packages)
<span class="linenr">8: </span>  (add-to-list 'after-init-hook (lambda () (el-get-update-all t))))
</pre>
</div>
<p>
The sync function expects the package names which are extracted from <code>el-get-sources</code>. In line <a href="#coderef-sync"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-sync');" onmouseout="CodeHighlightOff(this, 'coderef-sync');">nil</a> El-Get does the magic and gets the packages specified in <code>el-get-sources</code>. After that we instruct the <code>after-init-hook</code> to update all El-Get packages. Hooks are variables containing a list of functions that are executed when the specific hook is run, in this case after the init file has finished loading. El-Get would stall the init when I tried updating the packages at this point so I had to defer that.
</p>
</div>
</div>
<div id="outline-container-sec-2-4" class="outline-3">
<h3 id="sec-2-4"><span class="section-number-3">2.4</span> Packages</h3>
<div class="outline-text-3" id="text-2-4">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq package-archives '(("gnu" . "http://elpa.gnu.org/packages/")
("elpa" . "http://tromey.com/elpa/")
                         ("marmalade" . "http://marmalade-repo.org/packages/")
                         ("melpa" . "http://melpa.milkbox.net/packages/")))
</pre>
</div>
<p>
设置了四个 package 的源.
This adds two remote package repositories. The repo from the FSF is already included in Emacs 24 (see <a href="http://elpa.gnu.org/">http://elpa.gnu.org/</a>).
</p>

<p>
<a href="http://marmalade-repo.org/">Marmalade</a> is run by Nic Ferrier who wrote the Emacs webserver <a href="http://elnode.org/">Elnode</a>. Some packages are slightly outdated but it's still a useful resource.
</p>

<p>
The best repository by far is <a href="http://melpa.milkbox.net/">MELPA</a>. It builds packages directly from upstream source code. There's a nice <a href="https://twitter.com/melpa_emacs">Twitter Feed</a> showing the packages that have been updated, which is great to discover new modes.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq my-packages

      '(ack-and-a-half ; ack, replacement for 99% grep
        ac-nrepl       ; auto-complete for nrepl
        ac-slime       ; 
        ace-jump-mode  ; vim like f
        ag             ; "the silver searcher" ack replacment
        auto-complete  
        back-button
        ;clojure-mode
        deft
        ;color-theme
        color-theme-molokai
        dired+
        erc-hl-nicks  ; nickname highlighter 
        expand-region
        fasd
        fic-ext-mode   ; fix/todo/bug special face
        flycheck
        gist
        google-this
        grizzl          ; https://github.com/d11wtq/grizzl
        haskell-mode
        hide-comnt     ; Hide/show comments in code.
        highlight
        helm
        helm-descbinds   ; describ bindings
        helm-c-yasnippet ; 
        helm-gtags
        helm-git
        helm-projectile
        highlight-symbol ;https://github.com/bbatsov/projectile
        ido-at-point  ;display possible completions via ido–completing-read
        iedit ; edit multiple occurrence
        js2-mode
        json-mode
        key-chord
        magit
        markdown-mode+
        mmm-mode ; multiple minor mode
        mo-git-blame
        move-text
        multi-web-mode
        multiple-cursors
        on-screen
        popup
        pos-tip
        rainbow-mode
        robe   ; for ruby
        skewer-mode
        smart-mode-line
        smartparens
        tern   ;JavaScript code analyzer
        tern-auto-complete
        visual-regexp
        volatile-highlights   ;highlights changes
        yaml-mode
        yasnippet)
      )
</pre>
</div>

<p>
非常大的一个安装列表, 这里不做说明了,后面会详细在配置这些包得时候解释.
</p>
<div class="org-src-container">

<pre class="src src-emacs-lisp">(when stk/onlinep
  (package-refresh-contents)
  (mapcar 'package-install
          (loop for p in my-packages
                unless (package-installed-p p) collect p)))
</pre>
</div>

<p>
这段代码检查网络连接, 如果ok则安装所有包.
</p>
</div>
</div>
<div id="outline-container-sec-2-5" class="outline-3">
<h3 id="sec-2-5"><span class="section-number-3">2.5</span> Key Bindings</h3>
<div class="outline-text-3" id="text-2-5">
<p>
emacs 最大亮点之一就是其快捷键众多, 当然用户都喜欢根据自身爱好定义最高效的
快捷键, 因此, 把这些定义都放到这里定义更方便与管理,更新,和查找.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(defvar my-keys-minor-mode-map (make-keymap) "my-keys-minor-mode keymap.")
</pre>
</div>

<p>
这里是定义了 <code>my-key-minor-mode-map</code> 变量, 保存所有自定义的快捷键.这个
变量会再最后一段代码中用到.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(key-chord-mode 1)
(setq key-chord-two-keys-delay 0.03)
</pre>
</div>

<blockquote>
<p>
Key-chord lets you bind commands to combination of key-strokes. Here a "key chord" means two keys pressed simultaneously, or a single key quickly pressed twice.
</p>
</blockquote>

<p>
设置成 0.03 秒这样 key-chord 不会太容易被 trigger
</p>
<div class="org-src-container">

<pre class="src src-emacs-lisp">(global-set-key (kbd "C-h x") (lambda () (interactive) (shell-command "pkill emacs")))
(global-set-key (kbd "C-S-l") 'package-list-packages-no-fetch)
(global-set-key (kbd "M-x") 'helm-M-x)
(global-set-key (kbd "C-x b") 'helm-mini)
(global-set-key (kbd "C-h C-h") 'helm-M-x)
(global-set-key (kbd "C-h h") 'helm-projectile)
(global-set-key (kbd "C-x f") 'helm-for-files)
(key-chord-define-global "cg" 'customize-group)
(global-set-key (kbd "C-c m") 'menu-bar-mode)
(global-set-key (kbd "C--") 'text-scale-decrease)
(global-set-key (kbd "C-=") 'text-scale-increase)
(key-chord-define-global "ln" 'linum-mode)
(global-set-key (kbd "C-x C-u") 'stk/url-insert-file-contents)
(global-set-key (kbd "C-c C-w") 'browse-url-at-point)
(key-chord-define-global "gt" 'google-this)
(key-chord-define-global "gs" 'google-search)
(global-set-key (kbd "C-h C-c") 'kill-ring-save)
(global-set-key (kbd "C-h C-n") 'newline-and-indent)
(global-set-key (kbd "&lt;M-f10&gt;") 'move-text-up)
(global-set-key (kbd "C-z") 'undo-only)
(global-set-key (kbd "&lt;M-f9&gt;") 'move-text-down)
(global-set-key (kbd "C-S-c C-S-c") 'mc/edit-lines)
(global-set-key (kbd "C-&lt;") 'mc/mark-previous-like-this)
(global-set-key (kbd "C-&gt;") 'mc/mark-next-like-this)
(global-set-key (kbd "C-*") 'mc/mark-all-like-this)
(global-set-key (kbd "C-h r") 'query-replace)
(key-chord-define-global "vr" 'vr/replace)
(key-chord-define-global "i9" 'electric-indent-mode)
(global-set-key (kbd "C-c i") (lambda () (interactive) (indent-region (point-min) (point-max))))
(key-chord-define-global "ac" 'align-current)
(global-set-key (kbd "C-8") 'er/expand-region)
(global-set-key (kbd "M-8") 'er/contract-region)
(global-set-key (kbd "M-W") 'delete-region)
(global-set-key (kbd "C-c q") 'auto-fill-mode)
(global-set-key (kbd "C-c w") 'whitespace-cleanup)
(global-set-key (kbd "C-?") 'stk/find-function-or-variable-at-point)
(global-set-key (kbd "C-h C-f") 'find-function-at-point)
(global-set-key (kbd "M-5") 'helm-etags-select)
(global-set-key (kbd "M-6") 'find-tag-other-window)
(global-set-key (kbd "C-c C-/") 'edebug-defun)
(global-set-key (kbd "C-h C-b") 'eval-buffer)
(global-set-key (kbd "C-h C-e") 'toggle-debug-on-error)
(global-set-key (kbd "C-h C-d") 'dired-jump)
(key-chord-define-global "sb" 'speedbar)
(global-set-key (kbd "C-h C-s") 'save-buffer)
(global-set-key (kbd "C-c r") 'revert-buffer)
(global-set-key (kbd "C-x C-b") 'ido-switch-buffer)
(global-set-key (kbd "&lt;f6&gt;") (lambda () (interactive) (kill-buffer (buffer-name))))
(global-set-key (kbd "&lt;f8&gt;") (lambda () (interactive) (switch-to-buffer nil)))
(key-chord-define-global "jn" (lambda () (interactive) (switch-to-buffer nil)))
(key-chord-define-global "fv" (lambda () (interactive) (kill-buffer (buffer-name))))
(key-chord-define-global "sv" 'save-buffer)
(key-chord-define-global "sc" (lambda () (interactive)(switch-to-buffer "*scratch*")))
(global-set-key (kbd "C-h v") 'helm-show-kill-ring)
(global-set-key (kbd "C-h m") 'helm-all-mark-rings)
(global-set-key (kbd "C-3") 'back-button-local-backward)
(global-set-key (kbd "C-4") 'back-button-local-forward)
(global-set-key (kbd "M-y") 'helm-show-kill-ring)
(global-set-key (kbd "C-c SPC") 'ace-jump-mode)
(global-set-key (kbd "M-2") 'highlight-symbol-occur)
(global-set-key (kbd "M-3") (lambda () (interactive) (highlight-symbol-jump -1)))
(global-set-key (kbd "M-4") (lambda () (interactive) (highlight-symbol-jump 1)))
(global-set-key (kbd "M-9") 'helm-occur)
(key-chord-define-global "34" 'helm-imenu)
(key-chord-define-global "ok" 'projectile-multi-occur)
(global-set-key (kbd "C-0") (lambda () (interactive) (select-window (previous-window))))
(global-set-key (kbd "C-9") (lambda () (interactive) (select-window (next-window))))
(global-set-key (kbd "&lt;f4&gt;") 'delete-window)
(global-set-key (kbd "&lt;f5&gt;") 'delete-other-windows)
(global-set-key (kbd "&lt;f7&gt;") 'toggle-window-split)
(global-set-key (kbd "&lt;M-up&gt;") 'buf-move-up)
(global-set-key (kbd "&lt;M-down&gt;") 'buf-move-down)
(global-set-key (kbd "&lt;M-left&gt;") 'buf-move-left)
(global-set-key (kbd "&lt;M-right&gt;") 'buf-move-right)
(key-chord-define-global "vg" 'vc-git-grep)
(global-set-key (kbd "C-h C-g") 'grep-find)
(global-set-key (kbd "C-c o") 'occur)
(global-set-key (kbd "C-h C-a") 'ag-project)
(global-set-key (kbd "C-h C-l") 'helm-locate)
(global-set-key (kbd "C-h C-z") 'projectile-find-file)
(global-set-key (kbd "C-h g") 'projectile-grep)
(global-set-key (kbd "C-h z") 'projectile-ack)
(global-set-key (kbd "M-0") 'helm-git-find-files)
(global-set-key (kbd "C-x g") 'helm-do-grep)
(global-set-key (kbd "C-c g") 'magit-status)
(global-set-key (kbd "C-c l") 'magit-log)
(key-chord-define-global "bm" 'magit-blame-mode)
(global-set-key (kbd "C-c c") 'deft)
(global-set-key (kbd "C-c s") 'shell)
(global-set-key (kbd "C-h t") 'org-capture)
(global-set-key (kbd "C-h n") (lambda () (interactive) (org-agenda nil "n")))
</pre>
</div>

<p>
这些快捷键绑定在一个table里定义, 这样便于管理和更新.
</p>
</div>
</div>
<div id="outline-container-sec-2-6" class="outline-3">
<h3 id="sec-2-6"><span class="section-number-3">2.6</span> Settings</h3>
<div class="outline-text-3" id="text-2-6">
</div><div id="outline-container-sec-2-6-1" class="outline-4">
<h4 id="sec-2-6-1"><span class="section-number-4">2.6.1</span> User Settings</h4>
<div class="outline-text-4" id="text-2-6-1">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(when (file-readable-p "~/Development/steckemacs/.user.el") (load "~/Development/steckemacs/.user.el"))
</pre>
</div>

<p>
用户设置, 放一些不想密码或敏感内容. 我配置evernote token
</p>
</div>
</div>
<div id="outline-container-sec-2-6-2" class="outline-4">
<h4 id="sec-2-6-2"><span class="section-number-4">2.6.2</span> Encoding</h4>
<div class="outline-text-4" id="text-2-6-2">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(set-terminal-coding-system 'utf-8)
(set-keyboard-coding-system 'utf-8)
(set-language-environment "UTF-8")
(prefer-coding-system 'utf-8)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-6-3" class="outline-4">
<h4 id="sec-2-6-3"><span class="section-number-4">2.6.3</span> General Settings</h4>
<div class="outline-text-4" id="text-2-6-3">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq
 inhibit-startup-message t
 backup-directory-alist `((".*" . ,temporary-file-directory)) ;don't clutter my fs and put backups into tmp
 auto-save-file-name-transforms `((".*" ,temporary-file-directory t))
 require-final-newline t          ;auto add newline at the end of file
 default-major-mode 'text-mode    ;use text mode per default
 history-length 250        ;default is 30
 locale-coding-system 'utf-8          ;utf-8 is default
 tab-always-indent 'complete          ;try to complete before identing
 confirm-nonexistent-file-or-buffer nil ;don't ask to create a buffer
 vc-follow-symlinks t                   ;follow symlinks automatically
 recentf-max-saved-items 5000           ;same up to 5000 recent files
 kill-ring-max 5000                     ;truncate kill ring after 5000 entries
 mark-ring-max 5000                     ;truncate mark ring after 5000 entries
 )
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-6-4" class="outline-4">
<h4 id="sec-2-6-4"><span class="section-number-4">2.6.4</span> Default Settings</h4>
<div class="outline-text-4" id="text-2-6-4">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq-default
 tab-width 4
 indent-tabs-mode nil                   ;use spaces instead of tabs
 c-basic-offset 4                       ;"tab" with in c-related modes
 c-hungry-delete-key t                  ;delete more than one space
 )
</pre>
</div>

<p>
These have to be set as defaults.
</p>
</div>
</div>
<div id="outline-container-sec-2-6-5" class="outline-4">
<h4 id="sec-2-6-5"><span class="section-number-4">2.6.5</span> Global Modes</h4>
<div class="outline-text-4" id="text-2-6-5">
<div class="org-src-container">

<pre class="src src-emacs-lisp">    (global-auto-revert-mode 1)  ;auto revert buffers when changed on disk
     (blink-cursor-mode 1)       ;no cursor blinking
    (tool-bar-mode -1)           ;disable the awful toolbar
    (menu-bar-mode -1)           ;no menu, you can toggle it with C-c m
    (scroll-bar-mode -1)         ;disable the sroll bar
  (set-cursor-color "green")
(setq default-cursor-type 'box)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-6-6" class="outline-4">
<h4 id="sec-2-6-6"><span class="section-number-4">2.6.6</span> Prompt Behavior</h4>
<div class="outline-text-4" id="text-2-6-6">
<div class="org-src-container">

<pre class="src src-emacs-lisp"><span id="coderef-y-or-n" class="coderef-off"><span class="linenr">1: </span>(defalias 'yes-or-no-p 'y-or-n-p)</span>
<span id="coderef-process-query" class="coderef-off"><span class="linenr">2: </span>(setq kill-buffer-query-functions</span>
<span class="linenr">3: </span>  (remq 'process-kill-buffer-query-function
<span class="linenr">4: </span>         kill-buffer-query-functions))
</pre>
</div>

<p>
In <a href="#coderef-y-or-n"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-y-or-n');" onmouseout="CodeHighlightOff(this, 'coderef-y-or-n');">line 1</a> all "yes" or "no" questions are aliased to "y" or "n". We don't really want to type a full word to answer a question from Emacs
</p>

<p>
Also Emacs should be able to kill processes without asking (<a href="#coderef-process-query"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-process-query');" onmouseout="CodeHighlightOff(this, 'coderef-process-query');">line 2</a>). Got that snippet from: <a href="http://www.masteringemacs.org/articles/2010/11/14/disabling-prompts-emacs/">http://www.masteringemacs.org/articles/2010/11/14/disabling-prompts-emacs/</a>
</p>
</div>
</div>
<div id="outline-container-sec-2-6-7" class="outline-4">
<h4 id="sec-2-6-7"><span class="section-number-4">2.6.7</span> System Specific Settings</h4>
<div class="outline-text-4" id="text-2-6-7">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(when (eq system-type 'gnu/linux)
  (autoload 'ansi-color-for-comint-mode-on "ansi-color" nil t) ;activate coloring
  (add-hook 'shell-mode-hook 'ansi-color-for-comint-mode-on)   ;for the shell
  ;q(setq x-select-enable-clipboard t)                           ;enable copy/paste from emacs to other apps
  )
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-2-7" class="outline-3">
<h3 id="sec-2-7"><span class="section-number-3">2.7</span> Modes</h3>
<div class="outline-text-3" id="text-2-7">
</div><div id="outline-container-sec-2-7-1" class="outline-4">
<h4 id="sec-2-7-1"><span class="section-number-4">2.7.1</span> auto-complete</h4>
<div class="outline-text-4" id="text-2-7-1">
<blockquote>
<p>
Auto-Complete is an intelligent auto-completion extension for Emacs. It extends the standard Emacs completion interface and provides an environment that allows users to concentrate more on their own work.
</p>
</blockquote>


<div id="fig:ac" class="figure">
<p><img src="http://steckerhalter.co.vu/stuff/img/ac.png"  alt="ac.png"/></p>
<p>Auto-Complete</p>
</div>

<p>
It is written by Tomohiro Matsuyama (aka m2ym). He moved the project from <a href="http://cx4a.org/">his personal site</a> to <a href="https://github.com/auto-complete/auto-complete">Github</a> a while ago which helped quite a lot with further development.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'auto-complete-config)
(ac-config-default)
(setq ac-auto-show-menu 0.5)
(setq ac-quick-help-height 50)
(setq ac-quick-help-delay 1)
(setq ac-use-fuzzy t)
(setq ac-disable-faces nil)
(setq ac-quick-help-prefer-x nil)
(setq ac-dwim nil)
</pre>
</div>


<p>
Initial setup:
</p>

<ul class="org-ul">
<li>load the default configuration
</li>
<li>lower the menu delay
</li>
<li>show quick help after 1s
</li>
<li>use fuzzy matching
</li>
</ul>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(add-to-list 'completion-styles 'initials t)
(add-to-list 'completion-at-point-functions
             (lambda ()
               (unless (minibufferp)
                 (auto-complete))))
</pre>
</div>


<blockquote>
<p>
Use Emacs' built-in TAB completion hooks to trigger AC (Emacs &gt;= 23.2)
</p>
</blockquote>

<p>
Got that idea from <a href="https://github.com/purcell/emacs.d/blob/master/init-auto-complete.el">Steve Purcell</a>.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'pos-tip)
(defun stk/ac-show-help (ac-doc-function)
  "Show docs for symbol at point or at beginning of list if not on a symbol.
Pass symbol-name to the function AC-DOC-FUNCTION."
  (interactive)
  (let ((s (symbol-name
            (save-excursion
              (or (symbol-at-point)
                  (progn (backward-up-list)
                         (forward-char)
                         (symbol-at-point)))))))
    (let ((doc-string (funcall ac-doc-function s)))
      (if doc-string
          (if ac-quick-help-prefer-x
              (pos-tip-show doc-string 'popup-tip-face (point) nil -1 60)
            (popup-tip doc-string :point (point)))
        (message "No documentation for %s" s)
        ))))
(define-key lisp-mode-shared-map (kbd "C-c C-d")
  (lambda ()
    (interactive)
    (stk/ac-show-help #'ac-symbol-documentation)))
</pre>
</div>

<p>
I wanted to be able to get a documentation popup without having to trigger auto-complete. It's mostly stolen from <a href="http://jaderholm.com/">Scott Jaderholm</a> (the code is on <a href="http://www.emacswiki.org/emacs/AutoComplete">Emacswiki</a>), but has been made more general to also work with other completion functions.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-2" class="outline-4">
<h4 id="sec-2-7-2"><span class="section-number-4">2.7.2</span> auto-save-buffers-enhanced</h4>
<div class="outline-text-4" id="text-2-7-2">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'auto-save-buffers-enhanced)
(auto-save-buffers-enhanced-include-only-checkout-path t)
(auto-save-buffers-enhanced t)
(setq auto-save-buffers-enhanced-interval 1.5)
(setq auto-save-buffers-enhanced-quiet-save-p t)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-3" class="outline-4">
<h4 id="sec-2-7-3"><span class="section-number-4">2.7.3</span> back-button</h4>
<div class="outline-text-4" id="text-2-7-3">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'back-button)
(back-button-mode 1)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-4" class="outline-4">
<h4 id="sec-2-7-4"><span class="section-number-4">2.7.4</span> fasd</h4>
<div class="outline-text-4" id="text-2-7-4">
<div class="org-src-container">

<pre class="src src-emacs-lisp">;  (global-fasd-mode 1)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-5" class="outline-4">
<h4 id="sec-2-7-5"><span class="section-number-4">2.7.5</span> fic-ext-mode</h4>
<div class="outline-text-4" id="text-2-7-5">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(add-hook 'prog-mode-hook 'fic-ext-mode) ;; highlight TODO/FIXME/...
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-6" class="outline-4">
<h4 id="sec-2-7-6"><span class="section-number-4">2.7.6</span> flycheck-mode</h4>
<div class="outline-text-4" id="text-2-7-6">
<div class="org-src-container">

<pre class="src src-emacs-lisp"> (add-hook 'php-mode-hook 'flycheck-mode)
 (add-hook 'sh-mode-hook 'flycheck-mode)
 (add-hook 'json-mode-hook 'flycheck-mode)
 (add-hook 'nxml-mode-hook 'flycheck-mode)
; (setq flycheck-indication-mode 'right-fringe)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-7" class="outline-4">
<h4 id="sec-2-7-7"><span class="section-number-4">2.7.7</span> google-this</h4>
<div class="outline-text-4" id="text-2-7-7">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(google-this-mode 1)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-8" class="outline-4">
<h4 id="sec-2-7-8"><span class="section-number-4">2.7.8</span> grizzl</h4>
<div class="outline-text-4" id="text-2-7-8">
<blockquote>
<p>
Grizzl is a small utility library to be used in other Elisp code needing fuzzy search behaviour. It is optimized for large data sets, using a special type of lookup table and supporting incremental searches (searches where the result can be narrowed-down by only searching what is already matched).
</p>
</blockquote>

<p>
The source code for Grizzl can be found on <a href="https://github.com/d11wtq/grizzl">Github</a>. It is written by Chris Corbyn who also wrote the PHP REPL <code>Boris</code>.
</p>

<p>
Currently it is used by <a href="https://github.com/bbatsov/projectile">Projectile</a> in my config. I quite like Grizzl. It offers some benefits for when entries are longer. For most cases <code>IDO</code> is better suited though.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq *grizzl-read-max-results* 30)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-9" class="outline-4">
<h4 id="sec-2-7-9"><span class="section-number-4">2.7.9</span> helm</h4>
<div class="outline-text-4" id="text-2-7-9">
<blockquote>
<p>
Helm is incremental completion and selection narrowing framework for Emacs. It will help steer you in the right direction when you're looking for stuff in Emacs (like buffers, files, etc).
</p>

<p>
Helm is a fork of anything.el originaly written by Tamas Patrovic and can be considered to be its successor. Helm sets out to clean up the legacy code in anything.el and provide a cleaner, leaner and more modular tool, that's not tied in the trap of backward compatibility.
</p>
</blockquote>

<p>
The Helm source code can be found <a href="https://github.com/emacs-helm/helm">at Github</a>.
</p>

<p>
You might want to checkout the <a href="https://github.com/emacs-helm/helm/wiki">Helm Wiki</a> for detailed instructions on how Helm works.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'helm-config)
(setq enable-recursive-minibuffers t)
(helm-mode 1)
(helm-gtags-mode 1)
(helm-descbinds-mode)
(setq helm-idle-delay 0.1)
(setq helm-input-idle-delay 0.1)
(setq helm-buffer-max-length 50)
(setq helm-M-x-always-save-history t)
(require 'helm-git)
</pre>
</div>

<p>
I'm not using <a href="https://github.com/emacs-helm/helm/wiki#6-helm-find-files">Helm Find Files</a> to browse files anymore. I tried using it but gave up after a while. I found it to be more cumbersome than <a href="#sec-2-7-12">ido-mode</a>. But in general I really like to have Helm around to get to see all available completions.
</p>

<p>
I use <a href="https://github.com/emacs-helm/helm/wiki#8-helm-m-x">Helm M-x</a> and also the separate <a href="https://github.com/emacs-helm/helm-descbinds">Helm Descbinds</a> (<code>C-h b</code>) to get a quick key bindings overview.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-10" class="outline-4">
<h4 id="sec-2-7-10"><span class="section-number-4">2.7.10</span> highlight-symbol</h4>
<div class="outline-text-4" id="text-2-7-10">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq highlight-symbol-on-navigation-p t)
(setq highlight-symbol-idle-delay 0.2)
(add-hook 'prog-mode-hook 'highlight-symbol-mode)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-11" class="outline-4">
<h4 id="sec-2-7-11"><span class="section-number-4">2.7.11</span> ido-at-point</h4>
<div class="outline-text-4" id="text-2-7-11">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(autoload 'ido-at-point-mode "ido-at-point")
(ido-at-point-mode)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-12" class="outline-4">
<h4 id="sec-2-7-12"><span class="section-number-4">2.7.12</span> ido-mode</h4>
<div class="outline-text-4" id="text-2-7-12">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq ido-enable-flex-matching t
      ido-auto-merge-work-directories-length -1
      ido-create-new-buffer 'always
      ido-everywhere t
      ido-default-buffer-method 'selected-window
      ido-max-prospects 32
      ido-use-filename-at-point 'guess
      )
(ido-mode 1)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-13" class="outline-4">
<h4 id="sec-2-7-13"><span class="section-number-4">2.7.13</span> iedit</h4>
<div class="outline-text-4" id="text-2-7-13">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'iedit)
(setq iedit-unmatched-lines-invisible-default t)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-14" class="outline-4">
<h4 id="sec-2-7-14"><span class="section-number-4">2.7.14</span> js2-mode</h4>
<div class="outline-text-4" id="text-2-7-14">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(add-to-list 'auto-mode-alist '("\\.js$" . js2-mode))

(setq js2-allow-rhino-new-expr-initializer nil)
(setq js2-auto-indent-p nil)
(setq js2-enter-indents-newline nil)
(setq js2-global-externs '("module" "require" "buster" "sinon" "assert" "refute" "setTimeout" "clearTimeout" "setInterval" "clearInterval" "location" "__dirname" "console" "JSON"))
(setq js2-idle-timer-delay 0.1)
(setq js2-indent-on-enter-key nil)
(setq js2-mirror-mode nil)
(setq js2-strict-inconsistent-return-warning nil)
(setq js2-auto-indent-p t)
(setq js2-include-rhino-externs nil)
(setq js2-include-gears-externs nil)
(setq js2-concat-multiline-strings 'eol)
(setq js2-rebind-eol-bol-keys nil)
(setq js2-mode-show-parse-errors nil)
(setq js2-mode-show-strict-warnings nil)

(add-hook 'js2-mode-hook (lambda () (flycheck-mode 1)))
</pre>
</div>

<p>
Got most of that from <a href="https://github.com/magnars/.emacs.d/blob/master/setup-js2-mode.el">Magnars' .emacs.d</a>.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-15" class="outline-4">
<h4 id="sec-2-7-15"><span class="section-number-4">2.7.15</span> json-mode</h4>
<div class="outline-text-4" id="text-2-7-15">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(add-to-list 'auto-mode-alist '("\\.json\\'" . json-mode))
</pre>
</div>

<p>
<code>json-mode</code> adds a bit better syntax highlighting for <code>.json</code> files.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-16" class="outline-4">
<h4 id="sec-2-7-16"><span class="section-number-4">2.7.16</span> magit</h4>
<div class="outline-text-4" id="text-2-7-16">
<p>
Magit is the king of Git interaction for Emacs.
</p>

<p>
There's a short <a href="http://www.emacswiki.org/emacs/Magit#toc1">Crash Course on Emacswiki</a>:
</p>

<div class="org-src-container">

<pre class="src src-org">- M-x magit-status to see git status, and in the status buffer:
- s to stage files
- c to commit (type in your commit message then C-c C-c to save the message and commit)
- b b to switch to a branch

Other handy keys:

- P P to do a git push
- F F to do a git pull

try to press TAB
</pre>
</div>

<p>
I have bound <code>magit-status</code> to <code>C-c g</code> and <code>magit-log</code> to <code>C-c l</code>.
</p>

<p>
See the <a href="http://magit.github.io/magit/magit.html">Magit manual</a> for more information.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(when (fboundp 'file-notify-add-watch)
  (add-hook 'magit-status-mode-hook 'magit-filenotify-mode))
</pre>
</div>

<p>
Committing should act like <code>git commit -a</code> by default.
</p>

<p>
When Emacs has been compiled with inotiy support&#x2026;
</p>

<div class="org-src-container">

<pre class="src src-shell-script">./configure --with-file-notification=inotify
</pre>
</div>

<p>
&#x2026;the function <code>file-notify-add-watch</code> is bound and we add <code>magit-filenotify-mode</code> to the hook so that file updates get reflected automatically in magit status.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-17" class="outline-4">
<h4 id="sec-2-7-17"><span class="section-number-4">2.7.17</span> markdown</h4>
<div class="outline-text-4" id="text-2-7-17">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(add-to-list 'auto-mode-alist '("\\.markdown\\'" . markdown-mode))
(add-to-list 'auto-mode-alist '("\\.md\\'" . markdown-mode))
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-2-7-18" class="outline-4">
<h4 id="sec-2-7-18"><span class="section-number-4">2.7.18</span> on-screen</h4>
<div class="outline-text-4" id="text-2-7-18">
<blockquote>
<p>
滚屏有时会让人很眼花, on-screen可以在衔接处加上一条横线, 这样眼睛就不
用乱看不知道到底翻到哪了.
</p>
</blockquote>

<p>
<code>on-sceen</code> greatly helps to track the current cursor position when scrolling. The source code is available on <a href="https://github.com/michael-heerdegen/on-screen.el/">Github</a>.
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(on-screen-global-mode +1)
(setq on-screen-highlight-method 'narrow-line)
(set-face-underline 'on-screen-narrow-line '(:color "#444" :style wave))
</pre>
</div>

<p>
First we use a <b>Narrow horizontal line</b> instead of the fringe (because that one is already used a lot and it's hard to see the markers) and set the color and style of the line.
The aliases make <code>on-screen</code> a bit more responsive, see <a href="https://github.com/michael-heerdegen/on-screen.el/issues/1">on-screen Github issue</a> for details.
</p>
</div>
</div>

<div id="outline-container-sec-2-7-19" class="outline-4">
<h4 id="sec-2-7-19"><span class="section-number-4">2.7.19</span> deft</h4>
<div class="outline-text-4" id="text-2-7-19">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq
 deft-extension "org"
 deft-directory "~/Dropbox/org/deft"
 deft-text-mode 'org-mode
 deft-use-filename-as-title t
 )
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-2-7-20" class="outline-4">
<h4 id="sec-2-7-20"><span class="section-number-4">2.7.20</span> org-mode</h4>
<div class="outline-text-4" id="text-2-7-20">
<p>
org-mode 真的非常非常非常强大工具,里面有markup, agenda, todo,
appointment, capture, babel, 光是文档就有278页. 现在流行的神马
wunderlist, day one, astrid, google keep 都弱爆了, 这才是真正的 GTD 工
具.
</p>
<div class="org-src-container">

<pre class="src src-emacs-lisp">    (setq org-directory "~/Dropbox/org")

      (let ((todo "~/Dropbox/org/todo.org"))
        (when (file-readable-p todo)
          (setq org-agenda-files '("~/Dropbox/org/todo.org" "~/Dropbox/org/deft/"))
          (setq initial-buffer-choice (lambda ()
                                        (org-agenda nil "n")
                                        (delete-other-windows)
                                        (current-buffer)
                                        ))
          ))
      (add-to-list 'auto-mode-alist '("\\.org\\'" . org-mode))
      (add-to-list 'ac-modes 'org-mode)
      (setq org-startup-folded 'nofold)
      (setq org-startup-indented t)
      (setq org-startup-with-inline-images t)
      (setq org-startup-truncated t)
      (setq org-refile-targets '((org-agenda-files :maxlevel . 5)))
      (setq org-src-fontify-natively t)
      (setq org-src-tab-acts-natively t)
      (setq org-confirm-babel-evaluate nil)
      (setq org-use-speed-commands t)
     (setq org-default-notes-file (concat org-directory "/todo.org"))
      (setq org-capture-templates
            '(
              ("t" "Task" entry (file+headline "" "Tasks") "* TODO %?\n  %u\n  %a")
              ("s" "Simple Task" entry (file+headline "" "Tasks") "* TODO %?\n  %U\n")
              ))

      (add-to-list 'org-structure-template-alist '("E" "#+BEGIN_SRC emacs-lisp\n?\n#+END_SRC\n"))
      (add-to-list 'org-structure-template-alist '("S" "#+BEGIN_SRC shell-script\n?\n#+END_SRC\n"))

      ;; minted
      (add-to-list 'org-latex-packages-alist '("" "minted"))
      (setq org-latex-listings 'minted)

      (setq org-latex-pdf-process
            '("pdflatex -shell-escape -interaction nonstopmode -output-directory %o %f"
              "pdflatex -shell-escape -interaction nonstopmode -output-directory %o %f"
              "pdflatex -shell-escape -interaction nonstopmode -output-directory %o %f"))

      (setq
       appt-display-mode-line t     ; show in the modeline
       appt-display-format 'window)
      (appt-activate 1)              ; activate appt (appointment notification)

      (org-agenda-to-appt)           ; add appointments on startup

      ;; add new appointments when saving the org buffer, use 'refresh argument to do it properly
      (add-hook 'org-mode-hook
                (lambda ()
                  (add-hook 'after-save-hook '(lambda () (org-agenda-to-appt 'refresh)) nil 'make-it-local)
                  (yas-minor-mode -1)
                  (set (make-local-variable 'ac-auto-start) nil)
                  (local-set-key "\C-cd" 'org-toodledo-mark-task-deleted)
                  (local-set-key "\C-cs" 'org-toodledo-sync)
                  ))

      (setq appt-disp-window-function '(lambda (min-to-app new-time msg) (interactive)
                                         (shell-command (concat "notify-send -i /usr/share/icons/gnome/32x32/status/appointment-soon.png '" (format "Appointment in %s min" min-to-app) "' '" msg "'")))
            )
      ;; add state to the sorting strategy of todo
      (setcdr (assq 'todo org-agenda-sorting-strategy) '(todo-state-up priority-down category-keep))
      ;; define todo states: set time stamps one waiting, delegated and done
      (setq org-todo-keywords
            '((sequence
               "TODO(t)"
               "IN PROGRESS(p!)"
               "HOLD(h!)"
               "WAITING(w)"
               "SOMEDAY(s)"
               "|"
               "DONE(d!)"
               "CANCELLED(c)"
               )))
      (setq org-todo-keyword-faces
            '(
              ("IN PROGRESS" . 'warning)
              ("HOLD" . 'font-lock-keyword-face)
              ("WAITING" . 'font-lock-builtin-face)
              ("SOMEDAY" . 'font-lock-doc-face)
              ))
; publish octopress blog
(setq org-publish-project-alist
   '(("blog" .  (:base-directory "~/Dropbox/octopress/source/_org_posts/"
                 :base-extension "org"
                 :publishing-directory "~/Dropbox/octopress/source/_posts/"
                 :sub-superscript ""
                 :recursive t
                 :publishing-function org-html-publish-to-html
                 :headline-levels 4
                 :html-extension "markdown"
                 :body-only t))
; publish this file to blog
("blog" .  (:base-directory "~/Development/steckemacs"
                 :base-extension "org"
                 :publishing-directory "~/Dropbox/octopress/source/emacs/"
                 :sub-superscript ""
                 :recursive t
                 :publishing-function org-html-publish-to-html
                 :headline-levels 4
                 :html-extension "markdown"
                 :body-only t))
))
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-21" class="outline-4">
<h4 id="sec-2-7-21"><span class="section-number-4">2.7.21</span> projectile</h4>
<div class="outline-text-4" id="text-2-7-21">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'projectile nil t)
(setq projectile-completion-system 'grizzl)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-22" class="outline-4">
<h4 id="sec-2-7-22"><span class="section-number-4">2.7.22</span> rainbow-mode</h4>
<div class="outline-text-4" id="text-2-7-22">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(dolist (hook '(css-mode-hook
                html-mode-hook
                js-mode-hook
                emacs-lisp-mode-hook
                org-mode-hook
                text-mode-hook
                ))
  (add-hook hook 'rainbow-mode)
  )
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-23" class="outline-4">
<h4 id="sec-2-7-23"><span class="section-number-4">2.7.23</span> robe</h4>
<div class="outline-text-4" id="text-2-7-23">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(add-hook 'ruby-mode-hook
          (lambda ()
            (robe-mode 1)
            (push 'ac-source-robe ac-sources)))
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-24" class="outline-4">
<h4 id="sec-2-7-24"><span class="section-number-4">2.7.24</span> saveplace</h4>
<div class="outline-text-4" id="text-2-7-24">
<blockquote>
<p>
Automatically save place in each file. This means when you visit a file, point goes to the last place
where it was when you previously visited the same file.
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'saveplace)
(setq-default save-place t)
</pre>
</div>

<p>
I find this quite practical&#x2026;
</p>
</div>
</div>
<div id="outline-container-sec-2-7-25" class="outline-4">
<h4 id="sec-2-7-25"><span class="section-number-4">2.7.25</span> savehist</h4>
<div class="outline-text-4" id="text-2-7-25">
<blockquote>
<p>
Many editors (e.g. Vim) have the feature of saving minibuffer history to an external file after exit.  This package provides the same feature in Emacs. When set up, it saves recorded minibuffer histories to a file.
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq savehist-additional-variables '(kill-ring mark-ring global-mark-ring search-ring regexp-search-ring extended-command-history))
(savehist-mode 1)
</pre>
</div>


<p>
I'm adding a few variables like the <code>extended-command-history</code> that I would like to persist too.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-26" class="outline-4">
<h4 id="sec-2-7-26"><span class="section-number-4">2.7.26</span> skewer</h4>
<div class="outline-text-4" id="text-2-7-26">
<blockquote>
<p>
skewer可以让你用repl控制你的浏览器页面, 有些像 mozrepl 的感觉但是只是
针对页面而不是整个浏览器. 而且配合使用 skewer 的 greasemonkey 插件可以方便的
调试任何页面.
</p>
</blockquote>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(skewer-setup)
</pre>
</div>

<blockquote>
<p>
Provides live interaction with JavaScript, CSS, and HTML in a web browser. Expressions are sent on-the-fly from an editing buffer to be evaluated in the browser, just like Emacs does with an inferior Lisp process in Lisp modes.
</p>
</blockquote>

<p>
The following bookmarklet will load skewer on demand on any website:
</p>

<div class="org-src-container">

<pre class="src src-js">javascript:(function) {
    var d=document;
    var s=d.createElement('script');
    s.src='http://localhost:8080/skewer';
    d.body.appendChild(s);
})()
</pre>
</div>

<p>
Instructions and the source code can be found <a href="https://github.com/skeeto/skewer-mode">on Github</a>.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-27" class="outline-4">
<h4 id="sec-2-7-27"><span class="section-number-4">2.7.27</span> smart-mode-line</h4>
<div class="outline-text-4" id="text-2-7-27">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq sml/show-encoding t)
(setq sml/vc-mode-show-backend t)
(setq sml/override-theme nil)
(sml/setup)
(set-face-attribute 'sml/prefix nil :foreground "#dcf692")
(set-face-attribute 'sml/folder nil :foreground "#f09fff")
(set-face-attribute 'sml/filename nil :foreground "#f6df92")
(set-face-attribute 'sml/vc-edited nil :foreground "#ff5f87")
</pre>
</div>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'smartparens-config)
(smartparens-global-mode t)
(define-key sp-keymap (kbd "M-o") 'sp-backward-sexp)
(define-key sp-keymap (kbd "M-i") 'sp-forward-sexp)
(define-key sp-keymap (kbd "C-{") 'sp-select-previous-thing)
(define-key sp-keymap (kbd "C-}") 'sp-select-next-thing)
(define-key sp-keymap (kbd "C-\\") 'sp-select-previous-thing-exchange)
(define-key sp-keymap (kbd "C-]") 'sp-select-next-thing-exchange)
;; "fix"" highlight issue in scratch buffer
(custom-set-faces '(sp-pair-overlay-face ((t ()))))
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-28" class="outline-4">
<h4 id="sec-2-7-28"><span class="section-number-4">2.7.28</span> sgml</h4>
<div class="outline-text-4" id="text-2-7-28">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq sgml-basic-offset 2)
(add-hook 'sgml-mode-hook 'sgml-electric-tag-pair-mode)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-29" class="outline-4">
<h4 id="sec-2-7-29"><span class="section-number-4">2.7.29</span> slime</h4>
<div class="outline-text-4" id="text-2-7-29">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(when (file-exists-p "~/quicklisp/slime-helper.el") (load "~/quicklisp/slime-helper.el"))
(add-hook 'slime-mode-hook 'set-up-slime-ac)
(add-hook 'slime-repl-mode-hook 'set-up-slime-ac)
(eval-after-load "auto-complete"
  '(add-to-list 'ac-modes 'slime-repl-mode))
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-30" class="outline-4">
<h4 id="sec-2-7-30"><span class="section-number-4">2.7.30</span> tern</h4>
<div class="outline-text-4" id="text-2-7-30">
<p>
A JavaScript code analyzer
非常给力的 javascript 编辑工具, 支持 auto completion, jump to
definition, find type of, rename variable 等 这些 IDE 才能提供的语言向
的支持.
</p>


<div class="org-src-container">

<pre class="src src-emacs-lisp">(when (executable-find "tern")
      (add-hook 'js2-mode-hook (lambda () (tern-mode t)))
      (eval-after-load 'auto-complete
        '(eval-after-load 'tern
           '(progn
              (require 'tern-auto-complete)
              (tern-ac-setup)))))
</pre>
</div>


<p>
Needs the <code>tern</code> binary to be present, which can be installed with <code>npm</code>:
</p>

<div class="org-src-container">

<pre class="src src-shell-script">sudo npm install -g tern
</pre>
</div>

<p>
这里完了要该 tern.el 的一行代码, 傻逼的居然用相对路径
</p>
<pre class="example">
(bin-file (expand-file-name "../bin/tern" (file-name-directory (file-truename script-file)))))
</pre>


<p>
M-.
    Jump to the definition of the thing under the cursor.
M-,
    Brings you back to last place you were when you pressed M-..
C-c C-r
    Rename the variable under the cursor.
C-c C-c
    Find the type of the thing under the cursor.
C-c C-d
    Find docs of the thing under the cursor. Press again to open the associated URL (if any).
</p>

<p>
See the <a href="http://ternjs.net/">project homepage</a> for more info.
</p>
</div>
</div>
<div id="outline-container-sec-2-7-31" class="outline-4">
<h4 id="sec-2-7-31"><span class="section-number-4">2.7.31</span> uniqify</h4>
<div class="outline-text-4" id="text-2-7-31">
<p>
用buffer的部分路径来区分同名的buffer
</p>
<div class="org-src-container">

<pre class="src src-emacs-lisp">(require 'uniquify)
(setq uniquify-buffer-name-style 'forward)
(setq uniquify-min-dir-content 2)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-32" class="outline-4">
<h4 id="sec-2-7-32"><span class="section-number-4">2.7.32</span> yaml-mode</h4>
<div class="outline-text-4" id="text-2-7-32">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq yaml-indent-offset 4)
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-33" class="outline-4">
<h4 id="sec-2-7-33"><span class="section-number-4">2.7.33</span> yasnippets</h4>
<div class="outline-text-4" id="text-2-7-33">
<div class="org-src-container">

<pre class="src src-emacs-lisp">    (yas-global-mode 1)
(yas/load-directory (expand-file-name "snippets" "~/.emacs.d"))
    (setq yas-prompt-functions '(yas-completing-prompt yas-ido-prompt yas-x-prompt yas-dropdown-prompt yas-no-prompt))
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-34" class="outline-4">
<h4 id="sec-2-7-34"><span class="section-number-4">2.7.34</span> w3m</h4>
<div class="outline-text-4" id="text-2-7-34">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(when (require 'w3m nil t)
  (setq
   w3m-use-favicon nil
   w3m-default-display-inline-images t
   w3m-search-word-at-point nil
   w3m-use-cookies t
   w3m-home-page "http://en.wikipedia.org/"
   w3m-cookie-accept-bad-cookies t
   w3m-session-crash-recovery nil)
  (add-hook 'w3m-mode-hook
            (function (lambda ()
                        (set-face-foreground 'w3m-anchor-face "LightSalmon")
                        (set-face-foreground 'w3m-arrived-anchor-face "LightGoldenrod")
                        ;;(set-face-background 'w3m-image-anchor "black")
                        (load "w3m-lnum")
                        (defun w3m-go-to-linknum ()
                          "Turn on link numbers and ask for one to go to."
                          (interactive)
                          (let ((active w3m-lnum-mode))
                            (when (not active) (w3m-lnum-mode))
                            (unwind-protect
                                (w3m-move-numbered-anchor (read-number "Anchor number: "))
                              (when (not active) (w3m-lnum-mode))))
                          (w3m-view-this-url)
                          )
                        (define-key w3m-mode-map "f" 'w3m-go-to-linknum)
                        (define-key w3m-mode-map "L" 'w3m-lnum-mode)
                        (define-key w3m-mode-map "o" 'w3m-previous-anchor)
                        (define-key w3m-mode-map "i" 'w3m-next-anchor)
                        (define-key w3m-mode-map "w" 'w3m-search-new-session)
                        (define-key w3m-mode-map "p" 'w3m-previous-buffer)
                        (define-key w3m-mode-map "n" 'w3m-next-buffer)
                        (define-key w3m-mode-map "z" 'w3m-delete-buffer)
                        (define-key w3m-mode-map "O" 'w3m-goto-new-session-url)
                        )))
  )
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2-7-35" class="outline-4">
<h4 id="sec-2-7-35"><span class="section-number-4">2.7.35</span> yaml-mode</h4>
<div class="outline-text-4" id="text-2-7-35">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(setq yaml-indent-offset 4)
</pre>
</div>
</div>
</div>
</div>

<div id="outline-container-sec-2-8" class="outline-3">
<h3 id="sec-2-8"><span class="section-number-3">2.8</span> Theme, Faces, Frame</h3>
<div class="outline-text-3" id="text-2-8">
<div class="org-src-container">

<pre class="src src-emacs-lisp">  (add-to-list 'default-frame-alist '(alpha 93 80))
  (color-theme-initialize)
  (color-theme-solarized-dark)
    (custom-set-faces
      `(highlight-symbol-face ((t (:background ,"#333"))))
     '(mode-line-inactive ((t (:foreground "#f9f9f9" :background "#666666" :box nil))))
     '(mode-line ((t (:foreground "#030303" :background "#aa2255" :box nil))))
;; helm
     `(helm-buffer-size ((t (:foreground ,"orange"))))
     `(helm-buffer-not-saved ((t (:foreground ,"orange"))))
     `(helm-buffer-saved-out ((t (:foreground ,"red" :background ,"black" :inverse-video t))))
     `(helm-candidate-number ((t (:background ,"black" :foreground ,"yellow" :bold t))))
     `(helm-visible-mark ((t (:background ,"#333" :foreground ,"magenta" :bold t))))
     `(helm-header((t (:inherit header-line))))
     `(helm-selection ((t (:background ,"#333" :underline t))))
     `(helm-selection-line ((t (:background ,"gray" :foreground ,"yellow" :underline nil))))
     `(helm-separator ((t(:foreground ,"red"))))
     `(helm-source-header ((t (:background ,"black", :foreground ,"pink", :underline t, :weight bold))))
     `(helm-ff-directory ((t (:foreground ,"magenta"))))
     `(helm-ff-symlink ((t ( :foreground ,"yellow"))))
 `(mode-line ((t (:foreground ,"#eee" :background ,"#331133"))))
   `(mode-line-inactive ((t (:foreground, "#643" :background ,"#110011" :weight light :box nil :inherit (mode-line )))))
   `(mode-line-buffer-id ((t (:foreground ,"yellow"))))
   `(mode-line-emphasis ((t (:foreground ,"magenta"))))
   `(minibuffer-prompt ((t (:foreground ,"blue"))))
   `(region ((t (:background ,"#34004A"))))
   `(secondary-selection ((t (:background ,"#222"))))
)
</pre>
</div>

<p>
Loading my very own <a href="https://github.com/steckerhalter/grandshell-theme">Grand Shell Theme</a> here. It can be installed via <a href="http://melpa.milkbox.net/#grandshell-theme">MELPA</a>. It looks like this:
</p>


<div id="grand-shell-theme" class="figure">
<p><img src="https://raw.github.com/steckerhalter/grandshell-theme/master/grandshell-theme.png"  alt="grandshell-theme.png"/></p>
<p>Grand Shell Theme</p>
</div>

<div class="org-src-container">

<pre class="src src-emacs-lisp">;(set-face-attribute 'default nil :background "black" :foreground "#babdb6")
</pre>
</div>


<p>
Use a black background and gray text. To set the default font you can use something like this:
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(set-face-attribute 'default nil :family "Bitstream Vera Sans Mono" :height 92)
</pre>
</div>

<p>
Put that line into <code>~/.user.el</code> which is loaded <i>in this init file too.</i>
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp"> (setq frame-title-format
'("" invocation-name " "(:eval (if (buffer-file-name)
                                    (abbreviate-file-name (buffer-file-name))
                                  "%b"))))
</pre>
</div>

<p>
For the frame title either show a file or a buffer name (if the buffer isn't visiting a file).
</p>

<div class="org-src-container">

<pre class="src src-emacs-lisp">(custom-set-variables
 '(ansi-color-names-vector
   [("black" . "#8a8888")
    ("#EF3460" . "#F25A7D")
    ("#BDEF34" . "#DCF692")
    ("#EFC334" . "#F6DF92")
    ("#34BDEF" . "#92AAF6")
    ("#B300FF" . "#DF92F6")
    ("#3DD8FF" . "#5AF2CE")
    ("#FFFFFF" . "#FFFFFF")]))
</pre>
</div>


<p>
For some reason this didn't work with <code>setq</code> so I had to use <code>custom-set-variables</code>. It changes ansi colors for comint mode, e.g. shell-mode
</p>
</div>
</div>
<div id="outline-container-sec-2-9" class="outline-3">
<h3 id="sec-2-9"><span class="section-number-3">2.9</span> end</h3>
<div class="outline-text-3" id="text-2-9">
</div><div id="outline-container-sec-2-9-1" class="outline-4">
<h4 id="sec-2-9-1"><span class="section-number-4">2.9.1</span> my-keys-minor-mode</h4>
<div class="outline-text-4" id="text-2-9-1">
<div class="org-src-container">

<pre class="src src-emacs-lisp">(define-minor-mode my-keys-minor-mode
  "A minor mode so that my key settings override annoying major modes."
  t " K" 'my-keys-minor-mode-map)
(my-keys-minor-mode 1)
</pre>
</div>
</div>
</div>
</div>
</div>
