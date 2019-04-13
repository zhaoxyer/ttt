<template>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item>
				<image :src="static+serverinf.picture"/>
			</swiper-item>
		</swiper>
		<div class="servertype">
			<div class="serverinf">
				<div><button type="primary" bindtap="onShareAppMessage" open-type="share" class="shareFriend"></button><image src="../../static/home/share.png"/><span>分享</span></div><div><span>{{serverinf.qualityGuaPeriod}}天无理由退货</span></div>
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
				<div>评价（{{comlist.length}}）</div><div><span @click="cg_pop">查看全部</span><image src="../../static/right.jpg" @click="cg_pop"/></div>
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
		<div style="height: 110rpx;">
		</div>
		<div class="footer">
			<div><span>预约费</span><span>￥{{serverinf.bookPrice}}</span></div><div @click="go_home_pay">立即预约</div>
		</div>
		<div class="pop" v-show="pop">
			<comment @cgpop='cgpop' :list='comlist'></comment>
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	import comment from '../../components/comment.vue'
	export default {
		data() {
			return {
				static:'',
				typeindex:0,
				typelist:[],
				serverinf:{},
				detailinf: '',
				comlist:[],
				pop:false
			}
		},
		components: {
			wxParse,
			comment
		},
		onLoad(opt) {
			this.static=ut.static;
			this.req_detail(opt._id);
			this.req_comment(opt._id)
			ut.settitle(opt.title||'服务详情');
		},
		methods: {
			cgpop(){
				this.cg_pop();
			},
			cg_pop(){
				if(!this.comlist.length){
					ut.totast('暂无评价');
					return
				}
				this.pop=!this.pop;
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
			back_index_build(){
				wx.navigateTo({
					url: `../build/build2?source=1`
				})
			},
			cg_typeindex(index){
				this.typeindex=index;
				this.serverinf=this.typelist[index];
				const reg=new RegExp('/attach/download\\?filePath=','g');
				this.detailinf=marked(this.serverinf.detail.replace(reg,ut.static));
			},
			go_home_pay(){
				wx.setStorageSync('serverinf',this.serverinf)
				if(wx.getStorageSync('token')){
					wx.navigateTo({
						url: '../home/pay'
					})
				}else{
					wx.navigateTo({
						url: '../mine/login'
					})
				}
			},
			req_detail(id){
				ut.request({
					data: {
						classid:id
					},
					url: "service/detail"
				}).then(data=>{
					if(data[0]){
						this.serverinf=data[0]
						this.typelist=data;
						const reg=new RegExp('/attach/download\\?filePath=','g');
						this.detailinf=marked(data[0].detail.replace(reg,ut.static))
						console.log(this.detailinf)
					}else{
						ut.totast('服务信息不存在');
					}
				})
			},
			req_comment(id){
				ut.request({
					data: {
						proId:id,
						type:2
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

<style>
	@import url("../../components/mpvue-wxparse/src/wxParse.css");
	.servertype{
		padding: 0 30px 10px 30upx;
		border-bottom: 1px solid #E5E5E5;
	}
	.serverinf{
		line-height: 30upx;
		font-size: 28upx;
		padding: 30px 0;
		position: relative;
	}
	.serverinf>div:first-child{
		position: absolute;
		right: 0;
	}
	.serverinf>div:last-child span:nth-child(1){
		color: #FEC300;
	}
	.serverinf>div span,.serverinf>div image{
		display: inline-block;
		vertical-align: top;
	}
	.serverinf>div image{
		width: 25upx;
		height: 30upx;
	}
/* 	.serverinf>div span:last-child{
		margin-left: 20upx;
	} */
	.typelist>div{
		width: 30%;
		font-size: 24upx;
		background: #C9C9C9;
		color: white;
		text-align: center;
		line-height: 40upx;
		display: inline-block;
		vertical-align: top;
		margin-bottom: 20upx;
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
		padding: 0 30upx;
	}
	.evanum{
		height: 80upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24upx;
	}
	.evanum image{
		width: 20upx;
		height: 20upx;
		margin-left: 20upx;
	}
	.evanum>div:first-child{
		font-size: 28upx;
	}
	.gobuild{
		text-align: center;
		font-size: 24upx;
	}
	.gobuild span{
		width: 200upx;
		line-height: 50upx;
		display: inline-block;
		background: #FEC200;
		color: white;
		border-radius: 25upx;
	}
	.evaluate .tip{
		color: #b4b4b4;
		line-height: 80upx;
		text-align: center;
		font-size: 24upx;
	}
	.bggray {
		background: #e5e5e5;
		height: 40upx;
	}
	.liucheng{
		width: 100%;
	}
	.footer{
		position: fixed;
		display: flex;
		width: 100%;
		height: 100upx;
		bottom: 0;
		line-height: 100upx;
		background: white;
		border-top:1px solid #dadada;
		font-size: 24upx;
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
		padding: 0 30px 0 20upx;
		color: #FEC200;
	}
	.footer>div:last-child{
		width: 250upx;
		color: white;
		background: #FEC200;
		text-align: center;
	}
	.detail{
		padding: 0 30upx;
	}
</style>
