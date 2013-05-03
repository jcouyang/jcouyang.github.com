---
layout: post
title: "在sourceforge Project web 上安装wordpress"
date: 2012-05-03 14:22
comments: true
categories: [sourceforge,wordpress,host,blog]
---

每在[sourceforge](http://sf.net)上建立一个项目,都会给一个project Web, 即 ``项目名.sf.net``
而这个项目主页并不只是静态的,后台是完整的Linux主机而且可以绑定域名
以下是官网给出的功能:
[Features](http://sourceforge.net/apps/trac/sourceforge/wiki/Project%20web)

>*    Our project web servers frequently handle more than 50M hits per day; we handle server scaling, load balancing, and performance tuning.
>*    The project web platform has been standardized on CentOS 5.x Linux, running Apache 2.2.x.
> *   Support for many programming languages, including PHP (via mod_php), Perl, Python, Tcl, Ruby, and shell scripts.
> *   Support for several database platforms is provided, including MySQL (through our Project Database service), DBM, and SQLite.
> *   Project web content may be uploaded using our File management service or be managed directly using our Shell service.
> *   Each project is allocated the UNIXNAME.sourceforge.net VHOST (virtual host), which is used to serve their project web content.
> *   Our servers will answer traffic for a domain you register, when configured as a custom VHOST.
> *   Common web server features are provided, such as mod_rewrite, Server-Side Includes (SSI), HTTP Basic Auth, and custom error handler support.
> *   Page views can be counted in the statistics system based on display of a project-specific SourceForge.net logo.
>  *  Additional web analytics are available using Piwik, part of our Hosted Apps offering.
> *   Service usage is not restricted by quotas. 
<!-- more -->
可以看到支持

*	各种脚本语言php,python,ruby
*	支持各种数据库
*	域名绑定 VHOST


所以你可以在上面建不仅仅是Wordpress而可以是任何使用这些语言的博客

[数据库](http://sourceforge.net/apps/trac/sourceforge/wiki/Project%20database)可以在Project下面新建一个Mysql
在

``https://sourceforge.net/p/YOUR_PROJECT_NAME/admin/sfx-mysql/``
底下查看数据库信息,记得在wordpress数据库主机只填 ``Hostname`` 就哦克了

下来就不用说了吧
[VHOST绑定域名](http://sourceforge.net/apps/trac/sourceforge/wiki/Custom%20VHOSTs)只有填上你的域名,在到你的域名CNAME到vhost.sourceforge.net就哦克了

enjoy ;)

