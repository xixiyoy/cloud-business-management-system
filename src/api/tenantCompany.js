import request from './request'

const getServiceCompanyDetail = tenantCompanyId => request({
  url: `/tenantCompany/info/${tenantCompanyId}`
})
const getCompanyList = () => request({
  url: '/tenantCompany/list'
})
const createServiceCompany = createServiceCompanyFrom => request({
  url: '/tenantCompany/save',
  method: 'POST',
  params: createServiceCompanyFrom
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
