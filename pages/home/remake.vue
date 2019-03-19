<template>
	<div>
		<Adress></Adress>
		<div class="bggray"></div>
		<div class="payinf">
			<h1>{{remakeinf.name}}</h1>
			<div>
				<image :src="remakeinf.picture"></image>
				<div><span>{{remakeinf.name}}</span></div>
			</div>
		</div>
		<div class="payinf time">
			<h1>{{remakeinf.name}}</h1>
			<p>
				<view>
					<picker mode="date" value="日期" :custom-item="customItem" :start="start" :end="end" class='regionpicker' v-if="!disabled" @change="dateChange">
						<view class="picker">
							日期
						</view>
					</picker>
					<span v-if='!date'>请选择日期</span>
					<view v-else><span>{{y}}</span><span>年</span><span>{{m}}</span><span>月</span><span>{{d}}</span><span>日</span></view>
				</view>
				<view>
					<picker mode="time" value="时间" :custom-item="customItem" class='regionpicker' v-if="!disabled" @change="timeChange">
						<view class="picker">
							时间
						</view>
					</picker>
					<span>
						{{time||'请选择时间'}}
					</span>
				</view>
			</p>
		</div>
		<div class="payinf remake">
			<h1>备注</h1>
			<div>
				<textarea v-model="remark" placeholder="请描述故障原因或简单问题">
				</textarea>
			</div>
		</div>
		<precautions type='2'></precautions>
		<div class="apply" @click='req_remake'>
			<div>立即预约</div>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	import Adress from '../../components/common/adress.vue'
	import precautions from '../../components/common/precautions.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				static: '',
				remakeinf: {},
				date: '',
				time: '',
				y: "",
				m: '',
				d: '',
				type:'',
				remark: '',
				start:ut.date(),
				end:ut.enddate()
			}
		},
		computed: {
			...mapState(['adress'])
		},
		components:{
			Adress,
			precautions
		},
		onLoad(opt) {
			console.log(ut.date())
			this.type=opt.type;
			this.static = ut.static;
			this.remakeinf = wx.getStorageSync('remakeinf');
			console.log(JSON.stringify(this.remakeinf))
			wx.setStorageSync('remakeinf', '');
		},
		onShow() {
			if (wx.getStorageSync('adress')) {
				this.adress = wx.getStorageSync('adress');
				wx.setStorageSync('adress', '');
			}
		},
		methods: {
			go_mine_adress() {
				wx.navigateTo({
					url: '../mine/adress?src=pay'
				})
			},
			reform(){
				ut.request({
					data: {
						"addressId": this.adress.id,
						"makeTime": this.date +' '+ this.time,
						"remark": this.remark,
						"reformTypeId": this.remakeinf.reformTypeId,
						"houseTypeId": this.remakeinf.houseTypeId
					},
					url: "reform/make"
				}).then(data => {
					wx.showModal({
					title: '提示',
					content: '预约成功',
					showCancel:false,
					success(res) {
						if (res.confirm) {
						wx.navigateBack();
						} 
					}
					})
				})
			},
			whole(){
				ut.request({
					data: {
						"addressId": this.adress.id,
						"makeTime": this.date +' '+ this.time,
						"remark": this.remark,
						"wholeHomeTypeId": this.remakeinf.wholeHomeTypeId,
						"houseTypeId": this.remakeinf.houseTypeId,
						"areaTypeId": this.remakeinf.areaTypeId
					},
					url: "renovation/make"
				}).then(data => {
					wx.showModal({
					title: '提示',
					content: '预约成功',
					showCancel:false,
					success(res) {
						if (res.confirm) {
						wx.navigateBack();
						} 
					}
					})
				})
			},
			req_remake() {
				if (!this.adress) {
					ut.totast('请选择地址');
					return;
				}
				if (!this.date) {
					ut.totast('请选择日期');
					return;
				}
				if (!this.time) {
					ut.totast('请选择时间');
					return;
				}
				if(!ut.timespace(this.date+' '+this.time)){
					ut.totast('请选择两小时后');
					return
				}
				if(this.type){
					this.whole()
				}else{
					this.reform()
				}
			
			},
			timeChange: function(e) {
				this.time = e.detail.value;
			},
			dateChange: function(e) {
				this.date = e.detail.value;
				const date = this.date.split('-');
				this.y = date[0];
				this.m = date[1];
				this.d = date[2];
			}
		}
	}
</script>

<style>
	.adressli {
		padding: 30rpx;
		font-size: 26rpx;
		border-bottom: 1px solid #E5E5E5;
		line-height: 26rpx;
	}
	
	.adressli div>div {
		display: inline-block;
	}
	
	.adressli>div:nth-child(1) {
		font-size: 30rpx;
		padding: 0 30rpx;
	}
	
	.adressli>div:nth-child(2) {
		margin-bottom: 30rpx;
		margin-top: 25rpx;
		padding: 0 30rpx;
	}
	
	.adressinf {
		display: flex;
		font-size: 24rpx;
		align-items: center;
	}
	
	.adressinf image {
		width: 20rpx;
		height: 30rpx;
	}
	
	.adressinf div {
		flex: 1;
		line-height: 30rpx;
		display: flex;
	}
	
	.adressinf div image {}
	
	.adressinf div span {
		flex: 1;
		margin-left: 10rpx;
	}
	
	.payinf {
		padding: 0 30rpx;
	}
	
	.payinf h1 {
		font-size: 28rpx;
		line-height: 80rpx;
	}
	
	.payinf>div {
		display: flex;
		font-size: 24rpx;
		align-items: center;
		margin-bottom: 20rpx;
	}
	
	.payinf>div image {
		width: 300rpx;
		height: 200rpx;
	}
	
	.payinf>div div {
		flex: 1;
	}
	
	.payinf>div div span {
		margin-left: 20rpx;
	}
	
	.payinf>div div span:last-child {
		color: #FEC200;
	}
	
	.tip {
		display: flex;
		padding: 0 30rpx;
		line-height: 40rpx;
		margin-top: 10rpx;
		font-size: 24rpx;
		margin-bottom: 120rpx;
	}
	
	.tip div:last-child {
		flex: 1;
		margin-left: 10rpx;
	}
	
	.apply {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		text-align: center;
		padding: 20rpx 0 0 0;
		background: white;
	}
	
	.apply div {
		margin-left: 30rpx;
		margin-right: 30rpx;
		height: 100rpx;
		line-height: 100rpx;
		color: white;
		background: #F6C11B;
		font-size: 28rpx;
	}
	
	.time {
		border-bottom: 1px solid #E5E5E5;
		border-top: 1px solid #E5E5E5;
	}
	
	.time>p {
		text-align: center;
	}
	
	.time>p view {
		display: inline-block;
		vertical-align: top;
		text-align: center;
		line-height: 100rpx;
		font-size: 24rpx;
		margin-right: 20rpx;
		position: relative;
	}
	
	.time p view:nth-child(1) span:nth-child(2n+1) {
		color: #FEC200;
	}
	.center{
		text-align: center;
	}
	.payinf{padding: 0 30rpx;}
	.payinf h1{
		font-size: 28rpx;
		line-height: 80rpx;
	}
	.payinf>div{
		display: flex;
		font-size: 24rpx;
		align-items: center;
		line-height: 50rpx;
		width: 100%;
	}
	.payinf>div image{
		width: 300rpx;
		height: 200rpx;
	}
	.payinf>div div{
		flex: 1;
		overflow: hidden;
	}
	.payinf>div div span:last-child{
	}
	.payinf>div div p{
		display: inline-block;
		text-align: left;
		max-width: 460rpx;
		overflow: hidden;
	}
	.payinf>div div p view{
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.remake div{
		height: 150rpx;
		border:1px solid #C9C9C9;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
		padding: 20rpx;
		width:inherit;
	}
	.remake textarea{
		width: 100%;
		height: 100%;
		font-size: 28rpx;
		line-height: 28rpx;
	}
</style>
