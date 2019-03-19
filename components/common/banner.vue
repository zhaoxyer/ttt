<template>
	<swiper :indicator-dots="indicatorDots" :circular="circular" :autoplay="autoplay" :interval="interval" :duration="duration"
	 :indicator-active-color="indicatoractivecolor" :indicator-color="indicatorcolor">
		<swiper-item v-for="item in swipeList" :key="item" @click="goInf(item)">
			<image :src="static+item.banner" />
		</swiper-item>
	</swiper>
</template>

<script>
	import ut from '@/utils/index'
	export default {
		props: ['swipeList', 'type'],
		data() {
			return {
				static: ut.static,
				indicatorDots: true,
				indicatorcolor: 'white',
				indicatoractivecolor: '#FEC200',
				autoplay: true,
				interval: 5000,
				duration: 1000,
				circular: true
			}
		},
		methods: {
			goInf(item){
				if(this.type==1)ut.goto(`../home/serverinf?_id=${item.linkId}&title=${item.linkName||''}`)
				if(this.type==2)ut.goto(`../build/mallinf?_id=${item.linkId}&&title=${item.linkName||''}`)
			}
		}
	}
</script>

<style scoped="true">
	swiper image {
		width: 100%;
		height: 40vw;
	}

	swiper {
		height: 40vw;
	}
</style>
