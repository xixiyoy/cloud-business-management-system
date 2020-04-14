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
  params: createtaskForm
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
const getCancelTask = taskId => request({
  url: '/task/cancelRel',
  method: 'POST',
  data: taskId
})
// 接收任务
const getReceiveTask = (taskId, remark) => request({
  url: '/task/receiveTask',
  method: 'POST',
  data: taskId,
  remark
})
// 完成记账
const getCompleteTask = (taskId, remark) => request({
  url: '/task/completeTask',
  method: 'POST',
  data: taskId,
  remark
})
// 终止任务
const getStopTask = (taskId, remark) => request({
  url: '/task/stopTask',
  params: {
    taskId,
    remark
  }
})
export {
  getTaskList,
  createtask,
  getTaskDetail,
  updateTask,
  transferTask,
  getCancelTask,
  getReceiveTask,
  getCompleteTask,
  getStopTask
}
