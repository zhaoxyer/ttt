<template>
	<div>
		<div class="mallinf1">
			<div class="otherinf">
				<div class="share">
					<div>
						<button type="primary" bindtap="onShareAppMessage" open-type="share" class="shareFriend"></button>
						<image src="../../static/home/share.png"></image>
						<div>分享</div>
					</div>
					<!-- <div>
						<image src="../../static/home/share.png"></image>
						<div>收藏</div>
					</div> -->
					
				</div>
				<div class="mallname">
					<p>{{mallname}}</p>
					<p>{{mallname1}}</p>
				</div>
				<div class="malladress">
					<view>{{tenant.name}}</view>
					<view>{{tenant.address}}</view>
				</div>
			</div>
			<image :src="static+tenant.picture" class="mallimage"></image>
		</div>
		<div class="section">
			<scroll-view scroll-y='true' class="nav">
				<div :class="{'active':type==index}" v-for="(item,index) in typeList" :key="item" @click='cg_type(index)'>{{item.name}}</div>
			</scroll-view>
			<scroll-view class="list" scroll-y='true'>
				<div @click="go_build_mallinf(item.id)" class='mall1inf' v-for="(item,index) in malllist" :key="item">
					<image :src="static+item.picture" ></image>
					<div>
						<p>{{item.name}}</p>
						<p>月销{{item.num}}笔</p>
						<p class='add'><div class='addedit'><image src="../../static/build/minus.png" v-if="item.mallnum" ></image><span v-if="item.mallnum">{{item.mallnum}}</span><image src="../../static/build/add.png" ></image></div><span>￥{{item.price}}</span></p>
					</div>
				</div>				
			</scroll-view>
		</div>
		<div class='footer'>
			<div class="edit"><span>加入购物车</span><span @click="go_build_pay">购买</span></div>
			<span class="mallnum" v-show='mallnum'>{{mallnum}}</span>
			<image src="../../static/logo.jpg" class="logo" @click="cg_pop"></image><span class="money"  v-show='mallnum'>￥{{mallprice}}</span>
		</div>
		<div class="pop" v-if='pop' @click="cg_pop" @click.stop='cleanbar'>
			<div class="popcont">
				<div class='delbar'>
					<image src="../../static/mine/del.png"></image><span>清空购物车</span>
				</div>
				<div class='barlist'>
					<div class="add1" v-for="(item,index) in malllist" :key="index" v-if='item.mallnum' @click.stop>
						<div class='addedit addedit1'><image src="../../static/build/minus.png"   @click.stop="minus(index)"></image><span>{{item.mallnum}}</span><image src="../../static/build/add.png" @click.stop="add(index)"></image></div><span class="barname">{{item.name}}</span><span class="barmoney">￥{{item.price}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				static:'',
				type:0,
				malllist:[
				],
				typeList:[],
				mallnum:0,
				mallprice:0,
				pop:false,
				storeid:'',
				classid:'',
				class_id:'',
				tenant:{},
				mallname:'',
				mallname1:''
			}
		},
		onLoad(opt) {
			this.tenant=wx.getStorageSync('tenant');
			ut.settitle(this.tenant.name||'建材城');
			const length=this.tenant.name.split('').length;
			this.mallname=this.tenant.name.substring(0,parseInt(length/2));
			this.mallname1=this.tenant.name.substring(parseInt(length/2),length)
			wx.setStorageSync('tenant','');
			this.static=ut.static;
			this.classid=opt.classid;
			this.storeid=opt.storeid;
			this.req_storeclasslist()
		},
		methods: {
			cg_pop(){
				if(!this.pop&&!this.mallnum){
					return;
				}
				this.pop=!this.pop;
			},
			cg_type(type){
				this.type=type;
				this.class_id=this.typeList[type].id;
				this.req_goodslist();
			},
			go_build_pay(){
				wx.navigateTo({
					url: '../build/pay'
				})
			},
			go_build_mallinf(id){
				wx.navigateTo({
					url: `../build/mallinf?_id=${id}`
				})
			},
			minus(index){
				this.malllist[index].mallnum-=1;
				this.mallnum-=1;
				this.mallprice=(Number(this.mallprice)-Number(this.malllist[index].price)).toFixed(2);
				if(this.mallnum==0){
					this.pop=false;
				}
			},
			add(index){
				this.malllist[index].mallnum+=1;
				this.mallnum+=1;
				this.mallprice=(Number(this.mallprice)+Number(this.malllist[index].price)).toFixed(2);
			},
			malllistmap(arr){
				return arr.map((item)=>{
					item.price=Number(item.price).toFixed(2);
					item.mallnum=0;
					return item;
				})
			},
			cleanbar(){
				this.mallnum=0;
				this.mallprice=0;
				this.malllist=this.malllistmap(this.malllist);
				this.pop=false;
			},
			req_storeclasslist(){
				ut.request({
					data: {
						storeid:this.storeid
					},
					url: "goods/storeclasslist"
				}).then(data=>{
					this.typeList=data;
					if(data[0]){
						this.class_id=data[0].id;
					}
				}).then(data=>{
					this.req_goodslist();
				})
			},
			req_goodslist(){
				ut.request({
					data: {
						storeid:this.storeid,
						classid:this.class_id
					},
					url: "goods/goodslist"
				}).then(data=>{
					data.forEach(item=>{
						item.num=0;
					})
					this.malllist=data;
				})
			}
		}
	}
</script>

<style>
	.mallinf1{position: relative;}
	.otherinf{position: absolute;width: 100%;bottom: 0;}
	.otherinf>div{display: inline-block;vertical-align: bottom;}
	.mallname{width: 150upx;height: 150upx;background: #FEC200;color: white;border-radius: 20upx;font-size: 24upx;margin-left:30upx;margin-bottom: -20upx;text-align: center;}
	.mallname p{margin-top: 30upx;}
	.mallname p:nth-child(2){
		margin-top: 12upx;
	}
	.malladress{font-size: 26upx;color: #FEC300;line-height: 40upx;margin-bottom: 20upx;margin-left: 30upx;}
	.mallimage{width: 100%;height: 300upx;}
	.share{position: absolute;right: 30upx;bottom: 10upx;}
	.share>div{
		display: inline-block;
		vertical-align: top;
		font-size: 26upx;
		line-height: 40upx;
		color: white;
		margin-left: 70upx;
	}
	.share image{width: 45upx;height: 45upx;}
	.footer{
		background: white;
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top:1px solid #C8C8C8;
		height: 100upx;
		display: flex;
		align-items: center;
	}
	.logo{
		margin-left: 30upx;
		width: 80upx;
		height: 80upx;
	}
	.edit{
		position: absolute;
		right: 30upx;
	}
	.edit span{line-height: 60upx;color: white;font-size: 24upx;text-align: center;width: 215upx;display: inline-block;}
	.edit span:first-child{
		border-bottom-left-radius: 30upx;
		border-top-left-radius: 30upx;
		background: #FEC200;
	}
	.edit span:last-child{
		border-bottom-right-radius: 30upx;
		border-top-right-radius: 30upx;
		background: #FF0015;
	}
	.section{margin-top: 28upx;display: flex;position: fixed;top:330upx;bottom: 30upx;width: 100%;}
	.section .list{
		flex: 1;
		padding: 0 30upx;
		display: flex;
	}
	.section .nav{
		width: 200upx;
		flex-direction: column;
		height: 100%;
	}
	.section .nav div{
		width: 200upx;
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		font-size: 28upx;
		border-bottom-right-radius: 30upx;
		border-top-right-radius: 30upx;
		margin-bottom: 6upx;
	}
	.section .nav .active{
		background: #fec300;
		color: white;
	}
	.list{
		display: flex;
		flex-direction: column;
	}
	.mall1inf{
		height: 150upx;
		align-items: center;
		margin-bottom: 30upx;
		flex-direction: row;
		display: flex;
	}
	.mall1inf image{
		width: 150upx;
		height: 120upx;
		border-radius: 10upx;
		margin-right: 18upx;
	}
	.mall1inf div{
		flex: 1;
		font-size: 24upx;
		line-height: 30upx;
	}
	.mall1inf div p{
		margin-bottom: 15upx;
	}
	.add{color: #FEC300;margin-bottom: 0!important;}
	.add1{margin-bottom: 0!important;line-height: 80upx;position: relative;font-size: 24upx;}
	.addedit{
		position: absolute;
		right: 0;
		line-height: 30upx;
	}
	.addedit image,.addedit span{
		display: inline-block;
		vertical-align: top;
		width: 50upx;
		text-align: center;
	}
	.addedit image{
		width: 30upx!important;
		height: 30upx!important;
		margin-right: 0;
	}
	.addedit.addedit1{
		line-height: 80upx;
	}
	.addedit.addedit1 image{
		width: 40upx!important;
		height: 40upx!important;
		margin-right: 0;
		margin-top: 20upx;
	}
	.mallnum{
		width: 45upx;
		font-size: 20upx;
		text-align: center;
		background: #FF0100;
		color: white;
		height: 45upx;
		border-radius: 50%;
		position: absolute;
		line-height: 45upx;
		margin-left: 89.5upx;
		margin-top: -25upx;
	}
	.money{
		font-size: 24upx;
		color: #FEC200;
		margin-left: 30upx;
	}
	.barname{
		width: 300upx;
		overflow: hidden;
		text-overflow :ellipsis;
		height: 80upx;
		white-space:nowrap;
		margin-right: 20upx;
	}
	.popcont{
		height: 500upx;
		position: absolute;
		bottom: 0;
		width: 100%;
		background: white;
	}
	.delbar{
		line-height: 95upx;
		font-size: 24upx;
		text-align: right;
		padding: 0 30upx;
		border-bottom: 1px solid #C8C8C8;
	}
	.delbar image,.delbar span{
		display: inline-block;
		vertical-align: top;
	}
	.delbar image{
		width: 20upx;
		height: 30upx;
		margin-right: 20upx;
		margin-top: 32.5upx;
	}
	.barlist{
		height: 400upx;
		padding: 0 30upx;
		position: relative;
	}
</style>
