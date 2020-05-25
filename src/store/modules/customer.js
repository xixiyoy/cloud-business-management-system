import { getCustomers, getCustomerDetail, updateCustomer, createCustomer } from '../../api/customer'

const state = {
  customers: [],
  customer: {
    customerId: 101,
    tenantId: 1,
    customerName: '迟金鹏',
    creditCode: '12345678',
    customerFromWay: '同事',
    customerFromDetail: '孟星驰',
    customerLinkerName: '暴力名',
    customerLinkerPhone: '12345678',
    customerBusinessPhone: null,
    customerBusinessEmail: 'sfsf',
    customerAddress: '放松放松',
    customerStatusValue: '0',
    customerStatusName: '服务中',
    customerLevelValue: '1',
    customerLevelName: 'VIP',
    customerRelUserId: 73,
    customerRelUserName: '鲍力铭',
    customerRelDeptId: 7,
    remark: '111',
    createUserId: 2,
    createUserName: '孟星驰',
    createTime: '2020-05-25 23:10:56',
    updateUserId: null,
    updateUserName: null,
    updateTime: null,
    attribute1: null,
    attribute2: null,
    collectStatusValue: '0',
    collectStatusName: '未申请',
    royaltyStatusValue: '0',
    royaltyStatusName: '未申请',
    collectDate: null,
    royaltyDate: null,
    royaltyCoefficient: null,
    accountList: null,
    taskList: [
      {
        taskId: 93,
        longTerm: '1',
        tenant_id: null,
        customerId: 101,
        taskNo: 'DD20200525231056189',
        productId: 28,
        productName: '测试产品',
        price: 0.01,
        number: 1,
        giftNumber: 0,
        taxDate: null,
        completeCount: 0,
        taskStatusValue: '1',
        taskStatusName: '服务中',
        serviceStartMonth: null,
        relUserId: 1,
        relUserName: '超级管理员',
        relDeptId: 1,
        relDeptName: null,
        relHelpUserId: null,
        relHelpUserName: '',
        transferredUserId: null,
        transferredUserName: null,
        receiveUserId: null,
        receiveUserName: null,
        createUserId: 2,
        createUserName: '孟星驰',
        createTime: '2020-05-25 23:10:56',
        updateUserId: null,
        updateUserName: null,
        updateTime: null,
        payCycle: '',
        stopReason: null,
        completeProgress: null,
        taskFlowList: null
      }
    ],
    fileList: [
      {
        fileId: 50,
        dataId: 101,
        type: 'customer',
        fileName: '用于测试',
        fileType: '电子合同',
        size: '28.89K',
        upTime: '2020-05-25 23:10:30',
        upUserId: 2,
        upUserName: '孟星驰',
        fileUrl: '/data/wwwroot/default/files/1590419430565.jpg',
        realPath: '/data/wwwroot/default/files',
        realName: '1590419430565.jpg',
        tenantId: 1
      }
    ],
    latestCollectId: null,
    latestRoyaltyId: null,
    newestTask: null
  }
}

const mutations = {
  'SET_CUSTOMERS' (state, customers) {
    state.customers = customers
  },
  'SET_CUSTOMER' (state, customer) {
    state.customer = customer
  }
}

const actions = {
  async getCustomers ({ commit }, getCustomersForm) {
    const { data: customers } = await getCustomers(getCustomersForm)
    commit('SET_CUSTOMERS', customers)
  },
  async getCustomerById ({ commit }, customerId) {
    const response = await getCustomerDetail(customerId)
    const customer = response.data.customer.customer
    commit('SET_CUSTOMER', customer)
  },
  async updateCustomer ({ commit }, updateCustomerForm) {
    await updateCustomer(updateCustomerForm)
  },
  async createCustomer ({ commit }, createCustomerForm) {
    const { data: { code, msg } } = await createCustomer(createCustomerForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  }
}

export default {
  state,
  actions,
  mutations
}
