require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([31],{43:function(t,e,s){"use strict";var i=a(s(2)),n=a(s(44));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},44:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(46),n=s.n(i),a=s(47),r=!1;var c=function(t){r||s(45)},o=s(0)(n.a,a.a,c,null,null);o.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\build2.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] build2.vue: functional components are not supported with templates, they should use render functions."),e.default=o.exports},45:function(t,e){},46:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=s(1),a=(i=n)&&i.__esModule?i:{default:i};e.default={data:function(){return{static:"",activeindex:0,classlist:[],storelist:[],id:""}},onLoad:function(t){this.static=a.default.static,this.id=t._id,this.req_class(t._id)},methods:{go_build_serch:function(){wx.navigateTo({url:"../build/serch"})},go_build_tenant:function(t,e){wx.setStorageSync("tenant",e),wx.navigateTo({url:"../build/tenant?storeid="+t+"&classid="+this.classlist[this.activeindex].id})},cg_activeindex:function(t,e){this.activeindex=t,this.req_storelist(e)},req_class:function(t){var e=this;a.default.request({data:{parentid:t},url:"goods/class"}).then(function(t){return e.classlist=t,{classid:t[0].id}}).then(function(t){e.req_storelist(t.classid)})},req_storelist:function(t){var e=this;a.default.request({data:{classid:t,id:this.id},url:"goods/storelist"}).then(function(t){e.storelist=t})}}}},47:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"serch",attrs:{eventid:"trH-0"},on:{click:t.go_build_serch}},[s("image",{attrs:{src:"../../static/index/serch.png"}}),s("span",[t._v("寻找商品、店铺")])]),s("div",{staticClass:"section"},[s("nav",t._l(t.classlist,function(e,i){return s("div",{key:e,class:{active:i==t.activeindex},attrs:{eventid:"S1A-1-"+i},on:{click:function(s){t.cg_activeindex(i,e.id)}}},[t._v(t._s(e.name))])})),s("div",{staticClass:"list"},t._l(t.storelist,function(e,i){return s("div",{key:i,attrs:{eventid:"5N7-2-"+i},on:{click:function(s){t.go_build_tenant(e.id,e)}}},[s("image",{attrs:{src:t.static+e.picture}}),s("div",[s("p",[t._v(t._s(e.name))]),s("p",[t._v("地址："+t._s(e.address))])],1)])}))],1)])};i._withStripped=!0;var n={render:i,staticRenderFns:[]};e.a=n}},[43]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/build/build2.js.map