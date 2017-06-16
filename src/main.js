// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import Resource from 'vue-resource'
import router from './router'
import iView from 'iview'
import VueMarkdown from 'vue-markdown'
import IEcharts from 'vue-echarts-v3'
import '../custom-theme/dist/iview.css'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Resource)
Vue.use(iView)
Vue.use(VueMarkdown)
Vue.use(IEcharts)

const vuexStore = new Vuex.Store({
  state: {
    editorContent: ''
  },
  mutations: {
    content (state) {
      alert(state.editorContent)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  VueMarkdown,
  store: vuexStore,
  router,
  template: '<App/>',
  components: { App }
})
