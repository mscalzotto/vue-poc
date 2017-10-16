export default {
  getFilterName: state => {
    return state.filters.name
  },
  getHotels: (state) => {
    return state.results
  },
  getPagination: (state) => {
    return state.pagination
  }
}
