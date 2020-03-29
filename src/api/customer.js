import request from './request'

const createCustomer = customer => request({
  url: '/customer/add',
  method: 'POST',
  data: customer
})

const getCustomers = (type, limit, page) => request({
  url: '/customer/list',
  params: {
    type,
    limit,
    page
  }
})
const getCustomerDetail = customerId => request({
  url: `/customer/detail/${customerId}`
})
export {
  createCustomer,
  getCustomers,
  getCustomerDetail
}
