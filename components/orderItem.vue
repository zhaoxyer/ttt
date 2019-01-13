<template>
	<div>
	  <div class="order-item-detail">
		<div class="order-info">
			<span class="order-num">订单编号：FW20180816001</span>
			<span class="order-status">已付款</span>
		</div>
		<div class="order-info">
			<div class="goods-picture"></div>
			<div class="goods-info-wrap">
				<div class="goods-info">
					<p>私人定制商铺</p>
				</div>
				<div class="goods-info">
					<p>橱柜</p>
					<p>¥ 200.00 </p>
				</div>
				<div class="goods-info">
					<p>商家电话</p>
					<p>11111111111 </p>
				</div>
				<div class="goods-info">
					<p>商家地址</p>
					<p>通州建材城</p>
				</div>
			</div>
		</div>
		<div class="order-time">下单时间：20180816 15:30</div>
		<div class="order-options-wrap">
			<div class="order-options">
				<button @click="changeCancelModal(true)" class="order-button border-collapse">取消订单</button>
				<button @click="changeOrderStatusModal(true)" class="order-button">订单状态</button>
			</div>
		</div>
	  </div>
	  <t-modal  :visibile="order_status_visibile" @changeVisible = "changeOrderStatusModal">
		<order-status></order-status>
	  </t-modal>
	  <t-modal  :visibile="cancel_order_visibile" @changeVisible = "changeCancelModal">
		<cancel-modal></cancel-modal>
	  </t-modal>
	</div>
</template>

<script>
import TModal from './tmodal.vue';
import OrderStatus from './orderStatus.vue';
import CancelModal from './cancelModal.vue'
export default {
  props: [],
  data() {
	return {
		order_status_visibile: false,
		cancel_order_visibile: false
	}  
  },
  components: {
  	TModal,
	OrderStatus,
	CancelModal
  },
  methods: {
	changeOrderStatusModal(status) {
		if(typeof status != 'undefined'){
			this.order_status_visibile = status;
		}
	},
	changeCancelModal(status) {
		if(typeof status != 'undefined'){
			this.cancel_order_visibile = status;
		}
	}
  }
}
</script>

<style>
	.order-item-detail {
		width: 100%;
		box-sizing: border-box;
		padding: 30px;
		border-bottom: 1px solid #e5e5e5;
	}
	.order-info {
		display: flex;
		flex-direction: row;
		font-size: 24px;
		color: #0b0708;
		margin-bottom: 30px;
	}
	.order-num {
		flex: 1;
	}
	.order-status {
		width: 100px;
		text-align: right;
		color: #fec200;
	}
	.goods-picture {
		width: 200px;
		height: 152px;
		background: #f60;
	}
	.goods-info-wrap {
		flex: 1;
		padding-left: 32px;
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
		font-size: 24px;
		color: #0b0708;
		margin-bottom: 28px;
	}
	.order-button {
		width: 160px;
		height: 50px;
		background: #fec200;
		text-align: center;
		line-height: 50px;
		color: #fff;
		font-size: 24px;
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
		margin-right: 52px;
	}
	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		position: fixed;
		top: 0px;
		left: 0px;
	}
	.action-main-wrap {
		width: 100%;
		max-height: 890px;
		background: #fff;
		position: absolute;
		bottom: 0px;
		box-sizing: border-box;
		padding: 30px;
	}
	.action-main {
		position: relative;
	}
	.order-status-wrap {
		padding-top: 123px;
	}
	.order-status-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		font-size: 18px;
		color: #0B0708;
	}
	.order-status-time {
		width: 333px;
		height: 100%;
		text-align: right;
		box-sizing: border-box;
		padding-right: 31px;
		
	}
	.order-status-icon {
		width: 28px;
		height: 28px;
		position: relative;
		top: 0px;
		left: 15px;
		z-index: 100;
	}
	.order-status-text {
		flex: 1;
		padding-bottom: 20px;
		white-space: pre-wrap;
		padding-left: 58px;
		padding-right: 93px;
		border-left: 1px solid #fec200;
	}
	.order-status-last {
		border-left: 0px;
	}
</style>
