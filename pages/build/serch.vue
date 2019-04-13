<template>
	<div>
		<div class="serch">
			<image src="../../static/index/serch.png" @click="req_goodslist"></image><input type="text" placeholder="寻找商品、店铺"
			 v-model="name" confirm-type='search' @confirm='req_goodslist' />
		</div>
		<nav>
			<span @click="onSortClick('monthSell')">销量{{sortField == 'monthSell' ? (sortType == 1 ? '↑':'↓') : ''}}</span>
			<span @click="onSortClick('price')">价格{{sortField == 'price' ? (sortType == 1 ? '↑':'↓') : ''}}</span>
		</nav>
		<div class="section">
			<div class="list">
				<div v-for="(store,index) in list" :key='index' @click="go_build_tenant(store)">
					<image class="store_img" :src="static + store.picture"></image>
					<div class="inf">
						<div class="storeinf">
							<p>{{store.name ? store.name : "--"}}</p>
							<p>地址: {{store.address}}</p>
						</div>
						<scroll-view class="goodslist" scroll-x>
							<div @click.stop="go_build_tenant(store,goods.id)" class="goodsinf" v-for="(goods,childIndex) in store.storeGoods"
							 :key='childIndex'>
								<image class="goods_img" :src="static + goods.picture"></image>
								<div class="goods_intro">
									<p>{{goods.name ? goods.name : "--"}}</p>
									<p>月销{{goods.monthSell}}笔</p>
									<p style="color: #FEC300;">¥{{goods.price ? goods.price : "  "}}起</p>
								</div>
							</div>
						</scroll-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	export default {
		data() {
			return {
				static: '',
				name: '',
				sortField: 'monthSell', // 排序字段,
				sortType: 2, // 排序类型，1正序，2倒序
				list: []
			}
		},
		onLoad() {
			this.static = ut.static;
		},
		methods: {
			onSortClick(sortField){
				if(this.sortField == sortField){
					this.sortType = this.sortType == 1 ? 2 : 1;
				}else {
					this.sortField = sortField;
					this.sortType = 2;
				}
				this.req_goodslist();
			},
			req_goodslist() {
				ut.request({
					data: {
						name: this.name,
						sortField: this.sortField,
						sortType: this.sortType
					},
					url: "class/goods/list"
				}).then(data => {
					this.list = data;
					console.log(data)
					if (!this.list.length) {
						ut.totast('暂无相关商品')
					}
				})
			},
			go_build_mallinf(_id) {
				wx.navigateTo({
					url: `../build/mallinf?_id=${_id}`
				})
			},
			go_build_tenant(item, goodsId) {
				if(!item){
					return;
				}
				console.log('click');
				console.log(item);
				wx.setStorageSync('tenant', item)
				wx.navigateTo({
					url: `../build/tenant_new?storeid=${item.id}&goodsId=${goodsId}`
				})
			},
		}
	}
</script>

<style>
	.serch {
		margin-left: 60upx;
		margin-right: 60upx;
		margin-top: 30upx;
		height: 54upx;
		line-height: 54upx;
		border-radius: 10upx;
		display: flex;
		border: 1px solid #c8c8c8;
		font-size: 24upx;
		align-items: center;
	}

	nav {
		margin-bottom: 42upx;
		margin-top: 29upx;
		font-size: 30upx;
	}

	nav span {
		margin-left: 152upx;
		display: inline-block;
		vertical-align: top;
		color: #FEC300;
	}

	.serch image {
		width: 26upx;
		height: 24upx;
		margin-left: 30upx;
		margin-right: 30upx;
	}

	.serch input {
		flex: 1;
	}

	.section {
		display: flex;
	}

	.section .list {
		flex: 1;
		margin-left: 30upx;
		display: flex;
	}

	.list {
		display: flex;
		flex-direction: column;
		font-size: 24upx;
	}

	.list>div {
		margin-bottom: 30upx;
		flex-direction: row;
		display: flex;
	}

	.store_img {
		width: 140upx;
		height: 140upx;
		margin-top: 10upx;
		margin-right: 20upx;
		border-radius: 5px;
		background: #EFEFEF;
	}

	.inf {
		width: 560upx;
	}

	.storeinf {
		justify-content: center;
		height: 160upx;
		display: flex;
		flex-direction: column;
		border-bottom: 1px dashed #CCCCCC;
	}

	.storeinf p:first-child {
		margin-bottom: 5upx;
		font-size: 24upx;
	}

	.goodslist {
		overflow: hidden;
		white-space: nowrap;
		margin-top: 20upx;
	}

	.goods_img {
		width: 80upx;
		height: 70upx;
		background: #EFEFEF;
	}

	.goodslist .goodsinf {
		height: 70upx;
		width: 280upx;
		display: inline-flex;
		flex-direction: row;
	}

	.goods_intro {
		height: 100%;
		margin-left: 10upx;
	}

	.goods_intro p {
		height: 33.3%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 16upx;
	}
</style>
