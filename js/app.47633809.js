(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],p=0,h=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0477":function(e,t,n){"use strict";var a=n("9d27"),r=n.n(a);r.a},"05c3":function(e,t,n){},"0b6e":function(e,t,n){"use strict";var a=n("5d03"),r=n.n(a);r.a},"1c84":function(e,t,n){},"55b6":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},"5d03":function(e,t,n){},"5dd2":function(e,t,n){},"5f46":function(e,t,n){"use strict";var a=n("862e"),r=n.n(a);r.a},"60c8":function(e,t,n){"use strict";var a=n("55b6"),r=n.n(a);r.a},"674e":function(e,t,n){"use strict";var a=n("e9f1"),r=n.n(a);r.a},"75d0":function(e,t,n){"use strict";var a=n("d1ff"),r=n.n(a);r.a},"7b28":function(e,t,n){},8225:function(e,t,n){"use strict";var a=n("05c3"),r=n.n(a);r.a},"862e":function(e,t,n){},"88ef":function(e,t,n){"use strict";var a=n("90a9"),r=n.n(a);r.a},"90a9":function(e,t,n){},"9c0c":function(e,t,n){},"9d27":function(e,t,n){},"9df3":function(e,t,n){},b693:function(e,t,n){"use strict";var a=n("1c84"),r=n.n(a);r.a},bfbd:function(e,t,n){"use strict";var a=n("c09d"),r=n.n(a);r.a},c09d:function(e,t,n){},c336:function(e,t,n){"use strict";var a=n("5dd2"),r=n.n(a);r.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Home"!==e.$route.name?n("Header"):e._e(),n("router-view")],1)},s=[],o=(n("b0c0"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"section"},[n("div",{staticClass:"panel-horizontal"},[n("img",{staticClass:"no-select",attrs:{src:e.flag,draggable:"false",alt:"flag"}}),n("button",{on:{click:function(t){return e.navigate("Home")}}},[n("span",{staticClass:"icon"},[e._v("arrow_back")])]),n("h2",[e._v(e._s(e.$store.state.language))])]),n("div",{staticClass:"panel-horizontal scroll-hidden"},e._l(e.menus,(function(t){var a=t[0],r=t[1];return n("button",{key:r,staticClass:"panel-horizontal",class:{highlight:e.$route.name===a},on:{click:function(t){return e.navigate(a)}}},[n("span",{staticClass:"icon"},[e._v(e._s(r))]),a?n("p",[e._v(e._s(a))]):e._e()])})),0)])])},c=[],u=a["a"].extend({name:"Header",data:function(){return{menus:[["Phonology","audiotrack"],["Converter","sync_alt"],["Phrasebook","chat"]]}},computed:{flag:function(){return this.$store.getters.languageRoot+"flag.png"}},methods:{navigate:function(e){this.$route.name!==e&&this.$router.push({name:e,params:{lang:this.$route.params.lang}})}}}),l=u,p=(n("75d0"),n("2877")),h=Object(p["a"])(l,i,c,!1,null,"eb5d51f8",null),f=h.exports,d=a["a"].extend({name:"App",components:{Header:f},data:function(){return{language:void 0}},watch:{"$route.params.lang":{handler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$route.params.lang,n&&n!==e.$store.state.language&&e.$store.dispatch("loadLanguage",n);case 2:case"end":return t.stop()}}),t)})))()},immediate:!0},"$route.path":{handler:function(){this.$route.name&&(localStorage.url=this.$route.path)}}},created:function(){this.$store.dispatch("loadCatalogue"),this.$route.name&&"Home"!==this.$route.name||this.$router.push(localStorage.url&&localStorage.url!==this.$route.path?{path:localStorage.url}:{name:"Home"})}}),m=d,g=(n("5c0b"),Object(p["a"])(m,r,s,!1,null,null,null)),v=g.exports,b=n("8c4f"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes&&e.lects?n("div",{staticClass:"section"},[n("div",{staticClass:"panel scroll"},[n("QueryList",{attrs:{tags:e.lects},on:{query:function(t){e.lectQuery=t}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.vowels,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.consonants,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("QueryInput",{on:{query:function(t){e.featureQuery=t}}})],1),n("PhonemeDetails",{attrs:{phoneme:e.phonemes[e.selected]}})],1):e._e()},_=[],x=(n("4de4"),n("caad"),n("ac1f"),n("2532"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-horizontal-dense scroll"},[n("button",{staticClass:"small round",on:{click:e.reset}},[n("span",{staticClass:"icon-small"},[e._v("clear")])]),e._l(e.tags,(function(t,a){return n("QueryParam",{key:a,attrs:{text:t},model:{value:e.values[a],callback:function(t){e.$set(e.values,a,t)},expression:"values[i]"}})}))],2)}),C=[],w=(n("cb29"),n("13d5"),n("d3b7"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"small round",class:{"highlight-confirm":1===e.value,"highlight-alert":-1===e.value},on:{click:e.update}},[n("p",[e._v(e._s(e.text))])])}),k=[],$={name:"QueryParam",props:["text","value"],model:{prop:"value",event:"update"},methods:{update:function(){this.$emit("update",(this.value+2)%3-1)}}},j=$,O=Object(p["a"])(j,w,k,!1,null,null,null),P=O.exports,T={name:"QueryList",components:{QueryParam:P},props:["tags"],data:function(){return{values:[]}},computed:{result:function(){var e=this;return this.tags.reduce((function(t,n,a){return e.values[a]&&(t[n]=e.values[a]>0),t}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0},tags:{handler:function(){this.reset()},immediate:!0}},methods:{reset:function(){this.values=new Array(this.tags.length).fill(0)}}},E=T,Q=Object(p["a"])(E,x,C,!1,null,"eef7cc4a",null),z=Q.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{placeholder:"search for phonetic features, '-' to exclude",type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])},M=[],q=(n("1276"),{name:"QueryInput",data:function(){return{input:""}},computed:{result:function(){return this.input.toLowerCase().split(" ").filter((function(e){return e})).reduce((function(e,t){return"-"===t[0]?e[t.substr(1)]=!1:e[t]=!0,e}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0}}}),A=q,L=(n("c336"),Object(p["a"])(A,R,M,!1,null,"9fad813a",null)),S=L.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{narrow:e.phonemes.length<=12},attrs:{id:"root"}},e._l(e.phonemes,(function(t,a){return n("PhoneticItem",{key:a,attrs:{selected:e.selected==t.i,faded:!e.fitting[a],ipa:t.ipa,str:e.graphemes[a]},nativeOn:{click:function(n){return e.$emit("phoneme",t.i)}}})})),1)},N=[],F=(n("d81d"),n("4fad"),n("b64b"),n("3835")),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{"text-faded":e.faded,highlight:e.selected}},[n("b",[e._v(e._s(e.str))]),n("span",{staticClass:"text-ipa"},[e._v(e._s(e.ipa))])])},J=[],U={name:"PhoneticItem",props:["selected","faded","ipa","str"]},D=U,B=(n("8225"),Object(p["a"])(D,I,J,!1,null,"77cdb600",null)),G=B.exports,K={name:"PhoneticTable",components:{PhoneticItem:G},props:["selected","lectQuery","featureQuery","phonemes"],methods:{pass:function(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var r=Object(F["a"])(a[n],2),s=r[0],o=r[1];if(o!==e.includes(s))return!1}return!0}},computed:{fitting:function(){var e=this;return this.phonemes.map((function(t){return e.pass(Object.keys(t.uses),e.lectQuery)&&e.pass(t.features,e.featureQuery)}))},singleLect:function(){for(var e=[],t=0,n=Object.entries(this.lectQuery);t<n.length;t++){var a=Object(F["a"])(n[t],2),r=a[0],s=a[1];s&&e.push(r)}return 1===e.length?e[0]:void 0},graphemes:function(){var e=this;return this.phonemes.map((function(t){var n;return null===(n=t.uses[e.singleLect])||void 0===n?void 0:n[0].grapheme}))}}},V=K,W=(n("f09e"),Object(p["a"])(V,H,N,!1,null,"4e639146",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",attrs:{id:"root"}},[n("div",{staticClass:"card panel-dense"},[n("h2",{staticClass:"text-ipa"},[e._v(e._s(e.phoneme.ipa))]),e.features?n("p",{staticClass:"text-caption text-faded text-spaced"},[e._v(e._s(e.features))]):e._e(),e.phoneme.note?n("p",{staticClass:"text-caption",domProps:{innerHTML:e._s(e.parsePhonemes(e.phoneme.note))}}):e._e()]),n("audio",{ref:"player"}),e._l(e.lects,(function(t,a){return n("PhonemeUse",{key:a,attrs:{lect:t,cases:e.phoneme.uses[t]},on:{play:function(n){return e.play(t,n)}}})}))],2)},Z=[],ee=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-dense card"},[n("div",{staticClass:"title"},[n("h3",[e._v(e._s(e.lect))]),n("p",{domProps:{innerHTML:e._s(e.graphemes)}})]),e._l(e.notes,(function(t,a){return n("p",{key:a,staticClass:"text-caption",domProps:{innerHTML:e._s(e.parsePhonemes(t))}})})),n("div",{staticClass:"panel-solid scroll"},[e._l(e.cases,(function(t){return e._l(t.samples,(function(a){return n("button",{key:a,staticClass:"small",on:{click:function(t){"*"!=a[0]&&e.$emit("play",a)}}},["*"==a[0]?n("span",{staticClass:"icon-small hidden"},[e._v("play_arrow")]):n("span",{staticClass:"icon-small"},[e._v("play_arrow")]),n("span",{domProps:{innerHTML:e._s(e.highlight(a,t.grapheme))}})])}))}))],2)],2)}),te=[],ne=(n("a15b"),n("4d63"),n("25f0"),{name:"PhonemeUse",props:["lect","cases"],computed:{graphemes:function(){return this.cases.map((function(e){return e.grapheme})).join("<span class='text-faded no-select'> • </span>")},notes:function(){return this.cases.map((function(e){return e.note})).filter((function(e){return e}))}},methods:{parsePhonemes:function(e){return e.replace(/\/([^/]+)\//g,"<span class='text-ipa'>$1</span>")},highlight:function(e,t){return"*"==e[0]&&(e=e.substr(1)),e.replace(new RegExp(t,"g"),'<span style="color: var(--color-highlight)">'.concat(t,"</span>"))}}}),ae=ne,re=(n("e92c"),Object(p["a"])(ae,ee,te,!1,null,"9b382084",null)),se=re.exports,oe={name:"PhonemeDetails",components:{PhonemeUse:se},props:["phoneme"],computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.phoneme.uses}))},features:function(){var e;return null===(e=this.phoneme["features"])||void 0===e?void 0:e.reduce((function(e,t){return"".concat(e," ").concat(t)}))},root:function(){return this.$store.getters.languageRoot}},methods:{play:function(e,t){var n=this.$refs.player;n.src="".concat(this.root).concat(e,"/audio/").concat(t,".mp3"),n.play()},parsePhonemes:function(e){return e.replace(/\/([^/]+)\//g,"<span class='text-ipa'>$1</span>")}}},ie=oe,ce=(n("bfbd"),Object(p["a"])(ie,Y,Z,!1,null,"24995411",null)),ue=ce.exports,le={name:"Phonology",components:{PhoneticTable:X,PhonemeDetails:ue,QueryList:z,QueryInput:S},data:function(){return{lectQuery:{},featureQuery:{}}},computed:{selected:function(){var e,t=null!==(e=this.$route.query.phoneme)&&void 0!==e?e:0;return t<this.phonemes.length?t:0},phonemes:function(){return this.$store.state.phonology},lects:function(){var e;return null===(e=this.$store.getters.languageInfo)||void 0===e?void 0:e.lects},vowels:function(){return this.categorize("vowel")},consonants:function(){return this.categorize("consonant")}},methods:{select:function(e){this.selected!==e&&this.$router.replace({query:{phoneme:e}})},categorize:function(e){return this.phonemes.filter((function(t){return t.features.includes(e)}))}}},pe=le,he=(n("0477"),Object(p["a"])(pe,y,_,!1,null,"a1530ef6",null)),fe=he.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-horizontal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mappingFrom,expression:"mappingFrom"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mappingFrom=t.target.multiple?n:n[0]}}},e._l(e.converters.filter((function(e){return!e.many21})),(function(t){return n("option",{key:t.i,domProps:{value:t.i}},[e._v(e._s(t.name))])})),0),n("button",{attrs:{tooltip:e.empty?"paste sample text":"clear input text"},on:{click:function(t){e.empty=!e.empty}}},[e.empty?n("span",{staticClass:"icon"},[e._v("subject")]):n("span",{staticClass:"icon"},[e._v("clear")])]),n("button",{attrs:{tooltip:"upload text file"},on:{click:function(t){return e.$refs.file.click()}}},[n("span",{staticClass:"icon"},[e._v("publish")])]),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.converters[this.mappingTo].many21,expression:"!converters[this.mappingTo].many21"}],attrs:{tooltip:"swap writings"},on:{click:e.swap}},[n("span",{staticClass:"icon"},[e._v("swap_horiz")])])]),n("ConverterText",{attrs:{source:e.source,mapping:e.mappingSource},on:{result:function(t){e.intermediate=t}}}),e.showMapping?n("MappingTable",{attrs:{mapping:e.mappingSource}}):e._e()],1),n("div",{staticClass:"panel"},[n("div",{staticClass:"panel-horizontal"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.mappingTo,expression:"mappingTo"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.mappingTo=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t){return n("option",{key:t.i,domProps:{value:t.i}},[e._v(e._s(t.name))])})),0),n("button",{attrs:{tooltip:e.showMapping?"hide mapping":"show mapping"},on:{click:function(t){e.showMapping=!e.showMapping}}},[e.showMapping?n("span",{staticClass:"icon"},[e._v("visibility_off")]):n("span",{staticClass:"icon"},[e._v("visibility")])]),n("button",{attrs:{tooltip:"copy to clipboard"},on:{click:e.copy}},[n("span",{staticClass:"icon"},[e._v("file_copy")])])]),n("ConverterText",{ref:"resultText",attrs:{readonly:!0,source:e.intermediate,mapping:e.mappingResult},on:{result:function(t){e.result=t}}}),e.showMapping?n("MappingTable",{attrs:{mapping:e.mappingResult}}):e._e()],1)]),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file",accept:".txt"},on:{change:e.upload}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"link"})]):e._e()},me=[],ge=(n("9911"),n("5530")),ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},e._l(e.noones,(function(t,a){return n("p",{key:a},[n("span",{staticClass:"text-faded"},[e._v(e._s(t[0].replace(" ","_")))]),n("span",[e._v(e._s(t[1].replace(" ","_")))])])})),0)},be=[],ye={name:"MappingTable",props:["mapping"],computed:{noones:function(){return this.mapping.filter((function(e){return!e[0].includes("1")}))}}},_e=ye,xe=(n("674e"),Object(p["a"])(_e,ve,be,!1,null,"6b62eebd",null)),Ce=xe.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],ref:"textarea",attrs:{readonly:e.readonly},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})},ke=[],$e=(n("fb6a"),n("498a"),n("b85c")),je={name:"ConverterText",props:["source","mapping","readonly"],data:function(){return{text:"",result:""}},watch:{source:{handler:function(){this.text=this.readonly?this.convert(this.source,this.mapping):this.source},immediate:!0},text:{handler:function(){this.result=this.readonly?this.text:this.convert(this.text,this.mapping),this.$emit("result",this.result)},immediate:!0},mapping:{handler:function(e){this.text=this.readonly?this.convert(this.source,e):this.convert(this.result,e.map((function(e){return[e[1],e[0]]})))},deep:!0,immediate:!0}},methods:{capitalize:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},convert:function(e,t){if(0===t.length)return e;e=" "+e.replace(/\n/g,"\n ").trim();for(var n="",a=0;a<e.length;){var r,s=!1,o=Object($e["a"])(t);try{for(o.s();!(r=o.n()).done;){for(var i=Object(F["a"])(r.value,2),c=i[0],u=i[1],l=c.length,p=e.substring(a,a+l),h=[[c,u],[this.capitalize(c),this.capitalize(u)],[c.toUpperCase(),u.toUpperCase()]],f=0,d=h;f<d.length;f++){var m=Object(F["a"])(d[f],2),g=m[0],v=m[1];if(p===g){s=!0,n+=v,a+=l;break}}if(s)break}}catch(b){o.e(b)}finally{o.f()}s||(n+=e[a],a++)}return n.replace(/\n /g,"\n").trim()}}},Oe=je,Pe=(n("60c8"),Object(p["a"])(Oe,we,ke,!1,null,"7c679bcb",null)),Te=Pe.exports,Ee={name:"Converter",components:{MappingTable:Ce,ConverterText:Te},data:function(){return{mappingFrom:0,mappingTo:1,empty:!1,source:"",intermediate:"",result:"",showMapping:!1}},computed:{sample:function(){return this.$store.state.sample},converters:function(){return this.$store.state.converters},mappingSource:function(){return this.converters[this.mappingFrom].mapping},mappingResult:function(){return this.converters[this.mappingTo].mapping.map((function(e){return[e[1],e[0]]}))}},watch:{sample:function(e){this.empty||(this.source=e)},empty:function(e){this.source=e?"":this.sample,this.$router.replace({query:Object(ge["a"])({},this.$route.query,{empty:e})}).catch((function(){}))},mappingFrom:function(e){this.$router.replace({query:Object(ge["a"])({},this.$route.query,{from:e})}).catch((function(){}))},mappingTo:function(e){this.$router.replace({query:Object(ge["a"])({},this.$route.query,{to:e})}).catch((function(){}))},"$route.query":{handler:function(e){var t,n;this.empty=e.empty,this.mappingFrom=null!==(t=e.from)&&void 0!==t?t:0,this.mappingTo=null!==(n=e.to)&&void 0!==n?n:1},immediate:!0}},methods:{swap:function(){var e=this.result,t=this.mappingFrom;this.mappingFrom=this.mappingTo,this.mappingTo=t,this.source=e},upload:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=this.$refs.link;n.href="data:text/plain;charset=utf-8,"+encodeURIComponent(t),n.download=e,n.click()},copy:function(){this.$refs.resultText.$refs.textarea.select(),document.execCommand("copy")}}},Qe=Ee,ze=(n("5f46"),Object(p["a"])(Qe,de,me,!1,null,"49f812b0",null)),Re=ze.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phrasebook?n("div",{staticClass:"section"},[n("div",{staticClass:"panel",attrs:{id:"translations"}},[n("div",{staticClass:"panel-horizontal",attrs:{id:"header"}},[n("button",{attrs:{tooltip:e.searching?"view categories":"search"},on:{click:function(t){e.searching=!e.searching}}},[e.searching?n("span",{staticClass:"icon"},[e._v("sort")]):n("span",{staticClass:"icon"},[e._v("search")])]),e.searching?n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{placeholder:"search in translations",type:"text"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}}):n("select",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.category=t.target.multiple?n:n[0]}}},e._l(e.categories,(function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0)]),e.searchResults?n("div",{staticClass:"panel-solid scroll"},[e._l(e.searchResults,(function(t,a){return[n("h3",{key:e.categories[a]},[e._v(e._s(e.categories[a]))]),e._l(t,(function(t,r){return n("button",{key:"-"+a+r,class:{highlight:a===e.category&&r===e.phrase},on:{click:function(){e.category=a,e.phrase=r}}},[e._v(e._s(e.phrasebook[e.categories[a]][t].translation))])}))]}))],2):e.searching?n("p",{staticClass:"text-caption"},[e._v("Nothing found...")]):n("div",{staticClass:"panel-solid scroll"},e._l(e.translations,(function(t,a){return n("button",{key:a,class:{highlight:a===e.phrase},on:{click:function(t){e.phrase=a}}},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"panel"},e._l(e.lects,(function(t,a){return n("PhrasebookEntry",{key:a,staticClass:"card",attrs:{lect:t,source:e.sources[t]}})})),1)]):e._e()},qe=[],Ae=(n("4160"),n("841c"),n("159b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("h3",[e._v(e._s(e.lect))]),n("span",[e._v(e._s(e.source.text))]),n("span",{staticClass:"text-faded text-ipa"},[e._v(e._s(e.source.ipa))])])}),Le=[],Se={name:"PhrasebookEntry",props:["lect","source"]},He=Se,Ne=(n("88ef"),Object(p["a"])(He,Ae,Le,!1,null,"12194105",null)),Fe=Ne.exports,Ie={name:"Phrasebook",components:{PhrasebookEntry:Fe},data:function(){return{category:0,phrase:0,searching:!1,search:""}},computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.sources}))},phrasebook:function(){return this.$store.state.phrasebook},categories:function(){return Object.keys(this.phrasebook)},phrases:function(){return this.phrasebook[this.categories[this.category]]},translations:function(){return this.phrases.map((function(e){return e.translation}))},sources:function(){return this.phrases[this.phrase].sources},searchResults:function(){var e=this;if(!this.searching)return null;var t={};return this.categories.forEach((function(n,a){var r=[];e.phrasebook[n].map((function(e){return e.translation})).forEach((function(t,n){t.includes(e.search)&&r.push(n)})),r.length>0&&(t[a]=r)})),0===Object.keys(t).length?null:t}},watch:{category:function(e){this.$router.push({query:{category:e,phrase:0}}).catch((function(){}))},phrase:function(e){this.$router.push({query:Object(ge["a"])({},this.$route.query,{phrase:e})}).catch((function(){}))},"$route.query":{handler:function(e){var t,n;this.category=null!==(t=e.category)&&void 0!==t?t:0,this.phrase=null!==(n=e.phrase)&&void 0!==n?n:0},immediate:!0}}},Je=Ie,Ue=(n("0b6e"),Object(p["a"])(Je,Me,qe,!1,null,"54ce396c",null)),De=Ue.exports,Be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",[e._m(0),n("div",{staticClass:"section",attrs:{id:"languages"}},e._l(e.languages,(function(e,t){return n("LanguageCard",{key:t,attrs:{language:e}})})),1)]):e._e()},Ge=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section panel-horizontal",attrs:{id:"header"}},[n("h1",[e._v("Ævzag")]),n("div",{staticClass:"panel-horizontal"},[n("a",{attrs:{href:"https://twitter.com/alkaitagi"}},[e._v("Twitter")]),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag"}},[e._v("GitHub")]),n("span",{staticClass:"text-faded no-select"},[e._v("•")]),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag/blob/master/credits.md"}},[e._v("Credits")])])])}],Ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card panel-dense no-select",on:{click:e.open}},[n("div",{attrs:{id:"flag"}},[n("img",{attrs:{src:e.flag,draggable:"false",alt:"flag"}})]),n("div",{staticClass:"panel-horizontal"},[n("h2",[e._v(e._s(e.language))]),n("p",{staticClass:"panel",attrs:{tooltip:"work in progress"}},[e.info.wip?n("span",{staticClass:"icon"},[e._v("construction")]):e._e()])]),n("div",{staticClass:"panel-solid scroll"},e._l(e.lects,(function(t,a){return n("p",{key:a},[e._v(e._s(t))])})),0)])},Ve=[],We=(n("07ac"),{name:"LanguageCard",props:["language"],computed:{flag:function(){return this.$store.state.root+this.language+"/flag.png"},info:function(){return this.$store.state.catalogue[this.language]},lects:function(){return Object.values(this.info.lects).sort((function(e,t){return e.localeCompare(t)}))}},methods:{open:function(){this.$router.push({name:"Phonology",params:{lang:this.language}})}}}),Xe=We,Ye=(n("b693"),Object(p["a"])(Xe,Ke,Ve,!1,null,"3ed74b44",null)),Ze=Ye.exports,et={name:"Home",components:{LanguageCard:Ze},data:function(){return{publicPath:"/Aevzag/"}},computed:{catalogue:function(){return this.$store.state.catalogue},languages:function(){return Object.keys(this.catalogue).sort((function(e,t){return e.localeCompare(t)}))}}},tt=et,nt=(n("d7bb"),Object(p["a"])(tt,Be,Ge,!1,null,"afa4a188",null)),at=nt.exports;a["a"].use(b["a"]);var rt=[{path:"/home",name:"Home",component:at},{path:"/phonology/:lang",name:"Phonology",component:fe},{path:"/converter/:lang",name:"Converter",component:Re},{path:"/phrasebook/:lang",name:"Phrasebook",component:De},{path:"*",redirect:{name:"Home"}}],st=new b["a"]({base:"/Aevzag/",routes:rt}),ot=st,it=n("9483");Object(it["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ct=n("2f62");a["a"].use(ct["a"]);var ut=new ct["a"].Store({state:{root:"/Aevzag/languages/",catalogue:void 0,language:void 0,phonology:void 0,sample:void 0,converters:void 0,phrasebook:void 0},getters:{languageRoot:function(e){return e.root+e.language+"/"},languageInfo:function(e){return e.catalogue?e.catalogue[e.language]:void 0},lects:function(e,t){var n;return null===(n=t.languageInfo)||void 0===n?void 0:n.lects}},mutations:{setCatalogue:function(e,t){Object.values(t).forEach((function(e){return e.lects.sort((function(e,t){return e.localeCompare(t)}))})),e.catalogue=t},setLanguage:function(e,t){e.language=t},setPhonology:function(e,t){t.sort((function(e,t){return e.ipa.localeCompare(t.ipa)})),t.forEach((function(e,t){e.i=t})),e.phonology=t},setSample:function(e,t){e.sample=t},setConverters:function(e,t){t.forEach((function(e,t){e.i=t})),e.converters=t},setPhrasebook:function(e,t){e.phrasebook=t}},actions:{loadCatalogue:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,a=e.commit,t.t0=a,t.next=4,n("loadJson","../catalogue.json");case 4:t.t1=t.sent,(0,t.t0)("setCatalogue",t.t1);case 6:case"end":return t.stop()}}),t)})))()},loadLanguage:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.commit,r("setLanguage",t),n.t0=r,n.next=5,a("loadJson","phonology.json");case 5:return n.t1=n.sent,(0,n.t0)("setPhonology",n.t1),n.t2=r,n.next=10,a("loadText","sample.txt");case 10:return n.t3=n.sent,(0,n.t2)("setSample",n.t3),n.t4=r,n.next=15,a("loadJson","converters.json");case 15:return n.t5=n.sent,(0,n.t4)("setConverters",n.t5),n.t6=r,n.next=20,a("loadJson","phrasebook.json");case 20:n.t7=n.sent,(0,n.t6)("setPhrasebook",n.t7);case 22:case"end":return n.stop()}}),n)})))()},loadJson:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.json()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},loadText:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.text()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:ot,store:ut,render:function(e){return e(v)}}).$mount("#app")},d1ff:function(e,t,n){},d7bb:function(e,t,n){"use strict";var a=n("f177"),r=n.n(a);r.a},e92c:function(e,t,n){"use strict";var a=n("9df3"),r=n.n(a);r.a},e9f1:function(e,t,n){},f09e:function(e,t,n){"use strict";var a=n("7b28"),r=n.n(a);r.a},f177:function(e,t,n){}});
//# sourceMappingURL=app.47633809.js.map