---
layout: post
title: "Agile Python"
date: 2013-06-11 01:40
comments: true
categories: ["python","mock","nosetests"]
---
<p>
最近在用 <a href="https://nose.readthedocs.org/en/latest/">nosetests</a> 和 <a href="https://pypi.python.org/pypi/mock">mock</a><sup><a id="fnr.1" name="fnr.1" class="footref" href="#fn.1">1</a></sup> 为 bottle 应用测试, 发现几个使用nosetests 要注意的
地方:
</p>
<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> patch method of module</h2>
<div class="outline-text-2" id="text-1">
<p>
patch 一个导入 module 的 method, 因为 method 已经被导入到目标文件, 因此必须
要 patch 目标文件的 该方法, 而不是原 module.
</p>
<div class="org-src-container">

<pre class="src src-python"><span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">wsgi.py</span>
<span style="color: #66D9EF;">from</span> <span style="color: #F8F8F2; background-color: #1B1D1E;">db</span> <span style="color: #66D9EF;">import</span> get_db

<span style="color: #66D9EF;">def</span> <span style="color: #F92672; font-style: italic;">insert_something</span>():
    get_db().insert(something)

<span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">test.py</span>
<span style="color: #66D9EF;">import</span> wsgi

<span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">@patch('db.get_db') # this won't work</span>
<span style="color: #66D9EF;">@patch</span>(<span style="color: #E6DB74;">'wsgi.get_db'</span>) <span style="color: #465457; font-style: italic;"># should patch wsgi</span>
<span style="color: #66D9EF;">def</span> <span style="color: #F92672; font-style: italic;">test_insert</span>(mock_get_db):
    <span style="color: #F8F8F2; background-color: #1B1D1E;">mock_get_db.return_value</span> = Database()
    ...
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> patch decorator</h2>
<div class="outline-text-2" id="text-2">
<p>
<b>Scenario</b> : bottle 的 views 是用 decorator 来定义的, 也就是说当我们测试 bottle 中
得 action 时其实这个 action 是被 views 包住的. return 的 dict 会被
bottle 的 views 函数 render 成 html 并返回. 而我们并不需要测试 views
返回的 html, 而只需要测试 return 的 dict 是否正确.
</p>

<p>
这种情况太适合 mock 的 patch 来干了.
</p>
<ol class="org-ol">
<li>patch bottle.view
</li>
<li>让其返回一个神马都没干的函数
</li>
<li>启动这个patch
</li>
<li>导入需要测试的应用代码
</li>
</ol>
<p>
<b>注意</b> 这里的patch必须在 import 你的 application 之前, 比如我的应用是
<code>wsgi.py</code>
</p>

<p>
完整过程是这样的
</p>
<div class="org-src-container">

<pre class="src src-python"><span style="color: #66D9EF;">from</span> mock <span style="color: #66D9EF;">import</span> patch, Mock
<span style="color: #66D9EF;">import</span> bottle
<span style="color: #F8F8F2; background-color: #1B1D1E;">v</span> = patch(<span style="color: #E6DB74;">"bottle.view"</span>,return_value = <span style="color: #66D9EF;">lambda</span> x : x)
v.start() ** &#20351;&#29992; local config &#26469;&#23384;&#25918;&#20320;&#30340;&#23494;&#21273;
<span style="color: #66D9EF;">import</span> wsgi
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> mock module that may not exist</h2>
<div class="outline-text-2" id="text-3">
<p>
<b>Scenario</b>: 一些带有密匙的配置文件(比如 google api key 之类的)并不希望被上传到 github public 上,
但是测试又需要引入这些文件.(后来我发现了更 elegant 的解决方式 <a href="#sec-5">使用
local config 来存放你的密匙</a>).
假设现在含密匙的配置文件叫 config.py, 目标文件是 wsgi.py
</p>

<p>
这样的话用 patch 不会起任何作用, 因为在你 patch 的时候, 必须要首先引
入目标文件, 因此目标文件中的import config 会先抛异常.
</p>

<p>
好吧, 现在我们必须在引入 wsgi 之前就 patch config. 我们将直接让系统的
config 模块等于 mock 的 config. 这样再引入 wsgi 就没有任何问题了.
</p>

<div class="org-src-container">

<pre class="src src-python"><span style="color: #66D9EF;">import</span> sys
<span style="color: #F8F8F2; background-color: #1B1D1E;">config_mock</span> = Mock(spec=[<span style="color: #E6DB74;">'config'</span>])
<span style="color: #F8F8F2; background-color: #1B1D1E;">config_mock.__name__</span> = <span style="color: #E6DB74;">'config'</span>
<span style="color: #F8F8F2; background-color: #1B1D1E;">sys.modules</span>[<span style="color: #E6DB74;">'config'</span>] = config_mock
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> 使用 travis ci 持续集成</h2>
<div class="outline-text-2" id="text-4">
<p>
持续集成最简单的配置当然是 <a href="http://travis-ci.org/">Travis CI</a>. 只需要 增加配置文件
<code>.travis.yml</code>, 只需要定义4个东西.
下面是我的 <code>.travis.yml</code>
</p>
<pre class="example">
language: python
python:
  - "2.7" # version

install: "pip install -r requirements.txt --use-mirrors"  # requirements

script: nosetests  # test or build command
</pre>
</div>
</div>

<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> 使用 local config 来存放你的密匙</h2>
<div class="outline-text-2" id="text-5">
<p>
这种方式源于 django. 突然想到 django 的 settings.py 最后几行
</p>

<div class="org-src-container">

<pre class="src src-python"><span style="color: #66D9EF;">try</span>:
    <span style="color: #66D9EF;">from</span> local_settings <span style="color: #66D9EF;">import</span> *
<span style="color: #A6E22E;">except</span>:
    <span style="color: #66D9EF;">pass</span>
</pre>
</div>

<p>
意思是从 <code>local_settings</code> 里的所有设置导入, 因此可以把真的带密匙的真是配置
写到 <code>local_settings</code> 中.
</p>
</div>
</div>
<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> <p class="footpara">
: mock is now part of the python 3 now. Whee&#x2026;..
</p></div>


</div>
</div>
