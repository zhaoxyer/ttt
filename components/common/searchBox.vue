<template>
	<div class="header">
		<div class="adress">
			<!-- <picker mode="region"  value="请选择所在城市" :custom-item="customItem" class='regionpicker'  v-if="!disabled" @change="bindRegionChange">
							<view class="picker">
								{{provinceName||''}}，{{countyAreaName||''}}，{{cityName||''}}
							</view>
			</picker> -->
			<image src="../../static/index/whiteadress.jpg" ></image><span @click="totast">{{cityName||'通州'}}</span>
		</div>
		<div class='serch' @click="goSearch"><span>{{text}}</span><image src="../../static/index/serch.png" ></image></div>
		<div class="tel"><image src="../../static/index/whitetel.jpg" @click="call"></image></div>
	</div>
</template>

<script>
	import ut from '@/utils/index'
	export default {
		props: ['type','text'],
		data() {
			return {
				provinceName:'',
				countyAreaName:'',
				cityName:'通州'
			}
		},
		methods: {
			bindRegionChange(e) {
				this.provinceName=e.target.value[0];
				this.countyAreaName=e.target.value[1];
				this.cityName=e.target.value[2];
			},
			goSearch(){
				if(this.type==1){
					ut.goto('../home/serch')
				}else{
					ut.goto('../build/serch')
				}
			},
			call(){
				ut.call();
			},
			totast(){
				ut.totast('现在只开通通州的服务，其他区域敬请期待！')
			}
		}
	}
</script>

<style scoped="true">
	.header{
		padding: 20upx 26.5upx 28upx 24.5upx;
		background: #FEC200;
		height: 70upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;
	}
	.header .tel{
		padding: 0 0 0 67upx;
	}
	.header .tel image{
		width: 50upx;
		height: 30upx;
	}
	.header .serch{
		background: white;
		height: 70upx;
		flex: 1;
		border-radius: 8upx;
		align-items: center;
		justify-content: space-between;
		display: flex;
		font-size: 30upx;
		color: #cccccc;
		padding: 0 20upx 0 40upx;
	}
	.header .serch image{
		width: 26upx;
		height: 24upx;
	}
	.header .adress{
		font-size: 30upx;
		line-height: 70upx;
		padding: 0 27.5upx 0 0;
		position: relative;
	}
	.header .adress image{
		width: 20upx;
		height: 30upx;
		margin-right: 24upx;
	}
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
	.title1{
		width: 180upx;
		line-height: 60upx;
		text-align: center;
		font-size: 22upx;
		color: white;
		border-top-right-radius: 30upx;
		border-bottom-right-radius: 30upx;
	}
	.bg0{
		background: linear-gradient(#ff9836, #ffb169);
	}
	.bg1{
		background: linear-gradient(#60ced0, #75d6db);
		margin-top: 34.5upx;
	}
	.buju{
		position: relative;
		margin-bottom: 23.5upx;
		margin-top: 27upx;
	}
	.buju button{
		position: absolute;
		background: transparent;
		width: 122upx;
		height: 100%;
		left: 128upx;
		border: none;
	}
	.buju button:nth-child(2){
		right: 128upx;
		left: inherit;
	}
	.buju button:after{border: none;}
	.buju image{
		width: 100%;
		display: block;
	}
	.leftright{
		padding: 0 25.5upx 0 24.5upx;
		margin-top: 27upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		flex-wrap: wrap;
	}
	.fuwu p{
		font-size: 24upx;
		padding: 16.5upx 0;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.fuwu div{
		width: 334upx;
		text-align: center;
	}
	.fuwu div image{
		width: 100%;
		height: 334upx;
		display: block;
	}
</style>
