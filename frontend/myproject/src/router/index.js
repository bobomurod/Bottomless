import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Investing from '@/components/Investing'
import Homepage from '@/components/Homepage'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/investing',
      name: 'investing',
      component: Investing
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/withdrawPage',
      name: 'withdrawPage',
      component: WithdrawPage
    }
  ]
})
