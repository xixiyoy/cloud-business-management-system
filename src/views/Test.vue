<template>
  <div class="test">
    <img src="http://39.100.120.137:8080/captcha.jpg?t=1585229310369"/>
    <el-input v-model="form.userName"></el-input>
    <el-input v-model="form.password"></el-input>
    <el-input v-model="form.captcha"></el-input>
    <el-button @click="handleLoginButtonClick">登录</el-button>
    <el-button @click="handleLogoutButtonClick">注销</el-button>
  </div>
</template>

<script>
import { loginByUserNameAndPassword, logout } from '../api/sys.login'

export default {
  metaInfo: {
    title: '测试'
  },
  name: 'Test',
  data () {
    return {
      form: {
        userName: '',
        password: '',
        captcha: ''
      }
    }
  },
  methods: {
    handleLoginButtonClick () {
      const { userName, password, captcha } = this.form
      loginByUserNameAndPassword(userName, password, captcha).then(response => {
        if (response.code === 0) {
          alert('登录成功')
        }
      })
    },
    handleLogoutButtonClick () {
      logout()
    }
  }
}
</script>
