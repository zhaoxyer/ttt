<template>
	<div>
		<div class='userinf'>
			<h1>技术服务类</h1>
			<div class='server'>
				<div @click="go_next('../order/checkOrder')">
					<image   src="../../static/order/ordertype0.jpg"  mode="widthFix"></image>
					<p>查看订单</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype1.jpg"  mode="widthFix"></image>
					<p>确认施工</p>
					<p>方案及价格</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype2.jpg"  mode="widthFix"></image>
					<p>质量验收</p>
					<p>及付尾款</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype2.jpg"  mode="widthFix"></image>
					<p>技术服务</p>
					<p>申请质保</p>
				</div>
			</div>
		</div>
		<div class='userinf'>
			<h1>建材商品类</h1>
			<div class='server'>
				<div>
					<image   src="../../static/order/ordertype3.jpg"  mode="widthFix"></image>
					<p>查看订单</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype4.jpg"  mode="widthFix"></image>
					<p>确认付款</p>
					<p>及商品验收</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype5.jpg"  mode="widthFix"></image>
					<p>搬运议价</p>
					<p>确认</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype6.jpg"  mode="widthFix"></image>
					<p>建材商品</p>
					<p>类退换</p>
				</div>
			</div>
		</div>
		<div class='userinf'>
			<h1>定金建材商品类</h1>
			<div class='server'>
				<div>
					<image   src="../../static/order/ordertype7.jpg"  mode="widthFix"></image>
					<p>查看与取</p>
					<p>消订单</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype8.jpg"  mode="widthFix"></image>
					<p>确认方案</p>
					<p>及付定金</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype9.jpg"  mode="widthFix"></image>
					<p>质量验收</p>
					<p>及付尾款</p>
				</div>
				<div>
					<image   src="../../static/order/ordertype9.jpg"  mode="widthFix"></image>
					<p>定金商品</p>
					<p>售后质保</p>
				</div>
			</div>
		</div>
		<div class='userinf'>
			<h1>综合</h1>
			<div class='server'>
				<div>
					<image   src="../../static/order/ordertype13.jpg"  mode="widthFix"></image>
					<p>订单评价</p>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			go_next(data){
				console.log(data);
				wx.navigateTo({
					url: data
				})
			},
			go_mine_apply(){
				wx.navigateTo({
					url: '../mine/apply'
				})
			},
		}
	}
</script>

<style>
	.userinf image{width: 90px;height: 90px;}
	.userinf h1{font-size: 28px;text-indent: 30px;line-height: 75px;}
	.userinf{border-bottom: 1px solid #CCCCCC;}
	.userinf p{line-height: 54px;}
	div>.userinf:last-child{
		border-bottom: none;
	}
	.server{
		padding: 0 30px;
		margin-top: 40px;
		font-size: 24px;
	}
	.server p{
		text-align: center;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 70px;
		width: 120px;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30px;
	}
	.server image{
		width: 90px;
		margin-left: 15px;
	}
</style>
