<template>
	<div>
		<div class="header" @click="go_mine_register">
			<image src="../../static/index/herder.png"/>
			<p>木斗斗</p>
		</div>
		<div class='userinf'>
			<h1>个人信息</h1>
			<div @click="go_mine_infchange">
				<image src="../../static/index/userinf0.png"/>
				<p>信息修改</p>
			</div>
			<div @click="go_mine_adress">
				<image src="../../static/index/userinf1.png"/>
				<p>收获地址</p>
			</div>
			<div @click="go_mine_securityCenter">
				<image src="../../static/index/userinf2.png"/>
				<p>安全中心</p>
			</div>
		</div>
		<div class='userinf'>
			<h1>木斗帮手</h1>
			<div>
				<image src="../../static/index/helper0.png"/>
				<p>关于木斗生活</p>
			</div>
			<div>
				<image src="../../static/index/helper1.png"/>
				<p>常见问题</p>
			</div>
			<div @click="tel">
				<image src="../../static/index/helper2.png"/>
				<p>联系客服</p>
			</div>
		</div>
		<div class='userinf'>
			<h1>木斗招募</h1>
			<div @click="go_mine_apply">
				<image src="../../static/index/recruit0.png"/>
				<p>木斗工匠</p>
			</div>
			<div>
				<image src="../../static/index/recruit1.png"/>
				<p>木斗商户</p>
			</div>
			<div>
				<image src="../../static/index/recruit2.png"/>
				<p>木斗速递</p>
			</div>
			<div>
				<image src="../../static/index/recruit3.png"/>
				<p>木斗搬运</p>
			</div>
			<div>
				<image src="../../static/index/recruit4.png"/>
				<p>定制商户</p>
			</div>
			<div>
				<image src="../../static/index/recruit5.png"/>
				<p>地区加盟</p>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				tel:function () {
				  wx.makePhoneCall({
					phoneNumber: '18234038009',
				  })
				}
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
			go_mine_register(){
				wx.navigateTo({
					url: '../mine/register'
				})
			},
			go_mine_adress(){
				wx.navigateTo({
					url: '../mine/adress'
				})
			},
			go_mine_securityCenter(){
				wx.navigateTo({
					url: '../mine/securityCenter'
				})
			}
		}
	}
</script>

<style>
	.userinf div{width: 33.333%;text-align: center;display: inline-block;vertical-align: top;font-size: 24px;line-height: 30px;}
	.userinf image{width: 90px;height: 90px;}
	.userinf h1{font-size: 28px;text-indent: 30px;line-height: 75px;}
	.userinf{border-bottom: 1px solid #CCCCCC;}
	.userinf p{margin-bottom: 15px;line-height: 54px;}
	.header{
		height: 266px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28px;
		flex-direction: column;
		border-bottom: 1px solid #CCCCCC;
	}
	.header image{
		width: 145px;
		height: 145px;
		border-radius: 50%;
		margin-bottom: 30px;
	}
	div>.userinf:last-child{
		border-bottom: none;
	}
</style>
