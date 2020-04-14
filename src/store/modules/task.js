import { getTaskList, createtask, getTaskDetail, updateTask, transferTask, getCancelTask, getReceiveTask, getCompleteTask, getStopTask } from '../../api/task'

const state = {
  tasks: {},
  task: {
    baseInformation: {
      task: {
        taskId: 12,
        longTerm: '0',
        tenant_id: null,
        customerId: 16,
        taskNo: 'DD20200328174005240',
        productId: 1,
        productName: '代理记账',
        price: 200,
        number: 10,
        giftNumber: 2,
        taxDate: '2020-03-01 00:00:00',
        completeCount: 0,
        taskStatusValue: '1',
        taskStatusName: '服务中',
        serviceStartMonth: '2020-03-01 00:00:00',
        relUserId: 2,
        relUserName: '孟星驰',
        relDeptId: 7,
        relDeptName: null,
        relHelpUserId: null,
        relHelpUserName: null,
        transferredUserId: null,
        transferredUserName: null,
        receiveUserId: null,
        receiveUserName: null,
        createUserId: 2,
        createUserName: '孟星驰',
        createTime: '2020-03-28 17:40:05',
        updateUserId: null,
        updateUserName: null,
        updateTime: null,
        payCycle: '月付',
        completeProgress: null,
        taskFlowList: null
      },
      customer: {
        customerId: 16,
        tenantId: 1,
        customerName: '企享云-测试客户1',
        creditCode: '91845555',
        customerFromWay: '来源',
        customerFromDetail: '详细来源',
        customerLinkerName: '客户联系人',
        customerLinkerPhone: '18913932254',
        customerBusinessPhone: null,
        customerBusinessEmail: null,
        customerAddress: null,
        customerStatusValue: '0',
        customerStatusName: '服务中',
        customerLevelValue: '0',
        customerLevelName: '普通',
        customerRelUserId: 2,
        customerRelUserName: '孟星驰',
        customerRelDeptId: 7,
        remark: null,
        createUserId: 2,
        createUserName: '孟星驰',
        createTime: '2020-03-28 17:40:05',
        updateUserId: null,
        updateUserName: null,
        updateTime: null,
        attribute1: null,
        attribute2: null,
        collectStatusValue: null,
        collectStatusName: null,
        royaltyStatusValue: null,
        royaltyStatusName: null,
        collectDate: null,
        royaltyDate: null,
        royaltyCoefficient: null,
        accountList: null,
        taskList: null,
        fileList: null,
        newestTask: null
      }
    },
    relList: [],
    accountInformation: {
      surplusNum: 10,
      surplusGiftNum: 2
    },
    taskFlowList: []
  },
  cancelTask: {},
  receiveTask: {},
  completeTask: {},
  stopTask: {}
}
const mutations = {
  'SET_TASKS' (state, tasks) {
    state.tasks = tasks
  },
  'SET_TASK' (state, task) {
    state.task = task
  },
  'SET_CANCELTASK' (state, cancelTask) {
    state.cancelTask = cancelTask
  },
  'SET_RECEIVETASK' (state, receiveTask) {
    state.receiveTask = receiveTask
  },
  'SET_COMPLETETASK' (state, completeTask) {
    state.completeTask = completeTask
  },
  'SET_STOPTASK' (state, stopTask) {
    state.stopTask = stopTask
  }
}
const actions = {
  async getTaskList ({ commit }, getTaskFrom) {
    const { type, limit, page } = getTaskFrom
    const { data: tasks } = await getTaskList(type, limit, page)
    commit('SET_TASKS', tasks)
  },
  async createtask ({ commit }, createtaskForm) {
    const response = await createtask(createtaskForm)
    console.log(response)
  },
  async getTaskById ({ commit }, taskId) {
    const response = await getTaskDetail(taskId)
    const task = response.data
    commit('SET_TASK', task)
  },
  async updateTask ({ commit }, updateTaskForm) {
    await updateTask(updateTaskForm)
  },
  // 交接任务
  async transferTask ({ commit }, transferTaskForm) {
    await transferTask(transferTaskForm)
  },
  // 撤回任务
  async getCancelTask ({ commit }, getCancelTaskForm) {
    const { taskId } = getCancelTaskForm
    const { data: cancelTask } = await getCancelTask(taskId)
    commit('SET_CANCELTASK', cancelTask)
  },
  // 接收任务
  async getReceiveTask ({ commit }, getreceiveTaskForm) {
    const { taskId, remark } = getreceiveTaskForm
    const { data: receiveTask } = await getReceiveTask(taskId, remark)
    commit('SET_RECEIVETASK', receiveTask)
  },
  // 完成记账
  async getCompleteTask ({ commit }, completeTaskForm) {
    const { taskId, remark } = completeTaskForm
    const { data: completeTask } = await getCompleteTask(taskId, remark)
    commit('SET_COMPLETETASK', completeTask)
  },
  // 终止任务
  async getStopTask ({ commit }, stopTaskForm) {
    const { taskId, remark } = stopTaskForm
    const { data: stopTask } = await getStopTask(taskId, remark)
    commit('SET_STOPTASK', stopTask)
  }
}
export default {
  state,
  actions,
  mutations
}
