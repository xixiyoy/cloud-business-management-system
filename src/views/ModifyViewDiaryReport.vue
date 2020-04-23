<template>
  <div class="modify-view-diary-report">
    <p class="view-diary-report-title">收支详情</p>
    <div class="dividing-line"></div>
    <p><strong class="view-report-title-custom">基本信息</strong></p>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="24">
          <el-form-item label="审核状态: " prop="name">
            <span >{{updateFianceForm.statusName}}</span>
          </el-form-item>
        </el-col>
      </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="客户名称: " prop="name">
                  <el-input v-model="updateFianceForm.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="客户代表: " prop="name">
                  <el-input v-model="updateFianceForm.customerRelName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支部门: " prop="name">
                  <el-select class="account-source-left-custom" v-model="updateFianceForm.fianceDeptId" @change="handleDepartmentSelectChange">
                    <el-option
                      v-for="(department, index) in departments"
                      :key="index"
                      :label="department.name"
                      :value="department.deptId">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="收支人员: " prop="name">
                    <el-select
                    v-model="updateFianceForm.fianceUserId"
                    @change="handleEditTaskFormFinancialAdviserSelectChange">
                    <el-option
                      v-for="user in allUsers"
                      :key="user.userId"
                      :label="user.userName"
                      :value="user.userId">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支金额: ">
                  <el-input v-model="updateFianceForm.money"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="结余: ">
                  <el-input v-model="updateFianceForm.balance"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="创建人: ">
                  <el-input v-model="updateFianceForm.createUserName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10">
                <el-form-item label="创建时间: ">
                  <el-input v-model="report.createTime" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10">
                <el-form-item label="收支时间: ">
                  <el-input v-model="updateFianceForm.fianceTime"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="20">
                <el-form-item label="摘要: " prop="pass">
                  <el-input type="textarea" v-model="updateFianceForm.comment"></el-input>
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
      updateFianceForm: {
        fianceId: 0,
        customerName: '',
        customerRelName: '',
        fianceDeptId: 1,
        fianceDeptName: '',
        fianceUserId: 2,
        fianceUserName: '',
        money: '',
        balance: '',
        createUserName: '',
        comment: '',
        fianceTime: ''
      }
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
    handleDepartmentSelectChange (id) {
      this.updateFianceForm.fianceDeptName = this.getDepartmentName(id)
    },
    handleEditTaskFormFinancialAdviserSelectChange (id) {
      this.updateFianceForm.checkUserName = this.getUsers(id)
    },
    getUsers () {
      this.$store.dispatch('getUserList')
    },
    getDepartments () {
      this.$store.dispatch('getDeptList')
    },
    modifyFiance () {
      this.$store.dispatch('updateFiance', this.updateFianceForm).then(() => {
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
    this.getDepartments()
    this.getUsers()
    this.fianceId = this.$route.query.fianceId
    this.getFiance()
    this.updateFianceForm.fianceId = this.report.fianceId
    this.updateFianceForm.customerName = this.report.customerName
    this.updateFianceForm.customerRelName = this.report.customerRelName
    this.updateFianceForm.fianceDeptName = this.report.fianceDeptName
    this.updateFianceForm.fianceDeptId = this.report.fianceDeptId
    this.updateFianceForm.fianceUserName = this.report.fianceUserName
    this.updateFianceForm.fianceUserId = this.report.fianceUserId
    this.updateFianceForm.money = this.report.money
    this.updateFianceForm.balance = this.report.balance
    this.updateFianceForm.createUserName = this.report.createUserName
    // this.updateFianceForm.createTime = this.report.createTime
    this.updateFianceForm.fianceTime = this.report.fianceTime
    this.updateFianceForm.comment = this.report.comment
  },
  computed: {
    ...mapState({
      report: state => state.fiance.fiance,
      departments: state => state.department.depts,
      // 获取所有用户
      allUsers: state => state.sysUser.users.list
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
