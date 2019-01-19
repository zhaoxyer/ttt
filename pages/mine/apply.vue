<template>
	<div>
		<div class='userinf' v-if='classlist.length'>
			<h1 v-if="type==1">服务种类</h1>
			<h1 v-if="type==2||type==5">经营种类</h1>
			<h1 v-if="type==3">选择车辆种类</h1>
			<div class="type">
				<div v-for="(list,index) in classlist" :key="list" @click="cg_check(index)">
					<image :src="'../../static/mine/'+((check==index)?'un':'')+'check.jpg'"></image><span>{{list.name}}</span>
				</div>
			</div>
		</div>	
		<div class='userinf'>
			<div class="inf">
				<div>
					<picker mode="region"  value="请选择所在城市"  class='regionpicker'  v-if="!disabled" @change="bindRegionChange">
									<view class="picker" style="line-height: 60rpx">
										{{provinceName||''}}，{{countyAreaName||''}}，{{cityName||''}}
									</view>
					</picker>
					<span>服务范围</span><div><span>{{cityName||'请选择'}}</span><image src="../../static/select.png"></image></div>
				</div>
				<div>
					<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span><div><input type="text" placeholder="请输入姓名" v-model="name"/></div>
				</div>
				<div>
					<picker  value="请选择性别" :range="sexList"  range-key="type"   @change="bindsexChange"  class='regionpicker' >
									<view class="picker" style="line-height: 60rpx">
										{{sex||'请选择'}}
									</view>
					</picker>
					<span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span><div><span>{{sex||'请选择'}}</span><image src="../../static/select.png"></image></div>
				</div>
				<div>
					<span>联系电话</span><div><input type="number" placeholder="请输入联系电话" v-model="phone"/></div>
				</div>
				<div v-if="type==2||type==5">
					<span>店铺地址</span><div><input type="number" placeholder="请输入店铺地址" v-model="adress"/></div>
				</div>
			</div>
		</div>	
		<div class="tip">
			<p>请保持电话畅通，木斗客服3个工作日内会和您联系，</p>
			<p>通知您来面试。</p>
		</div>
		<div class="apply">
			<div @click='submit'>提交申请</div>
		</div>
	</div>

</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				check:'-1',
				classlist:[],
				provinceName:'',
				countyAreaName:'',
				cityName:'',
				name:'',
				phone:'',
				adress:"",
				sexList:[{
					type:'男'
				},
				{
					type:'女'
				}],
				sex:'',
				type:''
			}
		},
		onLoad(opt) {
			this.type=opt.type;
			if(opt.type==1){
				ut.settitle('申请木斗工匠')
			}
			if(opt.type==2){
				ut.settitle('申请木斗商户')
			}
			if(opt.type==3){
				ut.settitle('申请木斗速递')
			}
			if(opt.type==4){
				ut.settitle('申请木斗搬运')
			}
			if(opt.type==5){
				ut.settitle('申请定制商户')
			}
			if(opt.type==6){
				ut.settitle('申请地区加盟')
			}
			this.req_class()
		},
		methods: {
			bindsexChange(e){
				this.sex=this.sexList[e.target.value[0]].type;
			},
			bindRegionChange: function (e) {
				this.provinceName=e.target.value[0];
				this.countyAreaName=e.target.value[1];
				this.cityName=e.target.value[2];
			},
			cg_check(index){
				this.check=index;
			},
			go_mine_infchange(){
				wx.navigateTo({
					url: '../mine/infchange'
				})
			},
			go_mine_apply(){
				wx.navigateTo({
					url: '../mine/apply'
				})
			},
			req_class(){
				let url = "service/class";
				if(this.type==6||this.type==4)return
				if(this.type==3){
					url='order/vehiclelist'
				}
				if(this.type==2||this.type==5){
					url='goods/class'
				}
				ut.request({
					data: {
						parentid:0
					},
					url: url
				}).then(data=>{
					this.classlist=data;
				})
			},
			submit(){
				if(this.check=='-1'&&(this.type==2||this.type==5||this.type==1)){
					ut.totast('请选择服务类型');
					return
				}
				if(this.check=='-1'&&this.type==3){
					ut.totast('请选择车辆种类');
					return
				}
				if(!this.provinceName){
					ut.totast('请选择服务范围');
					return
				}
				if(!this.name){
					ut.totast('请输入姓名');
					return
				}
				if(!this.sex){
					ut.totast('请选择性别');
					return
				}
				if(this.phone=='-1'){
					ut.totast('请输入手机号');
					return
				}
				if(this.type==1){
					this.req_addcraftsman()
				}
				if(this.type==2||this.type==5){
					this.req_addstore()
				}
				if(this.type==3){
					this.req_addexpress()
				}
				if(this.type==4){
					this.req_addcarry()
				}
				if(this.type==6){
					this.req_addjoin()
				}
				
			},
			req_addstore(){
				let url = "join/addstore";
				if(this.type==5){
					url='join/addcustomstore'
				}
					ut.request({
						data: {
							name:this.name,
							phone:this.phone,
							scope:this.provinceName+this.countyAreaName+this.cityName,
							serviceScope:this.provinceName+this.countyAreaName+this.cityName,
							serviceClassIds:this.classlist[this.check].id,
							sex:this.sex,
							adress:this.adress
						},
						c:true,
						url: url
					}).then(data=>{
						wx.showModal({
						title: '提示',
						content: '请保持电话畅通，木斗客服3个工作日内会和您联系，通知您来面试。',
						showCancel:false,
						success(res) {
							if (res.confirm) {
							wx.navigateBack();
							} 
						}
						})
					})
				
			},
			req_addcraftsman(){
				ut.request({
					data: {
						name:this.name,
						phone:this.phone,
						scope:this.provinceName+this.countyAreaName+this.cityName,
						serviceClassIds:this.classlist[this.check].id,
						sex:this.sex
					},
					c:true,
					url: "join/addcraftsman"
				}).then(data=>{
					wx.showModal({
					title: '提示',
					content: '请保持电话畅通，木斗客服3个工作日内会和您联系，通知您来面试。',
					showCancel:false,
					success(res) {
						if (res.confirm) {
						wx.navigateBack();
						} 
					}
					})
				})
			},
			req_addexpress(){
				ut.request({
					data: {
						name:this.name,
						phone:this.phone,
						scope:this.provinceName+this.countyAreaName+this.cityName,
						vehicleTypesIds:this.classlist[this.check].id,
						sex:this.sex
					},
					c:true,
					url: "join/addexpress"
				}).then(data=>{
					wx.showModal({
					title: '提示',
					content: '请保持电话畅通，木斗客服3个工作日内会和您联系，通知您来面试。',
					showCancel:false,
					success(res) {
						if (res.confirm) {
						wx.navigateBack();
						} 
					}
					})
				})
			},
			req_addcarry(){
				ut.request({
					data: {
						name:this.name,
						phone:this.phone,
						scope:this.provinceName+this.countyAreaName+this.cityName,
						sex:this.sex
					},
					c:true,
					url: "join/addcarry"
				}).then(data=>{
					wx.showModal({
					title: '提示',
					content: '请保持电话畅通，木斗客服3个工作日内会和您联系，通知您来面试。',
					showCancel:false,
					success(res) {
						if (res.confirm) {
						wx.navigateBack();
						} 
					}
					})
				})
			},
			req_addjoin(){
				ut.request({
					data: {
						name:this.name,
						phone:this.phone,
						scope:this.provinceName+this.countyAreaName+this.cityName,
						sex:this.sex
					},
					c:true,
					url: "join/addjoin"
				}).then(data=>{
					wx.showModal({
					title: '提示',
					content: '请保持电话畅通，木斗客服3个工作日内会和您联系，通知您来面试。',
					showCancel:false,
					success(res) {
						if (res.confirm) {
						wx.navigateBack();
						} 
					}
					})
				})
			}
		}
	}
</script>

<style>
	.userinf{padding: 0 30px;border-bottom: 1px solid #CCCCCC;}
	.userinf h1{font-size: 28px;line-height: 75px;}
	.type div{display: inline-block;vertical-align: top;width: 25%;}
	.type div image,.type div span{display: inline-block;vertical-align: top;font-size: 24px;line-height: 40px;}
	.type div image{width: 40px;height: 40px;margin-right: 10px;margin-bottom: 30px;}
	.inf{font-size: 24px;line-height: 30px;margin-top: 30px;}
	.inf>div {margin-bottom: 30px;position: relative;}
	.inf>div div,.inf>div span{display: inline-block;vertical-align: top;line-height: 60px}
	.inf>div>span{width: 104px;}
	.inf>div div{width: 340px;border: 1px solid #5d5c5c;height:60px;margin-left: 70px;padding: 0 10px;}
	.inf>div div image{width: 20px;height: 20px;float: right;margin-top: 20px;}
	.inf>div div input{width: 100%;height: 60px;line-height: 60px;font-size: 24px;}
	.tip{text-align: center;font-size: 24px;color: #999999;line-height: 60px;margin-top: 20px;}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}
	.apply div{
		display: inline-block;
		width: 500px;
		height: 100px;
		line-height: 100px;
		color: white;
		background: #F6C11B;
		font-size: 28px;
	}
</style>