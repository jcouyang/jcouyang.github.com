---
layout: post
title: "The source code behinde GIRA 2: Why Promises will make async easy"
date: 2014-02-09 18:14
comments: true
categories: ["gira", "promises", "q", "javascript"]
keywords: "gira, promises, q, javascript, ajax, async"
description: "The source code behinde GIRA 2: Why Promises will make ajax easy"
---

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> What is Promises</h2>
<div class="outline-text-2" id="text-1">
<p>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise</a> is a proxy for a value not knowing when its creation time. It provide 2 Methods <code>then</code> and <code>catch</code>, which return promise so they can be chained.
</p>
</div>

<div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Promise.prototype.then(onFulfilled, onRejected)</h3>
<div class="outline-text-3" id="text-1-1">
<p>
Appends fullfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler.
</p>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> Promise.prototype.catch(onRejected)</h3>
<div class="outline-text-3" id="text-1-2">
<p>
Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
</p>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Why Promises</h2>
<div class="outline-text-2" id="text-2">
<p>
有许多理由你将会需要用到 Promises. 好吧先来解释一下什么是 <code>Promises</code> 。 这类似于我们经常使用的 jQuery.ajax() 返回的那个玩意 &#x2013; <code>Deferreds</code>.
</p>

<p>
比如想要在对 ajax 请求来的数据做加工
</p>
<div class="org-src-container">

<pre class="src src-javascript">$.ajax(<span style="color: #259185;">"yourdata.url"</span>).then(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">data</span>){
    <span style="color: #465a61; font-style: italic;">// </span><span style="color: #465a61; font-style: italic;">do something with your data</span>
})
</pre>
</div>

<p>
对等待多个请求返回的数据做加工
</p>
<div class="org-src-container">

<pre class="src src-javascript">$.when($.ajax(<span style="color: #259185;">"yourdata1.url"</span>),$.ajax(<span style="color: #259185;">"yourdata2.url"</span>)).then(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">data</span>){
  <span style="color: #465a61; font-style: italic;">// </span><span style="color: #465a61; font-style: italic;">do something with these data                                                           </span>
})
</pre>
</div>

<p>
好吧如果这么说 Promises 不是什么新玩意， jQurey 早都有了, 为什么还要用什么 <code>q.js</code>.
</p>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Diference between Deferreds and Promises</h2>
<div class="outline-text-2" id="text-3">
<p>
常用的 Promises 库为:
</p>
<ul class="org-ul">
<li><a href="https://github.com/kriskowal/q">Q</a>
</li>
<li><a href="https://github.com/cujojs/when">when</a>
</li>
<li><a href="https://github.com/tildeio/rsvp.js">rsvp.js</a>
</li>
</ul>

<p>
他们都执行同一个标准 <a href="https://github.com/promises-aplus/promises-spec">Promises/A+</a>, 而 jQuery 的 Deferreds 虽然也做类似的事情，但是并不兼容 Promises/A+. 而 Chrome 32 已经原生支持了这一标准，Firefox 还在 Beta 阶段。
</p>
</div>
</div>

<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> How to use</h2>
<div class="outline-text-2" id="text-4">
<p>
I've chose  <a href="https://github.com/kriskowal/q">Q</a> as my Promises implement library. Take GIRA as example, GIRA will request data from Github API and <b>then</b> manipulate them into the page I want. So basiclly two step but actually if you want have more complex data to combind, Promise will make your life easier.
</p>
</div>
<div id="outline-container-sec-4-1" class="outline-3">
<h3 id="sec-4-1"><span class="section-number-3">4.1</span> What is the old way looks like</h3>
<div class="outline-text-3" id="text-4-1">
<div class="org-src-container">

<pre class="src src-javascript">$.getJSON(<span style="color: #259185;">this</span>.REPO_BASE, <span style="color: #728a05;">function</span>(<span style="color: #2075c7;">issues</span>){
    $.getJSON(<span style="color: #259185;">this</span>.REPO_BASE + <span style="color: #259185;">'user/repos'</span>, <span style="color: #728a05;">function</span>(<span style="color: #2075c7;">labels</span>){
      <span style="color: #465a61; font-style: italic;">// </span><span style="color: #465a61; font-style: italic;">do something with issues and labels</span>
        renderIssueAndLabel();
    })
})
</pre>
</div>

<p>
seems like dump code isn't it. now see what eligent will be
</p>
</div>
</div>
<div id="outline-container-sec-4-2" class="outline-3">
<h3 id="sec-4-2"><span class="section-number-3">4.2</span> Promisify Ajax Request</h3>
<div class="outline-text-3" id="text-4-2">
<p>
I just promisify all Github API function return Promises.
</p>

<p>
Say I want all the label of my project from Github API.
</p>
<div class="org-src-container">

<pre class="src src-javascript"><span style="color: #a57705;">Github</span>.<span style="color: #259185;">prototype</span> ={
...
  <span style="color: #2075c7;">getLabels</span>: <span style="color: #728a05;">function</span>(){
    <span style="color: #728a05;">return</span> Q($.ajax({
      url: <span style="color: #259185;">'github.issues.labels.url'</span>
    }));
  }
...
}
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-4-3" class="outline-3">
<h3 id="sec-4-3"><span class="section-number-3">4.3</span> Thenable</h3>
<div class="outline-text-3" id="text-4-3">
<div class="org-src-container">

<pre class="src src-javascript">Gira.<span style="color: #259185;">prototype</span>.groupIssuesByLabels = <span style="color: #728a05;">function</span>() {
  <span style="color: #728a05;">return</span> Q.all([<span style="color: #259185;">this</span>.github.getIssues(<span style="color: #259185;">this</span>.owner,<span style="color: #259185;">this</span>.repo,<span style="color: #259185;">this</span>.milestone),<span style="color: #259185;">this</span>.github.getLabels(<span style="color: #259185;">this</span>.owner,<span style="color: #259185;">this</span>.repo)])
        .then(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">data</span>){
<span style="color: #465a61; font-style: italic;">//</span><span style="color: #465a61; font-style: italic;">combind these Issues and Labels</span>
        },<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">error</span>){
            <span style="color: #465a61; font-style: italic;">// </span><span style="color: #465a61; font-style: italic;">promise not fullfill</span>
        })
}
</pre>
</div>
<p>
since <code>then()</code> in <code>groupIssuesByLabels</code>  will also return a thenable object. So you can do this then:
</p>

<div class="org-src-container">

<pre class="src src-javascript">gira.groupIssuesByLabes().then(renderIssues,errorHandler);
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-4-4" class="outline-3">
<h3 id="sec-4-4"><span class="section-number-3">4.4</span> Error Handling</h3>
<div class="outline-text-3" id="text-4-4">
<p>
I think this is the best and my favor part of Promise
</p>

<div class="org-src-container">

<pre class="src src-javascript">  Q(<span style="color: #259185;">'some data'</span>).then(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">data</span>){
      <span style="color: #728a05;">return</span> something1(data);
  }).then(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">data</span>){
      <span style="color: #728a05;">return</span> something2(data);
  }).<span style="color: #728a05;">catch</span>(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">error</span>){
      <span style="color: #465a61; font-style: italic;">// </span><span style="color: #465a61; font-style: italic;">if any of Q(), something1() or something2() goes wrong.</span>
  }).then(<span style="color: #728a05;">function</span>(){
      <span style="color: #465a61; font-style: italic;">// </span><span style="color: #465a61; font-style: italic;">do this any way</span>
      doanyway();
})
</pre>
</div>

<p>
this is the same as:
</p>
<div class="org-src-container">

<pre class="src src-javascript"><span style="color: #728a05;">function</span> <span style="color: #2075c7;">doanyway</span>(){

}
<span style="color: #728a05;">function</span> <span style="color: #2075c7;">something1</span>(<span style="color: #2075c7;">data</span>, <span style="color: #2075c7;">callback</span>){
    <span style="color: #728a05;">try</span>{
        <span style="color: #465a61; font-style: italic;">//</span><span style="color: #465a61; font-style: italic;">do something</span>
    }<span style="color: #728a05;">catch</span>(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">error</span>){
        doanyway();
    })

    callback(data);
}
<span style="color: #728a05;">function</span> <span style="color: #2075c7;">something2</span>(<span style="color: #2075c7;">data</span>){
  <span style="color: #728a05;">try</span>{
        <span style="color: #465a61; font-style: italic;">//</span><span style="color: #465a61; font-style: italic;">do something</span>
    }<span style="color: #728a05;">catch</span>(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">error</span>){
        doanyway();
    })

}
<span style="color: #728a05;">try</span>{
    $.getJSON(<span style="color: #259185;">'some data'</span>, <span style="color: #728a05;">function</span>(<span style="color: #2075c7;">data</span>){
        something1(data, something2)
    }) 
}<span style="color: #728a05;">catch</span>(<span style="color: #728a05;">function</span>(<span style="color: #2075c7;">error</span>){
    <span style="color: #465a61; font-style: italic;">// </span>
})
</pre>
</div>
</div>
</div>
</div>
