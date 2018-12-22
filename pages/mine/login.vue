<template>
	<div>
		<div class="setinput">
			<p class="logo">
				<image src="../../static/logo.jpg"></image>
			</p>
			<div>
				<image src="../../static/mine/user.jpg"></image><input type="text" placeholder="请输入手机号" v-model="username"/>
			</div>
			<div>
				<image src="../../static/mine/pas.jpg"></image><input type="password" placeholder="请输入密码" v-model="password"/>
			</div>
			<p class="submit" @click="req_login">
				登陆
			</p>
		</div>
		<div class="qlogin">
			<image src="../../static/mine/qlogin.jpg" mode="widthFix"></image>
			<div>
				<image src="../../static/mine/wx.jpg"></image>
			</div>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				username:"",
				password:""
			}
		},
		onLoad() {

		},
		methods: {
			go_mine_login(){
				wx.navigateTo({
					url: '../mine/login'
				})
			},
			cg_active(){
				console.log(1)
				this.check=!this.check;
			},
			req_login(){
				if(!this.username){
					ut.totast('请输入用户名');
					return;
				}
				
				if(!this.password){
					ut.totast('请输入密码');
					return;
				}
				
				ut.request({
					data: {
						username:this.username,
						password:this.password
					},
					url: "user/login"
				}).then(data=>{
					console.log(1)
				})
			}
		}
	}
</script>

<style>
	.setinput{
		padding: 0 70px;
	}
	.submit{
		background: #F6C11B;
		color: white;
		line-height: 80px;
		text-align: center;
		border-radius: 10px;
		font-size: 28px;
		margin-top: 90px;
	}
	.logo{
		padding: 40px 0;
		text-align: center;
	}
	.logo image{
		display: inline-block;
		vertical-align: top;
		width: 300px;
		height: 300px;
	}
	.setinput>div>image,.setinput>div>input{
		display: inline-block;
		vertical-align: top;
		
	}
	.setinput>div{
		border-bottom: 1px solid #C8C8C8;
	}
	.setinput>div>input{
		line-height: 90px;
		height: 90px;
		font-size: 24px;
	}
	.setinput>div>image{
		width: 35px;
		height: 35px;
		margin-top: 27.5px;
		margin-right: 30px;
	}
	.qlogin>image{
		width: 100%;
		margin-top: 75px;
	}
	.qlogin>div{
		text-align: center;
	}
	.qlogin>div image{
		width: 150px;
		height: 150px;
		display: inline-block;
		vertical-align: top;
		margin-top: 50px;
	}
</style>
