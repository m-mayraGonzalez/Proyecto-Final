import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/main.css'
import axios from 'axios'
import vuetify from 'vuetify'

axios.defaults.baseURL = 'http://localhost:3000/api/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
