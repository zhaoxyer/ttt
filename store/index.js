import Vue from 'vue'
import Vuex from 'vuex'
import ut from '@/utils/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    adress: ''
  },
  mutations: {
    setDeflfAdress: (state, provider) => {
      state.adress = provider
    }
  },
  actions:{
	req_getdefaddress({state,commit}){
		if(state.adress)return
		ut.request({
			url: "address/getdefaddress"
		}).then(data=>{
			commit('setDeflfAdress', data||{})
		})
	}  
  }
})

export default store