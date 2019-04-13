<template>
	<div class="cancel-order-modal">
		<scroll-view class="popheight" scroll-y="true">
			<div class="cancel-order-condition" v-for="(list,index) in confirmPlanlist" :key="index">
				<div class="cancel-order-title" v-if="list.type">
					{{list.type==1?'技术服务类':'配件类'}}
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap" v-for="(item,priceIndex) in list.prices" :key="priceIndex">
						<span class="cancel-radio"></span>
						<span class="cancel-label">{{item.name+' '+item.price+item.unit+' '+'x'+item.number}}</span>
					</div>
				</div>
			</div>
			<div class="cancel-statement-wrap" v-if="taxRate != 0">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">税率 {{taxRate}}</span>
				</div>
			</div>
			<div class="cancel-statement-wrap" v-if="mudouDiscount > 0">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">木斗工匠折扣 {{mudouDiscount}}</span>
				</div>
			</div>
			<div class="cancel-statement-wrap" v-if="craftsmanDiscount > 0">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">工匠自行打折 {{craftsmanDiscount}}</span>
				</div>
			</div>
			<div class="cancel-statement-wrap">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">预约金 ¥-{{makePrice}}</span>
				</div>
			</div>
			<div class="cancel-statement-wrap" v-if="totalPrice > 0">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">合计 ¥{{totalPrice}}</span>
				</div>
			</div>
		</scroll-view>
		<div class="cancel-plan-wrap">
			<button class="cancel-plan" @click="cancel_confirm">放弃维修</button>
			<button class="cancel-plan" @click="againPlan">重新申报方案</button>
		</div>
		<div class="agree-plan-wrap">
			<button class="cancel-plan agree-plan" @click="confirmPlan">同意方案</button>
		</div>
	</div>
</template>

<script scode="true">
	import ut from '../utils/index.js';
	export default {
		props: ["orderId", "reload", "changeVisibileModal", "confirmPlanlist"],
		data() {
			return {
				taxRate: 0,
				craftsmanDiscount: -1,
				mudouDiscount: -1,
				makePrice:0,
				totalPrice:0
			}
		},
		watch: {
			confirmPlanlist(newValue) {
				let first = newValue[0];
				if (first) {
					this.taxRate = first.taxRate;
					this.craftsmanDiscount = first.craftsmanDiscount;
					this.mudouDiscount = first.mudouDiscount;
					this.makePrice = first.makePrice;
					this.totalPrice = first.allPrice;
				}
			}
		},
		methods: {
			cancel_order() {

				ut.request({
					data: {
						orderId: this.orderId,
					},
					url: "service/order/cancelOrder"
				}).then(data => {
					this.$parent.changeVisibileModal(false)
					this.$emit('reload');
					ut.totast("订单取消成功")
				})
			},
			cancel_confirm() {
				this.$parent.changeVisibileModal(false)
				this.$emit('changeb', true)
			},
			againPlan() {
				ut.request({
					data: {
						orderId: this.orderId
					},
					url: "service/order/againPrice"
				}).then(data => {
					this.$parent.changeVisibileModal(false)
					this.$emit('reload');
					ut.totast("操作成功")
					console.log(data)
				})
			},
			confirmPlan() {
				ut.request({
					data: {
						orderId: this.orderId
					},
					url: "service/order/confirmPrice"
				}).then(data => {
					this.$parent.changeVisibileModal(false)
					this.$emit('reload');
					ut.totast("操作成功")
					console.log(data)
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
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
	}

	.action-main {
		position: relative;
	}

	.cancel-order-modal {
		width: 100%;
		font-size: 24upx;
	}

	.cancel-order-title {
		padding-bottom: 30upx;
	}

	.cancel-order-condition {
		padding-bottom: 30upx;
		border-bottom: 1px solid #ededed;
	}

	.popheight {
		max-height: 500upx;
	}

	.noborder {
		margin-top: 30upx;
		border-bottom: 0upx;
	}

	.cancel-order-status .cancel-order-title {
		padding-top: 20upx;
	}

	.cancel-radio-wrap {
		margin-left: 220upx;
		margin-bottom: 20upx;
	}

	.cancel-radio {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		background: #fec200;
		border-radius: 10upx;
	}

	.cancel-label {
		padding-left: 57upx;
	}

	.cancel-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 98upx;
		padding-right: 98upx;
		margin-bottom: 30upx;
	}

	.cancel-plan {
		width: 200upx;
		height: 50upx;
		background: #fec200;
		border-radius: 4upx;
		font-size: 24upx;
		text-align: center;
		line-height: 50upx;
		color: #fff;
	}

	.cancel-plan.agree-plan {
		width: 500upx;
		height: 100upx;
		border-radius: 0upx;
		line-height: 100upx;
	}

	.agree-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 100upx;
	}
</style>
