(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/article.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!-- <ul class=\"pager\"> -->\n<!--   <li class=\"previous disabled\"><a href=\"#\">← Older</a></li> -->\n<!--   <li class=\"next\"><a href=\"#\">Newer →</a></li> -->\n<!-- </ul> -->\n<h2 class=\"page-header\">";
output += runtime.suppressValue(env.getFilter("title").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"description", env.autoesc)), env.autoesc);
output += "</h2>\n";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"div", env.autoesc), env.autoesc);
output += "\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/crawl.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\">\n    <title>";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"blog_title", env.autoesc), env.autoesc);
output += "</title>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\t\t<meta name=\"username\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "github_name"), env.autoesc);
output += "\">\n\t\t<meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"description", env.autoesc), env.autoesc);
output += "\">\n    <link rel=\"stylesheet\" href=\"/bower_components/bootswatch/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"theme", env.autoesc), env.autoesc);
output += "/bootstrap.min.css\" media=\"screen\">\n\n\t\t<link rel=\"stylesheet\" href=\"https://gist.github.com/assets/embed-91ddfaf352483e316b5398263e92b3e0.css\" media=\"screen\">\n\t\t<link rel=\"stylesheet\" href=\"/stylesheets/blogist.css\" media=\"screen\">\n\t\t<script>\n\t\t\tif(window.location.pathname!=\"/\"){\n\twindow.location = window.location.origin + \"#\" +window.location.pathname.replace(\".html\",\"\");\n\t\t\t}\n\t\t\t</script>\n    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->\n    <!--[if lt IE 9]>\n\t\t\t\t<script src=\"/bower_components/bootswatch/bower_components/html5shiv/dist/html5shiv.js\"></script>\n\t\t\t\t<script src=\"/bower_components/bootswatch/bower_components/respond/dest/respond.min.js\"></script>\n\t\t\t\t<![endif]-->\n\t\t\n  </head>\n  <body>\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"sidebar col-md-2\">\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-md-8\">\n\n\t\t\t\t\t<div class=\"article\">\n\t\t\t\t\t\t";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"div", env.autoesc), env.autoesc);
output += "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"sidebar col-md-2\">\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t</div>\n\n\t\t<footer>\n      <div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-2\">\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-md-8\">\n \t\t\t\t\t\t<p>Copyright © ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"author_name", env.autoesc), env.autoesc);
output += "</p>\n\t\t\t\t\t\t<p> Powered by <a rel=\"nofollow\" href=\"http://blogist.github.io\">Blogist</a> <span class=\"glyphicon glyphicon-heart\"></span> <a href=\"http://github.com/jcouyang/kokaku\">Kokaku</a> and <a href=\"https://gist.github.com\">Gist</a> </p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n        <div class=\"col-md-2\">\n\t\t\t\t</div>\n\n\n      </div>\n\n    </footer>\n\t</body>\n</html>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/gistlist.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<section>\n\t";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"results", env.autoesc);
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("gistinpage", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_3.length - 1);
output += "\n\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index", env.autoesc) == runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"page", env.autoesc)) {
output += "\n\t";
frame = frame.push();
var t_7 = t_4;
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("gist", t_8);
output += "\n\t\t<article>\n\t\t\t<h2><a href=\"#/gist/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_8),"description_span", env.autoesc)), env.autoesc);
output += "\n\t\t\t\t</a>\n\t\t\t</h2>\n\t\t\t<div>";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_8),"meta", env.autoesc)), env.autoesc);
output += "</div>\n\t\t\t";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.memberLookup((t_8),"article", env.autoesc)), env.autoesc);
output += "\n\t\t</article>\n\t\t<ul class=\"pager\">\n      <li class=\"previous\"><a href=\"#/gist/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"id", env.autoesc), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_8),"description", env.autoesc), env.autoesc);
output += "\">Continue reading →</a></li>\n    </ul>\n\t\t<hr/>\n\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t<ul class=\"pager\">\n      <li class=\"previous ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"last", env.autoesc)?"disabled":""), env.autoesc);
output += "\"><a href=\"#/page/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index", env.autoesc) + 1, env.autoesc);
output += "\">← Older</a></li>\n      <li class=\"next ";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first", env.autoesc)?"disabled":""), env.autoesc);
output += "\"><a href=\"#/page/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index", env.autoesc) - 1, env.autoesc);
output += "\">Newer →</a></li>\n    </ul>\n\t\t";
;
}
output += "\n\t\t";
;
}
}
frame = frame.pop();
output += "\n</section>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/header.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"container\">\n\t<div class=\"navbar-header\">\n\t\t<button data-target=\".navbar-responsive-collapse\" data-toggle=\"collapse\" class=\"navbar-toggle\" type=\"button\">\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t</button>\n\t\t<a href=\"#/\" class=\"navbar-brand\">Blogist</a>\n\t</div>\n\t<div class=\"navbar-collapse collapse navbar-responsive-collapse\">\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li class=\"active\"><a href=\"#\">Archives</a></li>\n\t\t</ul>\n\t\t<form class=\"navbar-form navbar-left\">\n\t\t\t<input type=\"text\" placeholder=\"Search\" class=\"form-control col-lg-8\">\n\t\t</form>\n\t\t\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"login", env.autoesc)) {
output += "\n\t\t\t<li>\n\t\t\t\t<a class=\"name\" href=\"#\">\n\t\t\t\t\t<img width=\"20\" height=\"20\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"avatar_url", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"name", env.autoesc), env.autoesc);
output += "\"> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"name", env.autoesc), env.autoesc);
output += "\n\t\t\t\t</a>\n\t\t\t</li>\n\t\t\t";
;
}
else {
output += "\n\t\t\t<li><a href=\"#\">Login</a></li>\n\t\t\t";
;
}
output += "\n\t\t</ul>\n\t</div>\n</div>\n\n\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/nav.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<figure id=\"logo_top\" class=\"\">\n\t<a href=\"#/\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"blog_title", env.autoesc), env.autoesc);
output += "</a>\n</figure>\n<figure id=\"hamburger\">\n\t<a href=\"#menu\" id=\"hamburger_button\">Menu</a>\n</figure>\n<ul id=\"dropdown\" class=\"onblog\">\n\t<li class=\"dropdown_message\">\n\t\t<a href=\"#/\"><span class=\"logoize\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"blog_title", env.autoesc), env.autoesc);
output += "</span> ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"description", env.autoesc), env.autoesc);
output += "</a>\n\t</li>\n\t<li><a href=\"https://github.com/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"github_name", env.autoesc), env.autoesc);
output += "\">@";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"github_name", env.autoesc), env.autoesc);
output += "</a></li>\n\t<li><a href=\"http://pipes.yahoo.com/oyanglulu/blogist?_render=rss&domain=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"homepage", env.autoesc), env.autoesc);
output += "&githubID=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"github_name", env.autoesc), env.autoesc);
output += "\">rss feed</a></li>\n\t";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"about_gist", env.autoesc)) {
output += "\n\t<li><a href=\"#/gist/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"about_gist", env.autoesc), env.autoesc);
output += "\">about</a></li>\n\t";
;
}
output += "\n</ul>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["src/templates/title.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<a href=\"#/\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"blog_title", env.autoesc), env.autoesc);
output += "</a>\n<a href=\"http://pipes.yahoo.com/oyanglulu/blogist?_render=rss&domain=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"homepage", env.autoesc), env.autoesc);
output += "&githubID=";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"github_name", env.autoesc), env.autoesc);
output += "\">\n  <span class=\"mega-octicon octicon-bookmark\" style=\"cursor:pointer;min-width: 32px; color:orange\"></span></a>\n<p class=\"lead\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "data")),"description", env.autoesc), env.autoesc);
output += "</p>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
