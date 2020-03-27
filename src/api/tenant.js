import request from './request'

const getCnterpriseInformation = tenantId => request ({
  url: `/business/tenant/info/${tenantId}`
})
const getUpdateTent = () => request ({
  url: '/business/tenant/update'
})
const 
export {
  getCnterpriseInformation,
  getUpdateTent
}