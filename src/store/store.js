'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels: []
  },
  getters: {
    getHotels (state) {
      return state.hotels
    }
  },
  actions: {
    searchHotels: function (context) {
      axios.get('http://localhost:3000/api/hotels')
      .then(response => {
        context.commit('addHotels', response.data)
      })
      .catch(e => {
        throw e
      })
    }
  },
  mutations: {
    addHotels (state, hotels) {
      state.hotels = hotels
    }
  }
})
