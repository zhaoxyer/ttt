<template>
	<view class="list">
		<div class="yiji">
			<span v-for="(item,index) in server" :key="index"  :class="{'active':typeindex==index}" @click="cg_typeindex(index)">{{item.name}}</span>
		</div>
		<div class="bggray"></div>
		<div v-for="item in clientServiceClasses" :key="item" >
			<div class="title">
				<span class="bg0">{{item.name}}</span>
			</div>
			<div class="youhui leftright">
				<div class='server'>
					<div  v-for="(list,listindex) in item.clientServiceClasses" :key="listindex"  @click="go_home_serverinf(list.id,list.name)">
						<image   :src="static+list.picture"></image>
						<p>{{list.name}}</p>
					</div>
				</div>
			</div>
			<div class="bggray"></div>
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				typeindex:0,
				server:[],
				clientServiceClasses:[],
				activeindex:0,
				static:""
			}
		},
		onLoad(opt) {
			this.static=ut.static;
			this.req_class(opt._id);
			ut.settitle(opt.title||'服务列表');
		},
		methods: {
			go_home_serverinf(id,name){
				wx.navigateTo({
					url: `../home/serverinf?_id=${id}&title=${name}`
				})
			},
			cg_typeindex(index){
				this.typeindex=index;
				this.req_classlist(this.server[index].id)
			},
			req_class(id){
				ut.request({
					data: {
						parentid:id
					},
					url: "service/class"
				}).then(data=>{
					this.server=data;
					return data
				}).then(data=>{
					if(data[0]){
						this.req_classlist(data[0].id)
					}
				})
			},
			req_classlist(id){
				ut.request({
					data: {
						parentid:id
					},
					url: "service/classlist"
				}).then(data=>{
					this.clientServiceClasses=data;
				})
			}
		}
	}
</script>

<style>
	.yiji{
		padding:16rpx 30rpx 30rpx;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.yiji span{
		font-size: 24rpx;
		border-bottom: 10rpx solid #e5e5e5;
		width: 150rpx;
		margin-left: 120rpx;
		padding: 30rpx 0;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.yiji span:nth-child(3n+1){
		margin-left: 0;
	}
	.yiji span.active{
		border-bottom: 10rpx solid #FEC300;
		color: #FEC300;
	}
	.title{
		text-align: center;
		margin-top: 30rpx;
		height: 60rpx;
		margin-bottom: 50rpx;
	}
	
	.title span{
		display: inline-block;
		vertical-align: top;
		line-height: 60rpx;
		font-size: 30rpx;
		width: 250rpx;
		font-size: 20rpx;
		text-align: center;
		color: white;
		border-radius: 10rpx;
		margin-left: 30rpx;
		margin-right: 30rpx;
	}	
	.bg0{
		background: #FEC300;
	}
	
	.server{
		padding: 0 30rpx;
		margin-top: 40rpx;
		font-size: 24rpx;
		margin-bottom: 44rpx;
	}
	.server p{
		text-align: center;
		line-height: 44rpx;
		margin-top: 20rpx;
		padding: 0 15rpx;
		width: 120rpx;
		text-align: center;
		margin-bottom: 21rpx;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 30rpx;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30rpx;
	}
	.server image{
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
	}
	.bggray{
		background: #e5e5e5;
		height: 30rpx;
	}
	.list>div:last-child .bggray{
		display: none;
	}
</style>
