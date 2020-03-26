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

const logout = () => request({
  url: '/logout'
})

export {
  loginByUserNameAndPassword,
  logout
}
