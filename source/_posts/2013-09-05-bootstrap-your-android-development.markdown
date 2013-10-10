---
layout: post
title: "快速开发android应用(1) - Dagger"
date: 2013-09-05 22:41
comments: true
categories: ["android","dagger","androidbootstrap"]
---
<p>
最近再一次偶然的机会在github上见到了这样一个repo
<a href="http://www.github.com/donnfelker/android-bootstrap">http://www.github.com/donnfelker/android-bootstrap</a>
能让你迅速搭建起基本ui和框架.但是基本上没有什么文档,非常可惜.环境搭好
了,却不知道在哪里加代码. 于是我玩几天准备把我的理解写一下,以供找不到文
档的同学可以快速上个手.
</p>


<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> 101 什么是 android bootstrap</h2>
<div class="outline-text-2" id="text-1">
<p>
<img src="http://www.androidbootstrap.com/images/ab-screenshot.png" alt="ab-screenshot.png" />
Android Bootstrap 其实是一堆框架的集合, 让你迅速搭好android 开发的基本
框架. 里面包括
</p>
<ul class="org-ul">
<li>Fragments
</li>
<li>Account Manager
</li>
<li>android-maven-plugin
</li>
<li>Dagger
</li>
<li>ActionBarSherlock
</li>
<li>Menu Drawer
</li>
<li>Robotium
</li>
<li>Parse API
</li>
</ul>

<p>
很多是UI的框架我就不解释了, 如 Fragments, ActionBarSherlock. 但是我想
讲的是
</p>
<ul class="org-ul">
<li>依赖注入框架 Dagger
</li>
<li>UI testing 框架 Robotium
</li>
<li>backend服务Parse. 
</li>
<li>android maven
</li>
</ul>
<p>
本章要介绍两个注入框架 Dagger 和 butterknife 
</p>
</div>
</div>

<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Dagger</h2>
<div class="outline-text-2" id="text-2">
<p>
这又是一个依赖注入的框架,个人觉得依赖注入的模式貌似是为java专门准备的.使
得木纳的 java 代码结构变得灵活清爽, 松耦合, 易测试.
而
注入方式个人也比较喜欢 annotation 的方式而不是讨厌的 xml,把所有的依赖
配置都放到一个文件里并不无不妥, 但是都放到 xml 里, OMG, 放到可读性最屎
的 xml 里, 找所有依赖配置都要去翻这个难读得 xml&#x2026;想着就头疼. 当项目变
大时, 一大波 xml 来袭&#x2026;&#x2026;&#x2026;Orz
</p>
</div>


<div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> 先来解释一下依赖注入</h3>
<div class="outline-text-3" id="text-2-1">
<p>
简单来说就是好莱坞原则
</p>
<blockquote>
<p>
不要call我, 我会call你的.
</p>
</blockquote>

<p>
对于好莱坞agent来说,他知道什么时候用什么演员,因
此,演员只需要留下联系方式, 也就是注入, 等待agent call他.
</p>

<p>
因此, 也叫控制反转.
</p>

<p>
其实, 也就是更优雅的实现组合模式, 传统的组合模式会需要 new 这些依赖,
也就是要各式各样的factory, 而依赖注入也就是说给你传进去.
</p>
</div>
</div>
<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> 代码上来说, dagger 的这个例子非常好:</h3>
<div class="outline-text-3" id="text-2-2">
<p>
比如我开咖啡店, 我要卖不同的咖啡种类, <del>雀巢的银桥的丝袜的</del> 什么
espresso,amerino之类的. 我是
个非常抠塞的奸商, 我不想为每一种咖啡专门买一个昂贵的专用咖啡机. 经过研究发现这些
咖啡机只存在一些不同, 比如不同的加热方式, 滴漏方式,filter或者
水泵流量或温度不同.
</p>

<p>
所以,我决定实现一个 configurable 的 coffeemaker.
</p>

<div class="org-src-container">

<pre class="src src-java"><span style="color: #728a05;">package</span> <span style="color: #259185;">coffee</span>;

<span style="color: #728a05;">import</span> <span style="color: #259185;">dagger</span>.<span style="color: #a57705;">Lazy</span>;
<span style="color: #728a05;">import</span> <span style="color: #259185;">javax</span>.<span style="color: #259185;">inject</span>.<span style="color: #a57705;">Inject</span>;

<span style="color: #728a05;">class</span> <span style="color: #a57705;">CoffeeMaker</span> {
  <span style="color: #259185;">@Inject</span> Lazy&lt;Heater&gt; heater; <span style="color: #52676f; font-style: italic;">// </span><span style="color: #52676f; font-style: italic;">Don't want to create a possibly costly heater until we need it.</span>
  <span style="color: #259185;">@Inject</span> <span style="color: #a57705;">Pump</span> <span style="color: #2075c7;">pump</span>;

  <span style="color: #728a05;">public</span> <span style="color: #a57705;">void</span> <span style="color: #2075c7;">brew</span>() {
    heater.get().on();
    pump.pump();
    System.out.println(<span style="color: #259185;">" [_]P coffee! [_]P "</span>);
    heater.get().off();
  }
}
</pre>
</div>

<p>
这是我的咖啡机.提供一个煮的按钮,可以看到, 组装咖啡机
的水泵和加热器都是注入进来的. 那他们是在哪构造的呢.
</p>

<!-- more -->
<p>
而作为老板的我,要怎样用这个咖啡机呢, 按一下"煮"按钮, 当然. 但是在那之
前,我们先要决定如何组装一个想要的咖啡机.
</p>

<div class="org-src-container">

<pre class="src src-java"><span class="linenr"> 1: </span><span style="color: #728a05;">class</span> <span style="color: #a57705;">CoffeeApp</span> <span style="color: #728a05;">implements</span> <span style="color: #a57705;">Runnable</span> {
<span class="linenr"> 2: </span>  <span style="color: #259185;">@Inject</span> <span style="color: #a57705;">CoffeeMaker</span> <span style="color: #2075c7;">coffeeMaker</span>;
<span class="linenr"> 3: </span>
<span class="linenr"> 4: </span>  <span style="color: #259185;">@Override</span> <span style="color: #728a05;">public</span> <span style="color: #a57705;">void</span> <span style="color: #2075c7;">run</span>() {
<span class="linenr"> 5: </span>    coffeeMaker.brew();
<span class="linenr"> 6: </span>  }
<span class="linenr"> 7: </span>
<span class="linenr"> 8: </span>  <span style="color: #728a05;">public</span> <span style="color: #728a05;">static</span> <span style="color: #a57705;">void</span> <span style="color: #2075c7;">main</span>(<span style="color: #a57705;">String</span>[] <span style="color: #2075c7;">args</span>) {
<span id="coderef-graph" class="coderef-off"><span class="linenr"> 9: </span>    <span style="color: #a57705;">ObjectGraph</span> <span style="color: #2075c7;">objectGraph</span> = ObjectGraph.create(<span style="color: #728a05;">new</span> <span style="color: #a57705;">DripCoffeeModule</span>());</span>
<span class="linenr">10: </span>    <span style="color: #a57705;">CoffeeApp</span> <span style="color: #2075c7;">coffeeApp</span> = objectGraph.get(CoffeeApp.<span style="color: #728a05;">class</span>);
<span class="linenr">11: </span>    coffeeApp.run();
<span class="linenr">12: </span>  }
<span class="linenr">13: </span>}
</pre>
</div>

<p>
客户说要americano,所以老板我给咖啡机装成滴漏式, 如代码第 <a href="#coderef-graph"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-graph');" onmouseout="CodeHighlightOff(this, 'coderef-graph');">9</a> 行. 
构造Graph意思相当于要构造滴漏式咖啡机的图, 图会根据Module里provider组
件以及以及被Inject的地方建立联系. 也就是说, 根据用户的需求用不同的组件
蓝图来构造咖啡机.
</p>

<p>
下面来看组件式在哪被初始化的.
</p>

<div class="org-src-container">

<pre class="src src-java"><span style="color: #728a05;">interface</span> <span style="color: #a57705;">Heater</span> {
  <span style="color: #a57705;">void</span> <span style="color: #2075c7;">on</span>();
  <span style="color: #a57705;">void</span> <span style="color: #2075c7;">off</span>();
  <span style="color: #a57705;">boolean</span> <span style="color: #2075c7;">isHot</span>();
}

<span style="color: #728a05;">class</span> <span style="color: #a57705;">ElectricHeater</span> <span style="color: #728a05;">implements</span> <span style="color: #a57705;">Heater</span> {
  <span style="color: #a57705;">boolean</span> <span style="color: #2075c7;">heating</span>;

  <span style="color: #259185;">@Override</span> <span style="color: #728a05;">public</span> <span style="color: #a57705;">void</span> <span style="color: #2075c7;">on</span>() {
    System.out.println(<span style="color: #259185;">"~ ~ ~ heating ~ ~ ~"</span>);
    <span style="color: #728a05;">this</span>.heating = <span style="color: #259185;">true</span>;
  }

  <span style="color: #259185;">@Override</span> <span style="color: #728a05;">public</span> <span style="color: #a57705;">void</span> <span style="color: #2075c7;">off</span>() {
    <span style="color: #728a05;">this</span>.heating = <span style="color: #259185;">false</span>;
  }

  <span style="color: #259185;">@Override</span> <span style="color: #728a05;">public</span> <span style="color: #a57705;">boolean</span> <span style="color: #2075c7;">isHot</span>() {
    <span style="color: #728a05;">return</span> heating;
  }
}
</pre>
</div>

<p>
这是电加热器的接口实现, 他的初始化方法会放到一个module里的 <code>@provide</code>
标记的方法里. 这个被标记的方法会再 Heater 被注入的地方被调用.
</p>

<div class="org-src-container">

<pre class="src src-java"><span style="color: #728a05;">import</span> <span style="color: #259185;">dagger</span>.<span style="color: #a57705;">Module</span>;
<span style="color: #728a05;">import</span> <span style="color: #259185;">dagger</span>.<span style="color: #a57705;">Provides</span>;
<span style="color: #728a05;">import</span> <span style="color: #259185;">javax</span>.<span style="color: #259185;">inject</span>.<span style="color: #a57705;">Singleton</span>;

<span style="color: #259185;">@Module</span>(
    injects = CoffeeApp.<span style="color: #728a05;">class</span>,
    includes = PumpModule.<span style="color: #728a05;">class</span>
)
<span style="color: #728a05;">class</span> <span style="color: #a57705;">DripCoffeeModule</span> {
  <span style="color: #259185;">@Provides</span> <span style="color: #259185;">@Singleton</span> <span style="color: #a57705;">Heater</span> <span style="color: #2075c7;">provideHeater</span>() {
    <span style="color: #728a05;">return</span> <span style="color: #728a05;">new</span> <span style="color: #a57705;">ElectricHeater</span>();
  }
}
</pre>
</div>

<p>
看到这样的好处了吧, 很清爽的把Module中得Heater和Pump注入到CoffeeApp中,
不需要setter注入,也不需要构造函数注入, 只需要将组件的构造函数声明为 <code>@Inject</code>, 或者放
到一个Module里的provider中, 就可以在咖啡机中 <code>@Inject</code> 该组件.
</p>
</div>
</div>

<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> 在 androidbootstrap 里的 Dagger</h3>
<div class="outline-text-3" id="text-2-3">
<p>
说了这些应该大概知道 dagger 要怎么玩乐吧,那么我们
首先来看一下 androidbootstrap 的 src 目录结构好了.
</p>
<div class="org-src-container">

<pre class="src src--n">├── main
│   └── java
│       └── com
│           └── donnfelker
│               └── android
│                   └── bootstrap
│                       ├── AndroidModule.java
│                       ├── BootstrapApplication.java
<span id="coderef-module" class="coderef-off">│                       ├── BootstrapModule.java</span>
│                       ├── BootstrapServiceProvider.java
│                       ├── RootModule.java
│                       ├── authenticator
│                       │   ├── AccountAuthenticatorService.java
│                       │   ├── ApiKeyProvider.java
│                       │   ├── BootstrapAccountAuthenticator.java
│                       │   ├── BootstrapAuthenticatorActivity.java
│                       │   ├── LogoutService.java
│                       │   └── SherlockAccountAuthenticatorActivity.java
│                       ├── core
│                       │   ├── AvatarLoader.java
│                       │   ├── BootstrapService.java
│                       │   ├── CheckIn.java
│                       │   ├── Constants.java
│                       │   ├── GravatarUtils.java
│                       │   ├── ImageUtils.java
│                       │   ├── Location.java
│                       │   ├── News.java
│                       │   ├── PauseTimerEvent.java
│                       │   ├── ResumeTimerEvent.java
│                       │   ├── StopTimerEvent.java
│                       │   ├── TimerPausedEvent.java
│                       │   ├── TimerService.java
│                       │   ├── TimerTickEvent.java
│                       │   ├── UserAgentProvider.java
│                       │   └── ViewSummary.java
│                       ├── evernote
│                       ├── ui
│                       │   ├── AlternatingColorListAdapter.java
│                       │   ├── AsyncLoader.java
│                       │   ├── BarGraphDrawable.java
│                       │   ├── BootstrapActivity.java
│                       │   ├── BootstrapFragmentActivity.java
│                       │   ├── BootstrapPagerAdapter.java
│                       │   ├── BootstrapTimerActivity.java
│                       │   ├── CarouselActivity.java
│                       │   ├── CheckInsListAdapter.java
│                       │   ├── CheckInsListFragment.java
│                       │   ├── HeaderFooterListAdapter.java
│                       │   ├── ItemListFragment.java
│                       │   ├── NewsActivity.java
│                       │   ├── NewsListAdapter.java
│                       │   ├── NewsListFragment.java
│                       │   ├── TextWatcherAdapter.java
│                       │   ├── ThrowableLoader.java
<span id="coderef-activity" class="coderef-off">│                       │   ├── UserActivity.java</span>
<span id="coderef-adapter" class="coderef-off">│                       │   ├── UserListAdapter.java</span>
<span id="coderef-fragment" class="coderef-off">│                       │   ├── UserListFragment.java</span>
│                       │   └── view
│                       │       └── CapitalizedTextView.java
│                       └── util
│                           ├── Ln.java
│                           ├── SafeAsyncTask.java
│                           └── Strings.java
└── test
    └── java
        └── com
            └── donnfelker
                └── android
                    └── bootstrap
                        └── core
                            └── core
                                ├── BootstrapApiClientUtilTest.java
                                └── BootstrapServiceTest.java
</pre>
</div>

<p>
好吧, 这样一眼就应该能看到 <a href="#coderef-module"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-module');" onmouseout="CodeHighlightOff(this, 'coderef-module');">BootstrapModule</a> 肯定是 依赖注入用的组件对不
对. 
比如说我现在做的应用是关于 Evernote的, 在 Evernote 提供的 android
SDK 中有一个最重要的类EvernoteSession, 因为当初始化后并登陆, 你就可以
用这个 Session 来调用所有 evernote API. 
</p>

<p>
因此, 我把它看成一个插件, 也就
是说, 我什么时候要用到 evernote 的时候, 我只需要 @Inject 这个 session
即可. 那么, 这时候, 我只需要吧 EvernoteSession 的构造方法放到 这个
Module 里了. 
</p>
<div class="org-src-container">

<pre class="src src-java"><span style="color: #728a05;">public</span> <span style="color: #728a05;">class</span> <span style="color: #a57705;">BootstrapModule</span>  {
...
    <span style="color: #259185;">@Singleton</span> <span style="color: #259185;">@Provides</span> EvernoteSession provideEvernoteSession(<span style="color: #728a05;">final</span> <span style="color: #a57705;">Context</span> <span style="color: #2075c7;">context</span>) {
        <span style="color: #728a05;">return</span> EvernoteSession.getInstance(context, <span style="color: #259185;">Constants</span>.<span style="color: #259185;">Evernote</span>.CONSUMER_KEY, <span style="color: #259185;">Constants</span>.<span style="color: #259185;">Evernote</span>.CONSUMER_SECRET, <span style="color: #259185;">Constants</span>.<span style="color: #259185;">Evernote</span>.EVERNOTE_SERVICE);
    }
}
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Butterknife</h2>
<div class="outline-text-2" id="text-3">
<p>
再来看 src 目录, 很有意思, 在 <code>ui</code> 下有三组 <a href="#coderef-activity"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-activity');" onmouseout="CodeHighlightOff(this, 'coderef-activity');">xxxActivity</a> ,<a href="#coderef-adapter"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-adapter');" onmouseout="CodeHighlightOff(this, 'coderef-adapter');">xxxListAdapter</a>,
<a href="#coderef-fragment"class="coderef" onmouseover="CodeHighlightOn(this, 'coderef-fragment');" onmouseout="CodeHighlightOff(this, 'coderef-fragment');">xxxFragment</a>. 这三个类是这样的
</p>
<ul class="org-ul">
<li>xxxActivity: 负责单个view的显示.
</li>
<li>xxxListAdapter: 负责List内容的更新.
</li>
<li>xxxListFragment: 这是继承 actionbarsherlock 的 SherlockFragment.负责
</li>
</ul>
<p>
组装数据以及处理事件.
</p>

<p>
点开UserActivity, 会看见开头有这么个 annotation <code>@InjectView</code>
</p>
<div class="org-src-container">

<pre class="src src-java"><span style="color: #259185;">@InjectView</span>(R.id.<span style="color: #a57705;">iv_avatar</span>) <span style="color: #728a05;">protected</span> <span style="color: #a57705;">ImageView</span> <span style="color: #2075c7;">avatar</span>;
</pre>
</div>

<p>
按最老套的获取 view 会这样写:
</p>
<div class="org-src-container">

<pre class="src src-java"><span style="color: #a57705;">ImageView</span> <span style="color: #2075c7;">avatar</span>;
...
<span style="color: #259185;">@Override</span> <span style="color: #728a05;">public</span> <span style="color: #a57705;">void</span> onCreate(){
    avatar = (<span style="color: #a57705;">ImageView</span>)findViewById(R.id.title);
    ...
</pre>
</div>
<p>
是不是觉得以前的写法弱爆了. 当然这是最基本的 view inject, 还有 Click
Listener Injection 等更高阶的用法
可以继续<a href="http://jakewharton.github.io/butterknife/">参考文档</a>
</p>
</div>
</div>
