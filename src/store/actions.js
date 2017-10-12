import * as types from './mutation-types'
import service from '../service/hotels.service'

export default {
  // Fetch via AJAX the lists from a board
  loadHotels ({ commit }, { filters }) {
    commit(types.FETCH_HOTELS_REQUEST)
    service.fetchHotels(filters)
      .then(hotels => {
        commit(types.FETCH_HOTELS_SUCCESS, { hotels })
      })
      .catch(error => commit(types.FETCH_HOTELS_FAILURE, { error }))
  }
}
