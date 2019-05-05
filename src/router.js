import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import RestaurantsIndex from './views/RestaurantsIndex.vue'
import Vegan from './views/Vegan.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: RestaurantsIndex 
    },
    {
      path: '/vegan',
      name: 'vegan',
      component: Vegan
    },
  ]
})
