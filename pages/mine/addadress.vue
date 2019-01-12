<template>
	<div class="setinput">
		<div>
			<span>姓名</span><input type="text" placeholder="最少2个,最多15个字" v-model="adressinf.name"/>
		</div>
		<div>
			<span>电话</span><input type="text" placeholder="请输入手机号" v-model="adressinf.phone"/>
		</div>
		<div>
			<span>地区</span><div class="inputall">
				<picker mode="region"  value="请选择所在城市" :custom-item="customItem" class='regionpicker'  v-if="!disabled" @change="bindRegionChange">
						    <view class="picker">
						      {{adressinf.provinceName||''}}，{{adressinf.countyAreaName||''}}，{{adressinf.cityName||''}}
						    </view>
				</picker>
				{{adressinf.provinceName+adressinf.countyAreaName+adressinf.cityName||'请选择所在城市'}}
			</div>
		</div>
		<div>
			<span>地址</span><input type="text" placeholder="请填写详细地址,5~60个字" v-model="adressinf.address"/>
		</div>
		<div>
			<span>邮编</span><input type="text" placeholder="6位邮政编码"/>
		</div>
		<p class="xieyi">
			<span @click="cg_active"><image src="../../static/mine/check.jpg" v-if="!adressinf.defaultType"></image><image src="../../static/mine/uncheck.jpg" v-if="adressinf.defaultType"></image></span><span>设置成默认地址</span>
		</p>
		<p class="submit" @click="req_addaddress()">
			保存
		</p>
	</div>

</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				adressinf:{
					"address": "",
					"cityCode": "",
					"cityName": "",
					"countyAreaCode": "",
					"countyAreaName": "",
					"defaultType": 0,
					"name": "",
					"phone": "",
					"provinceCode": "",
					"provinceName": ""
				},
				id:''
			}
		},
		onLoad(opt) {
			if(opt._id){
				this.id=opt._id;
				this.req_addressInf(opt._id);
			}
		},
		methods: {
			bindRegionChange: function (e) {
			 	this.adressinf.provinceName=e.target.value[0];
			 	this.adressinf.countyAreaName=e.target.value[1];
			 	this.adressinf.cityName=e.target.value[2];
			},
			cg_active(){
				if(this.adressinf.defaultType){
					this.adressinf.defaultType=0;
					return;
				}
				this.adressinf.defaultType=1;
			},
			req_addaddress(){
				let url="address/add";
				if(this.id){
					url="address/update"
				}
				if(!this.adressinf.name){
					ut.totast('请输入姓名');
					return;
				}
				if(!ut.checkmobile(this.adressinf.phone)){
					ut.totast('请输入正确的手机号');
					return;
				}
				if(!this.adressinf.provinceName){
					ut.totast('请选择所在城市');
					return;
				}
				if(!this.adressinf.address){
					ut.totast('请输入详细地址');
					return;
				}
				ut.request({
					data:this.adressinf,
					url: url,
					c:true
				}).then(data=>{
					wx.navigateBack()
				})
			},
			req_addressInf(id){
				ut.request({
					data:{
					id: id
					},
					url: "address/detail"
				}).then(data => {
					this.adressinf=data;
				})
			}
		}
	}
</script>

<style>
	.setinput div{
		padding: 0 30px;
	}
	.setinput>div>span,.setinput>div>input,.setinput>div>textarea,.setinput>div>.inputall{
		display: inline-block;
		vertical-align: top;
		font-size: 24px;
		line-height: 80px;
		min-height: 80px;
		margin-top: 20px;
		height: 80px;
		padding: 0!important;
	}
	.setinput>div{
		border-bottom: 1px solid #C8C8C8;
	}
	.setinput>div>span{
		width: 80px;
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
		margin-left: 30px;
		margin-right: 30px;
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
		padding: 0 30px;
	}
	.xieyi span:first-child image{
		width: 30px;
		height:30px;
		
	}
	.xieyi .active{
		color: #F6C11B!important;
		border: 1px solid #F6C11B!important;
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
	.regionpicker{position: absolute;background: transparent;color: transparent;width: 100%;z-index: 3;}
</style>
