import request from './request'
// 代账报表导出
const exportAccount = exportAccount => request({
  url: '/excel/export/account',
  method: 'POST',
  data: exportAccount
})
// 客户导出
const exportCustomer = exportCustomer => request({
  url: '/excel/export/customer',
  method: 'POST',
  data: exportCustomer
})
// 日记帐单导出
const exportFiance = exportFiance => request({
  url: '/excel/export/fiance',
  method: 'POST',
  data: exportFiance
})
// 开票导出
const exportInvoice = exportInvoice => request({
  url: '/excel/export/invoice',
  method: 'POST',
  data: exportInvoice
})
// 流程导出
const exportTask = exportTask => request({
  url: '/excel/export/task',
  method: 'POST',
  data: exportTask
})
// 发放提成导出
const exportRoyalty = exportRoyalty => request({
  url: '/excel/export/account/royalty',
  params: exportRoyalty
})
export {
  exportAccount,
  exportCustomer,
  exportFiance,
  exportInvoice,
  exportTask,
  exportRoyalty
}