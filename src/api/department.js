import request from './request'

const getDeptList = () => request({
  url: '/sys/dept/list'
})
const getDeptMembers = () => request({
  url: 'sys/user/colleague'
})

export {
  getDeptList,
  getDeptMembers
}
