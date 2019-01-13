<template>
	<view>
		<div class="columlist" v-for="list in list" :key='list'>
			<span>{{list.title}}</span><div><image src="../../static/right.jpg"></image></div>
		</div>		
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				list:[]
			}
		},
		onShow() {
			this.req_problem();
		},
		methods: {
			req_problem(){
				ut.request({
					url: "common/problem"
				}).then(data=>{
					this.list=data;
				})
			}
		}
	}
</script>

<style>
	.columlist{
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		align-items: center;
		height: 90px;
		padding: 0 30px;
		border-bottom: 1px solid #CCCCCC;
	}
	.columlist1,.columlist>div{
		height: 180px!important;
	}
	.columlist image{
		width: 20px;
		height: 35px;
	}
	.header{
		width: 120px!important;
		height: 120px!important;
	}
	.bggray{
		background: #e5e5e5;
		height: 30px;
	}
	.outinf{
		background: #FEC200;
		line-height: 100px;
		text-align: center;
		margin-top: 200px;
		font-size: 24px;
		color: white;
		margin-left: 30px;
		margin-right: 30px;
	}
	.columlist>div{
		display: flex;
		justify-content: space-between;
		font-size: 24px;
		align-items: center;
		height: 90px;
	}
	.columlist1>div>image:first-child{
		margin-right: 30px;
	}
	.columlist>div>span{
		margin-right: 30px;
	}
</style>