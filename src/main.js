// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import AmMain from './AmMain'

Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})

/* eslint-disable no-new */
const App = new Vue({
  el: '#app',
  name: 'AmMain',
  template: '<AmMain/>',
  store,
  components: { AmMain },
  created: function () {
    console.log(this)
  },
  computed: {
    counter: function () {
      return this.$store.state.counter
    }
  }
})

App.$mount('#app')
