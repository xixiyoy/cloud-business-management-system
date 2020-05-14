import {
  getDiaryReportList,

  // 2.1 导入之前 api 中导出的方法
  createFiance,
  updateFiance,
  getFianceDetail,
  getTotalCash
} from '../../api/fiance'

const state = {
  fiances: [],
  fiance: {},
  totalCash: {}
}

const mutations = {
  'SET_FIANCES' (state, fiances) {
    state.fiances = fiances
  },
  'SET_FIANCE' (state, fiance) {
    state.fiance = fiance
  },
  'SET_TOTALCASH' (state, totalCash) {
    state.totalCash = totalCash
  }
}

const actions = {
  async getDiaryReportList ({ commit }, getDiaryReportForm) {
    const { data: fiances } = await getDiaryReportList(getDiaryReportForm)
    commit('SET_FIANCES', fiances)
  },
  async getTotalCash  ({ commit }, getTotalCashForm) {
    const { data: totalCash } = await getTotalCash(getTotalCashForm)
    commit('SET_TOTALCASH', totalCash)
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
