!function(){var a,b,c;!function(d){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m=b&&b.split("/"),n=s.map,o=n&&n["*"]||{};if(a&&"."===a.charAt(0))if(b){for(m=m.slice(0,m.length-1),a=m.concat(a.split("/")),j=0;j<a.length;j+=1)if(l=a[j],"."===l)a.splice(j,1),j-=1;else if(".."===l){if(1===j&&(".."===a[2]||".."===a[0]))break;j>0&&(a.splice(j-1,2),j-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((m||o)&&n){for(c=a.split("/"),j=c.length;j>0;j-=1){if(d=c.slice(0,j).join("/"),m)for(k=m.length;k>0;k-=1)if(e=n[m.slice(0,k).join("/")],e&&(e=e[d])){f=e,g=j;break}if(f)break;!h&&o&&o[d]&&(h=o[d],i=j)}!f&&h&&(f=h,g=i),f&&(c.splice(0,g,f),a=c.join("/"))}return a}function g(a,b){return function(){return n.apply(d,v.call(arguments,0).concat([a,b]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var b=r[a];delete r[a],t[a]=!0,m.apply(d,b)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,b,c,f){var h,k,l,m,n,s,u=[],v=typeof c;if(f=f||a,"undefined"===v||"function"===v){for(b=!b.length&&c.length?["require","exports","module"]:b,n=0;n<b.length;n+=1)if(m=o(b[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=c?c.apply(q[a],u):void 0,a&&(h&&h.exports!==d&&h.exports!==q[a]?q[a]=h.exports:l===d&&s||(q[a]=l))}else a&&(q[a]=c)},a=b=n=function(a,b,c,e,f){return"string"==typeof a?p[a]?p[a](b):j(o(a,b).f):(a.splice||(s=a,b.splice?(a=b,b=c,c=null):a=d),b=b||function(){},"function"==typeof c&&(c=e,e=f),e?m(d,a,b,c):setTimeout(function(){m(d,a,b,c)},4),n)},n.config=function(a){return s=a,s.deps&&n(s.deps,s.callback),n},a._defined=q,c=function(a,b,c){b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},c.amd={jQuery:!0}}(),c("almond",["almond/almond"],function(a){return a}),c("almond/almond",function(){}),function(a){function b(){return f.promiscuous.deferred()}var d="__postMessageChannel_callback",e="__postMessageChannel_ready",f={};!function(){!function a(){function b(){var f=function(i,j,k){if(i!==a){var l=b();return f.c.push({d:l,resolve:i,reject:j}),l.promise}var m;if(null!==k&&(typeof k===g||typeof k===e))try{m=k.then}catch(n){j=!1,k=n}if(typeof m===e){i=f;try{m.call(this,function(b){m&&(m=null,i(a,!0,b))},function(b){m&&(m=null,i(a,!1,b))})}catch(n){m&&(m=null,i(a,!1,n))}}else{for(var o=j?"resolve":"reject",p=f.c,q=0,r=p.length;r>q;q++){var s=p[q],t=s.d,u=s[o];typeof u!==e?t[o](k):d(u,k,t)}f=c(h,k,j)}},h={then:function(a,b){return f(a,b)}};return f.c=[],{promise:h,resolve:function(b){f.c&&f(a,!0,b)},reject:function(b){f.c&&f(a,!1,b)}}}function c(a,c,f){return function(g,h){var i,j=f?g:h;return typeof j!==e?a:(d(j,c,i=b()),i.promise)}}function d(a,b,c){setTimeout(function(){try{var d=a(b),f=null!==d&&(typeof d===g||typeof d===e)&&d.then;typeof f!==e?c.resolve(d):d===c.promise?c.reject(new TypeError):f.call(d,c.resolve,c.reject)}catch(h){c.reject(h)}})}var e="function",g="object";f.promiscuous={resolve:function(a){var b={};return b.then=c(b,a,!0),b},reject:function(a){var b={};return b.then=c(b,a,!1),b},deferred:b}}()}();var g=function(a){function c(a,b,c,d){var e={scope:m,dfdId:c,data:b,method:a,state:d};o.postMessage(JSON.stringify(e),n)}function f(a){var e={};try{e=JSON.parse(a.data)}catch(f){e=a.data||{}}if(a.origin===n&&e.scope===m&&e.method)if(p[e.method])p[e.method](e);else if(void 0!==e.dfdId&&k[e.method]){var g,h=function(a,b){c(d,a,e.dfdId,b)},i={async:function(){return g=b()}},j=k[e.method].call(i,e.data);g?g.promise.then(h,function(a){h(a,"reject")}):h(j===i?void 0:j)}}if(!(this instanceof g))return new g(a);var h,i=a||{},j=[],k=i.methods||{},l=!1;if(!(i.id&&i.origin&&i.target))throw new Error("id, origin, and target options are required");var m=i.id,n=i.origin,o=i.target,p={};p[e]=function(a){h.resolve(a.data)},p[d]=function(a){a&&j[a.dfdId]&&(j[a.dfdId][a.state||"resolve"](a.data),delete j[a.dfdId])},(window.addEventListener||window.attachEvent)(window.addEventListener?"message":"onmessage",f),this.reset=function(){h=b(),l=!1,h.promise.then(function(){l=!0,c(e)})},this.addMethod=function(a,b){k[a]=b},this.removeMethod=function(a){delete k[a]},this.destroy=function(){(window.removeEventListener||window.detachEvent)(window.removeEventListener?"message":"onmessage",f),l=!1,this.run=function(){var a=b();return a.reject(),a.promise}},this.ready=function(){return l},this.run=function(a,d,e){var f=j.length,g=b();return j.push(g),h.promise.then(function(){c(a,d,f)}),e&&window.setTimeout(g.reject,e),g.promise},this.reset(),window.self!==window.top&&o.postMessage(JSON.stringify({scope:m,method:e}),"*")};g.utils=f,"function"==typeof c&&c.amd?c("lib/postmessagechannel",[],function(){return g}):a.postMessageChannel=g}(this),c("lib/utils",["lib/postmessagechannel"],function(a){function b(a,b,c){if(null!=a)if(d&&a.forEach===d)a.forEach(b,c);else if(a.length===+a.length){for(var f=0,g=a.length;g>f;f++)if(b.call(c,a[f],f,a)===e)return}else for(var h in a)if(Object.prototype.hasOwnProperty.call(a,h)&&b.call(c,a[h],h,a)===e)return}var c=a.utils.promiscuous.deferred,d=Array.prototype.forEach,e={};return{checksum:function(a,b,c,d,e){for(b=c=d=0;e=a.charCodeAt(d++);c=(c+b)%255)b=(b+e)%255;return c<<8|b},isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},each:b,noop:function(){},Deferred:c,when:function(a){var d=c(),e=a.length;return 0===e?d.resolve():b(a,function(a){a.then(function(){e--,0===e&&d.resolve()},function(){d.reject()})}),d.promise},canonicalUrl:function(){var a=(document.querySelectorAll('link[rel="canonical"]')[0]||{}).href;return a=a||(document.querySelectorAll('meta[property="og:url"]')[0]||{}).content,a||window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},anchorize:function(a){var b=document.createElement("a");return b.href=a,b},importantStyles:function(a,c){var d=[];return b(a||{},function(a,b){d.push(b+": "+a+(c?";":" !important;"))}),d.join(" ")}}}),c("dom",[],function(){var a={};return a.find=function(){var a=Array.prototype.slice.call(arguments),b=a.pop(),c=a.pop()||document;return c.querySelectorAll?c.querySelectorAll(b):[]},a.attr=function(){var a=Array.prototype.slice.call(arguments),b=a.shift(),c=a.shift();return a.length?(b.setAttribute(c,a.shift()),void 0):b.getAttribute(c)},a.html=function(a,b){return a.innerHTML=b,a},a}),c("lib/jsonp",["lib/utils"],function(a){function b(a){var b=document.getElementsByTagName("script")[0],c=document.createElement("script");c.src=a,b.parentNode.insertBefore(c,b)}function c(a){return a?a+(a.indexOf("?")>0?"&":"?"):null}var d={};return function(e){if(d[e])return d[e].promise;var f=d[e]=a.Deferred(),g="callback"+a.checksum(e);return massrel.ui._internal[g]=function(a){f.resolve(a)},b(c(e)+"callback=massrel.ui._internal."+g),f.promise}}),c("channels",{}),c("modal",["require","dom","lib/utils","lib/postmessagechannel"],function(a){function b(a,b){if(b.url){c();var l="{}";try{l=JSON.stringify(b.data||{})}catch(m){}var n=g.anchorize(b.url),o="mr-modal/"+a.slug,p=["parent="+encodeURIComponent(window.location.host),"space-id="+encodeURIComponent(o),"frame="+encodeURIComponent(a.frame),"data="+encodeURIComponent(l)],q=encodeURI(b.url)+(n.hash?n.hash+"&cfg=":"#cfg=")+encodeURIComponent(p.join("&"));d=document.createElement("iframe"),g.each({src:'javascript:""',style:k,allowtransparency:!0,scrolling:"auto","class":"mr-modal-iframe"},function(a,b){f.attr(d,b,a)}),document.body.appendChild(d),d.focus(),j=f.attr(document.body,"style")||" ",f.attr(document.body,"style",j+"; overflow: hidden !important;"),e=h({target:d.contentWindow,origin:i+"//"+n.host.replace(/(:80|:443)$/,""),id:o,methods:{"modal:close":c}}),d.src=q}}function c(){d&&(f.attr(document.body,"style",j),d.parentNode&&d.parentNode.removeChild(d),e.destroy(),d=e=null)}var d,e,f=a("dom"),g=a("lib/utils"),h=a("lib/postmessagechannel"),i="https:"===window.location.protocol?"https:":"http:",j=" ",k=g.importantStyles({border:0,padding:0,margin:0,position:"fixed","z-index":9999999999,top:0,left:0,width:"100%",height:"100%",overflow:"hidden",background:"transparent","float":"none",outline:0});return{open:b,close:c}}),c("lib/microevent",["require"],function(){var a=function(){};return a.prototype={bind:function(a,b){this._events=this._events||{},this._events[a]=this._events[a]||[],this._events[a].push(b)},unbind:function(a,b){this._events=this._events||{},a in this._events!=!1&&this._events[a].splice(this._events[a].indexOf(b),1)},trigger:function(a){if(this._events=this._events||{},a in this._events!=!1)for(var b=0;b<this._events[a].length;b++)this._events[a][b].apply(this,Array.prototype.slice.call(arguments,1))}},a}),c("events",["require","channels","lib/utils","lib/microevent"],function(a){var b=a("channels"),c=a("lib/utils"),d=a("lib/microevent"),e=new d;return{on:function(){return e.bind.apply(e,arguments)},off:function(){return e.unbind.apply(e,arguments)},trigger:function(a,d,f){var g=(a||"").toLowerCase();return"self"!==g&&g?(b[g]&&b[g].run("spaceEvent",{eventName:d,data:f}),"*"===g&&c.each(b,function(a){a.run("spaceEvent",{eventName:d,data:f})}),void 0):e.trigger(d,f)}}}),c("loader",["require","lib/utils","lib/postmessagechannel","dom","lib/jsonp","channels","modal","events"],function(a){function b(a){var b=a||{},c=b.identifier||b.id,d=b.slug||b.id,j=b.el,q=b.attributes||{};if(q["class"]=(q["class"]||"")+" mr-iframe",c&&j){var r="mr-iframe-"+d.replace(/\W/g,"_")+"__"+(new Date).getTime(),s=["curl="+encodeURIComponent(g.canonicalUrl()),"parent="+encodeURIComponent(window.location.host)];g.each(j.attributes,function(a){var b=a.name;if(/^data-/.test(b)){var c=a.value||"";if(/"/.test(c))throw new Error("element data attribute must not contain quotes.");n.test(b)?q[b.replace(n,"").toLowerCase()]=c:s.push(b.replace(/^data-/,"")+"="+encodeURIComponent(c))}});var t=q.src;q.src="javascript:''",q.id=q.name=r,q.frameBorder=0,k[d]&&k[d].reset();var u=[];for(var v in q)u.push(v+'="'+q[v]+'"');var w=i.attr(j,"style")||"";-1===w.indexOf(p.initDiv)&&i.attr(j,"style",w+p.initDiv),i.html(j,"<iframe "+u.join(" ")+"></iframe>");var x=i.find(j,".mr-iframe")[0],y=g.anchorize(t);k[d]=k[d]||h({target:x.contentWindow,origin:o+"//"+y.host.replace(/(:80|:443)$/,""),id:d,methods:{"modal:open":function(a){l.open({slug:d,frame:r},a||{})},"modal:close":function(){l.close()},event:function(a){a=a||{},a.name&&m.trigger("self",a.name,a.data||{})},resize:function(a){if(!a.auto_size){var b=i.find("#"+r)[0];if(b)try{var c=b.parentNode,d=i.attr(c,"style")||"",e=p.style(a);"boolean"==typeof a.scrolling&&i.attr(b,"scrolling",a.scrolling?"auto":"no"),e!==d&&i.attr(c,"style",e)}catch(f){}}},analyticsEvent:e,analyticsEventAll:f}}),x.src=t+"#cfg="+encodeURIComponent(s.join("&"))}}function c(a){var c={};g.each(i.find(a,".mr-space"),function(a){var d=a.getAttribute("data-space-id").toLowerCase(),e=d.split("/"),f=e.pop(),g=e.pop()+".massrel.io";return c[d]?(window.console&&window.console.error&&console.error("Error: a specific space may only exist on a page once. "+d+" found multiple times."),void 0):(c[d]=!0,b({slug:d,identifier:f,el:a,attributes:{src:o+"//"+g+"/"+f+"/index.html",style:p.initFrame,allowtransparency:"true"}}),void 0)})}function d(a){var c=[];return g.each(i.find(a,".mr-product"),function(a){var d=a.getAttribute("data-product");if(d){var e=j(o+"//tweetriver.com/v/"+d+".json");e.then(function(c){b({id:d,el:a,attributes:{src:"https:"===o?c.viz_url_https:c.viz_url,style:p.initFrame}})}),c.push(e)}}),c}function e(){}function f(a){m.trigger("self","analytics",a||{})}var g=a("lib/utils"),h=a("lib/postmessagechannel"),i=a("dom"),j=a("lib/jsonp"),k=a("channels"),l=a("modal"),m=a("events"),n=/^data-iframe-/,o="https:"===window.location.protocol?"https:":"http:",p={style:function(a){var b={margin:"0 auto",padding:0,border:0,overflow:"hidden",height:"100%",width:"100%"};return a=a||{},"number"==typeof a.height&&(b.height=a.height+"px",b["min-height"]=0),"number"==typeof a.width&&(b.width=a.width+"px"),g.importantStyles(b)},initFrame:g.importantStyles({display:"block",width:"100%",height:"100%","min-height":"inherit","float":"none",margin:0,padding:0,background:"transparent",overflow:"hidden",border:0,outline:0}),initDiv:"; "+g.importantStyles({margin:"0 auto",padding:0,border:0,overflow:"hidden"})};return function(a){var b=a||{},e=b.done||g.noop;c(b.el);var f=d(b.el);g.when(f).then(e)}}),c("main",["lib/utils","loader","events","modal"],function(a,b,c){function d(a,b){for(var c=b.split(".");a&&c.length;)a=a[c.shift()];return a}if(window.massrel=window.massrel||{},!massrel.ui||a.isArray(massrel.ui)){var e=massrel.ui||[],f=massrel.ui={init:b,load:b,events:c,push:function(b){if(!a.isArray(b))throw new Error("Invalid massrel API call");var c=d(f,b.shift());c.apply(f,b)},_internal:{}};a.each(e,f.push)}}),b("main")}();