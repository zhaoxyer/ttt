<template>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item>
				<image :src="static+serverinf.picture"/>
			</swiper-item>
		</swiper>
		<div class="servertype">
			<div class="serverinf">
				<div><image src="../../static/home/share.png"/><span>分享</span></div><div><span>质保期：</span><span>{{serverinf.qualityGuaPeriod}}天</span></div>
			</div>
			<div class="typelist">
				<div v-for="(list,index) in typelist" :key="index" :class="{'active':typeindex==index}" @click="cg_typeindex(index)">
					<div>
						<p>{{list.name}}</p>
						<p>￥{{list.price}}/个</p>
					</div>
				</div>
			</div>
		</div>
		<div class="evaluate">
			<div class="evanum">
				<div>评价（6）</div><div><span>查看全部</span><image src="../../static/right.jpg"/></div>
			</div>
			<div class="gobuild">
				<span @click='back_index_build'>建材城</span>
			</div>
			<div class="tip">以上标准价格为上门费，如需材料请点击建材城</div>
		</div>
		<div class="bggray"></div>
		<div v-if='serverinf.detail' class="detail">
			<wxParse :content="detailinf"/>
		</div>
		<div style="height: 100rpx;">
		</div>
		<div class="footer">
			<div><span>预约费</span><span>￥{{serverinf.bookPrice}}</span></div><div @click="go_home_pay">立即预约</div>
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	export default {
		data() {
			return {
				static:'',
				swipeList: ['../../static/index/banner.jpg','../../static/index/banner.jpg'],
				indicatorDots: true,
				indicatorcolor: 'white',
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true,
				typeindex:0,
				typelist:[],
				serverinf:{},
				detailinf: ''
			}
		},
		components: {
			wxParse
		},
		onLoad(opt) {
			this.static=ut.static;
			this.req_detail(opt._id);
		},
		methods: {
			back_index_build(){
				wx.reLaunch({
					url: '../index/build'
				});
			},
			cg_typeindex(index){
				this.typeindex=index;
				this.serverinf=this.typelist[index];
				this.detailinf=marked(this.serverinf.detail);
			},
			go_home_pay(){
				wx.navigateTo({
					url: '../home/pay'
				})
			},
			req_detail(id){
				ut.request({
					data: {
						classid:id
					},
					url: "service/detail"
				}).then(data=>{
					this.serverinf=data[0]
					this.typelist=data;
					this.detailinf=marked(data[0].detail)
				})
			}
		}
	}
</script>

<style>
	@import url("../../components/mpvue-wxparse/src/wxParse.css");
	.servertype{
		padding: 0 30px 10px 30px;
		border-bottom: 1px solid #E5E5E5;
	}
	.serverinf{
		line-height: 30px;
		font-size: 28px;
		padding: 30px 0;
		position: relative;
	}
	.serverinf>div:first-child{
		position: absolute;
		right: 0;
	}
	.serverinf>div:last-child span:nth-child(2){
		color: #FEC300;
	}
	.serverinf>div span,.serverinf>div image{
		display: inline-block;
		vertical-align: top;
	}
	.serverinf>div image{
		width: 25px;
		height: 30px;
	}
	.serverinf>div span:last-child{
		margin-left: 20px;
	}
	.typelist>div{
		width: 30%;
		font-size: 24px;
		background: #C9C9C9;
		color: white;
		text-align: center;
		line-height: 40px;
		display: inline-block;
		vertical-align: top;
		margin-bottom: 20px;
	}
	.typelist>div div{
		padding: 10px 0;
	}
	.typelist>div.active div{
		color: #FEC300;
		border: 1px solid #FEC300;
		background: white;
	}
	.typelist>div:nth-child(3n-1){
		margin: 0 5%;
	}
	.evaluate{
		padding: 0 30px;
	}
	.evanum{
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24px;
	}
	.evanum image{
		width: 20px;
		height: 20px;
		margin-left: 20px;
	}
	.evanum>div:first-child{
		font-size: 28px;
	}
	.gobuild{
		text-align: center;
		font-size: 24px;
	}
	.gobuild span{
		width: 200px;
		line-height: 50px;
		display: inline-block;
		background: #FEC200;
		color: white;
		border-radius: 25px;
	}
	.evaluate .tip{
		color: #b4b4b4;
		line-height: 80px;
		text-align: center;
		font-size: 24px;
	}
	.bggray {
		background: #e5e5e5;
		height: 40px;
	}
	.liucheng{
		width: 100%;
	}
	.footer{
		position: fixed;
		display: flex;
		width: 100%;
		height: 100px;
		bottom: 0;
		line-height: 100px;
		background: white;
		border-top:1px solid #dadada;
		font-size: 24px;
	}
	.footer>div:first-child{
		flex: 1;
		text-align: right;
	}
	.footer>div:first-child span{
		display: inline-block;
		vertical-align: top;
	}
	.footer>div:first-child span:last-child{
		padding: 0 30px 0 20px;
		color: #FEC200;
	}
	.footer>div:last-child{
		width: 250px;
		color: white;
		background: #FEC200;
		text-align: center;
	}
	.detail{
		padding: 0 30px;
	}
</style>
