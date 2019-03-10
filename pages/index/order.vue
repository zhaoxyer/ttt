<template>
	<div>
		<div class="orderType">
			<div :class="active==index?'active':''" v-for="(item,index) in orderType" :key="item" @click="cg_orderType(index)">{{item}}</div>
		</div>
		<div class="orderInf">
			<div class="order-left">
				<div :class="leftActive==index?'active':''" v-for="(item,index) in orderLeft" :key="item" @click="cg_leftActive(index)">{{item}}</div>
			</div>
			<div class="order-right">
				<scroll-view scroll-y='true'>
					<CheckOrder v-if="leftActive===0" :type="active+1" :show='show'></CheckOrder>
					<BuildingGoods v-if="leftActive===1" :type="active+1" :show='show'></BuildingGoods>
					<OrderComment  v-if="leftActive===2" type="4" :comment="active+1" :show='show'></OrderComment>
				</scroll-view>
				
			</div>
		</div>
		<!-- <div class='userinf'>
			<h1>技术服务类</h1>
			<div class='server'>
				<div @click="go_next('../order/checkOrder?type=1')">
					<image   src="../../static/order/ordertype0.jpg"  mode="widthFix"></image>
					<p>查看订单</p>
				</div>
				<div @click="go_next('../order/checkOrder?type=2')">
					<image   src="../../static/order/ordertype1.jpg"  mode="widthFix"></image>
					<p>确认施工</p>
					<p>方案及价格</p>
				</div>
				<div @click="go_next('../order/checkOrder?type=3')">
					<image   src="../../static/order/ordertype2.jpg"  mode="widthFix"></image>
					<p>质量验收</p>
					<p>及付尾款</p>
				</div>
				<div @click="go_next('../order/checkOrder?type=4')">
					<image   src="../../static/order/ordertype2.jpg"  mode="widthFix"></image>
					<p>技术服务</p>
					<p>申请质保</p>
				</div>
			</div>
		</div> -->
		<!-- <div class='userinf'>
			<h1>建材商品类</h1>
			<div class='server'>
				<div  @click="go_next('../order/buildingGoods?type=1')">
					<image   src="../../static/order/ordertype3.jpg"  mode="widthFix"></image>
					<p>查看订单</p>
				</div>
				<div @click="go_next('../order/buildingGoods?type=2')">
					<image   src="../../static/order/ordertype4.jpg"  mode="widthFix"></image>
					<p>确认付款</p>
					<p>及商品验收</p>
				</div>
				<div @click="go_next('../order/buildingGoods?type=3')">
					<image   src="../../static/order/ordertype5.jpg"  mode="widthFix"></image>
					<p>搬运议价</p>
					<p>确认</p>
				</div>
				<div @click="go_next('../order/buildingGoods?type=4')">
					<image   src="../../static/order/ordertype6.jpg"  mode="widthFix"></image>
					<p>建材商品</p>
					<p>类退换</p>
				</div>
			</div>
		</div> -->
		<!-- <div class='userinf'>
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
		</div> -->
		<!-- <div class='userinf'>
			<h1>综合</h1>
			<div class='server'>
				<div  @click="go_next('../order/checkOrder?type=4&comment=1')">
					<image   src="../../static/order/ordertype13.jpg"  mode="widthFix"></image>
					<p>订单评价</p>
				</div>
			</div>
		</div> -->
	</div>

</template>

<script>
	import BuildingGoods from '../../components/order/buildingGoods.vue'
	import CheckOrder from '../../components/order/checkOrder.vue'
	import OrderComment from '../../components/order/orderComment.vue'
	import ut from '../../utils/index.js';
	export default {
		components: {
			BuildingGoods,
			CheckOrder,
			OrderComment
		},
		data() {
			return {
				active: 0,
				leftActive: 0,
				orderType: [],
				orderTypes:[
					['查看订单详情','确认方案价格','质量验收付款','服务售后质保'],
					['查看订单详情','商品验收付款','搬运议价确认','商品售后退换'],
					['技术服务订单','建材商品订单']
				],
				orderLeft: ['技术服务类','建材商品类','综合订单类'],
				show: true
			}
		},
		onLoad() {
			this.orderType =this.orderTypes[0]
		},
		onShow(){
			this.show = true;
		},
		onHide() {
			this.show = false;
		},
		methods: {
			cg_orderType(index){
				const leftActive = this.leftActive
				this.leftActive = ''
				this.active = index
				this.leftActive = leftActive
			},
			cg_leftActive(index){
				this.active = 0
				this.leftActive = index
				this.orderType =this.orderTypes[index]
			},
			go_next(data){
				console.log(data);
				if(!wx.getStorageSync('token')){
					wx.navigateTo({
						url: '../mine/login'
					})
					return
				}
				wx.navigateTo({
					url: data
				})
			},
			go_mine_apply(){
				wx.navigateTo({
					url: '../mine/apply'
				})
			}
		}
	}
</script>

<style>
	.orderType{display: flex;justify-content: center;padding: 0 30rpx;}
	.orderType div{font-size: 26rpx;margin-left: 30rpx;width: 104rpx;padding: 21rpx 23rpx 10rpx;border-bottom:8rpx solid #DADADA;text-align: center;color: #000000;}
	.orderType div:first-child{
		margin-left: 0;
	}
	.orderType div.active{
		color: #FEC300;
		border-color: #FEC300;
	}
	.orderInf{
		display: flex;
		position: fixed;
		bottom: 10rpx;
		top:140rpx;
		width: 100%;
	}
	.order-left div{
		margin-top: 26rpx;
		font-size: 30rpx;
		width: 30rpx;
		padding: 26rpx;
		background: #f3f3f3;
	}
	.order-left div.active{
		color: white;
		background: #FEC300;
	}
	.order-right{
		flex: 1;
		margin-left: 29rpx;
		background: #F3F3F3;
	}
	
	.order-right scroll-view{
		height: 100%;
	}
	
	
	
	
	
	
	
	
	
	
	
	.userinf image{width: 90upx;height: 90upx;}
	.userinf h1{font-size: 28upx;text-indent: 30upx;line-height: 75upx;}
	.userinf{border-bottom: 1px solid #CCCCCC;}
	.userinf p{line-height: 54upx;}
	div>.userinf:last-child{
		border-bottom: none;
	}
	.server{
		padding: 0 30upx;
		margin-top: 40upx;
		font-size: 24upx;
	}
	.server p{
		text-align: center;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 70upx;
		width: 120upx;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30upx;
	}
	.server image{
		width: 90upx;
		margin-left: 15upx;
	}
</style>
