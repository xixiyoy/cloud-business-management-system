import request from './request'

const flowLists = () => request({
  url: '/flow/list'
})
const updateFlow = flow => request({
  url: '/flow/update',
  method: 'POST',
  data: flow
})

export {
  flowLists,
  updateFlow
}
