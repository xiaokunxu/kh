import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalize.css'
import './assets/css/reset.css'
import fetch from './api/fetch.js'
import { Lazyload } from 'vant'

Vue.use(Lazyload, {
  lazyComponent: true,
})
import { Popup, Button, Toast } from 'vant';
Vue.use(Popup).use(Button).use(Toast)

Vue.prototype.$fetch = fetch
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // store.commit()
  if(to.meta.requireAuth && !store.getters.isLogin){
    next({
      name: 'login',
      qurey: {redirect: to.fullPath}
    })
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
