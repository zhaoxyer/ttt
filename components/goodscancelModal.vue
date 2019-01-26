<template>
	<div class="cancel-order-modal">
			<div class="cancel-order-condition">
				<div class="cancel-order-title">
				取消原因
				</div>
				<div class="cancel-order-check-wrap">
					<div v-for="(item,index) in reason" :key="index" :class="chooseData==item.id ? 'cancel-order-checked':'cancel-order-check-group'" @click="choose(item.id)">
						<div class="check-box"></div>
						<div class="check-label">{{item.context}}</div>
					</div>
				</div>
				<textarea v-model="detail" class="cancel-order-des"></textarea>
			</div>
		<!-- <div class="cancel-order-status">
			<div class="cancel-order-title">
			取消订单声明
			</div>
			<div class="cancel-statement-wrap">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">不需要了</span>
				</div>
			</div>
		</div> -->
		<button class="cancel-button" @click="cancel_confirm">确认取消</button>
	</div>
</template>

<script>
import ut from '../utils/index.js';
export default {
  props: ["reason","orderId","reload","changeVisibileModal","cancelUrl"],
  data() { 
	  return {
		  chooseData: null,
			detail: ''
	  }
  },
  methods: {
	  choose(data){
			this.chooseData = data;  
	  },
		cancel_order() {
			
			ut.request({
				data: {
					orderId: this.orderId,
					reasonId: this.chooseData,
					detail: this.detail
				},
				url: this.cancelUrl
			}).then(data=>{
				this.$parent.changeVisibileModal(false)
				this.$emit('reload');
				ut.totast("订单取消成功")
			})
		},
	  cancel_confirm() {
			if(!this.chooseData){
				ut.totast("请选择取消原因")
				return;
			}
			wx.showModal({
			title: '',
			content: '您确定要取消该订单吗？',
			success: (sm) => {
				if (sm.confirm) {
					// 用户点击了确定 可以调用删除方法了
						this.cancel_order();
					} else if (sm.cancel) {
					return;
					}
				}
			})
	  }
  }
}
</script>

<style>
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
	.cancel-order-status .cancel-order-title {
		padding-top: 20upx;
	}
	.cancel-order-check-group, .cancel-order-checked{
		margin-left: 220upx;
		position: relative;
		overflow: hidden;
		margin-bottom: 20upx;
	}
	.cancel-order-checked .check-box {
		border: 0upx;
		background: #f6c11b;
	}
	.check-box {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border: 1px solid #c9c9c9;
		box-sizing: border-box;
		position: absolute;
		top: 0upx;
		left: 0upx;
		z-index: 99
	}
	.check-label {
		display: inline-block;
		padding-left: 50upx;
	}
	.cancel-order-des {
		width: 100%;
		height: 150upx;
		border: 1px solid #B4B4B4;
		border-radius: 3upx;
		line-height: 30upx;
		box-sizing: border-box;
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
	.cancel-button {
		margin: 0 auto;
		margin-top: 30upx;
		background: #fec200;
		width: 500upx;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		color: #fff;
		border-radius: 0upx;
		font-size: 24upx;
	}
</style>
