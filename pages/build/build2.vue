<template>
	<div>
		<div class='cont'>
			<div>
				<BuildServer @req_class='req_class' v-if='source'></BuildServer>
			</div>
			<div class="build2inf">
				<div class="serch" @click="go_build_serch"><image src="../../static/index/serch.png" ></image><span>寻找商品、店铺</span></div>
				<div class="section">
					<scroll-view scroll-y='true' class="nav">
						<div v-for="(list,index) in classlist" :key="list"  :class="{'active':index==activeindex}" @click="cg_activeindex(index,list.id)">{{list.name}}</div>
					</scroll-view>
					<scroll-view class="list" scroll-y='true'>
						<div @click="go_build_tenant(list.id,list)" v-for="(list,index) in storelist" :key="index" class="listinf">
							<image :src="static+list.picture" ></image>
							<div>
								<p>{{list.name}}</p>
								<p>地址：{{list.address}}</p>
							</div>
						</div>
					</scroll-view>
				</div>
			</div>			
		</div>
		
	</div>
</template>

<script>
	import ut from '../../utils/index.js';
	import BuildServer from '../../components/common/buildServer.vue'
	export default {
		data() {
			return {
				static:'',
				activeindex:0,
				classlist:[],
				storelist:[],
				id:'',
				source:''
			}
		},
		components:{
			BuildServer
		},
		onLoad(opt) {
			this.static=ut.static;
			this.id=opt._id;
			this.source=opt.source;
			ut.settitle(opt.name||'');
			if(this.id){
				this.req_class(opt._id);
			}		
		},
		methods: {
			go_build_serch(){
				wx.navigateTo({
					url: '../build/serch'
				})
			},
			go_build_tenant(storeid,item){
				wx.setStorageSync('tenant',item)
				wx.navigateTo({
					url: `../build/tenant_new?storeid=${storeid}&classid=${this.classlist[this.activeindex].id}`
				})
			},
			cg_activeindex(index,classid){
				this.activeindex=index;
				this.req_storelist(classid)
			},
			req_class(id){
				this.activeindex=0
				this.id = id
				ut.request({
					data: {
						parentid:id
					},
					url: "goods/class"
				}).then(data=>{
					this.classlist=data;
					return {
						classid:data[0].id
					}
				}).then(data=>{
					this.req_storelist(data.classid)
				})
			},
			req_storelist(classid){
				ut.request({
					data: {
						classid:classid,
						id:this.id
					},
					url: "goods/storelist"
				}).then(data=>{
					this.storelist=data;
				})
			}
		}
	}
</script>

<style>
	.cont{
		display: flex;
		flex-direction: column;
		height: 100vh;
	}
	.build2inf{
		flex:1;
		position: relative;
	}
	.serch{margin-left: 60rpx;margin-right: 60rpx;margin-top: 30rpx;height: 54rpx;line-height: 54rpx;border-radius: 10rpx;display: flex;border:1px solid #c8c8c8;color: #CCCCCC;font-size: 24rpx;align-items: center;}
	.serch image,.serch span{display: inline-block;vertical-align: top;}
	.serch image{width: 26rpx;height: 24rpx;margin-left: 30rpx;margin-right: 30rpx;}
	.section{top: 112rpx;display: flex;position: absolute;bottom: 0;width: 100%;}
	.section .list{
		flex: 1;
		padding: 0 30rpx;
		display: flex;
		height: 100%;
	}
	.section .nav{
		width: 200rpx;
		flex-direction: column;
		height: 100%;
	}
	.section .nav div{
		width: 200rpx;
		height: 62rpx;
		line-height: 62rpx;
		text-align: center;
		font-size: 28rpx;
		border-bottom-right-radius: 20rpx;
		border-top-right-radius: 20rpx;
		margin-bottom: 23rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.section .nav .active{
		background: #fec300;
		color: white;
	}
	.list{
		display: flex;
		flex-direction: column;
	}
	.listinf{
		height: 150rpx;
		align-items: center;
		margin-bottom: 30rpx;
		flex-direction: row;
		display: flex;
	}
	.listinf image{
		width: 150rpx;
		height: 150rpx;
		border-radius: 10rpx;
		margin-right: 18rpx;
	}
	.listinf div{
		flex: 1;
		font-size: 24rpx;
	}
	.listinf div p:first-child{
		line-height: 44rpx;
	}
</style>
