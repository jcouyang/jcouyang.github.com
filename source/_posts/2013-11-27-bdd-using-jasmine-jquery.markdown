---
layout: post
title: "BDD using jasmine jquery"
date: 2013-11-27 11:06
comments: true
categories: 
---

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> 用 <a href="https://github.com/velesin/jasmine-jquery">jasmine-jquery</a> 来BDD 就是一个bug, 一个大bug</h2>
<div class="outline-text-2" id="text-1">
<p>
参加 TWU 时写 jasmine 测试的时候花了大量时间研究为什么不能绑定事件到
fixture. 这导致 teamate 和我自己都会认为我这个带头引入这么难用的
jasmine 的人简直是要杀千刀. 但是其实问题不是 jasmine <del>当然也不是我</del>,
都是 jasmine-jquery. 
</p>

<p>
不管是 loadfixtures 还是 preload(fixtureUrl[, fixtureUrl, &#x2026;]) 都无法
绑定事件到 fixtures
</p>

<p>
BDD 不就是想要点哪然后看哪得反应&#x2026;结果不知道为什么傻傻的就没有反应.
</p>

<p>
傻兮兮的官方文档是这样的
</p>
<div class="org-src-container">

<pre class="src src-javascript"><span style="color: #728a05;">var</span> <span style="color: #2075c7;">spyEvent</span> = spyOnEvent(<span style="color: #259185;">'#some_element'</span>, <span style="color: #259185;">'click'</span>)
$(<span style="color: #259185;">'#some_element'</span>).click()
expect(<span style="color: #259185;">'click'</span>).toHaveBeenTriggeredOn(<span style="color: #259185;">'#some_element'</span>)
</pre>
</div>
<p>
这&#x2026;不是废话么&#x2026;.这是在测试"测试代码"么?
</p>

<p>
真正关心测试的应该是绑定在click事件上的function, 谁管你被tri没
trigger. 比如我在元素 <code>#anchor_01</code> 上绑定了添加 <code>css class</code> 的事件.那么我
应该这样测试我的 javascript 代码.
</p>

<div class="org-src-container">

<pre class="src src-javascript">describe(<span style="color: #259185;">"when fixture contains an &lt;script src='to/your/source'&gt; tag"</span>, <span style="color: #728a05;">function</span> () {
  <span style="color: #728a05;">var</span> <span style="color: #2075c7;">fixtureUrl</span> = <span style="color: #259185;">"fixture_with_javascript.html"</span>

  it(<span style="color: #259185;">"should load content of fixture file and javascripts and bind events"</span>, <span style="color: #728a05;">function</span> () {
    jasmine.getFixtures().load(fixtureUrl)
    $(<span style="color: #259185;">'#anchor_01'</span>).click()
    expect($(<span style="color: #259185;">"#anchor_01"</span>)).toHaveClass(<span style="color: #259185;">'foo'</span>)
  })
})
</pre>
</div>

<p>
但是这样的 test 是会 fail 掉&#x2026;
</p>

<p>
&#x2026;
</p>

<p>
&#x2026;
</p>

<p>
&#x2026;
</p>

<p>
原因在于包含绑定事件的 script 在 specRunner.html 加载时就已经被load了.即
时你用的时 <code>$()</code> wrapper, 因为 specRunner.html 的 document 在运行你的
<code>**spec.js</code> 时已经是ready的了
</p>

<p>
也就是说这时候并没有loadFixtures, script 中的事件不会绑定到元素上, 除
非你用的时live&#x2026;
</p>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> what do we do</h2>
<div class="outline-text-2" id="text-2">
<p>
之前一个项目也碰到过类似的情况, 当时的 OO 得比较好, 可以在loadFixtures
之后再 init 一下需要测试的类. 但是那些不OO的代码肿么办
</p>

<p>
事实上我认为 fixture 应该是业务逻辑的一个片段, 那么将需要绑定事件到
fixture 的 script 扔到 fixture 比较 make sense 因为他们本来就是紧耦合.
</p>

<p>
因此我的 hot fix 是将需要测试的 js 放到它所依赖的 fixtrue 里面, 之后在
loadFixtures 时将 script inline 到 fixture 中然后加载到 specRunner 页
面上.
</p>
<div class="org-src-container">

<pre class="src src-diff"><span style="color: #52676f;">diff --git a/lib/jasmine-jquery.js b/lib/jasmine-jquery.js</span>
<span style="color: #52676f;">index 87d7ef8..30d12db 100644</span>
<span style="color: #e9e2cb; background-color: #042028;">--- </span><span style="color: #e9e2cb; background-color: #042028;">a/lib/jasmine-jquery.js</span>
<span style="color: #e9e2cb; background-color: #042028;">+++ </span><span style="color: #e9e2cb; background-color: #042028;">b/lib/jasmine-jquery.js</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -119,17 +119,33 @@</span><span style="color: #e9e2cb; background-color: #042028;"> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFT</span>
<span style="color: #52676f;">WARE.</span>
<span style="color: #52676f;">   jasmine.Fixtures.prototype.loadFixtureIntoCache_ = function (relativeUrl) {</span>
<span style="color: #52676f;">     var self = this</span>
<span style="color: #52676f;">       , url = this.makeFixtureUrl_(relativeUrl)</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      , htmlText = ''</span>
<span style="color: #52676f;">       , request = $.ajax({</span>
<span style="color: #52676f;">         async: false, // must be synchronous to guarantee that no tests are run</span>
<span style="color: #52676f;"> before fixture is loaded</span>
<span style="color: #52676f;">         cache: false,</span>
<span style="color: #52676f;">         url: url,</span>
<span style="color: #52676f;">         success: function (data, status, $xhr) {</span>
<span style="color: #c60007; font-weight: bold;">-</span><span style="color: #c60007; font-weight: bold;">          self.fixturesCache_[relativeUrl] = $xhr.responseText</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">          htmlText = $xhr.responseText</span>
<span style="color: #52676f;">         },</span>
<span style="color: #52676f;">         error: function (jqXHR, status, errorThrown) {</span>
<span style="color: #52676f;">           throw new Error('Fixture could not be loaded: ' + url + ' (status: '</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;"> status + ', message: ' + errorThrown.message + ')')</span>
<span style="color: #52676f;">         }</span>
<span style="color: #52676f;">       })</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      var scripts = $($.parseHTML(htmlText, true)).find('script') || [];</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      scripts.each(function(){</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">        $.ajax({</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            async: false, // must be synchronous to guarantee that no tests are</span>
<span style="color: #52676f;"> run before fixture is loaded</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            cache: false,</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            url: $(this).attr('src'),</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            success: function (data, status, $xhr) {</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">                htmlText += '&lt;script&gt;' + $xhr.responseText + '&lt;/script&gt;'</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            },</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            error: function (jqXHR, status, errorThrown) {</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">                throw new Error('Script could not be loaded: ' + scriptSrc + '</span>
<span style="color: #52676f;">(status: ' + status + ', message: ' + errorThrown.message + ')')</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">            }</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">        });</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      })</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      self.fixturesCache_[relativeUrl] = htmlText;</span>
<span style="color: #52676f;">   }</span>

<span style="color: #52676f;">   jasmine.Fixtures.prototype.makeFixtureUrl_ = function (relativeUrl){</span>
</pre>
</div>

<p>
这样用起来会比较简单, 只需要在fixture里面加入 script 即可
</p>

<div class="org-src-container">

<pre class="src src-html">&lt;<span style="color: #2075c7;">div</span> <span style="color: #2075c7;">id</span>=<span style="color: #259185;">"anchor_01"</span>&gt;&lt;/<span style="color: #2075c7;">div</span>&gt;
&lt;<span style="color: #2075c7;">script</span> <span style="color: #2075c7;">src</span>=<span style="color: #259185;">"spec/fixtures/javascripts/jasmine_javascript_c</span>
<span style="color: #259185;">lick.js"</span>&gt;&lt;/<span style="color: #2075c7;">script</span>&gt;
&lt;<span style="color: #2075c7;">script</span> <span style="color: #2075c7;">src</span>=<span style="color: #259185;">"spec/fixtures/javascripts/jasmine_javascript_hove</span>
<span style="color: #259185;">r.js"</span>&gt;&lt;/<span style="color: #2075c7;">script</span>&gt;
</pre>
</div>

<p>
不需要修改任何 jasmine 测试代码, 依然是这段代码, 这是它应该就会 <b>绿</b> 了
</p>
<div class="org-src-container">

<pre class="src src-javascript">describe(<span style="color: #259185;">"when fixture contains an &lt;script src='to/your/source'&gt; tag"</span>, <span style="color: #728a05;">function</span> () {
  <span style="color: #728a05;">var</span> <span style="color: #2075c7;">fixtureUrl</span> = <span style="color: #259185;">"fixture_with_javascript.html"</span>

  it(<span style="color: #259185;">"should load content of fixture file and javascripts and bind events"</span>, <span style="color: #728a05;">function</span> () {
    jasmine.getFixtures().load(fixtureUrl)
    $(<span style="color: #259185;">'#anchor_01'</span>).click()
    expect($(<span style="color: #259185;">"#anchor_01"</span>)).toHaveClass(<span style="color: #259185;">'foo'</span>)
  })
})
</pre>
</div>

<p>
fin
我已经 <a href="https://github.com/velesin/jasmine-jquery/pulls">pull request 到这里</a> 但是人家木有一点要 merge 的意思&#x2026;好吧,反正我是不会用了,
要是谁被无法绑定事件困扰就不要再浪费时间困扰了, 可以 clone 我的 <a href="https://github.com/jcouyang/jasmine-jquery">fork</a>
吧 亲.
</p>
</div>
</div>
