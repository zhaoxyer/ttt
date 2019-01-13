<template>
	<div>
		<div class="order-tip">
			<p class="order-tip-text">您可以在此页面查看您已付上门费的订单和“查看状态”</p>
		</div>
		<div>
			<order-item></order-item>
			<order-item></order-item>
			<order-item></order-item>
		</div>
	</div>
</template>

<script>
	import orderItem from '../../components/orderItem.vue'
	export default {
		components: {
            orderItem
        },
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			
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
