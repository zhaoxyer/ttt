<template>
	<div class="cancel-order-modal">
		<scroll-view class="popheight" scroll-y="true">
			<div class="cancel-order-condition">
				<div class="cancel-order-title" v-if="type == 1 || type == 3">
					<span>商户评分</span>
					<div class="stars-wrapper">
						<div class="star" v-for="n in 5" @click="storeStar = n" :key="n" :class="{'on':storeStar>n}" />
					</div>
					<span>{{rateString[storeStar]}}</span>
				</div>

				<div class="cancel-order-title" v-if="type ==2">
					<span>工匠评分</span>
					<div class="stars-wrapper">
						<div class="star" v-for="n in 5" @click="craftsmanStar = n" :key="n" :class="{'on':craftsmanStar>n}" />
					</div>
					<span>{{rateString[craftsmanStar]}}</span>
				</div>
				
				<div class="cancel-order-title" v-if="type == 1">
					<span>搬运评分</span>
					<div class="stars-wrapper">
						<div class="star" v-for="n in 5" @click="carryStar = n" :key="n" :class="{'on':carryStar>n}" />
					</div>
					<span>{{rateString[carryStar]}}</span>
				</div>
				<div class="cancel-order-title" v-if="type == 1">
					<span>速递评分</span>
					<div class="stars-wrapper">
						<div class="star" v-for="n in 5" @click="expressStar = n" :key="n" :class="{'on':expressStar>n}" />
					</div>
					<span>{{rateString[expressStar]}}</span>
				</div>
				<div class="check-group">
					<div class="check-item" @click="change_check(index)" v-for="(item,index) in checkArray" :key="index" :class="{'checked': item.checked}">
						{{item.title}}
					</div>
				</div>
				<textarea v-model="detail" class="cancel-order-des" placeholder="评价"></textarea>
				<div class="addimg">
					<image src="/static/addimg.png" @click="uploadimg"></image>
					<image :src="static+list" @click="uploadimg" v-for="(list,index) in pictures" :key='index'></image>
				</div>
			</div>
		</scroll-view>
		<!-- <div class="cancel-order-status">
			<div class="cancel-order-title">
			取消订单声明
			</div>
			<div class="cancel-statement-wrap">
				<div class="cancel-radio-wrap">
					<span class="cancel-radio"></span>
					<span class="cancel-label">不需要了</span>
				</div>
			</div>
		</div> -->
		<button class="cancel-button" @click="sub">提交评价</button>
	</div>
</template>

<script>
	import ut from '../utils/index.js';

	export default {
		props: ["reason", "orderId", "reload", "changeVisibileModal", "type"],
		data() {
			return {
				chooseData: null,
				detail: '',
				storeStar: 5,
				craftsmanStar: 5,
				carryStar: 5,
				expressStar: 5,
				pictures: [],
				static: ut.static,
				phone: '',
				rateString: ['', '非常差', '很差', '一般', '很好', '非常好'],
				checkArray: [{
					title: '服务态度好',
					checked: false
				}, {
					title: '材料齐全',
					checked: false
				}, {
					title: '信誉度高',
					checked: false
				}, {
					title: '服务态度好',
					checked: false
				}, {
					title: '服务态度好',
					checked: false
				}, {
					title: '服务态度好',
					checked: false
				}]
			}
		},
		methods: {
			choose(data) {
				this.chooseData = data;
			},
			addcomment() {
				let pictures = '',
					hasPicture = 2;
				this.pictures.forEach(item => {
					hasPicture = 1
					if (pictures) {
						pictures += ',' + item
					} else {
						pictures += item
					}

				})
				let append = "";
				for (let item of this.checkArray) {
					if (item.checked) {
						append += item.title + ",";
					}
				}
				const userinf = wx.getStorageSync('userinf')
				ut.request({
					data: {
						"account": userinf.nickname || userinf.name,
						"content": this.detail,
						"hasPicture": hasPicture, //是否有图 1有 2无
						"photo": userinf.photo,
						"pictures": pictures,
						"type": this.type, //1商品2服务3定制
						"review": "2", //是否为追评 1是 2否
						"orderId": this.orderId, //订单id
						"starType": this.starType, // 星级类型，1-商户 2-工匠 3-搬运 4-速递
						storeStar: this.storeStar,
						craftsmanStar: this.craftsmanStar,
						carryStar: this.carryStar,
						expressStar: this.expressStar,
						"commentBox": append, // 选项
					},
					url: 'comment/add',
					c: true
				}).then(data => {
					this.$parent.changeVisibileModal(false)
					this.$emit('reload');
					ut.totast("评价成功")
				})
			},
			sub() {
				if (!this.detail) {
					ut.totast("请输入评价")
					return;
				}
				this.addcomment();
			},
			uploadimg() {
				ut.uploadimg({
					callback: res => {
						this.req_uploadimg(res);

					}
				})
			},
			req_uploadimg(res) {
				const that = this;
				wx.uploadFile({
					url: ut.uploadimgurl + "common/imageUpload", //仅为示例，非真实的接口地址
					filePath: res,
					name: 'picture',
					header: {
						"Accept": "*/*"
					},
					success(res) {
						console.log(res)
						if (!res.data) {
							ut.totast('上传图片失败')
							return;
						}
						res.data = JSON.parse(res.data);
						if (res.data.code == 0) {
							that.pictures.push(res.data.data);
						} else {
							ut.totast('上传图片失败')
						}
					}
				})
			},
			change_rate(rate) {
				this.rate = rate;
			},
			change_check(index) {
				let item = this.checkArray[index];
				item.checked = !item.checked;
				this.checkArray = this.checkArray;
			}
		}
	}
</script>

<style scoped="true">
	.addimg image {
		width: 80upx;
		height: 60upx;
		display: inline-block;
		vertical-align: top;
		margin-top: 20px;
		margin-right: 30upx;
	}

	.phone span,
	.phone input {
		margin-top: 20px;
		display: inline-block;
		vertical-align: top;
		line-height: 60upx;
		height: 60upx;
	}

	.phone input {
		border: 1px solid #8F8F94;
		width: 400upx;
		margin-left: 30upx;
	}

	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		position: fixed;
		top: 0upx;
		left: 0upx;
	}

	.action-main-wrap {
		width: 100%;
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
		max-height: 899upx;
		overflow: auto;
	}

	.action-main {
		position: relative;
	}

	.cancel-order-modal {
		width: 100%;
		font-size: 24upx;
	}

	.cancel-order-title {
		padding-bottom: 30upx;
		display: flex;
		flex-direction: row;
	}

	.cancel-order-title span {
		line-height: 38upx;
	}

	.cancel-order-condition {
		padding-bottom: 30upx;
		padding-top: 50upx;
		border-bottom: 1px solid #ededed;
	}

	.popheight {
		max-height: 600upx;
	}

	.cancel-order-status .cancel-order-title {
		padding-top: 20upx;
	}

	.cancel-order-check-group,
	.cancel-order-checked {
		margin-left: 220upx;
		position: relative;
		overflow: hidden;
		margin-bottom: 20upx;
	}

	.cancel-order-checked .check-box {
		border: 0upx;
		background: #f6c11b;
	}

	.check-box {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border: 1px solid #c9c9c9;
		box-sizing: border-box;
		position: absolute;
		top: 0upx;
		left: 0upx;
		z-index: 99;
		margin-top: 8upx;
	}

	.check-label {
		display: inline-block;
		padding-left: 50upx;
	}

	.cancel-order-des {
		width: 100%;
		height: 150upx;
		border: 1px solid #B4B4B4;
		border-radius: 3upx;
		line-height: 30upx;
		box-sizing: border-box;
	}

	.cancel-radio-wrap {
		margin-left: 220upx;
		margin-bottom: 20upx;
	}

	.cancel-radio {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		background: #fec200;
		border-radius: 10upx;
	}

	.cancel-label {
		padding-left: 57upx;
	}

	.cancel-button {
		margin: 0 auto;
		margin-top: 30upx;
		background: #fec200;
		width: 500upx;
		height: 100upx;
		text-align: center;
		line-height: 100upx;
		color: #fff;
		border-radius: 0upx;
		font-size: 24upx;
	}

	.stars-wrapper {
		display: flex;
		flex-direction: row;
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.star {
		display: inline-block;
		width: 38upx;
		height: 38upx;
		background-image: url('../static/allOrder/star_gray.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
		margin-right: 30upx;
	}

	.stars-wrapper .on {
		background-image: url('../static/allOrder/star_light.png');
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}

	.check-group {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.check-item {
		width: 150upx;
		height: 50upx;
		margin: 20upx 40upx;
		background: #999999;
		text-align: center;
		line-height: 50upx;
		border-radius: 6upx;
		color: #fff;
		font-size: 24upx;
	}

	.check-group .checked {
		background: #fec200;
	}
</style>
