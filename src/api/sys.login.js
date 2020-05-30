import request from './request'

const loginByUserNameAndPassword = (userName, password, captcha) => request({
  url: '/sys/login',
  method: 'POST',
  params: {
    username: userName,
    password,
    captcha
  }
})

const loginByPhone = params => request({
  url: '/codeLogin',
  method: 'POST',
  params
})

const logout = () => request({
  url: '/logout'
})

const getCaptcha = phone => request({
  params: {
    phone
  },
  url: '/getVerifyCode',
  method: 'POST'
})

export {
  loginByUserNameAndPassword,
  logout,
  loginByPhone,
  getCaptcha
}
