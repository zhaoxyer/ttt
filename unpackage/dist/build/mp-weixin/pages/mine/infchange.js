(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/infchange"],{1919:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("701a"));function i(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{}},onLoad:function(){},methods:{go_mine_userinf:function(){wx.navigateTo({url:"../mine/userinf"})},go_mine_updatepass:function(){wx.navigateTo({url:"../mine/updatepass"})},go_mine_updatephone:function(){wx.navigateTo({url:"../mine/updatephone"})},loginout:function(){a.default.loginout(),wx.navigateBack()}}};n.default=u},"576c":function(t,n,e){"use strict";e("33f4");var a=u(e("b0ce")),i=u(e("ea1f"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"7a64":function(t,n,e){"use strict";e.r(n);var a=e("1919"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},"7ac5":function(t,n,e){},c8b7:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",[e("div",{staticClass:"columlist",attrs:{eventid:"00ae88d7-0"},on:{click:t.go_mine_userinf}},[e("span",[t._v("个人信息")]),e("image",{attrs:{src:"../../static/right.jpg"}})]),e("div",{staticClass:"columlist",attrs:{eventid:"00ae88d7-1"},on:{click:t.go_mine_updatephone}},[e("span",[t._v("换绑手机")]),e("image",{attrs:{src:"../../static/right.jpg"}})]),e("div",{staticClass:"columlist",attrs:{eventid:"00ae88d7-2"},on:{click:t.go_mine_updatepass}},[e("span",[t._v("登录密码")]),e("image",{attrs:{src:"../../static/right.jpg"}})]),e("div",{staticClass:"outinf",attrs:{eventid:"00ae88d7-3"},on:{click:t.loginout}},[t._v("退出账户")])])},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},ea1f:function(t,n,e){"use strict";e.r(n);var a=e("c8b7"),i=e("7a64");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("f7cb");var o=e("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);c.options.__file="infchange.vue",n["default"]=c.exports},f7cb:function(t,n,e){"use strict";var a=e("7ac5"),i=e.n(a);i.a}},[["576c","common/runtime","common/vendor"]]]);