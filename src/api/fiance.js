import request from './request'

// 1. 第一步
// 先写 api 接口
// 括号里的是参数
const createFiance = createFianceForm => request({
  url: '/fiance/add',

  // 请求方式
  // 默认为 GET 时不用写
  // 对应 Postman 左边的 GET 和 POST
  method: 'POST',
  params: createFianceForm
})

const getDiaryReportList = (page, limit) => request({
  url: '/fiance/list',
  params: {
    page,
    limit
  }
})

export {
  getDiaryReportList,

  // 1.1 导出 对应上面写的函数名
  createFiance
}
