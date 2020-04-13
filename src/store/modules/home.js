import { getHomeBase, getAllTask, getAccountMoney } from '../../api/home'

const state = {
  home: {
    receiveTaskList: []
  },
  task: {},
  accountMoney: {}
}
const mutations = {
  'SET_HOME' (state, home) {
    state.home = home
  },
  'SET_TASK' (state, task) {
    state.task = task
  },
  'SET_ACCOUNTMONEY' (state, accountMoney) {
    state.accountMoney = accountMoney
  }
}
const actions = {
  async getHomeBase ({ commit }, getHomeBaseForm) {
    const { type } = getHomeBaseForm
    const { data: home } = await getHomeBase(type)
    commit('SET_HOME', home)
  },
  async getAllTask ({ commit }, getAllTaskForm) {
    const { type, year } = getAllTaskForm
    const { data: task } = await getAllTask(type, year)
    commit('SET_TASK', task)
  },
  async getAccountMoney ({ commit }, getAccountMoneyForm) {
    const { type, year } = getAccountMoneyForm
    const { data: accountMoney } = await getAccountMoney(type, year)
    commit('SET_ACCOUNTMONEY', accountMoney)
  }
}
export default {
  state,
  actions,
  mutations
}
