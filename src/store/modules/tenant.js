import { getTenantDetail, updateTenant } from '../../api/tenant'

const state = {
  tenant: {}
}

const mutations = {
  'SET_TENANT' (state, tenant) {
    state.tenant = tenant
  }
}

const actions = {
  async getTenantById ({ commit }) {
    const response = await getTenantDetail()
    const tenant = response.data.tenant
    console.log(tenant)
    commit('SET_TENANT', tenant)
  },
  async updateTenant ({ commit }, updateTenantForm) {
    await updateTenant(updateTenantForm)
  }
}

export default {
  state,
  actions,
  mutations
}
