<template>
	<div class='adress'>
		<div class="adressli" @click="go_mine_adress" v-if="adress">
			<div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：{{adress.name}}</div>
			<div>联系方式：{{adress.phone}}</div>
			<div class="adressinf">
				<div>
					<div>
						<image src="../../static/index/blackadress.png" />
					</div><span>收货地址：{{adress.provinceName+adress.countyAreaName+adress.cityName+adress.address}}</span>
				</div>
				<image src="../../static/right.jpg" />
			</div>
		</div>
		<div class="adressli center" @click="go_mine_adress" v-else>
			请选择地址
		</div>
	</div>
</template>

<script>
	import ut from '@/utils/index'
	import {mapState} from 'vuex'
	export default {
		props: ['swipeList', 'type'],
		data() {
			return {}
		},
		computed: {
			...mapState(['adress'])
		},
		methods: {
			go_mine_adress() {
				wx.navigateTo({
					url: '../mine/adress?src=pay'
				})
			}
		},
		onLoad() {
			this.$store.dispatch('req_getdefaddress')
		}
	}
</script>

<style scoped="true">
	.adressli {
		padding: 30rpx;
		font-size: 26rpx;
		border-bottom: 1px solid #E5E5E5;
		line-height: 26rpx;
	}
	
	.adressli div>div {
		display: inline-block;
	}
	
	.adressli>div:nth-child(1) {
		font-size: 30rpx;
		padding: 0 30rpx;
	}
	
	.adressli>div:nth-child(2) {
		margin-bottom: 30rpx;
		margin-top: 25rpx;
		padding: 0 30rpx;
	}
	
	.adressinf {
		display: flex;
		font-size: 24rpx;
		align-items: center;
	}
	
	.adressinf image {
		width: 20rpx;
		height: 30rpx;
	}
	
	.adressinf div {
		flex: 1;
		line-height: 30rpx;
		display: flex;
	}
	
	.adressinf div image {}
	
	.adressinf div span {
		flex: 1;
		margin-left: 10rpx;
	}	
</style>
