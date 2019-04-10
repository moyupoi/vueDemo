import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'

import api from './fetch/api'
import './assets/stylesheets/_mint.scss'
import './util/rem'

Vue.use(MintUI)
Vue.use(api, store)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
