import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './map'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
