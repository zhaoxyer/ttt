<template>
	<view>
		<div class="columlist">
			<span>实名认证</span><div><span>已实名 向阳花</span><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist">
			<span>修改支付密码</span><div><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist">
			<span>找回支付密码</span><div><image src="../../static/right.jpg"></image></div>
		</div>		
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

		}
	}
</script>

<style>
	.columlist{
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		align-items: center;
		height: 90px;
		padding: 0 30px;
		border-bottom: 1px solid #CCCCCC;
	}
	.columlist1,.columlist>div{
		height: 180px!important;
	}
	.columlist image{
		width: 20px;
		height: 35px;
	}
	.header{
		width: 120px!important;
		height: 120px!important;
	}
	.bggray{
		background: #e5e5e5;
		height: 30px;
	}
	.outinf{
		background: #FEC200;
		line-height: 100px;
		text-align: center;
		margin-top: 200px;
		font-size: 24px;
		color: white;
		margin-left: 30px;
		margin-right: 30px;
	}
	.columlist>div{
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		align-items: center;
		height: 90px;
	}
	.columlist1>div>image:first-child{
		margin-right: 30px;
	}
	.columlist>div>span{
		margin-right: 30px;
	}
</style>
