require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{164:function(e,t,s){"use strict";var n=a(s(2)),i=a(s(165));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(i.default))},165:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(167),i=s.n(n),a=s(168),r=!1;var o=function(e){r||s(166)},d=s(0)(i.a,a.a,o,null,null);d.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\adress.vue",d.esModule&&Object.keys(d.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] adress.vue: functional components are not supported with templates, they should use render functions."),t.default=d.exports},166:function(e,t){},167:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=s(1),a=(n=i)&&n.__esModule?n:{default:n};t.default={data:function(){return{list:[],src:""}},onLoad:function(e){this.src=e.src},onShow:function(){this.req_getAdress()},methods:{setadress:function(e){this.src&&(wx.setStorageSync("adress",e),wx.navigateBack())},go_mine_addadress:function(e){e=e||"",wx.navigateTo({url:"../mine/addadress?_id="+e})},req_getAdress:function(){var e=this;console.log(this.list),a.default.request({url:"address/list"}).then(function(t){e.list=t})},req_setDef:function(e){var t=this;a.default.request({data:{id:e.id},url:"address/setAttr"}).then(function(e){t.req_getAdress()})},req_del:function(e,t){var s=this;a.default.request({data:{id:e.id},url:"address/delete"}).then(function(e){s.req_getAdress()})}}}},168:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"adress"},e._l(e.list,function(t,n){return s("div",{key:n,staticClass:"adressli",attrs:{eventid:"KVm-6-"+n},on:{click:function(s){e.setadress(t)}}},[s("div",[s("div",[e._v(e._s(t.name))]),s("div",[e._v(e._s(t.phone))])]),s("div",[e._v(e._s(t.provinceName+t.countyAreaName+t.cityName+t.address))]),s("div",{staticClass:"edit"},[1!=t.defaultType?s("div",{attrs:{eventid:"2aI-1-"+n},on:{click:function(s){s.stopPropagation(),e.req_setDef(t)}}},[s("image",{attrs:{src:"../../static/mine/check.jpg"}}),s("span",[e._v("默认")])]):s("div",{attrs:{eventid:"uAI-0-"+n},on:{click:function(s){e.req_setDef(t)}}},[s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}),s("span",[e._v("设为默认")])]),s("div",[s("image",{attrs:{src:"../../static/mine/edit.png",eventid:"PD2-2-"+n},on:{click:function(s){s.stopPropagation(),e.go_mine_addadress(t.id)}}}),s("span",{attrs:{eventid:"fTc-3-"+n},on:{click:function(s){s.stopPropagation(),e.go_mine_addadress(t.id)}}},[e._v("编辑")]),s("image",{attrs:{src:"../../static/mine/del.png",eventid:"inj-4-"+n},on:{click:function(s){s.stopPropagation(),e.req_del(t,n)}}}),s("span",{attrs:{eventid:"ev2-5-"+n},on:{click:function(s){s.stopPropagation(),e.req_del(t,n)}}},[e._v("删除")])])])])})),s("div",{staticClass:"apply"},[s("div",{attrs:{eventid:"3Gt-7"},on:{click:function(t){e.go_mine_addadress()}}},[e._v("新建收货地址")])])])};n._withStripped=!0;var i={render:n,staticRenderFns:[]};t.a=i}},[164]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/adress.js.map