import request from './request'

const getFlowConfigs = () => request({
  url: '/flow/list'
})
const updateFlowConfig = updateFlowConfigForm => request({
  url: '/flow/update',
  method: 'POST',
  data: updateFlowConfigForm
})

export {
  getFlowConfigs,
  updateFlowConfig
}
