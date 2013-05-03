---
layout: post
title: "Latex in Octopress"
date: 2012-08-20 23:56
comments: true
categories: ["Latex"]
---

## 加入mathjax 的cdn

```html
<script type="text/javascript"
  src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>
```
## 看看下面代码会翻译成神马

```html
<div markdown="0">
\[ i\hbar\frac{\partial \psi}{\partial t}
  = \frac{-\hbar^2}{2m} \left(
    \frac{\partial^2}{\partial x^2}
    + \frac{\partial^2}{\partial y^2}
    + \frac{\partial^2}{\partial z^2}
  \right) \psi + V \psi \]
</div>
```
是不是这个

<div markdown="0">
\[ i\hbar\frac{\partial \psi}{\partial t}
  = \frac{-\hbar^2}{2m} \left(
    \frac{\partial^2}{\partial x^2}
    + \frac{\partial^2}{\partial y^2}
    + \frac{\partial^2}{\partial z^2}
  \right) \psi + V \psi \]
</div>

现在终于可以Latex代码了:)
