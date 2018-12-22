<template>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
			<swiper-item v-for="item in swipeList" :key="item">
				<image :src="item"/>
			</swiper-item>
		</swiper>
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
				circular: true
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	
</style>
