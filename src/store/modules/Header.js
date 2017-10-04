'use strict'

const store = {
  namespaced: true,
  state: {
    links: ['hola']
  },
  mutations: {
    setLink (state, link) {
      state.links.push(link)
    }
  },
  getters: {
    getLinks: state => state.links
  }
}

export default {
  store
}
