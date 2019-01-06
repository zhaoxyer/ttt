<template>
	<div>
		<div class='adress'>
			<div class="adressli" @click="go_mine_adress">
				<div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：张先生</div>
				<div>联系方式：1863599999</div>
				<div class="adressinf">
					<div><div></div><span>收货地址：北京市通州区春元街撒娇就小区北京市通州区春元街撒娇就小区北京市通州区春元街撒娇就小区</span></div>
					<image src="../../static/right.jpg"/>
				</div>
			</div>
		</div>
		<div class="payinf">
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<div>
					<view><span>马桶疏通</span><span>￥98.00</span></view>
					<view><span>马桶疏通</span><span>￥98.00</span></view>
					<view><span>马桶疏通</span><span>￥98.00</span></view>
					<view><span>马桶疏通</span><span>￥98.00</span></view>
				</div>
			</div>
		</div>
		<div class="payinf time">
			<h1>配送时间选择</h1>
			<p><span>2018</span><span>年</span><span>6</span><span>月</span><span>20</span><span>日</span><span>10</span></p>
		</div>
		<div class="tip">
			<div>注意事项:</div>
			<div>
				<p>1.本次付款为部分定金支付；</p>
				<p>2.生活邦服务完工后，需进行尾款支付；</p>
			</div>
		</div>
		<div class="apply">
			<div>确认支付</div><div>确认支付</div>
		</div>					
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			go_mine_adress(){
				wx.navigateTo({
					url: '../mine/adress'
				})
			}			
		}
	}
</script>

<style>
	.adressli{padding: 30px;font-size: 26px;border-bottom: 1px solid #E5E5E5;line-height: 26px;}
	.adressli div>div{display: inline-block;}
	.adressli>div:nth-child(1){
		font-size: 30px;
	}
	.adressli>div:nth-child(2){
		margin-bottom: 30px;
		margin-top: 25px;
	}
	.adressinf{
		display: flex;
		font-size: 24px;
		align-items: center;
	 }
	 .adressinf image{
		 width: 20px;
		 height: 30px;
	 }
	 .adressinf div{
		 flex: 1;
		 line-height: 30px;
		 display: flex;
	 }
	 .adressinf div image{
		 
		}
	.adressinf div span{
		flex: 1;
		line-height: 30px;
	}
	.payinf{padding: 0 30px;}
	.payinf h1{
		font-size: 28px;
		line-height: 80px;
	}
	.payinf>div{
		display: flex;
		font-size: 24px;
		align-items: center;
		line-height: 40px;
	}
	.payinf>div image{
		width: 150px;
		height: 120px;
	}
	.payinf>div div{
		flex: 1;
	}
	.payinf>div div span{
		margin-left: 20px;
	}
	.payinf>div div span:last-child{
		color: #FEC200;
	}
	.tip{
		display: flex;
		padding: 0 30px;
		line-height: 40px;
		margin-top: 10px;
		font-size: 24px;
	}
	.tip div:last-child{
		flex: 1;
		margin-left: 10px;
	}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}
	.apply div{
		margin-left: 30px;
		margin-right: 30px;
		height: 100px;
		line-height: 100px;
		color: white;
		background: #F6C11B;
		font-size: 28px;
	}
	.time{
		border-bottom: 1px solid #E5E5E5;;
		border-top: 1px solid #E5E5E5;;
	}
	.time p{
		text-align: center;
		line-height: 100px;
		font-size: 28px;
	}
	.time p span:nth-child(2n+1){
		color: #FEC200;
	}
</style>
