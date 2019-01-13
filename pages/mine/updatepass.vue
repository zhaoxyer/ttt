<template>
	<view class="updatecont">
		<div>当前密码：</div>	
		<div><input type="password" v-model="opsd"/></div>
		<div>新密码：</div>	
		<div><input type="password" v-model="npsd"/></div>
		<div>确认密码：</div>	
		<div><input type="password" v-model="nqpsd"/></div>
		<div>长度8~32位须包含数字字母符号至少2种元素</div>	
		<div class='submit' @click='req_updatepassword'>确定</div>	
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				opsd:'',
				npsd:'',
				nqpsd:''
			}
		},
		onLoad() {

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
			req_updatepassword(){
				if(!this.opsd){
					ut.totast('请输入当前密码');
					return;
				}
				if(!this.npsd){
					ut.totast('请输入新密码');
					return;
				}
				if(!this.nqpsd){
					ut.totast('请输入确认密码');
					return;
				}
				if(this.npsd!=this.nqpsd){
					ut.totast('两次密码输入不一致');
					return;
				}
				ut.request({
					data: {
						opsd:this.opsd,
						npsd:this.npsd,
						nqpsd:this.nqpsd
					},
					url: "user/updatepassword"
				}).then(data=>{
					ut.totast('更换密码成功');
					setTimeout(function(){
						wx.navigateBack()
					},1000)
				})
			},
			checkstr(str){
				let num=0;
				const re = new RegExp("[\\u4e00-\\u9fa5]", "");
				str=str.split('');
				str.forEach(item=>{
					if(re.test(item)){
						num+=2;
					}else{
						num+=1;
					}
				})
				return num;
			}
		}
	}
</script>

<style>
	.updatecont{
		padding: 0 30px;
		line-height: 80px;
		height: 80px;
		font-size: 24px;
	}
	.updatecont div{
		line-height: 80px;
		height:80px;
	}
	.updatecont input{
		width: 100%;
		border-bottom: 2px solid #e6e6e6;
		line-height: 80px;
		height: 80px;
	}
	.submit{
		background: #ECBA25;
		color: white;
		text-align: center;
		line-height: 100px!important;
		height: 100px!important;
		margin-top: 30px;
	}
</style>

