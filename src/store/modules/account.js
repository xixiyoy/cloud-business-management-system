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
    const { type, limit, page, year } = getAccountsForm
    const { data: accounts } = await getAccounts(type, limit, page, year)
    commit('SET_ACCOUNTS', accounts)
  }
}
export default {
  state,
  actions,
  mutations
}
