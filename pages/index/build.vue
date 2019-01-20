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
			<div @click="go_build_mallinf(list.id,list.name)" v-for="(list,index) in newlist" :key='index'>
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
			<div @click="go_build_mallinf(list.id,list.name)" v-for="(list,index) in recomlist" :key='index'>
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
			go_build_mallinf(_id,name){
				wx.navigateTo({
					url: `../build/mallinf?_id=${_id}&&title=${name}`
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
		padding: 40px 30px 30upx;
		background: #FEC200;
		height: 70upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
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
	.title{
		text-align: center;
		margin-top: 40upx;
		height: 34upx;
	}
	.title span{
		display: inline-block;
		vertical-align: top;
		line-height: 34upx;
		font-size: 20upx;
	}
	.title span:nth-child(1):before{
		content: '';
		width:70upx;
		height: 3upx;
		background: black;
		position: absolute;
		margin-left: -80upx;
		margin-top: 16upx;
	}
	.title span:nth-child(3):after{
		content: '';
		width:70upx;
		height: 3upx;
		background: black;
		position: absolute;
		margin-left: 10upx;
		margin-top: 16upx;
	}
	.title span:nth-child(2){
		width: 123upx;
		font-size: 20upx;
		text-align: center;
		color: white;
		border-radius: 16.5upx;
		margin-left: 30upx;
		margin-right: 30upx;
	}
	.bg0{
		background: #45c5db;
	}
	.bg1{
		background: #efcb70;
	}
	.youhui>div{
		width: 332upx;
		height: 188upx;
		border-radius: 10upx;
		border: 1px solid #c8c8c8;
		display: flex;
		font-size: 22upx;
	}
	.youhui>div div:nth-child(2){
		flex: 1;
	}
	.youhui>div:nth-child(2n) div:nth-child(1){
		width: 60upx;
		line-height: 60upx;
		border-right: 1px solid #C8C8C8;
	}
	.youhui>div:nth-child(2n) div:nth-child(3){
		width: 70upx;
		line-height: 70upx;
		border-left: none;
	}
	.youhui>div:nth-child(2n) div:nth-child(2) image{
		float: right;
		right: 0;
	}
	.youhui>div div:nth-child(1){
		width: 70upx;
		height: 168upx;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 70upx;
		letter-spacing: 4upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
		padding: 10px 0;
	}
	.youhui>div div:nth-child(3) span:first-child{
		writing-mode:lr-tb;
		line-height: 22upx;
		letter-spacing: 0;
	}
	.youhui>div div:nth-child(3){
		width: 60upx;
		height: 188upx;
		border-left: 1px solid #C8C8C8;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 70upx;
		letter-spacing: 4upx;
	}
	.youhui image{width: 190upx;height: 190upx;}
	.youhui>div:nth-last-child(n+2){
		margin-bottom: 20upx;
	}
	.leftright{
		padding: 0 20upx;
		margin-top: 27upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		flex-wrap: wrap;
	}
	.recom>div:nth-last-child(n+2){
		margin-bottom: 60upx;
	}
	.recom>div image{
		display: inline-block;
		vertical-align: top;
	}
	
	.recom>div{
		width: 50%;
		height: 208upx;
	}
	.recom>div div{
		position: absolute;
		margin-left: 190upx;
		margin-top: 144upx;
		width: 144upx;
		text-align: center;
		font-size: 22upx;
		line-height: 32upx;
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
		width:190upx;
		height: 190upx;
	}
	.recom>div image:nth-child(3){
		width: 144upx;
		height: 144upx;
	}
	.recom>div:nth-last-child(-n+2) image:nth-child(2){
		width:144upx;
		height: 144upx;
	}
	.recom>div:nth-last-child(-n+2) image:nth-child(3){
		width: 190upx;
		height: 190upx;
	}
</style>
