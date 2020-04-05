import request from './request'

const getTenantDetail = tenantId => request ({
  url: `/business/tenant/info/${tenantId}`
})
const updateTenant = tenant => request ({
  url: '/business/tenant/update'
})
const 
export {
  getTenantDetail,
  updateTenant
}