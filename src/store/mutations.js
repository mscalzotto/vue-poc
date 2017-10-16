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
    state.results = hotels.docs
    state.pagination = {
      total: hotels.total,
      limit: hotels.limit,
      offset: hotels.offset
    }
  },

  [types.FETCH_HOTELS_FAILURE] (state, { error }) {
    state.fetchingData = false
    state.error = error
  },

  [types.UPDATE_FILTER_NAME] (state, { name }) {
    state.filters.name = name
  },
  [types.UPDATE_FILTER_STARS] (state, { stars }) {
    state.filters.star = stars
  }
}
