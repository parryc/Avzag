(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0385":function(e,t,n){"use strict";var r=n("57d9"),a=n.n(r);a.a},"05d3":function(e,t,n){},"0dcd":function(e,t,n){"use strict";var r=n("682f"),a=n.n(r);a.a},"0f42":function(e,t,n){},"24e9":function(e,t,n){"use strict";var r=n("73b5"),a=n.n(r);a.a},"3dc5":function(e,t,n){"use strict";var r=n("0f42"),a=n.n(r);a.a},4384:function(e,t,n){"use strict";var r=n("d117"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.index?n("div",{attrs:{id:"app"}},[n("div",{staticClass:"section",attrs:{id:"header"}},[n("div",{attrs:{id:"banner"}},[n("div",{attrs:{id:"flag"}},[n("img",{attrs:{src:e.langRoot+"flag.png",alt:"Banner"}})]),n("div",{attrs:{id:"titles"}},[n("h1",[e._v(e._s(e.index.title))]),n("h3",[e._v(e._s(e.index.tags.reduce((function(e,t){return e+" › "+t}))))])])]),n("div",{attrs:{id:"menu"}},e._l(["Map","Phonology","Converter"],(function(t,r){return n("button",{key:r,staticClass:"nav",class:{selected:e.menu==r},on:{click:function(t){e.menu=r}}},[e._v(e._s(t))])})),0)]),n("Map",{directives:[{name:"show",rawName:"v-show",value:0==e.menu,expression:"menu==0"}],attrs:{langRoot:e.langRoot},on:{language:function(t){e.language=t}}}),n("Phonology",{directives:[{name:"show",rawName:"v-show",value:1==e.menu,expression:"menu==1"}],attrs:{langRoot:e.langRoot}}),n("Converter",{directives:[{name:"show",rawName:"v-show",value:2==e.menu,expression:"menu==2"}],attrs:{langRoot:e.langRoot}})],1):e._e()},o=[],s=(n("99af"),n("caad"),n("d3b7"),n("2532"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",{staticClass:"section"},[n("div",{attrs:{id:"languages"}},e._l(e.catalogue,(function(t,r){return n("a",{key:r,on:{click:function(n){return e.$emit("language",t)}}},[e._v(e._s(t))])})),0),e._m(0),e._m(1)]):e._e()},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{attrs:{id:"soon"}},[n("i",[e._v("A proper map is coming soon...")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("hr"),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag"}},[e._v("source")])])}],u={name:"Map",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"index.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.index=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{index:void 0,catalogue:void 0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.langRoot+"../catalogue.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,r.sort((function(e,t){return e.localeCompare(t)})),e.catalogue=r;case 8:case"end":return t.stop()}}),t)})))()}},l=u,p=(n("0385"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,"720bb3c6",null),d=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes?n("div",{staticClass:"section"},[n("div",{attrs:{id:"phonemes"}},[n("QueryList",{directives:[{name:"show",rawName:"v-show",value:e.lects.length>0,expression:"lects.length>0"}],staticClass:"space",attrs:{title:"Lects",tags:e.lects,big:!0,locked:!0},on:{query:function(t){e.lectQuery=t}}}),n("QueryList",{attrs:{title:"Vowels",tags:e.vowelFeatures},on:{query:function(t){e.vowelQuery=t}}}),n("PhoneticTable",{staticClass:"space",attrs:{phonemes:e.vowels,featureQuery:e.vowelQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){e.selected=t}}}),n("QueryList",{attrs:{title:"Consonants",tags:e.consonantFeatures},on:{query:function(t){e.consonantQuery=t}}}),n("PhoneticTable",{staticClass:"space",attrs:{phonemes:e.consonants,featureQuery:e.consonantQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){e.selected=t}}})],1),n("PhonemeDetails",{attrs:{langRoot:e.langRoot,phoneme:e.phonemes[e.selected]}})],1):e._e()},v=[],m=(n("4de4"),n("5db7"),n("4160"),n("d81d"),n("73d9"),n("b0c0"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"list"}},[n("div",{attrs:{id:"header"}},[n("h3",[e._v(e._s(e.title))]),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.locked,expression:"!locked"}],on:{click:function(t){e.visible=!e.visible}}},[n("span",[e._v("?")]),e._v("query ")]),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.empty,expression:"!empty"}],on:{click:e.resetAll}},[n("span",[e._v("!")]),e._v("reset ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{id:"body"}},e._l(e.query,(function(t,r){return n("a",{key:r,class:{big:e.big},on:{click:function(t){return e.updateQuery(r)}}},[n("span",-1===t?[e._v("-")]:1===t?[e._v("+")]:[e._v("·")]),e._v(" "+e._s(r)+" ")])})),0)])},b=[],y=(n("4fad"),n("b64b"),n("3835")),_={name:"QueryList",props:["title","tags","big","locked"],data:function(){return{visible:!1,empty:!0,query:{}}},watch:{tags:{handler:function(e){var t=this;this.query={},Object(m["a"])(e).sort((function(e,t){return e.localeCompare(t)})).forEach((function(e){return t.query[e]=0})),this.resetAll()},immediate:!0}},created:function(){this.visible=this.locked},methods:{updateQuery:function(e){this.query[e]=(this.query[e]+2)%3-1,this.applyQuery()},resetAll:function(){var e=this;Object.keys(this.query).forEach((function(t){return e.query[t]=0})),this.applyQuery()},applyQuery:function(){for(var e={},t=0,n=Object.entries(this.query);t<n.length;t++){var r=Object(y["a"])(n[t],2),a=r[0],o=r[1];0!==o&&(e[a]=1===o)}this.empty=0===Object.keys(e).length,this.$emit("query",e),this.$forceUpdate()}}},w=_,x=(n("24e9"),Object(p["a"])(w,g,b,!1,null,"cbffeebc",null)),j=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"table"}},e._l(e.phonemes,(function(t,r){return n("button",{key:r,staticClass:"phoneme",class:{faded:!e.fitting[r],full:e.graphemes[r]},on:{click:function(n){return e.$emit("phoneme",t.i)}}},[n("span",{staticClass:"str"},[n("b",[e._v(e._s(e.graphemes[r]))])]),n("span",{staticClass:"ipa"},[e._v(e._s(e.graphemes[r]?"["+t.ipa+"]":t.ipa))])])})),0)},O=[],R=(n("7db0"),{name:"PhoneticTable",props:["lectQuery","featureQuery","phonemes"],methods:{pass:function(e,t){for(var n=0,r=Object.entries(t);n<r.length;n++){var a=Object(y["a"])(r[n],2),o=a[0],s=a[1];if(s!==e.includes(o))return!1}return!0}},computed:{fitting:function(){var e=this;return this.phonemes.map((function(t){return e.pass(t.lects.map((function(e){return e.name})),e.lectQuery)&&e.pass(t.features,e.featureQuery)}))},singleLect:function(){for(var e=[],t=0,n=Object.entries(this.lectQuery);t<n.length;t++){var r=Object(y["a"])(n[t],2),a=r[0],o=r[1];o&&e.push(a)}return 1===e.length?e[0]:void 0},graphemes:function(){var e=this;return this.phonemes.map((function(t){var n;return null===(n=t.lects.find((function(t){return t.name===e.singleLect})))||void 0===n?void 0:n.grapheme}))}}}),C=R,Q=(n("eeb4"),Object(p["a"])(C,k,O,!1,null,"487e57c7",null)),P=Q.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("div",{attrs:{id:"header"}},[n("h2",[e._v("["+e._s(e.phoneme.ipa)+"]")])]),e.features?n("p",{staticClass:"note",attrs:{id:"features"}},[e._v(e._s(e.features))]):e._e()]),n("audio",{ref:"player"}),e.phoneme.lects?e._l(e.phoneme.lects,(function(t,r){return n("div",{key:r,staticClass:"card"},[n("p",{staticClass:"lect"},[e._v(" "+e._s(t.name)+" — "),n("b",[e._v(e._s(t.grapheme))])]),t.samples&&t.samples.length>0?n("div",{staticClass:"list",style:{height:25*Math.min(3,t.samples.length)+"px"}},e._l(t.samples,(function(r,a){return n("button",{key:a,domProps:{innerHTML:e._s(e.highlight(r,t.grapheme))},on:{click:function(n){return e.play(t,a)}}})})),0):e._e(),t.note?n("p",{staticClass:"note"},[e._v(e._s(t.note))]):e._e()])})):e._e()],2)},A=[],T=(n("13d5"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),{name:"PhonemeDetails",props:["langRoot","phoneme"],computed:{features:function(){var e;return null===(e=this.phoneme["features"])||void 0===e?void 0:e.reduce((function(e,t){return"".concat(e," ").concat(t)}))}},methods:{highlight:function(e,t){return e.replace(new RegExp(t,"g"),"<b>".concat(t,"</b>"))},play:function(e,t){var n=this.$refs.player;n.src="".concat(this.langRoot).concat(e.name,"/audio/").concat(e.samples[t],".m4a"),n.play()}}}),$=T,M=(n("6f96"),Object(p["a"])($,E,A,!1,null,"4075bc83",null)),q=M.exports,S={name:"Phonology",props:["langRoot"],data:function(){return{phonemes:void 0,lectQuery:{},vowelQuery:{},consonantQuery:{},selected:0}},watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"phonology.json");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,r.sort((function(e,t){return e.ipa.localeCompare(t.ipa)})),r.forEach((function(e,t){return e.i=t})),r.forEach((function(e){return e.lects.sort((function(e,t){return e.name.localeCompare(t.name)}))})),this.phonemes=r,this.selected=0;case 11:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},components:{PhoneticTable:P,PhonemeDetails:q,QueryList:j},computed:{lects:function(){return this.collectTags(this.phonemes.flatMap((function(e){return e.lects.map((function(e){return e.name}))})))},vowels:function(){return this.categorize("vowel")},vowelFeatures:function(){return this.collectTags(this.vowels.flatMap((function(e){return e.features})),["vowel"])},consonants:function(){return this.categorize("consonant")},consonantFeatures:function(){return this.collectTags(this.consonants.flatMap((function(e){return e.features})),["consonant"])}},methods:{categorize:function(e){return this.phonemes.filter((function(t){return t.features.includes(e)}))},collectTags:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new Set;return e.filter((function(e){return!t.includes(e)})).forEach((function(e){return n.add(e)})),Object(m["a"])(n)}}},N=S,F=(n("5ec4"),Object(p["a"])(N,h,v,!1,null,"b66a3bb0",null)),L=F.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),n("textarea",{ref:"resTxt",attrs:{readonly:""},domProps:{value:e.result}})]),n("div",{attrs:{id:"options"}},[n("button",{on:{click:function(t){return e.$refs.file.click()}}},[e._v("Upload .txt file")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:e.copy}},[e._v("Copy to clipboard")])]),n("MappingTable",{attrs:{mapping:e.mapping}}),n("input",{ref:"file",attrs:{hidden:"",type:"file"},on:{change:e.handleFiles}})],1):e._e()},U=[],D=(n("fb6a"),n("498a"),n("b85c")),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mapping"}},e._l(e.mapping,(function(t,r){return n("p",{key:r},e._l(t,(function(t,r){return n("span",{key:r},[e._v(e._s(t.replace(" ","_")))])})),0)})),0)},J=[],H={name:"MappingTable",props:["mapping"]},I=H,V=(n("0dcd"),Object(p["a"])(I,B,J,!1,null,"df652874",null)),G=V.exports,K={name:"Converter",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"converter.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return this.converters=e.sent,e.next=8,fetch(t+"sample.txt");case 8:return r=e.sent,e.next=11,r.text();case 11:this.source=e.sent;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{converters:null,selected:0,source:""}},components:{MappingTable:G},computed:{mapping:function(){return Object.entries(this.converters[this.selected].mapping)},result:function(){return this.convert(this.source)}},methods:{uppercase:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},replace:function(e,t,n){return e.replace(new RegExp(t,"g"),n)},convert:function(e){e=" "+this.replace(e,"\n","\n ").trim();var t,n=Object(D["a"])(this.mapping);try{for(n.s();!(t=n.n()).done;){var r=Object(y["a"])(t.value,2),a=r[0],o=r[1];e=this.replace(e,a,o),e=this.replace(e,this.uppercase(a),this.uppercase(o))}}catch(s){n.e(s)}finally{n.f()}return this.replace(e,"\n ","\n").trim()},copy:function(){this.$refs.resTxt.select(),document.execCommand("copy")},handleFiles:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},W=K,X=(n("4384"),Object(p["a"])(W,z,U,!1,null,"a28e5b02",null)),Y=X.exports,Z={name:"App",data:function(){return{language:void 0,catalogue:void 0,index:void 0,menu:0}},components:{Map:d,Phonology:L,Converter:Y},watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(t+"index.json");case 4:return n=e.sent,e.next=7,n.json();case 7:this.index=e.sent;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0},language:function(e){localStorage.language=e},menu:function(e){localStorage.menu=e}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.root+"/catalogue.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,r.sort((function(e,t){return e.localeCompare(t)})),e.catalogue=r,e.language=e.catalogue.includes(localStorage.language)?localStorage.language:e.catalogue[0],localStorage.menu&&(e.menu=localStorage.menu);case 10:case"end":return t.stop()}}),t)})))()},computed:{langRoot:function(){return this.language?"".concat(this.root).concat(this.language,"/"):void 0},root:function(){return"".concat("/Aevzag/","languages/")}}},ee=Z,te=(n("3dc5"),Object(p["a"])(ee,a,o,!1,null,"dd9c4166",null)),ne=te.exports,re=n("9483");Object(re["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ne)}}).$mount("#app")},"57d9":function(e,t,n){},"5ec4":function(e,t,n){"use strict";var r=n("af92"),a=n.n(r);a.a},"5f52":function(e,t,n){},"682f":function(e,t,n){},"6f96":function(e,t,n){"use strict";var r=n("05d3"),a=n.n(r);a.a},"73b5":function(e,t,n){},af92:function(e,t,n){},d117:function(e,t,n){},eeb4:function(e,t,n){"use strict";var r=n("5f52"),a=n.n(r);a.a}});
//# sourceMappingURL=app.edb9224f.js.map