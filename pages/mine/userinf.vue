<template>
	<view>
		<div class="columlist columlist1" @click="uploadimg">
			<span>头像</span><div><image   :src="userinf.photo?(static+userinf.photo):'../../static/logo.jpg'" class="header"></image><image src="../../static/right.jpg"></image></div>
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
				userinf:{},
				static:''
			}
		},
		onShow() {
			this.static=ut.static;
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
						this.req_uploadimg(res);
						
					}
				})
			},
			req_uploadimg(res){
				console.log(ut.uploadimgurl+"common/imageUpload")
				const that=this;
				wx.uploadFile({
					url: ut.uploadimgurl+"common/imageUpload", //仅为示例，非真实的接口地址
					filePath: res,
					name: 'picture',
					header: {
						"Accept": "*/*"
					},
					success(res) {
						console.log(res)
						if(!res.data){
							ut.totast('上传图片失败')
							return;
						}
						res.data=JSON.parse(res.data);
						if(res.data.code==0){
							that.req_updatePhoto(res.data.data)
						}else{
							ut.totast('上传图片失败')
						}
					}
				})
			},
			req_updatePhoto(photo){
				ut.request({
					data:{
					photo: photo
					},
					url: "user/updatePhone"
				}).then(data => {
					this.userinf.photo=ut.static+photo;
					wx.setStorageSync('userinf',this.userinf);
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
		font-size: 24upx;
		align-items: center;
		height: 90upx;
		padding: 0 30upx;
		border-bottom: 1px solid #CCCCCC;
	}
	.columlist1,.columlist>div{
		height: 180upx!important;
	}
	.columlist image{
		width: 20upx;
		height: 35upx;
	}
	.header{
		width: 120upx!important;
		height: 120upx!important;
		border-radius: 50%;
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