<template>
	<view>
		<div class="header">
			<div class="adress">
				<picker mode="region"  value="请选择所在城市" :custom-item="customItem" class='regionpicker'  v-if="!disabled" @change="bindRegionChange">
								<view class="picker">
									{{provinceName||''}}，{{countyAreaName||''}}，{{cityName||''}}
								</view>
				</picker>
				<image src="../../static/index/whiteadress.jpg" ></image><span>{{cityName||'朝阳'}}</span>
			</div>
			<div class='serch' @click="go_home_serch"><span>请输入所需材料</span><image src="../../static/index/serch.png" ></image></div>
			<div class="tel"><image src="../../static/index/whitetel.jpg" @click="call"></image></div>
		</div>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item v-for="item in swipeList" :key="item">
				<image :src="item"/>
			</swiper-item>
		</swiper>
		<div class='server'>
			<div v-for="(list,index) in classlist" :key='index' @click="go_home_server(list.id,list.name)">
				<image   :src="static+list.picture"   mode="widthFix" class="noimage"></image>
				<view>{{list.name}}</view>
			</div>
		</div>
		<div class="buju">
			<button @click="go_home_reform"></button>
			<button @click="go_home_reform1"></button>
			<image src="../../static/index/buju.jpg" mode="widthFix"></image>
		</div>
		<div class="title1 bg0" v-if="recomlist.length">推荐服务</div>
		<div class="fuwu leftright">
			<div @click="go_home_serverinf(list.classId,list.name)" v-for="(list,index) in recomlist" :key='index'>
				<image :src="static +list.picture" class="noimage"></image>
				<p>{{list.name}}：<span>{{list.price}}</span>起/每次</p>
			</div>
		</div>
		<div class="title1 bg1" v-if="newlist.length">最新优惠</div>
		<div class="fuwu leftright">
			<div  @click="go_home_serverinf(list.classId,list.name)" v-for="(list,index) in newlist" :key='index' >
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
				classlist:[],
				provinceName:'',
				countyAreaName:'',
				cityName:''
			}
		},
		onLoad() {
			this.static=ut.static;
		},
		onShow() {
			if(!this.newlist.length){
				this.req_new();
			}
			if(!this.recomlist.length){
				this.req_recom();
			}
			if(!this.classlist.length){
				this.req_class();
			}
		},
		methods: {
			bindRegionChange: function (e) {
				this.provinceName=e.target.value[0];
				this.countyAreaName=e.target.value[1];
				this.cityName=e.target.value[2];
			},
			go_home_serch(){
				wx.navigateTo({
					url: '../home/serch'
				})
			},
			go_home_server(_id,name){
				console.log(_id)
				wx.navigateTo({
					url: `../home/server?_id=${_id}&title=${name}`
				})
			},
			go_home_serverinf(_id,name){
				wx.navigateTo({
					url: `../home/serverinf?_id=${_id}&title=${name}`
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
			},
			//打开授权
			opensetting(){
				this.wxgetlocation()
			},
			wxgetlocation() {
				wx.authorize({
				scope: "scope.userLocation",
				success:function(){
					wx.getLocation({
						type: 'wgs84',
						success: function(res) {
							console.log(res)
							const latitude = res.latitude;
							const longitude = res.longitude;
							const speed = res.speed;
							const accuracy = res.accuracy;
						}
					})
				},
				fail(){
					ut.totast('获取地址失败');
				}
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
		position: relative;
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
		font-size: 24upx;
		text-align: center;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30upx;
	}
	.server image{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
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
