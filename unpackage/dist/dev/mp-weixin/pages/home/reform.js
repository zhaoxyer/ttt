require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([17],{95:function(e,t,s){"use strict";var i=a(s(1)),n=a(s(96));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(n.default))},96:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(98),n=s.n(i),a=s(99),r=!1;var c=function(e){r||s(97)},u=s(0)(n.a,a.a,c,null,null);u.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\home\\reform.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] reform.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},97:function(e,t){},98:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{check:-1,server:[{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"},{type:"改造",adress:"卫生间",image:"../../static/index/fuwu.jpg"}],homeType:[{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"},{name:"别墅"}]}},onLoad:function(){},methods:{go_mine_infchange:function(){wx.navigateTo({url:"../mine/infchange"})},go_mine_apply:function(){wx.navigateTo({url:"../mine/apply"})},cg_check:function(e){this.check!=e?this.check=e:this.check=-1}}}},99:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("view",{staticClass:"list"},[s("div",[s("div",{staticClass:"youhui leftright"},[s("div",{staticClass:"server"},e._l(e.server,function(t,i){return s("div",{key:i,attrs:{eventid:"ce3-0-"+i},on:{click:e.go_home_serverinf}},[s("image",{attrs:{src:t.image,mode:"widthFix"}}),s("p",[e._v(e._s(t.adress))]),s("P",{attrs:{mpcomid:"ZdJ-0-"+i}},[e._v(e._s(t.type))])],1)}))]),s("div",{staticClass:"bggray"})])]),s("div",{staticClass:"bggray"}),s("div",{staticClass:"userinf"},[s("h1",[e._v("户型")]),s("div",{staticClass:"type"},e._l(e.homeType,function(t,i){return s("div",{key:t,attrs:{eventid:"bey-1-"+i},on:{click:function(t){e.cg_check(i)}}},[i!=e.check?s("image",{attrs:{src:"../../static/mine/check.jpg"}}):s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}),s("span",[e._v(e._s(t.name))])])}))],1),e._m(0)])};i._withStripped=!0;var n={render:i,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"apply"},[t("div",[this._v("立即预约")])])}]};t.a=n}},[95]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/reform.js.map