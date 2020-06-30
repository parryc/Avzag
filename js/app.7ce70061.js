(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Aevzag/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"11cd":function(e,t,n){},"18b1":function(e,t,n){"use strict";var a=n("d178"),r=n.n(a);r.a},1937:function(e,t,n){"use strict";var a=n("6990"),r=n.n(a);r.a},"1cdb":function(e,t,n){"use strict";var a=n("919c"),r=n.n(a);r.a},"3bdd":function(e,t,n){},4528:function(e,t,n){},"53a4":function(e,t,n){"use strict";var a=n("3bdd"),r=n.n(a);r.a},"53c2":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},["Home"!==e.$route.name?n("Header"):e._e(),n("router-view")],1)},s=[],o=(n("b0c0"),n("96cf"),n("1da1")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("div",{staticClass:"section"},[n("div",{staticClass:"panel-horizontal",attrs:{id:"banner"}},[n("img",{attrs:{src:e.flag,draggable:"false",alt:"flag"}}),n("button",{staticClass:"round",on:{click:function(t){return e.navigate("Home")}}},[n("span",{staticClass:"material-icons-outlined-large"},[e._v("arrow_back")])]),n("h2",[e._v(e._s(e.$store.state.language))])]),n("div",{staticClass:"panel-horizontal",attrs:{id:"menu"}},e._l(e.menus,(function(t,a){return n("button",{key:a,staticClass:"round",class:{selected:e.$route.name===t.title},on:{click:function(n){return e.navigate(t.title)}}},[n("span",{staticClass:"material-icons-outlined-large"},[e._v(e._s(t.icon))]),n("p",[e._v(e._s(t.title))])])})),0)])])},c=[],u={name:"Header",data:function(){return{menus:[{title:"Phonology",icon:"audiotrack"},{title:"Converter",icon:"subject"},{title:"Phrasebook",icon:"book"}]}},computed:{flag:function(){return this.$store.getters.languageRoot+"flag.png"}},methods:{navigate:function(e){this.$route.name!==e&&this.$router.push({name:e,params:{lang:this.$route.params.lang}})}}},l=u,p=(n("b07d"),n("2877")),f=Object(p["a"])(l,i,c,!1,null,"63aa7270",null),d=f.exports,h={name:"App",components:{Header:d},data:function(){return{language:void 0}},watch:{"$route.params.lang":{handler:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.$route.params.lang,n&&n!==e.$store.state.language&&e.$store.dispatch("loadLanguage",n);case 2:case"end":return t.stop()}}),t)})))()},immediate:!0},"$route.path":{handler:function(){this.$route.name&&(localStorage.url=this.$route.path)}}},created:function(){this.$store.dispatch("loadCatalogue"),this.$route.name&&"Home"!==this.$route.name||this.$router.push(localStorage.url&&localStorage.url!==this.$route.path?{path:localStorage.url}:{name:"Home"})}},m=h,v=(n("5c0b"),Object(p["a"])(m,r,s,!1,null,null,null)),g=v.exports,b=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phonemes&&e.lects?n("div",{staticClass:"section"},[n("div",{staticClass:"panel-sparse"},[n("QueryList",{attrs:{tags:e.lects},on:{query:function(t){e.lectQuery=t}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.vowels,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("PhoneticTable",{attrs:{selected:e.selected,phonemes:e.consonants,featureQuery:e.featureQuery,lectQuery:e.lectQuery},on:{phoneme:function(t){return e.select(t)}}}),n("QueryInput",{on:{query:function(t){e.featureQuery=t}}})],1),n("PhonemeDetails",{attrs:{phoneme:e.phonemes[e.selected]}})],1):e._e()},y=[],x=(n("4de4"),n("caad"),n("ac1f"),n("2532"),n("5319"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-horizontal-dense",attrs:{id:"root"}},[n("button",{staticClass:"small round",on:{click:e.reset}},[n("span",{staticClass:"material-icons-outlined"},[e._v("clear")])]),e._l(e.tags,(function(t,a){return n("QueryParam",{key:a,attrs:{text:t},model:{value:e.values[a],callback:function(t){e.$set(e.values,a,t)},expression:"values[i]"}})}))],2)}),w=[],C=(n("cb29"),n("13d5"),n("d3b7"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"small round",class:{in:1===e.value,ex:-1===e.value},on:{click:e.update}},[n("p",[e._v(e._s(e.text))])])}),$=[],k={name:"QueryParam",props:["text","value"],model:{prop:"value",event:"update"},methods:{update:function(){this.$emit("update",(this.value+2)%3-1)}}},j=k,O=(n("d9f3"),Object(p["a"])(j,C,$,!1,null,"33573bf8",null)),P=O.exports,E={name:"QueryList",components:{QueryParam:P},props:["tags"],data:function(){return{values:[]}},computed:{result:function(){var e=this;return this.tags.reduce((function(t,n,a){return e.values[a]&&(t[n]=e.values[a]>0),t}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0},tags:{handler:function(){this.reset()},immediate:!0}},methods:{reset:function(){this.values=new Array(this.tags.length).fill(0)}}},Q=E,R=(n("8db8"),Object(p["a"])(Q,x,w,!1,null,"250b8f45",null)),A=R.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{placeholder:"search for phonetic features, '-' to exclude",type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}})])},z=[],L=(n("1276"),{name:"QueryInput",data:function(){return{input:""}},computed:{result:function(){return this.input.toLowerCase().split(" ").filter((function(e){return e})).reduce((function(e,t){return"-"===t[0]?e[t.substr(1)]=!1:e[t]=!0,e}),{})}},watch:{result:{handler:function(){this.$emit("query",this.result)},immediate:!0}}}),M=L,S=(n("ccfa"),Object(p["a"])(M,T,z,!1,null,"06cce663",null)),q=S.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{narrow:e.phonemes.length<=12},attrs:{id:"root",dense:""}},e._l(e.phonemes,(function(t,a){return n("PhoneticItem",{key:a,attrs:{selected:e.selected==t.i,faded:!e.fitting[a],ipa:t.ipa,str:e.graphemes[a]},nativeOn:{click:function(n){return e.$emit("phoneme",t.i)}}})})),1)},I=[],N=(n("d81d"),n("4fad"),n("b64b"),n("3835")),J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:{"text-faded":e.faded,selected:e.selected}},[n("b",[e._v(e._s(e.str))]),n("span",{staticClass:"text-ipa"},[e._v(e._s(e.ipa))])])},U=[],D={name:"PhoneticItem",props:["selected","faded","ipa","str"]},F=D,B=(n("ce82"),Object(p["a"])(F,J,U,!1,null,"ee53aa78",null)),G=B.exports,K={name:"PhoneticTable",components:{PhoneticItem:G},props:["selected","lectQuery","featureQuery","phonemes"],methods:{pass:function(e,t){for(var n=0,a=Object.entries(t);n<a.length;n++){var r=Object(N["a"])(a[n],2),s=r[0],o=r[1];if(o!==e.includes(s))return!1}return!0}},computed:{fitting:function(){var e=this;return this.phonemes.map((function(t){return e.pass(Object.keys(t.uses),e.lectQuery)&&e.pass(t.features,e.featureQuery)}))},singleLect:function(){for(var e=[],t=0,n=Object.entries(this.lectQuery);t<n.length;t++){var a=Object(N["a"])(n[t],2),r=a[0],s=a[1];s&&e.push(r)}return 1===e.length?e[0]:void 0},graphemes:function(){var e=this;return this.phonemes.map((function(t){var n;return null===(n=t.uses[e.singleLect])||void 0===n?void 0:n.grapheme}))}}},V=K,W=(n("53a4"),Object(p["a"])(V,H,I,!1,null,"16486abc",null)),X=W.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel",attrs:{id:"root"}},[n("div",{staticClass:"card panel-dense"},[n("h2",[n("span",{staticClass:"text-faded"},[e._v("/ ")]),n("span",{staticClass:"text-ipa"},[e._v(e._s(e.phoneme.ipa))]),n("span",{staticClass:"text-faded"},[e._v(" /")])]),e.features?n("p",{staticClass:"text-caption text-faded text-spaced"},[e._v(e._s(e.features))]):e._e()]),n("audio",{ref:"player"}),e._l(e.lects,(function(t,a){return n("PhonemeUse",{key:a,attrs:{lect:t,use:e.phoneme.uses[t]},on:{play:function(n){return e.play(t,n)}}})}))],2)},Z=[],ee=(n("99af"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-dense card"},[n("p",[n("b",[e._v(e._s(e.use.grapheme))]),e._v(" — "+e._s(e.lect)+" ")]),e.use.note?n("p",{staticClass:"text-caption text-faded"},[e._v(e._s(e.use.note))]):e._e(),e.use.samples&&e.use.samples.length>0?n("div",{staticClass:"list",style:{height:24*Math.min(3,e.use.samples.length)+"px"}},e._l(e.use.samples,(function(t,a){return n("button",{key:a,on:{click:function(n){return e.$emit("play",t)}}},[n("span",{staticClass:"material-icons-outlined"},[e._v("play_arrow")]),n("span",{domProps:{innerHTML:e._s(e.highlight(t,e.use.grapheme))}})])})),0):e._e()])}),te=[],ne=(n("4d63"),n("25f0"),{name:"PhonemeUse",props:["lect","use"],methods:{highlight:function(e,t){return e.replace(new RegExp(t,"g"),"<b>".concat(t,"</b>"))}}}),ae=ne,re=(n("1937"),Object(p["a"])(ae,ee,te,!1,null,"5f13aae6",null)),se=re.exports,oe={name:"PhonemeDetails",components:{PhonemeUse:se},props:["phoneme"],computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.phoneme.uses}))},features:function(){var e;return null===(e=this.phoneme["features"])||void 0===e?void 0:e.reduce((function(e,t){return"".concat(e," ").concat(t)}))},root:function(){return this.$store.getters.languageRoot}},methods:{play:function(e,t){var n=this.$refs.player;n.src="".concat(this.root).concat(e,"/audio/").concat(t,".mp3"),n.play()}}},ie=oe,ce=Object(p["a"])(ie,Y,Z,!1,null,null,null),ue=ce.exports,le={name:"Phonology",components:{PhoneticTable:X,PhonemeDetails:ue,QueryList:A,QueryInput:q},data:function(){return{lectQuery:{},featureQuery:{}}},computed:{selected:function(){var e,t=null!==(e=this.$route.query.phoneme)&&void 0!==e?e:0;return t<this.phonemes.length?t:0},phonemes:function(){return this.$store.state.phonology},lects:function(){var e;return null===(e=this.$store.getters.languageInfo)||void 0===e?void 0:e.lects},vowels:function(){return this.categorize("vowel")},consonants:function(){return this.categorize("consonant")}},methods:{select:function(e){this.selected!==e&&this.$router.replace({query:{phoneme:e}})},categorize:function(e){return this.phonemes.filter((function(t){return t.features.includes(e)}))}}},pe=le,fe=(n("910a"),Object(p["a"])(pe,_,y,!1,null,"070be75b",null)),de=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.converters?n("div",{staticClass:"section"},[n("div",{staticClass:"split"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.source,expression:"source"}],domProps:{value:e.source},on:{input:function(t){t.target.composing||(e.source=t.target.value)}}}),n("textarea",{ref:"result",attrs:{readonly:""},domProps:{value:e.result}})]),n("div",{attrs:{id:"options"}},[n("button",{on:{click:function(t){return e.$refs.file.click()}}},[n("span",{staticClass:"material-icons-outlined"},[e._v("publish")]),n("p",[e._v("Upload .txt file")])]),n("button",{on:{click:function(t){e.showMapping=!e.showMapping}}},[n("span",{staticClass:"material-icons-outlined"},[e._v("text_rotation_none")]),n("p",[e._v("Show mapping")])]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selected=t.target.multiple?n:n[0]}}},e._l(e.converters,(function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v(e._s(t.name))])})),0),n("button",{on:{click:e.copy}},[n("span",{staticClass:"material-icons-outlined"},[e._v("file_copy")]),n("p",[e._v("Copy to clipboard")])])]),n("MappingTable",{directives:[{name:"show",rawName:"v-show",value:e.showMapping,expression:"showMapping"}],attrs:{mapping:e.mapping}}),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"file",attrs:{type:"file"},on:{change:e.upload}}),n("a",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"link"})],1):e._e()},me=[],ve=(n("fb6a"),n("498a"),n("9911"),n("b85c")),ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"root"}},e._l(e.noones,(function(t,a){return n("p",{key:a,staticClass:"text-caption"},[n("span",{staticClass:"text-faded"},[e._v(e._s(t[0].replace(" ","_")))]),n("span",[e._v(e._s(t[1].replace(" ","_")))])])})),0)},be=[],_e={name:"MappingTable",props:["mapping"],computed:{noones:function(){return this.mapping.filter((function(e){return!e[0].includes("1")}))}}},ye=_e,xe=(n("f584"),Object(p["a"])(ye,ge,be,!1,null,"1d2efe06",null)),we=xe.exports,Ce={name:"Converter",components:{MappingTable:we},data:function(){return{selected:0,source:"",showMapping:!1}},computed:{sample:function(){return this.$store.state.sample},converters:function(){return this.$store.state.converters},mapping:function(){var e=Object.entries(this.converters[this.selected].mapping),t=e.filter((function(e){return e[0].includes("ӏ")})).map((function(e){return[e[0].replace(new RegExp("ӏ","g"),"1"),e[1]]}));return e.concat(t)},result:function(){return this.convert(this.source)}},watch:{sample:{handler:function(){this.source=this.sample},immediate:!0}},methods:{uppercase:function(e){var t="",n=0;return" "==e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)},replace:function(e,t,n){return e.replace(new RegExp(t,"g"),n)},convert:function(e){e=" "+this.replace(e,"\n","\n ").trim();var t,n=Object(ve["a"])(this.mapping);try{for(n.s();!(t=n.n()).done;){var a=Object(N["a"])(t.value,2),r=a[0],s=a[1];e=this.replace(e,r,s),e=this.replace(e,this.uppercase(r),this.uppercase(s))}}catch(o){n.e(o)}finally{n.f()}return this.replace(e,"\n ","\n").trim()},copy:function(){this.$refs.result.select(),document.execCommand("copy")},upload:function(e){var t=this,n=new FileReader;n.onload=function(n){return t.download(e.target.files[0].name,t.convert(n.target.result))},n.readAsText(e.target.files[0])},download:function(e,t){var n=this.$refs.link;n.href="data:text/plain;charset=utf-8,"+encodeURIComponent(t),n.download=e,n.click()}}},$e=Ce,ke=(n("724d"),Object(p["a"])($e,he,me,!1,null,"1e540fe2",null)),je=ke.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.phrasebook?n("div",{staticClass:"section"},[n("div",{staticClass:"panel",attrs:{id:"translations"}},[n("h3",[e._v("Category")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.category,expression:"category"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.category=t.target.multiple?n:n[0]}}},e._l(e.categories,(function(t,a){return n("option",{key:a,domProps:{value:a}},[e._v(e._s(t))])})),0),n("h3",[e._v("Phrases")]),n("div",{staticClass:"list"},e._l(e.translations,(function(t,a){return n("button",{key:a,class:{selected:a===e.phrase},on:{click:function(t){e.phrase=a}}},[e._v(e._s(t))])})),0)]),n("div",{staticClass:"panel"},e._l(e.lects,(function(t,a){return n("PhrasebookEntry",{key:a,staticClass:"card",attrs:{lect:t,source:e.sources[t]}})})),1)]):e._e()},Pe=[],Ee=n("5530"),Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("b",[e._v(e._s(e.lect))]),n("span",[e._v(e._s(e.source.text))]),n("span",{staticClass:"text-faded text-ipa"},[e._v("/"+e._s(e.source.ipa)+"/")])])},Re=[],Ae={name:"PhrasebookEntry",props:["lect","source"]},Te=Ae,ze=(n("7718"),Object(p["a"])(Te,Qe,Re,!1,null,"25ab49fa",null)),Le=ze.exports,Me={name:"Phrasebook",components:{PhrasebookEntry:Le},data:function(){var e,t;return{category:null!==(e=this.$route.query.category)&&void 0!==e?e:0,phrase:null!==(t=this.$route.query.phrase)&&void 0!==t?t:0}},computed:{lects:function(){var e=this;return this.$store.getters.lects.filter((function(t){return t in e.sources}))},phrasebook:function(){return this.$store.state.phrasebook},categories:function(){return Object.keys(this.phrasebook)},phrases:function(){return this.phrasebook[this.categories[this.category]]},translations:function(){return this.phrases.map((function(e){return e.translations.eng}))},sources:function(){return this.phrases[this.phrase].sources}},watch:{category:function(e){this.$router.push({query:{category:e,phrase:0}})},item:function(){this.$router.push({query:Object(Ee["a"])({},this.$route.query,{phrase:this.phrase})})},"$route.query":function(e){this.category=e.category,this.phrase=e.phrase}}},Se=Me,qe=(n("5b08"),Object(p["a"])(Se,Oe,Pe,!1,null,"609d8987",null)),He=qe.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.catalogue?n("div",[e._m(0),n("div",{staticClass:"section",attrs:{id:"languages"}},e._l(e.languages,(function(e,t){return n("LanguageCard",{key:t,attrs:{language:e}})})),1),e._m(1)]):e._e()},Ne=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h1",{attrs:{id:"header"}},[e._v("Ævzag")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section panel-horizontal",attrs:{id:"footer"}},[n("div",{staticClass:"panel-dense"},[n("h3",[e._v("Contact")]),n("a",{attrs:{href:"https://twitter.com/alkaitagi"}},[e._v("Twitter")]),n("a",{attrs:{href:"https://t.me/alkaitagi"}},[e._v("Telegram")])]),n("div",{staticClass:"panel-dense"},[n("h3",[e._v("Contribute")]),n("a",{attrs:{href:"https://github.com/alkaitagi/Aevzag"}},[e._v("GitHub")])])])}],Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card panel-dense",on:{click:function(t){return e.$router.push({name:"Phonology",params:{lang:e.language}})}}},[n("img",{attrs:{src:e.flag,draggable:"false",alt:"flag"}}),n("h2",[e._v(e._s(e.language))]),n("div",{staticClass:"list"},e._l(e.lects,(function(t,a){return n("p",{key:a},[e._v(e._s(t))])})),0)])},Ue=[],De=(n("07ac"),{name:"LanguageCard",props:["language"],computed:{flag:function(){return this.$store.state.root+this.language+"/flag.png"},info:function(){return this.$store.state.catalogue[this.language]},lects:function(){return Object.values(this.info.lects).sort((function(e,t){return e.localeCompare(t)}))}}}),Fe=De,Be=(n("1cdb"),Object(p["a"])(Fe,Je,Ue,!1,null,"c00b0a9a",null)),Ge=Be.exports,Ke={name:"Home",components:{LanguageCard:Ge},data:function(){return{publicPath:"/Aevzag/"}},computed:{catalogue:function(){return this.$store.state.catalogue},languages:function(){return Object.keys(this.catalogue).sort((function(e,t){return e.localeCompare(t)}))}}},Ve=Ke,We=(n("18b1"),Object(p["a"])(Ve,Ie,Ne,!1,null,"a5a29d0e",null)),Xe=We.exports;a["a"].use(b["a"]);var Ye=[{path:"/home",name:"Home",component:Xe},{path:"/phonology/:lang",name:"Phonology",component:de},{path:"/converter/:lang",name:"Converter",component:je},{path:"/phrasebook/:lang",name:"Phrasebook",component:He},{path:"*",redirect:{name:"Home"}}],Ze=new b["a"]({base:"/Aevzag/",routes:Ye}),et=Ze,tt=n("9483");Object(tt["a"])("".concat("/Aevzag/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("4160"),n("159b");var nt=n("2f62");a["a"].use(nt["a"]);var at=new nt["a"].Store({state:{root:"/Aevzag/languages/",catalogue:void 0,language:void 0,phonology:void 0,sample:void 0,converters:void 0,phrasebook:void 0},getters:{languageRoot:function(e){return e.root+e.language+"/"},languageInfo:function(e){return e.catalogue?e.catalogue[e.language]:void 0},lects:function(e,t){var n;return null===(n=t.languageInfo)||void 0===n?void 0:n.lects}},mutations:{setCatalogue:function(e,t){Object.values(t).forEach((function(e){return e.lects.sort((function(e,t){return e.localeCompare(t)}))})),e.catalogue=t},setLanguage:function(e,t){e.language=t},setPhonology:function(e,t){t.sort((function(e,t){return e.ipa.localeCompare(t.ipa)})),t.forEach((function(e,t){e.i=t})),e.phonology=t},setSample:function(e,t){e.sample=t},setConverters:function(e,t){e.converters=t},setPhrasebook:function(e,t){e.phrasebook=t}},actions:{loadCatalogue:function(e){return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.dispatch,a=e.commit,t.t0=a,t.next=4,n("loadJson","../catalogue.json");case 4:t.t1=t.sent,(0,t.t0)("setCatalogue",t.t1);case 6:case"end":return t.stop()}}),t)})))()},loadLanguage:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.dispatch,r=e.commit,r("setLanguage",t),n.t0=r,n.next=5,a("loadJson","phonology.json");case 5:return n.t1=n.sent,(0,n.t0)("setPhonology",n.t1),n.t2=r,n.next=10,a("loadText","sample.txt");case 10:return n.t3=n.sent,(0,n.t2)("setSample",n.t3),n.t4=r,n.next=15,a("loadJson","converters.json");case 15:return n.t5=n.sent,(0,n.t4)("setConverters",n.t5),n.t6=r,n.next=20,a("loadJson","phrasebook.json");case 20:n.t7=n.sent,(0,n.t6)("setPhrasebook",n.t7);case 22:case"end":return n.stop()}}),n)})))()},loadJson:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.json()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},loadText:function(e,t){return Object(o["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getters,n.next=3,fetch(a.languageRoot+t).then((function(e){return e.text()}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:et,store:at,render:function(e){return e(g)}}).$mount("#app")},"5b08":function(e,t,n){"use strict";var a=n("fd66"),r=n.n(a);r.a},"5c0b":function(e,t,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},6990:function(e,t,n){},"724d":function(e,t,n){"use strict";var a=n("77c7"),r=n.n(a);r.a},7718:function(e,t,n){"use strict";var a=n("9980"),r=n.n(a);r.a},"77c7":function(e,t,n){},"8db8":function(e,t,n){"use strict";var a=n("53c2"),r=n.n(a);r.a},"910a":function(e,t,n){"use strict";var a=n("c0a2"),r=n.n(a);r.a},"919c":function(e,t,n){},"957b":function(e,t,n){},9980:function(e,t,n){},"9c0c":function(e,t,n){},b07d:function(e,t,n){"use strict";var a=n("957b"),r=n.n(a);r.a},b357:function(e,t,n){},c0a2:function(e,t,n){},ccfa:function(e,t,n){"use strict";var a=n("11cd"),r=n.n(a);r.a},ce82:function(e,t,n){"use strict";var a=n("4528"),r=n.n(a);r.a},d178:function(e,t,n){},d9f3:function(e,t,n){"use strict";var a=n("b357"),r=n.n(a);r.a},ea90:function(e,t,n){},f584:function(e,t,n){"use strict";var a=n("ea90"),r=n.n(a);r.a},fd66:function(e,t,n){}});
//# sourceMappingURL=app.7ce70061.js.map