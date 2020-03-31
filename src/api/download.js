import request from './request'

const getDownloadList = (limit, page) => request({
  url: '/download/list',
  params: {
    limit,
    page
  }
})

export {
  getDownloadList
}
