<template>
  <div class="new-diary-report">
    <p class="newDiaryReport-page-title">基本信息</p>
      <div class="new-diary-report-main">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="6">
                <el-form-item label="客户名称" prop="pass">
                  <el-input v-model="createFianceForm.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="客户代表" prop="pass">
                  <el-input v-model="createFianceForm.customerRelName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="收支部门">
                  <el-select class="account-source-left-custom" v-model="createFianceForm.fianceDeptId" @change="handleDepartmentSelectChange">
                    <el-option
                      v-for="(department, index) in departments"
                      :key="index"
                      :label="department.name"
                      :value="department.deptId">
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="收支人员" prop="name" required>
                  <el-input v-model="createFianceForm.fianceUserName"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="收支金额" prop="name" required>
                  <el-input v-model="createFianceForm.money"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="收支时间" prop="name" required>
                  <el-input v-model="createFianceForm.fianceTime"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="是否需要其他人审核" required>
                  <el-radio-group v-model="radio" >
                    <el-radio :label="1">是</el-radio>
                    <el-radio :label="2">否</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="6" required>
                <el-form-item label="审核人:" v-show="radio === 1">
                  <el-select
                    v-model="createFianceForm.checkUserId"
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
              <el-col :span="12">
                <el-form-item label="摘要" prop="pass">
                  <el-input type="textarea" v-model="createFianceForm.comment"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <!-- 3.4 将 3.3 定义的方法绑定到 click 事件上 -->
            <el-button type="primary" @click="handleCreateFianceButtonClick">保 存</el-button>
            <el-button >取 消</el-button>
          </el-form>
      </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '新建收支'
  },
  data () {
    return {
      // 3.1 先写创建日记账单所需要的 form
      // 3.2 将这个 form 和上面 html 的输入框了绑定
      createFianceForm: {
        customerName: '',
        customerRelName: '',
        fianceUserId: '',
        fianceUserName: '',
        fianceDeptId: '',
        fianceDeptName: '',
        money: '',
        comment: '',
        fianceTypeValue: '',
        fianceTypeName: ''
      },
      radio: 1
    }
  },
  methods: {
    getDepartmentName (id) {
      return this.departments.filter(({ deptId }) => deptId === id)[0].name
    },
    handleDepartmentSelectChange (id) {
      console.log(this.getDepartmentName(id))
      this.createFianceForm.fianceDeptName = this.getDepartmentName(id)
    },
    // 3.3 在 methods 中定一个方法
    handleCreateFianceButtonClick () {
      // 调用 3.5 的创建方法
      this.createFiance()
    },
    getDepartments () {
      this.$store.dispatch('getDeptList')
    },
    // 3.5 在 methods 中定一个方法用来调用 vuex 中 actions 中的方法
    createFiance () {
      console.log(this.createFianceForm)
      // 3.5.1              对应 actions 中的方法名  对应 actions 中第二个参数，实际是 data 中的 form 值来自于输入框
      this.$store.dispatch('createFiance', this.createFianceForm).then(() => {
        Message({
          message: '保存成功',
          type: 'success'
        })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    },
    // 获取所有人员名称
    getUsers () {
      this.$store.dispatch('getUserList')
    },
    handleEditTaskFormFinancialAdviserSelectChange (id) {
      this.createFianceForm.checkUserName = this.getUsers(id)
    },
    isShowCheckUser () {
      if (this.createFianceForm.checkUserId === '1') {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    this.getDepartments()
    this.getUsers()
  },
  computed: {
    ...mapState({
      departments: state => state.department.depts,
      // 获取所有用户
      allUsers: state => state.sysUser.users.list
    })
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
