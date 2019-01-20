<template>
	<view>
		<div class="columlist" @click="go_mine_userinf">
			<span>个人信息</span><image src="../../static/right.jpg"></image>
		</div>
		<div class="columlist" @click="go_mine_updatephone">
			<span>换绑手机</span><image src="../../static/right.jpg"></image>
		</div>
		<div class="columlist"  @click="go_mine_updatepass">
			<span>登录密码</span><image src="../../static/right.jpg"></image>
		</div>
		<!-- <div class="columlist">
			<span>支付设置</span><image src="../../static/right.jpg"></image>
		</div>
		<div class="bggray"></div>
		<div class="columlist">
			<span>安全中心</span><image src="../../static/right.jpg"></image>
		</div>
		<div class="columlist">
			<span>通用</span><image src="../../static/right.jpg"></image>
		</div> -->
		<div class="outinf" @click='loginout'>退出账户</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
			}
		},
		onLoad() {

		},
		methods: {
			go_mine_userinf(){
				wx.navigateTo({
					url: '../mine/userinf'
				})
			},
			go_mine_updatepass(){
				wx.navigateTo({
					url: '../mine/updatepass'
				})
			},
			go_mine_updatephone(){
				wx.navigateTo({
					url: '../mine/updatephone'
				})
			},
			loginout(){
				ut.loginout();
				wx.navigateBack();
			}
		}
	}
</script>

<style>
	.columlist{
		display: flex;
		justify-content: space-between;
		font-size: 24upx;
		align-items: center;
		height: 90upx;
		padding: 0 30upx;
		border-bottom: 1px solid #CCCCCC;
	}
	.columlist image{
		width: 20upx;
		height: 35upx;
	}
	.bggray{
		background: #e5e5e5;
		height: 30upx;
	}
	.outinf{
		background: #FEC200;
		line-height: 100upx;
		text-align: center;
		margin-top: 200upx;
		font-size: 24upx;
		color: white;
		margin-left: 30upx;
		margin-right: 30upx;
	}
</style>
