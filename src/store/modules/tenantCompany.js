import { getServiceCompanyDetail, getCompanyList, createServiceCompany, updateServiceCompany, deleteServiceCompany } from '../../api/tenantCompany'

const state = {
  serviceCompanys: {
    page: {
      list: []
    }
  },
  serviceCompany: {}
}
const mutations = {
  'SET_SERVICECOMPANYS' (state, serviceCompanys) {
    state.serviceCompanys.page.list = serviceCompanys.page.list
  },
  'SET_SERVICECOMPANY' (state, serviceCompany) {
    state.serviceCompany = serviceCompany
  }
}
const actions = {
  async getCompanyList ({ commit }, getServiceCompanyFrom) {
    const { limit, page } = getServiceCompanyFrom
    const { data: serviceCompanys } = await getCompanyList(limit, page)
    commit('SET_SERVICECOMPANYS', serviceCompanys)
  },
  async createServiceCompany ({ commit }, createServiceCompanyForm) {
    await createServiceCompany(createServiceCompanyForm)
  },
  async getServiceCompanyById ({ commit }, tenantCompanyId) {
    const response = await getServiceCompanyDetail(tenantCompanyId)
    const serviceCompany = response.data.serviceCompany
    commit('SET_SERVICECOMPANY', serviceCompany)
  },
  async updateServiceCompany ({ commit }, updateServiceCompanyForm) {
    await updateServiceCompany(updateServiceCompanyForm)
  },
  async deleteServiceCompany ({ commit }, tenantCompanyIds) {
    const { data: { code, msg } } = await deleteServiceCompany(tenantCompanyIds)
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
