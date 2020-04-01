import request from './request'

const createProduct = createProductForm => request({
  url: '/product/save',
  method: 'POST',
  params: createProductForm
})

const getServiceProductList = (limit, page) => request({
  url: '/product/list',
  params: {
    limit,
    page
  }
})

export {
  getServiceProductList,
  createProduct
}
