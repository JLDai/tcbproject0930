!function(t){function e(t){var e;return function(){return e||(e=t.apply(this,arguments))}}var n={};n.xhr=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject){if("string"!=typeof arguments.callee.activeXString)for(var t=["MSXML2.XMLHttp.6.0","MSXML2.XMLHttp.3.0","MSXML2.XMLHttp"],e=0,n=0,e=t.length;e>n;n++)try{new ActiveXObject(t[n]),arguments.callee.activeXString=t[n];break}catch(r){}return new ActiveXObject(arguments.callee.activeXString)}throw new Error("你整的是啥浏览器啊？俺们也不支持你这玩应")}(),n.addEvent=function(){return window.addEventListener?function(t,e,n){t.addEventListener(e,n,!1)}:window.attachEvent?function(t,e,n){t.attachEvent("on"+e,n)}:void 0}();e(function(){return new createXHR});n.ce=function(t){return document.createElement(t)},t.lw=n}(window);