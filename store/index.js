import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: { 
		current:0,
		list: [{
				iconPath: "home",
				selectedIconPath: "home-fill",
				text: '首页', 
				isDot: true,
				customIcon: false
			},{
				iconPath: "grid",
				selectedIconPath: "grid-fill",
				text: '功能', 
				isDot: true,
				customIcon: false
			},
			{
				iconPath: "account",
				selectedIconPath: "account-fill",
				text: '我的', 
				isDot: false,
				customIcon: false
			},
		],
	},
    mutations: {},
    actions: {}
})
export default store