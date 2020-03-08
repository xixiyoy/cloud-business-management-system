import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/default.css'
import './assets/css/axure_rp_page.css'
import './assets/css/jquery-ui-themes.css'
import './assets/css/reset.css'
import MetaInfo from 'vue-meta-info'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(MetaInfo)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
