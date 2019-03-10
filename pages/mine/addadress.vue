<template>
	<div class="setinput">
		<div>
			<span>姓名</span><input type="text" placeholder="最少2个,最多15个字" v-model="adressinf.name"/>
		</div>
		<div>
			<span>电话</span><input type="number" placeholder="请输入手机号" v-model="adressinf.phone" maxlength="11"/>
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
		<!-- <div>
			<span>邮编</span><input type="text" placeholder="6位邮政编码"/>
		</div> -->
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
				if(e.target.value[2]!="通州区"){
					ut.totast('现在只开通通州的服务，其他区域敬请期待！');
					return
				}
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
	.setinput>div{
		padding: 0 30upx;
		display: flex;
		position: relative;
	}
	.setinput>div>span,.setinput>div>input,.setinput>div>textarea,.setinput>div>.inputall{
		font-size: 24upx;
		line-height: 80upx;
		min-height: 80upx;
		margin-top: 20upx;
		height: 80upx;
		padding: 0!important;
	}
	.setinput>div>input,.setinput>div>textarea,.setinput>div>.inputall{
		flex: 1;
	}
	.setinput>div{
		border-bottom: 1px solid #C8C8C8;
	}
	.setinput>div>span{
		width: 80upx;
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
		margin-left: 30upx;
		margin-right: 30upx;
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
		padding: 0 30upx;
	}
	.xieyi span:first-child image{
		width: 30upx;
		height:30upx;
		
	}
	.xieyi .active{
		color: #F6C11B!important;
		border: 1px solid #F6C11B!important;
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
	.regionpicker{position: absolute;background: transparent;color: transparent;width: 100%;z-index: 3;}
</style>
