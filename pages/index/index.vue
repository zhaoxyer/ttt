<template>
	<view>
		<div class="header">
			<div class="adress"><image src="../../static/index/whiteadress.jpg" ></image><span>通州</span></div>
			<div class='serch'><span>请输入所需材料</span><image src="../../static/index/serch.png" ></image></div>
			<div class="tel"><image src="../../static/index/whitetel.jpg" @click="call"></image></div>
		</div>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item v-for="item in swipeList" :key="item">
				<image :src="item"/>
			</swiper-item>
		</swiper>
		<div class='server'>
			<div v-for="(list,index) in classlist" :key='index' @click="go_home_server(list.id)">
				<image   :src="static+list.picture"   mode="widthFix" class="noimage"></image>
				<view>{{list.name}}</view>
			</div>
		</div>
		<div class="buju">
			<button @click="go_home_reform"></button>
			<button @click="go_home_reform1"></button>
			<image src="../../static/index/buju.jpg" mode="widthFix"></image>
		</div>
		<div class="title1 bg0">推荐服务</div>
		<div class="fuwu leftright">
			<div @click="go_home_serverinf(list.classId)" v-for="(list,index) in recomlist" :key='index'>
				<image :src="static +list.picture" class="noimage"></image>
				<p>{{list.name}}：<span>{{list.price}}</span>起/每次</p>
			</div>
		</div>
		<div class="title1 bg1">最新优惠</div>
		<div class="fuwu leftright">
			<div  @click="go_home_serverinf(list.classId)" v-for="(list,index) in newlist" :key='index' >
				<image :src="static +list.picture" class="noimage"></image>
				<p>{{list.name}}：<span>{{list.price}}</span>起/每次</p>
			</div>
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				static:'',
				swipeList: ['../../static/index/banner.jpg','../../static/index/banner.jpg'],
				indicatorDots: true,
				indicatorcolor: 'white',
				indicatoractivecolor:'#FEC200',
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true,
				newlist: [],
				recomlist: [],
				classlist:[]
			}
		},
		onLoad() {
			this.static=ut.static;
			this.req_class();
			this.req_new();
			this.req_recom();
		},
		methods: {
			go_home_server(_id){
				console.log(_id)
				wx.navigateTo({
					url: '../home/server?_id='+_id
				})
			},
			go_home_serverinf(_id){
				wx.navigateTo({
					url: '../home/serverinf?_id='+_id
				})
			},
			go_home_reform(){
				wx.navigateTo({
					url: '../home/reform'
				})
			},
			go_home_reform1(){
				wx.navigateTo({
					url: '../home/reform1'
				})
			},
			call(){
				ut.call();
			},
			req_class(){
				ut.request({
					data: {
						parentid:0
					},
					url: "service/class"
				}).then(data=>{
					this.classlist=data;
				})
			},
			req_new(){
				ut.request({
					data: {
						parentid:0
					},
					url: "service/newlist"
				}).then(data=>{
					this.newlist=data
				})
			},
			req_recom(){
				ut.request({
					data: {
						parentid:0
					},
					url: "service/recommendlist"
				}).then(data=>{
					this.recomlist=data
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
		color: white;
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
		font-size: 24px;
		text-align: center;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30px;
	}
	.server image{
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.title1{
		width: 180px;
		line-height: 60px;
		text-align: center;
		font-size: 22px;
		color: white;
		border-top-right-radius: 30px;
		border-bottom-right-radius: 30px;
	}
	.bg0{
		background: #ff9839;
	}
	.bg1{
		background: #6FCED2;
	}
	.buju{
		position: relative;
		margin-bottom: 30px;
		margin-top: 30px;
	}
	.buju button{
		position: absolute;
		background: transparent;
		width: 122px;
		height: 100%;
		left: 128px;
		border: none;
	}
	.buju button:nth-child(2){
		right: 128px;
		left: inherit;
	}
	.buju button:after{border: none;}
	.buju image{
		width: 100%;
		display: block;
	}
	.leftright{
		padding: 0 20px;
		margin-top: 27px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		flex-wrap: wrap;
	}
	.fuwu div{
		width: 326px;
		font-size: 22px;
		text-align: center;
		line-height: 50px;
		margin-bottom: 30px;
	}
	.fuwu div image{
		width: 100%;
		height: 300px;
	}
</style>
