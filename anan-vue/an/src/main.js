// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 路由
import router from './router'

// 全局样式
import '../static/iconfont/iconfont.css'
import '@/assets/css/animate.css'
import '@/assets/css/delay.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// 根组件
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
