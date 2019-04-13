<template>
	<view>
		<SearchBox type="2" text="请输入所需材料"></SearchBox>
		<Banner :swipeList="swipeList" type="2"></Banner>
		<ServerType :list="classlist" type="2"></ServerType>
		<div class="title" v-if="newlist.length">
			<image src="../../static/index/line-left.png"></image><span class="bg0">最新优惠</span><image src="../../static/index/line-right.png"></image>
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
			<image src="../../static/index/line-left.png"></image><span class="bg1">最新推荐</span><image src="../../static/index/line-right.png"></image>
		</div>
		<div class="recom leftright">
			<div @click="go_build_mallinf(list.id,list.name)" v-for="(list,index) in recomlist" :key='index'>
				<div>
					<p>{{list.name}}</p>
					<p>{{list.price}}元起/每套</p>
				</div>
				<image :src="static +list.picture"></image>
				<image :src="static +list.picture"></image>
			</div>			
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	import Banner from '../../components/common/banner.vue'
	import SearchBox from '../../components/common/searchBox.vue'
	import ServerType from '../../components/common/serverType.vue'
	export default {
		data() {
			return {
				static:"",
				swipeList: wx.getStorageSync('banderbuild')||[],
				newlist: [],
				recomlist: [],
				classlist:[],
				provinceName:'',
				countyAreaName:'',
				cityName:'通州'
			}
		},
		components:{
			Banner,
			SearchBox,
			ServerType
		},
		onLoad() {
			this.static=ut.static;
		},
		onShow() {
			const reload = ut.checkPageTime('index_build_time');
			if(!this.newlist.length||reload){
				this.req_new();
			}
			if(!this.recomlist.length||reload){
				this.req_recom();
			}
			if(!this.classlist.length||reload){
				this.req_class();
			}
			if(!this.swipeList.length||reload){
				this.req_banner();
			}
		},
		methods: {
			go_build_build2(_id,name){
				wx.navigateTo({
					url: `../build/build2?_id=${_id}&name=${name}`
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
			},
			req_banner(){
				ut.request({
					allurl: ut.uploadimgurl+"common/banner",
					data:{type:1},
					method:'GET'
				}).then(data=>{
					this.swipeList=data;
					wx.setStorageSync('banderbuild',this.swipeList);
				})
			}
		}
	}
</script>

<style>
	.title{
		text-align: center;
		margin-top: 40upx;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 33rpx;
	}

	.title span{
		width: 123upx;
		font-size: 18upx;
		text-align: center;
		color: white;
		border-radius: 16.5upx;
		margin-left: 30upx;
		margin-right: 30upx;
		height: 33rpx;
		line-height: 33rpx;
	}
	.title image{
		width: 87rpx;
		height: 8rpx;
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
		height: 188upx;
		writing-mode:tb-rl;
		text-align: center;
		line-height: 70upx;
		letter-spacing: 4upx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.youhui>div div:nth-child(3) span:first-child{
		writing-mode:lr-tb;
		line-height: 22upx;
		letter-spacing: 0;
	}
	.youhui>div div:nth-child(3){
		width: 70upx;
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
		border-radius: 50%;
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
