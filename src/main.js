'use strict'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import AmMain from './AmMain'
import store from './store/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
const App = new Vue({
  el: '#app',
  name: 'AmMain',
  template: '<AmMain/>',
  store,
  components: { AmMain }
})

App.$mount('#app')
