var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function m(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t){return function(e){return e.preventDefault(),t.call(this,e)}}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function w(t,e){t.value=null==e?"":e}let b;function $(t){b=t}function _(){const t=function(){if(!b)throw new Error("Function called outside component initialization");return b}();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}function x(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const E=[],k=[],S=[],C=[],L=Promise.resolve();let A=!1;function O(t){S.push(t)}let R=!1;const P=new Set;function T(){if(!R){R=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];$(e),U(e.$$)}for($(null),E.length=0;k.length;)k.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];P.has(e)||(P.add(e),e())}S.length=0}while(E.length);for(;C.length;)C.pop()();A=!1,R=!1,P.clear()}}function U(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const j=new Set;let B;function N(){B={r:0,c:[],p:B}}function H(){B.r||r(B.c),B=B.p}function I(t,e){t&&t.i&&(j.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(j.has(t))return;j.add(t),B.c.push((()=>{j.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function K(t){t&&t.c()}function F(t,n,i,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=t.$$;a&&a.m(n,i),s||O((()=>{const n=c.map(e).filter(o);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(O)}function J(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(E.push(t),A||(A=!0,L.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,o,i,s,a,c,l,h=[-1]){const p=b;$(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(p?p.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:o.target||p.$$.root};l&&l(f.root);let d=!1;if(f.ctx=i?i(e,o.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),d&&D(e,t)),n})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(u)}else f.fragment&&f.fragment.c();o.intro&&I(e.$$.fragment),F(e,o.target,o.anchor,o.customElement),T()}$(p)}class G{$destroy(){J(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var V,q,Y=(V=function(t,e){t.exports=function(){var t=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},e=y,n=a,r=c,o=l,i=v,s=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function a(t){for(var e,n=[],r=0,o=0,i="";null!=(e=s.exec(t));){var a=e[0],c=e[1],l=e.index;if(i+=t.slice(o,l),o=l+a.length,c)i+=c[1];else{i&&(n.push(i),i="");var u=e[2],p=e[3],f=e[4],d=e[5],m=e[6],g=e[7],v="+"===m||"*"===m,y="?"===m||"*"===m,w=u||"/",b=f||d||(g?".*":"[^"+w+"]+?");n.push({name:p||r++,prefix:u||"",delimiter:w,optional:y,repeat:v,pattern:h(b)})}}return o<t.length&&(i+=t.substr(o)),i&&n.push(i),n}function c(t){return l(a(t))}function l(e){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^"+e[r].pattern+"$"));return function(r){for(var o="",i=r||{},s=0;s<e.length;s++){var a=e[s];if("string"!=typeof a){var c,l=i[a.name];if(null==l){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to be defined')}if(t(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but received "'+l+'"');if(0===l.length){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var u=0;u<l.length;u++){if(c=encodeURIComponent(l[u]),!n[s].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');o+=(0===u?a.prefix:a.delimiter)+c}}else{if(c=encodeURIComponent(l),!n[s].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but received "'+c+'"');o+=a.prefix+c}}else o+=a}return o}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function h(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function p(t,e){return t.keys=e,t}function f(t){return t.sensitive?"":"i"}function d(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return p(t,e)}function m(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(y(t[o],e,n).source);return p(new RegExp("(?:"+r.join("|")+")",f(n)),e)}function g(t,e,n){for(var r=a(t),o=v(r,n),i=0;i<r.length;i++)"string"!=typeof r[i]&&e.push(r[i]);return p(o,e)}function v(t,e){for(var n=(e=e||{}).strict,r=!1!==e.end,o="",i=t[t.length-1],s="string"==typeof i&&/\/$/.test(i),a=0;a<t.length;a++){var c=t[a];if("string"==typeof c)o+=u(c);else{var l=u(c.prefix),h=c.pattern;c.repeat&&(h+="(?:"+l+h+")*"),o+=h=c.optional?l?"(?:"+l+"("+h+"))?":"("+h+")?":l+"("+h+")"}}return n||(o=(s?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=r?"$":n&&s?"":"(?=\\/|$)",new RegExp("^"+o,f(e))}function y(e,n,r){return t(n=n||[])?r||(r={}):(r=n,n=[]),e instanceof RegExp?d(e,n):t(e)?m(e,n,r):g(e,n,r)}e.parse=n,e.compile=r,e.tokensToFunction=o,e.tokensToRegExp=i;var w,b="undefined"!=typeof document,$="undefined"!=typeof window,_="undefined"!=typeof history,x="undefined"!=typeof process,E=b&&document.ontouchstart?"touchstart":"click",k=$&&!(!window.history.location&&!window.location);function S(){this.callbacks=[],this.exits=[],this.current="",this.len=0,this._decodeURLComponents=!0,this._base="",this._strict=!1,this._running=!1,this._hashbang=!1,this.clickHandler=this.clickHandler.bind(this),this._onpopstate=this._onpopstate.bind(this)}function C(){var t=new S;function e(){return L.apply(t,arguments)}return e.callbacks=t.callbacks,e.exits=t.exits,e.base=t.base.bind(t),e.strict=t.strict.bind(t),e.start=t.start.bind(t),e.stop=t.stop.bind(t),e.show=t.show.bind(t),e.back=t.back.bind(t),e.redirect=t.redirect.bind(t),e.replace=t.replace.bind(t),e.dispatch=t.dispatch.bind(t),e.exit=t.exit.bind(t),e.configure=t.configure.bind(t),e.sameOrigin=t.sameOrigin.bind(t),e.clickHandler=t.clickHandler.bind(t),e.create=C,Object.defineProperty(e,"len",{get:function(){return t.len},set:function(e){t.len=e}}),Object.defineProperty(e,"current",{get:function(){return t.current},set:function(e){t.current=e}}),e.Context=R,e.Route=P,e}function L(t,e){if("function"==typeof t)return L.call(this,"*",t);if("function"==typeof e)for(var n=new P(t,null,this),r=1;r<arguments.length;++r)this.callbacks.push(n.middleware(arguments[r]));else"string"==typeof t?this["string"==typeof e?"redirect":"show"](t,e):this.start(t)}function A(t){if(!t.handled){var e=this,n=e._window;(e._hashbang?k&&this._getBase()+n.location.hash.replace("#!",""):k&&n.location.pathname+n.location.search)!==t.canonicalPath&&(e.stop(),t.handled=!1,k&&(n.location.href=t.canonicalPath))}}function O(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function R(t,e,n){var r=this.page=n||L,o=r._window,i=r._hashbang,s=r._getBase();"/"===t[0]&&0!==t.indexOf(s)&&(t=s+(i?"#!":"")+t);var a=t.indexOf("?");this.canonicalPath=t;var c=new RegExp("^"+O(s));if(this.path=t.replace(c,"")||"/",i&&(this.path=this.path.replace("#!","")||"/"),this.title=b&&o.document.title,this.state=e||{},this.state.path=t,this.querystring=~a?r._decodeURLEncodedURIComponent(t.slice(a+1)):"",this.pathname=r._decodeURLEncodedURIComponent(~a?t.slice(0,a):t),this.params={},this.hash="",!i){if(!~this.path.indexOf("#"))return;var l=this.path.split("#");this.path=this.pathname=l[0],this.hash=r._decodeURLEncodedURIComponent(l[1])||"",this.querystring=this.querystring.split("#")[0]}}function P(t,n,r){var o=this.page=r||T,i=n||{};i.strict=i.strict||o._strict,this.path="*"===t?"(.*)":t,this.method="GET",this.regexp=e(this.path,this.keys=[],i)}S.prototype.configure=function(t){var e=t||{};this._window=e.window||$&&window,this._decodeURLComponents=!1!==e.decodeURLComponents,this._popstate=!1!==e.popstate&&$,this._click=!1!==e.click&&b,this._hashbang=!!e.hashbang;var n=this._window;this._popstate?n.addEventListener("popstate",this._onpopstate,!1):$&&n.removeEventListener("popstate",this._onpopstate,!1),this._click?n.document.addEventListener(E,this.clickHandler,!1):b&&n.document.removeEventListener(E,this.clickHandler,!1),this._hashbang&&$&&!_?n.addEventListener("hashchange",this._onpopstate,!1):$&&n.removeEventListener("hashchange",this._onpopstate,!1)},S.prototype.base=function(t){if(0===arguments.length)return this._base;this._base=t},S.prototype._getBase=function(){var t=this._base;if(t)return t;var e=$&&this._window&&this._window.location;return $&&this._hashbang&&e&&"file:"===e.protocol&&(t=e.pathname),t},S.prototype.strict=function(t){if(0===arguments.length)return this._strict;this._strict=t},S.prototype.start=function(t){var e=t||{};if(this.configure(e),!1!==e.dispatch){var n;if(this._running=!0,k){var r=this._window.location;n=this._hashbang&&~r.hash.indexOf("#!")?r.hash.substr(2)+r.search:this._hashbang?r.search+r.hash:r.pathname+r.search+r.hash}this.replace(n,null,!0,e.dispatch)}},S.prototype.stop=function(){if(this._running){this.current="",this.len=0,this._running=!1;var t=this._window;this._click&&t.document.removeEventListener(E,this.clickHandler,!1),$&&t.removeEventListener("popstate",this._onpopstate,!1),$&&t.removeEventListener("hashchange",this._onpopstate,!1)}},S.prototype.show=function(t,e,n,r){var o=new R(t,e,this),i=this.prevContext;return this.prevContext=o,this.current=o.path,!1!==n&&this.dispatch(o,i),!1!==o.handled&&!1!==r&&o.pushState(),o},S.prototype.back=function(t,e){var n=this;if(this.len>0){var r=this._window;_&&r.history.back(),this.len--}else t?setTimeout((function(){n.show(t,e)})):setTimeout((function(){n.show(n._getBase(),e)}))},S.prototype.redirect=function(t,e){var n=this;"string"==typeof t&&"string"==typeof e&&L.call(this,t,(function(t){setTimeout((function(){n.replace(e)}),0)})),"string"==typeof t&&void 0===e&&setTimeout((function(){n.replace(t)}),0)},S.prototype.replace=function(t,e,n,r){var o=new R(t,e,this),i=this.prevContext;return this.prevContext=o,this.current=o.path,o.init=n,o.save(),!1!==r&&this.dispatch(o,i),o},S.prototype.dispatch=function(t,e){var n=0,r=0,o=this;function i(){var t=o.exits[r++];if(!t)return s();t(e,i)}function s(){var e=o.callbacks[n++];if(t.path===o.current)return e?void e(t,s):A.call(o,t);t.handled=!1}e?i():s()},S.prototype.exit=function(t,e){if("function"==typeof t)return this.exit("*",t);for(var n=new P(t,null,this),r=1;r<arguments.length;++r)this.exits.push(n.middleware(arguments[r]))},S.prototype.clickHandler=function(t){if(1===this._which(t)&&!(t.metaKey||t.ctrlKey||t.shiftKey||t.defaultPrevented)){var e=t.target,n=t.path||(t.composedPath?t.composedPath():null);if(n)for(var r=0;r<n.length;r++)if(n[r].nodeName&&"A"===n[r].nodeName.toUpperCase()&&n[r].href){e=n[r];break}for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;if(e&&"A"===e.nodeName.toUpperCase()){var o="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name;if(!e.hasAttribute("download")&&"external"!==e.getAttribute("rel")){var i=e.getAttribute("href");if((this._hashbang||!this._samePath(e)||!e.hash&&"#"!==i)&&!(i&&i.indexOf("mailto:")>-1)&&!(o?e.target.baseVal:e.target)&&(o||this.sameOrigin(e.href))){var s=o?e.href.baseVal:e.pathname+e.search+(e.hash||"");s="/"!==s[0]?"/"+s:s,x&&s.match(/^\/[a-zA-Z]:\//)&&(s=s.replace(/^\/[a-zA-Z]:\//,"/"));var a=s,c=this._getBase();0===s.indexOf(c)&&(s=s.substr(c.length)),this._hashbang&&(s=s.replace("#!","")),(!c||a!==s||k&&"file:"===this._window.location.protocol)&&(t.preventDefault(),this.show(a))}}}}},S.prototype._onpopstate=(w=!1,$?(b&&"complete"===document.readyState?w=!0:window.addEventListener("load",(function(){setTimeout((function(){w=!0}),0)})),function(t){if(w){var e=this;if(t.state){var n=t.state.path;e.replace(n,t.state)}else if(k){var r=e._window.location;e.show(r.pathname+r.search+r.hash,void 0,void 0,!1)}}}):function(){}),S.prototype._which=function(t){return null==(t=t||$&&this._window.event).which?t.button:t.which},S.prototype._toURL=function(t){var e=this._window;if("function"==typeof URL&&k)return new URL(t,e.location.toString());if(b){var n=e.document.createElement("a");return n.href=t,n}},S.prototype.sameOrigin=function(t){if(!t||!k)return!1;var e=this._toURL(t),n=this._window.location;return n.protocol===e.protocol&&n.hostname===e.hostname&&(n.port===e.port||""===n.port&&(80==e.port||443==e.port))},S.prototype._samePath=function(t){if(!k)return!1;var e=this._window.location;return t.pathname===e.pathname&&t.search===e.search},S.prototype._decodeURLEncodedURIComponent=function(t){return"string"!=typeof t?t:this._decodeURLComponents?decodeURIComponent(t.replace(/\+/g," ")):t},R.prototype.pushState=function(){var t=this.page,e=t._window,n=t._hashbang;t.len++,_&&e.history.pushState(this.state,this.title,n&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},R.prototype.save=function(){var t=this.page;_&&t._window.history.replaceState(this.state,this.title,t._hashbang&&"/"!==this.path?"#!"+this.path:this.canonicalPath)},P.prototype.middleware=function(t){var e=this;return function(n,r){if(e.match(n.path,n.params))return n.routePath=e.path,t(n,r);r()}},P.prototype.match=function(t,e){var n=this.keys,r=t.indexOf("?"),o=~r?t.slice(0,r):t,i=this.regexp.exec(decodeURIComponent(o));if(!i)return!1;delete e[0];for(var s=1,a=i.length;s<a;++s){var c=n[s-1],l=this.page._decodeURLEncodedURIComponent(i[s]);void 0===l&&hasOwnProperty.call(e,c.name)||(e[c.name]=l)}return!0};var T=C(),U=T,j=T;return U.default=j,U}()},V(q={exports:{}},q.exports),q.exports);function W(t,e,n){const r=t.slice();return r[4]=e[n],r}function Z(t){let e,n,r,o=t[4]+"";return{c(){e=p("option"),n=f(o),e.__value=r=t[4],e.value=e.__value},m(t,r){l(t,e,r),c(e,n)},p(t,i){2&i&&o!==(o=t[4]+"")&&y(n,o),2&i&&r!==(r=t[4])&&(e.__value=r,e.value=e.__value)},d(t){t&&u(e)}}}function Q(e){let n,r,o,i,s,a=e[1],c=[];for(let t=0;t<a.length;t+=1)c[t]=Z(W(e,a,t));return{c(){n=p("input"),r=d(),o=p("datalist");for(let t=0;t<c.length;t+=1)c[t].c();v(n,"list","hints"),v(n,"placeholder","Password hint"),v(n,"class","svelte-up24vr"),v(o,"id","hints")},m(t,a){l(t,n,a),w(n,e[0]),l(t,r,a),l(t,o,a);for(let t=0;t<c.length;t+=1)c[t].m(o,null);i||(s=m(n,"input",e[2]),i=!0)},p(t,[e]){if(1&e&&n.value!==t[0]&&w(n,t[0]),2&e){let n;for(a=t[1],n=0;n<a.length;n+=1){const r=W(t,a,n);c[n]?c[n].p(r,e):(c[n]=Z(r),c[n].c(),c[n].m(o,null))}for(;n<c.length;n+=1)c[n].d(1);c.length=a.length}},i:t,o:t,d(t){t&&u(n),t&&u(r),t&&u(o),h(c,t),i=!1,s()}}}function X(t,e,n){let{value:r=""}=e,o=["Your first name","Your last name","Your Slack handle","Your Github handle"];const i=localStorage.getItem("hints");if(i){const t=JSON.parse(i);o=[...t,...o.filter((e=>-1===t.indexOf(e)))]}return t.$$set=t=>{"value"in t&&n(0,r=t.value)},[r,o,function(){r=this.value,n(0,r)}]}class tt extends G{constructor(t){super(),z(this,t,X,Q,i,{value:0})}}class et{async find(t){t=t||{};return(await fetch("/api/BinService.Find",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})).json().then((t=>{if(t.error)throw new Error(`BinService.Find: ${t.error}`);return t}),(t=>{throw console.error(t),new Error("BinService.Find: unexpected error")}))}async paste(t){t=t||{};return(await fetch("/api/BinService.Paste",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})).json().then((t=>{if(t.error)throw new Error(`BinService.Paste: ${t.error}`);return t}),(t=>{throw console.error(t),new Error("BinService.Paste: unexpected error")}))}async submitPassword(t){t=t||{};return(await fetch("/api/BinService.SubmitPassword",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})).json().then((t=>{if(t.error)throw new Error(`BinService.SubmitPassword: ${t.error}`);return t}),(t=>{throw console.error(t),new Error("BinService.SubmitPassword: unexpected error")}))}}function nt(t){let e,n,o,i,s,a,h,g,y,b,$,_,x,E,S,L,A,O,R,P,T,U,j;function B(e){t[13](e)}let N={};return void 0!==t[0]&&(N.value=t[0]),i=new tt({props:N}),k.push((()=>function(t,e,n){const r=t.$$.props[e];void 0!==r&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}(i,"value",B))),{c(){e=p("div"),n=p("label"),o=f("Hint decryption password\n                "),K(i.$$.fragment),a=d(),h=p("label"),g=f("Decryption password\n                "),y=p("input"),b=d(),$=p("label"),_=f("Content\n            "),x=p("textarea"),E=d(),S=p("fieldset"),L=p("label"),A=p("input"),O=f("\n                Burn on read"),R=d(),P=p("button"),P.textContent="Encrypt",v(n,"for","decryption-password-hint"),v(y,"type","text"),v(y,"id","decryption-password"),v(y,"name","decryption-password"),v(y,"placeholder","Password"),v(y,"class","svelte-1knwg61"),v(h,"for","decryption-password"),v(e,"class","grid"),v(x,"id","content"),v(x,"name","content"),v(x,"placeholder","Content to encrypt"),v(x,"rows","6"),v(x,"class","svelte-1knwg61"),v($,"for","content"),v(A,"type","checkbox"),v(A,"id","burn"),v(A,"name","burn"),v(A,"role","switch"),v(A,"class","svelte-1knwg61"),v(L,"for","burn"),v(P,"type","button")},m(r,s){l(r,e,s),c(e,n),c(n,o),F(i,n,null),c(e,a),c(e,h),c(h,g),c(h,y),w(y,t[1]),l(r,b,s),l(r,$,s),c($,_),c($,x),w(x,t[2]),l(r,E,s),l(r,S,s),c(S,L),c(L,A),A.checked=t[5],c(L,O),l(r,R,s),l(r,P,s),t[17](P),T=!0,U||(j=[m(y,"input",t[14]),m(x,"input",t[15]),m(A,"change",t[16]),m(P,"click",t[9])],U=!0)},p(t,e){const n={};!s&&1&e&&(s=!0,n.value=t[0],function(t){C.push(t)}((()=>s=!1))),i.$set(n),2&e&&y.value!==t[1]&&w(y,t[1]),4&e&&w(x,t[2]),32&e&&(A.checked=t[5])},i(t){T||(I(i.$$.fragment,t),T=!0)},o(t){M(i.$$.fragment,t),T=!1},d(n){n&&u(e),J(i),n&&u(b),n&&u($),n&&u(E),n&&u(S),n&&u(R),n&&u(P),t[17](null),U=!1,r(j)}}}function rt(t){let e,n,o,i,s,a,h,g,b;return{c(){var r,c,l;e=p("input"),n=d(),o=p("div"),i=p("button"),s=f(t[8]),a=d(),h=p("button"),h.textContent="Create New",v(e,"type","text"),r="text-align",c="center",e.style.setProperty(r,c,l?"important":""),e.readOnly=!0,v(e,"class","svelte-1knwg61"),v(i,"class","secondary"),v(i,"type","button"),v(h,"type","button"),v(o,"class","grid")},m(r,u){l(r,e,u),t[18](e),w(e,t[4]),l(r,n,u),l(r,o,u),c(o,i),c(i,s),c(o,a),c(o,h),g||(b=[m(e,"input",t[19]),m(i,"click",t[10]),m(h,"click",t[11])],g=!0)},p(t,n){16&n&&e.value!==t[4]&&w(e,t[4]),256&n&&y(s,t[8])},d(i){i&&u(e),t[18](null),i&&u(n),i&&u(o),g=!1,r(b)}}}function ot(t){let e,n,r,o,i,s=!t[3]&&nt(t),a=t[3]&&rt(t);return{c(){e=p("form"),s&&s.c(),n=d(),a&&a.c(),v(e,"autocomplete","off")},m(u,h){l(u,e,h),s&&s.m(e,null),c(e,n),a&&a.m(e,null),r=!0,o||(i=m(e,"submit",g(t[12])),o=!0)},p(t,[r]){t[3]?s&&(N(),M(s,1,1,(()=>{s=null})),H()):s?(s.p(t,r),8&r&&I(s,1)):(s=nt(t),s.c(),I(s,1),s.m(e,n)),t[3]?a?a.p(t,r):(a=rt(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},i(t){r||(I(s),r=!0)},o(t){M(s),r=!1},d(t){t&&u(e),s&&s.d(),a&&a.d(),o=!1,i()}}}function it(t,e,n){const r=new et;let o,i,s,a,c,l,u,h="",p=!0,f="Copy Link";return[o,i,s,a,h,p,c,l,f,async function(){c.setAttribute("aria-busy","true"),async function(t,e){const n=new TextEncoder,r=window.crypto.getRandomValues(new Uint8Array(16)),o=window.crypto.getRandomValues(new Uint8Array(12)),i=await window.crypto.subtle.importKey("raw",n.encode(e),{name:"PBKDF2"},!1,["deriveBits","deriveKey"]),s=await window.crypto.subtle.deriveKey({name:"PBKDF2",salt:r,iterations:25e4,hash:"SHA-256"},i,{name:"AES-GCM",length:256},!1,["encrypt"]),a=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:o},s,n.encode(t)),c=new Uint8Array(a);let l=new Uint8Array(r.byteLength+o.byteLength+c.byteLength);return l.set(r,0),l.set(o,r.byteLength),l.set(c,r.byteLength+o.byteLength),btoa(String.fromCharCode.apply(null,l))}(s,i).then((t=>{r.paste({Hint:o,EncryptedContent:t,BurnOnRead:p}).then((t=>{n(2,s=""),n(3,a=t.id),n(4,h=`${document.location.origin}/paste/${a}`)})).catch((t=>{console.error(t)}))})).finally((()=>{c.setAttribute("aria-busy","false"),function(t){let e=localStorage.getItem("hints");if(!e)return void localStorage.setItem("hints",JSON.stringify([t]));let n=JSON.parse(e);n=[t,...n.filter((e=>e!==t))],localStorage.setItem("hints",JSON.stringify(n))}(o)}))},function(){u&&clearTimeout(u),l.setAttribute("aria-invalid","false"),l.select(),document.execCommand("copy"),n(8,f="Link Copied!"),u=setTimeout((function(){l&&(l.removeAttribute("aria-invalid"),n(8,f="Copy Link"))}),2e3)},function(){n(0,o=""),n(1,i=""),n(3,a=""),n(4,h="")},function(e){x.call(this,t,e)},function(t){o=t,n(0,o)},function(){i=this.value,n(1,i)},function(){s=this.value,n(2,s)},function(){p=this.checked,n(5,p)},function(t){k[t?"unshift":"push"]((()=>{c=t,n(6,c)}))},function(t){k[t?"unshift":"push"]((()=>{l=t,n(7,l)}))},function(){h=this.value,n(4,h)}]}class st extends G{constructor(t){super(),z(this,t,it,ot,i,{})}}function at(e){let n;return{c(){n=p("div"),n.innerHTML='<h1>404</h1> \n    <p>Looks like you are lost</p> \n    <a href="/">Home page</a>',v(n,"class","svelte-kpn7pf")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&u(n)}}}class ct extends G{constructor(t){super(),z(this,t,null,at,i,{})}}function lt(t){let e,n;return e=new ct({}),{c(){K(e.$$.fragment)},m(t,r){F(e,t,r),n=!0},i(t){n||(I(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){J(e,t)}}}function ut(t){let e,n,r,o,i=!t[2]&&ht(t),s=t[2]&&pt(t);return{c(){e=p("form"),i&&i.c(),n=d(),s&&s.c(),v(e,"autocomplete","off")},m(a,u){l(a,e,u),i&&i.m(e,null),c(e,n),s&&s.m(e,null),r||(o=m(e,"submit",g(t[4])),r=!0)},p(t,r){t[2]?i&&(i.d(1),i=null):i?i.p(t,r):(i=ht(t),i.c(),i.m(e,n)),t[2]?s?s.p(t,r):(s=pt(t),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(t){t&&u(e),i&&i.d(),s&&s.d(),r=!1,o()}}}function ht(t){let e,n,o,i,s;return{c(){e=p("input"),n=d(),o=p("button"),o.textContent="Submit",v(e,"type","text"),v(e,"id","decryption-password"),v(e,"name","decryption-password"),v(e,"placeholder",t[1]),v(e,"class","svelte-9r1n4a"),v(o,"type","button")},m(r,a){l(r,e,a),w(e,t[3]),l(r,n,a),l(r,o,a),i||(s=[m(e,"input",t[6]),m(o,"click",t[4])],i=!0)},p(t,n){2&n&&v(e,"placeholder",t[1]),8&n&&e.value!==t[3]&&w(e,t[3])},d(t){t&&u(e),t&&u(n),t&&u(o),i=!1,r(s)}}}function pt(t){let e,n,r,o,i,s,a;return{c(){e=p("label"),n=f("Content\n                "),r=p("textarea"),o=d(),i=p("a"),i.textContent="New Paste",v(r,"id","content"),v(r,"name","content"),v(r,"placeholder","Content to encrypt"),v(r,"rows","8"),r.readOnly=!0,v(r,"class","svelte-9r1n4a"),v(e,"for","content"),v(i,"href","/"),v(i,"role","button")},m(u,h){l(u,e,h),c(e,n),c(e,r),w(r,t[2]),l(u,o,h),l(u,i,h),s||(a=m(r,"input",t[7]),s=!0)},p(t,e){4&e&&w(r,t[2])},d(t){t&&u(e),t&&u(o),t&&u(i),s=!1,a()}}}function ft(t){let e,n,r,o=t[0]&&lt(),i=!t[0]&&ut(t);return{c(){o&&o.c(),e=d(),i&&i.c(),n=f("")},m(t,s){o&&o.m(t,s),l(t,e,s),i&&i.m(t,s),l(t,n,s),r=!0},p(t,[r]){t[0]?o?1&r&&I(o,1):(o=lt(),o.c(),I(o,1),o.m(e.parentNode,e)):o&&(N(),M(o,1,1,(()=>{o=null})),H()),t[0]?i&&(i.d(1),i=null):i?i.p(t,r):(i=ut(t),i.c(),i.m(n.parentNode,n))},i(t){r||(I(o),r=!0)},o(t){M(o),r=!1},d(t){o&&o.d(t),t&&u(e),i&&i.d(t),t&&u(n)}}}function dt(t,e,n){let{parameters:r}=e;const o=new et,i=_();let s,a,c=!1,l="";return o.find({id:r.id}).then((t=>{n(1,s=t.hint)})).catch((t=>{t.message.endsWith("paste not found")?n(0,c=!0):i("error",{message:t.message})})).finally((()=>{})),t.$$set=t=>{"parameters"in t&&n(5,r=t.parameters)},[c,s,a,l,function(){o.submitPassword({id:r.id,password:l}).then((t=>{n(2,a=t.content)})).catch((t=>{(t.message.endsWith("paste deleted")||t.message.endsWith("paste not found"))&&n(0,c=!0),i("error",{message:t.message})})).finally((()=>{}))},r,function(){l=this.value,n(3,l)},function(){a=this.value,n(2,a)}]}class mt extends G{constructor(t){super(),z(this,t,dt,ft,i,{parameters:5})}}const gt=[];function vt(t,e,n){const r=t.slice();return r[3]=e[n][0],r[4]=e[n][1],r}function yt(t){let e,n,r,o=t[4].content+"";return{c(){e=p("article"),n=f(o),v(e,"class",r=a(t[4].type)+" svelte-yvn9ko")},m(t,r){l(t,e,r),c(e,n)},p(t,i){1&i&&o!==(o=t[4].content+"")&&y(n,o),1&i&&r!==(r=a(t[4].type)+" svelte-yvn9ko")&&v(e,"class",r)},d(t){t&&u(e)}}}function wt(e){let n,r,o=Object.entries(e[0]),i=[];for(let t=0;t<o.length;t+=1)i[t]=yt(vt(e,o,t));return{c(){n=p("div"),r=p("div");for(let t=0;t<i.length;t+=1)i[t].c();v(r,"class","svelte-yvn9ko"),v(n,"class","svelte-yvn9ko")},m(t,e){l(t,n,e),c(n,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null)},p(t,[e]){if(1&e){let n;for(o=Object.entries(t[0]),n=0;n<o.length;n+=1){const s=vt(t,o,n);i[n]?i[n].p(s,e):(i[n]=yt(s),i[n].c(),i[n].m(r,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=o.length}},i:t,o:t,d(t){t&&u(n),h(i,t)}}}function bt(e,n,r){let o,a=function(e,n=t){let r;const o=new Set;function s(t){if(i(e,t)&&(e=t,r)){const t=!gt.length;for(const t of o)t[1](),gt.push(t,e);if(t){for(let t=0;t<gt.length;t+=2)gt[t][0](gt[t+1]);gt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return o.add(c),1===o.size&&(r=n(s)||t),i(e),()=>{o.delete(c),0===o.size&&(r(),r=null)}}}}({});return s(e,a,(t=>r(0,o=t))),[o,a,function(t){const e=new Date;var n,r;setTimeout((function(){delete o[e.toString()],a.set(o)}),2500),n=a,o[e.toString()]={type:"danger",content:t.detail.message},r=o,n.set(r)}]}class $t extends G{constructor(t){super(),z(this,t,bt,wt,i,{spawnError:2})}get spawnError(){return this.$$.ctx[2]}}function _t(t){let e,n,r,o,i,s,a,h,f,m,g,y,w;r=new $t({props:{}}),t[3](r);var b=t[0];function $(t){return{props:{parameters:t[1]}}}return b&&(m=new b($(t)),m.$on("error",t[4])),{c(){e=p("a"),e.innerHTML='<img src="/github_ribbon.svg" alt="github ribbon"/>',n=d(),K(r.$$.fragment),o=d(),i=p("div"),s=p("header"),s.innerHTML="<nav><hgroup><h2>cryptbin</h2> \n\t\t\t\t<h3>share secrets privately</h3></hgroup></nav>",a=d(),h=p("main"),f=p("div"),m&&K(m.$$.fragment),g=d(),y=p("footer"),y.innerHTML='<div style="text-align: center; padding: 1em 0;"><small style="opacity: .5;">Messages are AES encrypted in browser and stored in server&#39;s RAM. After 3 unssuccesful password inputs, message will be deleted.</small></div>',v(e,"href","https://github.com/damejeras/cryptbin"),v(e,"class","svelte-1hwmlwh"),v(s,"class","svelte-1hwmlwh"),v(h,"class","svelte-1hwmlwh"),v(i,"class","layout container svelte-1hwmlwh")},m(t,u){l(t,e,u),l(t,n,u),F(r,t,u),l(t,o,u),l(t,i,u),c(i,s),c(i,a),c(i,h),c(h,f),m&&F(m,f,null),c(i,g),c(i,y),w=!0},p(t,[e]){r.$set({});const n={};if(2&e&&(n.parameters=t[1]),b!==(b=t[0])){if(m){N();const t=m;M(t.$$.fragment,1,0,(()=>{J(t,1)})),H()}b?(m=new b($(t)),m.$on("error",t[4]),K(m.$$.fragment),I(m.$$.fragment,1),F(m,f,null)):m=null}else b&&m.$set(n)},i(t){w||(I(r.$$.fragment,t),m&&I(m.$$.fragment,t),w=!0)},o(t){M(r.$$.fragment,t),m&&M(m.$$.fragment,t),w=!1},d(s){s&&u(e),s&&u(n),t[3](null),J(r,s),s&&u(o),s&&u(i),m&&J(m)}}}function xt(t,e,n){let r,o,i;Y("/",(()=>{n(0,r=st)})),Y("/paste/:id",((t,e)=>{n(1,o=t.params),e()}),(()=>{n(0,r=mt)})),Y("*",(()=>{n(0,r=ct)})),Y.start();return[r,o,i,function(t){k[t?"unshift":"push"]((()=>{i=t,n(2,i)}))},t=>i.spawnError(t)]}return new class extends G{constructor(t){super(),z(this,t,xt,_t,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map