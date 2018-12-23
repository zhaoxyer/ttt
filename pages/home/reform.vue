<template>
	<div>
		<view class="list">
			<div>
				<div class="youhui leftright">
					<div class='server'>
						<div v-for="(list,index) in server" :key="index" @click="go_home_serverinf">
							<image :src="list.image" mode="widthFix"></image>
							<p>{{list.adress}}</p>
							<P>{{list.type}}</p>
						</div>
					</div>
				</div>
				<div class="bggray"></div>
			</div>
		</view>
		<div class="bggray"></div>
		<div class='userinf'>
			<h1>户型</h1>
			<div class="type">
				<div v-for="(list,index) in homeType" :key="list" @click="cg_check(index)">
					<image src="../../static/mine/check.jpg"  v-if="index!=check"></image><image src="../../static/mine/uncheck.jpg" v-else></image><span>{{list.name}}</span>
				</div>
			</div>
		</div>
		<div class="apply">
			<div>立即预约</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				check:-1,
				server: [{
							type: '改造',
							adress: '卫生间',
							image: '../../static/index/fuwu.jpg'
						},
						{
							type: '改造',
							adress: '卫生间',
							image: '../../static/index/fuwu.jpg'
						},
						{
							type: '改造',
							adress: '卫生间',
							image: '../../static/index/fuwu.jpg'
						},
						{
							type: '改造',
							adress: '卫生间',
							image: '../../static/index/fuwu.jpg'
						},
						{
							type: '改造',
							adress: '卫生间',
							image: '../../static/index/fuwu.jpg'
						},
						{
							type: '改造',
							adress: '卫生间',
							image: '../../static/index/fuwu.jpg'
						}
				],
				homeType:[
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					},
					{
						name:"别墅"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			go_mine_infchange() {
				wx.navigateTo({
					url: '../mine/infchange'
				})
			},
			go_mine_apply() {
				wx.navigateTo({
					url: '../mine/apply'
				})
			},
			cg_check(index){
				if(this.check==index){
					this.check=-1;
					return;
				}
				this.check=index
			}
		}
	}
</script>

<style>
	.userinf {
		padding: 0 30px;
	}

	.userinf h1 {
		font-size: 30px;
		line-height: 60px;
		width: 200px;
		color: white;
		background: #FEC300;
		border-radius: 10px;
		text-align: center;
		margin-top: 30px;
		margin-bottom: 44px;
		box-shadow: 0 4px 0 #CCCCCC;
	}

	.type div {
		display: inline-block;
		vertical-align: top;
		width: 25%;
	}

	.type div image,
	.type div span {
		display: inline-block;
		vertical-align: top;
		font-size: 24px;
		line-height: 40px;
	}

	.type div image {
		width: 40px;
		height: 40px;
		margin-right: 10px;
		margin-bottom: 30px;
	}

	.inf {
		font-size: 24px;
		line-height: 30px;
		margin-top: 30px;
	}

	.inf>div {
		margin-bottom: 30px;
	}

	.inf>div div,
	.inf>div span {
		display: inline-block;
		vertical-align: top;
	}

	.inf>div>span {
		width: 104px;
	}

	.inf>div div {
		width: 340px;
		border: 1px solid #5d5c5c;
		height: 30px;
		margin-left: 70px;
		padding: 0 10px;
	}

	.inf>div div image {
		width: 20px;
		height: 20px;
		float: right;
		margin-top: 5px;
	}

	.inf>div div input {
		width: 100%;
		height: 30px;
		line-height: 30px;
		font-size: 24px;
		min-height: 30px;
	}

	.tip {
		text-align: center;
		font-size: 24px;
		color: #999999;
		line-height: 60px;
		margin-top: 20px;
	}

	.apply {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}

	.apply div {
		height: 100px;
		line-height: 100px;
		color: white;
		background: #FEC300;
		font-size: 28px;
		margin-left: 125px;
		margin-right: 125px;
	}


	.bg0 {
		background: #FEC200;
	}

	.server {
		padding: 0 30px;
		margin-top: 40px;
		font-size: 24px;
		margin-bottom: 20px;
	}

	.server p {
		text-align: center;
		line-height: 40px;
	}

	.server div {
		display: inline-block;
		vertical-align: top;
		margin-right: 30px;
	}

	.server div:nth-child(4n) {
		margin-right: 0;
	}

	.server div:nth-last-child(n+5) {
		margin-bottom: 30px;
	}

	.server image {
		width: 150px;
		border-radius: 10px;
	}

	.bggray {
		background: #e5e5e5;
		height: 40px;
	}

	.list>div:last-child .bggray {
		display: none;
	}
</style>
