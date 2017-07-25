import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes,
  // mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  next()
})

router.afterEach((transition) => {
})

export default router
