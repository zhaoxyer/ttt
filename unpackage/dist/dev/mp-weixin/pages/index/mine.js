require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{37:function(e,t,n){"use strict";var i=o(n(2)),s=o(n(38));function o(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(s.default))},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(40),s=n.n(i),o=n(41),r=!1;var a=function(e){r||n(39)},c=n(0)(s.a,o.a,a,null,null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\index\\mine.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] mine.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},39:function(e,t){},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=n(1),o=(i=s)&&i.__esModule?i:{default:i};t.default={data:function(){return{userinf:{},static:""}},onLoad:function(){this.static=o.default.static},onShow:function(){wx.getStorageSync("token")?this.req_userinfo():this.userinf={}},methods:{tel:function(){o.default.call()},checkinf:function(){wx.getStorageSync("token")?this.go_mine_infchange():this.go_mine_login()},go_mine_aboutus:function(){wx.navigateTo({url:"../mine/aboutus"})},go_mine_infchange:function(){wx.getStorageSync("token")?wx.navigateTo({url:"../mine/infchange"}):this.go_mine_login()},go_mine_apply:function(e){wx.getStorageSync("token")?wx.navigateTo({url:"../mine/apply?type="+e}):this.go_mine_login()},go_mine_login:function(){wx.navigateTo({url:"../mine/login"})},go_mine_adress:function(){wx.getStorageSync("token")?wx.navigateTo({url:"../mine/adress"}):this.go_mine_login()},go_mine_securityCenter:function(){wx.getStorageSync("token")?wx.navigateTo({url:"../mine/securityCenter"}):this.go_mine_login()},go_mine_problem:function(){wx.navigateTo({url:"../mine/problem"})},req_userinfo:function(){var e=this;o.default.request({url:"user/info",method:"get"}).then(function(t){e.userinf=t,wx.setStorageSync("userinf",t)})}}}},41:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"header",attrs:{eventid:"2rj-0"},on:{click:e.checkinf}},[n("image",{attrs:{src:e.userinf.photo?e.static+e.userinf.photo:"../../static/logo.jpg"}}),n("p",[e._v(e._s(e.userinf.nickname||e.userinf.name||"木斗生活"))])],1),n("div",{staticClass:"userinf"},[n("h1",[e._v("个人信息")]),n("div",{attrs:{eventid:"Va6-1"},on:{click:e.go_mine_infchange}},[n("image",{attrs:{src:"../../static/index/userinf0.png"}}),n("p",[e._v("信息修改")])],1),n("div",{attrs:{eventid:"8T9-2"},on:{click:e.go_mine_adress}},[n("image",{attrs:{src:"../../static/index/userinf1.png"}}),n("p",[e._v("收获地址")])],1),n("div",{attrs:{eventid:"AT5-3"},on:{click:e.go_mine_securityCenter}},[n("image",{attrs:{src:"../../static/index/userinf2.png"}}),n("p",[e._v("安全中心")])],1)],1),n("div",{staticClass:"userinf"},[n("h1",[e._v("木斗帮手")]),n("div",{attrs:{eventid:"HQq-4"},on:{click:e.go_mine_aboutus}},[n("image",{attrs:{src:"../../static/index/helper0.png"}}),n("p",[e._v("关于木斗生活")])],1),n("div",{attrs:{eventid:"SMt-5"},on:{click:e.go_mine_problem}},[n("image",{attrs:{src:"../../static/index/helper1.png"}}),n("p",[e._v("常见问题")])],1),n("div",{attrs:{eventid:"tI2-6"},on:{click:e.tel}},[n("image",{attrs:{src:"../../static/index/helper2.png"}}),n("p",[e._v("联系客服")])],1)],1),n("div",{staticClass:"userinf"},[n("h1",[e._v("木斗招募")]),n("div",{attrs:{eventid:"FoF-7"},on:{click:function(t){e.go_mine_apply(1)}}},[n("image",{attrs:{src:"../../static/index/recruit0.png"}}),n("p",[e._v("木斗工匠")])],1),n("div",{attrs:{eventid:"OUK-8"},on:{click:function(t){e.go_mine_apply(2)}}},[n("image",{attrs:{src:"../../static/index/recruit1.png"}}),n("p",[e._v("木斗商户")])],1),n("div",{attrs:{eventid:"ciS-9"},on:{click:function(t){e.go_mine_apply(3)}}},[n("image",{attrs:{src:"../../static/index/recruit2.png"}}),n("p",[e._v("木斗速递")])],1),n("div",{attrs:{eventid:"xu2-10"},on:{click:function(t){e.go_mine_apply(4)}}},[n("image",{attrs:{src:"../../static/index/recruit3.png"}}),n("p",[e._v("木斗搬运")])],1),n("div",{attrs:{eventid:"VPH-11"},on:{click:function(t){e.go_mine_apply(5)}}},[n("image",{attrs:{src:"../../static/index/recruit4.png"}}),n("p",[e._v("定制商户")])],1),n("div",{attrs:{eventid:"3BA-12"},on:{click:function(t){e.go_mine_apply(6)}}},[n("image",{attrs:{src:"../../static/index/recruit5.png"}}),n("p",[e._v("地区加盟")])],1)],1)])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};t.a=s}},[37]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/mine.js.map