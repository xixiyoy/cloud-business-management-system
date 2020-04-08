<template>
  <div class="personal-center">
    <p class="personalCenter-title">个人信息</p>
    <div class="dividing-line"></div>
      <div class="personal-center-main">
        <el-form  ref="ruleForm" label-position="top" label-width="100px">
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="姓名: " prop="name">
                <el-input v-model="updateUserForm.user.userName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别: " prop="name">
                <el-radio-group v-model="personalCenterForm.resource">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="手机号码: " prop="name">
                <el-input v-model="updateUserForm.user.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮箱地址: " prop="name">
                <el-input v-model="updateUserForm.user.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="用户名: " prop="name">
                <span>{{updateUserForm.user.account}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登录密码: " prop="name">
                <span>{{updateUserForm.user.salt}}</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="部门: " prop="name">
                <span>{{updateUserForm.user.deptName}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份: " prop="name">
                <span>{{updateUserForm.roleNameList[0]}}</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-button type="primary" @click="handleUpdateUserButtnClick">保存</el-button>
        <el-button @click="handleChangePassword" style="margin-right: 10px;">修改密码</el-button>
        <el-dialog title="修改密码" width="40%" :visible.sync="changePasswordDialogVisible">
          <el-form label-position="top" label-width="120px">
            <el-row>
              <el-col :span="24">
                <el-form-item label="旧密码: " required="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="新密码: " required="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="确认新密码: " required="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-button>取消</el-button>
          <el-button type="primary">保存</el-button>
        </el-dialog>
        <el-button>取消</el-button><br><br><br><br>
      </div>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '个人中心'
  },
  data () {
    return {
      personalCenterForm: {
        resource: '',
        prop: ''
      },
      changePasswordDialogVisible: false,
      userId: 1,
      updateUserForm: {
        msg: 'success',
        code: 0,
        roleNameList: [
          '开发工程师'
        ],
        user: {
          userId: 2,
          userName: '孟星驰',
          account: 'mxc',
          salt: 'LQ9IhLYJymjaVXwZtHdh',
          email: '2321@qq.com',
          mobile: '18913932276',
          status: 1,
          roleIdList: null,
          createTime: '2020-03-10 10:05:09',
          deptId: 7,
          deptName: null,
          tenantId: 1
        }
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleChangePassword () {
      this.changePasswordDialogVisible = true
    },
    getUserInfo () {
      this.$store.dispatch('getSysInfo').then(() => {
        this.updateUserForm = this.userInfo
      })
    },
    handleUpdateUserButtnClick () {
      this.$store.dispatch('updateSysInfo', this.updateUserForm).then(({ data: response }) => {
        const { code, msg } = response
        if (code === 0) {
          Message({
            message: '保存成功',
            type: 'success'
          })
          this.$route.push({ path: '/personal-center' })
        } else {
          Message({
            message: msg,
            type: 'error'
          })
        }
      })
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.sysUser.user
    })
  },
  mounted () {
    // 获取更新用户信息
    this.getUserInfo()
  }
}
</script>
<style scoped>
.el-row {
  line-height: 30px;
}
.personal-center{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.personalCenter-title {
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 10px;
}
.dividing-line{
  width: 100%;
  height: 1px;
  background-color: #DCDFE6;
  margin-top: 25px;
}
.personal-center-main{
  margin-top: 25px;
}
</style>
