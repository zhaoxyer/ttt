<template>
	<div>
		<div class='adress'>
			<div class="adressli" @click="go_mine_adress" v-if="adress">
				<div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{adress.name}}</div>
				<div>联系方式：{{adress.phone}}</div>
				<div class="adressinf">
					<div>
						<div>
							<image src="../../static/index/blackadress.png" />
						</div><span>收货地址：{{adress.provinceName+adress.countyAreaName+adress.cityName+adress.address}}</span>
					</div>
					<image src="../../static/right.jpg" />
				</div>
			</div>
			<div class="adressli center" @click="go_mine_adress" v-else>
				请选择地址
			</div>
		</div>
		<div class="bggray"></div>
		<div class="payinf">
			<h1>{{serverinf.name}}</h1>
			<div>
				<image :src="static+serverinf.picture"></image>
				<div><span>{{serverinf.name}}</span><span>￥{{serverinf.bookPrice}}</span></div>
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
			<textarea v-model="remark">
				
			</textarea>
		</div>
		<div class="tip">
			<div>注意事项:</div>
			<div>
				<p>1.本次付款为部分定金支付；</p>
				<p>2.生活邦服务完工后，需进行尾款支付；</p>
			</div>
		</div>
		<div class="apply" @click='req_unifiedOrder'>
			<div>确认支付</div>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
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
				adress: '',
				remark:'',
				start:ut.date(),
				end:ut.enddate()
			}
		},
		onLoad() {
			this.static = ut.static;
			this.req_getdefaddress();
			this.serverinf = wx.getStorageSync('serverinf');
			console.log(JSON.stringify(this.serverinf))
			wx.setStorageSync('serverinf', '');
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
			},
			req_getdefaddress() {
				ut.request({
					url: "address/getdefaddress"
				}).then(data => {
					this.adress = data;
				})
			}
		}
	}
</script>

<style>
	.adressli {
		padding: 30upx;
		font-size: 26upx;
		border-bottom: 1px solid #E5E5E5;
		line-height: 26upx;
	}

	.adressli div>div {
		display: inline-block;
	}

	.adressli>div:nth-child(1) {
		font-size: 30upx;
		padding: 0 30upx;
	}

	.adressli>div:nth-child(2) {
		margin-bottom: 30upx;
		margin-top: 25upx;
		padding: 0 30upx;
	}

	.adressinf {
		display: flex;
		font-size: 24upx;
		align-items: center;
	}

	.adressinf image {
		width: 20upx;
		height: 30upx;
	}

	.adressinf div {
		flex: 1;
		line-height: 30upx;
		display: flex;
	}

	.adressinf div image {}

	.adressinf div span {
		flex: 1;
		margin-left: 10upx;
	}

	.payinf {
		padding: 0 30upx;
	}

	.payinf h1 {
		font-size: 28upx;
		line-height: 80upx;
	}

	.payinf>div {
		display: flex;
		font-size: 24upx;
		align-items: center;
		margin-bottom: 20upx;
	}

	.payinf>div image {
		width: 300upx;
		height: 200upx;
	}

	.payinf>div div {
		flex: 1;
	}

	.payinf>div div span {
		margin-left: 20upx;
	}

	.payinf>div div span:last-child {
		color: #FEC200;
	}

	.tip {
		display: flex;
		padding: 0 30upx;
		line-height: 40upx;
		margin-top: 10upx;
		font-size: 24upx;
	}

	.tip div:last-child {
		flex: 1;
		margin-left: 10upx;
	}

	.apply {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		text-align: center;
	}

	.apply div {
		margin-left: 30upx;
		margin-right: 30upx;
		height: 100upx;
		line-height: 100upx;
		color: white;
		background: #F6C11B;
		font-size: 28upx;
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
		line-height: 100upx;
		font-size: 24upx;
		margin-right: 20upx;
		position: relative;
	}

	.time p view:nth-child(1) span:nth-child(2n+1) {
		color: #FEC200;
	}
	.center{
		text-align: center;
	}
	.payinf{padding: 0 30upx;}
	.payinf h1{
		font-size: 28upx;
		line-height: 80upx;
	}
	.payinf>div{
		display: flex;
		font-size: 24upx;
		align-items: center;
		line-height: 50upx;
		width: 100%;
	}
	.payinf>div image{
		width: 150upx;
		height: 120upx;
	}
	.payinf>div div{
		flex: 1;
		text-align: right;
		overflow: hidden;
	}
	.payinf>div div span:last-child{
		float: right;
	}
	.payinf>div div p{
		display: inline-block;
		text-align: left;
		max-width: 460upx;
		overflow: hidden;
	}
	.payinf>div div p view{
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.remake textarea{
		width: 100%;
		height: 150upx;
		border:1px solid #C9C9C9;
		border-radius: 10upx;
		margin-bottom: 30upx;
		font-size: 24upx;
	}
</style>
