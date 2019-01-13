<template>
	<view>
		<div class="columlist columlist1" @click="uploadimg">
			<span>头像</span><div><image   :src="headurl||'../../static/logo.jpg'" class="header"></image><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist" @click="go_mine_updatename">
			<span>昵称</span><div><span>{{userinf.nickname||userinf.name||'木斗生活'}}</span><image src="../../static/right.jpg"></image></div>
		</div>
		<div class="columlist" @click="go_mine_adress">
			<span>收货地址</span><div><span>修改/添加</span><image src="../../static/right.jpg"></image></div>
		</div>		
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				headurl:wx.getStorageSync('headurl'),
				userinf:{}
			}
		},
		onShow() {
			this.userinf=wx.getStorageSync('userinf')||{}
		},
		methods: {
			go_mine_adress(){
				wx.navigateTo({
					url: '../mine/adress'
				})
			},
			uploadimg(){
				ut.uploadimg({
					callback:res=>{
						wx.setStorageSync('headurl',res);
						this.headurl=res;
					}
				})
			},
			go_mine_updatename(){
				wx.navigateTo({
					url: '../mine/updatename'
				})
			}
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