<template>
  <div class="test">
    <img src="http://www.qixiangyun.net/captcha.jpg?t=1585229310369"/>
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
<style>
.approval-one{
  width: 12%;
  text-align: center;
  display: inline-block;
  }
.approval-two{
  width: 12%;
  text-align: center;
  display: inline-block;
  margin-left: -25px;
  }
.approval-three{
  width: 12%;
  text-align: center;
  display: inline-block;
  margin-left: -26px;
  }
.approval-four{
  width: 12%;
  text-align: center;
  display: inline-block;
  margin-left: -26px;
  }
.time-line-process{
    width: 100px;
    height: 1px;
    background-color: #606266;
    float: left;
    margin: 31px 0 0 -20px;
}
.approval-content{
    float: left;
}
/* 等待的图标 */
.wait-statu{
  width: 14px;
  height: 14px;
}
/* 完成的图标 */
.approval{
  display: block;
}
</style>
