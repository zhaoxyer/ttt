<template>
	<div class="setinput">
		<div>
			<span>用户名</span><input type="text" placeholder="请输入用户名" v-model="userinf.username"/>
		</div>
		<div>
			<span>姓名</span><input type="text" placeholder="请输入真实姓名" v-model="userinf.name"/>
		</div>
		<div>
			<span>手机号</span><input type="text" placeholder="请输入手机号" v-model="userinf.phone"/>
		</div>
		<div>
			<span>验证码</span><input type="text" placeholder="请输入验证码" v-model="userinf.vCode"/><label class="getcode" @click="req_sendCode">{{codemsg}}</label>
		</div>
		<div>
			<span>密码</span><input type="password" placeholder="密码长度8~32位,须包含数字字母符号至少2种或以上元素" v-model="userinf.password"/>
		</div>
		<div>
			<span>确认密码</span><input type="password" placeholder="请确认密码" v-model="userinf.password1"/>
		</div>
		<p class="xieyi">
			<span :class="{'active':check}" @click="cg_active">●</span><span>我已阅读并同意</span><span>《用户服务协议》</span>
		</p>
		<p class="submit" @click="req_register">
			注册
		</p>
		<p class="tip" @click="go_mine_login">已有账号？点击登陆</p>
	</div>

</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				check:false,
				codemsg:"获取验证码",
				userinf:{
					"idCard": "",
					"name": "",//姓名
					"password": "",//密码
					"password1": "",//确认密码
					"phone": "",//手机号
					"roleId": 0,
					"username": "",//用户名
					"vCode": ""//验证码
				}
			}
		},
		onLoad() {
		},
		methods: {
			go_mine_login(){
				wx.redirectTo({
					url: '../mine/login'
				})
			},
			cg_active(){
				console.log(1)
				this.check=!this.check;
			},
			req_register(){
				if(!this.userinf.username){
					ut.totast('请输入用户名');
					return;
				}
				if(!this.userinf.name){
					ut.totast('请输入姓名');
					return;
				}
				if(!this.userinf.phone){
					ut.totast('请输入手机号');
					return;
				}
				if(!this.userinf.vCode){
					ut.totast('请输入验证码');
					return;
				}
				if(!this.userinf.password){
					ut.totast('请输入密码');
					return;
				}
				if(this.userinf.password!=this.userinf.password1){
					ut.totast('两次密码输入不一致');
					return;
				}
				ut.request({
					data: this.userinf,
					url: "user/register",
					c:true
				}).then(data=>{
					this.go_mine_login();
				})
			},
			req_sendCode(){
				if(this.codemsg!="获取验证码"&&this.codemsg!="重新获取")return;
				if(!this.userinf.phone){
					ut.totast('请输入正确的手机号');
					return;
				}
				let codenum=120;
				let timer=setInterval(()=>{
					codenum--;
					this.codemsg=codenum+'s后重新获取';
					if(codenum==0){
						clearInterval(timer);
						this.codemsg="重新获取";
					}
				},1000)
				ut.request({
					data: {
						phone:this.userinf.phone
					},
					url: "user/sendCode"
				}).then(data=>{
				}).catch(data=>{
					clearInterval(timer);
					this.codemsg="重新获取";
				})
			}
		}
	}
</script>

<style>
	.setinput{
		padding: 0 30px;
	}
	.setinput>div>span,.setinput>div>input,.setinput>div>textarea{
		display: inline-block;
		vertical-align: top;
		font-size: 24px;
		line-height: 80px;
		min-height: 80px;
		margin-top: 20px;
		height: 80px;
	}
	.setinput>div{
		border-bottom: 1px solid #C8C8C8;
	}
	.setinput>div>span{
		width: 150px;
	}
	.setinput>div>textarea{
		width: 500px;
		margin-top: 38px;
		line-height: 40px;
	}
	.setinput>div>input{
		width: 300px;
	}
	.submit{
		background: #F6C11B;
		color: white;
		line-height: 80px;
		text-align: center;
		border-radius: 10px;
		font-size: 28px;
	}
	.xieyi{
		padding: 40px 0;
	}
	.xieyi span{
		display: inline-block;
		vertical-align: top;
		margin-right: 10px;
		line-height: 30px;
		font-size: 24px;
	}
	.xieyi span:first-child{
		width: 28px;
		height: 28px;
		border-radius: 10px;
		border: 1px solid #5d5c5c;
		color: white;
		text-align: center;
		font-size: 20px;
		line-height: 28px;
	}
	.xieyi .active{
		color: #F6C11B!important;
		border: 1px solid #F6C11B!important;
	}
	.xieyi span:last-child{
		color: #F6C11B;
	}
	.getcode{
		float: right;
		color: #F6C11B;
		width: 200px;
		text-align: center;
		border-left: 1px solid #C8C8C8;
		height: 30px;
		line-height: 30px;
		margin-top: 45px;
		min-height: 30px;
		font-size: 24px;
	}
	.tip{
		line-height: 60px;
		text-align: right;
		font-size: 24px;
	}
</style>
