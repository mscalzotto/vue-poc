import Vue from 'vue'
import * as types from './mutation-types'

export default {
  // Fetch the lists from a hotels
  [types.FETCH_HOTELS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },

  [types.FETCH_HOTELS_SUCCESS] (state, { hotels }) {
    state.fetchingData = false
    state.error = null
    state.HOTELS = [ ...hotels ]
  },

  [types.FETCH_HOTELS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  }
}
