<template>
	<div class="cancel-order-modal">
		<scroll-view class="popheight" scroll-y="true">
			<div class="cancel-order-condition" v-if="confirmPlanlist">
				<div class="cancel-order-title">
				 配送方案及价格：
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">{{confirmPlanlist.expressType+' ¥'+confirmPlanlist.startPrice}}</span>
					</div>
					<div class="cancel-radio-wrap" v-if="confirmPlanlist.taxRate != 0">
						<span class="cancel-radio"></span>
						<span class="cancel-label">税率 {{confirmPlanlist.taxRate}}</span>
					</div>
					<div class="cancel-radio-wrap" v-if="confirmPlanlist.storeDiscount != -1">
						<span class="cancel-radio"></span>
						<span class="cancel-label">速递折扣 {{confirmPlanlist.expressDiscount}}折</span>
					</div>
					<div class="cancel-radio-wrap" v-if="confirmPlanlist.mudouDiscount != -1">
						<span class="cancel-radio"></span>
						<span class="cancel-label">木斗工匠折扣 {{confirmPlanlist.mudouDiscount}}折</span>
					</div>
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">{{'超出起步价：'+confirmPlanlist.perPrice +"*"+confirmPlanlist.perKm+"="+(confirmPlanlist.perPrice*confirmPlanlist.perKm)}}</span>
					</div>
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-label">合计{{' ¥'+confirmPlanlist.expressAllPrice}}</span>
					</div>
				</div>
				<div class="cancel-order-title">
				 配送费：
				</div>
				<div class="cancel-statement-wrap">
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">{{'配送费'+' ¥'+confirmPlanlist.expressAllPrice}}</span>
					</div>
					<div class="cancel-radio-wrap">
						<span class="cancel-radio"></span>
						<span class="cancel-label">{{'预付配送费'+' ¥-'+confirmPlanlist.startPrice}}</span>
					</div>
				</div>
			</div>
		</scroll-view>
		<div class="agree-plan-wrap">
			<button class="cancel-plan agree-plan" @click="againPlan">重新申报</button><button class="cancel-plan agree-plan" @click="confirmPlan">同意并付款</button>
		</div>
	</div>
</template>

<script>
import ut from '../utils/index.js';
export default {
  props: ["orderId","reload","changeVisibileModal","confirmPlanlist"],
  data() { 
	return {

	}
  },
  methods: {  
	againPlan() {
		ut.request({
			data: {
				orderId: this.orderId
			},
			url: "goods/order/reDeclareExpressPrice"
		}).then(data=>{
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
			url: "goods/order/payExpress"
		}).then(data=>{
			if(!data){
				this.$parent.changeVisibileModal(false)
				this.$emit('reload');
				ut.totast("操作成功")
				return;
			}
			ut.pay(data,{
				complete: (res)=> {
					this.$parent.changeVisibileModal(false)
					this.$emit('reload');
				},
				success: () => {
					ut.totast("操作成功")
				}
			})
		})
	}
  }
}
</script>

<style scoped="true">
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
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
	}
	.action-main {
		position: relative;
		min-height: 400rupx;
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
	.popheight{
		max-height: 600upx;
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
		width: 250upx;
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
