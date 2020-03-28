import request from './request'

const createProduct = product => request({
  url: '/business/product/save',
  method: 'POST',
  data: product
})

export {
  createProduct
}
