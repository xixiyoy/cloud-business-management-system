import request from './request'

const getTaskList = (type, limit, page) => request({
  url: '/task/list',
  params: {
    type,
    limit,
    page
  }
})
const createtask = createtaskForm => request({
  url: '/task/add',
  method: 'POST',
  data: createtaskForm
})
const getTaskDetail = taskId => request({
  url: `/task/detail/${taskId} `
})
const updateTask = taskId => request({
  url: '/task/update',
  method: 'POST',
  data: taskId
})
// 交接任务
const transferTask = transferTaskForm => request({
  url: '/task/transfer',
  method: 'POST',
  params: transferTaskForm
})
// 撤回任务
const cancelTask = cancelTaskForm => request({
  url: '/task/cancelRel',
  method: 'POST',
  params: cancelTaskForm
})
// 接收任务
const receiveTask = receiveTaskForm => request({
  url: '/task/receiveTask',
  method: 'POST',
  params: receiveTaskForm
})
// 完成记账
const completeTask = completeTaskForm => request({
  url: '/task/completeTask',
  method: 'POST',
  params: completeTaskForm
})
// 终止任务
const stopTask = stopTaskForm => request({
  url: '/task/stopTask',
  params: stopTaskForm
})

const backTask = backTaskForm => request({
  url: '/task/backTask',
  params: backTaskForm
})

export {
  getTaskList,
  createtask,
  getTaskDetail,
  updateTask,
  transferTask,
  cancelTask,
  receiveTask,
  completeTask,
  stopTask,
  backTask
}
