<template>
	<div>
		<div class="order-item-detail">
			<div class="order-info">
				<span class="order-num">订单编号：{{data.orderNumber}}</span>
				<span class="order-status">{{data.statusName}}</span>
			</div>
			<div v-for="(list,index) in data.orderGoods" :key="list">
				<div class="order-info">
					<image class="goods-picture noimage" :src="static+list.picture"></image>
					<div class="goods-info-wrap">
						<div class="goods-info">
							<p>{{list.goodsName}}</p>
							<p>¥ {{list.goodsPrice}}</p>
						</div>
						<div class="goods-info">
							<p>规格:{{list.goodsSpec}}</p>
							<p>&times;{{list.number}} </p>
						</div>
					</div>
				</div>
				<div style="padding: 20rpx 0;">
					<div class="order-options-wrap">
						<div class="order-options">
							<button v-if="data.status == 17&&list.canExchangeGoods&&!comment" @click="changeShouhouModal(true,1,list.id)"
							 class="order-button">申请换货</button>
							<button v-if="data.status == 17 && list.canReturnGoods && !comment" @click="changeShouhouModal(true,2,list.id)"
							 class="order-button  order-pay">申请退货</button>
						</div>
					</div>
				</div>
			</div>
			<div class="goods-info">
				<div class="order-time">下单时间：{{data.createTime}}</div>
				<div class="order-time">合计: {{data.total}}</div>
			</div>
			<div class="order-options-wrap">
				<div class="order-options">
					<button v-if="data.status <= 8" @click="changeCancelModal(true)" class="order-button">取消订单</button>
					<button v-if="type == 1" @click="changeStatus(true)" class="order-button">订单状态</button>
					<button v-if="data.status == 9" @click="changeConfirmModal(true)" class="order-button">配送议价</button>
					<button v-if="data.status == 10" @click="yanshousudi()" class="order-button">验收速递</button>
					<button v-if="data.status == 14" @click="changeBanyunModal(true)" class="order-button">确认搬运议价</button>
					<button v-if="data.status == 15" @click="yanshoubanyun()" class="order-button">验收搬运</button>
					<button v-if="data.status == 17 && comment" @click="changeReport(true, 4)" class="order-button">投诉搬运</button>
					<button v-if="data.status == 17 && comment" @click="changeReport(true, 3)" class="order-button">投诉速递</button>
					<button v-if="data.status == 17 && comment" @click="changeReport(true, 2)" class="order-button">投诉商户</button>
					<button v-if="data.status == 17 && comment" @click="changeComment(true)" class="order-button">评价</button>
				</div>
			</div>
		</div>

		<t-modal :reason="reason" :visibile="order_status_visibile" @changeVisible="changeOrderStatusModal">
			<order-status></order-status>
		</t-modal>

		<t-modal :visibile="cancel_order_visibile" @changeVisible="changeCancelModal">
			<cancel-modal cancelUrl="goods/order/cancelOrder" @reload="reloadData" :orderId="data.id" :reason="reason"></cancel-modal>
		</t-modal>

		<t-modal :visibile="confirm_order_visibile" @changeVisible="changeConfirmModal">
			<confirm-plan @reload="reloadData" :orderId="data.id" :confirmPlanlist='confirmPlanlist'></confirm-plan>
		</t-modal>

		<t-modal :visibile="confirm_banyun" @changeVisible="changeBanyunModal">
			<goods-banyun @reload="reloadData" :orderId="data.id" :confirmPlanlist='banyunplan'></goods-banyun>
		</t-modal>

		<t-modal :visibile="confirm_ordercheck_visibile" @changeVisible="changeOrderCheck">
			<order-check @reload="reloadData" :orderId="data.id" :confirmPlanlist='confirmPlanlist'></order-check>
		</t-modal>

		<t-modal :visibile="shou_order_visibile" @changeVisible="changeShouhouModal">
			<goods-shouhou @reload="reloadData" :orderId="data.id" :reason="afterSaleReason" :flag="flag" :goodsId="goodsId"></goods-shouhou>
		</t-modal>

		<t-modal :visibile="show_comment" @changeVisible="changeComment">
			<addComment @reload="reloadData" :orderId="data.id" type="1"></addComment>
		</t-modal>

		<t-modal :visibile="show_report" @changeVisible="changeReport">
			<addReport :reason="reportReason" @reload="reloadData" :orderId="data.id" :type="reportType"></addReport>
		</t-modal>
		
		<t-modal :visibile="show_status" @changeVisible="changeStatus">
			<orderStatus type="1" @reload="reloadData" :orderId="data.id">
			</orderStatus>
		</t-modal>
	</div>
</template>

<script>
	import TModal from './tmodal.vue';
	import OrderStatus from './orderStatus.vue';
	import CancelModal from './goodscancelModal.vue';
	import ConfirmPlan from './goodsconfirmModal.vue';
	import orderCheck from './goodsorderCheck.vue';
	import goodsBanyun from './goodsconfirmBanyun.vue';
	import goodsShouhou from './goodsShouhou.vue';
	import addComment from './addComment.vue';
	import addReport from './addReport.vue'
	import ut from '../utils/index.js';
	import orderStatus from './orderStatus.vue';
	
	export default {
		props: ["data", "reason", "reload", 'comment', "type"],
		data() {
			return {
				static: ut.static,
				order_status_visibile: false,
				cancel_order_visibile: false,
				confirm_order_visibile: false,
				confirm_ordercheck_visibile: false,
				confirm_banyun: false,
				show_comment: false,
				show_report:false,
				show_status: false,
				confirmPlanlist: {},
				banyunplan: [],
				afterSaleReason: [],
				flag: '',
				goodsId: '',
				reportReason: [],
				reportType: 0,
			}
		},
		components: {
			TModal,
			OrderStatus,
			CancelModal,
			ConfirmPlan,
			goodsBanyun,
			goodsShouhou,
			addComment,
			addReport,
			orderStatus
		},
		methods: {
			go_next() {
				wx.navigateTo({
					url: `../home/pay`
				})
			},
			reloadData() {
				this.$emit('reload');
			},
			getConfirmPlan() {
				ut.request({
					data: {
						orderId: this.data.id
					},
					method: 'get',
					url: "goods/order/expressPrice"
				}).then(data => {
					console.log(data)
					this.confirmPlanlist = data || {};
				})
			},
			yanshousudi() {
				ut.request({
					data: {
						orderId: this.data.id
					},
					url: "goods/order/checkExpress"
				}).then(data => {
					ut.totast("操作成功");
					this.$emit('reload');
				})
			},
			yanshoubanyun() {
				ut.request({
					data: {
						orderId: this.data.id
					},
					url: "goods/order/checkCarry"
				}).then(data => {
					ut.totast("操作成功");
					this.$emit('reload');
				})
			},
			changeOrderStatusModal(status) {
				if (typeof status != 'undefined') {
					this.order_status_visibile = status;
				}
			},
			changeCancelModal(status) {
				if (typeof status != 'undefined') {
					this.cancel_order_visibile = status;
				}
			},
			changeConfirmModal(status) {
				if (status) {
					this.getConfirmPlan()
				}
				if (typeof status != 'undefined') {
					this.confirm_order_visibile = status;
				}
			},
			changeOrderCheck(status) {
				if (status) {
					this.getConfirmPlan()
				}
				if (typeof status != 'undefined') {
					this.confirm_ordercheck_visibile = status;
				}
			},
			changeBanyunModal(status) {
				if (status) {
					this.getbanyunPlan()
				}
				if (typeof status != 'undefined') {
					this.confirm_banyun = status;
				}
			},
			getbanyunPlan() {
				ut.request({
					data: {
						orderId: this.data.id
					},
					method: 'get',
					url: "goods/order/carryPrice"
				}).then(data => {
					console.log(data)
					this.banyunplan = data || [];
					//this.cancel_reason = data;
				})
			},
			changeShouhouModal(status, flag, goodsId) {
				if (status) {
					this.getafterSaleReason()
				}
				if (typeof status != 'undefined') {
					this.flag = flag
					console.log(flag)
					this.shou_order_visibile = status;
					this.goodsId = goodsId;
				}
			},
			getafterSaleReason() {
				ut.request({
					data: {
						type: 2
					},
					url: "goods/order/afterSaleReason"
				}).then(data => {
					this.afterSaleReason = data;
				})
			},
			changeComment(status) {
				if (typeof status != 'undefined') {
					this.show_comment = status;
				}
			},
			changeReport(status, type) {
				if (status) {
					this.reportType = type;
					this.reportReason = [];
					this.getReportReason(type);
				}
				if (typeof status != 'undefined') {
					this.show_report = status;
				}
			},
			getReportReason(type) {
				ut.request({
					data: {
						type: this.reportType
					},
					url: "complaint/typelist"
				}).then(data => {
					this.reportReason = data;
				})
			},
			changeStatus(status) {
				if (typeof status != 'undefined') {
					this.show_status = status;
				}
			}
		}
	}
</script>

<style>
	.order-item-detail {
		width: 100%;
		box-sizing: border-box;
		padding: 30upx;
		border-bottom: 1px solid #e5e5e5;
	}

	.order-info {
		display: flex;
		flex-direction: row;
		font-size: 24upx;
		color: #0b0708;
		margin-bottom: 30upx;
	}

	.order-num {
		flex: 1;
	}

	.order-status {
		text-align: right;
		color: #fec200;
	}

	.goods-picture {
		width: 200upx;
		height: 152upx;
	}

	.goods-info-wrap {
		flex: 1;
		padding-left: 32upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.goods-info {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.order-time {
		font-size: 24upx;
		color: #0b0708;
		margin-bottom: 28upx;
	}

	.order-button {
		width: 160upx;
		height: 50upx;
		background: #fec200;
		text-align: center;
		line-height: 50upx;
		color: #fff;
		font-size: 24upx;
	}

	.order-options-wrap {
		display: flex;
		justify-content: flex-end;
	}

	.order-options {
		display: flex;
		flex-direction: row;
	}

	.border-collapse {
		margin-right: 52upx;
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
	}

	.action-main {
		position: relative;
	}

	.order-status-wrap {
		padding-top: 123upx;
	}

	.order-status-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		font-size: 18upx;
		color: #0B0708;
	}

	.order-status-time {
		width: 333upx;
		height: 100%;
		text-align: right;
		box-sizing: border-box;
		padding-right: 31upx;

	}

	.order-status-icon {
		width: 28upx;
		height: 28upx;
		position: relative;
		top: 0upx;
		left: 15upx;
		z-index: 100;
	}

	.order-status-text {
		flex: 1;
		padding-bottom: 20upx;
		white-space: pre-wrap;
		padding-left: 58upx;
		padding-right: 93upx;
		border-left: 1px solid #fec200;
	}

	.order-status-last {
		border-left: 0upx;
	}

	.order-pay {
		margin-left: 10px;
	}
</style>
