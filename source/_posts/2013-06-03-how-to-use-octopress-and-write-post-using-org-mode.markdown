---
layout: post
title: "How to Write Post Using Octopress and Org Mode"
date: 2013-06-07 20:06
comments: true
categories: ["org-mode","emacs"]
---

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> getting started</h2>
<div class="outline-text-2" id="text-1">
<p>
Github page 上建博客本来就是很geek的事情, 用octopress来建博客可用说是
for ruby geeks, 因为可以用欢乐的rake &lt;task&gt; 来完成建立文章和发布等一系
列task. 当然他依赖于 <a href="https://github.com/mojombo/jekyll">Jekyll</a> 
</p>

<p>
如果wordpress的发布过程是这样的:
</p>
<ul class="org-ul">
<li>打开wordpress
</li>
<li>点下new post
</li>
<li>在textarea中输入内容
</li>
</ul>

<p>
这样好像非常简单, 这种wysiwyg的编辑器完全不需要学习曲线, 当然效率也不
会有神马曲线. 比如一个简单的 <b>加粗</b> 操
作, 需要选中需要加粗的字, 点一下=B=. 这对一个程序员来说是有多么痛苦啊.
</p>

<p>
好吧,如果你说 wordpress 也有快捷键, 那么bia代码和插入图片肿么办.
各种插件随之而来, 但是个人并没有发现更wsgiwyg编辑器任何高效的地方.
一个高效的码农不希望任何一只手离开键盘. 好吧, 这时候 <a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored
Markdown</a> 和 <a href="http://pages.github.com/">GitHub Pages</a> 冲出来解放码农的鼠标手. 当然, Github Pages
的原意是让程序员为自己的repository建立一个静态网页.
</p>

<p>
于是乎, 有了octopress, 简而言之,就是用 git 和你最喜欢的编辑器写博客.
当然,就算你喜欢用wordpress, 同样可以用 prose.io + travis ci 实现<a href="#sec-4">auto deploy octopress with travis ci {fn:1} {fn:2}</a>.
</p>
</div>

<div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> 安装 octopress</h3>
<div class="outline-text-3" id="text-1-1">
<p>
just do the following in your shell.
</p>

<div class="org-src-container">

<pre class="src src-sh">$ \curl -L https://get.rvm.io | bash <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">install ruby version manager</span>
rvm install 1.9.3 <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">octopress need 1.9.3</span>
rvm user 1.9.3 --default <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">use it as default</span>

git clone git://github.com/imathis/octopress.git octopress
<span style="color: #A6E22E;">cd</span> octopress    <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">If you use RVM, You'll be asked if you trust the .rvmrc file (say yes).</span>
ruby --version <span style="color: #465457; font-style: italic;">#</span><span style="color: #465457; font-style: italic;">should be 1.9.3</span>
rake install <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">install default Octopress theme</span>
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> Setup Github Pages</h3>
<div class="outline-text-3" id="text-1-2">
<ul class="org-ul">
<li>new 一个名叫 <code>username.github.io</code> 的 repository, 所有push 到 master
</li>
</ul>
<p>
的代码即是静态网页. // 这是user page, 如果是项目page, 需要push到 gh-pages branch.
</p>
<ul class="org-ul">
<li>Done // yeah~ that's it
</li>
</ul>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> Setup Octopress</h3>
<div class="outline-text-3" id="text-1-3">
<div class="org-src-container">

<pre class="src src-sh">rake setup_github_pages
rake generate <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">This will generate your blog, copy the generated files into _deploy</span>
rake deploy <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">push to your github pages</span>
<span style="color: #A6E22E;">echo</span> <span style="color: #E6DB74;">'your-domain.com'</span> &gt;&gt; source/CNAME
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-2" class="outline-2">
<h2 id="sec-2"><span class="section-number-2">2</span> Use Octopress</h2>
<div class="outline-text-2" id="text-2">
</div><div id="outline-container-sec-2-1" class="outline-3">
<h3 id="sec-2-1"><span class="section-number-3">2.1</span> Inline code</h3>
<div class="outline-text-3" id="text-2-1">
<p>
<code>this is inline code</code>
</p>
</div>
</div>

<div id="outline-container-sec-2-2" class="outline-3">
<h3 id="sec-2-2"><span class="section-number-3">2.2</span> The Greatest Code Blocks</h3>
<div class="outline-text-3" id="text-2-2">
<p>
[language] [title] [url] [link text] code snippet 
</p>

<pre>
ruby Discover if a number is prime http://www.noulakaz.net/weblog/2007/03/18/a-regular-expression-to-check-for-prime-numbers/ Source Article
class Fixnum
  def prime?
    ('1' * self) !~ /^1?$|^(11+?)\1+$/
  end
end
</pre>

<p>
will render as
</p>
<div class="org-src-container">

<pre class="src src-ruby"><span style="color: #66D9EF;">Discover</span> <span style="color: #66D9EF;">if</span> a number is prime <span style="color: #AE81FF;">http</span>:<span style="color: #E6DB74;">//</span>www.noulakaz.net/weblog/2007/03/18/a-regular-expression-to-check-<span style="color: #66D9EF;">for</span>-prime-numbers/ <span style="color: #66D9EF;">Source</span> <span style="color: #66D9EF;">Article</span>
<span style="color: #66D9EF;">class</span> <span style="color: #66D9EF;">Fixnum</span>
  <span style="color: #66D9EF;">def</span> <span style="color: #F92672; font-style: italic;">prime?</span>
    (<span style="color: #E6DB74;">'1'</span> * <span style="color: #F92672;">self</span>) !~ <span style="color: #E6DB74;">/^1?$|^(11+?)\1+$/</span>
  <span style="color: #66D9EF;">end</span>
<span style="color: #66D9EF;">end</span>
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> <a href="http://gist.github.com">Gist</a></h3>
<div class="outline-text-3" id="text-2-3">
<p>
gist gist<sub>id</sub> filename
</p>

<p>
like
</p>

<p>
gist 996818
</p>

<p>
will be rander as
</p>

<p>
{% gist 996818 %}
</p>
</div>
</div>

<div id="outline-container-sec-2-4" class="outline-3">
<h3 id="sec-2-4"><span class="section-number-3">2.4</span> 3rd party plugin</h3>
<div class="outline-text-3" id="text-2-4">
<div class="org-src-container">

<pre class="src src-yml">default_asides: [asides/recent_posts.html, asides/github.html,
asides/twitter.html, asides/delicious.html, asides/pinboard.html,
asides/googleplus.html, asides/weibo.html]
</pre>
</div>
</div>
</div>
</div>
<div id="outline-container-sec-3" class="outline-2">
<h2 id="sec-3"><span class="section-number-2">3</span> Put Octopress Folder into Dropbox</h2>
<div class="outline-text-2" id="text-3">
<p>
当然要扔到dropbox上, 喂小米, 因为这样我们可以用手机写博客. 好吧, 前提
是你的手机要有个好用的markdown编辑器.
</p>
</div>
</div>
<div id="outline-container-sec-4" class="outline-2">
<h2 id="sec-4"><span class="section-number-2">4</span> auto deploy octopress with travis ci <sup><a id="fnr.1" name="fnr.1" class="footref" href="#fn.1">1</a></sup> <sup>, </sup><sup><a id="fnr.2" name="fnr.2" class="footref" href="#fn.2">2</a></sup></h2>
<div class="outline-text-2" id="text-4">
<ul class="org-ul">
<li>get github OAtuh token
</li>
</ul>
<div class="org-src-container">

<pre class="src src-sh">curl -u <span style="color: #E6DB74;">'your_github_name'</span> -d <span style="color: #E6DB74;">'{"scopes":["public_repo"], "note":"Travis access"}'</span> https://api.github.com/authorizations
</pre>
</div>

<ul class="org-ul">
<li>encypte your token
</li>
</ul>
<div class="org-src-container">

<pre class="src src-sh">gem install travis
travis encrypt <span style="color: #F92672;">GH_TOKEN</span>=your_token --add <span style="color: #465457; font-style: italic;"># </span><span style="color: #465457; font-style: italic;">do this in your octopress dir</span>
</pre>
</div>

<ul class="org-ul">
<li>setup in <code>.travis.yml</code>
</li>
</ul>
<div class="org-src-container">

<pre class="src src-yaml"><span style="color: #465457; font-style: italic;">---</span>
<span style="color: #F92672;">language</span>: ruby
<span style="color: #F92672;">branches</span>:
  <span style="color: #F92672;">only</span>:
  - source
<span style="color: #F92672;">rvm</span>:
- 1.9.3
<span style="color: #F92672;">before_script</span>:
- git config --global user.name <span style="color: #E6DB74;">"Jichao Ouyang"</span>
- git config --global user.email <span style="color: #E6DB74;">"oyanglulu@gmail.com"</span>
- export REPO_URL=<span style="color: #E6DB74;">"https://$GH_TOKEN@github.com/$GH_REPO.git"</span>
- rake setup_github_pages[$REPO_URL]
<span style="color: #F92672;">script</span>:
- rake generate
<span style="color: #F92672;">after_script</span>:
- rake deploy
<span style="color: #F92672;">env</span>:
  <span style="color: #F92672;">global</span>:
  - GH_REPO=<span style="color: #E6DB74;">"geogeo.github.com"</span>
  - <span style="color: #F92672;">secure</span>: ! <span style="color: #E6DB74;">'UcwYke5vbuDVxFf8smJ2h8UkaVAdutc4hJ7WD06KKJlxQdGuF3rrG5rActpx</span>

<span style="color: #E6DB74;">    5Np/gu1Nui3jnZv6jBnd9vJjKvwhPbpXBymlpoxo0tswhiAFAg5Tu8Zo50dF</span>

<span style="color: #E6DB74;">    nB//OpMAD8Yp30cUwZ7V7x46tikWAweZYpPGTRgfS5lU3ebA1js='</span>
</pre>
</div>
<p>
rakefile中需要做如下更改
</p>
<div class="org-src-container">

<pre class="src src-diff"><span style="color: #F8F8F2;">diff --git a/Rakefile b/Rakefile</span>
<span style="color: #F8F8F2;">index a57a56f..59b758a 100755</span>
<span style="color: #F8F8F2; background-color: #232526;">--- </span><span style="color: #66D9EF; background-color: #232526;">a/Rakefile</span>
<span style="color: #F8F8F2; background-color: #232526;">+++ </span><span style="color: #66D9EF; background-color: #232526;">b/Rakefile</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -9,10 +9,10 @@</span><span style="color: #F8F8F2; background-color: #232526;"> ssh_port       = "22"</span>
<span style="color: #F8F8F2;"> document_root  = "~/website.com/"</span>
<span style="color: #F8F8F2;"> rsync_delete   = false</span>
<span style="color: #F8F8F2;"> rsync_args     = ""  # Any extra arguments to pass to rsync</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">deploy_default = "rsync"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">deploy_default = "push"</span>

<span style="color: #F8F8F2;"> # This will be configured for you when you run config_deploy</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">deploy_branch  = "gh-pages"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">deploy_branch  = "master"</span>

<span style="color: #F8F8F2;"> ## -- Misc Configs -- ##</span>

<span style="color: #AE81FF; background-color: #232526;">@@ -255,10 +255,10 @@</span><span style="color: #F8F8F2; background-color: #232526;"> multitask :push do</span>
<span style="color: #F8F8F2;">     system "git add ."</span>
<span style="color: #F8F8F2;">     system "git add -u"</span>
<span style="color: #F8F8F2;">     puts "\n## Commiting: Site updated at #{Time.now.utc}"</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">    message = "Site updated at #{Time.now.utc}"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    message = "Site updated at #{Time.now.utc} [ci skip]"</span>
<span style="color: #F8F8F2;">     system "git commit -m \"#{message}\""</span>
<span style="color: #F8F8F2;">     puts "\n## Pushing generated #{deploy_dir} website"</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">    system "git push origin #{deploy_branch} --force"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    system "git push origin #{deploy_branch} --force --quiet"</span>
<span style="color: #F8F8F2;">     puts "\n## Github Pages deploy complete"</span>
<span style="color: #F8F8F2;">   end</span>
<span style="color: #F8F8F2;"> end</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -307,7 +307,7 @@</span><span style="color: #F8F8F2; background-color: #232526;"> task :setup_github_pages, :repo do |t, args|</span>
<span style="color: #F8F8F2;">     puts "(For example, 'git@github.com:your_username/your_username.github.io)"</span>
<span style="color: #F8F8F2;">     repo_url = get_stdin("Repository url: ")</span>
<span style="color: #F8F8F2;">   end</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">  user = repo_url.match(/:([^\/]+)/)[1]</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">  user = repo_url.match(/[\/:]([^\/]+)\/[^\/]+$/)[1]</span>
<span style="color: #F8F8F2;">   branch = (repo_url.match(/\/[\w-]+\.github\.(?:io|com)/).nil?) ? 'gh-pages' : 'master'</span>
<span style="color: #F8F8F2;">   project = (branch == 'gh-pages') ? repo_url.match(/\/([^\.]+)/)[1] : ''</span>
<span style="color: #F8F8F2;">   unless (`git remote -v` =~ /origin.+?octopress(?:\.git)?/).nil?</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -317,7 +317,7 @@</span><span style="color: #F8F8F2; background-color: #232526;"> task :setup_github_pages, :repo do |t, args|</span>
<span style="color: #F8F8F2;">       # If this is a user/organization pages repository, add the correct origin remote</span>
<span style="color: #F8F8F2;">       # and checkout the source branch for committing changes to the blog source.</span>
<span style="color: #F8F8F2;">       system "git remote add origin #{repo_url}"</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">      puts "Added remote #{repo_url} as origin"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">      puts "Added remote origin"</span>
<span style="color: #F8F8F2;">       system "git config branch.master.remote origin"</span>
<span style="color: #F8F8F2;">       puts "Set origin as default remote"</span>
<span style="color: #F8F8F2;">       system "git branch -m master source"</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -341,7 +341,7 @@</span><span style="color: #F8F8F2; background-color: #232526;"> task :setup_github_pages, :repo do |t, args|</span>
<span style="color: #F8F8F2;">     system "git init"</span>
<span style="color: #F8F8F2;">     system "echo 'My Octopress Page is coming soon &amp;hellip;' &gt; index.html"</span>
<span style="color: #F8F8F2;">     system "git add ."</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">    system "git commit -m \"Octopress init\""</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    system "git commit -m \"Octopress init[ci skip]\""</span>
<span style="color: #F8F8F2;">     system "git branch -m gh-pages" unless branch == 'master'</span>
<span style="color: #F8F8F2;">     system "git remote add origin #{repo_url}"</span>
<span style="color: #F8F8F2;">     rakefile = IO.read(__FILE__)</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -351,7 +351,7 @@</span><span style="color: #F8F8F2; background-color: #232526;"> task :setup_github_pages, :repo do |t, args|</span>
<span style="color: #F8F8F2;">       f.write rakefile</span>
<span style="color: #F8F8F2;">     end</span>
<span style="color: #F8F8F2;">   end</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">  puts "\n---\n## Now you can deploy to #{url} with `rake deploy` ##"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">  puts "\n---\n## Now you can deploy to `rake deploy` ##"</span>
<span style="color: #F8F8F2;"> end</span>
</pre>
</div>

<p>
config文件中如下更改, 最后一行
</p>
<div class="org-src-container">

<pre class="src src-diff"><span style="color: #F8F8F2;">diff --git a/_config.yml b/_config.yml</span>
<span style="color: #F8F8F2;">old mode 100755</span>
<span style="color: #F8F8F2;">new mode 100644</span>
<span style="color: #F8F8F2;">index 1397f8d..91db12e</span>
<span style="color: #F8F8F2; background-color: #232526;">--- </span><span style="color: #66D9EF; background-color: #232526;">a/_config.yml</span>
<span style="color: #F8F8F2; background-color: #232526;">+++ </span><span style="color: #66D9EF; background-color: #232526;">b/_config.yml</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -2,12 +2,12 @@</span>
<span style="color: #F8F8F2;"> #      Main Configs       #</span>
<span style="color: #F8F8F2;"> # ----------------------- #</span>

<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">url: http://yoursite.com</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">title: My Octopress Blog</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">subtitle: A blogging framework for hackers.</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">author: Your Name</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">url: http://a3e7a269707a88afa72e25ab2f7637abfb5bf623@github.com.github.io</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">title: Jichao Ouyang's Journal</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">subtitle: Code or Else.</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">author: Jichao Ouyang</span>
<span style="color: #F8F8F2;"> simple_search: http://google.com/search</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">description:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">description: Jichao Ouyang's Journal/Blog/Whatever</span>

<span style="color: #F8F8F2;"> # Default date format is "ordinal" (resulting in "July 22nd 2007")</span>
<span style="color: #F8F8F2;"> # You can customize the format as defined in</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -36,7 +36,7 @@</span><span style="color: #F8F8F2; background-color: #232526;"> category_dir: blog/categories</span>
<span style="color: #F8F8F2;"> markdown: rdiscount</span>
<span style="color: #F8F8F2;"> pygments: false # default python pygments have been replaced by pygments.rb</span>

<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">paginate: 10          # Posts per page on the blog index</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">paginate: 12          # Posts per page on the blog index</span>
<span style="color: #F8F8F2;"> pagination_dir: blog  # Directory base for pagination URLs eg. /blog/page/2/</span>
<span style="color: #F8F8F2;"> recent_posts: 5       # Posts in the sidebar Recent Posts section</span>
<span style="color: #F8F8F2;"> excerpt_link: "Read on &amp;rarr;"  # "Continue reading" link text at the bottom of excerpted</span>
<span style="color: #F8F8F2;"> @@ -45,7 +45,7 @@ titlecase: true       # Converts page and post titles to titlecase</span>
<span style="color: #F8F8F2;">  # To add custom asides, create files in /source/_includes/custom/asides/ and add them to t</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">default_asides: [asides/recent_posts.html, asides/github.html, asides/delicious.html, asid</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">default_asides: [asides/recent_posts.html, asides/github.html, asides/twitter.html, asides</span>

<span style="color: #F8F8F2;"> # Each layout uses the default asides, but they can have their own asides instead. Simply</span>
<span style="color: #F8F8F2;"> # and add an array with the asides you want to use.</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -58,26 +58,38 @@</span><span style="color: #F8F8F2; background-color: #232526;"> default_asides: [asides/recent_posts.html, asides/github.html, asides/d</span>
<span style="color: #F8F8F2;"> # ----------------------- #</span>

<span style="color: #F8F8F2;"> # Github repositories</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">github_user:</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">github_repo_count: 0</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">github_user: geogeo</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">github_repo_count: 5</span>
<span style="color: #F8F8F2;"> github_show_profile_link: true</span>
<span style="color: #F8F8F2;"> github_skip_forks: true</span>

<span style="color: #F8F8F2;"> # Twitter</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">twitter_user:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">twitter_user: oyanglulu</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">twitter_tweet_count: 4</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">twitter_show_replies: false</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">twitter_follow_button: true</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">twitter_show_follower_count: false</span>
<span style="color: #F8F8F2;"> twitter_tweet_button: true</span>

<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;"># weibo</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">weibo_uid: 1336382145</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">weibo_verifier: 1ca93bbd</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">weibo_fansline: 0</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">weibo_show: true</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">weibo_pic: true</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">weibo_skin: 10</span>
<span style="color: #A6E22E;">+</span>
<span style="color: #F8F8F2;"> # Google +1</span>
<span style="color: #F8F8F2;"> -google_plus_one: false</span>
<span style="color: #F8F8F2;"> +google_plus_one: true</span>
<span style="color: #F8F8F2;"> google_plus_one_size: medium</span>

<span style="color: #F8F8F2;"> # Google Plus Profile</span>
<span style="color: #F8F8F2;"> # Hidden: No visible button, just add author information to search results</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">googleplus_user:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">googleplus_user: oyanglulu</span>
<span style="color: #F8F8F2;"> googleplus_hidden: false</span>

<span style="color: #F8F8F2;"> # Pinboard</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">pinboard_user:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">pinboard_user:</span>
<span style="color: #F8F8F2;"> pinboard_count: 3</span>

<span style="color: #F8F8F2;"> # Delicious</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -85,11 +97,22 @@</span><span style="color: #F8F8F2; background-color: #232526;"> delicious_user:</span>
<span style="color: #F8F8F2;"> delicious_count: 3</span>

<span style="color: #F8F8F2;"> # Disqus Comments</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">disqus_short_name:</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">disqus_show_comment_count: false</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">disqus_short_name: jcoysblog</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">disqus_show_comment_count: true</span>

<span style="color: #F8F8F2;"> # Google Analytics</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">google_analytics_tracking_id:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">google_analytics_tracking_id: UA-32314154-1</span>

<span style="color: #F8F8F2;"> # Facebook Like</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">facebook_like: false</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">facebook_like: true</span>
<span style="color: #A6E22E;">+</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">#prose.io settings</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">prose:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">  rooturl: "source"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">  metadata:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    "source/_posts": |</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">      layout: post</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">      title: "Title"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">      comments: true</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">      categories:</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">      published: true</span>
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-5" class="outline-2">
<h2 id="sec-5"><span class="section-number-2">5</span> Use Org-mode instead of Markdown</h2>
<div class="outline-text-2" id="text-5">
<p>
当然我并不是说markdown有什么不好的, 完全可以搞定博客的各种格式. 但是作
为emacs用户, 没有神马是org不能搞定的文档工作. 好吧, 不是emacs重度用户
请跳过该节.
</p>

<p>
其实思路非常简单
</p>
<ul class="org-ul">
<li>更改 <code>rake new_post</code> 使其建立一个org后缀的文件,而不是markdown后缀
</li>
<li>更改 rake file 和文章的header
</li>
</ul>

<pre class="example">
posts_dir   = "_org_posts"
new_post_ext    = "org"  # default new post file extension when using the new_post task
new_page_ext    = "org"  # default new page file extension when using the new_page task
</pre>
<div class="org-src-container">

<pre class="src src-diff"><span style="color: #AE81FF; background-color: #232526;">@@ -21,10 +21,11 @@</span><span style="color: #F8F8F2; background-color: #232526;"> source_dir      = "source"    # source file directory</span>
<span style="color: #F8F8F2;"> blog_index_dir  = 'source'    # directory for your blog's index page (if you put your index in source/blog/</span>
<span style="color: #F8F8F2;"> deploy_dir      = "_deploy"   # deploy directory (for Github pages deployment)</span>
<span style="color: #F8F8F2;"> stash_dir       = "_stash"    # directory to stash posts for</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">posts_dir   = "_org_posts"</span>
<span style="color: #F8F8F2;"> themes_dir      = ".themes"   # directory for blog files</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">new_post_ext    = "markdown"  # default new post file extension when using the new_post task</span>
<span style="color: #F92672;">-</span><span style="color: #cd0000; font-weight: bold;">new_page_ext    = "markdown"  # default new page file extension when using the new_page task</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">new_post_ext    = "org"  # default new post file extension when using the new_post task</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">new_page_ext    = "org"  # default new page file extension when using the new_page task</span>
<span style="color: #F8F8F2;"> server_port     = "4000"      # port for preview server eg. localhost:4000</span>

<span style="color: #AE81FF; background-color: #232526;">@@ -105,6 +106,7 @@</span><span style="color: #F8F8F2; background-color: #232526;"> task :new_post, :title do |t, args|</span>
<span style="color: #F8F8F2;">   end</span>
<span style="color: #F8F8F2;">   puts "Creating new post: #{filename}"</span>
<span style="color: #F8F8F2;">   open(filename, 'w') do |post|</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    post.puts "#+BEGIN_HTML"</span>
<span style="color: #F8F8F2;">     post.puts "---"</span>
<span style="color: #F8F8F2;">     post.puts "layout: post"</span>
<span style="color: #F8F8F2;">     post.puts "title: \"#{title.gsub(/&amp;/,'&amp;amp;')}\""</span>
<span style="color: #AE81FF; background-color: #232526;">@@ -112,6 +114,8 @@</span><span style="color: #F8F8F2; background-color: #232526;"> task :new_post, :title do |t, args|</span>
<span style="color: #F8F8F2;">     post.puts "comments: true"</span>
<span style="color: #F8F8F2;">     post.puts "categories: "</span>
<span style="color: #F8F8F2;">     post.puts "---"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    post.puts "#+END_HTML"</span>
<span style="color: #A6E22E;">+</span><span style="color: #008b00; font-weight: bold;">    post.puts "#+OPTIONS: toc:nil"</span>
<span style="color: #F8F8F2;">   end</span>
<span style="color: #F8F8F2;"> end</span>
</pre>
</div>
<ul class="org-ul">
<li>hook publish html to octopress folder
</li>
</ul>
<div class="org-src-container">

<pre class="src src-lisp"><span style="color: #7f7f7f;">(</span>setq org-publish-project-alist
   '<span style="color: #7f7f7f;">((</span><span style="color: #E6DB74;">"blog"</span> .  <span style="color: #7f7f7f;">(</span><span style="color: #A6E22E;">:base-directory</span> <span style="color: #E6DB74;">"~/Dropbox/octopress/source/_org_posts/"</span>
                 <span style="color: #A6E22E;">:base-extension</span> <span style="color: #E6DB74;">"org"</span>
                 <span style="color: #A6E22E;">:publishing-directory</span> <span style="color: #E6DB74;">"~/Dropbox/octopress/source/_posts/"</span>
                 <span style="color: #A6E22E;">:sub-superscript</span> <span style="color: #E6DB74;">""</span>
                 <span style="color: #A6E22E;">:recursive</span> t
                 <span style="color: #A6E22E;">:publishing-function</span> org-html-publish-to-html
                 <span style="color: #A6E22E;">:headline-levels</span> 4
                 <span style="color: #A6E22E;">:html-extension</span> <span style="color: #E6DB74;">"markdown"</span>
                 <span style="color: #A6E22E;">:body-only</span> t<span style="color: #7f7f7f;">))))</span>
</pre>
</div>

<p>
为什么要导出 html 到 markdown 的目录呢, 这样有毛好处呢, 为毛不直接转成
markdown. 因为转成markdown后jykll再转成html就会成屎了. 好吧, 直接转成
html格式不会乱.
</p>

<p>
因此, 前面所说的有些标签就得变成org-mode格式的. 例如 code block
就需要用 <code>#+BEGIN_SRC</code> 来包住而不是 <code>```</code>, 快捷键 <code>&lt;s TAB</code>
</p>
</div>
</div>
<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> <p class="footpara">
<a href="http://www.harimenon.com/blog/2013/01/27/auto-deploying-to-my-octopress-blog/">http://www.harimenon.com/blog/2013/01/27/auto-deploying-to-my-octopress-blog/</a>
</p></div>

<div class="footdef"><sup><a id="fn.2" name="fn.2" class="footnum" href="#fnr.2">2</a></sup> <p class="footpara">
<a href="http://rogerz.github.io/">http://rogerz.github.io/</a>
</p></div>


</div>
</div>
