import request from './request'

const getDeptList = () => request({
  url: '/sys/dept/list'
})

export {
  getDeptList
}
