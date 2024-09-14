import 'babel-polyfill'
import Vue from 'vue'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'
import '@/assets/iconfont/iconfont.css'
import App from './App'
import store from './store'
import router from './router'
import request from './utils/request'
import '@/icons' // icon
import '@/styles/index.scss' // global css
import '@/assets/font/font.css' // font css
import vueDebounce from 'vue-debounce'
import md5 from 'js-md5'

Vue.prototype.$md5 = md5
Vue.use(vueDebounce)
Vue.prototype.$request = request
const { mockXHR } = require('../mock')
mockXHR()
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
