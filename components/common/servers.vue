<template>
	<div class="fuwu leftright">
		<div  @click="go_home_serverinf(list.classId,list.name)" v-for="(list,index) in list" :key='index' >
			<image :src="static +list.picture" class="noimage"></image>
			<p>{{list.name}}：<span class="color">{{list.price}}</span>元起/每次</p>
		</div>
	</div>
</template>

<script>
	import ut from '@/utils/index'
	export default {
		props: ['list'],
		data() {
			return {
				static: ut.static
			}
		},
		methods: {
			go_home_serverinf(_id,name){
				ut.goto(`../home/serverinf?_id=${_id}&title=${name}`)
			}
		}
	}
</script>

<style scoped="true">
	.leftright{
		padding: 0 29.58upx 0 30.79upx;
		margin-top: 27upx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.fuwu p{
		font-size: 24upx;
		padding: 19.92upx 0;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.fuwu div{
		width: 325.48upx;
		text-align: center;
	}
	.fuwu div image{
		width: 100%;
		height: 325.48upx;
		display: block;
	}
	.color{
		color: #FEC300;
	}
</style>
