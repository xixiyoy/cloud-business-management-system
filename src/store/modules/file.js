import { uploadFile } from '../../api/file'

const state = {
  file: {}
}

const mutations = {
  'SET_FILE' (state, file) {
    state.file = file
  }
}

const actions = {
  async uploadFile ({ commit }, { formData, uploadFileForm }) {
    console.log(formData)
    console.log(uploadFileForm)
    const { data: { code, msg, file } } = await uploadFile(formData, uploadFileForm)
    if (code !== 0) {
      return Promise.reject(msg)
    } else {
      commit('SET_FILE', file)
    }
  }
}

export default {
  state,
  mutations,
  actions
}
