<template>
	<div>
		<div class='server'>
			<div v-for="(list,index) in classlist" :key='index' :class="(active==index)?'active':''" @click='cg_active(list,index)'>
				{{list.name}}
			</div>			
		</div>
		<div class='bggray'></div>
	</div>	
</template>

<script>
	import ut from '@/utils/index'
	export default {
		props: [],
		data() {
			return {
				classlist: [],
				active: 0
			}
		},
		methods: {
			req_class(){
				ut.request({
					data: {
						parentid:0
					},
					url: "goods/class"
				}).then(data=>{
					console.log(data)
					this.classlist=data;
					if(data&&data[0])this.cg_active(data[0],0)
				})
			},
			cg_active(list,index){
				this.active = index;
				ut.settitle(list.name);
				this.$emit('req_class',list.id)
			}
		},
		onLoad() {
			this.req_class()
		}
	}
</script>

<style scoped="true">
	.server{
		padding:0 0 26rpx 0;
		display: flex;
		flex-wrap: wrap;
	}
	.server div{
		margin-top: 26rpx;
		background: #C9C9C9;
		color: white;
		width: 155rpx;
		margin-left: 26rpx;
		font-size: 24rpx;
		line-height: 50rpx;
		text-align: center;
		border-radius: 8rpx;
	}
	.server div.active{
		background: #FEC300;
	}
</style>
