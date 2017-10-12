import Request from 'axios'
import Config from './../config'

export default class Hotel {
  constructor () {
    this.url = `${Config.services.Hotel.host}:${Config.services.Hotel.port}${Config.services.Hotel.basepath}/hotel`
  }

  async getHotels () {
    try {
      return await Request.get(this.url)
    } catch (err) {
      throw new Error(err.message)
    }
  }

  getHotelById (id) {

  }
}
