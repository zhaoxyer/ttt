<template>
	<div>
		<div class='userinf'>
			<h1>服务种类</h1>
			<div class="type">
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
				<div>
					<image src="../../static/mine/check.jpg"></image><span>补漏疏通</span>
				</div>
			</div>
		</div>	
		<div class='userinf'>
			<div class="inf">
				<div>
					<span>服务范围</span><div><span>请选择</span><image src="../../static/select.png"></image></div>
				</div>
				<div>
					<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span><div><input type="text" placeholder="请输入姓名"/></div>
				</div>
				<div>
					<span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</span><div><span>请选择</span><image src="../../static/select.png"></image></div>
				</div>
				<div>
					<span>联系电话</span><div><input type="number" placeholder="请输入联系电话"/></div>
				</div>
			</div>
		</div>	
		<div class="tip">
			<p>请保持电话畅通，木斗客服3个工作日内会和您联系，</p>
			<p>通知您来面试。</p>
		</div>
		<div class="apply">
			<div>提交申请</div>
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
			go_mine_infchange(){
				wx.navigateTo({
					url: '../mine/infchange'
				})
			},
			go_mine_apply(){
				wx.navigateTo({
					url: '../mine/apply'
				})
			},
		}
	}
</script>

<style>
	.userinf{padding: 0 30px;border-bottom: 1px solid #CCCCCC;}
	.userinf h1{font-size: 28px;line-height: 75px;}
	.type div{display: inline-block;vertical-align: top;width: 25%;}
	.type div image,.type div span{display: inline-block;vertical-align: top;font-size: 24px;line-height: 40px;}
	.type div image{width: 40px;height: 40px;margin-right: 10px;margin-bottom: 30px;}
	.inf{font-size: 24px;line-height: 30px;margin-top: 30px;}
	.inf>div {margin-bottom: 30px;}
	.inf>div div,.inf>div span{display: inline-block;vertical-align: top;}
	.inf>div>span{width: 104px;}
	.inf>div div{width: 340px;border: 1px solid #5d5c5c;height: 30px;margin-left: 70px;padding: 0 10px;}
	.inf>div div image{width: 20px;height: 20px;float: right;margin-top: 5px;}
	.inf>div div input{width: 100%;height: 30px;line-height: 30px;font-size: 24px;min-height: 30px;}
	.tip{text-align: center;font-size: 24px;color: #999999;line-height: 60px;margin-top: 20px;}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100px;
		text-align: center;
	}
	.apply div{
		display: inline-block;
		width: 500px;
		height: 100px;
		line-height: 100px;
		color: white;
		background: #F6C11B;
		font-size: 28px;
	}
</style>
