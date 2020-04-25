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
    const { data: { code, msg } } = await updateSysInfo(updateUserInfo)
    if (code !== 0) {
      return Promise.reject(msg)
    }
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
