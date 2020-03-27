import requst from './request'

const getServiceCompanyInformation = tenantCompanyId => requst ({
  url: `/tenantCompany/info/${tenantCompanyId}`
})
const getCompanyList = () => requst ({
  url: '/tenantCompany/list'
})
export {
  getServiceCompanyInformation,
  getCompanyList
}