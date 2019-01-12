<template>
	<div>
		<div class="mallinf1">
			<image :src="static+mallinf.picture" class="mallimage"></image>
		</div>
		<div class="mallinf2">
			<div class="mallinf2price"><span>￥{{mallinf.price}}</span><image src="../../static/close.png"></image></div>
			<div>{{clientGoods.name}}</div>
			<div class="mallinf2s"><span>月销：{{mallinf.sellStock}}笔</span><span>评价﹀</span><span>北京通州</span></div>
		</div>
		<div class="bggray"></div>
		<div class="guige">
			<h1>规格</h1>
			<div class="guigetype">
				<span :class="{'active':type==index}" v-for="(item,index) in guigetype" :key="index" @click='cg_type(index)'>{{item.name}}</span>
			</div>
			<div class="add">
				<div class='addedit'><image src="../../static/build/minus.png"   @click.stop="minus(index)"></image><span>{{mallinf.mallnum}}</span><image src="../../static/build/add.png" @click.stop="add(index)"></image></div><span>数量</span>
			</div>
		</div>
		<div class="bggray"></div>
		<div class='footer'>
			<div class="edit"><span>加入购物车</span><span @click="go_build_pay">购买</span></div>
			<span class="mallnum" v-show='mallnum'>{{mallnum}}</span>
			<image src="../../static/logo.jpg" class="logo" @click="cg_pop"></image><span class="money"  v-show='mallnum'>￥{{mallprice}}</span>
		</div>
		<div class="pop" v-if='pop' @click="cg_pop">
			<div class="popcont">
				<div class='delbar'>
					<image src="../../static/mine/del.png" @click.stop='cleanbar'></image><span @click.stop='cleanbar'>清空购物车</span>
				</div>
				<div class='barlist'>
					<div class="add" v-for="(item,index) in barlist" :key="index">
						<div class='addedit'><image src="../../static/build/minus.png"   @click.stop="minus(index)"></image><span>{{item.mallnum}}</span><image src="../../static/build/add.png" @click.stop="add(index)"></image></div><span class="barname">{{item.name}}</span><span class="barmoney">￥{{item.price}}</span>
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
				guigetype:[],
				mallnum: 0,
				mallinf: {},
				mallprice:0,
				barlist:[],
				pop:false,
				clientGoods:{}
			}
		},
		onLoad(opt) {
			this.static=ut.static;
			this.req_detail(opt._id)
		},
		methods: {
			cg_type(type){
				this.type=type;
				this.mallinf =data.clientGoodsSpecList[type]
			},
			cg_pop(){
				if(!this.pop&&!this.mallnum){
					return;
				}
				this.pop=!this.pop;
			},
			go_build_pay(){
				wx.navigateTo({
					url: '../build/pay'
				})
			},
			minus(index){
				if(this.mallnum==0)return;
				this.mallnum-=1;
				this.mallinf.mallnum-=1;
				this.mallprice=(Number(this.mallprice)-Number(this.mallinf.price)).toFixed(2);
				this.barlist[index||0]=this.mallinf;
				if(this.mallinf.mallnum==0){
					this.barlist.splice(index||0,1);
					this.pop=false;
				}
			},
			add(index){
				this.mallnum+=1;
				this.mallinf.mallnum+=1;
				this.mallprice=(Number(this.mallprice)+Number(this.mallinf.price)).toFixed(2);
				this.barlist[index||0]=this.mallinf;
			},
			cleanbar(){
				this.mallnum=0;
				this.mallinf.mallnum=0;
				this.mallprice=0;
				this.barlist[0]=[];
				this.pop=false;
			},
			req_detail(id){
				ut.request({
					data: {
						goodsid:id
					},
					url: "goods/goodsdetail"
				}).then(data=>{
					this.clientGoods=data.clientGoods;
					if(data.clientGoodsSpecList[0]){
						data.clientGoodsSpecList.forEach(item =>{
							item.mallnum=0;
						})
						this.mallinf =data.clientGoodsSpecList[0]
					}
					this.guigetype=data.clientGoodsSpecList;
				})
			}
		}
	}
</script>

<style scoped>
	.mallimage{width: 100%;height: 300rpx;}
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
	.mall1inf{
		height: 150px;
		align-items: center;
		margin-bottom: 30px;
		flex-direction: row;
		display: flex;
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
	.mallinf2{
		padding: 20px 30px;
		line-height: 50px;
		font-size: 24px;
	}
	.mallinf2>div{
		position: relative;
	}
	.mallinf2price span,.mallinf2price image{
		display: inline-block;
		vertical-align: top;
		color: #FEC200;
	}
	.mallinf2price image{
		width: 40px;
		height: 40px;
		position: absolute;
		right: 0;
		margin-top: 5px;
	}
	.mallinf2s span{
		display: inline-block;
		vertical-align: top;
		width: 33.333%;
		width:calc(100%/3);
	}
	.mallinf2s span:nth-child(2){
		text-align: center;
	}
	.mallinf2s span:nth-child(3){
		text-align: right;
	}
	.guige{
		padding: 0 30px;
	}
	.guige h1{
		line-height: 90px;
		font-size: 28px;
	}
	.guigetype span{
		min-width: 150px;
		height: 60px;
		line-height: 60px;
		border-radius: 10px;
		background: #EEEEEE;
		margin-left: 30px;
		font-size: 24px;
		display: inline-block;
		vertical-align: top;
		margin-bottom: 20px;
		text-align: center;
	}
	.guigetype span.active{
		background: #FEC200;
		color:white;
	}
	.guigetype span:nth-child(4n+1){
		margin-left: 0;
	}
	.add{margin-bottom: 0!important;line-height: 80px;position: relative;font-size: 24px;}
	.add1{color: #FEC300;margin-bottom: 0!important;}
	.addedit{
		position: absolute;
		right: 0;
	}
	.addedit image,.addedit span{
		display: inline-block;
		vertical-align: top;
		width: 100px;
		text-align: center;
	}
	.addedit image{
		width: 40px!important;
		height: 40px!important;
		margin-right: 0;
		margin-top: 20px;
	}
	.add>span{
		display: inline-block;
		vertical-align: top;
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
