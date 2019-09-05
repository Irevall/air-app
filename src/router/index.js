import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  // FIXME: find out which one of below fixes gh-pages
  base: '/air-app/',
  baseUrl: '/air-app/',
  publicPath: '/air-app/',
  mode: 'history',
  scrollBehavior: (from, to, savedPosition) => {
    return savedPosition || { x: 0, y: 0 }
  }
})

export default router
