<template>
	<div>
		<Adress></Adress>
		<div class="payinf inff" v-for="list in buildinf" :key='list'>
			<div>
				<image :src="static+list.picture"></image>
				<div>
					<p>
						<view>{{list.goodsName||name}}</view>
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
					<picker mode="date"  value="日期" :custom-item="customItem" :start="start" :end="end" class='regionpicker'  v-if="!disabled" @change="dateChange">
						<view class="picker">
							日期
						</view>
					</picker>
					<span v-if='!date'>请选择日期</span>
					<view v-else><span>{{y}}</span><span>年</span><span>{{m}}</span><span>月</span><span>{{d}}</span><span>日</span></view>
				</view>
				<view>
					<picker mode="time"  :value="startTime" :custom-item="customItem" :start="startTime" end="23:59" class='regionpicker'  v-if="!disabled" @change="timeChange">
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
		<div class="payinf sendtype sendtype1">
			<h1>是否搬运上楼</h1>
			<p class="carry">
				<image src="../../static/mine/uncheck.jpg" v-if="requireCarry==1"></image><image src="../../static/mine/check.jpg" v-else @click="cg_requireCarry(1)"></image><span>是</span>
				<image src="../../static/mine/uncheck.jpg" v-if="requireCarry==2" ></image><image src="../../static/mine/check.jpg" v-else @click="cg_requireCarry(2)"></image><span>否</span>
			</p>
			<p class="floor" v-if='requireCarry==1'>
				<view v-for="(list,index) in carrylist" :key='index' @click='cg_carryindex(index)'>
					<view :class="{'active':index==carryindex}"></view><view>{{list.name}}</view>
				</view>
			</p>
			<p class="louceng" v-if="carrylist.length&&requireCarry==1">
				<input placeholder="请输入楼层" v-model="floor" type="number"/>层 起步价¥{{carrylist[carryindex].startPrice}}
			</p>
			<p>50kg以下电梯7层以内包括7层免费搬运上门</p>
		</div>
		<div class="payinf remake">
			<h1>订单备注</h1>
			<div>
				<textarea v-model="remark" placeholder="如有其它需求请写明">
				</textarea>
			</div>
		</div>
		<div class="payinf mingxi">
			<h1>价格明细</h1>
			<div class='mingxiinf'>
				<p>货款：¥{{mallprice}}</p>
				<p>配送费：¥{{sendprice}}</p>
				<p v-if='requireCarry==1'>搬运费：¥{{carryprice}}</p>
			</div>
		</div>
		<precautions type='1'></precautions>
		<div class="apply" >
			<span>合计：<span>¥{{allprice}}</span></span><span @click='req_unifiedOrder'>确认支付</span>
		</div>					
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	import Adress from '../../components/common/adress.vue'
	import precautions from '../../components/common/precautions.vue'
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				buildinf:{},
				vehiclelist:[],
				carrylist:[],
				name:'',
				date:'',
				time:'',
				y:"",
				m:'',
				d:'',
				vehicleindex:0,
				carryindex:0,
				allprice:'',
				mallprice:'',
				sendprice:'',
				carryprice:'',
				remark:'',
				requireCarry:1,
				floor:'',
				static:'',
				start:ut.date(),
				end:ut.enddate(),
				startTime:'00:00'
			}
		},
		computed: {
			...mapState(['adress'])
		},
		components:{
			Adress,
			precautions
		},
		onLoad(opt) {
			this.static=ut.static;
			this.name=opt.name;
			this.buildinf=wx.getStorageSync('buildinf');
			this.buildinf.forEach(item=>{
				if(item.picture)item.picture=item.picture.split(',')[0];
			});
			console.log(this.buildinf)
			wx.setStorageSync('buildinf','');
			this.buildinf.forEach(item=>{
				this.mallprice=(item.price*item.num.toFixed(2)+Number(this.mallprice)).toFixed(2);
				item.goodsSpecId=item.specId?item.specId:item.id;
				item.goodsNumber=item.num;
				item.name =item.goodsSpecName?item.goodsSpecName:item.name
			})
			this.req_vehiclelist();
			this.req_carrylist();
			this.req_getdefaddress();
			
		},
		methods: {
			cg_requireCarry(type){
				this.requireCarry=type;
				this.getallprice();
			},
			getallprice(){
				if(this.requireCarry==1){
					this.allprice=(Number(this.mallprice)+Number(this.sendprice)+Number(this.carryprice)).toFixed(2);
				}else{
					this.allprice=(Number(this.mallprice)+Number(this.sendprice)).toFixed(2);
				}
				
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
					url: '../mine/adress?src=pay'
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
				if(this.date == ut.date()){
					this.startTime = ut.startTime();
				} else {
					this.startTime = '00:00';
				}
			},
			req_unifiedOrder(){
				if (!this.adress) {
					ut.totast('请选择地址');
					return;
				}
				if(!this.date){
					ut.totast('请选择日期');
					return;
				}
				if(!this.time){
					ut.totast('请选择时间');
					return;
				}
				if(!ut.timespace(this.date+' '+this.time)){
					ut.totast('请选择两小时后');
					return
				}
				if(this.requireCarry==1){
					if(!this.floor){
						ut.totast('请填写楼层信息');
						return;
					}
				}
				this.$store.commit('clean')
				ut.request({
					data: {
						 "addressId": this.adress.id,
						  "carryTypeId": this.carrylist[this.carryindex].id,
							"expressTypeId": this.vehiclelist[this.vehicleindex].id,
							"expressTime": this.date+' '+this.time,
							"floor": this.floor,//楼层
							"orderGoods": this.buildinf,
							"remark": this.remark,
							 "number": 1,
							"requireCarry": this.requireCarry//是否搬运1是2否
					},
					url: "goods/order/unifiedOrder",
					c:true
				}).then(data=>{
					ut.pay(data,{
						'complete': function(res) {
							wx.redirectTo({
								url: '../order/buildingGoods?type=1'
							})
						}
					})
				})
			},
			req_vehiclelist(){
				let specArray = [];
				for(let goods of this.buildinf){
					specArray.push({
						specId:goods.goodsSpecId,
						number:goods.num
					})
				}
				ut.request({
					data:specArray,
					url: 'order/vehiclelist',
					c:true
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
	.floor,.louceng{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60upx;
		font-size: 24upx;
	}
	.louceng input{
		border: 1px solid #999999;
		border-radius: 10upx;
	}
	.floor view{
		display: flex;
	}
	.floor view view{
		margin-left: 30upx;
		
	}
	.floor view view:nth-child(1){
		width:30upx;
		height: 30upx;
		border-radius: 15upx;
		padding: 5upx;
		border: 1px solid #999999;
	}
	.floor view view.active{
		background: #FEC200;
	}

	.carry{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60upx;
		font-size: 24upx;
	}
	.carry image,.carry span{
		margin-left: 30upx;
	}
	.carry image{
		width: 40upx;
		height: 40upx;
	}
	.adressli{padding: 30upx;font-size: 26upx;border-bottom: 1px solid #E5E5E5;line-height: 26upx;}
	.adressli div>div{display: inline-block;}
	.adressli>div:nth-child(1){
		font-size: 30upx;
	}
	.adressli>div:nth-child(2){
		margin-bottom: 30upx;
		margin-top: 25upx;
	}
	.adressinf{
		display: flex;
		font-size: 24upx;
		align-items: center;
	 }
	 .adressinf image{
		 width: 20upx;
		 height: 30upx;
	 }
	 .adressinf div{
		 flex: 1;
		 line-height: 30upx;
		 display: flex;
	 }
	 .adressinf div image{
		 
		}
	.adressinf div span{
		flex: 1;
		line-height: 30upx;
	}
	.payinf{padding: 0 30upx;}
	.payinf h1{
		font-size: 28upx;
		line-height: 80upx;
	}
	.inff{
		height: 200upx;
		align-items: center;
		display: flex;
	}
	.payinf>div{
		display: flex;
		font-size: 24upx;
		align-items: center;
		line-height: 50upx;
		width: 100%;
	}
	.payinf>div image{
		width: 150upx;
		height: 120upx;
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
		max-width: 460upx;
		overflow: hidden;
	}
	.payinf>div div p view{
		overflow: hidden;
		white-space: nowrap;
		text-overflow:ellipsis;
	}
	.tip{
		display: flex;
		padding: 0 30upx;
		line-height: 40upx;
		margin-top: 10upx;
		font-size: 24upx;
	}
	.tip div:last-child{
		flex: 1;
		margin-left: 10upx;
	}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		text-align: center;
		display: flex;
		background: white;
		line-height: 100upx;
		font-size: 24upx;
		z-index: 10;
	}
	.apply>span:nth-child(1){
		flex: 1;
	}
	.apply>span:nth-child(1) span{
		color: #FEC200;
	}
	.apply>span:nth-child(2){
		width: 500upx;
		background: #FEC200;
		text-align: center;
		color: white;
	}
	.time{
		border-bottom: 1px solid #E5E5E5;
		border-top: 1px solid #E5E5E5;
	}
	.time>p{
		text-align: center;
	}
	.time>p view{
		display:inline-block ;
		vertical-align: top;
		text-align: center;
		line-height: 100upx;
		font-size: 24upx;
		margin-right: 20upx;
		position: relative;
	}
	.time p view:nth-child(1) span:nth-child(2n+1){
		color: #FEC200;
	}
	.sendtype{
		border-bottom: 1px solid #E5E5E5;;
	}
	.sendtype p{
		padding: 10px 0;
		font-size: 24upx;
	}
	.sendtype p span{
		display: inline-block;
		vertical-align: top;
		margin-right: 30upx;
		height: 60upx;
		line-height: 60upx;
	}

	.sendtype p span:nth-child(1){
		background: #999999;
		color: white;
		width:200upx;
		text-align: center;
		border-radius: 20upx;
	}
	.sendtype p .active{
		background: #FEC200!important;
	}
	.remake,.mingxi{
		border-bottom:1px solid #E5E5E5;
	}
	.remake div{
		height: 150rpx;
		border:1px solid #C9C9C9;
		border-radius: 10rpx;
		margin-bottom: 30rpx;
		padding: 20rpx;
		width:inherit;
	}
	.remake textarea{
		width: 100%;
		height: 100%;
		font-size: 28rpx;
		line-height: 28rpx;
	}
	.bgheight{
		height: 120upx;
	}
	.mingxi .mingxiinf{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 180upx;
		flex-direction: column;
		line-height: 50upx;
		font-size: 24upx;
	}
	.center{
		text-align: center;
	}
</style>
