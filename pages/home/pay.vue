<template>
	<div>
		<Adress></Adress>
		<div class="bggray"></div>
		<div class="payinf">
			<h1>{{serverinf.name}}</h1>
			<div>
				<image :src="static+serverinf.picture"></image>
				<div><span>{{serverinf.name}}</span><span>￥：{{serverinf.bookPrice}}</span></div>
			</div>
		</div>
		<div class="payinf time">
			<h1>{{serverinf.name}}</h1>
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
				<textarea v-model="remark" placeholder="请描述故障原因或简单问题"></textarea>
			</div>
		</div>
		<precautions type='2'></precautions>
		<div class="apply" @click='req_unifiedOrder'>
			<div>确认支付</div>
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
				serverinf: {},
				date: '',
				time: '',
				y: "",
				m: '',
				d: '',
				remark:'',
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
		onLoad() {
			this.static = ut.static;
			this.serverinf = wx.getStorageSync('serverinf');
			console.log(JSON.stringify(this.serverinf))
			wx.setStorageSync('serverinf', '');
		},
		methods: {
			go_mine_adress() {
				wx.navigateTo({
					url: '../mine/adress?src=pay'
				})
			},
			req_unifiedOrder() {
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
				ut.request({
					data: {
						"addressId": this.adress.id,
						"makeTime": this.date +' '+ this.time,
						"remark": this.remark,
						"serviceId": this.serverinf.id
					},
					url: "service/order/unifiedOrder",
					c: true
				}).then(data => {
					wx.requestPayment({
						'timeStamp': data.timeStamp,
						'nonceStr': data.nonceStr,
						'package': data.package,
						'paySign': data.paySign,
						'signType': 'HMAC-SHA256',
						success: function(res) {
							
						},
						'fail': function(res) {
							console.log(res)
						},
						'complete': function(res) {
							wx.redirectTo({
								url: '../order/checkOrder?type=1'
							})
						}
					});
				})
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
