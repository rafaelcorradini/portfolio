// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MultiLanguage from './lang/vue-multilanguage'
import language from './lang'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollTo from 'vue-scrollto'
import Snotify, { SnotifyPosition } from 'vue-snotify'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(MultiLanguage, language)
Vue.use(VueAwesomeSwiper)
Vue.use(Snotify, {
  toast: {
    position: SnotifyPosition.centerTop
  }
})
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -70,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
