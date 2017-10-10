import Vue from 'vue'
import Router from 'vue-router'

import Results from '@/components/views/Results'
import Details from '@/components/views/Details'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Results },
    { path: '/results', name: 'results', component: Results, props: true },
    { path: '/details/:id', name: 'details', component: Details, props: true }
  ]
})
