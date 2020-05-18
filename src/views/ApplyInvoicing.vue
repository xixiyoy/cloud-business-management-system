<template>
  <div class="apply-invoicing">
    <p class="apply-invoicing-title">新建</p>
    <div class="dividing-line"></div>
    <p><strong class="apply-invoicing-title-custom">基本信息</strong></p>
    <el-form label-width="150px" class="demo-ruleForm">
      <el-row>
        <el-col :span="10">
          <el-form-item label="发票类型: " required>
            <el-select v-model="createInvoiceFrom.invoiceTypeName" @change="handleTypeSelectChange" style="width:100%">
              <el-option value="0">增值税专用发票</el-option>
              <el-option value="1">增值税普通发票</el-option>
              <el-option value="2">增值税电子普通发票</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="服务公司: " required>
              <el-select class="account-source-left-custom" v-model="createInvoiceFrom.entityId" @change="handleComSelectChange" style="width: 100%" >
                <el-option
                  v-for="(company, index) in companies"
                  :key="index"
                  :label="company.fullName"
                  :value="company.tenantCompanyId">
                </el-option>
              </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="发票抬头: " required>
            <el-input v-model="createInvoiceFrom.invoiceHead"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="开票金额: " required>
            <el-input v-model="createInvoiceFrom.invoiceMoney"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="社会信用代码: " required>
            <el-input v-model="createInvoiceFrom.creditCode"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10">
          <el-form-item label="地址: ">
            <el-input v-model="createInvoiceFrom.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="电话: ">
            <el-input v-model="createInvoiceFrom.phone"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <el-form-item label="开户行及账号: ">
            <el-input v-model="createInvoiceFrom.account"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20">
          <el-form-item label="备注信息: ">
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
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '新增开票'
  },
  data () {
    return {
      createInvoiceFrom: {
        invoiceTypeValue: 0,
        invoiceTypeName: '',
        entityId: '',
        entityName: '',
        invoiceHead: '',
        invoiceMoney: '',
        creditCode: '',
        address: '',
        phone: '',
        account: '',
        invoiceRemark: '',
        confirmUserName: ''
      },
      isInvoice: false,
      getServiceCompanyFrom: {
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
    handleCreateInvoiceButtonClick () {
      this.createInvoiceFrom.confirmUserName = this.userInfo.userName
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
    },
    getTypeName (value) {
      if (value === '0') {
        return '增值税专用发票'
      } else if (value === '1') {
        return '增值税普通发票'
      } else if (value === '2') {
        return '增值税电子普通发票'
      }
    },
    handleTypeSelectChange (value) {
      this.createInvoiceFrom.invoiceTypeName = this.getTypeName(value)
    },
    // 所有服务公司获取
    getCompanies () {
      this.$store.dispatch('getCompanyList', this.getServiceCompanyFrom)
    },
    getCompanicesName (id) {
      return this.companies.filter(({ tenantCompanyId }) => tenantCompanyId === id)[0].fullName
    },
    handleComSelectChange (id) {
      this.createInvoiceFrom.entityName = this.getCompanicesName(id)
    },
    // 获取用户信息
    getUserInfo () {
      this.$store.dispatch('getSysInfo')
    }
  },
  mounted () {
    this.getCompanies()
    this.getUserInfo()
  },
  computed: {
    ...mapState({
      // 服务公司获取
      companies: state => state.tenantCompany.serviceCompanys.page.list,
      // 获取用户信息
      userInfo: state => state.sysUser.user.user
    })
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
