<template>
	<div>
		<div class='adress'>
			<div class="adressli" @click="go_mine_adress">
				<div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{adress.name}}</div>
				<div>联系方式：{{adress.phone}}</div>
				<div class="adressinf">
					<div><div></div><span>收货地址：{{adress.provinceName+adress.countyAreaName+adress.cityName+adress.address}}</span></div>
					<image src="../../static/right.jpg"/>
				</div>
			</div>
		</div>
		<div class="payinf inff" v-for="list in buildinf" :key='list'>
			<div>
				<image src="../../static/index/fuwu.jpg"></image>
				<div>
					<p>
						<view>{{name}}</view>
						<view><span>规格</span><span>{{list.name}}</span></view>
						<view><span>数量</span><span>x{{list.num}}</span></view>
						<!-- <view><span>重量</span><span>￥98.00</span></view> -->
					</p>
				</div>
			</div>
		</div>
		<div class="payinf time">
			<h1>配送时间选择</h1>
			<p>
				<view>
					<picker mode="date"  value="日期" :custom-item="customItem" class='regionpicker'  v-if="!disabled" @change="dateChange">
						<view class="picker">
							日期
						</view>
					</picker>
					<span v-if='!date'>请选择日期</span>
					<view v-else><span>{{y}}</span><span>年</span><span>{{m}}</span><span>月</span><span>{{d}}</span><span>日</span></view>
				</view>
				<view>
					<picker mode="time"  value="时间" :custom-item="customItem" class='regionpicker'  v-if="!disabled" @change="timeChange">
						<view class="picker">
							时间
						</view>
					</picker>
					<span>
						{{time||'请选择时间'}}
					</span>
				</view>
			</p>
		</div>
		<div class="payinf sendtype">
			<h1>配送方式</h1>
			<p v-for="(list,index) in vehiclelist" :key='index' @click='cg_vehicleindex(index)'><span :class="{'active':index==vehicleindex}">{{list.name}}</span><span>起步价￥{{list.startPrice}}</span></p>
		</div>
		<div class="payinf sendtype">
			<h1>是否搬运上楼</h1>
			
			<p v-for="(list,index) in carrylist" :key='index' @click='cg_carryindex(index)'><span :class="{'active':index==carryindex}">{{list.name}}</span><span>起步价￥{{list.startPrice}}</span></p>
		</div>
		<div class="payinf remake">
			<h1>订单备注</h1>
			<textarea>
				
			</textarea>
		</div>
		<div class="payinf mingxi">
			<h1>价格明细</h1>
			<div class='mingxiinf'>
				<p>货款：{{mallprice}}</p>
				<p>配送费：{{sendprice}}</p>
				<p>搬运费：{{carryprice}}</p>
			</div>
		</div>
		<div class="bgheight"></div>
		<div class="apply" >
			<span>合计：<span>{{allprice}}</span></span><span @click='req_unifiedOrder'>确认支付</span>
		</div>					
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				buildinf:wx.getStorageSync('buildinf'),
				vehiclelist:[],
				carrylist:[],
				name:'',
				date:'',
				time:'',
				y:"",
				m:'',
				d:'',
				adress:{},
				vehicleindex:0,
				carryindex:0,
				allprice:'',
				mallprice:'',
				sendprice:'',
				carryprice:''
			}
		},
		onLoad(opt) {
			this.name=opt.name;
			console.log(wx.getStorageSync('buildinf'))
			this.req_vehiclelist();
			this.req_carrylist();
			this.req_getdefaddress();
			this.buildinf.forEach(item=>{
				this.mallprice+=item.price;
			})
		},
		methods: {
			getallprice(){
				this.allprice=(Number(this.mallprice)+Number(this.sendprice)+Number(this.carryprice)).toFixed(2);
			},
			cg_vehicleindex(index){
				this.vehicleindex=index;
				this.sendprice=this.vehiclelist[index].startPrice;
				this.getallprice();
			},
			cg_carryindex(index){
				this.carryindex=index;
				this.carryprice=this.carrylist[index].startPrice;
				this.getallprice();
			},
			go_mine_adress(){
				wx.navigateTo({
					url: '../mine/adress'
				})
			},
			timeChange: function (e) {
				this.time=e.detail.value;
			},
			dateChange: function (e) {
				this.date=e.detail.value;
				const date=this.date.split('-');
				this.y=date[0];
				this.m=date[1];
				this.d=date[2];
			},
			req_unifiedOrder(){
				ut.request({
					data: {
						 "addressId": this.adress.id,
						  "carryTypeId": this.carrylist[this.carryindex].id,
							"expressTypeId": this.vehiclelist[this.vehicleindex].id,
							"expressTime": this.date+this.time,
							"floor": 8,//楼层
							"goodsId": this.buildinf[0].goodsId,
							"number": this.buildinf[0].num,
							"remark": "string",
							"requireCarry": 1,//是否搬运1是2否
							"specId": this.buildinf[0].id
					},
					url: "goods/order/unifiedOrder"
				}).then(data=>{
					ut.totast('下单成功')
				})
			},
			req_vehiclelist(){
				ut.request({
					url: "order/vehiclelist"
				}).then(data=>{
					this.vehiclelist=data;
					this.sendprice=this.vehiclelist[0].startPrice;
					this.getallprice();
				})
			},
			req_carrylist(){
				ut.request({
					url: "order/carrylist"
				}).then(data=>{
					this.carrylist=data;
					this.carryprice=this.carrylist[0].startPrice;
					this.getallprice();
				})
			},		
			req_getdefaddress(){
				ut.request({
					url: "address/getdefaddress"
				}).then(data=>{
					this.adress=data;
				})
			}
		}
	}
</script>

<style>
	.adressli{padding: 30px;font-size: 26px;border-bottom: 1px solid #E5E5E5;line-height: 26px;}
	.adressli div>div{display: inline-block;}
	.adressli>div:nth-child(1){
		font-size: 30px;
	}
	.adressli>div:nth-child(2){
		margin-bottom: 30px;
		margin-top: 25px;
	}
	.adressinf{
		display: flex;
		font-size: 24px;
		align-items: center;
	 }
	 .adressinf image{
		 width: 20px;
		 height: 30px;
	 }
	 .adressinf div{
		 flex: 1;
		 line-height: 30px;
		 display: flex;
	 }
	 .adressinf div image{
		 
		}
	.adressinf div span{
		flex: 1;
		line-height: 30px;
	}
	.payinf{padding: 0 30px;}
	.payinf h1{
		font-size: 28px;
		line-height: 80px;
	}
	.inff{
		height: 200px;
		align-items: center;
		display: flex;
	}
	.payinf>div{
		display: flex;
		font-size: 24px;
		align-items: center;
		line-height: 50px;
		width: 100%;
	}
	.payinf>div image{
		width: 150px;
		height: 120px;
	}
	.payinf>div div{
		flex: 1;
		text-align: right;
		overflow: hidden;
	}
	.payinf>div div span:last-child{
		float: right;
	}
	.payinf>div div p{
		display: inline-block;
		text-align: left;
		max-width: 460px;
		overflow: hidden;
	}
	.payinf>div div p view{
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.tip{
		display: flex;
		padding: 0 30px;
		line-height: 40px;
		margin-top: 10px;
		font-size: 24px;
	}
	.tip div:last-child{
		flex: 1;
		margin-left: 10px;
	}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
		display: flex;
		background: white;
		line-height: 100px;
		font-size: 24px;
	}
	.apply>span:nth-child(1){
		flex: 1;
	}
	.apply>span:nth-child(1) span{
		color: #FEC200;
	}
	.apply>span:nth-child(2){
		width: 500px;
		background: #FEC200;
		text-align: center;
		color: white;
	}
	.time{
		border-bottom: 1px solid #E5E5E5;;
		border-top: 1px solid #E5E5E5;;
	}
	.time>p{
		text-align: center;
	}
	.time>p view{
		display:inline-block ;
		vertical-align: top;
		text-align: center;
		line-height: 100px;
		font-size: 24px;
		margin-right: 20px;
	}
	.time p view:nth-child(1) span:nth-child(2n+1){
		color: #FEC200;
	}
	.sendtype{
		border-bottom: 1px solid #E5E5E5;;
	}
	.sendtype p{
		padding: 10px 0;
		font-size: 24px;
	}
	.sendtype p span{
		display: inline-block;
		vertical-align: top;
		margin-right: 30px;
		height: 60px;
		line-height: 60px;
	}

	.sendtype p span:nth-child(1){
		background: #999999;
		color: white;
		width:200px;
		text-align: center;
		border-radius: 20px;
	}
	.sendtype p .active{
		background: #FEC200!important;
	}
	.remake,.mingxi{
		border-bottom:1px solid #E5E5E5;
	}
	.remake textarea{
		width: 100%;
		height: 150px;
		border:1px solid #C9C9C9;
		border-radius: 10px;
		margin-bottom: 30px;
	}
	
	.bgheight{
		height: 120px;
	}
	.mingxi .mingxiinf{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 180px;
		flex-direction: column;
		line-height: 50px;
		font-size: 24px;
	}
</style>
