import request from './request'

const getBillings = (type, limit, page) => request({
  url: '/invoice/list',
  params: {
    type,
    limit,
    page
  }
})

const createInvoice = createInvoiceForm => request({
  url: '/invoice/add',
  method: 'POST',
  params: createInvoiceForm
})

export {
  getBillings,
  createInvoice
}
