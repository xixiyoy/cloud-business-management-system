import { getAccounts } from '../../api/account'

const state = {
  accounts: {}
}
const mutations = {
  'SET_ACCOUNTS' (state, accounts) {
    accounts.list = accounts.list.map(account => {
      if (account.customerId === 15) {
        account.collectStatusName = '待确认'
        account.collectStatusValue = '1'
      }
      if (account.customerId === 16) {
        account.collectStatusName = '待确认'
        account.collectStatusValue = '1'
        account.royaltyStatusValue = '0'
        account.royaltyStatusName = '未申请'
      }
      return account
    })
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
