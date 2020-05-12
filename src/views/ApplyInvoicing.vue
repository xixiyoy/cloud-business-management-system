<template>
  <div class="apply-invoicing">
    <p class="apply-invoicing-title">新建</p>
    <div class="dividing-line"></div>
    <p><strong class="apply-invoicing-title-custom">基本信息</strong></p>
    <el-form label-width="150px" class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="发票类型: " prop="name" required>
            <el-input v-model="createInvoiceFrom.invoiceTypeName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="服务公司: " prop="name" required>
            <el-input v-model="createInvoiceFrom.entityName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="发票抬头: " prop="name" required>
            <el-input v-model="createInvoiceFrom.invoiceHead"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开票金额: " prop="name" required>
            <el-input v-model="createInvoiceFrom.invoiceMoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="社会信用代码: " prop="name" required>
            <el-input v-model="createInvoiceFrom.creditCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="地址: " prop="name">
            <el-input v-model="createInvoiceFrom.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="电话: " prop="name">
            <el-input v-model="createInvoiceFrom.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="开户行及账号: " prop="name">
            <el-input v-model="createInvoiceFrom.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="备注信息: " prop="name">
            <el-input v-model="createInvoiceFrom.invoiceRemark"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" :loading="isInvoice" @click="handleCreateInvoiceButtonClick">提交</el-button>
    <el-button>取消</el-button><br><br><br>
  </div>
</template>
<script>
import { Message } from 'element-ui'

export default {
  metaInfo: {
    title: '新增开票'
  },
  data () {
    return {
      createInvoiceFrom: {
        invoiceTypeValue: 0,
        invoiceTypeName: '',
        entityId: 1,
        entityName: '',
        invoiceHead: '',
        invoiceMoney: '',
        creditCode: '',
        address: '',
        phone: '',
        account: '',
        invoiceRemark: ''
      },
      isInvoice: false
    }
  },
  methods: {
    handleCreateInvoiceButtonClick () {
      this.createInvoice()
    },
    createInvoice () {
      this.isInvoice = true
      this.$store.dispatch('createInvoice', this.createInvoiceFrom).then(() => {
        Message({
          message: '保存成功',
          type: 'success'
        })
        this.isInvoice = false
        this.$router.push({ path: '/billing-list' })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
        this.isInvoice = false
      })
    }
  }
}
</script>
<style scoped>
.apply-invoicing{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
}
.apply-invoicing-title{
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
.apply-invoicing-title-custom{
  line-height: 50px;
}
</style>
