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

const transferTask = transferTaskForm => request({
  url: '/task/transfer',
  method: 'POST',
  params: transferTaskForm
})

export {
  getTaskList,
  createtask,
  getTaskDetail,
  updateTask,
  transferTask
}
