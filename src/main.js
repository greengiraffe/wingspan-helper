import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
