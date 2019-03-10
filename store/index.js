import Vue from 'vue'
import Vuex from 'vuex'
import ut from '@/utils/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    adress: '',
	goods: [],
	otherGoods: {
		num: 0,
		price: 0
	},
	goodsPay:[]
  },
  mutations: {
    setDeflfAdress: (state, provider) => {
      state.adress = provider
    },
	setGoods: (state, provider) => {
      state.goods = provider
    },
	addOtherGoods: (state, provider) => {
      state.otherGoods.num+=1;
	  state.otherGoods.price=(Number(state.otherGoods.price)+Number(provider)).toFixed(2);
    },
	minusOtherGoods: (state, provider) => {
	  if(state.otherGoods.num==0)return;
      state.otherGoods.num-=1;
	  state.otherGoods.price=(Number(state.otherGoods.price)-Number(provider)).toFixed(2);
    },
	setGoodsPay(state){
		const goodsPay = []
		state.goods.map((item)=>{			
			item.guigetype.map(item1=>{
				
				if(item1.num>0){
					item1.goodsName= item.clientGoods.name
					goodsPay.push(item1)
				}
			})
		})
		console.log(goodsPay)
		state.goodsPay = goodsPay
	},
	clean(state){
		state.goods=[];
		state.otherGoods= {
			num: 0,
			price: 0
		};
		state.goodsPay=[]
	}
  },
  actions:{
	req_getdefaddress({state,commit}){
		if(state.adress)return
		ut.request({
			url: "address/getdefaddress"
		}).then(data=>{
			commit('setDeflfAdress', data)
		})
	}  
  }
})

export default store