---
layout: post
title: "How to Write Post Using Octopress and Org Mode"
date: 2013-06-07 20:06
comments: true
categories: ["org-mode","emacs"]
---

# getting started

Github page 上建博客本来就是很geek的事情, 用octopress来建博客可用说是
for ruby geeks, 因为可以用欢乐的rake [task] 来完成建立文章和发布等一系
列task. 当然他依赖于 [Jekyll](https://github.com/mojombo/jekyll) 

如果wordpress的发布过程是这样的:

-   打开wordpress

-   点下new post

在textarea中输入内容

这样好像非常简单, 但是写的过程并不是那么easy. 比如一个简单的 **加粗** 操
作, 需要选中需要加粗的字, 点一下\`B\`. 这对一个程序员来说是有多么痛苦啊.
一个高效的程序员不希望任何一只手离开键盘. 好吧, 这时候 [GitHub Flavored
Markdown](http://github.github.com/github-flavored-markdown/) 和 [GitHub Pages](http://pages.github.com/) 冲出来解放程序员的鼠标手. 当然, Github Pages
的原意是让程序员为自己的repository建立一个介绍的静态网页.

但是, 有了octopress, 发博客也自然变easy了.

## 安装 octopress

just do the following in your shell.

\`\`\`sh
curl -L <a href="<https://get.rvm.io>"><https://get.rvm.io></a> | bash -s stable &#x2013;ruby # install ruby
version manager
rvm install 1.9.3 # octopress need 1.9.3
rvm user 1.9.3 &#x2013;default # use it as default

git clone git://github.com/imathis/octopress.git octopress
cd octopress    # If you use RVM, You'll be asked if you trust the .rvmrc file (say yes).
ruby &#x2013;version #should be 1.9.3
rake install # install default Octopress theme
\`\`\`

## Setup Github Pages

-   new 一个名叫 `username.github.io` 的 repository, push 到 master

branch. // 这是user page, 如果是项目page, 需要push到 gh-pages branch.

-   Done // yeah~ that's it

## Setup Octopress

\`\`\`sh
rake setup<sub>github</sub><sub>pages</sub>
rake generate # This will generate your blog, copy the generated files into \_deploy
rake deploy # push to your github pages
echo 'your-domain.com' >> source/CNAME
\`\`\`

# Use Octopress

## Inline code

`this is inline code`

## The Greatest Code Blocks

[language] [title] [url] [link text] code snippet 

<pre>
ruby Discover if a number is prime http://www.noulakaz.net/weblog/2007/03/18/a-regular-expression-to-check-for-prime-numbers/ Source Article
class Fixnum
  def prime?
    ('1' * self) !~ /^1?$|^(11+?)\1+$/
  end
end
</pre>

will render as
\`\`\` ruby 
Discover if a number is prime <http://www.noulakaz.net/weblog/2007/03/18/a-regular-expression-to-check-for-prime-numbers/> Source Article
class Fixnum
  def prime?
    ('1' \* self) !~ *^1?\(|^(11+?)\1+\)*
  end
end
\`\`\`

## [Gist](http://gist.github.com)

gist gist<sub>id</sub> filename

like
\`\`\`
{% gist 996818 %}
\`\`\`
will be rander as
{% gist 996818 %}

## 3rd party plugin

\`\`\`yml \_config.yml
default<sub>asides</sub>: [asides/recent<sub>posts</sub>.html, asides/github.html,
asides/twitter.html, asides/delicious.html, asides/pinboard.html,
asides/googleplus.html, asides/weibo.html]
\`\`\`

# put octopress folder into dropbox

当然要扔到dropbox上, 喂小米, 因为这样我们可以用手机写博客. 好吧, 前提
是你的手机要有个好用的markdown编辑器.

# Use Org-mode instead of Markdown

当然我并不是说markdown有什么不好的, 完全可以搞定博客的各种格式. 但是作
为emacs用户, 没有神马是org不能搞定的文档工作. 好吧, 不是emacs重度用户
请跳过该节.

其实思路非常简单

-   更改\`rake new<sub>post\`使其建立一个org后缀的文件</sub>,而不是markdown后缀

-   更改文章的header

\`\`\`ruby RakeFile
 open(filename, 'w') do |post|
    post.puts "#+BEGIN<sub>HTML</sub>"
    post.puts "&#x2014;"
    post.puts "layout: post"
    post.puts "title: \\"#{title.gsub(*&*,'&amp;')}\\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
    post.puts "comments: true"
    post.puts "categories: "
    post.puts "&#x2014;"
    post.puts "#+END<sub>HTML</sub>"
    post.puts "#+OPTIONS: toc:nil"
\`\`\`

-   hook publish html to octopress folder

为什么要导出 html 到 markdown 的目录呢, 这样有毛好处呢, 为毛不直接转成 markdown. 因为这样可用继
续使用 octopress 的一些 markdown 如 gist 和 code block.
