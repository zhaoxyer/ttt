require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{94:function(e,t,s){"use strict";var a=i(s(1)),n=i(s(95));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},95:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(97),n=s.n(a),i=s(98),r=!1;var d=function(e){r||s(96)},o=s(0)(n.a,i.a,d,null,null);o.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\mine\\addadress.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] addadress.vue: functional components are not supported with templates, they should use render functions."),t.default=o.exports},96:function(e,t){},97:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=s(2),i=(a=n)&&a.__esModule?a:{default:a};t.default={data:function(){return{adressinf:{address:"",cityCode:"11",cityName:"北京",countyAreaCode:"12",countyAreaName:"天安门",defaultType:0,name:"",phone:"",provinceCode:"22",provinceName:"撒旦"},id:""}},onLoad:function(e){e._id&&(this.id=e._id,this.req_addressInf(e._id))},methods:{cg_active:function(){this.adressinf.defaultType?this.adressinf.defaultType=0:this.adressinf.defaultType=1},req_addaddress:function(){var e="address/add";this.id&&(e="address/update"),i.default.request({data:this.adressinf,url:e,c:!0}).then(function(e){wx.navigateBack()})},req_addressInf:function(e){var t=this;i.default.request({data:{id:e},url:"address/detail"}).then(function(e){t.adressinf=e})}}}},98:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"setinput"},[s("div",[s("span",[e._v("姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.name,expression:"adressinf.name"}],attrs:{type:"text",placeholder:"最少2个,最多15个字",eventid:"uXD-0"},domProps:{value:e.adressinf.name},on:{input:function(t){t.target.composing||(e.adressinf.name=t.target.value)}}})]),s("div",[s("span",[e._v("电话")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.phone,expression:"adressinf.phone"}],attrs:{type:"text",placeholder:"请输入手机号",eventid:"bkN-1"},domProps:{value:e.adressinf.phone},on:{input:function(t){t.target.composing||(e.adressinf.phone=t.target.value)}}})]),e._m(0),s("div",[s("span",[e._v("地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.address,expression:"adressinf.address"}],attrs:{type:"text",placeholder:"请填写详细地址,5~60个字",eventid:"BuG-2"},domProps:{value:e.adressinf.address},on:{input:function(t){t.target.composing||(e.adressinf.address=t.target.value)}}})]),e._m(1),s("p",{staticClass:"xieyi"},[s("span",{attrs:{eventid:"ajd-3"},on:{click:e.cg_active}},[e.adressinf.defaultType?e._e():s("image",{attrs:{src:"../../static/mine/check.jpg"}}),e.adressinf.defaultType?s("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):e._e()]),s("span",[e._v("设置成默认地址")])]),s("p",{staticClass:"submit",attrs:{eventid:"WaL-4"},on:{click:function(t){e.req_addaddress()}}},[e._v("\n\t\t保存\n\t")])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("地区")]),t("input",{attrs:{type:"text",placeholder:"最少2个,最多15个字"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",[this._v("邮编")]),t("input",{attrs:{type:"text",placeholder:"6位邮政编码"}})])}]};t.a=n}},[94]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mine/addadress.js.map