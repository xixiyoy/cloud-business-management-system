import request from './request'

const getLabels = (label) => request({
  url: '/label/list',
  params: {
    label
  }
})

export {
  getLabels
}
