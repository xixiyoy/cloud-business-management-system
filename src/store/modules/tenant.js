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
  async getTenantById ({ commmit }, tenantId) {
    const response = await getTenantDetail(tenantId)
    const tenant = response.data.page
    console.log(tenant)
    commmit('SET_TENANT', tenant)
  },
  async updateTenant ({ commmit }, updateTenantForm) {
    await updateTenant(updateTenantForm)
  }
}

export default {
  state,
  actions,
  mutations
}
