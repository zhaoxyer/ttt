require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{265:function(e,t,o){"use strict";var a=r(o(2)),n=r(o(266));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},266:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(268),n=o.n(a),r=o(285),s=!1;var i=function(e){s||o(267)},c=o(0)(n.a,r.a,i,null,null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\pages\\order\\buildingGoods.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] buildingGoods.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},267:function(e,t){},268:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(o(269)),n=r(o(1));function r(e){return e&&e.__esModule?e:{default:e}}t.default={components:{goodsOrderItem:a.default},data:function(){return{order_list:[],cancel_reason:[],type:""}},onLoad:function(e){this.type=e.type;var t="查看订单";1==this.type?t="查看订单":2==this.type?t="配送方案":3==this.type?t="搬运议价确认":4==this.type&&(t="建材商品类退换"),wx.setNavigationBarTitle({title:t}),this.init()},methods:{init:function(){this.getOrderList(),1==this.type&&this.getReasonType()},getOrderList:function(){var e=this;n.default.request({data:{type:this.type},method:"get",url:"goods/order/goodsOrderList"}).then(function(t){console.log(t),t.forEach(function(e){e.orderGoods.forEach(function(e){e.picture&&(e.picture=e.picture.split(",")[0])})}),e.order_list=t})},getReasonType:function(){var e=this;n.default.request({data:{type:1},method:"get",url:"service/order/cancelReason"}).then(function(t){console.log(t),e.cancel_reason=t})}}}},269:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(271),n=o.n(a),r=o(284),s=!1;var i=function(e){s||o(270)},c=o(0)(n.a,r.a,i,null,null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\components\\goodsOrderItem.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] goodsOrderItem.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},270:function(e,t){},271:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(o(11)),n=l(o(12)),r=l(o(272)),s=l(o(276)),i=l(o(280)),c=l(o(1));function l(e){return e&&e.__esModule?e:{default:e}}t.default={props:["data","reason","reload"],data:function(){return{static:c.default.static,order_status_visibile:!1,cancel_order_visibile:!1,confirm_order_visibile:!1,confirm_ordercheck_visibile:!1,confirmPlanlist:[]}},components:{TModal:a.default,OrderStatus:n.default,CancelModal:r.default,ConfirmPlan:s.default,orderCheck:i.default},methods:{go_next:function(){wx.navigateTo({url:"../home/pay"})},reloadData:function(){this.$emit("reload")},getConfirmPlan:function(){var e=this;c.default.request({data:{orderId:this.data.id},method:"get",url:"goods/order/carryPrice"}).then(function(t){console.log(t),e.confirmPlanlist=t})},changeOrderStatusModal:function(e){void 0!==e&&(this.order_status_visibile=e)},changeCancelModal:function(e){void 0!==e&&(this.cancel_order_visibile=e)},changeConfirmModal:function(e){e&&this.getConfirmPlan(),void 0!==e&&(this.confirm_order_visibile=e)},changeOrderCheck:function(e){e&&this.getConfirmPlan(),void 0!==e&&(this.confirm_ordercheck_visibile=e)}}}},272:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(274),n=o.n(a),r=o(275),s=!1;var i=function(e){s||o(273)},c=o(0)(n.a,r.a,i,null,null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\components\\goodscancelModal.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] goodscancelModal.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},273:function(e,t){},274:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(1),r=(a=n)&&a.__esModule?a:{default:a};t.default={props:["reason","orderId","reload","changeVisibileModal","cancelUrl"],data:function(){return{chooseData:null,detail:""}},methods:{choose:function(e){this.chooseData=e},cancel_order:function(){var e=this;r.default.request({data:{orderId:this.orderId,reasonId:this.chooseData,detail:this.detail},url:this.cancelUrl}).then(function(t){e.$parent.changeVisibileModal(!1),e.$emit("reload"),r.default.totast("订单取消成功")})},cancel_confirm:function(){var e=this;this.chooseData?wx.showModal({title:"",content:"您确定要取消该订单吗？",success:function(t){if(t.confirm)e.cancel_order();else if(t.cancel)return}}):r.default.totast("请选择取消原因")}}}},275:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cancel-order-modal"},[o("div",{staticClass:"cancel-order-condition"},[o("div",{staticClass:"cancel-order-title"},[e._v("\n\t\t取消原因\n\t\t")]),o("div",{staticClass:"cancel-order-check-wrap"},e._l(e.reason,function(t,a){return o("div",{key:a,class:e.chooseData==t.id?"cancel-order-checked":"cancel-order-check-group",attrs:{eventid:"QYc-0-"+a},on:{click:function(o){e.choose(t.id)}}},[o("div",{staticClass:"check-box"}),o("div",{staticClass:"check-label"},[e._v(e._s(t.context))])])})),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.detail,expression:"detail"}],staticClass:"cancel-order-des",attrs:{eventid:"ARk-1"},domProps:{value:e.detail},on:{input:function(t){t.target.composing||(e.detail=t.target.value)}}})]),o("button",{staticClass:"cancel-button",attrs:{eventid:"syy-2"},on:{click:e.cancel_confirm}},[e._v("确认取消")])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n},276:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(278),n=o.n(a),r=o(279),s=!1;var i=function(e){s||o(277)},c=o(0)(n.a,r.a,i,"data-v-5cf4a23e",null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\components\\goodsconfirmModal.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] goodsconfirmModal.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},277:function(e,t){},278:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(1),r=(a=n)&&a.__esModule?a:{default:a};t.default={props:["orderId","reload","changeVisibileModal","confirmPlanlist"],data:function(){return{}},methods:{againPlan:function(){var e=this;r.default.request({data:{orderId:this.orderId},url:"goods/order/reDeclareCarryPrice"}).then(function(t){e.$parent.changeVisibileModal(!1),e.$emit("reload"),r.default.totast("操作成功"),console.log(t)})},confirmPlan:function(){var e=this;r.default.request({data:{orderId:this.orderId},url:"goods/order/agreeCarryPrice"}).then(function(t){e.$parent.changeVisibileModal(!1),e.$emit("reload"),r.default.totast("操作成功"),console.log(t)})}}}},279:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cancel-order-modal"},[e._l(e.confirmPlanlist,function(t,a){return o("div",{key:a,staticClass:"cancel-order-condition"},[t.type?o("div",{staticClass:"cancel-order-title"},[e._v("\n\t\t"+e._s(t.type)+"\n\t\t")]):e._e(),o("div",{staticClass:"cancel-statement-wrap"},e._l(t.prices,function(t,a){return o("div",{key:a,staticClass:"cancel-radio-wrap"},[o("span",{staticClass:"cancel-radio"}),o("span",{staticClass:"cancel-label"},[e._v(e._s(t.name+""+t.price))])])}))])}),o("div",{staticClass:"agree-plan-wrap"},[o("button",{staticClass:"cancel-plan agree-plan",attrs:{eventid:"qdf-0"},on:{click:e.againPlan}},[e._v("重新申报")]),o("button",{staticClass:"cancel-plan agree-plan",attrs:{eventid:"yEB-1"},on:{click:e.confirmPlan}},[e._v("同意并付款")])],1)],2)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n},280:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(282),n=o.n(a),r=o(283),s=!1;var i=function(e){s||o(281)},c=o(0)(n.a,r.a,i,"data-v-823e6eea",null);c.options.__file="C:\\Users\\hasee\\Documents\\HBuilderProjects\\mall\\components\\goodsorderCheck.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] goodsorderCheck.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},281:function(e,t){},282:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(1),r=(a=n)&&a.__esModule?a:{default:a};t.default={props:["orderId","reload","changeVisibileModal","confirmPlanlist"],data:function(){return{check:!1}},onLoad:function(){console.log(this.confirmPlanlist)},methods:{againPlan:function(){var e=this;r.default.request({data:{orderId:this.orderId},url:"service/order/againPrice"}).then(function(t){e.$parent.changeVisibileModal(!1),e.$emit("reload"),r.default.totast("操作成功"),console.log(t)})},cg_check:function(){this.check=!this.check},orderCheck:function(){var e=this;this.check?r.default.request({data:{orderId:this.orderId},url:"service/order/check"}).then(function(t){e.$parent.changeVisibileModal(!1),e.$emit("reload"),r.default.totast("操作成功"),console.log(t)}):r.default.totast("请确认验收完成")}}}},283:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"cancel-order-modal"},[e._l(e.confirmPlanlist,function(t,a){return o("div",{key:a,staticClass:"cancel-order-condition"},[t.type?o("div",{staticClass:"cancel-order-title"},[e._v("\n\t\t "+e._s(t.type)+"\n\t\t")]):e._e(),o("div",{staticClass:"cancel-statement-wrap"},e._l(t.prices,function(t,a){return o("div",{key:a,staticClass:"cancel-radio-wrap"},[o("span",{staticClass:"cancel-radio"}),o("span",{staticClass:"cancel-label"},[e._v(e._s(t.name+""+t.price))])])}))])}),o("div",{staticClass:"zhanwei"}),o("div",{staticClass:"agree-plan-wrap"},[o("div",[o("image",{attrs:{src:"/static/mine/"+(e.check?"un":"")+"check.jpg",eventid:"uV2-0"},on:{click:e.cg_check}}),o("span",[e._v("验收完成")])]),o("button",{staticClass:"cancel-plan agree-plan",attrs:{eventid:"YC1-1"},on:{click:e.orderCheck}},[e._v("付款")])],1)],2)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n},284:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"order-item-detail"},[o("div",{staticClass:"order-info"},[o("span",{staticClass:"order-num"},[e._v("订单编号："+e._s(e.data.orderNumber))]),o("span",{staticClass:"order-status"},[e._v(e._s(e.data.statusName))])]),e._l(e.data.orderGoods,function(t,a){return o("div",{key:t,staticClass:"order-info"},[o("image",{staticClass:"goods-picture noimage",attrs:{src:e.static+t.picture}}),o("div",{staticClass:"goods-info-wrap"},[o("div",{staticClass:"goods-info"},[o("p",[e._v(e._s(t.goodsName))]),o("p",[e._v("¥ "+e._s(t.goodsPrice))])],1),o("div",{staticClass:"goods-info"},[o("p",[e._v("规格:"+e._s(t.goodsSpec))]),o("p",[e._v("×"+e._s(t.number)+" ")])],1)])])}),o("div",{staticClass:"goods-info"},[o("div",{staticClass:"order-time"},[e._v("下单时间："+e._s(e.data.createTime))]),o("div",{staticClass:"order-time"},[e._v("合计: "+e._s(e.data.total))])]),o("div",{staticClass:"order-options-wrap"},[o("div",{staticClass:"order-options"},[1==e.data.status?o("button",{staticClass:"order-button",attrs:{eventid:"6yn-0"},on:{click:function(t){e.changeCancelModal(!0)}}},[e._v("取消订单")]):e._e(),5==e.data.status?o("button",{staticClass:"order-button",attrs:{eventid:"9XL-1"},on:{click:function(t){e.changeConfirmModal(!0)}}},[e._v("确认方案")]):e._e(),8==e.data.status?o("button",{staticClass:"order-button border-collapse",attrs:{eventid:"b4t-2"},on:{click:function(t){e.changeConfirmModal(!0)}}},[e._v("配送议价")]):e._e(),8==e.data.status?o("button",[e._v("验收付款")]):e._e()],1)])],2),o("t-modal",{attrs:{reason:e.reason,visibile:e.order_status_visibile,eventid:"yIR-3",mpcomid:"l5m-1"},on:{changeVisible:e.changeOrderStatusModal}},[o("order-status",{attrs:{mpcomid:"Fq2-0"}})],1),o("t-modal",{attrs:{visibile:e.cancel_order_visibile,eventid:"zkw-5",mpcomid:"4bw-3"},on:{changeVisible:e.changeCancelModal}},[o("cancel-modal",{attrs:{cancelUrl:"goods/order/cancelOrder",orderId:e.data.id,reason:e.reason,eventid:"Lrk-4",mpcomid:"bvD-2"},on:{reload:e.reloadData}})],1),o("t-modal",{attrs:{visibile:e.confirm_order_visibile,eventid:"yZL-7",mpcomid:"si6-5"},on:{changeVisible:e.changeConfirmModal}},[o("confirm-plan",{attrs:{orderId:e.data.id,confirmPlanlist:e.confirmPlanlist,eventid:"K2C-6",mpcomid:"b0u-4"},on:{reload:e.reloadData}})],1),o("t-modal",{attrs:{visibile:e.confirm_ordercheck_visibile,eventid:"DNk-9",mpcomid:"ap6-7"},on:{changeVisible:e.changeOrderCheck}},[o("order-check",{attrs:{orderId:e.data.id,confirmPlanlist:e.confirmPlanlist,eventid:"FZj-8",mpcomid:"yhQ-6"},on:{reload:e.reloadData}})],1)],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n},285:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"order-tip"},[1==e.type?o("p",{staticClass:"order-tip-text"},[e._v("您可以在此页面查看您已付上门费的订单和“查看状态”")]):e._e(),2==e.type?o("p",{staticClass:"order-tip-text"},[e._v("待木斗工匠上门与您协商后，您可在此页面找到相应订单，选择“同意付款”“重新申报”确定具体方案及价格")]):e._e(),3==e.type?o("p",{staticClass:"order-tip-text"},[e._v("木斗工匠已完工并且您已现场验收后请找到相应订单点击“请验收”确认支付尾款，完成方案并对“图文评价”并发布")]):e._e(),4==e.type?o("p",{staticClass:"order-tip-text"},[e._v("建材商品类退换")]):e._e()],1),e.order_list.length>0?o("div",e._l(e.order_list,function(t,a){return o("div",{key:a},[o("goods-order-item",{attrs:{data:t,reason:e.cancel_reason,eventid:"0Y4-0-"+a,mpcomid:"F3t-0-"+a},on:{reload:e.init}})],1)})):e._e()])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};t.a=n}},[265]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/order/buildingGoods.js.map