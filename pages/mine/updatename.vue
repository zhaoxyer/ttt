<template>
	<view class="updatecont">
		<div>昵称：</div>	
		<div><input type="text" v-model="name"/></div>	
		<div>以中文或英文字母开头，限4到16个字符</div>	
		<div class='submit' @click='req_updateName'>确定</div>	
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				name:''
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
			req_updateName(){
				var re = new RegExp("[\\u4e00-\\u9fa5]", "");
				var re1 = new RegExp("^[a-zA-Z]+$"); 
				if(!this.name){
					ut.totast('请输入昵称');
					return;
				}
				if((!re.test(this.name.split('')[0])&&!re1.test(this.name.split('')[0])) ||this.checkstr(this.name)<4 ||this.checkstr(this.name)>16){
					ut.totast('昵称不符合规则');
					return;
				}
				ut.request({
					data: {
						name:this.name,
					},
					url: "user/updateName"
				}).then(data=>{
					let userinf=wx.getStorageSync('userinf');
					userinf.name=this.name;
					wx.setStorageSync('userinf',userinf)
					wx.navigateBack()
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
		line-height: 60px;
		height: 60px;
		font-size: 24px;
	}
	.updatecont div{
		line-height: 60px;
		height: 60px;
	}
	.updatecont input{
		width: 100%;
		border-bottom: 2px solid #FEC200;
		line-height: 60px;
		height: 60px;
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

