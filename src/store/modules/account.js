import { getAccounts } from '../../api/account'

const state = {
  accounts: {}
}
const mutations = {
  'SET_ACCOUNTS' (state, accounts) {
    state.accounts = accounts
  }
}
const actions = {
  async getAccounts ({ commit }, getAccountsForm) {
    const { type, limit, page } = getAccountsForm
    const { data: accounts } = await getAccounts(type, limit, page)
    commit('SET_ACCOUNTS', accounts)
  }
}
export default {
  state,
  actions,
  mutations
}
