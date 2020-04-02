import { getBillings, createInvoice, updateInvoice, getBillingDetail } from '../../api/invoice'

const state = {
  billings: {},
  invoice: {}
}

const mutations = {
  'SET_BILLINGS' (state, billings) {
    state.billings = billings
  },
  'SET_BILLING' (state, invoice) {
    state.invoice = invoice
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
  },
  async getBillingById ({ commit }, invoiceId) {
    const { data: invoice } = await getBillingDetail(invoiceId)
    commit('SET_BILLING', invoice)
  },
  async updateInvoice ({ commit }, updateInvoiceForm) {
    await updateInvoice(updateInvoiceForm)
  }
}

export default {
  state,
  actions,
  mutations
}
