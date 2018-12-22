<template>
	<view class="list">
		<div v-for="item in server" :key="item" >
			<div class="title">
				<span class="bg0">{{item.type}}</span>
			</div>
			<div class="youhui leftright">
				<div class='server'>
					<div  v-for="(list,listindex) in item.list" :key="listindex"  @click="go_home_serverinf">
						<image   :src="list.image"   mode="widthFix"></image>
						<p>{{list.adress}}</p>
						<P>{{list.type}}</p>
					</div>
				</div>
			</div>
			<div class="bggray"></div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipeList: ['../../static/index/banner.jpg','../../static/index/banner.jpg'],
				indicatorDots: true,
				indicatorcolor: 'white',
				indicatoractivecolor:'#FEC200',
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true,
				server:[
					{
						type:"室内补漏",
						list:[
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							}
						]
					},
					{
						type:"室外补漏",
						list:[
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							}
						]
					},
					{
						type:"卫生间补漏",
						list:[
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							},
							{
								type:'防水补漏',
								adress:'卫生间',
								image:'../../static/index/fuwu.jpg'
							}
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			go_home_serverinf(){
				wx.navigateTo({
					url: '../home/serverinf'
				})
			}
		}
	}
</script>

<style>
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
	}
	.bggray{
		background: #e5e5e5;
		height: 40px;
	}
	.list>div:last-child .bggray{
		display: none;
	}
</style>
