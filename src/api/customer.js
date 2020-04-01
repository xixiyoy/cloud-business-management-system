import request from './request'

const updateCustomer = customer => request({
  url: '/customer/update',
  method: 'POST',
  data: customer
})

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
  getCustomerDetail,
  updateCustomer
}
