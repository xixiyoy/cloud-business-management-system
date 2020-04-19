import request from './request'

const uploadFile = (formData, uploadFileForm) => request({
  url: '/file/upload',
  method: 'POST',
  data: formData,
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  params: uploadFileForm
})

export {
  uploadFile
}
