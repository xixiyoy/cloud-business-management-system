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
    path: '/new-account-page',
    name: 'NewAccountPage',
    component: () => import('../views/NewAccountPage')
  },
  {
    path: '/new-diary-report',
    name: 'NewDiaryReport',
    component: () => import('../views/NewDiaryReport')
  },
  {
    path: '/personal-center',
    name: 'PersonalCenter',
    component: () => import('../views/PersonalCenter')
  }
]

const router = new VueRouter({
  routes
})

export default router
