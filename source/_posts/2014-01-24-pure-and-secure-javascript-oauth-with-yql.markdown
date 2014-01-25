---
layout: post
title: "Pure and Secure Client-side Javascript OAuth 2 with YQL"
date: 2014-01-24 19:15
comments: true
categories: ["Howto","YQL","javascript","oauth"]
---
<p>
It would be <b>awesome</b> if we can use OAuth in JavaScript purely in client side.
before start to do that, please let me explain "OAuth2" <del>with this picture</del> in feeeew word (skip to section 2 <a href="#sec-2-1">YQL</a> if you know OAuth2):
</p>


<div class="figure">
<p><img src="http://hueniverse.com/wp-content/uploads/2007/12/My-Endpoints-300x267.png"  alt="My-Endpoints-300x267.png"/></p>
</div>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> OAuth 2</h2>
<div class="outline-text-2" id="text-1">
<p>
OAuth 2 is widely use as authorize third party application without expose user's password, OAuth2 using 2 steps verification. 
Take github as example:
</p>

<p>
There are 2 role in this story: Developer <code>Oyang</code> and User <code>Lulu</code>
</p>

<p>
As Developer  Oyang who write an App <b>GIRA</b> <a href="http://gira,oyanglul.us">http://gira,oyanglul.us</a> which can let user login using Github account.
</p>

<p>
As User, Lulu don't want to login in your site with my Github username and password, since Lulu don't trust Oyang but trust Github.
</p>

<p>
Solution should be: Oyang redirect Lulu to Github website so Lulu can login there, then github redirect to Oyang's gira.com and with a signal: "hey, lulu's password is correct, log she in dude!".
</p>


<p>
So that is <b>OAuth 2</b> actually.
</p>
</div>
<div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Redirect users to request GitHub access</h3>
<div class="outline-text-3" id="text-1-1">
<p>
<code>GET https://github.com/login/oauth/authorize</code>
</p>

<p>
with parameter
</p>
<ul class="org-ul">
<li><code>cliend_id</code>: id of your application
</li>
<li><code>scope</code>: permissions your application should have 
</li>
</ul>

<p>
this will redirect Lulu to github oauth page. Lulu can now login in github then check the permission Oyang's app request, and decide to accept or not.
</p>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> GitHub redirects back to your site</h3>
<div class="outline-text-3" id="text-1-2">
<p>
if Lulu say "yes", github will redirect back to Oyang's app with parameter of a "valided code". which means apps's permited and now app can get the Lulu's <code>access_token</code> now.
</p>

<p>
<code>POST https://github.com/login/oauth/access_token</code> 
</p>

<p>
with parameter
</p>
<ul class="org-ul">
<li><code>cliend_id</code>: id of your application
</li>
<li><code>client_secret</code>: password of your application
</li>
<li><code>code</code>: the thing you just got from github.
</li>
</ul>

<blockquote>
<p>
<code>access_token</code> <b>is just as important as User's PASSWORD</b> so keep that saft place and never expose to anyone.
</p>

<p>
<code>client_secret</code> <b>is your app's password</b> so never expose to anyone either
</p>
</blockquote>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> Done</h3>
<div class="outline-text-3" id="text-1-3">
<p>
now Oyang's App Gira just got the <code>access_token</code> of Lulu, so Gira can make requests to the API on a behalf of a Lulu.
</p>
</div>
</div>
</div>

<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Pure Client Side Implement</h2>
<div class="outline-text-2" id="text-2">
<p>
Now here comes the problems of Javascript OAuth 2 implementation pure client side.
</p>
<ol class="org-ol">
<li>capture <code>code</code> in <i>step 2</i>
</li>
<li>secure <code>client_secret</code> when try request <code>access_token</code>
</li>
</ol>
<p>
when github redirect back with <code>code</code>
</p>

<p>
the first one is easy to solve by check window.location
</p>
<div class="org-src-container">

<pre class="src src-js">$(window).on(<span style="color: #259185;">'eshashchange'</span>, <span style="color: #728a05;">function</span>() {
  <span style="color: #728a05;">if</span>(location.hash=<span style="color: #259185;">'#authdone'</span>){
    $.get(<span style="color: #259185;">"https://github.com/login/oauth/access_token"</span>,{
      client_id:<span style="color: #259185;">'666dc0b3b994cc362ca2'</span>,
      client_secret:<span style="color: #259185;">'your secret'</span>,
      code:location.search.split(<span style="color: #259185;">'='</span>).pop();
    });
  }
});
</pre>
</div>

<p>
as you can see the <code>client_secret</code> has been expose to anyone who check you javascript code.
</p>

<p>
This is really serious problem since evil hacker can just use your <code>client_id</code> and <code>client_secret</code> to make an fake app of gira to steal your user's information, horrible isn't it.
</p>

<p>
now what, anyone can easily see your javascript from browser, where to hide your secret. no option but a server.
</p>
</div>

<div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> YQL</h3>
<div class="outline-text-3" id="text-2-1">
</div><div id="outline-container-sec-2-1-1" class="outline-4">
<h4 id="sec-2-1-1"><span class="section-number-4">2.1.1</span> What is YQL</h4>
<div class="outline-text-4" id="text-2-1-1">
<p>
<a href="http://developer.yahoo.com/yql/">YQL</a> is Yahoo Query Language. You can simpily use <code>SELECT * FROM web</code> to get you data from any website. for example you can try put the follow query in <a href="http://developer.yahoo.com/yql/console/">YQL Console</a>:
</p>

<p>
<code>select * from html where url</code>"<a href="http://www.weibo.com/milhouse">http://www.weibo.com/milhouse</a>"=
</p>

<p>
amazing isn't it, YQL will return the whole content of the website in XML or JSON.
</p>

<p>
check the bottom of YQL Console, simpily use request to <b>THE REST  QUERY</b> will return the same thing. You don't have to include any other third party annoying library to get your data. This is why I choose YQL other then <a href="http://parse.com/">Parse</a> or <a href="http://firebase.com/">Firebase</a> as server side script.
</p>
</div>
</div>
<div id="outline-container-sec-2-1-2" class="outline-4">
<h4 id="sec-2-1-2"><span class="section-number-4">2.1.2</span> Use YQL storage to keep secret safe</h4>
<div class="outline-text-4" id="text-2-1-2">
<p>
YQL provide online storage y.storage which allow you to store your YQL table, javascript and enviorment there. Since every thing is on sever, nobody but you can see them now.
</p>

<p>
When open <a href="http://developer.yahoo.com/yql/editor/">YQL editor</a>, you may curious about the 3 Key on the right side:
</p>


<div class="figure">
<p><img src="https://www.evernote.com/shard/s23/sh/9428c885-f033-46c9-882d-3527ee12711f/30139b47807b08c5a6133bf3769c29d6/deep/0/YQL-Editor--asdf.png"  alt="YQL-Editor--asdf.png"/></p>
</div>

<p>
for each table/javascript/enviorment file you've create, there are 3 line for you.
</p>
<ol class="org-ol">
<li><b>EXECUTE</b>: use this link when you want to execute the content.this is really <b>important</b> for secure your secret, I'll explain it latter.
</li>
<li>SELECT: when you just want to get the content.
</li>
<li>UPDATE: when update the content.
</li>
</ol>

<p>
for better understanding, let me continue the Github OAuth example.
</p>

<p>
Here's the plan:
</p>
<ol class="org-ol">
<li>put all you secret inside enviorment file.
</li>
<li>create a table, data of the table come from javascript file,
</li>
<li>when the javascript is execute, request for the <code>access_token</code>
</li>
<li>on the clientside, just request the YQL table for <code>access_token</code>. bang!
</li>
</ol>
</div>
</div>
<div id="outline-container-sec-2-1-3" class="outline-4">
<h4 id="sec-2-1-3"><span class="section-number-4">2.1.3</span> Create YQL Table</h4>
<div class="outline-text-4" id="text-2-1-3">
<p>
OK.lets do IT. First of all, we need create a table who can execute Javascript inside.
</p>
<div class="org-src-container">

<pre class="src src-xml"><span class="linenr"> 1: </span>&lt;?<span style="color: #728a05;">xml</span> <span style="color: #2075c7;">version</span>=<span style="color: #259185;">"</span><span style="color: #259185;">1.0</span><span style="color: #259185;">"</span> <span style="color: #2075c7;">encoding</span>=<span style="color: #259185;">"</span><span style="color: #259185;">UTF-8</span><span style="color: #259185;">"</span>?&gt;
<span class="linenr"> 2: </span>  &lt;<span style="color: #2075c7;">table</span> <span style="color: #728a05;">xmlns</span>=<span style="color: #259185;">"</span><span style="color: #259185;">http://query.yahooapis.com/v1/schema/table.xsd</span><span style="color: #259185;">"</span>&gt;    
<span class="linenr"> 3: </span>      &lt;<span style="color: #2075c7;">meta</span>&gt;  
<span class="linenr"> 4: </span>        &lt;<span style="color: #2075c7;">sampleQuery</span>&gt;select * from {table} where code='meow';&lt;/<span style="color: #2075c7;">sampleQuery</span>&gt;  
<span class="linenr"> 5: </span>      &lt;/<span style="color: #2075c7;">meta</span>&gt;  
<span class="linenr"> 6: </span>      &lt;<span style="color: #2075c7;">bindings</span>&gt;  
<span class="linenr"> 7: </span>        &lt;<span style="color: #2075c7;">select</span> <span style="color: #2075c7;">itemPath</span>=<span style="color: #259185;">""</span> <span style="color: #2075c7;">produces</span>=<span style="color: #259185;">"</span><span style="color: #259185;">XML</span><span style="color: #259185;">"</span>&gt;  
<span class="linenr"> 8: </span>          &lt;<span style="color: #2075c7;">urls</span>&gt;  
<span class="linenr"> 9: </span>            &lt;<span style="color: #2075c7;">url</span>&gt;http://oyanglul.us/gira&lt;/<span style="color: #2075c7;">url</span>&gt;  
<span class="linenr">10: </span>          &lt;/<span style="color: #2075c7;">urls</span>&gt;  
<span class="linenr">11: </span>          &lt;<span style="color: #2075c7;">inputs</span>&gt;  
<span id="coderef-code" class="coderef-off"><span class="linenr">12: </span>            &lt;<span style="color: #2075c7;">key</span> <span style="color: #2075c7;">id</span>=<span style="color: #259185;">'</span><span style="color: #259185;">CODE</span><span style="color: #259185;">'</span> <span style="color: #2075c7;">type</span>=<span style="color: #259185;">'</span><span style="color: #259185;">xs:string</span><span style="color: #259185;">'</span> <span style="color: #2075c7;">paramType</span>=<span style="color: #259185;">'</span><span style="color: #259185;">variable</span><span style="color: #259185;">'</span> <span style="color: #2075c7;">required</span>=<span style="color: #259185;">"</span><span style="color: #259185;">true</span><span style="color: #259185;">"</span> /&gt;</span>
<span id="coderef-client-id" class="coderef-off"><span class="linenr">13: </span>          &lt;<span style="color: #2075c7;">key</span> <span style="color: #2075c7;">id</span>=<span style="color: #259185;">"</span><span style="color: #259185;">CID</span><span style="color: #259185;">"</span> <span style="color: #2075c7;">type</span>=<span style="color: #259185;">"</span><span style="color: #259185;">xs:string</span><span style="color: #259185;">"</span> <span style="color: #2075c7;">paramType</span>=<span style="color: #259185;">"</span><span style="color: #259185;">variable</span><span style="color: #259185;">"</span>  <span style="color: #2075c7;">required</span>=<span style="color: #259185;">"</span><span style="color: #259185;">true</span><span style="color: #259185;">"</span> /&gt;</span>
<span id="coderef-client-secret" class="coderef-off"><span class="linenr">14: </span>              &lt;<span style="color: #2075c7;">key</span> <span style="color: #2075c7;">id</span>=<span style="color: #259185;">"</span><span style="color: #259185;">CSC</span><span style="color: #259185;">"</span> <span style="color: #2075c7;">type</span>=<span style="color: #259185;">"</span><span style="color: #259185;">xs:string</span><span style="color: #259185;">"</span> <span style="color: #2075c7;">paramType</span>=<span style="color: #259185;">"</span><span style="color: #259185;">variable</span><span style="color: #259185;">"</span>  <span style="color: #2075c7;">required</span>=<span style="color: #259185;">"</span><span style="color: #259185;">true</span><span style="color: #259185;">"</span> /&gt;</span>
<span class="linenr">15: </span>            &lt;/<span style="color: #2075c7;">inputs</span>&gt;
<span class="linenr">16: </span>            &lt;<span style="color: #2075c7;">execute</span>&gt;&lt;![<span style="color: #728a05;">CDATA</span>[
<span id="coderef-js-select" class="coderef-off"><span class="linenr">17: </span>         y.include('store://KqAGbe0nt2yi3bAnQQXxOx');</span>
<span class="linenr">18: </span>      ]]&gt;&lt;/<span style="color: #2075c7;">execute</span>&gt;         
<span class="linenr">19: </span>        &lt;/<span style="color: #2075c7;">select</span>&gt;    
<span class="linenr">20: </span>      &lt;/<span style="color: #2075c7;">bindings</span>&gt;  
<span class="linenr">21: </span>    &lt;/<span style="color: #2075c7;">table</span>&gt;
</pre>
</div>

<p>
FYI, the <a href="#coderef-js-select"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-js-select');" onmouseout="CodeHighlightOff(this, 'coderef-js-select');">line 17</a> reference to the <code>SELECT KEY</code> of the javascript file as follow, why <code>SELECT</code>, you know when you use <code>EXECUTE KEY</code> to referent an file, Yahoo will try to run it for you, but I don't want the result of javascript but the code itself to define my table.
</p>

<p>
<a href="#coderef-code"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-code');" onmouseout="CodeHighlightOff(this, 'coderef-code');">line 12</a> define the table should receive a key named "CODE", and <a href="#coderef-client-id"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-client-id');" onmouseout="CodeHighlightOff(this, 'coderef-client-id');">line 13</a> and <a href="#coderef-client-secret"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-client-secret');" onmouseout="CodeHighlightOff(this, 'coderef-client-secret');">line 14</a> as well.
</p>
</div>
</div>

<div id="outline-container-sec-2-1-4" class="outline-4">
<h4 id="sec-2-1-4"><span class="section-number-4">2.1.4</span> Create Javascript file</h4>
<div class="outline-text-4" id="text-2-1-4">
<div class="org-src-container">

<pre class="src src-javascript"><span id="coderef-y-rest" class="coderef-off"><span class="linenr">1: </span>tokenRequest = y.rest(<span style="color: #259185;">'https://github.com'</span>).path(<span style="color: #259185;">'login'</span>).path(<span style="color: #259185;">'oauth'</span>).path(<span style="color: #259185;">'access_token'</span>);</span>
<span class="linenr">2: </span><span style="color: #728a05;">var</span> <span style="color: #2075c7;">resp</span> = tokenRequest.header(<span style="color: #259185;">'Accept'</span>,<span style="color: #259185;">'application/xml'</span>).query(
<span class="linenr">3: </span>{
<span class="linenr">4: </span>  client_id:CID,
<span class="linenr">5: </span>  client_secret:CSC,
<span class="linenr">6: </span>  code:CODE
<span class="linenr">7: </span>}).post().response;
<span class="linenr">8: </span>response.object = {resp}
</pre>
</div>

<p>
I know <a href="#coderef-y-rest"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-y-rest');" onmouseout="CodeHighlightOff(this, 'coderef-y-rest');">line 1</a> is weird if you never use YQL before, so do I. This looks so lame to append path to address rather then jQuery way just <code>$.get("https://github.com/login/oauth/access_token")</code>.
</p>

<p>
ok the <code>CID</code> is parameter from YQL Table defined <a href="#coderef-client-id"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-client-id');" onmouseout="CodeHighlightOff(this, 'coderef-client-id');">here</a>, so does <code>CSC</code> and <code>CODE</code>.
</p>

<p>
finally, the Table and Javascript is done, how to use them, and where the hell should I put my <b>secret</b> to.
</p>
</div>
</div>
<div id="outline-container-sec-2-1-5" class="outline-4">
<h4 id="sec-2-1-5"><span class="section-number-4">2.1.5</span> Create Enviroment File</h4>
<div class="outline-text-4" id="text-2-1-5">
<p>
Here comes the mighty enviorment file:
</p>
<div class="org-src-container">

<pre class="src src-sql"><span id="coderef-github-table" class="coderef-off"><span class="linenr">1: </span>USE "store://jqozna9Rv9K0gS77jz8RI1" AS github;</span>
<span id="coderef-set-cid" class="coderef-off"><span class="linenr">2: </span>SET CID="666dc0b3b994cc362ca2" ON github;</span>
<span id="coderef-set-csc" class="coderef-off"><span class="linenr">3: </span>SET CSC="your client secret goes here" ON github;</span>
</pre>
</div>

<p>
the <a href="#coderef-github-table"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-github-table');" onmouseout="CodeHighlightOff(this, 'coderef-github-table');">store://jqozna9Rv9K0gS77jz8RI1</a> is the SELECT KEY of your table just created. <a href="#coderef-set-cid"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-set-cid');" onmouseout="CodeHighlightOff(this, 'coderef-set-cid');">line 2</a> and <i>line set-csc</i> pass the <code>client_id</code> and <code>client_secret</code> to <code>github</code> table where the javascript can actually use.
</p>
</div>
</div>

<div id="outline-container-sec-2-1-6" class="outline-4">
<h4 id="sec-2-1-6"><span class="section-number-4">2.1.6</span> Why My Secret is secure</h4>
<div class="outline-text-4" id="text-2-1-6">
<p>
if you use the SELECT KEY of the enviorment file like
</p>
<div class="org-src-container">

<pre class="src src-sql">select * from yql.storage where name="your enviorment file SELECT KEY"
</pre>
</div>
<p>
the secret defined in your enviorment file will still expose.
</p>

<p>
but not one know your SELECT KEY except yourself. so you never use the SELECT KEY everything will be safe.
</p>

<p>
Thus, use the EXECUTE KEY!!!! no one can know what happen inside your enviorment file.
</p>
<div class="org-src-container">

<pre class="src src-yql">env "store://0zaLUaPXLo4GWBb1koVqO6";
select * from github where CODE="code from oauth first step"
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-2-1-7" class="outline-4">
<h4 id="sec-2-1-7"><span class="section-number-4">2.1.7</span> Fin</h4>
<div class="outline-text-4" id="text-2-1-7">
<p>
copy the <img src="https://www.evernote.com/shard/s23/sh/4a383e94-4288-4ad1-a686-f8d63b5fa4cc/20d4672a6cc52e0c1e99c6250ea583dd/deep/0/YQL-Console--env-"store---0zaLUaPXLo4GWBb1koVqO6"-select-*-from-github-where-CODE-"669b538b32862a44b116".png"  alt="YQL-Console--env-"store---0zaLUaPXLo4GWBb1koVqO6"-select-*-from-github-where-CODE-"669b538b32862a44b116".png"/> at the bottom, request this url from you client side javascript code. That's is, without expose <code>client_secret</code> safely get <code>access_token</code> from pure client side javascript.
</p>
</div>
</div>
</div>
</div>
