(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/buildingGoods"],{"154a":function(t,e,a){"use strict";var n=a("fdc5"),i=a.n(n);i.a},"1be3":function(t,e,a){},"1dc0":function(t,e,a){"use strict";var n=a("d356"),i=a.n(n);i.a},"29e0":function(t,e,a){"use strict";var n=a("d315"),i=a.n(n);i.a},"2ab1":function(t,e,a){"use strict";a.r(e);var n=a("bf23"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"2b0d":function(t,e,a){"use strict";a.r(e);var n=a("d946"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"4db3":function(t,e,a){"use strict";a.r(e);var n=a("ec47"),i=a("2b0d");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("154a");var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"244345e9",null);c.options.__file="goodsconfirmModal.vue",e["default"]=c.exports},"6fc3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("701a"));function i(t){return t&&t.__esModule?t:{default:t}}var r={props:["orderId","reload","changeVisibileModal","confirmPlanlist"],data:function(){return{check:!1}},onLoad:function(){console.log(this.confirmPlanlist)},methods:{againPlan:function(){var t=this;n.default.request({data:{orderId:this.orderId},url:"service/order/againPrice"}).then(function(e){t.$parent.changeVisibileModal(!1),t.$emit("reload"),n.default.totast("操作成功"),console.log(e)})},cg_check:function(){this.check=!this.check},orderCheck:function(){var t=this;this.check?n.default.request({data:{orderId:this.orderId},url:"service/order/check"}).then(function(e){n.default.pay(e,{complete:function(e){t.$parent.changeVisibileModal(!1),t.$emit("reload")},success:function(){n.default.totast("操作成功")}})}):n.default.totast("请确认验收完成")}}};e.default=r},7821:function(t,e,a){"use strict";a.r(e);var n=a("6fc3"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"7f83":function(t,e,a){"use strict";a.r(e);var n=a("b829"),i=a("fb44");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("29e0");var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);c.options.__file="goodsOrderItem.vue",e["default"]=c.exports},"8a36":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=d(a("09e2")),i=d(a("8f52")),r=d(a("8a60")),o=d(a("4db3")),c=d(a("b3b1")),s=d(a("701a"));function d(t){return t&&t.__esModule?t:{default:t}}var l={props:["data","reason","reload"],data:function(){return{static:s.default.static,order_status_visibile:!1,cancel_order_visibile:!1,confirm_order_visibile:!1,confirm_ordercheck_visibile:!1,confirmPlanlist:[]}},components:{TModal:n.default,OrderStatus:i.default,CancelModal:r.default,ConfirmPlan:o.default,orderCheck:c.default},methods:{go_next:function(){wx.navigateTo({url:"../home/pay"})},reloadData:function(){this.$emit("reload")},getConfirmPlan:function(){var t=this;s.default.request({data:{orderId:this.data.id},method:"get",url:"goods/order/carryPrice"}).then(function(e){console.log(e),t.confirmPlanlist=e})},changeOrderStatusModal:function(t){"undefined"!=typeof t&&(this.order_status_visibile=t)},changeCancelModal:function(t){"undefined"!=typeof t&&(this.cancel_order_visibile=t)},changeConfirmModal:function(t){t&&this.getConfirmPlan(),"undefined"!=typeof t&&(this.confirm_order_visibile=t)},changeOrderCheck:function(t){t&&this.getConfirmPlan(),"undefined"!=typeof t&&(this.confirm_ordercheck_visibile=t)}}};e.default=l},"8a60":function(t,e,a){"use strict";a.r(e);var n=a("9491"),i=a("f003");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("ed87");var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);c.options.__file="goodscancelModal.vue",e["default"]=c.exports},9491:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cancel-order-modal"},[a("div",{staticClass:"cancel-order-condition"},[a("div",{staticClass:"cancel-order-title"},[t._v("取消原因")]),a("div",{staticClass:"cancel-order-check-wrap"},t._l(t.reason,function(e,n){return a("div",{key:n,class:t.chooseData==e.id?"cancel-order-checked":"cancel-order-check-group",attrs:{eventid:"f140ebc2-0-"+n},on:{click:function(a){t.choose(e.id)}}},[a("div",{staticClass:"check-box"}),a("div",{staticClass:"check-label"},[t._v(t._s(e.context))])])})),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.detail,expression:"detail"}],staticClass:"cancel-order-des",attrs:{eventid:"f140ebc2-1"},domProps:{value:t.detail},on:{input:function(e){e.target.composing||(t.detail=e.target.value)}}})]),a("button",{staticClass:"cancel-button",attrs:{eventid:"f140ebc2-2"},on:{click:t.cancel_confirm}},[t._v("确认取消")])],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},a31f:function(t,e,a){"use strict";var n=a("fcc9"),i=a.n(n);i.a},ab45:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cancel-order-modal"},[t._l(t.confirmPlanlist,function(e,n){return a("div",{key:n,staticClass:"cancel-order-condition"},[e.type?a("div",{staticClass:"cancel-order-title"},[t._v(t._s(1==e.type?"技术服务类":"配件类"))]):t._e(),a("div",{staticClass:"cancel-statement-wrap"},t._l(e.prices,function(e,n){return a("div",{key:n,staticClass:"cancel-radio-wrap"},[a("span",{staticClass:"cancel-radio"}),a("span",{staticClass:"cancel-label"},[t._v(t._s(e.name+" "+e.price+e.unit+" x"+e.number))])])}))])}),a("div",{staticClass:"zhanwei"}),a("div",{staticClass:"agree-plan-wrap"},[a("div",[a("image",{attrs:{src:"/static/mine/"+(t.check?"un":"")+"check.jpg",eventid:"4375b30e-0"},on:{click:t.cg_check}}),a("span",[t._v("验收完成")])]),a("button",{staticClass:"cancel-plan agree-plan",attrs:{eventid:"4375b30e-1"},on:{click:t.orderCheck}},[t._v("付款")])],1)],2)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},b3b1:function(t,e,a){"use strict";a.r(e);var n=a("ab45"),i=a("7821");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("1dc0");var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"bad4f5a8",null);c.options.__file="goodsorderCheck.vue",e["default"]=c.exports},b829:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-item-detail"},[a("div",{staticClass:"order-info"},[a("span",{staticClass:"order-num"},[t._v("订单编号："+t._s(t.data.orderNumber))]),a("span",{staticClass:"order-status"},[t._v(t._s(t.data.statusName))])]),t._l(t.data.orderGoods,function(e,n){return a("div",{key:e,staticClass:"order-info"},[a("image",{staticClass:"goods-picture noimage",attrs:{src:t.static+e.picture}}),a("div",{staticClass:"goods-info-wrap"},[a("div",{staticClass:"goods-info"},[a("p",[t._v(t._s(e.goodsName))]),a("p",[t._v("¥ "+t._s(e.goodsPrice))])],1),a("div",{staticClass:"goods-info"},[a("p",[t._v("规格:"+t._s(e.goodsSpec))]),a("p",[t._v("×"+t._s(e.number)+" ")])],1)])])}),a("div",{staticClass:"goods-info"},[a("div",{staticClass:"order-time"},[t._v("下单时间："+t._s(t.data.createTime))]),a("div",{staticClass:"order-time"},[t._v("合计: "+t._s(t.data.total))])]),a("div",{staticClass:"order-options-wrap"},[a("div",{staticClass:"order-options"},[1==t.data.status?a("button",{staticClass:"order-button",attrs:{eventid:"360617a6-0"},on:{click:function(e){t.changeCancelModal(!0)}}},[t._v("取消订单")]):t._e(),5==t.data.status?a("button",{staticClass:"order-button",attrs:{eventid:"360617a6-1"},on:{click:function(e){t.changeConfirmModal(!0)}}},[t._v("确认方案")]):t._e(),8==t.data.status?a("button",{staticClass:"order-button border-collapse",attrs:{eventid:"360617a6-2"},on:{click:function(e){t.changeConfirmModal(!0)}}},[t._v("配送议价")]):t._e(),8==t.data.status?a("button",[t._v("验收付款")]):t._e()],1)])],2),a("t-modal",{attrs:{reason:t.reason,visibile:t.order_status_visibile,eventid:"360617a6-3",mpcomid:"360617a6-1"},on:{changeVisible:t.changeOrderStatusModal}},[a("order-status",{attrs:{mpcomid:"360617a6-0"}})],1),a("t-modal",{attrs:{visibile:t.cancel_order_visibile,eventid:"360617a6-5",mpcomid:"360617a6-3"},on:{changeVisible:t.changeCancelModal}},[a("cancel-modal",{attrs:{cancelUrl:"goods/order/cancelOrder",orderId:t.data.id,reason:t.reason,eventid:"360617a6-4",mpcomid:"360617a6-2"},on:{reload:t.reloadData}})],1),a("t-modal",{attrs:{visibile:t.confirm_order_visibile,eventid:"360617a6-7",mpcomid:"360617a6-5"},on:{changeVisible:t.changeConfirmModal}},[a("confirm-plan",{attrs:{orderId:t.data.id,confirmPlanlist:t.confirmPlanlist,eventid:"360617a6-6",mpcomid:"360617a6-4"},on:{reload:t.reloadData}})],1),a("t-modal",{attrs:{visibile:t.confirm_ordercheck_visibile,eventid:"360617a6-9",mpcomid:"360617a6-7"},on:{changeVisible:t.changeOrderCheck}},[a("order-check",{attrs:{orderId:t.data.id,confirmPlanlist:t.confirmPlanlist,eventid:"360617a6-8",mpcomid:"360617a6-6"},on:{reload:t.reloadData}})],1)],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},bf23:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(a("7f83")),i=r(a("701a"));function r(t){return t&&t.__esModule?t:{default:t}}var o={components:{goodsOrderItem:n.default},data:function(){return{order_list:[],cancel_reason:[],type:""}},onLoad:function(t){this.type=t.type;var e="查看订单";1==this.type?e="查看订单":2==this.type?e="配送方案":3==this.type?e="搬运议价确认":4==this.type&&(e="建材商品类退换"),wx.setNavigationBarTitle({title:e}),this.init()},methods:{init:function(){this.getOrderList(),1==this.type&&this.getReasonType()},getOrderList:function(){var t=this;i.default.request({data:{type:this.type},method:"get",url:"goods/order/goodsOrderList"}).then(function(e){console.log(e),e.forEach(function(t){t.orderGoods.forEach(function(t){t.picture&&(t.picture=t.picture.split(",")[0])})}),t.order_list=e})},getReasonType:function(){var t=this;i.default.request({data:{type:1},method:"get",url:"service/order/cancelReason"}).then(function(e){console.log(e),t.cancel_reason=e})}}};e.default=o},c76b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"order-tip"},[1==t.type?a("p",{staticClass:"order-tip-text"},[t._v("您可以在此页面查看您已付上门费的订单和“查看状态”")]):t._e(),2==t.type?a("p",{staticClass:"order-tip-text"},[t._v("待木斗工匠上门与您协商后，您可在此页面找到相应订单，选择“同意付款”“重新申报”确定具体方案及价格")]):t._e(),3==t.type?a("p",{staticClass:"order-tip-text"},[t._v("木斗工匠已完工并且您已现场验收后请找到相应订单点击“请验收”确认支付尾款，完成方案并对“图文评价”并发布")]):t._e(),4==t.type?a("p",{staticClass:"order-tip-text"},[t._v("建材商品类退换")]):t._e()],1),t.order_list.length>0?a("div",t._l(t.order_list,function(e,n){return a("div",{key:n},[a("goods-order-item",{attrs:{data:e,reason:t.cancel_reason,eventid:"37084c7f-0-"+n,mpcomid:"37084c7f-0-"+n},on:{reload:t.init}})],1)})):t._e()])},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},d315:function(t,e,a){},d356:function(t,e,a){},d946:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("701a"));function i(t){return t&&t.__esModule?t:{default:t}}var r={props:["orderId","reload","changeVisibileModal","confirmPlanlist"],data:function(){return{}},methods:{againPlan:function(){var t=this;n.default.request({data:{orderId:this.orderId},url:"goods/order/reDeclareCarryPrice"}).then(function(e){t.$parent.changeVisibileModal(!1),t.$emit("reload"),n.default.totast("操作成功"),console.log(e)})},confirmPlan:function(){var t=this;n.default.request({data:{orderId:this.orderId},url:"goods/order/agreeCarryPrice"}).then(function(e){n.default.pay(e,{complete:function(e){t.$parent.changeVisibileModal(!1),t.$emit("reload")},success:function(){n.default.totast("操作成功")}})})}}};e.default=r},d9ee:function(t,e,a){"use strict";a("33f4");var n=r(a("b0ce")),i=r(a("fecf"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},de4d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("701a"));function i(t){return t&&t.__esModule?t:{default:t}}var r={props:["reason","orderId","reload","changeVisibileModal","cancelUrl"],data:function(){return{chooseData:null,detail:""}},methods:{choose:function(t){this.chooseData=t},cancel_order:function(){var t=this;n.default.request({data:{orderId:this.orderId,reasonId:this.chooseData,detail:this.detail},url:this.cancelUrl}).then(function(e){t.$parent.changeVisibileModal(!1),t.$emit("reload"),n.default.totast("订单取消成功")})},cancel_confirm:function(){var t=this;this.chooseData?wx.showModal({title:"",content:"您确定要取消该订单吗？",success:function(e){if(e.confirm)t.cancel_order();else if(e.cancel)return}}):n.default.totast("请选择取消原因")}}};e.default=r},ec47:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cancel-order-modal"},[t._l(t.confirmPlanlist,function(e,n){return a("div",{key:n,staticClass:"cancel-order-condition"},[e.type?a("div",{staticClass:"cancel-order-title"},[t._v(t._s(1==e.type?"技术服务类":"配件类"))]):t._e(),a("div",{staticClass:"cancel-statement-wrap"},t._l(e.prices,function(e,n){return a("div",{key:n,staticClass:"cancel-radio-wrap"},[a("span",{staticClass:"cancel-radio"}),a("span",{staticClass:"cancel-label"},[t._v(t._s(e.name+" "+e.price+e.unit+" x"+e.number))])])}))])}),a("div",{staticClass:"agree-plan-wrap"},[a("button",{staticClass:"cancel-plan agree-plan",attrs:{eventid:"578be381-0"},on:{click:t.againPlan}},[t._v("重新申报")]),a("button",{staticClass:"cancel-plan agree-plan",attrs:{eventid:"578be381-1"},on:{click:t.confirmPlan}},[t._v("同意并付款")])],1)],2)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},ed87:function(t,e,a){"use strict";var n=a("1be3"),i=a.n(n);i.a},f003:function(t,e,a){"use strict";a.r(e);var n=a("de4d"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},fb44:function(t,e,a){"use strict";a.r(e);var n=a("8a36"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},fcc9:function(t,e,a){},fdc5:function(t,e,a){},fecf:function(t,e,a){"use strict";a.r(e);var n=a("c76b"),i=a("2ab1");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("a31f");var o=a("2877"),c=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);c.options.__file="buildingGoods.vue",e["default"]=c.exports}},[["d9ee","common/runtime","common/vendor"]]]);