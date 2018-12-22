<template>
	<view>
		<div class="columlist columlist1">
			<span>头像</span><div><image src="../../static/index/herder.png" class="header"></image><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist">
			<span>昵称</span><div><span>向阳花</span><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist">
			<span>收货地址</span><div><span>修改/添加</span><image src="../../static/right.jpg"></image></div>
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
