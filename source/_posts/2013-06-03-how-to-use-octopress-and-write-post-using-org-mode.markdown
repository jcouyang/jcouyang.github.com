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
当然,就算你喜欢用wordpress, 同样可以用 prose.io + travis ci 实现<i>auto deploy octopress with travis ci {fn:1} {fn:2}</i>.
</p>
</div>

<div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> 安装 octopress</h3>
<div class="outline-text-3" id="text-1-1">
<p>
just do the following in your shell.
</p>

<div class="org-src-container">

<pre class="src src-sh">$ \curl -L https://get.rvm.io | bash # install ruby version manager
rvm install 1.9.3 # octopress need 1.9.3
rvm user 1.9.3 --default # use it as default

git clone git://github.com/imathis/octopress.git octopress
cd octopress    # If you use RVM, You'll be asked if you trust the .rvmrc file (say yes).
ruby --version #should be 1.9.3
rake install # install default Octopress theme
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
rake generate # This will generate your blog, copy the generated files into _deploy
rake deploy # push to your github pages
echo 'your-domain.com' &gt;&gt; source/CNAME
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

<pre class="src src-ruby">Discover if a number is prime http://www.noulakaz.net/weblog/2007/03/18/a-regular-expression-to-check-for-prime-numbers/ Source Article
class Fixnum
  def prime?
    ('1' * self) !~ /^1?$|^(11+?)\1+$/
  end
end
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-2-3" class="outline-3">
<h3 id="sec-2-3"><span class="section-number-3">2.3</span> <a href="//gist.github.com">Gist</a></h3>
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
<p>
用dropbox绝对不是让你 blog on the go 的最好方式, 因为你还需要打开电脑
deploy 一下. 那么最给力的做法是使用 travis ci 自动的 rake deploy 你的
文章. 再加上 prose.io, 简直就是wordpress, 你不需要任何push, 只要在
prose.io 上编辑完成后点下 publish 即可. travis会自动给你发布hoho. 这样
就可以随时随地发了hoho.
</p>

<ul class="org-ul">
<li>get github OAtuh token
</li>
</ul>
<div class="org-src-container">

<pre class="src src-sh">curl -u 'your_github_name' -d '{"scopes":["public_repo"], "note":"Travis access"}' https://api.github.com/authorizations
</pre>
</div>

<!-- more -->

<ul class="org-ul">
<li>encypte your token
</li>
</ul>
<div class="org-src-container">

<pre class="src src-sh">gem install travis
travis encrypt GH_TOKEN=your_token --add # do this in your octopress dir
</pre>
</div>

<ul class="org-ul">
<li>setup in <code>.travis.yml</code>
</li>
</ul>
<div class="org-src-container">

<pre class="src src-yaml">---
language: ruby
branches:
  only:
  - source
rvm:
- 1.9.3
before_script:
- git config --global user.name "Jichao Ouyang"
- git config --global user.email "oyanglulu@gmail.com"
- export REPO_URL="https://$GH_TOKEN@github.com/$GH_REPO.git"
- rake setup_github_pages[$REPO_URL]
script:
- rake generate
after_script:
- rake deploy
env:
  global:
  - GH_REPO="geogeo.github.com"
  - secure: ! 'UcwYke5vbuDVxFf8smJ2h8UkaVAdutc4hJ7WD06KKJlxQdGuF3rrG5rActpx

    5Np/gu1Nui3jnZv6jBnd9vJjKvwhPbpXBymlpoxo0tswhiAFAg5Tu8Zo50dF

    nB//OpMAD8Yp30cUwZ7V7x46tikWAweZYpPGTRgfS5lU3ebA1js='
</pre>
</div>
<p>
rakefile中需要做如下更改
</p>
<div class="org-src-container">

<pre class="src src-diff">diff --git a/Rakefile b/Rakefile
index a57a56f..59b758a 100755
--- a/Rakefile
+++ b/Rakefile
@@ -9,10 +9,10 @@ ssh_port       = "22"
 document_root  = "~/website.com/"
 rsync_delete   = false
 rsync_args     = ""  # Any extra arguments to pass to rsync
-deploy_default = "rsync"
+deploy_default = "push"

 # This will be configured for you when you run config_deploy
-deploy_branch  = "gh-pages"
+deploy_branch  = "master"

 ## -- Misc Configs -- ##

@@ -255,10 +255,10 @@ multitask :push do
     system "git add ."
     system "git add -u"
     puts "\n## Commiting: Site updated at #{Time.now.utc}"
-    message = "Site updated at #{Time.now.utc}"
+    message = "Site updated at #{Time.now.utc} [ci skip]"
     system "git commit -m \"#{message}\""
     puts "\n## Pushing generated #{deploy_dir} website"
-    system "git push origin #{deploy_branch} --force"
+    system "git push origin #{deploy_branch} --force --quiet"
     puts "\n## Github Pages deploy complete"
   end
 end
@@ -307,7 +307,7 @@ task :setup_github_pages, :repo do |t, args|
     puts "(For example, 'git@github.com:your_username/your_username.github.io)"
     repo_url = get_stdin("Repository url: ")
   end
-  user = repo_url.match(/:([^\/]+)/)[1]
+  user = repo_url.match(/[\/:]([^\/]+)\/[^\/]+$/)[1]
   branch = (repo_url.match(/\/[\w-]+\.github\.(?:io|com)/).nil?) ? 'gh-pages' : 'master'
   project = (branch == 'gh-pages') ? repo_url.match(/\/([^\.]+)/)[1] : ''
   unless (`git remote -v` =~ /origin.+?octopress(?:\.git)?/).nil?
@@ -317,7 +317,7 @@ task :setup_github_pages, :repo do |t, args|
       # If this is a user/organization pages repository, add the correct origin remote
       # and checkout the source branch for committing changes to the blog source.
       system "git remote add origin #{repo_url}"
-      puts "Added remote #{repo_url} as origin"
+      puts "Added remote origin"
       system "git config branch.master.remote origin"
       puts "Set origin as default remote"
       system "git branch -m master source"
@@ -341,7 +341,7 @@ task :setup_github_pages, :repo do |t, args|
     system "git init"
     system "echo 'My Octopress Page is coming soon &amp;hellip;' &gt; index.html"
     system "git add ."
-    system "git commit -m \"Octopress init\""
+    system "git commit -m \"Octopress init[ci skip]\""
     system "git branch -m gh-pages" unless branch == 'master'
     system "git remote add origin #{repo_url}"
     rakefile = IO.read(__FILE__)
@@ -351,7 +351,7 @@ task :setup_github_pages, :repo do |t, args|
       f.write rakefile
     end
   end
-  puts "\n---\n## Now you can deploy to #{url} with `rake deploy` ##"
+  puts "\n---\n## Now you can deploy to `rake deploy` ##"
 end
</pre>
</div>

<p>
config文件中如下更改, 最后一行
</p>
<div class="org-src-container">

<pre class="src src-diff">diff --git a/_config.yml b/_config.yml
old mode 100755
new mode 100644
index 1397f8d..91db12e
--- a/_config.yml
+++ b/_config.yml
@@ -2,12 +2,12 @@
 #      Main Configs       #
 # ----------------------- #

-url: http://yoursite.com
-title: My Octopress Blog
-subtitle: A blogging framework for hackers.
-author: Your Name
+url: http://oyanglul.us
+title: Jichao Ouyang's Journal
+subtitle: Code or Else.
+author: Jichao Ouyang
 simple_search: http://google.com/search
-description:
+description: Jichao Ouyang's Journal/Blog/Whatever

 # Default date format is "ordinal" (resulting in "July 22nd 2007")
 # You can customize the format as defined in
@@ -36,7 +36,7 @@ category_dir: blog/categories
 markdown: rdiscount
 pygments: false # default python pygments have been replaced by pygments.rb

-paginate: 10          # Posts per page on the blog index
+paginate: 12          # Posts per page on the blog index
 pagination_dir: blog  # Directory base for pagination URLs eg. /blog/page/2/
 recent_posts: 5       # Posts in the sidebar Recent Posts section
 excerpt_link: "Read on &amp;rarr;"  # "Continue reading" link text at the bottom of excerpted
 @@ -45,7 +45,7 @@ titlecase: true       # Converts page and post titles to titlecase
  # To add custom asides, create files in /source/_includes/custom/asides/ and add them to t
-default_asides: [asides/recent_posts.html, asides/github.html, asides/delicious.html, asid
+default_asides: [asides/recent_posts.html, asides/github.html, asides/twitter.html, asides

 # Each layout uses the default asides, but they can have their own asides instead. Simply
 # and add an array with the asides you want to use.
@@ -58,26 +58,38 @@ default_asides: [asides/recent_posts.html, asides/github.html, asides/d
 # ----------------------- #
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

<pre class="src src-diff">@@ -21,10 +21,11 @@ source_dir      = "source"    # source file directory
 blog_index_dir  = 'source'    # directory for your blog's index page (if you put your index in source/blog/
 deploy_dir      = "_deploy"   # deploy directory (for Github pages deployment)
 stash_dir       = "_stash"    # directory to stash posts for
+posts_dir   = "_org_posts"
 themes_dir      = ".themes"   # directory for blog files
-new_post_ext    = "markdown"  # default new post file extension when using the new_post task
-new_page_ext    = "markdown"  # default new page file extension when using the new_page task
+new_post_ext    = "org"  # default new post file extension when using the new_post task
+new_page_ext    = "org"  # default new page file extension when using the new_page task
 server_port     = "4000"      # port for preview server eg. localhost:4000

@@ -105,6 +106,7 @@ task :new_post, :title do |t, args|
   end
   puts "Creating new post: #{filename}"
   open(filename, 'w') do |post|
+    post.puts "#+BEGIN_HTML"
     post.puts "---"
     post.puts "layout: post"
     post.puts "title: \"#{title.gsub(/&amp;/,'&amp;amp;')}\""
@@ -112,6 +114,8 @@ task :new_post, :title do |t, args|
     post.puts "comments: true"
     post.puts "categories: "
     post.puts "---"
+    post.puts "#+END_HTML"
+    post.puts "#+OPTIONS: toc:nil"
   end
 end
</pre>
</div>
<ul class="org-ul">
<li>hook publish html to octopress folder
</li>
</ul>
<div class="org-src-container">

<pre class="src src-lisp">(setq org-publish-project-alist
   '(("blog" .  (:base-directory "~/Dropbox/octopress/source/_org_posts/"
                 :base-extension "org"
                 :publishing-directory "~/Dropbox/octopress/source/_posts/"
                 :sub-superscript ""
                 :recursive t
                 :publishing-function org-html-publish-to-html
                 :headline-levels 4
                 :html-extension "markdown"
                 :body-only t))))
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
<div id="outline-container-sec-6" class="outline-2">
<h2 id="sec-6"><span class="section-number-2">6</span> 为什么要用org-mode</h2>
<div class="outline-text-2" id="text-6">
<ul class="org-ul">
<li>org-babel mode 可以让你在 org 中嵌入各种语言的代码
</li>
<li>更多快捷键
</li>
<li>比markdown更丰富
</li>
<li>for emacser
</li>
</ul>
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
