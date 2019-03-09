<template>
	<div class='server'>
		<div v-for="(list,index) in list" :key='index' @click="goServer(list)">
			<image   :src="static+list.picture"   mode="widthFix" class="noimage"></image>
			<view>{{list.name}}</view>
		</div>
	</div>
</template>

<script>
	import ut from '@/utils/index'
	export default {
		props: ['list','type'],
		data() {
			return {
				static: ut.static
			}
		},
		methods: {
			goServer(item){
				if(this.type==1){
					ut.goto(`../home/server?_id=${item.id}&title=${item.name}`)
				}else{
					ut.goto(`../build/build2?_id=${item.id}&name=${item.name}`)
				}
			}
		}
	}
</script>

<style scoped="true">
	.server{
		padding: 0 26.5upx;
		margin-top: 32.5upx;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 78upx;
		font-size: 24upx;
		text-align: center;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 18upx;
	}
	.server div view{
		margin-top: 15.5rpx;
	}
	.server image{
		width: 115upx;
		height: 115upx;
		border-radius: 50%;
	}
</style>
