import Vue from 'vue'

import App from '@/App.vue'
import router from '@/router'

Vue.config.productionTip = false

export const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
