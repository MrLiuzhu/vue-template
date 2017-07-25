
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// import './filters'
import store from './store'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import * as Types from './store/mutation-types'

Vue.use(VueLocalStorage)
Vue.use(VueResource)
Vue.use(ElementUI)

// API config
Vue.http.options.root = 'http://localhost';
Vue.http.interceptors.push((request, next) => {
  const token = window.localStorage.getItem('CSAMP_SESSION_TOKEN');
  if (token) {
    request.headers.set('CSAMP_SESSION_TOKEN', token)
  }
  next();
})

// 路由映射 BREADCRUMB
router.beforeEach((to, from, next) => {
  const matched = to.matched.map(item => {
    return {
      title: item.meta.title,
      path: item.path,
    }
  }).filter(val => val.title)
  store.dispatch(Types.SET_BREADCRUMB, matched)
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
