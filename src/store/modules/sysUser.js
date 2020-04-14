import { updateSysInfo, getSysInfo, updatePassWord, getUserList } from '../../api/sysUser'

const state = {
  user: {},
  users: {}
}

const mutations = {
  'SET_USER' (state, user) {
    state.user = user
  },
  'SET_USERS' (state, users) {
    state.users = users
  }

}
const actions = {
  async getSysInfo ({ commit }) {
    const response = await getSysInfo()
    const user = response.data
    commit('SET_USER', user)
  },
  async updateSysInfo ({ commit }, updateUserInfo) {
    await updateSysInfo(updateUserInfo)
  },
  async updatePassWord ({ commit }, modifyPassWord) {
    await updatePassWord(modifyPassWord)
  },
  async getUserList ({ commit }, getUserListForm) {
    const { data: users } = await getUserList(getUserListForm)
    commit('SET_USERS', users)
  }
}

export default {
  state,
  actions,
  mutations
}
