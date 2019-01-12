<template>
	<view>
        <div class="shopping-car">
			<div class="shopping-options-wrap">
				<ul class="shopping-options">
					<li class="shopping-option-item shopping-collect" @click="delcart">删除</li>
					<!-- <li class="shopping-option-item"></li> -->
				</ul>
			</div>
			<div class="shopping-goods-container">
				<div class="shopping-goods-list" v-for="(list,index) in list" :key="list">
					<div class="shopping-seller">{{list.storename}}</div>
					<div class="shopping-goods-item" v-for="(item,itemindex) in list.cartlist" :key='item'>
						<input type="radio" readonly="true" v-if="!item.checked" @click="checked(index,itemindex)"/>
						<input type="radio" checked v-else @click="checked(index,itemindex)"/>
						<div class="shopping-goods-img">
							<image :src="item.picture"  class="noimage"></image>
						</div>
						<div class="shopping-good-info" >
							<p class="shopping-good-name">{{item.goodsName}}</p>
							<div class="shopping-good-type" v-if="item.goodsSpecName">规格: {{item.goodsSpecName}}</div>
							<div class="shopping-good-price">
								<span>¥ {{item.price}}</span>
								<ul class="shopping-num-container">
									<li class="shopping-option" @click='del(index,itemindex)'>-</li>
									<li>{{item.num}}</li>
									<li class="shopping-option shopping-add" @click='add(index,itemindex)'>+</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="shopping-all" v-if="list.allnum"><span>合计：</span><span>￥{{list.allmoneynum}}</span><span>结算（{{list.allnum}}）</span></div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				list:[],
				static:''
			}
		},
		onShow() {
			this.static=ut.static;
			if(wx.getStorageSync('token')){
				this.req_cartlist();
			}
		},
		methods: {
			error(index,itemindex){
				this.list[index].cartlist[itemindex].picture='../../static/build/mall.jpg'
			},
			checked(index,itemindex){
				console.log(index,itemindex)
				this.list[index].cartlist[itemindex].checked=!this.list[index].cartlist[itemindex].checked;
				this.com();
			},
			com(){
				this.list .forEach(item=>{
					let allnum=0;
					let allmoneynum=0;
					item.cartlist.forEach(item1=>{
						if(item1.checked){
							allnum+=item1.num;
							allmoneynum+=Number(item1.price)*item1.num.toFixed(2);
						}
					})
					item.allnum=allnum;
					item.allmoneynum=allmoneynum.toFixed(2);
				})
			},
			add(index,itemindex){
				this.list[index].cartlist[itemindex].num+=1;
				this.req_updateNum(index,itemindex);
				this.com();
			},
			del(index,itemindex){
				
				if(this.list[index].cartlist[itemindex].num==1){
					/* this.list[index].cartlist[itemindex].num-=1;
					this.req_delete(this.list[index].cartlist[itemindex].id);
					if(this.list[index].cartlist.length==1){
						this.list.splice(index,1)
					}else{
						this.list[index].cartlist.splice(itemindex,1)
					} */
					return;
				}else{
					this.list[index].cartlist[itemindex].num-=1;
					this.req_updateNum(index,itemindex);
					this.com();
				}
			},
			//购物车商品数量更新
			req_updateNum(index,itemindex){
				ut.request({
					url: "cart/updateNum",
					data:{
						cartid:this.list[index].cartlist[itemindex].id,
						num:this.list[index].cartlist[itemindex].num
					}
				}).then(data=>{
					//this.list=data
				})
			},
			delcart(){
				this.list .forEach(item=>{
					item.cartlist.forEach(item=>{
						if(item.checked){
							this.req_delete(item.id)
						}
					})
				})
			},
			//删除购物车商品
			req_delete(cartid){
				ut.request({
					url: "cart/delete",
					data:{
						cartid:cartid
					}
				}).then(data=>{
					//this.list=data
					this.req_cartlist();
				})
			},
			req_cartlist(){
				ut.request({
					url: "cart/list",
				}).then(data=>{
					data.forEach(item=>{
						item.allnum=0;
						item.allmoneynum=0;
						item.cartlist.forEach(item=>{
							item.checked=false;
						})
					})
					this.list =data;
				})
			}
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
	.shopping-all{
		height: 100px;
		display: flex;
		font-size: 24px;
		justify-content: flex-end;
		align-items: center;
	}
	.shopping-all span{
		margin-left: 30px;
	}
	.shopping-all span:nth-child(2){
		color: #FEC200;
	}
	.shopping-all span:nth-child(3){
		background: #FEC200;
		color: white;
		padding: 0 10px;
		line-height: 50px;
		border-radius: 25px;
		min-width: 150px;
		text-align: center;
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
		font-size: 24px;
	}
	.shopping-goods-container {
		background: #EFEFEF;
	}
	.shopping-goods-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-bottom: 30px;
	}
	.shopping-goods-img {
		width: 300px;
		height: 200px;
	}
	.shopping-goods-img image{
		height: 100%;
		width: 100%;
	}
	.shopping-good-info {
		flex:1;
		height: 200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 24px;
	}
	.shopping-good-name {
		font-size: 28px;
		margin-bottom: 30px;
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
		align-items: center;
		margin-top: 30px;
	}
	.shopping-num-container {
		margin-left: 10px;
		display: flex;
		flex-direction: row;
		width: 168px;
		height: 30px;
		border: 1px solid #000;
		border-radius: 10px;
		line-height: 30px;
		font-size: 24px;
	}
	.shopping-num-container li:nth-child(2){
		width: 100px;
		text-align: center;
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
