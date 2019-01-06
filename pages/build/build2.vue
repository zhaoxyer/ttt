<template>
	<div>
		<div class="serch" @click="go_build_serch"><image src="../../static/index/serch.png" ></image><span>寻找商品、店铺</span></div>
		<div class="section">
			<nav>
				<div class="active">门框类五金</div>
				<div>门框类五金</div>
				<div>门框类五金</div>
				<div>门框类五金</div>
				<div>门框类五金</div>
				<div>门框类五金</div>
				<div>门框类五金</div>
				<div>门框类五金</div>
			</nav>
			<div class="list">
				<div @click="go_build_mallinf">
					<image src="../../static/build/tetant.png" ></image>
					<div>
						<p>盛丰五金建材器铺</p>
						<p>地址：通州区建材城二层</p>
					</div>
				</div>
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div>
						<p>盛丰五金建材器铺</p>
						<p>地址：通州区建材城二层</p>
					</div>
				</div>
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div>
						<p>盛丰五金建材器铺</p>
						<p>地址：通州区建材城二层</p>
					</div>
				</div>
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div>
						<p>盛丰五金建材器铺</p>
						<p>地址：通州区建材城二层</p>
					</div>
				</div>
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div>
						<p>盛丰五金建材器铺</p>
						<p>地址：通州区建材城二层</p>
					</div>
				</div>
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div>
						<p>盛丰五金建材器铺</p>
						<p>地址：通州区建材城二层</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {
			go_build_serch(){
				wx.navigateTo({
					url: '../build/serch'
				})
			},
			go_build_mallinf(){
				wx.navigateTo({
					url: '../build/mallinf'
				})
			}
		}
	}
</script>

<style>
	.serch{margin-left: 60px;margin-right: 60px;margin-top: 30px;height: 54px;line-height: 54px;border-radius: 10px;display: flex;border:1px solid #c8c8c8;color: #CCCCCC;font-size: 24px;align-items: center;}
	.serch image,.serch span{display: inline-block;vertical-align: top;}
	.serch image{width: 26px;height: 24px;margin-left: 30px;margin-right: 30px;}
	.section{margin-top: 28px;display: flex;}
	.section .list{
		flex: 1;
		padding: 0 30px;
		display: flex;
	}
	.section nav{
		width: 200px;
		flex-direction: column;
	}
	.section nav div{
		width: 200px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 28px;
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		margin-bottom: 6px;
	}
	.section nav .active{
		background: #fec300;
	}
	.list{
		display: flex;
		flex-direction: column;
	}
	.list>div{
		height: 150px;
		align-items: center;
		margin-bottom: 30px;
		flex-direction: row;
		display: flex;
	}
	.list>div image{
		width: 150px;
		height: 150px;
		border-radius: 10px;
		margin-right: 18px;
	}
	.list>div div{
		flex: 1;
		font-size: 24px;
	}
	.list>div div p:first-child{
		margin-bottom: 20px;
	}
</style>
