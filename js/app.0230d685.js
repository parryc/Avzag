(function(e){function t(t){for(var r,s,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0385":function(e,t,n){"use strict";var r=n("57d9"),a=n.n(r);a.a},"0dcd":function(e,t,n){"use strict";var r=n("682f"),a=n.n(r);a.a},"1e67":function(e,t,n){"use strict";var r=n("be83"),a=n.n(r);a.a},2098:function(e,t,n){"use strict";var r=n("7e58"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.index?n("div",{attrs:{id:"app"}},[n("div",{staticClass:"section",attrs:{id:"header"}},[n("div",{attrs:{id:"banner"}},[n("div",{attrs:{id:"flag"}},[n("img",{attrs:{src:e.langRoot+"flag.png",alt:"Banner"}})]),n("div",{attrs:{id:"titles"}},[n("h1",[e._v(e._s(e.index.title))]),n("h3",[e._v(e._s(e.index.tags.reduce((function(e,t){return e+" › "+t}))))])])]),n("div",{attrs:{id:"menu"}},e._l(["Map","Phonology","Converter"],(function(t,r){return n("button",{key:r,staticClass:"nav",class:{selected:e.menu===r},on:{click:function(t){e.menu=r}}},[e._v(e._s(t))])})),0)]),n("Map",{directives:[{name:"show",rawName:"v-show",value:0==e.menu,expression:"menu==0"}],attrs:{langRoot:e.langRoot},on:{language:function(t){e.language=t}}}),n("Phonology",{directives:[{name:"show",rawName:"v-show",value:1==e.menu,expression:"menu==1"}],attrs:{langRoot:e.langRoot}}),n("Converter",{directives:[{name:"show",rawName:"v-show",value:2==e.menu,expression:"menu==2"}],attrs:{langRoot:e.langRoot}})],1):e._e()},o=[],s=(n("99af"),n("caad"),n("d3b7"),n("2532"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",{staticClass:"section"},[n("div",{attrs:{id:"languages"}},e._l(e.catalogue,(function(t,r){return n("a",{key:r,on:{click:function(n){return e.$emit("language",t)}}},[e._v(e._s(t))])})),0),e._m(0),e._m(1)]):e._e()},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{attrs:{id:"soon"}},[n("i",[e._v("A proper map is coming soon...")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"footer"}},[n("hr"),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag"}},[e._v("source")])])}],u={name:"Map",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"index.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.index=e.sent;case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{index:void 0,catalogue:void 0}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.langRoot+"../catalogue.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,r.sort((function(e,t){return e.localeCompare(t)})),e.catalogue=r;case 8:case"end":return t.stop()}}),t)})))()}},l=u,p=(n("0385"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,"720bb3c6",null),d=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes?n("div",{staticClass:"section"},[n("div",{attrs:{id:"phonemes"}},[n("QueryList",{directives:[{name:"show",rawName:"v-show",value:e.lects.length>0,expression:"lects.length>0"}],staticClass:"space",attrs:{title:"Lects",tags:e.lects,big:!0,locked:!0},on:{query:function(t){e.lectQuery=t}}}),n("QueryList",{attrs:{title:"Vowels",tags:e.vowelTags},on:{query:function(t){e.vowelQuery=t}}}),n("PhoneticTable",{staticClass:"space",attrs:{phonemes:e.vowels,query:Object.assign({},e.vowelQuery,e.lectQuery)},on:{phoneme:function(t){e.selected=t}}}),n("QueryList",{attrs:{title:"Consonants",tags:e.consonantTags},on:{query:function(t){e.consonantQuery=t}}}),n("PhoneticTable",{staticClass:"space",attrs:{phonemes:e.consonants,query:Object.assign({},e.consonantQuery,e.lectQuery)},on:{phoneme:function(t){e.selected=t}}})],1),n("div",[n("PhonemeDetails",{attrs:{langRoot:e.langRoot,phoneme:e.phonemes[e.selected]}})],1)]):e._e()},v=[],m=(n("4de4"),n("4160"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"list"}},[n("div",{attrs:{id:"header"}},[n("h3",[e._v(e._s(e.title))]),n("a",{directives:[{name:"show",rawName:"v-show",value:!e.locked,expression:"!locked"}],on:{click:function(t){e.visible=!e.visible}}},[n("span",[e._v("? ")]),e._v("query ")]),n("a",{directives:[{name:"show",rawName:"v-show",value:e.visible&&!e.empty,expression:"visible && !empty"}],on:{click:e.resetAll}},[n("span",[e._v("! ")]),e._v("reset ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],attrs:{id:"body"}},e._l(e.query,(function(t,r){return n("a",{key:r,class:{big:e.big},on:{click:function(t){return e.updateQuery(r)}}},[n("span",-1===t?[e._v("-")]:1===t?[e._v("+")]:[e._v("·")]),e._v(" "+e._s(r)+" ")])})),0)])},b=[],y=(n("4fad"),n("b64b"),n("3835")),_={name:"QueryList",props:["title","tags","big","locked"],data:function(){return{visible:!1,empty:!0,query:{}}},watch:{tags:{handler:function(e){var t=this;this.query={},Object(m["a"])(e).sort((function(e,t){return e.localeCompare(t)})).forEach((function(e){return t.query[e]=0})),this.resetAll()},immediate:!0}},created:function(){this.visible=this.locked},methods:{updateQuery:function(e){this.query[e]=(this.query[e]+2)%3-1,this.applyQuery()},resetAll:function(){var e=this;Object.keys(this.query).forEach((function(t){return e.query[t]=0})),this.applyQuery()},applyQuery:function(){for(var e={},t=0,n=Object.entries(this.query);t<n.length;t++){var r=Object(y["a"])(n[t],2),a=r[0],o=r[1];0!==o&&(e[a]=1===o)}this.empty=0===Object.keys(e).length,this.$emit("query",e),this.$forceUpdate()}}},w=_,x=(n("c233"),Object(p["a"])(w,g,b,!1,null,"7b2e032c",null)),j=x.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"table"}},e._l(e.phonemes,(function(t){return n("button",{key:t.i,staticClass:"phoneme",class:{faded:!e.fits(t)},on:{click:function(n){return e.$emit("phoneme",t.i)}}},[n("span",{staticClass:"str"},[e._v(e._s(t.str))]),n("br"),n("span",{staticClass:"ipa"},[e._v(e._s(t.ipa))])])})),0)},O=[],R={name:"PhoneticTable",props:["query","phonemes"],methods:{fits:function(e){for(var t=0,n=Object.entries(this.query);t<n.length;t++){var r=Object(y["a"])(n[t],2),a=r[0],o=r[1];if(o!==e._all.includes(a))return!1}return!0}}},C=R,T=(n("7a04"),Object(p["a"])(C,k,O,!1,null,"5865a133",null)),P=T.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"card"}},[n("h2",[e._v(e._s(e.phoneme.str)+" · "+e._s(e.phoneme.ipa))]),n("hr"),e.features?[n("h4",[e._v("Features")]),n("p",[e._v(e._s(e.features))])]:e._e(),e.lects?[n("h4",[e._v("Lects")]),n("p",[e._v(e._s(e.lects))])]:e._e(),e.phoneme.samples&&e.phoneme.samples.length>0?[n("h4",[e._v("Samples")]),e._l(e.phoneme.samples,(function(t,r){return n("button",{key:r,domProps:{innerHTML:e._s(e.highlight(t))},on:{click:function(t){return e.play(r)}}})}))]:e._e()],2)},Q=[],q=(n("13d5"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),{name:"PhonemeDetails",props:["langRoot","phoneme"],data:function(){return{player:new Audio}},computed:{features:function(){return this.reduceTags("features")},lects:function(){return this.reduceTags("lects")}},methods:{highlight:function(e){var t=this.phoneme.str;return e.replace(new RegExp(t,"g"),"<b>".concat(t,"</b>"))},play:function(e){this.player.src="".concat(this.langRoot,"audio/").concat(this.phoneme.samples[e],".m4a"),this.player.play()},reduceTags:function(e){var t;return null===(t=this.phoneme[e])||void 0===t?void 0:t.reduce((function(e,t){return"".concat(e," ").concat(t)}))}},created:function(){this.player.play()}}),A=q,$=(n("f9b5"),Object(p["a"])(A,E,Q,!1,null,"5302b415",null)),S=$.exports,N={name:"Phonology",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"phonology.json");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,r.sort((function(e,t){return e.str.localeCompare(t.str)})).forEach((function(e,t){e.i=t,e._all=e.features.concat(e.lects)})),this.phonemes=r,this.selected=0;case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{phonemes:void 0,lectQuery:void 0,vowelQuery:void 0,consonantQuery:void 0,selected:0}},components:{PhoneticTable:P,PhonemeDetails:S,QueryList:j},computed:{lects:function(){return this.getTags(this.phonemes,"lects")},vowels:function(){return this.categorize("vowel")},vowelTags:function(){return this.getTags(this.vowels,"features",["vowel"])},consonants:function(){return this.categorize("consonant")},consonantTags:function(){return this.getTags(this.consonants,"features",["consonant"])}},methods:{categorize:function(e){return this.phonemes.filter((function(t){return t.features.includes(e)}))},getTags:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=new Set;return e.forEach((function(e){var n;return null===(n=e[t])||void 0===n?void 0:n.forEach((function(e){return r.add(e)}))})),n.forEach((function(e){return r.delete(e)})),Object(m["a"])(r)}}},M=N,L=(n("2098"),Object(p["a"])(M,h,v,!1,null,"563469ed",null)),z=L.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),n("textarea",{ref:"resTxt",attrs:{readonly:""},domProps:{value:e.result}})]),n("div",{attrs:{id:"options"}},[n("button",{on:{click:function(t){return e.$refs.file.click()}}},[e._v("Upload .txt file")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t,r){return n("option",{key:r,domProps:{value:r}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:e.copy}},[e._v("Copy to clipboard")])]),n("MappingTable",{attrs:{mapping:e.mapping}}),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:e.handleFiles}})],1):e._e()},U=[],D=(n("fb6a"),n("b0c0"),n("498a"),n("b85c")),B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"mapping"}},e._l(e.mapping,(function(t,r){return n("p",{key:r},e._l(t,(function(t,r){return n("span",{key:r},[e._v(e._s(t.replace(" ","_")))])})),0)})),0)},J=[],H={name:"MappingTable",props:["mapping"]},I=H,V=(n("0dcd"),Object(p["a"])(I,B,J,!1,null,"df652874",null)),G=V.exports,K={name:"Converter",props:["langRoot"],watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"converter.json");case 2:return n=e.sent,e.next=5,n.json();case 5:return this.converters=e.sent,e.next=8,fetch(t+"sample.txt");case 8:return r=e.sent,e.next=11,r.text();case 11:this.source=e.sent;case 12:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0}},data:function(){return{converters:null,selected:0,source:""}},components:{MappingTable:G},computed:{mapping:function(){return Object.entries(this.converters[this.selected].mapping)},result:function(){return this.convert(this.source)}},methods:{uppercase:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},replace:function(e,t,n){return e.replace(new RegExp(t,"g"),n)},convert:function(e){e=" "+this.replace(e,"\n","\n ").trim();var t,n=Object(D["a"])(this.mapping);try{for(n.s();!(t=n.n()).done;){var r=Object(y["a"])(t.value,2),a=r[0],o=r[1];e=this.replace(e,a,o),e=this.replace(e,this.uppercase(a),this.uppercase(o))}}catch(s){n.e(s)}finally{n.f()}return this.replace(e,"\n ","\n").trim()},copy:function(){this.$refs.resTxt.select(),document.execCommand("copy")},handleFiles:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=document.createElement("a");n.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},W=K,X=(n("8f7f"),Object(p["a"])(W,F,U,!1,null,"50d1595e",null)),Y=X.exports,Z={name:"App",data:function(){return{language:void 0,catalogue:void 0,index:void 0,menu:0}},components:{Map:d,Phonology:z,Converter:Y},watch:{langRoot:{handler:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(t+"index.json");case 4:return n=e.sent,e.next=7,n.json();case 7:this.index=e.sent;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),immediate:!0},language:function(e){localStorage.language=e},menu:function(e){localStorage.menu=e}},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.root+"/catalogue.json");case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,r.sort((function(e,t){return e.localeCompare(t)})),e.catalogue=r,e.language=e.catalogue.includes(localStorage.language)?localStorage.language:e.catalogue[0],localStorage.menu&&(e.menu=localStorage.menu);case 10:case"end":return t.stop()}}),t)})))()},computed:{langRoot:function(){return this.language?"".concat(this.root).concat(this.language,"/"):void 0},root:function(){return"".concat("/Aevzag/","languages/")}}},ee=Z,te=(n("1e67"),Object(p["a"])(ee,a,o,!1,null,"395a9dc7",null)),ne=te.exports,re=n("9483");Object(re["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ne)}}).$mount("#app")},"57d9":function(e,t,n){},"682f":function(e,t,n){},"7a04":function(e,t,n){"use strict";var r=n("ae02"),a=n.n(r);a.a},"7e58":function(e,t,n){},"8f7f":function(e,t,n){"use strict";var r=n("a51e"),a=n.n(r);a.a},a51e:function(e,t,n){},ae02:function(e,t,n){},be83:function(e,t,n){},c233:function(e,t,n){"use strict";var r=n("d95d"),a=n.n(r);a.a},c887:function(e,t,n){},d95d:function(e,t,n){},f9b5:function(e,t,n){"use strict";var r=n("c887"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0230d685.js.map