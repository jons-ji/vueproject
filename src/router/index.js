import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import Hangkong from '@/views/hangkong.vue'
import High_speed from "../views/High_speed.vue"

Vue.use(VueRouter)

const routes = [
     {
       path: '/',
       component: home
     },
     {
        path:"/hangkong",
        name:"航空",
        component:Hangkong
     },
     {
      path:"/high_speed",
      name:"高铁",
      component:High_speed
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
