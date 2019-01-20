<template>
	<div>
		<div class="setinput">
			<p class="logo">
				<image src="../../static/logo.jpg"></image>
			</p>
			<div>
				<image src="../../static/mine/user.jpg"></image><input type="text" placeholder="请输入用户名" v-model="username"/>
			</div>
			<div>
				<image src="../../static/mine/pas.jpg"></image><input type="password" placeholder="请输入密码" v-model="password"/>
			</div>
			<p class="submit" @click="req_login">				
				登陆
			</p>
			<p class="tip" @click="go_mine_register">没有账号？立即注册</p>
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
			go_mine_register(){
				wx.redirectTo({
					url: '../mine/register'
				})
			},
			req_login(){
				if(!this.username){
					ut.totast('请输入用户名');
					return;
				}
				if(!ut.checkUsername(this.username)){
					ut.totast('请输入正确的用户名');
					return;
				}
				if(this.username.length<8||this.username.length>16){
					ut.totast('请输入正确的用户名');
					return;
				}
				if(!this.password){
					ut.totast('请输入密码');
					return;
				}
				if(this.password.length<8||this.password.length>32){
					ut.totast('请输入正确的密码');
					return;
				}
				wx.login({
					success: data => {
						ut.request({
							data: {
								username:this.username,
								password:this.password,
								code:data.code
							},
							url: "user/login"
						}).then(data=>{
							wx.setStorageSync('token',data.token)
							wx.navigateBack()
						})
						
					}
				})
				
				
			}
		}
	}
</script>

<style>
	.tip{
		line-height: 60upx;
		text-align: right;
		font-size: 24upx;
	}
	.setinput{
		padding: 0 70upx;
	}
	.submit{
		background: #F6C11B;
		color: white;
		line-height: 80upx;
		text-align: center;
		border-radius: 10upx;
		font-size: 28upx;
		margin-top: 90upx;
	}
	.logo{
		padding: 40px 0;
		text-align: center;
	}
	.logo image{
		display: inline-block;
		vertical-align: top;
		width: 250upx;
		height: 250upx;
	}
	.setinput>div>input{
		flex: 1;
	}
	.setinput>div{
		display: flex;
		border-bottom: 1px solid #C8C8C8;
	}
	.setinput>div>input{
		line-height: 90upx;
		height: 90upx;
		font-size: 24upx;
	}
	.setinput>div>image{
		width: 35upx;
		height: 35upx;
		margin-top: 27.5upx;
		margin-right: 30upx;
	}
	.qlogin>image{
		width: 100%;
		margin-top: 75upx;
	}
	.qlogin>div{
		text-align: center;
	}
	.qlogin>div image{
		width: 150upx;
		height: 150upx;
		display: inline-block;
		vertical-align: top;
		margin-top: 50upx;
	}
</style>
