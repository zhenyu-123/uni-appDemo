import Vue from 'vue'
import App from './App'
//路由
import {RouterMount} from 'uni-simple-router';
 import Router from "./router/router.js"
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
// #ifdef H5
	RouterMount(app,'#app');
// #endif
 