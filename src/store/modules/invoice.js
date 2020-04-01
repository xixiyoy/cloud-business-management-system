import { getBillings, createInvoice } from '../../api/invoice'

const state = {
  billings: {}
}

const mutations = {
  'SET_BILLINGS' (state, billings) {
    state.billings = billings
  }
}

const actions = {
  async getBillings ({ commit }, getBillingListForm) {
    const { type, limit, page } = getBillingListForm
    const { data: billings } = await getBillings(type, limit, page)
    commit('SET_BILLINGS', billings)
  },
  async createInvoice ({ commit }, createInvoiceFrom) {
    const response = await createInvoice(createInvoiceFrom)
    console.log(response)
  }
}

export default {
  state,
  actions,
  mutations
}
