require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([26],{123:function(e,t,i){"use strict";var s=a(i(1)),r=a(i(124));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(r.default))},124:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i(126),r=i.n(s),a=i(127),n=!1;var c=function(e){n||i(125)},d=i(0)(r.a,a.a,c,null,null);d.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\pay.vue",d.esModule&&Object.keys(d.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),d.options.functional&&console.error("[vue-loader] pay.vue: functional components are not supported with templates, they should use render functions."),t.default=d.exports},125:function(e,t){},126:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s,r=i(2),a=(s=r)&&s.__esModule?s:{default:s};t.default={data:function(){return{buildinf:{},vehiclelist:[],carrylist:[],name:"",date:"",time:"",y:"",m:"",d:"",adress:{},vehicleindex:0,carryindex:0,allprice:"",mallprice:"",sendprice:"",carryprice:"",remark:"",requireCarry:1,floor:""}},onLoad:function(e){var t=this;this.name=e.name,this.buildinf=wx.getStorageSync("buildinf"),wx.setStorageSync("buildinf",""),this.req_vehiclelist(),this.req_carrylist(),this.req_getdefaddress(),this.buildinf.forEach(function(e){t.mallprice+=e.price})},onShow:function(){wx.getStorageSync("adress")&&(this.adress=wx.getStorageSync("adress"),wx.setStorageSync("adress",""))},methods:{cg_requireCarry:function(e){this.requireCarry=e},getallprice:function(){this.allprice=(Number(this.mallprice)+Number(this.sendprice)+Number(this.carryprice)).toFixed(2)},cg_vehicleindex:function(e){this.vehicleindex=e,this.sendprice=this.vehiclelist[e].startPrice,this.getallprice()},cg_carryindex:function(e){this.carryindex=e,this.carryprice=this.carrylist[e].startPrice,this.getallprice()},go_mine_adress:function(){wx.navigateTo({url:"../mine/adress?src=pay"})},timeChange:function(e){this.time=e.detail.value},dateChange:function(e){this.date=e.detail.value;var t=this.date.split("-");this.y=t[0],this.m=t[1],this.d=t[2]},req_unifiedOrder:function(){this.date?this.time?this.floor?a.default.request({data:{addressId:this.adress.id,carryTypeId:this.carrylist[this.carryindex].id,expressTypeId:this.vehiclelist[this.vehicleindex].id,expressTime:this.date+this.time,floor:this.floor,goodsId:this.buildinf[0].goodsId,number:this.buildinf[0].num,remark:this.remark,requireCarry:this.requireCarry,specId:this.buildinf[0].id},url:"goods/order/unifiedOrder",c:!0}).then(function(e){a.default.totast("下单成功")}):a.default.totast("请选择楼层"):a.default.totast("请选择时间"):a.default.totast("请选择日期")},req_vehiclelist:function(){var e=this;a.default.request({url:"order/vehiclelist"}).then(function(t){e.vehiclelist=t,e.sendprice=e.vehiclelist[0].startPrice,e.getallprice()})},req_carrylist:function(){var e=this;a.default.request({url:"order/carrylist"}).then(function(t){e.carrylist=t,e.carryprice=e.carrylist[0].startPrice,e.getallprice()})},req_getdefaddress:function(){var e=this;a.default.request({url:"address/getdefaddress"}).then(function(t){e.adress=t})}}}},127:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"adress"},[i("div",{staticClass:"adressli",attrs:{eventid:"TDC-0"},on:{click:e.go_mine_adress}},[i("div",[e._v("姓      名："+e._s(e.adress.name))]),i("div",[e._v("联系方式："+e._s(e.adress.phone))]),i("div",{staticClass:"adressinf"},[i("div",[i("div"),i("span",[e._v("收货地址："+e._s(e.adress.provinceName+e.adress.countyAreaName+e.adress.cityName+e.adress.address))])]),i("image",{attrs:{src:"../../static/right.jpg"}})])])]),e._l(e.buildinf,function(t,s){return i("div",{key:t,staticClass:"payinf inff"},[i("div",[i("image",{attrs:{src:"../../static/index/fuwu.jpg"}}),i("div",[i("p",[i("view",[e._v(e._s(e.name))]),i("view",[i("span",[e._v("规格")]),i("span",[e._v(e._s(t.name))])]),i("view",[i("span",[e._v("数量")]),i("span",[e._v("x"+e._s(t.num))])])])],1)])])}),i("div",{staticClass:"payinf time"},[i("h1",[e._v("配送时间选择")]),i("p",[i("view",[e.disabled?e._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"date",value:"日期","custom-item":e.customItem,eventid:"UPD-1"},on:{change:e.dateChange}},[i("view",{staticClass:"picker"},[e._v("\n\t\t\t\t\t\t日期\n\t\t\t\t\t")])]),e.date?i("view",[i("span",[e._v(e._s(e.y))]),i("span",[e._v("年")]),i("span",[e._v(e._s(e.m))]),i("span",[e._v("月")]),i("span",[e._v(e._s(e.d))]),i("span",[e._v("日")])]):i("span",[e._v("请选择日期")])],1),i("view",[e.disabled?e._e():i("picker",{staticClass:"regionpicker",attrs:{mode:"time",value:"时间","custom-item":e.customItem,eventid:"jrZ-2"},on:{change:e.timeChange}},[i("view",{staticClass:"picker"},[e._v("\n\t\t\t\t\t\t时间\n\t\t\t\t\t")])]),i("span",[e._v("\n\t\t\t\t\t"+e._s(e.time||"请选择时间")+"\n\t\t\t\t")])],1)])],1),i("div",{staticClass:"payinf sendtype"},[i("h1",[e._v("配送方式")]),e._l(e.vehiclelist,function(t,s){return i("p",{key:s,attrs:{eventid:"HQd-3-"+s},on:{click:function(t){e.cg_vehicleindex(s)}}},[i("span",{class:{active:s==e.vehicleindex}},[e._v(e._s(t.name))]),i("span",[e._v("起步价￥"+e._s(t.startPrice))])])})],2),i("div",{staticClass:"payinf sendtype sendtype1"},[i("h1",[e._v("是否搬运上楼")]),i("p",{staticClass:"carry"},[1==e.requireCarry?i("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):i("image",{attrs:{src:"../../static/mine/check.jpg",eventid:"I64-4"},on:{click:function(t){e.cg_requireCarry(1)}}}),i("span",[e._v("是")]),2==e.requireCarry?i("image",{attrs:{src:"../../static/mine/uncheck.jpg"}}):i("image",{attrs:{src:"../../static/mine/check.jpg",eventid:"jUm-5"},on:{click:function(t){e.cg_requireCarry(2)}}}),i("span",[e._v("否")])]),i("p",{staticClass:"floor"},e._l(e.carrylist,function(t,s){return i("view",{key:s,attrs:{eventid:"EYn-6-"+s},on:{click:function(t){e.cg_carryindex(s)}}},[i("view",{class:{active:s==e.carryindex}}),i("view",[e._v(e._s(t.name))])])})),e.carrylist.length?i("p",{staticClass:"louceng"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.floor,expression:"floor"}],attrs:{placeholder:"请输入楼层",type:"number",eventid:"1wk-7"},domProps:{value:e.floor},on:{input:function(t){t.target.composing||(e.floor=t.target.value)}}}),e._v("层 起步价"+e._s(e.carrylist[e.carryindex].startPrice)+"\n\t\t")]):e._e()],1),i("div",{staticClass:"payinf remake"},[i("h1",[e._v("订单备注")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],attrs:{eventid:"J5D-8"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}})],1),i("div",{staticClass:"payinf mingxi"},[i("h1",[e._v("价格明细")]),i("div",{staticClass:"mingxiinf"},[i("p",[e._v("货款："+e._s(e.mallprice))]),i("p",[e._v("配送费："+e._s(e.sendprice))]),i("p",[e._v("搬运费："+e._s(e.carryprice))])],1)],1),i("div",{staticClass:"bgheight"}),i("div",{staticClass:"apply"},[i("span",[e._v("合计："),i("span",[e._v(e._s(e.allprice))])]),i("span",{attrs:{eventid:"2m9-9"},on:{click:e.req_unifiedOrder}},[e._v("确认支付")])])],2)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};t.a=r}},[123]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/build/pay.js.map