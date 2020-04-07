import { getTaskList, createtask, getTaskDetail, updateTask } from '../../api/task'

const state = {
  tasks: {},
  task: {}
}
const mutations = {
  'SET_TASKS' (state, tasks) {
    state.tasks = tasks
  },
  'SET_TASK' (state, task) {
    state.task = task
  }
}
const actions = {
  async getTaskList ({ commit }, getTaskFrom) {
    const { limit, page } = getTaskFrom
    const { data: tasks } = await getTaskList(limit, page)
    commit('SET_TASKS', tasks)
  },
  async createtask ({ commit }, createtaskForm) {
    const response = await createtask(createtaskForm)
    console.log(response)
  },
  async getTaskById ({ commit }, taskId) {
    const response = await getTaskDetail(taskId)
    const task = response.data.task
    commit('SET_TASK', task)
  },
  async updateTask ({ commit }, updateTaskForm) {
    await updateTask(updateTaskForm)
  }
}
export default {
  state,
  actions,
  mutations
}
