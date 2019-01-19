<template>
	<view>
		<div class="header">
			<div class="adress">
				<picker mode="region"  value="请选择所在城市" :custom-item="customItem" class='regionpicker'  v-if="!disabled" @change="bindRegionChange">
								<view class="picker">
									{{provinceName||''}}，{{countyAreaName||''}}，{{cityName||''}}
								</view>
				</picker>
				<image src="../../static/index/blackadress.png" ></image><span>{{cityName||'朝阳'}}</span>
			</div>
			<div class='serch' @click="go_build_serch"><span>请输入所需材料</span><image src="../../static/index/serch.png" ></image></div>
			<div class="tel"><image src="../../static/index/blacktel.png" @click="call"></image></div>
		</div>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item v-for="item in swipeList" :key="item">
				<image :src="item"/>
			</swiper-item>
		</swiper>
		<div class='server'>
			<div v-for="list in classlist" :key="item" @click='go_build_build2(list.id)'>
				<image   :src="static+list.picture"   class="noimage"></image>
				<view>{{list.name}}</view>
			</div>
		</div>
		<div class="title" v-if="newlist.length">
			<span>•</span><span class="bg0">最新优惠</span><span>•</span>
		</div>
		<div class="youhui leftright">
			<div @click="go_build_mallinf(list.id)" v-for="(list,index) in newlist" :key='index'>
				<div>{{list.name}}</div>
				<div>
					<image :src="static +list.picture" class="noimage"></image>
				</div>
				<div><span>{{list.price}}</span><span>元每套</span></div>
			</div>			
		</div>
		<div class="title"  v-if="recomlist.length">
			<span>•</span><span class="bg1">最新推荐</span><span>•</span>
		</div>
		<div class="youhui leftright">
			<div @click="go_build_mallinf(list.id)" v-for="(list,index) in recomlist" :key='index'>
				<div>{{list.name}}</div>
				<div>
					<image :src="static +list.picture" class="noimage"></image>
				</div>
				<div><span>{{list.price}}</span><span>元每套</span></div>
			</div>			
		</div>
		<!-- <div class="recom leftright">
			<div @click="go_build_mallinf(list.id)" v-for="(list,index) in recomlist" :key='index'>
				<div>
					<p>{{list.name}}</p>
					<p>{{list.price}}元起/每套</p>
				</div>
				<image :src="static +list.picture"></image>
				<image src="../../static/index/tuijian.png"></image>
			</div>			
		</div> -->
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				static:"",
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
			call(){
				ut.call();
			},
			go_build_build2(_id){
				wx.navigateTo({
					url: `../build/build2?_id=${_id}`
				})
			},
			go_build_serch(){
				wx.navigateTo({
					url: '../build/serch'
				})
			},
			go_build_mallinf(_id){
				wx.navigateTo({
					url: `../build/mallinf?_id=${_id}`
				})
			},
			req_class(){
				ut.request({
					data: {
						parentid:0
					},
					url: "goods/class"
				}).then(data=>{
					console.log(data)
					this.classlist=data;
				})
			},
			req_new(){
				ut.request({
					data: {
						parentid:0
					},
					url: "goods/newlist"
				}).then(data=>{
					this.newlist=data
				})
			},
			req_recom(){
				ut.request({
					data: {
						parentid:0
					},
					url: "goods/recommendlist"
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
		position: relative;
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
		height: 168px;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 70px;
		letter-spacing: 4px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		padding: 10px 0;
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
	.recom>div div p{
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
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
