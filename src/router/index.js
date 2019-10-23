import Vue from 'vue'
import VueRouter from 'vue-router'
import Gender from '../views/Gender.vue'
import Hobby from '../views/Hobby.vue'
import Introduce from '../views/Introduce.vue'
import Result from '../views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
        path: '/',
        name: 'gender',
        component:Gender
  },
  {
    path: '/gender',
    name: 'gender',
    component:Gender
  },
  {
     path:'/hobby',
     name:'hobby',
     component:Hobby
  },
  {
     path: '/introduce',
     name: 'introduce',
     component:Introduce
  },
  {
     path:'/result',
     name:'result',
     component:Result
  }
]

const router = new VueRouter({
  routes
})

export default router
