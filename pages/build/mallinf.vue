<template>
	<div>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="item in swipeList" :key="item" v-if="item">
				<image :src="static+item"/>
			</swiper-item>
		</swiper>
		<div class="mallinf2">
			<div class="mallinf2price"><span>￥{{mallinf.price}}</span><image src="../../static/close.png" v-if="iii"></image></div>
			<div>{{clientGoods.name}}</div>
			<div class="mallinf2s"><span>月销：{{mallinf.sellStock}}笔</span><span @click='cg_pop1'>评价﹀</span><span>质保期:{{clientGoods.qualityGuaPeriod}}天</span></div>
		</div>
		<div class="bggray"></div>
		<div class="guige">
			<h1>规格</h1>
			<div class="guigetype">
				<span :class="{'active':type==index}" v-for="(item,index) in guigetype" :key="index" @click='cg_type(index)'>{{item.name}}</span>
			</div>
			<div class="add">
				<div class='addedit'><image src="../../static/build/minus.png"   @click.stop="minus(type)"></image><span>{{mallinf.num}}</span><image src="../../static/build/add.png" @click.stop="add(type)"></image></div><span>数量</span>
			</div>
		</div>
		<div class="bggray"></div>
		<div v-if='detailinf' class="detail">
			<wxParse :content="detailinf"/>
		</div>
		<div style="height: 110rpx;">
		</div>
		<div class='footer'>
			<div class="edit"><span @click='req_cartadd'>加入购物车</span><span @click="go_build_pay">购买</span></div>
			<span class="num" v-show='num'>{{num}}</span>
			<image src="../../static/logo.jpg" class="logo" @click="cg_pop"></image><span class="money"  v-show='num'>￥{{mallprice}}</span>
		</div>
		<div class="pop" v-if='pop' @click="cg_pop">
			<div class="popcont">
				<div class='delbar'>
					<image src="../../static/mine/del.png" @click.stop='cleanbar'></image><span @click.stop='cleanbar'>清空购物车</span>
				</div>
				<div class='barlist'>
					<div class="add" v-for="(item,index) in guigetype" :key="index" v-if='item.num'>
						<div class='addedit'><image src="../../static/build/minus.png"   @click.stop="minus(index)"></image><span>{{item.num}}</span><image src="../../static/build/add.png" @click.stop="add(index)"></image></div><span class="barname">{{item.name}}</span><span class="barmoney">￥{{item.price}}</span>
					</div>
				</div>
			</div>
		</div>
		<div class="pop" v-show="pop1">
			<comment @cgpop='cgpop' :list='comlist'></comment>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	import comment from '../../components/comment'
	export default {
		data() {
			return {
				static:'',
				type:0,
				malllist:[
				],
				guigetype:[],
				num: 0,
				mallinf: {},
				mallprice:0,
				barlist:[],
				pop:false,
				clientGoods:{},
				detailinf:'',
				comlist:[],
				pop1:false,
				swipeList:[]
			}
		},
		components: {
			wxParse,
			comment
		},
		onLoad(opt) {
			this.static=ut.static;
			ut.settitle(opt.title||'商品详情')
			this.req_detail(opt._id)
			this.req_comment(opt._id)
		},
		methods: {
			cgpop(){
				this.cg_pop1();
			},
			cg_pop1(){
				if(!this.comlist.length){
					ut.totast('暂无评价');
					return;
				}
				this.pop1=!this.pop1;
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
			cg_type(type){
				this.type=type;
				this.mallinf =this.guigetype[type]
				if(this.mallinf.picture){
					this.swipeList=this.mallinf.picture.split(',')
				}else{
					this.swipeList=[this.clientGoods.picture]
				}
			},
			cg_pop(){
				if(!this.pop&&!this.num){
					return;
				}
				this.pop=!this.pop;
			},
			go_build_pay(){
				if(!wx.getStorageSync('token')){
					wx.navigateTo({
						url: '../mine/login'
					})
					return
				}
				let barlist=[...this.guigetype];
				barlist=barlist.filter(item=>{
					console.log(item.num)
					return item.num>0
				})
				console.log(JSON.stringify(barlist))
				if(barlist.length){
					barlist=barlist;
				}else{
					const mallinf=Object.assign({},this.mallinf)
					barlist.push(mallinf);
					barlist[0].num=1;
				}
				wx.setStorageSync('buildinf',barlist)
				wx.navigateTo({
					url: `../build/pay?name=${this.clientGoods.name}`
				})
			},
			minus(index){
				console.log(index)
				if(this.num==0)return;
				if(this.guigetype[index].num==0)return;
				this.num-=1;
				this.guigetype[index].num-=1;
				this.mallprice=(Number(this.mallprice)-Number(this.guigetype[index].price)).toFixed(2);
				if(this.num==0){
					this.pop=false;
				}				
			},
			add(index){
				console.log(index)
				this.guigetype[index].num+=1;
				this.num+=1;
				this.mallprice=(Number(this.mallprice)+Number(this.guigetype[index].price)).toFixed(2);
			},
			cleanbar(){
				this.num=0;
				this.mallinf.num=0;
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
					if(!data.clientGoods){
						ut.totast('商品信息不全')
						return
					}
					this.clientGoods=data.clientGoods||{};
					const reg=new RegExp('/attach/download\\?filePath=','g');
					this.detailinf=marked(this.clientGoods.detail.replace(reg,ut.static));
					if(data.clientGoodsSpecList[0]){
						data.clientGoodsSpecList.forEach(item =>{
							item.num=0;
						})
						this.mallinf =data.clientGoodsSpecList[0]
						if(this.mallinf.picture){
							this.swipeList=this.mallinf.picture.split(',')
						}else{
							this.swipeList=[this.clientGoods.picture]
						}
						
					}
					this.guigetype=data.clientGoodsSpecList;
				})
			},
			filterdate(barlist){
				let parm=[];
				for(let i=0;i<barlist.length;i++){
					parm[i]={
						goodsId:barlist[i].goodsId,
						num:barlist[i].num,
						specId:barlist[i].id
					}
				}
				return parm;
			},
			req_cartadd(){
				if(!wx.getStorageSync('token')){
					wx.navigateTo({
						url: '../mine/login'
					})
					return
				}
				let barlist=[...this.guigetype];
				barlist=barlist.filter(item=>{
					console.log(item.num)
					return item.num>0
				})
				if(!barlist.length){
					ut.totast('请先选择商品');
					return;
				}
				const parm=this.filterdate(barlist);
				ut.request({
					data:parm,
					url: "cart/add",
					c:true
				}).then(data=>{
					this.cleanbar();
					ut.totast('加入购物车成功');
				})
			},
			req_comment(id){
				ut.request({
					data: {
						proId:id,
						type:1
					},
					method:"GET",
					url: "comment/list"
				}).then(data=>{
					data.forEach(item=>{
						item.pictures =item.pictures.split(',')
					})
					this.comlist=data
				})
			}
		}
	}
</script>

<style scoped>
	.mallimage{width: 100%;height: 300rupx;}
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
	.mall1inf{
		height: 150upx;
		align-items: center;
		margin-bottom: 30upx;
		flex-direction: row;
		display: flex;
	}
	.num{
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
	.mallinf2{
		padding: 20px 30upx;
		line-height: 50upx;
		font-size: 24upx;
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
		width: 40upx;
		height: 40upx;
		position: absolute;
		right: 0;
		margin-top: 5upx;
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
		padding: 0 30upx;
	}
	.guige h1{
		line-height: 90upx;
		font-size: 28upx;
	}
	.guigetype span{
		min-width: 150upx;
		height: 60upx;
		line-height: 60upx;
		border-radius: 10upx;
		background: #EEEEEE;
		margin-left: 30upx;
		font-size: 24upx;
		display: inline-block;
		vertical-align: top;
		margin-bottom: 20upx;
		text-align: center;
	}
	.guigetype span.active{
		background: #FEC200;
		color:white;
	}
	.guigetype span:nth-child(4n+1){
		margin-left: 0;
	}
	.add{margin-bottom: 0!important;line-height: 80upx;position: relative;font-size: 24upx;}
	.add1{color: #FEC300;margin-bottom: 0!important;}
	.addedit{
		position: absolute;
		right: 0;
	}
	.addedit image,.addedit span{
		display: inline-block;
		vertical-align: top;
		width: 100upx;
		text-align: center;
	}
	.addedit image{
		width: 40upx!important;
		height: 40upx!important;
		margin-right: 0;
		margin-top: 20upx;
	}
	.add>span{
		display: inline-block;
		vertical-align: top;
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
	.detail{
		padding: 0 30upx;
		margin-bottom: 100upx;
	}
</style>
