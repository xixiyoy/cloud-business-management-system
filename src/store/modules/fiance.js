import {
  getDiaryReportList,

  // 2.1 导入之前 api 中导出的方法
  createFiance,
  updateFiance,
  getFianceDetail
} from '../../api/fiance'

const state = {
  fiances: [],
  fiance: {}
}

const mutations = {
  'SET_FIANCES' (state, fiances) {
    state.fiances = fiances
  },
  'SET_FIANCE' (state, fiance) {
    state.fiance = fiance
  }
}

const actions = {
  async getDiaryReportList ({ commit }, getDiaryReportForm) {
    const { page, limit } = getDiaryReportForm
    const { data: fiances } = await getDiaryReportList(page, limit)
    commit('SET_FIANCES', fiances)
  },

  // 2.2 在 actions 中写方法
  async createFiance ({ commit }, createFianceForm) {
    // 调用上面导入的方法
    const { data: { code, msg } } = await createFiance(createFianceForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async updateFiance ({ commit }, updateFianceForm) {
    const { data: { code, msg } } = await updateFiance(updateFianceForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async getFianceById ({ commit }, fianceId) {
    const { data: fiance } = await getFianceDetail(fianceId)
    commit('SET_FIANCE', fiance)
  }
}

export default {
  state,
  actions,
  mutations
}
