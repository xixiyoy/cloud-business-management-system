import { getTenantAccountList, createTenantAccount, getTenantAccountDetail, updateTenantAccount, deleteTenantAccount } from '../../api/tenantCollectAccount'

const state = {
  tenantAccounts: {},
  tenantAccount: {}
}

const mutations = {
  'SET_TENANTACCOUNTS' (state, tenantAccounts) {
    state.tenantAccounts = tenantAccounts
  },
  'SET_TENANTACCOUNT' (state, tenantAccount) {
    state.tenantAccount = tenantAccount
  }
}

const actions = {
  async getTenantAccountList ({ commit }) {
    const { data: { msg, code, page } } = await getTenantAccountList()
    if (code !== 0) {
      return Promise.reject(msg)
    }
    commit('SET_TENANTACCOUNTS', page.list)
  },
  async createTenantAccount ({ commit }, createTenantAccountFrom) {
    const response = await createTenantAccount(createTenantAccountFrom)
    console.log(response)
  },
  async getTenantAccountById ({ commit }, tenantCollectAccountIds) {
    const response = await getTenantAccountDetail(tenantCollectAccountIds)
    const tenantAccount = response.data.tenantAccount
    commit('SET_TENANTACCOUNT', tenantAccount)
  },
  async updateTenantAccount ({ commit }, updateTenantAccountForm) {
    await updateTenantAccount(updateTenantAccountForm)
  },
  async deleteTenantAccount ({ commit }, tenantCollectAccountIds) {
    await deleteTenantAccount(tenantCollectAccountIds)
  }
}
export default {
  state,
  actions,
  mutations
}
