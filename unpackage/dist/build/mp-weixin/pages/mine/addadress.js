(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/addadress"],{"0fac":function(e,a,t){"use strict";t.r(a);var s=t("dce0"),n=t("9a0c");for(var i in n)"default"!==i&&function(e){t.d(a,e,function(){return n[e]})}(i);t("6902");var d=t("2877"),r=Object(d["a"])(n["default"],s["a"],s["b"],!1,null,null,null);r.options.__file="addadress.vue",a["default"]=r.exports},3604:function(e,a,t){},6021:function(e,a,t){"use strict";t("33f4");var s=i(t("b0ce")),n=i(t("0fac"));function i(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(n.default))},"60e4":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=n(t("701a"));function n(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{adressinf:{address:"",cityCode:"",cityName:"",countyAreaCode:"",countyAreaName:"",defaultType:0,name:"",phone:"",provinceCode:"",provinceName:""},id:""}},onLoad:function(e){e._id&&(this.id=e._id,this.req_addressInf(e._id))},methods:{bindRegionChange:function(e){this.adressinf.provinceName=e.target.value[0],this.adressinf.countyAreaName=e.target.value[1],this.adressinf.cityName=e.target.value[2]},cg_active:function(){this.adressinf.defaultType?this.adressinf.defaultType=0:this.adressinf.defaultType=1},req_addaddress:function(){var e="address/add";this.id&&(e="address/update"),this.adressinf.name?s.default.checkmobile(this.adressinf.phone)?this.adressinf.provinceName?this.adressinf.address?s.default.request({data:this.adressinf,url:e,c:!0}).then(function(e){wx.navigateBack()}):s.default.totast("请输入详细地址"):s.default.totast("请选择所在城市"):s.default.totast("请输入正确的手机号"):s.default.totast("请输入姓名")},req_addressInf:function(e){var a=this;s.default.request({data:{id:e},url:"address/detail"}).then(function(e){a.adressinf=e})}}};a.default=i},6902:function(e,a,t){"use strict";var s=t("3604"),n=t.n(s);n.a},"9a0c":function(e,a,t){"use strict";t.r(a);var s=t("60e4"),n=t.n(s);for(var i in s)"default"!==i&&function(e){t.d(a,e,function(){return s[e]})}(i);a["default"]=n.a},dce0:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"setinput"},[t("div",[t("span",[e._v("姓名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.name,expression:"adressinf.name"}],attrs:{type:"text",placeholder:"最少2个,最多15个字",eventid:"3b4f3746-0"},domProps:{value:e.adressinf.name},on:{input:function(a){a.target.composing||(e.adressinf.name=a.target.value)}}})]),t("div",[t("span",[e._v("电话")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.phone,expression:"adressinf.phone"}],attrs:{type:"number",placeholder:"请输入手机号",eventid:"3b4f3746-1"},domProps:{value:e.adressinf.phone},on:{input:function(a){a.target.composing||(e.adressinf.phone=a.target.value)}}})]),t("div",[t("span",[e._v("地区")]),t("div",{staticClass:"inputall"},[e.disabled?e._e():t("picker",{staticClass:"regionpicker",attrs:{mode:"region",value:"请选择所在城市","custom-item":e.customItem,eventid:"3b4f3746-2"},on:{change:e.bindRegionChange}},[t("view",{staticClass:"picker"},[e._v(e._s(e.adressinf.provinceName||"")+"，"+e._s(e.adressinf.countyAreaName||"")+"，"+e._s(e.adressinf.cityName||""))])]),e._v(e._s(e.adressinf.provinceName+e.adressinf.countyAreaName+e.adressinf.cityName||"请选择所在城市"))],1)]),t("div",[t("span",[e._v("地址")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.adressinf.address,expression:"adressinf.address"}],attrs:{type:"text",placeholder:"请填写详细地址,5~60个字",eventid:"3b4f3746-3"},domProps:{value:e.adressinf.address},on:{input:function(a){a.target.composing||(e.adressinf.address=a.target.value)}}})]),t("p",{staticClass:"xieyi"},[t("span",{attrs:{eventid:"3b4f3746-4"},on:{click:e.cg_active}},[e.adressinf.defaultType?e._e():t("image",{attrs:{src:"../../static/mine/check.jpg"}}),e.adressinf.defaultType?t("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):e._e()]),t("span",[e._v("设置成默认地址")])]),t("p",{staticClass:"submit",attrs:{eventid:"3b4f3746-5"},on:{click:function(a){e.req_addaddress()}}},[e._v("保存")])],1)},n=[];t.d(a,"a",function(){return s}),t.d(a,"b",function(){return n})}},[["6021","common/runtime","common/vendor"]]]);