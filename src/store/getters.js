export default {
  getFilters: state => {
    return state.filters
  },
  getHotels: (state) => {
    return state.results
  },
  getPagination: (state) => {
    return state.pagination
  }
}
