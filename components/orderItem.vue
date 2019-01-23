<template>
	<div>
	  <div class="order-item-detail">
		<div class="order-info">
			<span class="order-num">订单编号：{{data.orderNumber}}</span>
			<span class="order-status">{{data.statusName}}</span>
		</div>
		<div class="order-info">
			<image class="goods-picture noimage" :src="static+data.picture"></image>
			<div class="goods-info-wrap">
				<div class="goods-info">
					<p>{{data.serviceName}}</p>
					<p>¥ {{data.price}}</p>
				</div>
				<!-- <div class="goods-info">
					<p>规格</p>
					<p>{{data.serviceName}} </p>
				</div> -->
			</div>
		</div>
		<div class="goods-info">
			<div class="order-time">下单时间：{{data.createTime}}</div>
			<div class="order-time">合计: {{data.price}}</div>
		</div>
		<div class="order-options-wrap">
			<div class="order-options">
				<button v-if="data.status == 1" @click="changeCancelModal(true)" class="order-button">取消订单</button>
				<button v-if="data.status == 1" @click="goToPay" class="order-button order-pay">立即支付</button>
				<button v-if="data.status == 5" @click="changeConfirmModal(true)" class="order-button">确认方案</button>
				<button v-if="data.status == 8" @click="changeOrderCheck(true)" class="order-button">验收付款</button>
			</div>
		</div>
	  </div>
		
		<t-modal :reason="reason"  :visibile="order_status_visibile" @changeVisible = "changeOrderStatusModal">
			<order-status></order-status>
		</t-modal>
		
		<t-modal  :visibile="cancel_order_visibile" @changeVisible = "changeCancelModal">
			<cancel-modal cancelUrl="service/order/cancelOrder" @reload="reloadData" :orderId="data.id" :reason="reason"></cancel-modal>
		</t-modal>
		
		<t-modal  :visibile="confirm_order_visibile" @changeVisible = "changeConfirmModal">
			<confirm-plan @reload="reloadData" :orderId="data.id" :confirmPlanlist='confirmPlanlist'></confirm-plan>
		</t-modal>
		
		<t-modal  :visibile="confirm_ordercheck_visibile"    @changeVisible = "changeOrderCheck">
			<order-check @reload="reloadData" :orderId="data.id" :confirmPlanlist='confirmPlanlist'></order-check>
		</t-modal>
	</div>
</template>

<script>
import TModal from './tmodal.vue';
import OrderStatus from './orderStatus.vue';
import CancelModal from './cancelModal.vue';
import ConfirmPlan from './confirmModal.vue';
import orderCheck from './orderCheck.vue';
import ut from '../utils/index.js';
export default {
  props: ["data","reload","type"],
  data() {
	return {
		order_status_visibile: false,
		cancel_order_visibile: false,
		confirm_order_visibile: false,
		confirm_ordercheck_visibile:false,
		static:ut.static,
		reason: [],
		confirmPlanlist:[]
	}  
  },
  components: {
  	TModal,
	OrderStatus,
	CancelModal,
	ConfirmPlan,
	orderCheck
  },
  methods: {
		go_next() {
			wx.navigateTo({
				url: `../home/pay`
			})
		},
		reloadData() {
			this.$emit('reload');
		},
		goToPay() {
			ut.request({
				data: {
					orderId: ''
				},
				url: ""
			}).then(data=>{
				ut.pay(data,{
					complete: (res)=> {
						this.$parent.changeVisibileModal(false)
						this.reloadData();
					},
					success: () => {
						ut.totast("操作成功")
					}
				})
				
				console.log(data)
			})
		},
		getConfirmPlan() {
			ut.request({
				data: {
					orderId: this.data.id
				},
				method: 'get',
				url: "service/order/price"
			}).then(data=>{
				console.log(data)
				this.confirmPlanlist=data;
				//this.cancel_reason = data;
			})
		},
		getReasonType() {
			ut.request({
				data: {
					type: this.type
				},
				method: 'get',
				url: "service/order/cancelReason"
			}).then(data=>{
				this.reason = data;
			})
		},
		changeOrderStatusModal(status) {
			if(typeof status != 'undefined'){
				this.order_status_visibile = status;
			}
		},
		changeCancelModal(status) {
			if(status) {
				this.getReasonType();
			}
			if(typeof status != 'undefined'){
				this.cancel_order_visibile = status;
			}
		},
		changeConfirmModal(status) {
			if(status) {
				this.getConfirmPlan()
			}
			if(typeof status != 'undefined'){
				this.confirm_order_visibile = status;
			}
		},
		changeOrderCheck(status) {
			if(status) {
				this.getConfirmPlan()
			}
			if(typeof status != 'undefined'){
				this.confirm_ordercheck_visibile = status;
			}
		}
  }
}
</script>

<style>
	.order-item-detail {
		width: 100%;
		box-sizing: border-box;
		padding: 30upx;
		border-bottom: 1px solid #e5e5e5;
	}
	.order-info {
		display: flex;
		flex-direction: row;
		font-size: 24upx;
		color: #0b0708;
		margin-bottom: 30upx;
	}
	.order-num {
		flex: 1;
	}
	.order-status {
		text-align: right;
		color: #fec200;
	}
	.goods-picture {
		width: 200upx;
		height: 152upx;
	}
	.goods-info-wrap {
		flex: 1;
		padding-left: 32upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.goods-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.order-time {
		font-size: 24upx;
		color: #0b0708;
		margin-bottom: 28upx;
	}
	.order-button {
		width: 160upx;
		height: 50upx;
		background: #fec200;
		text-align: center;
		line-height: 50upx;
		color: #fff;
		font-size: 24upx;
	}
	.order-pay {
		margin-left: 10px;
	}
	.order-options-wrap {
		display: flex;
		justify-content: flex-end;
	}
	.order-options {
		display: flex;
		flex-direction: row;
	}
	.border-collapse {
		margin-right: 52upx;
	}
	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		position: fixed;
		top: 0upx;
		left: 0upx;
	}
	.action-main-wrap {
		width: 100%;
		max-height: 890upx;
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
	}
	.action-main {
		position: relative;
	}
	.order-status-wrap {
		padding-top: 123upx;
	}
	.order-status-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		font-size: 18upx;
		color: #0B0708;
	}
	.order-status-time {
		width: 333upx;
		height: 100%;
		text-align: right;
		box-sizing: border-box;
		padding-right: 31upx;
		
	}
	.order-status-icon {
		width: 28upx;
		height: 28upx;
		position: relative;
		top: 0upx;
		left: 15upx;
		z-index: 100;
	}
	.order-status-text {
		flex: 1;
		padding-bottom: 20upx;
		white-space: pre-wrap;
		padding-left: 58upx;
		padding-right: 93upx;
		border-left: 1px solid #fec200;
	}
	.order-status-last {
		border-left: 0upx;
	}
</style>
