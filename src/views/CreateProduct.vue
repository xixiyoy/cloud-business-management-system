<template>
  <div class="create-product">
    <div class="create-product-title">新增产品
    <div class="dividing-line"></div>
    <div class="create-product-main">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-row>
          <el-col :span="6">
             <el-form-item label="产品板块: " prop="region" required>
              <el-select placeholder="产品一" style="width:290px;">
                <el-option label="产品一" value="shanghai"></el-option>
                <el-option label="产品二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品名称: " prop="name" required>
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4"></el-col>
          <el-col :span="8">
            <el-form-item label="指导价格(元): " required>
              <el-col :span="11">
                <el-form-item prop="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" style="text-align: center;">至</el-col>
              <el-col :span="11">
                <el-form-item prop="">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="产品单位: " prop="region" required>
              <el-select placeholder="次" style="width:290px;">
                <el-option label="月" value="shanghai"></el-option>
                <el-option label="人/天" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="概述: " prop="name">
              <el-input placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
        </el-row>
      </el-form>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '新建产品'
  }
}
</script>

<style scoped>
.create-product{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.create-product-title{
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
.create-product-main{
  margin-top: 25px;
}
</style>
