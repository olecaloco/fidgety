(function(e){function n(n){for(var r,a,i=n[0],l=n[1],u=n[2],d=0,s=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);h&&h(n);while(s.length)s.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,i=1;i<t.length;i++){var l=t[i];0!==c[l]&&(r=!1)}r&&(o.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},c={app:0},o=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var h=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"9cdc":function(e,n,t){"use strict";t("c701")},c701:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c={class:"app"},o={class:"player-wrap"};function a(e,n,t,a,i,l){var u=Object(r["f"])("Navbar"),h=Object(r["f"])("Player"),d=Object(r["f"])("Chat");return Object(r["e"])(),Object(r["b"])("main",c,[Object(r["c"])(u,{channel:e.channel,"onUpdate:channel":n[1]||(n[1]=function(n){return e.channel=n}),onToggleChat:e.toggleChat,onHandleSubmit:e.handleSubmit},null,8,["channel","onToggleChat","onHandleSubmit"]),Object(r["c"])("div",o,[Object(r["c"])(h,{playerSource:e.playerSource},null,8,["playerSource"]),Object(r["c"])(d,{chatHidden:e.chatHidden,chatSource:e.chatSource},null,8,["chatHidden","chatSource"])])])}t("99af");var i=Object(r["c"])("button",null,"Search",-1);function l(e,n,t,c,o,a){return Object(r["e"])(),Object(r["b"])("nav",null,[Object(r["c"])("form",{onSubmit:n[2]||(n[2]=Object(r["g"])((function(n){return e.$emit("handle-submit")}),["prevent"]))},[Object(r["c"])("input",{name:"channel",type:"text",value:e.channel,onInput:n[1]||(n[1]=function(n){return e.$emit("update:channel",n.target.value)}),placeholder:"🔍 Search by channel name"},null,40,["value"]),i],32),Object(r["c"])("button",{class:"clear",onClick:n[3]||(n[3]=function(n){return e.$emit("toggle-chat")})},"Hide Chat")])}var u=Object(r["d"])({name:"Navbar",props:{channel:String},emits:["toggle-chat","update:channel","handle-submit"]});u.render=l;var h=u;function d(e,n,t,c,o,a){return Object(r["e"])(),Object(r["b"])("iframe",{id:"player",src:e.playerSource,width:"400",height:"300",scrolling:"no",frameborder:"0"},null,8,["src"])}var s=Object(r["d"])({name:"Player",props:{playerSource:String}});s.render=d;var p=s;function f(e,n,t,c,o,a){return Object(r["e"])(),Object(r["b"])("iframe",{class:{hidden:e.chatHidden},src:e.chatSource,frameborder:"0"},null,10,["src"])}var b=Object(r["d"])({name:"Chat",props:{chatHidden:Boolean,chatSource:String}});b.render=f;var g=b,v="olecaloco.github.io",O=Object(r["d"])({name:"Fidgety",components:{Navbar:h,Player:p,Chat:g},data:function(){return{channel:"",chatHidden:!1,playerSource:"",chatSource:""}},methods:{toggleChat:function(){this.chatHidden=!this.chatHidden,this.chatHidden&&(this.chatSource="")},handleSubmit:function(){this.channel&&(this.playerSource="https://player.twitch.tv/?channel=".concat(this.channel,"&parent=").concat(v),this.chatSource="https://www.twitch.tv/embed/".concat(this.channel,"/chat?parent=").concat(v,"&darkpopout"))}}});t("9cdc");O.render=a;var j=O,m=t("9483");Object(m["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(r["a"])(j).mount("#app")}});
//# sourceMappingURL=app.b6f070bd.js.map