<template>
	<div>
		<view class="list">
			<div>
				<div class="youhui leftright">
					<div class='server'>
						<div v-for="(list,index) in server" :key="index" @click="cg_serverIndex(index)">
							<image :src="static+list.picture"></image>
							<p :class="{'active':serverIndex==index}">{{list.name}}</p>
						</div>
					</div>
				</div>
				<div class="bggray"></div>
			</div>
		</view>
		<div class="bggray"></div>
		<div class='userinf'>
			<h1>户型</h1>
			<div class="type">
				<div v-for="(list,index) in homeType" :key="list" @click="cg_check(index)">
					<image src="../../static/mine/check.jpg"  v-if="index!=check"></image><image src="../../static/mine/uncheck.jpg" v-else></image><span>{{list.name}}</span>
				</div>
			</div>
		</div>
		<div class="apply">
			<div @click="go_home_remake">立即预约</div>
		</div>
	</div>

</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				check:-1,
				server: [],
				homeType:[],
				static:'',
				serverIndex:'-1'
			}
		},
		onLoad() {
			this.static=ut.static
			this.req_homeType();
			this.req_server();
		},
		methods: {
			cg_serverIndex(index){
				this.serverIndex=index
			},
			go_mine_infchange() {
				wx.navigateTo({
					url: '../mine/infchange'
				})
			},
			go_mine_apply() {
				wx.navigateTo({
					url: '../mine/apply'
				})
			},
			cg_check(index){
				if(this.check==index){
					this.check=-1;
					return;
				}
				this.check=index
			},
			req_homeType(){
				ut.request({
					url: "reform/houseTypeList",
					method:'get'
				}).then(data=>{
					this.homeType=data;
				})
			},
			req_server(){
				ut.request({
					url: "reform/reformTypeList",
					method:'get'
				}).then(data=>{
					this.server=data;
				})
			},
			go_home_remake(){
				if(this.serverIndex=='-1'){
					ut.totast('请选择改造类型');
					return;
				}
				if(this.check=='-1'){
					ut.totast('请选择户型');
					return;
				}
				wx.setStorageSync('remakeinf',{
					name:this.server[this.serverIndex].name,
					reformTypeId:this.server[this.serverIndex].id,
					houseTypeId:this.homeType[this.check].id,
					picture:ut.static+this.server[this.serverIndex].picture
				})
				if(wx.getStorageSync('token')){
					wx.navigateTo({
						url: '../home/remake'
					})
				}else{
					wx.navigateTo({
						url: '../mine/login'
					})
				}
			}
		}
	}
</script>

<style>
	.userinf {
		padding: 0 30upx;
	}

	.userinf h1 {
		font-size: 30upx;
		line-height: 60upx;
		width: 200upx;
		color: white;
		background: #FEC300;
		border-radius: 10upx;
		text-align: center;
		margin-top: 30upx;
		margin-bottom: 44upx;
		box-shadow: 0 4px 0 #CCCCCC;
	}

	.type div {
		display: inline-block;
		vertical-align: top;
		width: 25%;
	}

	.type div image,
	.type div span {
		display: inline-block;
		vertical-align: top;
		font-size: 24upx;
		line-height: 40upx;
	}

	.type div image {
		width: 40upx;
		height: 40upx;
		margin-right: 10upx;
		margin-bottom: 30upx;
	}

	.inf {
		font-size: 24upx;
		line-height: 30upx;
		margin-top: 30upx;
	}

	.inf>div {
		margin-bottom: 30upx;
	}

	.inf>div div,
	.inf>div span {
		display: inline-block;
		vertical-align: top;
	}

	.inf>div>span {
		width: 104upx;
	}

	.inf>div div {
		width: 340upx;
		border: 1px solid #5d5c5c;
		height: 30upx;
		margin-left: 70upx;
		padding: 0 10upx;
	}

	.inf>div div image {
		width: 20upx;
		height: 20upx;
		float: right;
		margin-top: 5upx;
	}

	.inf>div div input {
		width: 100%;
		height: 30upx;
		line-height: 30upx;
		font-size: 24upx;
		min-height: 30upx;
	}

	.tip {
		text-align: center;
		font-size: 24upx;
		color: #999999;
		line-height: 60upx;
		margin-top: 20upx;
	}

	.apply {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		text-align: center;
	}

	.apply div {
		height: 100upx;
		line-height: 100upx;
		color: white;
		background: #FEC300;
		font-size: 28upx;
		margin-left: 125upx;
		margin-right: 125upx;
	}


	.bg0 {
		background: #FEC200;
	}

	.server {
		padding: 0 30upx;
		margin-top: 40upx;
		font-size: 24upx;
		margin-bottom: 20upx;
	}

	.server p {
		text-align: center;
		line-height: 40upx;
	}
	.server .active{
		color: #FEC200;
	}
	.server div {
		display: inline-block;
		vertical-align: top;
		margin-right: 30upx;
	}

	.server div:nth-child(4n) {
		margin-right: 0;
	}

	.server div:nth-last-child(n+5) {
		margin-bottom: 30upx;
	}

	.server image {
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
	}

	.bggray {
		background: #e5e5e5;
		height: 40upx;
	}

	.list>div:last-child .bggray {
		display: none;
	}
</style>
