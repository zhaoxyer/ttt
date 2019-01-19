<template>
	<view class="list">
		<div class="yiji">
			<scroll-view scroll-x='true' class="nav">
				<span v-for="(item,index) in server" :key="index"  :class="{'active':typeindex==index}" @click="cg_typeindex(index)">{{item.name}}</span>
			</scroll-view>
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
				swipeList: ['../../static/index/banner.jpg','../../static/index/banner.jpg'],
				indicatorDots: true,
				indicatorcolor: 'white',
				indicatoractivecolor:'#FEC200',
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true,
				server:[],
				classlist:[],
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
		padding:0 30px;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
	}
	.yiji span{
		font-size: 24px;
		margin-right: ;
		border-bottom: 8px solid #e5e5e5;
		line-height: 80px;
	}
	.yiji span:first-child{
		margin-right: 60px;
	}
	.yiji span.active{
		border-bottom: 8px solid #FEC200;
		color: #FEC200;
	}
	.title{
		text-align: center;
		margin-top: 40px;
		height: 50px;
	}
	
	.title span{
		display: inline-block;
		vertical-align: top;
		line-height: 50px;
		font-size: 20px;
		width: 200px;
		font-size: 20px;
		text-align: center;
		color: white;
		border-radius: 25px;
		margin-left: 30px;
		margin-right: 30px;
		box-shadow: 0 4px 0 #CCCCCC;
	}	
	.bg0{
		background: #FEC200;
	}
	
	.server{
		padding: 0 30px;
		margin-top: 40px;
		font-size: 24px;
		margin-bottom: 20px;
	}
	.server p{
		text-align: center;
		line-height: 40px;
		width: 150px;
		text-align: center;
	}
	.server div{
		display: inline-block;
		vertical-align: top;
		margin-right: 30px;
	}
	.server div:nth-child(4n){
		margin-right: 0;
	}
	.server div:nth-last-child(n+5){
		margin-bottom: 30px;
	}
	.server image{
		width: 150px;
		height: 150px;
		border-radius: 10px;
	}
	.bggray{
		background: #e5e5e5;
		height: 40px;
	}
	.list>div:last-child .bggray{
		display: none;
	}
</style>
