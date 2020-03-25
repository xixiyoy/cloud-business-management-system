<template>
  <div class="view-diary-report">
    <p class="view-diary-report-title">查看详情</p>
    <div class="dividing-line"></div>
    <p><strong class="view-report-title-custom">基本信息</strong></p>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="4" style="float:right">
          <el-button @click="handleClickModifyViewDiaryReport">修改内容</el-button>
        </el-col>
      </el-row>
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
                  <span>{{information.clientName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="客户代表: " prop="name">
                  <span>{{information.customerName}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支部门: " prop="name">
                  <span>{{information.department}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="收支人员: " prop="name">
                  <span>{{information.payee}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支金额: " prop="name">
                  <span>{{information.amount}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="结余: " prop="name">
                  <span>{{information.balance}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="创建人: " prop="name">
                  <span>{{information.founder}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="审核人: " prop="name">
                  <span>{{information.reviewer}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支时间: " prop="region">
                  <span>{{information.time}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="创建时间: " prop="name">
                  <span>{{information.createTtime}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="摘要: " prop="pass">
                  <span>{{information.summary}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
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
  },
  methods: {
    handleClickModifyViewDiaryReport () {
      this.$router.push({ path: '/modify-view-diary-report' })
    }
  }
}
</script>

<style>
.view-diary-report{
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
