import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/views/Home'
import Details from '@/components/views/Details'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/results', name: 'results', component: Home },
    { path: '/details/:id', name: 'details', component: Details, props: true }
  ]
})
