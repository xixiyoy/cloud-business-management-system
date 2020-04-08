import request from './request'

const updateSysInfo = user => request({
  url: '/sys/user/update',
  method: 'POST',
  data: user
})
const getSysInfo = userId => request({
  url: `/sys/user/${userId}`
})
const updatePassWord = userId => request({
  url: `/sys/user/password/${userId}`
})
export {
  updateSysInfo,
  getSysInfo,
  updatePassWord
}
