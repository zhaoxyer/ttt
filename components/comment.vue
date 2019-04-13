<template>
	<div  class="comment">
			<div class="close">
				<image src="/static/close.png" @click="colose"></image>
			</div>
			<scroll-view class="list" scroll-y="true">
				<div class="listcom" v-for="list in list" :key="list">
					<div class="commentlist">
						<div class="userinf">
							<image :src="list.photo?list.photo:'../../static/logo.jpg'"></image><span>{{list.account}}</span>
						</div>
						<div class="date">
							<span>{{list.create_time}}</span><span>规格：{{list.name}}</span>
						</div>
						<div class="cont">
							{{list.commentBox}}
						</div>
						<div class="imgcont" v-if="list.pictures&&list.pictures.length">
							<image :src="static+item" v-for="(item,itemindex) in list.pictures" :key="item" v-if="item"></image>
						</div>
						<!-- <div class="cont" v-if="list.reply">
							客服回复：{{list.reply}}
						</div> -->
					</div>
					<!-- <div class="cont1 zhuiping" v-if="list.review">
						追评：{{list.review}}
					</div> -->
				</div>
			</scroll-view>
			
	</div>
</template>

<script>
import ut from '@/utils/index'
export default {
  props: ["list"],
  data() { 
		return {
			static: ut.static
		}
  },
  methods: {
		colose(){
			this.$emit('cgpop');
		}
  }
}
</script>

<style scoped="true">
	.list{
		height: 400rpx;
	}
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
