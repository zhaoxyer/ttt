<template>
	<div>
		<div class="order-tip">
			<p class="order-tip-text">您可以在此页面查看您已付上门费的订单和“查看状态”</p>
		</div>
		<div>
			<div v-for="(item, index) in order_list" :key="index">
				<order-item :data="item" :reason="cancel_reason"></order-item>
			</div>
		</div>
	</div>
</template>

<script>
	import orderItem from '../../components/orderItem.vue'
	import ut from '../../utils/index.js';
	export default {
		components: {
            orderItem
        },
		data() {
			return {
				order_list: [],
				cancel_reason: []
			}
		},
		onLoad() {
			this.getOrderList();
			this.getReasonType();
		},
		methods: {
			getOrderList() {
				ut.request({
					data: {
						type: 1
					},
					method: 'get',
					url: "service/order/list"
				}).then(data=>{
					console.log(data)
					this.order_list = data;
				})
			},
			getReasonType() {
				ut.request({
					data: {
						type: 1
					},
					method: 'get',
					url: "service/order/cancelReason"
				}).then(data=>{
					console.log(data)
					this.cancel_reason = data;
				})
			}
		}
	}
</script>

<style>
	.order-tip {
		width: 100%;
		border-bottom: 1px solid #ededed;
		box-sizing: border-box;
		padding: 30px;
	}
	.order-tip-text {
		font-size: 20px;
		color: #656565;
		box-sizing: border-box;
		padding-left: 40px;
		position: relative;
	}
	.order-tip-text:before {
		content: '';
		display: inline-block;
		width: 16px;
		height: 16px;
		background: #fec401;
		border-radius: 8px;
		position: absolute;
		top: 50%;
		left: 0px;
		margin-top: -8px;
	}
	
</style>
