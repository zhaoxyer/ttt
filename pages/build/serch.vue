<template>
	<div>
		<div class="serch"><image src="../../static/index/serch.png" @click="req_goodslist"></image><input type="text" placeholder="寻找商品、店铺" v-model="name" confirm-type='search' @confirm='req_goodslist'/></div>
		<!-- <nav><span>筛选</span><span>销量</span><span>价格</span></nav> -->
		<div class="fuwu leftright">
			<div @click="go_build_mallinf(list.id,list.name)" v-for="(list,index) in list" :key='index'>
				<image :src="static +list.picture" class="noimage"></image>
				<p>{{list.name}}：<span>¥{{list.price}}</span>起</p>
			</div>
		</div>
	<!-- 	<div class="section">
			<div class="list">
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div class="inf">
						<div class="tetantinf">
							<p>盛丰五金建材器铺</p>
							<p>地址：通州区建材城二层</p>
						</div>
						<div class="mallinf leftright">
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				static:'',
				name:'',
				list:[]
			}
		},
		onLoad() {
			this.static=ut.static;
		},
		methods: {
			req_goodslist(){
				ut.request({
					data: {
						name:this.name
					},
					url: "class/goods/list"
				}).then(data=>{
					this.list=data;
					if(!this.list.length){
						ut.totast('暂无相关商品')
					}
				})
			},
			go_build_mallinf(_id,name){
				wx.navigateTo({
					url: `../build/mallinf?_id=${_id}&&title=${name}`
				})
			}
		}
	}
</script>

<style>
	.serch{margin-left: 60upx;margin-right: 60upx;margin-top: 30upx;height: 54upx;line-height: 54upx;border-radius: 10upx;display: flex;border:1px solid #c8c8c8;font-size: 24upx;align-items: center;}
	nav{
		margin-bottom: 42upx;
		margin-top: 29upx;
		font-size: 30upx;
	}
	nav span{
		margin-left: 152upx;
		display: inline-block;
		vertical-align: top;
		color: #FEC300;
	}
	nav span:first-child{
		margin-left: 81upx;
		color: #5d5c5c;
	}
	.serch image{width: 26upx;height: 24upx;margin-left: 30upx;margin-right: 30upx;}
	.serch input{
		flex: 1;
	}
	.section{display: flex;}
	.section .list{
		flex: 1;
		padding: 0 30upx;
		display: flex;
	}
	.list{
		display: flex;
		flex-direction: column;
	}
	.list>div{
		margin-bottom: 30upx;
		flex-direction: row;
		display: flex;
	}
	.list>div image{
		width: 150upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 18upx;
	}
	.list>div>div{
		flex: 1;
		font-size: 24upx;
	}
	.tetantinf{
		justify-content: center;
		height: 150upx;
		display: flex;
		flex-direction: column;
		border-bottom: 1px dashed #CCCCCC;
	}
	.tetantinf p:first-child{
		margin-bottom: 20upx;
	}
	.leftright{
		margin-top: 27upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.mallinf{
		flex-direction: row;
		font-size: 13upx;
		display: flex;
		margin-top: 34upx;
	}
	.mallinf>div{
		width: 50%;
		display: flex;
		flex-direction: row;
		margin-bottom: 34upx;
	}
	.mallinf>div image{
		width: 72upx;
		height: 65upx;
		margin-right: 0;
	}
	.mallinf>div div{
		margin-left: 10upx;
	}
	.mallinf>div div p:nth-child(2){
		margin-bottom: 10upx;
		margin-top: 10upx;
	}
	.mallinf .color{
		color: #FEC300;
	}
	
	.leftright{
		padding: 0 20upx;
		margin-top: 27upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		flex-wrap: wrap;
	}
	.fuwu div{
		width: 326upx;
		font-size: 22upx;
		text-align: center;
		line-height: 50upx;
		margin-bottom: 30upx;
	}
	.fuwu div image{
		width: 100%;
		height: 300upx;
	}
</style>
