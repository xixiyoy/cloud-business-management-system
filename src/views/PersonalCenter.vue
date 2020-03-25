<template>
  <div class="personal-center">
    <p class="personalCenter-title">个人信息</p>
    <div class="dividing-line"></div>
      <div class="personal-center-main">
        <el-form  ref="ruleForm" label-position="top" label-width="100px">
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="姓名: " prop="name">
                <el-input></el-input>
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
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮箱地址: " prop="name">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="用户名: " prop="name">
                <span>张三</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登录密码: " prop="name">
                <span>***</span>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" style="padding-right:25px;">
              <el-form-item label="部门: " prop="name">
                <span>苏州企享汇信息科技有限公司</span>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="身份: " prop="name">
                <span>主管</span>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <el-button type="primary">保存</el-button>
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
      changePasswordDialogVisible: false
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleChangePassword () {
      this.changePasswordDialogVisible = true
    }
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
