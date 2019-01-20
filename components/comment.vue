<template>
	<div  class="comment">
			<div class="close">
				<image src="/static/close.png" @click="colose"></image>
			</div>
			<scroll-view class="list" scroll-y="true">
				<div class="listcom" v-for="list in list" :key="list">
					<div class="commentlist">
						<div class="userinf">
							<image src="/static/logo.jpg"></image><span>炸啊实打实</span>
						</div>
						<div class="date">
							<span>2018-10-22</span><span>规格：啊实打实大所</span>
						</div>
						<div class="cont">
							一大早礼物就收到了
						</div>
						<div class="imgcont">
							<image src="/static/build/cailiao.png"></image><image src="/static/build/cailiao.png"></image><image src="/static/build/cailiao.png"></image>
						</div>
						<div class="cont">
							客服回复：卡萨丁卡卡是贷款卡刷卡单卡
						</div>
					</div>
					<div class="cont1 zhuiping">
						追评：卡萨丁卡卡是贷款卡刷卡单卡
					</div>
				</div>
			</scroll-view>
			
	</div>
</template>

<script>
export default {
  props: ["list"],
  data() { 
		return {}
  },
  methods: {
		colose(){
			this.$emit('cgpop');
		}
  }
}
</script>

<style scoped="true">
	.comment{
		left: 10upx;
		right: 10upx;
		height: 600upx;
		background: white;
		box-shadow: 1px 2px 3px 4px #ccc inset;
		border-radius: 10upx;
		top:300upx;
		position: absolute;
	}
	.close{
		padding: 20px 30upx;
		text-align: right;
	}
	.close image{
		display: inline-block;
		vertical-align: top;
		width: 40upx;
		height: 40upx;
		
	}
	.cont{
		line-height: 60upx;
	}
	.listcom{
		border-bottom: 1px solid #e8e8e8;
	}
	.commentlist{
		font-size: 24upx;
		padding: 0 30upx;
	}
	.zhuiping{
		border-top: 1px solid #e8e8e8;
	}
	.commentlist .list{
		height: 520upx;
	}
	.commentlist .userinf{
		display: flex;
		height: 70upx;
		align-items: center;
		line-height: 50upx;
	}
	.commentlist .userinf image{
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		margin-right: 10upx;
	}
	.cont1{
		line-height: 60upx;
		font-size: 24upx;
		padding:0 30upx;
	}
	.imgcont{
		display: flex;
	}
	.imgcont image{
		width: 200upx;
		height: 150upx;
		margin-top: 15upx;
		margin-left:30px ;
		margin-bottom: 15upx;
	}
	.imgcont image:nth-child(3n+1){
		margin-left: 0;
	}
</style>
