import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Details from '../components/Details.vue'
import Detailcountry from '../components/Detailcountry.vue'
// import CountryDetail from '../components/CountryDetail.vue'
const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path:'/details',
    name:'Details',
    component:Details
  },
  {
    path:'/detailcountry/:name',
    name:'detailcountry',
    component:Detailcountry
  },
 
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
