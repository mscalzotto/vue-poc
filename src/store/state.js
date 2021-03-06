export default {
  fetchingData: true,
  error: null,
  results: [],
  filters: {
    name: '',
    star: [],
    limit: 20,
    offset: 0,
    price_range: {
      value: [0, 4000],
      max: 5000,
      min: 50,
      change: false,
      options: {
        floor: 0,
        ceil: 8000
      }
    }
  }
}
