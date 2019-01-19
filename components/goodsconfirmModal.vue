<template>
	<div class="cancel-order-modal">
		<div class="cancel-order-condition" v-for="(list,index) in confirmPlanlist" :key="index">
			<div class="cancel-order-title" v-if="list.type">
			{{list.type}}
			</div>
			<div class="cancel-statement-wrap">
				<div class="cancel-radio-wrap" v-for="(item,priceIndex) in list.prices" :key="priceIndex">
					<span class="cancel-radio"></span>
					<span class="cancel-label">{{item.name+""+item.price}}</span>
				</div>
			</div>
		</div>
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
			url: "goods/order/reDeclareCarryPrice"
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
			url: "goods/order/agreeCarryPrice"
		}).then(data=>{
			this.$parent.changeVisibileModal(false)
			this.$emit('reload');
			ut.totast("操作成功")
			console.log(data)
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
		min-height: 400rpx;
	}
	.cancel-order-modal {
		width: 100%;
		font-size: 24px;
	}
	.cancel-order-title {
		padding-bottom: 30px;
	}
	.cancel-order-condition {
		padding-bottom: 30px;
		border-bottom: 1px solid #ededed;
	}
	.noborder {
		margin-top: 30px;
		border-bottom: 0px;
	}
	.cancel-order-status .cancel-order-title {
		padding-top: 20px;
	}

	.cancel-radio-wrap {
		margin-left: 220px;
		margin-bottom: 20px;
	}
	.cancel-radio {
		display: inline-block;
		width: 20px;
		height: 20px;
		background: #fec200;
		border-radius: 10px;
	}
	.cancel-label {
		padding-left: 57px;
	}
	.cancel-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 98px;
		padding-right: 98px;
		margin-bottom: 30px;
	}
	.cancel-plan {
		width: 200px;
		height: 50px;
		background: #fec200;
		border-radius: 4px;
		font-size: 24px;
		text-align: center;
		line-height: 50px;
		color: #fff;
	}
	.cancel-plan.agree-plan {
		width: 250px;
		height: 100px;
		border-radius: 0px;
		line-height: 100px;
	}
	.agree-plan-wrap {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 100px;
	}
</style>
