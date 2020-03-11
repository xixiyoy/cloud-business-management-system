import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('../views/Account')
  },
  {
    path: '/flow',
    name: 'Flow',
    component: () => import('../views/Flow')
  },
  {
    path: '/diaryReport',
    name: 'DiaryReport',
    component: () => import('../views/DiaryReport')
  },
  {
    path: '/billingList',
    name: 'BillingList',
    component: () => import('../views/BillingList')
  },
  {
    path: '/ServiceProduct',
    name: 'ServiceProduct',
    component: () => import('../views/ServiceProduct')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/newAccountPage',
    name: 'NewAccountPage',
    component: () => import('../views/NewAccountPage')
  },
  {
    path: '/newDiaryReport',
    name: 'NewDiaryReport',
    component: () => import('../views/NewDiaryReport')
  }
]

const router = new VueRouter({
  routes
})

export default router
