import { getBillings, createInvoice, updateInvoice, getBillingDetail, cancelInvoice, confrimInvoice, deleteInvoice, rejectInvoice } from '../../api/invoice'

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
  // 获取开票列表
  async getBillings ({ commit }, getBillingListForm) {
    const { data: billings } = await getBillings(getBillingListForm)
    commit('SET_BILLINGS', billings)
  },
  // 创建开票
  async createInvoice ({ commit }, createInvoiceFrom) {
    const response = await createInvoice(createInvoiceFrom)
    console.log(response)
  },
  // 获取开票详情
  async getBillingById ({ commit }, invoiceId) {
    const { data: invoice } = await getBillingDetail(invoiceId)
    commit('SET_BILLING', invoice)
  },
  // 修改开票
  async updateInvoice ({ commit }, updateInvoiceForm) {
    const { data: { code, msg } } = await updateInvoice(updateInvoiceForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  // 作废开票
  async cancelInvoice ({ commit }, cancelInvoiceForm) {
    const { data: { code, msg } } = await cancelInvoice(cancelInvoiceForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  // 确认开票
  async confrimInvoice ({ commit }, confrimInvoiceForm) {
    const { data: { code, msg } } = await confrimInvoice(confrimInvoiceForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  // 撤回申请
  async deleteInvoice ({ commit }, deleteInvoiceForm) {
    const { data: { code, msg } } = await deleteInvoice(deleteInvoiceForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  // 驳回申请
  async rejectInvoice ({ commit }, rejectInvoiceForm) {
    const { data: { code, msg } } = await rejectInvoice(rejectInvoiceForm)
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
