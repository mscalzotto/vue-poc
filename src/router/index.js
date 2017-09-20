import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Cosas from '@/components/Cosas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/cosas',
      name: 'Cosas',
      component: Cosas
    }
  ]
})
