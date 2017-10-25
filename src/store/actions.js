import * as types from './mutation-types'
import service from '../service/hotels.service'

export default {
  // Fetch via AJAX the lists from a board
  loadHotels ({ commit }, { filters }) {
    commit(types.FETCH_HOTELS_REQUEST)
    service.fetchHotels(filters)
      .then(hotels => {
        commit(types.FETCH_HOTELS_SUCCESS, { hotels })
        let min = Number.POSITIVE_INFINITY
        let max = Number.NEGATIVE_INFINITY
        hotels.docs.map((hotel) => {
          if (hotel.price.amount > max) {
            max = Math.round(hotel.price.amount)
          }
          if (hotel.price.amount < min) {
            min = Math.round(hotel.price.amount)
          }
        })
        if (!filters.price_range.change) {
          commit(types.UPDATE_FILTER_PRICE, {min, max, value: [min, max]})
        }
      })
      .catch(error => commit(types.FETCH_HOTELS_FAILURE, { error }))
  },
  updateFilterName ({ commit }, { name }) {
    commit(types.UPDATE_FILTER_NAME, {name})
  },
  updateFilterStars ({ commit }, { star }) {
    commit(types.UPDATE_FILTER_STARS, {star})
  },
  updateFilterPrice ({ commit }, { min, max, value }) {
    commit(types.UPDATE_FILTER_PRICE, {min, max, value})
  }
}
