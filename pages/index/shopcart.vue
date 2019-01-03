<template>
	<view>
        <div class="shopping-car">
			<div class="shopping-options-wrap">
				<ul class="shopping-options">
					<li class="shopping-option-item shopping-collect">移入购物车</li>
					<li class="shopping-option-item">删除</li>
				</ul>
			</div>
			<div class="shopping-goods-container">
				<div class="shopping-goods-list">
					<div class="shopping-seller">龙源五金建材</div>
					<div class="shopping-goods-item">
						<input type="radio"/>
						<div class="shopping-goods-img"></div>
						<div class="shopping-good-info">
							<p class="shopping-good-name">全铜淋浴花洒套装</p>
							<div class="shopping-good-type">规格: 全铜花洒</div>
							<div class="shopping-good-price">
								<span>¥ 590</span>
								<ul class="shopping-num-container">
									<li class="shopping-option">-</li>
									<li><input type="number"/></li>
									<li class="shopping-option shopping-add">+</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="shopping-goods-item">
						<input type="radio"/>
						<div class="shopping-goods-img"></div>
						<div class="shopping-good-info">
							<p class="shopping-good-name">全铜淋浴花洒套装</p>
							<div class="shopping-good-type">规格: 全铜花洒</div>
							<div class="shopping-good-price">
								<span>¥ 590</span>
								<ul class="shopping-num-container">
									<li class="shopping-option">-</li>
									<li><input type="number"/></li>
									<li class="shopping-option shopping-add">+</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="shopping-goods-list">
					<div class="shopping-seller">龙源五金建材</div>
					<div class="shopping-goods-item">
						<input type="radio"/>
						<div class="shopping-goods-img"></div>
						<div class="shopping-good-info">
							<p class="shopping-good-name">全铜淋浴花洒套装</p>
							<div class="shopping-good-type">规格: 全铜花洒</div>
							<div class="shopping-good-price">
								<span>¥ 590</span>
								<ul class="shopping-num-container">
									<li class="shopping-option">-</li>
									<li><input type="number"/></li>
									<li class="shopping-option shopping-add">+</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.shopping-car {
		background: #efefef
	}
	.shopping-options-wrap {
		padding: 31px;
		height: 50px;
		clear: both;
		overflow: hidden;
	}
	.shopping-options {
		float: right;
	}
	.shopping-options:after {
		overflow: hidden;
	}
	.shopping-option-item {
		display: inline-block;
		height: 50px;
		padding: 0 25px;
		border: 1px solid #fe0100;
		border-radius: 25px;
		color: #fe0100;
		line-height: 50px;
		font-size: 24px;
	}
	.shopping-collect {
		margin-right: 10px;
		border-color: #e9bb27;
		color: #e9bb27;
	}
	.shopping-goods-list {
		width: 100%;
		box-sizing: border-box;
		padding: 0 30px;
		margin-bottom: 10px;
		background: #fff;
	}
	.shopping-seller {
		width: 100%;
		padding-left: 70px;
		box-sizing: border-box;
		line-height: 50px;
		font-size: 28px;
	}
	.shopping-goods-container {
		background: #f60;
	}
	.shopping-goods-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 30px;
	}
	.shopping-goods-img {
		width: 300px;
		height: 300px;
		background: #45C5DB;
	}
	.shopping-good-info {
		flex:1;
		height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		font-size: 28px;
	}
	.shopping-good-name {
		font-size: 28px;
	}
	.shopping-good-type {
		padding: 0px 20px;
		background: #e5e5e5;
		border-radius: 25px;
		line-height: 50px;
	}
	.shopping-good-price {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.shopping-num-container {
		margin-left: 10px;
		display: flex;
		flex-direction: row;
		width: 168px;
		height: 50px;
		border: 1px solid #000;
		border-radius: 10px;
	}
	.shopping-option {
		width: 65px;
		height: 100%;
		border-right: 1px solid #000;
		text-align: center;
		font-size: 30px;
	}
	.shopping-add {
		border-right: 0px;
		border-left: 1px solid #000;
	}
</style>
