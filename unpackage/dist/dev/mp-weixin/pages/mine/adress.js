require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{157:function(e,t,s){"use strict";var n=a(s(1)),i=a(s(158));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(i.default))},158:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(160),i=s.n(n),a=s(161),r=!1;var d=function(e){r||s(159)},o=s(0)(i.a,a.a,d,null,null);o.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\adress.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] adress.vue: functional components are not supported with templates, they should use render functions."),t.default=o.exports},159:function(e,t){},160:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=s(2),a=(n=i)&&n.__esModule?n:{default:n};t.default={data:function(){return{list:[]}},onShow:function(){this.req_getAdress()},methods:{go_mine_addadress:function(e){e=e||"",wx.navigateTo({url:"../mine/addadress?_id="+e})},req_getAdress:function(){var e=this;console.log(this.list),a.default.request({url:"address/list"}).then(function(t){e.list=t})},req_setDef:function(e){var t=this;a.default.request({data:{id:e.id},url:"address/setAttr"}).then(function(e){t.req_getAdress()})},req_del:function(e,t){var s=this;a.default.request({data:{id:e.id},url:"address/delete"}).then(function(e){s.req_getAdress()})}}}},161:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"adress"},e._l(e.list,function(t,n){return s("div",{key:n,staticClass:"adressli"},[s("div",[s("div",[e._v(e._s(t.name))]),s("div",[e._v(e._s(t.phone))])]),s("div",[e._v(e._s(t.provinceName+t.countyAreaName+t.cityName+t.address))]),s("div",{staticClass:"edit"},[1!=t.defaultType?s("div",{attrs:{eventid:"BBx-1-"+n},on:{click:function(s){e.req_setDef(t)}}},[s("image",{attrs:{src:"../../static/mine/check.jpg"}}),s("span",[e._v("默认")])]):s("div",{attrs:{eventid:"ghd-0-"+n},on:{click:function(s){e.req_setDef(t)}}},[s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}),s("span",[e._v("设为默认")])]),s("div",[s("image",{attrs:{src:"../../static/mine/edit.png",eventid:"8bg-2-"+n},on:{click:function(s){e.go_mine_addadress(t.id)}}}),s("span",{attrs:{eventid:"Ftn-3-"+n},on:{click:function(s){e.go_mine_addadress(t.id)}}},[e._v("编辑")]),s("image",{attrs:{src:"../../static/mine/del.png",eventid:"Ppj-4-"+n},on:{click:function(s){e.req_del(t,n)}}}),s("span",{attrs:{eventid:"pqF-5-"+n},on:{click:function(s){e.req_del(t,n)}}},[e._v("删除")])])])])})),s("div",{staticClass:"apply"},[s("div",{attrs:{eventid:"jzp-6"},on:{click:function(t){e.go_mine_addadress()}}},[e._v("新建收货地址")])])])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};t.a=i}},[157]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/adress.js.map