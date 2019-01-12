<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import url("components/mpvue-wxparse/src/wxParse.css");
	page{
		color: #5d5c5c;
	}
	swiper image{
		width: 100%;
		height: 300px;
	}
	swiper{
		height: 300px;
	}
	.bggray {
		background: #e5e5e5;
		height: 40px;
	}
	::-webkit-scrollbar {
	  width: 0;
	  height: 0;
	  color: transparent;
	}
  .pop{
		background:rgba(0,0,0,0.5);
		position: fixed;
		top:0;
		bottom: 102px;
		width: 100%;
		z-index: 999;
	}
</style>
