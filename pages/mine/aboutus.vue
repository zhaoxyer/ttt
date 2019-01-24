<template>
	<view>
			<div class="columlist" v-for="list in list" :key='list'>
				<wxParse :content="list.content" v-if="list.content"/>
			</div>	
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	import marked from '../../components/marked'
	import wxParse from '../../components/mpvue-wxparse/src/wxParse.vue'
	export default {
		data() {
			return {
				list:[]
			}
		},
		components: {
			wxParse
		},
		onShow() {
			this.req_problem();
		},
		methods: {
			req_problem(){
				ut.request({
					url: "aboutus/list"
				}).then(data=>{
					if(!data)return;
					data.forEach(item=>{
						const reg=new RegExp('/attach/download\\?filePath=','g');
						item.content==marked(item.content.replace(reg,ut.static));
					});
					this.list = data;
				})
			}
		}
	}
</script>

<style>
	.columlist{
		padding: 0 30upx;
		text-indent: 48upx;
		margin-top: 10upx;
	}
</style>