<template>
	<div>
		<div class="serch" @click="go_build_serch"><image src="../../static/index/serch.png" ></image><span>寻找商品、店铺</span></div>
		<div class="section">
			<nav>
				<div v-for="(list,index) in classlist" :key="list"  :class="{'active':index==activeindex}" @click="cg_activeindex(index,list.id)">{{list.name}}</div>
			</nav>
			<div class="list">
				<div @click="go_build_tenant(list.id,list)" v-for="(list,index) in storelist" :key="index">
					<image :src="static+list.picture" ></image>
					<div>
						<p>{{list.name}}</p>
						<p>地址：{{list.address}}</p>
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
				static:'',
				activeindex:0,
				classlist:[],
				storelist:[],
				id:''
			}
		},
		onLoad(opt) {
			this.static=ut.static;
			this.id=opt._id;
			this.req_class(opt._id)
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
					url: `../build/tenant?storeid=${storeid}&classid=${this.classlist[this.activeindex].id}`
				})
			},
			cg_activeindex(index,classid){
				this.activeindex=index;
				this.req_storelist(classid)
			},
			req_class(id){
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
			},
		}
	}
</script>

<style>
	.serch{margin-left: 60px;margin-right: 60px;margin-top: 30px;height: 54px;line-height: 54px;border-radius: 10px;display: flex;border:1px solid #c8c8c8;color: #CCCCCC;font-size: 24px;align-items: center;}
	.serch image,.serch span{display: inline-block;vertical-align: top;}
	.serch image{width: 26px;height: 24px;margin-left: 30px;margin-right: 30px;}
	.section{margin-top: 28px;display: flex;}
	.section .list{
		flex: 1;
		padding: 0 30px;
		display: flex;
	}
	.section nav{
		width: 200px;
		flex-direction: column;
	}
	.section nav div{
		width: 200px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: 28px;
		border-bottom-right-radius: 30px;
		border-top-right-radius: 30px;
		margin-bottom: 6px;
	}
	.section nav .active{
		background: #fec300;
	}
	.list{
		display: flex;
		flex-direction: column;
	}
	.list>div{
		height: 150px;
		align-items: center;
		margin-bottom: 30px;
		flex-direction: row;
		display: flex;
	}
	.list>div image{
		width: 150px;
		height: 150px;
		border-radius: 10px;
		margin-right: 18px;
	}
	.list>div div{
		flex: 1;
		font-size: 24px;
	}
	.list>div div p:first-child{
		margin-bottom: 20px;
	}
</style>
