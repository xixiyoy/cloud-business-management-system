<template>
  <div class="modify-view-diary-report">
    <p class="view-diary-report-title">新建</p>
    <div class="dividing-line"></div>
    <p><strong class="view-report-title-custom">基本信息</strong></p>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="24">
          <el-form-item label="审核状态: " prop="name">
            <span>{{information.approvalStatus}}</span>
          </el-form-item>
        </el-col>
      </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="客户名称: " prop="name">
                  <el-input>{{information.clientName}}</el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="客户代表: " prop="name">
                  <el-input>{{information.customerName}}</el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支部门: " prop="name">
                  <el-input>{{information.department}}</el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="收支人员: " prop="name">
                  <el-input>{{information.payee}}</el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支金额: " prop="name">
                  <el-input>{{information.amount}}</el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="结余: " prop="name">
                  <el-input>{{information.balance}}</el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="创建人: " prop="name">
                  <el-input>{{information.founder}}</el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="审核人: " prop="name">
                  <el-input>{{information.reviewer}}</el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支时间: " prop="region">
                  <el-input>{{information.time}}</el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="创建时间: " prop="name">
                  <el-input>{{information.createTtime}}</el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item label="摘要: " prop="pass">
                  <el-input type="textarea">{{information.summary}}</el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-button type="primary">确 认</el-button>
          <el-button>取 消</el-button>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: '查看详情'
  },
  data () {
    return {
      information: {
        approvalStatus: '已审核',
        clientName: '张三的公司',
        customerName: '张三',
        department: '财税二部',
        payee: '朱元',
        amount: '500.00',
        balance: '1000.00',
        founder: '丁雅',
        reviewer: '钱',
        time: '2020-01-15',
        createTtime: '2020-01-15 15:40:51',
        summary: '客户要求高'
      }
    }
  }
}
</script>

<style>
.modify-view-diary-report{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.view-diary-report-title{
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
.view-report-title-custom{
  line-height: 50px;
}
</style>
