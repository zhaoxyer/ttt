<template>
	<div data-slot="action-sheet-main" class="order-status-wrap">
		<div class="order-status-item" v-for="(item,index) in statusList" :key="index">
			<div class="order-status-time">{{item.createTimeStr}}</div>
			<image class="order-status-icon" src="../../static/allOrder/order-status-icon.png"></image>
			<div class="order-status-text">{{item.statusName}}</div>
		</div>
	</div>
</template>

<script>
	import ut from '../utils/index.js';

	export default {
		props: ["type", "orderId", "reload", "changeVisibileModal"],
		data() {
			return {
				statusList: [],
			}
		},
		onLoad() {
			this.requestData();
		},
		methods: {
			requestData() {
				let type = this.type;
				let orderId = this.orderId;
				ut.request({
					method: 'get',
					url: `customze/store/order/getOrderStatusRecords?type=${type}&orderId=${orderId}`
				}).then(data => {
					console.log(data)
					this.statusList = data;
				})
			}
		}
	}
</script>

<style>
	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0upx;
		left: 0upx;
	}

	.action-main-wrap {
		width: 100%;
		min-height: 500upx;
		max-height: 890upx;
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
	}

	.action-main {
		position: relative;
	}

	.order-status-wrap {
		padding-top: 80upx;
	}

	.order-status-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		font-size: 24upx;
		color: #0B0708;
	}

	.order-status-time {
		width: 333upx;
		height: 100%;
		text-align: right;
		box-sizing: border-box;
		padding-right: 31upx;
		font-size: 24upx;
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
		padding-right: 20upx;
		border-left: 1px solid #fec200;
		font-size: 24upx;
	}

	.order-status-last {
		border-left: 0upx;
	}
</style>
