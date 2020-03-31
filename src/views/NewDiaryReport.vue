<template>
  <div class="new-diary-report">
    <p class="newDiaryReport-page-title">基本信息</p>
      <div class="new-diary-report-main">
          <el-form :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="6">
                <el-form-item label="客户名称" prop="pass">
                  <el-input v-model="createFianceForm.customerName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
              <el-col :span="6">
                <el-form-item label="客户代表" prop="pass">
                  <el-input v-model="createFianceForm.customerRelName"></el-input>
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
                  <el-input v-model="createFianceForm.money"></el-input>
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
                  <el-input type="textarea" v-model="createFianceForm.comment"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12"></el-col>
            </el-row>
            <!-- 3.4 将 3.3 定义的方法绑定到 click 事件上 -->
            <el-button type="primary" @click="handleCreateFianceButtonClick">保 存</el-button>
          </el-form>
      </div>
  </div>
</template>

<script>
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
      }
    }
  },
  methods: {
    // 3.3 在 methods 中定一个方法
    handleCreateFianceButtonClick () {
      // 调用 3.5 的创建方法
      this.createFianc()
    },
    // 3.5 在 methods 中定一个方法用来调用 vuex 中 actions 中的方法
    createFiance () {
      // 3.5.1              对应 actions 中的方法名  对应 actions 中第二个参数，实际是 data 中的 form 值来自于输入框
      this.$store.dispatch('createFiance', this.createFianceForm)
    }
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
