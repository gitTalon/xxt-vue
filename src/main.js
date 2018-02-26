// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import  VueResource  from 'vue-resource'
Vue.use(VueResource) 

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)


Vue.config.productionTip = false


//全局的less 是这样引入的 ^_^
require('!style-loader!css-loader!less-loader!./assets/css/test.less');
//在main.js 不能用 import 导入
//import rem from './src/assets/js/setFontSize'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
