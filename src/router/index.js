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
    path: '/modify-account-detail',
    name: 'ModifyAccountDetail',
    component: () => import('../views/ModifyAccountDetail')
  },
  {
    path: '/flow',
    name: 'Flow',
    component: () => import('../views/Flow')
  },
  {
    path: '/once-flow',
    name: 'OnceFlow',
    component: () => import('../views/OnceFlow')
  },
  {
    path: '/download-center',
    name: 'DownloadCenter',
    component: () => import('../views/DownloadCenter')
  },
  {
    path: '/agent-bookkeeping',
    name: 'AgentBookkeeping',
    component: () => import('../views/AgentBookkeeping')
  },
  {
    path: '/one-time-accounting',
    name: 'OneTimeAccounting',
    component: () => import('../views/OneTimeAccounting')
  },
  {
    path: '/diary-report',
    name: 'DiaryReport',
    component: () => import('../views/DiaryReport')
  },
  {
    path: '/view-diary-report',
    name: 'ViewDiaryReport',
    component: () => import('../views/ViewDiaryReport')
  },
  {
    path: '/modify-view-diary-report',
    name: 'ModifyViewDiaryReport',
    component: () => import('../views/ModifyViewDiaryReport')
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
    path: '/apply-invoicing',
    name: 'ApplyInvoicing',
    component: () => import('../views/ApplyInvoicing')
  },
  {
    path: '/view-invoicing',
    name: 'ViewInvoicing',
    component: () => import('../views/ViewInvoicing')
  },
  {
    path: '/modify-view-invoicing',
    name: 'ModifyViewInvoicing',
    component: () => import('../views/ModifyViewInvoicing')
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
    path: '/view-account',
    name: 'ViewAccount',
    component: () => import('../views/ViewAccount')
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
    path: '/modify-product',
    name: 'ModifyProduct',
    component: () => import('../views/ModifyProduct')
  },
  {
    path: '/create-channel-provider',
    name: 'CreateChannelProvider',
    component: () => import('../views/CreateChannelProvider')
  },
  {
    path: '/view-channel-provider',
    name: 'ViewChannelProvider',
    component: () => import('../views/ViewChannelProvider')
  },
  {
    path: '/modify-channel-provider',
    name: 'ModifyChannelProvider',
    component: () => import('../views/ModifyChannelProvider')
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
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test')
  },
  {
    path: '/new-test',
    name: 'NewTest',
    component: () => import('../views/NewTest')
  }
]

const router = new VueRouter({
  routes
})

export default router
