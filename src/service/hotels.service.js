import axios from 'axios'
import { filtersToString } from '../lib/url.search.params'
export default {

  fetchHotels (filters) {
    const URL_API = 'http://localhost:8081/api/hotels'
    let filtersStr = filtersToString(filters, true)
    let url = `${URL_API}?${filtersStr}`
    return axios.get(url)
          .then(response => {
            return response.data
          })
  }
}
