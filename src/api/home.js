import request from './request'

const getHomeBase = (type) => request({
  url: '/home/base',
  params: { type }
})
const getAllTask = (type, year) => request({
  url: '/home/allTask',
  params: { type, year }
})
const getAccountMoney = (type, year) => request({
  url: '/home/accountMoney',
  params: { type, year }
})
export {
  getHomeBase,
  getAllTask,
  getAccountMoney
}
