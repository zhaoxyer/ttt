require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([20],{192:function(e,t,s){"use strict";var i=r(s(1)),n=r(s(193));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},193:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(195),n=s.n(i),r=s(196),a=!1;var c=function(e){a||s(194)},l=s(0)(n.a,r.a,c,null,null);l.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\home\\server.vue",l.esModule&&Object.keys(l.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] server.vue: functional components are not supported with templates, they should use render functions."),t.default=l.exports},194:function(e,t){},195:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=s(2),r=(i=n)&&i.__esModule?i:{default:i};t.default={data:function(){return{typeindex:0,swipeList:["../../static/index/banner.jpg","../../static/index/banner.jpg"],indicatorDots:!0,indicatorcolor:"white",indicatoractivecolor:"#FEC200",autoplay:!0,interval:5e3,duration:1e3,circular:!0,server:[],classlist:[],clientServiceClasses:[],activeindex:0,static:""}},onLoad:function(e){this.static=r.default.static,this.req_class(e._id)},methods:{go_home_serverinf:function(e){wx.navigateTo({url:"../home/serverinf?_id="+e})},cg_typeindex:function(e){this.typeindex=e,this.req_classlist(this.server[e].id)},req_class:function(e){var t=this;r.default.request({data:{parentid:e},url:"service/class"}).then(function(e){return t.server=e,e}).then(function(e){e[0]&&t.req_classlist(e[0].id)})},req_classlist:function(e){var t=this;r.default.request({data:{parentid:e},url:"service/classlist"}).then(function(e){t.clientServiceClasses=e})}}}},196:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("view",{staticClass:"list"},[s("div",{staticClass:"yiji"},[s("scroll-view",{staticClass:"nav",attrs:{"scroll-x":"true"}},e._l(e.server,function(t,i){return s("span",{key:i,class:{active:e.typeindex==i},attrs:{eventid:"ROM-0-"+i},on:{click:function(t){e.cg_typeindex(i)}}},[e._v(e._s(t.name))])}))],1),s("div",{staticClass:"bggray"}),e._l(e.clientServiceClasses,function(t,i){return s("div",{key:t},[s("div",{staticClass:"title"},[s("span",{staticClass:"bg0"},[e._v(e._s(t.name))])]),s("div",{staticClass:"youhui leftright"},[s("div",{staticClass:"server"},e._l(t.clientServiceClasses,function(t,n){return s("div",{key:n,attrs:{eventid:"Wky-1-"+i+"-"+n},on:{click:function(s){e.go_home_serverinf(t.id)}}},[s("image",{attrs:{src:e.static+t.picture,mode:"widthFix"}}),s("p",[e._v(e._s(t.name))])],1)}))]),s("div",{staticClass:"bggray"})])})],2)};i._withStripped=!0;var n={render:i,staticRenderFns:[]};t.a=n}},[192]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/server.js.map