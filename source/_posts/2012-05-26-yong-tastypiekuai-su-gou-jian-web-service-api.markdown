---
layout: post
title: "用Tastypie快速构建web service api"
date: 2012-05-26 23:21
comments: true
categories: ["django"]
---

十分简单

1. ``pip install django-tastypie``
2. 在你需要开放结构的app下建一个api(或者爱叫啥都行)目录, 放一个空的``__init__.py``
3. 再建一``resource.py``

```python
from tastypie.resources import ModelResource
from myapp.models import Entry # 导入你的model
class EntryResource(ModelResource):
    class Meta:
        queryset = Entry.objects.all()  #指定queryset
   		resource_name = 'entry'  #这将是url中的名字 如 yoursite.com/api/entry?format=json
```

#### 下来的问题是, 如何处理需要用户登陆才能进行的操作CURD

##### 1 首先解决用户登陆问题
tastypie 提供几种 Authenticate 方案

我选 ApiKeyAuthentication 因为实现起来最简单
加个自动创建api的signal

```python
from django.contrib.auth.models import User
from django.db import models
from tastypie.models import create_api_key

models.signals.post_save.connect(create_api_key, sender=User)
```
搞定

