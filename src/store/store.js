'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import header from './modules/Header'
import footer from './modules/Footer'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    header,
    footer
  }
})
