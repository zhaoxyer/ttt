require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{133:function(e,t,n){"use strict";var s=r(n(1)),o=r(n(134));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(o.default))},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(136),o=n.n(s),r=n(141),i=!1;var a=function(e){i||n(135)},u=n(0)(o.a,r.a,a,null,null);u.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\login.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},135:function(e,t){},136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});o(n(137));var s=o(n(2));function o(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{username:"",password:""}},onLoad:function(){},methods:{go_mine_login:function(){wx.navigateTo({url:"../mine/login"})},cg_active:function(){console.log(1),this.check=!this.check},req_login:function(){this.username?this.password?s.default.request({data:{username:this.username,password:this.password,code:1},url:"user/login"}).then(function(e){console.log(e.token),wx.setStorageSync("token",e.token),wx.navigateBack()}):s.default.totast("请输入密码"):s.default.totast("请输入用户名")}}}},137:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(139),o=n.n(s),r=n(140),i=!1;var a=function(e){i||n(138)},u=n(0)(o.a,r.a,a,null,null);u.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\components\\login.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},138:function(e,t){},139:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,o=n(2);(s=o)&&s.__esModule;t.default={props:["text"],methods:{getuserinfo:function(e){console.log(e)}}}},140:function(e,t,n){"use strict";var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("button",{attrs:{"open-type":"getUserInfo",eventid:"EU0-0"},on:{getuserinfo:this.getuserinfo}})],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};t.a=o},141:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"setinput"},[n("p",{staticClass:"logo"},[n("image",{attrs:{src:"../../static/logo.jpg"}})]),n("div",[n("image",{attrs:{src:"../../static/mine/user.jpg"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入手机号",eventid:"gXE-0"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),n("div",[n("image",{attrs:{src:"../../static/mine/pas.jpg"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"请输入密码",eventid:"eZo-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),n("p",{staticClass:"submit",attrs:{eventid:"KNB-2"},on:{click:e.req_login}},[e._v("\n\t\t\t\n\t\t\t登陆\n\t\t")])],1),n("div",{staticClass:"qlogin"},[n("login",{attrs:{mpcomid:"2AH-0"}}),n("image",{attrs:{src:"../../static/mine/qlogin.jpg",mode:"widthFix"}}),e._m(0)],1)])};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("image",{attrs:{src:"../../static/mine/wx.jpg"}})])}]};t.a=o}},[133]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/login.js.map