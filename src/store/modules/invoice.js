import { getBillings } from '../../api/invoice'

const state = {
  billings: []
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
    console.log(billings)
    commit('SET_BILLINGS', billings)
  }
}

export default {
  state,
  actions,
  mutations
}
