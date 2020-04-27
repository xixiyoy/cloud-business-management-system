<template>
  <div class="modify-view-invoicing">
    <p class="modify-view-invoicing-title">申请开票</p>
    <div class="dividing-line"></div>
    <p><strong class="modify-view-invoicing-title-custom">基本信息</strong></p>
    <el-form label-width="150px" class="demo-ruleForm">
      <el-row>
        <el-col :span="8">
          <el-form-item label="发票类型：">
            <el-input v-model="updateInvoiceForm.invoiceTypeName"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="服务公司：">
            <el-input v-model="updateInvoiceForm.entityName"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="发票抬头：">
            <el-input v-model="updateInvoiceForm.invoiceHead"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="开票金额：">
            <el-input v-model="updateInvoiceForm.invoiceMoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="社会信用代码：">
            <el-input v-model="updateInvoiceForm.creditCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="电话：">
            <el-input v-model="updateInvoiceForm.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="地址：">
            <el-input v-model="updateInvoiceForm.address"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="开户银行：">
            <el-input v-model="updateInvoiceForm.bank"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="银行账号：">
            <el-input v-model="updateInvoiceForm.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16">
          <el-form-item label="备注信息">
            <el-input v-model="updateInvoiceForm.invoiceRemark"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-button type="primary" @click="handleUpdateInvoiceButtonClick">提交</el-button>
    <el-button>取消</el-button><br><br><br>
  </div>
</template>
<script>
import { Message } from 'element-ui'
import { mapState } from 'vuex'
export default {
  metaInfo: {
    title: '修改开票'
  },
  data () {
    return {
      updateInvoiceForm: {
        invoiceId: 1,
        invoiceTypeName: '',
        entityName: '',
        invoiceHead: '',
        invoiceMoney: 1,
        invoiceRemark: '',
        account: '',
        phone: '',
        address: '',
        bank: '',
        creditCode: 1895648799
      },
      invoiceId: 1
    }
  },
  methods: {
    getInvoice () {
      this.$store.dispatch('getBillingById', this.invoiceId)
    },
    handleUpdateInvoiceButtonClick () {
      console.log(this.updateInvoiceForm)
      this.modifyInvoice()
    },
    modifyInvoice () {
      this.$store.dispatch('updateInvoice', this.updateInvoiceForm).then(() => {
        Message({
          message: '修改成功',
          type: 'success'
        })
        this.$router.push({ path: '/billing-list' })
      }).catch(message => {
        Message({
          message,
          type: 'error'
        })
      })
    }
  },
  mounted () {
    this.invoiceId = this.$route.query.invoiceId
    this.getInvoice()
    this.updateInvoiceForm.invoiceId = this.invoiceId
    this.updateInvoiceForm.invoiceTypeName = this.invoice.invoiceTypeName
    this.updateInvoiceForm.entityName = this.invoice.entityName
    this.updateInvoiceForm.invoiceHead = this.invoice.invoiceHead
    this.updateInvoiceForm.creditCode = this.invoice.creditCode
    this.updateInvoiceForm.phone = this.invoice.phone
    this.updateInvoiceForm.address = this.invoice.address
    this.updateInvoiceForm.bank = this.invoice.bank
    this.updateInvoiceForm.invoiceRemark = this.invoice.invoiceRemark
    this.updateInvoiceForm.account = this.invoice.account
  },
  computed: {
    ...mapState({
      invoice: state => state.invoice.invoice
    })
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
