<template>
	<div>
		<div class="header" @click="checkinf">
			<image :src="userinf.photo?(static+userinf.photo):'../../static/logo.jpg'"/>
			<p>{{userinf.nickname||userinf.name||'木斗生活'}}</p>
		</div>
		<div class='userinf'>
			<h1>个人信息</h1>
			<div @click="go_mine_infchange">
				<image src="../../static/index/userinf0.png"/>
				<p>信息修改</p>
			</div>
			<div @click="go_mine_adress">
				<image src="../../static/index/userinf1.png"/>
				<p>收获地址</p>
			</div>
			<div @click="go_mine_securityCenter">
				<image src="../../static/index/userinf2.png"/>
				<p>安全中心</p>
			</div>
		</div>
		<div class='userinf'>
			<h1>木斗帮手</h1>
			<div @click='go_mine_aboutus'>
				<image src="../../static/index/helper0.png"/>
				<p>关于木斗生活</p>
			</div>
			<div @click='go_mine_problem'>
				<image src="../../static/index/helper1.png"/>
				<p>常见问题</p>
			</div>
			<div @click="tel">
				<image src="../../static/index/helper2.png"/>
				<p>联系客服</p>
			</div>
		</div>
		<div class='userinf'>
			<h1>木斗招募</h1>
			<div @click="go_mine_apply(1)">
				<image src="../../static/index/recruit0.png"/>
				<p>木斗工匠</p>
			</div>
			<div  @click="go_mine_apply(2)">
				<image src="../../static/index/recruit1.png"/>
				<p>木斗商户</p>
			</div>
			<div @click="go_mine_apply(3)">
				<image src="../../static/index/recruit2.png"/>
				<p>木斗速递</p>
			</div>
			<div @click="go_mine_apply(4)">
				<image src="../../static/index/recruit3.png"/>
				<p>木斗搬运</p>
			</div>
			<div @click="go_mine_apply(5)">
				<image src="../../static/index/recruit4.png"/>
				<p>定制商户</p>
			</div>
			<div @click="go_mine_apply(6)">
				<image src="../../static/index/recruit5.png"/>
				<p>地区加盟</p>
			</div>
		</div>
	</div>

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
		onLoad() {
			this.static=ut.static;
		},
		onShow() {		
			if(wx.getStorageSync('token')){
				this.req_userinfo();
			}else{
				this.userinf={};
			}
			
		},
		methods: {
			tel() {
				ut.call();
			},
			checkinf(){
				if(wx.getStorageSync('token')){
					this.go_mine_infchange();
					return;
				}
				this.go_mine_login();
			},
			go_mine_aboutus(){
				wx.navigateTo({
					url: '../mine/aboutus'
				})
			},
			go_mine_infchange(){
				if(!wx.getStorageSync('token')){
					this.go_mine_login();
					return;
				}
				wx.navigateTo({
					url: '../mine/infchange'
				})
			},
			go_mine_apply(type){
				if(!wx.getStorageSync('token')){
					this.go_mine_login();
					return;
				}
				wx.navigateTo({
					url: '../mine/apply?type='+type
				})
			},
			go_mine_login(){
				wx.navigateTo({
					url: '../mine/login'
				})
			},
			go_mine_adress(){
				if(!wx.getStorageSync('token')){
					this.go_mine_login();
					return;
				}
				wx.navigateTo({
					url: '../mine/adress'
				})
			},
			go_mine_securityCenter(){
				if(!wx.getStorageSync('token')){
					this.go_mine_login();
					return;
				}
				wx.navigateTo({
					url: '../mine/securityCenter'
				})
			},
			go_mine_problem(){
				wx.navigateTo({
					url: '../mine/problem'
				})
			},
			req_userinfo(){
				ut.request({
					url: "user/info",
					method:'get'
				}).then(data=>{
					this.userinf=data||{}
					wx.setStorageSync('userinf',data||{})
				})
			}
		}
	}
</script>

<style>
	.userinf div{width: 33.333%;text-align: center;display: inline-block;vertical-align: top;font-size: 24upx;line-height: 30upx;}
	.userinf image{width: 90upx;height: 90upx;}
	.userinf h1{font-size: 28upx;text-indent: 30upx;line-height: 75upx;}
	.userinf{border-bottom: 1px solid #CCCCCC;}
	.userinf p{margin-bottom: 15upx;line-height: 54upx;}
	.header{
		height: 266upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		flex-direction: column;
		border-bottom: 1px solid #CCCCCC;
	}
	.header image{
		width: 145upx;
		height: 145upx;
		border-radius: 50%;
		margin-bottom: 30upx;
	}
	div>.userinf:last-child{
		border-bottom: none;
	}
</style>
