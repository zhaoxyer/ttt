<template>
	<view>
		<SearchBox type="1" text="请输入所需服务"></SearchBox>
		<Banner :swipeList='swipeList' type='1'></Banner>
		<ServerType :list="classlist" type="1"></ServerType>
		<div class="buju">
			<button @click="go_home_reform"></button>
			<button @click="go_home_reform1"></button>
			<image src="../../static/index/buju.jpg" mode="widthFix"></image>
		</div>
		<div class="title1 bg0" v-if="recomlist.length">推荐服务</div>
		<Servers :list="recomlist"></Servers>
		<div class="title1 bg1" v-if="newlist.length">最新优惠</div>
		<Servers :list="newlist"></Servers>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	import Banner from '../../components/common/banner.vue'
	import SearchBox from '../../components/common/searchBox.vue'
	import ServerType from '../../components/common/serverType.vue'
	import Servers from '../../components/common/servers.vue'
	export default {
		data() {
			return {
				static:'',
				swipeList: wx.getStorageSync('banderindex')||[],
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
			ServerType,
			Servers
		},
		onLoad() {
			this.static=ut.static;
		},
		onShow() {
			const reload = ut.checkPageTime('index_index_time');
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
		onShareAppMessage() {
			var that = this;
			return {
				title:'',
				success: (res) => {
					console.log("转发成功", res);
				},
				fail: (res) => {
					console.log("转发失败", res);
				}
			}
		},
		methods: {
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
			req_banner(){
				ut.request({
					allurl: ut.uploadimgurl+"common/banner",
					data:{type:2},
					method:'GET'
				}).then(data=>{
					console.log(data);
					this.swipeList=data;
					wx.setStorageSync('banderindex',this.swipeList);
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
		background: linear-gradient(#ff9836, #ffb169);
	}
	.bg1{
		background: linear-gradient(#60ced0, #75d6db);
		margin-top: 34.5upx;
	}
	.buju{
		position: relative;
		margin-bottom: 23.5upx;
		margin-top: 27upx;
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
</style>
