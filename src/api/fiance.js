import requst from './request'

const getDiaryReportList = (page, limit) => requst({
  url: '/fiance/list',
  params: {
    page,
    limit
  }
})

export {
  getDiaryReportList
}
