require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{19:function(t,i,e){"use strict";var s=n(e(1)),a=n(e(20));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},20:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(22),a=e.n(s),n=e(23),r=!1;var c=function(t){r||e(21)},l=e(0)(a.a,n.a,c,null,null);l.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\index\\build.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] build.vue: functional components are not supported with templates, they should use render functions."),i.default=l.exports},21:function(t,i){},22:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s,a=e(2),n=(s=a)&&s.__esModule?s:{default:s};i.default={data:function(){return{static:"",swipeList:["../../static/index/banner.jpg","../../static/index/banner.jpg"],indicatorDots:!0,indicatorcolor:"white",indicatoractivecolor:"#FEC200",autoplay:!0,interval:5e3,duration:1e3,circular:!0,newlist:[],recomlist:[],classlist:[]}},onLoad:function(){this.static=n.default.static,this.req_class(),this.req_new(),this.req_recom()},methods:{call:function(){n.default.call()},go_build_build2:function(t){wx.navigateTo({url:"../build/build2?_id="+t})},go_build_serch:function(){wx.navigateTo({url:"../build/serch"})},go_build_mallinf:function(t){wx.navigateTo({url:"../build/mallinf?_id="+t})},req_class:function(){var t=this;n.default.request({data:{parentid:0},url:"goods/class"}).then(function(i){console.log(i),t.classlist=i})},req_new:function(){var t=this;n.default.request({data:{parentid:0},url:"goods/newlist"}).then(function(i){t.newlist=i})},req_recom:function(){var t=this;n.default.request({data:{parentid:0},url:"goods/recommendlist"}).then(function(i){t.recomlist=i})}}}},23:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("div",{staticClass:"header"},[t._m(0),e("div",{staticClass:"serch",attrs:{eventid:"p28-0"},on:{click:t.go_build_serch}},[e("span",[t._v("请输入所需材料")]),e("image",{attrs:{src:"../../static/index/serch.png"}})]),e("div",{staticClass:"tel"},[e("image",{attrs:{src:"../../static/index/blacktel.png",eventid:"q21-1"},on:{click:t.call}})])]),e("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,"indicator-active-color":t.indicatoractivecolor,"indicator-color":t.indicatorcolor}},t._l(t.swipeList,function(t,i){return e("swiper-item",{key:t,attrs:{mpcomid:"LgD-0-"+i}},[e("image",{attrs:{src:t}})])})),e("div",{staticClass:"server"},t._l(t.classlist,function(i,s){return e("div",{key:t.item,attrs:{eventid:"BrS-2-"+s},on:{click:function(e){t.go_build_build2(i.id)}}},[e("image",{staticClass:"noimage",attrs:{src:t.static+i.picture,mode:"widthFix"}}),e("view",[t._v(t._s(i.name))])])})),t._m(1),e("div",{staticClass:"youhui leftright"},t._l(t.newlist,function(i,s){return e("div",{key:s,attrs:{eventid:"mgL-3-"+s},on:{click:function(e){t.go_build_mallinf(i.id)}}},[e("div",[t._v(t._s(i.name))]),e("div",[e("image",{staticClass:"noimage",attrs:{src:t.static+i.picture}})]),e("div",[e("span",[t._v(t._s(i.price))]),e("span",[t._v("元每套")])])])})),t._m(2),e("div",{staticClass:"youhui leftright"},t._l(t.recomlist,function(i,s){return e("div",{key:s,attrs:{eventid:"FXl-4-"+s},on:{click:function(e){t.go_build_mallinf(i.id)}}},[e("div",[t._v(t._s(i.name))]),e("div",[e("image",{staticClass:"noimage",attrs:{src:t.static+i.picture}})]),e("div",[e("span",[t._v(t._s(i.price))]),e("span",[t._v("元每套")])])])}))],1)};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"adress"},[i("image",{attrs:{src:"../../static/index/blackadress.png"}}),i("span",[this._v("通州")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title"},[i("span",[this._v("•")]),i("span",{staticClass:"bg0"},[this._v("最新优惠")]),i("span",[this._v("•")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"title"},[i("span",[this._v("•")]),i("span",{staticClass:"bg1"},[this._v("最新推荐")]),i("span",[this._v("•")])])}]};i.a=a}},[19]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/build.js.map