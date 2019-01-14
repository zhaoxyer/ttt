<template>
	<div>
		<div class="order-tip">
			<p v-if="type==1" class="order-tip-text">您可以在此页面查看您已付上门费的订单和“查看状态”</p>
			<p v-if="type==2" class="order-tip-text">待木斗工匠上门与您协商后，您可在此页面找到相应订单，选择“请确认方案”“放弃此订单”“重新生成订单”</p>
			<p v-if="type==3" class="order-tip-text">木斗工匠已完工并且您已现场验收后请找到相应订单点击“请验收”确认支付尾款，完成方案并对“图文评价”并发布</p>
			<p v-if="type==4" class="order-tip-text">您可以在此页面查看您已付上门费的订单和“查看状态”</p>
		</div>
		<div v-if="order_list.length>0">
			<div v-for="(item, index) in order_list" :key="index">
				<order-item :type="type" :data="item" :reason="cancel_reason" @reload="init"></order-item>
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
				cancel_reason: [],
				type: ''
			}
		},
		onLoad(option) {
			this.type = option.type;
			let barTitle = "查看订单";
			if(this.type == 1) {
				barTitle = "查看订单";
			}else if(this.type == 2) {
				barTitle = "确认施工方案和价格";
			}else if(this.type == 3) {
				barTitle = "质量验收及付尾款";
			}
			wx.setNavigationBarTitle({
			  title: barTitle
			})
			this.init();
		},
		methods: {
			init() {
				this.getOrderList();
			},
			getOrderList() {
				ut.request({
					data: {
						type: this.type
					},
					method: 'get',
					url: "service/order/list"
				}).then(data=>{
					console.log(data)
					this.order_list = data;
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
