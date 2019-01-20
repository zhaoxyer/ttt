<template>
	<div class="setinput">
		<div>
			<span>手机号</span><input type="text" placeholder="请输入手机号" v-model="userinf.phone"/>
		</div>
		<div>
			<span>验证码</span><input type="text" placeholder="请输入验证码" v-model="userinf.code"/><label class="getcode" @click="req_sendCode">{{codemsg}}</label>
		</div>
		<p class="submit">
			<view  @click="req_register">更换手机号</view>
		</p>
	</div>

</template>

<script>
	import ut from '../../utils/index.js';
	import login from '../../components/login.vue'
	export default {
		data() {
			return {
				check:false,
				codemsg:"获取验证码",
				userinf:{
					"phone": "",//手机号
					"code": ""//验证码
				}
			}
		},
		components: {
			login
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
				if(!ut.checkmobile(this.userinf.phone)){
					ut.totast('请输入正确的手机号');
					return;
				}
				if(!this.userinf.code){
					ut.totast('请输入验证码');
					return;
				}	
				ut.request({
					data: this.userinf,
					url: "user/updatephone"
				}).then(data=>{
					ut.totast('更换手机号成功');
					setTimeout(function(){
						wx.navigateBack()
					},1000)
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
		padding: 0 30upx;
	}
	.setinput>div>span,.setinput>div>input,.setinput>div>textarea{
		font-size: 24upx;
		line-height: 80upx;
		min-height: 80upx;
		margin-top: 20upx;
		height: 80upx;
	}
	.setinput>div>input,.setinput>div>textarea{
		flex: 1;
	}
	.setinput>div{
		border-bottom: 1px solid #C8C8C8;
		display: flex;
	}
	.setinput>div>span{
		width: 150upx;
	}
	.setinput>div>textarea{
		width: 500upx;
		margin-top: 38upx;
		line-height: 40upx;
	}
	.setinput>div>input{
		width: 300upx;
	}
	.submit{
		background: #F6C11B;
		color: white;
		line-height: 80upx;
		text-align: center;
		border-radius: 10upx;
		font-size: 28upx;
		position: relative;
		margin-top: 60upx;
	}
	.xieyi{
		padding: 40px 0;
	}
	.xieyi span{
		display: inline-block;
		vertical-align: top;
		margin-right: 10upx;
		line-height: 30upx;
		font-size: 24upx;
	}
	.xieyi span:first-child{
		width: 28upx;
		height: 28upx;
		border-radius: 10upx;
		border: 1px solid #5d5c5c;
		color: white;
		text-align: center;
		font-size: 20upx;
		line-height: 28upx;
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
		width: 200upx;
		text-align: center;
		border-left: 1px solid #C8C8C8;
		height: 30upx;
		line-height: 30upx;
		margin-top: 45upx;
		min-height: 30upx;
		font-size: 24upx;
	}
	.tip{
		line-height: 60upx;
		text-align: right;
		font-size: 24upx;
	}
	p{
		position: relative;
		height: 80upx;
	}
</style>
