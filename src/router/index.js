import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'

import Detailcountry from '../components/Detailcountry.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  
  {
    path:'/detailcountry/:name',
    name:'detailcountry',
    component:Detailcountry
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
