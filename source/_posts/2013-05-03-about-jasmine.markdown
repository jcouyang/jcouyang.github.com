---
layout: post
title: "about jasmine"
date: 2013-05-03 22:56
comments: true
categories: ["javascript"]
---

* Testing Javascript with Jasmine

http://try-jasmine.heroku.com

** DONE What Jasmine is?
   it's a javascript version of rspec
   
** DONE Jasmine with Ruby
   $ gem install jasmine
   $ jamsmine init
   $ rake jasmine
   $ open [[http://0.0.0.0:3000?spec=]]

** TODO Syntax comparisons to Rspec

   Jasmine -> [[file:spec/javascripts/PlayerSpec.js][PlayerSpec.js]]
   RSpec  -> [[file:spec/ruby/PlayerSpec.rb][PlayerSpec.rb]]

** TODO Jasmine Matchers
*** TODO Native Matchers
         expect(x).toEqual(y)
         expect(x).toBe(y); 
          expect(x).toMatch(pattern)
   expect(x).toBeDefined()
   expect(x).[[http://0.0.0.0:8888/__jasmine__/jasmine.js][toBeNull()]];
   expect(x).toBeTruthy();
   expect(x).toBeFalsy();
   expect(x).toContain(y);
   expect(x).toBeLessThan(y); 
   expect(x).toBeGreaterThan(y);
   expect(fn).toThrow(e);
   
*** TODO Custom Matchers
    [[file:spec/javascripts/helpers/SpecHelper.js:3][SpecHelper.js]]
    [[file:spec/javascripts/PlayerSpec.js::15][PlayerSpec.js]]
** DONE Jasmine Spies
   [[file:spec/javascripts/PlayerSpec.js::51][PlayerSpec.js]]
   
** TODO Jasmine x
    [[file:spec/javascripts/PlayerSpec.js:31][PlayerSpec.js]]
   
** TODO [[https://github.com/velesin/jasmine-jquery/blob/master/lib/jasmine-jquery.js][Jasmine jQuery]]
   - a set of custom matchers for jQuery framework
     toBe(jQuerySelector) 
     toBeChecked()
     toBeEmpty()
     toBeHidden()
     toBeSelected()
     toBeVisible()
     toContain(jQuerySelector)
     toExist()
     toHaveAttr(attributeName, attributeValue) * toHaveBeenTriggeredOn(selector)
     toHaveClass(className)
     toHaveData(key, value)
     toHaveHtml(string)
     toHaveId(id)
     toHaveText(string)
     toHaveValue(value)
     toBeDisabled()

** TODO Dive into the source
   - what is jasmine.[[file:jasmine.js::2129][Runner]]
   - a [[file:jasmine.js::805][describe]] is a [[file:jasmine.js::2452][jasmine.Suite]]
     - a [[file:jasmine.js::863][it]] is a [[file:jasmine::2174][jasmine.Spec]]
   - [[file:jasmine.js::2381][addBeforesAndAftersToQueue]]
