import { getAccounts } from '../../api/account'

const state = {
  accounts: []
}

const mutations = {
  'SET_ACCOUNTS' (state, accounts) {
    state.accounts = accounts
  }
}

const actions = {
  async getAccounts ({ commit }) {
    const { data: accounts } = await getAccounts()
    commit('SET_ACCOUNTS', accounts)
  }
}

export default {
  state,
  actions,
  mutations
}
