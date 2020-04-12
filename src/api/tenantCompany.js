import request from './request'

const getServiceCompanyDetail = tenantCompanyId => request({
  url: `/tenantCompany/info/${tenantCompanyId}`
})
const getCompanyList = (limit, page) => request({
  url: '/tenantCompany/list',
  params: {
    limit,
    page
  }
})
const createServiceCompany = createServiceCompanyFrom => request({
  url: '/tenantCompany/save',
  method: 'POST',
  data: createServiceCompanyFrom
})
const updateServiceCompany = serviceCompany => request({
  url: '/tenantCompany/update',
  method: 'POST',
  data: serviceCompany
})
const deleteServiceCompany = tenantCompanyIds => request({
  url: '/tenantCompany/delete',
  method: 'POST',
  data: {
    tenantCompanyIds
  }
})
export {
  getServiceCompanyDetail,
  getCompanyList,
  createServiceCompany,
  updateServiceCompany,
  deleteServiceCompany
}
