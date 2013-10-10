---
layout: post
title: "evernote with orgmode"
date: 2013-06-25 09:16
comments: true
categories: ['emacs','orgmode',evernote']
---
<p>
<a href="http://code.google.com/p/emacs-evernote-mode/">evernote</a>-mode 使得emacs用户可用直接用 orgmode 记笔记. here is how:
</p>

<div id="outline-container-sec-1" class="outline-2">
<h2 id="sec-1"><span class="section-number-2">1</span> Install evernote-mode</h2>
<div class="outline-text-2" id="text-1">
</div><div id="outline-container-sec-1-1" class="outline-3">
<h3 id="sec-1-1"><span class="section-number-3">1.1</span> Install libgdbm</h3>
<div class="outline-text-3" id="text-1-1">
<p>
The pre-installed ruby on Mac OS X does not contain GDBM bindings. Re-install ruby and GDBM by
</p>
<div class="org-src-container">

<pre class="src src-sh">rvm uninstall 1.9.3
brew install gdbm
rvm install 1.9.3
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-1-2" class="outline-3">
<h3 id="sec-1-2"><span class="section-number-3">1.2</span> Install evernote-mode ruby script</h3>
<div class="outline-text-3" id="text-1-2">
<div class="org-src-container">

<pre class="src src-sh"><span style="color: #728a05;">cd</span> evernote-mode/ruby
ruby setup.rb
cp evernote-mode.el &lt;your emacs lisp load path&gt;
</pre>
</div>
</div>
</div>
<div id="outline-container-sec-1-3" class="outline-3">
<h3 id="sec-1-3"><span class="section-number-3">1.3</span> Setup your evernote-mode</h3>
<div class="outline-text-3" id="text-1-3">
<p>
first you need to change the way your evernote login
<a href="https://github.com/kechako/emacs-evernote-mode-developer-token">https://github.com/kechako/emacs-evernote-mode-developer-token</a>
</p>

<p>
using developer token will be much more awesomer
</p>
<div class="org-src-container">

<pre class="src src-diff"><span style="color: #52676f;">diff --git a/evernote-mode.el b/evernote-mode.el</span>
<span style="color: #52676f;">index 313a1dc..e434841 100644</span>
<span style="color: #e9e2cb; background-color: #042028;">--- </span><span style="color: #e9e2cb; background-color: #042028;">a/evernote-mode.el</span>
<span style="color: #e9e2cb; background-color: #042028;">+++ </span><span style="color: #e9e2cb; background-color: #042028;">b/evernote-mode.el</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -162,6 +162,9 @@</span>
<span style="color: #52676f;">   "*Non-nil means that password cache is enabled.</span>
<span style="color: #52676f;"> It is recommended to encrypt the file with EasyPG.")</span>

<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">(defvar evernote-developer-token nil</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">  "*An developer token of your evernote")</span>
<span style="color: #728a05; font-weight: bold;">+</span>
<span style="color: #52676f;"> ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;</span>
<span style="color: #52676f;"> ;; Interface for evernote-browsing-mode.</span>
<span style="color: #52676f;"> ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -550,6 +553,8 @@</span><span style="color: #e9e2cb; background-color: #042028;"> It is recommended to encrypt the file with EasyPG.")</span>
<span style="color: #52676f;">   "Login"</span>
<span style="color: #52676f;">   (interactive)</span>
<span style="color: #52676f;">   (if (called-interactively-p) (enh-clear-onmem-cache))</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">  (if evernote-developer-token</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      (enh-command-login-token evernote-developer-token) </span>
<span style="color: #52676f;">     (unwind-protect</span>
<span style="color: #52676f;">         (let* ((cache (enh-password-cache-load))</span>
<span style="color: #52676f;">                (usernames (mapcar #'car cache))</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -567,7 +572,7 @@</span><span style="color: #e9e2cb; background-color: #042028;"> It is recommended to encrypt the file with EasyPG.")</span>
<span style="color: #52676f;">               (enh-command-login username passwd)</span>
<span style="color: #52676f;">               (setq evernote-username username)</span>
<span style="color: #52676f;">               (enh-password-cache-save (enutil-aset username cache passwd)))))</span>
<span style="color: #c60007; font-weight: bold;">-</span><span style="color: #c60007; font-weight: bold;">    (enh-password-cache-close)))</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      (enh-password-cache-close))))</span>


<span style="color: #52676f;"> (defun evernote-open-note (&amp;optional ask-notebook)</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -1769,6 +1774,14 @@</span><span style="color: #e9e2cb; background-color: #042028;"> It is recommended to encrypt the file with EasyPG.")</span>
<span style="color: #52676f;">            (enutil-to-ruby-string passwd))))</span>


<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">(defun enh-command-login-token (token)</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">  "Issue login command"</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">  (enh-command-issue</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">   (format ":class =&gt; %s, :auth_token =&gt; %s"</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">           (enutil-to-ruby-string "AuthCommand")</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">           (enutil-to-ruby-string token))))</span>
<span style="color: #728a05; font-weight: bold;">+</span>
<span style="color: #728a05; font-weight: bold;">+</span>
<span style="color: #52676f;"> (defun enh-command-get-notebook-attrs ()</span>
<span style="color: #52676f;">   "Issue listnotebooks command"</span>
<span style="color: #52676f;">   (let ((reply (enh-command-issue</span>
<span style="color: #52676f;">diff --git a/ruby/bin/enclient.rb b/ruby/bin/enclient.rb</span>
<span style="color: #52676f;">index 9067bad..a13ae8a 100755</span>
<span style="color: #e9e2cb; background-color: #042028;">--- </span><span style="color: #e9e2cb; background-color: #042028;">a/ruby/bin/enclient.rb</span>
<span style="color: #e9e2cb; background-color: #042028;">+++ </span><span style="color: #e9e2cb; background-color: #042028;">b/ruby/bin/enclient.rb</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -426,13 +426,17 @@</span><span style="color: #e9e2cb; background-color: #042028;"> module EnClient</span>


<span style="color: #52676f;">   class AuthCommand &lt; Command</span>
<span style="color: #c60007; font-weight: bold;">-</span><span style="color: #c60007; font-weight: bold;">    attr_accessor :user, :passwd</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">    attr_accessor :user, :passwd, :auth_token</span>

<span style="color: #52676f;">     def exec_impl</span>
<span style="color: #c60007; font-weight: bold;">-</span><span style="color: #c60007; font-weight: bold;">      Formatter.to_ascii @user, @passwd</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      Formatter.to_ascii @user, @passwd, @auth_token</span>

<span style="color: #52676f;">       server_task do</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">        if @auth_token</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">          sm.authenticate_with_token @auth_token</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">        else</span>
<span style="color: #52676f;">           sm.authenticate @user, @passwd</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">        end</span>
<span style="color: #52676f;">         LOG.info "Auth successed: auth_token = '#{sm.auth_token}', shared_id = '#{sm.shared_id}'"</span>
<span style="color: #52676f;">         tm.put SyncTask.new(sm, dm, tm)</span>
<span style="color: #52676f;">         server_task true do # defer reply until first sync will be done.</span>
<span style="color: #e9e2cb; background-color: #042028;">@@ -1175,6 +1179,15 @@</span><span style="color: #e9e2cb; background-color: #042028;"> module EnClient</span>
<span style="color: #52676f;">       @note_store = create_note_store @shared_id</span>
<span style="color: #52676f;">     end</span>

<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">    def authenticate_with_token(token)</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      @user_store = create_user_store</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      user = @user_store.getUser token</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      @auth_token = token</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      @shared_id = user.shardId if user</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      @expiration = 60 * 60 * 24 * 365</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">      @note_store = create_note_store @shared_id</span>
<span style="color: #728a05; font-weight: bold;">+</span><span style="color: #728a05; font-weight: bold;">    end</span>
<span style="color: #728a05; font-weight: bold;">+</span>
<span style="color: #52676f;">     def refresh_authentication(current_time)</span>
<span style="color: #52676f;">       if current_time &gt; @expiration - REFRESH_LIMIT_SEC * 1000</span>
<span style="color: #52676f;">         LOG.info "refresh authentication"</span>
</pre>
</div>


<p>
get developer token from
<a href="https://www.evernote.com/api/DeveloperToken.action">https://www.evernote.com/api/DeveloperToken.action</a>
</p>

<p>
then paste it to starter-kit-evernote
</p>
<div class="org-src-container">

<pre class="src src-lisp">(<span style="color: #728a05;">require</span> '<span style="color: #259185;">evernote-mode</span>)
(setq evernote-developer-token <span style="color: #259185;">"paste your token here"</span>)
(setq evernote-enml-formatter-command '(<span style="color: #259185;">"w3m"</span> <span style="color: #259185;">"-dump"</span> <span style="color: #259185;">"-I"</span> <span style="color: #259185;">"UTF8"</span> <span style="color: #259185;">"-O"</span> <span style="color: #259185;">"UTF8"</span>)) <span style="color: #52676f; font-style: italic;">; </span><span style="color: #52676f; font-style: italic;">optional</span>
(global-set-key <span style="color: #259185;">"\C-cn"</span> 'evernote-write-note)
(<span style="color: #728a05;">provide</span> '<span style="color: #259185;">starter-kit-evernote</span>)
</pre>
</div>
</div>
</div>

<div id="outline-container-sec-1-4" class="outline-3">
<h3 id="sec-1-4"><span class="section-number-3">1.4</span> write note with orgmode</h3>
<div class="outline-text-3" id="text-1-4">
<ul class="org-ul">
<li>随便开个orgmode
</li>
<li>用orgmode写完笔记以后 <code>C-c C-e t U</code> // 输出为utf-8文本
</li>
<li><code>C-c n</code> // evernote buffer
</li>
<li>will create in evernote like this
</li>
</ul>

<div class="figure">
<p><img src="https://www.evernote.com/shard/s23/sh/e13e664c-2d1e-4a8b-9597-c062759b6732/19a4bd09e50725674caa5b17d7ee7655/deep/0/Screenshot%206/25/13%205:18%20PM.png" alt="13%205:18%20PM.png" />
</p>
</div>

<blockquote>
<p>
take note this way is awesome isn't it
</p>
</blockquote>
</div>
</div>
</div>
