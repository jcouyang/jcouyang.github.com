---
layout: post
title: "上传Python packages 至pip"
date: 2012-05-14 11:24
comments: true
categories: ['Python','pip','release']
---

用python的童鞋都很习惯用``pip install``, 而我发布的[换多多](http://huanduoduo.com)由于要使用我写的另外一个包``django-taobao``.
要让服务器自动安装django-taobao的方法可以是在requirments.txt里面写上 ``git+ssh://git@github.com:geogeo/django-taobao``. 
当然还有更妙的就是直接吧这个包传到pip上, 这样就可以直接用 ``pip install django-taobao``,或者只在requirments.txt中写个django-taobao就哦了;)

只用3步就搞定, 更具体参照[http://guide.python-distribute.org/creation.html](http://guide.python-distribute.org/creation.html)
<!-- more -->
## setup.py
cd 到你的package目录
添加``setup.py``
{% codeblock setup.py %}
from distutils.core import setup

setup(
    name='django-taobao',
    version='0.1.0',
    author='Jichao Ouyang',
    author_email='oyanglulu@gmail.com',
    packages=['taobao','taobao.templates','taobao.taobaoapi2'],
    url='https://github.com/geogeo/django-taobao',
    license='LICENSE.txt',
    description='Taobao saler tools for django.',
    long_description=open('README.txt').read(),
    install_requires=[
        "Django >= 1.3.1",
        "django-social-auth",
    ],
)
{% endcodeblock %}
## 注册/登陆pip
	$ python setup.py register
	We need to know who you are, so please choose either:
	 1. use your existing login,
	 2. register as a new user,
	 3. have the server generate a new password for you (and email it to you), or
	 4. quit
	Your selection [default 1]: 
跟着注册或者直接登陆.

# 打包上传
	$ python setup.py sdist
	$ python setup.py sdist upload

现在就可以直接 ``pip install django-taobao``了 ``三(^人^)三``
 








