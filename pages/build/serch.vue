<template>
	<div>
		<div class="serch"><image src="../../static/index/serch.png" ></image><span>寻找商品、店铺</span></div>
		<nav><span>筛选</span><span>销量</span><span>价格</span></nav>
		<div class="section">
			<div class="list">
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div class="inf">
						<div class="tetantinf">
							<p>盛丰五金建材器铺</p>
							<p>地址：通州区建材城二层</p>
						</div>
						<div class="mallinf leftright">
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<image src="../../static/build/tetant.png" ></image>
					<div class="inf">
						<div class="tetantinf">
							<p>盛丰五金建材器铺</p>
							<p>地址：通州区建材城二层</p>
						</div>
						<div class="mallinf leftright">
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
							<div>
								<image src="../../static/build/cailiao.png"></image>
								<div>
									<p>不锈钢字幕也</p>
									<p>月销 300 笔</p>
									<p class="color">￥39.00</p>
								</div>
							</div>
						</div>
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

		}
	}
</script>

<style>
	.serch{margin-left: 60px;margin-right: 60px;margin-top: 30px;height: 54px;line-height: 54px;border-radius: 10px;display: flex;border:1px solid #c8c8c8;color: #CCCCCC;font-size: 24px;align-items: center;}
	.serch image,.serch span{display: inline-block;vertical-align: top;}
	nav{
		margin-bottom: 42px;
		margin-top: 29px;
		font-size: 30px;
	}
	nav span{
		margin-left: 152px;
		display: inline-block;
		vertical-align: top;
		color: #FEC300;
	}
	nav span:first-child{
		margin-left: 81px;
		color: #5d5c5c;
	}
	.serch image{width: 26px;height: 24px;margin-left: 30px;margin-right: 30px;}
	.section{display: flex;}
	.section .list{
		flex: 1;
		padding: 0 30px;
		display: flex;
	}
	.list{
		display: flex;
		flex-direction: column;
	}
	.list>div{
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
	.list>div>div{
		flex: 1;
		font-size: 24px;
	}
	.tetantinf{
		justify-content: center;
		height: 150px;
		display: flex;
		flex-direction: column;
		border-bottom: 1px dashed #CCCCCC;
	}
	.tetantinf p:first-child{
		margin-bottom: 20px;
	}
	.leftright{
		margin-top: 27px;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.mallinf{
		flex-direction: row;
		font-size: 13px;
		display: flex;
		margin-top: 34px;
	}
	.mallinf>div{
		width: 50%;
		display: flex;
		flex-direction: row;
		margin-bottom: 34px;
	}
	.mallinf>div image{
		width: 72px;
		height: 65px;
		margin-right: 0;
	}
	.mallinf>div div{
		margin-left: 10px;
	}
	.mallinf>div div p:nth-child(2){
		margin-bottom: 10px;
		margin-top: 10px;
	}
	.mallinf .color{
		color: #FEC300;
	}
</style>
