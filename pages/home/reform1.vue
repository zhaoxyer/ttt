<template>
	<div>
		<scroll-view  :scroll-y="true">
			<view class="list">
				<div>
					<div class="reformtype">
						<span :class="{'active':reformtype==index}" @click='cg_reformtype(index,list.id)' v-for="(list,index) in classList" :key="index">{{list.name}}</span>
					</div>
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
						<image src="../../static/mine/check.jpg" v-if="index!=check"></image><image src="../../static/mine/uncheck.jpg" v-else></image><span>{{list.name}}</span>
					</div>
				</div>
			</div>
			<div class="bggray"></div>
			<div class='userinf'>
				<h1>面积</h1>
				<div class="type bigType">
					<div v-for="(list,index) in bigType" :key="list" @click="cg_check1(index)">
						<image src="../../static/mine/check.jpg" v-if="index!=check1" ></image><image src="../../static/mine/uncheck.jpg" v-else></image><span>{{list.name}}</span>
					</div>
				</div>
			</div>
		</scroll-view>
		<div class="apply">
			<div @click='req_make'>立即预约</div>
		</div>
	</div>

</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				reformtype:0,
				check1:-1,
				check:-1,
				classList:[],
				server: [],
				homeType:[],
				bigType:[],
				serverIndex:'-1'
			}
		},
		onLoad() {
			this.req_class();
			this.req_bigType();
			this.req_homeType();
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
			cg_check1(index){
				if(this.check1==index){
					this.check1=-1;
					return;
				}
				this.check1=index;
			},
			cg_reformtype(index,id){
				this.reformtype=index;
				this.req_server(id)
			},
			req_class(){
				ut.request({
					url: "renovation/wholeHomeClassList",
					method:'get'
				}).then(data=>{
					this.classList=data;
					return data
				}).then(data=>{
					if(data[0]){
						this.req_server(data[0].id)
					}
				})
			},
			req_bigType(){
				ut.request({
					url: "renovation/houseAreaList",
					method:'get'
				}).then(data=>{
					this.bigType=data;
				})
			},
			req_homeType(){
				ut.request({
					url: "renovation/houseTypeList",
					method:'get'
				}).then(data=>{
					this.homeType=data;
				})
			},
			req_server(id){
				ut.request({
					data:{
						classId:id
					},
					url: "renovation/wholeHomeTypeList",
					method:'get'
				}).then(data=>{
					this.server=data;
				})
			},
			req_make(){
				if(this.serverIndex=='-1'){
					ut.totast('请选择改造类型');
					return;
				}
				if(this.check=='-1'){
					ut.totast('请选择户型');
					return;
				}
				if(this.check1=='-1'){
					ut.totast('请选择面积');
					return;
				}
				wx.setStorageSync('remakeinf',{
					name:this.server[this.serverIndex].name,
					wholeHomeTypeId:this.server[this.serverIndex].id,
					houseTypeId:this.homeType[this.check].id,
					picture:ut.static+this.server[this.serverIndex].picture,
					areaTypeId:this.bigType[this.check1].id
				})
				if(wx.getStorageSync('token')){
					wx.navigateTo({
						url: '../home/remake?type=1'
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
	scroll-view{
		position: absolute;
		width: 100%;
		top:0;
		bottom: 120px;
	}
	::-webkit-scrollbar {
	  width: 0;
	  height: 0;
	  color: transparent;
	}
	.reformtype{
		text-align: center;
	}
	.reformtype span{
		display: inline-block;
		font-size: 30px;
		line-height: 60px;
		width: 200px;
		color: white;
		background: #999999;
		border-radius: 10px;
		text-align: center;
		margin-top: 30px;
		box-shadow: 0 4px 0 #CCCCCC;
	}
	.reformtype span:last-child{
		margin-left: 30px;
	}
	.reformtype .active{
		background: #FEC300!important;
	}
	.userinf {
		padding: 0 30px;
	}

	.userinf h1 {
		font-size: 30px;
		line-height: 60px;
		width: 200px;
		color: white;
		background: #FEC300;
		border-radius: 10px;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 44px;
		box-shadow: 0 4px 0 #CCCCCC;
	}

	.type div {
		display: inline-block;
		vertical-align: top;
		width: 25%;
	}
	.bigType div{
		width: calc(100%/3)!important;
	}
	.type div image,
	.type div span {
		display: inline-block;
		vertical-align: top;
		font-size: 24px;
		line-height: 40px;
	}

	.type div image {
		width: 40px;
		height: 40px;
		margin-right: 10px;
		margin-bottom: 30px;
	}

	.inf {
		font-size: 24px;
		line-height: 30px;
		margin-top: 30px;
	}

	.inf>div {
		margin-bottom: 30px;
	}

	.inf>div div,
	.inf>div span {
		display: inline-block;
		vertical-align: top;
	}

	.inf>div>span {
		width: 104px;
	}

	.inf>div div {
		width: 340px;
		border: 1px solid #5d5c5c;
		height: 30px;
		margin-left: 70px;
		padding: 0 10px;
	}

	.inf>div div image {
		width: 20px;
		height: 20px;
		float: right;
		margin-top: 5px;
	}

	.inf>div div input {
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 24px;
		min-height: 30px;
	}

	.tip {
		text-align: center;
		font-size: 24px;
		color: #999999;
		line-height: 60px;
		margin-top: 20px;
	}

	.apply {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}

	.apply div {
		height: 100px;
		line-height: 100px;
		color: white;
		background: #FEC300;
		font-size: 28px;
		margin-left: 125px;
		margin-right: 125px;
	}


	.bg0 {
		background: #FEC200;
	}

	.server {
		padding: 0 30px;
		margin-top: 40px;
		font-size: 24px;
		margin-bottom: 20px;
	}

	.server p {
		text-align: center;
		line-height: 40px;
	}

	.server div {
		display: inline-block;
		vertical-align: top;
		margin-right: 30px;
	}

	.server div:nth-child(4n) {
		margin-right: 0;
	}

	.server div:nth-last-child(n+5) {
		margin-bottom: 30px;
	}

	.server image {
		width: 150px;
		border-radius: 10px;
		height: 150px;
	}
	.server .active{
		color: #FEC200;
	}

	.bggray {
		background: #e5e5e5;
		height: 40px;
	}

	.list>div:last-child .bggray {
		display: none;
	}
</style>
