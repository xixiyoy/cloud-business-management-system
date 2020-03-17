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
    path: '/account-details',
    name: 'AccountDetails',
    component: () => import('../views/AccountDetails')
  },
  {
    path: '/flow',
    name: 'Flow',
    component: () => import('../views/Flow')
  },
  {
    path: '/diary-report',
    name: 'DiaryReport',
    component: () => import('../views/DiaryReport')
  },
  {
    path: '/agent-report',
    name: 'AgentReport',
    component: () => import('../views/AgentReport')
  },
  {
    path: '/billing-list',
    name: 'BillingList',
    component: () => import('../views/BillingList')
  },
  {
    path: '/service-product',
    name: 'ServiceProduct',
    component: () => import('../views/ServiceProduct')
  },
  {
    path: '/channel-dealer-management',
    name: 'ChannelDealerManagement',
    component: () => import('../views/ChannelDealerManagement')
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
    path: '/create-product',
    name: 'CreateProduct',
    component: () => import('../views/CreateProduct')
  },
  {
    path: '/create-channel-provider',
    name: 'CreateChannelProvider',
    component: () => import('../views/CreateChannelProvider')
  },
  {
    path: '/personal-center',
    name: 'PersonalCenter',
    component: () => import('../views/PersonalCenter')
  },
  {
    path: '/service-provider-management',
    name: 'ServiceProviderManagement',
    component: () => import('../views/ServiceProviderManagement')
  }
]

const router = new VueRouter({
  routes
})

export default router
