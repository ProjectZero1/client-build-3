(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c6170ce6"],{"5ea6":function(e,t,r){"use strict";var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-card",{staticClass:"text-dark resource-carousel-card",attrs:{flat:"",inline:""},nativeOn:{mouseover:function(t){e.hoverState=!0},mouseleave:function(t){e.hoverState=!1}}},[r("q-card-media",{staticClass:"carousel-preview"},[e.value.image?[e.isThumb?r("aws-image",{staticClass:"responsive",attrs:{src:e.value.image,default:"https://images.pexels.com/photos/1068989/pexels-photo-1068989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","image-width":e.imageWidth,tag:e.imageTag}}):r("aws-image",{staticClass:"responsive",attrs:{src:e.value.image,default:"https://images.pexels.com/photos/1068989/pexels-photo-1068989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}})]:e._e()],2),e.hoverState?e._e():r("q-card-main",[r("div",{staticClass:"resource-title"},[e._v(e._s(e.value.title))]),e.value.resourceCategory?r("div",{staticClass:"resource-subtitle"},[e._v(e._s(e.value.resourceCategory.name))]):e._e()]),r("transition",{attrs:{name:"expand-resource-info"}},[e.hoverState?r("div",{staticClass:"expanded-resource-info"},[r("div",{staticClass:"resource-title"},[e._v(e._s(e.value.title))]),r("div",{staticClass:"resource-subtitle"},[e._v(e._s(e.value.resourceCategory.name))]),r("div",{staticClass:"q-mt-sm"},[r("p",{staticClass:"resource-intro",domProps:{innerHTML:e._s(e.value.introduction)},on:{click:function(t){return t.preventDefault(),e.parseLink(t)}}})])]):e._e()])],1)},n=[];i._withStripped=!0;var s=r("858b"),o=r("2bb2"),a=r("4eef"),l=r("5e20"),c=r("fcab"),u=r("d1ac"),d={name:"RenderResourceThumbnail",mixins:[s["a"],o["a"]],components:{RenderResourceList:a["a"],RenderResourceChildren:l["a"],awsImage:c["a"],scheduleResource:u["a"]},computed:{isThumb:function(){return this.bigThumbnail||this.thumbnail},imageTag:function(){return this.bigThumbnail?"bigthumb":this.thumbnail?"thumb":void 0},imageWidth:function(){return this.bigThumbnail?1e3:this.thumbnail?300:void 0}},methods:{sendMessage:function(e){console.log("Sendmessage "+e+" cicked")}},data:function(){return{schedulerOpened:!1,hoverState:!1}},props:{value:Object,enableLink:Boolean,compact:Boolean,hideActions:Boolean,thumbnail:Boolean,bigThumbnail:Boolean}},h=d,g=r("2877"),f=Object(g["a"])(h,i,n,!1,null,null,null);f.options.__file="renderResourceThumbnail.vue";t["a"]=f.exports},"620e":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",[r("scroll",{directives:[{name:"show",rawName:"v-show",value:!e.$apollo.queries.resources.loading||e.loaded,expression:"!$apollo.queries.resources.loading || loaded"}],attrs:{id:"scroll-section"}},[r("q-infinite-scroll",{ref:"scroller",attrs:{handler:e.loadMore}},[e.resources&&e.resources.length?["featured"!==this.$route.params.id&&e.featuredResources.length?[r("div",{staticClass:"q-subheading text-weight-bold q-mt-md q-ml-md"},[e._v("Featured")]),e._l(e.featuredResources,function(t){return r("div",{key:"featured-"+t.id,staticStyle:{"overflow-y":"auto","overflow-x":"hidden",padding:"8px 0 0"},on:{click:function(t){e.saveScroll(t)}}},[r("render-resource-thumbnail",{staticClass:"q-ml-xs q-mr-xs cursor-pointer compact q-pa-lg",attrs:{value:t,"enable-link":"",compact:!0,"big-thumbnail":""},nativeOn:{click:function(r){e.loadDetail(r,"/curricula/"+t.id)}}})],1)})]:e._e(),e.recentResources.length?[r("div",{staticClass:"q-subheading text-weight-bold q-mt-md q-ml-md"},[e._v("New Additions")]),e._l(e.recentResources,function(t){return r("div",{key:"newaddition-"+t.id,staticStyle:{"overflow-y":"auto","overflow-x":"hidden",padding:"8px 0 0"},on:{click:function(t){e.saveScroll(t)}}},[r("render-resource-thumbnail",{staticClass:"q-ml-xs q-mr-xs cursor-pointer compact q-pa-lg",attrs:{value:t,"enable-link":"",compact:!0,"big-thumbnail":""},nativeOn:{click:function(r){e.loadDetail(r,"/curricula/"+t.id)}}})],1)})]:e._e(),r("div",{staticClass:"q-subheading text-weight-bold q-mt-md q-ml-md"},[e._v("Content")]),e._l(e.resources,function(t){return r("div",{key:t.id,staticStyle:{"overflow-y":"auto","overflow-x":"hidden",padding:"8px 0 0"},on:{click:function(t){e.saveScroll(t)}}},[r("render-resource-thumbnail",{staticClass:"q-ml-xs q-mr-xs cursor-pointer compact q-pa-lg",attrs:{value:t,"enable-link":"",compact:!0,"big-thumbnail":""},nativeOn:{click:function(r){e.loadDetail(r,"/curricula/"+t.id)}}})],1)}),r("q-spinner-dots",{staticClass:"full-width",attrs:{slot:"message",size:10},slot:"message"})]:r("div",{staticClass:"q-pa-md text-faded",staticStyle:{"text-align":"center"}},[r("q-icon",{staticStyle:{opacity:"0.17",display:"block",margin:"40px auto 24px"},attrs:{name:"fa fa-book",size:"64px",color:"primary"}}),e._v("\n        No results matched your search\n      ")],1)],2)],1)],1)},n=[];i._withStripped=!0;r("6762"),r("2fdb"),r("7f7f");var s=r("3156"),o=r.n(s),a=r("de9e"),l=r("f6ed"),c=r("5ea6"),u=r("858b"),d=r("2bb2"),h=r("1528"),g=r("2f62"),f=r("7c7b"),m=h["a"].getScrollPosition,p=h["a"].setScrollPosition,v={name:"ResourceViewMore",mixins:[u["a"],l["a"],d["a"]],components:{RenderResourceThumbnail:c["a"]},beforeDestroy:function(){this.pageMeta()},data:function(){return{pageLength:40,loaded:!1,allPagesLoaded:!1,after:null,done:null,resources:[],resourceCategory:{},featuredResources:[],recentResources:[]}},mounted:function(){this.handleScroll()},methods:o()({},Object(g["b"])({pageMeta:"app/setPageMeta"}),{loadMore:function(e,t){(this.allPagesLoaded||!this.loaded||this.resources.length<this.pageLength)&&t(this.allPagesLoaded),this.done=t,this.resources[this.resources.length-1]&&(this.after=this.resources[this.resources.length-1].id)},saveScroll:function(e){var t=document.getElementById("scroll-section").children[0],r=m(t);this.$q.sessionStorage.set("curricula-scroll",r)},handleScroll:function(){var e=this,t=this.$q.sessionStorage.get.item("curricula-scroll");if(t&&t>0)var r=document.getElementById("scroll-section").children[0],i=function(){0===m(r)?setTimeout(p(r,t,500),1e3):(clearInterval(n),e.$q.sessionStorage.remove("curricula-scroll"))},n=setInterval(i,1e3)}}),watch:{currentFilter:function(){this.resources=[],this.after=null,this.allPagesLoaded=!1}},apollo:{resourceCategory:{query:f["d"],variables:function(){return{id:this.$route.params.id}},skip:function(){return!this.$route.params.id},update:function(e){return this.pageMeta({title:"Content",subtitle:"featured"===this.$route.params.id?"Featured":e.resourceCategory.name}),e.resourceCategory}},resources:{query:a["j"],fetchPolicy:"cache-and-network",variables:function(){return"featured"===this.$route.params.id?{filter:{type:this.currentFilter,featured:!0},first:this.pageLength,after:this.after}:{filter:{type:this.currentFilter,resourceCategory:{id:this.$route.params.id}},first:this.pageLength,after:this.after}},skip:function(){return!["COURSE","LESSON","ACTIVITY"].includes(this.currentFilter)},update:function(e){if(this.allPagesLoaded=e.resources.length<this.pageLength,this.resources.length){this.done&&(this.done(),this.done=null);var t=this.resources.map(function(e){return e.id}),r=e.resources.filter(function(e){return-1===t.indexOf(e.id)});return this.resources.concat(r)}return this.loaded=!0,e.resources}},featuredResources:{query:a["j"],fetchPolicy:"cache-and-network",variables:function(){return{filter:{type:this.currentFilter,resourceCategory:{id:this.$route.params.id},featured:!0},first:4}},skip:function(){return"featured"===this.$route.params.id||!["COURSE","LESSON","ACTIVITY"].includes(this.currentFilter)},update:function(e){return e.resources}},recentResources:{query:a["p"],fetchPolicy:"cache-and-network",variables:function(){return"featured"===this.$route.params.id?{filter:{type:this.currentFilter,featured:!0},first:2}:{filter:{type:this.currentFilter,resourceCategory:{id:this.$route.params.id}},first:2}},skip:function(){return!["COURSE","LESSON","ACTIVITY"].includes(this.currentFilter)},update:function(e){return e.resources}}}},b=v,F=r("2877"),y=Object(F["a"])(b,i,n,!1,null,null,null);y.options.__file="ResourceViewMore.vue";t["default"]=y.exports},"7c7b":function(e,t,r){"use strict";r.d(t,"a",function(){return f}),r.d(t,"d",function(){return m}),r.d(t,"c",function(){return p}),r.d(t,"e",function(){return v}),r.d(t,"b",function(){return b});var i=r("5640"),n=r.n(i),s=r("9530"),o=r.n(s);function a(){var e=n()(["\n  mutation CreateResourceCategoryMutation(\n    $name: String!,\n    $description: String\n  ) {\n    createResourceCategory(\n      data: {\n        name: $name,\n        description: $description\n      }\n    )\n    {\n      ...ResourceCategoryFragment\n    }\n  }\n  ","\n"]);return a=function(){return e},e}function l(){var e=n()(["\n  mutation UpdateResourceCategoryMutation(\n    $id: ID!\n    $name: String!,\n    $description: String\n  ) {\n    updateResourceCategory(\n      where: {id: $id}\n      data: {\n        name: $name,\n        description: $description\n      }\n    )\n    {\n      ...ResourceCategoryFragment\n    }\n  }\n  ","\n"]);return l=function(){return e},e}function c(){var e=n()(["\n  mutation DeleteResourceCategoryMutation($id: ID!) {\n    deleteResourceCategory(where: {id: $id }) {\n      id\n    }\n  }\n"]);return c=function(){return e},e}function u(){var e=n()(["\n  query ResourceCategoryQuery($id: ID!) {\n    resourceCategory(where: {\n      id: $id\n    }) {\n      ...ResourceCategoryFragment\n    }\n  }\n  ","\n"]);return u=function(){return e},e}function d(){var e=n()(["\n  query ResourceCategoryQuery {\n    resourceCategories(orderBy: name_ASC) {\n      ...ResourceCategoryFragment\n    }\n  }\n  ","\n"]);return d=function(){return e},e}function h(){var e=n()(["\n  fragment ResourceCategoryFragment on ResourceCategory {\n    id\n    name\n    description\n  }\n"]);return h=function(){return e},e}var g=o()(h()),f=o()(d(),g),m=o()(u(),g),p=o()(c()),v=o()(l(),g),b=o()(a(),g)},f6ed:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var i=r("3156"),n=r.n(i),s=r("2f62"),o=r("b0d5"),a=r("2743"),l=[{label:"Playlists",value:"COURSE"},{label:"Modules",value:"LESSON"},{label:"Activities",value:"ACTIVITY",default:!0}],c={mixins:[a["a"]],created:function(){this.$store.dispatch("app/setFilterOptions",l)},data:function(){return{bookmarked:!1,featured:!1,scheduled:!1,filterModal:!1,modalFilter:null,categories:[]}},computed:n()({currentFilterType:function(){var e=this;if(this.currentFilter){var t=l.filter(function(t){return t.value===e.currentFilter});return t.length?t[0].label:void 0}},hasFilter:function(){return!this.bookmarked&&(this.contentFilter.searchString||this.enableStatus&&this.contentFilter.status||this.contentFilter.resourceCategory||this.contentFilter.resourceCategories&&this.contentFilter.resourceCategories.length||this.contentFilter.categories&&this.contentFilter.categories.length||this.contentFilter.youthOutcomes&&this.contentFilter.youthOutcomes.length||this.contentFilter.contentStandards&&this.contentFilter.contentStandards.length||this.contentFilter.ageAbove||this.contentFilter.ageBelow&&this.contentFilter.ageBelow<20||this.contentFilter.gradeAbove||this.contentFilter.gradeBelow&&this.contentFilter.gradeBelow<12||this.contentFilter.durations&&this.contentFilter.durations.length||this.contentFilter.publishers&&this.contentFilter.publishers.length||this.contentFilter.ratingAbove||this.contentFilter.ratingBelow&&this.contentFilter.ratingBelow<5)}},Object(s["c"])("app",["currentFilter","searchString","contentFilter"])),methods:{openFilter:function(){this.modalFilter=Object(o["a"])({},this.contentFilter),this.filterModal=!0},resetFlags:function(){this.after=null,this.categories=[],this.featured=this.bookmarked=this.scheduled=!1},toggleFeatured:function(){this.after=null,this.categories=[],this.bookmarked=!1,this.scheduled=!1,this.featured=!this.featured},toggleBookmarked:function(){this.after=null,this.categories=[],this.featured=!1,this.scheduled=!1,this.bookmarked=!this.bookmarked},toggleScheduled:function(){this.after=null,this.categories=[],this.featured=!1,this.scheduled=!this.scheduled,this.bookmarked=!1},applyFilter:function(){this.resetFlags(),this.$store.dispatch("app/setContentFilter",this.modalFilter)},clearFilter:function(){this.modalFilter={searchString:null,categories:[],ageAbove:null,ageBelow:null,gradeAbove:null,gradeBelow:null,durations:[],subjects:[],publishers:[],ratingAbove:null,ratingBelow:null,type:null,resourceCategory:null,youthOutcomes:[],contentStandards:[],status:null}},constructFilter:function(){var e={filter:{AND:[{type:this.currentFilter}]}};return this.after&&(e.after=this.after),this.contentFilter.status&&this.enableStatus&&(e.filter.status=this.contentFilter.status),this.enableStatus||delete e.filter.status,this.featured?(e.filter.featured=!0,e):this.bookmarked?(e.filter.bookmarked=!0,e):(this.scheduled&&"ACTIVITY"===this.currentFilter&&(e.filter.scheduled=!0),this.contentFilter.searchString&&e.filter.AND.push({OR:[{title_contains:this.contentFilter.searchString},{introduction_contains:this.contentFilter.searchString}]}),this.hasFilter&&(this.contentFilter.categories&&this.contentFilter.categories.length&&e.filter.AND.push({categories_some:{id_in:this.contentFilter.categories}}),this.contentFilter.resourceCategory&&e.filter.AND.push({resourceCategory:{id:this.contentFilter.resourceCategory}}),this.contentFilter.resourceCategories&&this.contentFilter.resourceCategories.length&&e.filter.AND.push({resourceCategory:{id_in:this.contentFilter.resourceCategories}}),this.contentFilter.publishers&&this.contentFilter.publishers.length&&e.filter.AND.push({organization:{id_in:this.contentFilter.publishers}}),this.contentFilter.durations&&this.contentFilter.durations.length&&e.filter.AND.push({OR:this.contentFilter.durations.map(function(e){return JSON.parse(e)})}),void 0!==this.contentFilter.gradeAbove&&null!==this.contentFilter.gradeAbove&&e.filter.AND.push({gradeFrom_lte:this.contentFilter.gradeAbove}),void 0!==this.contentFilter.gradeBelow&&null!==this.contentFilter.gradeBelow&&this.contentFilter.gradeBelow<12&&e.filter.AND.push({gradeTo_gte:this.contentFilter.gradeBelow}),this.contentFilter.ratingAbove&&e.filter.AND.push({rating_gte:this.contentFilter.ratingAbove}),this.contentFilter.ratingBelow&&this.contentFilter.ratingBelow<5&&e.filter.AND.push({rating_lte:this.contentFilter.ratingBelow})),e)}}}}}]);