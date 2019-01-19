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
		left: 10px;
		right: 10px;
		height: 600px;
		background: white;
		box-shadow: 1px 2px 3px 4px #ccc inset;
		border-radius: 10px;
		top:300px;
		position: absolute;
	}
	.close{
		padding: 20px 30px;
		text-align: right;
	}
	.close image{
		display: inline-block;
		vertical-align: top;
		width: 40px;
		height: 40px;
		
	}
	.cont{
		line-height: 60px;
	}
	.listcom{
		border-bottom: 1px solid #e8e8e8;
	}
	.commentlist{
		font-size: 24px;
		padding: 0 30px;
	}
	.zhuiping{
		border-top: 1px solid #e8e8e8;
	}
	.commentlist .list{
		height: 520px;
	}
	.commentlist .userinf{
		display: flex;
		height: 70px;
		align-items: center;
		line-height: 50px;
	}
	.commentlist .userinf image{
		width: 60px;
		height: 60px;
		border-radius: 50%;
		margin-right: 10px;
	}
	.cont1{
		line-height: 60px;
		font-size: 24px;
		padding:0 30px;
	}
	.imgcont{
		display: flex;
	}
	.imgcont image{
		width: 200px;
		height: 150px;
		margin-top: 15px;
		margin-left:30px ;
		margin-bottom: 15px;
	}
	.imgcont image:nth-child(3n+1){
		margin-left: 0;
	}
</style>
