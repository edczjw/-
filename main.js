import Vue from 'vue'
import App from './App' 
//引入vuex
import store from './store'
import {arrObject} from './static/js/utils.js' 
//引入发送请求的方法 一定要把路径补全
import { request } from "./static/js/request.js"

//把vuex定义成全局组件
Vue.prototype.$store = store
Vue.prototype.$arrObject = arrObject
Vue.prototype.$request = request

import uView from './uview-ui';
Vue.use(uView);
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store,
	arrObject,
	request
})
app.$mount()
