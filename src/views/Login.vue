<template>
  <div class="login">
    <div id="base" class="">

      <!-- 蒙版 (矩形) -->
      <div id="u54" class="ax_default box_3" data-label="蒙版">
        <img id="u54_img" class="img " src="../assets/images/login/蒙版_u54.png"/>
      </div>

      <!-- logo (组 合) -->
      <div id="u55" class="ax_default" data-label="logo" data-left="188" data-top="303" data-width="342" data-height="225">

        <!-- Unnamed (SVG) -->
        <div id="u56" class="ax_default _图片_">
          <img id="u56_img" class="img " src="../assets/images/login/u56.svg"/>
        </div>

        <!-- Unnamed (矩形) -->
        <div id="u57" class="ax_default box_2">
          <div id="u57_div" class=""></div>
          <div id="u57_text" class="text ">
            <p><span>企享云业务管理系统</span></p>
          </div>
        </div>
      </div>

      <!-- 登录窗口 (动态面板) -->
      <div id="u58" class="ax_default" data-label="登录窗口">
        <div id="u58_state0" class="panel_state" data-label="State1" style="">
          <div id="u58_state0_content" class="panel_state_content">

            <!-- Unnamed (矩形) -->
            <div id="u59" class="ax_default box_2">
              <div id="u59_div" class=""></div>
            </div>

            <!-- 1 (组 合) -->
            <div id="u60" class="ax_default" data-label="1" data-left="105" data-top="20" data-width="110" data-height="109">

              <!-- Unnamed (矩形) -->
              <div id="u61" class="ax_default box_2">
                <div id="u61_div" class=""></div>
              </div>

              <!-- Unnamed (矩形) -->
              <div id="u62" class="ax_default box_2" @click="handleAccountTabLoginClick">
                <div id="u62_div" class=""></div>
                <div id="u62_text" class="text ">
                  <p><span>账户登录</span></p>
                </div>
              </div>
            </div>

            <!-- Unnamed (矩形) -->
            <div id="u63" class="ax_default box_2" @click="handleLoginButtonClick">
              <div id="u63_div" class=""></div>
              <div id="u63_text" class="text" style="text-align:center;S">
                <p><span>登&nbsp; 录</span></p>
              </div>
            </div>

            <!-- 账户 (组 合) -->
            <div id="u64" class="ax_default" data-label="账户" data-left="60" data-top="129" data-width="400" data-height="135" v-show="isAccountLoginTabShow">

              <!-- Unnamed (组 合) -->
              <div id="u65" class="ax_default" data-left="60" data-top="129" data-width="400" data-height="48">

                <!-- Unnamed (矩形) -->
                <div id="u66" class="ax_default box_2">
                  <div id="u66_div" class=""></div>
                </div>

                <!-- Unnamed (SVG) -->
                <div id="u67" class="ax_default _图片_">
                  <img id="u67_img" class="img " src="../assets/images/login/u67.svg"/>
                </div>

                <!-- 用户名 (文本框) -->
                <div id="u68" class="ax_default text_field" data-label="用户名">
                  <input id="u68_input" placeholder="请输入用户名" type="text" v-model="accountLoginForm.accountName"/>
                </div>
              </div>

              <!-- Unnamed (组 合) -->
              <div id="u69" class="ax_default" data-left="60" data-top="216" data-width="400" data-height="48">

                <!-- Unnamed (矩形) -->
                <div id="u70" class="ax_default box_2">
                  <div id="u70_div" class=""></div>
                </div>

                <!-- 密码 (文本框) -->
                <div id="u71" class="ax_default text_field" data-label="密码">
                  <input id="u71_input" placeholder="密码" type="password" v-model="accountLoginForm.accountPassword"/>
                </div>

                <!-- Unnamed (SVG) -->
                <div id="u72" class="ax_default _图片_">
                  <img id="u72_img" class="img " src="../assets/images/login/u72.svg"/>
                </div>
              </div>
            </div>

            <!-- Unnamed (组 合) -->
            <div id="u73" class="ax_default" data-left="71" data-top="370" data-width="74" data-height="24">

              <!-- 记住我 (动态面板) -->
              <div id="u74" class="ax_default" data-label="记住我">
                <div id="u74_state0" class="panel_state" data-label="State1" style="">
                  <div id="u74_state0_content" class="panel_state_content">

                    <!-- Unnamed (SVG) -->
                    <div id="u75" class="ax_default _图片_">
                      <img id="u75_img" class="img " src="../assets/images/login/u75.svg"/>
                    </div>
                  </div>
                </div>
                <div id="u74_state1" class="panel_state" data-label="State2" style="visibility: hidden;">
                  <div id="u74_state1_content" class="panel_state_content">

                    <!-- Unnamed (SVG) -->
                    <div id="u76" class="ax_default _图片_">
                      <img id="u76_img" class="img " src="../assets/images/login/u76.svg"/>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Unnamed (矩形) -->
              <div id="u77" class="ax_default box_2">
                <div id="u77_div" class=""></div>
                <div id="u77_text" class="text ">
                  <p><span>记住我</span></p>
                </div>
              </div>
            </div>

            <!-- Unnamed (矩形) -->
            <div id="u78" class="ax_default box_2">
              <div id="u78_div" class=""></div>
              <div id="u78_text" class="text ">
                <p><span>忘记密码？</span></p>
              </div>
            </div>

            <!-- 提示 (动态面板) -->
            <div id="u79" class="ax_default ax_default_hidden" data-label="提示" style="display:none; visibility: hidden">
              <div id="u79_state0" class="panel_state" data-label="用户名或密码错误" style="">
                <div id="u79_state0_content" class="panel_state_content">

                  <!-- Unnamed (矩形) -->
                  <div id="u80" class="ax_default box_2">
                    <div id="u80_div" class=""></div>
                    <div id="u80_text" class="text ">
                      <p><span>用户名或密码不正确！</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u79_state1" class="panel_state" data-label="请输入用户名/手机号/邮箱" style="visibility: hidden;">
                <div id="u79_state1_content" class="panel_state_content">

                  <!-- Unnamed (矩形) -->
                  <div id="u81" class="ax_default box_2">
                    <div id="u81_div" class=""></div>
                    <div id="u81_text" class="text ">
                      <p><span>请输入用户名/手机号/邮箱</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="u79_state2" class="panel_state" data-label="请输入密码" style="visibility: hidden;">
                <div id="u79_state2_content" class="panel_state_content">

                  <!-- Unnamed (矩形) -->
                  <div id="u82" class="ax_default box_2">
                    <div id="u82_div" class=""></div>
                    <div id="u82_text" class="text ">
                      <p><span>请输入登录密码</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2 (组 合) -->
            <div id="u83" class="ax_default" data-label="2" data-left="279" data-top="20" data-width="110" data-height="109">

              <!-- Unnamed (矩形) -->
              <div id="u84" class="ax_default box_2">
                <div id="u84_div" class=""></div>
              </div>

              <!-- Unnamed (矩形) -->
              <div id="u85" class="ax_default box_2" @click="handlePhoneNumberTabLoginClick">
                <div id="u85_div" class=""></div>
                <div id="u85_text" class="text ">
                  <p><span>手机登录</span></p>
                </div>
              </div>
            </div>

            <!-- 手机 (组 合) -->
            <div id="u86" class="ax_default" data-label="手机" data-left="0" data-top="0" data-width="0" data-height="0" v-if="!isAccountLoginTabShow">

              <!-- Unnamed (组 合) -->
              <div id="u87" class="ax_default" data-left="0" data-top="0" data-width="0" data-height="0">

                <!-- Unnamed (矩形) -->
                <div id="u88" class="ax_default box_2">
                  <div id="u88_div" class=""></div>
                </div>

                <!-- Unnamed (SVG) -->
                <div id="u89" class="ax_default _图片_">
                  <img id="u89_img" class="img " src="../assets/images/login/u67.svg"/>
                </div>

                <!-- 用户名 (文本框) -->
                <div id="u90" class="ax_default text_field" data-label="用户名">
                  <input id="u90_input" placeholder="请输入手机号码" type="text" v-model="accountLoginForm.accountPhoneNumber"/>
                </div>
              </div>

              <!-- Unnamed (组 合) -->
              <div id="u91" class="ax_default" data-left="0" data-top="0" data-width="0" data-height="0">

                <!-- Unnamed (矩形) -->
                <div id="u92" class="ax_default box_2">
                  <div id="u92_div" class=""></div>
                </div>

                <!-- 密码 (文本框) -->
                <div id="u93" class="ax_default text_field" data-label="密码">
                  <input id="u93_input" type="number" value=""/>
                </div>

                <!-- Unnamed (SVG) -->
                <div id="u94" class="ax_default _图片_">
                  <img id="u94_img" class="img " src="../assets/images/login/u72.svg"/>
                </div>

                <!-- Unnamed (矩形) -->
                <div id="u95" class="ax_default label">
                  <div id="u95_div" class=""></div>
                  <div id="u95_text" class="text ">
                    <p><span>发送验证码</span></p>
                  </div>
                </div>

                <!-- Unnamed (垂直线) -->
                <div id="u96" class="ax_default line">
                  <img id="u96_img" class="img " src="../assets/images/login/u96.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u97" class="ax_default label">
        <div id="u97_div" class=""></div>
        <div id="u97_text" class="text ">
          <p><span style="font-family:'Helvetica Regular', 'Helvetica';">&nbsp;&nbsp;&nbsp; CopyRight @ 企享</span><span style="font-family:'PingFang SC Regular', 'PingFang SC';">科技&nbsp;&nbsp; 2020</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '登录'
  },
  data () {
    return {
      accountLoginForm: {
        accountName: '',
        accountPassword: '',
        accountPhoneNumber: ''
      },
      isAccountLoginTabShow: true
    }
  },
  methods: {
    isAccountNull (accountName) {
      if (accountName === '') {
        return true
      } else {
        return false
      }
    },
    isAccountExist (accountName) {
      const existAccountNames = this.existAccounts.map(account => account.accountName)
      if (existAccountNames.includes(accountName)) {
        return true
      } else {
        return false
      }
    },
    isPasswordCorrect (accountPassword) {
      return /^[0-9A-Za-z]{6,18}$/.test(accountPassword)
    },
    loginByAccountNameAndPassword (accountName, accountPassword) {
      let correctAccountPassword = ''
      this.existAccounts.forEach(account => {
        if (account.accountName === accountName) {
          correctAccountPassword = account.accountPassword
        }
      })
      if (correctAccountPassword === accountPassword) {
        alert('登录成功')
      } else {
        alert('密码错误请重新输入')
      }
    },
    handleLoginButtonClick () {
      if (this.isAccountLoginTabShow) {
        const accountName = this.accountLoginForm.accountName
        if (this.isAccountNull(accountName)) {
          alert('账号或密码不能为空，请输入正确的用户名或密码')
        } else if (this.isAccountExist(accountName)) {
          const accountPassword = this.accountLoginForm.accountPassword
          if (this.isPasswordCorrect(accountPassword)) {
            this.loginByAccountNameAndPassword(accountName, accountPassword)
          } else {
            alert('密码错误请重新输入')
          }
        } else {
          alert('请输入正确的账号')
        }
      } else {
        this.handleLoginByAccountPhoneNumber()
      }
    },
    isPhoneNumberNull (accountPhoneNumber) {
      if (accountPhoneNumber === '') {
        return true
      } else {
        return false
      }
    },
    isPhoneNumberExist (accountPhoneNumber) {
      const existAccountPhoneNumber = this.existAccounts.map(account => account.accountPhoneNumber)
      if (existAccountPhoneNumber.includes(accountPhoneNumber)) {
        return true
      } else {
        return false
      }
    },
    handleLoginByAccountPhoneNumber () {
      const accountPhoneNumber = this.accountLoginForm.accountPhoneNumber
      if (this.isPhoneNumberNull(accountPhoneNumber)) {
        alert('请输入手机号')
      } else if (this.isPhoneNumberExist(accountPhoneNumber)) {
      } else {
        alert('手机号码不存在，请重新输入')
      }
    },
    handlePhoneNumberTabLoginClick () {
      this.isAccountLoginTabShow = false
    },
    handleAccountTabLoginClick () {
      this.isAccountLoginTabShow = true
    }
  },
  computed: {
    ...mapState({
      existAccounts: state => state.account.accounts
    })
  },
  mounted () {
    this.$store.dispatch('getAccounts')
  }
}
</script>

<style>
.login {
  min-height: 100%;
  margin:0px;
  background-color:rgba(245, 246, 250, 1);
  background-image:url('../assets/images/login/loginbg.jpeg');
  background-position:left top;
  background-repeat:no-repeat;
  background-attachment:fixed;
  background-size:cover;
  position:static;
  left:auto;
  /* width:1366px; */
  margin-left:0;
  margin-right:0;
  text-align:left;
}
#base {
  position:absolute;
  z-index:0;
}
#u54_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  /* 暂时用 css 弥补 js */
  width:2090px;
  height:1680px;
}
#u54 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1366px;
  height:768px;
}
#u54_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u55 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u56_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:143px;
  height:163px;
}
#u56 {
  border-width:0px;
  position:absolute;
  left:277px;
  top:303px;
  width:143px;
  height:163px;
}
#u56_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u57_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:342px;
  height:62px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-family:'Arial Negreta', 'Arial';
  font-weight:700;
  font-style:normal;
  font-size:36px;
  color:#FFFFFF;
}
#u57 {
  border-width:0px;
  position:absolute;
  left:188px;
  top:466px;
  width:342px;
  height:62px;
  font-family:'Arial Negreta', 'Arial';
  font-weight:700;
  font-style:normal;
  font-size:36px;
  color:#FFFFFF;
}
#u57_text {
  border-width:0px;
  position:absolute;
  left:2px;
  top:10px;
  width:338px;
  word-wrap:break-word;
}
#u58 {
  position:fixed;
  right:200px;
  top:50%;
  margin-top:-240px;
}
#u58_state0 {
  position:relative;
  left:0px;
  top:0px;
  width:520px;
  height:480px;
  background-image:none;
}
#u58_state0_content {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1px;
  height:1px;
}
#u59_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:520px;
  height:480px;
  background:inherit;
  background-color:rgba(255, 255, 255, 1);
  border:none;
  border-radius:4px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u59 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:520px;
  height:480px;
}
#u59_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u60 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u61_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:107px;
  height:12px;
  background:inherit;
  background-color:rgba(170, 178, 189, 1);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u61 {
  border-width:0px;
  position:absolute;
  left:105px;
  top:79px;
  width:107px;
  height:12px;
}
#u61_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u62_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:101px;
  height:109px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-family:'微软雅黑 Bold', '微软雅黑';
  font-weight:700;
  font-style:normal;
  font-size:24px;
  color:#3C3B3D;
}
#u62 {
  border-width:0px;
  position:absolute;
  left:114px;
  top:20px;
  width:101px;
  height:109px;
  font-family:'微软雅黑 Bold', '微软雅黑';
  font-weight:700;
  font-style:normal;
  font-size:24px;
  color:#3C3B3D;
}
#u62_text {
  border-width:0px;
  position:absolute;
  left:2px;
  top:39px;
  width:97px;
  white-space:nowrap;
}
#u63_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:400px;
  height:51px;
  background:inherit;
  background-color:rgba(60, 59, 61, 1);
  border:none;
  border-radius:95px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-family:'微软雅黑 Bold', '微软雅黑';
  font-weight:700;
  font-style:normal;
  font-size:16px;
  color:#FFFFFF;
}
#u63 {
  border-width:0px;
  position:absolute;
  left:60px;
  top:309px;
  width:400px;
  height:51px;
  font-family:'微软雅黑 Bold', '微软雅黑';
  font-weight:700;
  font-style:normal;
  font-size:16px;
  color:#FFFFFF;
}
#u63_text {
  border-width:0px;
  position:absolute;
  left:2px;
  top:15px;
  width:396px;
  word-wrap:break-word;
}
#u64 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u65 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u66_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:400px;
  height:48px;
  background:inherit;
  background-color:rgba(245, 247, 250, 1);
  border:none;
  border-radius:95px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u66 {
  border-width:0px;
  position:absolute;
  left:60px;
  top:129px;
  width:400px;
  height:48px;
}
#u66_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u67_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u67 {
  border-width:0px;
  position:absolute;
  left:71px;
  top:141px;
  width:24px;
  height:24px;
}
#u67_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u68 {
  border-width:0px;
  position:absolute;
  left:105px;
  top:129px;
  width:334px;
  height:48px;
}
#u68_input {
  position:absolute;
  left:0px;
  top:0px;
  width:334px;
  height:48px;
  background-color:transparent;
  font-family:'微软雅黑';
  font-weight:400;
  font-style:normal;
  font-size:14px;
  text-decoration:none;
  color:#000000;
  text-align:left;
  border-color:transparent;
  outline-style:none;
}
#u69 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u70_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:400px;
  height:48px;
  background:inherit;
  background-color:rgba(245, 247, 250, 1);
  border:none;
  border-radius:95px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u70 {
  border-width:0px;
  position:absolute;
  left:60px;
  top:216px;
  width:400px;
  height:48px;
}
#u70_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u71 {
  border-width:0px;
  position:absolute;
  left:105px;
  top:216px;
  width:334px;
  height:48px;
}
#u71_input {
  position:absolute;
  left:0px;
  top:0px;
  width:334px;
  height:48px;
  background-color:transparent;
  font-family:'微软雅黑';
  font-weight:400;
  font-style:normal;
  font-size:14px;
  text-decoration:none;
  color:#000000;
  text-align:left;
  border-color:transparent;
  outline-style:none;
}
#u72_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u72 {
  border-width:0px;
  position:absolute;
  left:71px;
  top:228px;
  width:24px;
  height:24px;
}
#u72_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u73 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u74 {
  position:absolute;
  left:71px;
  top:370px;
}
#u74_state0 {
  position:relative;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
  background-image:none;
}
#u74_state0_content {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1px;
  height:1px;
}
#u75_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u75 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u75_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u74_state1 {
  position:relative;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
  visibility:hidden;
  background-image:none;
}
#u74_state1_content {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1px;
  height:1px;
}
#u76_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u76 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u76_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u77_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:53px;
  height:24px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#AAB2BD;
  text-align:left;
}
#u77 {
  border-width:0px;
  position:absolute;
  left:92px;
  top:370px;
  width:53px;
  height:24px;
  font-size:14px;
  color:#AAB2BD;
  text-align:left;
}
#u77_div.mouseOver {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:53px;
  height:24px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#AAB2BD;
  text-align:left;
}
#u77.mouseOver {
}
#u77_div.selected {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:53px;
  height:24px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#AAB2BD;
  text-align:left;
}
#u77.selected {
}
#u77_text {
  border-width:0px;
  position:absolute;
  left:8px;
  top:2px;
  width:43px;
  white-space:nowrap;
}
#u78_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:81px;
  height:24px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#AAB2BD;
  text-align:right;
}
#u78 {
  border-width:0px;
  position:absolute;
  left:370px;
  top:370px;
  width:81px;
  height:24px;
  font-size:14px;
  color:#AAB2BD;
  text-align:right;
}
#u78_div.mouseOver {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:81px;
  height:24px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#AAB2BD;
  text-align:right;
}
#u78.mouseOver {
}
#u78_text {
  border-width:0px;
  position:absolute;
  left:8px;
  top:2px;
  width:71px;
  white-space:nowrap;
}
#u79 {
  position:absolute;
  left:71px;
  top:267px;
  visibility:hidden;
}
#u79_state0 {
  position:relative;
  left:0px;
  top:0px;
  width:151px;
  height:40px;
  background-image:none;
}
#u79_state0_content {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1px;
  height:1px;
}
#u80_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:151px;
  height:40px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#ED5565;
  text-align:left;
}
#u80 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:151px;
  height:40px;
  font-size:14px;
  color:#ED5565;
  text-align:left;
}
#u80_text {
  border-width:0px;
  position:absolute;
  left:8px;
  top:10px;
  width:141px;
  white-space:nowrap;
}
#u79_state1 {
  position:relative;
  left:0px;
  top:0px;
  width:177px;
  height:40px;
  visibility:hidden;
  background-image:none;
}
#u79_state1_content {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1px;
  height:1px;
}
#u81_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:177px;
  height:40px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#ED5565;
  text-align:left;
}
#u81 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:177px;
  height:40px;
  font-size:14px;
  color:#ED5565;
  text-align:left;
}
#u81_text {
  border-width:0px;
  position:absolute;
  left:8px;
  top:10px;
  width:167px;
  white-space:nowrap;
}
#u79_state2 {
  position:relative;
  left:0px;
  top:0px;
  width:109px;
  height:40px;
  visibility:hidden;
  background-image:none;
}
#u79_state2_content {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:1px;
  height:1px;
}
#u82_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:109px;
  height:40px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-size:14px;
  color:#ED5565;
  text-align:left;
}
#u82 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:109px;
  height:40px;
  font-size:14px;
  color:#ED5565;
  text-align:left;
}
#u82_text {
  border-width:0px;
  position:absolute;
  left:8px;
  top:10px;
  width:99px;
  white-space:nowrap;
}
#u83 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u84_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:107px;
  height:12px;
  background:inherit;
  background-color:rgba(170, 178, 189, 1);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u84 {
  border-width:0px;
  position:absolute;
  left:279px;
  top:79px;
  width:107px;
  height:12px;
}
#u84_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u85_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:101px;
  height:109px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-family:'微软雅黑 Bold', '微软雅黑';
  font-weight:700;
  font-style:normal;
  font-size:24px;
  color:#3C3B3D;
}
#u85 {
  border-width:0px;
  position:absolute;
  left:288px;
  top:20px;
  width:101px;
  height:109px;
  font-family:'微软雅黑 Bold', '微软雅黑';
  font-weight:700;
  font-style:normal;
  font-size:24px;
  color:#3C3B3D;
}
#u85_text {
  border-width:0px;
  position:absolute;
  left:2px;
  top:39px;
  width:97px;
  white-space:nowrap;
}
#u86 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u87 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u88_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:400px;
  height:48px;
  background:inherit;
  background-color:rgba(245, 247, 250, 1);
  border:none;
  border-radius:95px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u88 {
  border-width:0px;
  position:absolute;
  left:60px;
  top:129px;
  width:400px;
  height:48px;
}
#u88_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u89_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u89 {
  border-width:0px;
  position:absolute;
  left:71px;
  top:141px;
  width:24px;
  height:24px;
}
#u89_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u90 {
  border-width:0px;
  position:absolute;
  left:105px;
  top:129px;
  width:334px;
  height:48px;
}
#u90_input {
  position:absolute;
  left:0px;
  top:0px;
  width:334px;
  height:48px;
  background-color:transparent;
  font-family:'微软雅黑';
  font-weight:400;
  font-style:normal;
  font-size:14px;
  text-decoration:none;
  color:#000000;
  text-align:left;
  border-color:transparent;
  outline-style:none;
}
#u91 {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  height:0px;
}
#u92_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:400px;
  height:48px;
  background:inherit;
  background-color:rgba(245, 247, 250, 1);
  border:none;
  border-radius:95px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u92 {
  border-width:0px;
  position:absolute;
  left:60px;
  top:216px;
  width:400px;
  height:48px;
}
#u92_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u93 {
  border-width:0px;
  position:absolute;
  left:105px;
  top:216px;
  width:334px;
  height:48px;
}
#u93_input {
  position:absolute;
  left:0px;
  top:0px;
  width:334px;
  height:48px;
  background-color:transparent;
  font-family:'微软雅黑';
  font-weight:400;
  font-style:normal;
  font-size:14px;
  text-decoration:none;
  color:#000000;
  text-align:left;
  border-color:transparent;
  outline-style:none;
}
#u94_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:24px;
  height:24px;
}
#u94 {
  border-width:0px;
  position:absolute;
  left:71px;
  top:228px;
  width:24px;
  height:24px;
}
#u94_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u95_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:73px;
  height:19px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
}
#u95 {
  border-width:0px;
  position:absolute;
  left:362px;
  top:234px;
  width:73px;
  height:19px;
}
#u95_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:71px;
  white-space:nowrap;
}
#u96_img {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:2px;
  height:19px;
}
#u96 {
  border-width:0px;
  position:absolute;
  left:347px;
  top:234px;
  width:1px;
  height:18px;
}
#u96_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:0px;
  visibility:hidden;
  word-wrap:break-word;
}
#u97_div {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:226px;
  height:19px;
  background:inherit;
  background-color:rgba(255, 255, 255, 0);
  border:none;
  border-radius:0px;
  -moz-box-shadow:none;
  -webkit-box-shadow:none;
  box-shadow:none;
  font-family:'Helvetica Regular', 'Helvetica';
  font-weight:400;
  font-style:normal;
  font-size:16px;
  color:#FFFFFF;
}
#u97 {
  border-width:0px;
  position:absolute;
  left:246px;
  top:529px;
  width:226px;
  height:19px;
  font-family:'Helvetica Regular', 'Helvetica';
  font-weight:400;
  font-style:normal;
  font-size:16px;
  color:#FFFFFF;
}
#u97_text {
  border-width:0px;
  position:absolute;
  left:0px;
  top:0px;
  width:225px;
  white-space:nowrap;
}
</style>
