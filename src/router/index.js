import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import MyHome from 'views/home/MyHome'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: MyHome
  }
]

const router = new VueRouter({
  routes
})

export default router
