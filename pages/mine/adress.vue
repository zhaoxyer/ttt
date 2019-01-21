<template>
	<div>
		<scroll-view class="list" scroll-y='true'>
			<div class='adress'>
				<div class="adressli" v-for="(item,index) in list" :key="index" @click=setadress(item)>
					<div>
						<div>{{item.name}}</div><div>{{item.phone}}</div>
					</div>
					<div>{{item.provinceName+item.countyAreaName+item.cityName+item.address}}</div>
					<div class="edit">
						<div v-if="item.defaultType!=1" @click.stop="req_setDef(item)"><image src="../../static/mine/check.jpg" ></image><span>默认</span></div>
						<div v-else  @click="req_setDef(item)"><image src="../../static/mine/uncheck.jpg"></image><span>设为默认</span></div>
						<div><image src="../../static/mine/edit.png" @click.stop="go_mine_addadress(item.id)"></image><span  @click.stop="go_mine_addadress(item.id)">编辑</span><image src="../../static/mine/del.png" @click.stop="req_del(item,index)"></image><span @click.stop="req_del(item,index)">删除</span></div>
					</div>
				</div>
			</div>
		</scroll-view>
		<div class="apply">
			<div @click='go_mine_addadress()'>新建收货地址</div>
		</div>					
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				list:[],
				src:''
			}
		},
		onLoad(opt) {
			this.src=opt.src;
		},
		onShow() {
			this.req_getAdress();
		},
		methods: {
			setadress(item){
				if(this.src){
					wx.setStorageSync('adress',item);
					wx.navigateBack();
				}
			},
			go_mine_addadress(id){
				id=id||''
				wx.navigateTo({
					url: '../mine/addadress?_id='+id
				})
			},
			req_getAdress(){
				console.log(this.list)
				ut.request({
					url: "address/list"
				}).then(data => {
					this.list=data;
				})
			},
			req_setDef(item){
				ut.request({
					data:{
					  id: item.id
					},
					url: "address/setAttr"
				}).then(data => {
					this.req_getAdress();
				})
			},
			req_del(item,index){
				ut.request({
					data:{
					id: item.id
					},
					url: "address/delete"
				}).then(data => {
					this.req_getAdress();
				})
			}
		}
		
	}
</script>

<style>
	.list{
		position: absolute;
		top:0;
		bottom: 120upx;
		width: 100%;
	}
	.adressli{padding: 30upx;font-size: 26upx;border-bottom: 1px solid #E5E5E5;line-height: 26upx;}
	.adressli div>div{display: inline-block;}
	.adressli div>div:nth-child(2){
		float: right;
	}
	.adressli div>div span,.adressli div>div image{
		display: inline-block;
		vertical-align: top;
	}
	.edit{line-height: 40upx!important;}
	.edit div:first-child image{
		width: 30upx;
		height: 30upx;
		margin-top: 5upx;
	}
	.edit div:first-child span{
		margin-left: 15upx;
	}
	.edit div:nth-child(2) image{
		width: 35upx;
		height: 40upx;
		margin-left: 15upx;
	}
	.edit div:nth-child(2) span{
		margin-left: 15upx;
	}
	.adressli>div:nth-child(1){
		font-size: 30upx;
	}
	.adressli>div:nth-child(2){
		margin-bottom: 30upx;
		margin-top: 25upx;
	}
	.apply{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100upx;
		text-align: center;
	}
	.apply div{
		margin-left: 30upx;
		margin-right: 30upx;
		height: 100upx;
		line-height: 100upx;
		color: white;
		background: #F6C11B;
		font-size: 28upx;
	}
</style>
