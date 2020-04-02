<template>
  <div class="view-account">
    <p class="view-account-title">公司名称</p>
    <div class="dividing-line"></div>
    <el-collapse v-model="activeNames">
      <div class="">
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="基础信息" name="1">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="20">
                <el-button type="primary" round>{{account.status}}</el-button>
              </el-col>
              <el-col :span="4">
                <el-button @click="handleModifyViewAccount">修改内容</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户名称: " prop="name">
                  <span>{{account.accountName}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系人: " prop="name">
                  <span>{{account.contractPerson}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="社会信用代码: " prop="name">
                  <span>{{account.SocialCreditCode}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="联系电话: " prop="name">
                  <span>{{account.companyPhone}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="企业电话: " prop="name">
                  <span>{{account.companyPhone}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户等级: " prop="name">
                  <span>{{account.customerGrade}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="联系地址: " prop="name">
                  <span>{{account.contractAddress}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8"></el-col>
              <el-col :span="8">
                <el-form-item label="企业邮箱: " prop="name">
                  <span>{{account.companyEmail}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="客户来源: " prop="region">
                  <span>{{account.customerSource}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="客户代表: " prop="name">
                  <span>{{account.customerRepresentative}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="创建人: " prop="region">
                  <span>{{account.founder}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="创建日期: " prop="name">
                  <span>{{account.createTime}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="备注: " prop="pass">
                  <span>{{account.note}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="文档资料: " name="2">
          <el-form label-width="120px" class="demo-ruleForm">
            <el-row>
              <el-col :span="12">
                <el-form-item label="身份证复印件: " prop="name">
                  <img v-for="(image,index) in idCardImages" :key="index" :src="image" alt="">
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="营业执照复印件: " prop="name">
                  <img v-for="(image,index) in businessLicenseImages" :key="index" :src="image" alt="">
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="合同原件: " prop="name">
                  <img v-for="(image,index) in contractImages" :key="index" :src="image" alt="">
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img v-show="isAgentReport" class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="财税信息" name="3" v-show="isAgentReport">
          <el-form label-width="100px" class="demo-ruleForm">
            <el-row>
              <el-col :span="24">
                <el-button type="primary">{{financialInformation.productName}}</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="月服务费: " prop="name">
                  <span>{{financialInformation.monthAmount}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="服务周期: " prop="name">
                  <span>{{financialInformation.cycle}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="服务开始月: " prop="name">
                  <span>{{financialInformation.start}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="剩余赠送月: " prop="name">
                  <span>{{financialInformation.giveAway}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="剩余服务月: " prop="name">
                  <span>{{financialInformation.remaining}}</span>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="当前报税期: " prop="name">
                  <span>{{financialInformation.currentTime}}</span>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-form-item label="付费周期: " prop="name">
                  <span>{{financialInformation.payCycle}}</span>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-collapse-item>
        <img class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="流程列表: " name="4">
          <el-table
            :data="processList"
            style="width: 100%">
            <el-table-column
              type="index">
            </el-table-column>
            <el-table-column
              prop="productName"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="orderNumber"
              label="订单编号">
            </el-table-column>
            <el-table-column
              prop="serviceStatus"
              label="服务状态">
            </el-table-column>
            <el-table-column
              prop="processProgress"
              label="流程进度">
            </el-table-column>
            <el-table-column
              prop="serviceAmount"
              label="服务金额">
            </el-table-column>
            <el-table-column
              prop="principal"
              label="负责人">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
                <template slot-scope="scope">
                  <el-button @click="handleViewAgentClick(scope.row)" type="text" size="small">查看</el-button>
                </template>
              <template>
                <el-button type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="add-products-model">
            <el-dialog title="代帐报表" width="40%">
              <div slot="footer" class="dialog-footer">
                <el-button type="primary">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
        <img v-show="isAgentReport" class="base-information-icon" src="../assets/images/newAccountPage/arrow.png" alt="">
        <el-collapse-item title="代帐收费: " name="5" v-show="isAgentReport">
          <el-table
            style="width: 100%">
            <el-table-column
              type="index">
            </el-table-column>
            <el-table-column
              prop="date"
              label="产品名称">
            </el-table-column>
            <el-table-column
              prop="name"
              label="订单编号">
            </el-table-column>
            <el-table-column
              prop="address"
              label="服务状态">
            </el-table-column>
            <el-table-column
              prop="address"
              label="流程进度">
            </el-table-column>
            <el-table-column
              prop="address"
              label="服务金额">
            </el-table-column>
            <el-table-column
              prop="address"
              label="负责人">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template>
                <el-button type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="add-products-model">
            <el-dialog title="代帐报表" width="40%">
              <div slot="footer" class="dialog-footer">
                <el-button type="primary">确认</el-button>
                <el-button>取消</el-button>
              </div>
            </el-dialog>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  metaInfo: {
    title: '客户详情'
  },
  data () {
    return {
      customerId: 0,
      activeNames: ['1'],
      account: {},
      idCardImages: [''],
      businessLicenseImages: [''],
      contractImages: [''],
      processList: []
    }
  },
  mounted () {
    this.customerId = this.$route.query.customerId
    this.getCustomer()
  },
  computed: {
    isAgentReport () {
      return this.processList.filter(process => process.productName === '代理记账').length > 0
    },
    ...mapState({
      account: state => state.customer.customer
    })
  },
  methods: {
    handleViewAgentClick (row) {
      this.$router.push({ path: '/agent-bookkeeping', query: { accountName: row.accountName } })
    },
    handleModifyViewAccount () {
      this.$router.push({ path: '/modify-account-detail', query: { customerId: this.customerId } })
    },
    // 写一个获取id 得方法
    getCustomer () {
      this.$store.dispatch('getCustomerById', this.customerId)
    }
  }
}
</script>

<style scoped>
.view-account{
  width: 94%;
  margin: 0 auto;
  margin-top: 40px;
  height: 150%;
}
.view-account-title{
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
.base-information-icon {
    margin-top: 13px;
    width: 17px;
    padding-right: 10px;
    float: left;
}
</style>
