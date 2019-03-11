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
		font-family: PingFangSC-Regular, sans-serif;
		height: 100vh;
		overflow-y: auto!important;
	}
	swiper image{
		width: 100%;
		height: 40vw;
	}
	swiper{
		height: 40vw;
	}
	.bggray {
		background: #e5e5e5;
		height: 30upx;
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
		bottom: 102upx;
		width: 100%;
		z-index: 999;
	}
	.noimage{
		 background-repeat:no-repeat;
		 background-size:100% 100%;
	}
	.regionpicker,.centerbutton,.shareFriend{position: absolute;background: transparent!important;color: transparent!important;width: 100%;z-index: 3;height: 100%;}
	.shareFriend:after{border:none;}
</style>
