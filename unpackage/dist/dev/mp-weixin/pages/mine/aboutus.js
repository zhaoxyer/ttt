require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{190:function(e,t,n){"use strict";var s=r(n(1)),u=r(n(191));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(u.default))},191:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(193),u=n.n(s),r=n(194),o=!1;var i=function(e){o||n(192)},a=n(0)(u.a,r.a,i,null,null);a.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\aboutus.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] aboutus.vue: functional components are not supported with templates, they should use render functions."),t.default=a.exports},192:function(e,t){},193:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,u=n(2),r=(s=u)&&s.__esModule?s:{default:s};t.default={data:function(){return{list:[]}},onShow:function(){this.req_problem()},methods:{req_problem:function(){var e=this;r.default.request({url:"aboutus/list"}).then(function(t){e.list=t})}}}},194:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",e._l(e.list,function(t,s){return n("div",{key:t,staticClass:"columlist"},[n("span",[e._v(e._s(t.content))]),e._m(0,!0)])}))};s._withStripped=!0;var u={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("image",{attrs:{src:"../../static/right.jpg"}})])}]};t.a=u}},[190]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/aboutus.js.map