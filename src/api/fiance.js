import requst from './request'

const getDiaryReportList = () => requst({
  url: '/fiance/list'
})

export {
  getDiaryReportList
}
