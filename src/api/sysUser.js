import request from './request'

const updateSysInfo = user => request({
  url: '/sys/user/update',
  method: 'POST',
  data: user
})
const getSysInfo = () => request({
  url: '/sys/user/info'
})
const updatePassWord = userId => request({
  url: `/sys/user/password/${userId}`
})
const getUserList = () => request({
  url: '/sys/user/list'
})
export {
  updateSysInfo,
  getSysInfo,
  updatePassWord,
  getUserList
}
