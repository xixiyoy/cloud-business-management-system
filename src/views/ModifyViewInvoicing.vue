<template>
  <div class="modify-view-invoicing">
    <p class="modify-view-invoicing-title">申请开票</p>
    <div class="dividing-line"></div>
    <p><strong class="modify-view-invoicing-title-custom">基本信息</strong></p>
    <el-form label-width="150px" class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="发票类型" prop="name" required="">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="服务公司" prop="name" required="">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="发票抬头" prop="name" required="">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开票金额" prop="name" required="">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="社会信用代码" prop="name" required="">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="地址/电话" prop="name">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="开户行及账号" prop="name">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="备注信息" prop="name">
            <el-input placeholder="请输入"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary">提交</el-button>
    <el-button>取消</el-button><br><br><br>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '修改开票'
  }
}
</script>
<style scoped>
.modify-view-invoicing{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.modify-view-invoicing-title{
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
.modify-view-invoicing-title-custom{
  line-height: 50px;
}
</style>
