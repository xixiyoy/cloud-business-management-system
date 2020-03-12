<template>
  <div class="new-diary-report">
    <p class="newDiaryReport-page-title">基本信息</p>
      <div class="new-diary-report-main">
          <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="6">
                <el-form-item label="客户名称" prop="pass">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6">
                <el-form-item label="客户代表" prop="pass">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="收支部门" prop="region">
                  <el-select class="account-source-left-custom" multiple placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6">
                <el-form-item label="收支人员" prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="收支金额" prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6">
                <el-form-item label="收支时间" prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="是否需要其他人审核" prop="resource">
                  <el-radio-group>
                    <el-radio label="是"></el-radio>
                    <el-radio label="否"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6">
                <el-form-item label="审核人" prop="name">
                  <el-input></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="摘要" prop="pass">
                  <el-input type="textarea"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
            </el-row>
          </el-form>
      </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '新建收支'
  }
}
</script>

<style>
.new-diary-report{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.newDiaryReport-page-title{
  font-size: 20px;
  color: #333;
  text-align: left;
  line-height: 10px;
}
.new-diary-report-main{
  margin-top: 25px;
}
</style>
