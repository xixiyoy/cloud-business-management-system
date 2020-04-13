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
import VCharts from 'v-charts'

import VueHorizontalTimeline from 'vue-horizontal-timeline'
import VueCookie from 'vue-cookie'

import 'froala-editor/js/plugins.pkgd.min.js'
import 'froala-editor/js/third_party/embedly.min'
import 'froala-editor/js/third_party/font_awesome.min'
import 'froala-editor/js/third_party/spell_checker.min'
import 'froala-editor/js/third_party/image_tui.min'
import 'froala-editor/css/froala_editor.pkgd.min.css'
import VueFroala from 'vue-froala-wysiwyg'

import { Button, Steps, Row, Col } from 'ant-design-vue'

const { Step } = Steps

Vue.config.productionTip = false

Vue.use(MetaInfo)
Vue.use(ElementUI)
Vue.use(VCharts)
Vue.use(VueHorizontalTimeline)
Vue.use(VueCookie)
Vue.use(VueFroala)
Vue.component(Button.name, Button)
Vue.component(Steps.name, Steps)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Step.name, Step)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
