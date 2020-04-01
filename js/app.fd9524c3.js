(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08c4":function(e,t,n){},"36ac":function(e,t,n){"use strict";var r=n("ceff"),a=n.n(r);a.a},"438e":function(e,t,n){"use strict";var r=n("ad02"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{attrs:{langRoot:e.langRoot,menu:e.menu},on:{menu:function(t){e.menu=t},language:function(t){e.language=t}}}),n("Info",{directives:[{name:"show",rawName:"v-show",value:0==e.menu,expression:"menu==0"}],attrs:{langRoot:e.langRoot}}),n("Phonology",{directives:[{name:"show",rawName:"v-show",value:1==e.menu,expression:"menu==1"}],attrs:{langRoot:e.langRoot}}),n("Converter",{directives:[{name:"show",rawName:"v-show",value:2==e.menu,expression:"menu==2"}],attrs:{langRoot:e.langRoot}})],1)},o=[],s=(n("99af"),n("d3b7"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[e.index?n("div",{attrs:{id:"header"}},[n("div",{attrs:{id:"banner"}},[n("div",{attrs:{id:"flag"}},[n("img",{attrs:{src:e.langRoot+"flag.png",alt:"Banner"}})]),n("div",{attrs:{id:"titles"}},[n("h1",[e._v(e._s(e.index.title))]),n("h3",[e._v(e._s(e.index.tags.reduce((function(e,t){return e+" › "+t}))))])])]),n("div",{attrs:{id:"menu"}},[e._l(["Info","Alphabet","Converter"],(function(t,r){return n("button",{key:r,staticClass:"nav",class:{selected:e.menu==r},on:{click:function(t){return e.$emit("menu",r)}}},[e._v(e._s(t))])})),n("button",{on:{click:function(t){e.showCatalogue=!e.showCatalogue}}},[e._v("🗺")])],2)]):e._e(),e.catalogue?n("div",{directives:[{name:"show",rawName:"v-show",value:e.showCatalogue,expression:"showCatalogue"}],attrs:{id:"catalogue"}},e._l(e.catalogue,(function(t,r){return n("a",{key:r,on:{click:function(n){return e.$emit("language",t)}}},[e._v(e._s(t))])})),0):e._e()])},c=[],u={name:"Header",props:["langRoot","menu"],data:function(){return{showCatalogue:!1,index:void 0,catalogue:void 0}},watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"index.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.index=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.langRoot+"../catalogue.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,r.sort((function(e,t){return e.localeCompare(t)})),e.catalogue=r;case 8:case"end":return t.stop()}}),t)})))()}},l=u,p=(n("f7cd"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,"1e67f7be",null),d=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.index?n("div",{staticClass:"section"},[e._v(e._s(e.index.description))]):e._e()},m=[],g={name:"Info",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"index.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.index=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{index:void 0}}},v=g,w=Object(p["a"])(v,h,m,!1,null,null,null),b=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes?n("div",{staticClass:"section"},[n("div",{attrs:{id:"phonemes"}},e._l(["Vowel","Consonant"],(function(t){return n("div",{key:t,staticClass:"table"},[n("h3",[e._v(e._s(t)+"s")]),e._l(e.sortBy(t),(function(t){return n("PhonemeItem",{key:t.i,attrs:{phoneme:t},nativeOn:{click:function(n){e.selected=t.i}}})}))],2)})),0),n("PhonemeDetails",{attrs:{langRoot:e.langRoot,phoneme:e.phonemes[e.selected]}})],1):e._e()},x=[],y=(n("4de4"),n("4160"),n("caad"),n("2532"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"phoneme"},[n("span",{staticClass:"letter"},[e._v(e._s(e.phoneme.str))]),n("br"),n("span",{staticClass:"ipa"},[e._v(e._s(e.phoneme.ipa))])])}),j=[],R={name:"PhonemeItem",props:["phoneme","highlighted"]},k=R,C=(n("9117"),Object(p["a"])(k,y,j,!1,null,"e69e2e5e",null)),O=C.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v(e._s(e.phoneme.str)+" • "+e._s(e.phoneme.ipa))]),n("p",{attrs:{id:"tags"}},[e._v(e._s(e.phoneme.tags.reduce((function(e,t){return e+" "+t}))))]),n("div",e._l(e.phoneme.samples,(function(t,r){return n("button",{key:r,staticClass:"sample",domProps:{innerHTML:e._s(e.highlight(t))},on:{click:function(t){return e.play(r)}}})})),0)])},A=[],E=(n("4d63"),n("ac1f"),n("25f0"),n("5319"),{name:"PhonemeDetails",props:["langRoot","phoneme"],data:function(){return{player:new Audio}},methods:{highlight:function(e){var t=this.phoneme.str;return e.replace(new RegExp(t,"g"),"<b>".concat(t,"</b>"))},play:function(e){this.player.src="".concat(this.langRoot,"audio/").concat(this.phoneme.samples[e],".m4a"),this.player.play()}},created:function(){this.player.play()}}),S=E,$=(n("36ac"),Object(p["a"])(S,P,A,!1,null,"664bdda6",null)),M=$.exports,I={name:"Phonology",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"phonemes.json");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,r.sort((function(e,t){return e.str-t.str})),r.forEach((function(e,t){return e.i=t})),this.phonemes=r;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{phonemes:void 0,selected:0}},components:{PhonemeItem:O,PhonemeDetails:M},methods:{sortBy:function(e){if(this.phonemes)return e=e.toLowerCase(),this.phonemes.filter((function(t){return t.tags.includes(e)}))}}},N=I,T=(n("6ea2"),Object(p["a"])(N,_,x,!1,null,"9cf66320",null)),F=T.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),n("textarea",{ref:"resTxt",attrs:{readonly:""},domProps:{value:e.result}})]),n("div",{attrs:{id:"options"}},[n("button",{on:{click:function(t){return e.$refs.file.click()}}},[e._v("Upload .txt file")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:function(t){e.showMapping=!e.showMapping}}},[e._v("Show mappings")]),n("button",{on:{click:e.copy}},[e._v("Copy to clipboard")])]),e.showMapping?n("div",{attrs:{id:"mapping"}},e._l(e.mapping,(function(e,t){return n("MappingItem",{key:t,attrs:{mapping:e}})})),1):e._e(),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:e.handleFiles}})]):e._e()},H=[],z=(n("fb6a"),n("b0c0"),n("4fad"),n("498a"),n("3835")),D=n("b85c"),U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",e._l(e.mapping,(function(t,r){return n("span",{key:r},[e._v(e._s(t.replace(" ","_")))])})),0)},J=[],L={name:"MappingItem",props:["mapping"]},q=L,K=(n("8b01"),Object(p["a"])(q,U,J,!1,null,"8ace3fca",null)),V=K.exports,G={name:"Converter",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"converters.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return this.converters=e.sent,e.next=8,fetch(t+"sample.txt");case 8:return r=e.sent,e.next=11,r.text();case 11:this.source=e.sent;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{converters:null,selected:0,source:"",showMapping:!1}},components:{MappingItem:V},computed:{mapping:function(){return Object.entries(this.converters[this.selected].mapping)},result:function(){return this.convert(this.source)}},methods:{uppercase:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},replace:function(e,t,n){return e.replace(new RegExp(t,"g"),n)},convert:function(e){e=" "+this.replace(e,"\n","\n ").trim();var t,n=Object(D["a"])(this.mapping);try{for(n.s();!(t=n.n()).done;){var r=Object(z["a"])(t.value,2),a=r[0],o=r[1];e=this.replace(e,a,o),e=this.replace(e,this.uppercase(a),this.uppercase(o))}}catch(s){n.e(s)}finally{n.f()}return this.replace(e,"\n ","\n").trim()},copy:function(){this.$refs.resTxt.select(),document.execCommand("copy")},handleFiles:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},Q=G,W=(n("438e"),Object(p["a"])(Q,B,H,!1,null,"04b1617f",null)),X=W.exports,Y={name:"App",data:function(){return{language:"Kaitag",menu:0}},watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"index.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.index=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0},language:function(e){localStorage.language=e},menu:function(e){localStorage.menu=e}},components:{Header:d,Info:b,Phonology:F,Converter:X},created:function(){localStorage.language&&(this.language=localStorage.language),localStorage.menu&&(this.menu=localStorage.menu)},computed:{langRoot:function(){return"".concat("/Aevzag/","languages/").concat(this.language,"/")}}},Z=Y,ee=Object(p["a"])(Z,a,o,!1,null,null,null),te=ee.exports,ne=n("9483");Object(ne["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(te)}}).$mount("#app")},"585b":function(e,t,n){},"66d5":function(e,t,n){},"6ea2":function(e,t,n){"use strict";var r=n("585b"),a=n.n(r);a.a},8400:function(e,t,n){},"8b01":function(e,t,n){"use strict";var r=n("08c4"),a=n.n(r);a.a},9117:function(e,t,n){"use strict";var r=n("8400"),a=n.n(r);a.a},ad02:function(e,t,n){},ceff:function(e,t,n){},f7cd:function(e,t,n){"use strict";var r=n("66d5"),a=n.n(r);a.a}});
//# sourceMappingURL=app.fd9524c3.js.map