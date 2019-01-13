<template>
	<div data-slot="action-sheet-main" class="order-status-wrap">
	 <div class="order-status-item">
		<div class="order-status-time">2018-08-10 13:50</div>
		<image class="order-status-icon" src="../../static/allOrder/order-status-icon.png"></image>
		<div class="order-status-text">木豆客服已派单，木豆客服已派单，木豆客服已派单，木豆客服已派单</div>
	 </div>
	 <div class="order-status-item">
		 <div class="order-status-time">2018-08-10 13:50</div>
		 <image class="order-status-icon" src="../../static/allOrder/order-status-icon.png"></image>
		 <div class="order-status-text order-status-last">木豆客服已派单，木豆客服已派单，木豆客服已派单，木豆客服已派单</div>
	 </div>
	</div>
</template>

<script>
export default {
  props: [""],
  data() { 
  },
  methods: {
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
