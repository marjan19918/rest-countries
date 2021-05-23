import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import page404 from '../components/page404.vue'
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
  {
    path:'/:catchAll(.*)*',
    name:'page404',
    component:page404
  }
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
