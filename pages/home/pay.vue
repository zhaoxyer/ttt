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
					<picker mode="date" value="日期" :custom-item="customItem" class='regionpicker' v-if="!disabled" @change="dateChange">
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
				adress: ''
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
						"makeTime": this.date + this.time,
						"remark": '',
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
		padding: 30px;
		font-size: 26px;
		border-bottom: 1px solid #E5E5E5;
		line-height: 26px;
	}

	.adressli div>div {
		display: inline-block;
	}

	.adressli>div:nth-child(1) {
		font-size: 30px;
		padding: 0 30px;
	}

	.adressli>div:nth-child(2) {
		margin-bottom: 30px;
		margin-top: 25px;
		padding: 0 30px;
	}

	.adressinf {
		display: flex;
		font-size: 24px;
		align-items: center;
	}

	.adressinf image {
		width: 20px;
		height: 30px;
	}

	.adressinf div {
		flex: 1;
		line-height: 30px;
		display: flex;
	}

	.adressinf div image {}

	.adressinf div span {
		flex: 1;
		margin-left: 10px;
	}

	.payinf {
		padding: 0 30px;
	}

	.payinf h1 {
		font-size: 28px;
		line-height: 80px;
	}

	.payinf>div {
		display: flex;
		font-size: 24px;
		align-items: center;
		margin-bottom: 20px;
	}

	.payinf>div image {
		width: 300px;
		height: 200px;
	}

	.payinf>div div {
		flex: 1;
	}

	.payinf>div div span {
		margin-left: 20px;
	}

	.payinf>div div span:last-child {
		color: #FEC200;
	}

	.tip {
		display: flex;
		padding: 0 30px;
		line-height: 40px;
		margin-top: 10px;
		font-size: 24px;
	}

	.tip div:last-child {
		flex: 1;
		margin-left: 10px;
	}

	.apply {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}

	.apply div {
		margin-left: 30px;
		margin-right: 30px;
		height: 100px;
		line-height: 100px;
		color: white;
		background: #F6C11B;
		font-size: 28px;
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
		line-height: 100px;
		font-size: 24px;
		margin-right: 20px;
		position: relative;
	}

	.time p view:nth-child(1) span:nth-child(2n+1) {
		color: #FEC200;
	}
	.center{
		text-align: center;
	}
</style>
