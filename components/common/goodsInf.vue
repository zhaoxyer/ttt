<template>
	<scroll-view class="inf" scroll-y='true'>
		<image src="../../static/close.png" class="close" @click="close"></image>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="item in goodsInf.swipeList" :key="item" v-if="item">
				<image :src="static+item"/>
			</swiper-item>
		</swiper>
		<div class="mallinf2">
			<div class="mallinf2price"><span>￥{{goodsInf.mallinf.price}}</span><image src="../../static/close.png" v-if="iii"></image></div>
			<div>{{goodsInf.clientGoods.name}}</div>
			<div class="mallinf2s"><span>月销：{{goodsInf.mallinf.sellStock}}笔</span><span @click='cg_pop1'>评价﹀</span><span>质保期:{{goodsInf.clientGoods.qualityGuaPeriod}}天</span></div>
		</div>
		<div class="bggray"></div>
		<div class="guige">
			<h1>规格</h1>
			<div class="guigetype">
				<span :class="{'active':type==index}" v-for="(item,index) in goodsInf.guigetype" :key="index" @click='cg_type(index)'>{{item.name}}</span>
			</div>
			<div class="add">
				<div class='addedit'><image src="../../static/build/minus.png"   @click.stop="minus(type)"></image><span>{{goodsInf.guigetype[type].num}}</span><image src="../../static/build/add.png" @click.stop="add(type)"></image></div><span>数量</span>
			</div>
		</div>
		<div class="bggray"></div>
		<div v-if='goodsInf.detailinf' class="detail">
			<wxParse :content="goodsInf.detailinf"/>
		</div>
		<div class="pop" v-show="pop1">
			<comment @cgpop='cgpop' :list='comlist'></comment>
		</div>
		
	</scroll-view>
</template>

<script scoped>
	import ut from '@/utils/index'
	import GoodsInf from '../../components/common/goodsInf.vue'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	import comment from '../../components/comment'
	import {mapState} from 'vuex';
	export default {
		props: ['goodsInf','comlist'],
		data() {
			return {
				static: ut.static,
				type:0,
				pop1:0
			}
		},
		components:{
			wxParse,
			comment
		},
		computed: {
			...mapState(['goods'])
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
			close(){
				this.$emit('onClose')
			},
			cg_type(type){
				this.type = type
			},
			minus(index){
				this.$store.commit('minusOtherGoods',this.goodsInf.guigetype[index].price);
				if(this.goodsInf.guigetype[index].num==0)return
				this.goodsInf.guigetype[index].num-=1;
				this.setGoods();				
			},
			add(index){
				this.goodsInf.guigetype[index].num+=1;
				this.$store.commit('addOtherGoods',this.goodsInf.guigetype[index].price);
				this.setGoods();
			},
			setGoods(){
				const goods = this.goods;
				goods[this.goodsInf.index]=this.goodsInf
				this.$store.commit('setGoods',goods)
				this.$store.commit('setGoodsPay')
			}
		}
	}
</script>

<style scoped="true">
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
		line-height:70rpx;
	}
	.addedit image,.addedit span{
		display: inline-block;
		vertical-align: top;
		width: 100upx;
		text-align: center;
	}
	.addedit span{
		
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
	.inf{
		background: white;
		position: absolute;
		z-index: 999;
		width: 100%;
		top:200rpx;
		bottom: 0;
		display: relative;
	}
	.close{
		position: absolute;
		top:30rpx;
		right: 30rpx;
		width: 50rpx;
		height: 50rpx;
		z-index: 999;
	}
</style>
