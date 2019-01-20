<template>
	<view>
		<div class="header">
			<div class="adress"><image src="../../static/index/whiteadress.jpg" ></image><span>通州</span></div>
			<div class='serch'><span>请输入所需材料</span><image src="../../static/index/serch.png" ></image></div>
			<div class="tel"><image src="../../static/index/whitetel.jpg" ></image></div>
		</div>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item v-for="item in swipeList" :key="item">
				<image :src="item"/>
			</swiper-item>
		</swiper>
		<div class='server'>
			<div v-for="item in 8" :key="item" @click="go_home_server">
				<image   :src="'../../static/index/servertype'+index+'.jpg'"   mode="widthFix"></image>
			</div>
		</div>
		<div class="buju">
			<button></button>
			<button></button>
			<image src="../../static/index/buju.jpg" mode="widthFix"></image>
		</div>
		<div class="title1 bg0">推荐服务</div>
		<div class="fuwu leftright">
			<div @click="go_home_serverinf">
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
		</div>
		<div class="title1 bg1">最新优惠</div>
		<div class="fuwu leftright">
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<p>电脑维修：<span>50</span>起/每次</p>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipeList: ['../../static/index/banner.jpg','../../static/index/banner.jpg'],
				indicatorDots: true,
				indicatorcolor: 'white',
				indicatoractivecolor:'#FEC200',
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true
			}
		},
		onLoad() {

		},
		methods: {
			go_home_server(){
				wx.navigateTo({
					url: '../home/server'
				})
			},
			go_home_serverinf(){
				wx.navigateTo({
					url: '../home/serverinf'
				})
			}
		}
	}
</script>

<style>
	.header{
		padding: 40px 30px 30upx;
		background: #FEC200;
		height: 70upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;
	}
	.header .tel{
		padding: 0 0 0 80upx;
	}
	.header .tel image{
		width: 50upx;
		height: 30upx;
	}
	.header .serch{
		background: white;
		height: 70upx;
		flex: 1;
		border-radius: 15upx;
		align-items: center;
		justify-content: space-between;
		display: flex;
		font-size: 30upx;
		color: #cccccc;
		padding: 0 20px 0 40upx;
	}
	.header .serch image{
		width: 26upx;
		height: 24upx;
	}
	.header .adress{
		font-size: 30upx;
		line-height: 70upx;
		padding: 0 28px 0 0;
	}
	.header .adress image{
		width: 20upx;
		height: 30upx;
		margin-right: 24upx;
	}
	.server{
		padding: 0 30upx;
		margin-top: 30upx;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 96upx;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30upx;
	}
	.server image{
		width: 100upx;
	}
	.title1{
		width: 180upx;
		line-height: 60upx;
		text-align: center;
		font-size: 22upx;
		color: white;
		border-top-right-radius: 30upx;
		border-bottom-right-radius: 30upx;
	}
	.bg0{
		background: #ff9839;
	}
	.bg1{
		background: #6FCED2;
	}
	.buju{
		position: relative;
		margin-bottom: 30upx;
		margin-top: 30upx;
	}
	.buju button{
		position: absolute;
		background: transparent;
		width: 122upx;
		height: 100%;
		left: 128upx;
		border: none;
	}
	.buju button:nth-child(2){
		right: 128upx;
		left: inherit;
	}
	.buju button:after{border: none;}
	.buju image{
		width: 100%;
		display: block;
	}
	.leftright{
		padding: 0 20upx;
		margin-top: 27upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		flex-wrap: wrap;
	}
	.fuwu div{
		width: 326upx;
		font-size: 22upx;
		text-align: center;
		line-height: 50upx;
		margin-bottom: 30upx;
	}
	.fuwu div image{
		width: 100%;
		height: 300upx;
	}
</style>
