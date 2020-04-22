<template>
  <div class="modify-view-diary-report">
    <p class="view-diary-report-title">收支详情</p>
    <div class="dividing-line"></div>
    <p><strong class="view-report-title-custom">基本信息</strong></p>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="24">
          <el-form-item label="审核状态: " prop="name">
            <span >{{report.statusName}}</span>
          </el-form-item>
        </el-col>
      </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="客户名称: " prop="name">
                  <el-input v-model="report.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="客户代表: " prop="name">
                  <el-input v-model="report.customerRelName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支部门: " prop="name">
                  <el-input v-model="updateFianceForm.fianceDeptName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="收支人员: " prop="name">
                  <el-input v-model="report.fianceUserName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支金额: " prop="name">
                  <el-input v-model="report.money"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="结余: " prop="name">
                  <el-input v-model="report.balance"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="创建人: " prop="name">
                  <el-input v-model="report.createUserName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="创建时间: " prop="name">
                  <el-input v-model="report.createTime"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支时间: " prop="region">
                  <el-input v-model="report.fianceTime"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item label="摘要: " prop="pass">
                  <el-input type="textarea" v-model="report.comment"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-button type="primary" @click="handleUpdateFianceButtonClick">确 认</el-button>
          <el-button>取 消</el-button>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '修改收支'
  },
  data () {
    return {
      fianceId: 1,
      updateFianceForm: {}
    }
  },
  methods: {
    getFiance () {
      this.$store.dispatch('getFianceById', this.fianceId)
    },
    handleUpdateFianceButtonClick () {
      console.log(this.updateFianceForm)
      this.modifyFiance()
    },
    modifyFiance () {
      this.$store.dispatch('updateFiance').then(() => {
        Message({
          message: '修改成功',
          type: 'success'
        })
        this.$router.push({ path: '/diary-report' })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    }
  },
  mounted () {
    this.fianceId = this.$route.query.fianceId
    this.getFiance()
    this.updateFianceForm = this.report
  },
  computed: {
    ...mapState({
      report: state => state.fiance.fiance
    })
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
