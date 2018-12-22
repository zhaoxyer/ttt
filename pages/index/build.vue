<template>
	<view>
		<div class="header">
			<div class="adress"><image src="../../static/index/blackadress.png" ></image><span>通州</span></div>
			<div class='serch' @click="go_build_serch"><span>请输入所需材料</span><image src="../../static/index/serch.png" ></image></div>
			<div class="tel"><image src="../../static/index/blacktel.png" ></image></div>
		</div>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item v-for="item in swipeList" :key="item">
				<image :src="item"/>
			</swiper-item>
		</swiper>
		<div class='server'>
			<div v-for="item in 8" :key="item" @click='go_build_build2'>
				<image   :src="'../../static/index/server'+index+'.png'"   mode="widthFix"></image>
			</div>
		</div>
		<div class="title">
			<span>•</span><span class="bg0">最新优惠</span><span>•</span>
		</div>
		<div class="youhui leftright">
			<div>
				<div>智能门锁</div>
				<div>
					<image src="../../static/index/youhui.png"></image>
				</div>
				<div><span>500</span><span>元每套</span></div>
			</div>
			<div>
				<div>智能门锁</div>
				<div>
					<image src="../../static/index/youhui.png"></image>
				</div>
				<div><span>500</span><span>元每套</span></div>
			</div>
			<div>
				<div>智能门锁</div>
				<div>
					<image src="../../static/index/youhui.png"></image>
				</div>
				<div><span>500</span><span>元每套</span></div>
			</div>
			<div>
				<div>智能门锁</div>
				<div>
					<image src="../../static/index/youhui.png"></image>
				</div>
				<div><span>500</span><span>元每套</span></div>
			</div>
		</div>
		<div class="title">
			<span>•</span><span class="bg1">最新推荐</span><span>•</span>
		</div>
		<div class="recom leftright">
			<div>
				<div>
					<p>各式沙发</p>
					<p>500元起/每套</p>
				</div>
				<image src="../../static/index/_tuijian.png"></image>
				<image src="../../static/index/tuijian.png"></image>
			</div>
			<div>
				<div>
					<p>各式沙发</p>
					<p>500元起/每套</p>
				</div>
				<image src="../../static/index/_tuijian.png"></image>
				<image src="../../static/index/tuijian.png"></image>
			</div>
			<div>
				<div>
					<p>各式沙发</p>
					<p>500元起/每套</p>
				</div>
				<image src="../../static/index/_tuijian.png"></image>
				<image src="../../static/index/tuijian.png"></image>
			</div>
			<div>
				<div>
					<p>各式沙发</p>
					<p>500元起/每套</p>
				</div>
				<image src="../../static/index/_tuijian.png"></image>
				<image src="../../static/index/tuijian.png"></image>
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
			go_build_build2(){
				wx.navigateTo({
					url: '../build/build2'
				})
			},
			go_build_serch(){
				wx.navigateTo({
					url: '../build/serch'
				})
			}
		}
	}
</script>

<style>
	.header{
		padding: 40px 30px 30px;
		background: #FEC200;
		height: 70px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.header .tel{
		padding: 0 0 0 80px;
	}
	.header .tel image{
		width: 50px;
		height: 30px;
	}
	.header .serch{
		background: white;
		height: 70px;
		flex: 1;
		border-radius: 15px;
		align-items: center;
		justify-content: space-between;
		display: flex;
		font-size: 30px;
		color: #cccccc;
		padding: 0 20px 0 40px;
	}
	.header .serch image{
		width: 26px;
		height: 24px;
	}
	.header .adress{
		font-size: 30px;
		line-height: 70px;
		padding: 0 28px 0 0;
	}
	.header .adress image{
		width: 20px;
		height: 30px;
		margin-right: 24px;
	}
	.server{
		padding: 0 30px;
		margin-top: 30px;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 96px;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30px;
	}
	.server image{
		width: 100px;
	}
	.title{
		text-align: center;
		margin-top: 40px;
		height: 34px;
	}
	.title span{
		display: inline-block;
		vertical-align: top;
		line-height: 34px;
		font-size: 20px;
	}
	.title span:nth-child(1):before{
		content: '';
		width:70px;
		height: 3px;
		background: black;
		position: absolute;
		margin-left: -80px;
		margin-top: 16px;
	}
	.title span:nth-child(3):after{
		content: '';
		width:70px;
		height: 3px;
		background: black;
		position: absolute;
		margin-left: 10px;
		margin-top: 16px;
	}
	.title span:nth-child(2){
		width: 123px;
		font-size: 20px;
		text-align: center;
		color: white;
		border-radius: 16.5px;
		margin-left: 30px;
		margin-right: 30px;
	}
	.bg0{
		background: #45c5db;
	}
	.bg1{
		background: #efcb70;
	}
	.youhui>div{
		width: 332px;
		height: 188px;
		border-radius: 10px;
		border: 1px solid #c8c8c8;
		display: flex;
		font-size: 22px;
	}
	.youhui>div div:nth-child(2){
		flex: 1;
	}
	.youhui>div:nth-child(2n) div:nth-child(1){
		width: 60px;
		line-height: 60px;
		border-right: 1px solid #C8C8C8;
	}
	.youhui>div:nth-child(2n) div:nth-child(3){
		width: 70px;
		line-height: 70px;
		border-left: none;
	}
	.youhui>div:nth-child(2n) div:nth-child(2) image{
		float: right;
		right: 0;
	}
	.youhui>div div:nth-child(1){
		width: 70px;
		height: 188px;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 70px;
		letter-spacing: 4px;
	}
	.youhui>div div:nth-child(3) span:first-child{
		writing-mode:lr-tb;
		line-height: 22px;
		letter-spacing: 0;
	}
	.youhui>div div:nth-child(3){
		width: 60px;
		height: 188px;
		border-left: 1px solid #C8C8C8;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 70px;
		letter-spacing: 4px;
	}
	.youhui image{width: 190px;height: 190px;}
	.youhui>div:nth-last-child(n+2){
		margin-bottom: 20px;
	}
	.leftright{
		padding: 0 20px;
		margin-top: 27px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		flex-wrap: wrap;
	}
	.recom>div:nth-last-child(n+2){
		margin-bottom: 60px;
	}
	.recom>div image{
		display: inline-block;
		vertical-align: top;
	}
	
	.recom>div{
		width: 50%;
		height: 208px;
	}
	.recom>div div{
		position: absolute;
		margin-left: 190px;
		margin-top: 144px;
		width: 144px;
		text-align: center;
		font-size: 22px;
		line-height: 32px;
	}
	.recom>div:nth-last-child(-n+2) div{
		margin-left: 0;
	}
	.recom>div image:nth-child(2){
		width:190px;
		height: 190px;
	}
	.recom>div image:nth-child(3){
		width: 144px;
		height: 144px;
	}
	.recom>div:nth-last-child(-n+2) image:nth-child(2){
		width:144px;
		height: 144px;
	}
	.recom>div:nth-last-child(-n+2) image:nth-child(3){
		width: 190px;
		height: 190px;
	}
</style>
