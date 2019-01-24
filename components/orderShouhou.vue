<template>
	<div class="cancel-order-modal">
		<div class="cancel-order-condition">
			<div class="cancel-order-title">
			售后类别
			</div>
			<div class="cancel-order-check-wrap">
				<div v-for="(item,index) in reason" :key="index" :class="chooseData==item.id ? 'cancel-order-checked':'cancel-order-check-group'" @click="choose(item.id)">
					<div class="check-box"></div>
					<div class="check-label">{{item.context}}</div>
				</div>
			</div>
			<textarea v-model="detail" class="cancel-order-des" placeholder="详情说明"></textarea>
			<div class="addimg">
				<image src="/static/addimg.png"  @click="uploadimg"></image><image :src="static+list"  @click="uploadimg" v-for="(list,index) in pictures" :key='index'></image> 
			</div>
			<div class="phone"><span>联系电话</span><input type="number" v-model="phone" maxlength="11"/></div>
		</div>
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
		<button class="cancel-button" @click="sub">提交</button>
	</div>
</template>

<script>
import ut from '../utils/index.js';
export default {
  props: ["reason","orderId","reload","changeVisibileModal","cancelUrl"],
  data() { 
	  return {
		  chooseData: null,
		  detail: '',
		  pictures: [],
		  static:ut.static,
		  phone:''
	  }
  },
  methods: {
	  choose(data){
			this.chooseData = data;  
	  },
		afterSale() {
			let pictures='';
			this.pictures.forEach(item=>{
				if(pictures){
					pictures+=','+item
				}else{
					pictures+=item
				}
				
			})
			ut.request({
				data: {
					orderId: this.orderId,
					reasonId: this.chooseData,
					detail: this.detail,
					phone:this.phone,
					pictures:pictures
				},
				url: 'service/order/afterSale'
			}).then(data=>{
				this.$parent.changeVisibileModal(false)
				this.$emit('reload');
				ut.totast("申请成功")
			})
		},
	  sub() {
			if(!this.chooseData){
				ut.totast("请选择售后原因")
				return;
			}
			if(!this.detail){
				ut.totast("请输入详情")
				return;
			}
			if(!ut.checkmobile(this.phone)){
				ut.totast("请输入正确的手机号")
				return;
			}
			this.afterSale();
	  },
	  uploadimg(){
	  	ut.uploadimg({
	  		callback:res=>{
	  			this.req_uploadimg(res);
	  			
	  		}
	  	})
	  },
	  req_uploadimg(res){
	  	const that=this;
	  	wx.uploadFile({
	  		url: ut.uploadimgurl+"common/imageUpload", //仅为示例，非真实的接口地址
	  		filePath: res,
	  		name: 'picture',
	  		header: {
	  			"Accept": "*/*"
	  		},
	  		success(res) {
	  			console.log(res)
	  			if(!res.data){
	  				ut.totast('上传图片失败')
	  				return;
	  			}
	  			res.data=JSON.parse(res.data);
	  			if(res.data.code==0){
	  				that.pictures.push(res.data.data);
	  			}else{
	  				ut.totast('上传图片失败')
	  			}
	  		}
	  	})
	  }
  }
}
</script>

<style scoped="true">
	.addimg image{
		width: 80upx;
		height: 60upx;
		display: inline-block;
		vertical-align: top;
		margin-top: 20px;
		margin-right: 30upx;
	}
	.phone span,.phone input{
		margin-top: 20px;
		display: inline-block;
		vertical-align: top;
		line-height: 60upx;
		height: 60upx;
	}
	.phone input{
		border: 1px solid #8F8F94;
		width: 400upx;
		margin-left: 30upx;
	}
	.action-sheet {
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.3);
		position: fixed;
		top: 0upx;
		left: 0upx;
	}
	.action-main-wrap {
		width: 100%;
		max-height: 890upx;
		background: #fff;
		position: absolute;
		bottom: 0upx;
		box-sizing: border-box;
		padding: 30upx;
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
	}
	.cancel-order-condition {
		padding-bottom: 30upx;
		border-bottom: 1px solid #ededed;
	}
	.cancel-order-status .cancel-order-title {
		padding-top: 20upx;
	}
	.cancel-order-check-group, .cancel-order-checked{
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
		z-index: 99
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
		line-height: 150upx;
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
</style>
