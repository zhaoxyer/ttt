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
				<div class="shopping-goods-list" v-for="(list,index) in list" :key="index">
					<div class="shopping-seller">{{list.name}}</div>
					<div class="shopping-goods-item" v-for="(item,itemindex) in list.mall" :key='itemindex'>
						<input type="radio"/>
						<div class="shopping-goods-img">
							<image :src="item.picture"></image>
						</div>
						<div class="shopping-good-info" >
							<p class="shopping-good-name">{{item.name}}</p>
							<div class="shopping-good-type" v-if="item.type">规格: {{item.type}}</div>
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
				list:[
					{
						name:'大神五金建材',
						mall:[
							{
								num:1,
								picture:'../../static/build/mall.jpg',
								price:'40',
								name:'阿萨达套装',
								type:"全铜花洒"
							},
							{
								num:12,
								picture:'../../static/build/mall.jpg',
								price:'420',
								type:"全铜花洒"
							}
						]
					},
					{
						name:'阿大声道建材',
						mall:[
							{
								num:12,
								picture:'../../static/build/mall.jpg',
								price:'410',
								name:'阿萨达套装',
								type:"全铜花洒"
							},
							{
								num:1,
								picture:'../../static/build/mall.jpg',
								price:'410',
								name:'阿萨达套装',
								type:"全铜花洒"
							}
						]
					}
				]
			}
		},
		onShow() {
			this.req_cartlist();
		},
		methods: {
			add(index,itemindex){
				this.list[index].mall[itemindex].num+=1;
				this.req_updateNum(index,itemindex);
			},
			del(index,itemindex){
				this.list[index].mall[itemindex].num-=1;
				if(this.list[index].mall[itemindex].num==1){
					this.list[index].mall.splice(itemindex,1)
					if(!this.list[index].mall.length){
						this.list.splice(index,1)
					}
				}
				this.req_updateNum(index,itemindex);
			},
			//购物车商品数量更新
			req_updateNum(index,itemindex){
				return;
				ut.request({
					url: "cart/updateNum",
					data:{
						cartid:this.list[index].mall[itemindex].id,
						num:this.list[index].mall[itemindex].num
					}
				}).then(data=>{
					//this.list=data
				})
			},
			//删除购物车商品
			req_delete(cartid){
				return;
				ut.request({
					url: "cart/delete",
					data:{
						cartid:cartid
					}
				}).then(data=>{
					//this.list=data
				})
			},
			req_cartlist(){
				ut.request({
					url: "cart/list",
				}).then(data=>{
					//this.list=data
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
