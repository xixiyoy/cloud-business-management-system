import { updateSysInfo, getSysInfo, updatePassWord } from '../../api/sysUser'

const state = {
  user: {}
}

const mutations = {
  'SET_USER' (state, user) {
    state.user = user
  }
}
const actions = {
  async getSysInfoById ({ commit }, userId) {
    const response = await getSysInfo(userId)
    const user = response.data.user
    commit('SET_USER', user)
  },
  async updateSysInfo ({ commit }, updateUserInfo) {
    await updateSysInfo(updateUserInfo)
  },
  async updatePassWord ({ commit }, modifyPassWord) {
    await updatePassWord(modifyPassWord)
  }
}

export default {
  state,
  actions,
  mutations
}
