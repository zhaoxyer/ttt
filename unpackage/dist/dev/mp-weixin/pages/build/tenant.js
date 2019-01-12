require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{50:function(t,i,s){"use strict";var a=e(s(1)),l=e(s(51));function e(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(l.default))},51:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=s(53),l=s.n(a),e=s(54),n=!1;var c=function(t){n||s(52)},r=s(0)(l.a,e.a,c,null,null);r.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\build\\tenant.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] tenant.vue: functional components are not supported with templates, they should use render functions."),i.default=r.exports},52:function(t,i){},53:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a,l=s(2),e=(a=l)&&a.__esModule?a:{default:a};i.default={data:function(){return{type:0,malllist:[],typeList:[],mallnum:0,mallprice:0,pop:!1,storeid:"",classid:"",class_id:""}},onLoad:function(t){this.malllist=this.malllistmap([{img:"../../static/build/mall.png",price:38,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:11.22,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:1000.31,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:38.23,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:38.53,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:138.42,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:48,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:19.22,name:"不锈钢加厚荷叶",num:"300"},{img:"../../static/build/mall.png",price:38.99,name:"不锈钢加厚荷叶",num:"300"}]),this.classid=t.classid,this.storeid=t.storeid,this.req_storeclasslist()},methods:{cg_pop:function(){(this.pop||this.mallnum)&&(this.pop=!this.pop)},cg_type:function(t){this.type=t},go_build_pay:function(){wx.navigateTo({url:"../build/pay"})},go_build_mallinf:function(){wx.navigateTo({url:"../build/mallinf"})},minus:function(t){this.malllist[t].mallnum-=1,this.mallnum-=1,this.mallprice=(Number(this.mallprice)-Number(this.malllist[t].price)).toFixed(2),0==this.mallnum&&(this.pop=!1)},add:function(t){this.malllist[t].mallnum+=1,this.mallnum+=1,this.mallprice=(Number(this.mallprice)+Number(this.malllist[t].price)).toFixed(2)},malllistmap:function(t){return t.map(function(t){return t.price=Number(t.price).toFixed(2),t.mallnum=0,t})},cleanbar:function(){this.mallnum=0,this.mallprice=0,this.malllist=this.malllistmap(this.malllist),this.pop=!1},req_storeclasslist:function(){var t=this;e.default.request({data:{storeid:this.storeid},url:"goods/storeclasslist"}).then(function(i){t.typeList=i,t.class_id=i[0].id}).then(function(i){t.req_goodslist()})},req_goodslist:function(){e.default.request({data:{storeid:this.storeid,classid:this.classid,class_id:this.class_id},url:"goods/goodslist"}).then(function(t){})}}}},54:function(t,i,s){"use strict";var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"mallinf1"},[s("div",{staticClass:"otherinf"},[t._m(0),s("div",{staticClass:"mallname"},[s("p",[t._v("盛丰")]),s("p",[t._v("五金")])],1),t._m(1)]),s("image",{staticClass:"mallimage",attrs:{src:"../../static/build/mall.jpg"}})]),s("div",{staticClass:"section"},[s("scroll-view",{staticClass:"nav",attrs:{"scroll-y":"true"}},t._l(t.typeList,function(i,a){return s("div",{key:i,class:{active:t.type==a},attrs:{eventid:"5p1-0-"+a},on:{click:function(i){t.cg_type(a)}}},[t._v(t._s(i.name))])})),s("scroll-view",{staticClass:"list",attrs:{"scroll-y":"true"}},t._l(t.malllist,function(i,a){return s("div",{key:i,staticClass:"mall1inf",attrs:{eventid:"8xR-3-"+a},on:{click:t.go_build_mallinf}},[s("image",{attrs:{src:i.img}}),s("div",[s("p",[t._v(t._s(i.name))]),s("p",[t._v("月销"+t._s(i.num)+"笔")]),s("p",{staticClass:"add"}),s("div",{staticClass:"addedit"},[i.mallnum?s("image",{attrs:{src:"../../static/build/minus.png",eventid:"cmI-1-"+a},on:{click:function(i){i.stopPropagation(),t.minus(a)}}}):t._e(),i.mallnum?s("span",[t._v(t._s(i.mallnum))]):t._e(),s("image",{attrs:{src:"../../static/build/add.png",eventid:"1Op-2-"+a},on:{click:function(i){i.stopPropagation(),t.add(a)}}})]),s("span",[t._v("￥"+t._s(i.price))]),s("p")],1)])}))],1),s("div",{staticClass:"footer"},[s("div",{staticClass:"edit"},[s("span",[t._v("加入购物车")]),s("span",{attrs:{eventid:"bRo-4"},on:{click:t.go_build_pay}},[t._v("购买")])]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.mallnum,expression:"mallnum"}],staticClass:"mallnum"},[t._v(t._s(t.mallnum))]),s("image",{staticClass:"logo",attrs:{src:"../../static/logo.jpg",eventid:"rC7-5"},on:{click:t.cg_pop}}),s("span",{directives:[{name:"show",rawName:"v-show",value:t.mallnum,expression:"mallnum"}],staticClass:"money"},[t._v("￥"+t._s(t.mallprice))])]),t.pop?s("div",{staticClass:"pop",attrs:{eventid:"adj-9"},on:{click:[t.cg_pop,function(i){i.stopPropagation(),t.cleanbar(i)}]}},[s("div",{staticClass:"popcont"},[t._m(2),s("div",{staticClass:"barlist"},t._l(t.malllist,function(i,a){return i.mallnum?s("div",{key:a,staticClass:"add1",attrs:{eventid:"ZCM-8-"+a},on:{click:function(t){t.stopPropagation()}}},[s("div",{staticClass:"addedit addedit1"},[s("image",{attrs:{src:"../../static/build/minus.png",eventid:"B94-6-"+a},on:{click:function(i){i.stopPropagation(),t.minus(a)}}}),s("span",[t._v(t._s(i.mallnum))]),s("image",{attrs:{src:"../../static/build/add.png",eventid:"W3F-7-"+a},on:{click:function(i){i.stopPropagation(),t.add(a)}}})]),s("span",{staticClass:"barname"},[t._v(t._s(i.name))]),s("span",{staticClass:"barmoney"},[t._v("￥"+t._s(i.price))])]):t._e()}))])]):t._e()])};a._withStripped=!0;var l={render:a,staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"share"},[i("div",[i("image",{attrs:{src:"../../static/home/share.png"}}),i("div",[this._v("分享")])]),i("div",[i("image",{attrs:{src:"../../static/home/share.png"}}),i("div",[this._v("收藏")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"malladress"},[i("view",[this._v("盛丰五金建材")]),i("view",[this._v("通州区运河西大道")])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"delbar"},[i("image",{attrs:{src:"../../static/mine/del.png"}}),i("span",[this._v("清空购物车")])])}]};i.a=l}},[50]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/build/tenant.js.map