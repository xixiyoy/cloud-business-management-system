<template>
  <div class="personalCenter">
    <p class="personalCenter-title">个人信息</p>
    <div class="dividing-line"></div>
      <div class="personalCenter-main">
        <el-form  ref="ruleForm" label-position="top" label-width="100px">
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名: " prop="name"><br>
                <el-input></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8"></el-col>
            <el-col :span="8">
              <el-form-item label="性别: " prop="name"><br>
                <el-radio-group v-model="personalCenterForm.resource">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
              <el-col :span="8">
                <el-form-item label="手机号码: " prop="name"><br>
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="邮箱地址: " prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
        </el-form>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      personalCenterForm: {
        resource: '',
        prop: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>
<style scoped>
.el-row {

  line-height: 30px;
}
.personalCenter{
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
.personalCenter-main{
  margin-top: 25px;
}
</style>
