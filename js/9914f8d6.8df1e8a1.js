(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["9914f8d6"],{"0aed":function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return f});var r=n("9ab4"),u="Invariant Violation",a=Object.setPrototypeOf,i=void 0===a?function(e,t){return e.__proto__=t,e}:a,o=function(e){function t(n){void 0===n&&(n=u);var r=e.call(this,"number"===typeof n?u+": "+n+" (see https://github.com/apollographql/invariant-packages)":n)||this;return r.framesToPop=1,r.name=u,i(r,t.prototype),r}return Object(r["c"])(t,e),t}(Error);function f(e,t){if(!e)throw new o(t)}(function(e){function t(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return console.warn.apply(console,e)}function n(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return console.error.apply(console,e)}e.warn=t,e.error=n})(f||(f={}))}).call(this,n("4362"))},1331:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.regex)("integer",/^-?[0-9]*$/);t.default=u},1973:function(e,t,n){e.exports=n("5bba")},"2a12":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"maxLength",max:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e})};t.default=u},3360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"and"},function(){for(var e=this,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t.length>0&&t.reduce(function(t,n){return t&&n.apply(e,r)},!0)})};t.default=u},"3a54":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=u},"45b8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.regex)("numeric",/^[0-9]*$/);t.default=u},"46bc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"maxValue",max:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e})};t.default=u},"494d":function(e,t,n){e.exports=n("e1b7")},"522e":function(e,t,n){var r=n("f772"),u=n("ebfd").onFreeze;n("ce7e")("freeze",function(e){return function(t){return e&&r(t)?e(u(t)):t}})},5640:function(e,t,n){var r=n("1973"),u=n("494d");function a(e,t){return t||(t=e.slice(0)),u(r(e,{raw:{value:u(t)}}))}e.exports=a},"5bba":function(e,t,n){n("9d98");var r=n("584a").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},"5d75":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,r.regex)("email",u);t.default=a},"5db3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"minLength",min:e},function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e})};t.default=u},6235:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=u},6417:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"not"},function(t,n){return!(0,r.req)(t)||!e.call(this,t,n)})};t.default=u},"772d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,r.regex)("url",u);t.default=a},"78ef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=u(n("8750"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=i;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=o;var f=function(e,t,n){return"function"===typeof e?e.call(t,n):n[e]};t.ref=f;var d=function(e,t){return(0,r.default)({type:e},function(e){return!i(e)||t.test(e)})};t.regex=d},"7d9d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{attrs:{padding:""}},[e.found?e._e():n("notFound",{attrs:{type:"Gender Type"}}),e.found?n("scroll",[n("div",{staticClass:"q-pa-lg"},[n("q-field",{class:e.margin,attrs:{label:"Label",helper:"required",error:e.$v.genderType.label.$error,"error-label":"Required"}},[n("q-input",{directives:[{name:"delayfocus",rawName:"v-delayfocus"}],attrs:{type:"text"},on:{blur:e.$v.genderType.label.$touch},model:{value:e.genderType.label,callback:function(t){e.$set(e.genderType,"label","string"===typeof t?t.trim():t)},expression:"genderType.label"}})],1),n("q-field",{class:e.margin,attrs:{label:"Disabled"}},[n("q-checkbox",{model:{value:e.genderType.disabled,callback:function(t){e.$set(e.genderType,"disabled",t)},expression:"genderType.disabled"}})],1)],1)]):e._e()],1)},u=[];r._withStripped=!0;n("a481");var a=n("3156"),i=n.n(a),o=(n("7f7f"),n("b5ae")),f=n("d04f"),d=n("e8b8"),l=n("f1c6"),c=n("2f62"),s={name:"genderTypeEdit",components:{notFound:d["a"]},data:function(){return{found:!0,genderType:{label:null,disabled:!1},margin:"q-mb-md"}},validations:{genderType:{label:{required:o["required"]}}},created:function(){this.updateActions()},updated:function(){this.updateActions()},beforeDestroy:function(){this.pageMeta()},computed:{canNotSave:function(){return this.$v.$invalid||this.saving},isNew:function(){return"new_gender_type"===this.$route.name},itemId:function(){return this.genderType.id},title:function(){return this.genderType.name}},watch:{"genderType.label":function(){this.updateHeader()},canNotSave:function(){this.updateActions()},isNew:function(){this.updateActions()}},methods:i()({updateHeader:function(){this.pageMeta({title:"".concat(this.isNew?"New":"Edit"," Gender Type"),subtitle:this.genderType.label})},updateActions:function(){this.headerActions([{icon:"fa fa-check",handler:this.save,disabled:this.canNotSave}])},save:function(){var e=this;this.saving=!0,this.$apollo.mutate({mutation:this.isNew?f["b"]:f["d"],variables:{id:this.genderType.id,label:this.genderType.label,disabled:this.genderType.disabled}}).then(function(t){e.saving=!1,e.$q.notify({message:"Gender type sucessfully saved.",type:"positive"}),e.$router.replace("/gender_types/")}).catch(function(t){console.log(t),e.saving=!1})}},Object(c["b"])({pageMeta:"app/setPageMeta",headerActions:"app/setHeaderActions"})),apollo:{genderType:{query:f["c"],variables:function(){return{id:this.$route.params.id}},skip:function(){return!this.$route.params.id},update:function(e){e.genderType||(this.found=!1);var t=Object(l["a"])(f["c"],e).genderType;return this.saving=!1,t}}}},p=s,b=n("2877"),y=Object(b["a"])(p,r,u,!1,null,null,null);y.options.__file="GenderTypeEdit.vue";t["default"]=y.exports},8750:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"spa",ONESIGNAL_APP_ID:void 0,ONESIGNAL_SAFARI_WEB_ID:void 0,MIZZEN_NATIVE_APP_TARGET:void 0,VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).BUILD?n("cb69").withParams:n("0234").withParams,u=r;t.default=u},"91d3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var n="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(a)})};t.default=u;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"9d98":function(e,t,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperties:n("7e90")})},aa82:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},function(t,n){return!(0,r.ref)(e,this,n)||(0,r.req)(t)})};t.default=u},b5ae:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return j.default}}),t.helpers=void 0;var r=T(n("6235")),u=T(n("3a54")),a=T(n("45b8")),i=T(n("ec11")),o=T(n("5d75")),f=T(n("c99d")),d=T(n("91d3")),l=T(n("2a12")),c=T(n("5db3")),s=T(n("d4f4")),p=T(n("aa82")),b=T(n("e652")),y=T(n("b6cb")),v=T(n("772d")),m=T(n("d294")),g=T(n("3360")),h=T(n("6417")),_=T(n("eb66")),O=T(n("46bc")),P=T(n("1331")),j=T(n("c301")),w=M(n("78ef"));function M(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}function T(e){return e&&e.__esModule?e:{default:e}}t.helpers=w},b6cb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"sameAs",eq:e},function(t,n){return t===(0,r.ref)(e,this,n)})};t.default=u},c301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=u},c99d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.withParams)({type:"ipAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)});t.default=u;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,n){"use strict";(function(e){function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},u=function(e,t){return"object"===n(e)&&void 0!==t?t:e(function(){})},a=r.vuelidate?r.vuelidate.withParams:u;t.withParams=a}).call(this,n("c8ba"))},d04f:function(e,t,n){"use strict";n.d(t,"a",function(){return p}),n.d(t,"c",function(){return b}),n.d(t,"d",function(){return y}),n.d(t,"b",function(){return v});var r=n("5640"),u=n.n(r),a=n("9530"),i=n.n(a);function o(){var e=u()(["\n  mutation CreateGenderTypeMutation(\n    $label: String!\n    $disabled: Boolean\n  ) {\n    createGenderType(\n      data: {\n        label: $label,\n        disabled: $disabled\n      }\n    )\n    {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return o=function(){return e},e}function f(){var e=u()(["\n  mutation UpdateGenderTypeMutation(\n    $id: ID!\n    $label: String!,\n    $disabled: Boolean\n  ) {\n    updateGenderType(\n      where: {id: $id}\n      data: {\n        label: $label,\n        disabled: $disabled\n      }\n    )\n    {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return f=function(){return e},e}function d(){var e=u()(["\n  query GenderTypeQuery($id: ID!) {\n    genderType(where: {\n      id: $id\n    }) {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return d=function(){return e},e}function l(){var e=u()(["\n  query AllGenderTypesQuery {\n    genderTypes {\n      ...GenderTypeFragment\n    }\n  }\n  ","\n"]);return l=function(){return e},e}function c(){var e=u()(["\n  fragment GenderTypeFragment on GenderType {\n    id\n    label\n    disabled\n  }\n"]);return c=function(){return e},e}var s=i()(c()),p=i()(l(),s),b=i()(d(),s),y=i()(f(),s),v=i()(o(),s)},d294:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.withParams)({type:"or"},function(){for(var e=this,n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];return t.length>0&&t.reduce(function(t,n){return t||n.apply(e,r)},!1)})};t.default=u},d4f4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=(0,r.withParams)({type:"required"},r.req);t.default=u},e1b7:function(e,t,n){n("522e"),e.exports=n("584a").Object.freeze},e652:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},function(t,n){return!!(0,r.ref)(e,this,n)||(0,r.req)(t)})};t.default=u},e8b8:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{"enter-active-class":"animated fadeIn",appear:""}},[n("q-alert",{staticClass:"q-mb-sm",attrs:{color:"negative",icon:"error",appear:""}},[e._v("\n    "+e._s(e.type)+" not found\n  ")])],1)},u=[];r._withStripped=!0;var a={name:"notFound",props:["type"]},i=a,o=n("2877"),f=Object(o["a"])(i,r,u,!1,null,null,null);f.options.__file="notFound.vue";t["a"]=f.exports},eb66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e){return(0,r.withParams)({type:"minValue",min:e},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e})};t.default=u},ec11:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("78ef"),u=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+e<=+n&&+t>=+n})};t.default=u},f1c6:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("4518");n("0aed");function u(e,t,n,u,i,o){void 0===i&&(i={}),void 0===o&&(o={});var f=Object(r["m"])(t),d=Object(r["j"])(t),l=Object(r["g"])(d),c=o.resultMapper,s=o.fragmentMatcher||function(){return!0},p={fragmentMap:l,contextValue:u,variableValues:i,resultMapper:c,resolver:e,fragmentMatcher:s};return a(f.selectionSet,n,p)}function a(e,t,n){var u=n.fragmentMap,o=n.contextValue,f=n.variableValues,l={};return e.selections.forEach(function(e){if(!f||Object(r["G"])(e,f))if(Object(r["u"])(e)){var c=i(e,t,n),s=Object(r["F"])(e);void 0!==c&&(void 0===l[s]?l[s]=c:d(l[s],c))}else{var p=void 0;if(Object(r["w"])(e))p=e;else if(p=u[e.name.value],!p)throw new Error("No fragment named "+e.name.value);var b=p.typeCondition.name.value;if(n.fragmentMatcher(t,b,o)){var y=a(p.selectionSet,t,n);d(l,y)}}}),n.resultMapper?n.resultMapper(l,t):l}function i(e,t,n){var u=n.variableValues,i=n.contextValue,f=n.resolver,d=e.name.value,l=Object(r["b"])(e,u),c={isLeaf:!e.selectionSet,resultKey:Object(r["F"])(e),directives:Object(r["i"])(e,u),field:e},s=f(d,t,l,i,c);return e.selectionSet?null==s?s:Array.isArray(s)?o(e,s,n):a(e.selectionSet,s,n):s}function o(e,t,n){return t.map(function(t){return null===t?null:Array.isArray(t)?o(e,t,n):a(e.selectionSet,t,n)})}var f=Object.prototype.hasOwnProperty;function d(e,t){null!==t&&"object"===typeof t&&Object.keys(t).forEach(function(n){var r=t[n];f.call(e,n)?d(e[n],r):e[n]=r})}Object.prototype.hasOwnProperty;function l(e,t,n){void 0===n&&(n={});var r=function(e,t,n,r,u){return t[u.resultKey]};return Array.isArray(t)?t.map(function(t){return u(r,e,t,null,n)}):u(r,e,t,null,n)}function c(e){this.message=e,this.stack=""}c.prototype=Error.prototype}}]);