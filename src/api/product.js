import request from './request'

const getServiceProductList = () => request ({
  url: '/business/product/list',
  params: {
    //这里没有参数怎么写
  }
})
const getProductInformation = (productId) => request ({
  url: `/business/product/info/${productId}`
})
export {
  getServiceProductList,
  getProductInformation
}