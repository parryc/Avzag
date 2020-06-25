(function(e){function t(t){for(var a,s,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0687":function(e,t,n){"use strict";var a=n("2b95"),r=n.n(a);r.a},"0ecc":function(e,t,n){"use strict";var a=n("ef5a"),r=n.n(a);r.a},"116a":function(e,t,n){},"15fe":function(e,t,n){},"2b95":function(e,t,n){},"2c0b":function(e,t,n){},"2c5d":function(e,t,n){"use strict";var a=n("15fe"),r=n.n(a);r.a},"2e31":function(e,t,n){"use strict";var a=n("7e08"),r=n.n(a);r.a},"343d":function(e,t,n){"use strict";var a=n("912a"),r=n.n(a);r.a},"3c51":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Home"!==e.$route.name?n("Header"):e._e(),n("router-view")],1)},o=[],s=(n("b0c0"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"section"},[n("div",[n("button",{on:{click:function(t){return e.navigate("Home")}}},[n("span",{staticClass:"material-icons-outlined large"},[e._v("arrow_back")])]),n("LanguageBanner")],1),n("div",{attrs:{id:"menu"}},e._l(e.menus,(function(t,a){return n("button",{key:a,class:{selected:e.$route.name===t.title},on:{click:function(n){return e.navigate(t.title)}}},[n("span",{staticClass:"material-icons-outlined large"},[e._v(e._s(t.icon))]),n("p",[e._v(e._s(t.title))])])})),0)])])},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"banner"}},[n("img",{attrs:{src:e.banner,alt:"flag"}}),n("h2",[e._v(e._s(e.language))])])},l=[],p={name:"LanguageBanner",computed:{banner:function(){return this.$store.getters.languageRoot+"flag.png"},language:function(){return this.$store.state.language},catalogue:function(){return this.$store.state.catalogue}}},f=p,d=(n("0687"),n("2877")),h=Object(d["a"])(f,u,l,!1,null,"a17a759e",null),m=h.exports,v={name:"Header",components:{LanguageBanner:m},data:function(){return{menus:[{title:"Phonology",icon:"audiotrack"},{title:"Converter",icon:"subject"},{title:"Phrasebook",icon:"book"}]}},methods:{navigate:function(e){this.$route.name!==e&&this.$router.push({name:e,params:{lang:this.$route.params.lang}})}}},g=v,_=(n("a6ad"),Object(d["a"])(g,i,c,!1,null,"477b6a50",null)),b=_.exports,y={name:"App",components:{Header:b},data:function(){return{language:void 0}},watch:{$route:{handler:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$route.name&&(localStorage.url=e.$route.path),n=e.$route.params.lang,n&&n!==e.$store.state.language&&e.$store.dispatch("loadLanguage",n);case 3:case"end":return t.stop()}}),t)})))()},immediate:!0}},created:function(){this.$store.dispatch("loadCatalogue"),this.$route.name||this.$router.push(localStorage.url&&localStorage.url!==this.$route.path?{path:localStorage.url}:{name:"Home"})}},w=y,x=Object(d["a"])(w,r,o,!1,null,null,null),k=x.exports,C=n("8c4f"),$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes&&e.lects?n("div",{staticClass:"section"},[n("div",{attrs:{id:"phonemes"}},[n("QueryList",{attrs:{tags:e.lects},on:{query:function(t){e.lectQuery=t}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.vowels,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.consonants,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("QueryInput",{on:{query:function(t){e.featureQuery=t}}})],1),n("PhonemeDetails",{attrs:{phoneme:e.phonemes[e.selected]}})],1):e._e()},j=[],O=(n("4de4"),n("caad"),n("ac1f"),n("2532"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("button",{on:{click:e.reset}},[n("span",{staticClass:"material-icons-outlined"},[e._v("clear")])]),e._l(e.tags,(function(t,a){return n("QueryParam",{key:a,attrs:{text:t},model:{value:e.values[a],callback:function(t){e.$set(e.values,a,t)},expression:"values[i]"}})}))],2)}),P=[],E=(n("cb29"),n("13d5"),n("d3b7"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{in:1===e.value,ex:-1===e.value},on:{click:e.update}},[n("span",{staticClass:"material-icons-outlined"},[-1===e.value?[e._v("remove")]:1===e.value?[e._v("add")]:[e._v("arrow_right")]],2),n("p",[e._v(e._s(e.text))])])}),Q=[],R={name:"QueryParam",props:["text","value"],model:{prop:"value",event:"update"},methods:{update:function(){this.$emit("update",(this.value+2)%3-1)}}},L=R,T=(n("9722"),Object(d["a"])(L,E,Q,!1,null,"d4db21f0",null)),A=T.exports,M={name:"QueryList",components:{QueryParam:A},props:["tags"],data:function(){return{values:[]}},computed:{result:function(){var e=this;return this.tags.reduce((function(t,n,a){return e.values[a]&&(t[n]=e.values[a]>0),t}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0},tags:{handler:function(){this.reset()},immediate:!0}},methods:{reset:function(){this.values=new Array(this.tags.length).fill(0)}}},S=M,q=(n("5876"),Object(d["a"])(S,O,P,!1,null,"0d3ad577",null)),H=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{placeholder:"search for phonetic features, '-' to exclude",type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])},z=[],N=(n("1276"),{name:"QueryInput",data:function(){return{input:""}},computed:{result:function(){return this.input.toLowerCase().split(" ").filter((function(e){return e})).reduce((function(e,t){return"-"===t[0]?e[t.substr(1)]=!1:e[t]=!0,e}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0}}}),J=N,B=(n("7794"),Object(d["a"])(J,I,z,!1,null,"2a98a8c2",null)),D=B.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{narrow:e.phonemes.length<=12},attrs:{id:"root"}},e._l(e.phonemes,(function(t,a){return n("PhoneticItem",{key:a,attrs:{selected:e.selected==t.i,faded:!e.fitting[a],ipa:t.ipa,str:e.graphemes[a]},nativeOn:{click:function(n){return e.$emit("phoneme",t.i)}}})})),1)},U=[],G=(n("7db0"),n("d81d"),n("4fad"),n("3835")),K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{"txt-faded":e.faded,selected:e.selected}},[n("b",[e._v(e._s(e.str))]),n("span",{staticClass:"txt-ipa"},[e._v(e._s(e.ipa))])])},V=[],W={name:"PhoneticItem",props:["selected","faded","ipa","str"]},X=W,Y=(n("0ecc"),Object(d["a"])(X,K,V,!1,null,"1135109d",null)),Z=Y.exports,ee={name:"PhoneticTable",components:{PhoneticItem:Z},props:["selected","lectQuery","featureQuery","phonemes"],methods:{pass:function(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var r=Object(G["a"])(a[n],2),o=r[0],s=r[1];if(s!==e.includes(o))return!1}return!0}},computed:{fitting:function(){var e=this;return this.phonemes.map((function(t){return e.pass(t.lects.map((function(e){return e.name})),e.lectQuery)&&e.pass(t.features,e.featureQuery)}))},singleLect:function(){for(var e=[],t=0,n=Object.entries(this.lectQuery);t<n.length;t++){var a=Object(G["a"])(n[t],2),r=a[0],o=a[1];o&&e.push(r)}return 1===e.length?e[0]:void 0},graphemes:function(){var e=this;return this.phonemes.map((function(t){var n;return null===(n=t.lects.find((function(t){return t.name===e.singleLect})))||void 0===n?void 0:n.grapheme}))}}},te=ee,ne=(n("9620"),Object(d["a"])(te,F,U,!1,null,"1f920742",null)),ae=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"card"},[n("h2",[n("span",{staticClass:"txt-faded"},[e._v("/ ")]),n("span",{staticClass:"txt-ipa"},[e._v(e._s(e.phoneme.ipa))]),n("span",{staticClass:"txt-faded"},[e._v(" /")])]),e.features?n("p",{staticClass:"txt-caption txt-faded spaced"},[e._v(e._s(e.features))]):e._e()]),n("audio",{ref:"player"}),e.phoneme.lects?e._l(e.phoneme.lects,(function(t,a){return n("div",{key:a,staticClass:"card"},[n("p",[n("b",[e._v(e._s(t.grapheme))]),e._v(" — "+e._s(t.name)+" ")]),t.note?n("p",{staticClass:"txt-caption txt-faded"},[e._v(e._s(t.note))]):e._e(),t.samples&&t.samples.length>0?n("div",{staticClass:"list",style:{height:24*Math.min(3,t.samples.length)+"px"}},e._l(t.samples,(function(a,r){return n("button",{key:r,on:{click:function(n){return e.play(t,r)}}},[n("span",{staticClass:"material-icons-outlined"},[e._v("play_arrow")]),n("span",{domProps:{innerHTML:e._s(e.highlight(a,t.grapheme))}})])})),0):e._e()])})):e._e()],2)},oe=[],se=(n("99af"),n("4d63"),n("25f0"),{name:"PhonemeDetails",props:["phoneme"],computed:{features:function(){var e;return null===(e=this.phoneme["features"])||void 0===e?void 0:e.reduce((function(e,t){return"".concat(e," ").concat(t)}))},root:function(){return this.$store.getters.languageRoot}},methods:{highlight:function(e,t){return e.replace(new RegExp(t,"g"),"<b>".concat(t,"</b>"))},play:function(e,t){var n=this.$refs.player;n.src="".concat(this.root).concat(e.name,"/audio/").concat(e.samples[t],".m4a"),n.play()}}}),ie=se,ce=(n("bea5"),Object(d["a"])(ie,re,oe,!1,null,"b9d00ea0",null)),ue=ce.exports,le={name:"Phonology",components:{PhoneticTable:ae,PhonemeDetails:ue,QueryList:H,QueryInput:D},data:function(){return{lectQuery:{},featureQuery:{}}},computed:{selected:function(){var e,t=null!==(e=this.$route.query.phoneme)&&void 0!==e?e:0;return t<this.phonemes.length?t:0},phonemes:function(){return this.$store.state.phonology},lects:function(){var e;return null===(e=this.$store.getters.languageInfo)||void 0===e?void 0:e.lects},vowels:function(){return this.categorize("vowel")},consonants:function(){return this.categorize("consonant")}},methods:{select:function(e){this.selected!==e&&this.$router.replace({query:{phoneme:e}})},categorize:function(e){return this.phonemes.filter((function(t){return t.features.includes(e)}))}}},pe=le,fe=(n("8da3"),Object(d["a"])(pe,$,j,!1,null,"6d55a9e8",null)),de=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),n("textarea",{ref:"result",attrs:{readonly:""},domProps:{value:e.result}})]),n("div",{attrs:{id:"options"}},[n("button",{on:{click:function(t){return e.$refs.file.click()}}},[n("span",{staticClass:"material-icons-outlined"},[e._v("publish")]),n("p",[e._v("Upload .txt file")])]),n("button",{on:{click:function(t){e.showMapping=!e.showMapping}}},[n("span",{staticClass:"material-icons-outlined"},[e._v("text_rotation_none")]),n("p",[e._v("Show mapping")])]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:e.copy}},[n("span",{staticClass:"material-icons-outlined"},[e._v("file_copy")]),n("p",[e._v("Copy to clipboard")])])]),n("MappingTable",{directives:[{name:"show",rawName:"v-show",value:e.showMapping,expression:"showMapping"}],attrs:{mapping:e.mapping}}),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:e.upload}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"link"})],1):e._e()},me=[],ve=(n("fb6a"),n("498a"),n("9911"),n("b85c")),ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},e._l(e.noones,(function(t,a){return n("p",{key:a,staticClass:"txt-caption"},[n("span",{staticClass:"txt-faded"},[e._v(e._s(t[0].replace(" ","_")))]),n("span",[e._v(e._s(t[1].replace(" ","_")))])])})),0)},_e=[],be={name:"MappingTable",props:["mapping"],computed:{noones:function(){return this.mapping.filter((function(e){return!e[0].includes("1")}))}}},ye=be,we=(n("2e31"),Object(d["a"])(ye,ge,_e,!1,null,"5c492042",null)),xe=we.exports,ke={name:"Converter",components:{MappingTable:xe},data:function(){return{selected:0,source:"",showMapping:!1}},computed:{sample:function(){return this.$store.state.sample},converters:function(){return this.$store.state.converters},mapping:function(){var e=Object.entries(this.converters[this.selected].mapping),t=e.filter((function(e){return e[0].includes("ӏ")})).map((function(e){return[e[0].replace(new RegExp("ӏ","g"),"1"),e[1]]}));return e.concat(t)},result:function(){return this.convert(this.source)}},watch:{sample:{handler:function(){this.source=this.sample},immediate:!0}},methods:{uppercase:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},replace:function(e,t,n){return e.replace(new RegExp(t,"g"),n)},convert:function(e){e=" "+this.replace(e,"\n","\n ").trim();var t,n=Object(ve["a"])(this.mapping);try{for(n.s();!(t=n.n()).done;){var a=Object(G["a"])(t.value,2),r=a[0],o=a[1];e=this.replace(e,r,o),e=this.replace(e,this.uppercase(r),this.uppercase(o))}}catch(s){n.e(s)}finally{n.f()}return this.replace(e,"\n ","\n").trim()},copy:function(){this.$refs.result.select(),document.execCommand("copy")},upload:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=this.$refs.link;n.href="data:text/plain;charset=utf-8,"+encodeURIComponent(t),n.download=e,n.click()}}},Ce=ke,$e=(n("83b0"),Object(d["a"])(Ce,he,me,!1,null,"6138e91c",null)),je=$e.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phrasebook?n("div",{staticClass:"section"},[n("div",{staticClass:"list"},[n("h3",[e._v("Categories")]),e._l(e.categories,(function(t,a){return n("button",{key:a,class:{selected:a===e.category},on:{click:function(t){e.category=a}}},[e._v(e._s(t))])}))],2),n("div",{staticClass:"list"},[n("h3",[e._v("Items")]),e._l(e.translations,(function(t,a){return n("button",{key:a,class:{selected:a===e.item},on:{click:function(t){e.item=a}}},[e._v(e._s(t))])}))],2),n("div",{staticClass:"sources"},e._l(e.lects,(function(t,a){return n("PhrasebookEntry",{key:a,staticClass:"card",attrs:{lect:t,source:e.sources[t]}})})),1)]):e._e()},Pe=[],Ee=(n("b64b"),n("5530")),Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("b",[e._v(e._s(e.lect))]),n("span",[e._v(e._s(e.source.text))]),n("span",{staticClass:"txt-faded"},[e._v(" / "),n("span",{staticClass:"txt-ipa"},[e._v(e._s(e.source.ipa))]),e._v(" / ")])])},Re=[],Le={name:"PhrasebookEntry",props:["lect","source"]},Te=Le,Ae=(n("343d"),Object(d["a"])(Te,Qe,Re,!1,null,"7f473f58",null)),Me=Ae.exports,Se={name:"Phrasebook",components:{PhrasebookEntry:Me},data:function(){var e,t;return{category:null!==(e=this.$route.query.category)&&void 0!==e?e:0,item:null!==(t=this.$route.query.item)&&void 0!==t?t:0}},computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.items[e.item].sources}))},phrasebook:function(){return this.$store.state.phrasebook},categories:function(){return Object.keys(this.phrasebook)},items:function(){return this.phrasebook[this.categories[this.category]]},translations:function(){return this.items.map((function(e){return e.translations.eng}))},sources:function(){return this.items[this.item].sources}},watch:{category:function(e){this.$router.push({query:{category:e,item:0}})},item:function(){this.$router.push({query:Object(Ee["a"])({},this.$route.query,{item:this.item})})},"$route.query":function(e){this.category=e.category,this.item=e.item}}},qe=Se,He=(n("2c5d"),Object(d["a"])(qe,Oe,Pe,!1,null,"6183f2ac",null)),Ie=He.exports,ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",[e._m(0),n("div",{staticClass:"section cards"},e._l(e.languages,(function(e,t){return n("LanguageCard",{key:t,attrs:{language:e}})})),1),e._m(1)]):e._e()},Ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h1",{attrs:{id:"header"}},[e._v("Ævzag")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section cards",attrs:{id:"footer"}},[n("div",{staticClass:"card"},[n("h3",[e._v("Contact")]),n("a",{attrs:{href:"https://twitter.com/alkaitagi"}},[e._v("Twiter")]),n("a",{attrs:{href:"https://t.me/alkaitagi"}},[e._v("Telegram")])]),n("div",{staticClass:"card"},[n("h3",[e._v("Contribute")]),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag"}},[e._v("GitHub")])])])}],Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("button",{on:{click:function(t){return e.$router.push({name:"Phonology",params:{lang:e.language}})}}},[n("h2",[e._v(e._s(e.language))]),n("span",{staticClass:"material-icons-outlined large"},[e._v("arrow_forwards")])]),n("div",{staticClass:"list"},e._l(e.lects,(function(t,a){return n("p",{key:a},[e._v(e._s(t))])})),0)])},Be=[],De=(n("07ac"),{name:"LanguageCard",props:["language"],computed:{info:function(){return this.$store.state.catalogue[this.language]},lects:function(){return Object.values(this.info.lects).sort((function(e,t){return e.localeCompare(t)}))}}}),Fe=De,Ue=(n("8493"),Object(d["a"])(Fe,Je,Be,!1,null,"fd3e4c24",null)),Ge=Ue.exports,Ke={name:"Home",components:{LanguageCard:Ge},data:function(){return{publicPath:"/Aevzag/"}},computed:{catalogue:function(){return this.$store.state.catalogue},languages:function(){return Object.keys(this.catalogue).sort((function(e,t){return e.localeCompare(t)}))}}},Ve=Ke,We=(n("e26d"),Object(d["a"])(Ve,ze,Ne,!1,null,"a59a5d7e",null)),Xe=We.exports;a["a"].use(C["a"]);var Ye=[{path:"/home",name:"Home",component:Xe},{path:"/phonology/:lang",name:"Phonology",component:de},{path:"/converter/:lang",name:"Converter",component:je},{path:"/phrasebook/:lang",name:"Phrasebook",component:Ie},{path:"*",redirect:{name:"Home"}}],Ze=new C["a"]({base:"/Aevzag/",routes:Ye}),et=Ze,tt=n("9483");Object(tt["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4160"),n("159b");var nt=n("2f62");a["a"].use(nt["a"]);var at=new nt["a"].Store({state:{root:"/Aevzag/languages/",catalogue:void 0,language:void 0,phonology:void 0,sample:void 0,converters:void 0,phrasebook:void 0},getters:{languageRoot:function(e){return e.root+e.language+"/"},languageInfo:function(e){return e.catalogue?e.catalogue[e.language]:void 0},lects:function(e,t){var n;return null===(n=t.languageInfo)||void 0===n?void 0:n.lects}},mutations:{setCatalogue:function(e,t){Object.values(t).forEach((function(e){return e.lects.sort((function(e,t){return e.localeCompare(t)}))})),e.catalogue=t},setLanguage:function(e,t){e.language=t},setPhonology:function(e,t){t.sort((function(e,t){return e.ipa.localeCompare(t.ipa)})),t.forEach((function(e,t){e.i=t})),e.phonology=t},setSample:function(e,t){e.sample=t},setConverters:function(e,t){e.converters=t},setPhrasebook:function(e,t){e.phrasebook=t}},actions:{loadCatalogue:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,a=e.commit,t.t0=a,t.next=4,n("loadJson","../catalogue.json");case 4:t.t1=t.sent,(0,t.t0)("setCatalogue",t.t1);case 6:case"end":return t.stop()}}),t)})))()},loadLanguage:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.commit,r("setLanguage",t),n.t0=r,n.next=5,a("loadJson","phonology.json");case 5:return n.t1=n.sent,(0,n.t0)("setPhonology",n.t1),n.t2=r,n.next=10,a("loadText","sample.txt");case 10:return n.t3=n.sent,(0,n.t2)("setSample",n.t3),n.t4=r,n.next=15,a("loadJson","converters.json");case 15:return n.t5=n.sent,(0,n.t4)("setConverters",n.t5),n.t6=r,n.next=20,a("loadJson","phrasebook.json");case 20:n.t7=n.sent,(0,n.t6)("setPhrasebook",n.t7);case 22:case"end":return n.stop()}}),n)})))()},loadJson:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.json()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},loadText:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.text()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:et,store:at,render:function(e){return e(k)}}).$mount("#app")},5876:function(e,t,n){"use strict";var a=n("be5e"),r=n.n(a);r.a},7794:function(e,t,n){"use strict";var a=n("e810"),r=n.n(a);r.a},"7e08":function(e,t,n){},"83b0":function(e,t,n){"use strict";var a=n("e7c3"),r=n.n(a);r.a},8493:function(e,t,n){"use strict";var a=n("9d36"),r=n.n(a);r.a},"8da3":function(e,t,n){"use strict";var a=n("2c0b"),r=n.n(a);r.a},"912a":function(e,t,n){},9620:function(e,t,n){"use strict";var a=n("f89c"),r=n.n(a);r.a},9722:function(e,t,n){"use strict";var a=n("3c51"),r=n.n(a);r.a},"9d36":function(e,t,n){},a1a3:function(e,t,n){},a6ad:function(e,t,n){"use strict";var a=n("afe5"),r=n.n(a);r.a},afe5:function(e,t,n){},be5e:function(e,t,n){},bea5:function(e,t,n){"use strict";var a=n("116a"),r=n.n(a);r.a},e26d:function(e,t,n){"use strict";var a=n("a1a3"),r=n.n(a);r.a},e7c3:function(e,t,n){},e810:function(e,t,n){},ef5a:function(e,t,n){},f89c:function(e,t,n){}});
//# sourceMappingURL=app.60a3537d.js.map