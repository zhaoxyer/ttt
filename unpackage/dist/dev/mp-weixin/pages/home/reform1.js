require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([21],{207:function(e,t,s){"use strict";var i=c(s(1)),n=c(s(208));function c(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},208:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(210),n=s.n(i),c=s(211),a=!1;var r=function(e){a||s(209)},o=s(0)(n.a,c.a,r,null,null);o.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\home\\reform1.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] reform1.vue: functional components are not supported with templates, they should use render functions."),t.default=o.exports},209:function(e,t){},210:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{reformtype:0,check1:-1,check:-1,server:[{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"}],homeType:[{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"}],bigType:[{type:"120平以下"},{type:"120平以下"},{type:"120平以下"},{type:"120平以下"},{type:"120平以下"},{type:"120平以下"}]}},onLoad:function(){},methods:{go_mine_infchange:function(){wx.navigateTo({url:"../mine/infchange"})},go_mine_apply:function(){wx.navigateTo({url:"../mine/apply"})},cg_check:function(e){this.check!=e?this.check=e:this.check=-1},cg_check1:function(e){this.check1!=e?this.check1=e:this.check1=-1},cg_reformtype:function(e){this.reformtype=e}}}},211:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("scroll-view",{attrs:{"scroll-y":!0}},[s("view",{staticClass:"list"},[s("div",[s("div",{staticClass:"reformtype"},[s("span",{class:{active:0==e.reformtype},attrs:{eventid:"Uss-0"},on:{click:function(t){e.cg_reformtype(0)}}},[e._v("家居装修")]),s("span",{class:{active:1==e.reformtype},attrs:{eventid:"HNk-1"},on:{click:function(t){e.cg_reformtype(1)}}},[e._v("二次装修")])]),s("div",{staticClass:"youhui leftright"},[s("div",{staticClass:"server"},e._l(e.server,function(t,i){return s("div",{key:i,attrs:{eventid:"7ZA-2-"+i},on:{click:e.go_home_serverinf}},[s("image",{attrs:{src:t.image,mode:"widthFix"}}),s("p",[e._v(e._s(t.adress))]),s("P",{attrs:{mpcomid:"VMz-0-"+i}},[e._v(e._s(t.type))])],1)}))]),s("div",{staticClass:"bggray"})])]),s("div",{staticClass:"bggray"}),s("div",{staticClass:"userinf"},[s("h1",[e._v("户型")]),s("div",{staticClass:"type"},e._l(e.homeType,function(t,i){return s("div",{key:t,attrs:{eventid:"XTG-3-"+i},on:{click:function(t){e.cg_check(i)}}},[i!=e.check?s("image",{attrs:{src:"../../static/mine/check.jpg"}}):s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}),s("span",[e._v(e._s(t.name))])])}))],1),s("div",{staticClass:"bggray"}),s("div",{staticClass:"userinf"},[s("h1",[e._v("面积")]),s("div",{staticClass:"type bigType"},e._l(e.bigType,function(t,i){return s("div",{key:t,attrs:{eventid:"JKp-4-"+i},on:{click:function(t){e.cg_check1(i)}}},[i!=e.check1?s("image",{attrs:{src:"../../static/mine/check.jpg"}}):s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}),s("span",[e._v(e._s(t.type))])])}))],1)]),e._m(0)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"apply"},[t("div",[this._v("立即预约")])])}]};t.a=n}},[207]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/reform1.js.map