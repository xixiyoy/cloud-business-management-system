import request from './request'

const getProductDetail = productId => request({
  url: `/product/info/${productId}`
})

const updateProduct = product => request({
  url: '/product/update',
  method: 'POST',
  data: product
})

const deleteProduct = productIds => request({
  url: '/product/delete',
  method: 'POST ',
  data: {
    productIds
  }
})

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
  createProduct,
  deleteProduct,
  updateProduct,
  getProductDetail
}
