<template>
	<div>
		<div class="mallinf1">
			<div class="otherinf">
				<div class="share">
					<div>
						<image src="../../static/home/share.png"></image>
						<div>分享</div>
					</div>
					<div>
						<image src="../../static/home/share.png"></image>
						<div>收藏</div>
					</div>
					
				</div>
				<div class="mallname">
					<p>盛丰</p>
					<p>五金</p>
				</div>
				<div class="malladress">
					<view>盛丰五金建材</view>
					<view>通州区运河西大道</view>
				</div>
			</div>
			<image src="../../static/build/mall.jpg" class="mallimage"></image>
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
						<p class='add'><div class='addedit'><image src="../../static/build/minus.png" v-if="item.mallnum"  @click.stop="minus(index)"></image><span v-if="item.mallnum">{{item.mallnum}}</span><image src="../../static/build/add.png" @click.stop="add(index)"></image></div><span>￥{{item.price}}</span></p>
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
				class_id:''
			}
		},
		onLoad(opt) {
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
						classid:this.classid,
						class_id:this.class_id
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
	.mallname{width: 150px;height: 150px;background: #FEC200;color: white;border-radius: 20px;font-size: 33px;margin-left:30px;margin-bottom: -20px;text-align: center;}
	.mallname p{margin-top: 30px;}
	.mallname p:nth-child(2){
		margin-top: 12px;
	}
	.malladress{font-size: 26px;color: #FEC300;line-height: 40px;margin-bottom: 20px;margin-left: 30px;}
	.mallimage{width: 100%;height: 300rpx;}
	.share{position: absolute;right: 30px;bottom: 10px;}
	.share>div{
		display: inline-block;
		vertical-align: top;
		font-size: 26px;
		line-height: 40px;
		color: white;
		margin-left: 70px;
	}
	.share image{width: 45px;height: 45px;}
	.footer{
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top:1px solid #C8C8C8;
		height: 100px;
		display: flex;
		align-items: center;
	}
	.logo{
		margin-left: 30px;
		width: 80px;
		height: 80px;
	}
	.edit{
		position: absolute;
		right: 30rpx;
	}
	.edit span{line-height: 60rpx;color: white;font-size: 24px;text-align: center;width: 215px;display: inline-block;}
	.edit span:first-child{
		border-bottom-left-radius: 30rpx;
		border-top-left-radius: 30rpx;
		background: #FEC200;
	}
	.edit span:last-child{
		border-bottom-right-radius: 30rpx;
		border-top-right-radius: 30rpx;
		background: #FF0015;
	}
	.section{margin-top: 28px;display: flex;position: fixed;top:330rpx;bottom: 100rpx;width: 100%;}
	.section .list{
		flex: 1;
		padding: 0 30px;
		display: flex;
	}
	.section .nav{
		width: 200px;
		flex-direction: column;
	}
	.section .nav div{
		width: 200px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 28px;
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		margin-bottom: 6px;
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
		height: 150px;
		align-items: center;
		margin-bottom: 30px;
		flex-direction: row;
		display: flex;
	}
	.mall1inf image{
		width: 150px;
		height: 120px;
		border-radius: 10px;
		margin-right: 18px;
	}
	.mall1inf div{
		flex: 1;
		font-size: 24px;
		line-height: 30px;
	}
	.mall1inf div p{
		margin-bottom: 15px;
	}
	.add{color: #FEC300;margin-bottom: 0!important;}
	.add1{margin-bottom: 0!important;line-height: 80px;position: relative;font-size: 24px;}
	.addedit{
		position: absolute;
		right: 0;
		line-height: 30px;
	}
	.addedit image,.addedit span{
		display: inline-block;
		vertical-align: top;
		width: 50px;
		text-align: center;
	}
	.addedit image{
		width: 30px!important;
		height: 30px!important;
		margin-right: 0;
	}
	.addedit.addedit1{
		line-height: 80px;
	}
	.addedit.addedit1 image{
		width: 40px!important;
		height: 40px!important;
		margin-right: 0;
		margin-top: 20px;
	}
	.mallnum{
		width: 45px;
		font-size: 20px;
		text-align: center;
		background: #FF0100;
		color: white;
		height: 45px;
		border-radius: 50%;
		position: absolute;
		line-height: 45px;
		margin-left: 89.5px;
		margin-top: -25px;
	}
	.money{
		font-size: 24px;
		color: #FEC200;
		margin-left: 30px;
	}
	.barname{
		width: 300px;
		overflow: hidden;
		text-overflow :ellipsis;
		height: 80px;
		white-space:nowrap;
		margin-right: 20px;
	}
	.popcont{
		height: 500px;
		position: absolute;
		bottom: 0;
		width: 100%;
		background: white;
	}
	.delbar{
		line-height: 95px;
		font-size: 24px;
		text-align: right;
		padding: 0 30px;
		border-bottom: 1px solid #C8C8C8;
	}
	.delbar image,.delbar span{
		display: inline-block;
		vertical-align: top;
	}
	.delbar image{
		width: 20px;
		height: 30px;
		margin-right: 20px;
		margin-top: 32.5px;
	}
	.barlist{
		height: 400px;
		padding: 0 30px;
		position: relative;
	}
</style>
