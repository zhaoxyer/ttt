<template>
	<div data-slot="action-sheet-main" class="cancel-order-modal">
		<div class="cancel-order-condition">
			<div class="cancel-order-title">
			取消原因
			</div>
			<div class="cancel-order-check-wrap">
				<div v-for="(item,index) in reason" :key="index" :class="chooseData==key ? 'cancel-order-checked':'cancel-order-check-group'" @click="choose(item.id)">
					<div class="check-box"></div>
					<div class="check-label">{{item.context}}</div>
				</div>
			</div>
			<div class="cancel-order-des">取消说明</div>
		</div>
		<div class="cancel-order-status">
			<div class="cancel-order-title">
			取消订单声明
			</div>
			<div class="cancel-statement-wrap">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">不需要了</span>
				</div>
			</div>
		</div>
		<button class="cancel-button" @click="cancel_confirm">确认取消</button>
	</div>
</template>

<script>
export default {
  props: ["reason"],
  data() { 
	  return {
		  chooseData: null
	  }
  },
  methods: {
	  choose(data){
			this.chooseData = data;  
	  },
	  cancel_confirm() {
			wx.showModal({
			title: '',
			content: '您确定要取消该订单吗？',
			success: function (sm) {
				if (sm.confirm) {
					// 用户点击了确定 可以调用删除方法了
					} else if (sm.cancel) {
					return;
					}
				}
			})
	  },
		getCancelReason() {
			
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
	.cancel-order-status .cancel-order-title {
		padding-top: 20px;
	}
	.cancel-order-check-group, .cancel-order-checked{
		margin-left: 220px;
		position: relative;
		overflow: hidden;
		margin-bottom: 20px;
	}
	.cancel-order-checked .check-box {
		border: 0px;
		background: #f6c11b;
	}
	.check-box {
		display: inline-block;
		width: 20px;
		height: 20px;
		border: 1px solid #c9c9c9;
		box-sizing: border-box;
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 99
	}
	.check-label {
		display: inline-block;
		padding-left: 50px;
	}
	.cancel-order-des {
		width: 100%;
		height: 150px;
		border: 1px solid #B4B4B4;
		border-radius: 3px;
		line-height: 150px;
		text-align: center;
		box-sizing: border-box;
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
	.cancel-button {
		margin: 0 auto;
		margin-top: 30px;
		background: #fec200;
		width: 500px;
		height: 100px;
		text-align: center;
		line-height: 100px;
		color: #fff;
		border-radius: 0px;
		font-size: 24px;
	}
</style>
