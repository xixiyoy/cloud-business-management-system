import { getCustomers, getCustomerDetail, updateCustomer, createCustomer } from '../../api/customer'

const state = {
  customers: [],
  customer: {
    taskList: [],
    newestTask: {}
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
    const { type, limit, page } = getCustomersForm
    const { data: customers } = await getCustomers(type, limit, page)
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
