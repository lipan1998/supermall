import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//new Vue实例作为$bus事件总线
Vue.prototype.$bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
