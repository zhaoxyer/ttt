<template>
	<view>
		<div class="columlist"  @click="go_mine_updatepass">
			<span>登录密码</span><image src="../../static/right.jpg"></image>
		</div>
<!-- 		<div class="columlist">
			<span>实名认证</span><div><span>已实名 向阳花</span><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist">
			<span>修改支付密码</span><div><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist">
			<span>找回支付密码</span><div><image src="../../static/right.jpg"></image></div>
		</div>		 -->
	</view>
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
			go_mine_updatepass(){
				wx.navigateTo({
					url: '../mine/updatepass'
				})
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
	.columlist1,.columlist>div{
		height: 180px!important;
	}
	.columlist image{
		width: 20upx;
		height: 35upx;
	}
	.header{
		width: 120px!important;
		height: 120px!important;
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
	.columlist>div{
		display: flex;
		justify-content: space-between;
		font-size: 24upx;
		align-items: center;
		height: 90upx;
	}
	.columlist1>div>image:first-child{
		margin-right: 30upx;
	}
	.columlist>div>span{
		margin-right: 30upx;
	}
</style>
