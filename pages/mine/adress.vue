<template>
	<div>
		<div class='adress'>
			<div class="adressli">
				<div>
					<div>张先生</div><div>1863599999</div>
				</div>
				<div>北京市通州区春元街撒娇就小区</div>
				<div class="edit">
					<div><image src="../../static/mine/uncheck.jpg"></image><span>设为默认</span></div>
					<div><image src="../../static/mine/edit.png"></image><span>编辑</span><image src="../../static/mine/del.png"></image><span>删除</span></div>
				</div>
			</div>
			<div class="adressli">
				<div>
					<div>张先生</div><div>1863599999</div>
				</div>
				<div>北京市通州区春元街撒娇就小区</div>
				<div class="edit">
					<div><image src="../../static/mine/check.jpg"></image><span>设为默认</span></div>
					<div><image src="../../static/mine/edit.png"></image><span>编辑</span><image src="../../static/mine/del.png"></image><span>删除</span></div>
				</div>
			</div>
		</div>
		<div class="apply">
			<div @click='go_mine_addadress'>新建收货地址</div>
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
			go_mine_addadress(){
				wx.navigateTo({
					url: '../mine/addadress'
				})
			}			
		}
	}
</script>

<style>
	.adressli{padding: 30px;font-size: 26px;border-bottom: 1px solid #E5E5E5;line-height: 26px;}
	.adressli div>div{display: inline-block;}
	.adressli div>div:nth-child(2){
		float: right;
	}
	.adressli div>div span,.adressli div>div image{
		display: inline-block;
		vertical-align: top;
	}
	.edit{line-height: 40px!important;}
	.edit div:first-child image{
		width: 30px;
		height: 30px;
		margin-top: 5px;
	}
	.edit div:first-child span{
		margin-left: 15px;
	}
	.edit div:nth-child(2) image{
		width: 35px;
		height: 40px;
		margin-left: 15px;
	}
	.edit div:nth-child(2) span{
		margin-left: 15px;
	}
	.adressli>div:nth-child(1){
		font-size: 30px;
	}
	.adressli>div:nth-child(2){
		margin-bottom: 30px;
		margin-top: 25px;
	}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}
	.apply div{
		margin-left: 30px;
		margin-right: 30px;
		height: 100px;
		line-height: 100px;
		color: white;
		background: #F6C11B;
		font-size: 28px;
	}
</style>
