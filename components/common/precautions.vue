<template>
	<div class="cont-tip">
		<wxParse :content="precautions"/>
	</div>
</template>

<script>
	import ut from '@/utils/index'
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	export default {
		props: ['type'],
		data() {
			return {
				static: ut.static,
				precautions:''
			}
		},
		components:{
			wxParse
		},
		methods: {
			req_precautions(){
				ut.request({
					data: {
						type:this.type
					},
					url: "precautions/list"
				}).then(data=>{
					const msg = data?data[0].content: ''
					const reg=new RegExp('/attach/download\\?filePath=','g');
					this.precautions=marked(msg.replace(reg,ut.static));
				})
			}
		},
		onLoad() {
			this.req_precautions()
		}
	}
</script>

<style scoped="true">
	.cont-tip{
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
		padding:0 30rpx;
		line-height:40rpx;
		margin-top:10rpx;
		font-size:24rpx;
		margin-bottom:120rpx;
	}
</style>
