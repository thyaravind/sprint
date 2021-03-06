import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blank',
    name: 'Blank',
    component: HelloWorld
  },
]

const router = new VueRouter({
  routes
})

export default router
